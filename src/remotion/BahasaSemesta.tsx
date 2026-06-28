import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Matematika sebagai bahasa untuk membaca semesta.
const CONTOH = [
  { ikon: "🪐", teks: "Orbit planet mengikuti pola elips yang bisa dihitung." },
  { ikon: "📡", teks: "Sinyal dan gelombang dijelaskan dengan fungsi matematika." },
  { ikon: "🌀", teks: "Cuaca dan iklim dimodelkan dengan persamaan." },
  { ikon: "🧬", teks: "Pertumbuhan populasi mengikuti pola matematis." },
];

export const BahasaSemesta: React.FC = () => {
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Matematika, Bahasa Semesta" sub="Pola alam dapat dituliskan dan diramalkan" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 40, maxWidth: 940, marginLeft: "auto", marginRight: "auto" }}>
        {CONTOH.map((c, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", gap: 16, background: palette.bgSoft, borderRadius: 14, padding: "18px 22px", borderLeft: `6px solid ${palette.ekuitas}` }}>
              <div style={{ fontSize: 34 }}>{c.ikon}</div>
              <div style={{ flex: 1, fontSize: 17, color: palette.text, lineHeight: 1.5 }}>{c.teks}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 32, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Galileo menyebut alam ditulis dalam bahasa matematika. Memahaminya berarti bisa membaca semesta.
      </div>
    </AbsoluteFill>
  );
};

export const BahasaSemestaDuration = 185;
