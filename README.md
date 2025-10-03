## Mindful Care Clinic — Single-Page Experience

Mindful Care Clinic is a responsive single-page site designed to help prospective clients quickly understand the clinic’s services, values, and ways to get in touch. The layout guides visitors from a welcoming hero, through introductory guidance, to detailed resource cards and a contact form that converts interest into action.

### Table of contents
1. [Why it matters](#why-it-matters)
2. [Highlights](#highlights)
3. [Design palette & section styling](#design-palette--section-styling)
4. [Site walkthrough](#site-walkthrough)
5. [Screenshots](#screenshots)
6. [Run it locally](#run-it-locally)
7. [Deploy it](#deploy-it)
8. [Tech stack](#tech-stack)
9. [Accessibility & performance considerations](#accessibility--performance-considerations)
10. [Attributions](#attributions)

### Why it matters
- **Prospective clients** get calming guidance, practical next steps, and clear booking paths in one scrollable experience.
- **Clinic staff** gain an always-on marketing presence that highlights expertise, builds trust, and collects high-quality inquiries.

### Highlights
- Sticky navigation with smooth in-page anchors for fast access to each section.
- Modular content layout that moves from quick tips to deeper program snapshots without overwhelming the reader.
- Core values and contact sections that reinforce credibility and make conversion straightforward.

### Design palette & section styling
- **Color language** — Primary surfaces rely on soft cool tones: the page background `#f7f9fc`, hero gradient `#C9D6FF → #ffffff`, and deep slate `#2C3E50` for typography and call-to-action buttons. Accent `#A9C9FF` appears in icons, focus states, and subtle highlights to keep the aesthetic calm but optimistic.
- **Typography** — Poppins headlines deliver structure and confidence, while Manrope/Open Sans keep longer copy approachable.

| Section | Color treatment | Layout & design cues |
| --- | --- | --- |
| Navigation & hero | White navigation bar with a faint shadow sits above a sky-inspired gradient. Buttons and brand name use the navy primary color for contrast. | Wide breathing room, centered headline, rounded CTA buttons, and sticky behavior that keeps navigation accessible as you scroll. |
| About | Image frame and content column rest on a white card lifted from the pale background via shadow and rounded corners. | Two-column grid collapses vertically on smaller screens, retaining generous padding so the story remains readable. |
| First treatment tips | Four white tiles hover over a light gradient with monochrome icon accents and muted body copy. | Evenly spaced grid that stacks gracefully on tablets, keeping each tip self-contained. |
| Detailed cards | Each program card blends photography with white content panels and deeper shadow to suggest depth. | Vertical stacking with comfortable line spacing, bulleted lists, and hover elevation to hint at interactivity. |
| Core values | Neutral white cards with centered navy typography and iconography, floating on the soft background color. | Three-column layout that compresses to centered single cards on small screens. |
| Contact | Form card and copy column keep to white surfaces bordered by subtle gray, while the accent blue highlights focus rings and buttons. | Grid shifts to single column on mobile, preserving whitespace around fields and privacy checkbox. |
| Footer | Minimal white strip with light gray divider, allowing navigation links to remain legible without demanding attention. | Flex layout realigns to a centered stack for narrow widths. |
| Contact page (`contact.html`) | Mirrors the main palette with a lighter hero band and white form card to reassure returning users. | Centered form with rounded edges, soft shadow, and consistent CTA styling. |

### Site walkthrough
- **Top of page** — A calm introduction with clear entry points to continue exploring.
- **Middle content** — Short sections that summarize guidance, expand into richer stories, and keep visitors engaged.
- **Closing panels** — Trust-building reminders and a simple way to start a conversation.

### Screenshots

| View | Description | User value |
| --- | --- | --- |
| ![Hero and navigation](assets/screenshots/home-hero.png) | Hero section with headline, CTA buttons, and sticky navigation. | Helps visitors orient instantly and choose a path (tips vs. booking). |
| ![Tips and detailed cards](assets/screenshots/tips-and-cards.png) | Tips grid and corresponding detailed resource cards. | Bridges immediate self-help guidance with richer program descriptions. |
| ![Contact section](assets/screenshots/contact-form.png) | Contact panel and form with consent checkbox. | Makes it easy to reach the clinic while reinforcing privacy and responsiveness. |

### Run it locally
1. Clone or download this repository.
2. Open `index.html` in your browser **or** serve the folder with any static server.
3. Browse the anchored sections to confirm smooth scrolling and sticky navigation behavior.

### Deploy it
- **GitHub Pages**
	1. Push the project to a public GitHub repository.
	2. In **Settings → Pages**, point to the `main` branch and `/ (root)` folder.
	3. Wait for the action to finish; the site appears at `https://<username>.github.io/<repo>/`.

### Tech stack
- Semantic **HTML5** for structure, **CSS** modules (`general.css`, `header.css`, `main.css`, `contact.css`) for styling, and a tiny vanilla **JavaScript** file for smooth scrolling and mobile nav toggle.
- Typography via Google Fonts (`Manrope`, `Poppins`, `Open Sans`).
- Icons provided through Font Awesome kit `7babdebb89.js`.

### Accessibility & performance considerations
- Section IDs plus `scroll-margin-top` keep anchors visible below the sticky nav.
- Forms include labels, placeholders, and a required privacy consent checkbox.
- Imagery should be optimized (WebP/JPEG) and described with meaningful `alt` text for assistive tech.

### Attributions
- Font Awesome icons courtesy of [Font Awesome](https://fontawesome.com/) (kit `7babdebb89.js`).
- Google Fonts served via `fonts.googleapis.com` for Manrope, Open Sans, and Poppins.
- Card photography sourced via [Unsplash](https://unsplash.com/) community contributors.
- Smooth scroll and nav toggle logic under `assets/JavaScript/script.js` is custom-written for this project.

