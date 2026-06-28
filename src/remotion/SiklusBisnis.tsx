import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Siklus bisnis: ekspansi (boom), puncak, kontraksi (resesi), palung, lalu pulih, di sekitar tren jangka panjang.
export const SiklusBisnis: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const padL = 60;
  const padB = 46;
  const x0 = padL;
  const x1 = W - 40;
  const mid = (30 + (H - padB)) / 2;
  const xFor = (t: number) => x0 + t * (x1 - x0);
  const trend = (t: number) => mid - t * 40; // tren naik perlahan
  const wave = (t: number) => trend(t) - Math.sin(t * 6.28 * 1.5) * 55;

  const draw = interpolate(frame, [20, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const wavePts: string[] = [];
  const trendPts: string[] = [];
  for (let t = 0; t <= draw + 0.0001; t += 0.01) {
    wavePts.push(`${xFor(t)},${wave(t)}`);
    trendPts.push(`${xFor(t)},${trend(t)}`);
  }
  const note = useFade(160, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Siklus Bisnis" sub="Ekonomi naik-turun (boom dan resesi) di sekitar tren pertumbuhan jangka panjang" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 20 }}>
        <line x1={padL} y1={H - padB} x2={x1} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <text x={(W + padL) / 2} y={H - 10} textAnchor="middle" fontSize={15} fill={palette.muted}>Waktu</text>
        <text x={18} y={26} fontSize={15} fill={palette.muted}>Output (PDB)</text>
        <polyline points={trendPts.join(" ")} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={2} strokeDasharray="6" />
        <text x={x1} y={trend(1) - 8} textAnchor="end" fontSize={14} fill={palette.muted}>tren jangka panjang</text>
        <polyline points={wavePts.join(" ")} fill="none" stroke={palette.aset} strokeWidth={4} strokeLinecap="round" />
        {draw > 0.35 && <text x={xFor(0.33)} y={wave(0.33) - 14} textAnchor="middle" fontSize={14} fill={palette.kewajiban}>puncak</text>}
        {draw > 0.65 && <text x={xFor(0.66)} y={wave(0.66) + 24} textAnchor="middle" fontSize={14} fill={palette.kredit}>palung (resesi)</text>}
      </svg>

      <div style={{ opacity: note, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Resesi sering didefinisikan sebagai PDB menyusut dua kuartal berturut-turut. Kebijakan moneter dan fiskal dipakai untuk meredam gejolak siklus ini.
      </div>
    </AbsoluteFill>
  );
};

export const SiklusBisnisDuration = 195;
