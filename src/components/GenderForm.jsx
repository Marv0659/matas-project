import React from "react";

function GenderForm() {
  return (
    <div>
      <label htmlFor="mand">
        Mand
        <input id="mand" type="checkbox" />
      </label>
      <label htmlFor="kvinde">
        {" "}
        Kvinde
        <input id="kvinde" type="checkbox" />
      </label>
      <label htmlFor="underordnet">
        {" "}
        Underordnet
        <input id="underordnet" type="checkbox" />
      </label>
    </div>
  );
}

export default GenderForm;
