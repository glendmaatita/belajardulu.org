import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Digital customs: INSW menyatukan banyak instansi dalam satu portal (single window).
const INSTANSI = ["Bea Cukai", "Karantina", "Perizinan", "Kementerian"];

export const DigitalCustomsVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const hub = usePop(60);
  const note = useFade(140, 18);

  const cx = 500;
  const cy = 200;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Digital Customs: Satu Pintu (INSW)" sub="Banyak instansi terhubung dalam satu portal nasional" />

      <svg viewBox="0 0 1000 360" style={{ width: "100%", marginTop: 10 }}>
        {INSTANSI.map((nama, i) => {
          const angle = (Math.PI / (INSTANSI.length - 1)) * i + Math.PI; // setengah lingkaran atas
          const x = cx + Math.cos(angle) * 320;
          const y = cy + Math.sin(angle) * 120;
          const o = frame > 20 + i * 16 ? 1 : 0;
          return (
            <g key={i} opacity={o}>
              <line x1={x} y1={y} x2={cx} y2={cy} stroke="rgba(255,255,255,0.18)" strokeWidth={2} />
              <rect x={x - 80} y={y - 22} width={160} height={44} rx={10} fill={palette.bgSoft} />
              <text x={x} y={y + 5} textAnchor="middle" fontSize={17} fill={palette.text} fontWeight={700}>{nama}</text>
            </g>
          );
        })}
        {/* hub INSW */}
        <g transform={`translate(${cx},${cy}) scale(${hub.scale})`} opacity={hub.opacity}>
          <circle r={60} fill={palette.accent} />
          <text y={-2} textAnchor="middle" fontSize={22} fontWeight={900} fill="#fff">INSW</text>
          <text y={22} textAnchor="middle" fontSize={13} fill="#e2e8f0">single window</text>
        </g>
      </svg>

      <div style={{ opacity: note, marginTop: 6, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Lewat CEISA dan INSW, pelaku usaha mengajukan sekali dan datanya dibagikan antar instansi. Proses jadi lebih cepat, transparan, dan minim kertas.
      </div>
    </AbsoluteFill>
  );
};

export const DigitalCustomsVideoDuration = 185;
