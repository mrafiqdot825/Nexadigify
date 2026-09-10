import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { AnimatePresence } from "motion/react";
import { Menu } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { MobileNavigation } from "./MobileNavigation";

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export function Logo({
  className = "h-9 w-auto",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5"
      aria-label="Nexadigify Home"
    >
      <img
        src="/Logo.png"
        alt="Nexadigify"
        className={`${className} transition-transform duration-300 group-hover:scale-[1.04]`}
      />
      {showText && (
        <span className="flex items-center text-xl tracking-tight select-none">
          <span className="font-black tracking-[-0.03em] text-[#004696]">NEXA</span>
          <span className="ml-1.5 font-medium tracking-[-0.01em] text-[#1e8eab]">DIGIFY</span>
        </span>
      )}
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openSolutions = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 120);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(0,70,150,0.1)] bg-white/90 shadow-[0_4px_24px_rgba(0,70,150,0.06)] backdrop-blur-md"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Primary"
      >
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={openSolutions}
            onMouseLeave={scheduleClose}
          >
            <button
              className="relative text-sm font-medium text-[#0b1f33] transition-colors duration-200 hover:text-[#004696]"
              aria-expanded={solutionsOpen}
              onClick={() => setSolutionsOpen((v) => !v)}
            >
              Solutions
              <span
                className={`absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#1e8eab] transition-transform duration-300 ${solutionsOpen ? "scale-x-100" : ""}`}
              />
            </button>
            <AnimatePresence>
              {solutionsOpen && (
                <MegaMenu onNavigate={() => setSolutionsOpen(false)} />
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `group relative text-sm font-medium transition-colors duration-200 hover:text-[#004696] ${
                  isActive ? "text-[#004696]" : "text-[#0b1f33]"
                }`
              }
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-[#1e8eab] transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-[#004696] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,70,150,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e8eab] sm:inline-flex"
          >
            Let's Talk
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,70,150,0.14)] text-[#0b1f33] lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
