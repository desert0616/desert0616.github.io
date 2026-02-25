(function () {
  'use strict';

  const THEME_STORAGE_KEY = 'theme';

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function formatAuthors(authorsStr) {
    const escaped = escapeHtml(authorsStr);
    return escaped.replace(/Mo Sha/g, '<strong class="author-self">Mo Sha</strong>');
  }

  function renderProfile(profile) {
    return (
      '<header class="hero">' +
      '<img class="avatar" src="' + escapeHtml(profile.avatar) + '" alt="' + escapeHtml(profile.name) + '" />' +
      '<div class="hero-text">' +
      '<h1>' + escapeHtml(profile.name) + '</h1>' +
      (profile.affiliation ? '<p class="affiliation">' + escapeHtml(profile.affiliation) + '</p>' : '') +
      '<p class="intro">' + (profile.introHtml || (profile.intro ? escapeHtml(profile.intro) : '')) + '</p>' +
      '</div>' +
      '</header>'
    );
  }

  function renderProfileLinks(profile) {
    if (!profile.links || !profile.links.length) return '';
    return profile.links
      .map(function (link) {
        return '[' + '<a href="' + escapeHtml(link.href) + '" target="_blank" rel="noopener">' + escapeHtml(link.label) + '</a>' + ']';
      })
      .join('');
  }

  var downloadSvg = '<svg class="pub-btn-icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>';
  var websiteSvg = '<svg class="pub-btn-icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>';

  function renderPublicationItem(item) {
    const displayVenue = item.venue;
    const pdfHref = item.pdf_filename ? 'pdf/' + item.pdf_filename : (item.pdfUrl || '#');
    const hasTrack = !!item.track;
    const infoClass = 'pub-btn-info' + (hasTrack ? '' : ' pub-btn-info--no-track');
    const trackHtml = hasTrack ? '<span class="pub-btn-track">' + escapeHtml(item.track) + '</span>' : '';
    const hasPdfFile = !!item.pdf_filename;
    const hasDoi = !!item.doi;
    const hasUrl = !!item.url;
    const hasSecondLink = hasDoi || hasUrl;
    const secondLabel = hasDoi ? 'DOI' : 'URL';
    const secondHref = hasDoi ? ('https://doi.org/' + item.doi) : (item.url || '#');
    const secondTitle = hasDoi ? 'Open DOI' : 'Open URL';
    const noPdfNoLink = !hasPdfFile && !hasSecondLink;
    const pdfBtn = hasPdfFile
      ? '<a class="pub-btn-pdf" href="' + escapeHtml(pdfHref) + '" target="_blank" rel="noopener" title="View PDF">' + downloadSvg + '<span class="pub-btn-label">PDF</span></a>'
      : '<span class="pub-btn-pdf pub-btn-pdf--empty" title="PDF not available">' + downloadSvg + '<span class="pub-btn-label">PDF</span></span>';
    const doiBtn = hasSecondLink
      ? '<a class="pub-btn-doi" href="' + escapeHtml(secondHref) + '" target="_blank" rel="noopener" title="' + escapeHtml(secondTitle) + '">' + websiteSvg + '<span class="pub-btn-label">' + escapeHtml(secondLabel) + '</span></a>'
      : '<span class="pub-btn-doi pub-btn-doi--empty" title="Link not available">' + websiteSvg + '<span class="pub-btn-label">URL</span></span>';
    const toAppearHtml = noPdfNoLink ? '<span class="pub-btn-to-appear">to appear</span>' : '';
    const btnClass = 'pub-btn' + (noPdfNoLink ? ' pub-btn--to-appear' : '');
    return (
      '<div class="pub-item">' +
      '<div class="pub-venue-col">' +
      '<div class="' + btnClass + '">' +
      pdfBtn +
      doiBtn +
      toAppearHtml +
      '<span class="' + infoClass + '">' +
      '<span class="pub-btn-venue">' + escapeHtml(displayVenue) + '</span>' +
      '<span class="pub-btn-year">' + escapeHtml(String(item.year)) + '</span>' +
      trackHtml +
      '</span>' +
      '</div>' +
      '</div>' +
      '<div class="pub-body">' +
      '<span class="title">' + escapeHtml(item.title) + '</span>' +
      '<div class="authors">' + formatAuthors(item.authors) + '</div>' +
      '</div>' +
      '</div>'
    );
  }

  function renderPublications(pub, profile) {
    let body = '';
    (pub.items || []).forEach(function (item) {
      body += renderPublicationItem(item);
    });
    const linksHtml = profile && profile.links ? renderProfileLinks(profile) : '';
    const linksBlock = linksHtml ? '<div class="links pub-links">' + linksHtml + '</div>' : '';

    return (
      '<section id="publications">' +
      '<div class="pub-section-head">' +
      '<h2>Selected Publications</h2>' +
      linksBlock +
      '</div>' +
      body +
      '</section>'
    );
  }

  function renderService(service) {
    let bodyHtml = '';
    if (service.conference || service.journal) {
      const renderList = function (items) {
        if (!items || !items.length) return '';
        return (
          '<ul class="service-items">' +
          items.map(function (item) {
            return '<li>' + escapeHtml(item) + '</li>';
          }).join('') +
          '</ul>'
        );
      };
      bodyHtml =
        '<div class="service-columns">' +
        '<div class="service-col">' +
        '<h3 class="service-col-title">Conference reviewer</h3>' +
        renderList(service.conference) +
        '</div>' +
        '<div class="service-col">' +
        '<h3 class="service-col-title">Journal reviewer</h3>' +
        renderList(service.journal) +
        '</div>' +
        '</div>';
    } else if (service.description) {
      const paragraphs = service.description.split(/\n\n+/);
      bodyHtml = paragraphs
        .map(function (p) {
          return '<p class="service-description">' + escapeHtml(p.trim()) + '</p>';
        })
        .join('');
    } else if (service.items && service.items.length) {
      bodyHtml =
        '<ul class="service-list">' +
        service.items
          .map(function (item) {
            return (
              '<li>' +
              '<span class="service-role">' + escapeHtml(item.role) + '</span>' +
              '<span class="service-venue">' + escapeHtml(item.venue) + '</span>' +
              '<span class="service-year">' + escapeHtml(item.year) + '</span>' +
              '</li>'
            );
          })
          .join('') +
        '</ul>';
      if (service.note) {
        bodyHtml += '<p class="service-note">' + escapeHtml(service.note) + '</p>';
      }
    }
    return (
      '<section id="service">' +
      '<h2>Professional Service</h2>' +
      bodyHtml +
      '</section>'
    );
  }

  function renderFooter(data) {
    const footerText = (data.site && data.site.footer) || '© ' + new Date().getFullYear() + ' All rights reserved.';
    return (
      '<footer>' +
      '<p>' + escapeHtml(footerText) + '</p>' +
      '</footer>'
    );
  }

  function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const sun = document.querySelector('.theme-toggle .sun');
    const moon = document.querySelector('.theme-toggle .moon');

    function setTheme(dark) {
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
      if (sun && moon) {
        sun.style.display = dark ? 'none' : 'block';
        moon.style.display = dark ? 'block' : 'none';
      }
      try { localStorage.setItem(THEME_STORAGE_KEY, dark ? 'dark' : 'light'); } catch (e) {}
    }

    let dark = false;
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      dark = stored === 'dark' || (stored !== 'light' && prefersDark);
    } catch (e) {
      dark = prefersDark;
    }
    setTheme(dark);

    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        dark = document.documentElement.getAttribute('data-theme') === 'dark';
        setTheme(!dark);
      });
    }
  }

  function render(data) {
    document.title = data.site.title || 'Research';
    var container = document.getElementById('app');
    if (!container) return;
    container.innerHTML =
      renderProfile(data.profile) +
      renderPublications(data.publications, data.profile) +
      renderService(data.service) +
      renderFooter(data);
  }

  function main() {
    initTheme();
    if (typeof window.SITE_DATA !== 'undefined') {
      render(window.SITE_DATA);
    } else {
      fetch('data.json')
        .then(function (res) { return res.json(); })
        .then(render)
        .catch(function (err) {
          var app = document.getElementById('app');
          if (app) app.innerHTML = '<p style="color: var(--text-muted);">Failed to load content.</p>';
          console.error(err);
        });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    main();
  }
})();
