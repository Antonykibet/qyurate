import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Palette, ShoppingCart, Smile, Zap } from "lucide-react";

const benefits = [
  {
    icon: Palette,
    title: "Creative Freedom",
    description: "Give customers the power to design exactly what they want with intuitive editing tools.",
  },
  {
    icon: ShoppingCart,
    title: "Boost Sales",
    description: "Increase order values by letting customers personalize products before checkout.",
  },
  {
    icon: Smile,
    title: "Happy Customers",
    description: "Deliver unique, personalized products that customers love and share with others.",
  },
  {
    icon: Zap,
    title: "Zero Hassle",
    description: "Get print-ready files automatically - no more back-and-forth design revisions.",
  },
];

export function QuickBenefits() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Mobile Screen Recording Mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[280px] h-[580px] bg-[#262626] rounded-[3rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-[#262626] z-10 flex items-center justify-between px-6">
                    <span className="text-white text-xs">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Scrolling Content */}
                  <div className="absolute inset-0 pt-8">
                    <div className="animate-scroll-feed space-y-1">
                      {/* Feed Items */}
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="h-[560px] flex-shrink-0 relative bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                          <div className="absolute bottom-20 left-4 right-4 text-left space-y-2 z-10">
                            <div className="flex items-center space-x-2">
                              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm"></div>
                              <span className="text-white">@qyurate</span>
                            </div>
                            <p className="text-white text-sm">
                              Design your perfect personalized product in minutes 🎨
                            </p>
                          </div>
                          
                          {/* Engagement Icons */}
                          <div className="absolute right-4 bottom-32 space-y-6">
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                </svg>
                              </div>
                              <span className="text-white text-xs">12.5K</span>
                            </div>
                            
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                              </div>
                              <span className="text-white text-xs">342</span>
                            </div>
                            
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                              </div>
                              <span className="text-white text-xs">892</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full"></div>
            </div>
          </div>

          {/* Right: 4 Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-feed {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        .animate-scroll-feed {
          animation: scroll-feed 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
