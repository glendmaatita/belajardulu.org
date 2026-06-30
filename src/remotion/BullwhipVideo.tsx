import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Efek bullwhip: perubahan kecil di konsumen membesar di tiap simpul ke hulu.
const TIER = [
  { nama: "Konsumen", amp: 10, warna: "#34d399" },
  { nama: "Pengecer", amp: 16, warna: "#60a5fa" },
  { nama: "Distributor", amp: 26, warna: "#fbbf24" },
  { nama: "Pabrik", amp: 42, warna: "#f472b6" },
  { nama: "Pemasok", amp: 64, warna: "#f87171" },
];

export const BullwhipVideo: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Efek Bullwhip" sub="Permintaan konsumen yang stabil jadi liar saat menjalar ke hulu" />

      <div style={{ display: "flex", alignItems: "flex-end", gap: 26, marginTop: 70, height: 300 }}>
        {TIER.map((t, i) => {
          const o = useFade(16 + i * 16);
          const wobble = Math.sin((frame - i * 8) / 7) * (t.amp / 2);
          const h = 90 + t.amp * 2.4 + wobble;
          return (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", opacity: o }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: t.warna }}>±{Math.round(t.amp + wobble)}%</div>
              <div style={{ width: "70%", height: h, background: t.warna, borderRadius: "10px 10px 0 0", marginTop: 8, transition: "none" }} />
              <div style={{ fontSize: 15, color: palette.text, marginTop: 10, fontWeight: 700 }}>{t.nama}</div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 30, fontSize: 18, color: palette.muted, opacity: interpolate(frame, [80, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        Penyebabnya: pesanan menumpuk, ramalan berlebihan, dan tiap pihak menambah stok pengaman. Berbagi data permintaan nyata meredam ayunan ini.
      </div>
    </AbsoluteFill>
  );
};

export const BullwhipVideoDuration = 220;
