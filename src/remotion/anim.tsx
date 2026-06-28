import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { palette, font } from "./theme";

export function useFade(delay = 0, dur = 12) {
  const frame = useCurrentFrame();
  return interpolate(frame - delay, [0, dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

export function usePop(delay = 0, damping = 14) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping } });
  return { scale: interpolate(s, [0, 1], [0.6, 1]), opacity: useFade(delay) };
}

export const Title: React.FC<{ text: string; sub?: string }> = ({ text, sub }) => {
  const o = useFade(0, 18);
  return (
    <div style={{ opacity: o }}>
      <div style={{ fontSize: 40, fontWeight: 800, color: palette.text, fontFamily: font }}>{text}</div>
      {sub && <div style={{ fontSize: 20, color: palette.muted, marginTop: 6, fontFamily: font }}>{sub}</div>}
    </div>
  );
};

export const Chip: React.FC<{
  label?: string;
  value: string;
  bg: string;
  fg?: string;
  delay: number;
  width?: number;
}> = ({ label, value, bg, fg = "#06121f", delay, width }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: bg,
        color: fg,
        borderRadius: 18,
        padding: "18px 24px",
        minWidth: width ?? 180,
        textAlign: "center",
        boxShadow: "0 16px 44px rgba(0,0,0,0.32)",
        fontFamily: font,
      }}
    >
      {label && <div style={{ fontSize: 18, fontWeight: 700, opacity: 0.7 }}>{label}</div>}
      <div style={{ fontSize: 30, fontWeight: 800, marginTop: label ? 4 : 0 }}>{value}</div>
    </div>
  );
};

export const Arrow: React.FC<{ delay: number; label?: string; vertical?: boolean }> = ({ delay, label, vertical }) => {
  const frame = useCurrentFrame();
  const grow = interpolate(frame - delay, [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      {label && (
        <div style={{ fontSize: 15, color: palette.muted, opacity: grow, fontFamily: font, whiteSpace: "nowrap" }}>{label}</div>
      )}
      <div
        style={{
          fontSize: 40,
          color: palette.accent,
          opacity: grow,
          transform: vertical ? `translateY(${(1 - grow) * -10}px)` : `translateX(${(1 - grow) * -10}px)`,
        }}
      >
        {vertical ? "↓" : "→"}
      </div>
    </div>
  );
};
