import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Peluang: dari melempar dadu menuju ide rasio kemungkinan.
const SISI = [1, 2, 3, 4, 5, 6];

export const PeluangVideo: React.FC = () => {
  const rumus = useFade(140, 16);
  const note = useFade(165, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Menjinakkan Ketidakpastian" sub="Melempar dadu untuk menemukan peluang" />

      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 44 }}>
        {SISI.map((n, i) => {
          const { scale, opacity } = usePop(18 + i * 16);
          const favorit = n % 2 === 0;
          return (
            <div key={i} style={{ width: 76, height: 76, borderRadius: 14, background: favorit ? palette.aset : palette.bgSoft, color: favorit ? "#06121f" : palette.muted, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 800, transform: `scale(${scale})`, opacity }}>{n}</div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: 26, fontSize: 18, color: palette.text }}>
        Berapa peluang muncul angka genap? Ada 3 sisi genap dari 6 sisi.
      </div>
      <div style={{ opacity: rumus, marginTop: 16, textAlign: "center", fontSize: 23, fontWeight: 800, color: palette.aset }}>
        Peluang = kejadian yang diharapkan ÷ semua kemungkinan = 3 ÷ 6 = 1/2
      </div>
      <div style={{ opacity: note, marginTop: 16, fontSize: 17, color: palette.muted, textAlign: "center" }}>
        Rumus peluang lahir dari menghitung kemungkinan, bukan diberi begitu saja.
      </div>
    </AbsoluteFill>
  );
};

export const PeluangVideoDuration = 195;
