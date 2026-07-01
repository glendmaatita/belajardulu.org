import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Tiga sumber Marxisme (menurut Lenin): filsafat Jerman, ekonomi politik Inggris,
// dan sosialisme Prancis, berpadu menjadi pemikiran Marx.
const sources = [
  { label: "Filsafat Jerman", desc: "Dialektika Hegel, materialisme Feuerbach", c: "#60a5fa" },
  { label: "Ekonomi Inggris", desc: "Teori nilai kerja Smith & Ricardo", c: "#fbbf24" },
  { label: "Sosialisme Prancis", desc: "Saint-Simon, Fourier, Owen", c: "#34d399" },
];

export const TigaSumberMarxismeVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(175, 18);
  const mergeGrow = interpolate(frame - 120, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Tiga Sumber Marxisme" sub="Marx memadukan tiga arus pemikiran besar abad ke-19" />
      <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
        {sources.map((s, i) => {
          const grow = interpolate(frame - (30 + i * 22), [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ flex: 1, opacity: grow, transform: `translateY(${(1 - grow) * 22}px)`, background: palette.bgSoft, border: `2px solid ${s.c}`, borderRadius: 16, padding: "20px 14px", textAlign: "center" }}>
              <div style={{ fontSize: 19, fontWeight: 800, color: s.c }}>{s.label}</div>
              <div style={{ fontSize: 13, color: palette.muted, marginTop: 8 }}>{s.desc}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 22, textAlign: "center", fontSize: 34, color: palette.kredit, opacity: mergeGrow }}>&darr;</div>
      <div style={{ textAlign: "center", opacity: mergeGrow }}>
        <div style={{ display: "inline-block", background: palette.accent, color: "#fff", borderRadius: 14, padding: "12px 28px", fontSize: 22, fontWeight: 800 }}>
          MARXISME
        </div>
      </div>
      <div style={{ marginTop: 26, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Marx tidak mencipta dari nol; ia mengkritik dan memadukan warisan filsafat, ekonomi, dan sosialisme.
      </div>
    </AbsoluteFill>
  );
};

export const TigaSumberMarxismeVideoDuration = 210;
