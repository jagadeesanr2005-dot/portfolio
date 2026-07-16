import { education } from "@/data/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  Building2,
} from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-12 sm:py-24 lg:py-12">
      <div className="section-container">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
        />

        <div className="relative max-w-3xl mx-auto pl-10">
          {/* Timeline Line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/10" />

          {education.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1} className="relative mb-10">
              {/* Timeline Icon */}
              <span className="absolute -left-10 top-6 w-8 h-8 rounded-full bg-grad-primary grid place-items-center shadow-glow">
                <GraduationCap size={16} className="text-white" />
              </span>

              <Card className="p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">
                <h3 className="font-heading text-2xl font-semibold text-ink">
                  {item.degree}
                </h3>

                <p className="mt-2 text-lg text-primary font-medium">
                  {item.field}
                </p>

                <div className="mt-6 space-y-4 text-muted">

                  <div className="flex items-center gap-3">
                    <Building2
                      size={18}
                      className="text-primary shrink-0"
                    />
                    <span>{item.institution}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CalendarDays
                      size={18}
                      className="text-primary shrink-0"
                    />
                    <span>{item.duration}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin
                      size={18}
                      className="text-primary shrink-0"
                    />
                    <span>{item.location}</span>
                  </div>

                </div>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}