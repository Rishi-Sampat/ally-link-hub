import { Trophy, Medal, Award, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const contributors = [
  {
    id: 1,
    name: "Sarah Johnson",
    points: 2450,
    rank: 1,
    badge: "Gold",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    points: 2180,
    rank: 2,
    badge: "Gold",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    points: 1920,
    rank: 3,
    badge: "Silver",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "David Park",
    points: 1650,
    rank: 4,
    badge: "Silver",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
]

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-5 w-5 text-yellow-500" />
    case 2:
      return <Medal className="h-5 w-5 text-gray-400" />
    case 3:
      return <Award className="h-5 w-5 text-orange-600" />
    default:
      return <TrendingUp className="h-4 w-4 text-muted-foreground" />
  }
}

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "Gold":
      return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20"
    case "Silver":
      return "bg-gray-400/10 text-gray-700 border-gray-400/20"
    default:
      return "bg-orange-600/10 text-orange-700 border-orange-600/20"
  }
}

export const TopContributors = () => {
  return (
    <Card className="shadow-custom-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <CardHeader>
        <CardTitle className="text-xl">Top Contributors</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {contributors.map((contributor, index) => (
          <div
            key={contributor.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
          >
            <div className="flex items-center justify-center w-8">{getRankIcon(contributor.rank)}</div>
            <Avatar className="h-10 w-10 border-2 border-primary/20 group-hover:scale-110 transition-transform">
              <AvatarImage src={contributor.image || "/placeholder.svg"} alt={contributor.name} />
              <AvatarFallback>
                {contributor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm truncate">{contributor.name}</div>
              <div className="flex items-center gap-2">
                <Badge className={`${getBadgeColor(contributor.badge)} text-xs`}>{contributor.badge}</Badge>
                <span className="text-xs text-muted-foreground">{contributor.points.toLocaleString()} pts</span>
              </div>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full mt-4 hover-scale bg-transparent">
          View Full Leaderboard
        </Button>
      </CardContent>
    </Card>
  )
}
