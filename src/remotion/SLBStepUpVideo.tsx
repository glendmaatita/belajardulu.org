import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Sustainability-Linked Bond: kupon naik (step-up) jika target keberlanjutan (KPI) tidak tercapai.
export const SLBStepUpVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const tercapai = usePop(30);
  const gagal = usePop(70);
  const note = useFade(140, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Sustainability-Linked Bond" sub="Kupon terkait pencapaian target keberlanjutan (KPI)" />

      <div style={{ display: "flex", gap: 50, marginTop: 50, justifyContent: "center" }}>
        <div style={{ transform: `scale(${tercapai.scale})`, opacity: tercapai.opacity, background: palette.bgSoft, borderRadius: 18, padding: "26px 30px", width: 360, textAlign: "center", borderTop: `6px solid ${palette.aset}` }}>
          <div style={{ fontSize: 40 }}>✅</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginTop: 8 }}>KPI tercapai</div>
          <div style={{ fontSize: 16, color: palette.muted, marginTop: 6 }}>mis. emisi turun 30% tepat waktu</div>
          <div style={{ fontSize: 34, fontWeight: 900, color: palette.aset, marginTop: 14 }}>Kupon tetap 6%</div>
        </div>

        <div style={{ transform: `scale(${gagal.scale})`, opacity: gagal.opacity, background: palette.bgSoft, borderRadius: 18, padding: "26px 30px", width: 360, textAlign: "center", borderTop: `6px solid ${palette.kredit}` }}>
          <div style={{ fontSize: 40 }}>⚠️</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginTop: 8 }}>KPI gagal</div>
          <div style={{ fontSize: 16, color: palette.muted, marginTop: 6 }}>target keberlanjutan meleset</div>
          <div style={{ fontSize: 34, fontWeight: 900, color: palette.kredit, marginTop: 14 }}>Kupon naik ke 6,25%</div>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 34, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Step-up kupon memberi penerbit insentif finansial nyata untuk menepati janji iklim. Berbeda dari green bond, dana SLB bebas dipakai untuk tujuan umum.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const SLBStepUpVideoDuration = 180;
