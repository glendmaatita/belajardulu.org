import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Tiga Hukum Newton tentang gerak.
const HUKUM = [
  { no: "I", judul: "Kelembaman", isi: "Benda diam tetap diam, benda bergerak tetap lurus beraturan, kecuali ada gaya luar.", warna: palette.aset },
  { no: "II", judul: "F = m a", isi: "Percepatan sebanding dengan gaya total dan berbanding terbalik dengan massa.", warna: palette.ekuitas },
  { no: "III", judul: "Aksi-Reaksi", isi: "Setiap aksi punya reaksi sama besar dan berlawanan arah.", warna: palette.kewajiban },
];

export const HukumNewtonVideo: React.FC = () => {
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Tiga Hukum Newton" sub="Aturan main gerak benda" />

      <div style={{ display: "flex", gap: 16, marginTop: 44 }}>
        {HUKUM.map((h, i) => {
          const { scale, opacity } = usePop(20 + i * 30);
          return (
            <div key={i} style={{ flex: 1, transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "22px 20px", borderTop: `6px solid ${h.warna}` }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: h.warna }}>{h.no}</div>
              <div style={{ fontSize: 19, fontWeight: 800, color: palette.text, marginTop: 6 }}>{h.judul}</div>
              <div style={{ fontSize: 15, color: palette.muted, marginTop: 10, lineHeight: 1.5 }}>{h.isi}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Ketiga hukum ini menjelaskan hampir semua gerak sehari-hari, dari mobil melaju sampai roket meluncur.
      </div>
    </AbsoluteFill>
  );
};

export const HukumNewtonVideoDuration = 195;
