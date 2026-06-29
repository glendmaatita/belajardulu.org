import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Dollar Cost Averaging: membeli rutin dengan nominal tetap meratakan harga beli
// di pasar yang fluktuatif, mengurangi risiko salah waktu.
export const DCAKriptoVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const padL = 70;
  const padB = 46;

  // Harga bulanan yang fluktuatif (ilustrasi edukatif, satuan juta rupiah per koin).
  const harga = [100, 70, 120, 60, 90, 50, 80, 110];
  const n = harga.length;
  const nominal = 1_000_000; // Rp1 juta tiap pembelian
  const maxV = 130;

  const xFor = (i: number) => padL + (i / (n - 1)) * (W - padL - 50);
  const yFor = (v: number) => 28 + (1 - v / maxV) * (H - padB - 28);

  // Berapa titik beli yang sudah tampil
  const shown = interpolate(frame, [25, 150], [0, n], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const visible = Math.min(n, Math.floor(shown) + 1);

  // Garis harga progresif
  const line: string[] = [];
  for (let i = 0; i < visible; i++) line.push(`${xFor(i)},${yFor(harga[i])}`);

  // Hitung rata-rata harga beli (total rupiah / total koin) untuk titik yang sudah dibeli
  let totalKoin = 0;
  for (let i = 0; i < visible; i++) totalKoin += nominal / (harga[i] * 1_000_000);
  const totalRupiah = visible * nominal;
  const avgHarga = totalKoin > 0 ? totalRupiah / totalKoin / 1_000_000 : 0; // dalam juta

  const note = useFade(165, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Dollar Cost Averaging (DCA)" sub="Beli rutin Rp1 juta tiap bulan, berapa pun harganya, untuk meratakan harga beli" />

      <div style={{ display: "flex", gap: 50, marginTop: 12 }}>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Pembelian ke</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: palette.text }}>{visible}</div>
        </div>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Total dibelanjakan</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: palette.ekuitas }}>Rp{visible} juta</div>
        </div>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Harga rata-rata beli</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: palette.aset }}>Rp{avgHarga.toFixed(0)} juta</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 8 }}>
        <line x1={padL} y1={H - padB} x2={W - 50} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />

        {/* Garis harga rata-rata */}
        <line
          x1={padL}
          y1={yFor(avgHarga)}
          x2={W - 50}
          y2={yFor(avgHarga)}
          stroke={palette.aset}
          strokeWidth={2}
          strokeDasharray="6"
        />
        <text x={W - 50} y={yFor(avgHarga) - 8} textAnchor="end" fontSize={14} fill={palette.aset}>
          harga rata-rata beli
        </text>

        {/* Garis harga pasar */}
        <polyline points={line.join(" ")} fill="none" stroke={palette.muted} strokeWidth={3} strokeLinecap="round" />

        {/* Titik pembelian */}
        {harga.slice(0, visible).map((v, i) => (
          <g key={i}>
            <circle cx={xFor(i)} cy={yFor(v)} r={7} fill={palette.kredit} />
            <text x={xFor(i)} y={H - 16} textAnchor="middle" fontSize={13} fill={palette.muted}>
              B{i + 1}
            </text>
          </g>
        ))}
        <text x={(W + padL) / 2} y={H - 2} textAnchor="middle" fontSize={14} fill={palette.muted}>
          Waktu (bulan)
        </text>
      </svg>

      <div style={{ opacity: note, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Saat harga turun, nominal tetap membeli lebih banyak koin. Hasilnya harga rata-rata beli ikut tertekan, jadi Anda tidak perlu menebak waktu terbaik.
      </div>
    </AbsoluteFill>
  );
};

export const DCAKriptoVideoDuration = 200;
