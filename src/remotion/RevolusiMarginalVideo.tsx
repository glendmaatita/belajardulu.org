import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Paradoks nilai air-berlian terpecahkan oleh utilitas marginal: nilai
// ditentukan kegunaan unit terakhir (marginal), bukan total kegunaan.
export const RevolusiMarginalVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(185, 18);
  const grow = (d: number) => interpolate(frame - d, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Revolusi Marginal: Paradoks Air & Berlian" sub="Nilai lahir dari kegunaan unit terakhir, bukan total" />
      <div style={{ marginTop: 46, display: "flex", justifyContent: "center", gap: 44 }}>
        <div style={{ opacity: grow(30), textAlign: "center" }}>
          <div style={{ fontSize: 44 }}>💧</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: palette.ekuitas }}>Air</div>
          <div style={{ fontSize: 13, color: palette.muted, marginTop: 4 }}>Sangat berguna, tetapi melimpah</div>
          <div style={{ fontSize: 15, color: palette.aset, marginTop: 6 }}>Utilitas marginal rendah &rarr; murah</div>
        </div>
        <div style={{ opacity: grow(70), textAlign: "center" }}>
          <div style={{ fontSize: 44 }}>💎</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: palette.kredit }}>Berlian</div>
          <div style={{ fontSize: 13, color: palette.muted, marginTop: 4 }}>Kurang vital, tetapi langka</div>
          <div style={{ fontSize: 15, color: palette.kewajiban, marginTop: 6 }}>Utilitas marginal tinggi &rarr; mahal</div>
        </div>
      </div>
      <div style={{ marginTop: 40, textAlign: "center", opacity: grow(130) }}>
        <span style={{ fontSize: 17, color: palette.accent, fontWeight: 700 }}>
          Jevons, Menger, dan Walras (sekitar 1871) memecahkan paradoks ini secara terpisah
        </span>
      </div>
      <div style={{ marginTop: 30, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Nilai bukan dari kerja atau total manfaat, melainkan dari kegunaan tambahan unit terakhir yang dikonsumsi.
      </div>
    </AbsoluteFill>
  );
};

export const RevolusiMarginalVideoDuration = 215;
