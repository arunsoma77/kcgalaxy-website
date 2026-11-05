// KC Galaxy — scroll reveal + animated counters
(function () {
  // Scroll reveal: tag blocks, fade them up as they enter the viewport
  var blocks = document.querySelectorAll('.section, .exp-card, .loc-card, .step, .exec, .staff-card, .counter');
  blocks.forEach(function (el, i) {
    el.classList.add('rv');
    el.style.transitionDelay = (i % 3) * 80 + 'ms';
  });
  if ('IntersectionObserver' in window) {
    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    blocks.forEach(function (el) { rio.observe(el); });
  } else {
    blocks.forEach(function (el) { el.classList.add('in'); });
  }

  // Header shrink on scroll + back-to-top button
  var header = document.querySelector('.site-header');
  var toTop = document.getElementById('toTop');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('scrolled', y > 40);
    if (toTop) toTop.classList.toggle('show', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // Locations portfolio filter
  var fbtns = document.querySelectorAll('.filter-btn');
  if (fbtns.length) {
    var locSecs = document.querySelectorAll('.loc-section');
    var featSec = document.querySelector('.featured-sec');
    fbtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        fbtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.getAttribute('data-filter');
        locSecs.forEach(function (s) {
          s.style.display = (f === 'all' || s.getAttribute('data-cat') === f) ? '' : 'none';
        });
        if (featSec) featSec.style.display = (f === 'all' || f === 'hotels') ? '' : 'none';
      });
    });
  }

  // Animated counters (homepage)
  var nums = document.querySelectorAll('.counter .num');
  if (!nums.length) return;
  function animate(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = prefix + Math.round(target * p).toLocaleString('en-US') + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var seen = new WeakSet();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !seen.has(e.target)) { seen.add(e.target); animate(e.target); }
      });
    }, { threshold: 0.4 });
    nums.forEach(function (n) { io.observe(n); });
  } else {
    nums.forEach(animate);
  }
})();
