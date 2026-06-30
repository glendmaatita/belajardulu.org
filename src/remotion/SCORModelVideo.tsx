import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

// Model SCOR: lima proses inti yang menyatukan seluruh rantai pasok.
const STEP = [
  { ikon: "🧭", judul: "Plan", ket: "Rencanakan pasokan & permintaan", warna: "#60a5fa" },
  { ikon: "🤝", judul: "Source", ket: "Adakan bahan & jasa", warna: "#fbbf24" },
  { ikon: "🏭", judul: "Make", ket: "Produksi barang jadi", warna: "#f472b6" },
  { ikon: "🚚", judul: "Deliver", ket: "Kirim ke pelanggan", warna: "#34d399" },
  { ikon: "↩️", judul: "Return", ket: "Kelola retur & purna jual", warna: "#a78bfa" },
];

export const SCORModelVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Model SCOR" sub="Lima proses inti yang menyatukan rantai pasok dari ujung ke ujung" />

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 56, flexWrap: "wrap" }}>
        {STEP.map((s, i) => {
          const { scale, opacity } = usePop(20 + i * 24);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: `2px solid ${s.warna}`, borderRadius: 18, padding: "22px 16px", width: 184, textAlign: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize: 40 }}>{s.ikon}</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: s.warna, marginTop: 8 }}>{s.judul}</div>
                <div style={{ fontSize: 13.5, color: palette.muted, marginTop: 4 }}>{s.ket}</div>
              </div>
              {i < STEP.length - 1 && <Arrow delay={34 + i * 24} />}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 44, fontSize: 18, color: palette.muted, maxWidth: 980 }}>
        SCOR memberi satu bahasa bersama: tiap proses bisa diukur, dibandingkan, dan diperbaiki. Di atas kelimanya ada proses <span style={{ color: palette.text, fontWeight: 700 }}>Enable</span> yang mengatur data, aturan, dan kontrak.
      </div>
    </AbsoluteFill>
  );
};

export const SCORModelVideoDuration = 200;
