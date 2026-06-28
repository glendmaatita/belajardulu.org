import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Proporsi: dua rasio yang setara, menemukan nilai yang hilang.
export const ProporsiVideo: React.FC = () => {
  const kiri = usePop(20);
  const kanan = usePop(55);
  const rumus = useFade(130, 16);
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Proporsi: Dua Rasio yang Setara" sub="Menemukan nilai yang hilang dengan menjaga perbandingan" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30, marginTop: 50 }}>
        <div style={{ transform: `scale(${kiri.scale})`, opacity: kiri.opacity, textAlign: "center", background: palette.bgSoft, borderRadius: 16, padding: "24px 30px", borderTop: `6px solid ${palette.ekuitas}` }}>
          <div style={{ fontSize: 15, color: palette.muted }}>2 pensil</div>
          <div style={{ fontSize: 14, color: palette.muted, margin: "6px 0" }}>harganya</div>
          <div style={{ fontSize: 28, fontWeight: 800, color: palette.text }}>Rp6.000</div>
        </div>
        <div style={{ opacity: kiri.opacity, fontSize: 30, color: palette.accent }}>=</div>
        <div style={{ transform: `scale(${kanan.scale})`, opacity: kanan.opacity, textAlign: "center", background: palette.bgSoft, borderRadius: 16, padding: "24px 30px", borderTop: `6px solid ${palette.aset}` }}>
          <div style={{ fontSize: 15, color: palette.muted }}>6 pensil</div>
          <div style={{ fontSize: 14, color: palette.muted, margin: "6px 0" }}>harganya</div>
          <div style={{ fontSize: 28, fontWeight: 800, color: palette.aset }}>Rp18.000</div>
        </div>
      </div>

      <div style={{ opacity: rumus, marginTop: 30, textAlign: "center", fontSize: 22, fontWeight: 800, color: palette.text }}>
        2 / 6.000 = 6 / 18.000, sebab tiap pensil tetap Rp3.000
      </div>
      <div style={{ opacity: note, marginTop: 14, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Saat dua perbandingan setara, kita sebut proporsi. Nilai yang hilang dicari dengan menjaga rasio tetap.
      </div>
    </AbsoluteFill>
  );
};

export const ProporsiVideoDuration = 185;
