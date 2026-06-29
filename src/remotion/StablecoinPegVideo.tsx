import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Stablecoin menjaga harga sekitar 1 dolar lewat cadangan dan arbitrase.
const Mekanisme: React.FC<{
  judul: string;
  detail: string;
  warna: string;
  delay: number;
  x: number;
}> = ({ judul, detail, warna, delay, x }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        position: "absolute",
        top: 430,
        left: x,
        width: 520,
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        border: `2px solid ${warna}`,
        borderRadius: 18,
        padding: "18px 24px",
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 800, color: warna }}>{judul}</div>
      <div style={{ fontSize: 18, color: palette.muted, marginTop: 8, lineHeight: 1.4 }}>{detail}</div>
    </div>
  );
};

export const StablecoinPegVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1180;
  const H = 250;
  const padL = 60;
  const peg = 1.0;

  // Harga menyimpang naik lalu kembali ke peg lewat arbitrase.
  const harga = (t: number) =>
    peg + 0.08 * Math.sin(t * 0.5) * Math.exp(-t * 0.18);

  const tMax = 24;
  const prog = interpolate(frame, [20, 150], [0, tMax], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const xFor = (t: number) => padL + (t / tMax) * (W - padL - 40);
  const yFor = (v: number) => 30 + (1 - (v - 0.85) / 0.3) * (H - 60);

  const pts: string[] = [];
  for (let t = 0; t <= prog + 0.0001; t += 0.3) {
    pts.push(`${xFor(t)},${yFor(harga(t))}`);
  }
  const hargaKini = harga(prog);
  const note = useFade(160, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "36px 50px" }}>
      <Title text="Stablecoin: Menjaga Harga di Sekitar 1 Dolar" sub="Cadangan dan arbitrase menarik harga kembali ke peg" />

      <div style={{ display: "flex", gap: 50, marginTop: 12 }}>
        <div>
          <div style={{ fontSize: 15, color: palette.muted }}>Harga saat ini</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: palette.aset }}>${hargaKini.toFixed(3)}</div>
        </div>
        <div>
          <div style={{ fontSize: 15, color: palette.muted }}>Target peg</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: palette.text }}>$1,000</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 6 }}>
        <line
          x1={padL}
          y1={yFor(peg)}
          x2={W - 40}
          y2={yFor(peg)}
          stroke={palette.muted}
          strokeWidth={2}
          strokeDasharray="6"
        />
        <text x={W - 40} y={yFor(peg) - 8} textAnchor="end" fontSize={14} fill={palette.muted}>
          peg $1,00
        </text>
        <polyline points={pts.join(" ")} fill="none" stroke={palette.kewajiban} strokeWidth={4} strokeLinecap="round" />
        <text x={(W + padL) / 2} y={H - 6} textAnchor="middle" fontSize={14} fill={palette.muted}>
          Waktu
        </text>
      </svg>

      <Mekanisme
        judul="Fiat-backed"
        warna={palette.ekuitas}
        x={50}
        delay={30}
        detail="Tiap 1 token didukung 1 dolar cadangan di bank. Bisa ditebus 1:1 kapan saja."
      />
      <Mekanisme
        judul="Crypto-backed"
        warna={palette.kredit}
        x={610}
        delay={50}
        detail="Dijamin aset kripto yang nilainya melebihi token (over-collateralized) sebagai bantalan gejolak harga."
      />

      <div
        style={{
          position: "absolute",
          bottom: 26,
          left: 50,
          right: 50,
          opacity: note,
          fontSize: 18,
          color: palette.muted,
        }}
      >
        Jika harga di atas $1, orang mencetak token baru dan menjualnya hingga harga turun. Jika di bawah $1, orang membeli murah lalu menebusnya senilai $1. Arbitrase inilah yang menjaga peg.
      </div>
    </AbsoluteFill>
  );
};

export const StablecoinPegVideoDuration = 210;
