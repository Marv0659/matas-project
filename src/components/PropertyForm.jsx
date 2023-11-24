import "./style.css";
import CardTest from "./CardTest";

function PropertyForm() {
  return (
    <div className="grid-container">
      <CardTest img="./img/egenskab/rensende.webp" text="Rensende" />
      <CardTest img="./img/egenskab/fugt.webp" text="Fugtgivende" />
      <CardTest img="./img/egenskab/glow.webp" text="Glød" />
      <CardTest img="./img/egenskab/ujævn.webp" text="Udjævne" />
      <CardTest img="./img/egenskab/urenhud.webp" text="Uren Hud" />
      <CardTest img="./img/egenskab/rynker.webp" text="Rynker" />
    </div>
  );
}

export default PropertyForm;
