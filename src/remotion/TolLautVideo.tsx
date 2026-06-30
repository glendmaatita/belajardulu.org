import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

// Tol Laut: kapal terjadwal menyambung Indonesia barat ke timur agar harga barang merata.
const PORT = [
  { kota: "Tanjung Priok", x: 120, y: 250 },
  { kota: "Surabaya", x: 320, y: 270 },
  { kota: "Makassar", x: 520, y: 230 },
  { kota: "Ambon", x: 700, y: 250 },
  { kota: "Jayapura", x: 880, y: 210 },
];

export const TolLautVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const shipT = interpolate(frame, [40, 180], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const idx = Math.min(PORT.length - 2, Math.floor(shipT * (PORT.length - 1)));
  const local = (shipT * (PORT.length - 1)) % 1;
  const sx = PORT[idx].x + (PORT[idx + 1].x - PORT[idx].x) * local;
  const sy = PORT[idx].y + (PORT[idx + 1].y - PORT[idx].y) * local;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Tol Laut" sub="Pelayaran terjadwal menyambung barat ke timur agar harga barang lebih merata" />

      <svg width={1000} height={340} style={{ marginTop: 30 }}>
        <polyline points={PORT.map((p) => `${p.x},${p.y}`).join(" ")} fill="none" stroke={palette.bgSoft} strokeWidth={6} />
        <polyline points={PORT.map((p) => `${p.x},${p.y}`).join(" ")} fill="none" stroke="#38bdf8" strokeWidth={3} strokeDasharray="10 8" />
        {PORT.map((p, i) => {
          const { scale, opacity } = usePop(16 + i * 14);
          return (
            <g key={i} transform={`translate(${p.x},${p.y})`} opacity={opacity}>
              <circle r={9 * scale} fill="#fbbf24" />
              <text x={0} y={-18} fill={palette.text} fontSize={15} fontWeight={700} textAnchor="middle">{p.kota}</text>
            </g>
          );
        })}
        <text x={sx} y={sy - 14} fontSize={30} textAnchor="middle">🚢</text>
      </svg>

      <div style={{ marginTop: 18, fontSize: 18, color: palette.muted, maxWidth: 980 }}>
        Dengan kapal yang berlayar tetap dan disubsidi, biaya logistik ke wilayah timur turun sehingga disparitas harga kebutuhan pokok menyempit.
      </div>
    </AbsoluteFill>
  );
};

export const TolLautVideoDuration = 200;
