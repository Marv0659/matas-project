import "./style.css";
import CardTest from "./CardTest";

function KriterierForm() {
  return (
    <div className="grid-container">
      <CardTest img="/img/kriterier/eco.webp" text="Økologisk" />
      <CardTest img="/img/kriterier/allergi.webp" text="Allergivenlig" />
      <CardTest img="/img/kriterier/svane.webp" text="Svanemærket" />
      <CardTest img="/img/kriterier/uparfume.webp" text="U/ parfume" />
      <CardTest img="/img/kriterier/vegan.webp" text="Vegansk" />
      <CardTest img="/img/blank/blank.webp" text="Underordnet" />
    </div>
  );
}

export default KriterierForm;
