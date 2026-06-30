import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Kurva Lorenz & koefisien Gini: jarak dari garis kesetaraan sempurna menunjukkan ketimpangan.
export const KetimpanganGiniVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const S = 300;
  const pad = 40;
  const draw = interpolate(frame, [20, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  // Lorenz curve points (timpang): kumulatif populasi -> kumulatif pendapatan
  const lor = [[0,0],[0.2,0.05],[0.4,0.13],[0.6,0.27],[0.8,0.5],[1,1]];
  const pts = lor.slice(0, Math.max(2, Math.ceil(lor.length * draw)))
    .map(([x,y]) => `${pad + x*(S)},${pad + S - y*S}`).join(" ");
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Kurva Lorenz & Koefisien Gini" sub="Mengukur seberapa timpang pendapatan dibagi di masyarakat" />

      <div style={{ display: "flex", gap: 40, marginTop: 30, alignItems: "center" }}>
        <svg width={S + pad * 2} height={S + pad * 2}>
          <line x1={pad} y1={pad+S} x2={pad+S} y2={pad+S} stroke={palette.muted} strokeWidth={1.5} />
          <line x1={pad} y1={pad} x2={pad} y2={pad+S} stroke={palette.muted} strokeWidth={1.5} />
          <line x1={pad} y1={pad+S} x2={pad+S} y2={pad} stroke="#34d399" strokeWidth={2.5} strokeDasharray="7 5" />
          <text x={pad+S-80} y={pad+30} fill="#34d399" fontSize={13}>kesetaraan</text>
          <polyline points={pts} fill="none" stroke="#f87171" strokeWidth={3.5} />
          {frame > 95 && <text x={pad+S*0.55} y={pad+S*0.78} fill="#fbbf24" fontSize={15} fontWeight={700} opacity={useFade(95)}>celah = Gini</text>}
          <text x={pad+S/2} y={pad+S+30} fill={palette.muted} fontSize={13} textAnchor="middle">% populasi (termiskin ke terkaya)</text>
        </svg>
        <div style={{ fontSize: 17, color: palette.muted, maxWidth: 360, lineHeight: 1.6 }}>
          Garis hijau = setiap orang dapat bagian sama. Garis merah nyata melengkung jauh di bawahnya. Makin lebar celahnya, makin besar <span style={{ color: palette.text, fontWeight: 700 }}>koefisien Gini</span> (0 = sangat merata, 1 = satu orang menguasai semua).
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const KetimpanganGiniVideoDuration = 200;
