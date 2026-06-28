import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Limit: nilai yang didekati saat x mendekati suatu titik.
const KIRI = [
  { x: "1,9", y: "3,9" },
  { x: "1,99", y: "3,99" },
  { x: "1,999", y: "3,999" },
];
const KANAN = [
  { x: "2,1", y: "4,1" },
  { x: "2,01", y: "4,01" },
  { x: "2,001", y: "4,001" },
];

export const LimitVideo: React.FC = () => {
  const rumus = useFade(140, 16);
  const note = useFade(165, 18);
  const Col = ({ data, label, delay }: { data: { x: string; y: string }[]; label: string; delay: number }) => (
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 14, color: palette.muted, textAlign: "center", marginBottom: 8 }}>{label}</div>
      {data.map((d, i) => {
        const { scale, opacity } = usePop(delay + i * 16);
        return (
          <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 8, padding: "8px 12px", marginBottom: 6, display: "flex", justifyContent: "space-between", fontFamily: "monospace" }}>
            <span style={{ color: palette.ekuitas }}>x={d.x}</span>
            <span style={{ color: palette.aset }}>y={d.y}</span>
          </div>
        );
      })}
    </div>
  );
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Gagasan Limit" sub="Untuk f(x) = 2x, apa yang didekati y saat x mendekati 2?" />

      <div style={{ display: "flex", gap: 24, marginTop: 30, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
        <Col data={KIRI} label="mendekati dari kiri" delay={20} />
        <Col data={KANAN} label="mendekati dari kanan" delay={20} />
      </div>

      <div style={{ opacity: rumus, marginTop: 22, textAlign: "center", fontSize: 22, fontWeight: 800, color: palette.text }}>
        Dari dua arah, y menuju 4. Maka limitnya 4.
      </div>
      <div style={{ opacity: note, marginTop: 14, textAlign: "center", fontSize: 16, color: palette.muted }}>
        Limit adalah nilai yang didekati, bukan harus dicapai. Inilah fondasi kalkulus.
      </div>
    </AbsoluteFill>
  );
};

export const LimitVideoDuration = 195;
