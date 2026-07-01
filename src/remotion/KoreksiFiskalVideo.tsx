import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

export const KoreksiFiskalVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(170, 18);
  const showPlus = interpolate(frame - 60, [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const showMinus = interpolate(frame - 90, [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Dari Laba Komersial ke Laba Fiskal" sub="Koreksi fiskal menjembatani laporan keuangan dan SPT" />
      <div style={{ marginTop: 50, display: "flex", alignItems: "center", justifyContent: "center", gap: 22, flexWrap: "wrap" }}>
        <Chip label="Laba komersial" value="Rp5,0 M" bg={palette.ekuitas} delay={20} />
        <div style={{ opacity: showPlus, textAlign: "center" }}>
          <div style={{ fontSize: 34, fontWeight: 900, color: palette.kewajiban }}>+</div>
          <div style={{ fontSize: 14, color: palette.muted }}>koreksi positif</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: palette.kewajiban }}>Rp0,6 M</div>
        </div>
        <div style={{ opacity: showMinus, textAlign: "center" }}>
          <div style={{ fontSize: 34, fontWeight: 900, color: palette.aset }}>-</div>
          <div style={{ fontSize: 14, color: palette.muted }}>koreksi negatif</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: palette.aset }}>Rp0,3 M</div>
        </div>
        <Arrow delay={110} />
        <Chip label="Laba fiskal (PKP)" value="Rp5,3 M" bg={palette.accent} fg="#fff" delay={120} />
      </div>
      <div style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 22 }}>
        <Chip label="PKP x 22%" value="Rp1,166 M" bg={palette.kredit} fg="#fff" delay={150} />
        <div style={{ fontSize: 16, color: palette.muted, alignSelf: "center" }}>PPh Badan terutang</div>
      </div>
      <div style={{ marginTop: 36, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Biaya yang tidak boleh dikurangkan menambah PKP, penghasilan yang sudah kena pajak final menguranginya.
      </div>
    </AbsoluteFill>
  );
};

export const KoreksiFiskalVideoDuration = 210;
