import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  Brain, 
  MessageSquare, 
  TrendingUp, 
  Target, 
  Shield, 
  Zap,
  BarChart3,
  Users,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Design Tools",
    description: "Text editing, image uploads, shape creation, and layer management - all the tools your customers need to bring their vision to life.",
  },
  {
    icon: MessageSquare,
    title: "Custom Fonts & Colors",
    description: "Upload your brand fonts and set color palettes to maintain consistency across all customer designs.",
  },
  {
    icon: TrendingUp,
    title: "Sales Analytics",
    description: "Track which templates and products perform best, understand customer preferences, and optimize your catalog.",
  },
  {
    icon: Target,
    title: "Design Constraints",
    description: "Set boundaries for customizable areas, maintain brand guidelines, and ensure designs are production-ready.",
  },
  {
    icon: Shield,
    title: "Secure File Storage",
    description: "All customer designs and order files are securely stored and accessible anytime you need them.",
  },
  {
    icon: Zap,
    title: "Instant Previews",
    description: "Customers see real-time previews of their designs on actual products before checkout.",
  },
  {
    icon: BarChart3,
    title: "Order Management",
    description: "View all orders with their custom designs in one place. Download files individually or in bulk.",
  },
  {
    icon: Users,
    title: "Multi-Store Support",
    description: "Manage multiple storefronts and product catalogs from a single Qyurate account.",
  },
  {
    icon: Clock,
    title: "Quick Integration",
    description: "Connect to Shopify, WooCommerce, or use our API to integrate with any e-commerce platform.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Qyurate provides all the tools merchants need to sell customizable products online 
            and deliver exceptional personalized experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50 hover:border-border transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}