import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "BrightView LLC logo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link-preview card: the BrightView logo alone, centered. Read at build time from /public (no external fetch).
export default async function OpengraphImage() {
  const logo = `data:image/png;base64,${(await readFile(join(process.cwd(), "public/brand/brightview-logo-560.png"))).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #0a251c 0%, #12392d 100%)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={560} height={560} alt="" style={{ objectFit: "contain" }} />
      </div>
    ),
    size,
  );
}
