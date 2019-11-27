import React from "react";
import "./styles/reset.css";
import "./app.css";

import Header from "./components/Header";
import Game from "./components/Game";
import Editor from "./components/Editor";

function App() {
  return (
    <div>
      <Header />
      <Editor />
      <Game />
    </div>
  );
}

export default App;
