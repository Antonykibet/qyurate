import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { X, Plus } from "lucide-react";
import { OnboardingData } from "./OnboardingFlow";

interface SelectCataloguesStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  isFirstSubStep: boolean;
  isLastSubStep: boolean;
}

const defaultCatalogues = {
  Events: ["Birthday", "Wedding", "Valentines", "For Her", "For Him", "Anniversary"],
  Fanatism: ["Sports", "Spotify Wrapped", "Film & TV", "Gaming", "Music", "Travel"],
};

export function SelectCataloguesStep({
  data,
  updateData,
  nextStep,
  prevStep,
}: SelectCataloguesStepProps) {
  const [selectedCatalogues, setSelectedCatalogues] = useState<string[]>(
    data.catalogues.length > 0 ? data.catalogues : []
  );
  const [customCatalogue, setCustomCatalogue] = useState("");

  const allDefaultCatalogues = [
    ...defaultCatalogues.Events,
    ...defaultCatalogues.Fanatism,
  ];

  const toggleCatalogue = (catalogue: string) => {
    if (selectedCatalogues.includes(catalogue)) {
      setSelectedCatalogues(selectedCatalogues.filter((c) => c !== catalogue));
    } else {
      setSelectedCatalogues([...selectedCatalogues, catalogue]);
    }
  };

  const addCustomCatalogue = () => {
    if (customCatalogue && !selectedCatalogues.includes(customCatalogue)) {
      setSelectedCatalogues([...selectedCatalogues, customCatalogue]);
      setCustomCatalogue("");
    }
  };

  const handleContinue = () => {
    updateData({ catalogues: selectedCatalogues });
    nextStep();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl mb-2">Select Your Product Catalogues</h2>
        <p className="text-muted-foreground">
          Choose the types of customizable products you want to offer in your store.
        </p>
      </div>

      {/* Events Category */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg mb-2">Events</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Special occasions and celebrations
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {defaultCatalogues.Events.map((catalogue) => (
            <Badge
              key={catalogue}
              variant={selectedCatalogues.includes(catalogue) ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm hover:scale-105 transition-transform"
              onClick={() => toggleCatalogue(catalogue)}
            >
              {catalogue}
              {selectedCatalogues.includes(catalogue) && (
                <X className="w-3 h-3 ml-2" />
              )}
            </Badge>
          ))}
        </div>
      </div>

      {/* Fanatism Category */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg mb-2">Fanatism</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Passions, hobbies, and interests
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {defaultCatalogues.Fanatism.map((catalogue) => (
            <Badge
              key={catalogue}
              variant={selectedCatalogues.includes(catalogue) ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm hover:scale-105 transition-transform"
              onClick={() => toggleCatalogue(catalogue)}
            >
              {catalogue}
              {selectedCatalogues.includes(catalogue) && (
                <X className="w-3 h-3 ml-2" />
              )}
            </Badge>
          ))}
        </div>
      </div>

      {/* Custom Catalogues */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg mb-2">Custom Catalogues</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Add your own unique product categories
          </p>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Enter custom catalogue name"
            value={customCatalogue}
            onChange={(e) => setCustomCatalogue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addCustomCatalogue();
              }
            }}
          />
          <Button onClick={addCustomCatalogue} variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
        {selectedCatalogues.filter((c) => !allDefaultCatalogues.includes(c)).length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {selectedCatalogues
              .filter((c) => !allDefaultCatalogues.includes(c))
              .map((catalogue) => (
                <Badge
                  key={catalogue}
                  variant="default"
                  className="cursor-pointer px-4 py-2 text-sm"
                  onClick={() => toggleCatalogue(catalogue)}
                >
                  {catalogue}
                  <X className="w-3 h-3 ml-2" />
                </Badge>
              ))}
          </div>
        )}
      </div>

      {/* Selected Count */}
      {selectedCatalogues.length > 0 && (
        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm">
            <span className="text-foreground">{selectedCatalogues.length}</span> catalogue{selectedCatalogues.length !== 1 ? 's' : ''} selected
          </p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <Button onClick={prevStep} variant="outline" size="lg" className="flex-1">
          Back to Shop Design
        </Button>
        <Button
          onClick={handleContinue}
          disabled={selectedCatalogues.length === 0}
          size="lg"
          className="flex-1"
        >
          Continue to Add Products
        </Button>
      </div>
    </div>
  );
}
