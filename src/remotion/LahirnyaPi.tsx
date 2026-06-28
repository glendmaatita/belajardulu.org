import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Pi lahir dari pola: keliling dibagi diameter selalu sekitar 3,14.
const LINGKARAN = [
  { benda: "Gelas", keliling: 25.1, diameter: 8 },
  { benda: "Piring", keliling: 75.4, diameter: 24 },
  { benda: "Ban", keliling: 219.8, diameter: 70 },
];

export const LahirnyaPi: React.FC = () => {
  const rumus = useFade(140, 16);
  const note = useFade(165, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Lahirnya Bilangan Pi" sub="Ukur banyak lingkaran, polanya selalu sama" />

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 34, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
        {LINGKARAN.map((l, i) => {
          const { scale, opacity } = usePop(20 + i * 30);
          const rasio = (l.keliling / l.diameter).toFixed(2);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", gap: 16, background: palette.bgSoft, borderRadius: 12, padding: "14px 20px" }}>
              <div style={{ width: 90, fontSize: 17, fontWeight: 800, color: palette.ekuitas }}>{l.benda}</div>
              <div style={{ flex: 1, fontSize: 15, color: palette.muted }}>keliling {l.keliling} cm ÷ diameter {l.diameter} cm</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.aset }}>= {rasio}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: rumus, marginTop: 26, textAlign: "center", fontSize: 23, fontWeight: 800, color: palette.text }}>
        Selalu sekitar 3,14. Angka ini kita beri nama π (pi).
      </div>
      <div style={{ opacity: note, marginTop: 14, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Maka Keliling = π × diameter. Pi bukan hafalan, melainkan pola yang ditemukan dari mengukur.
      </div>
    </AbsoluteFill>
  );
};

export const LahirnyaPiDuration = 195;
