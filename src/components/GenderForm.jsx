import CardTest from "./CardTest";
import "./style.css";
function GenderForm() {
  return (
    <div className="grid-container">
      <CardTest img="./img/gender/male.webp" text="Mand" />
      <CardTest img="./img/gender/female.webp" text="Kvinde" />
      <CardTest img="#" text="Underordnet" />
    </div>
  );
}

export default GenderForm;
