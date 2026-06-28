import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Siklus APBN: perencanaan, penetapan (DPR), pelaksanaan, pertanggungjawaban (BPK).
const TAHAP = [
  { ikon: "📝", judul: "Perencanaan", ket: "Pemerintah susun RAPBN + nota keuangan" },
  { ikon: "🏛️", judul: "Penetapan", ket: "Dibahas & disahkan DPR menjadi UU APBN" },
  { ikon: "💸", judul: "Pelaksanaan", ket: "Kementerian belanja & memungut penerimaan" },
  { ikon: "🔍", judul: "Pertanggungjawaban", ket: "Diaudit BPK, dilaporkan ke DPR" },
];

export const SiklusAPBN: React.FC = () => {
  const note = useFade(130, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Siklus APBN" sub="Dari perencanaan sampai pertanggungjawaban setiap tahun" />

      <div style={{ display: "flex", gap: 12, marginTop: 50, alignItems: "stretch", justifyContent: "center" }}>
        {TAHAP.map((t, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "22px 16px", width: 215, textAlign: "center", boxShadow: "0 12px 36px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize: 38 }}>{t.ikon}</div>
                <div style={{ fontSize: 13, color: palette.muted, fontWeight: 700, marginTop: 6 }}>Tahap {i + 1}</div>
                <div style={{ fontSize: 19, fontWeight: 800, color: palette.text }}>{t.judul}</div>
                <div style={{ fontSize: 13, color: palette.muted, marginTop: 4 }}>{t.ket}</div>
              </div>
              {i < TAHAP.length - 1 && <div style={{ fontSize: 26, color: palette.muted, opacity }}>&rarr;</div>}
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 36, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        APBN disusun pemerintah, disahkan DPR menjadi undang-undang, dilaksanakan, lalu diaudit BPK. Inilah wujud pengelolaan keuangan negara yang akuntabel.
      </div>
    </AbsoluteFill>
  );
};

export const SiklusAPBNDuration = 175;
