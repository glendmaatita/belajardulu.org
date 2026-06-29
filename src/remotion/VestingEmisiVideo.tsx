import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Jadwal vesting & emisi: token tim/investor terkunci, dirilis bertahap (ada cliff),
// emisi menambah pasokan, burn mengurangi. Kurva pasokan beredar naik bertahap.
export const VestingEmisiVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const padL = 70;
  const padB = 46;
  const bulanMax = 24;
  const cliff = 6; // 6 bulan terkunci penuh

  // Pasokan beredar: datar saat cliff, lalu naik bertahap tiap unlock.
  const pasokan = (t: number) => {
    if (t <= cliff) return 20; // hanya pasokan publik awal
    const unlock = Math.min(1, (t - cliff) / (bulanMax - cliff));
    return 20 + unlock * 60; // unlock tim & investor sampai total 80
  };
  const maxV = 90;
  const xFor = (t: number) => padL + (t / bulanMax) * (W - padL - 40);
  const yFor = (v: number) => 28 + (1 - v / maxV) * (H - padB - 28);

  const prog = interpolate(frame, [25, 160], [0, bulanMax], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const area: string[] = [`${xFor(0)},${yFor(0)}`];
  for (let t = 0; t <= prog + 0.0001; t += 0.5) {
    area.push(`${xFor(t)},${yFor(pasokan(t))}`);
  }
  area.push(`${xFor(prog)},${yFor(0)}`);

  const note = useFade(165, 18);
  const beredarKini = pasokan(prog);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Vesting & Emisi Token" sub="Token tim terkunci lalu dirilis bertahap, emisi menambah pasokan beredar" />

      <div style={{ display: "flex", gap: 40, marginTop: 12 }}>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Bulan ke</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: palette.text }}>{Math.round(prog)}</div>
        </div>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Pasokan beredar</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: palette.ekuitas }}>{beredarKini.toFixed(0)} juta</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 8 }}>
        <line x1={padL} y1={H - padB} x2={W - 40} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={22} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <polygon points={area.join(" ")} fill="rgba(96,165,250,0.22)" />
        <polyline
          points={area.slice(1, -1).join(" ")}
          fill="none"
          stroke={palette.ekuitas}
          strokeWidth={4}
          strokeLinecap="round"
        />
        {prog >= cliff && (
          <>
            <line x1={xFor(cliff)} y1={28} x2={xFor(cliff)} y2={H - padB} stroke={palette.kewajiban} strokeWidth={2} strokeDasharray="6" />
            <text x={xFor(cliff) + 6} y={44} fontSize={14} fill={palette.kewajiban}>Cliff: unlock pertama</text>
          </>
        )}
        <text x={(W + padL) / 2} y={H - 12} textAnchor="middle" fontSize={15} fill={palette.muted}>Waktu (bulan)</text>
      </svg>

      <div style={{ opacity: note, marginTop: 6, fontSize: 18, color: palette.muted }}>
        Sebelum cliff pasokan datar. Setelah cliff, unlock bertahap menambah pasokan. Emisi menambah, burn mengurangi.
      </div>
    </AbsoluteFill>
  );
};

export const VestingEmisiVideoDuration = 205;
