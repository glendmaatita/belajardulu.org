import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Hedging FX: importir/eksportir mengunci kurs dengan forward agar tidak terombang-ambing kurs.
// Tanpa hedge: nilai rupiah ikut bergerak liar. Dengan hedge: terkunci di garis datar.
export const HedgingFXVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const padL = 70;
  const padB = 46;

  const lockRate = 16000; // forward terkunci
  // kurs spot bergerak naik-turun
  const spotAt = (t: number) => 16000 + 900 * Math.sin(t * 6.28 * 1.3) + 600 * t;
  const xFor = (t: number) => padL + t * (W - padL - 40);
  const yFor = (r: number) => 30 + (1 - (r - 14500) / 3500) * (H - padB - 30);

  const prog = interpolate(frame, [20, 160], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const spotPts: string[] = [];
  for (let t = 0; t <= prog + 0.0001; t += 0.02) spotPts.push(`${xFor(t)},${yFor(spotAt(t))}`);

  const note = useFade(168, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Hedging Risiko Nilai Tukar" sub="Forward mengunci kurs sehingga biaya jadi pasti" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 24 }}>
        <line x1={padL} y1={H - padB} x2={W - 40} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />

        {/* garis hedge terkunci */}
        <line x1={padL} y1={yFor(lockRate)} x2={xFor(prog)} y2={yFor(lockRate)} stroke={palette.aset} strokeWidth={4} strokeDasharray="2 0" />
        <text x={W - 40} y={yFor(lockRate) - 10} textAnchor="end" fontSize={16} fill={palette.aset}>Dengan hedge: terkunci Rp16.000</text>

        {/* garis spot liar */}
        <polyline points={spotPts.join(" ")} fill="none" stroke={palette.kredit} strokeWidth={4} strokeLinecap="round" />
        <text x={xFor(prog)} y={yFor(spotAt(prog)) - 12} textAnchor="end" fontSize={16} fill={palette.kredit}>Tanpa hedge: kurs spot</text>

        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={16} fill={palette.muted}>Waktu</text>
        <text x={20} y={28} fontSize={16} fill={palette.muted}>Kurs</text>
      </svg>

      <div style={{ opacity: note, marginTop: 12, fontSize: 18, color: palette.muted }}>
        Hedging menukar potensi untung kurs dengan <b style={{ color: palette.text }}>kepastian</b>. Perusahaan bisa merencanakan biaya tanpa cemas kurs bergejolak.
      </div>
    </AbsoluteFill>
  );
};

export const HedgingFXVideoDuration = 200;
