# KAIKI Website - Placeholder Image Guide

This document lists all placeholder images used in the website and what they should be replaced with.

---

## Founder Section

| Current | Replace With | Specifications |
|---------|--------------|----------------|
| `placeholder-founder.png` | Abhishek Barali's actual photo | **Size:** 400×500px or similar portrait ratio |
| | | **Style:** Black & white preferred |
| | | **Background:** Dark or blurred |
| | | **Crop:** Head and shoulders |

---

## Product Visuals

| File | Product | Replace With |
|------|---------|--------------|
| `placeholder-aura.png` | AURA | Abstract visualization or product mockup |
| `placeholder-synapse.png` | SYNAPSE | Abstract visualization or product mockup |
| `placeholder-aeon.png` | AEON | Abstract visualization or product mockup |

**Specifications for product images:**
- Size: 600×400px minimum
- Style: Abstract, minimal, dark background
- Colors: Match brand (black, white, red accent)

---

## Open Graph / Social

| File | Purpose | Specifications |
|------|---------|----------------|
| `og-image.png` | Social sharing preview | **Size:** 1200×630px |
| | | KAIKI logo centered on black background |
| | | Add tagline: "AI Intelligence Lab" |

---

## Favicon Package (To Create)

| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | 32×32px | Browser tab icon |
| `favicon-16x16.png` | 16×16px | Small favicon |
| `favicon-32x32.png` | 32×32px | Standard favicon |
| `apple-touch-icon.png` | 180×180px | iOS home screen |
| `android-chrome-192x192.png` | 192×192px | Android |
| `android-chrome-512x512.png` | 512×512px | Android splash |

**Design:** KAIKI "K" lettermark on black background

---

## How to Replace

1. Prepare your final images following the specs above
2. Place them in `/public/images/`
3. Update the image paths in the code if needed
4. Delete the placeholder files

---

## Naming Convention

Final images should follow this naming:
- `founder-abhishek.jpg`
- `product-aura.jpg`
- `product-synapse.jpg`
- `product-aeon.jpg`
- `og-image.jpg`

---

## Image Optimization Tips

Before adding final images:
1. Compress using TinyPNG or Squoosh
2. Use WebP format when possible
3. Provide 2x versions for retina (`image@2x.jpg`)
4. Keep file sizes under 200KB each

---

*Document created for KAIKI website development*
