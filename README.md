# Muhammad Mamooji — Portfolio

Personal portfolio site built with React, Vite and Tailwind CSS, deployed on Netlify.

## Stack

- [Vite](https://vite.dev) — dev server and build
- [React 19](https://react.dev) with [React Router](https://reactrouter.com)
- [Tailwind CSS 4](https://tailwindcss.com) — CSS-first config, see `src/index.css`
- [Font Awesome](https://fontawesome.com) icons and [react-modal](https://github.com/reactjs/react-modal)

## Available Scripts

### `npm run dev`

Runs the app in development mode with hot module replacement.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder, minified with hashed filenames.

### `npm run preview`

Serves the contents of `dist` locally so you can check the production build before deploying.

## Deployment

Netlify builds with `npm run build` and publishes `dist`. The SPA fallback redirect lives in
`netlify.toml`, so client-side routes like `/projects` resolve on a hard refresh.

## Project Layout

```
index.html              Vite entry point
src/main.jsx            React root + BrowserRouter
src/App.jsx             Route definitions
src/index.css           Tailwind import, theme colors, bg-hero utility
src/pages/              Home, About, Projects, Credits
src/components/         UI, cards, hero, stack
src/Assets/Data/        Page copy and card content
```
