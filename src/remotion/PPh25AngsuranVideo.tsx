import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// 12 angsuran bulanan yang mencicil PPh tahun berjalan, lalu diperhitungkan di SPT.
const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"];

export const PPh25AngsuranVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(185, 18);
  const sumGrow = interpolate(frame - 150, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Angsuran PPh 25 Bulanan" sub="Mencicil pajak tahun berjalan agar tidak menumpuk di akhir" />
      <div style={{ marginTop: 50, display: "flex", gap: 8, alignItems: "flex-end", justifyContent: "center", height: 220 }}>
        {months.map((m, i) => {
          const delay = 30 + i * 9;
          const grow = interpolate(frame - delay, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 40, height: 150 * grow, background: palette.ekuitas, borderRadius: "6px 6px 0 0" }} />
              <div style={{ fontSize: 12, color: palette.muted, marginTop: 6 }}>{m}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 24, textAlign: "center", opacity: sumGrow }}>
        <span style={{ fontSize: 18, color: palette.aset, fontWeight: 700 }}>
          12 angsuran = kredit pajak yang mengurangi PPh terutang di SPT Tahunan
        </span>
      </div>
      <div style={{ marginTop: 22, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Angsuran PPh 25 umumnya = PPh terutang tahun lalu dikurangi kredit pajak, lalu dibagi 12.
      </div>
    </AbsoluteFill>
  );
};

export const PPh25AngsuranVideoDuration = 215;
