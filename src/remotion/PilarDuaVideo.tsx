import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

export const PilarDuaVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(175, 18);
  const baseGrow = interpolate(frame - 40, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const topGrow = interpolate(frame - 95, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Pilar Dua: Pajak Minimum Global 15%" sub="ETR di bawah 15% memicu top-up tax bagi grup multinasional besar" />
      <div style={{ marginTop: 50, display: "flex", alignItems: "flex-end", justifyContent: "center", height: 300 }}>
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ width: 200, height: 60 * topGrow, background: "#fbbf24", borderRadius: "10px 10px 0 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#06121f", fontWeight: 800, fontSize: 15, opacity: topGrow }}>Top-up +3%</span>
          </div>
          <div style={{ width: 200, height: 240 * baseGrow, background: palette.ekuitas, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#06121f", fontWeight: 800, fontSize: 18, opacity: baseGrow }}>ETR 12%</span>
          </div>
        </div>
        <div style={{ marginLeft: 30, height: 300, borderLeft: `2px dashed ${palette.muted}`, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 10, fontSize: 16, color: palette.aset, fontWeight: 700, opacity: topGrow }}>Garis 15%</div>
        </div>
      </div>
      <div style={{ marginTop: 28, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Insentif yang menekan ETR terlalu jauh kini bisa percuma: selisih ke 15% ditarik sebagai pajak tambahan.
      </div>
    </AbsoluteFill>
  );
};

export const PilarDuaVideoDuration = 210;
