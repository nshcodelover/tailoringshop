'use client';
import { useEffect } from 'react';

export default function ClientEffects() {
  useEffect(() => {

    /* ── Botanical Embroidery Motion ── */
    function setupAnim(el, delay, dur) {
      let len;
      try {
        len = el.tagName.toLowerCase() === 'circle'
          ? 2 * Math.PI * parseFloat(el.getAttribute('r'))
          : el.getTotalLength();
      } catch(e) { len = 200; }
      el.style.strokeDasharray  = len;
      el.style.strokeDashoffset = len;
      el.style.animation = `drawThread ${dur}s ease-out ${delay}s forwards`;
    }
    document.querySelectorAll('.thread-path').forEach(p => {
      try { const l = p.getTotalLength(); p.style.strokeDasharray = l; p.style.strokeDashoffset = l; } catch(e) {}
    });
    document.querySelectorAll('.e-outer').forEach((p,i) => setupAnim(p, 3.5+i*0.18, 1.0));
    document.querySelectorAll('.e-inner').forEach((p,i) => setupAnim(p, 5.5+i*0.14, 0.8));
    document.querySelectorAll('.e-ring, .e-ring-inner').forEach((p,i) => setupAnim(p, 7.2+i*0.4, 1.2));
    document.querySelectorAll('.e-leaf').forEach(p => setupAnim(p, parseFloat(p.dataset.delay||'4'), 0.9));
    document.querySelectorAll('.e-corner').forEach(p => setupAnim(p, parseFloat(p.dataset.delay||'8.5'), 1.2));

    /* ── Page Loader ── */
    const loaderTimer = setTimeout(() => {
      const loader = document.getElementById('pageLoader');
      if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => { loader.style.display = 'none'; }, 650);
      }
    }, 1900);

    /* ── Scroll Progress ── */
    const progressBar = document.getElementById('progressBar');
    const onScroll = () => {
      if (progressBar) {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (window.scrollY / total * 100) + '%';
      }
      navbar?.classList.toggle('scrolled', window.scrollY > 40);
      backToTop?.classList.toggle('visible', window.scrollY > 450);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ── Navbar ── */
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const onToggle = () => {
      const open = document.body.classList.toggle('nav-open');
      navToggle?.setAttribute('aria-expanded', open);
    };
    navToggle?.addEventListener('click', onToggle);
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        navToggle?.setAttribute('aria-expanded', 'false');
      });
    });

    /* ── Custom Cursor ── */
    const cursorDot  = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    let cursorRaf;
    if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
      let dotX = 0, dotY = 0, ringX = 0, ringY = 0;
      const onMove = e => {
        dotX = e.clientX; dotY = e.clientY;
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top  = dotY + 'px';
      };
      window.addEventListener('mousemove', onMove, { passive: true });
      const animRing = () => {
        ringX += (dotX - ringX) * 0.14;
        ringY += (dotY - ringY) * 0.14;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top  = ringY + 'px';
        cursorRaf = requestAnimationFrame(animRing);
      };
      cursorRaf = requestAnimationFrame(animRing);
      document.querySelectorAll('a, button, .cat-tab, .cloth-card, input, select, textarea').forEach(el => {
        el.addEventListener('mouseenter', () => { cursorDot.classList.add('hovered');    cursorRing.classList.add('hovered'); });
        el.addEventListener('mouseleave', () => { cursorDot.classList.remove('hovered'); cursorRing.classList.remove('hovered'); });
      });
    }

    /* ── Hero Mouse Glow ── */
    const heroSection   = document.querySelector('.hero');
    const heroMouseGlow = document.getElementById('heroMouseGlow');
    const onHeroMove = e => {
      const rect = heroSection.getBoundingClientRect();
      heroMouseGlow.style.left = (e.clientX - rect.left) + 'px';
      heroMouseGlow.style.top  = (e.clientY - rect.top)  + 'px';
    };
    if (heroSection && heroMouseGlow) heroSection.addEventListener('mousemove', onHeroMove, { passive: true });

    /* ── Category Filter ── */
    const tabs  = document.querySelectorAll('.cat-tab');
    const cards = document.querySelectorAll('.cloth-card');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
        tab.classList.add('active'); tab.setAttribute('aria-selected','true');
        const filter = tab.dataset.filter;
        cards.forEach((card, i) => {
          const show = filter === 'all' || card.dataset.cat === filter;
          if (show) {
            card.classList.remove('hidden');
            card.style.animationDelay = (i * 0.06) + 's';
            card.style.animation = 'none';
            requestAnimationFrame(() => { card.style.animation = ''; });
          } else { card.classList.add('hidden'); }
        });
      });
    });

    /* ── Scroll Reveal ── */
    const revealEls = document.querySelectorAll(
      '.about-grid,.section-header,.process-step,.cloth-card,.hero-stats,.process-header,.testimonial-card,.booking-info,.booking-form'
    );
    revealEls.forEach(el => el.classList.add('reveal'));
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revealObs.observe(el));

    const cardObs = new IntersectionObserver(entries => {
      entries.forEach((e,i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i*75); cardObs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    cards.forEach(c => cardObs.observe(c));

    /* ── Active Nav on Scroll ── */
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sectionObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          navLinks.forEach(link => { link.style.color = link.getAttribute('href') === '#'+id ? 'var(--pink-light)' : ''; });
        }
      });
    }, { threshold: 0.35 });
    sections.forEach(s => sectionObs.observe(s));

    /* ── Stat Counters ── */
    const toPersian = n => n.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
    const animCounter = el => {
      const target = parseInt(el.dataset.target||'0');
      const suffix = el.dataset.suffix||'';
      const dur = 1800, start = performance.now();
      const tick = now => {
        const p = Math.min((now-start)/dur,1);
        el.textContent = toPersian(Math.round(p<1?(1-Math.pow(1-p,3))*target:target))+suffix;
        if (p<1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const counterObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { animCounter(e.target); counterObs.unobserve(e.target); } });
    }, { threshold: 0.6 });
    document.querySelectorAll('.stat-number[data-target]').forEach(el => counterObs.observe(el));

    /* ── Card 3D Tilt ── */
    cards.forEach(card => {
      const frame = card.querySelector('.card-frame');
      if (!frame) return;
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX-r.left)/r.width-0.5, y = (e.clientY-r.top)/r.height-0.5;
        frame.style.transition = 'box-shadow .3s ease, transform .08s ease';
        frame.style.transform = `perspective(900px) translateY(-6px) rotateX(${-y*9}deg) rotateY(${x*9}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        frame.style.transition = 'transform .5s ease, box-shadow .3s ease';
        frame.style.transform = '';
      });
    });

    /* ── Portrait Parallax ── */
    const portrait = document.querySelector('.portrait-scene');
    const onParallax = e => {
      const cx = window.innerWidth/2, cy = window.innerHeight/2;
      if (portrait) portrait.style.transform = `translate(${(e.clientX-cx)/cx*7}px,${(e.clientY-cy)/cy*5}px)`;
      document.querySelectorAll('.tool').forEach((tool,i) => {
        const d = (i%3+1)*3;
        tool.style.transform = `translate(${(e.clientX-cx)/cx*d}px,${(e.clientY-cy)/cy*d}px)`;
      });
    };
    window.addEventListener('mousemove', onParallax, { passive: true });

    /* ── Back to Top ── */
    const backToTop = document.getElementById('backToTop');
    backToTop?.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

    /* ── Booking Form ── */
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
      bookingForm.addEventListener('submit', e => {
        e.preventDefault();
        const btn = bookingForm.querySelector('[type="submit"]');
        const success = document.getElementById('formSuccess');
        btn.disabled = true; btn.style.opacity = '0.7';
        setTimeout(() => {
          success?.classList.add('visible');
          bookingForm.reset();
          btn.disabled = false; btn.style.opacity = '';
          setTimeout(() => success?.classList.remove('visible'), 5000);
        }, 800);
      });
    }

    return () => {
      clearTimeout(loaderTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onParallax);
      if (cursorRaf) cancelAnimationFrame(cursorRaf);
      revealObs.disconnect();
      cardObs.disconnect();
      sectionObs.disconnect();
      counterObs.disconnect();
    };
  }, []);

  return null;
}
