# KAIKI Website - Developer Guide

A comprehensive guide for developers and non-developers alike to update and maintain the KAIKI website.

---

## 📁 Project Structure

```
kaiki-website/
├── src/
│   ├── app/                    # All pages live here
│   │   ├── page.tsx           # 🏠 HOMEPAGE
│   │   ├── about/page.tsx     # 📖 ABOUT PAGE
│   │   ├── products/page.tsx  # 🛠️ PRODUCTS PAGE
│   │   ├── contact/page.tsx   # 📧 CONTACT PAGE
│   │   ├── layout.tsx         # Global layout (header, footer)
│   │   └── globals.css        # Global styles
│   │
│   └── components/            # Reusable UI components
│       ├── Header.tsx         # Navigation bar
│       ├── Footer.tsx         # Website footer
│       └── animations/        # Animation components
│
├── public/
│   └── images/                # All images go here
│
└── docs/                      # This documentation folder
```

---

## ✏️ How to Update Text Content

### Homepage (`src/app/page.tsx`)

#### Main Hero Text (Lines ~100-120)
```tsx
// Find this section:
<h1 className="...">
  KAIKI               // ← Main logo text
</h1>

<h2 className="...">
  Crafting intelligent software.    // ← Tagline
</h2>

<p className="...">
  AI-powered apps, automation, and tools   // ← Description
  that work for you.
</p>
```

#### Philosophy Section Items (Lines ~10-30)
```tsx
const philosophyItems = [
  {
    number: '01',
    title: 'Clean Code',           // ← Change title here
    description: 'We write...',    // ← Change description here
  },
  // Add more items by copying this structure
];
```

#### Services Section (Lines ~31-55)
```tsx
const services = [
  {
    name: 'AI PRODUCTS',           // ← Service name
    category: 'Platforms',         // ← Category label
    status: 'Active',              // ← Status badge
    description: 'Intelligent...'  // ← Description
  },
];
```

---

### About Page (`src/app/about/page.tsx`)

#### Hero Section (Lines ~70-90)
```tsx
<h1 className="...">
  Software as Craft              // ← Page title
</h1>

<p className="...">
  KAIKI is an AI-focused...      // ← Description
</p>
```

#### Mission/Principles Items (Lines ~10-27)
```tsx
const missionItems = [
  {
    number: '01',
    title: 'Simplicity',          // ← Principle title
    description: 'We believe...'  // ← Description
  },
];
```

#### Values Section (Lines ~28-35)
```tsx
const values = [
  { title: 'AI-First Development', desc: 'We embed...' },
  // Add more values here
];
```

---

### Products Page (`src/app/products/page.tsx`)

#### Barali Chat Features (Lines ~8-35)
```tsx
const baraliFeatures = [
  {
    icon: MessageSquare,           // ← Icon component
    title: 'Character Creation',   // ← Feature title
    description: 'Design and...'   // ← Description
  },
];
```

#### Services List (Lines ~36-80)
```tsx
const services = [
  {
    id: 'ai-development',
    name: 'AI Development',
    category: 'Custom Solutions',
    status: 'Active',
    description: 'Custom AI...',
    features: [                    // ← Feature list
      'Custom LLM integrations',
      'Intelligent chatbots',
    ],
  },
];
```

---

## 🎨 Styling Guide

### Brand Colors (use these everywhere)
```css
#050505    /* Background - near black */
#CF2E2E    /* Accent Red - hover effects, highlights */
white      /* Text color */
white/70   /* Secondary text (70% opacity) */
white/40   /* Muted text (40% opacity) */
white/10   /* Borders and lines */
```

### Button Styles

**Primary Button (White background):**
```tsx
className="bg-white text-[#050505] px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-[#CF2E2E] hover:text-white transition-all duration-300"
```

**Secondary Button (Outline):**
```tsx
className="border border-white/20 text-white px-8 py-4 text-xs uppercase tracking-widest hover:border-[#CF2E2E] hover:text-[#CF2E2E] transition-all duration-300"
```

---

## 🖼️ How to Update Images

1. Add your image to: `public/images/`
2. Reference it in code as: `/images/your-image.png`

Example:
```tsx
<Image
  src="/images/bw-flower.png"    // ← Your image path
  alt="Description"
  fill
  className="object-cover"
/>
```

---

## 🔗 How to Update Links

### Navigation Links (in `src/components/Header.tsx`)
```tsx
const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Lab' },
  { href: '/contact', label: 'Contact' },
];
```

### Footer Links (in `src/components/Footer.tsx`)
Similar structure - find the links array and modify.

### External Links
```tsx
<Link href="https://barali.tech" target="_blank">
  Visit barali.tech
</Link>
```

---

## 🚀 How to Add a New Page

1. Create folder: `src/app/your-page-name/`
2. Create file: `src/app/your-page-name/page.tsx`
3. Copy basic structure:

```tsx
'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations';

export default function YourPageName() {
  return (
    <div className="relative pt-32">
      <section className="min-h-screen px-6 md:px-12">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-light text-white">
            Your Page Title
          </h1>
        </FadeIn>
      </section>
    </div>
  );
}
```

4. Add link to Header if needed

---

## ⚙️ Running the Project

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit: `http://localhost:3000`

---

## 📝 Quick Reference

| What to change | Where to find it |
|---------------|------------------|
| Homepage text | `src/app/page.tsx` |
| About page text | `src/app/about/page.tsx` |
| Products page | `src/app/products/page.tsx` |
| Contact page | `src/app/contact/page.tsx` |
| Navigation | `src/components/Header.tsx` |
| Footer | `src/components/Footer.tsx` |
| Global styles | `src/app/globals.css` |
| Images | `public/images/` folder |

---

## 💡 Tips

- **Always save** files after editing (Ctrl+S)
- **Check the browser** to see your changes (auto-refreshes)
- **Use the same format** when adding new items to arrays
- **Keep text concise** - short, punchy copy works best
- **Test on mobile** - resize your browser to check responsiveness

---

## ❓ Common Tasks

### Change the company tagline
Edit `src/app/page.tsx`, find the `<h2>` with "Crafting intelligent software."

### Add a new service
Edit `src/app/products/page.tsx`, add to the `services` array.

### Update contact info
Edit `src/components/Footer.tsx` and `src/app/contact/page.tsx`.

### Change accent color
In `src/app/globals.css`, search for `#CF2E2E` and replace all instances.

---

## 🆘 Need Help?

1. Check this documentation first
2. Look at existing code for examples
3. Use browser DevTools (F12) to inspect elements
