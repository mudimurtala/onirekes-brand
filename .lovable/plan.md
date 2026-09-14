# Afeez Amusa Onireke — Homepage and Global Layout

## Goal
Build a premium, mobile-first personal media-brand homepage that presents Afeez’s six disciplines as one coherent professional ecosystem, using the requested black, gold, and white visual identity.

## What I’ll build
- A reusable global header with desktop navigation, mobile menu, and a prominent consultation action.
- A reusable global footer with full sitemap, social destinations, and copyright.
- A photo-led homepage with:
  - Name, positioning, promise, and three key actions
  - Four “How Can I Help You?” pillar cards
  - Personal story teaser
  - Featured writing, tiling, and SAP work
  - Books and courses showcase
  - Testimonials
  - Media mentions strip
  - Newsletter signup and contact invitation
- Lightweight placeholder pages for every linked section and service, so all navigation works today.
- Clearly labeled image placeholders that can be replaced with Afeez’s real portraits and project photography later.

## Visual direction
- Black carries the strongest surfaces and typography; white creates breathing room; gold appears only on actions, rules, and small accents.
- Clean sans-serif typography for most content, paired with an editorial serif for selected headings and quotes.
- Generous spacing, large portrait moments, restrained motion, crisp borders, and compact editorial labels.
- Similar pacing and content hierarchy to the reference, without copying its brand styling.

## Technical details
- Use the existing TanStack route system and Tailwind design tokens.
- Create a shared site shell and reusable page primitives rather than duplicating navigation and footer markup.
- Give every route unique page metadata.
- Keep newsletter submission presentational in this pass, since persistent signup storage was not requested.
- Verify the finished homepage at desktop and mobile sizes, including the mobile menu and linked routes.
