# 🌸 Bloom — Cartoon Landing Page

A cheerful, light‑mode landing page for **Bloom**, a fictional habit tracker. Built with **Vite + React + TypeScript + Tailwind CSS** in a cartoonish, neobrutalism‑inspired style (thick black borders, hard offset shadows, pastel colors, bouncy fonts).

## Tech stack

- ⚡️ [Vite 6](https://vitejs.dev/) — lightning‑fast dev server & bundler
- ⚛️ [React 18](https://react.dev/) + TypeScript
- 🎨 [Tailwind CSS 3](https://tailwindcss.com/) — utility‑first styling
- 🍿 [Lucide React](https://lucide.dev/) — icons
- ✏️ Custom theme (Fredoka + Nunito fonts, pastel palette, `shadow-cartoon` utilities)

All page sections live in a single file: [`src/App.tsx`](./src/App.tsx). The cartoon design tokens (fonts, colors, shadows) are configured in [`tailwind.config.js`](./tailwind.config.js).

---

## 🚀 Run locally — step by step

### 1. Prerequisites

You need [Node.js](https://nodejs.org/) **v20.19+** or **v22.13+** (or v24+) and `npm` (comes with Node.js). Check your versions:

```bash
node --version
npm --version
```

If you don't have Node yet, install it with [nvm](https://github.com/nvm-sh/nvm):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 22
nvm use 22
```

### 2. Clone the repo

```bash
git clone https://github.com/sindufha/newapp.git
cd newapp
```

### 3. Install dependencies

```bash
npm install
```

This installs React, Vite, Tailwind, Lucide, ESLint, and friends (~280 packages, takes ~5–10 seconds).

### 4. Start the dev server

```bash
npm run dev
```

You'll see something like:

```
  VITE v6.4.2  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Open **<http://localhost:5173>** in your browser. The page **hot‑reloads automatically** when you save changes — try editing `src/App.tsx` and watch it update.

### 5. Build for production

When you're ready to deploy:

```bash
npm run build
```

The optimized static site lands in `dist/`. Preview it locally before shipping:

```bash
npm run preview
```

### 6. Lint your code

```bash
npm run lint
```

---

## 📂 Project structure

```
newapp/
├── index.html             # HTML entry — Google Fonts loaded here
├── package.json           # Dependencies & npm scripts
├── tailwind.config.js     # Cartoon theme (fonts, colors, shadows, animations)
├── postcss.config.js
├── vite.config.ts
├── tsconfig*.json
├── eslint.config.js
├── public/                # Static assets served as-is
└── src/
    ├── main.tsx           # React entry point
    ├── App.tsx            # 👈 All landing page sections live here
    ├── App.css            # Just resets the #root container
    ├── index.css          # Tailwind directives + base body styles
    └── components/ui/     # shadcn/ui primitives (available if you need them)
```

## 🎨 Customizing the design

- **Brand colors** → edit `theme.extend.colors` in `tailwind.config.js`
- **Fonts** → swap the Google Fonts link in `index.html` and update `fontFamily` in the tailwind config
- **Shadows / borders** → tweak the `shadow-cartoon*` tokens in `tailwind.config.js`
- **Copy & sections** → all in `src/App.tsx` (Navbar, Hero, Features, HowItWorks, Testimonials, CallToAction, Footer)

## 📜 Scripts cheat sheet

| Command           | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start Vite dev server at <http://localhost:5173> |
| `npm run build`   | Type‑check + build production bundle to `dist/`  |
| `npm run preview` | Serve the production build locally               |
| `npm run lint`    | Run ESLint on the project                        |

---

Made with 🌷 — feel free to fork, theme, and ship your own landing page.
