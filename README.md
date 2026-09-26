# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:


# Smart Classroom Occupancy Detection

Frontend-only academic project for exploring low-cost classroom occupancy detection with Arduino Uno and lightweight machine learning concepts.

## Stack

- React and JavaScript
- Vite
- React Router
- Recharts
- CSS

## Run locally

```bash
npm install
npm run dev
```

Build and lint checks:

```bash
npm run build
npm run lint
```

## Routes

- `/` - project overview
- `/dashboard` - simulated monitoring dashboard
- `/ml-comparison` - model comparison placeholder
- `/history` - simulated occupancy history
- `/hardware` - conceptual system architecture
- `/about` - project scope and technologies

## Demo boundary

The application intentionally uses frontend demonstration data from `src/data/projectData.js`. It does not claim a live Arduino connection, real sensor readings, model accuracy, or experimental ML results. The data module is the replacement point for a future API or verified project dataset.

## Vercel

This is a standard Vite SPA with no backend, database, environment variables, or Docker requirement. `vercel.json` rewrites direct route requests to `index.html` so React Router pages work on refresh after deployment.
