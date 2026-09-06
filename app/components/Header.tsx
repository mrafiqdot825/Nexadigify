import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export function Header({ onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: "Services", to: "/services" },
    { label: "Work", to: "/work" },
    { label: "About", to: "/about" },
    { label: "Insights", to: "/insights" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-xl shadow-[0_2px_12px_rgba(3,8,104,0.08)] border-b border-surface-container-high/40"
          : "bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(3,8,104,0.06)]"
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer group"
          aria-label="NexaDigify Home"
        >
          <img
            src="/logo.svg"
            alt="NexaDigify Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-all font-label-nav text-label-nav pb-1 ${
                  isActive
                    ? "text-secondary font-semibold border-b-2 border-secondary"
                    : "text-on-surface-variant hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-4 sm:gap-5">
          {onOpenConsultation ? (
            <button
              onClick={onOpenConsultation}
              type="button"
              className="hidden sm:inline-flex items-center justify-center font-label-action text-label-action text-on-primary bg-gradient-to-r from-[#030868] via-[#0C5EEB] to-[#02B4FC] hover:opacity-95 px-6 py-3 rounded-lg shadow-[0_2px_10px_rgba(12,94,235,0.25)] transition-all cursor-pointer transform active:scale-95"
            >
              Schedule Consultation
            </button>
          ) : (
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center font-label-action text-label-action text-on-primary bg-gradient-to-r from-[#030868] via-[#0C5EEB] to-[#02B4FC] hover:opacity-95 px-6 py-3 rounded-lg shadow-[0_2px_10px_rgba(12,94,235,0.25)] transition-all cursor-pointer transform active:scale-95"
            >
              Schedule Consultation
            </Link>
          )}

          {/* User Profile Avatar with Interactive Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              type="button"
              aria-label="User profile & enterprise status"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-secondary/40 transition-all"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </button>

            {profileDropdownOpen && (
              <div
                className="absolute right-0 mt-3 w-64 bg-surface-container-lowest rounded-xl shadow-[0_12px_32px_rgba(3,8,104,0.15)] border border-outline-variant/40 p-2 z-50 animate-fadeIn"
                onClick={() => setProfileDropdownOpen(false)}
              >
                <div className="p-3 border-b border-surface-container-high">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#02B4FC] animate-ping"></span>
                    <span className="font-caption text-secondary uppercase font-bold tracking-wider text-[11px]">
                      Enterprise Network
                    </span>
                  </div>
                  <p className="font-subhead-md text-primary font-bold text-sm mt-0.5">
                    NexaDigify Architecture Hub
                  </p>
                  <p className="text-xs text-outline truncate font-mono">
                    auth-cluster: us-east-sovereign
                  </p>
                </div>
                <div className="py-1">
                  <Link
                    to="/contact"
                    className="w-full text-left px-3 py-2 text-xs font-semibold text-primary hover:bg-surface-container rounded transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      event_available
                    </span>
                    Whiteboard Session
                  </Link>
                  <Link
                    to="/services"
                    className="w-full text-left px-3 py-2 text-xs font-medium text-on-surface-variant hover:bg-surface-container rounded transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px] text-outline">
                      terminal
                    </span>
                    System Specifications
                  </Link>
                  <Link
                    to="/insights"
                    className="w-full text-left px-3 py-2 text-xs font-medium text-on-surface-variant hover:bg-surface-container rounded transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px] text-outline">
                      article
                    </span>
                    Research &amp; Whitepapers
                  </Link>
                  <a
                    href="mailto:enterprise@nexadigify.com"
                    className="w-full text-left px-3 py-2 text-xs font-medium text-on-surface-variant hover:bg-surface-container rounded transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px] text-outline">
                      support_agent
                    </span>
                    Principal Architect Hotline
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-container-high px-6 py-5 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-left font-label-nav text-base py-2.5 transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-secondary font-bold pl-2 border-l-2 border-secondary"
                      : "text-on-surface-variant hover:text-primary"
                  }`
                }
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[18px] text-outline">
                  chevron_right
                </span>
              </NavLink>
            ))}
            <div className="pt-4 border-t border-surface-container-high flex flex-col gap-3">
              {onOpenConsultation ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full inline-flex items-center justify-center font-label-action text-label-action text-on-primary bg-gradient-to-r from-[#030868] via-[#0C5EEB] to-[#02B4FC] py-3.5 rounded-lg shadow-md"
                >
                  Schedule Consultation
                </button>
              ) : (
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center font-label-action text-label-action text-on-primary bg-gradient-to-r from-[#030868] via-[#0C5EEB] to-[#02B4FC] py-3.5 rounded-lg shadow-md"
                >
                  Schedule Consultation
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
