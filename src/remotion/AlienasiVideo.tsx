import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Empat bentuk alienasi (keterasingan) pekerja menurut Marx.
const kinds = [
  { label: "Dari produk", desc: "Hasil kerja jadi milik orang lain", c: "#fb7185" },
  { label: "Dari proses", desc: "Kerja monoton, tanpa kendali", c: "#fbbf24" },
  { label: "Dari diri", desc: "Potensi manusiawi tak berkembang", c: "#60a5fa" },
  { label: "Dari sesama", desc: "Saling bersaing, bukan bekerja sama", c: "#34d399" },
];

const Card: React.FC<{ i: number }> = ({ i }) => {
  const k = kinds[i];
  const frame = useCurrentFrame();
  const delay = 30 + i * 22;
  const grow = interpolate(frame - delay, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ flex: 1, opacity: grow, transform: `translateY(${(1 - grow) * 22}px)`, background: palette.bgSoft, border: `2px solid ${k.c}`, borderRadius: 16, padding: "20px 14px", textAlign: "center" }}>
      <div style={{ fontSize: 19, fontWeight: 800, color: k.c }}>{k.label}</div>
      <div style={{ fontSize: 13, color: palette.muted, marginTop: 8 }}>{k.desc}</div>
    </div>
  );
};

export const AlienasiVideo: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Empat Bentuk Alienasi" sub="Keterasingan pekerja dalam produksi kapitalis menurut Marx muda" />
      <div style={{ marginTop: 44, display: "flex", gap: 16 }}>
        {kinds.map((_, i) => (
          <Card key={i} i={i} />
        ))}
      </div>
      <div style={{ marginTop: 40, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Kerja yang seharusnya mengekspresikan manusia, kata Marx, justru membuatnya terasing dari hasil dan dirinya.
      </div>
    </AbsoluteFill>
  );
};

export const AlienasiVideoDuration = 200;
