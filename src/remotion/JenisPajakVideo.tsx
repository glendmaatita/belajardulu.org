import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Jenis pajak utama dan sifatnya (langsung vs tidak langsung, pusat vs daerah).
const PAJAK = [
  { nama: "PPh", objek: "Penghasilan", sifat: "Langsung, progresif", warna: palette.aset },
  { nama: "PPN", objek: "Konsumsi barang/jasa", sifat: "Tidak langsung", warna: palette.ekuitas },
  { nama: "Cukai", objek: "Rokok, alkohol", sifat: "Pengendalian konsumsi", warna: palette.kewajiban },
  { nama: "Bea", objek: "Ekspor & impor", sifat: "Perdagangan internasional", warna: palette.kredit },
  { nama: "PBB", objek: "Tanah & bangunan", sifat: "Banyak ke daerah", warna: palette.accent },
];

export const JenisPajakVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Jenis-Jenis Pajak" sub="Sumber utama penerimaan negara dan apa yang dikenakannya" />

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 30 }}>
        {PAJAK.map((p, i) => {
          const { scale, opacity } = usePop(20 + i * 22);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", gap: 16, background: palette.bgSoft, borderRadius: 12, padding: "14px 22px", borderLeft: `6px solid ${p.warna}` }}>
              <div style={{ width: 90, fontSize: 22, fontWeight: 900, color: p.warna }}>{p.nama}</div>
              <div style={{ width: 240, fontSize: 16, color: palette.text }}>{p.objek}</div>
              <div style={{ flex: 1, fontSize: 15, color: palette.muted }}>{p.sifat}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 24, fontSize: 18, color: palette.muted }}>
        PPh dan PPN adalah dua penyumbang terbesar. Pajak langsung (PPh) dipikul langsung wajib pajak; pajak tidak langsung (PPN) bisa dialihkan ke konsumen lewat harga.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const JenisPajakVideoDuration = 180;
