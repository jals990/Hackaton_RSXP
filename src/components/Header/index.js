import React from "react";
import "./style.css";

// state

// changeInputValue(text) {
//   this.setState()
// }

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


    <button className="nextbtn">Próximo desafio!</button>
  </section>
);

export default Header;
