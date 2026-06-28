import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Sumber penerimaan negara: pajak (terbesar), PNBP, dan hibah.
const SUMBER = [
  { nama: "PPh", nilai: 38, warna: palette.aset },
  { nama: "PPN/PPnBM", nilai: 30, warna: palette.ekuitas },
  { nama: "Cukai & Bea", nilai: 12, warna: palette.kewajiban },
  { nama: "PNBP", nilai: 18, warna: palette.kredit },
  { nama: "Hibah", nilai: 2, warna: palette.muted },
];

export const SumberPenerimaanNegara: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(140, 18);
  const maxH = 220;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Sumber Penerimaan Negara" sub="Pajak adalah tulang punggung penerimaan APBN" />

      <div style={{ display: "flex", gap: 28, marginTop: 50, alignItems: "flex-end", justifyContent: "center", height: 270 }}>
        {SUMBER.map((s, i) => {
          const { opacity } = usePop(20 + i * 22);
          return (
            <div key={i} style={{ opacity, textAlign: "center", width: 150 }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: s.warna }}>{s.nilai}%</div>
              <div style={{ height: (s.nilai / 40) * maxH, background: s.warna, borderRadius: 10, marginTop: 6 }} />
              <div style={{ fontSize: 16, fontWeight: 700, color: palette.text, marginTop: 8 }}>{s.nama}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 24, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Mayoritas penerimaan berasal dari pajak (PPh, PPN, cukai, bea). Sisanya dari PNBP seperti hasil sumber daya alam dan layanan, serta sedikit hibah. Ilustrasi porsi, bukan angka pasti.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const SumberPenerimaanNegaraDuration = 175;
