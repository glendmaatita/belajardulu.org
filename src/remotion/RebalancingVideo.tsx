import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Rebalancing: bobot portofolio bergeser karena pasar, lalu dikembalikan ke target (jual yang naik, beli yang turun).
export const RebalancingVideo: React.FC = () => {
  const frame = useCurrentFrame();
  // fase: target 60/40 -> drift 72/28 -> rebalance 60/40
  const drift = interpolate(frame, [30, 90], [60, 72], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const reb = interpolate(frame, [120, 165], [72, 60], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const saham = frame < 120 ? drift : reb;
  const obligasi = 100 - saham;

  const fase = frame < 90 ? "Target awal 60/40" : frame < 120 ? "Saham naik: bobot bergeser ke 72/28" : "Rebalancing kembali ke 60/40";
  const note = useFade(168, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Rebalancing Portofolio" sub="Mengembalikan bobot ke target: jual yang naik, beli yang turun" />

      <div style={{ marginTop: 50, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
        <div style={{ display: "flex", height: 70, borderRadius: 16, overflow: "hidden", boxShadow: "0 14px 40px rgba(0,0,0,0.3)" }}>
          <div style={{ width: `${saham}%`, background: palette.aset, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 800, color: "#06121f" }}>
            Saham {saham.toFixed(0)}%
          </div>
          <div style={{ width: `${obligasi}%`, background: palette.ekuitas, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 800, color: "#06121f" }}>
            Obligasi {obligasi.toFixed(0)}%
          </div>
        </div>

        {/* garis target */}
        <div style={{ position: "relative", height: 24 }}>
          <div style={{ position: "absolute", left: "60%", top: 0, bottom: 0, width: 2, background: palette.kredit }} />
          <div style={{ position: "absolute", left: "60%", marginLeft: 6, fontSize: 14, color: palette.kredit }}>garis target 60%</div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 30, fontSize: 24, fontWeight: 800, color: palette.text }}>{fase}</div>

      <div style={{ opacity: note, marginTop: 22, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Rebalancing menjaga tingkat risiko sesuai rencana dan secara disiplin memaksa kita menjual saat tinggi dan membeli saat rendah.
      </div>
    </AbsoluteFill>
  );
};

export const RebalancingVideoDuration = 195;
