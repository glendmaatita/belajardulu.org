import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Mudharabah: pemilik modal (shahibul maal) dan pengelola (mudharib) berbagi
// laba sesuai nisbah yang disepakati; kerugian (bukan karena lalai) ditanggung
// pemilik modal. Berbagi risiko, bukan bunga tetap.
export const BagiHasilSyariahVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(180, 18);
  const grow = (d: number) => interpolate(frame - d, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Bagi Hasil (Mudharabah)" sub="Untung dibagi sesuai nisbah, rugi ditanggung bersama secara adil" />
      <div style={{ marginTop: 46, display: "flex", justifyContent: "center", gap: 40 }}>
        <div style={{ opacity: grow(20), textAlign: "center", background: palette.bgSoft, border: `2px solid ${palette.ekuitas}`, borderRadius: 14, padding: "16px 22px" }}>
          <div style={{ fontSize: 17, fontWeight: 800, color: palette.ekuitas }}>Pemilik modal</div>
          <div style={{ fontSize: 13, color: palette.muted }}>Shahibul maal</div>
          <div style={{ fontSize: 15, color: palette.text, marginTop: 6 }}>Menyediakan dana</div>
        </div>
        <div style={{ opacity: grow(45), textAlign: "center", background: palette.bgSoft, border: `2px solid ${palette.kewajiban}`, borderRadius: 14, padding: "16px 22px" }}>
          <div style={{ fontSize: 17, fontWeight: 800, color: palette.kewajiban }}>Pengelola</div>
          <div style={{ fontSize: 13, color: palette.muted }}>Mudharib</div>
          <div style={{ fontSize: 15, color: palette.text, marginTop: 6 }}>Menjalankan usaha</div>
        </div>
      </div>
      <div style={{ marginTop: 30, textAlign: "center", opacity: grow(90) }}>
        <div style={{ display: "inline-block", background: palette.aset, color: "#06121f", borderRadius: 12, padding: "12px 24px", fontSize: 18, fontWeight: 800 }}>
          Laba dibagi nisbah, mis. 60% : 40%
        </div>
      </div>
      <div style={{ marginTop: 34, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Berbeda dari bunga yang pasti, imbal hasil di sini bergantung hasil usaha nyata, sehingga risiko dibagi.
      </div>
    </AbsoluteFill>
  );
};

export const BagiHasilSyariahVideoDuration = 210;
