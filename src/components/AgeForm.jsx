import "./style.css";
import CardTest from "./CardTest";

function AgeForm() {
  return (
    <div className="grid-container">
      <CardTest img="/img/alder/teen.webp" text="Teenager" />
      <CardTest img="/img/alder/20.webp" text="20'erne" />
      <CardTest img="/img/alder/30.webp" text="30'erne" />
      <CardTest img="/img/alder/40.webp" text="40'erne" />
      <CardTest img="/img/alder/50.webp" text="50'erne" />
      <CardTest img="/img/alder/60.webp" text="60+" />
    </div>
  );
}

export default AgeForm;
