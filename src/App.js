import React from "react";

import "./App.css";

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import AvatarProfile from "./objects/AvatarProfile";

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import HeaderInternal from "./components/HeaderInternal";

import Profile from "./img/avatar.jpg";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" content="Mostrar Eventos" />

    <About>
      <HeaderInternal />

      <AvatarProfile src={Profile} alt="Avatar do Bruno Fernandes" />
    </About>
  </main>
);

export default App;
