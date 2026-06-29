import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade, usePop } from "./anim";

// Rug pull: pengembang membangun token, menarik dana investor, lalu menarik
// likuiditas dan kabur sehingga harga jatuh ke nol.
export const RugPullVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // Tahapan: 0 bangun, 1 dana masuk, 2 likuiditas ditarik, 3 harga nol.
  const W = 1000;
  const H = 280;
  const padL = 70;
  const padB = 44;

  // Harga naik perlahan lalu jatuh ke nol setelah likuiditas ditarik (frame 110).
  const harga = (t: number) => {
    if (t < 22) return 0.2 + (t / 22) * 1.6; // naik dari hype
    return Math.max(0.02, 1.8 - (t - 22) * 0.9); // ambruk
  };
  const tMax = 30;
  const maxV = 2;
  const xFor = (t: number) => padL + (t / tMax) * (W - padL - 40);
  const yFor = (v: number) => 24 + (1 - v / maxV) * (H - padB - 24);

  const prog = interpolate(frame, [40, 150], [0, tMax], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const garis: string[] = [];
  for (let t = 0; t <= prog + 0.0001; t += 0.5) {
    garis.push(`${xFor(t)},${yFor(harga(t))}`);
  }

  const bahaya = useFade(160, 18);
  const hargaKini = harga(prog);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Rug Pull: Saat Pengembang Kabur" sub="Tim menarik likuiditas, harga token jatuh ke nol, dana investor lenyap" />

      <div style={{ display: "flex", gap: 14, marginTop: 14 }}>
        <Chip label="1. Bangun proyek" value="Token baru" bg={palette.ekuitas} delay={14} />
        <Chip label="2. Dana masuk" value="Investor beli" bg={palette.aset} delay={28} />
        <Chip label="3. Likuiditas ditarik" value="Tim kabur" bg={palette.kredit} delay={42} />
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 12 }}>
        <line x1={padL} y1={H - padB} x2={W - 40} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <polyline points={garis.join(" ")} fill="none" stroke={palette.kredit} strokeWidth={4} strokeLinecap="round" />
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Harga token sepanjang waktu</text>
        <text x={xFor(prog)} y={yFor(hargaKini) - 12} textAnchor="end" fontSize={15} fill={palette.kredit} fontWeight={700}>
          Rp{hargaKini.toFixed(2)}
        </text>
      </svg>

      <div style={{ opacity: bahaya, marginTop: 6 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: palette.kewajiban, marginBottom: 6 }}>Tanda bahaya:</div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["Tim anonim tanpa identitas", "Janji imbal hasil tak masuk akal", "Likuiditas tidak dikunci"].map((t) => (
            <div
              key={t}
              style={{
                background: palette.bgSoft,
                border: "1px solid rgba(244,114,182,0.5)",
                borderRadius: 12,
                padding: "10px 16px",
                fontSize: 16,
                color: palette.text,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Chip: React.FC<{ label: string; value: string; bg: string; delay: number }> = ({ label, value, bg, delay }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        borderLeft: `4px solid ${bg}`,
        borderRadius: 12,
        padding: "12px 18px",
        fontFamily: font,
        flex: 1,
      }}
    >
      <div style={{ fontSize: 14, color: palette.muted }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginTop: 2 }}>{value}</div>
    </div>
  );
};

export const RugPullVideoDuration = 200;
