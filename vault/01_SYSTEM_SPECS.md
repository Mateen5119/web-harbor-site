# Web Harbor Solutions — Technical & Brand Specifications

## Business & Legal Entity
- **Brand Name:** Web Harbor Solutions[cite: 1]
- **Founders:** Abdul Mateen & Jason Gill[cite: 1]
- **Entity Type:** Digital Web Agency (US LLC & Pakistan SECP Registration compliant)
- **Official Contact:** contact@webharborsolutions.com[cite: 1]
- **Target Audience:** Small business owners in US, UK, Canada, Australia (plumbers, bakeries, contractors, medical clinics, HVAC)[cite: 1].

## Technical Architecture
- **Hosting:** Cloudflare Pages (Free Tier)[cite: 1]
- **Build Output:** Static HTML5 / CSS / Vanilla JS
- **Directory Routing Structure:**
  - `/` -> `index.html`
  - `/about/` -> `about/index.html`
  - `/services/` -> `services/index.html`
  - `/pricing/` -> `pricing/index.html`
  - `/portfolio/` -> `portfolio/index.html`
  - `/how-it-works/` -> `how-it-works/index.html`
  - `/contact/` -> `contact/index.html`
  - `/privacy/` -> `privacy/index.html`
  - `/terms/` -> `terms/index.html`
  - `/liability/` -> `liability/index.html`

## Design System Tokens
- **Color Palette:**
  - Primary Dark (Navy/Slate): `#0f172a`
  - Accent Harbor Blue: `#2563eb`
  - Accent Cyan/Teal (Trust): `#0d9488`
  - Neutral Background: `#f8fafc`
  - Surface White: `#ffffff`
  - Text Primary: `#1e293b`
  - Text Muted: `#64748b`
  - Border: `#e2e8f0`
- **Typography:**
  - Display Font: `Plus Jakarta Sans` or `Inter`, sans-serif
  - Body Font: `Inter` or `system-ui`, sans-serif
- **UI Constraints:**
  - Mobile-first, fully responsive.
  - Zero heavy animation libraries; use clean CSS transitions and native Intersection Observer.
  - Every page must include identical `<nav>` (Header) and `<footer>` layouts.

## Legal & Compliance Requirements
- Must display official footer with copyright, registered entity name, links to Privacy Policy, Terms of Service, and Client Liability Agreement.
- Must include JSON-LD `ProfessionalService` and `Organization` structured data schema on every page for Google Business Profile and local search indexing.