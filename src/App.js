import React from "react";

import "./App.css";

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

let activeAbout = "";

const handleClick = () => (activeAbout = "-active");

const App = () => (
  <main className="app">
    <Header onClick={handleClick} />
    <Hashtag />
    <Checkbox id="show" value="show" content="Mostrar Eventos" />

    <About className={activeAbout}>
      <HeaderInternal />

      <ProfileUser />
    </About>
  </main>
);

export default App;
