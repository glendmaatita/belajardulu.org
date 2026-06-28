import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Sequence } from "remotion";
import { palette, font } from "./theme";

const Box: React.FC<{
  label: string;
  value: string;
  color: string;
  delay: number;
}> = ({ label, value, color, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 14 } });
  const scale = interpolate(s, [0, 1], [0.6, 1]);
  const opacity = interpolate(frame - delay, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: color,
        borderRadius: 24,
        padding: "28px 36px",
        minWidth: 240,
        textAlign: "center",
        color: "#06121f",
        boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
      }}
    >
      <div style={{ fontSize: 30, fontWeight: 700, opacity: 0.75 }}>{label}</div>
      <div style={{ fontSize: 46, fontWeight: 800, marginTop: 6 }}>{value}</div>
    </div>
  );
};

const Operator: React.FC<{ symbol: string; delay: number }> = ({ symbol, delay }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame - delay, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div style={{ fontSize: 64, fontWeight: 800, color: palette.text, opacity }}>{symbol}</div>
  );
};

export const PersamaanAkuntansi: React.FC = () => {
  const frame = useCurrentFrame();
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Phase 2: transaction caption appears
  const capOpacity = interpolate(frame, [120, 140], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, color: palette.text }}>
      <AbsoluteFill style={{ justifyContent: "flex-start", alignItems: "center", paddingTop: 70 }}>
        <div style={{ opacity: titleOpacity, fontSize: 40, fontWeight: 800 }}>
          Persamaan Dasar Akuntansi
        </div>
        <div style={{ opacity: titleOpacity, fontSize: 22, color: palette.muted, marginTop: 8 }}>
          Selalu seimbang, apa pun transaksinya
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <Box label="ASET (Harta)" value="Rp50 jt" color={palette.aset} delay={20} />
          <Operator symbol="=" delay={45} />
          <Box label="KEWAJIBAN" value="Rp0" color={palette.kewajiban} delay={55} />
          <Operator symbol="+" delay={70} />
          <Box label="EKUITAS (Modal)" value="Rp50 jt" color={palette.ekuitas} delay={80} />
        </div>
      </AbsoluteFill>

      <Sequence from={120}>
        <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: 70 }}>
          <div
            style={{
              opacity: capOpacity,
              maxWidth: 900,
              textAlign: "center",
              fontSize: 24,
              lineHeight: 1.5,
              background: palette.bgSoft,
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: "20px 28px",
            }}
          >
            Pinjam bank <b style={{ color: palette.kewajiban }}>Rp20 jt</b>: Aset (Kas) naik &amp; Kewajiban naik.
            <br />
            Aset <b style={{ color: palette.aset }}>Rp70jt</b> = Kewajiban{" "}
            <b style={{ color: palette.kewajiban }}>Rp20jt</b> + Ekuitas{" "}
            <b style={{ color: palette.ekuitas }}>Rp50jt</b> ✓
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

export const PersamaanAkuntansiDuration = 200;
