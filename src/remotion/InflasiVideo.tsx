import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Inflasi: harga naik dari waktu ke waktu, daya beli uang menurun.
export const InflasiVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 300;
  const padL = 70;
  const padB = 50;
  const tahun = [2019, 2020, 2021, 2022, 2023, 2024];
  const harga = [100, 102, 104, 110, 114, 118]; // indeks harga
  const xFor = (i: number) => padL + (i / (tahun.length - 1)) * (W - padL - 40);
  const yFor = (v: number) => 30 + (1 - (v - 95) / 30) * (H - padB - 30);

  const draw = interpolate(frame, [20, 120], [0, tahun.length - 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const shown = Math.max(1, Math.round(draw) + 1);
  const pts = harga.slice(0, shown).map((v, i) => `${xFor(i)},${yFor(v)}`).join(" ");
  // daya beli Rp100.000 menurun: 100/indeks
  const idxNow = harga[Math.min(shown - 1, harga.length - 1)];
  const dayaBeli = Math.round((100 / idxNow) * 100000);
  const note = useFade(140, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Inflasi: Harga Naik, Daya Beli Turun" sub="Uang yang sama membeli lebih sedikit barang seiring waktu" />

      <div style={{ display: "flex", gap: 50, marginTop: 6 }}>
        <div>
          <div style={{ fontSize: 15, color: palette.muted }}>Indeks harga</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: palette.kredit }}>{idxNow}</div>
        </div>
        <div>
          <div style={{ fontSize: 15, color: palette.muted }}>Daya beli Rp100.000 (vs 2019)</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: palette.aset }}>Rp{dayaBeli.toLocaleString("id-ID")}</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 4 }}>
        <line x1={padL} y1={H - padB} x2={W - 40} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={30} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        {tahun.map((t, i) => (
          <text key={i} x={xFor(i)} y={H - padB + 22} textAnchor="middle" fontSize={13} fill={palette.muted}>{t}</text>
        ))}
        <polyline points={pts} fill="none" stroke={palette.kredit} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div style={{ opacity: note, marginTop: 6, fontSize: 18, color: palette.muted }}>
        Inflasi diukur dari kenaikan Indeks Harga Konsumen (IHK). Inflasi rendah & stabil itu sehat; terlalu tinggi menggerus tabungan dan daya beli masyarakat.
      </div>
    </AbsoluteFill>
  );
};

export const InflasiVideoDuration = 175;
