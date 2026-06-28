import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Volume balok dengan menumpuk kubus satuan.
export const VolumeVideo: React.FC = () => {
  const grid = usePop(20);
  const rumus = useFade(130, 16);
  const note = useFade(160, 18);
  const layers = [0, 1];
  const rows = [0, 1];
  const cols = [0, 1, 2, 3];
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Menemukan Volume" sub="Tumpuk kubus satuan, hitung dulu, rumus belakangan" />

      <div style={{ display: "flex", justifyContent: "center", gap: 30, marginTop: 36, transform: `scale(${grid.scale})`, opacity: grid.opacity }}>
        {layers.map((ly) => (
          <div key={ly} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {rows.map((r) => (
              <div key={r} style={{ display: "flex", gap: 4 }}>
                {cols.map((c) => (
                  <div key={c} style={{ width: 38, height: 38, borderRadius: 6, background: ly === 0 ? palette.ekuitas : palette.aset }} />
                ))}
              </div>
            ))}
            <div style={{ fontSize: 12, color: palette.muted, textAlign: "center", marginTop: 4 }}>lapis {ly + 1}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 22, fontSize: 18, color: palette.text }}>
        Panjang 4, lebar 2, tinggi 2. Tiap lapis 4 × 2 = 8 kubus, ada 2 lapis.
      </div>
      <div style={{ opacity: rumus, marginTop: 14, textAlign: "center", fontSize: 23, fontWeight: 800, color: palette.aset }}>
        Volume = panjang × lebar × tinggi = 4 × 2 × 2 = 16
      </div>
      <div style={{ opacity: note, marginTop: 14, textAlign: "center", fontSize: 16, color: palette.muted }}>
        Rumus volume hanyalah ringkasan dari menumpuk kubus satuan.
      </div>
    </AbsoluteFill>
  );
};

export const VolumeVideoDuration = 185;
