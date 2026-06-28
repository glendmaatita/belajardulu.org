import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Perbandingan sisi segitiga siku-siku selalu tetap untuk sudut sama.
const RASIO = [
  { nama: "sin", arti: "sisi depan ÷ sisi miring", warna: palette.aset },
  { nama: "cos", arti: "sisi samping ÷ sisi miring", warna: palette.ekuitas },
  { nama: "tan", arti: "sisi depan ÷ sisi samping", warna: palette.kewajiban },
];

export const TrigonometriVideo: React.FC = () => {
  const tri = usePop(20);
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Lahirnya Sin, Cos, Tan" sub="Pada sudut yang sama, perbandingan sisi selalu tetap" />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 26, transform: `scale(${tri.scale})`, opacity: tri.opacity }}>
        <svg width="300" height="170">
          <polygon points="20,150 280,150 280,20" fill="rgba(96,165,250,0.15)" stroke={palette.ekuitas} strokeWidth="3" />
          <text x="140" y="168" fill={palette.muted} fontSize="15" textAnchor="middle">samping</text>
          <text x="292" y="90" fill={palette.muted} fontSize="15" textAnchor="middle" transform="rotate(90 292 90)">depan</text>
          <text x="135" y="78" fill={palette.muted} fontSize="15" textAnchor="middle" transform="rotate(-26 135 78)">miring</text>
        </svg>
      </div>

      <div style={{ display: "flex", gap: 14, marginTop: 24, maxWidth: 860, marginLeft: "auto", marginRight: "auto" }}>
        {RASIO.map((r, i) => {
          const { scale, opacity } = usePop(70 + i * 22);
          return (
            <div key={i} style={{ flex: 1, transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 14, padding: "16px 14px", borderTop: `6px solid ${r.warna}`, textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: r.warna }}>{r.nama}</div>
              <div style={{ fontSize: 14, color: palette.muted, marginTop: 8, lineHeight: 1.4 }}>{r.arti}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 24, fontSize: 17, color: palette.muted, textAlign: "center" }}>
        Karena segitiga sebangun punya perbandingan sisi yang sama, nilai sin, cos, tan hanya bergantung pada sudutnya.
      </div>
    </AbsoluteFill>
  );
};

export const TrigonometriVideoDuration = 195;
