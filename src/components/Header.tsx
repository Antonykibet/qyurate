import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onStartTrial?: () => void;
}

export function Header({ onStartTrial }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-6xl">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground">Q</span>
          </div>
          <span className="text-xl">Qyurate</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">Use Cases</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button onClick={onStartTrial}>Start Free Trial</Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>Use Cases</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <Button variant="ghost" className="justify-start">Sign In</Button>
            <Button className="justify-start" onClick={() => { setIsMenuOpen(false); onStartTrial?.(); }}>Start Free Trial</Button>
          </nav>
        </div>
      )}
    </header>
  );
}