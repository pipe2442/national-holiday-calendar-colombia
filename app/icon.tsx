import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "linear-gradient(180deg, #0b1220 0%, #101b34 100%)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "white",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          fontWeight: 900,
          letterSpacing: -0.5,
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <div
            style={{
              position: "absolute",
              left: -8,
              top: -10,
              width: 64,
              height: 64,
              borderRadius: 64,
              background: "rgba(252, 209, 22, 0.22)",
              filter: "blur(6px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: -14,
              top: -14,
              width: 64,
              height: 64,
              borderRadius: 64,
              background: "rgba(0, 56, 147, 0.22)",
              filter: "blur(6px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: -10,
              bottom: -14,
              width: 64,
              height: 64,
              borderRadius: 64,
              background: "rgba(206, 17, 38, 0.18)",
              filter: "blur(6px)",
            }}
          />
        </div>

        <div style={{ fontSize: 28, zIndex: 1 }}>CO</div>
      </div>
    ),
    {
      ...size,
    },
  );
}
