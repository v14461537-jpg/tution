# UNIVERSE Tuition & Tailoring Center

A bilingual (English and Tamil), mobile-first single-page website for UNIVERSE Tuition And Tailoring Center in Avaniyapuram, Madurai. Enquiries open WhatsApp; the site does not collect or store form submissions.

## Local development

1. Install Node.js (LTS) and pnpm.
2. From the project directory, run `pnpm install`.
3. Run `pnpm dev` and open the local URL printed by Vite.
4. Run `pnpm build` to create the production site in `dist/`.
5. Run `pnpm preview` to preview that production build locally.

## Deploy on Vercel

Import this repository in Vercel. Vercel detects the pnpm lockfile and Vite automatically; use `pnpm install` as the install command, `pnpm build` as the build command, and `dist` as the output directory. Deploy from the repository root. No environment variables or backend services are required.

## Content notes

- Gallery and other illustrative images are served from Unsplash and do not depict the actual centre. Replace them with approved local photographs when available; image URLs and gallery alt text are centralised in `src/data/content.js` (hero and feature image URLs are in `src/App.jsx`).
- The supplied centre cards list tuition classes 2–12, multiple subjects and several curricula, as well as additional dance, activity, and language classes. Those details are transcribed into the site; confirm current availability before relying on them. Timings and fees remain enquiry-only.
- The tailoring card lists Aari work, embroidery, designer blouses, and churidhar stitching. Google review excerpts were supplied by the user and are shown with reviewer names in a horizontal accordion; the old 4.8/31 rating snapshot is not displayed.
- The supplied Google rating was not verified and is not shown. Use the provided Google Maps listing link to view current listing information.
- No canonical URL or sitemap is included because the production domain is not yet known.
