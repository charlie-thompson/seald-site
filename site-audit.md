# Seald Healthcare Site Audit

## 1. Page Inventory

| Route | File Path |
|-------|-----------|
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/product` | `app/product/page.tsx` |
| `/security` | `app/security/page.tsx` |
| `/pilot` | `app/pilot/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| (layout) | `app/layout.tsx` |
| (styles) | `app/globals.css` |

---

## 2. Section Map Per Page

### Home (`app/page.tsx`)

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Dark bg (#050d1a), glow orbs, grid overlay. Large gradient "Seald" + white "Healthcare" heading, tagline, two CTA buttons. HeroGraphic component on right (desktop only). |
| 2 | Features | "Data protection that goes beyond the perimeter" - 4 glass cards (E2EE, policy-based access, audit trail, group-based access) in a 4-column grid. |
| 3 | How it works | Dark section. 3 numbered step cards: Integrate, Encrypt and set policy, Control after sharing. |
| 4 | See it in action | 7 screenshot frames in a grid layout showing dashboard, AI Policy Studio, audit logs, sessions, admin keys, file stats, settings. |
| 5 | Final CTA | Purple-pink gradient card. "Ready to protect PHI beyond the perimeter?" with white "Book a pilot" button. |

### About (`app/about/page.tsx`)

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | "Encryption should protect data, not slow it down" |
| 2 | Our Team | 3 leadership cards (CEO, CTO, COO) + 2 advisor cards with oval headshots, blue role badges, and bio bullets. |
| 3 | Mission / Why / Approach | Three tightly stacked glass cards (space-y-2): Our mission, Why Seald exists, Our approach. |
| 4 | CTA | "Want to learn more?" with "Book a pilot" button. |

### Product (`app/product/page.tsx`)

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | "Encryption and access control that travel with the data" with subtitle. |
| 2 | Core Capabilities | 6 feature cards: E2EE, persistent access policies, tamper-evident audit logs, SDK-first integration, key management, group/role-based access. |
| 3 | Ecosystem | "Where Seald fits in your ecosystem" - 6 bullet points (EHR/EMR, patient portals, claims, lab systems, AI pipelines, file sharing). |
| 4 | FAQ | 4 questions (see FAQ section below). |
| 5 | CTA | "See Seald in your environment" with "Book a pilot" button. |

### Security (`app/security/page.tsx`)

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | "Security that works after the perimeter" with subtitle. |
| 2 | Threat Model | 4 threat/mitigation cards: compromised server, unauthorized internal access, data shared beyond recipients, audit tampering. |
| 3 | Key Control | Glass card with 3 paragraphs on key management and policy enforcement. |
| 4 | Audit Logging | 5 bullet points on audit capabilities. |
| 5 | Perimeter Comparison | Table comparing firewalls/VPN, TLS, at-rest encryption, and Seald E2EE. |
| 6 | Security FAQ | 5 questions (see FAQ section below). |
| 7 | CTA | "Review our security architecture" with "Book a pilot" button. |

### Pilot (`app/pilot/page.tsx`)

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | "Validate Seald in your environment" with subtitle and "Book a pilot" button. |
| 2 | Pilot Timeline | 4 phase cards: Scoping/setup (wk 1-2), Integration/testing (wk 3-6), Validation/review (wk 7-10), Decision (wk 11-12). |
| 3 | What's Included | 6 bullet points (environment, engineering support, policy consultation, weekly check-ins, security review, executive summary). |
| 4 | Success Criteria | 6 bullet points defining measurable pilot outcomes. |
| 5 | CTA | "Start your pilot" with "Book a pilot" button. |

### Contact (`app/contact/page.tsx`)

| # | Section | Description |
|---|---------|-------------|
| 1 | Contact Form | "Get in touch" heading. Form with name, email, company, message fields. Submit via Formspree (placeholder ID). |

---

## 3. Component Inventory

| File | Component | Description |
|------|-----------|-------------|
| `app/components/Container.tsx` | `Container` | Max-width wrapper (max-w-6xl, px-6, mx-auto). Accepts optional className. |
| `app/components/SectionHeading.tsx` | `SectionHeading` | Title + optional subtitle. Props: title, subtitle, centered. Styled as text-2xl/3xl/4xl bold navy. |
| `app/components/GlassCard.tsx` | `GlassCard` | Glass-morphism card. hover=true uses `.glass-card` (with lift), hover=false uses `.glass-panel` (static). |
| `app/components/Buttons.tsx` | `PrimaryButton` | Next.js Link with `.btn-primary`. Props: href, children. No className support. |
| `app/components/Buttons.tsx` | `SecondaryButton` | Next.js Link with `.btn-secondary`. Props: href, children. No className support. |
| `app/components/ScreenshotFrame.tsx` | `ScreenshotFrame` | Browser-chrome screenshot display. Props: src, alt, caption, priority. 16:9 aspect ratio. |
| `app/components/HeroGraphic.tsx` | `HeroGraphic` | Animated SVG with shield, 3 orbital rings, 6 glowing nodes. CSS keyframe animations defined in globals.css. |

---

## 4. Navigation Structure

### Header Nav (desktop)

| Label | href |
|-------|------|
| Product | `/product` |
| Security | `/security` |
| Pilot | `/pilot` |
| About | `/about` |
| Contact | `/contact` |
| Book a pilot (button) | `/contact` |

Mobile: Same links in a dropdown panel via `<details>/<summary>`.

### Footer Nav

**Product column:**
| Label | href |
|-------|------|
| Overview | `/product` |
| Security | `/security` |
| Pilot program | `/pilot` |

**Company column:**
| Label | href |
|-------|------|
| About | `/about` |
| Contact | `/contact` |

---

## 5. Styling Patterns

### Background Colors

| Pattern | Used On |
|---------|---------|
| `bg-[#050d1a]` (near-black) | Home hero |
| `.section-dark` (dark navy gradient with glow radials) | "How it works" section, footer |
| `.glass-card` / `.glass-panel` (white 65%/60% with blur) | Feature cards, content cards across all pages |
| `bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#8B5CF6]` | Home final CTA card |
| `.glass-card-strong` (white 75% with blur) | CTA cards on about, product, security, pilot pages |
| `var(--bg-light)` / `#F6FAFF` | Body background |
| Default (transparent / bg-light inherited) | Most content sections |

### Section Spacing

| Pattern | Where |
|---------|-------|
| `py-24 md:py-32 lg:py-40` | Home hero |
| `pb-28 pt-20 md:pt-28` | Sub-page heroes (about, product, security, pilot, contact) |
| `py-28` | All standard content sections across every page |
| `py-16` | "How it works" dark section (home) - inconsistent with py-28 elsewhere |
| `py-16` | Footer |

### Card Padding

| Pattern | Where |
|---------|-------|
| `p-7` | Feature cards, threat cards, timeline cards |
| `p-8 md:p-12` | Mission/why/approach cards, ecosystem card, key control card, audit card, what's included, success criteria |
| `p-6` | FAQ cards |
| `p-8` | Contact form card |
| `px-8 py-16 md:px-16` | CTA cards (all pages) |

### Grid Gaps

| Pattern | Where |
|---------|-------|
| `gap-6` | Feature cards (home), how-it-works steps, screenshots, FAQ cards |
| `gap-10` | Team cards (about), footer columns |
| `space-y-2` | Mission/why/approach stacked cards |
| `gap-4` | Button rows |

### Inconsistencies Noted

1. **"How it works" section uses `py-16`** while every other content section uses `py-28`. This makes it noticeably shorter.
2. **Home final CTA** uses a custom gradient card with inline `<a>` tag instead of the `PrimaryButton` component used everywhere else.
3. **Button components don't accept className**, requiring wrapper-based overrides (e.g., the secondary button in the hero uses `[&_.btn-secondary]:...` selector hacks).
4. **CTA card styling differs on home page** (gradient, rounded-3xl, shadow) vs all other pages (glass-card-strong).
5. **Hero padding varies**: Home uses `py-24/32/40`, sub-pages use `pb-28 pt-20 md:pt-28`.
6. **Duplicate CSS blocks in globals.css**: `.hero-dark`, `.hero-grid`, and `.hero-orb` are each defined twice (lines ~355-397 and ~399-445). The second definitions override the first.
7. **Formspree form ID** on the contact page is a placeholder (`YOUR_FORM_ID`).

---

## 6. FAQ Locations

### Product Page (`app/product/page.tsx`) - 4 questions

1. "Does Seald replace our existing encryption?"
2. "How long does integration take?"
3. "Does Seald have access to our data?"
4. "What standards does Seald support?"

### Security Page (`app/security/page.tsx`) - 5 questions

1. "Does Seald replace TLS or at-rest encryption?"
2. "Who holds the encryption keys?"
3. "How does Seald handle key recovery?"
4. "What happens if Seald goes down?"
5. "Has Seald been independently audited?"
