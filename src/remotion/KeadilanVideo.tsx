import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Pandangan tentang keadilan dalam filsafat politik.
const PANDANGAN = [
  { nama: "Utilitarianisme", inti: "Adil = kebahagiaan terbesar bagi sebanyak mungkin orang.", warna: palette.kewajiban },
  { nama: "Kontrak Sosial", inti: "Adil = aturan yang disepakati orang rasional demi hidup bersama (Hobbes, Rousseau).", warna: palette.ekuitas },
  { nama: "Keadilan sebagai Fairness", inti: "Rawls: rancang aturan dari balik 'tabir ketidaktahuan', tanpa tahu posisi kita nanti.", warna: palette.aset },
];

export const KeadilanVideo: React.FC = () => {
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Apa Itu Keadilan?" sub="Tiga jawaban dari filsafat politik" />

      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 38, maxWidth: 880, marginLeft: "auto", marginRight: "auto" }}>
        {PANDANGAN.map((p, i) => {
          const { scale, opacity } = usePop(20 + i * 32);
          return (
            <div
              key={i}
              style={{
                transform: `scale(${scale})`,
                opacity,
                display: "flex",
                alignItems: "center",
                gap: 18,
                background: palette.bgSoft,
                borderRadius: 14,
                padding: "18px 24px",
                borderLeft: `6px solid ${p.warna}`,
              }}
            >
              <div style={{ width: 210, fontSize: 19, fontWeight: 800, color: p.warna }}>{p.nama}</div>
              <div style={{ flex: 1, fontSize: 17, color: palette.text, lineHeight: 1.5 }}>{p.inti}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 28, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        "Tabir ketidaktahuan" Rawls menguji keadilan: aturan disebut adil bila kita rela menerimanya tanpa tahu akan jadi siapa.
      </div>
    </AbsoluteFill>
  );
};

export const KeadilanVideoDuration = 195;
