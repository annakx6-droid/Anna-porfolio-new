# Anna Portfolio

Personal portfolio website built with **React + Vite**.

## Tech Stack
- React 19
- Vite 8
- React Router DOM
- EmailJS Browser
- CSS Modules (per-component)
- Deployed via GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css
│   ├── Hero.jsx   / Hero.css       ← includes CV download button
│   ├── About.jsx  / About.css
│   ├── Skills.jsx / Skills.css
│   ├── Projects.jsx / Projects.css
│   ├── Contact.jsx  / Contact.css  ← original form preserved
│   └── Footer.jsx   / Footer.css
├── index.css   (global styles + CSS variables)
├── main.jsx
└── App.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

```bash
npm run build
npm run deploy
```

## Setup EmailJS

In `src/components/Contact.jsx`, replace:
```js
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, {
  publicKey: 'YOUR_PUBLIC_KEY',
})
```

## CV Download

Place your CV file at `public/cv.pdf`.
The "Download CV" button in the Hero section links to `/Anna-porfolio/cv.pdf`.
