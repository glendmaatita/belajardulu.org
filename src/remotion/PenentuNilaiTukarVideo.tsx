import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Faktor penentu nilai tukar: paritas daya beli, paritas suku bunga, neraca
// pembayaran, dan sentimen/ekspektasi pasar.
const factors = [
  { label: "Paritas daya beli", desc: "Harga barang setara antarnegara", c: "#34d399" },
  { label: "Paritas suku bunga", desc: "Selisih bunga menarik modal", c: "#60a5fa" },
  { label: "Neraca pembayaran", desc: "Surplus/defisit transaksi luar negeri", c: "#fbbf24" },
  { label: "Sentimen pasar", desc: "Ekspektasi & risiko", c: "#f472b6" },
];

export const PenentuNilaiTukarVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(175, 18);
  const coreGrow = interpolate(frame - 20, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Apa yang Menggerakkan Nilai Tukar" sub="Kurs rupiah dibentuk banyak kekuatan sekaligus" />
      <div style={{ marginTop: 26, display: "flex", justifyContent: "center" }}>
        <div style={{ opacity: coreGrow, transform: `scale(${coreGrow})`, background: palette.accent, color: "#fff", borderRadius: 14, padding: "12px 26px", fontSize: 22, fontWeight: 800 }}>
          NILAI TUKAR RUPIAH
        </div>
      </div>
      <div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
        {factors.map((f, i) => {
          const grow = interpolate(frame - (40 + i * 18), [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ opacity: grow, transform: `translateY(${(1 - grow) * 16}px)`, background: palette.bgSoft, border: `2px solid ${f.c}`, borderRadius: 12, padding: "14px 16px" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: f.c }}>{f.label}</div>
              <div style={{ fontSize: 12, color: palette.muted, marginTop: 4 }}>{f.desc}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 28, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Dalam jangka pendek sentimen dominan; dalam jangka panjang paritas daya beli cenderung menarik kurs.
      </div>
    </AbsoluteFill>
  );
};

export const PenentuNilaiTukarVideoDuration = 210;
