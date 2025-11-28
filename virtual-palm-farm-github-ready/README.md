# Virtual Palm Farming Experience

This is a starter React + Tailwind project scaffold generated from a Figma design prompt.
## Setup
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Tailwind is configured in `tailwind.config.cjs`.

Replace placeholder assets in `/src/assets` with exports from your Figma file.


## How to run

1. `npm install`
2. `npm run dev`

## Bolt prompt (paste into bolt.new to recreate app)

App name: Virtual Palm Farming Experience

Goal: A polished, responsive React + Tailwind single-page app that simulates a virtual palm farm experience with learning modules, marketplace, community, user profiles, and a compact professional dashboard. Build production-ready code (React + Tailwind CSS), pages, components, routes, and placeholder API hooks for authentication, payments, and data. Provide clear component structure, accessible semantic HTML, and Tailwind class names.

Theme & assets:
- Primary brand color: deep-green (#0f7a3e). Secondary: warm-sand (#f2d8b0). Neutral: slate grays.
- Use responsive layout for mobile-first, tablet, desktop.
- Placeholders for images and SVG icons; include an /assets folder and instructions to replace with exported Figma images.

Screens & components:
1. Landing / Home
  - Top nav: logo left, nav links (Explore, Learn, Marketplace, Community, Profile), login CTA.
  - Hero: headline "Experience Palm Farming — Anywhere", subtext, CTA buttons (Try demo, Learn).
  - Highlight cards: Virtual Tour, Start a Kit, Join Webinars.

2. Virtual Farm (interactive UI)
  - Left panel: farm map / area selector (fields, nursery, processing).
  - Center: canvas area with interactive cards for palm trees (mock interactions: plant, water, harvest).
  - Right panel: quick stats (soil, moisture, expected yield), timeline actions.
  - Provide mock React state hooks to simulate planting timers and progress bars.

3. Learning / Academy
  - List of lessons (cards), each with level, duration, and "Start" button.
  - Lesson detail modal with video placeholder, notes, quiz stub.
  - Webinars list with register button.

4. Marketplace
  - Grid of products (starter kits, seeds, tools). Product card: image, title, price, add to cart.
  - Cart drawer with checkout stub and dummy payment hook.

5. Community
  - Feed of posts, ability to like/comment, filter by topics, join groups and upcoming webinars calendar.

6. User Profile / Dashboard
  - Compact dashboard: user summary, current plots, certificates, earnings, recent activity.
  - Settings: Edit profile, notifications, payment methods.
  - Admin view toggle for professionals: manage webinars, moderate content.

Functionality & architecture:
- React Router pages and reusable components (NavBar, Card, Modal, Drawer, Form, Grid).
- Use Tailwind utility classes.
- Create placeholder services: authService.js, apiService.js, paymentService.js with TODOs.
- Accessibility: keyboard focus states, alt attributes, aria labels on interactive elements.
- Add comments and README with instructions to swap images and connect real APIs.

Deliverables:
- Full file structure (src/components, src/pages, src/styles, /assets).
- Example data JSON for products, lessons, users.
- Instructions to replace placeholders with Figma exports and connect to Stripe & Auth provider.
- Small demo seed data so the app runs locally with `npm install` and `npm run dev`.


## Polishing notes
- Added accessibility improvements, focus outlines, aria attributes, subtle animations.
- Added paymentService and apiService stubs.
- If you update the Figma design, export hero/logo images and place them in /src/assets then replace image props in Card components.


## GitHub setup

1. Create a repo on GitHub
2. Push this project to the repo:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <YOUR_GITHUB_URL>
git push -u origin main
```

## Notes
- Assets folder is present but ignored by .gitignore. Add exported Figma assets to `/src/assets` and commit as needed.
- Use the Bolt prompt in the README to recreate the app in Bolt.new.
