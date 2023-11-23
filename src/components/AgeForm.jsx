import "./style.css";
import CardTest from "./CardTest";

function AgeForm() {
  return (
    <div className="grid-container">
      <CardTest img="/imgs/alder/teen.webp" text="Teen" />
      <CardTest img="./public/imgs/alder/20.webp" text="20erne" />
      <CardTest img="./public/imgs/alder/30.webp" text="30erne" />
      <CardTest img="./public/imgs/alder/40.webp" text="40erne" />
      <CardTest img="./public/imgs/alder/50.webp" text="50erne" />
      <CardTest img="./public/imgs/alder/60.webp" text="60+" />
    </div>
  );
}

export default AgeForm;
