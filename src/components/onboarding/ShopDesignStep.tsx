import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { Monitor, Smartphone, Upload, ShoppingCart } from "lucide-react";
import { OnboardingData } from "./OnboardingFlow";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ShopDesignStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const sampleProducts = [
  {
    id: 1,
    name: "Custom Photo Mug",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1700887916107-2ac9ba8145e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbGl6ZWQlMjBtdWd8ZW58MXx8fHwxNzYyMTQ1OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Personalized T-Shirt",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1732414601271-0b63b575a795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjB0c2hpcnR8ZW58MXx8fHwxNzYyMTY3NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Custom Gift Box",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1761222667027-424659b017ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBnaWZ0JTIwcHJvZHVjdHxlbnwxfHx8fDE3NjIxOTY3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Personalized Canvas",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1631852869415-6a048d45172f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJvJTIwYmFubmVyJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzYyMTk2Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function ShopDesignStep({
  data,
  updateData,
  nextStep,
}: ShopDesignStepProps) {
  const [previewDevice, setPreviewDevice] = useState<"laptop" | "phone">("phone");

  // Set default values on mount
  if (!data.businessName) {
    updateData({
      businessName: "My Custom Shop",
      heroText: "Design your perfect personalized gift with our easy-to-use editor. Make it uniquely yours!",
      heroImage: "https://images.unsplash.com/photo-1631852869415-6a048d45172f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJvJTIwYmFubmVyJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzYyMTk2Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    });
  }

  const handleFileUpload = (field: "heroImage" | "logo", e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateData({ [field]: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const colorPresets = [
    "#E65A3D", "#3B82F6", "#10B981", "#F59E0B", "#EF4444",
    "#8B5CF6", "#EC4899", "#06B6D4", "#84CC16", "#6366F1"
  ];

  const domain = data.businessName
    ? `https://${data.businessName.toLowerCase().replace(/\s+/g, "")}.qyurate.com`
    : "https://yourbusiness.qyurate.com";

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left: Form */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl mb-2">Design Your Shop</h2>
          <p className="text-muted-foreground">
            Customize your storefront to match your brand identity.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name *</Label>
            <Input
              id="businessName"
              placeholder="Enter your business name"
              value={data.businessName}
              onChange={(e) => updateData({ businessName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="domain">Your Shop Domain</Label>
            <Input
              id="domain"
              value={domain}
              readOnly
              className="bg-muted"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="logo">Logo</Label>
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => document.getElementById("logoInput")?.click()}
              >
                <Upload className="w-4 h-4 mr-2" />
                {data.logo ? "Change Logo" : "Upload Logo"}
              </Button>
              <input
                id="logoInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload("logo", e)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="heroText">Hero Text *</Label>
            <Textarea
              id="heroText"
              placeholder="Welcome message for your customers"
              value={data.heroText}
              onChange={(e) => updateData({ heroText: e.target.value })}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="heroImage">Hero Image</Label>
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => document.getElementById("heroImageInput")?.click()}
              >
                <Upload className="w-4 h-4 mr-2" />
                {data.heroImage ? "Change Image" : "Upload Image"}
              </Button>
              <input
                id="heroImageInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload("heroImage", e)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Color Palette</Label>
            <div className="flex flex-wrap gap-2">
              {colorPresets.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`w-10 h-10 rounded-lg border-2 transition-all ${
                    data.colorPalette === color
                      ? "border-foreground scale-110"
                      : "border-transparent hover:scale-105"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => updateData({ colorPalette: color })}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Input
                type="color"
                value={data.colorPalette}
                onChange={(e) => updateData({ colorPalette: e.target.value })}
                className="w-20 h-10 cursor-pointer"
              />
              <span className="text-sm text-muted-foreground">Custom Color</span>
            </div>
          </div>
        </div>

        <Button
          onClick={nextStep}
          disabled={!data.businessName || !data.heroText}
          className="w-full"
          size="lg"
        >
          Continue to Add Products
        </Button>
      </div>

      {/* Right: Preview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Live Preview</Label>
          <div className="flex gap-2">
            <Button
              variant={previewDevice === "laptop" ? "default" : "outline"}
              size="sm"
              onClick={() => setPreviewDevice("laptop")}
            >
              <Monitor className="w-4 h-4" />
            </Button>
            <Button
              variant={previewDevice === "phone" ? "default" : "outline"}
              size="sm"
              onClick={() => setPreviewDevice("phone")}
            >
              <Smartphone className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            {previewDevice === "laptop" ? (
              <div className="aspect-video bg-muted flex items-center justify-center p-4">
                <div className="w-full h-full bg-background border rounded-t-lg overflow-hidden">
                  {/* Preview Header */}
                  <div className="h-14 flex items-center px-6 border-b bg-background">
                    <div className="flex items-center space-x-2">
                      {data.logo ? (
                        <img src={data.logo} alt="Logo" className="h-8 w-8 object-contain rounded" />
                      ) : (
                        <div
                          className="h-8 w-8 rounded flex items-center justify-center"
                          style={{ backgroundColor: data.colorPalette }}
                        >
                          <span className="text-white text-sm">Q</span>
                        </div>
                      )}
                      <span className="text-sm">
                        {data.businessName || "Your Business"}
                      </span>
                    </div>
                  </div>

                  {/* Preview Hero */}
                  <div className="relative overflow-hidden bg-background">
                    <div className="w-[95%] mx-auto mt-4 rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      {data.heroImage ? (
                        <ImageWithFallback
                          src={data.heroImage}
                          alt="Hero"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div
                          className="w-full h-full"
                          style={{
                            background: `linear-gradient(135deg, ${data.colorPalette}20 0%, ${data.colorPalette}05 100%)`,
                          }}
                        />
                      )}
                      <div className="absolute inset-0 flex items-center">
                        <div className="px-6 max-w-xl">
                          <p className="text-sm text-left">
                            {data.heroText || "Your inspiring hero message will appear here"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preview Products */}
                  <div className="p-6 space-y-4 overflow-auto" style={{ maxHeight: "calc(100% - 200px)" }}>
                    <div className="grid grid-cols-2 gap-3">
                      {sampleProducts.slice(0, 4).map((product) => (
                        <div key={product.id} className="bg-card border rounded-lg overflow-hidden">
                          <div className="aspect-square bg-muted overflow-hidden">
                            <ImageWithFallback
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-2 space-y-1">
                            <p className="text-xs truncate">{product.name}</p>
                            <p className="text-xs" style={{ color: data.colorPalette }}>{product.price}</p>
                            <div className="flex gap-1">
                              <button
                                className="flex-1 px-2 py-1 rounded text-[10px] text-white"
                                style={{ backgroundColor: data.colorPalette }}
                              >
                                Personalise
                              </button>
                              <button className="px-2 py-1 rounded text-[10px] border">
                                <ShoppingCart className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center py-8 bg-muted">
                <div className="w-64 h-[560px] bg-background border rounded-3xl overflow-hidden shadow-xl">
                  {/* Phone Preview Header */}
                  <div className="h-14 flex items-center px-4 border-b bg-background">
                    <div className="flex items-center space-x-2">
                      {data.logo ? (
                        <img src={data.logo} alt="Logo" className="h-6 w-6 object-contain rounded" />
                      ) : (
                        <div
                          className="h-6 w-6 rounded flex items-center justify-center"
                          style={{ backgroundColor: data.colorPalette }}
                        >
                          <span className="text-white text-xs">Q</span>
                        </div>
                      )}
                      <span className="text-xs truncate">
                        {data.businessName || "Your Business"}
                      </span>
                    </div>
                  </div>

                  {/* Phone Preview Hero */}
                  <div className="relative overflow-hidden bg-background">
                    <div className="w-[95%] mx-auto mt-3 rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      {data.heroImage ? (
                        <ImageWithFallback
                          src={data.heroImage}
                          alt="Hero"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div
                          className="w-full h-full"
                          style={{
                            background: `linear-gradient(135deg, ${data.colorPalette}20 0%, ${data.colorPalette}05 100%)`,
                          }}
                        />
                      )}
                      <div className="absolute inset-0 flex items-center">
                        <div className="px-3 max-w-full">
                          <p className="text-[10px] text-left leading-tight">
                            {data.heroText && data.heroText.length > 100
                              ? data.heroText.substring(0, 100) + "..."
                              : data.heroText || "Your message here"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Preview Products */}
                  <div className="p-3 space-y-3 overflow-auto" style={{ maxHeight: "calc(100% - 170px)" }}>
                    <div className="grid grid-cols-2 gap-2">
                      {sampleProducts.map((product) => (
                        <div key={product.id} className="bg-card border rounded-lg overflow-hidden">
                          <div className="aspect-square bg-muted overflow-hidden">
                            <ImageWithFallback
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-2 space-y-1">
                            <p className="text-[10px] truncate">{product.name}</p>
                            <p className="text-[10px]" style={{ color: data.colorPalette }}>{product.price}</p>
                            <div className="flex gap-1">
                              <button
                                className="flex-1 px-1.5 py-1 rounded text-[9px] text-white"
                                style={{ backgroundColor: data.colorPalette }}
                              >
                                Personalise
                              </button>
                              <button className="px-1.5 py-1 rounded text-[9px] border">
                                <ShoppingCart className="w-2.5 h-2.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
