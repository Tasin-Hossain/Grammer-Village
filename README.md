# Grammar Village (Next.js)

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Where to edit
- lib/content.ts  -> all text (English + Bangla), courses, notices, videos, offer banner, contact info
- components/*    -> one file per section
- app/api/inquiry/route.ts -> contact form handler (TODO: send email / save to DB)
- components/LoginModal.tsx -> TODO: connect real auth

## Before launch
- Copy your logo to public/images/logo.png
- Replace gallery placeholders in components/About.tsx with real photos
- Add real youtubeId values in lib/content.ts (videos)
- Update the offer date in lib/content.ts (banner hides itself after endsAt)
