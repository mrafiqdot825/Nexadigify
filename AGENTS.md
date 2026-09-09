# AGENTS.md

This document orients AI agents (and humans) working on this codebase.

## Project Overview

Novaforge is a fictional enterprise AI/technology agency marketing site. It's a multi-page
site (home, solutions index + 5 solution detail pages, portfolio index + 6 case studies,
about, careers, contact) built with a light, premium, futuristic visual identity around three
brand colors: white (`#ffffff`), teal (`#1e8eab`), and deep blue (`#004696`). The background is
never fully dark — the design brief explicitly calls for a light, clean, enterprise feel with
an animated AI/network motif running behind key sections.

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start |
| Routing | TanStack Router (file-based, in `src/routes/`) |
| Frontend | React 19 |
| Styling | Tailwind CSS 4 (utility classes; brand colors used as literal hex in `className`) |
| Animation | `motion` (Framer Motion's `motion/react` package) |
| Icons | lucide-react |
| Forms | Netlify Forms (static skeleton in `public/__forms.html`) |
| Language | TypeScript 5 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
public/
  __forms.html          # Static skeleton so Netlify's build bot registers the contact
                         # and careers-application forms (React-rendered forms aren't
                         # visible to Netlify's build-time HTML scan otherwise).
src/
  components/            # Reusable UI components (see below)
  data/
    solutions.ts         # Content + config for the 5 solution pages
    portfolio.ts         # Case study content for the 6 portfolio projects
    careers.ts            # Job listings shown on /careers
  lib/
    utils.ts             # `cn()` class-merging helper (clsx + tailwind-merge)
  routes/
    __root.tsx           # Root shell: <html>, Navbar, Footer, ScrollProgress, CursorGlow,
                          # PageTransition wrapper, global <head> metadata defaults
    index.tsx             # Home page
    about.tsx, careers.tsx, contact.tsx
    solutions/
      index.tsx            # /solutions — grid linking to each solution
      $slug.tsx            # /solutions/$slug — one template renders all 5 solution pages
                            # (ai-automation, custom-ai, agentic-ai, data-analytics,
                            # web-app-development) driven by src/data/solutions.ts
    portfolio/
      index.tsx            # /portfolio — case study grid
      $slug.tsx            # /portfolio/$slug — one template renders all case studies,
                            # driven by src/data/portfolio.ts
  router.tsx              # Router instance factory
  styles.css               # Tailwind import, CSS variables, and all background-animation
                            # @keyframes (orbs, grid drift, particles, beams, orbit spins,
                            # globe spin, node glow). Respects prefers-reduced-motion.
```

## Why dynamic `$slug` routes instead of one file per solution/case-study

The brief lists explicit routes like `/solutions/ai-automation` and
`/solutions/custom-ai`. Rather than duplicating a near-identical page five (or six) times,
each family is a single dynamic route (`solutions/$slug.tsx`, `portfolio/$slug.tsx`) that
looks up content from `src/data/*.ts` by slug. This satisfies every required URL while keeping
the page template in one place — editing copy means editing the data file, not five
components.

## Component Architecture

**Background & motion system** (the core visual identity):
- `AnimatedBackground` — full ambient system (orbs, grid, particles, connection lines, beam,
  noise) used behind Hero/CTA/major sections. Takes a `variant` prop (`hero` | `section` |
  `cta` | `subtle`) to scale intensity.
- `BackgroundParticles` — a lighter standalone particle field for sections that want subtle
  motion without the full system.
- `ScrollReveal` / `ScrollRevealStagger` / `ScrollRevealItem` — viewport-triggered fade/slide-up
  animations, used throughout every page.
- `PageTransition` — wraps route content in `__root.tsx` for fade/slide transitions between
  pages.
- `CursorGlow` — desktop-only, fine-pointer-only, reduced-motion-aware cursor glow.
- `ScrollProgress` — thin gradient progress bar fixed to the top of the viewport.
- `HeroVisualization` — the abstract "AI core" SVG/CSS visualization in the hero.
- `AnimatedGlobe` — abstract SVG globe used in the home page's Global Reach section.

**Navigation:**
- `Navbar` — sticky header; opacity/shadow increase on scroll; owns the Solutions mega menu
  trigger and mobile menu trigger. Exports `Logo` (reused in `Footer`).
- `MegaMenu` — desktop dropdown for Solutions, sourced from `src/data/solutions.ts`.
- `MobileNavigation` — slide-in mobile drawer with an expandable Solutions section.

**Content components:**
- `Hero` — full-width hero used (in `compact` form) on every page, not just home.
- `SectionHeader` — eyebrow + headline (with a gradient-highlighted trailing phrase) + optional
  description, used to open nearly every section.
- `ServiceCard`, `SolutionCard`, `FeatureCard`, `PortfolioCard` — card variants for the "What We
  Do" grid, the solutions grid, the "Why Us" feature grid, and the portfolio grid respectively.
- `CapabilityPill`, `IndustryTag` — small pill/tag components used for capability lists and
  case-study industry labels.
- `CaseStudySection` — the label + prose layout used to build out each case study page section
  (Challenge, Approach, Solution, etc).
- `CTASection` — the repeated closing call-to-action block, used at the end of nearly every
  page.
- `ContactForm` — powers both `/contact` (variant `"contact"`) and the `/careers` application
  form (variant `"careers"`, includes a resume file upload via multipart `FormData`). Posts to
  `/__forms.html` — see the Netlify Forms note above; this must stay in sync with
  `public/__forms.html`'s field names.

## Conventions

- **Colors**: always use the literal brand hex values in Tailwind arbitrary-value classes
  (`text-[#004696]`, `bg-[#1e8eab]`, `border-[rgba(0,70,150,0.1)]`) rather than introducing new
  colors. `text-gradient-brand` (defined in `styles.css`) is the standard blue→teal text
  gradient utility.
- **Motion**: import from `motion/react`, not `framer-motion` (the package is `motion`, its
  React entry point is `motion/react`).
- **Routing**: use `@tanstack/react-router`'s typed `<Link to="..." params={{...}} />`; avoid
  plain `<a>` for internal navigation except for genuine same-page hash anchors (see
  `Hero`'s internal `HeroButton` helper, which falls back to `<a>` for `#`-prefixed targets).
- **New solution or case study**: add an entry to `src/data/solutions.ts` or
  `src/data/portfolio.ts` — no new route file needed.
- **Reduced motion**: all custom `@keyframes`-driven `.animate-*` utility classes are disabled
  under `prefers-reduced-motion: reduce` in `styles.css`; don't animate with inline styles that
  bypass this.
