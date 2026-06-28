import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

const Bar: React.FC<{ x: number; label: string; value: number; max: number; color: string; delay: number; cap: string }> = ({
  x,
  label,
  value,
  max,
  color,
  delay,
  cap,
}) => {
  const frame = useCurrentFrame();
  const grow = interpolate(frame - delay, [0, 24], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const h = (value / max) * 360 * grow;
  return (
    <div style={{ position: "absolute", left: x, bottom: 120, width: 220, display: "flex", flexDirection: "column", alignItems: "center", fontFamily: font }}>
      <div style={{ fontSize: 30, fontWeight: 800, color, opacity: grow, marginBottom: 8 }}>{cap}</div>
      <div style={{ width: 150, height: Math.max(2, h), background: color, borderRadius: "10px 10px 0 0" }} />
      <div style={{ marginTop: 12, fontSize: 18, color: palette.text, textAlign: "center" }}>{label}</div>
    </div>
  );
};

export const FinancingGap: React.FC = () => {
  const frame = useCurrentFrame();
  const gapO = interpolate(frame, [110, 140], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font }}>
      <div style={{ padding: "44px 56px 0" }}>
        <Title text="Kesenjangan Pendanaan Iklim" sub="Kebutuhan jauh lebih besar dari dana yang tersedia (ilustrasi)" />
      </div>

      <Bar x={180} label="Kebutuhan dana iklim" value={100} max={100} color={palette.kewajiban} delay={25} cap="~100%" />
      <Bar x={620} label="Dana yang tersedia saat ini" value={40} max={100} color={palette.aset} delay={55} cap="~40%" />

      {/* gap bracket */}
      <div style={{ position: "absolute", right: 150, top: 230, opacity: gapO, fontFamily: font, textAlign: "center" }}>
        <div style={{ background: "rgba(244,114,182,0.15)", border: "1px solid rgba(244,114,182,0.4)", color: palette.kredit, padding: "10px 16px", borderRadius: 12, fontSize: 18, fontWeight: 700 }}>
          GAP ~60% ⬅ perlu ditutup
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 50, left: 56, right: 56, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Menutup gap inilah misi climate finance: green bond, blended finance, dan dana iklim global.
      </div>
    </AbsoluteFill>
  );
};

export const FinancingGapDuration = 200;
