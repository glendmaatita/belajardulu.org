import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Cikal bakal sebelum Bitcoin: gerakan Cypherpunk dan eksperimen uang digital.
const tonggak = [
  { tahun: "1989", nama: "DigiCash", tokoh: "David Chaum", ide: "uang elektronik anonim (eCash)", warna: palette.ekuitas },
  { tahun: "1997", nama: "Hashcash", tokoh: "Adam Back", ide: "proof of work lawan spam", warna: palette.aset },
  { tahun: "1998", nama: "b-money", tokoh: "Wei Dai", ide: "uang terdesentralisasi tanpa bank", warna: palette.kewajiban },
  { tahun: "1998", nama: "Bit Gold", tokoh: "Nick Szabo", ide: "rantai bukti kerja jadi nilai", warna: palette.kredit },
];

export const CypherpunkVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const garis = interpolate(frame, [24, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const intro = useFade(8, 18);
  const finale = usePop(168);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Sebelum Bitcoin: Gerakan Cypherpunk" sub="Para kriptografer yang merintis gagasan uang digital sejak akhir 1980-an" />

      <div style={{ opacity: intro, marginTop: 10, fontSize: 18, color: palette.muted }}>
        Cypherpunk adalah komunitas yang memperjuangkan privasi lewat kriptografi. Dari sini lahir eksperimen uang digital yang menjadi pondasi Bitcoin.
      </div>

      <div style={{ position: "relative", marginTop: 28, height: 220 }}>
        <div
          style={{
            position: "absolute",
            top: 86,
            left: 20,
            height: 4,
            width: `${garis * 96}%`,
            background: palette.accent,
            borderRadius: 2,
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
          {tonggak.map((t, i) => {
            const delay = 28 + i * 28;
            const { scale, opacity } = usePop(delay);
            return (
              <div key={t.nama} style={{ transform: `scale(${scale})`, opacity, flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: t.warna }}>{t.tahun}</div>
                <div
                  style={{
                    marginTop: 10,
                    background: palette.bgSoft,
                    border: `2px solid ${t.warna}`,
                    borderRadius: 16,
                    padding: "14px 12px",
                    minHeight: 120,
                  }}
                >
                  <div style={{ fontSize: 22, fontWeight: 800, color: palette.text }}>{t.nama}</div>
                  <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>{t.tokoh}</div>
                  <div style={{ fontSize: 14, color: palette.text, marginTop: 8, opacity: 0.85 }}>{t.ide}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
        <div
          style={{
            transform: `scale(${finale.scale})`,
            opacity: finale.opacity,
            background: "#f7931a",
            color: "#1a1205",
            borderRadius: 18,
            padding: "16px 30px",
            textAlign: "center",
            boxShadow: "0 16px 44px rgba(247,147,26,0.35)",
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 700, opacity: 0.75 }}>2008 &rarr; Whitepaper Bitcoin</div>
          <div style={{ fontSize: 28, fontWeight: 800, marginTop: 2 }}>Satoshi Nakamoto menyatukan semua ide ini</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const CypherpunkVideoDuration = 200;
