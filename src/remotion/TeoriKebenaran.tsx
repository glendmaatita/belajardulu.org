import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Tiga teori kebenaran utama.
const TEORI = [
  { nama: "Korespondensi", arti: "Benar jika cocok dengan kenyataan", contoh: "'Hujan turun' benar bila memang hujan.", warna: palette.aset },
  { nama: "Koherensi", arti: "Benar jika konsisten dengan keyakinan lain", contoh: "Benar bila selaras dengan sistem pengetahuan yang utuh.", warna: palette.ekuitas },
  { nama: "Pragmatis", arti: "Benar jika berguna dan berhasil dipakai", contoh: "Benar bila gagasan itu bekerja dalam praktik.", warna: palette.kewajiban },
];

export const TeoriKebenaran: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Tiga Teori Kebenaran" sub="Apa yang membuat sebuah pernyataan benar?" />

      <div style={{ display: "flex", gap: 18, marginTop: 44 }}>
        {TEORI.map((t, i) => {
          const { scale, opacity } = usePop(20 + i * 30);
          return (
            <div
              key={i}
              style={{
                flex: 1,
                transform: `scale(${scale})`,
                opacity,
                background: palette.bgSoft,
                borderRadius: 16,
                padding: "24px 20px",
                borderTop: `6px solid ${t.warna}`,
              }}
            >
              <div style={{ fontSize: 23, fontWeight: 800, color: t.warna }}>{t.nama}</div>
              <div style={{ fontSize: 17, color: palette.text, marginTop: 10, fontWeight: 700 }}>{t.arti}</div>
              <div style={{ fontSize: 15, color: palette.muted, marginTop: 14, lineHeight: 1.5, fontStyle: "italic" }}>{t.contoh}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Ketiganya menyoroti sisi berbeda: kecocokan dengan fakta, konsistensi sistem, dan manfaat praktis.
      </div>
    </AbsoluteFill>
  );
};

export const TeoriKebenaranDuration = 185;
