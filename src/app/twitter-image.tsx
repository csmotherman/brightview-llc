import { ImageResponse } from "next/og";

export const alt = "BrightView LLC: family-owned exterior cleaning and holiday lighting in Michigan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Text-only brand card (no photography), used when a page is shared on social platforms.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 90px", background: "linear-gradient(135deg, #0a251c 0%, #12392d 100%)", color: "#faf3e4" }}>
        <div style={{ display: "flex", width: 90, height: 6, background: "#f8e3b4", marginBottom: 36 }} />
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -2 }}>BrightView LLC</div>
        <div style={{ display: "flex", fontSize: 44, marginTop: 20, color: "#f8e3b4" }}>Exterior Cleaning &amp; Holiday Lighting</div>
        <div style={{ display: "flex", fontSize: 34, marginTop: 36, color: "#dfe7da" }}>Family-owned in Michigan</div>
      </div>
    ),
    size,
  );
}
