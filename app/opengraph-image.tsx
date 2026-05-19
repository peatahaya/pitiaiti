import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PITIAITI — Proste. Mocne.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0a0a1a 0%, #1a1b3e 30%, #6b46c1 70%, #d946ef 100%)",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 200,
            fontWeight: 200,
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 0.9,
          }}
        >
          Proste.
        </div>
        <div
          style={{
            fontSize: 200,
            fontWeight: 200,
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 0.9,
          }}
        >
          Mocne.
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.7)",
            marginTop: 40,
            letterSpacing: "0.1em",
          }}
        >
          PITIAITI · Studio software
        </div>
      </div>
    ),
    { ...size }
  );
}
