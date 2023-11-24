import "./style.css";
import CardTest from "./CardTest";

function TypeForm() {
  return (
    <div className="grid-container">
      <CardTest img="./img/kategori/ansigtspleje.webp" text="Ansigtpleje" />
      <CardTest img="./img/kategori/hårpleje.webp" text="Hårpleje" />
      <CardTest img="./img/kategori/dufte.webp" text="Dufte" />
      <CardTest img="./img/kategori/elektronik.webp" text="Elektronik" />
      <CardTest img="./img/kategori/helse.webp" text="Helsekost" />
      <CardTest img="./img/blank/blank.webp" text="Ingen præference" />
    </div>
  );
}

export default TypeForm;
