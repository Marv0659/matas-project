import React from "react";
import "./titles.css";
import PrisForm from "./PrisForm";

function PrisStepContent() {
  return (
    <div>
      <div className="prisbox">
        <h1>Hvilken prisklasse søger du i?</h1>
        <p>Vælg mindst ét kriterie</p>
        <PrisForm />
      </div>
    </div>
  );
}

export default PrisStepContent;
