**BitBreaker Portfolio**

This repository contains a personal developer portfolio built with React and Vite. It is a minimal, fast, and responsive site that showcases projects, skills, and contact information.

**Summary**
- **Project:** BitBreaker Portfolio — a personal portfolio site.
- **Purpose:** Showcase projects, skills, and contact info with a clean, responsive UI.
- **Stack:** React, Vite, Tailwind CSS, ESLint.

**Getting Started**
- **Clone:** `git clone <repo-url>`
- **Install:** `npm install`
- **Dev server:** `npm run dev` — starts Vite with HMR at `http://localhost:5173` by default.
- **Build:** `npm run build` — produces a production-ready `dist/` folder.
- **Preview:** `npm run preview` — locally preview the production build.

**Project Structure (important files)**
- `index.html`: App entry HTML.
- `src/main.jsx`: App bootstrap and router.
- `src/App.jsx`: Top-level app component.
- `src/pages/`: Page views (`Home.jsx`, `Projects.jsx`, `ProjectDetails.jsx`, `About.jsx`, `Contact.jsx`).
- `src/components/`: Reusable UI components (`Navbar.jsx`, `Footer.jsx`, `ProjectCard.jsx`, `ProjectModal.jsx`, `SectionHeader.jsx`).
- `src/data/Projects.js`: Project entries shown on the Projects page and cards — edit here to add/remove projects.
- `src/data/Skills.js`: Skill list used on the About/Skills section.
- `src/layouts/MainLayout.jsx`: Common layout wrapper for pages.
- `src/hooks/useScrollToTop.jsx`: Small utility hook for routing behavior.
- `src/utils/constants.js`: App-wide constants.

**How to Add or Update Projects**
- Open `src/data/Projects.js` and add an object with fields used by `ProjectCard`/`ProjectModal` (title, description, tech, images, repo/demo links).
- Images are stored in `src/assets/` — import them into `Projects.js` or reference public URLs.

**Styling & Tailwind**
- This project uses Tailwind CSS. Modify `tailwind.config.js` to change theme tokens or add custom utilities.

**Linting & Formatting**
- ESLint is configured. Run the lint script (if present) or integrate with your editor to keep code consistent.

**Deployment**
- The built output is located in `dist/`. Deploy to static hosts such as GitHub Pages, Netlify, or Vercel. For GitHub Pages, push the `dist/` output or use an action to deploy on `gh-pages`.

**Notes & Tips**
- Route-based pages are in `src/pages/` — to add a new page, create the component and add a route in the router bootstrap.
- To change content text, edit the page components or the `src/data/` files that supply them.
- Keep images optimized to improve load times.

**Author**
- Maintained by `Amintech123` (GitHub: `Amintech123`).

**License**
- This repository has no explicit license file. Add a `LICENSE` file if you want to grant reuse permissions.

If you want, I can:
- add a short demo GIF to `README.md` or the repo `public/` folder,
- add a `CONTRIBUTING.md` and `LICENSE`, or
- create a deployment workflow for GitHub Actions.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
