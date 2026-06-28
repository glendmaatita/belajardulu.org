import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Proses IPO: perusahaan privat menjadi perusahaan publik dan tercatat di bursa.
const STEP = [
  { ikon: "🏢", judul: "Persiapan", ket: "Audit, prospektus, tunjuk penjamin emisi" },
  { ikon: "📝", judul: "Pernyataan", ket: "Daftar & izin efektif dari OJK" },
  { ikon: "📣", judul: "Penawaran", ket: "Bookbuilding & masa penawaran umum" },
  { ikon: "🔔", judul: "Pencatatan", ket: "Saham listing & diperdagangkan di bursa" },
];

export const IPOFlow: React.FC = () => {
  const note = useFade(135, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Proses IPO: Menjadi Perusahaan Publik" sub="Dari perusahaan tertutup ke saham yang diperdagangkan" />

      <div style={{ display: "flex", gap: 12, marginTop: 50, alignItems: "stretch", justifyContent: "center" }}>
        {STEP.map((s, i) => {
          const { scale, opacity } = usePop(20 + i * 24);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "22px 18px", width: 235, textAlign: "center", boxShadow: "0 12px 36px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize: 40 }}>{s.ikon}</div>
                <div style={{ fontSize: 13, color: palette.muted, fontWeight: 700, marginTop: 6 }}>Tahap {i + 1}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: palette.text }}>{s.judul}</div>
                <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>{s.ket}</div>
              </div>
              {i < STEP.length - 1 && <div style={{ fontSize: 28, color: palette.muted, opacity }}>&rarr;</div>}
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 36, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Lewat IPO, perusahaan memperoleh dana segar dari publik di pasar primer. Setelah tercatat, sahamnya berpindah tangan antarinvestor di pasar sekunder.
      </div>
    </AbsoluteFill>
  );
};

export const IPOFlowDuration = 175;
