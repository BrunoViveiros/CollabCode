import React from "react";
import playerX from "../../img/player-X.png";
import playerO from "../../img/player-O.png";

import "./styles.css";

const handleClick = () => {
  console.log("lelelele");
};

const PlayerGame = ({ player = false }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;
  return (
    <button onClick={handleClick} className="player-game">
      {player && (
        <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
      )}
    </button>
  );
};

export default PlayerGame;
