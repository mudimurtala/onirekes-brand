# onirekes-brand

Build a premium, minimalist personal brand website homepage and global layout for Afeez Amusa Onireke, a multi disciplinary professional who is an Author, Writer, Professional Tiler, SAP PP/QM & RE FX Consultant, Educator, and Entrepreneur.

Reference for structure and feel: Study the layout, pacing, and interaction patterns of https://aliabdaal.com directly. I want the same kind of warm, personal, editorial "media brand" structure: a photo led hero, a card grid answering "how can I help you" that routes visitors into different areas of expertise, a personal story section with a photo, a grid of featured work, a products or resources grid, and a newsletter capture before the footer. Do not copy Ali Abdaal's color scheme, copy his structure, spacing, typography hierarchy, and the confident, uncluttered feel of the page.

Brand identity

Name: Afeez Amusa Onireke

Positioning line: Author | Writer | Professional Tiler | SAP PP/QM & RE FX Consultant | Educator | Entrepreneur

Brand promise: Helping individuals, businesses, and institutions create lasting value through writing, craftsmanship, enterprise technology, and education.

The site is described as "the digital headquarters of his professional ecosystem," not just a portfolio.

The four pillars (use these as the "how can I help you" card grid on the homepage)

Writing & Publishing — Helping individuals and organisations communicate with clarity through books, ghostwriting, content development, editing, and business writing.

Professional Tiling & Construction — Premium residential and commercial tiling solutions delivered through craftsmanship, precision, and professionalism.

SAP Consulting — Helping organisations optimise manufacturing and real estate operations through SAP S/4HANA Production Planning (PP), Quality Management (QM), and Real Estate Flexible Management (RE FX).

Education & Knowledge Products — Books, online courses, digital resources, training programmes, workshops, and speaking engagements.

Each card should have a short one line description and a "Learn more" link (these can point to placeholder routes like /services/writing, /services/tiling, /services/sap, /services/education for now).

Visual system

Color palette: Black around 50% of the visual weight, Gold around 30%, White around 20%. Black and white carry the structure, gold is a restrained accent used only for key actions, highlights, dividers, and small details, never as a large background fill.

Typography: A modern, clean sans serif for headings, body text, and interface elements. An elegant serif for pull quotes, section titles that need extra gravitas, and featured testimonials.

Design style: Premium, minimalist, elegant, generous white space (or in this case, generous black/white space) with gold used sparingly so it still feels special when it appears. Avoid anything busy, avoid stock corporate blue, avoid clutter.

Built mobile first, should feel fast and light, and should be easy to extend with new pages later.

Homepage sections to build

Header / navigation: Logo or wordmark, nav links for Home, About, Services, Books, Courses, Portfolio, Resources, Blog, Media, Contact (routes can be placeholders for now, only Home needs real content today). Include a prominent "Hire Me" or "Book a Consultation" button in the nav.

Hero section: Name, the positioning line, the brand promise line, and three buttons: "Hire Me," "Explore My Work," "Books & Courses." Leave a clear space for a professional photo.

"How Can I Help You" pillar grid: The four pillars above as cards.

About teaser: A short personal story block (2 to 3 sentences, can be placeholder copy) with a photo, and a "Read My Full Story" link to /about.

Featured work / portfolio highlights: A grid teasing a few items across writing projects, tiling projects, and SAP projects, with a "View Portfolio" link to /portfolio.

Books & Courses teaser: A small product style grid (2 to 3 cards) for his books and courses, each with a "View" link.

Testimonials: A simple, elegant testimonial carousel or grid, placeholder quotes are fine for now.

Media strip: A row of "as featured in" style logos or text badges (TV, radio, podcasts, press), placeholder is fine.

Newsletter / contact capture: A clean signup block plus a closing call to action pointing to /contact, styled the way Ali Abdaal's newsletter block feels, understated but prominent.

Footer: Full sitemap (all nav links again), social links (Facebook, LinkedIn, Instagram, YouTube, TikTok, WhatsApp Business, X), and copyright.

Scope for this pass

Please focus only on the homepage and the global header/footer/navigation shell right now. The other pages (Services, Books, Courses, Portfolio, Resources, Blog, Media, Contact) can be simple placeholder routes for now, we will build those out in detail afterward. I want to get the visual system and homepage exactly right first before expanding.

Use placeholder or stock style imagery where a real photo is needed, clearly marked so it is easy to swap later.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c85f1945-1746-4211-a3d2-6964d4ac41fe).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
