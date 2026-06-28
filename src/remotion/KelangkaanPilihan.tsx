import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Kelangkaan memaksa pilihan: kurva kemungkinan produksi (PPF). Menambah satu barang
// berarti mengorbankan yang lain (biaya peluang).
export const KelangkaanPilihan: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const padL = 70;
  const padB = 50;
  // PPF berbentuk cekung: x^2 + y^2 ~ batas
  const xMax = W - padL - 40;
  const yMax = H - padB - 30;
  const ppf = (t: number) => {
    // t 0..1 sepanjang kurva
    const x = padL + t * xMax;
    const frac = Math.sqrt(Math.max(0, 1 - t * t));
    const y = 30 + (1 - frac) * yMax;
    return [x, y] as const;
  };
  const draw = interpolate(frame, [20, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pts: string[] = [];
  for (let t = 0; t <= draw + 0.0001; t += 0.02) {
    const [x, y] = ppf(t);
    pts.push(`${x},${y}`);
  }
  // titik pilihan bergerak: tunjukkan trade-off
  const tSel = interpolate(frame, [125, 175], [0.3, 0.7], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const [sx, sy] = ppf(tSel);
  const note = useFade(160, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Kelangkaan Memaksa Pilihan" sub="Kurva kemungkinan produksi (PPF): menambah satu barang mengorbankan yang lain" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 20 }}>
        <line x1={padL} y1={H - padB} x2={W - 40} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Barang A (mis. mentega)</text>
        <text x={22} y={26} fontSize={15} fill={palette.muted}>Barang B</text>
        <polyline points={pts.join(" ")} fill="none" stroke={palette.aset} strokeWidth={4} strokeLinecap="round" />
        {frame > 125 && (
          <>
            <circle cx={sx} cy={sy} r={8} fill={palette.kewajiban} />
            <text x={sx + 12} y={sy} fontSize={15} fill={palette.kewajiban} fontWeight={700}>pilihan produksi</text>
          </>
        )}
        <text x={W - 60} y={H - padB - 8} textAnchor="end" fontSize={14} fill={palette.muted}>tak tercapai (di luar kurva)</text>
      </svg>

      <div style={{ opacity: note, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Sumber daya terbatas, kebutuhan tak terbatas. Bergerak di sepanjang kurva berarti menukar satu barang dengan barang lain, itulah biaya peluang.
      </div>
    </AbsoluteFill>
  );
};

export const KelangkaanPilihanDuration = 195;
