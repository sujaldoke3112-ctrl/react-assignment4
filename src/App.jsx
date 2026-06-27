import { useState } from "react";

function App() {
  const players = {
    virat: {
      name: "Virat Kohli",
      role: "Batsman",
      country: "India",
    },
    rohit: {
      name: "Rohit Sharma",
      role: "Batsman",
      country: "India",
    },
    dhoni: {
      name: "MS Dhoni",
      role: "Wicket Keeper Batsman",
      country: "India",
    },
  };

  const [player, setPlayer] = useState(players.virat);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile Card</h2>

      <button onClick={() => setPlayer(players.virat)}>
        Virat Kohli
      </button>

      <button onClick={() => setPlayer(players.rohit)}>
        Rohit Sharma
      </button>

      <button onClick={() => setPlayer(players.dhoni)}>
        MS Dhoni
      </button>

      <hr />

      <h3>Name: {player.name}</h3>
      <h3>Role: {player.role}</h3>
      <h3>Country: {player.country}</h3>
    </div>
  );
}

export default App;