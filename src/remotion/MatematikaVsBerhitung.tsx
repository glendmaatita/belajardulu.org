import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Berhitung hanyalah bagian kecil dari matematika.
const CABANG = [
  "Pola & barisan",
  "Bentuk & ruang",
  "Logika & bukti",
  "Peluang & data",
  "Perubahan",
];

export const MatematikaVsBerhitung: React.FC = () => {
  const outer = usePop(15);
  const inner = usePop(45);
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Matematika ≠ Berhitung" sub="Berhitung hanyalah satu bagian kecil" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 50, marginTop: 30 }}>
        <div
          style={{
            position: "relative",
            width: 360,
            height: 360,
            borderRadius: 999,
            background: "rgba(96,165,250,0.12)",
            border: `3px solid ${palette.ekuitas}`,
            transform: `scale(${outer.scale})`,
            opacity: outer.opacity,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div style={{ marginTop: 22, fontSize: 22, fontWeight: 800, color: palette.ekuitas }}>MATEMATIKA</div>
          <div
            style={{
              position: "absolute",
              bottom: 34,
              left: "50%",
              transform: `translateX(-50%) scale(${inner.scale})`,
              opacity: inner.opacity,
              width: 150,
              height: 150,
              borderRadius: 999,
              background: palette.kewajiban,
              color: "#06121f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 17,
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            Berhitung
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {CABANG.map((c, i) => {
            const { scale, opacity } = usePop(70 + i * 16);
            return (
              <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 10, padding: "10px 18px", fontSize: 17, color: palette.text, borderLeft: `5px solid ${palette.aset}` }}>
                {c}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Berhitung itu menjawab "berapa". Matematika menjawab "mengapa" dan "bagaimana polanya".
      </div>
    </AbsoluteFill>
  );
};

export const MatematikaVsBerhitungDuration = 195;
