import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Pembiasan: cahaya membelok saat pindah medium.
export const PembiasanCahaya: React.FC = () => {
  const ray = usePop(20);
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Pembiasan Cahaya" sub="Cahaya membelok saat berpindah medium" />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 26, transform: `scale(${ray.scale})`, opacity: ray.opacity }}>
        <svg width="420" height="280">
          <rect x="0" y="0" width="420" height="140" fill="rgba(96,165,250,0.07)" />
          <rect x="0" y="140" width="420" height="140" fill="rgba(96,165,250,0.22)" />
          <line x1="0" y1="140" x2="420" y2="140" stroke={palette.muted} strokeWidth="1.5" />
          <line x1="210" y1="0" x2="210" y2="280" stroke={palette.muted} strokeWidth="1" strokeDasharray="5 5" />
          <line x1="70" y1="30" x2="210" y2="140" stroke={palette.kewajiban} strokeWidth="3" />
          <line x1="210" y1="140" x2="300" y2="270" stroke={palette.aset} strokeWidth="3" />
          <text x="90" y="80" fill={palette.text} fontSize="14">udara (renggang)</text>
          <text x="250" y="210" fill={palette.text} fontSize="14">air (rapat)</text>
        </svg>
      </div>

      <div style={{ opacity: note, marginTop: 16, fontSize: 18, color: palette.muted, textAlign: "center", maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
        Saat masuk medium lebih rapat, cahaya melambat dan membelok mendekati garis normal. Itulah mengapa sedotan terlihat patah di dalam gelas.
      </div>
    </AbsoluteFill>
  );
};

export const PembiasanCahayaDuration = 190;
