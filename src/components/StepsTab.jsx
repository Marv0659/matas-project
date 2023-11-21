import { useState } from "react";
import GenderStepContent from "./GenderStepContent";
import { Steps, Popover, Button } from "antd"; // Assuming you are using Ant Design components

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
      <div style={{ marginTop: 16 }}>{stepContent[currentStep]}</div>
      <Button type="primary" onClick={handleNextStep}>
        Next Step
      </Button>
      <Button type="secondary" onClick={handlePreviousStep} disabled={currentStep === 0}>
        Previous Step
      </Button>
    </>
  );
};

export default StepsTab;
