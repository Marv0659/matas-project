import "./style.css";

function PrisForm() {
  return (
    <div>
      {/* <label htmlFor="1-49">
        1-49
        <input id="1-49" type="checkbox" />
      </label>
      <label htmlFor="50-99">
        {" "}
        50-99
        <input id="50-99" type="checkbox" />
      </label>
      <label htmlFor="100-149">
        {" "}
        100-149
        <input id="100-149" type="checkbox" />
      </label>
      <label htmlFor="150-249">
        {" "}
        150-249
        <input id="150-249" type="checkbox" />
      </label>
      <label htmlFor="250-549">
        {" "}
        250-549
        <input id="250-549" type="checkbox" />
      </label>
      <label htmlFor="550">
        {" "}
        550
        <input id="550" type="checkbox" />
      </label> */}

      <div className="grid-container">
        <div className="card">
          <img src="./public/imgs/pris/pris.webp" alt="" className="card-image" />
          <h3 className="cardtitle">1kr - 49kr</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/pris/pris.webp" alt="" className="card-image" />
          <h3 className="cardtitle">50kr - 99kr</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/pris/pris.webp" alt="" className="card-image" />
          <h3 className="cardtitle">100kr - 149kr</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/pris/pris.webp" alt="" className="card-image" />
          <h3 className="cardtitle">150kr - 249kr</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/pris/pris.webp" alt="" className="card-image" />
          <h3 className="cardtitle">250kr - 549kr</h3>
        </div>

        <div className="card">
          <img src="./public/imgs/pris/pris.webp" alt="" className="card-image" />
          <h3 className="cardtitle">550kr +</h3>
        </div>
      </div>
    </div>
  );
}

export default PrisForm;
