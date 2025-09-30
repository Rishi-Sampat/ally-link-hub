import { MessageSquare, Calendar, Briefcase, Users, HelpCircle, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock user role - in real app, this would come from auth context
const userRole = "student" // or "alumni"

const studentActions = [
  {
    icon: HelpCircle,
    label: "Ask a Doubt",
    description: "Get help from alumni",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: MessageSquare,
    label: "Start Chat",
    description: "Connect with mentors",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Calendar,
    label: "RSVP Event",
    description: "Join upcoming events",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Briefcase,
    label: "Apply to Jobs",
    description: "Browse opportunities",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

const alumniActions = [
  {
    icon: Plus,
    label: "Post Opportunity",
    description: "Share job openings",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    label: "Mentor Students",
    description: "Guide the next gen",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Calendar,
    label: "Host Event",
    description: "Organize meetups",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: MessageSquare,
    label: "Answer Doubts",
    description: "Help students",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

export const QuickActions = () => {
  const actions = userRole === "student" ? studentActions : alumniActions

  return (
    <Card className="shadow-custom-lg animate-fade-in-up">
      <CardHeader>
        <CardTitle className="text-xl">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 p-3 rounded-lg border hover-lift hover-glow transition-all text-left group"
          >
            <div
              className={`h-10 w-10 rounded-lg ${action.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
            >
              <action.icon className={`h-5 w-5 ${action.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm">{action.label}</div>
              <div className="text-xs text-muted-foreground">{action.description}</div>
            </div>
          </button>
        ))}

        {/* CTA Strip */}
        <div className="mt-4 p-4 rounded-lg gradient-primary text-white">
          <h4 className="font-bold mb-1">Need Help?</h4>
          <p className="text-sm opacity-90 mb-3">Our community is here to support you</p>
          <Button size="sm" className="w-full bg-white text-primary hover:bg-white/90">
            Get Started
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
