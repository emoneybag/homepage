# S&R Group — Homepage

The official website for **S&R Group**, a web design and development business that builds modern, fast and user-friendly websites for businesses.

The site is a small Next.js application with a homepage, a portfolio and a contact page whose form sends messages straight to our inbox.

## Features

- **Three pages:** Home (`/`), Portfolio (`/portfolio`) and Contact (`/contact`)
- **Light and dark themes** with a toggle in the navbar. The choice is saved in the browser and defaults to the visitor's system setting
- **Working contact form** that validates input on the server and delivers email through [Resend](https://resend.com), using a branded React Email template
- **Scroll-triggered text animations** (blur-in reveals) that respect the "reduce motion" system setting
- **Responsive design**, from phones to large desktops
- **Apple-style navigation bar**: translucent, blurred and pinned to the top of the screen

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) 16 (App Router) |
| UI | React 19, [Tailwind CSS](https://tailwindcss.com) 4 |
| Language | TypeScript 5 |
| Email | [Resend](https://resend.com) + [React Email](https://react.email) |
| Fonts | `next/font` (Unbounded for display headings) |
| Linting | ESLint 9 with `eslint-config-next` |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) 20 or newer
- npm (included with Node.js)
- A [Resend](https://resend.com) API key, only needed if you want the contact form to send email locally

### Installation

```bash
git clone https://github.com/emoneybag/homepage.git
cd homepage
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
```

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes, for the contact form | API key used to send email through Resend |

The sender and recipient addresses are currently set at the top of `src/app/api/contact/route.ts`. The sender must belong to a domain verified in Resend.

Never commit `.env.local` or any other secrets. `.env*` files are already ignored by Git.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page reloads as you edit files.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

Before pushing, it's worth running:

```bash
npm run lint && npx tsc --noEmit && npm run build
```

## Project structure

```text
homepage/
├── public/
│   └── images/               Logo files
├── src/
│   ├── app/
│   │   ├── api/contact/      Contact form endpoint (POST /api/contact)
│   │   ├── contact/          Contact page
│   │   ├── portfolio/        Portfolio page
│   │   ├── globals.css       Theme colors, animations and global styles
│   │   ├── layout.tsx        Root layout, fonts and metadata
│   │   └── page.tsx          Homepage
│   ├── components/
│   │   ├── Navbar.tsx        Navigation bar and theme toggle
│   │   ├── Reveal.tsx        Scroll-triggered text and block animations
│   │   └── ThemeProvider.tsx Light/dark theme state
│   └── emails/
│       └── contact-form-email.tsx   Email template for contact messages
├── AGENTS.md / CLAUDE.md     Instructions for AI coding assistants
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Theming

Colors are defined as CSS variables in `src/app/globals.css` and exposed to Tailwind as semantic classes, so components never hard-code light or dark values.

| Class | Dark theme | Light theme |
| --- | --- | --- |
| `bg-page` | Black | White |
| `bg-surface` | Dark gray | Light gray |
| `bg-surface-2` | Lighter dark gray | White |
| `text-fg` | Near-white | Near-black |
| `text-muted` | Light gray | Dark gray |
| `text-accent` | Bright amber | Deep amber |

To change the look of a theme, edit the variables in `:root` (light) and `html.dark` (dark). The theme is applied by toggling a `dark` class on the `<html>` element.

## Contact form

1. The form on `/contact` posts JSON to `/api/contact`.
2. The route validates the fields, then sends an email through Resend using the `ContactFormEmail` template.
3. The visitor's address is set as the reply-to, so replying to the notification email answers them directly.

## Deployment

The site can be deployed to any host that supports Next.js, such as [Vercel](https://vercel.com). Add `RESEND_API_KEY` to the host's environment variables before deploying, and make sure the sending domain is verified in Resend.

## Project status

In active development. Design, content and portfolio projects will continue to evolve.

## License

Copyright © 2026 S&R Group. All rights reserved.

This is proprietary software. The source code, design, text, logos and other assets in this repository may not be copied, modified, distributed or used without written permission from S&R Group. See [LICENSE](./LICENSE) for details.