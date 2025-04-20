# Personal Portfolio

A modern, full-stack personal portfolio web application built with React, Express, TypeScript, Tailwind CSS, and Vite.
Showcases professional experience, skills, certifications, achievements, and contact information for Rajesh Goyal, Technology Leader & Engineering Manager.

---

## Features

- **Frontend:**
  - React (with Wouter for routing)
  - Modular, component-based architecture (Hero, About, Experience, Skills, etc.)
  - Responsive design with Tailwind CSS
  - SEO-friendly (React Helmet)
  - UI enhancements (Framer Motion, Radix UI, Lucide Icons)

- **Backend:**
  - Express.js API server (TypeScript)
  - Modular routing and middleware
  - Logging and error handling
  - Session management with PostgreSQL (connect-pg-simple & drizzle-orm)
  - Serves both API and static client on port 5050

- **Tooling & Build:**
  - Vite for fast development and build
  - TypeScript for type safety
  - Drizzle ORM for database schema and migrations
  - Tailwind for styling
  - Scripts for dev, build, and start

---

## Directory Structure

```
PersonalPortfolio/
├── client/              # React frontend (src/, index.html, components, pages)
├── server/              # Express backend (index.ts, routes, storage)
├── shared/              # Shared TypeScript types/schema
├── dist/                # Production build output
├── package.json         # Project dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── .gitignore
```

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm
- PostgreSQL (for session/database features)

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```
- Starts the Express server and Vite-powered React frontend on [http://localhost:5050](http://localhost:5050)

### Build & Production

```sh
npm run build
npm run start
```

### Database
- Uses Drizzle ORM for schema and migrations.
- Configure your PostgreSQL connection in environment variables as needed.

### Deployment
- Serves both API and static frontend from a single port (5050).

---

## Customization
- Update content and sections in `client/src/pages/Home.tsx` and related components.
- Modify backend routes in `server/routes.ts`.
- Adjust styles in `tailwind.config.ts` and `client/src/index.css`.

---

## License

MIT
