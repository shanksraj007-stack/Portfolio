# Premium Neon — Portfolio

A dark, futuristic, premium portfolio for a software engineer.
Static HTML + CSS + vanilla JS. **No build step, no dependencies.**

## Files

```
portfolio-quiet/
├── index.html            → page structure + all sections (shell only)
├── styles/styles.css     → "Premium Neon" design system
├── scripts/app.js        → renders content, routing, empty-states, motion
└── content/data.js       → ★ THE ONLY FILE TO EDIT — all personal data
```

## Content architecture

All personal content lives in **`content/data.js`** as a single `CONTENT` object:

- `CONTENT.profile` — name, title, intro, focus, bio, education, experience, interests, CTA
- `CONTENT.projects[]` — title, description, technologies, category, image, year, status, github, liveDemo, details
- `CONTENT.skills[]` — [{ category, technologies[] }]
- `CONTENT.links` — email, github, linkedin, twitter, website, extra[]

The UI never hard-codes personal data. It only consumes `CONTENT`.

## Empty-state behaviour

This is the core rule. When a field/section has no data, the UI **hides it** —
never fabricates names, projects, skills, stats, or lorem ipsum. So an empty
content file renders a clean, intentionally designed page with just the nav
and footer shell. Sections appear only when their data exists.

## Project detail view

Clicking a project row opens a detail view (URL hash `#project-N`) with
data-driven sections: Problem, Approach, Implementation, Technologies,
Challenges, What I Learned. **Missing fields hide their section.** A back
link returns to the index.

## Design system ("Premium Neon")

Dark futuristic · neon purple + cyan · "90% dark interface + 10% neon energy."

- Background `#050508`, cards `#10101A`, secondary bg `#0A0A12`
- Text `#F4F4F8`, secondary `#8D8D9B`
- Accents: neon purple `#A855F7` / electric `#7C3AED`, neon cyan `#22D3EE` / `#06B6D4`
- Gradient `linear-gradient(90deg, #A855F7, #22D3EE)` for name, headings, borders, buttons
- Subtle technical grid + soft ambient purple/cyan glows behind content
- Abstract network-node hero visual (decorative SVG; hidden on small screens)
- Glass sticky nav (blur) with cyan/purple hover glow; gradient-border CTA buttons
- Neon section dividers (`✦` accent); horizontal glass project cards with neon hover
- Skills as glowing pill tags — **no bars, no meters/percentages**
- Contact with radial glow; footer with social links
- Inter (editorial) + JetBrains Mono (technical labels)
- Effects implemented in vanilla CSS/JS (no framework); `prefers-reduced-motion` fully supported
- Fully responsive; mobile hamburger menu; network visual hidden ≤900px; accessible labels

## How to run

Open `index.html` in any browser. No server required.

## Handing off to a Personal Work Assistant

Edit only `content/data.js`. Fill in real values; leave others empty.
The portfolio updates automatically — no markup changes needed.
