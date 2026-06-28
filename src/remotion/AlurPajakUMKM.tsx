import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

const steps = [
  { icon: "🧾", title: "Catat Omzet", desc: "Total penjualan bulan ini" },
  { icon: "✖️", title: "Kali 0,5%", desc: "Tarif PPh Final UMKM" },
  { icon: "💳", title: "Bayar", desc: "Buat kode billing, bayar di bank/e-wallet" },
  { icon: "📤", title: "Lapor SPT", desc: "Laporkan lewat DJP Online / Coretax" },
];

const Card: React.FC<{ i: number }> = ({ i }) => {
  const s = steps[i];
  const { scale, opacity } = usePop(25 + i * 28);
  return (
    <div style={{ transform: `scale(${scale})`, opacity, width: 240, fontFamily: font, textAlign: "center" }}>
      <div
        style={{
          background: palette.bgSoft,
          border: "1px solid rgba(255,255,255,0.08)",
          borderTop: `4px solid ${palette.accent}`,
          borderRadius: 16,
          padding: "20px 16px",
          minHeight: 180,
        }}
      >
        <div style={{ fontSize: 44 }}>{s.icon}</div>
        <div style={{ marginTop: 8, fontSize: 19, fontWeight: 800, color: palette.text }}>{s.title}</div>
        <div style={{ marginTop: 6, fontSize: 14, color: palette.muted, lineHeight: 1.4 }}>{s.desc}</div>
        <div style={{ marginTop: 10, fontSize: 13, fontWeight: 700, color: palette.accent }}>Langkah {i + 1}</div>
      </div>
    </div>
  );
};

export const AlurPajakUMKM: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "50px 50px", justifyContent: "flex-start" }}>
      <Title text="Pajak UMKM Itu Cuma 4 Langkah" sub="Tidak rumit: catat, hitung 0,5%, bayar, lapor" />
      <div style={{ marginTop: 50, display: "flex", gap: 16, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        {steps.map((_, i) => (
          <Card key={i} i={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

export const AlurPajakUMKMDuration = 200;
