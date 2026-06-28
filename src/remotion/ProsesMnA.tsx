import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

const steps = [
  { icon: "🎯", title: "Strategi", desc: "Kenapa akuisisi? Cari sinergi" },
  { icon: "🔍", title: "Cari & Valuasi Target", desc: "Identifikasi & nilai perusahaan" },
  { icon: "📑", title: "Due Diligence", desc: "Periksa keuangan, hukum, operasi" },
  { icon: "🤝", title: "Negosiasi & Deal", desc: "Harga, struktur, perjanjian" },
  { icon: "🔗", title: "Integrasi", desc: "Gabungkan tim, sistem, budaya" },
];

const Card: React.FC<{ i: number }> = ({ i }) => {
  const s = steps[i];
  const { scale, opacity } = usePop(25 + i * 24);
  return (
    <div style={{ transform: `scale(${scale})`, opacity, width: 210, fontFamily: font, textAlign: "center" }}>
      <div style={{ background: palette.bgSoft, border: "1px solid rgba(255,255,255,0.08)", borderTop: `4px solid ${palette.accent}`, borderRadius: 16, padding: "18px 14px", minHeight: 175 }}>
        <div style={{ fontSize: 40 }}>{s.icon}</div>
        <div style={{ marginTop: 8, fontSize: 18, fontWeight: 800, color: palette.text }}>{s.title}</div>
        <div style={{ marginTop: 6, fontSize: 13, color: palette.muted, lineHeight: 1.4 }}>{s.desc}</div>
        <div style={{ marginTop: 8, fontSize: 12, fontWeight: 700, color: palette.accent }}>{i + 1}</div>
      </div>
    </div>
  );
};

export const ProsesMnA: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "50px 40px", justifyContent: "flex-start" }}>
      <Title text="Tahap-Tahap M&A (Merger & Akuisisi)" sub="Dari strategi sampai integrasi pasca-merger" />
      <div style={{ marginTop: 50, display: "flex", gap: 12, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        {steps.map((_, i) => (
          <Card key={i} i={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

export const ProsesMnADuration = 200;
