import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Pola Fibonacci muncul di mana-mana di alam.
const FIB = [1, 1, 2, 3, 5, 8, 13, 21];
const CONTOH = ["Kelopak bunga", "Cangkang siput", "Susunan biji bunga matahari", "Cabang pohon"];

export const PolaAlam: React.FC = () => {
  const note = useFade(170, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Pola Tersembunyi di Alam" sub="Barisan Fibonacci: 1, 1, 2, 3, 5, 8, ..." />

      <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 40 }}>
        {FIB.map((n, i) => {
          const { scale, opacity } = usePop(15 + i * 16);
          const size = 38 + n * 2.2;
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{ width: size, height: size, borderRadius: 12, background: palette.aset, color: "#06121f", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 18, transform: `scale(${scale})`, opacity }}>{n}</div>
              {i > 1 && <div style={{ fontSize: 11, color: palette.muted, opacity }}>{FIB[i - 1]}+{FIB[i - 2]}</div>}
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
        {CONTOH.map((c, i) => {
          const { scale, opacity } = usePop(120 + i * 14);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 10, padding: "12px 20px", fontSize: 16, color: palette.text, borderLeft: `5px solid ${palette.ekuitas}` }}>{c}</div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 36, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Tiap suku adalah jumlah dua suku sebelumnya. Pola yang sama berulang di seluruh alam.
      </div>
    </AbsoluteFill>
  );
};

export const PolaAlamDuration = 210;
