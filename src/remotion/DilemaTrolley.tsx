import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Dilema trolley: menarik tuas mengorbankan 1 untuk menyelamatkan 5. Menguji intuisi etika.
export const DilemaTrolley: React.FC = () => {
  const frame = useCurrentFrame();
  const troli = interpolate(frame, [20, 150], [80, 520], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const note = useFade(150, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Dilema Trolley" sub="Menarik tuas: korbankan 1 untuk selamatkan 5?" />

      <svg viewBox="0 0 1000 280" style={{ width: "100%", marginTop: 26 }}>
        {/* rel utama */}
        <line x1={60} y1={150} x2={620} y2={150} stroke="rgba(255,255,255,0.3)" strokeWidth={4} />
        {/* percabangan */}
        <line x1={620} y1={150} x2={920} y2={90} stroke={palette.aset} strokeWidth={4} />
        <line x1={620} y1={150} x2={920} y2={210} stroke={palette.kredit} strokeWidth={4} />
        {/* 5 orang di jalur lurus-atas */}
        <text x={905} y={84} fontSize={30} textAnchor="end">🧍🧍🧍🧍🧍</text>
        <text x={905} y={60} fontSize={15} fill={palette.aset} textAnchor="end">5 orang</text>
        {/* 1 orang di jalur belok-bawah */}
        <text x={905} y={216} fontSize={30} textAnchor="end">🧍</text>
        <text x={905} y={240} fontSize={15} fill={palette.kredit} textAnchor="end">1 orang</text>
        {/* troli */}
        <text x={troli} y={160} fontSize={40} textAnchor="middle">🚃</text>
        {/* tuas */}
        <text x={600} y={250} fontSize={28} textAnchor="middle">🕹️</text>
      </svg>

      <div style={{ opacity: note, marginTop: 18, fontSize: 18, color: palette.muted }}>
        <b style={{ color: palette.aset }}>Utilitarian</b> menarik tuas (5 {">"} 1). <b style={{ color: palette.kewajiban }}>Deontolog</b> ragu karena dengan sengaja mengorbankan satu nyawa sebagai alat. Tidak ada jawaban yang disepakati semua, itulah yang membuatnya filsafat.
      </div>
    </AbsoluteFill>
  );
};

export const DilemaTrolleyDuration = 185;
