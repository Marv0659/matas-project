import React from "react";
import "./titles.css";
import TypeForm from "./TypeForm";

function TypeStepContent() {
  return (
    <div>
      <div className="typebox">
        <h1>Hvilken slags vare søger du?</h1>
        <p>Vælg blot et kriterie</p>
        <TypeForm />
      </div>
    </div>
  );
}

export default TypeStepContent;
