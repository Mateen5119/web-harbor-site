/**
 * Web Harbor Solutions — Global Scripts
 * Pure Vanilla JavaScript adhering to 01_SYSTEM_SPECS.md (zero heavy libraries).
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavigation();
  initHeaderScroll();
  highlightActiveNavLink();
});

/**
 * Dark / Light Mode Theme Toggle
 */
function initThemeToggle() {
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      } catch (e) {}
    });
  });
}

/**
 * Responsive Mobile Navigation & Accessibility
 */
function initNavigation() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-item a, .mobile-nav-cta a');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('is-active');
    if (overlay) overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('is-active');
    if (overlay) overlay.classList.remove('is-active');
    document.body.style.overflow = '';
    toggleBtn.focus();
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      closeMenu();
    });
  }

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-active')) {
      closeMenu();
    }
  });

  // Close menu on mobile link click
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (drawer.classList.contains('is-active')) {
        closeMenu();
      }
    });
  });
}

/**
 * Sticky Header Scroll State
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Active Navigation Link Highlighter based on location.pathname
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-item a');

  allNavLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Normalize href for root/subpath matching
    const normalizedHref = href.replace(/\/index\.html$/, '/');
    if (
      (currentPath === '/' && (normalizedHref === '/' || normalizedHref === '/index.html' || normalizedHref === './' || normalizedHref === 'index.html')) ||
      (currentPath !== '/' && normalizedHref !== '/' && currentPath.includes(normalizedHref))
    ) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

// Lenis Smooth Scrolling Setup
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP Kinetic Typography Setup
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  gsap.utils.toArray('.reveal-text').forEach((element) => {
    gsap.from(element, {
      y: '100%',
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      }
    });
  });
});

// 3D Tilt Cards Logic
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.tilt-card-wrapper');
  const MAX_ROTATION = 12;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      const rotateX = -percentY * MAX_ROTATION;
      const rotateY = percentX * MAX_ROTATION;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.setProperty('--mouse-x', '-300px');
      card.style.setProperty('--mouse-y', '-300px');
      card.style.transition = 'transform 0.5s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.15s ease-out';
    });
  });
});
