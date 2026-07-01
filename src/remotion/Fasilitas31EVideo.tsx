import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

const zones = [
  { range: "Omzet sampai Rp4,8 M", tarif: "Efektif 11%", desc: "Diskon 50% penuh", c: "#34d399", h: 120 },
  { range: "Rp4,8 M sampai Rp50 M", tarif: "11% & 22%", desc: "Sebagian diskon", c: "#fbbf24", h: 200 },
  { range: "Di atas Rp50 M", tarif: "Penuh 22%", desc: "Tanpa fasilitas", c: "#fb7185", h: 280 },
];

export const Fasilitas31EVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Fasilitas Pasal 31E" sub="Diskon 50% PPh Badan atas bagian omzet sampai Rp4,8 M" />
      <div style={{ marginTop: 30, display: "flex", gap: 34, alignItems: "flex-end", justifyContent: "center", height: 340 }}>
        {zones.map((z, i) => {
          const delay = 35 + i * 26;
          const grow = interpolate(frame - delay, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: z.c, opacity: grow, marginBottom: 6 }}>{z.tarif}</div>
              <div style={{ width: 170, height: z.h * grow, background: z.c, borderRadius: "10px 10px 0 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#06121f", fontWeight: 700, fontSize: 14, opacity: grow }}>{z.desc}</span>
              </div>
              <div style={{ width: 180, marginTop: 10, fontSize: 14, color: palette.muted, textAlign: "center", opacity: grow }}>{z.range}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 22, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Badan dengan omzet kecil membayar PPh efektif di bawah 22%, sebuah fasilitas otomatis yang sering terlewat.
      </div>
    </AbsoluteFill>
  );
};

export const Fasilitas31EVideoDuration = 200;
