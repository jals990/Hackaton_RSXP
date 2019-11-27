import React, { useState, useEffect } from "react";
import "./style.css";

import api from "../../services/api";

function Header() {
  const [question, setQuestion] = useState({});
  const [idQuestion, setidQuestion] = useState(1);

  async function loadQuestion(numberQuestion = idQuestion) {
    if (idQuestion > 3) return;

    const response = await api.get(`/questions/${numberQuestion}`);

    setQuestion(response.data);
    setidQuestion(numberQuestion + 1);
  }

  useEffect(() => {
    loadQuestion();
  }, []);

  return (
    <section className="sidebar">
      <header>
        <h1>{question.title}</h1>
      </header>

      <div className="instructions">
        <p>{question.description}</p>
      </div>

      <div className="instructions">
        <pre>{question.code}</pre>
      </div>

      <div className="btns">
        <button
          className="btn resetbtn"
          onClick={() => loadQuestion(idQuestion)}
        >
          Reset
        </button>
        <button className="btn nextbtn" onClick={() => loadQuestion()}>
          Próximo desafio!
        </button>
      </div>
    </section>
  );
}

export default Header;
