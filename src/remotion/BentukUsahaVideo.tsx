import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// PT: laba kena PPh Badan, lalu dividen kena pajak lagi (potensi pajak berganda).
// CV/Firma: laba kena PPh Badan, tetapi pembagian laba ke sekutu BUKAN objek pajak.
export const BentukUsahaVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(185, 18);
  const ptLayer2 = interpolate(frame - 90, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ptL1 = interpolate(frame - 40, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cvL1 = interpolate(frame - 60, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="PT vs CV: Jejak Pajak Berbeda" sub="Pembagian laba diperlakukan tidak sama" />
      <div style={{ marginTop: 44, display: "flex", gap: 70, justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.ekuitas, marginBottom: 14 }}>PT (Perseroan)</div>
          <div style={{ opacity: ptL1, background: palette.bgSoft, border: `2px solid ${palette.kewajiban}`, borderRadius: 12, padding: "12px 18px", marginBottom: 10 }}>
            <span style={{ color: palette.kewajiban, fontWeight: 700, fontSize: 15 }}>Laba kena PPh Badan 22%</span>
          </div>
          <div style={{ opacity: ptLayer2, background: palette.bgSoft, border: `2px solid ${palette.kredit}`, borderRadius: 12, padding: "12px 18px" }}>
            <span style={{ color: palette.kredit, fontWeight: 700, fontSize: 15 }}>Dividen kena pajak lagi</span>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.aset, marginBottom: 14 }}>CV / Firma</div>
          <div style={{ opacity: cvL1, background: palette.bgSoft, border: `2px solid ${palette.kewajiban}`, borderRadius: 12, padding: "12px 18px", marginBottom: 10 }}>
            <span style={{ color: palette.kewajiban, fontWeight: 700, fontSize: 15 }}>Laba kena PPh Badan 22%</span>
          </div>
          <div style={{ opacity: cvL1, background: palette.bgSoft, border: `2px solid ${palette.aset}`, borderRadius: 12, padding: "12px 18px" }}>
            <span style={{ color: palette.aset, fontWeight: 700, fontSize: 15 }}>Bagian laba sekutu bukan objek</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 40, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Memilih bentuk usaha adalah keputusan pajak: PT bisa kena lapis kedua lewat dividen, CV tidak.
      </div>
    </AbsoluteFill>
  );
};

export const BentukUsahaVideoDuration = 215;
