import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Empat pilar etika bisnis Islam yang menjaga transaksi tetap adil dan berkah.
const pilar = [
  { label: "Sidq (jujur)", desc: "Benar dalam ucapan & takaran", c: "#34d399" },
  { label: "Amanah", desc: "Dapat dipercaya, tepat janji", c: "#60a5fa" },
  { label: "Adil", desc: "Tidak menzalimi pihak mana pun", c: "#fbbf24" },
  { label: "Tanpa tipu", desc: "Larang tadlis, najsy, ihtikar", c: "#f472b6" },
];

export const EtikaBisnisIslamVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Etika Bisnis dalam Islam" sub="Berdagang bukan sekadar untung, tetapi juga berkah dan adil" />
      <div style={{ marginTop: 44, display: "flex", gap: 16 }}>
        {pilar.map((p, i) => {
          const grow = interpolate(frame - (30 + i * 22), [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ flex: 1, opacity: grow, transform: `translateY(${(1 - grow) * 22}px)`, background: palette.bgSoft, border: `2px solid ${p.c}`, borderRadius: 16, padding: "20px 12px", textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: p.c }}>{p.label}</div>
              <div style={{ fontSize: 13, color: palette.muted, marginTop: 8 }}>{p.desc}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 40, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Nabi Muhammad dikenal sebagai pedagang yang jujur (Al-Amin). Etika inilah yang menjadi fondasi ekonomi syariah.
      </div>
    </AbsoluteFill>
  );
};

export const EtikaBisnisIslamVideoDuration = 200;
