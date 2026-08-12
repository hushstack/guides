import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 36, fontWeight: 600, color: "#4f46e5" }}>
          📖 {SITE_NAME}
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 58, fontWeight: 700, lineHeight: 1.15, maxWidth: 980 }}>
          Video guides, without the runaround
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#475569", maxWidth: 940, lineHeight: 1.4 }}>
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size },
  );
}
