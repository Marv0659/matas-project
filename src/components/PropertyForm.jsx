import "./style.css";
import CardTest from "./CardTest";

function PropertyForm() {
  return (
    <div className="grid-container">
      <CardTest img="./public/imgs/egenskab/rensende.webp" text="Rensende" />
      <CardTest img="./public/imgs/egenskab/fugt.webp" text="Fugtgivende" />
      <CardTest img="./public/imgs/egenskab/glow.webp" text="Glød" />
      <CardTest img="./public/imgs/egenskab/ujævn.webp" text="Udjævne" />
      <CardTest img="./public/imgs/egenskab/urenhud.webp" text="Uren Hud" />
      <CardTest img="./public/imgs/egenskab/rynker.webp" text="Rynker" />
    </div>
  );
}

export default PropertyForm;
