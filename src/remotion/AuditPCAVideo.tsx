import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Post Clearance Audit: pemeriksaan setelah barang keluar. Dokumen harus tersimpan rapi (10 tahun).
const STEP = [
  { ikon: "📦", judul: "Barang keluar", ket: "SPPB terbit, barang ke gudang" },
  { ikon: "🗂️", judul: "Simpan dokumen", ket: "Wajib disimpan hingga 10 tahun" },
  { ikon: "🔍", judul: "Audit (PCA)", ket: "Periksa nilai, klasifikasi, fasilitas" },
  { ikon: "⚖️", judul: "Temuan", ket: "Kurang bayar + sanksi bila keliru" },
];

export const AuditPCAVideo: React.FC = () => {
  const note = useFade(130, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Audit Kepabeanan (Post Clearance Audit)" sub="Pemeriksaan datang setelah barang keluar, bukan saat impor" />

      <div style={{ display: "flex", gap: 14, marginTop: 44, alignItems: "stretch", justifyContent: "center" }}>
        {STEP.map((s, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "22px 18px", width: 220, textAlign: "center", boxShadow: "0 12px 36px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize: 40 }}>{s.ikon}</div>
                <div style={{ fontSize: 19, fontWeight: 800, color: palette.text, marginTop: 8 }}>{s.judul}</div>
                <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>{s.ket}</div>
              </div>
              {i < STEP.length - 1 && <div style={{ fontSize: 28, color: palette.muted, opacity }}>&rarr;</div>}
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 34, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Karena audit bisa datang bertahun-tahun kemudian, importir yang patuh menyimpan dokumen rapi dan mencatat nilai pabean dengan benar sejak awal.
      </div>
    </AbsoluteFill>
  );
};

export const AuditPCAVideoDuration = 175;
