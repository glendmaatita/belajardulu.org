import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Dashboard indikator makro utama yang dipantau bersama untuk menilai kesehatan ekonomi.
const IND = [
  { ikon: "📈", nama: "Pertumbuhan PDB", nilai: "~5%", sehat: "tinggi & stabil", warna: palette.aset },
  { ikon: "🔥", nama: "Inflasi", nilai: "~2,5%", sehat: "rendah & terkendali", warna: palette.kewajiban },
  { ikon: "👷", nama: "Pengangguran", nilai: "~5%", sehat: "rendah", warna: palette.ekuitas },
  { ikon: "🌐", nama: "Neraca Pembayaran", nilai: "seimbang", sehat: "cadangan devisa cukup", warna: palette.accent },
];

export const IndikatorMakro: React.FC = () => {
  const note = useFade(140, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Dashboard Indikator Makro" sub="Empat angka utama untuk menilai kesehatan ekonomi" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 40, justifyContent: "center" }}>
        {IND.map((d, i) => {
          const { scale, opacity } = usePop(20 + i * 24);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 18, padding: "22px 20px", width: 250, textAlign: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.3)", borderTop: `6px solid ${d.warna}` }}>
              <div style={{ fontSize: 40 }}>{d.ikon}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: palette.text, marginTop: 6 }}>{d.nama}</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: d.warna, marginTop: 4 }}>{d.nilai}</div>
              <div style={{ fontSize: 13, color: palette.muted, marginTop: 4 }}>sehat bila {d.sehat}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 34, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Tidak ada satu angka pun yang cukup sendirian. Ekonomi sehat berarti tumbuh tinggi, inflasi rendah, pengangguran rendah, dan neraca pembayaran terjaga, semuanya sekaligus.
      </div>
    </AbsoluteFill>
  );
};

export const IndikatorMakroDuration = 175;
