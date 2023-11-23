import "./style.css";
import CardTest from "./CardTest";

function AgeForm() {
  return (
    <div className="grid-container">
      <CardTest img="/imgs/alder/teen.webp" text="Teenager" />
      <CardTest img="/imgs/alder/20.webp" text="20'erne" />
      <CardTest img="/imgs/alder/30.webp" text="30'erne" />
      <CardTest img="/imgs/alder/40.webp" text="40'erne" />
      <CardTest img="/imgs/alder/50.webp" text="50'erne" />
      <CardTest img="/imgs/alder/60.webp" text="60+" />
    </div>
  );
}

export default AgeForm;
