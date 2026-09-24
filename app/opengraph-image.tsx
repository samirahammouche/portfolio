import { ImageResponse } from "next/og";
import { site } from "../data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} portfolio`;

// Auto-generated share image. Replace with a screenshot of your site if you prefer.
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0c111d", color: "#e8ecf6" }}>
        <div style={{ fontSize: 96, fontWeight: 700 }}>{site.name}</div>
        <div style={{ fontSize: 44, color: "#ffb547", marginTop: 16 }}>{site.role}</div>
      </div>
    ),
    size
  );
}
