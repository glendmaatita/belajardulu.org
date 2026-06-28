import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade, Arrow } from "./anim";

// Memetakan struktur argumen: premis menuju kesimpulan.
const PREMIS = [
  "Premis 1: Olahraga teratur menurunkan risiko penyakit jantung.",
  "Premis 2: Rani berolahraga teratur tiap hari.",
];

export const StrukturArgumen: React.FC = () => {
  const p0 = usePop(20);
  const p1 = usePop(50);
  const kesimpulan = usePop(110);
  const note = useFade(150, 18);
  const premisStyle = [p0, p1];
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Anatomi Sebuah Argumen" sub="Premis sebagai penopang, kesimpulan sebagai klaim" />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, marginTop: 40 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 720 }}>
          {PREMIS.map((p, i) => (
            <div
              key={i}
              style={{
                transform: `scale(${premisStyle[i].scale})`,
                opacity: premisStyle[i].opacity,
                background: palette.bgSoft,
                borderRadius: 12,
                padding: "16px 20px",
                borderLeft: `6px solid ${palette.ekuitas}`,
                fontSize: 19,
                color: palette.text,
              }}
            >
              {p}
            </div>
          ))}
        </div>

        <Arrow delay={85} label="maka" vertical />

        <div
          style={{
            transform: `scale(${kesimpulan.scale})`,
            opacity: kesimpulan.opacity,
            background: palette.bgSoft,
            borderRadius: 14,
            padding: "20px 26px",
            borderLeft: `6px solid ${palette.aset}`,
            width: 720,
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 800, color: palette.aset }}>KESIMPULAN</div>
          <div style={{ fontSize: 21, color: palette.text, marginTop: 4 }}>Rani memiliki risiko penyakit jantung yang lebih rendah.</div>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 28, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Cari kata penanda: "karena, sebab" menandai premis; "maka, jadi, oleh karena itu" menandai kesimpulan.
      </div>
    </AbsoluteFill>
  );
};

export const StrukturArgumenDuration = 185;
