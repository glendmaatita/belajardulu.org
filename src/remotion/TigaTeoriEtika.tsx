import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Tiga teori etika besar: konsekuensi, kewajiban, dan karakter.
const TEORI = [
  { ikon: "📊", nama: "Utilitarianisme", tokoh: "Bentham, Mill", inti: "Tindakan benar jika menghasilkan kebahagiaan terbesar bagi sebanyak mungkin orang.", fokus: "Hasil/konsekuensi", warna: palette.aset },
  { ikon: "📜", nama: "Deontologi", tokoh: "Kant", inti: "Benar-salah ditentukan kewajiban dan aturan moral, bukan hasilnya.", fokus: "Kewajiban/aturan", warna: palette.ekuitas },
  { ikon: "🌱", nama: "Etika Keutamaan", tokoh: "Aristoteles", inti: "Fokus pada karakter: jadilah pribadi berkebajikan (jujur, adil, berani).", fokus: "Karakter/keutamaan", warna: palette.kewajiban },
];

export const TigaTeoriEtika: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Tiga Teori Etika Besar" sub="Tiga cara berbeda menilai benar dan salah" />

      <div style={{ display: "flex", gap: 18, marginTop: 38, justifyContent: "center" }}>
        {TEORI.map((t, i) => {
          const { scale, opacity } = usePop(20 + i * 28);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 18, padding: "24px 20px", width: 300, textAlign: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.3)", borderTop: `6px solid ${t.warna}` }}>
              <div style={{ fontSize: 42 }}>{t.ikon}</div>
              <div style={{ fontSize: 21, fontWeight: 800, color: palette.text, marginTop: 6 }}>{t.nama}</div>
              <div style={{ fontSize: 13, color: t.warna, fontWeight: 700 }}>{t.tokoh}</div>
              <div style={{ fontSize: 15, color: palette.muted, marginTop: 10 }}>{t.inti}</div>
              <div style={{ fontSize: 13, color: palette.text, marginTop: 10, fontWeight: 700 }}>Fokus: {t.fokus}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Untuk dilema yang sama, ketiga teori bisa memberi jawaban berbeda. Memahaminya membantu kita beralasan moral secara lebih jernih.
      </div>
    </AbsoluteFill>
  );
};

export const TigaTeoriEtikaDuration = 185;
