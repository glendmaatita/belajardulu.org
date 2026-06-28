import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Jenis sudut menurut besarnya.
const SUDUT = [
  { nama: "Lancip", rentang: "kurang dari 90 derajat", warna: palette.aset },
  { nama: "Siku-siku", rentang: "tepat 90 derajat", warna: palette.ekuitas },
  { nama: "Tumpul", rentang: "antara 90 dan 180 derajat", warna: palette.kewajiban },
  { nama: "Lurus", rentang: "tepat 180 derajat", warna: palette.kredit },
];

export const SudutVideo: React.FC = () => {
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Mengenal Sudut" sub="Besar putaran antara dua sinar" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 40, maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
        {SUDUT.map((s, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", gap: 16, background: palette.bgSoft, borderRadius: 14, padding: "18px 22px", borderLeft: `6px solid ${s.warna}` }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: s.warna }}>{s.nama}</div>
                <div style={{ fontSize: 15, color: palette.muted, marginTop: 3 }}>{s.rentang}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Sudut pada garis lurus selalu berjumlah 180 derajat, dan satu putaran penuh 360 derajat.
      </div>
    </AbsoluteFill>
  );
};

export const SudutVideoDuration = 180;
