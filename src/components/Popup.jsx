import styles from "./popup.module.css";
import React, { useState } from "react";

function Popupbox() {
  const [question, setQuestion] = useState(0);

  function nextQuestion() {
    setQuestion(question + 1);
  }

  return (
    <>
      <div className={styles.popup}>
        <h2>Spørgeskema</h2>
        <p className={styles.questionText}>Spørgsmål spørgsmåldawawd?</p>
        <form id="questionForm">
          <label htmlFor="option1">
            <input type="checkbox" id="option1" value="value1" /> 1
          </label>
          <br />
          <label htmlFor="option2">
            <input type="checkbox" id="option2" value="value2" /> 2
          </label>
          <br />
          <label htmlFor="option3">
            <input type="checkbox" id="option3" value="value3" /> 2
          </label>
          <br />
          <button type="button" onClick={nextQuestion()}>
            Næste
          </button>
        </form>
      </div>
    </>
  );
}

export default Popupbox;
