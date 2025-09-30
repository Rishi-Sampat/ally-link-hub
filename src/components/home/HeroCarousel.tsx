"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const slides = [
  {
    title: "Connect with Alumni",
    description: "Build meaningful connections with alumni across industries and locations",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    date: "Year-round",
    location: "Global Network",
    cta1: "Join Network",
    cta2: "Learn More",
  },
  {
    title: "Find Your Mentor",
    description: "Get guidance from experienced professionals in your field of interest",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    date: "Available Now",
    location: "Virtual & In-Person",
    cta1: "Find Mentor",
    cta2: "View Profiles",
  },
  {
    title: "Unlock Opportunities",
    description: "Discover internships, jobs, and volunteering opportunities from alumni",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    date: "Updated Daily",
    location: "Worldwide",
    cta1: "Browse Jobs",
    cta2: "Post Opportunity",
  },
]

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-2xl shadow-custom-xl animate-scale-in">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div className="relative h-full w-full">
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-lg animate-fade-in-up text-balance">
                  {slide.title}
                </h1>
                <p
                  className="text-xl lg:text-2xl mb-6 drop-shadow-md animate-fade-in-up text-pretty"
                  style={{ animationDelay: "0.1s" }}
                >
                  {slide.description}
                </p>

                <div className="flex gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <Badge className="glass text-white border-white/30 px-4 py-2 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {slide.date}
                  </Badge>
                  <Badge className="glass text-white border-white/30 px-4 py-2 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {slide.location}
                  </Badge>
                </div>

                <div className="flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover-scale shadow-custom-lg">
                    {slide.cta1}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm hover-scale bg-transparent"
                  >
                    {slide.cta2}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/30 hover-scale"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/30 hover-scale"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/30 hover-scale"
        aria-label={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
      >
        {isAutoPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all hover-scale ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
