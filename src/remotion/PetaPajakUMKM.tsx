import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

const pajak = [
  { nama: "PPh Final 0,5%", cond: "Selalu (usaha UMKM)", color: palette.aset, x: 70, y: 200 },
  { nama: "PPN 11%", cond: "Jika sudah PKP (omzet > Rp4,8 M)", color: palette.ekuitas, x: 70, y: 380 },
  { nama: "PPh 21", cond: "Jika punya karyawan", color: palette.kewajiban, x: 760, y: 200 },
  { nama: "PPh 23", cond: "Jika membayar jasa pihak lain", color: palette.kredit, x: 760, y: 380 },
];

const Card: React.FC<{ i: number }> = ({ i }) => {
  const p = pajak[i];
  const { scale, opacity } = usePop(40 + i * 22);
  return (
    <div
      style={{
        position: "absolute",
        left: p.x,
        top: p.y,
        width: 350,
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        border: "1px solid rgba(255,255,255,0.08)",
        borderLeft: `6px solid ${p.color}`,
        borderRadius: 14,
        padding: "16px 20px",
        fontFamily: font,
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 800, color: p.color }}>{p.nama}</div>
      <div style={{ fontSize: 16, color: palette.muted, marginTop: 4 }}>{p.cond}</div>
    </div>
  );
};

export const PetaPajakUMKM: React.FC = () => {
  const center = usePop(20);
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font }}>
      <div style={{ padding: "40px 56px 0" }}>
        <Title text="Peta Pajak UMKM" sub="Tidak semua pajak berlaku untukmu, tergantung kondisi usaha" />
      </div>

      {/* center node */}
      <div
        style={{
          position: "absolute",
          left: 470,
          top: 270,
          width: 240,
          textAlign: "center",
          transform: `scale(${center.scale})`,
          opacity: center.opacity,
          background: palette.accent,
          color: "#fff",
          borderRadius: 20,
          padding: "28px 16px",
          fontFamily: font,
          boxShadow: "0 16px 44px rgba(52,120,246,0.4)",
        }}
      >
        <div style={{ fontSize: 44 }}>🏪</div>
        <div style={{ fontSize: 24, fontWeight: 800, marginTop: 6 }}>Usaha UMKM-mu</div>
      </div>

      {pajak.map((_, i) => (
        <Card key={i} i={i} />
      ))}

      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 56,
          right: 56,
          opacity: note,
          textAlign: "center",
          fontSize: 19,
          color: palette.muted,
        }}
      >
        Mayoritas UMKM kecil cukup mengurus <b style={{ color: palette.aset }}>PPh Final 0,5%</b> saja.
      </div>
    </AbsoluteFill>
  );
};

export const PetaPajakUMKMDuration = 200;
