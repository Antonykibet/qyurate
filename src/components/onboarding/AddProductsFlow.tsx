import { useState } from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { OnboardingData } from "./OnboardingFlow";
import { SelectCataloguesStep } from "./SelectCataloguesStep";
import { AddProductsStep } from "./AddProductsStep";

interface AddProductsFlowProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export function AddProductsFlow({
  data,
  updateData,
  nextStep,
  prevStep,
}: AddProductsFlowProps) {
  const [subStep, setSubStep] = useState(0);

  const subSteps = [
    { id: 0, title: "Select Catalogues", component: SelectCataloguesStep },
    { id: 1, title: "Add Products", component: AddProductsStep },
  ];

  const handleNextSubStep = () => {
    if (subStep < subSteps.length - 1) {
      setSubStep(subStep + 1);
    } else {
      nextStep();
    }
  };

  const handlePrevSubStep = () => {
    if (subStep > 0) {
      setSubStep(subStep - 1);
    } else {
      prevStep();
    }
  };

  const CurrentSubStepComponent = subSteps[subStep].component;

  return (
    <div className="space-y-8">
      {/* Sub-stepper */}
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between">
          {subSteps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors text-sm ${
                    index < subStep
                      ? "bg-primary border-primary text-primary-foreground"
                      : index === subStep
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {index < subStep ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span
                  className={`text-xs mt-2 text-center ${
                    index === subStep
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {index < subSteps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-2 transition-colors ${
                    index < subStep ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sub-step Content */}
      <CurrentSubStepComponent
        data={data}
        updateData={updateData}
        nextStep={handleNextSubStep}
        prevStep={handlePrevSubStep}
        isFirstSubStep={subStep === 0}
        isLastSubStep={subStep === subSteps.length - 1}
      />
    </div>
  );
}
