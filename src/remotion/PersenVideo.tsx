import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Persen berarti per seratus. Visualkan dengan kotak 10x10.
export const PersenVideo: React.FC = () => {
  const grid = usePop(20);
  const rumus = useFade(140, 16);
  const note = useFade(165, 18);
  const cells = Array.from({ length: 100 }, (_, i) => i);
  const terisi = 25;
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "36px 50px" }}>
      <Title text="Persen Berarti Per Seratus" sub="25% adalah 25 dari 100 kotak" />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 26, transform: `scale(${grid.scale})`, opacity: grid.opacity }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 28px)", gap: 3 }}>
          {cells.map((i) => (
            <div key={i} style={{ width: 28, height: 28, borderRadius: 5, background: i < terisi ? palette.aset : palette.bgSoft }} />
          ))}
        </div>
      </div>

      <div style={{ opacity: rumus, marginTop: 24, textAlign: "center", fontSize: 22, fontWeight: 800, color: palette.text }}>
        25% = 25/100 = 0,25
      </div>
      <div style={{ opacity: note, marginTop: 14, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Diskon 25% dari Rp200.000 berarti potongan Rp50.000. Persen hanyalah cara mudah membandingkan terhadap seratus.
      </div>
    </AbsoluteFill>
  );
};

export const PersenVideoDuration = 195;
