# KarshaDash-LuPhiHung

A modern dashboard web application built with Next.js, Tailwind CSS, Zustand, shadcn/ui, and more.

---

## 🚀 Features

- User authentication and profile management
- Responsive dashboard layout
- Theme switching (light/dark/system)
- Modular, maintainable codebase with reusable components

---

## 🛠 Requirements

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn/pnpm)
- **Git** (to clone the repository)

---

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/Hnng2011/KarshaDash-LuPhiHung.git](https://github.com/Hnng2011/KarshaDash-LuPhiHung.git)
   cd KarshaDash-LuPhiHung
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Run the development server:**

   ```bash
   yarn dev
   ```

## 🌐 Main Route

Dashboard:
Visit http://localhost:3000/dashboard/main
(or /dashboard if you have route rewrites)

## 📁 Project Structure

- src/app/(protected)/dashboard/main/page.tsx – Main dashboard page
- src/components/layouts/ – Reusable layouts and UI components
- src/store/ – Zustand stores
- src/config/ – Route, validation, and app configuration

## 🧠 Tech & Pattern Choices: Reasoning

### Why these technologies?

- Next.js:
  Provides a powerful React framework with built-in routing, server-side rendering (SSR), static site generation (SSG), and API routes. It’s ideal for scalable, production-ready web apps.
- Tailwind CSS:
  Enables rapid UI development with utility-first classes, leading to a consistent design system and easy customization without writing custom CSS.
- shadcn/ui:
  Offers a set of accessible, unstyled, and headless UI components that work seamlessly with Tailwind CSS, allowing for fast prototyping and easy customization.
- Zustand:
  A minimal, scalable state management library for React. Zustand is easy to use, avoids boilerplate, and is ideal for managing global state in modern React apps.
- Zod + react-hook-form:
  Zod provides type-safe schema validation, and react-hook-form is a performant, flexible form library. Combined, they enable robust, type-safe, and user-friendly form handling with instant validation feedback.
- TypeScript:
  Ensures type safety across the codebase, reducing bugs and improving developer experience.

### Why these patterns?

- Component-based architecture:
  The app is broken into small, reusable components for maintainability, scalability, and easier testing.
- Separation of concerns:
  Logic, UI, and state management are separated into different modules (store, components, config), making the codebase easier to navigate and extend.
- Hooks for state and effects:
  React hooks are used for local and global state, side effects, and form logic, resulting in cleaner and more idiomatic React code.
- Responsive & accessible UI:
  All UI components are designed to be responsive and accessible out of the box, ensuring a good experience on all devices and for all users.
