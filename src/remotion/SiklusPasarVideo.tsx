import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade, usePop } from "./anim";

// Siklus pasar kripto yang berulang, sering dikaitkan dengan halving Bitcoin.
export const SiklusPasarVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 300;
  const padL = 50;
  const padB = 44;

  // Tiga gelombang siklus: puncak 2013, 2017, 2021; dasar 2018, 2022.
  const titik = [
    { x: 0, y: 0.18, label: "" },
    { x: 0.16, y: 0.78, label: "Puncak 2013" },
    { x: 0.3, y: 0.22, label: "" },
    { x: 0.5, y: 0.88, label: "Puncak 2017" },
    { x: 0.62, y: 0.12, label: "Bear 2018" },
    { x: 0.82, y: 0.96, label: "Puncak 2021" },
    { x: 0.96, y: 0.16, label: "Bear 2022" },
  ];

  const xFor = (f: number) => padL + f * (W - padL - 30);
  const yFor = (v: number) => 28 + (1 - v) * (H - padB - 28);

  const prog = interpolate(frame, [20, 175], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const pts: string[] = [];
  for (const t of titik) {
    if (t.x <= prog + 0.0001) pts.push(`${xFor(t.x)},${yFor(t.y)}`);
  }

  const legend = useFade(178, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Siklus Pasar Kripto Berulang" sub="Bull dan bear bergantian, kerap selaras dengan halving Bitcoin tiap sekitar empat tahun" />

      <div style={{ display: "flex", gap: 18, marginTop: 14 }}>
        {[
          { t: "Euforia", c: palette.aset, d: 30 },
          { t: "Puncak", c: palette.kewajiban, d: 70 },
          { t: "Kapitulasi", c: palette.kredit, d: 110 },
          { t: "Akumulasi", c: palette.ekuitas, d: 150 },
        ].map((f) => {
          const { scale, opacity } = usePop(f.d);
          return (
            <div
              key={f.t}
              style={{
                transform: `scale(${scale})`,
                opacity,
                background: palette.bgSoft,
                border: `2px solid ${f.c}`,
                color: f.c,
                borderRadius: 12,
                padding: "8px 16px",
                fontSize: 17,
                fontWeight: 700,
              }}
            >
              {f.t}
            </div>
          );
        })}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 12 }}>
        <line x1={padL} y1={H - padB} x2={W - 30} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={padL} y1={20} x2={padL} y2={H - padB} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <polyline points={pts.join(" ")} fill="none" stroke={palette.aset} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
        {titik.map((t) =>
          t.label && t.x <= prog + 0.0001 ? (
            <g key={t.label}>
              <circle cx={xFor(t.x)} cy={yFor(t.y)} r={6} fill={t.y > 0.5 ? palette.kewajiban : palette.kredit} />
              <text
                x={xFor(t.x)}
                y={t.y > 0.5 ? yFor(t.y) - 12 : yFor(t.y) + 22}
                textAnchor="middle"
                fontSize={14}
                fontWeight={700}
                fill={t.y > 0.5 ? palette.kewajiban : palette.kredit}
              >
                {t.label}
              </text>
            </g>
          ) : null
        )}
        <text x={(W + padL) / 2} y={H - 10} textAnchor="middle" fontSize={14} fill={palette.muted}>Waktu &rarr; harga naik turun berulang</text>
      </svg>

      <div style={{ opacity: legend, marginTop: 8, fontSize: 18, color: palette.muted }}>
        Polanya berulang, tetapi tidak ada jaminan masa depan meniru masa lalu. Kelola risiko, jangan terbawa euforia di puncak.
      </div>
    </AbsoluteFill>
  );
};

export const SiklusPasarVideoDuration = 210;
