# GB Eyes Marketing Website

Enterprise marketing website for **GB Eyes** Dispatch Management System.

## Tech Stack

- React (Vite)
- Bootstrap 5
- React Router
- Bootstrap Icons

## Getting Started

```bash
cd gbeyes-website
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/features` | Features |
| `/contact` | Contact |

## Portal

Login and portal links point to [https://portal.gbeyes.com](https://portal.gbeyes.com).

## Project Structure

```
src/
  components/   # Reusable UI, layout, home, features, contact, mockups
  pages/        # HomePage, FeaturesPage, ContactPage
  layouts/      # MainLayout
  router/       # AppRouter
  styles/       # Global CSS theme and animations
  constants/    # Links and feature data
  hooks/        # useReveal scroll animation
```
