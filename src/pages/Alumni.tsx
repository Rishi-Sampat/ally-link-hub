import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const mockAlumni = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Google",
    designation: "Senior Software Engineer",
    year: 2018,
    department: "Computer Science",
    domain: ["Web Development", "AI/ML"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Microsoft",
    designation: "Product Manager",
    year: 2017,
    department: "Information Technology",
    domain: ["Product Management", "Cloud"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    id: 3,
    name: "Priya Sharma",
    company: "Amazon",
    designation: "Data Scientist",
    year: 2019,
    department: "Computer Science",
    domain: ["Data Science", "Analytics"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
];

export default function Alumni() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Alumni Directory</h1>
          <p className="text-lg text-muted-foreground">
            Connect with {mockAlumni.length}+ alumni across various industries
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 animate-fade-in-up">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, company, or domain..."
              className="pl-9"
            />
          </div>
          <Button variant="outline" className="md:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockAlumni.map((alumni, index) => (
            <Card 
              key={alumni.id} 
              className="hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={alumni.avatar} alt={alumni.name} />
                    <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg truncate">{alumni.name}</h3>
                    <p className="text-sm text-muted-foreground">{alumni.designation}</p>
                    <p className="text-sm font-medium text-primary">{alumni.company}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Batch: </span>
                    <span className="font-medium">{alumni.year}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Dept: </span>
                    <span className="font-medium">{alumni.department}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {alumni.domain.map((d) => (
                      <Badge key={d} variant="secondary" className="text-xs">
                        {d}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full mt-4" variant="outline">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
