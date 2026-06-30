import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

// Trias politica: tiga cabang kekuasaan yang saling mengawasi.
const CABANG = [
  { ikon: "🏛️", judul: "Legislatif", ket: "Membuat undang-undang", contoh: "DPR/MPR", warna: "#60a5fa" },
  { ikon: "👔", judul: "Eksekutif", ket: "Menjalankan undang-undang", contoh: "Presiden", warna: "#fbbf24" },
  { ikon: "⚖️", judul: "Yudikatif", ket: "Mengadili pelanggaran", contoh: "MA & MK", warna: "#f472b6" },
];

export const TriasPoliticaVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Trias Politica" sub="Kekuasaan dibagi tiga agar tak ada yang berkuasa mutlak (Montesquieu)" />

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 60, justifyContent: "center" }}>
        {CABANG.map((c, i) => {
          const { scale, opacity } = usePop(22 + i * 24);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: `2px solid ${c.warna}`, borderRadius: 18, padding: "24px 20px", width: 230, textAlign: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize: 44 }}>{c.ikon}</div>
                <div style={{ fontSize: 21, fontWeight: 800, color: c.warna, marginTop: 8 }}>{c.judul}</div>
                <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>{c.ket}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: palette.text, marginTop: 6 }}>{c.contoh}</div>
              </div>
              {i < CABANG.length - 1 && <Arrow delay={36 + i * 24} label="saling awasi" />}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 44, fontSize: 18, color: palette.muted, textAlign: "center", maxWidth: 940, marginInline: "auto" }}>
        Tiap cabang bisa menahan cabang lain (checks and balances), sehingga kekuasaan tidak menumpuk di satu tangan.
      </div>
    </AbsoluteFill>
  );
};

export const TriasPoliticaVideoDuration = 210;
