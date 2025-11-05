import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Owner",
    company: "Custom Creations Co.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Qyurate completely transformed our business. Customers love designing their own products, and we get perfect print files every time. Sales are up 45%!",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "E-commerce Manager",
    company: "PrintHub",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "The editor is so intuitive that our customers can create beautiful designs without any help. We've cut support tickets by 80% and increased conversions.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Founder",
    company: "Personalize This",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Setting up was incredibly easy. Within a week we had our entire catalog ready with templates. The stock media library saves us so much time!",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Operations Director",
    company: "GiftWorks",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "No more design revisions! Every order comes with production-ready files. It's like having a design team working 24/7 for free.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Shop Owner",
    company: "Poster Paradise",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Our customers are obsessed with the customization options. Average order value jumped from $25 to $42. Best investment we've made!",
    rating: 5,
  },
  {
    name: "James Rivera",
    role: "Creative Director",
    company: "Merch Masters",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "The template system is genius. We maintain brand consistency while giving customers freedom to personalize. It's the perfect balance.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Loved by Merchants Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how businesses are using Qyurate to sell personalized products and delight their customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground">"{testimonial.content}"</p>
                  
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}