import React from "react";
import "./style.css";

function TypeForm() {
  return (
    <div>
      {/* <label htmlFor="ansigtspleje">
        ansigtspleje
        <input id="ansigtspleje" type="checkbox" />
      </label>
      <label htmlFor="hårpleje">
        {" "}
        hårpleje
        <input id="hårpleje" type="checkbox" />
      </label>
      <label htmlFor="dufte">
        {" "}
        dufte
        <input id="dufte" type="checkbox" />
      </label>
      <label htmlFor="elektronik">
        {" "}
        elektronik
        <input id="elektronik" type="checkbox" />
      </label>
      <label htmlFor="helsekost">
        {" "}
        helsekost
        <input id="helsekost" type="checkbox" />
      </label>
      <label htmlFor="ingenpræference">
        {" "}
        Jeg har ingen præferencer
        <input id="ingenpræference" type="checkbox" />
      </label> */}

      <div className="grid-container">
        <div className="card">
          <img src="./public/imgs/kategori/ansigtspleje.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Ansigtspleje</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/kategori/hårpleje.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Hårpleje</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/kategori/dufte.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Dufte</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/kategori/elektronik.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Elektronik</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/kategori/helse.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Helsekost</h3>
        </div>

        <div className="card">
          <h3 className="cardtitle">Ingen præference</h3>
        </div>
      </div>
    </div>
  );
}

export default TypeForm;
