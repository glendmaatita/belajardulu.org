import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

const steps = [
  { icon: "👥", title: "Investor", desc: "Menyetor dana (reksa dana, dll)" },
  { icon: "🧑‍💼", title: "Manajer Investasi", desc: "Mengelola sesuai mandat & risiko" },
  { icon: "🧺", title: "Portofolio", desc: "Saham, obligasi, pasar uang" },
  { icon: "📈", title: "Imbal Hasil", desc: "Dikembalikan ke investor (dikurangi fee)" },
];

const Card: React.FC<{ i: number }> = ({ i }) => {
  const s = steps[i];
  const { scale, opacity } = usePop(25 + i * 26);
  return (
    <div style={{ transform: `scale(${scale})`, opacity, width: 230, fontFamily: font, textAlign: "center" }}>
      <div style={{ background: palette.bgSoft, border: "1px solid rgba(255,255,255,0.08)", borderTop: `4px solid ${palette.accent}`, borderRadius: 16, padding: "18px 14px", minHeight: 165 }}>
        <div style={{ fontSize: 40 }}>{s.icon}</div>
        <div style={{ marginTop: 8, fontSize: 18, fontWeight: 800, color: palette.text }}>{s.title}</div>
        <div style={{ marginTop: 6, fontSize: 13, color: palette.muted, lineHeight: 1.4 }}>{s.desc}</div>
      </div>
    </div>
  );
};

export const AssetManagementFlow: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "50px 40px", justifyContent: "flex-start" }}>
      <Title text="Bagaimana Asset Management Bekerja" sub="Dana investor dikelola profesional secara terdiversifikasi" />
      <div style={{ marginTop: 56, display: "flex", gap: 8, alignItems: "center", justifyContent: "center" }}>
        <Card i={0} />
        <Arrow delay={70} />
        <Card i={1} />
        <Arrow delay={98} />
        <Card i={2} />
        <Arrow delay={124} />
        <Card i={3} />
      </div>
    </AbsoluteFill>
  );
};

export const AssetManagementFlowDuration = 200;
