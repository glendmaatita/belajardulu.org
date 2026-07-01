import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Rugi tahun 2024 (Rp2 M) menutup laba 4 tahun berikutnya sampai habis.
const cols = [
  { th: "2024", val: -2000, c: "#ef4444", label: "Rugi" },
  { th: "2025", val: 500, c: "#34d399", label: "Laba" },
  { th: "2026", val: 600, c: "#34d399", label: "Laba" },
  { th: "2027", val: 500, c: "#34d399", label: "Laba" },
  { th: "2028", val: 400, c: "#34d399", label: "Laba" },
];

export const KompensasiKerugianVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(170, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Kompensasi Kerugian 5 Tahun" sub="Rugi fiskal menutup laba tahun-tahun berikutnya" />
      <div style={{ marginTop: 40, display: "flex", gap: 26, alignItems: "center", justifyContent: "center", height: 300 }}>
        {cols.map((c, i) => {
          const delay = 35 + i * 22;
          const grow = interpolate(frame - delay, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const h = Math.abs(c.val) / 10;
          const up = c.val > 0;
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ height: 140, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                {up && <div style={{ width: 70, height: h * grow, background: c.c, borderRadius: "8px 8px 0 0" }} />}
              </div>
              <div style={{ width: 90, textAlign: "center", fontSize: 14, color: palette.text, fontWeight: 700 }}>{c.th}</div>
              <div style={{ height: 70, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                {!up && <div style={{ width: 70, height: h * grow, background: c.c, borderRadius: "0 0 8px 8px" }} />}
              </div>
              <div style={{ fontSize: 12, color: c.c, opacity: grow }}>{c.label} {Math.abs(c.val) >= 1000 ? `${(Math.abs(c.val) / 1000).toFixed(1)} M` : `${Math.abs(c.val)} jt`}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 24, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Rugi Rp2 M habis terkompensasi pada 2028. Sisa rugi yang belum terpakai setelah 5 tahun hangus.
      </div>
    </AbsoluteFill>
  );
};

export const KompensasiKerugianVideoDuration = 200;
