import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Kurva permintaan (turun) dan penawaran (naik) bertemu di titik keseimbangan pasar.
export const PermintaanPenawaran: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const padL = 70;
  const padB = 50;
  const x0 = padL;
  const x1 = W - 40;
  const y0 = 30;
  const y1 = H - padB;

  const draw = interpolate(frame, [20, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  // demand: dari kiri-atas ke kanan-bawah; supply: kiri-bawah ke kanan-atas
  const dx = (t: number) => x0 + t * (x1 - x0);
  const demandY = (t: number) => y0 + t * (y1 - y0);
  const supplyY = (t: number) => y1 - t * (y1 - y0);
  const dPts: string[] = [];
  const sPts: string[] = [];
  for (let t = 0; t <= draw + 0.0001; t += 0.02) {
    dPts.push(`${dx(t)},${demandY(t)}`);
    sPts.push(`${dx(t)},${supplyY(t)}`);
  }
  // perpotongan di t=0.5
  const eqX = dx(0.5);
  const eqY = demandY(0.5);
  const showEq = frame > 115;
  const note = useFade(135, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Permintaan, Penawaran & Keseimbangan" sub="Harga bergerak sampai jumlah diminta sama dengan jumlah ditawarkan" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 20 }}>
        <line x1={padL} y1={y1} x2={x1} y2={y1} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={y0} x2={padL} y2={y1} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Jumlah (Q)</text>
        <text x={22} y={26} fontSize={15} fill={palette.muted}>Harga (P)</text>

        <polyline points={dPts.join(" ")} fill="none" stroke={palette.ekuitas} strokeWidth={4} strokeLinecap="round" />
        <text x={x1} y={demandY(1) - 8} textAnchor="end" fontSize={15} fill={palette.ekuitas}>Permintaan (D)</text>
        <polyline points={sPts.join(" ")} fill="none" stroke={palette.aset} strokeWidth={4} strokeLinecap="round" />
        <text x={x1} y={supplyY(1) - 8} textAnchor="end" fontSize={15} fill={palette.aset}>Penawaran (S)</text>

        {showEq && (
          <>
            <circle cx={eqX} cy={eqY} r={8} fill={palette.kredit} />
            <line x1={padL} y1={eqY} x2={eqX} y2={eqY} stroke={palette.kredit} strokeDasharray="5" />
            <line x1={eqX} y1={y1} x2={eqX} y2={eqY} stroke={palette.kredit} strokeDasharray="5" />
            <text x={eqX + 12} y={eqY - 10} fontSize={16} fill={palette.kredit} fontWeight={800}>Titik keseimbangan</text>
          </>
        )}
      </svg>

      <div style={{ opacity: note, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Di atas harga keseimbangan terjadi surplus (kelebihan pasokan); di bawahnya terjadi kelangkaan. Harga menyesuaikan menuju titik temu.
      </div>
    </AbsoluteFill>
  );
};

export const PermintaanPenawaranDuration = 180;
