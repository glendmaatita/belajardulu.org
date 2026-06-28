import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Stranded asset: aset (mis. cadangan fosil) kehilangan nilai sebelum habis umur ekonomisnya
// karena regulasi iklim, pajak karbon, dan pergeseran permintaan.
export const StrandedAssetVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const padL = 70;
  const padB = 46;

  const xFor = (t: number) => padL + t * (W - padL - 40);
  const yFor = (v: number) => 30 + (1 - v / 100) * (H - padB - 30);

  // nilai buku terencana (datar lalu turun pelan) vs nilai pasar nyata (jatuh tajam)
  const prog = interpolate(frame, [20, 160], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const buku: string[] = [];
  const pasar: string[] = [];
  for (let t = 0; t <= prog + 0.0001; t += 0.02) {
    buku.push(`${xFor(t)},${yFor(90 - 20 * t)}`);
    pasar.push(`${xFor(t)},${yFor(90 - 75 * t * t)}`);
  }
  const note = useFade(168, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Stranded Asset" sub="Aset kehilangan nilai sebelum waktunya karena transisi iklim" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 24 }}>
        <line x1={padL} y1={H - padB} x2={W - 40} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <text x={20} y={28} fontSize={15} fill={palette.muted}>Nilai</text>
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Waktu (regulasi & pajak karbon menguat)</text>

        <polyline points={buku.join(" ")} fill="none" stroke={palette.muted} strokeWidth={4} strokeDasharray="6" />
        <text x={W - 40} y={yFor(70) - 8} textAnchor="end" fontSize={15} fill={palette.muted}>Nilai buku yang diharapkan</text>

        <polyline points={pasar.join(" ")} fill="none" stroke={palette.kredit} strokeWidth={4} strokeLinecap="round" />
        <text x={xFor(prog)} y={yFor(90 - 75 * prog * prog) + 22} textAnchor="end" fontSize={15} fill={palette.kredit}>Nilai nyata (stranded)</text>
      </svg>

      <div style={{ opacity: note, marginTop: 12, fontSize: 18, color: palette.muted }}>
        Contoh: cadangan batu bara, kilang, atau pembangkit fosil yang tidak lagi ekonomis. Selisih nilai inilah kerugian yang harus diantisipasi investor.
      </div>
    </AbsoluteFill>
  );
};

export const StrandedAssetVideoDuration = 200;
