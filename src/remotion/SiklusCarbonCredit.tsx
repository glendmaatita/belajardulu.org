import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

const steps = [
  { icon: "🌱", title: "Kembangkan Proyek", desc: "Mis. tanam/lindungi hutan, PLTS" },
  { icon: "📏", title: "MRV & Validasi", desc: "Ukur, laporkan, verifikasi pihak ketiga" },
  { icon: "📜", title: "Penerbitan Kredit", desc: "1 kredit = 1 tCO2e (registry)" },
  { icon: "💱", title: "Perdagangan", desc: "Dijual di bursa / pasar sukarela" },
  { icon: "♻️", title: "Retirement", desc: "Kredit 'dipensiunkan' agar tak dipakai 2x" },
];

const Card: React.FC<{ i: number }> = ({ i }) => {
  const s = steps[i];
  const { scale, opacity } = usePop(25 + i * 26);
  return (
    <div style={{ transform: `scale(${scale})`, opacity, width: 200, fontFamily: font, textAlign: "center" }}>
      <div
        style={{
          background: palette.bgSoft,
          border: "1px solid rgba(255,255,255,0.08)",
          borderTop: `4px solid ${palette.accent}`,
          borderRadius: 16,
          padding: "18px 14px",
          minHeight: 170,
        }}
      >
        <div style={{ fontSize: 40 }}>{s.icon}</div>
        <div style={{ marginTop: 8, fontSize: 17, fontWeight: 800, color: palette.text }}>{s.title}</div>
        <div style={{ marginTop: 6, fontSize: 13, color: palette.muted, lineHeight: 1.4 }}>{s.desc}</div>
        <div style={{ marginTop: 8, fontSize: 12, fontWeight: 700, color: palette.accent }}>{i + 1}</div>
      </div>
    </div>
  );
};

export const SiklusCarbonCredit: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 40px", justifyContent: "flex-start" }}>
      <Title text="Daur Hidup Carbon Credit" sub="Dari proyek nyata sampai kredit dipensiunkan" />
      <div style={{ marginTop: 40, display: "flex", gap: 12, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        {steps.map((_, i) => (
          <Card key={i} i={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

export const SiklusCarbonCreditDuration = 220;
