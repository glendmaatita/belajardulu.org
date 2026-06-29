import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Hukum Ohm: V = I R, analogi air.
const SEGITIGA = [
  { sym: "V", nama: "Tegangan (volt)", arti: "Dorongan yang mengalirkan muatan", warna: palette.kewajiban },
  { sym: "I", nama: "Arus (ampere)", arti: "Banyaknya muatan mengalir tiap detik", warna: palette.aset },
  { sym: "R", nama: "Hambatan (ohm)", arti: "Seberapa sulit arus mengalir", warna: palette.ekuitas },
];

export const HukumOhmVideo: React.FC = () => {
  const rumus = useFade(130, 16);
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Hukum Ohm" sub="Hubungan tegangan, arus, dan hambatan" />

      <div style={{ display: "flex", gap: 16, marginTop: 40, maxWidth: 940, marginLeft: "auto", marginRight: "auto" }}>
        {SEGITIGA.map((s, i) => {
          const { scale, opacity } = usePop(20 + i * 28);
          return (
            <div key={i} style={{ flex: 1, transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 14, padding: "20px 18px", borderTop: `6px solid ${s.warna}`, textAlign: "center" }}>
              <div style={{ fontSize: 34, fontWeight: 800, color: s.warna }}>{s.sym}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: palette.text, marginTop: 6 }}>{s.nama}</div>
              <div style={{ fontSize: 14, color: palette.muted, marginTop: 8, lineHeight: 1.4 }}>{s.arti}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: rumus, marginTop: 30, textAlign: "center", fontSize: 24, fontWeight: 800, color: palette.text }}>
        V = I × R
      </div>
      <div style={{ opacity: note, marginTop: 14, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Bayangkan air: tegangan seperti tekanan, arus seperti debit air, hambatan seperti pipa yang sempit.
      </div>
    </AbsoluteFill>
  );
};

export const HukumOhmVideoDuration = 190;
