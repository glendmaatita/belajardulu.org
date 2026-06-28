import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

const steps = [
  { icon: "💼", title: "Investor", desc: "Membeli green bond, dapat kupon" },
  { icon: "🏢", title: "Penerbit", desc: "Menghimpun dana (use of proceeds terikat)" },
  { icon: "☀️", title: "Proyek Hijau", desc: "PLTS, transportasi bersih, air" },
  { icon: "📊", title: "Laporan Dampak", desc: "Berapa emisi dikurangi, transparan" },
];

const Card: React.FC<{ i: number }> = ({ i }) => {
  const s = steps[i];
  const { scale, opacity } = usePop(25 + i * 26);
  return (
    <div style={{ transform: `scale(${scale})`, opacity, width: 230, fontFamily: font, textAlign: "center" }}>
      <div style={{ background: palette.bgSoft, border: "1px solid rgba(255,255,255,0.08)", borderTop: `4px solid ${palette.aset}`, borderRadius: 16, padding: "20px 14px", minHeight: 175 }}>
        <div style={{ fontSize: 42 }}>{s.icon}</div>
        <div style={{ marginTop: 8, fontSize: 19, fontWeight: 800, color: palette.text }}>{s.title}</div>
        <div style={{ marginTop: 6, fontSize: 14, color: palette.muted, lineHeight: 1.4 }}>{s.desc}</div>
      </div>
    </div>
  );
};

export const GreenBondFlow: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "50px 40px", justifyContent: "flex-start" }}>
      <Title text="Cara Kerja Green Bond" sub="Dana terikat khusus untuk proyek hijau, dengan laporan dampak" />
      <div style={{ marginTop: 50, display: "flex", gap: 8, alignItems: "center", justifyContent: "center" }}>
        <Card i={0} />
        <Arrow delay={70} />
        <Card i={1} />
        <Arrow delay={100} />
        <Card i={2} />
        <Arrow delay={130} />
        <Card i={3} />
      </div>
    </AbsoluteFill>
  );
};

export const GreenBondFlowDuration = 210;
