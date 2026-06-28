import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Silogisme: dua premis menghasilkan kesimpulan logis.
const BARIS = [
  { label: "Premis mayor", teks: "Semua makhluk hidup membutuhkan air.", warna: palette.ekuitas },
  { label: "Premis minor", teks: "Manusia adalah makhluk hidup.", warna: palette.kewajiban },
  { label: "Kesimpulan", teks: "Manusia membutuhkan air.", warna: palette.aset },
];

export const SilogismeVideo: React.FC = () => {
  const note = useFade(130, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Silogisme: Dua Premis, Satu Kesimpulan" sub="Bentuk dasar penalaran deduktif" />

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 44, maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
        {BARIS.map((b, i) => {
          const { scale, opacity } = usePop(20 + i * 30);
          return (
            <div key={i}>
              {i === 2 && <div style={{ height: 2, background: "rgba(255,255,255,0.2)", margin: "6px 0 14px" }} />}
              <div style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", gap: 18, background: palette.bgSoft, borderRadius: 14, padding: "18px 24px", borderLeft: `6px solid ${b.warna}` }}>
                <div style={{ width: 150, fontSize: 15, fontWeight: 800, color: b.warna }}>{b.label}</div>
                <div style={{ flex: 1, fontSize: 21, color: palette.text }}>{b.teks}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Jika kedua premis benar dan bentuknya valid, kesimpulan pasti benar. Validitas (bentuk) berbeda dari kebenaran (isi premis).
      </div>
    </AbsoluteFill>
  );
};

export const SilogismeVideoDuration = 175;
