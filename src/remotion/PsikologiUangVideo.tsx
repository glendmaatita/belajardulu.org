import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Bias psikologis yang sering menjebak keputusan keuangan dan investasi.
const bias = [
  { label: "FOMO", desc: "Takut ketinggalan, beli di puncak", c: "#fb7185" },
  { label: "Herding", desc: "Ikut kerumunan tanpa berpikir", c: "#fbbf24" },
  { label: "Loss aversion", desc: "Terlalu takut rugi, salah langkah", c: "#60a5fa" },
  { label: "Panic selling", desc: "Jual rugi saat pasar turun", c: "#a78bfa" },
];

export const PsikologiUangVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(155, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Psikologi Uang & Jebakan Bias" sub="Musuh terbesar keuangan sering kali diri sendiri" />
      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, maxWidth: 740, marginLeft: "auto", marginRight: "auto" }}>
        {bias.map((b, i) => {
          const grow = interpolate(frame - (30 + i * 20), [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ opacity: grow, transform: `translateY(${(1 - grow) * 16}px)`, background: palette.bgSoft, border: `2px solid ${b.c}`, borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: b.c }}>{b.label}</div>
              <div style={{ fontSize: 13, color: palette.muted, marginTop: 4 }}>{b.desc}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 34, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Rencana yang tertulis dan investasi rutin otomatis membantu kita mengalahkan emosi sesaat.
      </div>
    </AbsoluteFill>
  );
};

export const PsikologiUangVideoDuration = 200;
