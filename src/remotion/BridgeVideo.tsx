import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Cross-chain bridge: token dikunci di Chain A, wrapped token dicetak 1:1 di Chain B.
// Saat balik, wrapped token dibakar dan token asli dibuka kuncinya.
const ChainCol: React.FC<{
  name: string;
  color: string;
  delay: number;
  children: React.ReactNode;
}> = ({ name, color, delay, children }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        borderRadius: 18,
        padding: "18px 22px",
        width: 300,
        border: `2px solid ${color}`,
        fontFamily: font,
      }}
    >
      <div style={{ fontSize: 20, fontWeight: 800, color }}>{name}</div>
      <div style={{ marginTop: 14 }}>{children}</div>
    </div>
  );
};

const Pill: React.FC<{ text: string; bg: string; opacity?: number }> = ({ text, bg, opacity = 1 }) => (
  <div
    style={{
      opacity,
      background: bg,
      color: "#06121f",
      borderRadius: 12,
      padding: "10px 16px",
      fontSize: 16,
      fontWeight: 800,
      textAlign: "center",
      fontFamily: font,
    }}
  >
    {text}
  </div>
);

export const BridgeVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // Fase 1: lock -> mint (A ke B)
  const lock = interpolate(frame, [30, 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const mint = interpolate(frame, [70, 100], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Fase 2: burn -> unlock (B ke A)
  const burn = interpolate(frame, [140, 170], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const unlock = interpolate(frame, [180, 210], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const phase2 = frame >= 130;
  const note = useFade(212, 18);

  // Token asli di Chain A: terkunci pada fase 1, terbuka lagi setelah unlock
  const aLocked = lock - unlock;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Cross-chain Bridge: Kunci dan Cetak 1:1" sub="Token dikunci di satu rantai, lalu versi terbungkus dicetak di rantai lain" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30, marginTop: 40 }}>
        <ChainCol name="Chain A" color={palette.ekuitas} delay={18}>
          <Pill text="1 Token Asli" bg={palette.aset} />
          <div style={{ marginTop: 10, fontSize: 15, color: palette.muted, opacity: aLocked }}>
            Terkunci di brankas bridge
          </div>
          <div
            style={{
              marginTop: 8,
              opacity: aLocked,
              background: palette.kewajiban,
              color: "#06121f",
              borderRadius: 10,
              padding: "6px 12px",
              fontSize: 14,
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            Status: Dikunci
          </div>
          <div style={{ marginTop: 10, fontSize: 15, color: palette.aset, fontWeight: 700, opacity: unlock }}>
            Token asli dibuka kembali
          </div>
        </ChainCol>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <div style={{ fontSize: 15, color: palette.muted }}>{phase2 ? "burn & unlock" : "lock & mint"}</div>
          <div style={{ fontSize: 40, color: palette.accent, opacity: phase2 ? burn : lock }}>
            {phase2 ? <>&larr;</> : <>&rarr;</>}
          </div>
          <div style={{ fontSize: 13, color: palette.muted, width: 120, textAlign: "center" }}>
            {phase2 ? "Wrapped dibakar, asli dibuka" : "Asli dikunci, wrapped dicetak"}
          </div>
        </div>

        <ChainCol name="Chain B" color={palette.kredit} delay={40}>
          <Pill text="1 Wrapped Token" bg={palette.ekuitas} opacity={phase2 ? mint - burn : mint} />
          <div style={{ marginTop: 10, fontSize: 15, color: palette.muted, opacity: mint - burn }}>
            Cetakan baru, nilai sama 1:1
          </div>
          <div
            style={{
              marginTop: 8,
              opacity: burn,
              background: palette.kredit,
              color: "#06121f",
              borderRadius: 10,
              padding: "6px 12px",
              fontSize: 14,
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            Status: Dibakar
          </div>
        </ChainCol>
      </div>

      <div style={{ opacity: note, marginTop: 38, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Pasokan total tetap terjaga: untuk setiap wrapped token yang beredar, ada satu token asli yang dikunci.
      </div>
    </AbsoluteFill>
  );
};

export const BridgeVideoDuration = 235;
