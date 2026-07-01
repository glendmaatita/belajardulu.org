import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Lingkaran kontradiksi: akumulasi -> overproduksi -> krisis -> PHK -> permintaan turun.
const steps = [
  { label: "Akumulasi modal", c: "#60a5fa" },
  { label: "Overproduksi", c: "#fbbf24" },
  { label: "Krisis", c: "#fb7185" },
  { label: "PHK massal", c: "#ef4444" },
  { label: "Permintaan jatuh", c: "#a78bfa" },
];

export const AkumulasiKrisisVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(180, 18);
  const cx = 480, cy = 215, r = 130;
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Kontradiksi Akumulasi & Krisis" sub="Menurut Marx, krisis bukan kecelakaan tetapi melekat pada sistem" />
      <svg width="100%" height="360" viewBox="0 0 960 400">
        {steps.map((s, i) => {
          const ang = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
          const x = cx + r * Math.cos(ang);
          const y = cy + r * Math.sin(ang);
          const grow = interpolate(frame - (30 + i * 22), [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <g key={i} opacity={grow}>
              <circle cx={x} cy={y} r={52} fill={palette.bgSoft} stroke={s.c} strokeWidth={3} />
              <text x={x} y={y} fill={s.c} fontSize={15} fontWeight={700} textAnchor="middle" dominantBaseline="middle" fontFamily={font}>
                {s.label.split(" ").map((w, j) => (
                  <tspan key={j} x={x} dy={j === 0 ? -6 : 18}>{w}</tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>
      <div style={{ marginTop: 8, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Dorongan terus mengakumulasi modal memicu overproduksi, lalu krisis, yang menurut Marx berulang.
      </div>
    </AbsoluteFill>
  );
};

export const AkumulasiKrisisVideoDuration = 215;
