import { Button } from "./ui/button";
import { Play, BarChart3, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onStartTrial?: () => void;
}

export function Hero({ onStartTrial }: HeroProps) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full border">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm">Empower Your Customers to Design</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
              Skip the <span className="text-primary"> Design Hustle </span> and 
              Let Your Customers
              <span className="text-primary"> Create Their Perfect Product</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Qyurate gives merchants a powerful platform to sell customizable products. 
              Let customers design their own products with a Canva-like editor, complete with stock media and templates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={onStartTrial}>
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Easy integration
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              14-day free trial
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              No credit card required
            </div>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 backdrop-blur-sm border">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwY3VzdG9taXphdGlvbiUyMGVkaXRvciUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjE0NjcxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Qyurate Product Editor"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-8 h-8 text-primary" />
              <div>
                <div className="text-sm">Customer Satisfaction</div>
                <div className="text-xl">98%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}