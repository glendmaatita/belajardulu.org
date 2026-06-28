import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Pasar uang (jangka pendek, <1 tahun) vs pasar modal (jangka panjang, >1 tahun).
const ROWS = [
  { aspek: "Jangka waktu", uang: "Pendek (< 1 tahun)", modal: "Panjang (> 1 tahun)" },
  { aspek: "Instrumen", uang: "SBI, SPN, deposito, repo", modal: "Saham, obligasi" },
  { aspek: "Risiko", uang: "Rendah", modal: "Lebih tinggi" },
  { aspek: "Imbal hasil", uang: "Rendah", modal: "Lebih tinggi" },
  { aspek: "Tujuan", uang: "Likuiditas & kas", modal: "Pendanaan & investasi" },
];

export const PasarUangVsModal: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Pasar Uang vs Pasar Modal" sub="Beda jangka waktu, instrumen, dan tujuan" />

      <div style={{ marginTop: 30, borderRadius: 14, overflow: "hidden", border: `1px solid rgba(255,255,255,0.12)` }}>
        <div style={{ display: "flex", background: palette.bgSoft }}>
          <Cell w={200} bold>Aspek</Cell>
          <Cell bold color={palette.aset}>Pasar Uang</Cell>
          <Cell bold color={palette.ekuitas}>Pasar Modal</Cell>
        </div>
        {ROWS.map((r, i) => {
          const { opacity } = usePop(20 + i * 22);
          return (
            <div key={i} style={{ display: "flex", opacity, background: i % 2 ? "rgba(255,255,255,0.03)" : "transparent" }}>
              <Cell w={200} muted>{r.aspek}</Cell>
              <Cell>{r.uang}</Cell>
              <Cell>{r.modal}</Cell>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 22, fontSize: 18, color: palette.muted }}>
        Pasar uang untuk mengelola likuiditas jangka pendek; pasar modal untuk mendanai dan berinvestasi jangka panjang.
      </div>
    </AbsoluteFill>
  );
};

function Cell({ children, w, bold, muted, color }: { children: React.ReactNode; w?: number; bold?: boolean; muted?: boolean; color?: string }) {
  return (
    <div style={{ flex: w ? `0 0 ${w}px` : 1, padding: "14px 18px", fontSize: 17, fontWeight: bold ? 800 : 500, color: color || (muted ? palette.muted : palette.text), fontFamily: font }}>
      {children}
    </div>
  );
}

export const PasarUangVsModalDuration = 185;
