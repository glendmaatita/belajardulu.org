import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Keraguan metodis Descartes menuju "cogito ergo sum".
const LANGKAH = [
  { teks: "Ragukan segala sesuatu yang bisa diragukan.", warna: palette.kewajiban },
  { teks: "Indra bisa menipu, mimpi terasa nyata, mungkin ada penipu jahat.", warna: palette.kredit },
  { teks: "Tetapi, jika aku ragu, berarti aku sedang berpikir.", warna: palette.ekuitas },
  { teks: "Aku berpikir, maka aku ada (cogito ergo sum).", warna: palette.aset },
];

export const SkeptisismeDescartes: React.FC = () => {
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Keraguan Metodis Descartes" sub="Meragukan segalanya untuk menemukan dasar yang pasti" />

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 36, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
        {LANGKAH.map((l, i) => {
          const { scale, opacity } = usePop(20 + i * 32);
          return (
            <div
              key={i}
              style={{
                transform: `scale(${scale})`,
                opacity,
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: palette.bgSoft,
                borderRadius: 14,
                padding: "16px 22px",
                borderLeft: `6px solid ${l.warna}`,
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 999, background: l.warna, color: "#06121f", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{i + 1}</div>
              <div style={{ flex: 1, fontSize: 19, color: palette.text, lineHeight: 1.4 }}>{l.teks}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 28, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Dari keraguan total, Descartes menemukan satu hal yang mustahil diragukan: keberadaan dirinya yang berpikir.
      </div>
    </AbsoluteFill>
  );
};

export const SkeptisismeDescartesDuration = 200;
