import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Tax ratio Indonesia relatif rendah; reformasi memperluas basis untuk menaikkannya.
const DATA = [
  { negara: "Indonesia", ratio: 10, warna: palette.kewajiban },
  { negara: "Filipina", ratio: 14, warna: palette.ekuitas },
  { negara: "Rata-rata OECD", ratio: 24, warna: palette.aset },
];

export const ReformasiPerpajakan: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(140, 18);
  const maxR = 24;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Reformasi Perpajakan" sub="Tax ratio Indonesia masih rendah, perlu basis pajak yang lebih luas" />

      <div style={{ marginTop: 36, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
        {DATA.map((d, i) => {
          const w = interpolate(frame, [20 + i * 20, 70 + i * 20], [0, (d.ratio / maxR) * 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ marginBottom: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 17, color: palette.text, marginBottom: 4 }}>
                <span>{d.negara}</span>
                <span style={{ fontWeight: 800, color: d.warna }}>{d.ratio}% PDB</span>
              </div>
              <div style={{ height: 26, background: palette.bgSoft, borderRadius: 8 }}>
                <div style={{ height: "100%", width: `${w}%`, background: d.warna, borderRadius: 8 }} />
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted }}>
        Langkah reformasi: integrasi NIK sebagai NPWP, sistem Coretax, perluasan basis pajak, dan peningkatan kepatuhan. Menaikkan tax ratio 1% PDB saja setara ratusan triliun rupiah penerimaan baru.
      </div>
    </AbsoluteFill>
  );
};

export const ReformasiPerpajakanDuration = 185;
