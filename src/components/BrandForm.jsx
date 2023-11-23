import "./style.css";
import CardTest from "./CardTest";

function BrandForm() {
  return (
    <div className="grid-container">
      <CardTest img="./public/imgs/blank/blank.webp" text="Ja" />
      <CardTest img="./public/imgs/blank/blank.webp" text="Ingen præferencer" />
      <CardTest img="./public/imgs/blank/blank.webp" text="Nej" />
    </div>
  );
}

export default BrandForm;
