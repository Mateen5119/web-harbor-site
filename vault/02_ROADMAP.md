# Web Harbor Solutions Implementation Roadmap

## Instructions for Antigravity
- Work through tasks strictly sequentially. Complete one task, verify it, update the state files, then stop.
- Never write code for multiple pages in one run.

---

### Phase 1: Foundation & Shared Shell
- [x] Task 1.1: Create global directory structure and `_headers` file with Cloudflare security headers (HSTS, CSP, X-Frame-Options).
- [x] Task 1.2: Build the global CSS design tokens, typography styles, and responsive navigation header + footer templates.

### Phase 2: Core Conversion Pages
- [x] Task 2.1: Build Home Page (`/index.html`) using `vault/03_PAGES/01_home.md`. Include the Interactive ROI Calculator.
- [x] Task 2.2: Build How It Works Page (`/how-it-works/index.html`) using `vault/03_PAGES/06_how_it_works.md`.
- [x] Task 2.3: Build Services Page (`/services/index.html`) using `vault/03_PAGES/03_services.md`.
- [x] Task 2.4: Build Pricing & Plans Page (`/pricing/index.html`) using `vault/03_PAGES/04_pricing.md`. Include Cost Comparison Matrix.
- [x] Task 2.5: Build Portfolio / Live Demos Page (`/portfolio/index.html`) using `vault/03_PAGES/05_portfolio.md`. Include Interactive Niche Switcher.
- [x] Task 2.6: Build About Us Page (`/about/index.html`) using `vault/03_PAGES/02_about.md`.
- [x] Task 2.7: Build Contact / Request Demo Page (`/contact/index.html`) using `vault/03_PAGES/07_contact.md`. Include client-side validated form.

### Phase 3: Legal & Regulatory Pages (LLC / SECP / Stripe Ready)
- [x] Task 3.1: Build Privacy Policy Page (`/privacy/index.html`) using `vault/03_PAGES/08_privacy.md`.
- [x] Task 3.2: Build Terms of Service & SLA Page (`/terms/index.html`) using `vault/03_PAGES/09_terms.md`.
- [x] Task 3.3: Build Client Content & Liability Page (`/liability/index.html`) using `vault/03_PAGES/10_liability.md`.

### Phase 4: SEO, Verification & Cloudflare Audit
- [x] Task 4.1: Inject unified JSON-LD schema markup (`Organization`, `WebSite`) across all HTML files.
- [x] Task 4.2: Add `sitemap.xml` and `robots.txt` optimized for Cloudflare crawlers.
- [x] Task 4.3: Perform multi-page link check and verify 100% responsive layout across mobile and desktop.
- [x] Task 4.4: Implement Dark/Light Mode Theme Engine, explicit relative file linking, and automated headless CDP browser quality audit.