/** Line-art symbols for the four services. Decorative: always paired with a text label. */
export function ServiceIcon({ icon, size = 30 }: { icon: string; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  if (icon === "window") return <svg {...common}><rect x="6" y="4" width="20" height="24" rx="1" /><path d="M16 4v24M6 16h20M3 28h26" /></svg>;
  if (icon === "wash") return <svg {...common}><path d="M4 27 21 10l3 3L7 30M20 5l7 7M24 5l3-3M29 12l2-1M14 6l1-4" /></svg>;
  if (icon === "gutter") return <svg {...common}><path d="M16 3.5c-4.5 6-8 10-8 14.5a8 8 0 0 0 16 0C24 13.5 20.5 9.5 16 3.5Z" /><path d="M12.5 19a3.8 3.8 0 0 0 3.5 3.5" /></svg>;
  return <svg {...common}><path d="M11 23c-2-2-4-5-4-9a9 9 0 0 1 18 0c0 4-2 7-4 9H11ZM12 27h8M14 30h4M16 5v4M7 8l-3-3M25 8l3-3" /></svg>;
}
