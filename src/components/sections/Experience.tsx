import { experience } from "@/data/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-24 lg:py-12">
      <div className="section-container">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative max-w-2xl mx-auto pl-10">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/10" />

          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1} className="relative mb-8 last:mb-0">
              <span className="absolute -left-10 top-2 w-8 h-8 rounded-full bg-grad-primary grid place-items-center shadow-glow">
                <Briefcase size={16} className="text-white" />
              </span>

              <Card className="p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-heading font-semibold text-xl">{item.role}</h3>
                  <span className="text-xs text-secondary font-medium">{item.duration}</span>
                </div>
                <p className="text-muted mt-1">
                  {item.organization} · {item.technology}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.responsibilities.map((r) => (
                    <li key={r} className="text-sm text-muted flex gap-2">
                      <span className="text-primary">—</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
