import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

// Rantai pasok global: barang melintasi negara, melewati dokumen, pabean, dan tarif.
const GATE = [
  { ikon: "🏭", judul: "Eksportir", ket: "Negara asal", warna: "#fbbf24" },
  { ikon: "📄", judul: "Dokumen", ket: "Invoice, B/L, CoO", warna: "#60a5fa" },
  { ikon: "🛃", judul: "Pabean", ket: "Bea & pemeriksaan", warna: "#f472b6" },
  { ikon: "🤝", judul: "FTA", ket: "Tarif preferensi", warna: "#34d399" },
  { ikon: "🏬", judul: "Importir", ket: "Negara tujuan", warna: "#a78bfa" },
];

export const GlobalTradeVideo: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Rantai Pasok Global" sub="Tiap pengiriman lintas negara melewati dokumen, pabean, dan aturan tarif" />

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 56, flexWrap: "wrap" }}>
        {GATE.map((g, i) => {
          const { scale, opacity } = usePop(20 + i * 22);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: `2px solid ${g.warna}`, borderRadius: 16, padding: "20px 16px", width: 178, textAlign: "center", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize: 36 }}>{g.ikon}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: g.warna, marginTop: 6 }}>{g.judul}</div>
                <div style={{ fontSize: 13, color: palette.muted, marginTop: 2 }}>{g.ket}</div>
              </div>
              {i < GATE.length - 1 && <Arrow delay={32 + i * 22} />}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 42, fontSize: 18, color: palette.muted, maxWidth: 980, opacity: interpolate(frame, [120, 155], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        Di Indonesia, ekosistem <span style={{ color: palette.text, fontWeight: 700 }}>NLE/INSW</span> menyatukan dokumen dan izin lintas instansi dalam satu pintu agar arus barang lebih cepat dan murah.
      </div>
    </AbsoluteFill>
  );
};

export const GlobalTradeVideoDuration = 210;
