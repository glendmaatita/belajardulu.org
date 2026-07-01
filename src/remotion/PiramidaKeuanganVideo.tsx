import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Piramida perencanaan keuangan: fondasi arus kas & dana darurat, lalu proteksi,
// baru investasi, dan puncaknya warisan. Bangun dari bawah ke atas.
const tingkat = [
  { label: "Warisan & tujuan besar", w: 200, c: "#a78bfa" },
  { label: "Investasi & pertumbuhan", w: 320, c: "#60a5fa" },
  { label: "Proteksi (asuransi, BPJS)", w: 440, c: "#fbbf24" },
  { label: "Arus kas sehat & dana darurat", w: 560, c: "#34d399" },
];

export const PiramidaKeuanganVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(175, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Piramida Perencanaan Keuangan" sub="Bangun dari fondasi yang kokoh, bukan dari puncak" />
      <div style={{ marginTop: 34, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        {tingkat.map((t, i) => {
          const grow = interpolate(frame - (30 + (tingkat.length - 1 - i) * 22), [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ width: t.w * grow, height: 62, background: t.c, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", opacity: grow }}>
              <span style={{ color: "#06121f", fontWeight: 800, fontSize: 15 }}>{t.label}</span>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 30, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Banyak orang tergoda langsung berinvestasi. Padahal tanpa dana darurat dan proteksi, satu musibah bisa
        meruntuhkan semuanya.
      </div>
    </AbsoluteFill>
  );
};

export const PiramidaKeuanganVideoDuration = 210;
