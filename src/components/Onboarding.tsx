import { Card, CardContent } from "./ui/card";
import { Store, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    icon: Store,
    heading: "Connect Your Store",
    description: "Integrate Qyurate with your e-commerce platform in minutes. We support Shopify, WooCommerce, and custom integrations.",
  },
  {
    icon: PenTool,
    heading: "Add Your Products",
    description: "Upload your product templates, create design areas, and add your custom stock media library for customers to use.",
  },
  {
    icon: Rocket,
    heading: "Go Live",
    description: "Launch your personalization store and start receiving orders with print-ready design files from day one.",
  },
];

export function Onboarding() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our simple onboarding process gets you up and running quickly, so you can start selling personalized products today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl">
                    {step.heading}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
