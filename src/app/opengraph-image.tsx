import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt =
  "U.S. Carting — Roll-off dumpsters & junk removal in Greenwich, CT";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// next/og uses satori, which requires explicit display on any element with
// multiple children. Every container below sets display explicitly.
export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0B0B0F",
          backgroundImage:
            "radial-gradient(circle at 85% 25%, rgba(242,108,28,0.35) 0%, rgba(242,108,28,0) 55%)",
          color: "white",
          padding: "70px 80px",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 32,
            fontWeight: 800,
            letterSpacing: -0.5,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 16,
              height: 16,
              borderRadius: 999,
              backgroundColor: "#F26C1C",
              marginRight: 16,
            }}
          />
          <div style={{ display: "flex" }}>U.S.</div>
          <div style={{ display: "flex", color: "#F26C1C", marginLeft: 10 }}>
            Carting
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            marginTop: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#F26C1C",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 4,
              marginBottom: 22,
            }}
          >
            Since 2014 · Greenwich, CT
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Roll-off dumpsters & junk removal across CT & NY.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            fontWeight: 600,
            color: "rgba(255,255,255,0.88)",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex" }}>
            Same-day · Family owned · Licensed & insured
          </div>
          <div
            style={{
              display: "flex",
              color: "#F26C1C",
              fontWeight: 800,
            }}
          >
            (917) 664-4794
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
