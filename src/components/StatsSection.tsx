import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 100, suffix: '%', label: 'Real-Time Data' },
  { value: 6, suffix: 'mo', label: 'Historical Coverage' },
  { value: 5, suffix: '+', label: 'Technical Indicators' },
  { value: 24, suffix: '/7', label: 'Market Monitoring' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono">
      <span className="gradient-text">{count}</span>
      <span className="text-primary">{suffix}</span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="glass-card p-8 lg:p-12 glow-primary">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-sm lg:text-base text-muted-foreground mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
