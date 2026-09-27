"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
  service: string;
  location?: string;
  description?: string;
  priority?: boolean;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  title,
  service,
  location,
  description,
  priority = false,
}: BeforeAfterSliderProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    setPercent(Math.min(100, Math.max(0, ratio * 100)));
  }, []);

  useEffect(() => {
    if (!dragging) return;

    function handleMove(event: PointerEvent) {
      updateFromClientX(event.clientX);
    }
    function handleUp() {
      setDragging(false);
    }

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [dragging, updateFromClientX]);

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPercent((value) => Math.max(0, value - 4));
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setPercent((value) => Math.min(100, value + 4));
    } else if (event.key === "Home") {
      event.preventDefault();
      setPercent(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setPercent(100);
    }
  }

  return (
    <div className="ba-card">
      <div
        className="ba-frame"
        ref={frameRef}
        onPointerDown={(event) => {
          updateFromClientX(event.clientX);
          setDragging(true);
        }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          priority={priority}
          sizes="(max-width: 720px) 100vw, 640px"
          className="ba-image"
        />
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          priority={priority}
          sizes="(max-width: 720px) 100vw, 640px"
          className="ba-image"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        />

        <span className="ba-label ba-label-before">Before</span>
        <span className="ba-label ba-label-after">After</span>

        <div className="ba-handle-track" style={{ left: `${percent}%` }} />
        <div
          className="ba-handle"
          style={{ left: `${percent}%` }}
          role="slider"
          aria-label={`Before and after reveal for ${title}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(percent)}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onPointerDown={(event) => {
            event.stopPropagation();
            setDragging(true);
          }}
        >
          <Icon name="chevrons" />
        </div>
      </div>

      <div className="ba-caption">
        <div className="ba-caption-meta">
          <span>{service}</span>
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
        {location && <span className="ba-caption-location">{location}</span>}
      </div>
    </div>
  );
}
