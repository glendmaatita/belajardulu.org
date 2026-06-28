import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

const Factory: React.FC<{ x: number; emisi: number; cap: number; label: string; delay: number }> = ({
  x,
  emisi,
  cap,
  label,
  delay,
}) => {
  const frame = useCurrentFrame();
  const grow = interpolate(frame - delay, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const over = emisi > cap;
  const barH = emisi * grow;
  return (
    <div style={{ position: "absolute", left: x, bottom: 120, width: 150, fontFamily: font, textAlign: "center" }}>
      {/* emission bar */}
      <div style={{ position: "relative", height: 240, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
        <div
          style={{
            width: 90,
            height: barH,
            background: over ? palette.kredit : palette.aset,
            borderRadius: "8px 8px 0 0",
            transition: "height 0.2s",
          }}
        />
        {/* cap line */}
        <div style={{ position: "absolute", left: -10, right: -10, bottom: cap, borderTop: "3px dashed #fbbf24" }} />
        <div style={{ position: "absolute", right: -52, bottom: cap - 8, fontSize: 12, color: "#fbbf24", width: 48, textAlign: "left" }}>
          cap
        </div>
      </div>
      <div style={{ marginTop: 10, fontSize: 18, fontWeight: 700, color: palette.text }}>{label}</div>
      <div style={{ fontSize: 13, color: over ? palette.kredit : palette.aset }}>
        {over ? `defisit ${emisi - cap} unit` : `surplus ${cap - emisi} unit`}
      </div>
    </div>
  );
};

export const CapAndTrade: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const concl = useFade(170, 18);
  // token travels from seller (right, surplus) to buyer (left, deficit) between frames 90-150
  const s = spring({ frame: frame - 95, fps, config: { damping: 18 } });
  const tokenX = interpolate(s, [0, 1], [820, 360]);
  const tokenVisible = frame > 95 && frame < 165;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font }}>
      <div style={{ padding: "40px 60px 0" }}>
        <Title text="Cap-and-Trade" sub="Ada batas (cap) total emisi, izin emisi bisa diperjualbelikan (trade)" />
      </div>

      <Factory x={280} emisi={210} cap={150} label="Pabrik A" delay={25} />
      <Factory x={760} emisi={95} cap={150} label="Pabrik B" delay={45} />

      {/* trading token */}
      {tokenVisible && (
        <div
          style={{
            position: "absolute",
            left: tokenX,
            top: 250,
            padding: "8px 14px",
            background: "#fbbf24",
            color: "#06121f",
            borderRadius: 999,
            fontWeight: 800,
            fontSize: 15,
            fontFamily: font,
            boxShadow: "0 8px 24px rgba(251,191,36,0.5)",
          }}
        >
          izin emisi →
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 60,
          right: 60,
          opacity: concl,
          textAlign: "center",
          fontSize: 19,
          color: palette.text,
          lineHeight: 1.6,
        }}
      >
        Pabrik B (hemat) <b style={{ color: palette.aset }}>menjual</b> sisa izinnya ke Pabrik A (boros) yang harus{" "}
        <b style={{ color: palette.kredit }}>membeli</b>. Total emisi tetap di bawah cap, dan yang efisien mendapat
        keuntungan. 💸
      </div>
    </AbsoluteFill>
  );
};

export const CapAndTradeDuration = 220;
