type IconProps = {
  name:
    | "window"
    | "spray"
    | "lights"
    | "arrow"
    | "spark"
    | "check"
    | "camera"
    | "map"
    | "message"
    | "shield";
  className?: string;
};

export function Icon({ name, className = "" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "window") {
    return (
      <svg {...common}>
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M12 3v18M4 12h16M7.5 8.5l1.75-1.75M15.5 17l1.5-1.5" />
      </svg>
    );
  }

  if (name === "spray") {
    return (
      <svg {...common}>
        <path d="M3 18h5.5l2.2-7.8 4.9-2.6 4 2.1" />
        <path d="m16.8 4.6 3 3M4 21h17M7.5 8.5l2 2" />
        <path d="M18.7 12.4h.01M20.9 14.1h.01M17.7 15.1h.01" />
      </svg>
    );
  }

  if (name === "lights") {
    return (
      <svg {...common}>
        <path d="M3 9.5c3.2-4.1 6.1 4.1 9.1 0 3.1-4.2 5.9 4 8.9 0" />
        <path d="M6 9v4M12 9v4M18 9v4" />
        <path d="M4.7 15.3h2.6v2.3a1.3 1.3 0 0 1-2.6 0v-2.3ZM10.7 15.3h2.6v2.3a1.3 1.3 0 0 1-2.6 0v-2.3ZM16.7 15.3h2.6v2.3a1.3 1.3 0 0 1-2.6 0v-2.3Z" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg {...common}>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg {...common}>
        <path d="M12 2l1.3 5.7L19 9l-5.7 1.3L12 16l-1.3-5.7L5 9l5.7-1.3L12 2Z" />
        <path d="M19 16l.6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  if (name === "camera") {
    return (
      <svg {...common}>
        <path d="M4 7.5h3l1.2-2h7.6l1.2 2h3a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5a2 2 0 0 1 2-2Z" />
        <circle cx="12" cy="14" r="4" />
      </svg>
    );
  }

  if (name === "map") {
    return (
      <svg {...common}>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
        <path d="M9 3v15M15 6v15" />
      </svg>
    );
  }

  if (name === "message") {
    return (
      <svg {...common}>
        <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
        <path d="M7 9h10M7 13h6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 3 4.5 6v5.5c0 4.4 3 7.7 7.5 9.5 4.5-1.8 7.5-5.1 7.5-9.5V6L12 3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>
  );
}
