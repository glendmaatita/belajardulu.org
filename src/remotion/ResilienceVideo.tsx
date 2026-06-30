import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Resiliensi: rantai yang rapuh putus saat guncangan; rantai tangguh pulih cepat.
export const ResilienceVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 820;
  const H = 280;
  const draw = interpolate(frame, [20, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const line = (dip: number, recover: number) => {
    const arr: string[] = [];
    const n = Math.ceil(60 * draw);
    for (let i = 0; i <= n; i++) {
      const t = i / 60;
      let level = 1;
      if (t > 0.3 && t < 0.45) level = 1 - ((t - 0.3) / 0.15) * dip;
      else if (t >= 0.45) level = Math.min(1, 1 - dip + ((t - 0.45) / recover) * dip);
      const x = 50 + t * (W - 70);
      const y = 30 + (1 - level) * (H - 80);
      arr.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return arr.join(" ");
  };

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Resiliensi Rantai Pasok" sub="Saat guncangan datang, yang tangguh turun sebentar lalu pulih cepat" />

      <svg width={W} height={H} style={{ marginTop: 34 }}>
        <line x1={50} y1={H - 50} x2={W - 20} y2={H - 50} stroke={palette.muted} strokeWidth={1.5} />
        <line x1={50} y1={20} x2={50} y2={H - 50} stroke={palette.muted} strokeWidth={1.5} />
        <text x={50 + 0.37 * (W - 70)} y={20} fill="#f87171" fontSize={14} fontWeight={700} textAnchor="middle" opacity={useFade(60)}>⚡ guncangan</text>
        <polyline points={line(0.85, 0.5)} fill="none" stroke="#f87171" strokeWidth={3} />
        <polyline points={line(0.35, 0.15)} fill="none" stroke="#34d399" strokeWidth={3.5} />
      </svg>

      <div style={{ display: "flex", gap: 24, marginTop: 8, fontSize: 16, opacity: useFade(120) }}>
        <span style={{ color: "#f87171" }}>● Rantai rapuh: jatuh dalam, pulih lambat</span>
        <span style={{ color: "#34d399" }}>● Rantai tangguh: turun sedikit, pulih cepat</span>
      </div>
    </AbsoluteFill>
  );
};

export const ResilienceVideoDuration = 210;
