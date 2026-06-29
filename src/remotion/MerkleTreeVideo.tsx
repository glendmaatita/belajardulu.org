import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Merkle tree: transaksi di-hash berpasangan naik sampai satu Merkle root.
const Node: React.FC<{
  x: number;
  y: number;
  w: number;
  label: string;
  sub?: string;
  color: string;
  delay: number;
  highlight?: boolean;
}> = ({ x, y, w, label, sub, color, delay, highlight }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        transform: `scale(${scale})`,
        opacity,
        background: highlight ? color : palette.bgSoft,
        border: `2px solid ${color}`,
        color: highlight ? "#06121f" : palette.text,
        borderRadius: 12,
        padding: "8px 6px",
        textAlign: "center",
        boxShadow: highlight ? `0 10px 28px ${color}55` : "none",
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 800 }}>{label}</div>
      {sub && <div style={{ fontSize: 12, opacity: 0.75, marginTop: 2 }}>{sub}</div>}
    </div>
  );
};

export const MerkleTreeVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const lineOp = interpolate(frame, [40, 120], [0, 0.5], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const note = useFade(170, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Merkle Tree: Sidik Jari Banyak Transaksi" sub="Transaksi di-hash berpasangan naik sampai satu Merkle root di puncak" />

      <div style={{ position: "relative", height: 360, marginTop: 16 }}>
        <svg viewBox="0 0 1000 360" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <g stroke={palette.accent} strokeWidth={2} opacity={lineOp}>
            <line x1="500" y1="70" x2="290" y2="150" />
            <line x1="500" y1="70" x2="710" y2="150" />
            <line x1="290" y1="190" x2="160" y2="270" />
            <line x1="290" y1="190" x2="400" y2="270" />
            <line x1="710" y1="190" x2="600" y2="270" />
            <line x1="710" y1="190" x2="840" y2="270" />
          </g>
        </svg>

        <Node x={430} y={36} w={140} label="Merkle Root" sub="H(AB+CD)" color={palette.kewajiban} delay={120} highlight />

        <Node x={228} y={150} w={124} label="Hash AB" sub="H(A+B)" color={palette.aset} delay={80} />
        <Node x={648} y={150} w={124} label="Hash CD" sub="H(C+D)" color={palette.aset} delay={92} />

        <Node x={104} y={250} w={112} label="Hash A" color={palette.ekuitas} delay={40} />
        <Node x={344} y={250} w={112} label="Hash B" color={palette.ekuitas} delay={48} />
        <Node x={544} y={250} w={112} label="Hash C" color={palette.ekuitas} delay={56} />
        <Node x={784} y={250} w={112} label="Hash D" color={palette.ekuitas} delay={64} />

        <Node x={104} y={318} w={112} label="Tx A" color={palette.muted} delay={20} />
        <Node x={344} y={318} w={112} label="Tx B" color={palette.muted} delay={26} />
        <Node x={544} y={318} w={112} label="Tx C" color={palette.muted} delay={32} />
        <Node x={784} y={318} w={112} label="Tx D" color={palette.muted} delay={38} />
      </div>

      <div style={{ opacity: note, marginTop: 6, fontSize: 18, color: palette.muted }}>
        Verifikasi efisien (Merkle proof): untuk membuktikan Tx A ada, cukup butuh Hash B dan Hash CD, bukan seluruh transaksi.
      </div>
    </AbsoluteFill>
  );
};

export const MerkleTreeVideoDuration = 200;
