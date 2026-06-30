import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Analisis ABC: sedikit item (A) menyumbang sebagian besar nilai (prinsip Pareto).
const CLASS = [
  { nama: "A", item: 20, nilai: 80, warna: "#f87171", ket: "Sedikit item, nilai sangat besar" },
  { nama: "B", item: 30, nilai: 15, warna: "#fbbf24", ket: "Sedang" },
  { nama: "C", item: 50, nilai: 5, warna: "#34d399", ket: "Banyak item, nilai kecil" },
];

export const ABCAnalysisVideo: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Analisis ABC" sub="Sekitar 20% item menyumbang 80% nilai persediaan (prinsip Pareto)" />

      <div style={{ display: "flex", gap: 50, marginTop: 50 }}>
        {[
          { judul: "% Jumlah Item", key: "item" as const },
          { judul: "% Nilai Persediaan", key: "nilai" as const },
        ].map((col, ci) => (
          <div key={ci} style={{ flex: 1 }}>
            <div style={{ fontSize: 17, color: palette.text, fontWeight: 700, marginBottom: 14, textAlign: "center" }}>{col.judul}</div>
            <div style={{ display: "flex", flexDirection: "column", height: 280, borderRadius: 14, overflow: "hidden", border: `1px solid ${palette.bgSoft}` }}>
              {CLASS.map((c, i) => {
                const grow = interpolate(frame - (20 + ci * 30 + i * 12), [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
                return (
                  <div key={i} style={{ height: `${c[col.key] * grow}%`, background: c.warna, display: "flex", alignItems: "center", justifyContent: "center", color: "#06121f", fontWeight: 800, fontSize: 18 }}>
                    {grow > 0.5 ? `${c.nama} · ${c[col.key]}%` : ""}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 28, fontSize: 18, color: palette.muted, opacity: useFade(100) }}>
        Fokuskan perhatian dan kontrol ketat pada kelas A. Kelas C cukup dikelola sederhana agar tenaga tidak terbuang.
      </div>
    </AbsoluteFill>
  );
};

export const ABCAnalysisVideoDuration = 210;
