import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Cabang-cabang utama filsafat dan pertanyaan intinya.
const CABANG = [
  { ikon: "🌌", nama: "Metafisika", tanya: "Apa yang sungguh ada?", warna: palette.ekuitas },
  { ikon: "💡", nama: "Epistemologi", tanya: "Apa itu pengetahuan?", warna: palette.aset },
  { ikon: "⚖️", nama: "Etika", tanya: "Apa yang benar dilakukan?", warna: palette.kewajiban },
  { ikon: "🧩", nama: "Logika", tanya: "Apa penalaran yang sahih?", warna: palette.accent },
  { ikon: "🎨", nama: "Estetika", tanya: "Apa itu keindahan?", warna: palette.kredit },
];

export const CabangFilsafat: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Cabang-Cabang Filsafat" sub="Setiap cabang menjawab pertanyaan mendasar yang berbeda" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 40, justifyContent: "center" }}>
        {CABANG.map((c, i) => {
          const { scale, opacity } = usePop(20 + i * 24);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 18, padding: "24px 20px", width: 260, textAlign: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.3)", borderTop: `6px solid ${c.warna}` }}>
              <div style={{ fontSize: 44 }}>{c.ikon}</div>
              <div style={{ fontSize: 21, fontWeight: 800, color: palette.text, marginTop: 8 }}>{c.nama}</div>
              <div style={{ fontSize: 15, color: palette.muted, marginTop: 6, fontStyle: "italic" }}>{c.tanya}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 32, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Filsafat adalah usaha menjawab pertanyaan mendasar tentang ada, pengetahuan, nilai, dan penalaran, dengan akal yang kritis dan terbuka.
      </div>
    </AbsoluteFill>
  );
};

export const CabangFilsafatDuration = 180;
