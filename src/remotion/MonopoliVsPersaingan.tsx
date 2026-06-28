import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Perbandingan: persaingan sempurna (harga rendah, output tinggi) vs monopoli (harga tinggi, output rendah).
export const MonopoliVsPersaingan: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(140, 18);

  const Bar = ({ x, label, hargaH, outputH, warna, delay }: { x: number; label: string; hargaH: number; outputH: number; warna: string; delay: number }) => {
    const o = frame > delay ? 1 : 0;
    return (
      <g opacity={o}>
        <text x={x + 90} y={24} textAnchor="middle" fontSize={18} fontWeight={800} fill={warna}>{label}</text>
        <rect x={x} y={250 - hargaH} width={70} height={hargaH} rx={6} fill={palette.kredit} />
        <text x={x + 35} y={268} textAnchor="middle" fontSize={13} fill={palette.muted}>Harga</text>
        <rect x={x + 110} y={250 - outputH} width={70} height={outputH} rx={6} fill={palette.aset} />
        <text x={x + 145} y={268} textAnchor="middle" fontSize={13} fill={palette.muted}>Output</text>
      </g>
    );
  };

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Monopoli vs Persaingan Sempurna" sub="Monopoli menetapkan harga lebih tinggi dengan output lebih rendah" />

      <svg viewBox="0 0 1000 290" style={{ width: "100%", marginTop: 30 }}>
        <line x1={40} y1={250} x2={960} y2={250} stroke="rgba(255,255,255,0.25)" strokeWidth={2} />
        <Bar x={150} label="Persaingan Sempurna" hargaH={90} outputH={180} warna={palette.aset} delay={25} />
        <Bar x={620} label="Monopoli" hargaH={180} outputH={90} warna={palette.kredit} delay={75} />
      </svg>

      <div style={{ opacity: note, marginTop: 18, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Di persaingan sempurna, harga ditekan mendekati biaya dan output melimpah (efisien). Monopoli, tanpa pesaing, menahan output dan menaikkan harga untuk memaksimalkan laba, merugikan konsumen.
      </div>
    </AbsoluteFill>
  );
};

export const MonopoliVsPersainganDuration = 175;
