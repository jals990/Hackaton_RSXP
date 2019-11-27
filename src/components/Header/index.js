import React from "react";
import "./style.css";

import api from "../../services/api";

const Header = () => (
  <section className="sidebar">
    <header>
      <h1>Hackaton</h1>
    </header>

    <div className="instructions">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fuga.
        Omnis tempore mollitia, quam consequatur minima magni aut corrupti nisi
        animi in a aspernatur blanditiis eveniet nemo earum. Autem, vitae.
      </p>
    </div>
    <div className="btns">
      <button className="btn resetbtn">Reset</button>
      <button className="btn nextbtn">Próximo desafio!</button>
    </div>
  </section>
);

export default Header;
