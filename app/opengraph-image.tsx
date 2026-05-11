import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${SITE.name} — Liverpool Roofing Specialists`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B1628",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Orange accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(240,90,40,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            width: "72px",
            height: "72px",
            background: "#F05A28",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <svg width="44" height="44" viewBox="0 0 40 40" fill="white">
            <path d="M20 4L2 18h4v18h10V24h8v12h10V18h4L20 4z" />
          </svg>
        </div>

        {/* Company name */}
        <div
          style={{
            color: "white",
            fontSize: "48px",
            fontWeight: "900",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          Sefton Roofing
        </div>

        <div
          style={{
            color: "#F05A28",
            fontSize: "22px",
            fontWeight: "600",
            marginBottom: "32px",
          }}
        >
          & Property Maintenance
        </div>

        <div
          style={{
            color: "#94a3b8",
            fontSize: "24px",
            textAlign: "center",
            maxWidth: "700px",
            marginBottom: "48px",
            lineHeight: 1.4,
          }}
        >
          Liverpool&apos;s Trusted Roofing Specialists — Waterloo, Merseyside
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {[
            ["4.9★", "Google Rating"],
            ["1,850+", "Projects Done"],
            ["24/7", "Emergency"],
            ["14+", "Years Local"],
          ].map(([val, label]) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span style={{ color: "#F05A28", fontSize: "28px", fontWeight: "900" }}>
                {val}
              </span>
              <span style={{ color: "#64748b", fontSize: "14px" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Phone */}
        <div
          style={{
            background: "#F05A28",
            color: "white",
            fontSize: "20px",
            fontWeight: "700",
            padding: "14px 36px",
            borderRadius: "12px",
          }}
        >
          {SITE.phoneDisplay}
        </div>
      </div>
    ),
    size
  );
}
