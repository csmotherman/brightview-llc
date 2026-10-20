import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "BrightView LLC: family-owned exterior cleaning and holiday lighting in Michigan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link-preview card: the BrightView logo is the focal point. Read at build time from /public (no external fetch).
export default async function OpengraphImage() {
  const logo = `data:image/png;base64,${(await readFile(join(process.cwd(), "public/brand/brightview-logo-560.png"))).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "0 80px", background: "linear-gradient(135deg, #0a251c 0%, #12392d 100%)", color: "#faf3e4" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={470} height={470} alt="" style={{ objectFit: "contain" }} />
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 56, width: 530 }}>
          <div style={{ display: "flex", width: 90, height: 6, background: "#f8e3b4", marginBottom: 30 }} />
          <div style={{ display: "flex", fontSize: 70, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>BrightView LLC</div>
          <div style={{ display: "flex", fontSize: 34, marginTop: 20, color: "#f8e3b4", lineHeight: 1.25 }}>Exterior Cleaning &amp; Holiday Lighting</div>
          <div style={{ display: "flex", fontSize: 30, marginTop: 26, color: "#dfe7da" }}>Family-owned in Michigan</div>
        </div>
      </div>
    ),
    size,
  );
}
