import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Rasio keuangan: meringkas laporan keuangan menjadi angka yang mudah dibandingkan antar perusahaan.
const RASIO = [
  { nama: "ROE", arti: "Laba bersih / ekuitas", guna: "Seberapa efisien modal menghasilkan laba", warna: palette.aset },
  { nama: "Margin Laba", arti: "Laba bersih / penjualan", guna: "Berapa sen laba dari tiap rupiah penjualan", warna: palette.ekuitas },
  { nama: "DER", arti: "Utang / ekuitas", guna: "Seberapa besar perusahaan bergantung pada utang", warna: palette.kewajiban },
  { nama: "P/E", arti: "Harga / laba per saham", guna: "Berapa mahal harga dibanding labanya", warna: palette.kredit },
];

export const RasioKeuanganVideo: React.FC = () => {
  const note = useFade(140, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Rasio Keuangan: Kunci Membaca Perusahaan" sub="Mengubah laporan keuangan jadi angka yang mudah dibandingkan" />

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 32 }}>
        {RASIO.map((r, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", gap: 18, background: palette.bgSoft, borderRadius: 14, padding: "16px 22px" }}>
              <div style={{ width: 130, fontSize: 24, fontWeight: 900, color: r.warna }}>{r.nama}</div>
              <div style={{ width: 230, fontSize: 16, color: palette.text }}>{r.arti}</div>
              <div style={{ flex: 1, fontSize: 16, color: palette.muted }}>{r.guna}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted }}>
        Satu rasio tidak cukup. Investor menggabungkan beberapa rasio dan membandingkannya dengan perusahaan sejenis serta tren historisnya.
      </div>
    </AbsoluteFill>
  );
};

export const RasioKeuanganVideoDuration = 180;
