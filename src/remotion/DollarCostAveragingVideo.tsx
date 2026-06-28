import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Dollar cost averaging: beli rutin dengan nominal tetap; saat harga turun dapat lebih banyak unit.
const BULAN = [
  { harga: 1000, unit: 1.0 },
  { harga: 800, unit: 1.25 },
  { harga: 500, unit: 2.0 },
  { harga: 800, unit: 1.25 },
  { harga: 1000, unit: 1.0 },
];

export const DollarCostAveragingVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(150, 18);
  const totalUnit = BULAN.reduce((a, b) => a + b.unit, 0);
  const totalInvest = BULAN.length * 1000;
  const avg = totalInvest / totalUnit;
  const maxH = 150;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Dollar Cost Averaging" sub="Investasi rutin nominal tetap: harga turun, dapat lebih banyak unit" />

      <div style={{ display: "flex", gap: 26, marginTop: 40, alignItems: "flex-end", justifyContent: "center", height: 210 }}>
        {BULAN.map((b, i) => {
          const { opacity } = usePop(20 + i * 22);
          const h = (b.harga / 1000) * maxH;
          return (
            <div key={i} style={{ opacity, textAlign: "center", width: 130 }}>
              <div style={{ fontSize: 15, color: palette.aset, fontWeight: 700 }}>{b.unit} unit</div>
              <div style={{ height: h, background: palette.ekuitas, borderRadius: 8, marginTop: 6 }} />
              <div style={{ fontSize: 15, color: palette.text, marginTop: 8 }}>Rp{b.harga}</div>
              <div style={{ fontSize: 13, color: palette.muted }}>Bulan {i + 1}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 24, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Investasi Rp1.000 tiap bulan. Total {totalUnit} unit dari Rp{totalInvest}. Harga rata-rata Rp{avg.toFixed(0)}, lebih rendah dari rata-rata harga pasar karena membeli lebih banyak saat murah.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const DollarCostAveragingVideoDuration = 185;
