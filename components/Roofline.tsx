export function Roofline({ className = "" }: { className?: string }) {
  const dots = Array.from({ length: 22 }, (_, i) => i);

  return (
    <svg
      className={className}
      viewBox="0 0 1200 90"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 90 120 20h100l60 40 60-40h100l60 40 60-40h100l60 40 60-40h100l60 40 60-40h100l40 30V90Z"
        fill="none"
        stroke="var(--blue-light)"
        strokeOpacity="0.3"
        strokeWidth="2"
      />
      {dots.map((i) => (
        <circle
          key={i}
          cx={30 + i * 54}
          cy={i % 4 === 0 || i % 4 === 3 ? 22 : 60}
          r="4.5"
          fill={i % 2 === 0 ? "var(--gold)" : "var(--blue-light)"}
          opacity="0.9"
        />
      ))}
    </svg>
  );
}
