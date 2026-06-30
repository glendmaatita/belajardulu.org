import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

// Garis waktu lahirnya kapitalisme modern.
const ERA = [
  { thn: "Abad 16-18", judul: "Merkantilisme", ket: "Negara menimbun emas & atur dagang", warna: "#fbbf24" },
  { thn: "1776", judul: "Adam Smith", ket: "The Wealth of Nations", warna: "#60a5fa" },
  { thn: "1760-1840", judul: "Revolusi Industri", ket: "Pabrik, mesin uap, buruh upahan", warna: "#f472b6" },
  { thn: "Abad 20", judul: "Kapitalisme global", ket: "Korporasi & pasar dunia", warna: "#34d399" },
];

export const SejarahKapitalismeVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Lahirnya Kapitalisme Modern" sub="Dari menimbun emas sampai pasar global" />

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 60, flexWrap: "wrap" }}>
        {ERA.map((e, i) => {
          const { scale, opacity } = usePop(20 + i * 24);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: `2px solid ${e.warna}`, borderRadius: 16, padding: "20px 18px", width: 210, textAlign: "center", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: e.warna }}>{e.thn}</div>
                <div style={{ fontSize: 19, fontWeight: 800, color: palette.text, marginTop: 6 }}>{e.judul}</div>
                <div style={{ fontSize: 13.5, color: palette.muted, marginTop: 4 }}>{e.ket}</div>
              </div>
              {i < ERA.length - 1 && <Arrow delay={34 + i * 24} />}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 44, fontSize: 18, color: palette.muted, maxWidth: 960 }}>
        Revolusi Industri mengubah segalanya: produksi meledak, kota tumbuh, dan hubungan kerja bergeser dari tuan tanah ke pemilik pabrik.
      </div>
    </AbsoluteFill>
  );
};

export const SejarahKapitalismeVideoDuration = 210;
