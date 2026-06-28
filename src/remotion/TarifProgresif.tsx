import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

const steps = [
  { lapis: "Rp0 sampai 60 jt", tarif: "5%", h: 90, c: "#34d399" },
  { lapis: "60 jt sampai 250 jt", tarif: "15%", h: 150, c: "#0ea5e9" },
  { lapis: "250 jt sampai 500 jt", tarif: "25%", h: 210, c: "#f59e0b" },
  { lapis: "500 jt sampai 5 M", tarif: "30%", h: 270, c: "#fb7185" },
  { lapis: "di atas 5 M", tarif: "35%", h: 330, c: "#ef4444" },
];

const Step: React.FC<{ i: number }> = ({ i }) => {
  const s = steps[i];
  const frame = useCurrentFrame();
  const delay = 35 + i * 22;
  const grow = interpolate(frame - delay, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
      <div style={{ fontSize: 26, fontWeight: 800, color: s.c, opacity: grow, marginBottom: 6 }}>{s.tarif}</div>
      <div style={{ width: 150, height: s.h * grow, background: s.c, borderRadius: "8px 8px 0 0" }} />
      <div style={{ width: 160, marginTop: 8, fontSize: 13, color: palette.muted, textAlign: "center", opacity: grow, fontFamily: font }}>
        {s.lapis}
      </div>
    </div>
  );
};

export const TarifProgresif: React.FC = () => {
  const note = useFade(170, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Tarif Progresif PPh (Pasal 17)" sub="Makin tinggi penghasilan, makin tinggi tarif di lapisan atasnya" />
      <div style={{ marginTop: 30, display: "flex", gap: 26, alignItems: "flex-end", justifyContent: "center", height: 420 }}>
        {steps.map((_, i) => (
          <Step key={i} i={i} />
        ))}
      </div>
      <div style={{ opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Bukan seluruh penghasilan kena tarif tertinggi: tiap lapisan dikenai tarifnya sendiri, seperti anak tangga.
      </div>
    </AbsoluteFill>
  );
};

export const TarifProgresifDuration = 210;
