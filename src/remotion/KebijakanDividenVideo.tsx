import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Kebijakan dividen: laba bersih dibagi menjadi dividen (ke pemegang saham) dan laba ditahan (untuk tumbuh).
export const KebijakanDividenVideo: React.FC = () => {
  const laba = 100;
  const payout = 40; // 40% dividen
  const ditahan = laba - payout;

  const splitT = useFade(40, 30); // animasi pemisahan
  const note = useFade(150, 18);
  const dPop = usePop(60);
  const rPop = usePop(80);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Kebijakan Dividen" sub="Laba bersih dibagi: sebagian dibagikan, sebagian ditahan untuk tumbuh" />

      <div style={{ display: "flex", alignItems: "center", gap: 30, marginTop: 50, justifyContent: "center" }}>
        <Box label="Laba Bersih" value={`Rp${laba} M`} bg={palette.ekuitas} />
        <div style={{ fontSize: 40, color: palette.muted, opacity: splitT }}>&rarr;</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ transform: `scale(${dPop.scale})`, opacity: dPop.opacity }}>
            <Box label={`Dividen (${payout}%)`} value={`Rp${payout} M`} bg={palette.aset} small />
          </div>
          <div style={{ transform: `scale(${rPop.scale})`, opacity: rPop.opacity }}>
            <Box label={`Laba Ditahan (${100 - payout}%)`} value={`Rp${ditahan} M`} bg={palette.kewajiban} small />
          </div>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 40, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Payout tinggi menyenangkan pemegang saham hari ini; laba ditahan tinggi mendanai pertumbuhan masa depan.
        Manajer mencari keseimbangan sesuai peluang investasi.
      </div>
    </AbsoluteFill>
  );
};

function Box({ label, value, bg, small }: { label: string; value: string; bg: string; small?: boolean }) {
  return (
    <div style={{ background: bg, color: "#06121f", borderRadius: 16, padding: small ? "16px 22px" : "26px 34px", textAlign: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.3)" }}>
      <div style={{ fontSize: small ? 15 : 18, fontWeight: 700, opacity: 0.75 }}>{label}</div>
      <div style={{ fontSize: small ? 26 : 36, fontWeight: 900, marginTop: 4 }}>{value}</div>
    </div>
  );
}

export const KebijakanDividenVideoDuration = 190;
