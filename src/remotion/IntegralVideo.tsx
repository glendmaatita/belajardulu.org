import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Integral: luas di bawah kurva sebagai jumlah potongan tipis.
export const IntegralVideo: React.FC = () => {
  const note = useFade(150, 18);
  const bars = [40, 70, 95, 115, 130, 140];
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Integral: Luas di Bawah Kurva" sub="Jumlahkan potongan tipis tak hingga banyaknya" />

      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 4, marginTop: 40, height: 170 }}>
        {bars.map((h, i) => {
          const { scale, opacity } = usePop(20 + i * 16);
          return <div key={i} style={{ width: 48, height: h, borderRadius: "4px 4px 0 0", background: palette.aset, opacity, transform: `scaleY(${scale})`, transformOrigin: "bottom" }} />;
        })}
      </div>
      <div style={{ height: 2, background: palette.muted, maxWidth: 320, margin: "0 auto" }} />

      <div style={{ opacity: note, marginTop: 24, fontSize: 18, color: palette.muted, textAlign: "center", maxWidth: 780, marginLeft: "auto", marginRight: "auto" }}>
        Bagi daerah menjadi banyak persegi panjang tipis, jumlahkan luasnya. Makin tipis potongannya, makin tepat. Limit dari penjumlahan ini adalah integral, yaitu luas sejati di bawah kurva.
      </div>
    </AbsoluteFill>
  );
};

export const IntegralVideoDuration = 185;
