import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Langkah berpikir kritis: dari klaim sampai kesimpulan yang teruji.
const STEP = [
  { ikon: "❓", judul: "Perjelas klaim", ket: "Apa persisnya yang diklaim?" },
  { ikon: "🔍", judul: "Periksa bukti", ket: "Apa dasarnya? Sumbernya kredibel?" },
  { ikon: "🧩", judul: "Uji logika", ket: "Apakah ada sesat pikir?" },
  { ikon: "🔄", judul: "Cari alternatif", ket: "Adakah penjelasan lain?" },
  { ikon: "✅", judul: "Simpulkan", ket: "Ambil posisi, tetap terbuka direvisi" },
];

export const BerpikirKritis: React.FC = () => {
  const note = useFade(140, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Langkah Berpikir Kritis" sub="Menilai klaim secara sistematis sebelum mempercayainya" />

      <div style={{ display: "flex", gap: 10, marginTop: 50, alignItems: "stretch", justifyContent: "center" }}>
        {STEP.map((s, i) => {
          const { scale, opacity } = usePop(20 + i * 24);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "20px 14px", width: 180, textAlign: "center", boxShadow: "0 12px 36px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize: 36 }}>{s.ikon}</div>
                <div style={{ fontSize: 17, fontWeight: 800, color: palette.text, marginTop: 6 }}>{s.judul}</div>
                <div style={{ fontSize: 13, color: palette.muted, marginTop: 4 }}>{s.ket}</div>
              </div>
              {i < STEP.length - 1 && <div style={{ fontSize: 24, color: palette.muted, opacity }}>&rarr;</div>}
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 36, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Berpikir kritis bukan sekadar meragukan segalanya, melainkan menimbang bukti dan logika secara jujur, lalu siap mengubah pendapat bila ada bukti lebih kuat.
      </div>
    </AbsoluteFill>
  );
};

export const BerpikirKritisDuration = 180;
