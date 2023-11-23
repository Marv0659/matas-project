import React from "react";
import "./titles.css";
import KriterierForm from "./KriterierForm";

function KriterierStepContent() {
  return (
    <div>
      <div className="kriterierbox">
        <h1>Andre kriterier produktet skal have?</h1>
        <p>Vælg mindst ét kriterie</p>
        <KriterierForm />
      </div>
    </div>
  );
}

export default KriterierStepContent;
