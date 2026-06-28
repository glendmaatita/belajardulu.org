import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Spektrum struktur pasar: dari persaingan sempurna (banyak penjual) ke monopoli (satu penjual).
const PASAR = [
  { nama: "Persaingan Sempurna", penjual: "Sangat banyak", harga: "Pengikut harga", warna: palette.aset },
  { nama: "Persaingan Monopolistik", penjual: "Banyak, produk beda", harga: "Sedikit kendali", warna: palette.ekuitas },
  { nama: "Oligopoli", penjual: "Sedikit besar", harga: "Saling pengaruh", warna: palette.kewajiban },
  { nama: "Monopoli", penjual: "Satu", harga: "Penentu harga", warna: palette.kredit },
];

export const StrukturPasarVideo: React.FC = () => {
  const note = useFade(140, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Spektrum Struktur Pasar" sub="Dari banyak penjual (persaingan) ke satu penjual (monopoli)" />

      <div style={{ display: "flex", gap: 14, marginTop: 44, alignItems: "stretch", justifyContent: "center" }}>
        {PASAR.map((p, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "20px 16px", width: 220, textAlign: "center", boxShadow: "0 12px 36px rgba(0,0,0,0.3)", borderTop: `5px solid ${p.warna}` }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: palette.text, minHeight: 48 }}>{p.nama}</div>
                <div style={{ fontSize: 14, color: palette.muted, marginTop: 8 }}>Penjual: {p.penjual}</div>
                <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>Harga: {p.harga}</div>
              </div>
              {i < PASAR.length - 1 && <div style={{ fontSize: 24, color: palette.muted, opacity }}>&rarr;</div>}
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 36, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Makin sedikit penjual dan makin sulit pesaing masuk, makin besar kekuatan menentukan harga. Monopoli berisiko merugikan konsumen, sehingga sering diawasi pemerintah.
      </div>
    </AbsoluteFill>
  );
};

export const StrukturPasarVideoDuration = 175;
