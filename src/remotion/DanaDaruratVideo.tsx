import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Dana darurat sebagai bantalan yang menyerap guncangan hidup.
const guncangan = ["PHK", "Sakit", "Motor rusak", "Musibah keluarga"];

export const DanaDaruratVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(180, 18);
  const shieldGrow = interpolate(frame - 30, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Dana Darurat: Bantalan Hidup" sub="Menyerap guncangan agar tujuan keuangan tidak berantakan" />
      <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 16 }}>
        {guncangan.map((g, i) => {
          const grow = interpolate(frame - (40 + i * 16), [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ opacity: grow, background: palette.bgSoft, border: `2px solid ${palette.kredit}`, borderRadius: 10, padding: "10px 14px", fontSize: 14, color: palette.kredit, fontWeight: 700 }}>
              {g}
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 26, textAlign: "center", fontSize: 30, color: palette.muted, opacity: shieldGrow }}>&darr;</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ opacity: shieldGrow, transform: `scale(${shieldGrow})`, background: palette.aset, color: "#06121f", borderRadius: 16, padding: "18px 34px", fontSize: 20, fontWeight: 800 }}>
          DANA DARURAT (3-12 bulan pengeluaran)
        </div>
      </div>
      <div style={{ marginTop: 34, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Dengan bantalan ini, kamu tidak perlu berutang atau menjual investasi saat keadaan mendesak datang.
      </div>
    </AbsoluteFill>
  );
};

export const DanaDaruratVideoDuration = 210;
