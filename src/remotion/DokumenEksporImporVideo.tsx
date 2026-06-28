import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Alur dokumen perdagangan: dari kesepakatan sampai pengeluaran barang, tiap dokumen punya peran.
const DOK = [
  { nama: "Proforma Invoice", peran: "Penawaran awal", warna: palette.muted },
  { nama: "Purchase Order", peran: "Pesanan pembeli", warna: palette.ekuitas },
  { nama: "Commercial Invoice", peran: "Nilai transaksi", warna: palette.aset },
  { nama: "Packing List", peran: "Rincian kemasan", warna: palette.kewajiban },
  { nama: "Bill of Lading", peran: "Bukti angkut & kepemilikan", warna: palette.accent },
  { nama: "PIB / PEB", peran: "Pemberitahuan pabean", warna: palette.kredit },
];

export const DokumenEksporImporVideo: React.FC = () => {
  const note = useFade(170, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Alur Dokumen Ekspor-Impor" sub="Setiap tahap transaksi menghasilkan dokumen dengan peran khusus" />

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 34 }}>
        {DOK.map((d, i) => {
          const { scale, opacity } = usePop(20 + i * 24);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 18, background: d.warna, color: "#06121f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800 }}>{i + 1}</div>
              <div style={{ flex: 1, background: palette.bgSoft, borderRadius: 12, padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 21, fontWeight: 700, color: palette.text }}>{d.nama}</span>
                <span style={{ fontSize: 16, color: palette.muted }}>{d.peran}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 22, fontSize: 18, color: palette.muted }}>
        Data antar dokumen harus konsisten. Satu angka berbeda saja bisa membuat barang tertahan di pelabuhan.
      </div>
    </AbsoluteFill>
  );
};

export const DokumenEksporImporVideoDuration = 210;
