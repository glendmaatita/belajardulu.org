import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Trade agreement: tarif preferensi jauh lebih rendah dari MFN, dengan syarat COO & Rules of Origin.
const TARIF = [
  { nama: "MFN (umum)", val: 15, warna: palette.kredit },
  { nama: "ASEAN (Form D)", val: 5, warna: palette.kewajiban },
  { nama: "RCEP", val: 3, warna: palette.ekuitas },
  { nama: "CEPA (penuh)", val: 0, warna: palette.aset },
];

export const TradeAgreementVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(150, 18);
  const maxH = 180;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Trade Agreement & Tarif Preferensi" sub="Perjanjian dagang menurunkan bea masuk secara legal" />

      <div style={{ display: "flex", gap: 36, marginTop: 50, alignItems: "flex-end", justifyContent: "center", height: 230 }}>
        {TARIF.map((t, i) => {
          const { opacity } = usePop(20 + i * 26);
          const h = (t.val / 15) * maxH;
          return (
            <div key={i} style={{ opacity, textAlign: "center", width: 170 }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: t.warna, marginBottom: 6 }}>{t.val}%</div>
              <div style={{ height: Math.max(h, 4), background: t.warna, borderRadius: 8 }} />
              <div style={{ fontSize: 16, fontWeight: 700, color: palette.text, marginTop: 10 }}>{t.nama}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Dengan COO sah dan memenuhi Rules of Origin, importir bisa menekan bea dari 15% menjadi mendekati nol. Dokumen yang benar adalah kunci penghematan legal ini.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const TradeAgreementVideoDuration = 190;
