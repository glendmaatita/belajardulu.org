import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

// Rantai pasok sirkular: barang tak berakhir di tempat sampah, tapi kembali ke loop.
const LOOP = [
  { ikon: "🌿", judul: "Bahan", warna: "#34d399" },
  { ikon: "🏭", judul: "Produksi", warna: "#60a5fa" },
  { ikon: "🛒", judul: "Pakai", warna: "#fbbf24" },
  { ikon: "♻️", judul: "Daur ulang", warna: "#a78bfa" },
];

export const GreenSupplyChainVideo: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Rantai Pasok Sirkular" sub="Dari ambil-pakai-buang menjadi lingkaran tanpa limbah" />

      <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 60, flexWrap: "wrap" }}>
        {LOOP.map((n, i) => {
          const { scale, opacity } = usePop(20 + i * 22);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: `2px solid ${n.warna}`, borderRadius: 16, padding: "22px 20px", width: 180, textAlign: "center", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize: 40 }}>{n.ikon}</div>
                <div style={{ fontSize: 19, fontWeight: 800, color: n.warna, marginTop: 8 }}>{n.judul}</div>
              </div>
              {i < LOOP.length - 1 && <Arrow delay={32 + i * 22} />}
            </div>
          );
        })}
        <div style={{ fontSize: 30, color: "#34d399", opacity: interpolate(frame, [120, 140], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>&#8631;</div>
      </div>

      <div style={{ marginTop: 44, fontSize: 18, color: palette.muted, maxWidth: 980, opacity: interpolate(frame, [130, 165], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        Logistik hijau menambah satu arah baru: <span style={{ color: palette.text, fontWeight: 700 }}>reverse logistics</span> membawa produk bekas kembali untuk dipakai ulang, diperbaiki, atau didaur ulang.
      </div>
    </AbsoluteFill>
  );
};

export const GreenSupplyChainVideoDuration = 210;
