import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade, Arrow } from "./anim";

// Dialektika Hegel: tesis, antitesis, sintesis.
export const DialektikaHegel: React.FC = () => {
  const tesis = usePop(20);
  const anti = usePop(55);
  const sintesis = usePop(110);
  const note = useFade(150, 18);
  const ulang = useFade(180, 18);

  const Kartu = ({ s, label, isi, warna, sub }: { s: { scale: number; opacity: number }; label: string; isi: string; warna: string; sub: string }) => (
    <div style={{ transform: `scale(${s.scale})`, opacity: s.opacity, background: palette.bgSoft, borderRadius: 16, padding: "20px 22px", borderTop: `6px solid ${warna}`, width: 300, textAlign: "center" }}>
      <div style={{ fontSize: 14, fontWeight: 800, color: warna }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginTop: 6 }}>{isi}</div>
      <div style={{ fontSize: 15, color: palette.muted, marginTop: 10, lineHeight: 1.5 }}>{sub}</div>
    </div>
  );

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "36px 50px" }}>
      <Title text="Dialektika Hegel" sub="Tesis, antitesis, lalu sintesis" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 36 }}>
        <Kartu s={tesis} label="TESIS" isi="Sebuah gagasan" warna={palette.aset} sub="Posisi atau keadaan awal yang diajukan." />
        <Arrow delay={40} label="ditentang" />
        <Kartu s={anti} label="ANTITESIS" isi="Pertentangannya" warna={palette.kredit} sub="Kritik atau gagasan yang berlawanan muncul." />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
        <Arrow delay={95} label="dipadukan" vertical />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
        <Kartu s={sintesis} label="SINTESIS" isi="Pemahaman baru" warna={palette.ekuitas} sub="Menyatukan kebenaran tesis dan antitesis ke tingkat lebih tinggi." />
      </div>

      <div style={{ opacity: note, marginTop: 22, fontSize: 17, color: palette.text, textAlign: "center" }}>
        Contoh: "ada" (tesis) dan "tiada" (antitesis) dipadukan menjadi "menjadi" (sintesis).
      </div>
      <div style={{ opacity: ulang, marginTop: 8, fontSize: 16, color: palette.muted, textAlign: "center" }}>
        Sintesis lalu menjadi tesis baru, dan siklus berlanjut, mendorong sejarah pemikiran terus maju.
      </div>
    </AbsoluteFill>
  );
};

export const DialektikaHegelDuration = 215;
