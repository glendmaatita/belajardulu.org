import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Hubungan terbalik harga obligasi dan yield: saat suku bunga (yield) naik, harga obligasi turun.
export const ObligasiYieldVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 330;
  const padL = 70;
  const padB = 50;

  // harga = f(yield), menurun
  const xFor = (y: number) => padL + ((y - 2) / 12) * (W - padL - 40); // yield 2..14%
  const yFor = (h: number) => 30 + (1 - (h - 70) / 60) * (H - padB - 30); // harga 70..130
  const harga = (y: number) => 130 - (y - 2) * 5; // turun saat yield naik

  const prog = interpolate(frame, [20, 150], [2, 14], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pts: string[] = [];
  for (let y = 2; y <= prog + 0.0001; y += 0.3) pts.push(`${xFor(y)},${yFor(harga(y))}`);
  const note = useFade(158, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Obligasi: Harga vs Yield Berlawanan" sub="Saat suku bunga naik, harga obligasi yang beredar turun" />

      <div style={{ display: "flex", gap: 50, marginTop: 8 }}>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Yield (suku bunga)</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: palette.kewajiban }}>{prog.toFixed(1)}%</div>
        </div>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Harga obligasi (par 100)</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: palette.aset }}>{harga(prog).toFixed(0)}</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 6 }}>
        <line x1={padL} y1={H - padB} x2={W - 40} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={yFor(100)} x2={W - 40} y2={yFor(100)} stroke="rgba(255,255,255,0.12)" strokeDasharray="6" />
        <text x={W - 40} y={yFor(100) - 8} textAnchor="end" fontSize={14} fill={palette.muted}>harga par (100)</text>
        <polyline points={pts.join(" ")} fill="none" stroke={palette.aset} strokeWidth={4} strokeLinecap="round" />
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Yield (%)</text>
        <text x={18} y={28} fontSize={15} fill={palette.muted}>Harga</text>
      </svg>

      <div style={{ opacity: note, marginTop: 6, fontSize: 18, color: palette.muted }}>
        Kupon tetap, tetapi harga menyesuaikan agar yield-nya kompetitif. Inilah risiko suku bunga bagi pemegang obligasi.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const ObligasiYieldVideoDuration = 185;
