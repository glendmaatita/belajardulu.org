import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Sesat pikir (logical fallacy) yang paling sering muncul.
const FALLACY = [
  { nama: "Ad Hominem", ket: "Menyerang orangnya, bukan argumennya" },
  { nama: "Strawman", ket: "Memutarbalikkan argumen lawan agar mudah dibantah" },
  { nama: "Slippery Slope", ket: "Mengklaim satu langkah pasti berujung bencana" },
  { nama: "False Dilemma", ket: "Seolah hanya ada dua pilihan, padahal lebih" },
  { nama: "Appeal to Authority", ket: "Benar hanya karena tokoh terkenal mengatakannya" },
  { nama: "Bandwagon", ket: "Benar karena banyak orang percaya" },
];

export const FallacyVideo: React.FC = () => {
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Sesat Pikir yang Sering Muncul" sub="Kenali agar tidak tertipu dan tidak melakukannya" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34, justifyContent: "center" }}>
        {FALLACY.map((f, i) => {
          const { scale, opacity } = usePop(20 + i * 20);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 14, padding: "18px 20px", width: 330, boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}>
              <div style={{ fontSize: 19, fontWeight: 800, color: palette.kredit }}>{f.nama}</div>
              <div style={{ fontSize: 15, color: palette.muted, marginTop: 6 }}>{f.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 28, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Sesat pikir membuat argumen tampak meyakinkan padahal cacat. Fokuslah pada bukti dan logika, bukan pada siapa yang bicara atau seberapa ramai pendukungnya.
      </div>
    </AbsoluteFill>
  );
};

export const FallacyVideoDuration = 185;
