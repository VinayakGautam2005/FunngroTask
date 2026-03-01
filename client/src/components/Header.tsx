import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Teenlancer", path: "/teen" },
    { name: "Company", path: "/company" },
    { name: "Parent", path: "#" },
    { name: "About Us", path: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Funngro Logo"
            className="h-10 object-contain"
            data-testid="img-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <span
                className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${location === link.path ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                data-testid={`link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="font-semibold text-muted-foreground hover:text-primary">
            Login
          </Button>
          <Link href="/company">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-6 font-semibold shadow-md shadow-secondary/20">
              Company Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path}>
                <span
                  className={`text-lg font-medium py-2 border-b border-border/50 block ${location === link.path ? 'text-primary' : 'text-foreground'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" className="w-full justify-center">Login</Button>
              <Link href="/company">
                <Button className="w-full justify-center bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full">Company Login</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
