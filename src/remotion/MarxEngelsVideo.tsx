import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Tonggak utama pemikiran Marx & Engels.
const events = [
  { year: "1818", label: "Marx lahir" },
  { year: "1848", label: "Manifesto Komunis" },
  { year: "1867", label: "Das Kapital Jilid I" },
  { year: "1883", label: "Marx wafat" },
  { year: "1895", label: "Engels lanjutkan karya" },
];

export const MarxEngelsVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(170, 18);
  const lineGrow = interpolate(frame - 25, [0, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Marx & Engels: Garis Waktu" sub="Dari Manifesto Komunis sampai Das Kapital" />
      <div style={{ marginTop: 70, position: "relative", height: 180 }}>
        <div style={{ position: "absolute", top: 60, left: 0, height: 4, width: `${lineGrow * 100}%`, background: palette.kredit }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {events.map((e, i) => {
            const delay = 35 + i * 24;
            const grow = interpolate(frame - delay, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            return (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 150, opacity: grow }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: palette.aset }}>{e.year}</div>
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: palette.kredit, margin: "12px 0" }} />
                <div style={{ fontSize: 14, color: palette.muted, textAlign: "center" }}>{e.label}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ marginTop: 40, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Lahir dari gejolak Revolusi Industri, Marxisme mengkritik kapitalisme dan menafsir ulang sejarah lewat kelas.
      </div>
    </AbsoluteFill>
  );
};

export const MarxEngelsVideoDuration = 210;
