#!/usr/bin/env python3

from __future__ import annotations

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DATA_PATH = ROOT / "data.json"
TEMPLATE_PATH = ROOT / "index.template.html"
OUT_PATH = ROOT / "index.html"

APP_BASE = 3

DOWNLOAD_SVG = (
    '<svg class="pub-btn-icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" '
    'viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" '
    'stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>'
)
WEBSITE_SVG = (
    '<svg class="pub-btn-icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" '
    'viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" '
    'stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 '
    '15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>'
)


def ind(level: int) -> str:
    return "  " * level


def esc(s: object) -> str:
    return html.escape(str(s), quote=True)


def format_authors(authors_str: str) -> str:
    escaped = esc(authors_str)
    return escaped.replace("Mo Sha", '<strong class="author-self">Mo Sha</strong>')


def render_profile(profile: dict, base: int = APP_BASE) -> str:
    b, b1, b2 = ind(base), ind(base + 1), ind(base + 2)
    name = esc(profile["name"])
    avatar = esc(profile.get("avatar", ""))
    affiliation = profile.get("affiliation") or ""
    aff_line = f"{b2}<p class=\"affiliation\">{esc(affiliation)}</p>" if affiliation else ""
    intro = profile.get("introHtml")
    if intro is None and profile.get("intro"):
        intro = esc(profile["intro"])
    elif intro is None:
        intro = ""
    lines = [
        f"{b}<header class=\"hero\">",
        f'{b1}<img class="avatar" src="{avatar}" alt="{name}" />',
        f"{b1}<div class=\"hero-text\">",
        f"{b2}<h1>{name}</h1>",
    ]
    if aff_line:
        lines.append(aff_line)
    lines.extend(
        [
            f"{b2}<p class=\"intro\">{intro}</p>",
            f"{b1}</div>",
            f"{b}</header>",
        ]
    )
    return "\n".join(lines)


def render_profile_links(profile: dict) -> str:
    links = profile.get("links") or []
    if not links:
        return ""
    parts = []
    for link in links:
        parts.append(
            '<span class="pub-bracket">['
            f'<a href="{esc(link["href"])}" target="_blank" rel="noopener">'
            f'{esc(link["label"])}</a>]</span>'
        )
    return "".join(parts)


def render_publication_item(item: dict, base: int) -> str:
    b, b1, b2, b3, b4 = ind(base), ind(base + 1), ind(base + 2), ind(base + 3), ind(base + 4)
    display_venue = item["venue"]
    pdf_fn = item.get("pdf_filename") or ""
    pdf_href = f"pdf/{pdf_fn}" if pdf_fn else (item.get("pdfUrl") or "#")
    has_track = bool(item.get("track"))
    info_class = "pub-btn-info" + ("" if has_track else " pub-btn-info--no-track")
    has_pdf_file = bool(pdf_fn)
    doi = (item.get("doi") or "").strip()
    has_doi = bool(doi)
    url = item.get("url")
    has_url = bool(url)
    has_second_link = has_doi or has_url
    second_label = "DOI" if has_doi else "URL"
    second_href = f"https://doi.org/{doi}" if has_doi else (url or "#")
    second_title = "Open DOI" if has_doi else "Open URL"
    no_pdf_no_link = not has_pdf_file and not has_second_link

    if has_pdf_file:
        pdf_btn = (
            f'<a class="pub-btn-pdf" href="{esc(pdf_href)}" target="_blank" rel="noopener" '
            f'title="View PDF">{DOWNLOAD_SVG}<span class="pub-btn-label">PDF</span></a>'
        )
    else:
        pdf_btn = (
            '<span class="pub-btn-pdf pub-btn-pdf--empty" title="PDF not available">'
            f"{DOWNLOAD_SVG}<span class=\"pub-btn-label\">PDF</span></span>"
        )

    if has_second_link:
        doi_btn = (
            f'<a class="pub-btn-doi" href="{esc(second_href)}" target="_blank" rel="noopener" '
            f'title="{esc(second_title)}">{WEBSITE_SVG}'
            f'<span class="pub-btn-label">{esc(second_label)}</span></a>'
        )
    else:
        doi_btn = (
            '<span class="pub-btn-doi pub-btn-doi--empty" title="Link not available">'
            f'{WEBSITE_SVG}<span class="pub-btn-label">URL</span></span>'
        )

    btn_class = "pub-btn" + (" pub-btn--to-appear" if no_pdf_no_link else "")

    btn_inner = [f"{b3}{pdf_btn}", f"{b3}{doi_btn}"]
    if no_pdf_no_link:
        btn_inner.append(f'{b3}<span class="pub-btn-to-appear">to appear</span>')
    info_lines = [
        f'{b3}<span class="{info_class}">',
        f'{b4}<span class="pub-btn-venue">{esc(display_venue)}</span>',
        f'{b4}<span class="pub-btn-year">{esc(str(item["year"]))}</span>',
    ]
    if has_track:
        info_lines.append(f'{b4}<span class="pub-btn-track">{esc(item["track"])}</span>')
    info_lines.append(f"{b3}</span>")

    lines = [
        f'{b}<div class="pub-item">',
        f'{b1}<div class="pub-venue-col">',
        f'{b2}<div class="{btn_class}">',
        *btn_inner,
        *info_lines,
        f"{b2}</div>",
        f"{b1}</div>",
        f'{b1}<div class="pub-body">',
        f'{b2}<span class="title">{esc(item["title"])}</span>',
        f'{b2}<div class="authors">{format_authors(item["authors"])}</div>',
        f"{b1}</div>",
        f"{b}</div>",
    ]
    return "\n".join(lines)


def render_publications(pub: dict, profile: dict, base: int = APP_BASE) -> str:
    b, b1, b2 = ind(base), ind(base + 1), ind(base + 2)
    items = pub.get("items") or []
    body = "\n".join(render_publication_item(i, base + 1) for i in items)
    links_html = render_profile_links(profile)
    links_block = f'{b2}<div class="links pub-links">{links_html}</div>' if links_html else ""
    head_lines = [
        f'{b}<section id="publications">',
        f'{b1}<div class="pub-section-head">',
        f"{b2}<h2>Selected Publications</h2>",
    ]
    if links_block:
        head_lines.append(links_block)
    head_lines.append(f"{b1}</div>")
    return "\n".join(head_lines) + "\n" + body + "\n" + f"{b}</section>"


def render_service(service: dict, base: int = APP_BASE) -> str:
    b, b1, b2, b3 = ind(base), ind(base + 1), ind(base + 2), ind(base + 3)
    body_html = ""
    conf = service.get("conference")
    jour = service.get("journal")
    if conf or jour:
        b4 = ind(base + 4)

        def render_list(items: list | None) -> str:
            if not items:
                return ""
            lis = "\n".join(f"{b4}<li>{esc(x)}</li>" for x in items)
            return f'{b3}<ul class="service-items">\n{lis}\n{b3}</ul>'

        body_html = "\n".join(
            [
                f'{b1}<div class="service-columns">',
                f'{b2}<div class="service-col">',
                f'{b3}<h3 class="service-col-title">Conference reviewer</h3>',
                render_list(conf),
                f"{b2}</div>",
                f'{b2}<div class="service-col">',
                f'{b3}<h3 class="service-col-title">Journal reviewer</h3>',
                render_list(jour),
                f"{b2}</div>",
                f"{b1}</div>",
            ]
        )
    elif service.get("description"):
        paragraphs = re.split(r"\n\n+", service["description"])
        paras = "\n".join(
            f'{b1}<p class="service-description">{esc(p.strip())}</p>'
            for p in paragraphs
            if p.strip()
        )
        body_html = paras
    elif service.get("items"):
        lis = []
        for it in service["items"]:
            lis.append(
                f"{b2}<li>"
                f'<span class="service-role">{esc(it["role"])}</span>'
                f'<span class="service-venue">{esc(it["venue"])}</span>'
                f'<span class="service-year">{esc(it["year"])}</span>'
                "</li>"
            )
        body_html = f'{b1}<ul class="service-list">\n' + "\n".join(lis) + f"\n{b1}</ul>"
        if service.get("note"):
            body_html += f'\n{b1}<p class="service-note">{esc(service["note"])}</p>'

    return "\n".join(
        [
            f'{b}<section id="service">',
            f"{b1}<h2>Professional Service</h2>",
            body_html,
            f"{b}</section>",
        ]
    )


def render_footer(data: dict, base: int = APP_BASE) -> str:
    b, b1 = ind(base), ind(base + 1)
    site = data.get("site") or {}
    footer_text = site.get("footer") or ""
    return "\n".join(
        [
            f"{b}<footer>",
            f"{b1}<p>{esc(footer_text)}</p>",
            f"{b}</footer>",
        ]
    )


def render_app(data: dict) -> str:
    parts = [
        render_profile(data["profile"]),
        render_publications(data["publications"], data["profile"]),
        render_service(data.get("service") or {}),
        render_footer(data),
    ]
    return "\n".join(parts)


def main() -> None:
    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    site = data.get("site") or {}
    page_title = site.get("title") or "Research"
    app_html = render_app(data)
    template = TEMPLATE_PATH.read_text(encoding="utf-8")
    out = template.replace("__PAGE_TITLE__", esc(page_title)).replace("__APP_HTML__", app_html)
    OUT_PATH.write_text(out, encoding="utf-8")
    print(f"Wrote {OUT_PATH}")


if __name__ == "__main__":
    main()
