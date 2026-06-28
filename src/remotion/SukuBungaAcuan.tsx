import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Transmisi suku bunga acuan BI: BI Rate -> bunga antarbank -> bunga deposito & kredit -> ekonomi.
const TAHAP = [
  { ikon: "🏦", judul: "BI Rate", ket: "Bank sentral menetapkan suku bunga acuan" },
  { ikon: "🔁", judul: "Pasar antarbank", ket: "Bunga pinjaman antarbank menyesuaikan" },
  { ikon: "🏧", judul: "Bunga bank", ket: "Bunga deposito & kredit ikut bergerak" },
  { ikon: "📊", judul: "Ekonomi", ket: "Konsumsi, investasi, dan inflasi terpengaruh" },
];

export const SukuBungaAcuan: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(140, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Transmisi Suku Bunga Acuan" sub="Satu keputusan BI merembet ke seluruh ekonomi" />

      <div style={{ display: "flex", gap: 12, marginTop: 50, alignItems: "stretch", justifyContent: "center" }}>
        {TAHAP.map((t, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "22px 18px", width: 230, textAlign: "center", boxShadow: "0 12px 36px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize: 40 }}>{t.ikon}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: palette.text, marginTop: 8 }}>{t.judul}</div>
                <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>{t.ket}</div>
              </div>
              {i < TAHAP.length - 1 && <div style={{ fontSize: 28, color: palette.muted, opacity }}>&rarr;</div>}
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 36, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Saat BI menaikkan suku bunga, kredit jadi mahal dan menabung jadi menarik, sehingga inflasi tertekan. Saat diturunkan, ekonomi didorong tumbuh.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const SukuBungaAcuanDuration = 180;
