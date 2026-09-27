import Image from "next/image";
import { Icon } from "./Icons";

type BeforeAfterProps = {
  beforeSrc?: string;
  afterSrc?: string;
  title: string;
  service: string;
  priority?: boolean;
};

function PhotoPanel({
  label,
  src,
  alt,
  priority = false,
}: {
  label: "Before" | "After";
  src?: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className={`photo-panel photo-panel-${label.toLowerCase()}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 720px) 50vw, 420px"
          className="result-photo"
        />
      ) : (
        <div className="photo-placeholder">
          <Icon name="camera" />
          <span>{label} photo</span>
          <small>Real Bright View job photo goes here</small>
        </div>
      )}
      <span className="photo-label">{label}</span>
    </div>
  );
}

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  title,
  service,
  priority = false,
}: BeforeAfterProps) {
  return (
    <article className="before-after-card">
      <div className="before-after-media">
        <PhotoPanel
          label="Before"
          src={beforeSrc}
          alt={`${title} before Bright View service`}
          priority={priority}
        />
        <PhotoPanel
          label="After"
          src={afterSrc}
          alt={`${title} after Bright View service`}
          priority={priority}
        />
        <div className="compare-divider" aria-hidden="true">
          <span>↔</span>
        </div>
      </div>
      <div className="before-after-caption">
        <div>
          <span>{service}</span>
          <h3>{title}</h3>
        </div>
        <Icon name="spark" />
      </div>
    </article>
  );
}
