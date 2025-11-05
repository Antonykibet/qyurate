import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { QuickBenefits } from "./components/QuickBenefits";
import { Onboarding } from "./components/Onboarding";
import { FeatureShowcase } from "./components/FeatureShowcase";
import { UseCases } from "./components/UseCases";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { OnboardingFlow } from "./components/onboarding/OnboardingFlow";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  if (showOnboarding) {
    return (
      <>
        <OnboardingFlow />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onStartTrial={() => setShowOnboarding(true)} />
      <main>
        <Hero onStartTrial={() => setShowOnboarding(true)} />
        <QuickBenefits />
        <Onboarding />
        <FeatureShowcase />
        <UseCases />
        <Pricing onStartTrial={() => setShowOnboarding(true)} />
        <FAQ />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}