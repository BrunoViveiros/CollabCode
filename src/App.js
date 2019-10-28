import React from "react";

import "./App.css";

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Label from "./objects/Label";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Label content="Mostrar Eventos" />
  </main>
);

export default App;
