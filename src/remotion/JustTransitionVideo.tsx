import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Just transition: transisi ke ekonomi rendah karbon yang adil bagi pekerja & masyarakat terdampak.
const PILAR = [
  { ikon: "👷", judul: "Pekerja", ket: "Pelatihan ulang & pekerjaan baru" },
  { ikon: "🏘️", judul: "Masyarakat", ket: "Dukungan wilayah bergantung fosil" },
  { ikon: "⚖️", judul: "Keadilan", ket: "Beban & manfaat dibagi adil" },
];

export const JustTransitionVideo: React.FC = () => {
  const note = useFade(140, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Just Transition: Transisi yang Adil" sub="Menuju rendah karbon tanpa meninggalkan pekerja dan masyarakat" />

      <div style={{ display: "flex", gap: 22, marginTop: 50, justifyContent: "center" }}>
        {PILAR.map((p, i) => {
          const { scale, opacity } = usePop(20 + i * 28);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 18, padding: "28px 26px", width: 280, textAlign: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.3)" }}>
              <div style={{ fontSize: 50 }}>{p.ikon}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginTop: 10 }}>{p.judul}</div>
              <div style={{ fontSize: 17, color: palette.muted, marginTop: 8 }}>{p.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 36, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Transisi iklim bisa menutup industri lama. Tanpa keadilan, ada penolakan sosial. Climate finance kini menilai dampak sosial, bukan hanya emisi.
      </div>
    </AbsoluteFill>
  );
};

export const JustTransitionVideoDuration = 180;
