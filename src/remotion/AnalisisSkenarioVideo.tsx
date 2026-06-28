import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Analisis skenario iklim: jalur nilai aset berbeda di bawah skenario pemanasan 1,5 / 2 / 3 derajat.
const SCEN = [
  { label: "1,5 derajat (transisi cepat)", warna: palette.aset, end: 60 },
  { label: "2 derajat (tertib)", warna: palette.ekuitas, end: 78 },
  { label: "3 derajat (tanpa aksi)", warna: palette.kredit, end: 40 },
];

export const AnalisisSkenarioVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 330;
  const padL = 70;
  const padB = 46;
  const x0 = padL;
  const x1 = W - 40;
  const yFor = (v: number) => 30 + (1 - v / 100) * (H - padB - 30);

  const prog = interpolate(frame, [20, 160], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const note = useFade(168, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Analisis Skenario Iklim" sub="Nilai aset bergerak berbeda di tiap jalur pemanasan global" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 24 }}>
        <line x1={padL} y1={H - padB} x2={x1} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <text x={20} y={28} fontSize={15} fill={palette.muted}>Nilai aset</text>
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Waktu (2025 menuju 2050)</text>

        {SCEN.map((s, i) => {
          const startV = 70;
          const curX = x0 + prog * (x1 - x0);
          const curV = startV + prog * (s.end - startV);
          const pts = `${x0},${yFor(startV)} ${curX},${yFor(curV)}`;
          return (
            <g key={i}>
              <polyline points={pts} fill="none" stroke={s.warna} strokeWidth={4} strokeLinecap="round" />
              <circle cx={curX} cy={yFor(curV)} r={6} fill={s.warna} />
              <text x={curX + 8} y={yFor(curV) + 4} fontSize={15} fill={s.warna} fontWeight={700} opacity={prog > 0.5 ? 1 : 0}>{s.label}</text>
            </g>
          );
        })}
      </svg>

      <div style={{ opacity: note, marginTop: 12, fontSize: 18, color: palette.muted }}>
        Skenario bukan ramalan, melainkan alat menguji ketahanan. Aset bisa untung pada transisi cepat, tetapi rugi besar bila dunia gagal beraksi.
      </div>
    </AbsoluteFill>
  );
};

export const AnalisisSkenarioVideoDuration = 200;
