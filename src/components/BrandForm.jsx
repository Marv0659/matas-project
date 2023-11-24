import "./style.css";
import CardTest from "./CardTest";

function BrandForm() {
  return (
    <div className="grid-container">
      <CardTest img="/img/blank/blank.webp" text="Ja" />
      <CardTest img="/img/blank/blank.webp" text="Ingen præferencer" />
      <CardTest img="/img/blank/blank.webp" text="Nej" />
    </div>
  );
}

export default BrandForm;
