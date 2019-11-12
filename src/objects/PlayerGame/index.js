import React from "react";
import playerX from "../../img/player-X.png";
import playerO from "../../img/player-O.png";

import "./styles.css";

const PlayerGame = ({ content = "" }) => {
  const players = [];

  players[""] = "";
  players["x"] = playerX;
  players["o"] = playerO;

  return (
    <button className="player-game">
      {players[content] && (
        <img src={players[content]} alt={`Jogador ${content.toUpperCase()}`} />
      )}
    </button>
  );
};

export default PlayerGame;
