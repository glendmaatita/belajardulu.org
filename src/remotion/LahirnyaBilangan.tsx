import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Bilangan lahir dari kebutuhan menghitung, lalu menjadi abstrak.
const TAHAP = [
  { judul: "Satu lawan satu", isi: "Gembala menaruh satu batu untuk tiap domba.", warna: palette.kewajiban },
  { judul: "Coretan & takik", isi: "Tanda |||| pada tulang dan kayu untuk mencatat jumlah.", warna: palette.ekuitas },
  { judul: "Lambang angka", isi: "Simbol seperti 1, 2, 3 mewakili kuantitas tanpa benda.", warna: palette.aset },
  { judul: "Konsep abstrak", isi: "Angka jadi gagasan murni: nol, negatif, hingga tak hingga.", warna: palette.kredit },
];

export const LahirnyaBilangan: React.FC = () => {
  const note = useFade(170, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Bagaimana Bilangan Lahir" sub="Dari menghitung domba menuju gagasan abstrak" />

      <div style={{ display: "flex", gap: 12, marginTop: 40, alignItems: "stretch" }}>
        {TAHAP.map((t, i) => {
          const { scale, opacity } = usePop(20 + i * 28);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{ flex: 1, transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 14, padding: "18px 16px", borderTop: `6px solid ${t.warna}`, minHeight: 190 }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: t.warna }}>{t.judul}</div>
                <div style={{ fontSize: 15, color: palette.text, marginTop: 10, lineHeight: 1.5 }}>{t.isi}</div>
              </div>
              {i < TAHAP.length - 1 && <div style={{ fontSize: 26, color: palette.accent, opacity, padding: "0 2px" }}>→</div>}
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 32, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Berhitung memulai semuanya, tetapi matematika melompat jauh: dari benda nyata ke gagasan murni.
      </div>
    </AbsoluteFill>
  );
};

export const LahirnyaBilanganDuration = 205;
