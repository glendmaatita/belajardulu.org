import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// AEOI/CRS: otoritas pajak bertukar data rekening keuangan lintas negara secara
// otomatis, mempersempit ruang menyembunyikan aset di luar negeri.
const nodes = [
  { x: 200, y: 150, label: "Indonesia" },
  { x: 480, y: 90, label: "Singapura" },
  { x: 760, y: 150, label: "Swiss" },
  { x: 620, y: 300, label: "Hong Kong" },
  { x: 340, y: 320, label: "Australia" },
];

export const AEOIVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(180, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="AEOI & CRS: Pertukaran Data Otomatis" sub="Rekening lintas negara kini saling terlihat antarotoritas pajak" />
      <svg width="100%" height="380" viewBox="0 0 960 400" style={{ marginTop: 10 }}>
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => {
            const delay = 30 + (i + j) * 10;
            const grow = interpolate(frame - delay, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            return (
              <line key={`${i}-${j}`} x1={a.x} y1={a.y} x2={a.x + (b.x - a.x) * grow} y2={a.y + (b.y - a.y) * grow} stroke={palette.accent} strokeWidth={2} opacity={0.5} />
            );
          })
        )}
        {nodes.map((n, i) => {
          const grow = interpolate(frame - (20 + i * 8), [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <g key={i} opacity={grow}>
              <circle cx={n.x} cy={n.y} r={14} fill={palette.aset} />
              <text x={n.x} y={n.y - 22} fill={palette.text} fontSize={18} fontWeight={700} textAnchor="middle" fontFamily={font}>{n.label}</text>
            </g>
          );
        })}
      </svg>
      <div style={{ marginTop: 6, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Sejak 2018 Indonesia ikut CRS: menyembunyikan aset di luar negeri makin sulit, transparansi jadi keniscayaan.
      </div>
    </AbsoluteFill>
  );
};

export const AEOIVideoDuration = 215;
