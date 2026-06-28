import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

export const DiversifikasiVideo: React.FC = () => {
  const frame = useCurrentFrame();
  // jumlah aset bertambah 1..20, risiko turun menuju risiko pasar
  const nAset = Math.floor(interpolate(frame, [30, 170], [1, 20], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const riskFloor = 12;
  const risk = riskFloor + 28 / nAset; // turun seiring jumlah aset
  const note = useFade(175, 18);

  const W = 1000;
  const H = 360;
  const padL = 70;
  const padB = 50;
  const xFor = (n: number) => padL + ((n - 1) / 19) * (W - padL - 40);
  const yMap = (rk: number) => {
    const t = (rk - riskFloor) / 28; // 0..1 (1 = high risk)
    return 20 + (1 - t) * (H - padB - 20);
  };

  const pts: string[] = [];
  for (let n = 1; n <= nAset; n++) {
    const rk = riskFloor + 28 / n;
    pts.push(`${xFor(n)},${yMap(rk)}`);
  }

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Diversifikasi Menurunkan Risiko" sub="Menambah aset berbeda menurunkan risiko, sampai batas risiko pasar" />

      <div style={{ display: "flex", gap: 50, marginTop: 20 }}>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Jumlah aset</div>
          <div style={{ fontSize: 40, fontWeight: 800, color: palette.text }}>{nAset}</div>
        </div>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Risiko portofolio</div>
          <div style={{ fontSize: 40, fontWeight: 800, color: palette.aset }}>{risk.toFixed(1)}%</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 10 }}>
        <line x1={padL} x2={W - 40} y1={yMap(riskFloor)} y2={yMap(riskFloor)} stroke="rgba(255,255,255,0.12)" strokeDasharray="6" />
        <text x={W - 40} y={yMap(riskFloor) - 8} textAnchor="end" fontSize={16} fill={palette.muted}>risiko pasar (tak bisa didiversifikasi)</text>
        <polyline points={pts.join(" ")} fill="none" stroke={palette.aset} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
        {pts.map((p, i) => {
          const [x, y] = p.split(",");
          return <circle key={i} cx={x} cy={y} r={4} fill={palette.aset} />;
        })}
        <text x={padL} y={H - 16} fontSize={16} fill={palette.muted}>1 aset</text>
        <text x={W - 80} y={H - 16} fontSize={16} fill={palette.muted}>20 aset</text>
      </svg>

      <div style={{ opacity: note, marginTop: 6, fontSize: 18, color: palette.muted }}>
        Risiko spesifik perusahaan bisa dihilangkan dengan diversifikasi; risiko pasar tetap ada.
      </div>
    </AbsoluteFill>
  );
};

export const DiversifikasiVideoDuration = 210;
