import styles from "./popup.module.css";

function Popupbox() {
  function nextQuestion() {
    // Skjul nuværende spørgsmål
    const currentQuestion = document.getElementById("questionForm");
    currentQuestion.style.display = "none";
  }

  function popupfunction() {}
  return;
  <>
    <div class="popup">
      <h2>Spørgeskema</h2>
      <p class="question-text">Spørgsmål spørgsmåldawawd?</p>
      <form id="questionForm">
        <label for="option1">
          <input type="checkbox" id="option1" value="value1" /> 1
        </label>
        <br />
        <label for="option2">
          <input type="checkbox" id="option2" value="value2" /> 2
        </label>
        <br />
        <label for="option3">
          <input type="checkbox" id="option3" value="value3" /> 2
        </label>
        <br />
        <button type="button" onclick="nextQuestion()">
          Næste
        </button>
      </form>
    </div>
  </>;
}

export default Popupbox;
