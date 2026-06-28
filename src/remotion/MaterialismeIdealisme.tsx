import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Dua pandangan besar tentang hakikat kenyataan.
const KUTUB = [
  {
    nama: "Materialisme",
    inti: "Yang nyata adalah materi",
    poin: ["Pikiran muncul dari otak (materi)", "Dunia fisik adalah dasar segalanya", "Tokoh: Demokritos, Marx"],
    warna: palette.kewajiban,
  },
  {
    nama: "Idealisme",
    inti: "Yang nyata adalah ide atau pikiran",
    poin: ["Realitas bergantung pada kesadaran", "Dunia fisik bersandar pada ide", "Tokoh: Plato, Berkeley, Hegel"],
    warna: palette.ekuitas,
  },
];

export const MaterialismeIdealisme: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Materialisme vs Idealisme" sub="Dua jawaban atas pertanyaan: apa yang sungguh nyata?" />

      <div style={{ display: "flex", gap: 20, marginTop: 44, maxWidth: 940, marginLeft: "auto", marginRight: "auto" }}>
        {KUTUB.map((k, i) => {
          const { scale, opacity } = usePop(20 + i * 32);
          return (
            <div
              key={i}
              style={{
                flex: 1,
                transform: `scale(${scale})`,
                opacity,
                background: palette.bgSoft,
                borderRadius: 16,
                padding: "24px 24px",
                borderTop: `6px solid ${k.warna}`,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 800, color: k.warna }}>{k.nama}</div>
              <div style={{ fontSize: 18, color: palette.text, marginTop: 8, fontWeight: 700 }}>{k.inti}</div>
              <div style={{ marginTop: 14 }}>
                {k.poin.map((p, j) => (
                  <div key={j} style={{ fontSize: 16, color: palette.muted, marginTop: 7 }}>• {p}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Perdebatan ini berlangsung dari filsafat Yunani kuno sampai pemikiran modern, dan membentuk banyak aliran turunan.
      </div>
    </AbsoluteFill>
  );
};

export const MaterialismeIdealismeDuration = 185;
