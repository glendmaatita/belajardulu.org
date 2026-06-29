import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Seed phrase 12/24 kata (BIP-39) sebagai master key yang menurunkan banyak kunci.
const kata = ["kebun", "ombak", "perak", "lentera", "rajawali", "embun", "gerbang", "musafir", "kabut", "anggur", "selasar", "bintang"];

export const SeedPhraseVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const lineOp = interpolate(frame, [110, 150], [0, 0.45], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const master = usePop(96);
  const warn = useFade(176, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Seed Phrase: Kunci Induk Dompet" sub="12 atau 24 kata standar BIP-39 yang menurunkan semua kunci dan alamatmu" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10, marginTop: 18 }}>
        {kata.map((k, i) => {
          const { scale, opacity } = usePop(12 + i * 5);
          return (
            <div
              key={k}
              style={{
                transform: `scale(${scale})`,
                opacity,
                background: palette.bgSoft,
                border: `2px solid ${palette.ekuitas}`,
                borderRadius: 10,
                padding: "8px 6px",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: 12, color: palette.muted }}>{i + 1}. </span>
              <span style={{ fontSize: 16, fontWeight: 700, color: palette.text }}>{k}</span>
            </div>
          );
        })}
      </div>

      <div style={{ position: "relative", height: 160, marginTop: 14 }}>
        <svg viewBox="0 0 1000 160" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <g stroke={palette.accent} strokeWidth={2} opacity={lineOp}>
            <line x1="500" y1="56" x2="180" y2="130" />
            <line x1="500" y1="56" x2="400" y2="130" />
            <line x1="500" y1="56" x2="620" y2="130" />
            <line x1="500" y1="56" x2="840" y2="130" />
          </g>
        </svg>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              transform: `scale(${master.scale})`,
              opacity: master.opacity,
              background: palette.kewajiban,
              color: "#1a1205",
              borderRadius: 14,
              padding: "10px 22px",
              fontSize: 18,
              fontWeight: 800,
              boxShadow: "0 12px 30px rgba(251,191,36,0.35)",
            }}
          >
            Master Key (HD Wallet, BIP-32)
          </div>
        </div>

        <div style={{ position: "absolute", top: 116, width: "100%", display: "flex", justifyContent: "space-around" }}>
          {["Kunci & Alamat 1", "Kunci & Alamat 2", "Kunci & Alamat 3", "Kunci & Alamat 4"].map((a, i) => {
            const { scale, opacity } = usePop(150 + i * 6);
            return (
              <div
                key={a}
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                  background: palette.bgSoft,
                  border: `2px solid ${palette.aset}`,
                  color: palette.aset,
                  borderRadius: 10,
                  padding: "6px 12px",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {a}
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          opacity: warn,
          marginTop: 10,
          fontSize: 18,
          color: palette.kredit,
          fontWeight: 700,
        }}
      >
        Rahasiakan seed phrase. Jangan difoto, jangan diketik online, jangan dibagikan. Siapa pun yang tahu bisa menguras dompetmu.
      </div>
    </AbsoluteFill>
  );
};

export const SeedPhraseVideoDuration = 215;
