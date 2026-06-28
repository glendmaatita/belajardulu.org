import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Proses berpikir matematis: amati, tebak, uji, simpulkan.
const LANGKAH = [
  { judul: "Amati", isi: "Perhatikan pola atau keteraturan pada contoh nyata.", warna: palette.ekuitas },
  { judul: "Tebak (dugaan)", isi: "Buat dugaan aturan umum dari yang kamu amati.", warna: palette.kewajiban },
  { judul: "Uji", isi: "Coba dugaan itu pada contoh baru. Apakah tetap berlaku?", warna: palette.aset },
  { judul: "Simpulkan", isi: "Jika selalu cocok, rumuskan. Jika gagal, perbaiki dugaan.", warna: palette.kredit },
];

export const BerpikirMatematis: React.FC = () => {
  const note = useFade(170, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Cara Berpikir Matematis" sub="Amati, tebak, uji, lalu simpulkan" />

      <div style={{ display: "flex", gap: 12, marginTop: 40, alignItems: "stretch" }}>
        {LANGKAH.map((l, i) => {
          const { scale, opacity } = usePop(20 + i * 28);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{ flex: 1, transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 14, padding: "18px 14px", borderTop: `6px solid ${l.warna}`, minHeight: 200 }}>
                <div style={{ width: 30, height: 30, borderRadius: 999, background: l.warna, color: "#06121f", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 15 }}>{i + 1}</div>
                <div style={{ fontSize: 17, fontWeight: 800, color: l.warna, marginTop: 10 }}>{l.judul}</div>
                <div style={{ fontSize: 14, color: palette.text, marginTop: 8, lineHeight: 1.5 }}>{l.isi}</div>
              </div>
              {i < LANGKAH.length - 1 && <div style={{ fontSize: 24, color: palette.accent, opacity, padding: "0 2px" }}>→</div>}
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Inilah inti matematika: bukan menghafal rumus, tetapi berpetualang dari pengamatan menuju kesimpulan.
      </div>
    </AbsoluteFill>
  );
};

export const BerpikirMatematisDuration = 205;
