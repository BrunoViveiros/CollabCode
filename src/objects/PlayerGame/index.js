import React from "react";
import playerX from "../../img/player-X.png";
import playerO from "../../img/player-O.png";

import "./styles.css";

const PlayerGame = ({ player = false }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;
  return (
    <button className="player-game">
      {player && (
        <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
      )}
    </button>
  );
};

export default PlayerGame;
