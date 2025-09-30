"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Award, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const featuredAlumni = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Software Engineer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 4.9,
    achievements: ["Top Contributor", "Mentor of the Year"],
    quote: "AllyConnect helped me give back to my alma mater and connect with brilliant minds.",
    graduationYear: "2015",
    domain: "Technology",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 4.8,
    achievements: ["Career Guide", "Event Speaker"],
    quote: "Mentoring students through this platform has been incredibly rewarding.",
    graduationYear: "2013",
    domain: "Product",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Amazon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5.0,
    achievements: ["Top Recruiter", "Community Leader"],
    quote: "The connections I've made here have enriched both my professional and personal life.",
    graduationYear: "2014",
    domain: "Marketing",
  },
]

export const AlumniSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextAlumni = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredAlumni.length)
  }

  const prevAlumni = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredAlumni.length) % featuredAlumni.length)
  }

  const currentAlumni = featuredAlumni[currentIndex]

  return (
    <Card className="overflow-hidden hover-lift shadow-custom-lg animate-fade-in-up">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Alumni Spotlight</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevAlumni} className="h-8 w-8 hover-scale bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextAlumni} className="h-8 w-8 hover-scale bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Profile Section */}
          <div className="flex items-start gap-4">
            <Avatar className="h-20 w-20 border-4 border-primary/20 shadow-custom-md">
              <AvatarImage src={currentAlumni.image || "/placeholder.svg"} alt={currentAlumni.name} />
              <AvatarFallback>
                {currentAlumni.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-1">{currentAlumni.name}</h4>
              <p className="text-muted-foreground mb-2">
                {currentAlumni.role} at {currentAlumni.company}
              </p>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{currentAlumni.rating}</span>
                </div>
                <span className="text-muted-foreground text-sm">• Class of {currentAlumni.graduationYear}</span>
              </div>
              <Badge variant="secondary">{currentAlumni.domain}</Badge>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Award className="h-4 w-4 text-primary" />
              <span>Achievements</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentAlumni.achievements.map((achievement, idx) => (
                <Badge key={idx} className="gradient-primary text-white">
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="relative p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
            <Quote className="absolute top-2 right-2 h-8 w-8 text-primary/20" />
            <p className="text-sm italic text-muted-foreground relative z-10">"{currentAlumni.quote}"</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button className="flex-1 gradient-primary">View Profile</Button>
            <Button variant="outline" className="flex-1 bg-transparent">
              Connect
            </Button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {featuredAlumni.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
