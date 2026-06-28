import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Lingkaran satuan memperluas trigonometri ke semua sudut.
export const LingkaranSatuanVideo: React.FC = () => {
  const circ = usePop(20);
  const note = useFade(150, 18);
  const titik = usePop(80);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Lingkaran Satuan" sub="Titik pada lingkaran berjari-jari 1 memberi cos dan sin" />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 24, transform: `scale(${circ.scale})`, opacity: circ.opacity }}>
        <svg width="280" height="280">
          <circle cx="140" cy="140" r="110" fill="none" stroke={palette.ekuitas} strokeWidth="3" />
          <line x1="20" y1="140" x2="260" y2="140" stroke={palette.muted} strokeWidth="1" />
          <line x1="140" y1="20" x2="140" y2="260" stroke={palette.muted} strokeWidth="1" />
          <line x1="140" y1="140" x2="218" y2="62" stroke={palette.aset} strokeWidth="3" style={{ opacity: titik.opacity }} />
          <circle cx="218" cy="62" r="7" fill={palette.kewajiban} style={{ opacity: titik.opacity }} />
          <text x="226" y="58" fill={palette.text} fontSize="14">(cos, sin)</text>
        </svg>
      </div>

      <div style={{ opacity: note, marginTop: 18, fontSize: 18, color: palette.muted, textAlign: "center", maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
        Koordinat x titik adalah cos sudut, koordinat y adalah sin sudut. Dengan ini trigonometri berlaku untuk sudut berapa pun, bukan hanya di dalam segitiga.
      </div>
    </AbsoluteFill>
  );
};

export const LingkaranSatuanVideoDuration = 185;
