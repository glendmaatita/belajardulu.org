import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Keberlanjutan fiskal: utang terkendali bila pertumbuhan ekonomi melebihi laju penambahan utang,
// ruang fiskal terjaga, dan keseimbangan primer sehat.
const PILAR = [
  { ikon: "📈", judul: "Pertumbuhan > Utang", ket: "PDB tumbuh lebih cepat dari penambahan utang" },
  { ikon: "🧮", judul: "Keseimbangan Primer", ket: "Penerimaan menutup belanja di luar bunga utang" },
  { ikon: "🪟", judul: "Ruang Fiskal", ket: "Cukup anggaran untuk belanja produktif" },
  { ikon: "🎯", judul: "Disiplin & Kualitas", ket: "Defisit terjaga, belanja diarahkan ke yang produktif" },
];

export const KeberlanjutanFiskal: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(140, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Keberlanjutan Fiskal" sub="Menjaga keuangan negara sehat untuk jangka panjang" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 38, justifyContent: "center" }}>
        {PILAR.map((p, i) => {
          const { scale, opacity } = usePop(20 + i * 24);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "22px 20px", width: 340, boxShadow: "0 12px 36px rgba(0,0,0,0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 36 }}>{p.ikon}</div>
                <div style={{ fontSize: 19, fontWeight: 800, color: palette.text }}>{p.judul}</div>
              </div>
              <div style={{ fontSize: 15, color: palette.muted, marginTop: 8 }}>{p.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Keseimbangan primer = penerimaan dikurangi belanja tanpa menghitung bunga utang. Bila positif, pemerintah mampu membiayai operasinya tanpa menambah utang untuk bunga, tanda fiskal yang sehat.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const KeberlanjutanFiskalDuration = 180;
