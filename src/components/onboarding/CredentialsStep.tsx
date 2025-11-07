import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Loader2, CheckCircle2, Store } from "lucide-react";
import { OnboardingData } from "./OnboardingFlow";

import apipost from "../../utils/api/api";
import { BACKEND_API_ROUTES,} from "../../utils/api/api_routes";

interface CredentialsStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export function CredentialsStep({
  data,
  updateData,
  prevStep,
}: CredentialsStepProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [creationStep, setCreationStep] = useState("");

  function serialize_onboarding_data(data: OnboardingData) {
    return {
      owner_details: {
        first_name: data.ownerName,
        last_name: data.ownerName,
        username: data.email,
        password: data.password,
        address: data.address,
      },
      shop_details: {
        business_name: data.businessName,
        hero_text: data.heroText,
        hero_image: data.heroImage,
        logo: data.logo,
        color_palette: data.colorPalette,
      },
    };
  }

  async function send_onboarding_data(data: OnboardingData) {
    const onboarding_endpoint = BACKEND_API_ROUTES.ONBOARDING
    const serialized_data = serialize_onboarding_data(data)
    const resp = await apipost(onboarding_endpoint, serialized_data);
    if (!resp) {
        console.error("Error sending on boarding data:");
        setIsCreating(false);
        return;
      }
    console.log("Onboarding data sent successfully:", resp);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsCreating(true);

    const steps = [
      { message: "Setting up your storefront...", function: send_onboarding_data(data)},
      { message: "Finalizing your shop...", function: async() => {} },
    ];

    for (const step of steps) {
      setCreationStep(step.message);
      await step.function
    }

    setIsCreating(false);
    setIsComplete(true);

    // // Redirect after 2 seconds
    // setTimeout(() => {
    //   // Here you would redirect to the actual shop or dashboard
    //   window.location.href = `https://${data.businessName.toLowerCase().replace(/\s+/g, "")}.qyurate.com`;
    // }, 2000);
  };

  const isFormValid = data.ownerName && data.email && data.password && data.password.length >= 8;

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="border-green-500/50">
          <CardContent className="pt-12 pb-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">Your Shop is Ready! 🎉</h2>
                <p className="text-muted-foreground">
                  We've successfully created your personalization store.
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm mb-1">Your shop URL:</p>
                <p className="break-all">
                  <a
                    href={`https://${data.businessName.toLowerCase().replace(/\s+/g, "")}.qyurate.com`}
                    className="text-primary hover:underline"
                  >
                    {data.businessName.toLowerCase().replace(/\s+/g, "")}.qyurate.com
                  </a>
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Redirecting you to your dashboard...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isCreating) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="pt-12 pb-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">Creating Your Shop</h2>
                <p className="text-muted-foreground">{creationStep}</p>
              </div>
              <div className="w-full max-w-xs mx-auto">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary animate-pulse" style={{ width: "70%" }} />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                This will only take a moment...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl mb-2">Your Account Details</h2>
        <p className="text-muted-foreground">
          Create your account to launch your personalization store.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Store className="w-5 h-5" />
            Account Information
          </CardTitle>
          <CardDescription>
            This information will be used to create your Qyurate account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ownerName">Your Name *</Label>
                <Input
                  id="ownerName"
                  placeholder="John Doe"
                  value={data.ownerName}
                  onChange={(e) => updateData({ ownerName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessNameConfirm">Business Name *</Label>
                <Input
                  id="businessNameConfirm"
                  value={data.businessName}
                  readOnly
                  className="bg-muted"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={data.email}
                onChange={(e) => updateData({ email: e.target.value })}
                required
              />
              <p className="text-xs text-muted-foreground">
                We'll send your login credentials and shop details here
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                placeholder="Minimum 8 characters"
                value={data.password}
                onChange={(e) => updateData({ password: e.target.value })}
                required
                minLength={8}
              />
              <p className="text-xs text-muted-foreground">
                Must be at least 8 characters long
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <h4 className="text-sm">Summary</h4>
              <div className="text-sm space-y-1 text-muted-foreground">
                <p>Business: <span className="text-foreground">{data.businessName}</span></p>
                <p>Catalogues: <span className="text-foreground">{data.catalogues.length} selected</span></p>
                <p>Products: <span className="text-foreground">{data.products?.length || 0} added</span></p>
                <p>Shop URL: <span className="text-foreground">{data.businessName.toLowerCase().replace(/\s+/g, "")}.qyurate.com</span></p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={!isFormValid}
                size="lg"
                className="flex-1"
              >
                Create My Shop
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              By creating an account, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
