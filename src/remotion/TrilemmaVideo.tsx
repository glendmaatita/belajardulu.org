import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Trilemma / impossible trinity: hanya 2 dari 3 yang bisa dipilih bersamaan.
const corners = [
  { label: "Nilai tukar tetap", x: 480, y: 90, c: "#60a5fa" },
  { label: "Arus modal bebas", x: 760, y: 320, c: "#34d399" },
  { label: "Moneter mandiri", x: 200, y: 320, c: "#fbbf24" },
];

export const TrilemmaVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(175, 18);
  const triGrow = interpolate(frame - 25, [0, 24], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Trilemma Kebijakan (Impossible Trinity)" sub="Sebuah negara hanya bisa memilih dua dari tiga" />
      <svg width="100%" height="360" viewBox="0 0 960 400">
        <polygon
          points={`${corners[0].x},${corners[0].y} ${corners[1].x},${corners[1].y} ${corners[2].x},${corners[2].y}`}
          fill="none"
          stroke={palette.muted}
          strokeWidth={3}
          strokeDasharray="600"
          strokeDashoffset={600 * (1 - triGrow)}
        />
        {corners.map((c, i) => {
          const grow = interpolate(frame - (40 + i * 20), [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <g key={i} opacity={grow}>
              <circle cx={c.x} cy={c.y} r={20} fill={c.c} />
              <text x={c.x} y={c.y - 32} fill={palette.text} fontSize={19} fontWeight={800} textAnchor="middle" fontFamily={font}>{c.label}</text>
            </g>
          );
        })}
      </svg>
      <div style={{ marginTop: 6, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Memilih ketiganya mustahil. Indonesia umumnya memilih moneter mandiri dan arus modal bebas, dengan nilai tukar mengambang.
      </div>
    </AbsoluteFill>
  );
};

export const TrilemmaVideoDuration = 210;
