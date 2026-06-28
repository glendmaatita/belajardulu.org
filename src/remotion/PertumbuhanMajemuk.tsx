import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Pertumbuhan ekonomi bersifat majemuk: selisih kecil tingkat pertumbuhan berbeda besar dalam jangka panjang.
export const PertumbuhanMajemuk: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 330;
  const padL = 60;
  const padB = 46;
  const tahunMax = 30;
  const x0 = padL;
  const x1 = W - 40;
  const yTop = 30;
  const yBot = H - padB;

  const val = (g: number, t: number) => 100 * Math.pow(1 + g, t);
  const maxV = val(0.07, tahunMax);
  const xFor = (t: number) => x0 + (t / tahunMax) * (x1 - x0);
  const yFor = (v: number) => yTop + (1 - v / maxV) * (yBot - yTop);

  const prog = interpolate(frame, [20, 160], [0, tahunMax], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lines = [
    { g: 0.03, warna: palette.kewajiban, label: "3% per tahun" },
    { g: 0.05, warna: palette.ekuitas, label: "5% per tahun" },
    { g: 0.07, warna: palette.aset, label: "7% per tahun" },
  ];
  const note = useFade(168, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Kekuatan Pertumbuhan Majemuk" sub="Selisih kecil tingkat pertumbuhan, perbedaan besar dalam satu generasi" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 24 }}>
        <line x1={padL} y1={yBot} x2={x1} y2={yBot} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={yTop} x2={padL} y2={yBot} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <text x={(W + padL) / 2} y={H - 10} textAnchor="middle" fontSize={15} fill={palette.muted}>Tahun</text>
        <text x={18} y={26} fontSize={15} fill={palette.muted}>PDB (indeks)</text>
        {lines.map((ln, i) => {
          const pts: string[] = [];
          for (let t = 0; t <= prog + 0.0001; t += 0.5) pts.push(`${xFor(t)},${yFor(val(ln.g, t))}`);
          return (
            <g key={i}>
              <polyline points={pts.join(" ")} fill="none" stroke={ln.warna} strokeWidth={4} strokeLinecap="round" />
              <text x={xFor(prog) + 6} y={yFor(val(ln.g, prog))} fontSize={14} fill={ln.warna} fontWeight={700} opacity={prog > 4 ? 1 : 0}>{ln.label}</text>
            </g>
          );
        })}
      </svg>

      <div style={{ opacity: note, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Dalam 30 tahun, ekonomi yang tumbuh 7% menjadi sekitar 7,6 kali lipat, sementara yang 3% hanya 2,4 kali lipat. Aturan 72: bagi 72 dengan pertumbuhan untuk memperkirakan waktu menggandakan.
      </div>
    </AbsoluteFill>
  );
};

export const PertumbuhanMajemukDuration = 200;
