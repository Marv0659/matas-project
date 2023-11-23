import "./style.css";
import CardTest from "./CardTest";

function KriterierForm() {
  return (
    <div className="grid-container">
      <CardTest img="./public/imgs/kriterier/eco.webp" text="Økologisk" />
      <CardTest img="./public/imgs/kriterier/allergi.webp" text="Allergivenlig" />
      <CardTest img="./public/imgs/kriterier/svane.webp" text="Svanemærket" />
      <CardTest img="./public/imgs/kriterier/uparfume.webp" text="U/ parfume" />
      <CardTest img="./public/imgs/kriterier/vegan.webp" text="Vegansk" />
      <CardTest img="./public/imgs/blank/blank.webp" text="Underordnet" />
    </div>
  );
}

export default KriterierForm;
