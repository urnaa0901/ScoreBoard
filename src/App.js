import { useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import "./styles/app.css";
function App() {
  const [players, setPlayers] = useState([
    { name: "Erdene", score: 12, id: 1 },
    { name: "Bat", score: 24, id: 2 },
    { name: "Bold", score: 36, id: 3 },
    { name: "Dulmaa", score: 48, id: 4 },
    { name: "Tumur", score: 60, id: 5 },
    { name: "Dolgor", score: 72, id: 6 },
  ]);

  return (
    <div className="App">
      <Header />
      {players.map((player) => (
        <Player
          name={player.name}
          score={player.score}
          key={player.id}
          id={player.id}
        />
      ))}
    </div>
  );
}

export default App;
