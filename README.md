# Hello React

My first React application: a responsive personal greeting card built with React and Vite.

**Live demo:** _(add your deployed link after Step 11)_

## Features

- Reusable `Greeting` component that receives data through props
- Responsive, centered card layout
- Custom favicon and page metadata

## Tech Stack

- [React](https://react.dev)
- [Vite](https://vite.dev)
- CSS
- ESLint

## Getting Started

```bash
git clone https://github.com/YOUR-USERNAME/hello-react.git
cd hello-react
npm install
npm run dev
```

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build for production into `dist/`    |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Check code quality with ESLint       |

## Project Structure

```text
src/
├── components/
│   └── Greeting.jsx   # Greeting card component (props: name, role)
├── App.jsx            # Root component
├── App.css            # Layout and card styles
├── index.css          # Global styles
└── main.jsx           # Entry point
```

## What I Learned

- How a Vite + React project is structured and started
- Writing JSX and functional components
- Passing data from parent to child with props
- Building and deploying a React app
