import { Download, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Resume() {
  return (
    <section id="resume" className="py-12 sm:py-24 lg:py-12">
      <div className="section-container">
        <SectionHeading
          eyebrow="Resume"
          title="Get the full picture"
        />

        <Reveal className="max-w-xl mx-auto">
          <Card className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-grad-primary grid place-items-center mx-auto shadow-glow">
              <FileText size={28} className="text-white" />
            </div>

            <h3 className="heading-lg mt-6 text-2xl">
              Jagadeesan R — Resume
            </h3>

            <p className="text-muted mt-3">
              A one-page summary of my experience, skills, and projects —
              updated regularly.
            </p>

            <a
              href="/resume.pdf"
              download="Jagadeesan_R_Resume.pdf"
              className="inline-flex mt-8"
            >
              <Button variant="primary">
                <Download size={18} />
                Download Resume
              </Button>
            </a>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
