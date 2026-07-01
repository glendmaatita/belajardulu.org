import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Eskalasi sanksi: dari bunga keterlambatan, denda, kenaikan, sampai pidana.
const steps = [
  { label: "Bunga", desc: "Telat setor/bayar", c: "#34d399", h: 90 },
  { label: "Denda", desc: "Telat/tidak lapor", c: "#60a5fa", h: 150 },
  { label: "Kenaikan", desc: "Hasil pemeriksaan", c: "#fbbf24", h: 210 },
  { label: "Pidana", desc: "Sengaja & merugikan negara", c: "#ef4444", h: 280 },
];

export const SanksiPajakVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(170, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Tangga Sanksi Pajak" sub="Dari bunga ringan sampai pidana, makin berat ke kanan" />
      <div style={{ marginTop: 30, display: "flex", gap: 34, alignItems: "flex-end", justifyContent: "center", height: 330 }}>
        {steps.map((s, i) => {
          const delay = 35 + i * 24;
          const grow = interpolate(frame - delay, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
              <div style={{ width: 150, height: s.h * grow, background: s.c, borderRadius: "10px 10px 0 0", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 10 }}>
                <span style={{ color: "#06121f", fontWeight: 800, fontSize: 17, opacity: grow }}>{s.label}</span>
              </div>
              <div style={{ width: 160, marginTop: 10, fontSize: 13, color: palette.muted, textAlign: "center", opacity: grow }}>{s.desc}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 22, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Kepatuhan menjaga perusahaan di anak tangga terendah; kelalaian dan kesengajaan menaikkannya.
      </div>
    </AbsoluteFill>
  );
};

export const SanksiPajakVideoDuration = 205;
