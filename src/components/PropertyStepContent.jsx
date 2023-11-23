import React from "react";
import PropertyForm from "./PropertyForm";

function PropertyStepContent() {
  return (
    <div>
      <div className="genderbox">
        <h1>Hvilken egenskab skal produktet besidde?</h1>
        <p>Vælg blot et kriterie</p>
        <PropertyForm />
      </div>
    </div>
  );
}

export default PropertyStepContent;
