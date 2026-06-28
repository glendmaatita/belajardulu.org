import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Kuadrat oposisi: hubungan antara proposisi A, E, I, O.
const SUDUT = [
  { kode: "A", teks: "Semua S adalah P", pos: { top: 0, left: 0 }, warna: palette.aset },
  { kode: "E", teks: "Tidak ada S yang P", pos: { top: 0, right: 0 }, warna: palette.kredit },
  { kode: "I", teks: "Sebagian S adalah P", pos: { bottom: 0, left: 0 }, warna: palette.ekuitas },
  { kode: "O", teks: "Sebagian S bukan P", pos: { bottom: 0, right: 0 }, warna: palette.kewajiban },
];

export const KuadratOposisi: React.FC = () => {
  const c1 = useFade(70, 16);
  const c2 = useFade(100, 16);
  const c3 = useFade(130, 16);
  const note = useFade(160, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "36px 50px" }}>
      <Title text="Kuadrat Oposisi" sub="Hubungan logis antara A, E, I, O" />

      <div style={{ position: "relative", width: 620, height: 340, margin: "30px auto 0" }}>
        {SUDUT.map((s, i) => {
          const { scale, opacity } = usePop(15 + i * 18);
          return (
            <div
              key={s.kode}
              style={{
                position: "absolute",
                ...s.pos,
                width: 240,
                transform: `scale(${scale})`,
                opacity,
                background: palette.bgSoft,
                borderRadius: 14,
                padding: "14px 16px",
                borderLeft: `6px solid ${s.warna}`,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 800, color: s.warna }}>{s.kode}</div>
              <div style={{ fontSize: 16, color: palette.text, marginTop: 2 }}>{s.teks}</div>
            </div>
          );
        })}
        <div style={{ position: "absolute", top: 28, left: "50%", transform: "translateX(-50%)", opacity: c1, fontSize: 15, color: palette.muted }}>kontrari (tak bisa sama-sama benar)</div>
        <div style={{ position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)", opacity: c2, fontSize: 15, color: palette.muted }}>subkontrari (tak bisa sama-sama salah)</div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: c3, fontSize: 16, fontWeight: 700, color: palette.accent }}>kontradiktori (selalu berlawanan)</div>
      </div>

      <div style={{ opacity: note, marginTop: 18, fontSize: 17, color: palette.muted, textAlign: "center" }}>
        Jika A benar maka O pasti salah (kontradiktori), E pasti salah (kontrari), dan I pasti benar.
      </div>
    </AbsoluteFill>
  );
};

export const KuadratOposisiDuration = 195;
