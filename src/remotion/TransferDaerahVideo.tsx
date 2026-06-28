import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Transfer ke Daerah (TKD): dana mengalir dari pusat ke daerah lewat empat saluran.
const TKD = [
  { nama: "DAU", ket: "Dana Alokasi Umum: pemerataan", warna: palette.aset },
  { nama: "DAK", ket: "Dana Alokasi Khusus: program tertentu", warna: palette.ekuitas },
  { nama: "DBH", ket: "Dana Bagi Hasil: pajak & SDA", warna: palette.kewajiban },
  { nama: "Dana Desa", ket: "Langsung ke pembangunan desa", warna: palette.accent },
];

export const TransferDaerahVideo: React.FC = () => {
  const hub = usePop(20);
  const note = useFade(140, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Transfer ke Daerah" sub="Dana dari pusat untuk membiayai layanan publik di seluruh Indonesia" />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
        <div style={{ transform: `scale(${hub.scale})`, opacity: hub.opacity, background: palette.accent, color: "#fff", borderRadius: 14, padding: "14px 28px", fontSize: 19, fontWeight: 800 }}>
          🏛️ Pemerintah Pusat (APBN)
        </div>
      </div>
      <div style={{ textAlign: "center", fontSize: 26, color: palette.muted, margin: "6px 0" }}>&darr;</div>

      <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
        {TKD.map((t, i) => {
          const { scale, opacity } = usePop(40 + i * 22);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "20px 16px", width: 220, textAlign: "center", borderTop: `5px solid ${t.warna}` }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: t.warna }}>{t.nama}</div>
              <div style={{ fontSize: 14, color: palette.muted, marginTop: 8 }}>{t.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Transfer ke daerah adalah wujud desentralisasi fiskal. Tantangannya: mendorong daerah meningkatkan Pendapatan Asli Daerah (PAD) agar tidak terlalu bergantung pada dana pusat.
      </div>
    </AbsoluteFill>
  );
};

export const TransferDaerahVideoDuration = 180;
