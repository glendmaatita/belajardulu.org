import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Tiga mode penalaran: deduksi, induksi, abduksi.
const KOLOM = [
  {
    nama: "Deduksi",
    warna: palette.aset,
    rumus: "Aturan + Kasus → Akibat",
    sifat: "Kesimpulan PASTI benar bila premis benar",
    contoh: "Semua logam memuai; besi logam; maka besi memuai.",
  },
  {
    nama: "Induksi",
    warna: palette.ekuitas,
    rumus: "Kasus + Akibat → Aturan",
    sifat: "Kesimpulan KEMUNGKINAN benar (generalisasi)",
    contoh: "1000 kali air mendidih di 100 C; jadi air selalu begitu.",
  },
  {
    nama: "Abduksi",
    warna: palette.kewajiban,
    rumus: "Aturan + Akibat → Kasus",
    sifat: "DUGAAN sebab terbaik, bisa direvisi",
    contoh: "Lantai basah; penjelasan terbaiknya keran bocor.",
  },
];

export const AbduksiVideo: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Tiga Cara Bernalar" sub="Deduksi, induksi, dan abduksi" />

      <div style={{ display: "flex", gap: 18, marginTop: 40 }}>
        {KOLOM.map((k, i) => {
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
                padding: "22px 20px",
                borderTop: `6px solid ${k.warna}`,
              }}
            >
              <div style={{ fontSize: 26, fontWeight: 800, color: k.warna }}>{k.nama}</div>
              <div style={{ fontSize: 18, color: palette.text, marginTop: 12, fontWeight: 700 }}>{k.rumus}</div>
              <div style={{ fontSize: 16, color: palette.muted, marginTop: 12 }}>{k.sifat}</div>
              <div style={{ fontSize: 15, color: palette.text, marginTop: 14, fontStyle: "italic", lineHeight: 1.5 }}>{k.contoh}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Deduksi memberi kepastian, induksi membangun aturan dari pola, abduksi menebak sebab paling masuk akal.
      </div>
    </AbsoluteFill>
  );
};

export const AbduksiVideoDuration = 195;
