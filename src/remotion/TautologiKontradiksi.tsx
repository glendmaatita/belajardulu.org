import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Tiga sifat rumus: tautologi, kontradiksi, kontingensi.
const KARTU = [
  {
    nama: "Tautologi",
    warna: palette.aset,
    arti: "Selalu BENAR untuk semua nilai",
    contoh: "p ∨ ¬p",
    ket: "Hukum tengah tersingkir: sesuatu benar atau tidak benar.",
  },
  {
    nama: "Kontradiksi",
    warna: palette.kredit,
    arti: "Selalu SALAH untuk semua nilai",
    contoh: "p ∧ ¬p",
    ket: "Mustahil p benar dan salah pada saat bersamaan.",
  },
  {
    nama: "Kontingensi",
    warna: palette.ekuitas,
    arti: "Kadang benar, kadang salah",
    contoh: "p → q",
    ket: "Nilainya bergantung pada nilai p dan q.",
  },
];

export const TautologiKontradiksi: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Tautologi, Kontradiksi, Kontingensi" sub="Tiga sifat sebuah rumus logika" />

      <div style={{ display: "flex", gap: 18, marginTop: 44 }}>
        {KARTU.map((k, i) => {
          const { scale, opacity } = usePop(20 + i * 28);
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
                borderTop: `6px solid ${k.warna}`,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 25, fontWeight: 800, color: k.warna }}>{k.nama}</div>
              <div style={{ fontSize: 17, color: palette.text, marginTop: 12, fontWeight: 700 }}>{k.arti}</div>
              <div style={{ fontSize: 30, fontWeight: 800, color: k.warna, marginTop: 16, fontFamily: "monospace" }}>{k.contoh}</div>
              <div style={{ fontSize: 15, color: palette.muted, marginTop: 16, lineHeight: 1.5 }}>{k.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Cara mengeceknya: bangun tabel kebenaran, lalu lihat kolom akhirnya semua benar, semua salah, atau campur.
      </div>
    </AbsoluteFill>
  );
};

export const TautologiKontradiksiDuration = 195;
