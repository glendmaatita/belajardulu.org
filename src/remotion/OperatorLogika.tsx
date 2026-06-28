import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Lima operator logika proposisional dan ringkasan kebenarannya.
const OP = [
  { sym: "¬p", nama: "Negasi", arti: "Membalik nilai: benar jadi salah", warna: palette.kredit },
  { sym: "p ∧ q", nama: "Konjungsi (DAN)", arti: "Benar hanya jika keduanya benar", warna: palette.aset },
  { sym: "p ∨ q", nama: "Disjungsi (ATAU)", arti: "Benar jika minimal satu benar", warna: palette.ekuitas },
  { sym: "p → q", nama: "Implikasi (JIKA-MAKA)", arti: "Salah hanya saat p benar tapi q salah", warna: palette.kewajiban },
  { sym: "p ↔ q", nama: "Biimplikasi (JIKA DAN HANYA JIKA)", arti: "Benar jika nilai p dan q sama", warna: palette.accent },
];

export const OperatorLogika: React.FC = () => {
  const note = useFade(190, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Lima Operator Logika" sub="Penghubung antarproposisi" />

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 34, maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
        {OP.map((o, i) => {
          const { scale, opacity } = usePop(18 + i * 26);
          return (
            <div
              key={i}
              style={{
                transform: `scale(${scale})`,
                opacity,
                display: "flex",
                alignItems: "center",
                gap: 20,
                background: palette.bgSoft,
                borderRadius: 14,
                padding: "16px 22px",
                borderLeft: `6px solid ${o.warna}`,
              }}
            >
              <div style={{ width: 130, fontSize: 30, fontWeight: 800, color: o.warna, textAlign: "center" }}>{o.sym}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: palette.text }}>{o.nama}</div>
                <div style={{ fontSize: 16, color: palette.muted, marginTop: 3 }}>{o.arti}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Operator inilah bahan baku tabel kebenaran yang memetakan setiap kemungkinan nilai.
      </div>
    </AbsoluteFill>
  );
};

export const OperatorLogikaDuration = 230;
