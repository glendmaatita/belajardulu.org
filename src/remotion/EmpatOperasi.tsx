import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Empat operasi lahir dari situasi nyata.
const OPS = [
  { sym: "+", nama: "Penjumlahan", cerita: "Menggabung 3 apel dan 4 jeruk", warna: palette.aset },
  { sym: "-", nama: "Pengurangan", cerita: "Uang Rp10.000 dipakai belanja", warna: palette.kewajiban },
  { sym: "×", nama: "Perkalian", cerita: "5 teman, tiap orang 2 kue", warna: palette.ekuitas },
  { sym: ":", nama: "Pembagian", cerita: "12 kue dibagi rata 4 orang", warna: palette.kredit },
];

export const EmpatOperasi: React.FC = () => {
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Empat Operasi dari Cerita" sub="Bukan tanda kering, tapi rasa kejadian sehari-hari" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 38, maxWidth: 940, marginLeft: "auto", marginRight: "auto" }}>
        {OPS.map((o, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, display: "flex", alignItems: "center", gap: 18, background: palette.bgSoft, borderRadius: 14, padding: "18px 22px", borderLeft: `6px solid ${o.warna}` }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: o.warna, color: "#06121f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 800 }}>{o.sym}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 19, fontWeight: 800, color: palette.text }}>{o.nama}</div>
                <div style={{ fontSize: 15, color: palette.muted, marginTop: 3 }}>{o.cerita}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Perkalian hanyalah penjumlahan berulang, dan pembagian adalah kebalikannya. Operasi lahir dari kebutuhan.
      </div>
    </AbsoluteFill>
  );
};

export const EmpatOperasiDuration = 195;
