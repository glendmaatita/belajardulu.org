import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Bias kognitif yang sering merusak penalaran sehari-hari.
const BIAS = [
  { nama: "Bias Konfirmasi", arti: "Hanya mencari bukti yang mendukung keyakinan kita", warna: palette.kewajiban },
  { nama: "Efek Bandwagon", arti: "Percaya sesuatu karena banyak orang percaya", warna: palette.ekuitas },
  { nama: "Bias Penjangkaran", arti: "Terpaku pada angka atau info pertama yang didengar", warna: palette.aset },
  { nama: "Bias Ketersediaan", arti: "Menilai sering karena mudah diingat, bukan karena data", warna: palette.kredit },
];

export const BiasKognitif: React.FC = () => {
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Bias Kognitif" sub="Jebakan berpikir yang menyesatkan nalar" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 38, maxWidth: 940, marginLeft: "auto", marginRight: "auto" }}>
        {BIAS.map((b, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          return (
            <div
              key={i}
              style={{
                transform: `scale(${scale})`,
                opacity,
                background: palette.bgSoft,
                borderRadius: 14,
                padding: "20px 22px",
                borderLeft: `6px solid ${b.warna}`,
              }}
            >
              <div style={{ fontSize: 21, fontWeight: 800, color: b.warna }}>{b.nama}</div>
              <div style={{ fontSize: 17, color: palette.text, marginTop: 8, lineHeight: 1.5 }}>{b.arti}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 28, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Berpikir kritis berarti sadar bahwa otak kita punya bias bawaan, lalu sengaja mencari bukti yang melawannya.
      </div>
    </AbsoluteFill>
  );
};

export const BiasKognitifDuration = 185;
