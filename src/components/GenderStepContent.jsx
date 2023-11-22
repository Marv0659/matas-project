import GenderForm from "./GenderForm";
import "./titles.css";

export default function GenderStepContent() {
  return (
    <div>
      <div className="genderbox">
        <h1>Hvilket køn er modtager?</h1>
        <p>Vælg blot et kriterie</p>
        <GenderForm />
      </div>
    </div>
  );
}
