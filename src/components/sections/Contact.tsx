import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FloatingInput } from "@/components/ui/FloatingInput";
import type { ContactFormData } from "@/types";
import emailjs from "@emailjs/browser";

const contactLinks = [
  { icon: Mail, label: "Email", value: "jagadeesanr2005@gmail.com", href: "mailto:jagadeesanr2005@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/jagadeesan", href: "https://linkedin.com/in/jagadeesan" },
  { icon: Github, label: "GitHub", value: "@jagadeesan", href: "https://github.com/jagadeesanr2005-dot" },
  { icon: MapPin, label: "Location", value: "India", href: undefined },
];

type Errors = Partial<Record<keyof ContactFormData, string>>;

function validate(data: ContactFormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<ContactFormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent) {
  e.preventDefault();

  const nextErrors = validate(form);
  setErrors(nextErrors);

  if (Object.keys(nextErrors).length > 0) return;

  try {
    await emailjs.send(
      "service_whul9rr",
      "template_ptcv955",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "QTFsQApOkKb5_RxMY"
    );

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send message.");
  }
}

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project in mind or just want to say hi? My inbox is open."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Reveal>
            <Card className="p-6 sm:p-8 h-full">
              <ul className="space-y-5">
                {contactLinks.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-primary/10 grid place-items-center text-primary shrink-0">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-muted">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium hover:text-primary transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10"
                >
                  <CheckCircle2 size={40} className="text-success mb-4" />
                  <p className="font-heading font-semibold text-lg">Message sent</p>
                  <p className="text-muted text-sm mt-1">
                    Thanks for reaching out — I'll reply soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <FloatingInput
                    label="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    error={errors.name}
                  />
                  <FloatingInput
                    label="Your email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    error={errors.email}
                  />
                  <FloatingInput
                    as="textarea"
                    label="Your message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    error={errors.message}
                  />
                  <Button type="submit" variant="primary" className="w-full">
                    <Send size={16} /> Send Message
                  </Button>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
