import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Dua pilar jaminan sosial di Indonesia: BPJS Kesehatan (JKN) untuk biaya
// berobat, dan BPJS Ketenagakerjaan untuk risiko kerja dan hari tua.
const bpjs = [
  { judul: "BPJS Kesehatan", isi: ["Program JKN", "Biaya berobat & rawat inap", "Iuran per bulan"], c: "#34d399" },
  { judul: "BPJS Ketenagakerjaan", isi: ["JHT: tabungan hari tua", "JP: pensiun bulanan", "JKK & JKM: kecelakaan & kematian"], c: "#60a5fa" },
];

export const ProteksiBPJSVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(175, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Jaring Pengaman: BPJS" sub="Dua pilar jaminan sosial yang jadi fondasi proteksi" />
      <div style={{ marginTop: 44, display: "flex", gap: 30, justifyContent: "center" }}>
        {bpjs.map((b, i) => {
          const grow = interpolate(frame - (30 + i * 30), [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ flex: 1, maxWidth: 420, opacity: grow, transform: `translateY(${(1 - grow) * 22}px)`, background: palette.bgSoft, border: `2px solid ${b.c}`, borderRadius: 16, padding: "22px 20px" }}>
              <div style={{ fontSize: 21, fontWeight: 800, color: b.c }}>{b.judul}</div>
              <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                {b.isi.map((s, j) => (
                  <div key={j} style={{ fontSize: 15, color: palette.text }}>&bull; {s}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 34, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        BPJS adalah lapisan proteksi dasar yang wajib dimanfaatkan, lalu dilengkapi asuransi swasta bila diperlukan.
      </div>
    </AbsoluteFill>
  );
};

export const ProteksiBPJSVideoDuration = 210;
