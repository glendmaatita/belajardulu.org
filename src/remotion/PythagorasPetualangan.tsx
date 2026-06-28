import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Menemukan Pythagoras lewat luas bujur sangkar di sisi segitiga 3-4-5.
export const PythagorasPetualangan: React.FC = () => {
  const tri = usePop(15);
  const sqA = usePop(45);
  const sqB = usePop(70);
  const sqC = usePop(100);
  const rumus = useFade(140, 16);
  const note = useFade(165, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "36px 50px" }}>
      <Title text="Petualangan Segitiga 3-4-5" sub="Susun bujur sangkar di tiap sisi, lalu hitung petaknya" />

      <div style={{ display: "flex", justifyContent: "center", gap: 30, marginTop: 30 }}>
        <div style={{ transform: `scale(${sqA.scale})`, opacity: sqA.opacity, textAlign: "center" }}>
          <div style={{ width: 90, height: 90, background: palette.kewajiban, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#06121f", fontWeight: 800, fontSize: 22 }}>9</div>
          <div style={{ marginTop: 6, fontSize: 14, color: palette.muted }}>sisi 3 → 3×3</div>
        </div>
        <div style={{ transform: `scale(${sqB.scale})`, opacity: sqB.opacity, textAlign: "center" }}>
          <div style={{ width: 120, height: 120, background: palette.ekuitas, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#06121f", fontWeight: 800, fontSize: 26 }}>16</div>
          <div style={{ marginTop: 6, fontSize: 14, color: palette.muted }}>sisi 4 → 4×4</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", opacity: tri.opacity, fontSize: 30, color: palette.accent }}>→</div>
        <div style={{ transform: `scale(${sqC.scale})`, opacity: sqC.opacity, textAlign: "center" }}>
          <div style={{ width: 150, height: 150, background: palette.aset, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#06121f", fontWeight: 800, fontSize: 30 }}>25</div>
          <div style={{ marginTop: 6, fontSize: 14, color: palette.muted }}>sisi miring → 5×5</div>
        </div>
      </div>

      <div style={{ opacity: rumus, marginTop: 26, textAlign: "center", fontSize: 24, fontWeight: 800, color: palette.text }}>
        9 + 16 = 25, jadi 3² + 4² = 5²
      </div>
      <div style={{ opacity: note, marginTop: 14, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Setelah mencoba banyak segitiga siku-siku, polanya selalu sama: a² + b² = c². Itulah Teorema Pythagoras.
      </div>
    </AbsoluteFill>
  );
};

export const PythagorasPetualanganDuration = 200;
