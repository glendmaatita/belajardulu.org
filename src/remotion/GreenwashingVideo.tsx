import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Greenwashing: klaim hijau yang besar tetapi bukti/dampak nyatanya kecil.
export const GreenwashingVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const claimPop = usePop(20);
  const buktiPop = usePop(60);
  const note = useFade(130, 18);

  // gelembung klaim besar, bukti kecil
  const claimR = 90;
  const buktiR = 28;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Greenwashing: Klaim Besar, Bukti Kecil" sub="Ketika narasi hijau jauh melebihi dampak sebenarnya" />

      <div style={{ display: "flex", gap: 90, marginTop: 60, justifyContent: "center", alignItems: "center" }}>
        <div style={{ transform: `scale(${claimPop.scale})`, opacity: claimPop.opacity, textAlign: "center" }}>
          <svg width={220} height={220} viewBox="0 0 220 220">
            <circle cx={110} cy={110} r={claimR} fill={palette.aset} opacity={0.85} />
            <text x={110} y={118} textAnchor="middle" fontSize={22} fontWeight={800} fill="#06121f">KLAIM</text>
          </svg>
          <div style={{ fontSize: 18, color: palette.muted }}>"100% ramah lingkungan"</div>
        </div>

        <div style={{ transform: `scale(${buktiPop.scale})`, opacity: buktiPop.opacity, textAlign: "center" }}>
          <svg width={220} height={220} viewBox="0 0 220 220">
            <circle cx={110} cy={110} r={buktiR} fill={palette.kewajiban} />
            <text x={110} y={116} textAnchor="middle" fontSize={13} fontWeight={800} fill="#06121f">bukti</text>
          </svg>
          <div style={{ fontSize: 18, color: palette.muted }}>data & dampak nyata kecil</div>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted }}>
        Tanda bahaya: klaim tanpa data, istilah kabur ("eco", "natural"), tidak ada target terukur, atau hanya menonjolkan satu hal kecil sambil menutupi dampak besar.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const GreenwashingVideoDuration = 180;
