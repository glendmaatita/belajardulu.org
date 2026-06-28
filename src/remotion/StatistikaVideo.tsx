import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Mean, median, modus: tiga cara meringkas data jadi satu angka.
const DATA = [60, 70, 80, 90, 100];
const UKURAN = [
  { nama: "Rata-rata (mean)", nilai: "80", arti: "Jumlah semua dibagi banyaknya data", warna: palette.aset },
  { nama: "Median", nilai: "80", arti: "Nilai tengah setelah diurutkan", warna: palette.ekuitas },
  { nama: "Modus", nilai: "tak ada", arti: "Nilai yang paling sering muncul", warna: palette.kewajiban },
];

export const StatistikaVideo: React.FC = () => {
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Meringkas Data Jadi Satu Angka" sub="Nilai lima siswa: 60, 70, 80, 90, 100" />

      <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 30 }}>
        {DATA.map((d, i) => {
          const { scale, opacity } = usePop(15 + i * 12);
          return (
            <div key={i} style={{ width: 64, height: 64, borderRadius: 12, background: palette.bgSoft, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, color: palette.text, transform: `scale(${scale})`, opacity }}>{d}</div>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: 16, marginTop: 34, maxWidth: 940, marginLeft: "auto", marginRight: "auto" }}>
        {UKURAN.map((u, i) => {
          const { scale, opacity } = usePop(80 + i * 22);
          return (
            <div key={i} style={{ flex: 1, transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 14, padding: "18px 16px", borderTop: `6px solid ${u.warna}`, textAlign: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: u.warna }}>{u.nama}</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: palette.text, marginTop: 6 }}>{u.nilai}</div>
              <div style={{ fontSize: 14, color: palette.muted, marginTop: 8, lineHeight: 1.4 }}>{u.arti}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Satu angka bisa mewakili banyak data. Rata-rata = jumlah seluruh data dibagi banyaknya data.
      </div>
    </AbsoluteFill>
  );
};

export const StatistikaVideoDuration = 200;
