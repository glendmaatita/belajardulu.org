import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Turunan: kemiringan garis singgung sebagai laju perubahan sesaat.
export const TurunanVideo: React.FC = () => {
  const graf = usePop(20);
  const rumus = useFade(140, 16);
  const note = useFade(165, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Turunan: Kemiringan Sesaat" sub="Dari kemiringan garis menuju kemiringan kurva di satu titik" />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 24, transform: `scale(${graf.scale})`, opacity: graf.opacity }}>
        <svg width="340" height="220">
          <line x1="30" y1="190" x2="320" y2="190" stroke={palette.muted} strokeWidth="1" />
          <line x1="30" y1="190" x2="30" y2="20" stroke={palette.muted} strokeWidth="1" />
          <path d="M30,190 Q170,190 300,30" fill="none" stroke={palette.ekuitas} strokeWidth="3" />
          <line x1="120" y1="195" x2="260" y2="55" stroke={palette.aset} strokeWidth="3" strokeDasharray="6 5" />
          <circle cx="190" cy="125" r="7" fill={palette.kewajiban} />
          <text x="200" y="120" fill={palette.text} fontSize="14">garis singgung</text>
        </svg>
      </div>

      <div style={{ opacity: rumus, marginTop: 20, textAlign: "center", fontSize: 21, fontWeight: 800, color: palette.text }}>
        Kemiringan garis singgung di satu titik = turunan di titik itu
      </div>
      <div style={{ opacity: note, marginTop: 14, textAlign: "center", fontSize: 16, color: palette.muted, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
        Dengan mempersempit selang sampai mendekati nol (limit), kemiringan rata-rata berubah menjadi kemiringan sesaat. Itulah turunan.
      </div>
    </AbsoluteFill>
  );
};

export const TurunanVideoDuration = 195;
