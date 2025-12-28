import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { StatsSection } from '@/components/StatsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
