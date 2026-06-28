import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { palette, font } from "./theme";

const steps = [
  "Transaksi & Bukti",
  "Jurnal Umum",
  "Buku Besar",
  "Neraca Saldo",
  "Jurnal Penyesuaian",
  "Neraca Lajur",
  "Laporan Keuangan",
  "Jurnal Penutup",
];

const Step: React.FC<{ n: number; label: string; delay: number }> = ({ n, label, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 18 } });
  const scale = interpolate(s, [0, 1], [0.5, 1]);
  const opacity = interpolate(frame - delay, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, opacity, transform: `scale(${scale})`, transformOrigin: "left center" }}>
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: palette.accent,
          color: "#fff",
          fontWeight: 800,
          fontSize: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {n}
      </div>
      <div
        style={{
          fontSize: 26,
          fontWeight: 700,
          background: palette.bgSoft,
          border: "1px solid rgba(255,255,255,0.07)",
          padding: "12px 22px",
          borderRadius: 12,
          flex: 1,
        }}
      >
        {label}
      </div>
    </div>
  );
};

export const SiklusAkuntansi: React.FC = () => {
  const frame = useCurrentFrame();
  const titleOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const half = Math.ceil(steps.length / 2);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, color: palette.text, padding: "56px 80px" }}>
      <div style={{ opacity: titleOpacity, fontSize: 38, fontWeight: 800 }}>Siklus Akuntansi</div>
      <div style={{ opacity: titleOpacity, fontSize: 20, color: palette.muted, marginTop: 6, marginBottom: 28 }}>
        Dari transaksi mentah hingga laporan keuangan, lalu berulang tiap periode 🔄
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 50px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {steps.slice(0, half).map((label, i) => (
            <Step key={label} n={i + 1} label={label} delay={25 + i * 16} />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {steps.slice(half).map((label, i) => (
            <Step key={label} n={half + i + 1} label={label} delay={25 + (half + i) * 16} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const SiklusAkuntansiDuration = 220;
