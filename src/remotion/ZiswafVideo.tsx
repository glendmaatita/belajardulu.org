import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// ZISWAF: zakat, infak, sedekah, wakaf sebagai instrumen distribusi kekayaan
// dari yang mampu ke yang membutuhkan.
const items = [
  { label: "Zakat", desc: "Wajib, 2,5% harta (nisab & haul)", c: "#34d399" },
  { label: "Infak", desc: "Sumbangan sukarela", c: "#60a5fa" },
  { label: "Sedekah", desc: "Pemberian sukarela, luas", c: "#fbbf24" },
  { label: "Wakaf", desc: "Pokok ditahan, manfaat mengalir", c: "#a78bfa" },
];

export const ZiswafVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(175, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="ZISWAF: Distribusi Kekayaan" sub="Zakat, infak, sedekah, dan wakaf sebagai jaring keadilan" />
      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
        {items.map((it, i) => {
          const grow = interpolate(frame - (30 + i * 20), [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ opacity: grow, transform: `translateY(${(1 - grow) * 16}px)`, background: palette.bgSoft, border: `2px solid ${it.c}`, borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: it.c }}>{it.label}</div>
              <div style={{ fontSize: 13, color: palette.muted, marginTop: 4 }}>{it.desc}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 34, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Instrumen ini memindahkan kekayaan dari yang berlebih ke yang membutuhkan, menekan ketimpangan.
      </div>
    </AbsoluteFill>
  );
};

export const ZiswafVideoDuration = 205;
