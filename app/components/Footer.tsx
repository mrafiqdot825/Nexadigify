import { Link } from "react-router";
import { solutions } from "@/data/solutions";
import { Logo } from "./Navbar";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/nexadigify%C2%AE/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923102344440",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
];

const COMPANY_LINKS = [
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(0,70,150,0.1)] bg-white">
      <div className="animate-gradient-line h-[2px] w-full bg-gradient-to-r from-[#004696] via-[#1e8eab] to-[#004696]" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#526575]">
              We design and build intelligent digital systems that automate
              operations, transform data into insight, and create measurable
              business value.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,70,150,0.14)] text-[#004696] transition-colors duration-200 hover:border-[#1e8eab] hover:bg-[#f3f8fa]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#004696]">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/solutions/${s.slug}`}
                    className="text-sm text-[#526575] transition-colors duration-200 hover:text-[#1e8eab]"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#004696]">
              Company
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-[#526575] transition-colors duration-200 hover:text-[#1e8eab]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#004696]">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm text-[#526575]">
              <li>
                <a
                  href="mailto:hello@nexadigify.com"
                  className="transition-colors hover:text-[#1e8eab]"
                >
                  hello@nexadigify.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923102344440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#1e8eab]"
                >
                  +92 310 2344440 (WhatsApp)
                </a>
              </li>
              <li>Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[rgba(0,70,150,0.08)] pt-8 text-center sm:text-left text-sm text-[#718391] sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Nexadigify AI. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="transition-colors hover:text-[#1e8eab]">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-[#1e8eab]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
