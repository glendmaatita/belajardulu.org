import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Kegagalan pasar: kondisi di mana pasar bebas gagal mengalokasikan sumber daya secara efisien.
const JENIS = [
  { ikon: "🏭", nama: "Eksternalitas", ket: "Dampak ke pihak ketiga (mis. polusi pabrik)", warna: palette.kredit },
  { ikon: "🏞️", nama: "Barang Publik", ket: "Tak bisa dijual per orang (mis. jalan, pertahanan)", warna: palette.ekuitas },
  { ikon: "🔒", nama: "Informasi Asimetris", ket: "Satu pihak tahu lebih banyak (mis. mobil bekas)", warna: palette.kewajiban },
  { ikon: "👑", nama: "Kekuatan Pasar", ket: "Monopoli menetapkan harga tinggi", warna: palette.accent },
];

export const KegagalanPasar: React.FC = () => {
  const note = useFade(140, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Kegagalan Pasar" sub="Saat pasar bebas tidak menghasilkan alokasi yang efisien" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 38, justifyContent: "center" }}>
        {JENIS.map((j, i) => {
          const { scale, opacity } = usePop(20 + i * 24);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "22px 20px", width: 340, boxShadow: "0 12px 36px rgba(0,0,0,0.3)", borderLeft: `5px solid ${j.warna}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 36 }}>{j.ikon}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: palette.text }}>{j.nama}</div>
              </div>
              <div style={{ fontSize: 15, color: palette.muted, marginTop: 8 }}>{j.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Saat pasar gagal, pemerintah dapat turun tangan lewat pajak/subsidi, regulasi, penyediaan barang publik, atau pengawasan persaingan (di Indonesia: KPPU).
      </div>
    </AbsoluteFill>
  );
};

export const KegagalanPasarDuration = 175;
