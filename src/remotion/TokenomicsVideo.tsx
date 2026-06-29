import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Tokenomics: alokasi supply, jadwal vesting bertahap, dan burn.
const alokasi = [
  { label: "Komunitas", nilai: 40, warna: palette.aset },
  { label: "Tim", nilai: 20, warna: palette.ekuitas },
  { label: "Investor", nilai: 20, warna: palette.kewajiban },
  { label: "Treasury", nilai: 20, warna: palette.kredit },
];

const Legenda: React.FC<{ warna: string; label: string; nilai: number; delay: number }> = ({
  warna,
  label,
  nilai,
  delay,
}) => {
  const o = useFade(delay, 12);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, opacity: o, marginTop: 12 }}>
      <div style={{ width: 18, height: 18, borderRadius: 5, background: warna }} />
      <div style={{ fontSize: 20, color: palette.text, fontWeight: 700 }}>{label}</div>
      <div style={{ fontSize: 20, color: palette.muted }}>{nilai}%</div>
    </div>
  );
};

export const TokenomicsVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const total = 100;

  // Vesting: circulating supply naik bertahap lalu burn menguranginya sedikit.
  const beredar = interpolate(frame, [40, 150], [15, 70], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const burn = interpolate(frame, [150, 180], [0, 6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const beredarNet = beredar - burn;

  // Donut alokasi.
  const cx = 150;
  const cy = 150;
  const rad = 120;
  const sweep = interpolate(frame, [20, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  let mulai = -Math.PI / 2;
  const busur = alokasi.map((a) => {
    const sudut = (a.nilai / 100) * Math.PI * 2 * sweep;
    const x1 = cx + rad * Math.cos(mulai);
    const y1 = cy + rad * Math.sin(mulai);
    const x2 = cx + rad * Math.cos(mulai + sudut);
    const y2 = cy + rad * Math.sin(mulai + sudut);
    const besar = sudut > Math.PI ? 1 : 0;
    mulai += (a.nilai / 100) * Math.PI * 2;
    return { d: `M ${cx} ${cy} L ${x1} ${y1} A ${rad} ${rad} 0 ${besar} 1 ${x2} ${y2} Z`, warna: a.warna };
  });

  const note = useFade(185, 18);
  const { scale } = usePop(18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "36px 50px" }}>
      <Title text="Tokenomics: Supply, Vesting, dan Burn" sub="Bagaimana pasokan token dirilis dan dikurangi seiring waktu" />

      <div style={{ display: "flex", gap: 40, marginTop: 14 }}>
        <div style={{ background: palette.bgSoft, borderRadius: 14, padding: "12px 22px" }}>
          <div style={{ fontSize: 15, color: palette.muted }}>Total supply</div>
          <div style={{ fontSize: 30, fontWeight: 800, color: palette.text }}>{total} juta</div>
        </div>
        <div style={{ background: palette.bgSoft, borderRadius: 14, padding: "12px 22px" }}>
          <div style={{ fontSize: 15, color: palette.muted }}>Circulating supply</div>
          <div style={{ fontSize: 30, fontWeight: 800, color: palette.aset }}>{beredarNet.toFixed(0)} juta</div>
        </div>
        <div style={{ background: palette.bgSoft, borderRadius: 14, padding: "12px 22px", opacity: useFade(150, 14) }}>
          <div style={{ fontSize: 15, color: palette.muted }}>Token di-burn</div>
          <div style={{ fontSize: 30, fontWeight: 800, color: palette.kredit }}>{burn.toFixed(0)} juta</div>
        </div>
      </div>

      {/* Bar vesting: bagian beredar vs terkunci */}
      <div style={{ marginTop: 22 }}>
        <div style={{ fontSize: 16, color: palette.muted, marginBottom: 8 }}>Jadwal rilis (vesting bertahap)</div>
        <div
          style={{
            width: 1080,
            height: 46,
            background: palette.bgSoft,
            borderRadius: 12,
            overflow: "hidden",
            display: "flex",
          }}
        >
          <div
            style={{
              width: `${beredarNet}%`,
              background: palette.aset,
              display: "flex",
              alignItems: "center",
              paddingLeft: 14,
              color: "#06121f",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            Beredar
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              paddingLeft: 14,
              color: palette.muted,
              fontSize: 18,
            }}
          >
            Terkunci
          </div>
        </div>
      </div>

      {/* Donut alokasi */}
      <svg
        viewBox="0 0 300 300"
        style={{ position: "absolute", left: 60, bottom: 18, width: 220, height: 220, transform: `scale(${scale})` }}
      >
        {busur.map((b, i) => (
          <path key={i} d={b.d} fill={b.warna} stroke={palette.bg} strokeWidth={3} />
        ))}
        <circle cx={cx} cy={cy} r={56} fill={palette.bg} />
      </svg>

      <div style={{ position: "absolute", left: 430, bottom: 80 }}>
        {alokasi.map((a, i) => (
          <Legenda key={i} warna={a.warna} label={a.label} nilai={a.nilai} delay={70 + i * 12} />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 740,
          width: 440,
          opacity: note,
          fontSize: 18,
          color: palette.muted,
        }}
      >
        Vesting mencegah banjir token sekaligus. Burn memusnahkan token secara permanen sehingga total supply menyusut.
      </div>
    </AbsoluteFill>
  );
};

export const TokenomicsVideoDuration = 220;
