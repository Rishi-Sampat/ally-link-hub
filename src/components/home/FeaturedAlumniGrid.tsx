import { Star, MapPin, Briefcase, CheckCircle2, MessageCircle, Eye } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const alumni = [
  {
    id: 1,
    name: "David Park",
    role: "Data Scientist",
    company: "Meta",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 4.7,
    verified: true,
    domains: ["AI/ML", "Data Science"],
    responseRate: "95%",
  },
  {
    id: 2,
    name: "Lisa Anderson",
    role: "UX Designer",
    company: "Apple",
    location: "Cupertino, CA",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
    rating: 4.9,
    verified: true,
    domains: ["Design", "UX/UI"],
    responseRate: "98%",
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Financial Analyst",
    company: "Goldman Sachs",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 4.6,
    verified: true,
    domains: ["Finance", "Investment"],
    responseRate: "92%",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Cybersecurity Expert",
    company: "Cisco",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 4.8,
    verified: true,
    domains: ["Security", "Networking"],
    responseRate: "96%",
  },
]

export const FeaturedAlumniGrid = () => {
  return (
    <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Featured Alumni</h3>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {alumni.map((alumnus, index) => (
          <Card
            key={alumnus.id}
            className="hover-lift hover-glow animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <Avatar className="h-14 w-14 border-2 border-primary/20">
                  <AvatarImage src={alumnus.image || "/placeholder.svg"} alt={alumnus.name} />
                  <AvatarFallback>
                    {alumnus.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold truncate">{alumnus.name}</h4>
                    {alumnus.verified && <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{alumnus.role}</p>
                  <div className="flex items-center gap-1 text-sm font-medium mt-1">
                    <Briefcase className="h-3 w-3" />
                    <span className="truncate">{alumnus.company}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span className="truncate">{alumnus.location}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{alumnus.rating}</span>
                </div>
                <span className="text-muted-foreground">{alumnus.responseRate} response rate</span>
              </div>

              <div className="flex flex-wrap gap-1">
                {alumnus.domains.map((domain) => (
                  <Badge key={domain} variant="secondary" className="text-xs">
                    {domain}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" className="flex-1 gradient-primary hover-scale">
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Talk
                </Button>
                <Button size="sm" variant="outline" className="flex-1 hover-scale bg-transparent">
                  <Eye className="h-3 w-3 mr-1" />
                  Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
