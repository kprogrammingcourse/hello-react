import Greeting from "./components/Greeting.jsx";
import "./App.css";
import person_1 from "./data/profile.js";

export default function App() {
  return (
    <div className="app">
      <main>
        <Greeting profile={person_1} />
      </main>
      <footer className="app__footer">Built with React + Vite</footer>
    </div>
  );
}
