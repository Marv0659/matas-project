import React from "react";
import "./card.css";

function CardTest(props) {
  return (
    <>
      <label className="card">
        <input type="checkbox" />
        <img src={props.img} alt="" className="card-image" />
        <h3 className="cardtitle">{props.text}</h3>
      </label>
    </>
  );
}

export default CardTest;
