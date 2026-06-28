import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Pelanggaran pabean: under-valuation, misclassification, smuggling. Risiko sanksi naik tajam.
const PELANGGARAN = [
  { nama: "Under-valuation", ket: "Menurunkan nilai barang", risiko: 60, warna: palette.kewajiban },
  { nama: "Misclassification", ket: "Salah HS Code demi tarif rendah", risiko: 55, warna: "#fb923c" },
  { nama: "Dokumen palsu", ket: "Memalsukan invoice/COO", risiko: 90, warna: palette.kredit },
  { nama: "Smuggling", ket: "Menyelundupkan tanpa lapor", risiko: 98, warna: "#dc2626" },
];

export const RisikoPelanggaranVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(150, 18);
  const maxH = 180;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Risiko Pelanggaran Pabean" sub="Mengenali agar tidak terjebak, bukan untuk ditiru" />

      <div style={{ display: "flex", gap: 30, marginTop: 50, alignItems: "flex-end", justifyContent: "center", height: 230 }}>
        {PELANGGARAN.map((p, i) => {
          const { opacity } = usePop(20 + i * 24);
          const h = (p.risiko / 100) * maxH;
          return (
            <div key={i} style={{ opacity, textAlign: "center", width: 180 }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: p.warna, marginBottom: 6 }}>{p.risiko}</div>
              <div style={{ height: h, background: p.warna, borderRadius: 8 }} />
              <div style={{ fontSize: 18, fontWeight: 700, color: palette.text, marginTop: 10 }}>{p.nama}</div>
              <div style={{ fontSize: 13, color: palette.muted, marginTop: 2 }}>{p.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 24, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Skala risiko sanksi (ilustrasi). Penyelundupan dan dokumen palsu dapat berujung pidana. "Penghematan" ilegal hampir selalu lebih mahal saat ketahuan.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const RisikoPelanggaranVideoDuration = 190;
