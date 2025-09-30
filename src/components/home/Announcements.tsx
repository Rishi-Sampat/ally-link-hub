import { Megaphone, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const announcements = [
  {
    id: 1,
    title: "New Mentorship Program",
    description: "Sign up for our spring mentorship program. Applications close March 31st.",
    icon: Megaphone,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 2,
    title: "System Maintenance",
    description: "Scheduled maintenance on April 5th from 2-4 AM EST. Services may be temporarily unavailable.",
    icon: Info,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
]

export const Announcements = () => {
  return (
    <Card className="shadow-custom-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
      <CardHeader>
        <CardTitle className="text-xl">Announcements</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="p-4 rounded-lg border hover-lift cursor-pointer group transition-all">
            <div className="flex items-start gap-3">
              <div
                className={`h-10 w-10 rounded-lg ${announcement.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
              >
                <announcement.icon className={`h-5 w-5 ${announcement.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm mb-1">{announcement.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{announcement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
