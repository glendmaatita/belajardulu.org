import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Bunga majemuk: pertumbuhan menumpuk dan makin curam seiring waktu (efek bola salju).
export const BungaMajemukVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 330;
  const padL = 70;
  const padB = 46;
  const tahunMax = 30;
  const r = 0.1; // 10% per tahun
  const awal = 10; // juta

  const nilai = (t: number) => awal * Math.pow(1 + r, t);
  const maxV = nilai(tahunMax);
  const xFor = (t: number) => padL + (t / tahunMax) * (W - padL - 40);
  const yFor = (v: number) => 30 + (1 - v / maxV) * (H - padB - 30);

  const prog = interpolate(frame, [20, 165], [0, tahunMax], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const comp: string[] = [];
  const linear: string[] = [];
  for (let t = 0; t <= prog + 0.0001; t += 0.5) {
    comp.push(`${xFor(t)},${yFor(nilai(t))}`);
    linear.push(`${xFor(t)},${yFor(awal + awal * r * t)}`); // bunga sederhana sebagai pembanding
  }
  const note = useFade(170, 18);
  const nilaiKini = nilai(prog);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Bunga Majemuk: Efek Bola Salju" sub="Hasil yang diinvestasikan ulang membuat pertumbuhan makin curam" />

      <div style={{ display: "flex", gap: 50, marginTop: 14 }}>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Tahun ke</div>
          <div style={{ fontSize: 36, fontWeight: 800, color: palette.text }}>{Math.round(prog)}</div>
        </div>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Nilai (modal awal Rp10 juta)</div>
          <div style={{ fontSize: 36, fontWeight: 800, color: palette.aset }}>Rp{nilaiKini.toFixed(0)} juta</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 8 }}>
        <line x1={padL} y1={H - padB} x2={W - 40} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <polyline points={linear.join(" ")} fill="none" stroke={palette.muted} strokeWidth={3} strokeDasharray="6" />
        <text x={W - 40} y={yFor(awal + awal * r * prog) - 8} textAnchor="end" fontSize={14} fill={palette.muted}>bunga sederhana</text>
        <polyline points={comp.join(" ")} fill="none" stroke={palette.aset} strokeWidth={4} strokeLinecap="round" />
        <text x={xFor(prog)} y={yFor(nilai(prog)) - 12} textAnchor="end" fontSize={15} fill={palette.aset} fontWeight={700}>bunga majemuk</text>
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Waktu (tahun)</text>
      </svg>

      <div style={{ opacity: note, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Kuncinya adalah waktu. Makin lama dana berkembang, makin besar jarak antara bunga majemuk dan bunga sederhana.
      </div>
    </AbsoluteFill>
  );
};

export const BungaMajemukVideoDuration = 205;
