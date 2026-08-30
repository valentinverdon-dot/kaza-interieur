import { ImageResponse } from "next/og";

export const alt =
  "Kaza Intérieur — cuisine, parquet et aménagement intérieur au Pays basque";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f1ec",
          color: "#1a2e4a",
          padding: "72px 82px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 54,
            fontWeight: 800,
            letterSpacing: "0.04em",
          }}
        >
          KAZA INTÉRIEUR
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              maxWidth: 950,
              fontSize: 58,
              lineHeight: 1.08,
              fontWeight: 750,
            }}
          >
            Cuisine, parquet et aménagement intérieur
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 30,
              color: "#e25a3b",
              fontWeight: 650,
            }}
          >
            Anglet · Biarritz · Bayonne
          </div>
        </div>
      </div>
    ),
    size
  );
}
