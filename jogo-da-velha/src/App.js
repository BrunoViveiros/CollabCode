import React, { useState } from "react";

import "./App.css";

import WrapperHashtagHistory from "./objects/WrapperHashtagHistory";
import LayerDark from "./objects/LayerDark";

import HeaderGame from "./components/HeaderGame";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <WrapperHashtagHistory />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />

        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
