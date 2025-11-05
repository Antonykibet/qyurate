import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "What e-commerce platforms does Qyurate integrate with?",
    answer: "Qyurate integrates seamlessly with Shopify, WooCommerce, BigCommerce, and Wix. We also provide a REST API for custom integrations with any e-commerce platform. Our team can help with the integration process."
  },
  {
    question: "Do I need design skills to use Qyurate?",
    answer: "Not at all! Qyurate is designed to be intuitive for both you and your customers. The drag-and-drop editor is similar to Canva, making it easy to create templates and for customers to personalize products without any design experience."
  },
  {
    question: "What file formats do you support for exports?",
    answer: "We export high-resolution files in PNG, PDF, and SVG formats. All exports include proper bleed, crop marks, and color profiles (CMYK or RGB) based on your production requirements. Files are print-ready and production-ready out of the box."
  },
  {
    question: "Can I upload my own fonts and graphics?",
    answer: "Yes! You can upload custom fonts, logos, graphics, and create your own stock media library. This allows you to maintain brand consistency while giving customers personalization freedom. Professional and Enterprise plans support unlimited custom uploads."
  },
  {
    question: "How does the stock media library work?",
    answer: "Our platform includes thousands of professionally curated images, graphics, and design elements organized by category. Customers can easily browse and add them to their designs. You can also upload your own branded assets for exclusive use in your store."
  },
  {
    question: "What happens during the free trial?",
    answer: "During your 14-day free trial, you get full access to all features in the Professional plan. No credit card required. You can create templates, test the editor, and process up to 50 orders to see how Qyurate works for your business."
  },
  {
    question: "How do I receive the design files after an order?",
    answer: "Design files are automatically generated when a customer completes an order. You'll receive instant notifications and can download files from your dashboard. Files can be downloaded individually or in bulk, and we also support webhook notifications for automated workflows."
  },
  {
    question: "Can I set design restrictions or lock certain elements?",
    answer: "Absolutely! You have complete control over what customers can edit. Lock logos, maintain safe zones, restrict color palettes, set text boundaries, and define exactly which areas are customizable while protecting your brand standards and production requirements."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Qyurate and selling personalized products.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button variant="outline">Contact Support</Button>
        </div>
      </div>
    </section>
  );
}