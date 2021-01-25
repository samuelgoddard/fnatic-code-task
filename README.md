# Fnatic Code Task
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) by Sam Goddard for Fnatic.

## Technologies Used
- [NextJs](https://nextjs.org/) - For React based static site generation
- [TailwindCSS](https://tailwindcss.com/) - For utility CSS
- [PostCSS](https://postcss.org/) - For Tailwind + additional CSS functionality

## Requirements
- Node.js 12.13 + (required for Tailwind 2.0, I use [NVM](https://github.com/nvm-sh/nvm) to manage my local Node version)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) to see the local site.

To export static files locally:
```bash
npm run export
# or
yarn export
```
Generated files will be created in the `out` folder