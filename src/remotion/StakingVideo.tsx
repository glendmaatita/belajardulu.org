import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade, usePop } from "./anim";

// Staking: pemegang token mengunci aset untuk mengamankan jaringan Proof of Stake
// dan menerima imbalan berkala. Ada risiko slashing bila validator nakal.
export const StakingVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // Imbalan tumbuh berkala (efek menumpuk dari staking).
  const reward = interpolate(frame, [90, 175], [0, 5.2], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const slash = useFade(150, 20);

  const langkah = [
    { delay: 18, icon: "Kunci", title: "Stake token", note: "kunci aset di jaringan", color: palette.ekuitas },
    { delay: 42, icon: "Jaga", title: "Jadi validator atau delegasi", note: "bantu amankan jaringan", color: palette.aset },
    { delay: 66, icon: "Reward", title: "Terima imbalan", note: "dibayar berkala", color: palette.kewajiban },
  ];

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Staking di Proof of Stake" sub="Kunci token untuk mengamankan jaringan dan dapatkan imbalan berkala" />

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 22 }}>
        {langkah.map((l, i) => {
          const { scale, opacity } = usePop(l.delay);
          return (
            <div key={l.title} style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
              <div
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                  background: palette.bgSoft,
                  borderTop: `4px solid ${l.color}`,
                  borderRadius: 14,
                  padding: "16px 18px",
                  flex: 1,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700, color: l.color }}>{l.icon}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: palette.text, marginTop: 4 }}>{l.title}</div>
                <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>{l.note}</div>
              </div>
              {i < langkah.length - 1 && (
                <div style={{ fontSize: 34, color: palette.accent, opacity }}>&rarr;</div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: 18, marginTop: 24 }}>
        <div style={{ flex: 1, background: palette.bgSoft, borderRadius: 14, padding: "18px 22px" }}>
          <div style={{ fontSize: 15, color: palette.muted }}>Imbalan terkumpul (dari 100 token)</div>
          <div style={{ fontSize: 40, fontWeight: 800, color: palette.aset }}>+{reward.toFixed(1)} token</div>
          <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>tumbuh berkala selama token dikunci</div>
        </div>
        <div
          style={{
            flex: 1,
            opacity: slash,
            background: palette.bgSoft,
            border: "1px solid rgba(244,114,182,0.5)",
            borderRadius: 14,
            padding: "18px 22px",
          }}
        >
          <div style={{ fontSize: 15, color: palette.kredit, fontWeight: 700 }}>Risiko slashing</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginTop: 4 }}>Sebagian stake dipotong</div>
          <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>bila validator nakal atau lalai menjaga jaringan</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const StakingVideoDuration = 205;
