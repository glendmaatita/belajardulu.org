import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Globalisasi: peluang & risiko ekonomi terbuka, posisi Indonesia.
const SISI = [
  { judul: "Peluang", warna: palette.aset, poin: ["Pasar ekspor lebih luas", "Investasi asing (FDI) masuk", "Akses teknologi & barang murah", "Lapangan kerja baru"] },
  { judul: "Risiko", warna: palette.kredit, poin: ["Persaingan menekan industri lokal", "Rentan guncangan global", "Ketergantungan impor", "Ketimpangan bisa melebar"] },
];

export const GlobalisasiVideo: React.FC = () => {
  const note = useFade(135, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Globalisasi: Peluang & Risiko" sub="Ekonomi terbuka membawa keuntungan sekaligus tantangan" />

      <div style={{ display: "flex", gap: 30, marginTop: 40, justifyContent: "center" }}>
        {SISI.map((s, i) => {
          const { scale, opacity } = usePop(20 + i * 35);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 18, padding: "24px 26px", width: 400, boxShadow: "0 14px 40px rgba(0,0,0,0.3)", borderTop: `6px solid ${s.warna}` }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: s.warna, textAlign: "center" }}>{s.judul}</div>
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 9 }}>
                {s.poin.map((p, j) => <div key={j} style={{ fontSize: 16, color: palette.text }}>&bull; {p}</div>)}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 32, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Indonesia ikut perdagangan global lewat perjanjian seperti RCEP, sambil mendorong hilirisasi (mis. larangan ekspor nikel mentah) agar nilai tambah tinggal di dalam negeri.
      </div>
    </AbsoluteFill>
  );
};

export const GlobalisasiVideoDuration = 175;
