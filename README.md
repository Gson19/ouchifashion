# OuchiStitches Website

A minimal, modern **fashion portfolio** website built with plain HTML, CSS, and JavaScript.  
You can swap in your own photos, text, and links to turn this into your personal fashion / modeling / styling portfolio.

## Structure

- `index.html` – main one-page layout (hero, work, about, journal, contact).
- `work.html` – portfolio / work page.
- `about.html` – about page.
- `styles.css` – all styling, including responsive layout and colors.
- `script.js` – small interactions (mobile menu, smooth scrolling, footer year, demo form handler).
- `vercel.json` – Vercel config (clean URLs, security headers).
- `package.json` – optional helper to run a local dev server with `live-server`.

## How to preview the site

### Easiest: Open directly

1. Go to the folder where these files live.
2. Double-click `index.html` (or right-click → **Open with** → your browser).

### Nicer (auto-refresh): Using Node + live-server

If you have **Node.js** installed:

1. Open a terminal in this folder.
2. Run:

   ```bash
   npm install
   npm run dev
   ```

3. Your browser should open the site (usually at `http://127.0.0.1:8080/`).

## Deploy to Vercel

The project is set up for [Vercel](https://vercel.com) deployment:

1. Push this folder to a Git repo (GitHub, GitLab, or Bitbucket).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New** → **Project** and import your repo.
4. Vercel will detect it as a static site; leave **Build Command** and **Output Directory** empty (or use defaults).
5. Click **Deploy**. Your site will be live at a `*.vercel.app` URL.

Clean URLs are enabled: `/work` and `/about` work without `.html`.

## Where to customize

- **Brand name / logo text**: in `index.html` inside the header (`OuchiStitches`).
- **Hero text** and **meta**: update the main heading, paragraph, and “Based in / Available for” items.
- **Portfolio cards** (images + text): inside the `Selected work` section.  
  - Replace the Unsplash / Pexels URLs in `styles.css` (`.img-a`, `.img-b`, `.img-c` and hero images) with your own photos.
  - Edit titles and descriptions in `index.html`.
- **Journal section**: change the three article titles and descriptions.
- **Contact section**:
  - Update email, Instagram, and portfolio links.
  - The form currently just shows an alert; later you can connect it to an email service or backend.

## Next steps / ideas

- Hook the contact form into a real email service.
- Add more portfolio sections (e.g. by season, brand, or shoot type).
- Swap colors / fonts to match your personal branding.

