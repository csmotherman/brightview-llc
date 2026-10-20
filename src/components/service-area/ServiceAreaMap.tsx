import { Button } from "@/components/ui/Button";
import { MAP } from "@/content/michigan-map";
import styles from "./ServiceAreaMap.module.css";

/**
 * Illustrative map: Michigan's lower peninsula with an approximate service circle. The circle is a soft, dashed shape
 * with no marker or label at its center, and the page states no distances or drive times.
 */
export function ServiceAreaMap() {
  return (
    <div className={styles.wrap}>
      <figure className={styles.stage}>
        <svg
          className={styles.map}
          viewBox={`0 0 ${MAP.width} ${MAP.height}`}
          role="img"
          aria-label="Illustrative map of Michigan's lower peninsula with an approximate service area circled in Southeast Michigan. It is not a verified service boundary."
        >
          <defs>
            <radialGradient id="sa-water" cx="70%" cy="72%" r="85%">
              <stop offset="0" stopColor="#16396b" />
              <stop offset="1" stopColor="#071a36" />
            </radialGradient>
            <pattern id="sa-dots" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.1" fill="#9db8e0" opacity=".22" />
            </pattern>
            <filter id="sa-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <radialGradient id="sa-area" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#ffe9b8" stopOpacity=".62" />
              <stop offset=".72" stopColor="#f2cf86" stopOpacity=".42" />
              <stop offset="1" stopColor="#e8b954" stopOpacity=".22" />
            </radialGradient>
            <clipPath id="sa-land"><path d={MAP.michigan} /></clipPath>
          </defs>

          <rect width={MAP.width} height={MAP.height} fill="url(#sa-water)" />
          <rect width={MAP.width} height={MAP.height} fill="url(#sa-dots)" />
          <path d={MAP.neighbors} className={styles.neighbors} />

          {MAP.lakes.map((lake) => {
            const right = lake.x > MAP.width - 110;
            const left = lake.x < 110;
            const words = lake.name.split(" ");
            const [first, ...rest] = lake.name.length > 10 ? words : [lake.name];
            return (
              <text key={lake.name} x={right ? MAP.width - 18 : left ? 18 : lake.x} y={lake.y} className={styles.lake} textAnchor={right ? "end" : left ? "start" : "middle"}>
                <tspan>{first}</tspan>
                {rest.length > 0 && <tspan x={right ? MAP.width - 18 : left ? 18 : lake.x} dy="1.35em">{rest.join(" ")}</tspan>}
              </text>
            );
          })}

          <path d={MAP.michigan} className={styles.landGlow} filter="url(#sa-glow)" />
          <path d={MAP.michigan} className={styles.land} />

          <g clipPath="url(#sa-land)">
            <circle cx={MAP.area.cx} cy={MAP.area.cy} r={MAP.area.r} fill="url(#sa-area)" />
          </g>
          <path d={MAP.michigan} className={styles.landEdge} />
          <circle cx={MAP.area.cx} cy={MAP.area.cy} r={MAP.area.r} className={styles.areaEdge} />

          <text x="560" y="668" className={styles.regionLabel} textAnchor="middle">
            <tspan>APPROXIMATE</tspan>
            <tspan x="560" dy="1.3em">SERVICE AREA</tspan>
          </text>
        </svg>
        <figcaption className={styles.caption}>Approximate area. Not a verified service boundary.</figcaption>
      </figure>

      <div className={styles.side}>
        <p className={styles.eyebrow}>SERVICE AREA</p>
        <h2>Serving Southeast Michigan.</h2>
        <p className={styles.lead}>
          Proudly serving communities throughout Southeast Michigan. Not sure if you&apos;re in our service area? Reach out for a free quote, and we&apos;ll confirm availability for your location.
        </p>
        <ul className={styles.legend} aria-label="Map key">
          <li><i className={styles.key} /><span>Approximate service area</span></li>
        </ul>
        <p className={styles.cta}>
          <strong>Request a quote with your address.</strong> We&apos;ll confirm whether we reach your location.
        </p>
        <Button href="/quote" arrow className={styles.bigButton}>Request a Free Quote</Button>
      </div>
    </div>
  );
}
