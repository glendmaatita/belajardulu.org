import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

export const ThinCapVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(175, 18);
  const ekGrow = interpolate(frame - 30, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const okGrow = interpolate(frame - 70, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const overGrow = interpolate(frame - 110, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Thin Capitalization: Batas DER 4:1" sub="Hanya bunga atas utang sampai 4 kali ekuitas yang boleh dibebankan" />
      <div style={{ marginTop: 50, display: "flex", gap: 50, alignItems: "flex-end", justifyContent: "center", height: 300 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ width: 120, height: 60 * ekGrow, background: palette.ekuitas, borderRadius: "8px 8px 0 0" }} />
          <div style={{ marginTop: 10, fontSize: 16, color: palette.ekuitas, fontWeight: 700, opacity: ekGrow }}>Ekuitas Rp1 M</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ width: 120, height: 80 * overGrow, background: "#ef4444", borderRadius: "8px 8px 0 0", opacity: 0.85 }} />
          <div style={{ width: 120, height: 240 * okGrow, background: palette.kewajiban }} />
          <div style={{ marginTop: 10, fontSize: 16, color: palette.kewajiban, fontWeight: 700, opacity: okGrow }}>Utang Rp5 M</div>
          <div style={{ fontSize: 13, color: "#ef4444", opacity: overGrow }}>Rp1 M kelebihan: bunganya dikoreksi</div>
        </div>
      </div>
      <div style={{ marginTop: 28, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Utang sampai Rp4 M (4 x ekuitas) bunganya boleh dikurangkan. Bunga atas Rp1 M kelebihan dikoreksi positif.
      </div>
    </AbsoluteFill>
  );
};

export const ThinCapVideoDuration = 210;
