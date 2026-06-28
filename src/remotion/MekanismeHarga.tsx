import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Ilustrasi harga karbon naik saat cap diperketat (USD/tCO2e)
const data = [
  { year: "2018", v: 16 },
  { year: "2019", v: 25 },
  { year: "2020", v: 33 },
  { year: "2021", v: 53 },
  { year: "2022", v: 81 },
  { year: "2023", v: 85 },
  { year: "2024", v: 70 },
];

export const MekanismeHarga: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 460;
  const padL = 90;
  const padB = 70;
  const padT = 20;
  const padR = 60;
  const max = 100;
  const x = (i: number) => padL + (i / (data.length - 1)) * (W - padL - padR);
  const y = (v: number) => padT + (1 - v / max) * (H - padT - padB);
  const pts = data.map((d, i) => [x(i), y(d.v)] as const);
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
  const len = 3000;
  const draw = interpolate(frame, [30, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const note = useFade(160, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Mekanisme Harga Karbon" sub="Saat pasokan izin (cap) makin ketat, harga cenderung naik, EU ETS (USD/tCO₂e)" />
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 16 }}>
        {[0, 25, 50, 75, 100].map((gv) => (
          <g key={gv}>
            <line x1={padL} x2={W - padR} y1={y(gv)} y2={y(gv)} stroke="rgba(255,255,255,0.08)" />
            <text x={padL - 12} y={y(gv) + 5} textAnchor="end" fontSize={18} fill={palette.muted}>
              ${gv}
            </text>
          </g>
        ))}
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={palette.aset} stopOpacity={0.35} />
            <stop offset="100%" stopColor={palette.aset} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        {draw > 0.99 && (
          <path d={`${path} L${x(data.length - 1)},${H - padB} L${x(0)},${H - padB} Z`} fill="url(#g)" />
        )}
        <path
          d={path}
          fill="none"
          stroke={palette.aset}
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={len}
          strokeDashoffset={len * (1 - draw)}
        />
        {pts.map((p, i) => (
          <g key={i} opacity={draw > i / data.length ? 1 : 0}>
            <circle cx={p[0]} cy={p[1]} r={6} fill={palette.aset} />
            <text x={p[0]} y={p[1] - 16} textAnchor="middle" fontSize={18} fontWeight={700} fill={palette.text}>
              ${data[i].v}
            </text>
            <text x={p[0]} y={H - padB + 28} textAnchor="middle" fontSize={18} fill={palette.muted}>
              {data[i].year}
            </text>
          </g>
        ))}
      </svg>
      <div style={{ opacity: note, marginTop: 6, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Harga karbon = sinyal ekonomi: makin mahal mencemari, makin menarik berinvestasi bersih.
      </div>
    </AbsoluteFill>
  );
};

export const MekanismeHargaDuration = 220;
