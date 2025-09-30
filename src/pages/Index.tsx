import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroCarousel } from "@/components/home/HeroCarousel"
import { StatsSection } from "@/components/home/StatsSection"
import { AlumniSpotlight } from "@/components/home/AlumniSpotlight"
import { FeaturedEvents } from "@/components/home/FeaturedEvents"
import { FeaturedAlumniGrid } from "@/components/home/FeaturedAlumniGrid"
import { FeaturedOpportunities } from "@/components/home/FeaturedOpportunities"
import { QuickActions } from "@/components/home/QuickActions"
import { LatestOpportunities } from "@/components/home/LatestOpportunities"
import { TopContributors } from "@/components/home/TopContributors"
import { Announcements } from "@/components/home/Announcements"

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

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content (2 columns on lg) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Alumni Spotlight */}
              <AlumniSpotlight />

              {/* Upcoming Events */}
              <FeaturedEvents />

              {/* Featured Alumni Grid */}
              <FeaturedAlumniGrid />
            </div>

            {/* Right Column - Sidebar (1 column on lg) */}
            <div className="space-y-6">
              <QuickActions />
              <LatestOpportunities />
              <TopContributors />
              <Announcements />
            </div>
          </div>
        </section>

        {/* Featured Opportunities */}
        <FeaturedOpportunities />

        {/* CTA Section */}
        <section className="py-20 gradient-primary text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in text-balance">Ready to Connect?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up text-pretty">
              Join Alumni Portal today and become part of a thriving community of alumni and students
            </p>
            <div className="flex gap-4 justify-center animate-scale-in flex-wrap">
              <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold transition-smooth hover:shadow-xl hover-scale">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white rounded-lg font-semibold transition-smooth hover:bg-white/20 hover-scale">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Index
