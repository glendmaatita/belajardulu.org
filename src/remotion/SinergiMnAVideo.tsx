import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Sinergi M&A: nilai gabungan bisa melebihi penjumlahan dua perusahaan (1 + 1 = 3).
export const SinergiMnAVideo: React.FC = () => {
  const a = usePop(20);
  const b = usePop(45);
  const plus = useFade(60, 14);
  const c = usePop(90);
  const note = useFade(140, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Sinergi M&A: 1 + 1 Bisa Jadi 3" sub="Nilai gabungan dapat melebihi jumlah dua perusahaan terpisah" />

      <div style={{ display: "flex", alignItems: "center", gap: 26, marginTop: 60, justifyContent: "center" }}>
        <div style={{ transform: `scale(${a.scale})`, opacity: a.opacity }}>
          <Box label="Pengakuisisi" value="Rp100 M" bg={palette.ekuitas} />
        </div>
        <div style={{ fontSize: 44, color: palette.muted, opacity: plus }}>+</div>
        <div style={{ transform: `scale(${b.scale})`, opacity: b.opacity }}>
          <Box label="Target" value="Rp60 M" bg={palette.kewajiban} />
        </div>
        <div style={{ fontSize: 44, color: palette.muted, opacity: c.opacity }}>=</div>
        <div style={{ transform: `scale(${c.scale})`, opacity: c.opacity }}>
          <Box label="Gabungan + Sinergi" value="Rp185 M" bg={palette.aset} big />
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 44, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Sinergi Rp25 M berasal dari penghematan biaya, pendapatan silang, atau efisiensi pajak. Tetapi sinergi sering ditaksir terlalu optimistis,
        dan membayar premi terlalu tinggi bisa menghapus nilainya.
      </div>
    </AbsoluteFill>
  );
};

function Box({ label, value, bg, big }: { label: string; value: string; bg: string; big?: boolean }) {
  return (
    <div style={{ background: bg, color: "#06121f", borderRadius: 16, padding: big ? "30px 38px" : "24px 30px", textAlign: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.3)" }}>
      <div style={{ fontSize: big ? 17 : 15, fontWeight: 700, opacity: 0.75 }}>{label}</div>
      <div style={{ fontSize: big ? 40 : 30, fontWeight: 900, marginTop: 4 }}>{value}</div>
    </div>
  );
}

export const SinergiMnAVideoDuration = 180;
