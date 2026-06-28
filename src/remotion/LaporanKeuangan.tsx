import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

const Statement: React.FC<{
  delay: number;
  title: string;
  rows: [string, string][];
  highlight: string;
  accent: string;
}> = ({ delay, title, rows, highlight, accent }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        border: "1px solid rgba(255,255,255,0.08)",
        borderTop: `4px solid ${accent}`,
        borderRadius: 14,
        padding: "16px 18px",
        width: 320,
        fontFamily: font,
      }}
    >
      <div style={{ fontSize: 17, fontWeight: 700, color: accent, marginBottom: 10 }}>{title}</div>
      {rows.map(([label, val], i) => {
        const isHi = label === highlight;
        return (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 17,
              padding: "5px 0",
              color: isHi ? palette.text : palette.muted,
              fontWeight: isHi ? 800 : 400,
              borderTop: i === rows.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
              marginTop: i === rows.length - 1 ? 4 : 0,
              paddingTop: i === rows.length - 1 ? 8 : 5,
            }}
          >
            <span>{label}</span>
            <span style={{ fontVariantNumeric: "tabular-nums", color: isHi ? accent : palette.muted }}>{val}</span>
          </div>
        );
      })}
    </div>
  );
};

const FlowArrow: React.FC<{ delay: number; label: string }> = ({ delay, label }) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame - delay, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: o, width: 110 }}>
      <div style={{ fontSize: 13, color: palette.accent, textAlign: "center", fontFamily: font }}>{label}</div>
      <div style={{ fontSize: 34, color: palette.accent }}>→</div>
    </div>
  );
};

export const LaporanKeuangan: React.FC = () => {
  const note = useFade(150, 16);
  return (
    <AbsoluteFill style={{ background: palette.bg, padding: "60px 50px", fontFamily: font, justifyContent: "center" }}>
      <Title text="Alur Laporan Keuangan" sub="Tiga laporan saling terkait, hasil satu mengalir ke berikutnya" />

      <div style={{ display: "flex", alignItems: "center", marginTop: 40 }}>
        <Statement
          delay={20}
          title="① Laba Rugi"
          accent={palette.aset}
          highlight="Laba Bersih"
          rows={[
            ["Pendapatan", "100 jt"],
            ["Beban", "(70 jt)"],
            ["Laba Bersih", "30 jt"],
          ]}
        />
        <FlowArrow delay={70} label="laba bersih" />
        <Statement
          delay={85}
          title="② Perubahan Ekuitas"
          accent={palette.ekuitas}
          highlight="Modal Akhir"
          rows={[
            ["Modal Awal", "50 jt"],
            ["Laba Bersih", "+30 jt"],
            ["Modal Akhir", "80 jt"],
          ]}
        />
        <FlowArrow delay={120} label="modal akhir" />
        <Statement
          delay={135}
          title="③ Neraca"
          accent={palette.kewajiban}
          highlight="Ekuitas"
          rows={[
            ["Aset", "120 jt"],
            ["Kewajiban", "40 jt"],
            ["Ekuitas", "80 jt"],
          ]}
        />
      </div>

      <div style={{ opacity: note, marginTop: 34, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Itulah sebabnya urutannya tetap: <b style={{ color: palette.text }}>Laba Rugi → Perubahan Ekuitas → Neraca</b>.
      </div>
    </AbsoluteFill>
  );
};

export const LaporanKeuanganDuration = 200;
