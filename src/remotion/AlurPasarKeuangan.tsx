import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Pasar keuangan menjembatani pihak surplus dana (penabung) dan pihak defisit dana (peminjam).
export const AlurPasarKeuangan: React.FC = () => {
  const a = usePop(20);
  const hub = usePop(55);
  const b = usePop(90);
  const note = useFade(135, 18);

  const Card = ({ ikon, judul, ket, bg }: { ikon: string; judul: string; ket: string; bg: string }) => (
    <div style={{ background: palette.bgSoft, borderRadius: 18, padding: "24px 22px", width: 260, textAlign: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.3)", borderTop: `5px solid ${bg}` }}>
      <div style={{ fontSize: 44 }}>{ikon}</div>
      <div style={{ fontSize: 21, fontWeight: 800, color: palette.text, marginTop: 8 }}>{judul}</div>
      <div style={{ fontSize: 15, color: palette.muted, marginTop: 6 }}>{ket}</div>
    </div>
  );

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Fungsi Pasar Keuangan" sub="Menyalurkan dana dari yang kelebihan ke yang membutuhkan" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginTop: 56 }}>
        <div style={{ transform: `scale(${a.scale})`, opacity: a.opacity }}>
          <Card ikon="💰" judul="Pihak Surplus" ket="Penabung & investor (punya dana)" bg={palette.aset} />
        </div>
        <div style={{ opacity: hub.opacity, textAlign: "center" }}>
          <div style={{ fontSize: 30, color: palette.muted }}>&rarr;</div>
          <div style={{ transform: `scale(${hub.scale})`, background: palette.accent, color: "#fff", borderRadius: 16, padding: "18px 20px", fontSize: 18, fontWeight: 800, margin: "8px 0" }}>
            PASAR KEUANGAN
            <div style={{ fontSize: 13, fontWeight: 500, opacity: 0.85 }}>bursa, bank, perantara</div>
          </div>
          <div style={{ fontSize: 30, color: palette.muted }}>&rarr;</div>
        </div>
        <div style={{ transform: `scale(${b.scale})`, opacity: b.opacity }}>
          <Card ikon="🏢" judul="Pihak Defisit" ket="Perusahaan & pemerintah (butuh dana)" bg={palette.kewajiban} />
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 44, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Dana mengalir ke pihak yang butuh, dan imbal hasil (bunga, dividen) mengalir kembali ke pemilik dana. Pasar yang efisien menurunkan biaya dan risiko penyaluran ini.
      </div>
    </AbsoluteFill>
  );
};

export const AlurPasarKeuanganDuration = 180;
