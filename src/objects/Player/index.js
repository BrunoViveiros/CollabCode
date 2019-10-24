import React from "react";
import playerX from "../../img/player-X.png";

import "./styles.css";

const Player = () => (
  <button className="player">
    <img src={playerX} alt="Jogador X" />
  </button>
);

export default Player;
