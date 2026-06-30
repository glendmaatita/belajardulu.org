import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// EOQ: titik temu biaya pesan (turun) dan biaya simpan (naik) = total biaya minimum.
export const EOQVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 760;
  const H = 300;
  const reveal = interpolate(frame, [20, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // kurva: order cost = a/Q, holding cost = b*Q, total = jumlah. Q optimal di titik temu.
  const a = 9000;
  const b = 9;
  const pts = (fn: (q: number) => number) => {
    const arr: string[] = [];
    const maxQ = 60;
    for (let i = 1; i <= maxQ * reveal; i++) {
      const q = (i / maxQ) * 60;
      const x = 60 + (q / 60) * (W - 80);
      const y = H - 30 - Math.min(fn(q), 280) * 0.9;
      arr.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return arr.join(" ");
  };
  const qStar = Math.sqrt(a / b); // ~31.6
  const xStar = 60 + (qStar / 60) * (W - 80);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Economic Order Quantity" sub="Jumlah pesan ideal: titik di mana total biaya paling rendah" />

      <svg width={W} height={H} style={{ marginTop: 36 }}>
        <line x1={60} y1={H - 30} x2={W - 20} y2={H - 30} stroke={palette.muted} strokeWidth={1.5} />
        <line x1={60} y1={20} x2={60} y2={H - 30} stroke={palette.muted} strokeWidth={1.5} />
        <polyline points={pts((q) => a / q)} fill="none" stroke="#fbbf24" strokeWidth={3} />
        <polyline points={pts((q) => b * q)} fill="none" stroke="#60a5fa" strokeWidth={3} />
        <polyline points={pts((q) => a / q + b * q)} fill="none" stroke="#34d399" strokeWidth={3.5} />
        {frame > 95 && (
          <>
            <line x1={xStar} y1={20} x2={xStar} y2={H - 30} stroke="#f472b6" strokeWidth={2} strokeDasharray="6 5" opacity={useFade(95)} />
            <text x={xStar - 16} y={H - 8} fill="#f472b6" fontSize={16} fontWeight={800} opacity={useFade(95)}>Q*</text>
          </>
        )}
      </svg>

      <div style={{ display: "flex", gap: 22, marginTop: 6, fontSize: 16, opacity: useFade(60) }}>
        <span style={{ color: "#fbbf24" }}>● Biaya pesan (turun)</span>
        <span style={{ color: "#60a5fa" }}>● Biaya simpan (naik)</span>
        <span style={{ color: "#34d399" }}>● Total biaya</span>
      </div>
    </AbsoluteFill>
  );
};

export const EOQVideoDuration = 200;
