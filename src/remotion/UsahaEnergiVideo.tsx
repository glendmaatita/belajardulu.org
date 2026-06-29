import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade, Arrow } from "./anim";

// Usaha mengubah energi; energi kekal.
export const UsahaEnergiVideo: React.FC = () => {
  const a = usePop(20);
  const b = usePop(60);
  const c = usePop(100);
  const note = useFade(150, 18);
  const Card = ({ s, label, isi, warna }: { s: { scale: number; opacity: number }; label: string; isi: string; warna: string }) => (
    <div style={{ transform: `scale(${s.scale})`, opacity: s.opacity, background: palette.bgSoft, borderRadius: 14, padding: "18px 20px", borderTop: `6px solid ${warna}`, width: 230, textAlign: "center" }}>
      <div style={{ fontSize: 18, fontWeight: 800, color: warna }}>{label}</div>
      <div style={{ fontSize: 15, color: palette.muted, marginTop: 8, lineHeight: 1.5 }}>{isi}</div>
    </div>
  );
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Usaha Mengubah Energi" sub="Energi berpindah bentuk, tetapi totalnya kekal" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 50 }}>
        <Card s={a} label="Usaha" isi="Gaya × perpindahan searah gaya: W = F s" warna={palette.kewajiban} />
        <Arrow delay={45} label="menambah" />
        <Card s={b} label="Energi Kinetik" isi="Energi gerak: Ek = setengah m v²" warna={palette.aset} />
        <Arrow delay={85} label="berubah jadi" />
        <Card s={c} label="Energi Potensial" isi="Energi posisi: Ep = m g h" warna={palette.ekuitas} />
      </div>

      <div style={{ opacity: note, marginTop: 36, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Pada sistem tanpa gesekan, energi kinetik dan potensial saling berubah tetapi jumlahnya (energi mekanik) tetap.
      </div>
    </AbsoluteFill>
  );
};

export const UsahaEnergiVideoDuration = 185;
