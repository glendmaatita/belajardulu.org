import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

export const NilaiWaktuUang: React.FC = () => {
  const frame = useCurrentFrame();
  const t = interpolate(frame, [30, 170], [0, 5], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }); // tahun
  const rate = 0.1;
  const fv = 100 * Math.pow(1 + rate, t);
  const note = useFade(175, 18);

  const years = [0, 1, 2, 3, 4, 5];
  const maxFv = 100 * Math.pow(1 + rate, 5);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 60px" }}>
      <Title text="Nilai Waktu Uang" sub="Rp1 hari ini lebih berharga dari Rp1 di masa depan" />

      <div style={{ marginTop: 24, display: "flex", gap: 50, alignItems: "baseline" }}>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Tahun ke</div>
          <div style={{ fontSize: 44, fontWeight: 800, color: palette.text, fontVariantNumeric: "tabular-nums" }}>{t.toFixed(1)}</div>
        </div>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Nilai dari Rp100 (bunga 10%/th)</div>
          <div style={{ fontSize: 44, fontWeight: 800, color: palette.aset, fontVariantNumeric: "tabular-nums" }}>Rp{fv.toFixed(1)}</div>
        </div>
      </div>

      <div style={{ marginTop: 40, display: "flex", gap: 24, alignItems: "flex-end", height: 280 }}>
        {years.map((y) => {
          const v = 100 * Math.pow(1 + rate, y);
          const reveal = t >= y - 0.001;
          const h = (v / maxFv) * 240;
          return (
            <div key={y} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: reveal ? 1 : 0.15 }}>
              <div style={{ fontSize: 16, color: palette.text, fontVariantNumeric: "tabular-nums" }}>{reveal ? `Rp${v.toFixed(0)}` : ""}</div>
              <div style={{ width: 80, height: reveal ? h : 4, background: palette.aset, borderRadius: "8px 8px 0 0" }} />
              <div style={{ fontSize: 14, color: palette.muted }}>Th {y}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 20, fontSize: 18, color: palette.muted }}>
        Sebaliknya, mendiskon (discounting) mengubah nilai masa depan kembali ke nilai hari ini. Inilah dasar NPV.
      </div>
    </AbsoluteFill>
  );
};

export const NilaiWaktuUangDuration = 210;
