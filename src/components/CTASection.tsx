import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="glass-card p-12 lg:p-20 text-center max-w-4xl mx-auto glow-primary">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mb-8">
            <Rocket className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your{' '}
            <span className="gradient-text">Trading Experience</span>?
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join professional traders using StockDash for real-time market analysis, 
            AI-powered insights, and ML-driven predictions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="btn-glow bg-primary hover:bg-primary/90 text-lg px-10 h-14 font-semibold">
              Download Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 h-14 font-semibold border-border hover:bg-secondary">
              View Documentation
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-12 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-profit" />
              Built with Python & PyQt5
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Powered by yFinance
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-volume" />
              AI by Groq
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
