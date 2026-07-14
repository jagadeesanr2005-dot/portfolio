import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const paragraphs = [
  "I'm a Computer Science graduate with a strong passion for software development and continuous learning.",
  "I enjoy building modern web applications, desktop applications, and user-focused software that solves real-world problems.",
  "My experience includes Angular, Electron, Python, Java, and modern web technologies.",
  "I'm always eager to learn new technologies and improve my development skills.",
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="About Me" title="Building things that work" />

        <Reveal className="max-w-3xl mx-auto">
          <Card className="p-8 sm:p-10">
            <div className="space-y-5 text-muted leading-relaxed text-base sm:text-lg">
              {paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-ink text-lg sm:text-xl font-medium" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
