import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

// Alur proses impor: dari pesan barang sampai barang keluar pelabuhan.
const STEPS = [
  { ikon: "🧾", judul: "Kontrak & PO", ket: "Sepakati barang, harga, Incoterms" },
  { ikon: "🚢", judul: "Pengapalan", ket: "Barang dikirim + dokumen (B/L, invoice)" },
  { ikon: "🏗️", judul: "Tiba di pelabuhan", ket: "Manifest masuk ke sistem pabean" },
  { ikon: "💻", judul: "Ajukan PIB", ket: "Importir lapor & bayar BM, PPN, PPh" },
  { ikon: "🚦", judul: "Penjaluran", ket: "Hijau / Kuning / Merah sesuai risiko" },
  { ikon: "📦", judul: "SPPB & keluar", ket: "Barang boleh keluar ke gudang" },
];

export const AlurImpor: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Alur Proses Impor" sub="Dari kontrak sampai barang keluar dari pelabuhan" />

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
          color: palette.aset,
          fontWeight: 700,
        }}
      >
        Dokumen rapi + nilai wajar = jalur hijau = barang keluar lebih cepat.
      </div>
    </AbsoluteFill>
  );
};

export const AlurImporDuration = 220;
