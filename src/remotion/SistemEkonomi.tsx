import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Spektrum sistem ekonomi: dari pasar bebas, campuran, sampai komando.
const SISTEM = [
  { nama: "Ekonomi Pasar", peran: "Swasta dominan, harga oleh pasar", warna: palette.aset, contoh: "AS (cenderung)" },
  { nama: "Ekonomi Campuran", peran: "Swasta + peran negara", warna: palette.ekuitas, contoh: "Indonesia (Pancasila)" },
  { nama: "Ekonomi Komando", peran: "Negara mengatur produksi", warna: palette.kredit, contoh: "Bekas Uni Soviet" },
];

export const SistemEkonomi: React.FC = () => {
  const note = useFade(130, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Spektrum Sistem Ekonomi" sub="Seberapa besar peran pasar vs negara dalam mengatur ekonomi" />

      <div style={{ display: "flex", gap: 18, marginTop: 50, justifyContent: "center" }}>
        {SISTEM.map((s, i) => {
          const { scale, opacity } = usePop(20 + i * 28);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 18, padding: "24px 20px", width: 280, textAlign: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.3)", borderTop: `6px solid ${s.warna}` }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.text }}>{s.nama}</div>
              <div style={{ fontSize: 15, color: palette.muted, marginTop: 10 }}>{s.peran}</div>
              <div style={{ fontSize: 14, color: s.warna, marginTop: 10, fontWeight: 700 }}>Contoh: {s.contoh}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 36, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Hampir semua negara kini menganut ekonomi campuran. Indonesia memakai sistem ekonomi Pancasila: pasar berjalan, tetapi negara hadir menjaga keadilan dan menguasai cabang produksi penting (Pasal 33 UUD 1945).
      </div>
    </AbsoluteFill>
  );
};

export const SistemEkonomiDuration = 175;
