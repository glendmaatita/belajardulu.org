import { AbsoluteFill, useCurrentFrame, interpolate, random } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Pasar efisien: harga sudah mencerminkan informasi; pergerakan jangka pendek menyerupai random walk.
export const EfisiensiPasar: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 300;
  const padL = 50;
  const padB = 40;
  const n = 60;
  const xFor = (i: number) => padL + (i / (n - 1)) * (W - padL - 40);
  // random walk deterministik via seed tetap (random() dari remotion, bukan Math.random)
  let v = 50;
  const series: number[] = [];
  for (let i = 0; i < n; i++) {
    v += (random(`rw-${i}`) - 0.5) * 10;
    series.push(v);
  }
  const min = Math.min(...series);
  const max = Math.max(...series);
  const yFor = (val: number) => 30 + (1 - (val - min) / (max - min || 1)) * (H - padB - 30);

  const draw = interpolate(frame, [10, 130], [0, n], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const shown = Math.max(1, Math.round(draw));
  const pts = series.slice(0, shown).map((val, i) => `${xFor(i)},${yFor(val)}`).join(" ");
  const note = useFade(140, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Hipotesis Pasar Efisien" sub="Harga mencerminkan informasi, jadi sulit konsisten mengalahkan pasar" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 24 }}>
        <line x1={padL} y1={H - padB} x2={W - 40} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <polyline points={pts} fill="none" stroke={palette.ekuitas} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        <text x={(W + padL) / 2} y={H - 8} textAnchor="middle" fontSize={15} fill={palette.muted}>Waktu (pergerakan tak terduga, seperti random walk)</text>
      </svg>

      <div style={{ opacity: note, marginTop: 10, fontSize: 18, color: palette.muted }}>
        Karena berita baru datang acak dan langsung tercermin di harga, gerak jangka pendek sulit ditebak. Inilah alasan banyak investor memilih produk pasif berbiaya rendah.
      </div>
    </AbsoluteFill>
  );
};

export const EfisiensiPasarDuration = 175;
