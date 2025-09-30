import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturedEvents } from "@/components/home/FeaturedEvents";
import { FeaturedOpportunities } from "@/components/home/FeaturedOpportunities";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8">
          <HeroCarousel />
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Featured Events */}
        <FeaturedEvents />

        {/* Featured Opportunities */}
        <FeaturedOpportunities />

        {/* CTA Section */}
        <section className="py-20 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Ready to Connect?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up">
              Join AllyConnect today and become part of a thriving community of alumni and students
            </p>
            <div className="flex gap-4 justify-center animate-scale-in">
              <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold transition-smooth hover:shadow-xl hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white rounded-lg font-semibold transition-smooth hover:bg-white/20">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;