import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Akumulasi primitif: asal-usul modal awal lewat perampasan, bukan tabungan damai.
const sources = [
  { label: "Enclosure tanah", desc: "Petani diusir dari tanah bersama", c: "#fb7185" },
  { label: "Kolonialisme", desc: "Perampasan kekayaan jajahan", c: "#f59e0b" },
  { label: "Perbudakan", desc: "Kerja paksa tanpa upah", c: "#ef4444" },
  { label: "Perdagangan", desc: "Akumulasi modal niaga", c: "#a78bfa" },
];

export const AkumulasiPrimitifVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(175, 18);
  const arrowGrow = interpolate(frame - 130, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Akumulasi Primitif" sub="Asal mula modal, kata Marx, ditulis dengan darah dan api" />
      <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
        {sources.map((s, i) => {
          const grow = interpolate(frame - (30 + i * 20), [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ opacity: grow, transform: `translateY(${(1 - grow) * 16}px)`, background: palette.bgSoft, border: `2px solid ${s.c}`, borderRadius: 12, padding: "14px 16px" }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: s.c }}>{s.label}</div>
              <div style={{ fontSize: 13, color: palette.muted, marginTop: 4 }}>{s.desc}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 22, textAlign: "center", opacity: arrowGrow }}>
        <span style={{ fontSize: 18, color: palette.aset, fontWeight: 700 }}>Modal awal terkumpul, buruh kehilangan akses ke alat produksi</span>
      </div>
      <div style={{ marginTop: 26, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Marx menolak dongeng bahwa modal lahir dari hemat dan rajin; ia menelusuri asalnya pada perampasan.
      </div>
    </AbsoluteFill>
  );
};

export const AkumulasiPrimitifVideoDuration = 210;
