import { ImageResponse } from "next/og";

export const alt = "Happy birthday, Ananya";
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
          alignItems: "center",
          justifyContent: "center",
          background: "#fdf6e9",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 72, marginBottom: 16 }}>🏠</div>
        <div
          style={{
            fontSize: 48,
            color: "#5c4a3a",
            fontWeight: 600,
          }}
        >
          happy birthday, Ananya
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#8aa87a",
            marginTop: 12,
          }}
        >
          a little house, made for you
        </div>
      </div>
    ),
    { ...size }
  );
}
