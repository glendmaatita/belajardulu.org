import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Marine insurance: perjalanan laut penuh risiko; klausul ICC A/B/C memberi tingkat perlindungan berbeda.
const LAYER = [
  { nama: "ICC C", cakup: "Risiko besar saja (kebakaran, kapal tenggelam)", w: 40, warna: palette.muted },
  { nama: "ICC B", cakup: "Menengah, plus gempa, masuk air laut", w: 65, warna: palette.ekuitas },
  { nama: "ICC A", cakup: "All risks, paling luas", w: 92, warna: palette.aset },
];

export const MarineInsuranceVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const ship = interpolate(frame, [10, 150], [60, 920], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const note = useFade(160, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Asuransi Pengangkutan Laut" sub="Tiga tingkat perlindungan: ICC A, B, dan C" />

      {/* kapal melaju di laut berisiko */}
      <svg viewBox="0 0 1000 80" style={{ width: "100%", marginTop: 20 }}>
        <line x1={40} y1={50} x2={960} y2={50} stroke="rgba(96,165,250,0.4)" strokeWidth={3} />
        <text x={ship} y={44} textAnchor="middle" fontSize={34}>🚢</text>
        <text x={500} y={74} textAnchor="middle" fontSize={14} fill={palette.muted}>badai, kandas, kontainer jatuh, pencurian</text>
      </svg>

      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 16 }}>
        {LAYER.map((l, i) => {
          const o = frame > 30 + i * 26 ? 1 : 0;
          return (
            <div key={i} style={{ opacity: o, display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 80, fontSize: 20, fontWeight: 800, color: l.warna }}>{l.nama}</div>
              <div style={{ flex: 1 }}>
                <div style={{ height: 30, width: `${l.w}%`, background: l.warna, borderRadius: 8 }} />
                <div style={{ fontSize: 15, color: palette.muted, marginTop: 4 }}>{l.cakup}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 18, fontSize: 18, color: palette.muted }}>
        Makin luas cakupan, makin tinggi premi. Pada Incoterm CIF, penjual wajib menyediakan asuransi minimum bagi pembeli.
      </div>
    </AbsoluteFill>
  );
};

export const MarineInsuranceVideoDuration = 195;
