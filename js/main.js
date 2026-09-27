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
