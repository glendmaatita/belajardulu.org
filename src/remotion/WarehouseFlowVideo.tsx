import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

// Aliran kerja gudang: dari barang datang sampai dikirim keluar.
const STEP = [
  { ikon: "📥", judul: "Receiving", ket: "Terima & periksa barang masuk" },
  { ikon: "🗄️", judul: "Putaway", ket: "Simpan ke lokasi rak" },
  { ikon: "📦", judul: "Storage", ket: "Penyimpanan terkelola" },
  { ikon: "🛒", judul: "Picking", ket: "Ambil sesuai pesanan" },
  { ikon: "📦", judul: "Packing", ket: "Kemas & label" },
  { ikon: "🚚", judul: "Shipping", ket: "Kirim ke pelanggan" },
];

export const WarehouseFlowVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Aliran Kerja Gudang" sub="Enam tahap dari barang datang sampai barang keluar" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 50, alignItems: "center" }}>
        {STEP.map((s, i) => {
          const { scale, opacity } = usePop(20 + i * 20);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "20px 16px", width: 180, textAlign: "center", boxShadow: "0 12px 34px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize: 36 }}>{s.ikon}</div>
                <div style={{ fontSize: 19, fontWeight: 800, color: palette.text, marginTop: 8 }}>{s.judul}</div>
                <div style={{ fontSize: 13.5, color: palette.muted, marginTop: 4 }}>{s.ket}</div>
              </div>
              {i < STEP.length - 1 && <Arrow delay={32 + i * 20} />}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 36, fontSize: 18, color: palette.muted, maxWidth: 980 }}>
        Picking biasanya menyita biaya tenaga kerja terbesar. Tata letak dan slotting yang baik memperpendek jarak jalan kaki dan mempercepat seluruh aliran.
      </div>
    </AbsoluteFill>
  );
};

export const WarehouseFlowVideoDuration = 210;
