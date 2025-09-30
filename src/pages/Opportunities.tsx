import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
];

export default function Opportunities() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-primary text-white py-20">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Career Opportunities</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover internships, jobs, and volunteering opportunities from our alumni network
            </p>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opp, index) => (
              <Card
                key={opp.id}
                className="hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
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
        </section>
      </main>

      <Footer />
    </div>
  );
}