import "./style.css";
import CardTest from "./CardTest";

function TypeForm() {
  return (
    <div className="grid-container">
      <CardTest img="/imgs/kategori/ansigtspleje.webp" text="Ansigtpleje" />
      <CardTest img="/imgs/kategori/hårpleje.webp" text="Hårpleje" />
      <CardTest img="/imgs/kategori/dufte.webp" text="Dufte" />
      <CardTest img="/imgs/kategori/elektronik.webp" text="Elektronik" />
      <CardTest img="/imgs/kategori/helse.webp" text="Helsekost" />
      <CardTest text="Ingen præference" />
    </div>
  );
}

export default TypeForm;
