import React from "react";
import TagGame from "../../objects/TagGame";

const HistoryGame = () => (
  <ol className="history-game">
    <li className="action">
      <TagGame content="Adicionou X" />
    </li>
    <li className="action">
      <TagGame content="Adicionou O" />
    </li>
    <li className="action">
      <TagGame content="Adicionou X" />
    </li>
    <li className="action">
      <TagGame content="Adicionou O" />
    </li>
    <li className="action">
      <TagGame content="Adicionou X" />
    </li>
    <li className="action">
      <TagGame content="Adicionou O" />
    </li>
    <li className="action">
      <TagGame content="Adicionou X" />
    </li>
    <li className="action">
      <TagGame content="Adicionou O" />
    </li>
  </ol>
);

export default HistoryGame;
