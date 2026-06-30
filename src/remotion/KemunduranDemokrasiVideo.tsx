import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Kemunduran demokrasi terjadi perlahan, bukan lewat satu kudeta.
const TAHAP = [
  { t: "Demokrasi sehat", c: "#34d399" },
  { t: "Lembaga dilemahkan", c: "#a3e635" },
  { t: "Pers & oposisi ditekan", c: "#fbbf24" },
  { t: "Pemilu tak adil", c: "#fb923c" },
  { t: "Otoritarianisme", c: "#f87171" },
];

export const KemunduranDemokrasiVideo: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Kemunduran Demokrasi" sub="Jarang lewat kudeta mendadak, lebih sering menurun perlahan" />

      <div style={{ display: "flex", alignItems: "flex-end", gap: 18, marginTop: 70, height: 250 }}>
        {TAHAP.map((s, i) => {
          const o = useFade(20 + i * 18);
          const h = 230 - i * 44;
          return (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", opacity: o }}>
              <div style={{ width: "72%", height: h, background: s.c, borderRadius: "10px 10px 0 0" }} />
              <div style={{ fontSize: 14, color: palette.text, marginTop: 10, fontWeight: 700, textAlign: "center", height: 40 }}>{s.t}</div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 20, fontSize: 18, color: palette.muted, maxWidth: 980, opacity: interpolate(frame, [110, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        Tiap langkah tampak kecil dan "legal", sehingga sulit dilawan. Karena itu demokrasi perlu dijaga aktif, bukan dianggap selesai.
      </div>
    </AbsoluteFill>
  );
};

export const KemunduranDemokrasiVideoDuration = 210;
