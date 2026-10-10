# ATELIER NOIR — Premium Architecture & Interior Design Website

## 1. Project overview

Build a polished, responsive, multi-page marketing website for **ATELIER NOIR**, a fictional premium architecture and interior design studio.

**Tagline:** “Spaces that speak quietly. Live beautifully.”

**Services:** Architecture, interior design, and spatial planning.

This is a portfolio/demo project intended to showcase the developer's ability to build high-quality websites for potential freelance clients. Keep all studio details, project names, project descriptions, and metrics fictional. Do not imply that fictional projects or testimonials belong to a real business or real clients.

### Primary goals

1. Create an exceptional, premium visual experience.
2. Present the studio's work clearly and beautifully.
3. Communicate services and design philosophy.
4. Encourage potential clients to enquire about a project.
5. Demonstrate responsive design, accessibility, performance, and maintainable React code.

Build the homepage first and make it feel complete before expanding the remaining pages.

---

## 2. Creative direction

### Design concept

**Quiet luxury meets architectural editorial.**

The website should feel like a refined architecture journal: large images, confident typography, generous whitespace, considered layouts, restrained interactions, and tactile natural materials.

Avoid generic AI-template aesthetics. Do not overuse cards, gradients, pill buttons, drop shadows, glassmorphism, oversized rounded containers, or decorative animations. The visual quality should come from composition, imagery, typography, and spacing.

### Color palette

Use these colors consistently through CSS variables or Tailwind theme tokens:

- Ivory background: `#F4F1EA`
- Charcoal text / dark surface: `#292923`
- Stone accent: `#B1A38D`
- Linen section background: `#D9D0C2`
- Muted olive accent: `#69715E`
- White: `#FFFFFF`
- Muted body text: choose a legible shade with adequate contrast against each background.

The main page should be light and warm, with charcoal text. Use dark sections sparingly for contrast.

### Typography

- Use an elegant editorial serif for large headlines and selected project titles.
- Pair it with a clean sans-serif for body copy, navigation, labels, and metadata.
- Choose fonts with reliable web availability, ideally via a free font provider or locally hosted files. Provide sensible fallback fonts.
- Establish a clear type scale and responsive heading sizes with `clamp()`.

### Image direction

Use high-quality architectural and interior photography featuring:

- Contemporary villas, courtyards, and glass/concrete architecture.
- Warm minimalist living spaces.
- Travertine, natural oak, linen, stone, plaster, and muted brass.
- Natural daylight, mature landscaping, sculptural furniture, and editorial composition.

Prefer legitimate free image sources or locally stored licensed assets. If remote images are used, provide stable URLs and useful alt text. Avoid broken-image icons, unrelated images, obvious watermarks, and inconsistent stock-photo styles. Make image crops intentional with `object-fit: cover` and per-image positioning when needed.

Do not use generated images as evidence of real completed client projects. All portfolio content is fictional demo content.

### Interaction principles

- Use subtle, purposeful transitions.
- Add restrained image hover effects and link/button states.
- Respect `prefers-reduced-motion`.
- Avoid scroll-jacking, excessive parallax, or animations that delay access to content.
- Use visible keyboard focus styles.

---

## 3. Recommended technology

Use the following stack unless the existing repository already has a sound equivalent:

- React
- TypeScript
- Vite
- Tailwind CSS (use a version compatible with the current project setup)
- React Router for page routing
- Lucide React for small interface icons, only where useful
- CSS transitions for most motion; add a motion library only if a clear need arises

Use the package manager already established in the repository. If this is a new project, choose npm.

Do not add a backend or database for the first version. Use typed local data for projects and services. A real contact form integration can be added later; initially build client-side validation and a clear demo submission state without pretending an email was actually sent.

---

## 4. Page structure and routes

Implement these routes:

- `/` — Home
- `/work` — Selected Work
- `/work/:slug` — Individual project detail
- `/studio` — Studio and Services
- `/contact` — Start a Project

Include a consistent header, navigation, and footer on all pages. Ensure direct navigation to nested routes works in the chosen deployment environment.

### Navigation

Brand: **ATELIER NOIR**

Navigation links:
- Work
- Studio
- Services (may link to the relevant section on the Studio page)
- Contact

Include a restrained “Start a project” CTA. Mobile navigation must be usable with keyboard and touch, announce its state accessibly, and close after navigation.

---

## 5. Homepage requirements

Build the homepage in this order.

### A. Header / navigation

- Minimal, refined header with wordmark.
- Ivory or transparent treatment over the hero only if legibility is maintained; otherwise use a solid ivory background.
- Clear navigation and project enquiry CTA.
- Responsive mobile menu.
- Sticky behavior is optional; do not let the header dominate the page.

### B. Hero section

Use a large, striking architectural image with a cinematic crop. The first screen should immediately communicate a premium architecture studio.

Suggested copy:

Eyebrow: `ARCHITECTURE · INTERIORS · SPATIAL DESIGN`

Headline: `Designed around the way you live.`

Supporting copy: `Architecture and interiors shaped by light, material and purpose.`

Primary CTA: `Explore our work`

Secondary CTA: `Start a project`

Use a clear focal point, deliberate text placement, strong contrast, and responsive behavior. Avoid placing text over busy parts of an image.

### C. Studio introduction

Heading: `Less, but considered.`

Suggested copy:
`We shape thoughtful spaces around the people who inhabit them. Our approach brings architecture, interiors and materiality together in a quiet, enduring language.`

Use an editorial layout rather than a generic centered card. Include a link to the Studio page.

### D. Selected projects

Show three or four projects in an intentionally varied grid. Use asymmetry where it improves the composition; do not force every project into identical cards.

Suggested fictional projects:
1. **The Courtyard House** — Architecture · Residential
2. **Quiet Form Residence** — Interiors · Residential
3. **The Olive Retreat** — Architecture · Hospitality
4. **Material House** — Interiors · Residential

Each project item should have:
- Large image
- Project title
- Category and location (fictional or generic, and consistent)
- Link to its detail page

Use believable editorial project descriptions, but do not invent awards, press mentions, client quotes, or factual performance metrics.

CTA: `View all projects`

### E. Services

Present the studio's three core services in a restrained editorial list or open grid:

1. **Architecture** — Concept development, spatial planning, and architectural design.
2. **Interior Design** — Material palettes, lighting, furnishings, and cohesive interior concepts.
3. **Spatial Planning** — Thoughtful layouts that balance circulation, function, and atmosphere.

Use numbered labels, dividers, and typography instead of excessive cards.

### F. Design philosophy / studio approach

Communicate three principles:
- Light and proportion
- Honest materials
- Spaces for everyday living

Use concise copy and supporting photography or a material detail image. Keep the section visually distinct without introducing a new unrelated color palette.

### G. Contact call to action

Heading: `Have a space in mind?`

Supporting copy: `Let's discuss what it could become.`

CTA: `Start a project`

Link to `/contact`.

### H. Footer

Include:
- ATELIER NOIR wordmark
- Short studio description
- Navigation links
- Contact email using a clearly fictional demo domain, e.g. `studio@example.com`
- Social links only if useful; avoid fake live social proof
- Copyright line identifying this as a demo only if appropriate for the portfolio presentation

---

## 6. Selected Work page

Route: `/work`

Requirements:
- Editorial page heading and short introduction.
- Responsive project grid.
- Category filters such as All, Architecture, and Interiors.
- Filters must work, be keyboard accessible, and expose the selected state.
- Each project links to `/work/:slug`.
- Clear empty state if filters produce no results.
- Use consistent project metadata and imagery.

Keep project content in a typed data file, not duplicated throughout the UI.

---

## 7. Project detail page

Route: `/work/:slug`

Each project detail page should include:
- Large hero image
- Project title and category
- Location and year, clearly fictional demo data
- Short project overview
- Design concept and material palette
- A varied responsive image gallery
- A next/related project link
- A clear contact CTA

Handle unknown slugs gracefully with a not-found state or a redirect to `/work`.

Avoid presenting fictional claims as real project facts. Do not add fabricated testimonials or awards.

---

## 8. Studio and Services page

Route: `/studio`

Include:
- Studio introduction and design philosophy
- Service descriptions for Architecture, Interior Design, and Spatial Planning
- A simple process section, for example: Discover → Develop → Deliver
- Supporting architectural/interior imagery
- CTA to start a project

Use confident, specific, concise copy. Do not use generic filler paragraphs.

---

## 9. Contact page and enquiry form

Route: `/contact`

Create a premium, approachable contact page with:
- Heading: `Tell us about your project.`
- Short explanation of the initial enquiry process.
- Contact details using fictional demo information.
- An accessible form with:
  - Name (required)
  - Email (required, validate format)
  - Project type (Architecture, Interior Design, Spatial Planning, Other)
  - Project location (optional)
  - Approximate budget (optional ranges; make clear that it is indicative)
  - Desired timeline (optional)
  - Project description (required)
  - Consent checkbox if needed for the implemented data handling

Requirements:
- Client-side validation with useful inline error messages.
- Associate labels with controls.
- Do not rely on placeholders as labels.
- Provide clear success and failure feedback.
- Since there is no backend initially, show a clearly worded **demo submission confirmation**. Do not claim the message has actually been sent or stored.
- Keep form state and validation logic maintainable.

---

## 10. Responsive design

The site must be carefully designed for:
- Small mobile screens (320–390px)
- Larger mobile devices
- Tablets
- Laptops
- Wide desktop screens

Requirements:
- No horizontal overflow.
- Responsive image crops and type sizes.
- Navigation must not wrap awkwardly.
- Project grids should adapt naturally to screen size.
- Forms should be easy to use on mobile.
- Adequate touch target sizes.
- Keep the visual hierarchy intact on smaller screens; do not merely shrink desktop layouts.

---

## 11. Accessibility, SEO, and performance

### Accessibility
- Semantic HTML landmarks and heading order.
- Descriptive alt text for meaningful images; empty alt text for purely decorative images.
- Keyboard-accessible navigation, filters, and form controls.
- Visible focus indicators.
- Sufficient color contrast.
- Reduced-motion support.
- Buttons for actions; links for navigation.
- Accessible menu state and form error announcements.

### SEO
- Unique page title and meta description for each route where practical.
- Correct heading hierarchy.
- Open Graph metadata for the main page.
- Descriptive URL slugs.
- Favicon and theme color if time permits.

### Performance
- Use appropriately sized images and modern formats where available.
- Lazy-load below-the-fold images.
- Avoid lazy-loading the main hero image if it is the LCP image.
- Set image dimensions or aspect ratios to reduce layout shifts.
- Avoid unnecessary dependencies and large animation libraries.
- Check the browser console for errors and warnings.

---

## 12. Suggested code organization

Keep components small and purposeful. Adjust to suit the existing repository, but aim for a structure similar to:

```text
src/
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      PageLayout.tsx
    home/
      Hero.tsx
      StudioIntro.tsx
      FeaturedProjects.tsx
      Services.tsx
      DesignPhilosophy.tsx
      ContactCTA.tsx
    projects/
      ProjectCard.tsx
      ProjectGrid.tsx
      ProjectFilters.tsx
      ProjectGallery.tsx
    ui/
      Button.tsx
      Container.tsx
  data/
    projects.ts
    services.ts
  pages/
    Home.tsx
    Work.tsx
    ProjectDetails.tsx
    Studio.tsx
    Contact.tsx
    NotFound.tsx
  styles/
    index.css
  App.tsx
  main.tsx
```

Use TypeScript types/interfaces for project and service data. Keep data separate from presentation components. Avoid giant single-file components and unnecessary abstractions.

---

## 13. Implementation sequence

Work in these stages and verify each before moving on.

### Phase 1 — Inspect and prepare
1. Inspect the current repository and package manager.
2. If an app already exists, preserve working configuration and adapt it rather than replacing it blindly.
3. If the repository is empty, scaffold React + TypeScript + Vite.
4. Install only necessary dependencies.
5. Establish design tokens, fonts, base styles, global layout, and reusable buttons/containers.

### Phase 2 — Homepage
1. Implement header and responsive navigation.
2. Implement hero section.
3. Implement studio introduction.
4. Implement featured project grid.
5. Implement services and design philosophy.
6. Implement CTA and footer.
7. Verify the complete homepage at mobile, tablet, and desktop sizes.

### Phase 3 — Other pages
1. Create typed project and service data.
2. Implement work page and functional category filters.
3. Implement dynamic project detail routes.
4. Implement studio/services page.
5. Implement contact page and client-side validation.

### Phase 4 — Polish
1. Refine spacing, typography, image crop, and responsive layout.
2. Add subtle interactions and reduced-motion handling.
3. Add route-specific metadata.
4. Check accessibility and keyboard navigation.
5. Check image loading and broken links.
6. Run lint, type-check, and production build scripts if available.
7. Fix errors rather than ignoring them.

### Phase 5 — Handover
Provide a concise summary of:
- Pages and features completed
- Commands to run the project locally
- Any remaining limitations (especially that contact submission is demo-only)
- How to deploy the project
- Any external assets or configuration that the user must supply

---

## 14. Definition of done

The first version is complete when:

- [ ] The homepage feels bespoke, premium, and visually coherent.
- [ ] All five route types work, including individual project details.
- [ ] Project filters work.
- [ ] Contact form validates and gives an honest demo confirmation.
- [ ] Mobile navigation works with keyboard and touch.
- [ ] Layout works at mobile, tablet, and desktop widths.
- [ ] There are no broken images or obvious placeholder sections.
- [ ] There are no console errors or TypeScript/build errors.
- [ ] Images have appropriate alt text and loading behavior.
- [ ] Typography, spacing, color, and interactions are consistent.
- [ ] Fictional content is not represented as real client work.
- [ ] The project can be run and built using documented commands.

## 15. Important instructions for the AI coding IDE

- Start by inspecting the repository; do not just print a plan.
- Then implement the website in the codebase.
- Do not stop after generating a static mockup or wireframe.
- Prioritize a genuinely high-quality homepage before broadening the page count.
- Make reasonable decisions without repeatedly asking the user about minor design details.
- If an image URL is unreliable, replace it with a working alternative or a local asset; never leave broken images.
- Do not fabricate real client logos, awards, press, testimonials, or metrics.
- Do not claim form submissions are delivered without a working backend.
- Keep the implementation readable and maintainable.
- After implementation, run the available checks and report what actually passed.
