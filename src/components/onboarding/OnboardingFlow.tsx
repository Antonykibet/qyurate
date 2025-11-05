import { useState } from "react";
import { ShopDesignStep } from "./ShopDesignStep";
import { AddProductsFlow } from "./AddProductsFlow";
import { CredentialsStep } from "./CredentialsStep";
import { Check } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  catalogueId: string;
}

export interface OnboardingData {
  // Shop Design
  businessName: string;
  heroText: string;
  heroImage: string;
  logo: string;
  colorPalette: string;
  
  // Catalogues & Products
  catalogues: string[];
  products: Product[];
  
  // Credentials
  ownerName: string;
  email: string;
  password: string;
}

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    businessName: "",
    heroText: "",
    heroImage: "",
    logo: "",
    colorPalette: "#E65A3D",
    catalogues: [],
    products: [],
    ownerName: "",
    email: "",
    password: "",
  });

  const steps = [
    { id: 0, title: "Shop Design", component: ShopDesignStep },
    { id: 1, title: "Add Products", component: AddProductsFlow },
    { id: 2, title: "Your Credentials", component: CredentialsStep },
  ];

  const updateData = (newData: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground">Q</span>
            </div>
            <span className="text-xl">Qyurate</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Need help? <a href="#" className="text-primary hover:underline">Contact Support</a>
          </div>
        </div>
      </header>

      {/* Stepper */}
      <div className="border-b bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                      index < currentStep
                        ? "bg-primary border-primary text-primary-foreground"
                        : index === currentStep
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {index < currentStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={`text-sm mt-2 ${
                      index === currentStep
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-4 transition-colors ${
                      index < currentStep ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <CurrentStepComponent
          data={data}
          updateData={updateData}
          nextStep={nextStep}
          prevStep={prevStep}
          isFirstStep={currentStep === 0}
          isLastStep={currentStep === steps.length - 1}
        />
      </div>
    </div>
  );
}
