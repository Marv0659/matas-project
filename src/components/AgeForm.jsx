import "./style.css";

function AgeForm() {
  return (
    <div>
      {/* <label htmlFor="teen">
        Teen
        <input id="teen" type="checkbox" />
      </label>
      <label htmlFor="20erne">
        {" "}
        20erne
        <input id="20erne" type="checkbox" />
      </label>
      <label htmlFor="30erne">
        {" "}
        30erne
        <input id="30erne" type="checkbox" />
      </label>
      <label htmlFor="40erne">
        {" "}
        40erne
        <input id="40erne" type="checkbox" />
      </label>
      <label htmlFor="50erne">
        {" "}
        50erne
        <input id="50erne" type="checkbox" />
      </label>
      <label htmlFor="60+">
        {" "}
        60+
        <input id="60+" type="checkbox" />
      </label> */}

      <div className="grid-container">
        <div className="card">
          <img src="./public/imgs/alder/teen.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Teen</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/alder/20.webp" alt="" className="card-image" />
          <h3 className="cardtitle">20erne</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/alder/30.webp" alt="" className="card-image" />
          <h3 className="cardtitle">30erne</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/alder/40.webp" alt="" className="card-image" />
          <h3 className="cardtitle">40erne</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/alder/50.webp" alt="" className="card-image" />
          <h3 className="cardtitle">50erne</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/alder/60.webp" alt="" className="card-image" />
          <h3 className="cardtitle">60+</h3>
        </div>
      </div>
    </div>
  );
}

export default AgeForm;
