# React + TypeScript Login Form & Dashboard UI Created with OpenCode 2.0 &amp; Ollama/Spark-X2.5-4B (Q8_0)

A beautiful, responsive layout built with **React**, **TypeScript**, **Bootstrap 5**, and **Recharts**.
It contains a centered login form that validates input and redirects to a styled dashboard with
cards, a revenue chart, and a data table.

![Login Dashboard](https://img.shields.io/badge/Login-Dashboard-667eea) ![License](https://img.shields.io/badge/License-MIT-000000)

---

## Features

- **Centered Login Form** — horizontally and vertically centered on the screen.
- **Input Validation** — validates email format and non-empty password.
- **Redirect** — valid login takes the user to the `/dashboard` route.
- **Dashboard Page** — visual cards, a bar chart (revenue & sales), and a data table.
- **Beautiful Styling** — distinct gradient backgrounds and Bootstrap components throughout.
- **Full-Width** — every page takes the full width of the screen.
- **Responsive** — works on mobile, tablet, and desktop.

## Getting Started

### Prerequisites

- **Node.js** (v18 or newer)
- **npm** (comes with Node.js)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. (Optional) Add your own environment variables
cp .env.example .env
# Edit the .env file with your values
```

### Running the Development Server

```bash
npm run dev
```

This starts the Vite dev server on **http://localhost:5173** (it opens the browser automatically).

### Building for Production

```bash
npm run build
```

This compiles TypeScript and bundles the application into the `dist` folder.

### Previewing Production Build

```bash
npm run preview
```

---

## Project Structure

```
.
├── index.html              # HTML entry point
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── .env.example            # Example env file
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── LICENSE                 # MIT License
└── src
    ├── main.tsx            # React entry point
    ├── App.tsx             # Root component (renders Login / Dashboard)
    ├── index.css           # Global styles (full-width/height)
    ├── Login.css           # Login screen styles
    ├── Dashboard.css       # Dashboard styles
    └── components
        ├── Login.tsx       # Login form component
        └── Dashboard.tsx   # Dashboard component (cards, chart, table)
```

---

## Navigating Between Pages

The login form uses a **client-side state** to switch between pages:

1. User enters a **valid email** and **any password** and clicks **Login**.
2. The application state sets `isAuthenticated` to `true`.
3. The **Login** component is replaced by the **Dashboard** component.
4. You can navigate back to login by clicking **Logout** in the dashboard header.

> **Note:** Since the routing is done with React state (not `react-router`), the `/dashboard` URL
> is conceptually reached when the dashboard renders. If you want URL-based routing with
> `react-router-dom`, replace the `App.tsx` logic accordingly.

---

## 🛠️ Scripts

| Script             | Description                                      |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Start the Vite development server                 |
| `npm run build`    | Type-check and build for production              |
| `npm run preview`  | Preview the production build                     |

---

## License

This project is released under the **MIT License**. See the [`LICENSE`](./LICENSE) file for details.
