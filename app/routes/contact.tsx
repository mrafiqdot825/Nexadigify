import type { MetaFunction } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";

export const meta: MetaFunction = () => [
  { title: "Contact — Nexadigify" },
  {
    name: "description",
    content:
      "Tell Nexadigify about your project — AI automation, agentic AI, custom AI development, data analytics, or web development.",
  },
];

const CONTACT_DETAILS = [
  { icon: Mail, label: "hello@nexadigify.com" },
  { icon: Phone, label: "+91 9876543210" },
  { icon: MapPin, label: "Islamabad, Pakistan" },
];

export default function Contact() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <AnimatedBackground variant="hero" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(0,70,150,0.16)] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#004696]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1e8eab]" />
            Contact
          </span>
          <h1 className="text-[clamp(2.2rem,5vw,3.75rem)] font-extrabold leading-[1.06] tracking-tight text-[#0b1f33]">
            Let's build something{" "}
            <span className="text-gradient-brand">intelligent.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#526575]">
            Tell us about your business and goals — a member of our team will
            follow up within one business day.
          </p>

          <div className="mt-10 space-y-4">
            {CONTACT_DETAILS.map((d) => (
              <div
                key={d.label}
                className="flex items-center gap-3 text-[#0b1f33]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#004696] shadow-[0_6px_16px_rgba(0,70,150,0.1)]">
                  <d.icon size={16} />
                </div>
                <span className="text-sm font-medium">{d.label}</span>
              </div>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.1}>
          <ContactForm variant="contact" />
        </ScrollReveal>
      </div>
    </section>
  );
}
