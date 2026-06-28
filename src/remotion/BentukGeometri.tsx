import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Mengenali bentuk dari sifatnya: sisi, sudut, simetri.
const BENTUK = [
  { ikon: "⬤", nama: "Lingkaran", sifat: "Tanpa sudut, sama dari segala arah", warna: palette.ekuitas },
  { ikon: "▲", nama: "Segitiga", sifat: "3 sisi, 3 sudut, paling kokoh", warna: palette.kewajiban },
  { ikon: "■", nama: "Persegi", sifat: "4 sisi sama, 4 sudut siku-siku", warna: palette.aset },
  { ikon: "⬡", nama: "Segi enam", sifat: "6 sisi, menutup bidang tanpa celah", warna: palette.kredit },
];

export const BentukGeometri: React.FC = () => {
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Mengenali Bentuk dari Sifatnya" sub="Bukan menghafal nama, tetapi membaca ciri" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 38, maxWidth: 940, marginLeft: "auto", marginRight: "auto" }}>
        {BENTUK.map((b, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", gap: 18, background: palette.bgSoft, borderRadius: 14, padding: "18px 22px", borderLeft: `6px solid ${b.warna}` }}>
              <div style={{ fontSize: 40, color: b.warna }}>{b.ikon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 19, fontWeight: 800, color: palette.text }}>{b.nama}</div>
                <div style={{ fontSize: 15, color: palette.muted, marginTop: 3 }}>{b.sifat}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Lebah memakai segi enam karena paling hemat dinding untuk menyimpan madu. Bentuk selalu punya alasan.
      </div>
    </AbsoluteFill>
  );
};

export const BentukGeometriDuration = 185;
