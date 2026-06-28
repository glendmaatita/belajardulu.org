import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Keunggulan komparatif: tiap negara berspesialisasi pada yang biaya peluangnya paling rendah,
// lalu berdagang, sehingga total produksi naik.
export const KeunggulanKomparatif: React.FC = () => {
  const a = usePop(25);
  const b = usePop(60);
  const c = usePop(100);
  const note = useFade(140, 18);

  const Card = ({ pop, judul, ket, warna }: { pop: { scale: number; opacity: number }; judul: string; ket: string; warna: string }) => (
    <div style={{ transform: `scale(${pop.scale})`, opacity: pop.opacity, background: palette.bgSoft, borderRadius: 16, padding: "22px 20px", width: 300, textAlign: "center", boxShadow: "0 12px 36px rgba(0,0,0,0.3)", borderTop: `5px solid ${warna}` }}>
      <div style={{ fontSize: 21, fontWeight: 800, color: palette.text }}>{judul}</div>
      <div style={{ fontSize: 15, color: palette.muted, marginTop: 8 }}>{ket}</div>
    </div>
  );

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Keunggulan Komparatif" sub="Berspesialisasi lalu berdagang membuat semua pihak lebih makmur" />

      <div style={{ display: "flex", gap: 24, marginTop: 48, justifyContent: "center", alignItems: "center" }}>
        <Card pop={a} judul="Negara A" ket="Lebih efisien membuat kopi (biaya peluang rendah)" warna={palette.aset} />
        <div style={{ opacity: b.opacity, fontSize: 30, color: palette.muted }}>&harr;</div>
        <Card pop={b} judul="Negara B" ket="Lebih efisien membuat kain (biaya peluang rendah)" warna={palette.ekuitas} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
        <div style={{ transform: `scale(${c.scale})`, opacity: c.opacity, background: palette.accent, color: "#fff", borderRadius: 14, padding: "16px 26px", fontSize: 19, fontWeight: 800, textAlign: "center" }}>
          A spesialisasi kopi, B spesialisasi kain, lalu bertukar
          <div style={{ fontSize: 15, fontWeight: 500, opacity: 0.9, marginTop: 4 }}>Total kopi & kain yang dinikmati keduanya bertambah</div>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Bahkan jika satu negara lebih hebat di segala hal (keunggulan absolut), perdagangan tetap menguntungkan selama biaya peluangnya berbeda.
      </div>
    </AbsoluteFill>
  );
};

export const KeunggulanKomparatifDuration = 180;
