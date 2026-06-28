import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Persamaan sebagai timbangan yang harus tetap seimbang.
const LANGKAH = [
  { kiri: "x + 3", kanan: "8", ket: "Keadaan awal, timbangan seimbang." },
  { kiri: "x + 3 - 3", kanan: "8 - 3", ket: "Kurangi 3 di kedua sisi agar tetap seimbang." },
  { kiri: "x", kanan: "5", ket: "Kotak x bernilai 5. Teka-teki terpecahkan." },
];

export const PersamaanVideo: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Persamaan adalah Timbangan" sub="Apa pun yang dilakukan ke satu sisi, lakukan ke sisi lain" />

      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 40, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
        {LANGKAH.map((l, i) => {
          const { scale, opacity } = usePop(20 + i * 34);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 14, padding: "16px 22px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 22, fontFamily: "monospace" }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: palette.ekuitas }}>{l.kiri}</span>
                <span style={{ fontSize: 24, color: palette.accent }}>=</span>
                <span style={{ fontSize: 26, fontWeight: 800, color: palette.aset }}>{l.kanan}</span>
              </div>
              <div style={{ fontSize: 14, color: palette.muted, marginTop: 8, textAlign: "center" }}>{l.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 17, color: palette.muted, textAlign: "center" }}>
        Aturan memindah ruas bukan sihir, melainkan menjaga timbangan tetap seimbang.
      </div>
    </AbsoluteFill>
  );
};

export const PersamaanVideoDuration = 185;
