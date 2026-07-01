import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

export const TaxTreatyVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(170, 18);
  const fullGrow = interpolate(frame - 40, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const treatyGrow = interpolate(frame - 90, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Tax Treaty Menekan PPh 26" sub="Tarif 20% bisa turun lewat P3B dengan Surat Keterangan Domisili" />
      <div style={{ marginTop: 50, display: "flex", gap: 60, alignItems: "flex-end", justifyContent: "center", height: 280 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ fontSize: 30, fontWeight: 800, color: "#fb7185", opacity: fullGrow, marginBottom: 8 }}>20%</div>
          <div style={{ width: 130, height: 220 * fullGrow, background: "#fb7185", borderRadius: "10px 10px 0 0" }} />
          <div style={{ marginTop: 10, fontSize: 15, color: palette.muted, opacity: fullGrow }}>Tanpa treaty</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ fontSize: 30, fontWeight: 800, color: palette.aset, opacity: treatyGrow, marginBottom: 8 }}>10%</div>
          <div style={{ width: 130, height: 110 * treatyGrow, background: palette.aset, borderRadius: "10px 10px 0 0" }} />
          <div style={{ marginTop: 10, fontSize: 15, color: palette.muted, opacity: treatyGrow }}>Dengan treaty + DGT</div>
        </div>
      </div>
      <div style={{ marginTop: 28, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Atas royalti Rp1 M ke luar negeri, treaty menghemat pemotongan dari Rp200 jt menjadi Rp100 jt.
      </div>
    </AbsoluteFill>
  );
};

export const TaxTreatyVideoDuration = 200;
