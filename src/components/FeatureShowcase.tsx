import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Intuitive Canva-Like Editor",
    description: "Give your customers a powerful yet simple design tool. Our drag-and-drop editor makes personalization easy with familiar controls for text, images, shapes, and more. No design skills required - anyone can create professional-looking custom products in minutes.",
    benefits: [
      "Drag-and-drop interface",
      "Real-time preview",
      "Undo/redo functionality"
    ],
    image: "https://images.unsplash.com/photo-1742837442755-caf3f540c30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBlZGl0b3IlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNDY3MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Curated Stock Media Library",
    description: "Access thousands of professionally curated images, graphics, and design elements. Organized intuitively by category and style, your customers can find the perfect elements for their designs. Plus, upload your own branded assets for exclusive use.",
    benefits: [
      "Thousands of stock images",
      "Intuitive categorization",
      "Upload custom assets"
    ],
    image: "https://images.unsplash.com/photo-1623518470179-e7a60015228e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMHBob3RvcyUyMGxpYnJhcnl8ZW58MXx8fHwxNzYxNDY3MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Template Management System",
    description: "Create and organize stunning product templates that customers can customize. Set design constraints, lock specific elements, and define customizable areas. Your templates guide customers while maintaining your brand standards and production requirements.",
    benefits: [
      "Easy template creation",
      "Lock/unlock elements",
      "Brand consistency controls"
    ],
    image: "https://images.unsplash.com/photo-1688100505028-4d3af5632fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGF0ZSUyMGdhbGxlcnklMjBkZXNpZ258ZW58MXx8fHwxNzYxNDY3MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Print-Ready File Export",
    description: "Every order automatically generates high-resolution, print-ready files in your preferred format. No more manual design adjustments or customer revisions. Get PNG, PDF, or SVG files with proper bleed, color profiles, and specifications - ready for production immediately.",
    benefits: [
      "High-resolution exports",
      "Multiple format support",
      "Production-ready specifications"
    ],
    image: "https://images.unsplash.com/photo-1593451102159-7bbefab0c1d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludCUyMHByb2R1Y3Rpb24lMjBmaWxlc3xlbnwxfHx8fDE3NjE0NjcyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function FeatureShowcase() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Powerful Features for Personalization
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to let customers design their perfect personalized products and receive production-ready files.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/50">
                  <ImageWithFallback
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto"
                  />
                  {/* Overlay gradient for better visual */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
