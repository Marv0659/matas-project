import "./style.css";

function PropertyForm() {
  return (
    <div>
      {/* <label htmlFor="rensende">
        rensende
        <input id="rensende" type="checkbox" />
      </label>
      <label htmlFor="fugtgivende">
        {" "}
        fugtgivende
        <input id="fugtgivende" type="checkbox" />
      </label>
      <label htmlFor="giveglød">
        {" "}
        giveglød
        <input id="giveglød" type="checkbox" />
      </label>
      <label htmlFor="udjævnehudtone">
        {" "}
        udjævnehudtone
        <input id="udjævnehudtone" type="checkbox" />
      </label>
      <label htmlFor="urenheder">
        {" "}
        urenheder
        <input id="urenheder" type="checkbox" />
      </label>
      <label htmlFor="udglatte">
        {" "}
        udglatte
        <input id="udglatte" type="checkbox" />
      </label> */}

      <div className="grid-container">
        <div className="card">
          <img src="./public/imgs/egenskab/rensende.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Rensende</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/egenskab/fugt.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Fugtgivende</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/egenskab/glow.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Glød</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/egenskab/ujævn.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Udjævne</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/egenskab/urenhud.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Uren Hud</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/egenskab/rynker.webp" alt="" className="card-image" />
          <h3 className="cardtitle">Rynker</h3>
        </div>
      </div>
    </div>
  );
}

export default PropertyForm;
