import { useState } from "react";
import GenderStepContent from "./GenderStepContent";
import AgeStepContent from "./AgeStepContent";
import TypeStepContent from "./TypeStepContent";
import { Steps, Popover, Button } from "antd"; // Assuming you are using Ant Design components
import PropertyStepContent from "./PropertyStepContent";
import KriterierStepContent from "./KriterierStepContent";
import PrisStepContent from "./PrisStepContent";
import BrandStepContent from "./BrandStepContent";
import ResultatStepContent from "./ResultatStepContent";
import "./buttons.css";

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

//const GenderStepContent = () => <p>Select gender here.</p>;

const StepsTab = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handlePreviousStep = () => {
    // Add any logic you need before moving to the next step
    // For now, let's just increment the current step by 1
    setCurrentStep(currentStep - 1);
  };

  const handleNextStep = () => {
    // Add any logic you need before moving to the next step
    // For now, let's just increment the current step by 1
    setCurrentStep(currentStep + 1);
  };

  const stepContent = [
    <GenderStepContent />,
    <AgeStepContent />,
    <TypeStepContent />,
    <PropertyStepContent />,
    <KriterierStepContent />,
    <BrandStepContent />,
    <PrisStepContent />,
    <ResultatStepContent />,
    // ... other custom components
  ];

  return (
    <>
      <Steps
        current={currentStep}
        progressDot={customDot}
        items={[
          {
            title: "Køn",
          },
          {
            title: "Alder",
          },
          {
            title: "Type",
          },
          {
            title: "Egenskab",
          },
          {
            title: "Kriterier",
          },
          {
            title: "Brand",
          },
          {
            title: "Pris",
          },
          {
            title: "Resultat",
          },
        ]}
      />
      <div className="boxstyling">
        <div style={{ marginTop: 16 }}>{stepContent[currentStep]}</div>
        <Button type="primary" onClick={handleNextStep}>
          Næste
        </Button>
        <Button type="secondary" onClick={handlePreviousStep} disabled={currentStep === 0}>
          Tilbage
        </Button>
      </div>
    </>
  );
};

export default StepsTab;
