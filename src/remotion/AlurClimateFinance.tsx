import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

const Box: React.FC<{ x: number; y: number; delay: number; icon: string; title: string; sub: string; color: string; w?: number }> = ({
  x,
  y,
  delay,
  icon,
  title,
  sub,
  color,
  w = 280,
}) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div style={{ position: "absolute", left: x, top: y, width: w, transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: "1px solid rgba(255,255,255,0.08)", borderLeft: `5px solid ${color}`, borderRadius: 14, padding: "16px 18px", fontFamily: font }}>
      <div style={{ fontSize: 30 }}>{icon}</div>
      <div style={{ fontSize: 20, fontWeight: 800, color: palette.text, marginTop: 4 }}>{title}</div>
      <div style={{ fontSize: 14, color: palette.muted }}>{sub}</div>
    </div>
  );
};

const Token: React.FC<{ from: number; to: number; top: number; start: number; label: string }> = ({ from, to, top, start, label }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const s = spring({ frame: frame - start, fps, config: { damping: 18 } });
  const x = interpolate(s, [0, 1], [from, to]);
  if (frame < start || frame > start + 80) return null;
  return (
    <div style={{ position: "absolute", left: x, top, padding: "6px 12px", background: palette.aset, color: "#06121f", borderRadius: 999, fontWeight: 800, fontSize: 13, fontFamily: font }}>
      {label}
    </div>
  );
};

export const AlurClimateFinance: React.FC = () => {
  const note = useFade(170, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font }}>
      <div style={{ padding: "40px 56px 0" }}>
        <Title text="Bagaimana Climate Finance Mengalir" sub="Dana dari banyak sumber, menuju mitigasi dan adaptasi iklim" />
      </div>

      {/* sources */}
      <Box x={60} y={170} delay={25} icon="🏛️" title="Dana Publik" sub="APBN, dana iklim (GCF), donor" color={palette.ekuitas} />
      <Box x={60} y={330} delay={45} icon="🏦" title="Dana Swasta" sub="Bank, investor, green bond" color={palette.aset} />

      {/* hub */}
      <Box x={440} y={250} delay={75} icon="🔀" title="Penyalur / Blended" sub="Menggabungkan & menurunkan risiko" color={palette.accent} w={250} />

      {/* uses */}
      <Box x={840} y={170} delay={105} icon="⚡" title="Mitigasi" sub="Energi bersih, efisiensi, hutan" color={palette.aset} />
      <Box x={840} y={330} delay={125} icon="🛡️" title="Adaptasi" sub="Tanggul, irigasi, ketahanan" color={palette.kewajiban} />

      <Token from={340} to={440} top={300} start={150} label="modal →" />
      <Token from={690} to={840} top={300} start={150} label="dana →" />

      <div style={{ position: "absolute", bottom: 46, left: 56, right: 56, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Tantangannya: menyalurkan cukup dana, ke proyek yang tepat, dengan risiko yang terkelola.
      </div>
    </AbsoluteFill>
  );
};

export const AlurClimateFinanceDuration = 220;
