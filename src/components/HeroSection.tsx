import { Button } from '@/components/ui/button';
import { Terminal3D } from './Terminal3D';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary">AI-Powered Trading Analytics</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional{' '}
              <span className="gradient-text">Stock Analysis</span>{' '}
              at Your Fingertips
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Real-time market data, AI-driven sentiment analysis, and ML-powered forecasting. 
              Make smarter investment decisions with StockDash.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 py-4">
              <div>
                <div className="text-3xl font-bold text-profit">Live</div>
                <div className="text-sm text-muted-foreground">WebSocket Data</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">AI</div>
                <div className="text-sm text-muted-foreground">Sentiment Analysis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-volume">ML</div>
                <div className="text-sm text-muted-foreground">Price Forecasting</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="btn-glow bg-primary hover:bg-primary/90 text-lg px-8 h-14 font-semibold">
                Start Trading
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 font-semibold border-border hover:bg-secondary">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right - 3D Terminal */}
          <div className="relative animate-fade-in delay-300">
            <Terminal3D />
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 glass-card px-4 py-2 animate-float hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-profit animate-pulse" />
                <span className="text-sm font-mono text-profit">+2.45%</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 animate-float delay-500 hidden lg:block">
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-muted-foreground">AAPL</span>
                <span className="text-sm font-mono text-foreground">$278.79</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-t border-border/50 py-3 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[
            { symbol: 'AAPL', price: '278.79', change: '+0.8%', up: true },
            { symbol: 'GOOGL', price: '191.24', change: '+1.2%', up: true },
            { symbol: 'MSFT', price: '448.35', change: '-0.3%', up: false },
            { symbol: 'TSLA', price: '425.50', change: '+2.1%', up: true },
            { symbol: 'AMZN', price: '225.10', change: '+0.5%', up: true },
            { symbol: 'NVDA', price: '134.50', change: '-1.2%', up: false },
            { symbol: 'META', price: '612.80', change: '+1.8%', up: true },
            { symbol: 'AAPL', price: '278.79', change: '+0.8%', up: true },
            { symbol: 'GOOGL', price: '191.24', change: '+1.2%', up: true },
            { symbol: 'MSFT', price: '448.35', change: '-0.3%', up: false },
            { symbol: 'TSLA', price: '425.50', change: '+2.1%', up: true },
            { symbol: 'AMZN', price: '225.10', change: '+0.5%', up: true },
          ].map((stock, i) => (
            <div key={i} className="flex items-center gap-6 mx-8">
              <span className="font-mono font-semibold">{stock.symbol}</span>
              <span className="font-mono text-muted-foreground">${stock.price}</span>
              <span className={`font-mono font-medium ${stock.up ? 'text-profit' : 'text-loss'}`}>
                {stock.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
