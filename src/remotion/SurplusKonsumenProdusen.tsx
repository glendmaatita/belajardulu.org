import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Surplus konsumen (di atas harga, bawah kurva permintaan) & surplus produsen (di bawah harga, atas kurva penawaran).
export const SurplusKonsumenProdusen: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 340;
  const padL = 70;
  const padB = 50;
  const x0 = padL;
  const x1 = W - 60;
  const yTop = 30;
  const yBot = H - padB;
  // demand turun, supply naik, potong di tengah
  const eqX = (x0 + x1) / 2;
  const eqY = (yTop + yBot) / 2;
  const showCS = frame > 40;
  const showPS = frame > 90;
  const note = useFade(140, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Surplus Konsumen & Produsen" sub="Keuntungan bersih dari adanya pasar bagi pembeli dan penjual" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 20 }}>
        {/* sumbu */}
        <line x1={padL} y1={yBot} x2={x1} y2={yBot} stroke="rgba(255,255,255,0.25)" strokeWidth={2} />
        <line x1={padL} y1={yTop} x2={padL} y2={yBot} stroke="rgba(255,255,255,0.25)" strokeWidth={2} />
        {/* surplus konsumen: segitiga atas (D dari kiri-atas ke eq, garis harga) */}
        {showCS && <polygon points={`${x0},${yTop} ${eqX},${eqY} ${x0},${eqY}`} fill={palette.aset} opacity={0.35} />}
        {/* surplus produsen: segitiga bawah */}
        {showPS && <polygon points={`${x0},${yBot} ${eqX},${eqY} ${x0},${eqY}`} fill={palette.kewajiban} opacity={0.35} />}
        {/* kurva demand & supply */}
        <line x1={x0} y1={yTop} x2={x1} y2={yBot} stroke={palette.ekuitas} strokeWidth={4} />
        <text x={x1} y={yBot - 6} textAnchor="end" fontSize={15} fill={palette.ekuitas}>Permintaan</text>
        <line x1={x0} y1={yBot} x2={x1} y2={yTop} stroke={palette.aset} strokeWidth={4} />
        <text x={x1} y={yTop + 16} textAnchor="end" fontSize={15} fill={palette.aset}>Penawaran</text>
        {/* garis harga keseimbangan */}
        <line x1={x0} y1={eqY} x2={eqX} y2={eqY} stroke="rgba(255,255,255,0.4)" strokeDasharray="5" />
        <circle cx={eqX} cy={eqY} r={6} fill={palette.kredit} />
        {showCS && <text x={x0 + 60} y={eqY - 40} fontSize={15} fill={palette.aset} fontWeight={700}>Surplus konsumen</text>}
        {showPS && <text x={x0 + 60} y={eqY + 50} fontSize={15} fill={palette.kewajiban} fontWeight={700}>Surplus produsen</text>}
      </svg>

      <div style={{ opacity: note, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Surplus konsumen: selisih antara harga yang rela dibayar dan harga sebenarnya. Surplus produsen: selisih antara harga jual dan biaya minimum. Total keduanya adalah kesejahteraan yang diciptakan pasar.
      </div>
    </AbsoluteFill>
  );
};

export const SurplusKonsumenProdusenDuration = 185;
