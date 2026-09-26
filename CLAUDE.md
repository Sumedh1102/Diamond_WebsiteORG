# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing site for NAV Diamonds (also branded NavLabs / "NAV Lab Grown Diamond"), a B2B lab-grown diamond manufacturer. It is a client-only React 18 + Vite 6 single-page app styled with Tailwind CSS v3. There is no backend, API layer or state library.

The app lives in `Diamondwebsite-main/`, one level below the git root. Run every npm command from that directory.

## Commands

```bash
cd Diamondwebsite-main
npm ci                                      # install
npm run dev                                 # Vite dev server on http://localhost:5173
npm run build                               # production build into dist/
npm run preview                             # serve dist/ on http://localhost:4173
npm run lint                                # ESLint over the whole project (eslint.config.js)
npx eslint src/Pages/MatchingLayouts.jsx    # lint a single file
```

There is no test framework. Check changes with `npm run build` and by opening the affected route in the browser.

`npm run lint` already fails on the existing code (about 108 errors, mostly `no-unused-vars`, `react/no-unescaped-entities` for apostrophes in JSX text, and `react/no-unknown-property` on react-three-fiber props). Compare the lint output for the files you touch before and after a change. Don't expect a clean run.

## Architecture

- **Routing:** every route is declared in `src/main.jsx` with `createBrowserRouter`. A single layout route (`src/App.jsx` = `Navbar` + `<Outlet/>` + `Footer`, which also scrolls to the top on every path change) wraps all pages as children. There is no file-based routing, so a new page must be imported and added there. Some paths are capitalised (`/About`, `/Blogs`, `/Contact`, `/Home`) and existing links use that casing.
- **Pages vs. sections:** `src/Pages/*.jsx` are the route components. The Home, About, Contact and Product pages are thin wrappers that stack section components from `src/Home/`, `src/About/`, `src/Contact/` and `src/Product/`. `Pages/Blogs.jsx` just renders `Home/Blogs`. The service and education pages (`LooseDiamonds`, `CalibratedServiceDetails`, `MatchingLayouts`, `FancyColors`, `Jewellery`, …) are self-contained: their copy sits in data arrays at the top of the file plus inline JSX.
- **Navigation:** the navbar (`navLinks` in `src/Components/Navbar.jsx`) covers only Home, About, Education (4Cs, Comparison), Blogs and Contact. Service pages are reached from in-page buttons, mainly in `src/Home/Quality.jsx` and `src/Home/Hero2.jsx`. The footer adds `/products`. `/bruting-and-fluting`, `/perfect-assortment`, `/calibrated-parcels` and `/our-diamonds/natural/process` have no inbound links, and `src/Pages/DiamondShapes.jsx` is not routed at all.
- **Blog:** posts are entries in `src/data/blogData.js` (`slug`, `title`, `date`, `image`, `excerpt`, plus `content` as an HTML string). The same array drives the blog list (`Home/Blogs`), the `/blog/:slug` page (content rendered with `dangerouslySetInnerHTML`) and the navbar's BLOGS dropdown, so adding a post needs no other change.
- **3D and animation:** the rotating diamond is `src/assets/models/diamond (2).glb` (allowed by `assetsInclude` in `vite.config.js`). It is loaded in `src/Components/Diamond.jsx` and rendered in react-three-fiber canvases in `Home/Hero.jsx` and `Home/Featured.jsx`, whose drei `<Environment preset>` HDRIs are downloaded from a CDN at runtime. GSAP is used in `Home/Hero.jsx` and framer-motion in `Home/Featured.jsx`. Icons come from lucide-react, which has no brand icons, so the WhatsApp logo is an inline SVG.
- **Assets:** files in `public/` are referenced by absolute URL (`/images/...`, `/JewelleryImage/...`, `/diamond_images/...`). Files in `src/assets/` are imported as modules. Diamond-shape photos:
  - `public/diamond_images/` holds the originals (hashed file names), mapped in `src/data/diamondShapesData.js` for `/diamonds`.
  - `public/diamond_images/trimmed/` holds tightly cropped copies used by `MatchingLayouts.jsx`, which keeps its own `shapesData` (image paths and per-shape size tables).

  The navbar and footer logos and the favicon are hot-linked from i.ibb.co.

## Content and style conventions

- The brand is NAV, and site copy speaks in the first person ("we", "our").
- Some copy is duplicated across pages. For example, the Loose Diamonds text is in both `LooseDiamonds.jsx` and `CalibratedServiceDetails.jsx`, so grep all of `src/` when changing wording.
- Contact details are hardcoded in several places: the WhatsApp link `https://wa.me/919920752390` (Navbar, CalibratedServiceDetails) and the phone numbers and email in `Components/Footer.jsx` and `Pages/Contact.jsx`.
- Look and feel: dark background `#1A1A1A`, bronze accent `#B88A6A`, heavy use of Tailwind arbitrary values (`bg-white/[0.02]`, `drop-shadow-[...]`). The only theme extension is `font-serif`, which is Cormorant Garamond loaded from Google Fonts in `index.html`.
