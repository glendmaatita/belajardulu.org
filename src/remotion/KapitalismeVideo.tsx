import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

// Empat pilar kapitalisme.
const PILAR = [
  { ikon: "🔑", judul: "Milik pribadi", ket: "Orang boleh memiliki aset & alat produksi", warna: "#60a5fa" },
  { ikon: "🤝", judul: "Pasar bebas", ket: "Harga lahir dari tawar-menawar, bukan komando", warna: "#34d399" },
  { ikon: "💰", judul: "Motif laba", ket: "Untung jadi pendorong utama kegiatan", warna: "#fbbf24" },
  { ikon: "🏁", judul: "Persaingan", ket: "Banyak penjual berlomba memikat pembeli", warna: "#f472b6" },
];

export const KapitalismeVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Empat Pilar Kapitalisme" sub="Sistem ekonomi yang bertumpu pada pemilikan pribadi dan pasar" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 18, marginTop: 56, justifyContent: "center" }}>
        {PILAR.map((p, i) => {
          const { scale, opacity } = usePop(20 + i * 22);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: `2px solid ${p.warna}`, borderRadius: 18, padding: "24px 22px", width: 250, textAlign: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.3)" }}>
              <div style={{ fontSize: 44 }}>{p.ikon}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: p.warna, marginTop: 8 }}>{p.judul}</div>
              <div style={{ fontSize: 14.5, color: palette.muted, marginTop: 6, lineHeight: 1.4 }}>{p.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 40, fontSize: 18, color: palette.muted, textAlign: "center", maxWidth: 920, marginInline: "auto" }}>
        Bila satu pilar dicabut, sistemnya berubah: tanpa milik pribadi jadi sosialisme, tanpa persaingan jadi monopoli.
      </div>
    </AbsoluteFill>
  );
};

export const KapitalismeVideoDuration = 210;
