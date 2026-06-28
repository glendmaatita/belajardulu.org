import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

const Node: React.FC<{
  x: number;
  delay: number;
  color: string;
  title: string;
  items: string[];
}> = ({ x, delay, color, title, items }) => {
  const { scale, opacity } = usePop(delay);
  const listO = useFade(delay + 12, 14);
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: 200,
        width: 280,
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        border: "1px solid rgba(255,255,255,0.08)",
        borderTop: `5px solid ${color}`,
        borderRadius: 16,
        padding: "18px 20px",
        fontFamily: font,
      }}
    >
      <div style={{ fontSize: 19, fontWeight: 800, color, marginBottom: 8 }}>{title}</div>
      <div style={{ opacity: listO }}>
        {items.map((it, i) => (
          <div key={i} style={{ fontSize: 14, color: palette.muted, padding: "3px 0" }}>
            {it}
          </div>
        ))}
      </div>
    </div>
  );
};

const Token: React.FC<{ from: number; to: number; top: number; start: number; label: string; color: string }> = ({
  from,
  to,
  top,
  start,
  label,
  color,
}) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const s = spring({ frame: frame - start, fps, config: { damping: 18 } });
  const x = interpolate(s, [0, 1], [from, to]);
  const on = frame > start && frame < start + 70;
  if (!on) return null;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top,
        padding: "6px 12px",
        background: color,
        color: "#06121f",
        borderRadius: 999,
        fontWeight: 800,
        fontSize: 13,
        fontFamily: font,
        boxShadow: `0 8px 20px ${color}66`,
      }}
    >
      {label}
    </div>
  );
};

export const CarbonFinanceFlow: React.FC = () => {
  const concl = useFade(170, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font }}>
      <div style={{ padding: "40px 56px 0" }}>
        <Title text="Carbon Finance: Aliran Modal" sub="Dana mengalir ke proyek, kredit dan imbal hasil mengalir kembali" />
      </div>

      <Node
        x={56}
        delay={25}
        color="#0ea5e9"
        title="Sumber Dana"
        items={["🏦 Investor & bank", "💼 Carbon fund", "🤝 Blended & results-based finance"]}
      />
      <Node
        x={460}
        delay={55}
        color="#10b981"
        title="Proyek Karbon"
        items={["🌱 Pengembang proyek", "📉 Menghasilkan pengurangan emisi", "📜 Diverifikasi (MRV)"]}
      />
      <Node
        x={864}
        delay={85}
        color="#f59e0b"
        title="Hasil"
        items={["🪙 Carbon credit terbit", "💰 Pendapatan penjualan", "📈 Imbal hasil ke investor"]}
      />

      {/* capital flowing right */}
      <Token from={336} to={460} top={210} start={110} label="modal →" color="#0ea5e9" />
      <Token from={740} to={864} top={210} start={130} label="kredit →" color="#10b981" />
      {/* return flowing back */}
      <Token from={864} to={336} top={420} start={150} label="imbal hasil ↩" color="#f59e0b" />

      <div
        style={{
          position: "absolute",
          bottom: 56,
          left: 56,
          right: 56,
          opacity: concl,
          textAlign: "center",
          fontSize: 18,
          color: palette.muted,
          lineHeight: 1.6,
        }}
      >
        Instrumen seperti <b style={{ color: palette.text }}>forward/futures</b>, <b style={{ color: palette.text }}>project finance</b>,
        dan <b style={{ color: palette.text }}>results-based finance</b> menghubungkan modal hari ini dengan kredit di masa depan.
      </div>
    </AbsoluteFill>
  );
};

export const CarbonFinanceFlowDuration = 230;
