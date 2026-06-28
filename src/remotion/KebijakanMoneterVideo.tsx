import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Instrumen kebijakan moneter Bank Indonesia dan arah ekspansif vs kontraktif.
const ALAT = [
  { ikon: "🎯", nama: "Suku Bunga Acuan", ket: "BI Rate: naik = meredam, turun = mendorong" },
  { ikon: "🔄", nama: "Operasi Pasar Terbuka", ket: "Jual/beli SBN untuk atur uang beredar" },
  { ikon: "🏦", nama: "Giro Wajib Minimum", ket: "Cadangan wajib bank di BI" },
];

export const KebijakanMoneterVideo: React.FC = () => {
  const note = useFade(140, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Instrumen Kebijakan Moneter" sub="Cara Bank Indonesia mengelola jumlah uang dan suku bunga" />

      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 34, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
        {ALAT.map((a, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", gap: 18, background: palette.bgSoft, borderRadius: 14, padding: "18px 24px", borderLeft: `6px solid ${palette.ekuitas}` }}>
              <div style={{ fontSize: 40 }}>{a.ikon}</div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: palette.text }}>{a.nama}</div>
                <div style={{ fontSize: 15, color: palette.muted, marginTop: 2 }}>{a.ket}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Saat inflasi tinggi, BI mengetatkan (menaikkan bunga, menyerap uang). Saat ekonomi lesu, BI melonggarkan (menurunkan bunga, menambah likuiditas). Tujuannya menjaga inflasi dan stabilitas rupiah.
      </div>
    </AbsoluteFill>
  );
};

export const KebijakanMoneterVideoDuration = 175;
