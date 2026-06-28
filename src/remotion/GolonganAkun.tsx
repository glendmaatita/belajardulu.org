import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

const akun = [
  { nama: "Aset", contoh: "Kas, Piutang, Peralatan", lap: "Neraca", warna: palette.aset },
  { nama: "Kewajiban", contoh: "Utang Usaha, Utang Bank", lap: "Neraca", warna: palette.kewajiban },
  { nama: "Ekuitas", contoh: "Modal, Prive", lap: "Neraca", warna: palette.ekuitas },
  { nama: "Pendapatan", contoh: "Penjualan, Pendapatan Jasa", lap: "Laba Rugi", warna: "#c4b5fd" },
  { nama: "Beban", contoh: "Beban Gaji, Beban Listrik", lap: "Laba Rugi", warna: "#fda4af" },
];

const Card: React.FC<{ i: number }> = ({ i }) => {
  const a = akun[i];
  const delay = 30 + i * 22;
  const { scale, opacity } = usePop(delay);
  const frame = useCurrentFrame();
  // highlight which report it belongs to
  const tagOpacity = interpolate(frame - (delay + 10), [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const isNeraca = a.lap === "Neraca";
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        display: "grid",
        gridTemplateColumns: "200px 1fr 150px",
        alignItems: "center",
        gap: 18,
        background: palette.bgSoft,
        border: "1px solid rgba(255,255,255,0.07)",
        borderLeft: `6px solid ${a.warna}`,
        borderRadius: 14,
        padding: "14px 22px",
        fontFamily: font,
      }}
    >
      <div style={{ fontSize: 28, fontWeight: 800, color: a.warna }}>{a.nama}</div>
      <div style={{ fontSize: 18, color: palette.muted }}>{a.contoh}</div>
      <div
        style={{
          opacity: tagOpacity,
          textAlign: "center",
          fontSize: 16,
          fontWeight: 700,
          color: "#06121f",
          background: isNeraca ? "#7dd3fc" : "#c4b5fd",
          borderRadius: 999,
          padding: "6px 10px",
        }}
      >
        → {a.lap}
      </div>
    </div>
  );
};

export const GolonganAkun: React.FC = () => {
  const legend = useFade(150, 16);
  return (
    <AbsoluteFill style={{ background: palette.bg, padding: "54px 80px", fontFamily: font }}>
      <Title text="5 Golongan Akun" sub="Setiap akun masuk ke salah satu dari lima golongan, dan ke laporan tertentu" />
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 30 }}>
        {akun.map((_, i) => (
          <Card key={i} i={i} />
        ))}
      </div>
      <div style={{ opacity: legend, marginTop: 22, display: "flex", gap: 28, fontSize: 17, color: palette.muted }}>
        <span>🔵 Aset · Kewajiban · Ekuitas → <b style={{ color: palette.text }}>Neraca</b></span>
        <span>🟣 Pendapatan · Beban → <b style={{ color: palette.text }}>Laba Rugi</b></span>
      </div>
    </AbsoluteFill>
  );
};

export const GolonganAkunDuration = 200;
