import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Struktur modal: WACC membentuk kurva U seiring naiknya proporsi utang.
// Sedikit utang menurunkan WACC (bunga lebih murah + tax shield), terlalu banyak menaikkannya (risiko).
export const StrukturModalVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 340;
  const padL = 70;
  const padB = 50;

  // WACC(d) kurva U; d = rasio utang 0..0.9
  const waccAt = (d: number) => 12 - 10 * d + 14 * d * d; // minimum sekitar d=0.36
  const xFor = (d: number) => padL + (d / 0.9) * (W - padL - 40);
  const yFor = (w: number) => 30 + (1 - (w - 8) / 8) * (H - padB - 30); // map ~8..16

  const progress = interpolate(frame, [20, 170], [0, 0.9], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pts: string[] = [];
  for (let d = 0; d <= progress + 0.0001; d += 0.03) pts.push(`${xFor(d)},${yFor(waccAt(d))}`);

  const optD = 0.36;
  const note = useFade(175, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Struktur Modal & Kurva WACC" sub="Sedikit utang menurunkan biaya modal, terlalu banyak menaikkannya" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 24 }}>
        <line x1={padL} y1={H - padB} x2={W - 40} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={16} fill={palette.muted}>Proporsi utang dalam struktur modal</text>
        <text x={20} y={28} fontSize={16} fill={palette.muted}>WACC</text>

        <polyline points={pts.join(" ")} fill="none" stroke={palette.accent} strokeWidth={4} strokeLinecap="round" />

        {progress >= optD && (
          <>
            <circle cx={xFor(optD)} cy={yFor(waccAt(optD))} r={8} fill={palette.aset} />
            <line x1={xFor(optD)} y1={yFor(waccAt(optD))} x2={xFor(optD)} y2={H - padB} stroke={palette.aset} strokeDasharray="5" />
            <text x={xFor(optD)} y={yFor(waccAt(optD)) - 16} textAnchor="middle" fontSize={16} fill={palette.aset} fontWeight={700}>
              WACC minimum (struktur optimal)
            </text>
          </>
        )}
      </svg>

      <div style={{ opacity: note, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Ada titik optimal: utang memberi tax shield, tetapi utang berlebih menaikkan risiko gagal bayar dan biaya modal.
      </div>
    </AbsoluteFill>
  );
};

export const StrukturModalVideoDuration = 210;
