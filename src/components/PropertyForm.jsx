import "./style.css";
import CardTest from "./CardTest";

function PropertyForm() {
  return (
    <div className="grid-container">
      <CardTest img="/imgs/egenskab/rensende.webp" text="Rensende" />
      <CardTest img="/imgs/egenskab/fugt.webp" text="Fugtgivende" />
      <CardTest img="/imgs/egenskab/glow.webp" text="Glød" />
      <CardTest img="/imgs/egenskab/ujævn.webp" text="Udjævne" />
      <CardTest img="/imgs/egenskab/urenhud.webp" text="Uren Hud" />
      <CardTest img="/imgs/egenskab/rynker.webp" text="Rynker" />
    </div>
  );
}

export default PropertyForm;
