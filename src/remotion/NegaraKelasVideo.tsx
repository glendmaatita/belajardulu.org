import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Teori negara Marxis: negara sebagai alat kelas dominan, lalu (dalam visi Marx)
// "melayu" atau memudar saat masyarakat tanpa kelas tercapai.
export const NegaraKelasVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(180, 18);
  const stateGrow = interpolate(frame - 30, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fade = interpolate(frame - 130, [0, 40], [1, 0.2], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Negara menurut Marxisme" sub="Alat dominasi kelas yang, dalam visi Marx, akan memudar" />
      <div style={{ marginTop: 50, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ opacity: stateGrow * fade, background: palette.kredit, color: "#fff", borderRadius: 14, padding: "16px 30px", fontSize: 22, fontWeight: 800 }}>
          NEGARA
        </div>
        <div style={{ fontSize: 15, color: palette.muted, opacity: stateGrow }}>melayani kepentingan</div>
        <div style={{ opacity: stateGrow, background: palette.bgSoft, border: `2px solid ${palette.kewajiban}`, borderRadius: 12, padding: "12px 24px", fontSize: 17, fontWeight: 700, color: palette.kewajiban }}>
          Kelas dominan (pemilik alat produksi)
        </div>
      </div>
      <div style={{ marginTop: 34, textAlign: "center", opacity: interpolate(frame - 140, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        <span style={{ fontSize: 16, color: palette.aset, fontWeight: 700 }}>
          Dalam masyarakat tanpa kelas, fungsi penindas negara dianggap memudar (withering away)
        </span>
      </div>
      <div style={{ marginTop: 30, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Engels menyebut negara "komite eksekutif" kelas borjuasi. Kritik: dalam praktik, negara komunis justru membesar.
      </div>
    </AbsoluteFill>
  );
};

export const NegaraKelasVideoDuration = 210;
