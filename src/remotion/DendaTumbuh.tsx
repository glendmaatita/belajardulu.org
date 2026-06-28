import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

export const DendaTumbuh: React.FC = () => {
  const frame = useCurrentFrame();
  // bulan keterlambatan 0..12
  const bulan = interpolate(frame, [30, 170], [0, 12], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pajak = 10; // juta (pajak yang telat dibayar)
  const dendaLapor = 1; // juta (SPT Tahunan Badan)
  const bunga = pajak * 0.011 * bulan; // juta
  const total = dendaLapor + bunga;
  const note = useFade(175, 18);

  const maxH = 300;
  const barH = Math.min(maxH, (total / 3) * maxH); // skala: 3 juta = penuh

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 60px" }}>
      <Title text="Telat Itu Mahal (dan Terus Membesar)" sub="Denda lapor tetap, plus bunga telat bayar tiap bulan" />

      <div style={{ display: "flex", gap: 60, marginTop: 40, alignItems: "flex-end" }}>
        {/* growing bar */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: maxH }}>
          <div style={{ fontSize: 30, fontWeight: 800, color: palette.kredit, fontVariantNumeric: "tabular-nums", marginBottom: 8 }}>
            Rp{total.toFixed(2)} jt
          </div>
          <div style={{ width: 130, height: barH, background: "linear-gradient(#fb7185,#ef4444)", borderRadius: "10px 10px 0 0" }} />
          <div style={{ marginTop: 10, fontSize: 16, color: palette.muted }}>Total denda</div>
        </div>

        {/* breakdown */}
        <div style={{ fontFamily: font, fontSize: 20, color: palette.text, lineHeight: 2 }}>
          <div>⏱️ Terlambat: <b style={{ color: palette.kewajiban }}>{bulan.toFixed(0)} bulan</b></div>
          <div>📄 Denda telat lapor: <b>Rp{dendaLapor.toFixed(0)} jt</b> (tetap)</div>
          <div>📈 Bunga telat bayar: <b style={{ color: palette.kredit }}>Rp{bunga.toFixed(2)} jt</b></div>
          <div style={{ marginTop: 6, color: palette.muted, fontSize: 16 }}>
            (pajak Rp10 jt, bunga sekitar 1,1% per bulan)
          </div>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 36, fontSize: 19, color: palette.muted }}>
        Lapor dan bayar tepat waktu itu <b style={{ color: palette.aset }}>gratis</b>. Menunda hanya menambah beban.
      </div>
    </AbsoluteFill>
  );
};

export const DendaTumbuhDuration = 210;
