import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// PDB (pendekatan pengeluaran) = Konsumsi + Investasi + Belanja Pemerintah + (Ekspor - Impor).
const KOMP = [
  { simbol: "C", nama: "Konsumsi", ket: "Belanja rumah tangga", nilai: 56, warna: palette.aset },
  { simbol: "I", nama: "Investasi", ket: "Belanja modal & usaha", nilai: 30, warna: palette.ekuitas },
  { simbol: "G", nama: "Belanja Pemerintah", ket: "Pengeluaran negara", nilai: 9, warna: palette.kewajiban },
  { simbol: "NX", nama: "Ekspor neto", ket: "Ekspor dikurangi impor", nilai: 5, warna: palette.kredit },
];

export const KomponenPDB: React.FC = () => {
  const note = useFade(140, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Komponen PDB" sub="PDB = C + I + G + (Ekspor - Impor)" />

      <div style={{ display: "flex", gap: 14, marginTop: 40, alignItems: "stretch", justifyContent: "center" }}>
        {KOMP.map((k, i) => {
          const { scale, opacity } = usePop(20 + i * 24);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "20px 18px", width: 215, textAlign: "center", boxShadow: "0 12px 36px rgba(0,0,0,0.3)", borderTop: `5px solid ${k.warna}` }}>
                <div style={{ fontSize: 34, fontWeight: 900, color: k.warna }}>{k.simbol}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: palette.text, marginTop: 4 }}>{k.nama}</div>
                <div style={{ fontSize: 13, color: palette.muted, marginTop: 4 }}>{k.ket}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: palette.text, marginTop: 8 }}>~{k.nilai}%</div>
              </div>
              {i < KOMP.length - 1 && <div style={{ fontSize: 26, color: palette.muted, opacity }}>+</div>}
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 34, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Di banyak negara termasuk Indonesia, konsumsi rumah tangga adalah penyumbang PDB terbesar. PDB mengukur total nilai barang & jasa akhir yang dihasilkan dalam setahun.
      </div>
    </AbsoluteFill>
  );
};

export const KomponenPDBDuration = 175;
