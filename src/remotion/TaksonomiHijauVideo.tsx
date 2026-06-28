import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Taksonomi hijau: mengklasifikasikan aktivitas ekonomi ke hijau, transisi, atau tidak memenuhi.
const ITEMS = [
  { nama: "PLTS surya", kelas: "Hijau", warna: palette.aset },
  { nama: "Efisiensi pabrik (transisi)", kelas: "Transisi", warna: palette.kewajiban },
  { nama: "PLTU batu bara baru", kelas: "Tidak memenuhi", warna: palette.kredit },
  { nama: "Transportasi listrik", kelas: "Hijau", warna: palette.aset },
];

export const TaksonomiHijauVideo: React.FC = () => {
  const note = useFade(150, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Taksonomi Hijau: Memilah Aktivitas" sub="Kamus resmi yang menentukan mana yang benar-benar hijau" />

      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 36 }}>
        {ITEMS.map((it, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", justifyContent: "space-between", background: palette.bgSoft, borderRadius: 14, padding: "18px 24px" }}>
              <span style={{ fontSize: 22, color: palette.text, fontWeight: 700 }}>{it.nama}</span>
              <span style={{ fontSize: 18, fontWeight: 800, color: "#06121f", background: it.warna, borderRadius: 10, padding: "8px 16px" }}>{it.kelas}</span>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 28, fontSize: 18, color: palette.muted }}>
        Taksonomi menetapkan kriteria & ambang teknis agar klaim "hijau" tidak sekadar label. Ada juga kategori transisi untuk aktivitas yang sedang berbenah.
      </div>
    </AbsoluteFill>
  );
};

export const TaksonomiHijauVideoDuration = 190;
