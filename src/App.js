import React from "react";

import "./App.css";

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" content="Mostrar Eventos" />

    <About />
  </main>
);

export default App;
