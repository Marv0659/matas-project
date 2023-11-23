import "./style.css";
import CardTest from "./CardTest";

function PrisForm() {
  return (
    <div className="grid-container">
      <CardTest img="/imgs/pris/pris.webp" text="1kr - 49kr" />
      <CardTest img="/imgs/pris/pris.webp" text="50kr - 99kr" />
      <CardTest img="/imgs/pris/pris.webp" text="100kr - 149kr" />
      <CardTest img="/imgs/pris/pris.webp" text="150kr - 249kr" />
      <CardTest img="/imgs/pris/pris.webp" text="250kr - 549kr" />
      <CardTest img="/imgs/pris/pris.webp" text="550kr +" />
    </div>
  );
}

export default PrisForm;
