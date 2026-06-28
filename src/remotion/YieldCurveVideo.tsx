import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Yield curve: hubungan yield dengan tenor. Normal (naik) vs inverted (turun, sinyal resesi).
const TENOR = [1, 2, 3, 5, 10, 20, 30];
const NORMAL = [5.0, 5.4, 5.7, 6.1, 6.6, 7.0, 7.2];
const INVERTED = [7.0, 6.7, 6.4, 6.0, 5.6, 5.3, 5.1];

export const YieldCurveVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 330;
  const padL = 60;
  const padB = 50;
  const xFor = (i: number) => padL + (i / (TENOR.length - 1)) * (W - padL - 40);
  const yFor = (v: number) => 30 + (1 - (v - 4.5) / 3.2) * (H - padB - 30);

  // fase 1: gambar normal (0-90), fase 2: morph ke inverted (90-160)
  const morph = interpolate(frame, [90, 160], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const draw = interpolate(frame, [20, 85], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const shown = Math.max(1, Math.round(draw * TENOR.length));

  const cur = TENOR.map((_, i) => NORMAL[i] + (INVERTED[i] - NORMAL[i]) * morph);
  const pts = TENOR.slice(0, shown).map((_, i) => `${xFor(i)},${yFor(cur[i])}`).join(" ");
  const note = useFade(165, 18);
  const inverted = morph > 0.5;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Kurva Imbal Hasil (Yield Curve)" sub="Hubungan yield dengan tenor obligasi" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 20 }}>
        <line x1={padL} y1={H - padB} x2={W - 40} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        {TENOR.map((t, i) => (
          <text key={i} x={xFor(i)} y={H - padB + 22} textAnchor="middle" fontSize={14} fill={palette.muted}>{t}th</text>
        ))}
        <polyline points={pts} fill="none" stroke={inverted ? palette.kredit : palette.aset} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
        <text x={(W + padL) / 2} y={H - 10} textAnchor="middle" fontSize={15} fill={palette.muted}>Tenor (jangka waktu)</text>
        <text x={20} y={26} fontSize={15} fill={palette.muted}>Yield</text>
        <text x={W - 50} y={50} textAnchor="end" fontSize={18} fontWeight={800} fill={inverted ? palette.kredit : palette.aset}>
          {inverted ? "Inverted (sinyal risiko resesi)" : "Normal (naik)"}
        </text>
      </svg>

      <div style={{ opacity: note, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Kurva normal: tenor panjang beri yield lebih tinggi. Kurva terbalik (inverted): yield pendek lebih tinggi, sering dianggap sinyal perlambatan ekonomi.
      </div>
    </AbsoluteFill>
  );
};

export const YieldCurveVideoDuration = 200;
