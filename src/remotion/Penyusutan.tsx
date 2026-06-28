import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Beban penyusutan per tahun (ilustratif, 5 tahun)
const garisLurus = [9, 9, 9, 9, 9]; // juta, rata
const saldoMenurun = [20, 12, 7.2, 4.3, 2.5]; // juta, menurun

const maxVal = 20;
const chartH = 220;

const Chart: React.FC<{
  title: string;
  data: number[];
  color: string;
  baseDelay: number;
  caption: string;
}> = ({ title, data, color, baseDelay, caption }) => {
  const frame = useCurrentFrame();
  const titleO = useFade(baseDelay, 14);
  const capO = useFade(baseDelay + 90, 16);
  return (
    <div style={{ width: 440, fontFamily: font }}>
      <div style={{ opacity: titleO, fontSize: 22, fontWeight: 800, color, textAlign: "center", marginBottom: 14 }}>
        {title}
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 18, height: chartH }}>
        {data.map((v, i) => {
          const delay = baseDelay + 18 + i * 12;
          const grow = interpolate(frame - delay, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const h = (v / maxVal) * chartH * grow;
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{ fontSize: 14, color: palette.text, opacity: grow, fontVariantNumeric: "tabular-nums" }}>
                {grow > 0.9 ? `${v}jt` : ""}
              </div>
              <div
                style={{
                  width: 50,
                  height: Math.max(2, h),
                  background: color,
                  borderRadius: "6px 6px 0 0",
                }}
              />
              <div style={{ fontSize: 13, color: palette.muted }}>Th {i + 1}</div>
            </div>
          );
        })}
      </div>
      <div style={{ opacity: capO, marginTop: 12, fontSize: 15, color: palette.muted, textAlign: "center" }}>{caption}</div>
    </div>
  );
};

export const Penyusutan: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, padding: "50px 50px", fontFamily: font, justifyContent: "center" }}>
      <Title text="Penyusutan: Garis Lurus vs Saldo Menurun" sub="Pola beban penyusutan per tahun untuk aset yang sama" />
      <div style={{ display: "flex", gap: 40, justifyContent: "center", marginTop: 36 }}>
        <Chart
          title="Garis Lurus"
          data={garisLurus}
          color={palette.aset}
          baseDelay={20}
          caption="Beban SAMA tiap tahun, sederhana & merata."
        />
        <Chart
          title="Saldo Menurun Ganda"
          data={saldoMenurun}
          color={palette.ekuitas}
          baseDelay={120}
          caption="Beban BESAR di awal, lalu mengecil."
        />
      </div>
    </AbsoluteFill>
  );
};

export const PenyusutanDuration = 240;
