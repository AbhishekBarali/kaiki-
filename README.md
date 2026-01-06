# KAIKI Website

A premium, animated landing website for KAIKI - AI Intelligence Lab. Built with Next.js 14, featuring smooth scroll animations, responsive design, and a dark minimal aesthetic.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Forms:** React Hook Form
- **Icons:** Lucide React

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Development

The development server runs at `http://localhost:3000`

## Folder Structure

```
kaiki-website/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── products/        # Products/Lab page
│   │   ├── contact/         # Contact page
│   │   ├── not-found.tsx    # 404 page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── ScrollIndicator.tsx
│   │   ├── SmoothScrollProvider.tsx
│   │   └── animations/      # Animation wrappers
│   └── hooks/               # Custom hooks
│       └── useSmoothScroll.ts
├── public/
│   └── images/
│       ├── placeholders/    # Placeholder images
│       └── og-image.png     # Social sharing image
├── guide/
│   └── PLACEHOLDERS.md      # Image replacement guide
└── package.json
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, philosophy, and products sections |
| `/about` | Company story, mission, and founder section |
| `/products` | Product pipeline and research areas |
| `/contact` | Contact form with validation |
| `/*` | Custom 404 page |

## Placeholder Images

See `/guide/PLACEHOLDERS.md` for a list of placeholder images that need to be replaced with final assets.

## Features

- ✅ Smooth scroll with Lenis
- ✅ Page load animations
- ✅ Scroll reveal animations
- ✅ Hover micro-interactions
- ✅ Form validation with React Hook Form
- ✅ Mobile responsive design
- ✅ Custom 404 page
- ✅ SEO optimized
- ✅ Accessibility considerations

## Environment Variables

Copy `.env.example` to `.env.local` for any environment-specific configuration:

```bash
cp .env.example .env.local
```

## Deployment

This project is ready to deploy on Vercel, Netlify, or any platform that supports Next.js.

```bash
# Build for production
npm run build
```

## License

© 2024 KAIKI Labs Inc. All rights reserved.
