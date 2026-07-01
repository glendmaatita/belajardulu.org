import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

const items = [
  { label: "Tax Compliance", desc: "Patuh penuh", c: "#34d399", legal: "Wajib" },
  { label: "Tax Planning", desc: "Hemat yang sah", c: "#60a5fa", legal: "Legal" },
  { label: "Tax Avoidance", desc: "Cari celah aturan", c: "#fbbf24", legal: "Abu-abu" },
  { label: "Tax Evasion", desc: "Sembunyikan fakta", c: "#ef4444", legal: "Ilegal" },
];

const Card: React.FC<{ i: number }> = ({ i }) => {
  const it = items[i];
  const frame = useCurrentFrame();
  const delay = 30 + i * 24;
  const grow = interpolate(frame - delay, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div
      style={{
        flex: 1,
        opacity: grow,
        transform: `translateY(${(1 - grow) * 24}px)`,
        background: palette.bgSoft,
        border: `2px solid ${it.c}`,
        borderRadius: 16,
        padding: "20px 16px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 800, color: it.c }}>{it.label}</div>
      <div style={{ fontSize: 15, color: palette.muted, marginTop: 8 }}>{it.desc}</div>
      <div style={{ marginTop: 14, fontSize: 13, fontWeight: 700, color: it.c, background: "rgba(255,255,255,0.06)", borderRadius: 999, padding: "4px 10px", display: "inline-block" }}>
        {it.legal}
      </div>
    </div>
  );
};

export const SpektrumPajakVideo: React.FC = () => {
  const note = useFade(150, 18);
  const bar = useFade(120, 20);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Spektrum Sikap terhadap Pajak" sub="Dari patuh penuh sampai melanggar hukum" />
      <div style={{ marginTop: 36, display: "flex", gap: 18, alignItems: "stretch" }}>
        {items.map((_, i) => (
          <Card key={i} i={i} />
        ))}
      </div>
      <div style={{ marginTop: 26, height: 8, borderRadius: 999, opacity: bar, background: "linear-gradient(90deg,#34d399,#60a5fa,#fbbf24,#ef4444)" }} />
      <div style={{ marginTop: 22, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Tax planning bermain di area legal: memilih opsi pajak terendah yang diizinkan undang-undang.
      </div>
    </AbsoluteFill>
  );
};

export const SpektrumPajakVideoDuration = 200;
