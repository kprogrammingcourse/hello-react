import Greeting from "./components/Greeting.jsx";
import team from "./data/team.js";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <main>
        <div className="team">
          {team.length === 0 ? (
            <p className="team__empty">No players yet.</p>
          ) : (
            team.map((player) => <Greeting key={player.id} player={player} />)
          )}
        </div>
      </main>
      <footer className="app__footer">Built with React + Vite</footer>
    </div>
  );
};

export default App;
