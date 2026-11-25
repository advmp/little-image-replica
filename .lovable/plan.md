# XVolt marketing website

## Goal
Build a six-page, evidence-based website for grant reviewers, energy storage engineers, technical investors, and research partners. Present XVolt’s all-iron flow battery and patent-pending Neutral Parallel Junction (NPJ) without implying that development targets are validated results.

## Visual direction
- Follow the supplied light palette exactly: off-white background, navy primary, electric-blue accents, slate text, and muted supporting text. Use Inter, generous whitespace, an 8px spacing grid, subtle borders, rounded-lg item cards, and minimal shadows.
- Shared XVolt wordmark, desktop navigation, accessible mobile menu, active-page indication, and footer with “Patent Pending.”
- Use a relevant energy-infrastructure image for the home opening, with readable text directly over the image—not a split card layout. It will provide context only, never depict an invented XVolt prototype or imply an operating installation. Use the requested schematic and application icons elsewhere.
- Restrained scroll fades that respect reduced-motion preferences. Ensure readable tables, forms, and roadmap on mobile.

## Pages
### Home — `/`
- Exact headline: “Long-Duration Iron Flow Energy Storage.”
- Exact supplied subhead, with a nearby clarification that multi-decade service life is a design target, not a proven result.
- “Our Technology” and “Partner With Us” links to their respective pages.
- Safe Chemistry, Abundant Materials, and Built to Last feature cards using only the supplied claims.
- Credibility strip: Veteran-Owned Small Business · Registered on SAM.gov · NAICS 335911 · Spanish Fork, Utah · Patent Pending.

### Technology — `/technology`
- Explain all-iron flow operation with an accessible inline SVG showing two electrolyte tanks, pumps, and the cell stack.
- Describe NPJ’s capacitor-based electronic balancing at a functional level only; no proprietary circuit details or unsupported performance claims.
- “Design Targets” table containing only “Service life — 50+ years (design target).”
- Qualitative comparison with lithium-ion for stationary storage: lifespan, fire safety, material supply, and recyclability. Distinguish design intent from demonstrated results, qualify chemistry-dependent differences, and add no numerical comparisons.

### Development — `/development`
- Bench-scale demonstration cell under construction and test, using NPJ architecture and 300×400 mm graphite plates.
- Supplied testing approach: programmable DC power supply, electronic load, and automated logging for cycling, efficiency, and capacity retention.
- Roadmap: Bench Demo Cell (current) → Multi-Cell Stack → Pilot System → Commercial Units. Do not invent dates or completion estimates.
- Test Results empty state verbatim: “Validation data will be published here as testing progresses.”

### Applications — `/applications`
- Five icon-led cards: Remote Telecom & Infrastructure, Agriculture & Ranching, Off-Grid Facilities, Microgrids, and Renewable Firming.
- One precise sentence per application, framed as intended use rather than a validated deployment.

### Team — `/team`
- Use the supplied introduction and all three bios verbatim.
- Initials avatars, in exactly this order: Randy Johnson, Lagrand Johnson, M.D., Chris Taylor.
- Preserve the supplied role titles; add no credentials, affiliations, or portraits.

### Partner With Us — `/partner`
- Accessible tabs for Research Collaboration, Pilot Site Hosting, and Investors.
- Each tab contains name, organization, email, and message fields, with clear validation errors.
- Show a success toast on valid submission only. Make clear that this is a demonstration submission and no inquiry has been sent or stored.
- No backend, email delivery, account creation, or data persistence at this stage.

## Content safeguards
- No invented testimonials, logos, partners, awards, statistics, schools, employers, or degrees.
- No extra numeric claims beyond the brief.
- Always identify lifetime and performance figures as design targets, not proven results.
- Avoid hype and preserve the exact supplied biographies.

## Technical implementation
- Replace the current placeholder home page and add five separate TanStack routes. Keep shared navigation and footer around the route outlet.
- Use the existing design-system controls, lucide-react icons, react-hook-form, Zod, and Sonner; the requested form dependencies are already installed.
- Define the supplied palette as semantic global tokens and load Inter through the root document head.
- Give every page a unique XVolt-specific title, description, Open Graph title/description, and social-card metadata. Incorporate the supplied keywords naturally without keyword stuffing. Tag the home image only when its real absolute URL is available.
- Keep reusable page elements and form validation separate from route files, and document structural conventions in the project guidance.

## Verification
- Run the existing routing tests and extend coverage to every requested page.
- Add focused tests for valid/invalid partner submissions, with submission prevented when required fields or email are invalid.
- Check all navigation paths, mobile menu, tabs, validation, and valid-submission toast in the browser.
- Inspect desktop and mobile layouts, schematic rendering, image loading, table readability, and reduced-motion behavior.
- Check the preview for errors before finishing.

## Delivery boundary
The result is a complete frontend marketing website. Partner forms remain demonstration-only; validation results remain unpublished, as requested.