import React, { useState } from "react";

import InputCheckbox from "../InputCheckbox";

import HashtagGame from "../../components/HashtagGame";
import HistoryGame from "../../components/HistoryGame";

const WrapperHashtagHistory = () => {
  const [history, setHistory] = useState(["Start"]);
  const [active, setActive] = useState(false);

  const addHistory = player =>
    setHistory(old => [...old, `Adiciona ${player.toUpperCase()}`]);

  const showHideHistory = () => setActive(old => !!!old);

  const changeHistory = key => setHistory(old => old.slice(0, key + 1));

  return (
    <div className={`wrapper-hashtag-history ${active && "-active"}`}>
      <HashtagGame callback={addHistory} />
      <InputCheckbox
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar Eventos"
        onClick={showHideHistory}
      />
      <HistoryGame history={history} onClick={changeHistory} />
    </div>
  );
};
export default WrapperHashtagHistory;
