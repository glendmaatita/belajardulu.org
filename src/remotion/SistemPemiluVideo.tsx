import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Dua keluarga sistem pemilu: distrik (pemenang ambil semua) vs proporsional (kursi sesuai suara).
export const SistemPemiluVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const suara = [{ n: "Partai A", v: 45, c: "#60a5fa" }, { n: "Partai B", v: 35, c: "#fbbf24" }, { n: "Partai C", v: 20, c: "#f472b6" }];
  // Distrik (FPTP) sederhana: pemenang ambil semua 10 kursi. Proporsional: kursi sesuai persen.
  const fptp = [10, 0, 0];
  const prop = [5, 3, 2];
  const t = interpolate(frame, [40, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const Bar = ({ label, seats, delay }: { label: string; seats: number[]; delay: number }) => (
    <g opacity={useFade(delay)}>
      <text x={0} y={-12} fill={palette.text} fontSize={16} fontWeight={800}>{label}</text>
      {Array.from({ length: 10 }).map((_, k) => {
        let acc = 0, color = palette.bgSoft;
        for (let s = 0; s < 3; s++) { if (k < acc + Math.round(seats[s] * (delay > 60 ? t : 1))) { color = suara[s].c; break; } acc += seats[s]; }
        return <rect key={k} x={k * 42} y={0} width={36} height={36} rx={6} fill={color} />;
      })}
    </g>
  );

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Suara Menjadi Kursi" sub="Sistem pemilu menentukan bagaimana persen suara berubah jadi kursi" />

      <div style={{ display: "flex", gap: 30, marginTop: 30 }}>
        {suara.map((s, i) => {
          const o = useFade(16 + i * 10);
          return <div key={i} style={{ opacity: o, color: s.c, fontSize: 16, fontWeight: 700 }}>{s.n}: {s.v}% suara</div>;
        })}
      </div>

      <svg width={460} height={70} style={{ marginTop: 50 }}><Bar label="Distrik (pemenang ambil semua)" seats={fptp} delay={40} /></svg>
      <svg width={460} height={70} style={{ marginTop: 40 }}><Bar label="Proporsional (kursi sesuai suara)" seats={prop} delay={70} /></svg>

      <div style={{ marginTop: 30, fontSize: 17, color: palette.muted, maxWidth: 940 }}>
        Suara sama, hasil kursi berbeda. Sistem distrik menyederhanakan tetapi membuang suara kalah; proporsional lebih adil tetapi parlemen lebih terpecah.
      </div>
    </AbsoluteFill>
  );
};

export const SistemPemiluVideoDuration = 210;
