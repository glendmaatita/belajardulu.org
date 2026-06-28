import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Pergeseran kurva permintaan: faktor selain harga (pendapatan, selera) menggeser seluruh kurva,
// menghasilkan titik keseimbangan baru.
export const PergeseranKurva: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const padL = 70;
  const padB = 50;
  const x0 = padL;
  const x1 = W - 40;
  const y0 = 30;
  const y1 = H - padB;

  // pergeseran ke kanan dari 0 ke 1
  const shift = interpolate(frame, [50, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) * 140;
  const dx = (t: number) => x0 + t * (x1 - x0 - 140);
  const demandY = (t: number, off: number) => y0 + t * (y1 - y0) - 0 + off * 0; // simple linear
  const supplyY = (t: number) => y1 - t * (y1 - y0);

  const dOld: string[] = [];
  const dNew: string[] = [];
  const sPts: string[] = [];
  for (let t = 0; t <= 1.0001; t += 0.02) {
    dOld.push(`${dx(t)},${demandY(t, 0)}`);
    dNew.push(`${dx(t) + shift},${demandY(t, 0)}`);
    sPts.push(`${dx(t)},${supplyY(t)}`);
  }
  const note = useFade(160, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Pergeseran Kurva Permintaan" sub="Faktor selain harga menggeser seluruh kurva ke titik keseimbangan baru" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 20 }}>
        <line x1={padL} y1={y1} x2={x1} y2={y1} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={y0} x2={padL} y2={y1} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Jumlah (Q)</text>
        <text x={22} y={26} fontSize={15} fill={palette.muted}>Harga (P)</text>

        <polyline points={sPts.join(" ")} fill="none" stroke={palette.aset} strokeWidth={4} strokeLinecap="round" />
        <text x={x1 - 140} y={supplyY(1) - 8} textAnchor="end" fontSize={14} fill={palette.aset}>Penawaran</text>

        <polyline points={dOld.join(" ")} fill="none" stroke="rgba(96,165,250,0.45)" strokeWidth={3} strokeDasharray="6" />
        <polyline points={dNew.join(" ")} fill="none" stroke={palette.ekuitas} strokeWidth={4} strokeLinecap="round" />
        <text x={dx(1) + shift} y={demandY(1, 0) - 8} textAnchor="end" fontSize={14} fill={palette.ekuitas}>D bergeser kanan</text>
      </svg>

      <div style={{ opacity: note, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Saat pendapatan naik atau selera meningkat, permintaan bergeser ke kanan: pada harga sama, jumlah diminta bertambah, mendorong harga dan kuantitas keseimbangan naik.
      </div>
    </AbsoluteFill>
  );
};

export const PergeseranKurvaDuration = 195;
