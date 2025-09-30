import { MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const opportunities = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Tech Corp",
    location: "Remote",
    type: "Internship",
    applied: 12,
    posted: "2d ago",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Design Studio",
    location: "NYC",
    type: "Job",
    applied: 8,
    posted: "1w ago",
  },
  {
    id: 3,
    title: "Marketing Volunteer",
    company: "Non-Profit",
    location: "Virtual",
    type: "Volunteering",
    applied: 5,
    posted: "3d ago",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Analytics Co",
    location: "Boston",
    type: "Job",
    applied: 15,
    posted: "5d ago",
  },
]

const typeColors: Record<string, string> = {
  Internship: "bg-primary/10 text-primary",
  Job: "bg-success/10 text-success",
  Volunteering: "bg-secondary/10 text-secondary",
}

export const LatestOpportunities = () => {
  return (
    <Card className="shadow-custom-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Latest Opportunities</CardTitle>
          <Button variant="ghost" size="sm" className="text-primary">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {opportunities.map((opp, index) => (
          <div key={opp.id} className="p-3 rounded-lg border hover-lift cursor-pointer group transition-all">
            <div className="flex items-start justify-between gap-2 mb-2">
              <Badge className={`${typeColors[opp.type]} text-xs`}>{opp.type}</Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {opp.posted}
              </span>
            </div>
            <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{opp.title}</h4>
            <p className="text-xs text-muted-foreground mb-2">{opp.company}</p>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {opp.location}
              </div>
              <span className="text-muted-foreground">{opp.applied} applied</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
