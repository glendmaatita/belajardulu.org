import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Perbandingan kebijakan fiskal (pemerintah) dan moneter (Bank Indonesia).
const ROWS = [
  { aspek: "Pelaksana", fiskal: "Pemerintah (Kemenkeu)", moneter: "Bank Indonesia" },
  { aspek: "Instrumen", fiskal: "Belanja & pajak (APBN)", moneter: "Suku bunga & uang beredar" },
  { aspek: "Sasaran", fiskal: "Pertumbuhan & pemerataan", moneter: "Inflasi & stabilitas rupiah" },
  { aspek: "Kecepatan", fiskal: "Lambat (perlu DPR)", moneter: "Cepat (rapat dewan gubernur)" },
];

export const FiskalVsMoneter: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Kebijakan Fiskal vs Moneter" sub="Dua tuas pengelola ekonomi yang saling melengkapi" />

      <div style={{ marginTop: 30, borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ display: "flex", background: palette.bgSoft }}>
          <Cell w={170} bold>Aspek</Cell>
          <Cell bold color={palette.kewajiban}>Fiskal (Pemerintah)</Cell>
          <Cell bold color={palette.ekuitas}>Moneter (BI)</Cell>
        </div>
        {ROWS.map((r, i) => {
          const { opacity } = usePop(20 + i * 24);
          return (
            <div key={i} style={{ display: "flex", opacity, background: i % 2 ? "rgba(255,255,255,0.03)" : "transparent" }}>
              <Cell w={170} muted>{r.aspek}</Cell>
              <Cell>{r.fiskal}</Cell>
              <Cell>{r.moneter}</Cell>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 24, fontSize: 18, color: palette.muted }}>
        Keduanya sering dipakai bersama (bauran kebijakan). Contoh: saat pandemi, pemerintah menambah belanja sementara BI menurunkan bunga, bahkan berbagi beban (burden sharing).
      </div>
    </AbsoluteFill>
  );
};

function Cell({ children, w, bold, muted, color }: { children: React.ReactNode; w?: number; bold?: boolean; muted?: boolean; color?: string }) {
  return (
    <div style={{ flex: w ? `0 0 ${w}px` : 1, padding: "14px 16px", fontSize: 16, fontWeight: bold ? 800 : 500, color: color || (muted ? palette.muted : palette.text), fontFamily: font }}>
      {children}
    </div>
  );
}

export const FiskalVsMoneterDuration = 180;
