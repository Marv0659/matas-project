import React from "react";
import AgeForm from "./AgeForm";
import "./titles.css";

function AgeStepContent() {
  return (
    <div>
      <div className="agebox">
        <h1>Hvad er modtagers alder?</h1>
        <p> Vælg kun en</p>
        <AgeForm />
      </div>
    </div>
  );
}

export default AgeStepContent;
