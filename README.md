# Browns Memorial Medical Center (BMMC) — Website

React + Vite + React Router + Tailwind CSS v4.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Edit content
Everything (contact details, hours, services, lab tests, FAQs) lives in `src/data/site.js`.
Phone numbers, email and location are real. Optionally add a Google Maps embed URL (`mapEmbed`) to show a live map on the Contact page.
Photos are in `src/assets/images/`.

## Pages
`/` · `/about` · `/services` · `/services/:slug` · `/gallery` · `/contact` · `/appointment`

The appointment form sends a prefilled WhatsApp message; the contact form opens the visitor's email app.
`public/_redirects` (Netlify) and `vercel.json` (Vercel) make client-side routes work on refresh.

## Deploy to HostAfrica (cPanel)
```bash
npm run package   # builds and creates bmmc-website-upload.zip
```
Upload `bmmc-website-upload.zip` to `public_html` in cPanel File Manager, extract it, then delete the zip.
`public/.htaccess` handles page routing on Apache/LiteSpeed. To force HTTPS, uncomment the three lines marked in it.
