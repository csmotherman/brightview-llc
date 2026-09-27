import type { Service } from "../data/services";

type ServiceMotifProps = {
  icon: Service["icon"];
  className?: string;
};

function WindowCleaningMark() {
  return (
    <svg viewBox="0 0 220 220" fill="none" aria-hidden="true">
      <rect
        x="30"
        y="20"
        width="160"
        height="180"
        rx="3"
        stroke="var(--blue-dark)"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
      <path
        d="M110 20v180M30 110h160"
        stroke="var(--blue-dark)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <path
        d="M46 46 94 94M126 126l48 48"
        stroke="var(--gold)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M56 160 76 180M144 40 164 60"
        stroke="#fff"
        strokeOpacity="0.5"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function PowerWashingMark() {
  return (
    <svg viewBox="0 0 220 220" fill="none" aria-hidden="true">
      <path
        d="M40 60 130 100"
        stroke="var(--blue-dark)"
        strokeOpacity="0.6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M46 76 128 108M52 92 126 116M58 108 124 124"
        stroke="var(--blue)"
        strokeOpacity="0.45"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="150" cy="122" r="2.4" fill="var(--gold)" />
      <circle cx="164" cy="134" r="1.8" fill="var(--gold)" />
      <circle cx="140" cy="140" r="1.6" fill="var(--gold)" />
      <path
        d="M20 176h180"
        stroke="var(--navy)"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
    </svg>
  );
}

function HolidayLightingMark() {
  return (
    <svg viewBox="0 0 220 220" fill="none" aria-hidden="true">
      <path
        d="M20 150 90 90h40l70 60"
        stroke="var(--blue-light)"
        strokeOpacity="0.55"
        strokeWidth="2.5"
        fill="none"
      />
      {[24, 48, 72, 96, 120, 144, 168, 192].map((x, index) => {
        const onRoof = x < 90 || x > 130;
        const y = x < 90 ? 150 - (x - 20) * (60 / 70) : x > 130 ? 150 - (200 - x) * (60 / 70) : 90;
        return (
          <circle
            key={x}
            cx={x}
            cy={onRoof ? y : 90}
            r="4"
            fill={index % 2 === 0 ? "var(--gold)" : "var(--blue-light)"}
          />
        );
      })}
    </svg>
  );
}

export function ServiceMotif({ icon, className = "" }: ServiceMotifProps) {
  return (
    <div className={className}>
      {icon === "window" && <WindowCleaningMark />}
      {icon === "spray" && <PowerWashingMark />}
      {icon === "lights" && <HolidayLightingMark />}
    </div>
  );
}
