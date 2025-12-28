import { 
  BarChart3, 
  Brain, 
  MessageSquareText, 
  FileBarChart, 
  TrendingUp, 
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Dashboard',
    description: 'Live candlestick charts with volume analysis. Search any ticker and get 6 months of historical data with WebSocket-powered real-time updates.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: TrendingUp,
    title: 'Technical Indicators',
    description: 'SMA/EMA moving averages, RSI, MACD, Bollinger Bands, and Support/Resistance levels. All indicators update in sync with live data.',
    color: 'text-profit',
    bgColor: 'bg-profit/10',
  },
  {
    icon: Brain,
    title: 'Market Mood AI',
    description: 'Real-time sentiment analysis from live news headlines. Scores from -100 to +100 powered by Groq AI with instant alerts.',
    color: 'text-volume',
    bgColor: 'bg-volume/10',
  },
  {
    icon: FileBarChart,
    title: 'Smart Reports',
    description: 'Comprehensive reports with key statistics, volatility analysis, and ML-powered price forecasting. Export to PDF or CSV.',
    color: 'text-warning',
    bgColor: 'bg-warning/10',
  },
  {
    icon: MessageSquareText,
    title: 'AI Chatbot',
    description: 'Intelligent assistant that answers stock queries and generates detailed ticker reports using machine learning predictions.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Zap,
    title: 'WebSocket Sync',
    description: 'Live price updates and 1-minute candle data keep your parquet files in perfect sync. No manual refresh needed.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
];

const additionalFeatures = [
  { icon: Shield, text: 'Secure local data storage' },
  { icon: Globe, text: 'Global market coverage' },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for{' '}
            <span className="gradient-text">Professional Trading</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete terminal experience with real-time data, AI analytics, and machine learning predictions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card group opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 pt-16 border-t border-border/50">
          {additionalFeatures.map((feature) => (
            <div
              key={feature.text}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 border border-border/50"
            >
              <feature.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
