import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  const year = 2026;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "radial-gradient(900px circle at 0% 0%, rgba(252,209,22,0.35) 0%, rgba(255,255,255,0) 55%), radial-gradient(800px circle at 100% 0%, rgba(0,56,147,0.25) 0%, rgba(255,255,255,0) 55%), radial-gradient(900px circle at 70% 100%, rgba(206,17,38,0.18) 0%, rgba(255,255,255,0) 55%), linear-gradient(180deg, #0b1220 0%, #101b34 100%)",
          color: "#ffffff",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 14,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
              }}
            >
              CO
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 0.2, color: "rgba(255,255,255,0.86)" }}>
              Festivos Colombia
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              padding: "10px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 16,
              fontWeight: 700,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            <span>{year}</span>
          </div>
        </div>

        <div style={{ maxWidth: 900 }}>
          <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05, letterSpacing: -1.2 }}>
            Calendario de festivos
          </div>
          <div style={{ marginTop: 10, fontSize: 64, fontWeight: 900, lineHeight: 1.05, letterSpacing: -1.2 }}>
            Colombia {year}
          </div>
          <div style={{ marginTop: 18, fontSize: 26, lineHeight: 1.35, color: "rgba(255,255,255,0.86)" }}>
            Días feriados, puentes y fechas oficiales.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.35 }}>
            festivos Colombia 2026 · días feriados Colombia 2026 · calendario festivos Colombia
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 44, height: 10, borderRadius: 999, background: "#FCD116" }} />
            <div style={{ width: 44, height: 10, borderRadius: 999, background: "#003893" }} />
            <div style={{ width: 44, height: 10, borderRadius: 999, background: "#CE1126" }} />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
