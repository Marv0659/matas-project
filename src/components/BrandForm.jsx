import "./style.css";
import CardTest from "./CardTest";

function BrandForm() {
  return (
    <div className="grid-container">
      <CardTest text="Ja" />
      <CardTest text="Ingen præferencer" />
      <CardTest text="Nej" />
    </div>
  );
}

export default BrandForm;
