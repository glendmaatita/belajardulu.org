import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Perdebatan abadi: Keynes (negara perlu campur tangan menstabilkan permintaan)
// vs Hayek (pasar bebas dan bahaya perencanaan terpusat).
export const DebatKeynesHayekVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(185, 18);
  const left = interpolate(frame - 30, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const right = interpolate(frame - 80, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Keynes vs Hayek" sub="Perdebatan abadi tentang peran negara dalam ekonomi" />
      <div style={{ marginTop: 46, display: "flex", gap: 30, justifyContent: "center" }}>
        <div style={{ flex: 1, opacity: left, transform: `translateX(${(1 - left) * -30}px)`, background: palette.bgSoft, border: `2px solid ${palette.ekuitas}`, borderRadius: 16, padding: "22px 20px" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.ekuitas }}>Keynes</div>
          <div style={{ fontSize: 15, color: palette.text, marginTop: 10 }}>Saat resesi, permintaan agregat jatuh. Negara perlu menaikkan belanja untuk memulihkan lapangan kerja.</div>
        </div>
        <div style={{ flex: 1, opacity: right, transform: `translateX(${(1 - right) * 30}px)`, background: palette.bgSoft, border: `2px solid ${palette.kewajiban}`, borderRadius: 16, padding: "22px 20px" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.kewajiban }}>Hayek</div>
          <div style={{ fontSize: 15, color: palette.text, marginTop: 10 }}>Harga membawa informasi. Perencanaan terpusat dan campur tangan berlebih justru merusak dan berbahaya.</div>
        </div>
      </div>
      <div style={{ marginTop: 34, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Keduanya peraih pengaruh besar. Debat ini masih membentuk kebijakan ekonomi sampai hari ini.
      </div>
    </AbsoluteFill>
  );
};

export const DebatKeynesHayekVideoDuration = 210;
