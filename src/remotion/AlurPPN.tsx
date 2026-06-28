import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

const Node: React.FC<{ x: number; delay: number; icon: string; title: string; sub: string; color: string }> = ({
  x,
  delay,
  icon,
  title,
  sub,
  color,
}) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: 220,
        width: 300,
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        border: "1px solid rgba(255,255,255,0.08)",
        borderTop: `5px solid ${color}`,
        borderRadius: 16,
        padding: "22px",
        textAlign: "center",
        fontFamily: font,
      }}
    >
      <div style={{ fontSize: 50 }}>{icon}</div>
      <div style={{ marginTop: 8, fontSize: 22, fontWeight: 800, color: palette.text }}>{title}</div>
      <div style={{ marginTop: 6, fontSize: 15, color: palette.muted }}>{sub}</div>
    </div>
  );
};

const Token: React.FC<{ from: number; to: number; start: number; label: string; color: string; top: number }> = ({
  from,
  to,
  start,
  label,
  color,
  top,
}) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const s = spring({ frame: frame - start, fps, config: { damping: 18 } });
  const x = interpolate(s, [0, 1], [from, to]);
  if (frame < start || frame > start + 75) return null;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top,
        padding: "8px 14px",
        background: color,
        color: "#06121f",
        borderRadius: 999,
        fontWeight: 800,
        fontSize: 14,
        fontFamily: font,
        boxShadow: `0 8px 22px ${color}66`,
      }}
    >
      {label}
    </div>
  );
};

export const AlurPPN: React.FC = () => {
  const note = useFade(165, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font }}>
      <div style={{ padding: "40px 56px 0" }}>
        <Title text="Ke Mana Uang PPN Mengalir?" sub="PPN dibayar konsumen, dititipkan ke penjual, lalu disetor ke negara" />
      </div>

      <Node x={70} delay={25} icon="🛒" title="Konsumen" sub="Membayar harga + PPN 11%" color={palette.kewajiban} />
      <Node x={460} delay={50} icon="🏪" title="Penjual (PKP)" sub="Memungut, lalu menyetor" color={palette.aset} />
      <Node x={850} delay={75} icon="🏛️" title="Negara" sub="Menerima PPN" color={palette.ekuitas} />

      <Token from={350} to={460} start={100} label="bayar PPN →" color={palette.kewajiban} top={235} />
      <Token from={740} to={850} start={130} label="setor PPN →" color={palette.aset} top={235} />

      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: 56,
          right: 56,
          opacity: note,
          textAlign: "center",
          fontSize: 19,
          color: palette.text,
          lineHeight: 1.6,
        }}
      >
        Penjual hanya <b style={{ color: palette.aset }}>menitipkan</b>: PPN bukan biaya atau keuntungannya. Yang
        benar-benar menanggung PPN adalah <b style={{ color: palette.kewajiban }}>konsumen akhir</b>.
      </div>
    </AbsoluteFill>
  );
};

export const AlurPPNDuration = 220;
