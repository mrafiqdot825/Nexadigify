interface TechIconProps {
  className?: string;
}

function ReactIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: TechIconProps) {
  return (
    <svg
      viewBox="-11.5 -10.23174 23 20.46348"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NextjsIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        d="M15.7 17.5L9.3 8.3H7.6V16.3H9.2V10.5L15 17.7C15.2 17.6 15.5 17.5 15.7 17.5Z"
        fill="white"
      />
      <rect x="15.1" y="8.3" width="1.6" height="5.8" fill="white" />
    </svg>
  );
}

function TypeScriptIcon({
  className = "h-7 w-7 sm:h-8 sm:w-8",
}: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="1.5"
        width="21"
        height="21"
        rx="4"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5.5 9h5.5m-2.75 0v7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 14.5c.7.7 1.6 1 2.5 1 1.2 0 2-.5 2-1.4 0-1.8-4-1.2-4-3.4 0-1.2 1-2 2.5-2 1.1 0 1.9.4 2.5.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PythonIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M11.91 2c-4.22 0-3.95 1.83-3.95 1.83l.01 1.9h4.03v.57H6.38S3.5 6.02 3.5 10.23c0 4.22 2.52 4.07 2.52 4.07h1.5v-2.12s-.08-2.52 2.48-2.52h4.27s2.4-.04 2.4-2.36V4.4s.37-2.4-4.76-2.4zm-2.17 1.25a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zm2.35 18.75c4.22 0 3.95-1.83 3.95-1.83l-.01-1.9H12v-.57h5.62s2.88.28 2.88-3.93c0-4.22-2.52-4.07-2.52-4.07h-1.5v2.12s.08 2.52-2.48 2.52H9.73s-2.4.04-2.4 2.36V19.6s-.37 2.4 4.76 2.4zm2.17-1.25a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z" />
    </svg>
  );
}

function TailwindIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.1 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.3 7.4 15 6 12 6zm-6 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.1 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 13.4 9 12 6 12z" />
    </svg>
  );
}

function NodeIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l8.8 5.1v10.2L12 22.4 3.2 17.3V7.1L12 2zm0 2.2L5.2 8.1v7.8L12 19.8l6.8-3.9V8.1L12 4.2z" />
      <path
        d="M11 7.8h2v8.4h-2zm-2.8 1.8h1.8v6.6H8.2zm5.6 0h1.8v6.6h-1.8z"
        opacity="0.8"
      />
    </svg>
  );
}

function DockerIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.98 9.38h-1.84V7.54h1.84v1.84zm-2.25 0H9.89V7.54h1.84v1.84zm-2.26 0H7.63V7.54h1.84v1.84zm6.77 0h-1.84V7.54h1.84v1.84zm-4.51-2.26H9.89V5.28h1.84v1.84zm2.25 0h-1.84V5.28h1.84v1.84zm2.26 0h-1.84V5.28h1.84v1.84zM24 10.6a6.8 6.8 0 0 1-2.3 2.57c.1.72.06 1.44-.12 2.15a6.47 6.47 0 0 1-3.66 4.41c-3.1 1.44-6.8.96-9.84-.4a10.87 10.87 0 0 1-4.7-4.48c-.28-.5-.5-1.04-.6-1.6-.3-.08-.55-.2-.77-.38a3.15 3.15 0 0 1-.95-1.4 3.03 3.03 0 0 1 .58-2.6 3.6 3.6 0 0 1 2.37-1.1c.3 0 .6.04.88.13.25-.97.87-1.8 1.74-2.3.16.8.63 1.5 1.3 1.96h7.62c.7-.6 1.6-.9 2.55-.9.9 0 1.7.3 2.36.8a5.1 5.1 0 0 1 3.53 3.15z" />
    </svg>
  );
}

function PostgresIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.22 2c-.67 0-1.32.06-1.95.18-.32.06-.63.15-.93.26C8.2 2.85 7.37 3.5 6.78 4.3c-.6.82-.93 1.83-.93 2.94 0 .42.06.84.18 1.25.12.4.3.77.54 1.1.25.35.56.66.92.93-.05.42-.08.85-.08 1.3 0 .75.1 1.48.28 2.18.18.7.45 1.35.8 1.95.34.6.76 1.13 1.23 1.58.48.45 1.02.82 1.6 1.1.58.28 1.2.48 1.84.58.65.1 1.32.14 2 .14.7 0 1.38-.05 2.03-.15.65-.1 1.27-.3 1.84-.58.58-.28 1.1-.65 1.56-1.1.47-.45.87-.98 1.2-1.58.33-.6.58-1.25.75-1.95.17-.7.26-1.43.26-2.18 0-.45-.03-.88-.08-1.3.36-.27.67-.58.92-.93.24-.33.42-.7.54-1.1.12-.41.18-.83.18-1.25 0-1.11-.33-2.12-.93-2.94-.59-.8-1.42-1.45-2.56-1.86-.3-.11-.61-.2-.93-.26-.63-.12-1.28-.18-1.95-.18zm-2.5 4.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 11c1.5 0 2.5 1.2 2.5 2.8 0 1.7-1 3.2-2.5 3.2s-2.5-1.5-2.5-3.2c0-1.6 1-2.8 2.5-2.8z" />
    </svg>
  );
}

function OpenAIIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.06 6.06 0 0 0 10.7.35a6.05 6.05 0 0 0-5.75 4.17 6.05 6.05 0 0 0-4.14 3.01 6.06 6.06 0 0 0 .76 7.07 5.98 5.98 0 0 0 .52 4.91 6.05 6.05 0 0 0 6.51 2.9A6.06 6.06 0 0 0 13.3 23.65a6.05 6.05 0 0 0 5.75-4.17 6.05 6.05 0 0 0 4.14-3.01 6.06 6.06 0 0 0-.76-7.07l-.15.42zm-7.65 11.83a4.03 4.03 0 0 1-2.61-.96l.16-.09 4.33-2.5a1.01 1.01 0 0 0 .51-.88v-6.1l1.83 1.05a.11.11 0 0 1 .06.09v5.04a4.05 4.05 0 0 1-4.28 4.35zm-9.35-3.83a4.03 4.03 0 0 1-.48-2.74l.16.1 4.33 2.5a1.01 1.01 0 0 0 1.02 0l5.28-3.05v2.1a.11.11 0 0 1-.05.1l-4.36 2.52a4.05 4.05 0 0 1-5.9-1.53zm-1.7-8.99a4.03 4.03 0 0 1 2.13-1.78l-.01.18v5a1.01 1.01 0 0 0 .51.88l5.28 3.05-1.83 1.06a.11.11 0 0 1-.1 0l-4.36-2.52a4.05 4.05 0 0 1-1.62-5.87zm13.14-2.55l-4.33 2.5a1.01 1.01 0 0 0-.51.88v6.1l-1.83-1.05a.11.11 0 0 1-.06-.09V9.58a4.05 4.05 0 0 1 6.89-2.82l-.16.09zm3.08 5.6a4.03 4.03 0 0 1 .48 2.74l-.16-.1-4.33-2.5a1.01 1.01 0 0 0-1.02 0l-5.28 3.05v-2.1a.11.11 0 0 1 .05-.1l4.36-2.52a4.05 4.05 0 0 1 5.9 1.53zm-3.64-1.25l-2.45-1.41a1.01 1.01 0 0 0-1.02 0l-2.45 1.41v-2.82a.11.11 0 0 1 .05-.1l4.36-2.52a4.05 4.05 0 0 1 1.51 6.86v-1.42z" />
    </svg>
  );
}

function PyTorchIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-1.8 3.6a.6.6 0 0 0-.8.2L8.2 10.9a6 6 0 0 0 2.4 8.2 6 6 0 0 0 8.2-2.4 6 6 0 0 0-2.4-8.2l-1.1 1.1a4.5 4.5 0 1 1-5.3 7.2 4.5 4.5 0 0 1 2.3-5.9l1.6-2.7a.6.6 0 0 0-.2-.8z" />
    </svg>
  );
}

function GraphQLIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" />
      <polygon points="12 6 18 17 6 17" />
      <circle cx="12" cy="2" r="1.5" fill="currentColor" />
      <circle cx="21" cy="7" r="1.5" fill="currentColor" />
      <circle cx="21" cy="17" r="1.5" fill="currentColor" />
      <circle cx="12" cy="22" r="1.5" fill="currentColor" />
      <circle cx="3" cy="17" r="1.5" fill="currentColor" />
      <circle cx="3" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}

function AWSIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.8 11.2c-.3 0-.6.1-.7.4-.2.2-.2.5-.2.9 0 .4.1.7.2.9.2.2.4.4.7.4.3 0 .6-.1.8-.4.2-.2.3-.5.3-.9 0-.4-.1-.7-.3-.9-.2-.3-.5-.4-.8-.4zm-2.4 1.3c0-.9.3-1.6.8-2.1.6-.5 1.3-.8 2.2-.8.8 0 1.4.2 1.8.6V9.8c0-.6-.1-1-.4-1.2-.3-.2-.7-.3-1.3-.3-.4 0-.9.1-1.3.2-.4.1-.7.3-1 .5l-.5-.9c.4-.3.9-.5 1.4-.7.6-.2 1.1-.3 1.7-.3 1 0 1.8.3 2.3.8.5.5.7 1.3.7 2.3v4.6h-1.2l-.1-.7c-.4.5-1.1.8-2 .8-.9 0-1.6-.3-2.2-.8-.6-.6-.9-1.3-.9-2.3zm8.9 2.3l-1.9-5.9h1.3l1.3 4.4 1.2-4.4h1.3l1.2 4.4 1.3-4.4h1.3l-1.9 5.9h-1.3l-1.2-4.3-1.2 4.3h-1.5zm-8.8 5.6c4.6 2.4 10.3 2.4 15.3-.5.3-.2.6.1.4.4-4.8 3.5-11.2 3.5-16.1.6-.3-.2-.1-.6.4-.5zm15.8-.8c.4-.1.7.3.5.7-.3.5-.9 1.1-1.6 1.3-.2.1-.4 0-.4-.2-.1-.3.2-.5.4-.7.4-.3.8-.8 1.1-1.1z" />
    </svg>
  );
}

const TECH_ICONS = [
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextjsIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "Docker", Icon: DockerIcon },
  { name: "PostgreSQL", Icon: PostgresIcon },
  { name: "OpenAI", Icon: OpenAIIcon },
  { name: "PyTorch", Icon: PyTorchIcon },
  { name: "GraphQL", Icon: GraphQLIcon },
  { name: "Amazon Web Services", Icon: AWSIcon },
];

export function TechIconsMarquee() {
  // Duplicate for seamless 50% translation infinite loop
  const duplicatedIcons = [...TECH_ICONS, ...TECH_ICONS];

  return (
    <div className="relative w-full overflow-hidden py-4 sm:py-6">
      {/* Edge fade masks */}
      <div className="relative mx-auto w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-6 sm:gap-8 lg:gap-10 hover:[animation-play-state:paused]">
          {duplicatedIcons.map((tech, index) => {
            const IconComponent = tech.Icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                title={tech.name}
                aria-label={tech.name}
                className="group flex shrink-0 items-center justify-center rounded-2xl border border-[rgba(0,70,150,0.12)] bg-white/75 p-3 shadow-xs backdrop-blur-xs text-[#004696]/80 transition-all duration-300 hover:scale-110 hover:border-[#1e8eab] hover:bg-white hover:text-[#004696] hover:shadow-md sm:p-3.5"
              >
                <IconComponent className="h-10 w-10 sm:h-12 sm:w-12 transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
