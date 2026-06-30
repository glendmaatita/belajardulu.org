import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

// Matriks Kraljic: memetakan barang beli berdasarkan risiko pasokan & dampak biaya.
const QUAD = [
  { judul: "Leverage", ket: "Dampak tinggi, risiko rendah. Tekan harga lewat tender.", warna: "#60a5fa", x: 1, y: 0 },
  { judul: "Strategis", ket: "Dampak tinggi, risiko tinggi. Bangun kemitraan jangka panjang.", warna: "#f472b6", x: 1, y: 1 },
  { judul: "Rutin", ket: "Dampak rendah, risiko rendah. Sederhanakan & otomasi.", warna: "#34d399", x: 0, y: 0 },
  { judul: "Bottleneck", ket: "Dampak rendah, risiko tinggi. Amankan pasokan & cari alternatif.", warna: "#fbbf24", x: 0, y: 1 },
];

export const StrategicSourcingVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Matriks Kraljic" sub="Strategi sourcing menyesuaikan dampak biaya dan risiko pasokan" />

      <div style={{ display: "flex", gap: 18, marginTop: 40 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: 16, color: palette.muted, fontWeight: 700 }}>
            Risiko pasokan &rarr;
          </div>
        </div>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "260px 260px", gridTemplateRows: "150px 150px", gap: 14 }}>
            {[QUAD[3], QUAD[1], QUAD[2], QUAD[0]].map((q, i) => {
              const { scale, opacity } = usePop(24 + i * 18);
              return (
                <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: `2px solid ${q.warna}`, borderRadius: 16, padding: "16px 18px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}>
                  <div style={{ fontSize: 21, fontWeight: 800, color: q.warna }}>{q.judul}</div>
                  <div style={{ fontSize: 14, color: palette.muted, marginTop: 8, lineHeight: 1.4 }}>{q.ket}</div>
                </div>
              );
            })}
          </div>
          <div style={{ fontSize: 16, color: palette.muted, fontWeight: 700, marginTop: 12, textAlign: "center" }}>
            Dampak terhadap biaya &rarr;
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const StrategicSourcingVideoDuration = 200;
