import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Intervensi harga: harga eceran tertinggi (ceiling) menimbulkan kelangkaan; harga dasar (floor) menimbulkan surplus.
export const IntervensiHarga: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const note = useFade(140, 18);

  const Panel = ({ x, judul, jenis, warna, ket, delay }: { x: number; judul: string; jenis: "ceiling" | "floor"; warna: string; ket: string; delay: number }) => {
    const o = frame > delay ? 1 : 0;
    const w = 380;
    const padL = 50;
    const padB = 40;
    const x0 = x + padL;
    const x1 = x + w - 20;
    const yTop = 24;
    const yBot = H - padB;
    const eqY = (yTop + yBot) / 2;
    const lineY = jenis === "ceiling" ? eqY + 45 : eqY - 45; // ceiling di bawah eq, floor di atas eq
    return (
      <g opacity={o}>
        <text x={x + w / 2} y={16} textAnchor="middle" fontSize={18} fontWeight={800} fill={warna}>{judul}</text>
        <line x1={x0} y1={yBot} x2={x1} y2={yBot} stroke="rgba(255,255,255,0.25)" strokeWidth={2} />
        <line x1={x0} y1={yTop} x2={x0} y2={yBot} stroke="rgba(255,255,255,0.25)" strokeWidth={2} />
        {/* D & S */}
        <line x1={x0} y1={yTop} x2={x1} y2={yBot} stroke={palette.ekuitas} strokeWidth={3} />
        <line x1={x0} y1={yBot} x2={x1} y2={yTop} stroke={palette.aset} strokeWidth={3} />
        {/* garis intervensi */}
        <line x1={x0} y1={lineY} x2={x1} y2={lineY} stroke={warna} strokeWidth={3} strokeDasharray="6" />
        <text x={x + w / 2} y={H - 8} textAnchor="middle" fontSize={13} fill={palette.muted}>{ket}</text>
      </g>
    );
  };

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Intervensi Harga oleh Pemerintah" sub="Batas harga menggeser pasar dari keseimbangan, menimbulkan efek samping" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 24 }}>
        <Panel x={20} judul="Harga Eceran Tertinggi (ceiling)" jenis="ceiling" warna={palette.kredit} ket="Harga ditekan di bawah keseimbangan -> KELANGKAAN" delay={25} />
        <Panel x={520} judul="Harga Dasar (floor)" jenis="floor" warna={palette.kewajiban} ket="Harga ditahan di atas keseimbangan -> SURPLUS" delay={75} />
      </svg>

      <div style={{ opacity: note, marginTop: 16, fontSize: 18, color: palette.muted }}>
        Contoh Indonesia: HET minyak goreng (ceiling) berisiko menimbulkan kelangkaan; harga dasar gabah dan UMR (floor) berisiko menimbulkan kelebihan pasokan atau pengangguran.
      </div>
    </AbsoluteFill>
  );
};

export const IntervensiHargaDuration = 185;
