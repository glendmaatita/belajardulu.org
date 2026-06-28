import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Garis waktu perkembangan filsafat dari era ke era.
const ERA = [
  { nama: "Filsafat Kuno", masa: "sekitar 600 SM - 500 M", tokoh: "Socrates, Plato, Aristoteles", warna: palette.aset },
  { nama: "Abad Pertengahan", masa: "sekitar 500 - 1500 M", tokoh: "Agustinus, Thomas Aquinas", warna: palette.kewajiban },
  { nama: "Filsafat Modern", masa: "sekitar 1500 - 1800 M", tokoh: "Descartes, Hume, Kant", warna: palette.ekuitas },
  { nama: "Filsafat Kontemporer", masa: "sekitar 1800 - kini", tokoh: "Hegel, Nietzsche, Sartre", warna: palette.kredit },
];

export const GarisWaktuFilsafat: React.FC = () => {
  const note = useFade(170, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Empat Era Besar Filsafat" sub="Bagaimana pemikiran berkembang dari masa ke masa" />

      <div style={{ display: "flex", gap: 12, marginTop: 40, alignItems: "stretch" }}>
        {ERA.map((e, i) => {
          const { scale, opacity } = usePop(20 + i * 32);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div
                style={{
                  flex: 1,
                  transform: `scale(${scale})`,
                  opacity,
                  background: palette.bgSoft,
                  borderRadius: 14,
                  padding: "20px 16px",
                  borderTop: `6px solid ${e.warna}`,
                  minHeight: 210,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: e.warna }}>{e.masa}</div>
                <div style={{ fontSize: 21, fontWeight: 800, color: palette.text, marginTop: 8 }}>{e.nama}</div>
                <div style={{ fontSize: 15, color: palette.muted, marginTop: 12, lineHeight: 1.5 }}>{e.tokoh}</div>
              </div>
              {i < ERA.length - 1 && <div style={{ fontSize: 30, color: palette.accent, opacity, padding: "0 2px" }}>→</div>}
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 32, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Tiap era menjawab dan mengkritik era sebelumnya, sehingga filsafat tumbuh sebagai percakapan panjang lintas zaman.
      </div>
    </AbsoluteFill>
  );
};

export const GarisWaktuFilsafatDuration = 210;
