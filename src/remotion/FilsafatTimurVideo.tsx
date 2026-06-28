import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Tradisi filsafat Timur dan Pancasila.
const TRADISI = [
  { nama: "Konfusianisme", asal: "Tiongkok, Konfusius", inti: "Keharmonisan sosial, kebajikan (ren), dan tata krama (li).", warna: palette.aset },
  { nama: "Taoisme", asal: "Tiongkok, Laozi", inti: "Hidup selaras dengan Tao, kesederhanaan dan wu wei (tanpa paksaan).", warna: palette.ekuitas },
  { nama: "Buddhisme", asal: "India, Siddhartha Gautama", inti: "Empat Kebenaran Mulia, melepas keinginan untuk mengakhiri penderitaan.", warna: palette.kewajiban },
  { nama: "Pancasila", asal: "Indonesia", inti: "Dasar falsafah bangsa: ketuhanan, kemanusiaan, persatuan, kerakyatan, keadilan.", warna: palette.kredit },
];

export const FilsafatTimurVideo: React.FC = () => {
  const note = useFade(180, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Filsafat Timur & Pancasila" sub="Tradisi kebijaksanaan dari Asia" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 36, maxWidth: 960, marginLeft: "auto", marginRight: "auto" }}>
        {TRADISI.map((t, i) => {
          const { scale, opacity } = usePop(20 + i * 28);
          return (
            <div
              key={i}
              style={{
                transform: `scale(${scale})`,
                opacity,
                background: palette.bgSoft,
                borderRadius: 14,
                padding: "18px 22px",
                borderLeft: `6px solid ${t.warna}`,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 800, color: t.warna }}>{t.nama}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: palette.muted, marginTop: 2 }}>{t.asal}</div>
              <div style={{ fontSize: 16, color: palette.text, marginTop: 8, lineHeight: 1.5 }}>{t.inti}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Filsafat Timur menekankan keselarasan, etika hidup, dan kebijaksanaan praktis, melengkapi tradisi Barat.
      </div>
    </AbsoluteFill>
  );
};

export const FilsafatTimurVideoDuration = 210;
