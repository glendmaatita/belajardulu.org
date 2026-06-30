import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

// MRP: dari jadwal produk jadi, ledakkan BOM jadi kebutuhan komponen & bahan.
export const MRPVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Material Requirement Planning" sub="Dari jadwal produk jadi, dihitung kebutuhan tiap komponen" />

      <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 50 }}>
        <Card delay={20} ikon="📋" judul="MPS" ket="100 sepeda minggu depan" warna="#60a5fa" />
        <Arrow delay={34} label="ledakkan BOM" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Card delay={48} ikon="🛞" judul="200 roda" ket="2 per sepeda" warna="#fbbf24" small />
          <Card delay={62} ikon="⛓️" judul="100 rantai" ket="1 per sepeda" warna="#f472b6" small />
          <Card delay={76} ikon="🔩" judul="1.200 baut" ket="12 per sepeda" warna="#34d399" small />
        </div>
        <Arrow delay={92} label="dikurangi stok" />
        <Card delay={106} ikon="🛒" judul="Pesanan bersih" ket="Net = kebutuhan − stok" warna="#a78bfa" />
      </div>

      <div style={{ marginTop: 42, fontSize: 18, color: palette.muted, maxWidth: 980 }}>
        MRP menjawab tiga hal: <span style={{ color: palette.text, fontWeight: 700 }}>apa</span> yang dibutuhkan, <span style={{ color: palette.text, fontWeight: 700 }}>berapa</span>, dan <span style={{ color: palette.text, fontWeight: 700 }}>kapan</span> dipesan agar produksi tidak berhenti.
      </div>
    </AbsoluteFill>
  );
};

const Card: React.FC<{ delay: number; ikon: string; judul: string; ket: string; warna: string; small?: boolean }> = ({ delay, ikon, judul, ket, warna, small }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: `2px solid ${warna}`, borderRadius: 14, padding: small ? "10px 16px" : "20px 22px", width: small ? 220 : 210, textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
      <div style={{ fontSize: small ? 26 : 36 }}>{ikon}</div>
      <div style={{ fontSize: small ? 17 : 20, fontWeight: 800, color: warna, marginTop: 4 }}>{judul}</div>
      <div style={{ fontSize: 13, color: palette.muted, marginTop: 2 }}>{ket}</div>
    </div>
  );
};

export const MRPVideoDuration = 210;
