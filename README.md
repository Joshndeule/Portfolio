# Joshua Ndeule — Portfolio

Personal portfolio site for Joshua Ndeule, a software engineer and full-stack developer based in Lilongwe, Malawi, with a focus on network & cybersecurity fundamentals. Built with Next.js, React, and Tailwind CSS, featuring an interactive 3D particle background powered by Three.js.

## Sections

- **Hero** — animated role intro (React Type Animation) and particle background
- **About** — background and focus areas
- **Skills** — languages, frontend, backend & databases, networking & security, tools
- **Experience** — work history
- **Education** — academic background
- **Projects** — featured full-stack, 3D, and network topology projects
- **Certifications** — Cisco Networking Academy and Microsoft/LinkedIn credentials
- **Contact** — contact form backed by an API route

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Three.js](https://threejs.org) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) / [drei](https://github.com/pmndrs/drei) for the 3D background
- [Lucide React](https://lucide.dev) for icons
- TypeScript

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/
    api/contact/route.ts   # contact form endpoint
    layout.tsx
    page.tsx
  components/               # section components (Hero, About, Skills, etc.)
  data/content.ts           # all portfolio content (profile, skills, projects, etc.)
```

Site content (profile info, skills, experience, education, projects, and certifications) is centralized in [src/data/content.ts](src/data/content.ts) — update that file to change what's displayed without touching component code.

## Available Scripts

```bash
npm run dev     # start the development server
npm run build   # build for production
npm run start   # run the production build
npm run lint    # run ESLint
```

## Deployment

The easiest way to deploy this app is with the [Vercel Platform](https://vercel.com/new). See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
