import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Momentum dan kekekalannya pada tumbukan.
export const MomentumVideo: React.FC = () => {
  const before = usePop(20);
  const after = usePop(80);
  const rumus = useFade(130, 16);
  const note = useFade(160, 18);
  const Ball = ({ v, label, warna }: { v: string; label: string; warna: string }) => (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: 64, height: 64, borderRadius: 999, background: warna, color: "#06121f", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 15 }}>{v}</div>
      <div style={{ fontSize: 12, color: palette.muted, marginTop: 4 }}>{label}</div>
    </div>
  );
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Kekekalan Momentum" sub="Momentum total sebelum = sesudah tumbukan" />

      <div style={{ display: "flex", justifyContent: "center", gap: 60, marginTop: 40 }}>
        <div style={{ transform: `scale(${before.scale})`, opacity: before.opacity, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: palette.muted, marginBottom: 10 }}>Sebelum</div>
          <div style={{ display: "flex", gap: 16 }}>
            <Ball v="2 m/s" label="A (2 kg)" warna={palette.aset} />
            <Ball v="diam" label="B (2 kg)" warna={palette.ekuitas} />
          </div>
        </div>
        <div style={{ transform: `scale(${after.scale})`, opacity: after.opacity, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: palette.muted, marginBottom: 10 }}>Sesudah</div>
          <div style={{ display: "flex", gap: 16 }}>
            <Ball v="diam" label="A" warna={palette.aset} />
            <Ball v="2 m/s" label="B" warna={palette.ekuitas} />
          </div>
        </div>
      </div>

      <div style={{ opacity: rumus, marginTop: 30, textAlign: "center", fontSize: 21, fontWeight: 800, color: palette.text }}>
        p = m v, dan p total kekal: (2)(2) + 0 = 0 + (2)(2)
      </div>
      <div style={{ opacity: note, marginTop: 14, textAlign: "center", fontSize: 16, color: palette.muted }}>
        Momentum (massa kali kecepatan) tidak hilang pada tumbukan, hanya berpindah antar benda.
      </div>
    </AbsoluteFill>
  );
};

export const MomentumVideoDuration = 195;
