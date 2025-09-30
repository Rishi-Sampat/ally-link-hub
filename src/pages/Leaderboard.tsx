import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Trophy, Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const topAlumni = [
  {
    id: 1,
    name: "Sarah Johnson",
    points: 1250,
    doubts: 45,
    opportunities: 12,
    rank: 1,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 2,
    name: "Michael Chen",
    points: 1180,
    doubts: 42,
    opportunities: 10,
    rank: 2,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    id: 3,
    name: "Priya Sharma",
    points: 1050,
    doubts: 38,
    opportunities: 11,
    rank: 3,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
];

const rankColors = {
  1: "text-yellow-500",
  2: "text-gray-400",
  3: "text-amber-600",
};

export default function Leaderboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-success text-white py-20">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <Trophy className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Alumni Leaderboard</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Celebrating our most active and helpful alumni
            </p>
          </div>
        </section>

        {/* Leaderboard */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-4">
            {topAlumni.map((alumni, index) => (
              <Card
                key={alumni.id}
                className="hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    {/* Rank */}
                    <div className={`text-4xl font-bold ${rankColors[alumni.rank as keyof typeof rankColors]}`}>
                      #{alumni.rank}
                    </div>

                    {/* Avatar */}
                    <Avatar className="h-16 w-16 border-4 border-primary/20">
                      <AvatarImage src={alumni.avatar} alt={alumni.name} />
                      <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{alumni.name}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{alumni.points} points</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4 text-primary" />
                          <span>{alumni.doubts} doubts solved</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy className="h-4 w-4 text-success" />
                          <span>{alumni.opportunities} opportunities</span>
                        </div>
                      </div>
                    </div>

                    {/* Badge */}
                    {alumni.rank === 1 && (
                      <Badge className="gradient-success text-white">
                        Top Contributor
                      </Badge>
                    )}
                  </div>
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
