import Greeting from "./components/Greeting.jsx";
import team from "./data/team.js";
import "./App.css";

const App = () => {
  return (
    <div className="team">
      {team.length === 0 ? (
        <h1 className="team_empty">"No players yet"</h1>
      ) : (
        team.map((player) => <Greeting key={player.id} player={player} />)
      )}
    </div>
  );
};

export default App;
