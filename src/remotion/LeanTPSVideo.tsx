import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

// Lean / Toyota Production System: tujuh pemborosan (muda) yang harus dihapus.
const WASTE = [
  { ikon: "📦", nama: "Overproduction" },
  { ikon: "⏳", nama: "Waiting" },
  { ikon: "🚚", nama: "Transport" },
  { ikon: "🔁", nama: "Over-processing" },
  { ikon: "🏬", nama: "Inventory" },
  { ikon: "🚶", nama: "Motion" },
  { ikon: "❌", nama: "Defects" },
];

export const LeanTPSVideo: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Lean & Toyota Production System" sub="Hapus tujuh pemborosan (muda) agar hanya nilai yang mengalir" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 56 }}>
        {WASTE.map((w, i) => {
          const { scale, opacity } = usePop(20 + i * 16);
          const fade = interpolate(frame - (150 + i * 6), [0, 20], [1, 0.25], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity: opacity * fade, background: palette.bgSoft, border: "2px solid #f87171", borderRadius: 14, padding: "16px 20px", width: 200, textAlign: "center", boxShadow: "0 10px 28px rgba(0,0,0,0.3)" }}>
              <div style={{ fontSize: 32 }}>{w.ikon}</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: palette.text, marginTop: 6 }}>{w.nama}</div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 40, fontSize: 19, color: "#34d399", fontWeight: 800, opacity: interpolate(frame, [160, 200], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        Setelah pemborosan memudar, yang tersisa: aliran nilai yang mulus ke pelanggan.
      </div>
    </AbsoluteFill>
  );
};

export const LeanTPSVideoDuration = 240;
