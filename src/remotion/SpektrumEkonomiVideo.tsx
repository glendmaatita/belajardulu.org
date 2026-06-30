import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Spektrum: dari pasar bebas murni sampai ekonomi terencana penuh; kebanyakan negara di tengah.
const TITIK = [
  { x: 0.06, label: "Pasar bebas\nmurni", ket: "laissez-faire" },
  { x: 0.34, label: "Ekonomi\ncampuran", ket: "AS, Indonesia" },
  { x: 0.6, label: "Negara\nkesejahteraan", ket: "Nordik" },
  { x: 0.92, label: "Ekonomi\nterencana", ket: "komando" },
];

export const SpektrumEkonomiVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 940;
  const grow = interpolate(frame, [16, 70], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Spektrum Sistem Ekonomi" sub="Hampir tidak ada negara yang murni satu kutub; kebanyakan ada di tengah" />

      <svg width={W} height={220} style={{ marginTop: 80 }}>
        <defs>
          <linearGradient id="spec" x1="0" x2="1">
            <stop offset="0" stopColor="#34d399" />
            <stop offset="0.5" stopColor="#fbbf24" />
            <stop offset="1" stopColor="#f87171" />
          </linearGradient>
        </defs>
        <rect x={30} y={70} width={(W - 60) * grow} height={18} rx={9} fill="url(#spec)" />
        <text x={30} y={50} fill="#34d399" fontSize={16} fontWeight={700}>Pasar mengatur</text>
        <text x={W - 30} y={50} fill="#f87171" fontSize={16} fontWeight={700} textAnchor="end">Negara mengatur</text>
        {TITIK.map((t, i) => {
          const o = useFade(60 + i * 14);
          const x = 30 + (W - 60) * t.x;
          return (
            <g key={i} opacity={o}>
              <circle cx={x} cy={79} r={9} fill={palette.bg} stroke={palette.text} strokeWidth={3} />
              {t.label.split("\n").map((ln, j) => (
                <text key={j} x={x} y={120 + j * 20} fill={palette.text} fontSize={15} fontWeight={700} textAnchor="middle">{ln}</text>
              ))}
              <text x={x} y={120 + t.label.split("\n").length * 20} fill={palette.muted} fontSize={13} textAnchor="middle">{t.ket}</text>
            </g>
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};

export const SpektrumEkonomiVideoDuration = 210;
