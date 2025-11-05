import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Increase average order value by 30-50%",
  "Reduce design revision requests by 80%",
  "Get print-ready files automatically",
  "Boost customer engagement and satisfaction",
  "Save hours on manual design work",
  "Scale your personalization offerings effortlessly"
];

const useCases = [
  {
    title: "E-commerce Merchants",
    description: "Sell personalized products online without managing complex design workflows.",
    image: "https://images.unsplash.com/photo-1612703769284-0103b1e5ef70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzdG9yZSUyMG1lcmNoYW50fGVufDF8fHx8MTc2MTQ2NzI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Print Shops",
    description: "Streamline custom orders with an online design portal for your customers.",
    image: "https://images.unsplash.com/photo-1575839127403-433ec253fb72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludCUyMHNob3AlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjE0NjcyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Creative Entrepreneurs",
    description: "Launch your personalization business with professional tools from day one.",
    image: "https://images.unsplash.com/photo-1638926887647-32d8a630b816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NjE0NjcyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">
                Transform Your Business
              </h2>
              <p className="text-lg text-muted-foreground">
                Join hundreds of merchants using Qyurate to sell personalized products 
                and deliver exceptional customer experiences.
              </p>
            </div>

            <div className="grid gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3">
                      <ImageWithFallback
                        src={useCase.image}
                        alt={useCase.title}
                        className="w-full h-32 sm:h-full object-cover"
                      />
                    </div>
                    <div className="sm:w-2/3 p-6">
                      <h3 className="text-xl mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground">{useCase.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}