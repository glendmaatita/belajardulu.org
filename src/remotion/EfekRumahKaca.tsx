import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

const Ray: React.FC<{ x: number; delay: number; trapped?: boolean }> = ({ x, delay, trapped }) => {
  const frame = useCurrentFrame();
  const t = ((frame - delay) % 90) / 90;
  if (frame < delay) return null;
  // incoming ray goes down; if trapped, it bounces back up after mid
  const down = interpolate(t, [0, 0.5], [0, 240], { extrapolateRight: "clamp" });
  const back = trapped ? interpolate(t, [0.5, 1], [0, -120], { extrapolateLeft: "clamp" }) : 0;
  const y = 120 + down + back;
  const opacity = interpolate(t, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 4,
        height: 30,
        borderRadius: 4,
        background: trapped ? palette.kredit : "#fde68a",
        opacity,
        transform: trapped && t > 0.5 ? "rotate(20deg)" : "none",
      }}
    />
  );
};

export const EfekRumahKaca: React.FC = () => {
  const frame = useCurrentFrame();
  const layerO = useFade(20, 20);
  const heat = interpolate(frame, [60, 220], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const temp = interpolate(heat, [0, 1], [27, 33]);
  return (
    <AbsoluteFill style={{ background: "linear-gradient(#0b1220,#10233b)", fontFamily: font, overflow: "hidden" }}>
      <div style={{ padding: "40px 60px" }}>
        <Title text="Efek Rumah Kaca" sub="Gas rumah kaca memerangkap panas, suhu Bumi naik" />
      </div>

      {/* sun */}
      <div style={{ position: "absolute", top: 60, right: 90, width: 90, height: 90, borderRadius: "50%", background: "radial-gradient(#fff7cc,#fbbf24)", boxShadow: "0 0 60px #fbbf24" }} />

      {/* GHG layer */}
      <div
        style={{
          position: "absolute",
          top: 330,
          left: 0,
          right: 0,
          height: 56,
          background: "rgba(244,114,182,0.18)",
          borderTop: "2px dashed rgba(244,114,182,0.6)",
          borderBottom: "2px dashed rgba(244,114,182,0.6)",
          opacity: layerO,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: palette.kredit,
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        Lapisan Gas Rumah Kaca (CO₂, CH₄, N₂O)
      </div>

      {/* rays */}
      <Ray x={300} delay={30} />
      <Ray x={520} delay={55} trapped />
      <Ray x={720} delay={80} trapped />
      <Ray x={900} delay={105} />
      <Ray x={420} delay={130} trapped />

      {/* earth */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(#14532d,#166534)" }} />

      {/* thermometer */}
      <div style={{ position: "absolute", bottom: 40, left: 70, color: palette.text, fontFamily: font }}>
        <div style={{ fontSize: 16, color: palette.muted }}>Suhu rata-rata Bumi</div>
        <div style={{ fontSize: 48, fontWeight: 800, color: interpolate(heat, [0, 1], [0, 1]) > 0.5 ? palette.kredit : palette.text }}>
          {temp.toFixed(1)}°C
        </div>
        <div style={{ fontSize: 14, color: palette.kredit }}>{heat > 0.6 ? "▲ pemanasan global" : ""}</div>
      </div>
    </AbsoluteFill>
  );
};

export const EfekRumahKacaDuration = 240;
