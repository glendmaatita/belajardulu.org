import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Incoterms: titik perpindahan tanggung jawab biaya & risiko sepanjang perjalanan barang.
const POS = [
  { x: 60, label: "Gudang\npenjual", term: "EXW" },
  { x: 300, label: "Pelabuhan\nasal", term: "FOB" },
  { x: 620, label: "Pelayaran", term: "CIF/CFR" },
  { x: 900, label: "Tujuan", term: "DAP" },
  { x: 1120, label: "Gudang\npembeli", term: "DDP" },
];

export const IncotermsVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1200;
  // Kapal bergerak dari kiri ke kanan
  const shipX = interpolate(frame, [20, 180], [60, 1120], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const note = useFade(185, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Incoterms: Siapa Tanggung Jawab di Mana?" sub="Tiap istilah menandai titik perpindahan biaya & risiko" />

      <svg viewBox={`0 0 ${W} 360`} style={{ width: "100%", marginTop: 30 }}>
        {/* garis perjalanan */}
        <line x1={60} y1={200} x2={1120} y2={200} stroke="rgba(255,255,255,0.15)" strokeWidth={4} />
        {/* segmen penjual (sky) sampai posisi kapal */}
        <line x1={60} y1={200} x2={shipX} y2={200} stroke={palette.ekuitas} strokeWidth={6} strokeLinecap="round" />

        {POS.map((p, i) => {
          const o = frame > 20 + i * 20 ? 1 : 0;
          return (
            <g key={i} opacity={o}>
              <circle cx={p.x} cy={200} r={10} fill={palette.text} />
              <text x={p.x} y={250} textAnchor="middle" fontSize={18} fill={palette.muted}>
                {p.label.split("\n").map((ln, k) => (
                  <tspan key={k} x={p.x} dy={k === 0 ? 0 : 22}>
                    {ln}
                  </tspan>
                ))}
              </text>
              <text x={p.x} y={160} textAnchor="middle" fontSize={20} fontWeight={800} fill={palette.kewajiban}>
                {p.term}
              </text>
            </g>
          );
        })}

        {/* kapal */}
        <text x={shipX} y={210} textAnchor="middle" fontSize={46}>
          🚢
        </text>
      </svg>

      <div style={{ opacity: note, marginTop: 10, fontSize: 19, color: palette.muted }}>
        Makin ke kanan istilahnya (EXW &rarr; DDP), makin besar tanggung jawab penjual dan makin ringan beban pembeli.
      </div>
    </AbsoluteFill>
  );
};

export const IncotermsVideoDuration = 220;
