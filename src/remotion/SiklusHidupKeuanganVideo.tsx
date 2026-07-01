import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Empat fase siklus hidup keuangan, tiap fase punya fokus berbeda.
const fase = [
  { label: "Membangun", usia: "20-30 an", fokus: "Dana darurat, mulai investasi", c: "#34d399" },
  { label: "Menumpuk", usia: "30-45 an", fokus: "KPR, proteksi, dana pendidikan", c: "#60a5fa" },
  { label: "Puncak", usia: "45-55 an", fokus: "Maksimalkan pensiun, lunasi utang", c: "#fbbf24" },
  { label: "Menikmati", usia: "55 an+", fokus: "Pensiun, warisan, jaga kesehatan", c: "#a78bfa" },
];

export const SiklusHidupKeuanganVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(175, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Siklus Hidup Keuangan" sub="Tiap fase hidup butuh strategi keuangan yang berbeda" />
      <div style={{ marginTop: 40, display: "flex", gap: 14 }}>
        {fase.map((f, i) => {
          const grow = interpolate(frame - (30 + i * 22), [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ flex: 1, opacity: grow, transform: `translateY(${(1 - grow) * 22}px)`, background: palette.bgSoft, border: `2px solid ${f.c}`, borderRadius: 16, padding: "18px 12px", textAlign: "center" }}>
              <div style={{ fontSize: 19, fontWeight: 800, color: f.c }}>{f.label}</div>
              <div style={{ fontSize: 12, color: palette.text, marginTop: 4 }}>{f.usia}</div>
              <div style={{ fontSize: 12, color: palette.muted, marginTop: 8 }}>{f.fokus}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 40, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Makin awal mulai merencanakan, makin ringan jalannya, karena waktu dan bunga majemuk bekerja untukmu.
      </div>
    </AbsoluteFill>
  );
};

export const SiklusHidupKeuanganVideoDuration = 210;
