import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title } from "./anim";

// Optimasi rute: dari urutan asal-asalan ke urutan terpendek mengunjungi semua titik.
const STOP = [
  { x: 140, y: 120 },
  { x: 420, y: 90 },
  { x: 760, y: 150 },
  { x: 880, y: 300 },
  { x: 560, y: 330 },
  { x: 240, y: 300 },
];
const DEPOT = { x: 120, y: 220 };
const NAIVE = [0, 2, 5, 1, 4, 3];
const OPT = [0, 1, 2, 3, 4, 5];

export const RouteOptimizationVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const showOpt = frame > 110;
  const order = showOpt ? OPT : NAIVE;
  const path = [DEPOT, ...order.map((i) => STOP[i]), DEPOT];
  const draw = interpolate(frame, showOpt ? [110, 170] : [20, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const shown = path.slice(0, Math.max(2, Math.ceil(path.length * draw)));

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Optimasi Rute" sub={showOpt ? "Rute optimal: jarak terpendek mengunjungi semua titik" : "Rute asal-asalan: jarak jauh, boros BBM"} />

      <svg width={1000} height={380} style={{ marginTop: 24 }}>
        <polyline points={shown.map((p) => `${p.x},${p.y}`).join(" ")} fill="none" stroke={showOpt ? "#34d399" : "#f87171"} strokeWidth={4} />
        <g transform={`translate(${DEPOT.x},${DEPOT.y})`}>
          <rect x={-16} y={-16} width={32} height={32} rx={7} fill="#fbbf24" />
          <text x={0} y={6} fontSize={18} textAnchor="middle">🏠</text>
        </g>
        {STOP.map((p, i) => (
          <g key={i} transform={`translate(${p.x},${p.y})`}>
            <circle r={13} fill={palette.bgSoft} stroke="#60a5fa" strokeWidth={2} />
            <text x={0} y={5} fill={palette.text} fontSize={14} fontWeight={700} textAnchor="middle">{i + 1}</text>
          </g>
        ))}
      </svg>

      <div style={{ marginTop: 14, fontSize: 18, color: showOpt ? "#34d399" : palette.muted, fontWeight: 700 }}>
        {showOpt ? "Hemat jarak, waktu, dan emisi tanpa menambah satu pun armada." : "Tiap kilometer ekstra menambah biaya BBM, upah sopir, dan waktu tempuh."}
      </div>
    </AbsoluteFill>
  );
};

export const RouteOptimizationVideoDuration = 200;
