import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Jadwal pasokan Bitcoin: block reward berkurang separuh tiap ~4 tahun, menuju batas 21 juta BTC.
const reward = [
  { era: "2009", nilai: 50 },
  { era: "2012", nilai: 25 },
  { era: "2016", nilai: 12.5 },
  { era: "2020", nilai: 6.25 },
];

const RewardBar: React.FC<{ era: string; nilai: number; maxV: number; delay: number }> = ({ era, nilai, maxV, delay }) => {
  const { opacity } = usePop(delay);
  const frame = useCurrentFrame();
  const grow = interpolate(frame - delay, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const h = (nilai / maxV) * 180 * grow;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity, fontFamily: font }}>
      <div style={{ fontSize: 16, fontWeight: 800, color: palette.kewajiban, marginBottom: 6 }}>{nilai} BTC</div>
      <div
        style={{
          width: 70,
          height: h,
          background: palette.kewajiban,
          borderRadius: "8px 8px 0 0",
        }}
      />
      <div style={{ fontSize: 15, color: palette.muted, marginTop: 8 }}>{era}</div>
    </div>
  );
};

export const HalvingVideo: React.FC = () => {
  const frame = useCurrentFrame();
  // Pasokan beredar menuju plafon 21 juta BTC (ilustrasi konvergensi).
  const supplyProg = interpolate(frame, [30, 170], [0, 19.7], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fillPct = (supplyProg / 21) * 100;
  const note = useFade(180, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Halving: Pasokan yang Mengetat" sub="Block reward berkurang separuh tiap sekitar 4 tahun" />

      <div style={{ display: "flex", gap: 40, marginTop: 26 }}>
        <div>
          <div style={{ fontSize: 16, color: palette.muted, marginBottom: 12 }}>Imbalan per blok</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 20, height: 200 }}>
            {reward.map((r, i) => (
              <RewardBar key={r.era} era={r.era} nilai={r.nilai} maxV={50} delay={30 + i * 22} />
            ))}
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, color: palette.muted, marginBottom: 12 }}>
            Total beredar menuju plafon 21 juta BTC
          </div>
          <div
            style={{
              width: "100%",
              height: 56,
              background: palette.bgSoft,
              borderRadius: 12,
              overflow: "hidden",
              border: `2px solid ${palette.aset}`,
            }}
          >
            <div
              style={{
                width: `${fillPct}%`,
                height: "100%",
                background: palette.aset,
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            <div style={{ fontSize: 26, fontWeight: 800, color: palette.aset }}>
              {supplyProg.toFixed(1)} juta BTC
            </div>
            <div style={{ fontSize: 16, color: palette.muted }}>plafon 21 juta</div>
          </div>
          <div style={{ marginTop: 20, fontSize: 16, color: palette.muted, lineHeight: 1.5 }}>
            Setiap halving memperlambat laju koin baru. Pasokan mendekati batas tetapi tidak pernah melewati
            21 juta.
          </div>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted, lineHeight: 1.5, maxWidth: 1000 }}>
        Kelangkaan ini dirancang sejak awal dalam kode: 50 lalu 25 lalu 12,5 lalu 6,25 BTC, dan seterusnya
        hingga imbalan habis sekitar tahun 2140.
      </div>
    </AbsoluteFill>
  );
};

export const HalvingVideoDuration = 215;
