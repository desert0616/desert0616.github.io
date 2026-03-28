(function () {
  'use strict';

  const THEME_STORAGE_KEY = 'theme';

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

  function initPublicationTickers() {
    if (!window.matchMedia('(hover: hover)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var mqWide = window.matchMedia('(min-width: 769px)');
    var speedPxPerSec = 70;
    var returnSpeedPxPerSec = 48;

    function stopItemTicker(item) {
      if (item._pubTickerRaf != null) {
        cancelAnimationFrame(item._pubTickerRaf);
        item._pubTickerRaf = null;
      }
      item.classList.remove('pub-item--ticker-reveal');
      item.querySelectorAll('.title, .authors').forEach(function (el) {
        el.scrollLeft = 0;
      });
    }

    function stopAllTickers() {
      document.querySelectorAll('.pub-item').forEach(stopItemTicker);
    }

    mqWide.addEventListener('change', function () {
      if (!mqWide.matches) stopAllTickers();
    });

    document.querySelectorAll('.pub-item').forEach(function (item) {
      function cancelTick() {
        if (item._pubTickerRaf != null) {
          cancelAnimationFrame(item._pubTickerRaf);
          item._pubTickerRaf = null;
        }
      }

      function resetLines() {
        item.querySelectorAll('.title, .authors').forEach(function (el) {
          el.scrollLeft = 0;
        });
      }

      item.addEventListener('mouseenter', function () {
        cancelTick();
        if (!mqWide.matches) {
          item.classList.remove('pub-item--ticker-reveal');
          return;
        }
        item.classList.add('pub-item--ticker-reveal');
        resetLines();

        var targets = [];
        item.querySelectorAll('.title, .authors').forEach(function (el) {
          var maxScroll = el.scrollWidth - el.clientWidth;
          if (maxScroll > 0) {
            targets.push({ el: el, max: maxScroll });
          }
        });

        if (!targets.length) return;

        var startTs = null;
        function frame(ts) {
          if (!mqWide.matches) {
            stopItemTicker(item);
            return;
          }
          if (startTs === null) startTs = ts;
          var elapsed = ts - startTs;
          var allDone = true;
          targets.forEach(function (tgt) {
            var durMs = (tgt.max / speedPxPerSec) * 1000;
            var p = durMs <= 0 ? 1 : Math.min(1, elapsed / durMs);
            tgt.el.scrollLeft = tgt.max * p;
            if (p < 1) allDone = false;
          });
          if (!allDone) {
            item._pubTickerRaf = requestAnimationFrame(frame);
          } else {
            item._pubTickerRaf = null;
          }
        }
        item._pubTickerRaf = requestAnimationFrame(frame);
      });

      item.addEventListener('mouseleave', function () {
        cancelTick();
        if (!mqWide.matches) {
          item.classList.remove('pub-item--ticker-reveal');
          resetLines();
          return;
        }

        var backTargets = [];
        item.querySelectorAll('.title, .authors').forEach(function (el) {
          var cur = el.scrollLeft;
          if (cur > 0) {
            backTargets.push({ el: el, start: cur });
          }
        });

        if (!backTargets.length) {
          item.classList.remove('pub-item--ticker-reveal');
          return;
        }

        var startTs = null;
        function rewind(ts) {
          if (!mqWide.matches) {
            stopItemTicker(item);
            return;
          }
          if (startTs === null) startTs = ts;
          var elapsed = ts - startTs;
          var allDone = true;
          backTargets.forEach(function (tgt) {
            var durMs = (tgt.start / returnSpeedPxPerSec) * 1000;
            var p = durMs <= 0 ? 1 : Math.min(1, elapsed / durMs);
            tgt.el.scrollLeft = tgt.start * (1 - p);
            if (p < 1) allDone = false;
          });
          if (!allDone) {
            item._pubTickerRaf = requestAnimationFrame(rewind);
          } else {
            item._pubTickerRaf = null;
            item.classList.remove('pub-item--ticker-reveal');
          }
        }
        item._pubTickerRaf = requestAnimationFrame(rewind);
      });
    });
  }

  function main() {
    initTheme();
    initPublicationTickers();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    main();
  }
})();
