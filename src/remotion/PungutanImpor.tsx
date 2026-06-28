import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

// Bagaimana pungutan impor menumpuk: dari CIF, lalu Bea Masuk, PPN, PPh 22.
// Angka ilustrasi sederhana agar mudah dipahami.
const LAYER = [
  { label: "Nilai Pabean (CIF)", nilai: 100, warna: palette.ekuitas },
  { label: "+ Bea Masuk 10%", nilai: 10, warna: palette.aset },
  { label: "+ PPN Impor 11%", nilai: 12.1, warna: palette.kewajiban },
  { label: "+ PPh 22 (2,5%)", nilai: 2.75, warna: palette.kredit },
];

export const PungutanImpor: React.FC = () => {
  const frame = useCurrentFrame();
  const total = LAYER.reduce((a, b) => a + b.nilai, 0);

  let tumpuk = 0;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Pungutan Impor Menumpuk" sub="Dari nilai pabean ke total biaya: bea masuk + PPN + PPh 22" />

      <div style={{ display: "flex", gap: 60, marginTop: 30, alignItems: "flex-end" }}>
        {/* Stacked bar */}
        <svg viewBox="0 0 220 360" style={{ height: 360 }}>
          {LAYER.map((l, i) => {
            const { opacity } = usePop(20 + i * 28);
            const h = (l.nilai / total) * 320;
            const y = 340 - tumpuk - h;
            tumpuk += h;
            return (
              <g key={i} opacity={opacity}>
                <rect x={40} y={y} width={140} height={h - 3} rx={6} fill={l.warna} />
              </g>
            );
          })}
          <line x1={30} y1={340} x2={200} y2={340} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        </svg>

        {/* Legend buildup */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {LAYER.map((l, i) => {
            const { opacity } = usePop(20 + i * 28);
            return (
              <div key={i} style={{ opacity, display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ width: 22, height: 22, borderRadius: 6, background: l.warna, display: "inline-block" }} />
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: palette.text }}>{l.label}</div>
                  <div style={{ fontSize: 16, color: palette.muted }}>setara {l.nilai} unit (dari basis 100)</div>
                </div>
              </div>
            );
          })}
          <div style={{ opacity: frame > 150 ? 1 : 0, marginTop: 10 }}>
            <div style={{ fontSize: 18, color: palette.muted }}>Total biaya tebusan impor</div>
            <div style={{ fontSize: 40, fontWeight: 900, color: palette.aset }}>{total.toFixed(1)} unit</div>
          </div>
        </div>
      </div>

      <div style={{ opacity: frame > 175 ? 1 : 0, marginTop: 20, fontSize: 18, color: palette.muted }}>
        PPN dan PPh dihitung dari nilai pabean ditambah bea masuk, bukan dari harga barang saja.
      </div>
    </AbsoluteFill>
  );
};

export const PungutanImporDuration = 220;
