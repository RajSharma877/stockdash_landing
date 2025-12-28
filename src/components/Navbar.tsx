import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, TrendingUp } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', href: '#docs' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-primary/50 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Stock<span className="text-primary">Dash</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="font-medium">
              Sign In
            </Button>
            <Button className="btn-glow bg-primary hover:bg-primary/90 font-semibold px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <Button variant="ghost" className="w-full justify-center">
                  Sign In
                </Button>
                <Button className="w-full btn-glow">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
