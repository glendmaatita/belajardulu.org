import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Neraca pembayaran: transaksi berjalan + transaksi modal & finansial, ditopang cadangan devisa.
export const NeracaPembayaran: React.FC = () => {
  const a = usePop(25);
  const b = usePop(65);
  const c = usePop(105);
  const note = useFade(140, 18);

  const Card = ({ pop, judul, isi, warna }: { pop: { scale: number; opacity: number }; judul: string; isi: string[]; warna: string }) => (
    <div style={{ transform: `scale(${pop.scale})`, opacity: pop.opacity, background: palette.bgSoft, borderRadius: 16, padding: "22px 22px", width: 340, boxShadow: "0 14px 40px rgba(0,0,0,0.3)", borderTop: `6px solid ${warna}` }}>
      <div style={{ fontSize: 20, fontWeight: 800, color: palette.text, textAlign: "center" }}>{judul}</div>
      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 7 }}>
        {isi.map((x, i) => <div key={i} style={{ fontSize: 15, color: palette.muted }}>&bull; {x}</div>)}
      </div>
    </div>
  );

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Neraca Pembayaran" sub="Catatan seluruh transaksi ekonomi suatu negara dengan dunia" />

      <div style={{ display: "flex", gap: 26, marginTop: 36, justifyContent: "center" }}>
        <Card pop={a} judul="Transaksi Berjalan" warna={palette.aset}
          isi={["Ekspor-impor barang & jasa", "Pendapatan primer (gaji, dividen)", "Transfer (mis. remitansi TKI)"]} />
        <Card pop={b} judul="Transaksi Modal & Finansial" warna={palette.ekuitas}
          isi={["Investasi langsung (FDI)", "Investasi portofolio (saham, obligasi)", "Pinjaman luar negeri"]} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 22 }}>
        <div style={{ transform: `scale(${c.scale})`, opacity: c.opacity, background: palette.accent, color: "#fff", borderRadius: 14, padding: "16px 28px", fontSize: 18, fontWeight: 800, textAlign: "center" }}>
          Selisih ditampung Cadangan Devisa
          <div style={{ fontSize: 14, fontWeight: 500, opacity: 0.9, marginTop: 4 }}>penyangga untuk impor & stabilkan rupiah (aman: {">"} 3 bulan impor)</div>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Indonesia kerap defisit transaksi berjalan karena impor tinggi, yang ditutup aliran modal masuk. Selama cadangan devisa cukup, kondisi ini terkendali.
      </div>
    </AbsoluteFill>
  );
};

export const NeracaPembayaranDuration = 185;
