import { ImageWithFallback } from "./figma/ImageWithFallback";

const useCases = [
  {
    title: "Personalized Gifts",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbGl6ZWQlMjBnaWZ0c3xlbnwxfHx8fDE3NjE0NTc2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Wall Posters & Prints",
    image: "https://images.unsplash.com/photo-1677658992142-0cd1f4197070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxsJTIwcG9zdGVyJTIwcHJpbnR8ZW58MXx8fHwxNzYxNDU3NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Custom Apparel",
    image: "https://images.unsplash.com/photo-1754072387911-6036c4d4e135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBhcHBhcmVsJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYxNDU3NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Custom Jewelry",
    image: "https://images.unsplash.com/photo-1740489998930-9a1fc98273fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBqZXdlbHJ5fGVufDF8fHx8MTc2MTQ1NzY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Personalized Stationery",
    image: "https://images.unsplash.com/photo-1759887243702-903dc6661a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbGl6ZWQlMjBzdGF0aW9uZXJ5fGVufDF8fHx8MTc2MTQ1NzY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Custom Phone Cases",
    image: "https://images.unsplash.com/photo-1713032396284-9f5c6595359c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBwaG9uZSUyMGNhc2VzfGVufDF8fHx8MTc2MTQ1NzY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Perfect for Personalization Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help your customers bring their visions to life with AI-powered call analytics 
            tailored for customization and personalization merchants.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {useCases.map((useCase, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 group">
              <div className="relative w-32 h-32 rounded-full border-2 border-border overflow-hidden transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                <ImageWithFallback
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-center transition-colors duration-300 group-hover:text-primary">
                {useCase.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            And many more customization businesses that rely on meaningful customer conversations
          </p>
        </div>
      </div>
    </section>
  );
}
