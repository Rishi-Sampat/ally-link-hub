import { Users, Briefcase, Calendar, Award, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Active Alumni",
    color: "from-primary to-primary/80",
    bgColor: "bg-primary/10",
  },
  {
    icon: Calendar,
    value: "120+",
    label: "Live Events",
    color: "from-secondary to-secondary/80",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Briefcase,
    value: "450+",
    label: "Open Opportunities",
    color: "from-success to-success/80",
    bgColor: "bg-success/10",
  },
  {
    icon: Award,
    value: "800+",
    label: "Resolved Doubts",
    color: "from-accent to-accent/80",
    bgColor: "bg-accent/10",
  },
  {
    icon: TrendingUp,
    value: "350+",
    label: "Success Stories",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
  },
]

export const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border hover-lift hover-glow cursor-pointer animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-custom-md group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
