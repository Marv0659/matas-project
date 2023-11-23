import "./style.css";
import CardTest from "./CardTest";

function TypeForm() {
  return (
    <div className="grid-container">
      <CardTest img="./public/imgs/kategori/ansigtspleje.webp" text="Ansigtpleje" />
      <CardTest img="./public/imgs/kategori/hårpleje.webp" text="Hårpleje" />
      <CardTest img="./public/imgs/kategori/dufte.webp" text="Dufte" />
      <CardTest img="./public/imgs/kategori/elektronik.webp" text="Elektronik" />
      <CardTest img="./public/imgs/kategori/helse.webp" text="Helsekost" />
      <CardTest text="Ingen præference" />
    </div>
  );
}

export default TypeForm;
