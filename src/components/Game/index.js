import React from "react";
import Character from "../Character";
import "./style.css";

const Game = () => (
  <section className="game">
    <div className="score">000000</div>
    <Character />
  </section>
);

export default Game;