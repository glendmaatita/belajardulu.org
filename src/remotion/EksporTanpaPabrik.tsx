import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Model eksportir non-produsen: orang biasa menjadi jembatan antara produsen lokal
// dan pembeli luar negeri, tanpa memiliki pabrik sendiri.
const NODES = [
  { ikon: "🧑‍🌾", judul: "Produsen lokal", ket: "UMKM, petani, perajin", warna: palette.aset },
  { ikon: "🧑‍💼", judul: "Kamu (eksportir)", ket: "Menghubungkan & mengurus ekspor", warna: palette.accent },
  { ikon: "🌍", judul: "Pembeli luar negeri", ket: "Buyer di pasar global", warna: palette.ekuitas },
];

export const EksporTanpaPabrik: React.FC = () => {
  const frame = useCurrentFrame();
  const garis = interpolate(frame, [70, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const untung = useFade(150, 16);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 54px" }}>
      <Title text="Ekspor Tanpa Punya Pabrik" sub="Kamu jadi jembatan produsen lokal ke pasar dunia" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 70, gap: 12 }}>
        {NODES.map((n, i) => {
          const { scale, opacity } = usePop(20 + i * 28);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, justifyContent: "center" }}>
              <div
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                  background: palette.bgSoft,
                  border: `3px solid ${n.warna}`,
                  borderRadius: 20,
                  padding: "26px 24px",
                  width: 300,
                  textAlign: "center",
                  boxShadow: "0 16px 44px rgba(0,0,0,0.32)",
                }}
              >
                <div style={{ fontSize: 52 }}>{n.ikon}</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginTop: 8 }}>{n.judul}</div>
                <div style={{ fontSize: 16, color: palette.muted, marginTop: 6 }}>{n.ket}</div>
              </div>
              {i < NODES.length - 1 && (
                <div style={{ fontSize: 46, color: palette.accent, opacity: garis, transform: `translateX(${(1 - garis) * -12}px)` }}>
                  &rarr;
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div
        style={{
          opacity: untung,
          marginTop: 56,
          textAlign: "center",
          fontSize: 22,
          fontWeight: 700,
          color: palette.aset,
        }}
      >
        Modalmu bukan mesin, tapi jaringan produsen, riset pasar, dan kepercayaan buyer.
      </div>
    </AbsoluteFill>
  );
};

export const EksporTanpaPabrikDuration = 210;
