import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Empat kanon/asas pemungutan pajak Adam Smith (The Wealth of Nations, 1776).
const canons = [
  { label: "Equality", desc: "Adil sesuai kemampuan", c: "#34d399" },
  { label: "Certainty", desc: "Pasti, tidak sewenang-wenang", c: "#60a5fa" },
  { label: "Convenience", desc: "Mudah & tepat waktu", c: "#fbbf24" },
  { label: "Efficiency", desc: "Biaya pungut rendah", c: "#f472b6" },
];

const Card: React.FC<{ i: number }> = ({ i }) => {
  const c = canons[i];
  const frame = useCurrentFrame();
  const delay = 30 + i * 22;
  const grow = interpolate(frame - delay, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ flex: 1, opacity: grow, transform: `translateY(${(1 - grow) * 22}px)`, background: palette.bgSoft, border: `2px solid ${c.c}`, borderRadius: 16, padding: "22px 14px", textAlign: "center" }}>
      <div style={{ fontSize: 22, fontWeight: 800, color: c.c }}>{c.label}</div>
      <div style={{ fontSize: 14, color: palette.muted, marginTop: 8 }}>{c.desc}</div>
    </div>
  );
};

export const AsasPajakVideo: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Empat Asas Pemungutan Pajak" sub="Kanon klasik Adam Smith yang masih dipakai sampai kini" />
      <div style={{ marginTop: 44, display: "flex", gap: 16 }}>
        {canons.map((_, i) => (
          <Card key={i} i={i} />
        ))}
      </div>
      <div style={{ marginTop: 40, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Sistem pajak yang baik harus adil, pasti, nyaman dipenuhi, dan murah dikelola. Tax planning bergerak di dalam pagar ini.
      </div>
    </AbsoluteFill>
  );
};

export const AsasPajakVideoDuration = 200;
