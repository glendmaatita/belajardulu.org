import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

const dates = [
  { tgl: "Tgl 10", apa: "Setor PPh 21 karyawan", color: palette.kredit },
  { tgl: "Tgl 15", apa: "Bayar PPh Final UMKM", color: palette.aset },
  { tgl: "Tgl 20", apa: "Lapor SPT Masa", color: palette.ekuitas },
  { tgl: "31 Mar", apa: "SPT Tahunan Orang Pribadi", color: palette.kewajiban },
  { tgl: "30 Apr", apa: "SPT Tahunan Badan", color: "#fb7185" },
];

const Item: React.FC<{ i: number }> = ({ i }) => {
  const d = dates[i];
  const { scale, opacity } = usePop(30 + i * 24);
  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", transform: `scale(${scale})`, opacity, width: 180 }}>
      <div
        style={{
          background: d.color,
          color: "#06121f",
          fontWeight: 800,
          fontSize: 22,
          padding: "10px 18px",
          borderRadius: 12,
          fontFamily: font,
        }}
      >
        {d.tgl}
      </div>
      <div style={{ width: 3, height: 28, background: "rgba(255,255,255,0.2)" }} />
      <div style={{ width: 16, height: 16, borderRadius: "50%", background: d.color }} />
      <div style={{ marginTop: 12, fontSize: 15, color: palette.muted, textAlign: "center", fontFamily: font, lineHeight: 1.4 }}>
        {d.apa}
      </div>
    </div>
  );
};

export const KalenderPajak: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "54px 40px", justifyContent: "flex-start" }}>
      <Title text="Kalender Pajak: Tanggal yang Wajib Diingat" sub="Tahu tanggalnya = bebas denda" />
      <div style={{ marginTop: 60, position: "relative" }}>
        {/* timeline line */}
        <div style={{ position: "absolute", left: 90, right: 90, top: 78, height: 3, background: "rgba(255,255,255,0.12)" }} />
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          {dates.map((_, i) => (
            <Item key={i} i={i} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const KalenderPajakDuration = 200;
