import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

// Cold chain: suhu harus terjaga di setiap simpul, satu mata rantai putus = rusak.
const NODE = [
  { ikon: "🧊", judul: "Cold storage", suhu: "-18°C" },
  { ikon: "🚛", judul: "Reefer truck", suhu: "-18°C" },
  { ikon: "🏬", judul: "Gudang dingin", suhu: "2°C" },
  { ikon: "🧑‍🍳", judul: "Ritel/konsumen", suhu: "4°C" },
];

export const ColdChainVideo: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Rantai Dingin (Cold Chain)" sub="Suhu wajib terjaga di tiap simpul. Satu mata rantai putus, produk rusak" />

      <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 64, flexWrap: "wrap" }}>
        {NODE.map((n, i) => {
          const { scale, opacity } = usePop(20 + i * 22);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: "2px solid #38bdf8", borderRadius: 16, padding: "20px 18px", width: 200, textAlign: "center", boxShadow: "0 12px 34px rgba(56,189,248,0.18)" }}>
                <div style={{ fontSize: 38 }}>{n.ikon}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: palette.text, marginTop: 8 }}>{n.judul}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#38bdf8", marginTop: 4 }}>{n.suhu}</div>
              </div>
              {i < NODE.length - 1 && <Arrow delay={32 + i * 22} />}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 40, fontSize: 18, color: "#f87171", fontWeight: 700, opacity: interpolate(frame, [110, 140], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        ⚠️ Jeda di pelabuhan tropis tanpa pendingin bisa merusak vaksin atau ikan beku dalam hitungan jam.
      </div>
    </AbsoluteFill>
  );
};

export const ColdChainVideoDuration = 210;
