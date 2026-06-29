import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Analisis dimensi: mengecek kebenaran rumus lewat satuannya.
const BARIS = [
  { label: "Kecepatan", rumus: "jarak / waktu", dim: "[L][T]⁻¹", warna: palette.aset },
  { label: "Percepatan", rumus: "kecepatan / waktu", dim: "[L][T]⁻²", warna: palette.ekuitas },
  { label: "Gaya", rumus: "massa × percepatan", dim: "[M][L][T]⁻²", warna: palette.kewajiban },
];

export const AnalisisDimensi: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Analisis Dimensi" sub="Mengecek rumus lewat satuannya" />

      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 38, maxWidth: 860, marginLeft: "auto", marginRight: "auto" }}>
        {BARIS.map((b, i) => {
          const { scale, opacity } = usePop(20 + i * 30);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", gap: 16, background: palette.bgSoft, borderRadius: 14, padding: "16px 22px", borderLeft: `6px solid ${b.warna}` }}>
              <div style={{ width: 130, fontSize: 18, fontWeight: 800, color: b.warna }}>{b.label}</div>
              <div style={{ flex: 1, fontSize: 16, color: palette.muted }}>{b.rumus}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: palette.text, fontFamily: "monospace" }}>{b.dim}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 28, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        [M] massa, [L] panjang, [T] waktu. Jika dimensi kiri dan kanan rumus sama, rumus itu mungkin benar.
      </div>
    </AbsoluteFill>
  );
};

export const AnalisisDimensiDuration = 185;
