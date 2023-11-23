import "./style.css";
import CardTest from "./CardTest";

function PrisForm() {
  return (
    <div className="grid-container">
      <CardTest img="/imgs/pris/pris.webp" text="1 kr. - 49 kr." />
      <CardTest img="/imgs/pris/pris.webp" text="50 kr. - 99 kr." />
      <CardTest img="/imgs/pris/pris.webp" text="100 kr. - 149 kr." />
      <CardTest img="/imgs/pris/pris.webp" text="150 kr. - 249 kr." />
      <CardTest img="/imgs/pris/pris.webp" text="250 kr. - 549 kr." />
      <CardTest img="/imgs/pris/pris.webp" text="550 kr. +" />
    </div>
  );
}

export default PrisForm;
