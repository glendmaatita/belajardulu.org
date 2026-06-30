import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

// Checks and balances: lingkaran saling mengawasi antar cabang & rakyat.
const NODE = [
  { ikon: "🏛️", judul: "Legislatif", warna: "#60a5fa", x: 470, y: 90 },
  { ikon: "👔", judul: "Eksekutif", warna: "#fbbf24", x: 650, y: 240 },
  { ikon: "⚖️", judul: "Yudikatif", warna: "#f472b6", x: 290, y: 240 },
];

export const ChecksBalancesVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const arrowO = interpolate(frame, [70, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Checks and Balances" sub="Tiap cabang menahan cabang lain agar kekuasaan seimbang" />

      <svg width={940} height={360} style={{ marginTop: 10 }}>
        {NODE.map((a, i) => {
          const b = NODE[(i + 1) % NODE.length];
          return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={palette.accent} strokeWidth={3} opacity={arrowO} markerEnd="url(#ar)" />;
        })}
        <defs>
          <marker id="ar" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6 Z" fill={palette.accent} />
          </marker>
        </defs>
        {NODE.map((n, i) => {
          const { scale, opacity } = usePop(20 + i * 18);
          return (
            <g key={i} transform={`translate(${n.x},${n.y})`} opacity={opacity}>
              <circle r={56 * scale} fill={palette.bgSoft} stroke={n.warna} strokeWidth={3} />
              <text x={0} y={-6} fontSize={32} textAnchor="middle">{n.ikon}</text>
              <text x={0} y={26} fill={n.warna} fontSize={16} fontWeight={800} textAnchor="middle">{n.judul}</text>
            </g>
          );
        })}
      </svg>

      <div style={{ marginTop: 6, fontSize: 18, color: palette.muted, maxWidth: 960, opacity: interpolate(frame, [120, 160], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        Contoh: presiden mengangkat hakim, parlemen menyetujuinya, dan pengadilan bisa membatalkan undang-undang. Tidak ada yang berkuasa penuh.
      </div>
    </AbsoluteFill>
  );
};

export const ChecksBalancesVideoDuration = 210;
