import Greeting from "./components/Greeting.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <main>
        <Greeting name="Kathy" role="Aspiring React Developer" />
      </main>
      <footer className="app__footer">Built with React + Vite</footer>
    </div>
  );
}
