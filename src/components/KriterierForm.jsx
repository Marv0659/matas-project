import React from "react";
import "./style.css";

function KriterierForm() {
  return (
    <div>
      {/* <label htmlFor="økologisk">
        økologisk
        <input id="økologisk" type="checkbox" />
      </label>
      <label htmlFor="allergi">
        {" "}
        allergi
        <input id="allergi" type="checkbox" />
      </label>
      <label htmlFor="svane">
        {" "}
        svane
        <input id="svane" type="checkbox" />
      </label>
      <label htmlFor="uparfume">
        {" "}
        uparfume
        <input id="uparfume" type="checkbox" />
      </label>
      <label htmlFor="vegansk">
        {" "}
        vegans
        <input id="vegans" type="checkbox" />
      </label>
      <label htmlFor="ligemeget">
        {" "}
        ligemeget
        <input id="ligemeget" type="checkbox" />
      </label> */}

      <div className="grid-container">
        <div className="card">
          <img src="./public/imgs/kriterier/eco.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Økologisk</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/kriterier/allergi.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Allergivenlig</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/kriterier/svane.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Svanemærket</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/kriterier/uparfume.webp" alt="" className="card-image" />
          <h3 className="cardtitle">U/ parfume</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/kriterier/vegan.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Vegansk</h3>
        </div>

        <div className="card">
          <h3 className="cardtitle">Ligemeget</h3>
        </div>
      </div>
    </div>
  );
}

export default KriterierForm;
