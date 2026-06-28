import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Rantai reaksi pemikiran: setiap filsuf menanggapi pendahulunya.
const RANTAI = [
  { tokoh: "Socrates", ide: "Bertanya terus untuk menguji keyakinan (metode dialektis).", warna: palette.aset },
  { tokoh: "Plato", ide: "Murid Socrates: kebenaran ada di dunia ide yang sempurna.", warna: palette.ekuitas },
  { tokoh: "Aristoteles", ide: "Murid Plato yang mengkritiknya: kebenaran ada pada dunia nyata, lewat pengamatan.", warna: palette.kewajiban },
];

export const EvolusiPemikiran: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Pemikiran sebagai Mata Rantai" sub="Setiap filsuf menanggapi dan mengkritik pendahulunya" />

      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 36, maxWidth: 860, marginLeft: "auto", marginRight: "auto" }}>
        {RANTAI.map((r, i) => {
          const { scale, opacity } = usePop(20 + i * 36);
          return (
            <div key={i}>
              {i > 0 && <div style={{ textAlign: "center", fontSize: 26, color: palette.accent, opacity }}>↓</div>}
              <div
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  background: palette.bgSoft,
                  borderRadius: 14,
                  padding: "18px 24px",
                  borderLeft: `6px solid ${r.warna}`,
                }}
              >
                <div style={{ width: 150, fontSize: 22, fontWeight: 800, color: r.warna }}>{r.tokoh}</div>
                <div style={{ flex: 1, fontSize: 18, color: palette.text, lineHeight: 1.5 }}>{r.ide}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 28, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Gagasan baru jarang lahir dari nol. Ia tumbuh dengan menyempurnakan atau melawan gagasan sebelumnya.
      </div>
    </AbsoluteFill>
  );
};

export const EvolusiPemikiranDuration = 190;
