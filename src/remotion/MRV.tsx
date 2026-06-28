import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

const stages = [
  { icon: "📐", letter: "M", title: "Measurement", desc: "Ukur emisi/serapan dengan data & sensor (IoT, satelit)" },
  { icon: "📝", letter: "R", title: "Reporting", desc: "Laporkan secara terstruktur & transparan" },
  { icon: "✅", letter: "V", title: "Verification", desc: "Diaudit pihak ketiga independen sebelum kredit terbit" },
];

const Stage: React.FC<{ i: number }> = ({ i }) => {
  const s = stages[i];
  const { scale, opacity } = usePop(30 + i * 32);
  return (
    <div style={{ transform: `scale(${scale})`, opacity, width: 250, fontFamily: font }}>
      <div style={{ background: palette.bgSoft, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "22px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 44 }}>{s.icon}</div>
        <div style={{ marginTop: 6, fontSize: 30, fontWeight: 900, color: palette.accent }}>{s.letter}</div>
        <div style={{ fontSize: 19, fontWeight: 800, color: palette.text }}>{s.title}</div>
        <div style={{ marginTop: 8, fontSize: 14, color: palette.muted, lineHeight: 1.5 }}>{s.desc}</div>
      </div>
    </div>
  );
};

const Arrow: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame - delay, [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <div style={{ fontSize: 40, color: palette.accent, opacity: o }}>→</div>;
};

export const MRV: React.FC = () => {
  const frame = useCurrentFrame();
  const concl = interpolate(frame, [150, 175], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "50px 50px", justifyContent: "center" }}>
      <Title text="MRV: Tulang Punggung Kepercayaan" sub="Measurement, Reporting, Verification, tanpa ini kredit tak kredibel" />
      <div style={{ marginTop: 44, display: "flex", gap: 18, alignItems: "center", justifyContent: "center" }}>
        <Stage i={0} />
        <Arrow delay={70} />
        <Stage i={1} />
        <Arrow delay={102} />
        <Stage i={2} />
      </div>
      <div style={{ opacity: concl, marginTop: 36, textAlign: "center", fontSize: 18, color: palette.muted }}>
        MRV yang lemah = risiko <b style={{ color: palette.kredit }}>over-crediting</b> &amp; greenwashing.
      </div>
    </AbsoluteFill>
  );
};

export const MRVDuration = 210;
