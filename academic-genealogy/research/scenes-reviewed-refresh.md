# Background refresh — 2026-09-09

Generated eight replacement scenes using built-in imagegen, based on the corrected metadata and the existing known-for source review. This is a visual update, not a new certification of historical facts or genealogy edges.

| Person | New visual emphasis |
| --- | --- |
| Aegidius Strauch II | Chronology handbook, astronomy, reckoning historical time; replaces the scene for Strauch I. |
| Johann Pasch | Philological comparison and commentary; removes celestial conjunction as the main achievement. |
| Johann Andreas Planer | Snow, frost and scholarly inquiry, illustrating the De nive disputations without claiming discovery of snow-crystal structure. |
| Abu Abdallah al-Natili | Illustrated materia medica, comparison of texts and medicinal plants; revision, not first translation. |
| Kamal al-Din Ibn Yunus | Compass-and-straightedge constructions and commentary; not invention of Abu al-Wafa's underlying work. |
| Sharaf al-Din al-Masudi al-Marwazi | Philosophical commentary and theoretical astronomy together. |
| Omar Khayyam | Geometric algebra and calendar work take precedence over uncertain poetic attribution. |
| Bonifazius Erasmi | Planetary calendar compilation in a print-production setting; not authorship of Cranach's woodcut. |

Full original prompts: `scenes-reviewed-prompts.mjs`. Generation provenance, output paths and the Strauch refinement prompt: `scenes-reviewed-generation.json`.

The eight deployment JPEGs are under `assets/genealogy-scenes/`, named after the person and subject. Approximately 2.2 MiB in total, each 240–320 KiB. They use the existing full-height, right-aligned background system on both mobile and desktop. No date captions were restored.

All prior deployed images remain untouched. Generated source PNGs and the discarded first Strauch draft are archived at `/Users/shamo/Documents/helper/assets/genealogy-scenes/metadata-refresh-2026-09-09/`; original generator outputs remain in the recorded Codex directory. PNG-to-progressive-JPEG export does not crop or alter composition. The Strauch refinement removes spurious lettering from its first draft. These are interpretive artworks, not facsimiles of surviving books, instruments or buildings; architectural scenery should not be used to identify an exact historical place or date.

Existing backgrounds whose changes concerned only dates, degree types or historical institution names were retained where the depicted work remained appropriate. Lu Hongjun's approved background was not changed.

Validation: all eight scenes were selected in local Chromium at 390 × 844 and 1600 × 1000. The expected local image was active in all 16 checks; no runtime exceptions, horizontal document overflow, or removed date-caption elements were found. Representative mobile/desktop screenshots were visually inspected. `tests/metadata.mjs` additionally checks all 68 local scene paths and the eight new mappings and size limits. No commit or push was performed.

## Genealogy evidence remains a separate issue

The 73 retained edges have **not all been independently verified edge by edge**. A source about a person or their work does not substantiate each teacher–student edge. Early records may concern a disputation's presiding scholar, a teacher, or an intellectual influence, rather than doctoral supervision. The unsupported Strauch–Zapf bridge remains removed. Other early links, including Novara–Pacioli, need further source-critical review. None of these images establishes an academic relationship.

Subsequent source-presence audit: the user then accepted explicit published references without requiring independent primary proof. All 73 current edges now have checked references; see [the edge-by-edge index](edge-sources-review-2026-09-09.md). This establishes citation coverage, not uniform historical certainty. The earlier paragraph concerns independent historical validation, which remains a different standard.
