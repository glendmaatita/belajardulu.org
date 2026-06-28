import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Tiga fungsi kebijakan fiskal: alokasi, distribusi, stabilisasi.
const FUNGSI = [
  { ikon: "🏗️", judul: "Alokasi", ket: "Menyediakan barang publik: jalan, sekolah, pertahanan", warna: palette.aset },
  { ikon: "⚖️", judul: "Distribusi", ket: "Memeratakan: pajak progresif, subsidi, bansos", warna: palette.ekuitas },
  { ikon: "📊", judul: "Stabilisasi", ket: "Meredam gejolak: stimulus saat lesu, rem saat panas", warna: palette.kewajiban },
];

export const FungsiFiskal: React.FC = () => {
  const note = useFade(130, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Tiga Fungsi Kebijakan Fiskal" sub="Mengelola anggaran negara untuk tiga tujuan" />

      <div style={{ display: "flex", gap: 20, marginTop: 50, justifyContent: "center" }}>
        {FUNGSI.map((f, i) => {
          const { scale, opacity } = usePop(20 + i * 28);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 18, padding: "26px 22px", width: 290, textAlign: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.3)", borderTop: `6px solid ${f.warna}` }}>
              <div style={{ fontSize: 48 }}>{f.ikon}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginTop: 8 }}>{f.judul}</div>
              <div style={{ fontSize: 15, color: palette.muted, marginTop: 8 }}>{f.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 36, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Lewat APBN, pemerintah menyediakan layanan publik, mengurangi ketimpangan, dan menjaga ekonomi tetap stabil.
      </div>
    </AbsoluteFill>
  );
};

export const FungsiFiskalDuration = 170;
