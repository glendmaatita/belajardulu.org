import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Kebijakan fiskal kontra-siklus: ekspansif saat resesi, kontraktif saat ekonomi memanas.
export const EkspansifKontraktif: React.FC = () => {
  const a = usePop(25);
  const b = usePop(70);
  const note = useFade(135, 18);

  const Panel = ({ pop, ikon, judul, kondisi, aksi, warna }: { pop: { scale: number; opacity: number }; ikon: string; judul: string; kondisi: string; aksi: string[]; warna: string }) => (
    <div style={{ transform: `scale(${pop.scale})`, opacity: pop.opacity, background: palette.bgSoft, borderRadius: 18, padding: "26px 24px", width: 400, boxShadow: "0 14px 40px rgba(0,0,0,0.3)", borderTop: `6px solid ${warna}` }}>
      <div style={{ fontSize: 42, textAlign: "center" }}>{ikon}</div>
      <div style={{ fontSize: 23, fontWeight: 800, color: palette.text, textAlign: "center", marginTop: 6 }}>{judul}</div>
      <div style={{ fontSize: 14, color: warna, textAlign: "center", fontWeight: 700 }}>{kondisi}</div>
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
        {aksi.map((x, i) => <div key={i} style={{ fontSize: 16, color: palette.muted }}>&bull; {x}</div>)}
      </div>
    </div>
  );

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Fiskal Ekspansif vs Kontraktif" sub="Pemerintah bergerak melawan arah siklus ekonomi" />

      <div style={{ display: "flex", gap: 34, marginTop: 36, justifyContent: "center" }}>
        <Panel pop={a} ikon="📉" judul="Ekspansif" kondisi="saat ekonomi lesu / resesi" warna={palette.aset}
          aksi={["Menambah belanja negara", "Menurunkan pajak", "Defisit melebar sementara", "Tujuan: dorong permintaan & lapangan kerja"]} />
        <Panel pop={b} ikon="📈" judul="Kontraktif" kondisi="saat ekonomi memanas / inflasi tinggi" warna={palette.kredit}
          aksi={["Menahan belanja negara", "Menaikkan pajak", "Defisit mengecil / surplus", "Tujuan: meredam permintaan & inflasi"]} />
      </div>

      <div style={{ opacity: note, marginTop: 32, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Inilah kebijakan kontra-siklus: mendorong saat lemah, mengerem saat terlalu cepat. Beberapa mekanisme bekerja otomatis (automatic stabilizer) seperti pajak progresif dan bansos.
      </div>
    </AbsoluteFill>
  );
};

export const EkspansifKontraktifDuration = 175;
