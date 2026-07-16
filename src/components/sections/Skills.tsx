import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { SkillCard } from "./SkillCard";

const groupConfig = {
  "Programming Languages": {
    icon: "💻",
    variant: "card",
    layout: "grid",
    description: "My favorite languages for building things.",
  },
  Frontend: {
    icon: "🎨",
    variant: "card",
    layout: "grid",
    description: "Tools I use to create user interfaces.",
  },
  Backend: {
    icon: "⚙️",
    variant: "badge",
    layout: "flex",
    description: "My go-to technologies for server-side logic.",
  },
  Database: {
    icon: "🗄️",
    variant: "badge",
    layout: "flex",
    description: "Databases I have experience with.",
  },
  "Desktop Development": {
    icon: "🖥️",
    variant: "highlight",
    layout: "center",
    description: "My tool for building cross-platform apps.",
  },
  Tools: {
    icon: "🛠️",
    variant: "pill",
    layout: "flex",
    description: "The ecosystem of tools that supports my workflow.",
  },
  "Currently Learning": {
    icon: "📚",
    variant: "special",
    layout: "special",
    description: "Actively expanding my backend and software engineering skills.",
  },
} as const;

type GroupTitle = keyof typeof groupConfig;

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-24 lg:py-12">
      <div className="section-container">
        <SectionHeading eyebrow="Skills" title="My Technical Toolkit" />

        <div className="space-y-16">
          {skillGroups.map((group, gi) => {
            const title = group.title as GroupTitle;
            const config = groupConfig[title];
            if (!config) return null;

            if (config.variant === "special") {
              return (
                <Reveal key={title} delay={gi * 0.05}>
                  <h3 className="flex items-center gap-3 font-heading font-semibold text-2xl mb-4 text-ink">
                    {config.icon} {title}
                  </h3>
                  <Card className="border-l-4 border-emerald-400 p-6">
                    <p className="text-muted mb-5">{config.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <SkillCard key={item.name} {...item} variant="badge" />
                      ))}
                    </div>
                  </Card>
                </Reveal>
              );
            }

            return (
              <Reveal key={title} delay={gi * 0.05}>
                <h3 className="flex items-center gap-3 font-heading font-semibold text-2xl mb-2 text-ink">
                  {config.icon} {title}
                </h3>
                <p className="text-muted max-w-2xl mb-6">{config.description}</p>

                {config.layout === "grid" && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {group.items.map((item) => (
                      <SkillCard key={item.name} {...item} variant={config.variant} />
                    ))}
                  </div>
                )}
                {config.layout === "flex" && (
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <SkillCard key={item.name} {...item} variant={config.variant} />
                    ))}
                  </div>
                )}
                {config.layout === "center" && (
                  <div className="flex justify-left">
                    {group.items.map((item) => (
                      <SkillCard key={item.name} {...item} variant={config.variant} />
                    ))}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
