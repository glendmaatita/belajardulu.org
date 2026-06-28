import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Menemukan luas dengan menghitung petak satuan.
const COLS = 5;
const ROWS = 3;

export const MenemukanLuas: React.FC = () => {
  const note = useFade(150, 18);
  const rumus = useFade(120, 16);
  const cells = [];
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) cells.push({ r, c, i: r * COLS + c });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Menemukan Luas" sub="Hitung dulu petaknya, rumus muncul belakangan" />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${COLS}, 56px)`, gap: 4 }}>
          {cells.map((cell) => {
            const { scale, opacity } = usePop(15 + cell.i * 6);
            return (
              <div key={cell.i} style={{ width: 56, height: 56, borderRadius: 8, background: palette.ekuitas, opacity, transform: `scale(${scale})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#06121f", fontWeight: 700, fontSize: 14 }}>{cell.i + 1}</div>
            );
          })}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 24, fontSize: 19, color: palette.text }}>
        {COLS} petak per baris, {ROWS} baris. Menghitung satu per satu: 15 petak.
      </div>
      <div style={{ opacity: rumus, marginTop: 16, textAlign: "center", fontSize: 24, fontWeight: 800, color: palette.aset }}>
        Luas = panjang × lebar = {COLS} × {ROWS} = {COLS * ROWS}
      </div>
      <div style={{ opacity: note, marginTop: 16, fontSize: 17, color: palette.muted, textAlign: "center" }}>
        Rumus luas bukan hafalan. Ia ringkasan dari menghitung petak yang berulang.
      </div>
    </AbsoluteFill>
  );
};

export const MenemukanLuasDuration = 185;
