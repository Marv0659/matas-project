import styles from "./popup.module.css";
import React, { useState } from "react";

function Popupbox() {
  const [question, setQuestion] = useState(0);

  function nextQuestion() {
    setQuestion(question + 1);
  }

  return (
    <>
<<<<<<< HEAD
      <div className={styles.Popup}>
        <h2>Spørgeskema</h2>
        <p className="question-text">Spørgsmål spørgsmåldawawd?</p>
=======
      <div className={styles.popup}>
        <h2>Spørgeskema</h2>
        <p className={styles.questionText}>Spørgsmål spørgsmåldawawd?</p>
>>>>>>> 3b2bd6269cd85ac84967da7fd2dec4c22ddc2337
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
