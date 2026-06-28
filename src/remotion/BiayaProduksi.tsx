import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Kurva biaya: biaya rata-rata (ATC) berbentuk U; biaya marginal (MC) memotong ATC di titik minimumnya.
export const BiayaProduksi: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const padL = 70;
  const padB = 50;
  const x0 = padL;
  const x1 = W - 40;
  const yTop = 30;
  const yBot = H - padB;

  // q 0..1
  const xFor = (q: number) => x0 + q * (x1 - x0);
  const atc = (q: number) => 0.9 - 1.4 * q + 1.2 * q * q; // U-shape min sekitar q=0.58
  const mc = (q: number) => 0.5 - 0.6 * q + 1.5 * q * q;
  const yFor = (v: number) => yTop + (1 - v) * (yBot - yTop);

  const draw = interpolate(frame, [20, 120], [0.08, 0.95], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const atcPts: string[] = [];
  const mcPts: string[] = [];
  for (let q = 0.08; q <= draw + 0.0001; q += 0.02) {
    atcPts.push(`${xFor(q)},${yFor(atc(q))}`);
    mcPts.push(`${xFor(q)},${yFor(mc(q))}`);
  }
  const note = useFade(150, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Kurva Biaya Produksi" sub="Biaya rata-rata berbentuk U; biaya marginal memotongnya di titik terendah" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 20 }}>
        <line x1={padL} y1={yBot} x2={x1} y2={yBot} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={yTop} x2={padL} y2={yBot} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Jumlah produksi (Q)</text>
        <text x={20} y={26} fontSize={15} fill={palette.muted}>Biaya per unit</text>
        <polyline points={atcPts.join(" ")} fill="none" stroke={palette.ekuitas} strokeWidth={4} strokeLinecap="round" />
        <text x={x1} y={yFor(atc(0.95)) - 8} textAnchor="end" fontSize={15} fill={palette.ekuitas}>ATC (biaya rata-rata)</text>
        <polyline points={mcPts.join(" ")} fill="none" stroke={palette.kewajiban} strokeWidth={4} strokeLinecap="round" />
        <text x={x1} y={yFor(mc(0.95)) - 8} textAnchor="end" fontSize={15} fill={palette.kewajiban}>MC (biaya marginal)</text>
      </svg>

      <div style={{ opacity: note, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Saat MC di bawah ATC, biaya rata-rata turun; saat MC di atas ATC, naik. Produksi paling efisien berada di titik terendah ATC.
      </div>
    </AbsoluteFill>
  );
};

export const BiayaProduksiDuration = 190;
