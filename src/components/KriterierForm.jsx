import "./style.css";
import CardTest from "./CardTest";

function KriterierForm() {
  return (
    <div className="grid-container">
      <CardTest img="/imgs/kriterier/eco.webp" text="Økologisk" />
      <CardTest img="/imgs/kriterier/allergi.webp" text="Allergivenlig" />
      <CardTest img="/imgs/kriterier/svane.webp" text="Svanemærket" />
      <CardTest img="/imgs/kriterier/uparfume.webp" text="U/ parfume" />
      <CardTest img="/imgs/kriterier/vegan.webp" text="Vegansk" />
      <CardTest text="Ligemeget" />
    </div>
  );
}

export default KriterierForm;
