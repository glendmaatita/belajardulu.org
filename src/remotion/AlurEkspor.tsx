import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

// Alur proses ekspor: dari cari pembeli sampai terima pembayaran.
const STEPS = [
  { ikon: "🔍", judul: "Cari buyer", ket: "Promosi, pameran, marketplace global" },
  { ikon: "📑", judul: "Quotation & kontrak", ket: "Sepakati harga, Incoterms, pembayaran" },
  { ikon: "🏭", judul: "Siapkan barang", ket: "Produksi, packing, dokumen" },
  { ikon: "💻", judul: "Ajukan PEB", ket: "Lapor ekspor ke pabean, terbit NPE" },
  { ikon: "🚢", judul: "Pengapalan", ket: "Muat ke kapal, terbit B/L" },
  { ikon: "💰", judul: "Pembayaran", ket: "Lewat LC / TT, devisa masuk" },
];

export const AlurEkspor: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Alur Proses Ekspor" sub="Dari mencari pembeli sampai menerima pembayaran" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 36 }}>
        {STEPS.map((s, i) => {
          const { scale, opacity } = usePop(20 + i * 22);
          return (
            <div
              key={i}
              style={{
                transform: `scale(${scale})`,
                opacity,
                background: palette.bgSoft,
                borderRadius: 18,
                padding: "20px 22px",
                width: 330,
                boxShadow: "0 14px 40px rgba(0,0,0,0.3)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 34 }}>{s.ikon}</div>
                <div>
                  <div style={{ fontSize: 13, color: palette.muted, fontWeight: 700 }}>Langkah {i + 1}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: palette.text }}>{s.judul}</div>
                </div>
              </div>
              <div style={{ fontSize: 16, color: palette.muted, marginTop: 10 }}>{s.ket}</div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          opacity: frame > 170 ? 1 : 0,
          marginTop: 26,
          fontSize: 18,
          color: palette.ekuitas,
          fontWeight: 700,
        }}
      >
        NPE (Nota Pelayanan Ekspor) adalah tanda barang boleh dimuat dan dikapalkan.
      </div>
    </AbsoluteFill>
  );
};

export const AlurEksporDuration = 220;
