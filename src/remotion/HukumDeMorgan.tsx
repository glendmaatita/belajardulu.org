import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Hukum De Morgan: negasi konjungsi dan disjungsi.
const HUKUM = [
  { kiri: "¬(p ∧ q)", kanan: "¬p ∨ ¬q", ket: "Negasi 'DAN' menjadi 'ATAU' dari negasinya" },
  { kiri: "¬(p ∨ q)", kanan: "¬p ∧ ¬q", ket: "Negasi 'ATAU' menjadi 'DAN' dari negasinya" },
];

export const HukumDeMorgan: React.FC = () => {
  const note = useFade(140, 18);
  const contoh = useFade(95, 16);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Hukum De Morgan" sub="Membalik negasi pada konjungsi dan disjungsi" />

      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 44, maxWidth: 860, marginLeft: "auto", marginRight: "auto" }}>
        {HUKUM.map((h, i) => {
          const { scale, opacity } = usePop(20 + i * 36);
          return (
            <div
              key={i}
              style={{
                transform: `scale(${scale})`,
                opacity,
                background: palette.bgSoft,
                borderRadius: 16,
                padding: "24px 28px",
                borderLeft: `6px solid ${palette.ekuitas}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 26, fontFamily: "monospace" }}>
                <span style={{ fontSize: 34, fontWeight: 800, color: palette.kewajiban }}>{h.kiri}</span>
                <span style={{ fontSize: 30, color: palette.accent }}>≡</span>
                <span style={{ fontSize: 34, fontWeight: 800, color: palette.aset }}>{h.kanan}</span>
              </div>
              <div style={{ fontSize: 16, color: palette.muted, marginTop: 12, textAlign: "center" }}>{h.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: contoh, marginTop: 26, fontSize: 18, color: palette.text, textAlign: "center" }}>
        "Tidak benar bahwa ia kaya dan terkenal" = "Ia tidak kaya atau tidak terkenal."
      </div>
      <div style={{ opacity: note, marginTop: 14, fontSize: 17, color: palette.muted, textAlign: "center" }}>
        Negasi menyebar ke dalam, dan operatornya berbalik: DAN tukar ATAU.
      </div>
    </AbsoluteFill>
  );
};

export const HukumDeMorganDuration = 175;
