import { Briefcase, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const opportunities = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Tech Corp",
    location: "San Francisco, CA",
    type: "Internship",
    posted: "2 days ago",
    tags: ["Full-time", "Remote Option"],
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovation Labs",
    location: "New York, NY",
    type: "Job",
    posted: "1 week ago",
    tags: ["Full-time", "On-site"],
  },
  {
    id: 3,
    title: "Marketing Volunteer",
    company: "Non-Profit Org",
    location: "Remote",
    type: "Volunteering",
    posted: "3 days ago",
    tags: ["Part-time", "Remote"],
  },
  {
    id: 4,
    title: "Data Science Intern",
    company: "Analytics Pro",
    location: "Boston, MA",
    type: "Internship",
    posted: "5 days ago",
    tags: ["Full-time", "Hybrid"],
  },
];

const typeColors = {
  Internship: "bg-primary/10 text-primary border-primary/20",
  Job: "bg-success/10 text-success border-success/20",
  Volunteering: "bg-secondary/10 text-secondary border-secondary/20",
};

export const FeaturedOpportunities = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Latest Opportunities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover internships, jobs, and volunteering opportunities posted by alumni
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {opportunities.map((opp, index) => (
            <Card
              key={opp.id}
              className="hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={typeColors[opp.type as keyof typeof typeColors]}>
                    {opp.type}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {opp.posted}
                  </div>
                </div>
                <CardTitle className="text-xl">{opp.title}</CardTitle>
                <CardDescription className="text-base font-medium text-foreground">
                  {opp.company}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{opp.location}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {opp.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full" variant="outline">
                  <Briefcase className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gradient-primary">
            Explore All Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};