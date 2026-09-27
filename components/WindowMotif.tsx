type WindowMotifProps = {
  className?: string;
};

// The recurring Bright View mark: a four-pane window with a sunlight
// diagonal crossing the glass. Used as decorative brand geometry, never
// as a literal photo placeholder.
export function WindowMotif({ className = "" }: WindowMotifProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="6"
        width="188"
        height="188"
        rx="4"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="2"
      />
      <path
        d="M100 6v188M6 100h188"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <path
        d="M24 60h50M24 76h34M126 130h50M126 146h34"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="1.2"
      />
      <path
        d="M6 194 194 6"
        stroke="var(--gold)"
        strokeOpacity="0.85"
        strokeWidth="2.5"
      />
    </svg>
  );
}
