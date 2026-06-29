import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Tujuh besaran pokok SI dan satuannya.
const BESARAN = [
  { nama: "Panjang", satuan: "meter (m)" },
  { nama: "Massa", satuan: "kilogram (kg)" },
  { nama: "Waktu", satuan: "sekon (s)" },
  { nama: "Arus listrik", satuan: "ampere (A)" },
  { nama: "Suhu", satuan: "kelvin (K)" },
  { nama: "Jumlah zat", satuan: "mol" },
  { nama: "Intensitas cahaya", satuan: "candela (cd)" },
];

export const BesaranSatuan: React.FC = () => {
  const note = useFade(170, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "36px 50px" }}>
      <Title text="Tujuh Besaran Pokok SI" sub="Fondasi semua pengukuran fisika" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 28, maxWidth: 940, marginLeft: "auto", marginRight: "auto" }}>
        {BESARAN.map((b, i) => {
          const { scale, opacity } = usePop(18 + i * 16);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", justifyContent: "space-between", background: palette.bgSoft, borderRadius: 12, padding: "12px 18px", borderLeft: `5px solid ${palette.ekuitas}` }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: palette.text }}>{b.nama}</span>
              <span style={{ fontSize: 15, color: palette.aset, fontWeight: 700 }}>{b.satuan}</span>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 24, fontSize: 17, color: palette.muted, textAlign: "center" }}>
        Besaran lain (kecepatan, gaya, energi) adalah besaran turunan, gabungan dari ketujuh besaran pokok ini.
      </div>
    </AbsoluteFill>
  );
};

export const BesaranSatuanDuration = 195;
