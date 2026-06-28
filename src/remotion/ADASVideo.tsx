import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Permintaan agregat (AD, turun) dan penawaran agregat (AS, naik) menentukan tingkat harga & output ekonomi.
export const ADASVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const padL = 70;
  const padB = 50;
  const x0 = padL;
  const x1 = W - 40;
  const yTop = 30;
  const yBot = H - padB;
  const dx = (t: number) => x0 + t * (x1 - x0);
  const adY = (t: number) => yTop + t * (yBot - yTop);
  const asY = (t: number) => yBot - t * (yBot - yTop);

  const draw = interpolate(frame, [20, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ad: string[] = [];
  const as: string[] = [];
  for (let t = 0; t <= draw + 0.0001; t += 0.02) {
    ad.push(`${dx(t)},${adY(t)}`);
    as.push(`${dx(t)},${asY(t)}`);
  }
  const eqX = dx(0.5);
  const eqY = adY(0.5);
  const showEq = frame > 115;
  const note = useFade(135, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Permintaan & Penawaran Agregat (AD-AS)" sub="Menentukan tingkat harga dan output keseimbangan seluruh ekonomi" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 20 }}>
        <line x1={padL} y1={yBot} x2={x1} y2={yBot} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={yTop} x2={padL} y2={yBot} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Output riil (PDB)</text>
        <text x={20} y={26} fontSize={15} fill={palette.muted}>Tingkat harga</text>
        <polyline points={ad.join(" ")} fill="none" stroke={palette.ekuitas} strokeWidth={4} strokeLinecap="round" />
        <text x={x1} y={adY(1) - 8} textAnchor="end" fontSize={15} fill={palette.ekuitas}>AD (permintaan agregat)</text>
        <polyline points={as.join(" ")} fill="none" stroke={palette.aset} strokeWidth={4} strokeLinecap="round" />
        <text x={x1} y={asY(1) - 8} textAnchor="end" fontSize={15} fill={palette.aset}>AS (penawaran agregat)</text>
        {showEq && (
          <>
            <circle cx={eqX} cy={eqY} r={8} fill={palette.kredit} />
            <text x={eqX + 12} y={eqY - 10} fontSize={16} fill={palette.kredit} fontWeight={800}>keseimbangan makro</text>
          </>
        )}
      </svg>

      <div style={{ opacity: note, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Kebijakan yang menambah permintaan menggeser AD ke kanan: output naik, tetapi bila kapasitas penuh, yang naik justru harga (inflasi).
      </div>
    </AbsoluteFill>
  );
};

export const ADASVideoDuration = 180;
