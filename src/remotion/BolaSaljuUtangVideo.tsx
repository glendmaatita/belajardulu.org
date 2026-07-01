import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Metode bola salju: lunasi utang terkecil dulu sampai habis, lalu alihkan
// dananya ke utang berikutnya. Momentum membesar seperti bola salju.
const utang = [
  { label: "Paylater", nilai: 2 },
  { label: "Kartu kredit", nilai: 8 },
  { label: "KTA", nilai: 20 },
  { label: "KPR", nilai: 300 },
];

export const BolaSaljuUtangVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(180, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Metode Bola Salju Utang" sub="Lunasi yang terkecil dulu, lalu gulingkan ke utang berikutnya" />
      <div style={{ marginTop: 46, display: "flex", gap: 20, alignItems: "flex-end", justifyContent: "center", height: 260 }}>
        {utang.map((u, i) => {
          const grow = interpolate(frame - (35 + i * 22), [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const h = 40 + Math.log10(u.nilai + 1) * 70;
          const dilunasi = i === 0;
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: grow }}>
              <div style={{ fontSize: 14, color: palette.muted, marginBottom: 6 }}>Rp{u.nilai} jt</div>
              <div style={{ width: 110, height: h, background: dilunasi ? palette.aset : palette.kewajiban, borderRadius: "8px 8px 0 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {dilunasi && <span style={{ color: "#06121f", fontWeight: 800, fontSize: 13 }}>Lunas dulu</span>}
              </div>
              <div style={{ width: 120, marginTop: 8, fontSize: 13, color: palette.text, textAlign: "center", fontWeight: 700 }}>{u.label}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 24, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Melunasi utang kecil lebih dulu memberi kemenangan cepat yang memotivasi. Alternatifnya, metode longsor
        melunasi bunga tertinggi dulu agar lebih hemat.
      </div>
    </AbsoluteFill>
  );
};

export const BolaSaljuUtangVideoDuration = 215;
