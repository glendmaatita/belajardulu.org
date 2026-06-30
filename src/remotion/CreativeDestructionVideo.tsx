import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

// Penghancuran kreatif Schumpeter: inovasi baru menggusur yang lama.
const PASANG = [
  { lama: "📼", lamaT: "Kaset video", baru: "📺", baruT: "Streaming" },
  { lama: "📷", lamaT: "Film kamera", baru: "📱", baruT: "Kamera ponsel" },
  { lama: "🚕", lamaT: "Taksi pangkalan", baru: "📲", baruT: "Ojek online" },
];

export const CreativeDestructionVideo: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Penghancuran Kreatif" sub="Inovasi baru terus menggusur cara lama, kata Joseph Schumpeter" />

      <div style={{ display: "flex", flexDirection: "column", gap: 22, marginTop: 50 }}>
        {PASANG.map((p, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          const fade = interpolate(frame - (90 + i * 14), [0, 24], [1, 0.3], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 20, opacity }}>
              <div style={{ transform: `scale(${scale})`, opacity: fade, background: palette.bgSoft, border: "2px solid #f87171", borderRadius: 14, padding: "14px 22px", width: 230, textAlign: "center" }}>
                <span style={{ fontSize: 30 }}>{p.lama}</span>
                <span style={{ fontSize: 17, fontWeight: 700, color: palette.text, marginLeft: 10 }}>{p.lamaT}</span>
              </div>
              <Arrow delay={34 + i * 26} />
              <div style={{ transform: `scale(${scale})`, background: palette.bgSoft, border: "2px solid #34d399", borderRadius: 14, padding: "14px 22px", width: 230, textAlign: "center" }}>
                <span style={{ fontSize: 30 }}>{p.baru}</span>
                <span style={{ fontSize: 17, fontWeight: 700, color: "#34d399", marginLeft: 10 }}>{p.baruT}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 38, fontSize: 18, color: palette.muted, maxWidth: 960, opacity: interpolate(frame, [150, 190], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        Kapitalisme tumbuh justru lewat gelombang inovasi yang merusak: lapangan kerja lama hilang, yang baru lahir. Menyakitkan sekaligus mendorong kemajuan.
      </div>
    </AbsoluteFill>
  );
};

export const CreativeDestructionVideoDuration = 230;
