import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Tabel kebenaran untuk operator dasar: AND, OR, dan implikasi.
const ROWS = [
  { p: true, q: true, and: true, or: true, imp: true },
  { p: true, q: false, and: false, or: true, imp: false },
  { p: false, q: true, and: false, or: true, imp: true },
  { p: false, q: false, and: false, or: false, imp: true },
];

export const TabelKebenaran: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(150, 18);
  const B = (v: boolean) => (v ? "B" : "S");
  const col = (v: boolean) => (v ? palette.aset : palette.kredit);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Tabel Kebenaran" sub="Nilai benar (B) atau salah (S) tiap operator logika" />

      <div style={{ marginTop: 30, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
        <div style={{ display: "flex", background: palette.bgSoft, borderRadius: "10px 10px 0 0", overflow: "hidden" }}>
          {["p", "q", "p DAN q", "p ATAU q", "jika p maka q"].map((h, i) => (
            <div key={i} style={{ flex: i < 2 ? 1 : 1.6, padding: "14px 8px", textAlign: "center", fontSize: 17, fontWeight: 800, color: palette.text }}>{h}</div>
          ))}
        </div>
        {ROWS.map((r, i) => {
          const o = frame > 25 + i * 22 ? 1 : 0;
          return (
            <div key={i} style={{ display: "flex", opacity: o, background: i % 2 ? "rgba(255,255,255,0.03)" : "transparent" }}>
              <Cell flex={1}>{B(r.p)}</Cell>
              <Cell flex={1}>{B(r.q)}</Cell>
              <Cell flex={1.6} color={col(r.and)}>{B(r.and)}</Cell>
              <Cell flex={1.6} color={col(r.or)}>{B(r.or)}</Cell>
              <Cell flex={1.6} color={col(r.imp)}>{B(r.imp)}</Cell>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 24, fontSize: 18, color: palette.muted }}>
        DAN benar hanya bila keduanya benar. ATAU benar bila salah satu benar. Implikasi (jika-maka) hanya salah saat sebab benar tetapi akibat salah.
      </div>
    </AbsoluteFill>
  );
};

function Cell({ children, flex, color }: { children: React.ReactNode; flex: number; color?: string }) {
  return (
    <div style={{ flex, padding: "12px 8px", textAlign: "center", fontSize: 19, fontWeight: 700, color: color || palette.muted, fontFamily: font }}>
      {children}
    </div>
  );
}

export const TabelKebenaranDuration = 180;
