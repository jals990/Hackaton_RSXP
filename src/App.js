import React from "react";
import "./styles/reset.css";
import "./app.css";

import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  return (
    <div>
      <Header />
      <Game />
    </div>
  );
}

export default App;
