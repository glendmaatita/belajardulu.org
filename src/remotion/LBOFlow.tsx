import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

const steps = [
  { icon: "💰", title: "Kumpulkan Dana", desc: "Ekuitas PE + banyak utang" },
  { icon: "🏭", title: "Beli Perusahaan", desc: "Akuisisi dengan leverage" },
  { icon: "🔧", title: "Perbaiki", desc: "Tingkatkan EBITDA, lunasi utang" },
  { icon: "🚪", title: "Exit", desc: "Jual / IPO, raih imbal hasil" },
];

const Card: React.FC<{ i: number }> = ({ i }) => {
  const s = steps[i];
  const { scale, opacity } = usePop(25 + i * 26);
  return (
    <div style={{ transform: `scale(${scale})`, opacity, width: 230, fontFamily: font, textAlign: "center" }}>
      <div style={{ background: palette.bgSoft, border: "1px solid rgba(255,255,255,0.08)", borderTop: `4px solid ${palette.kewajiban}`, borderRadius: 16, padding: "18px 14px", minHeight: 165 }}>
        <div style={{ fontSize: 40 }}>{s.icon}</div>
        <div style={{ marginTop: 8, fontSize: 18, fontWeight: 800, color: palette.text }}>{s.title}</div>
        <div style={{ marginTop: 6, fontSize: 13, color: palette.muted, lineHeight: 1.4 }}>{s.desc}</div>
      </div>
    </div>
  );
};

export const LBOFlow: React.FC = () => {
  const frame = useCurrentFrame();
  const arrow = (d: number) => interpolate(frame - d, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "50px 40px", justifyContent: "flex-start" }}>
      <Title text="Cara Kerja LBO (Leveraged Buyout)" sub="Beli dengan utang, perbaiki, jual: leverage mengungkit imbal hasil" />
      <div style={{ marginTop: 56, display: "flex", gap: 8, alignItems: "center", justifyContent: "center" }}>
        <Card i={0} />
        <span style={{ fontSize: 34, color: palette.accent, opacity: arrow(70) }}>→</span>
        <Card i={1} />
        <span style={{ fontSize: 34, color: palette.accent, opacity: arrow(96) }}>→</span>
        <Card i={2} />
        <span style={{ fontSize: 34, color: palette.accent, opacity: arrow(122) }}>→</span>
        <Card i={3} />
      </div>
      <div style={{ opacity: note, marginTop: 36, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Sedikit ekuitas + banyak utang = imbal hasil ekuitas bisa besar, tetapi risiko gagal bayar juga naik.
      </div>
    </AbsoluteFill>
  );
};

export const LBOFlowDuration = 200;
