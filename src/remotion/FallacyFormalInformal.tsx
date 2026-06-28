import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Membedakan sesat pikir formal (cacat bentuk) dan informal (cacat isi/konteks).
const KOLOM = [
  {
    nama: "Sesat Pikir Formal",
    warna: palette.kewajiban,
    arti: "Cacat pada BENTUK argumen",
    poin: ["Menegaskan akibat", "Menyangkal sebab", "Term tengah tak terdistribusi"],
    ket: "Bisa dideteksi dari strukturnya saja, tanpa melihat isi.",
  },
  {
    nama: "Sesat Pikir Informal",
    warna: palette.ekuitas,
    arti: "Cacat pada ISI atau konteks",
    poin: ["Ad hominem", "Strawman", "Slippery slope", "Appeal to authority"],
    ket: "Butuh memahami makna dan konteks kalimat untuk mengenalinya.",
  },
];

export const FallacyFormalInformal: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Formal vs Informal" sub="Dua keluarga besar sesat pikir" />

      <div style={{ display: "flex", gap: 20, marginTop: 44, maxWidth: 940, marginLeft: "auto", marginRight: "auto" }}>
        {KOLOM.map((k, i) => {
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
                padding: "24px 24px",
                borderTop: `6px solid ${k.warna}`,
              }}
            >
              <div style={{ fontSize: 23, fontWeight: 800, color: k.warna }}>{k.nama}</div>
              <div style={{ fontSize: 17, color: palette.text, marginTop: 10, fontWeight: 700 }}>{k.arti}</div>
              <div style={{ marginTop: 14 }}>
                {k.poin.map((p, j) => (
                  <div key={j} style={{ fontSize: 16, color: palette.muted, marginTop: 6 }}>• {p}</div>
                ))}
              </div>
              <div style={{ fontSize: 15, color: palette.text, marginTop: 16, lineHeight: 1.5, fontStyle: "italic" }}>{k.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 28, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Formal: cek bentuknya. Informal: cek apakah isinya benar-benar mendukung kesimpulan.
      </div>
    </AbsoluteFill>
  );
};

export const FallacyFormalInformalDuration = 185;
