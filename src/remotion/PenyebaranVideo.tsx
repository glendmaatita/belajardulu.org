import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Dua kelompok dengan rata-rata sama tetapi penyebaran berbeda.
const A = [48, 49, 50, 51, 52];
const B = [10, 30, 50, 70, 90];

export const PenyebaranVideo: React.FC = () => {
  const note = useFade(150, 18);
  const Row = ({ data, label, warna, delay }: { data: number[]; label: string; warna: string; delay: number }) => (
    <div style={{ marginTop: 18 }}>
      <div style={{ fontSize: 15, color: palette.muted, marginBottom: 6 }}>{label} (rata-rata 50)</div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
        {data.map((d, i) => {
          const { scale, opacity } = usePop(delay + i * 10);
          return <div key={i} style={{ transform: `scale(${scale})`, opacity, width: 60, height: 44, borderRadius: 8, background: warna, color: "#06121f", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>{d}</div>;
        })}
      </div>
    </div>
  );
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Rata-rata Saja Tidak Cukup" sub="Dua kelompok bisa berata-rata sama tapi sangat berbeda" />

      <div style={{ maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
        <Row data={A} label="Kelompok A: nilai berdekatan" warna={palette.aset} delay={20} />
        <Row data={B} label="Kelompok B: nilai berjauhan" warna={palette.kewajiban} delay={70} />
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Keduanya berata-rata 50, tetapi kelompok B jauh lebih menyebar. Untuk itulah kita butuh ukuran penyebaran.
      </div>
    </AbsoluteFill>
  );
};

export const PenyebaranVideoDuration = 185;
