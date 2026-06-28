import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Bentuk argumen valid vs sesat: modus ponens, modus tollens, dan dua kekeliruan.
const BENTUK = [
  { nama: "Modus Ponens", baris: ["Jika p maka q", "p benar", "∴ q benar"], valid: true },
  { nama: "Modus Tollens", baris: ["Jika p maka q", "q salah", "∴ p salah"], valid: true },
  { nama: "Menegaskan akibat", baris: ["Jika p maka q", "q benar", "∴ p benar"], valid: false },
  { nama: "Menyangkal sebab", baris: ["Jika p maka q", "p salah", "∴ q salah"], valid: false },
];

export const ModusPonensTollens: React.FC = () => {
  const note = useFade(170, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "36px 50px" }}>
      <Title text="Bentuk Valid vs Sesat" sub="Modus ponens, modus tollens, dan dua jebakannya" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 34, maxWidth: 940, marginLeft: "auto", marginRight: "auto" }}>
        {BENTUK.map((b, i) => {
          const { scale, opacity } = usePop(18 + i * 24);
          const warna = b.valid ? palette.aset : palette.kredit;
          return (
            <div
              key={i}
              style={{
                transform: `scale(${scale})`,
                opacity,
                background: palette.bgSoft,
                borderRadius: 14,
                padding: "18px 22px",
                borderLeft: `6px solid ${warna}`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: palette.text }}>{b.nama}</span>
                <span style={{ fontSize: 14, fontWeight: 800, color: warna }}>{b.valid ? "VALID" : "SESAT"}</span>
              </div>
              <div style={{ marginTop: 10, fontFamily: "monospace" }}>
                {b.baris.map((r, j) => (
                  <div key={j} style={{ fontSize: 17, color: j === b.baris.length - 1 ? warna : palette.muted, fontWeight: j === b.baris.length - 1 ? 800 : 500, marginTop: 4 }}>{r}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 24, fontSize: 17, color: palette.muted, textAlign: "center" }}>
        Ponens menegaskan sebab, tollens menyangkal akibat. Keduanya valid. Membalik arahnya menghasilkan sesat pikir.
      </div>
    </AbsoluteFill>
  );
};

export const ModusPonensTollensDuration = 200;
