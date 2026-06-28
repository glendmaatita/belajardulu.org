import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { palette, font } from "./theme";

const rows = [
  { akun: "Aset", debit: true },
  { akun: "Beban", debit: true },
  { akun: "Kewajiban", debit: false },
  { akun: "Ekuitas", debit: false },
  { akun: "Pendapatan", debit: false },
];

const Row: React.FC<{ akun: string; debit: boolean; delay: number }> = ({ akun, debit, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 16 } });
  const x = interpolate(s, [0, 1], [-60, 0]);
  const opacity = interpolate(frame - delay, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div
      style={{
        transform: `translateX(${x}px)`,
        opacity,
        display: "grid",
        gridTemplateColumns: "260px 1fr 1fr",
        alignItems: "center",
        gap: 16,
        padding: "14px 22px",
        background: palette.bgSoft,
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ fontSize: 30, fontWeight: 700 }}>{akun}</div>
      <Pill active={debit} color={palette.debit} label="DEBIT" />
      <Pill active={!debit} color={palette.kredit} label="KREDIT" />
    </div>
  );
};

const Pill: React.FC<{ active: boolean; color: string; label: string }> = ({ active, color, label }) => (
  <div
    style={{
      textAlign: "center",
      fontSize: 22,
      fontWeight: 800,
      padding: "10px 0",
      borderRadius: 10,
      background: active ? color : "transparent",
      color: active ? "#06121f" : "rgba(255,255,255,0.25)",
      border: active ? "none" : "1px dashed rgba(255,255,255,0.12)",
    }}
  >
    {active ? `▲ ${label}` : label}
  </div>
);

export const DebitKredit: React.FC = () => {
  const frame = useCurrentFrame();
  const titleOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, color: palette.text, padding: "60px 90px" }}>
      <div style={{ opacity: titleOpacity, fontSize: 38, fontWeight: 800 }}>Aturan Debit &amp; Kredit</div>
      <div style={{ opacity: titleOpacity, fontSize: 20, color: palette.muted, marginTop: 6, marginBottom: 18 }}>
        Tanda ▲ = sisi tempat saldo BERTAMBAH (sekaligus saldo normalnya)
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr 1fr", gap: 16, padding: "0 22px 8px", color: palette.muted, fontSize: 18, fontWeight: 700 }}>
        <div>Golongan Akun</div>
        <div style={{ textAlign: "center" }}>Debit (kiri)</div>
        <div style={{ textAlign: "center" }}>Kredit (kanan)</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {rows.map((r, i) => (
          <Row key={r.akun} akun={r.akun} debit={r.debit} delay={25 + i * 18} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

export const DebitKreditDuration = 180;
