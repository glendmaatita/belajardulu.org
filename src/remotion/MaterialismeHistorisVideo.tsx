import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Basis ekonomi menopang suprastruktur (hukum, politik, budaya, ideologi).
export const MaterialismeHistorisVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(175, 18);
  const baseGrow = interpolate(frame - 30, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const superGrow = interpolate(frame - 80, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const arrowGrow = interpolate(frame - 120, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Basis & Suprastruktur" sub="Cara produksi ekonomi membentuk hukum, politik, dan ideologi" />
      <div style={{ marginTop: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div style={{ opacity: superGrow, width: 560, background: palette.bgSoft, border: `2px solid ${palette.ekuitas}`, borderRadius: 14, padding: "18px 20px", textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: palette.ekuitas }}>Suprastruktur</div>
          <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>Hukum, negara, politik, agama, budaya, ideologi</div>
        </div>
        <div style={{ fontSize: 30, color: palette.kredit, opacity: arrowGrow }}>&uarr;</div>
        <div style={{ opacity: baseGrow, width: 560, background: palette.bgSoft, border: `2px solid ${palette.kewajiban}`, borderRadius: 14, padding: "18px 20px", textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: palette.kewajiban }}>Basis ekonomi</div>
          <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>Cara produksi: tenaga produktif + hubungan produksi</div>
        </div>
      </div>
      <div style={{ marginTop: 38, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Bagi Marx, cara manusia memproduksi kebutuhan materinya membentuk lembaga, gagasan, dan kesadaran masyarakat.
      </div>
    </AbsoluteFill>
  );
};

export const MaterialismeHistorisVideoDuration = 210;
