import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Fork blockchain: rantai bercabang. Soft fork vs hard fork.
const Blok: React.FC<{ x: number; y: number; color: string; delay: number; label: string }> = ({ x, y, color, delay, label }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `scale(${scale})`,
        opacity,
        width: 60,
        height: 44,
        background: color,
        color: "#06121f",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
        fontWeight: 800,
        boxShadow: `0 8px 22px ${color}44`,
      }}
    >
      {label}
    </div>
  );
};

export const ForkBlockchainVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const lineOp = interpolate(frame, [30, 90], [0, 0.5], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const note = useFade(172, 18);
  const labelSoft = useFade(60, 16);
  const labelHard = useFade(110, 16);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Fork Blockchain: Rantai Bercabang" sub="Soft fork tetap kompatibel mundur, hard fork memisah jadi dua rantai" />

      <div style={{ position: "relative", height: 360, marginTop: 14 }}>
        <svg viewBox="0 0 1000 360" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <g stroke={palette.muted} strokeWidth={3} opacity={lineOp}>
            <line x1="120" y1="62" x2="220" y2="62" />
            <line x1="280" y1="62" x2="380" y2="62" />
          </g>
          <g stroke={palette.aset} strokeWidth={3} opacity={lineOp}>
            <line x1="440" y1="62" x2="540" y2="62" />
            <line x1="600" y1="62" x2="700" y2="62" />
          </g>
          <g stroke={palette.kredit} strokeWidth={3} opacity={lineOp}>
            <line x1="438" y1="74" x2="540" y2="248" />
            <line x1="600" y1="248" x2="700" y2="248" />
          </g>
        </svg>

        <Blok x={60} y={40} color={palette.muted} delay={20} label="#1" />
        <Blok x={220} y={40} color={palette.muted} delay={30} label="#2" />
        <Blok x={380} y={40} color={palette.kewajiban} delay={42} label="#3" />

        <Blok x={540} y={40} color={palette.aset} delay={64} label="#4a" />
        <Blok x={700} y={40} color={palette.aset} delay={74} label="#5a" />

        <Blok x={540} y={226} color={palette.kredit} delay={100} label="#4b" />
        <Blok x={700} y={226} color={palette.kredit} delay={110} label="#5b" />

        <div style={{ position: "absolute", left: 760, top: 48, opacity: labelSoft, fontSize: 16, color: palette.aset, fontWeight: 700, width: 200 }}>
          Rantai utama lanjut (soft fork: node lama tetap menerima)
        </div>
        <div style={{ position: "absolute", left: 760, top: 226, opacity: labelHard, fontSize: 16, color: palette.kredit, fontWeight: 700, width: 200 }}>
          Rantai baru terpisah (hard fork: aturan tak kompatibel)
        </div>

        <div style={{ position: "absolute", left: 60, top: 300, opacity: labelHard, fontSize: 17, color: palette.text }}>
          Contoh hard fork: Ethereum &rarr; Ethereum Classic (2016), Bitcoin &rarr; Bitcoin Cash (2017).
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 2, fontSize: 18, color: palette.muted }}>
        Soft fork memperketat aturan tanpa memecah jaringan. Hard fork mengubah aturan secara mendasar sehingga lahir dua koin berbeda.
      </div>
    </AbsoluteFill>
  );
};

export const ForkBlockchainVideoDuration = 205;
