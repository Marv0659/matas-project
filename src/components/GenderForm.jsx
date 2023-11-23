import "./style.css";

function GenderForm() {
  return (
    <div>
      {/* <label htmlFor="mand">
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
      </label> */}

      <div className="grid-container">
        <div className="card">
          <img src="./public/imgs/gender/male.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Mand</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/gender/female.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Kvinde</h3>
        </div>

        <div className="card">
          <h3 className="cardtitle">Underordnet</h3>
        </div>
      </div>
      {/* <label htmlFor="kvinde" className="card">
        {" "}
        Kvinde
        <input id="kvinde" type="checkbox" />
        <img src="./public/imgs/egenskab/glow.webp" alt="" className="card-image" />
        <h3 className="cardtitle">Kvinde</h3>
      </label>  */}
      {/* <label htmlFor="glowCheckbox" className="card">
        <input id="glowCheckbox" type="checkbox" />
        <img src="./public/imgs/egenskab/glow.webp" alt="" className="card-image" />
        <h3 className="cardtitle">Glow</h3>
      </label>  */}
    </div>
  );
}

export default GenderForm;
