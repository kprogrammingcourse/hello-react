# Hello React

My first React application: a responsive personal greeting card built with React and Vite.

**Live demo:** _(add your deployed link after Step 11)_

## Features

- Displays a team of player greeting cards.
- Each card shows the player's name, role, bio, and skills.
- Responsive layout that displays cards side by side and wraps to the next line when needed.
- Adding a new player only requires editing the data file.

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
│   ├── Greeting.jsx   # Player greeting card component
│   └── Skills.jsx     # Player skills component
├── data/
│   └── team.js        # Team players data
├── App.jsx            # Root component that renders the team
├── App.css            # Layout and card styles
├── index.css          # Global styles
└── main.jsx           # Application entry point
```

## What I Learned

- How a Vite + React project is structured and started
- Writing JSX and functional components
- Passing data from parent to child with props
- Building and deploying a React app
