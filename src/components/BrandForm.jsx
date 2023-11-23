import React from "react";
import "./style.css";

function BrandForm() {
  return (
    <div>
      {/* <label htmlFor="ja">
        Ja
        <input id="ja" type="checkbox" />
      </label>
      <label htmlFor="ligemeget">
        {" "}
        ligemeget
        <input id="ligemeget" type="checkbox" />
      </label> */}

      <div className="grid-container">
        <div className="card">
          <h3 className="cardtitle">Ja</h3>
        </div>

        <div className="card">
          <h3 className="cardtitle">Ligemeget</h3>
        </div>
      </div>
    </div>
  );
}

export default BrandForm;
