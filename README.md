# 🚀 Blue Space — Hackathon Website

A production-ready Next.js 14 website for the **Blue Space** hardware + software hackathon.

## Stack

- **Next.js 14** App Router
- **React 18**
- **TailwindCSS**
- **Framer Motion**
- **TypeScript**

## Color Palette

| Token | Hex | Use |
|-------|-----|-----|
| `cream` | `#EFECE3` | Primary text, backgrounds |
| `blue-light` | `#8FABD4` | Accents, hover states |
| `blue-mid` | `#4A70A9` | Buttons, glows, borders |
| `space-900` | `#050810` | Main background |

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 🔐 Admin Panel (Secret Dev Mode)

**Keyboard shortcut:** Type `bsdev` anywhere on the page  
**Or:** Click the tiny dot in the bottom-right of the footer

**Passcode:** `bluespacedagoat12`

### Admin Features
- **Event Info tab** — Edit event name, date, location, Discord link, etc.
- **Sponsors tab** — Add/remove/edit sponsor entries with tier, logo, URL
- **FAQs tab** — Add/remove/edit FAQ questions and answers
- **Deploy tab** — Simulated Git commit + Vercel deploy with live log output

## File Structure

```
blue-space/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Design system CSS
├── components/
│   ├── Navbar.tsx          # Sticky nav with blur-on-scroll
│   ├── Hero.tsx            # Parallax galaxy hero
│   ├── About.tsx           # About section
│   ├── WhyAttend.tsx       # Feature cards
│   ├── Sponsors.tsx        # Sponsor showcase
│   ├── Venue.tsx           # Google Maps + location info
│   ├── FAQ.tsx             # Animated accordion
│   ├── Footer.tsx          # Final CTA + links
│   ├── StarField.tsx       # Canvas star animation
│   ├── AdminTrigger.tsx    # Keyboard shortcut listener
│   ├── PasscodeModal.tsx   # CRT-style auth modal
│   └── AdminPanel.tsx      # Full CMS admin panel
├── data/
│   └── cms.json            # Simulated CMS data
├── hooks/
│   └── useInView.ts        # Scroll intersection hook
└── public/
    └── images/             # All sponsor/venue logos
```

## Images

All images are in `/public/images/`:
- `galaxy.png` — Hero background galaxy
- `poster.png` — Event poster (About section)
- `zoho-venue.png` — Venue confirmed graphic
- `quantum.jpg` — Quantum Robotics logo
- `easyeda.jpg` — EasyEDA logo
- `featherless.jpeg` — Featherless.ai logo
- `zoho.png` — Zoho logo
- `hackclub.png` — Hack Club logo

## Customization

Edit `data/cms.json` to update sponsors, FAQs, and event info.  
Edit `app/globals.css` CSS variables to change colors.
