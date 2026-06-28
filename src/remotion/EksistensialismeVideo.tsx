import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Inti pemikiran eksistensialisme.
const POIN = [
  { judul: "Eksistensi mendahului esensi", isi: "Manusia ada dulu, baru menentukan siapa dirinya lewat pilihan.", warna: palette.aset },
  { judul: "Kebebasan dan tanggung jawab", isi: "Kita bebas memilih, dan karena itu bertanggung jawab penuh atas hidup kita.", warna: palette.ekuitas },
  { judul: "Makna diciptakan, bukan ditemukan", isi: "Hidup tidak punya makna bawaan; kitalah yang memberinya makna.", warna: palette.kewajiban },
  { judul: "Menghadapi absurditas", isi: "Tetap memilih dan bertindak meski dunia terasa tanpa jawaban pasti.", warna: palette.kredit },
];

export const EksistensialismeVideo: React.FC = () => {
  const note = useFade(170, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Eksistensialisme" sub="Kierkegaard, Nietzsche, Sartre, Camus" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 38, maxWidth: 940, marginLeft: "auto", marginRight: "auto" }}>
        {POIN.map((p, i) => {
          const { scale, opacity } = usePop(20 + i * 28);
          return (
            <div
              key={i}
              style={{
                transform: `scale(${scale})`,
                opacity,
                background: palette.bgSoft,
                borderRadius: 14,
                padding: "20px 22px",
                borderLeft: `6px solid ${p.warna}`,
              }}
            >
              <div style={{ fontSize: 19, fontWeight: 800, color: p.warna }}>{p.judul}</div>
              <div style={{ fontSize: 16, color: palette.text, marginTop: 8, lineHeight: 1.5 }}>{p.isi}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 28, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Eksistensialisme menempatkan kebebasan, pilihan, dan tanggung jawab pribadi di pusat makna hidup.
      </div>
    </AbsoluteFill>
  );
};

export const EksistensialismeVideoDuration = 200;
