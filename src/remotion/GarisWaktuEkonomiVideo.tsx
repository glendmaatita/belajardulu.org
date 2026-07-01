import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Garis waktu mazhab pemikiran ekonomi dari praklasik sampai modern.
const eras = [
  { year: "Kuno", label: "Aristoteles, Ibn Khaldun", c: "#fbbf24" },
  { year: "1600-an", label: "Merkantilisme", c: "#f59e0b" },
  { year: "1776", label: "Klasik: Adam Smith", c: "#34d399" },
  { year: "1867", label: "Marx", c: "#fb7185" },
  { year: "1871", label: "Revolusi marginal", c: "#60a5fa" },
  { year: "1936", label: "Keynes", c: "#a78bfa" },
];

export const GarisWaktuEkonomiVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(185, 18);
  const line = interpolate(frame - 25, [0, 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Garis Waktu Pemikiran Ekonomi" sub="Bagaimana ide besar berganti dari abad ke abad" />
      <div style={{ marginTop: 60, position: "relative", height: 220 }}>
        <div style={{ position: "absolute", top: 60, left: 0, height: 4, width: `${line * 100}%`, background: palette.accent }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {eras.map((e, i) => {
            const grow = interpolate(frame - (35 + i * 20), [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            return (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 150, opacity: grow }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: e.c }}>{e.year}</div>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: e.c, margin: "12px 0" }} />
                <div style={{ fontSize: 13, color: palette.muted, textAlign: "center" }}>{e.label}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ marginTop: 30, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Tiap mazhab menjawab persoalan zamannya, dan sering lahir sebagai kritik atas mazhab sebelumnya.
      </div>
    </AbsoluteFill>
  );
};

export const GarisWaktuEkonomiVideoDuration = 215;
