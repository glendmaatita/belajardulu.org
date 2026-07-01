import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Tiga larangan inti dalam muamalah: riba (tambahan/bunga), gharar
// (ketidakpastian berlebih), dan maysir (judi/spekulasi).
const larangan = [
  { label: "Riba", desc: "Tambahan/bunga tanpa imbangan", c: "#fb7185" },
  { label: "Gharar", desc: "Ketidakpastian berlebihan", c: "#fbbf24" },
  { label: "Maysir", desc: "Judi dan spekulasi", c: "#a78bfa" },
];

export const LaranganRibaVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Tiga Larangan Inti Ekonomi Syariah" sub="Pagar utama agar transaksi adil dan tidak zalim" />
      <div style={{ marginTop: 44, display: "flex", gap: 16 }}>
        {larangan.map((l, i) => {
          const grow = interpolate(frame - (30 + i * 22), [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ flex: 1, opacity: grow, transform: `translateY(${(1 - grow) * 22}px)`, background: palette.bgSoft, border: `2px solid ${l.c}`, borderRadius: 16, padding: "22px 14px", textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: l.c }}>{l.label}</div>
              <div style={{ fontSize: 14, color: palette.muted, marginTop: 8 }}>{l.desc}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 40, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Sebagai ganti bunga, ekonomi syariah memakai jual beli, sewa, dan bagi hasil yang berbagi risiko secara adil.
      </div>
    </AbsoluteFill>
  );
};

export const LaranganRibaVideoDuration = 200;
