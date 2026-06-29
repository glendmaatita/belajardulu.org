import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Gelombang dan besarannya: panjang gelombang, amplitudo, cepat rambat.
export const GelombangFisika: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(150, 18);
  const pts: string[] = [];
  for (let x = 0; x <= 600; x += 6) {
    const y = 90 + 50 * Math.sin((x / 70) - frame / 8);
    pts.push(`${x + 40},${y}`);
  }
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Gelombang Berjalan" sub="Panjang gelombang, amplitudo, dan cepat rambat" />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <svg width="680" height="190">
          <line x1="40" y1="90" x2="640" y2="90" stroke={palette.muted} strokeWidth="1" strokeDasharray="4 4" />
          <polyline points={pts.join(" ")} fill="none" stroke={palette.aset} strokeWidth="3" />
          <line x1="40" y1="40" x2="40" y2="140" stroke={palette.kewajiban} strokeWidth="2" />
          <text x="50" y="36" fill={palette.kewajiban} fontSize="14">amplitudo</text>
        </svg>
      </div>

      <div style={{ opacity: note, marginTop: 16, fontSize: 18, color: palette.muted, textAlign: "center", maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
        Satu panjang gelombang (lambda) adalah jarak satu pola penuh. Cepat rambat v = frekuensi (f) kali panjang gelombang (lambda).
      </div>
    </AbsoluteFill>
  );
};

export const GelombangFisikaDuration = 200;
