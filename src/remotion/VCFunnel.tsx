import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// 10 startup: kebanyakan gagal, sedikit lumayan, satu besar (power law).
const outcomes = [
  { label: "Gagal", color: "#475569", x: 0 },
  { label: "Gagal", color: "#475569", x: 0 },
  { label: "Gagal", color: "#475569", x: 0 },
  { label: "Gagal", color: "#475569", x: 0 },
  { label: "Balik modal", color: "#0ea5e9", x: 1 },
  { label: "Balik modal", color: "#0ea5e9", x: 1 },
  { label: "2x", color: "#10b981", x: 2 },
  { label: "3x", color: "#10b981", x: 3 },
  { label: "5x", color: "#22c55e", x: 5 },
  { label: "30x 🦄", color: "#f59e0b", x: 30 },
];

export const VCFunnel: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Power Law di Venture Capital" sub="Sebagian besar startup gagal, segelintir pemenang menutup semuanya" />

      <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 18 }}>
        {outcomes.map((o, i) => {
          const reveal = interpolate(frame - (30 + i * 10), [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ opacity: reveal, transform: `scale(${0.8 + reveal * 0.2})`, background: palette.bgSoft, border: `1px solid rgba(255,255,255,0.08)`, borderBottom: `5px solid ${o.color}`, borderRadius: 12, padding: "18px 10px", textAlign: "center", fontFamily: font }}>
              <div style={{ fontSize: 30 }}>{o.x === 30 ? "🦄" : o.x === 0 ? "💀" : "💰"}</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: o.color }}>{o.label}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 40, textAlign: "center", fontSize: 19, color: palette.muted, lineHeight: 1.6 }}>
        Dari 10 investasi, 4 gagal total, tetapi <b style={{ color: "#f59e0b" }}>satu "unicorn" 30x</b> bisa menutup
        semua kerugian dan memberi imbal hasil besar. Itulah kenapa VC mengejar potensi sangat tinggi, bukan sekadar
        aman.
      </div>
    </AbsoluteFill>
  );
};

export const VCFunnelDuration = 200;
