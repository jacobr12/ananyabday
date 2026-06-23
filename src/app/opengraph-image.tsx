import { ImageResponse } from "next/og";

export const alt =
  "happy birthday ananya, you are amazing and great and awesome";
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
            fontSize: 36,
            color: "#5c4a3a",
            fontWeight: 600,
            textAlign: "center",
            maxWidth: 900,
            padding: "0 48px",
          }}
        >
          happy birthday ananya, you are amazing and great and awesome
        </div>
      </div>
    ),
    { ...size }
  );
}
