import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

// Prinsip inti demokrasi.
const PRINSIP = [
  { ikon: "👥", judul: "Kedaulatan rakyat", ket: "Kekuasaan berasal dari rakyat", warna: "#60a5fa" },
  { ikon: "⚖️", judul: "Kesetaraan", ket: "Satu orang, satu suara", warna: "#34d399" },
  { ikon: "🗳️", judul: "Partisipasi", ket: "Rakyat ikut menentukan", warna: "#fbbf24" },
  { ikon: "🕊️", judul: "Kebebasan", ket: "Berpendapat & berkumpul", warna: "#f472b6" },
  { ikon: "📜", judul: "Negara hukum", ket: "Aturan di atas penguasa", warna: "#a78bfa" },
];

export const DemokrasiVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Lima Prinsip Demokrasi" sub="Pemerintahan dari, oleh, dan untuk rakyat" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 56, justifyContent: "center" }}>
        {PRINSIP.map((p, i) => {
          const { scale, opacity } = usePop(20 + i * 20);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: `2px solid ${p.warna}`, borderRadius: 18, padding: "22px 18px", width: 210, textAlign: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.3)" }}>
              <div style={{ fontSize: 42 }}>{p.ikon}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: p.warna, marginTop: 8 }}>{p.judul}</div>
              <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>{p.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 40, fontSize: 18, color: palette.muted, textAlign: "center", maxWidth: 920, marginInline: "auto" }}>
        Demokrasi bukan sekadar pemilu. Tanpa kebebasan dan negara hukum, pemungutan suara bisa jadi sekadar formalitas.
      </div>
    </AbsoluteFill>
  );
};

export const DemokrasiVideoDuration = 220;
