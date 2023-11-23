import CardTest from "./CardTest";
import "./style.css";
function GenderForm() {
  return (
    <div className="grid-container">
      <CardTest img="./public/imgs/gender/male.webp" text="Mand" />
      <CardTest img="./public/imgs/gender/female.webp" text="Kvinde" />
      <CardTest img="#" text="Underordnet" />
    </div>
  );
}

export default GenderForm;
