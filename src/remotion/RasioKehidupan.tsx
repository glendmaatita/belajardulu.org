import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Rasio dan proporsi dalam kehidupan: resep, peta, campuran.
const CONTOH = [
  { ikon: "🍚", judul: "Resep", isi: "1 cangkir beras : 2 cangkir air. Dobel beras, dobel air." },
  { ikon: "🗺️", judul: "Peta", isi: "Skala 1:100.000. Satu cm di peta = satu km nyata." },
  { ikon: "🎨", judul: "Campuran", isi: "Cat biru : putih = 3:1 agar warna selalu sama." },
];

export const RasioKehidupan: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Rasio di Sekitar Kita" sub="Perbandingan yang menjaga sesuatu tetap pas" />

      <div style={{ display: "flex", gap: 18, marginTop: 44 }}>
        {CONTOH.map((c, i) => {
          const { scale, opacity } = usePop(20 + i * 30);
          return (
            <div key={i} style={{ flex: 1, transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "22px 20px", borderTop: `6px solid ${palette.ekuitas}`, textAlign: "center" }}>
              <div style={{ fontSize: 38 }}>{c.ikon}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: palette.text, marginTop: 8 }}>{c.judul}</div>
              <div style={{ fontSize: 15, color: palette.muted, marginTop: 10, lineHeight: 1.5 }}>{c.isi}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 32, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Setelah banyak contoh, idenya sama: rasio menjaga perbandingan tetap walau ukurannya berubah.
      </div>
    </AbsoluteFill>
  );
};

export const RasioKehidupanDuration = 185;
