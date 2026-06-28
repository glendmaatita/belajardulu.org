import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Perdebatan kehendak bebas vs determinisme, dan posisi kompatibilisme.
const POS = [
  { judul: "Determinisme", ket: "Semua peristiwa, termasuk pilihan kita, sudah ditentukan sebab sebelumnya.", warna: palette.kewajiban },
  { judul: "Kehendak Bebas", ket: "Manusia benar-benar bisa memilih bebas dan bertanggung jawab atas pilihannya.", warna: palette.aset },
  { judul: "Kompatibilisme", ket: "Kebebasan dan sebab-akibat bisa berdampingan: bebas berarti bertindak sesuai keinginan sendiri.", warna: palette.ekuitas },
];

export const KehendakBebas: React.FC = () => {
  const note = useFade(140, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Kehendak Bebas vs Determinisme" sub="Apakah kita benar-benar memilih, atau semua sudah ditentukan?" />

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 44, maxWidth: 860, marginLeft: "auto", marginRight: "auto" }}>
        {POS.map((p, i) => {
          const { scale, opacity } = usePop(20 + i * 30);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", gap: 20, background: palette.bgSoft, borderRadius: 16, padding: "20px 26px", borderLeft: `6px solid ${p.warna}` }}>
              <div style={{ width: 200, fontSize: 21, fontWeight: 800, color: p.warna }}>{p.judul}</div>
              <div style={{ flex: 1, fontSize: 17, color: palette.text }}>{p.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Perdebatan ini penting karena menyangkut tanggung jawab moral: bila tak ada kehendak bebas, bisakah seseorang disalahkan atas perbuatannya?
      </div>
    </AbsoluteFill>
  );
};

export const KehendakBebasDuration = 175;
