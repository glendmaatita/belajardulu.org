import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade, usePop } from "./anim";

// Layer 2 rollup: ratusan transaksi diproses di luar rantai (L2) lalu diringkas
// jadi satu bukti dan ditulis ke Layer 1. Biaya jadi jauh lebih murah.
export const RollupVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // 16 transaksi kecil yang muncul bertahap lalu "menyusut" jadi satu batch.
  const cells = Array.from({ length: 16 });
  const collapse = interpolate(frame, [70, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const batch = usePop(120);
  const l1 = usePop(150);
  const optimistic = useFade(170, 16);
  const zk = useFade(186, 16);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title
        text="Rollup Layer 2"
        sub="Ratusan transaksi diproses di L2 lalu diringkas dan dicatat di Layer 1"
      />

      <div style={{ display: "flex", gap: 24, marginTop: 22, alignItems: "center" }}>
        <div
          style={{
            flex: 1.2,
            background: palette.bgSoft,
            borderRadius: 18,
            padding: 20,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ fontSize: 16, color: palette.muted, marginBottom: 10 }}>
            Layer 2 (di luar rantai)
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
              gap: 6,
              transform: `scale(${1 - collapse * 0.35})`,
              opacity: 1 - collapse * 0.55,
              transformOrigin: "center",
            }}
          >
            {cells.map((_, i) => {
              const appear = interpolate(frame, [20 + i * 2.5, 30 + i * 2.5], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div
                  key={i}
                  style={{
                    height: 26,
                    borderRadius: 6,
                    background: palette.accent,
                    opacity: appear,
                  }}
                />
              );
            })}
          </div>
          <div style={{ fontSize: 14, color: palette.muted, marginTop: 12 }}>
            Banyak transaksi, biaya per transaksi sangat kecil.
          </div>
        </div>

        <div style={{ fontSize: 34, color: palette.accent }}>&rarr;</div>

        <div
          style={{
            transform: `scale(${batch.scale})`,
            opacity: batch.opacity,
            background: palette.ekuitas,
            color: "#06121f",
            borderRadius: 14,
            padding: "16px 20px",
            textAlign: "center",
            minWidth: 150,
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 700, opacity: 0.7 }}>Batch ringkas</div>
          <div style={{ fontSize: 22, fontWeight: 800, marginTop: 2 }}>1 bukti</div>
        </div>

        <div style={{ fontSize: 34, color: palette.accent }}>&rarr;</div>

        <div
          style={{
            flex: 0.8,
            transform: `scale(${l1.scale})`,
            opacity: l1.opacity,
            background: palette.bgSoft,
            borderRadius: 18,
            padding: 20,
            border: `2px solid ${palette.aset}`,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 16, color: palette.muted }}>Layer 1</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.aset, marginTop: 4 }}>
            Tercatat aman
          </div>
          <div style={{ fontSize: 14, color: palette.muted, marginTop: 6 }}>
            Keamanan rantai utama
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 20, marginTop: 24 }}>
        <div
          style={{
            flex: 1,
            opacity: optimistic,
            background: "rgba(251,191,36,0.12)",
            border: "1px solid rgba(251,191,36,0.4)",
            borderRadius: 14,
            padding: "16px 18px",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 800, color: palette.kewajiban }}>
            Optimistic rollup
          </div>
          <div style={{ fontSize: 15, color: palette.text, marginTop: 6 }}>
            Diasumsikan jujur, ada masa sanggah untuk menantang batch yang salah.
          </div>
        </div>
        <div
          style={{
            flex: 1,
            opacity: zk,
            background: "rgba(52,211,153,0.12)",
            border: "1px solid rgba(52,211,153,0.4)",
            borderRadius: 14,
            padding: "16px 18px",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 800, color: palette.aset }}>zk-rollup</div>
          <div style={{ fontSize: 15, color: palette.text, marginTop: 6 }}>
            Menyertakan bukti validitas (zero-knowledge) sehingga langsung sahih.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const RollupVideoDuration = 215;
