# Shanmuga Priyan M — Software Engineer Portfolio

Welcome to my personal portfolio repository! This is a modern, high-performance web application built to showcase my journey, projects, and skills in Artificial Intelligence, Machine Learning, and Web Development.

## 🚀 Live Preview

https://shanksraj007-stack.github.io/Portfolio/

## ✨ Features

- **Premium Neon Design System:** A dark, futuristic aesthetic — "90% dark interface + 10% neon energy" with neon purple & cyan accents.
- **Smooth Animations:** Buttery transitions, gradient name treatment, glowing skill tags, and hover motion implemented in vanilla CSS + JS (no framework).
- **Data-Driven Content:** The UI never hard-codes personal data. All content lives in a single `CONTENT` object — edit one file and the whole site updates.
- **Automatic Empty States:** Any section without data is hidden — never fabricated, no lorem ipsum.
- **Project Detail View:** Click any project to open a data-driven detail view with Problem, Approach, Implementation, Challenges, and Learnings.
- **Fully Responsive:** Carefully crafted to look perfect on desktops, tablets, and mobile devices (mobile hamburger menu included).
- **Accessibility:** Full `prefers-reduced-motion` support and accessible labels.

## 🛠️ Tech Stack

- **Markup:** HTML5
- **Styling:** Custom CSS (design system with CSS custom properties)
- **JavaScript:** Vanilla JS (ES6+), no build step, no dependencies
- **Fonts:** Inter (editorial) + JetBrains Mono (technical labels)

## 💻 Local Setup & Development

To get a local copy up and running, follow these simple steps.

### Prerequisites

No dependencies required. Just any modern web browser (Chrome, Edge, Firefox, Safari).

### Installation

Clone the repository:

```
git clone https://github.com/shanksraj007-stack/Portfolio.git
```

Navigate into the project directory:

```
cd Portfolio
```

That's it — there's nothing to install.

### Running the App

Open `index.html` directly in your browser (double-click it), or serve the folder if you prefer:

```
npx serve .
```

and open `http://localhost:3000` (or the printed URL) in your browser to view the portfolio.

## 📂 Key Project Structure

```
Portfolio/
├── index.html            → page structure + all sections (shell only)
├── styles/styles.css     → "Premium Neon" design system
├── scripts/app.js        → renders content, routing, empty states, motion
└── content/data.js       → ★ THE ONLY FILE TO EDIT — all personal data
```

- **`content/data.js`** — the single source of truth. Contains `CONTENT.profile`, `CONTENT.projects[]`, `CONTENT.skills[]`, and `CONTENT.links`. Edit this to update the whole site.
- **`index.html`** — page shell; never hard-codes personal data.
- **`styles/styles.css`** — the premium neon design system (tokens, layout, components).
- **`scripts/app.js`** — render engine that consumes `CONTENT` and builds the UI.

## 📬 Contact

- Email: shanksraj007@gmail.com
- LinkedIn: [linkedin.com/in/shanmuga-priyan-m-82a308388](https://www.linkedin.com/in/shanmuga-priyan-m-82a308388/)
- GitHub: [@shanksraj007-stack](https://github.com/shanksraj007-stack)
