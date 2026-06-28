import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Dua tuas mengelola ekonomi: kebijakan moneter (bank sentral) dan fiskal (pemerintah).
export const KebijakanMoneterFiskal: React.FC = () => {
  const a = usePop(25);
  const b = usePop(70);
  const note = useFade(135, 18);

  const Panel = ({ pop, judul, aktor, alat, ikon, warna }: { pop: { scale: number; opacity: number }; judul: string; aktor: string; alat: string[]; ikon: string; warna: string }) => (
    <div style={{ transform: `scale(${pop.scale})`, opacity: pop.opacity, background: palette.bgSoft, borderRadius: 18, padding: "26px 24px", width: 380, boxShadow: "0 14px 40px rgba(0,0,0,0.3)", borderTop: `6px solid ${warna}` }}>
      <div style={{ fontSize: 40, textAlign: "center" }}>{ikon}</div>
      <div style={{ fontSize: 23, fontWeight: 800, color: palette.text, textAlign: "center", marginTop: 6 }}>{judul}</div>
      <div style={{ fontSize: 15, color: warna, textAlign: "center", fontWeight: 700, marginTop: 2 }}>{aktor}</div>
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
        {alat.map((x, i) => (
          <div key={i} style={{ fontSize: 16, color: palette.muted }}>&bull; {x}</div>
        ))}
      </div>
    </div>
  );

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Dua Tuas Pengelola Ekonomi" sub="Kebijakan moneter dan fiskal bekerja bersama" />

      <div style={{ display: "flex", gap: 40, marginTop: 40, justifyContent: "center" }}>
        <Panel pop={a} judul="Kebijakan Moneter" aktor="Bank Indonesia" ikon="🏦" warna={palette.ekuitas}
          alat={["Mengatur suku bunga acuan", "Mengelola jumlah uang beredar", "Operasi pasar terbuka", "Tujuan: jaga inflasi & rupiah"]} />
        <Panel pop={b} judul="Kebijakan Fiskal" aktor="Pemerintah (APBN)" ikon="🏛️" warna={palette.kewajiban}
          alat={["Mengatur belanja negara", "Menetapkan pajak", "Subsidi & transfer", "Tujuan: dorong pertumbuhan & pemerataan"]} />
      </div>

      <div style={{ opacity: note, marginTop: 32, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Saat ekonomi lesu: suku bunga diturunkan dan belanja negara ditambah untuk mendorong permintaan. Saat memanas: kebalikannya untuk meredam inflasi.
      </div>
    </AbsoluteFill>
  );
};

export const KebijakanMoneterFiskalDuration = 180;
