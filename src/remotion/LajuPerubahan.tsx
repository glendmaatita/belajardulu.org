import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Laju perubahan: jarak per waktu menuju ide kecepatan dan gradien.
const DATA = [
  { jam: "07.00", km: 0 },
  { jam: "08.00", km: 60 },
  { jam: "09.00", km: 120 },
  { jam: "10.00", km: 180 },
];

export const LajuPerubahan: React.FC = () => {
  const rumus = useFade(140, 16);
  const note = useFade(165, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Laju Perubahan" sub="Seberapa cepat sesuatu berubah tiap satuan waktu" />

      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 40 }}>
        {DATA.map((d, i) => {
          const { scale, opacity } = usePop(20 + i * 24);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 12, padding: "16px 18px", textAlign: "center", borderTop: `5px solid ${palette.aset}` }}>
                <div style={{ fontSize: 13, color: palette.muted }}>{d.jam}</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginTop: 4 }}>{d.km} km</div>
              </div>
              {i < DATA.length - 1 && <div style={{ fontSize: 13, color: palette.kewajiban, opacity }}>+60 km</div>}
            </div>
          );
        })}
      </div>

      <div style={{ opacity: rumus, marginTop: 30, textAlign: "center", fontSize: 23, fontWeight: 800, color: palette.aset }}>
        Kecepatan = jarak ÷ waktu = 180 km ÷ 3 jam = 60 km/jam
      </div>
      <div style={{ opacity: note, marginTop: 16, fontSize: 17, color: palette.muted, textAlign: "center" }}>
        Setiap jam bertambah 60 km. Pola tetap itulah yang kita sebut laju, cikal bakal ide gradien.
      </div>
    </AbsoluteFill>
  );
};

export const LajuPerubahanDuration = 195;
