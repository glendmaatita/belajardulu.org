import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Valuasi saham: harga pasar berfluktuasi di sekitar nilai intrinsik. Beli saat harga < nilai (margin of safety).
export const ValuasiSahamVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const padL = 70;
  const padB = 46;
  const intrinsik = 60;

  const xFor = (t: number) => padL + t * (W - padL - 40);
  const yFor = (v: number) => 30 + (1 - v / 100) * (H - padB - 30);
  const harga = (t: number) => intrinsik + 26 * Math.sin(t * 6.28 * 1.4);

  const prog = interpolate(frame, [20, 160], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pts: string[] = [];
  for (let t = 0; t <= prog + 0.0001; t += 0.015) pts.push(`${xFor(t)},${yFor(harga(t))}`);
  const note = useFade(168, 18);
  const hargaKini = harga(prog);
  const murah = hargaKini < intrinsik;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Valuasi: Harga vs Nilai" sub="Harga yang dibayar, nilai yang didapat. Cari margin of safety" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 24 }}>
        <line x1={padL} y1={H - padB} x2={W - 40} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />

        {/* nilai intrinsik */}
        <line x1={padL} y1={yFor(intrinsik)} x2={W - 40} y2={yFor(intrinsik)} stroke={palette.aset} strokeWidth={3} strokeDasharray="2 0" />
        <text x={W - 40} y={yFor(intrinsik) - 10} textAnchor="end" fontSize={15} fill={palette.aset}>nilai wajar (intrinsik)</text>

        {/* harga pasar */}
        <polyline points={pts.join(" ")} fill="none" stroke={palette.kewajiban} strokeWidth={4} strokeLinecap="round" />
        <circle cx={xFor(prog)} cy={yFor(hargaKini)} r={7} fill={murah ? palette.aset : palette.kredit} />
        <text x={xFor(prog) - 10} y={yFor(hargaKini) + 4} textAnchor="end" fontSize={15} fill={palette.kewajiban}>harga pasar</text>
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Waktu</text>
      </svg>

      <div style={{ opacity: note, marginTop: 10, fontSize: 18, color: palette.muted }}>
        Saat harga turun di bawah nilai wajar, muncul peluang beli dengan margin of safety. Saat jauh di atas, saham mahal (overvalued).
      </div>
    </AbsoluteFill>
  );
};

export const ValuasiSahamVideoDuration = 195;
