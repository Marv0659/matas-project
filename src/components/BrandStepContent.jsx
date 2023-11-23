import React from "react";
import BrandForm from "./BrandForm";
import "./titles.css";

function BrandStepContent() {
  return (
    <div>
      <h1>Er der særlige ønsker til brand?</h1>
      <p>Vælg mindst én</p>
      <BrandForm />
    </div>
  );
}

export default BrandStepContent;
