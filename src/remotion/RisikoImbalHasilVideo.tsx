import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Spektrum risiko vs imbal hasil: makin tinggi potensi imbal hasil, makin tinggi risikonya.
const ASET = [
  { nama: "Deposito", risk: 10, ret: 12, warna: palette.ekuitas },
  { nama: "Obligasi", risk: 30, ret: 32, warna: palette.aset },
  { nama: "Reksa dana campuran", risk: 50, ret: 52, warna: palette.kewajiban },
  { nama: "Saham", risk: 80, ret: 78, warna: "#fb923c" },
  { nama: "Kripto", risk: 95, ret: 88, warna: palette.kredit },
];

export const RisikoImbalHasilVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 330;
  const padL = 70;
  const padB = 50;
  const xFor = (v: number) => padL + (v / 100) * (W - padL - 50);
  const yFor = (v: number) => 20 + (1 - v / 100) * (H - padB - 20);
  const note = useFade(160, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Risiko vs Imbal Hasil" sub="Tidak ada imbal hasil tinggi tanpa risiko yang setara" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 20 }}>
        <line x1={padL} y1={H - padB} x2={W - 50} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Risiko (volatilitas)</text>
        <text x={18} y={28} fontSize={15} fill={palette.muted}>Imbal hasil</text>

        {/* garis tren */}
        <line x1={xFor(5)} y1={yFor(8)} x2={xFor(95)} y2={yFor(90)} stroke="rgba(255,255,255,0.15)" strokeWidth={2} strokeDasharray="6" />

        {ASET.map((a, i) => {
          const { scale, opacity } = usePop(20 + i * 22);
          return (
            <g key={i} opacity={opacity} transform={`translate(${xFor(a.risk)},${yFor(a.ret)}) scale(${scale})`}>
              <circle r={12} fill={a.warna} />
              <text x={16} y={5} fontSize={16} fill={palette.text} fontWeight={700}>{a.nama}</text>
            </g>
          );
        })}
      </svg>

      <div style={{ opacity: note, marginTop: 6, fontSize: 18, color: palette.muted }}>
        Aset bergerak naik ke kanan: potensi imbal hasil tinggi selalu disertai risiko tinggi. Pilih sesuai tujuan dan toleransi risikomu.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const RisikoImbalHasilVideoDuration = 190;
