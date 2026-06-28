import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Kurva Phillips: trade-off jangka pendek antara inflasi dan pengangguran (berlawanan arah).
export const KurvaPhillips: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const padL = 70;
  const padB = 50;
  const x0 = padL;
  const x1 = W - 40;
  const yTop = 30;
  const yBot = H - padB;
  // pengangguran 2..10 (x), inflasi 1..9 (y) menurun
  const xFor = (u: number) => x0 + ((u - 2) / 8) * (x1 - x0);
  const yFor = (inf: number) => yTop + (1 - (inf - 1) / 8) * (yBot - yTop);
  const curve = (u: number) => 1 + 18 / u; // turun

  const draw = interpolate(frame, [20, 120], [2.2, 10], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pts: string[] = [];
  for (let u = 2.2; u <= draw + 0.0001; u += 0.1) pts.push(`${xFor(u)},${yFor(Math.min(9, curve(u)))}`);
  const note = useFade(140, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Kurva Phillips" sub="Jangka pendek: inflasi dan pengangguran cenderung berlawanan" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 20 }}>
        <line x1={padL} y1={yBot} x2={x1} y2={yBot} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={yTop} x2={padL} y2={yBot} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Tingkat pengangguran (%)</text>
        <text x={20} y={26} fontSize={15} fill={palette.muted}>Inflasi (%)</text>
        <polyline points={pts.join(" ")} fill="none" stroke={palette.kewajiban} strokeWidth={4} strokeLinecap="round" />
        <text x={x1} y={yFor(Math.min(9, curve(9.5)))} textAnchor="end" fontSize={14} fill={palette.kewajiban}>kurva Phillips</text>
      </svg>

      <div style={{ opacity: note, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Saat ekonomi memanas, pengangguran rendah tetapi inflasi naik; saat lesu, sebaliknya. Hubungan ini terutama berlaku jangka pendek, dan bisa hilang saat ekspektasi inflasi berubah.
      </div>
    </AbsoluteFill>
  );
};

export const KurvaPhillipsDuration = 175;
