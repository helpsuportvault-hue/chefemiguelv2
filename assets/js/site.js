(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = 'pt';
  try { if (localStorage.getItem('mcs-lang') === 'en') lang = 'en'; } catch (e) {}

  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var t = function (o) { return o[lang] || o.pt; };

  /* ── reveal on scroll ───────────────────────────────────────────────── */
  var io = ('IntersectionObserver' in window && !reduced) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -10% 0px', threshold: .05 }) : null;
  function watch(els) { els.forEach(function (el) { if (io) io.observe(el); else el.classList.add('is-in'); }); }

  /* ── renderers (re-run when the language changes) ───────────────────── */
  var filter = 'now';
  var arrow = '<svg class="row__go" viewBox="0 0 32 32" aria-hidden="true"><path d="M8 24L24 8M11 8h13v13"/></svg>';

  function renderProjects() {
    var list = PROJECTS.filter(function (p) { return p.group === filter; });
    $('#index').innerHTML = list.map(function (p, i) {
      var tag = p.link ? 'a href="' + p.link + '" target="_blank" rel="noopener"' : 'a href="#galeria" tabindex="0"';
      return '<li class="row" data-img="' + IMG + p.img + '"><' + tag + '>' +
        '<span class="row__n">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="row__name">' + esc(p.name) + '</span>' +
        '<span class="row__desc"><span class="row__place">' + esc(p.place) + '</span>' + esc(t(p)) + '</span>' +
        '<span class="row__year">' + p.year + '</span>' + arrow +
        '<span class="row__thumb"><img src="' + IMG + p.img + '" alt="" loading="lazy"></span>' +
        '</a></li>';
    }).join('');
    $$('#index .row').forEach(function (r, i) { r.style.animationDelay = (i * 70) + 'ms'; });
    watch($$('#index .row'));
  }

  function renderPath() {
    $('#path-track').innerHTML = TIMELINE.map(function (s) {
      var c = t(s), y = (lang === 'en' && s.yEn) ? s.yEn : s.y;
      return '<article class="stop' + (s.img ? ' stop--img' : '') + '">' +
        '<p class="stop__y">' + y + '</p><h3 class="stop__t">' + esc(c[0]) + '</h3><p class="stop__p">' + esc(c[1]) + '</p>' +
        (s.img ? '<div class="stop__img"><img src="' + IMG + s.img + '" alt="" loading="lazy"></div>' : '') +
        '</article>';
    }).join('');
  }

  function renderBooks() {
    $('#shelf').innerHTML = BOOKS.map(function (b) {
      return '<article class="book fade"><div class="book__cover"><img src="' + IMG + b.img + '" alt="Capa: ' + esc(b.title) + '" loading="lazy"></div>' +
        '<p class="book__y">' + b.year + '</p><h3 class="book__t">' + esc(b.title) + '</h3><p class="book__p">' + esc(t(b)) + '</p></article>';
    }).join('');
    watch($$('#shelf .book'));
  }

  function renderPress() {
    var one = PRESS.map(function (p, i) {
      return '<button class="clip" type="button" data-press="' + i + '"><img src="' + IMG + p[0] + '" alt="Recorte: ' + esc(p[1]) + '" loading="lazy"><span>' + esc(p[1]) + '</span></button>';
    }).join('');
    $('#marquee').innerHTML = one + one.replace(/<button /g, '<button aria-hidden="true" tabindex="-1" ');
  }

  function renderGallery() {
    $('#mosaic').innerHTML = GALLERY.map(function (g, i) {
      var film = !!g.video;
      return '<button class="tile tile--' + g.size + (film ? ' tile--film' : '') + ' fade" style="--i:' + i + '" type="button" data-gal="' + i + '">' +
        '<img src="' + IMG + g.img + '" alt="' + esc(t(g)) + '" loading="lazy">' +
        (film ? '<span class="tile__play"><i><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></i></span>' : '') +
        '<span class="tile__cap">' + esc(t(g)) + '</span></button>';
    }).join('');
    watch($$('#mosaic .tile'));
  }

  /* ── i18n: PT lives in the markup, EN in data.js ────────────────────── */
  var pt = {};
  $$('[data-i18n]').forEach(function (el) { pt[el.dataset.i18n] = el.innerHTML; });

  function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (el) {
      var k = el.dataset.i18n;
      var v = lang === 'en' ? I18N.en[k] : pt[k];
      if (v != null) el.innerHTML = v;
    });
    $$('#lang span').forEach(function (s, i) { s.classList.toggle('is-on', (i === 0) === (lang === 'pt')); });
    splitStatement();
    renderProjects(); renderPath(); renderBooks(); renderPress(); renderGallery();
    renderQ2();
    sizePath();
  }
  $('#lang').addEventListener('click', function () {
    lang = lang === 'pt' ? 'en' : 'pt';
    try { localStorage.setItem('mcs-lang', lang); } catch (e) {}
    applyLang();
  });

  /* ── the statement lights up word by word ───────────────────────────── */
  function splitStatement() {
    $$('[data-split]').forEach(function (el) {
      el.innerHTML = el.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w">' + w + '</span>'; }).join(' ');
    });
  }
  function lightWords() {
    $$('[data-split]').forEach(function (el) {
      var r = el.getBoundingClientRect(), vh = innerHeight;
      var p = Math.min(1, Math.max(0, (vh * .85 - r.top) / (r.height + vh * .35)));
      var ws = $$('.w', el), n = Math.round(p * ws.length);
      ws.forEach(function (w, i) { w.classList.toggle('on', i < n); });
    });
  }

  /* ── hero: a reel of his kitchen, or a film if one is dropped in ────── */
  var reel = $('#reel'), frames = $$('#reel img'), cur = 0, reelTimer;
  function nextFrame() {
    frames[cur].classList.remove('is-on');
    cur = (cur + 1) % frames.length;
    frames[cur].classList.add('is-on');
    $('#reel-n').textContent = String(cur + 1).padStart(2, '0');
  }
  if (!reduced) reelTimer = setInterval(nextFrame, 5200);

  var vid = $('#hero-video');
  vid.addEventListener('loadeddata', function () {
    reel.classList.add('has-video'); clearInterval(reelTimer);
    $('.hero__count').style.visibility = 'hidden';
    vid.play().catch(function () {});
  });
  vid.src = 'assets/video/hero.mp4';
  vid.preload = 'auto';
  vid.load();

  requestAnimationFrame(function () {
    setTimeout(function () { $$('.hero .rise, .hero .fade').forEach(function (el, i) { setTimeout(function () { el.classList.add('is-in'); }, i * 140); }); }, 150);
  });

  /* ── bar: solid past the hero, dark over dark bands, current link ───── */
  var bar = $('#bar'), hero = $('.hero');
  var darks = $$('.projects, .contact, .foot');
  var links = $$('.bar__nav a');
  function onScroll() {
    bar.classList.toggle('is-solid', hero.getBoundingClientRect().bottom <= 70);
    var y = 40;
    bar.classList.toggle('is-dark', darks.some(function (d) { var r = d.getBoundingClientRect(); return r.top <= y && r.bottom > y; }));
    var here = null;
    links.forEach(function (a) { var s = $(a.getAttribute('href')); if (s && s.getBoundingClientRect().top <= innerHeight * .4) here = a; });
    links.forEach(function (a) { a.classList.toggle('is-here', a === here); });
    lightWords();
    movePath();
  }

  /* ── percurso: vertical scroll drives a horizontal track ────────────── */
  var path = $('.path'), track = $('#path-track'), prog = $('#path-progress');
  var horizontal = false;
  function sizePath() {
    horizontal = !reduced && innerWidth > 860;
    path.classList.toggle('is-static', !horizontal);
    path.style.height = horizontal ? (track.scrollWidth - innerWidth + innerHeight * 1.15) + 'px' : '';
    movePath();
  }
  function movePath() {
    if (!horizontal) return;
    var r = path.getBoundingClientRect();
    var span = path.offsetHeight - innerHeight;
    var p = Math.min(1, Math.max(0, -r.top / span));
    track.style.transform = 'translate3d(' + (-p * (track.scrollWidth - innerWidth)) + 'px,0,0)';
    prog.style.transform = 'scaleX(' + p + ')';
  }

  /* ── project index: the image follows the cursor ────────────────────── */
  var plate = $('#hover-plate'), plateImg = $('img', plate);
  var mx = 0, my = 0, px = 0, py = 0, raf = null;
  function follow() {
    px += (mx - px) * .14; py += (my - py) * .14;
    plate.style.left = px + 'px'; plate.style.top = py + 'px';
    raf = plate.classList.contains('on') ? requestAnimationFrame(follow) : null;
  }
  $('#index').addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    var row = e.target.closest('.row');
    if (!row) return;
    var src = row.dataset.img;
    if (plateImg.getAttribute('src') !== src) plateImg.src = src;
    if (!plate.classList.contains('on')) { px = mx; py = my; plate.classList.add('on'); }
    if (!raf) raf = requestAnimationFrame(follow);
  });
  $('#index').addEventListener('mouseleave', function () { plate.classList.remove('on'); });
  $$('.tab').forEach(function (b) {
    b.addEventListener('click', function () {
      filter = b.dataset.filter;
      $$('.tab').forEach(function (x) { var on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-selected', on); });
      renderProjects();
    });
  });

  /* ── counters ───────────────────────────────────────────────────────── */
  if (io) {
    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        var el = e.target, to = +el.dataset.to, t0 = performance.now();
        (function tick(now) {
          var k = Math.min(1, (now - t0) / 1400), v = Math.round(to * (1 - Math.pow(1 - k, 3)));
          el.textContent = v; if (k < 1) requestAnimationFrame(tick);
        })(t0);
      });
    }, { threshold: .6 });
    $$('.count').forEach(function (c) { c.textContent = '0'; cio.observe(c); });
  }

  /* ── contact questionnaire ──────────────────────────────────────────── */
  var quiz = $('#quiz'), step = 1, motivo = 'evento';
  function renderQ2() {
    var q = Q2[motivo];
    $('#q2-label').innerHTML = lang === 'en' ? I18N.en['q2.' + motivo] : q.label.pt;
    $('#q2-choices').innerHTML = q[lang].map(function (o) {
      return '<label class="choice"><input type="radio" name="detalhe_tipo" value="' + esc(o) + '"><span>' + esc(o) + '</span></label>';
    }).join('');
  }
  function go(n) {
    step = n;
    $$('.quiz__step', quiz).forEach(function (s) { s.classList.toggle('is-on', +s.dataset.step === n); });
    $$('.quiz__steps i', quiz).forEach(function (d, i) { d.classList.toggle('is-on', i < n); });
    var first = $('.quiz__step.is-on input, .quiz__step.is-on textarea', quiz);
    if (first && n > 1) first.focus({ preventScroll: true });
  }
  quiz.addEventListener('click', function (e) {
    if (e.target.name === 'motivo') { motivo = e.target.value; renderQ2(); setTimeout(function () { go(2); }, 280); }
    if (e.target.closest('[data-back]')) go(step - 1);
    if (e.target.closest('[data-next]')) go(step + 1);
  });
  quiz.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true;
    ['nome', 'email'].forEach(function (n) {
      var f = quiz.elements[n], bad = !f.value.trim() || (n === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
      f.closest('.field').classList.toggle('bad', bad); if (bad) ok = false;
    });
    var r = quiz.elements.rgpd; r.closest('.check').classList.toggle('bad', !r.checked); if (!r.checked) ok = false;
    if (!ok) return;
    // Demo: nothing is sent. In production this posts to the server form handler.
    $$('.quiz__step, .quiz__steps', quiz).forEach(function (s) { s.style.display = 'none'; });
    $('.quiz__done', quiz).hidden = false;
  });

  /* ── lightbox ───────────────────────────────────────────────────────── */
  var lb = $('#lb'), lbFrame = $('#lb-frame'), lbCap = $('#lb-cap'), items = [], at = 0, lastFocus;
  function show() {
    var it = items[at];
    lb.classList.toggle('is-film', !!it.video);
    lbFrame.innerHTML = it.video
      ? '<iframe src="https://www.youtube-nocookie.com/embed/' + it.video + '?autoplay=1&rel=0" title="' + esc(it.cap) + '" allow="autoplay; fullscreen; picture-in-picture"></iframe>'
      : '<img src="' + it.src + '" alt="' + esc(it.cap) + '">';
    lbCap.textContent = it.cap;
  }
  function open(list, i) {
    items = list; at = i; lastFocus = document.activeElement;
    lb.hidden = false; document.body.style.overflow = 'hidden'; show(); $('#lb-close').focus();
  }
  function close() { lb.hidden = true; lbFrame.innerHTML = ''; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
  function step2(d) { if (items.length < 2 || items[at].video) return; do { at = (at + d + items.length) % items.length; } while (items[at].video); show(); }
  $('#lb-close').addEventListener('click', close);
  $('#lb-prev').addEventListener('click', function () { step2(-1); });
  $('#lb-next').addEventListener('click', function () { step2(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target === lbFrame) close(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step2(-1);
    if (e.key === 'ArrowRight') step2(1);
  });

  document.addEventListener('click', function (e) {
    var g = e.target.closest('[data-gal]'), p = e.target.closest('[data-press]');
    if (g) {
      open(GALLERY.map(function (x) { return { src: IMG + x.img, cap: t(x), video: x.video }; }), +g.dataset.gal);
    } else if (p) {
      open(PRESS.map(function (x) { return { src: IMG + x[0], cap: x[1] }; }), +p.dataset.press);
    }
  });
  $('#play-film').addEventListener('click', function () {
    open([{ video: 'xBet9sDm69s', cap: 'Miguel Castro e Silva' }], 0);
  });

  /* ── mobile drawer ──────────────────────────────────────────────────── */
  var burger = $('#burger'), drawer = $('#drawer');
  function setDrawer(on) {
    drawer.hidden = !on; burger.setAttribute('aria-expanded', on);
    bar.classList.toggle('is-dark', on); bar.classList.toggle('is-solid', on || hero.getBoundingClientRect().bottom <= 70);
    document.body.style.overflow = on ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setDrawer(drawer.hidden); });
  drawer.addEventListener('click', function (e) { if (e.target.closest('a')) setDrawer(false); });

  /* ── boot ───────────────────────────────────────────────────────────── */
  applyLang();
  watch($$('main .fade:not(.hero .fade), .plate'));
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', sizePath);
  addEventListener('load', sizePath);
  onScroll();
})();
