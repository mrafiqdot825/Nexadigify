import { Link } from "react-router";
import { solutions } from "@/data/solutions";
import { Logo } from "./Navbar";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
];

const COMPANY_LINKS = [
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(0,70,150,0.1)] bg-white">
      <div className="animate-gradient-line h-[2px] w-full bg-gradient-to-r from-[#004696] via-[#1e8eab] to-[#004696]" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(0,70,150,0.14)] text-[#004696] transition-colors duration-200 hover:border-[#1e8eab] hover:bg-[#f3f8fa]"
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
              <li>hello@nexadigify.com</li>
              <li>+92 51 1234567</li>
              <li>Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[rgba(0,70,150,0.08)] pt-8 text-sm text-[#718391] sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Nexadigify AI. All rights
            reserved.
          </p>
          <div className="flex gap-6">
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
