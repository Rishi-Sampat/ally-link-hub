import { Users, Briefcase, Calendar, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Active Alumni",
    color: "text-primary",
  },
  {
    icon: Briefcase,
    value: "450+",
    label: "Opportunities Posted",
    color: "text-secondary",
  },
  {
    icon: Calendar,
    value: "120+",
    label: "Events Hosted",
    color: "text-success",
  },
  {
    icon: Award,
    value: "800+",
    label: "Doubts Resolved",
    color: "text-accent",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};