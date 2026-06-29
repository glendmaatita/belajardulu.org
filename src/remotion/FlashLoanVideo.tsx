import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade, usePop } from "./anim";

// Flash loan: pinjam tanpa jaminan dalam jumlah besar, pakai, lalu kembalikan
// dalam SATU transaksi yang sama. Jika tidak dikembalikan, seluruh transaksi
// dibatalkan (atomic). Bisa disalahgunakan untuk manipulasi harga.
export const FlashLoanVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const steps = [
    { t: "1. Pinjam", d: "Ambil Rp1 miliar tanpa jaminan", c: palette.accent },
    { t: "2. Pakai", d: "Arbitrase atau tukar antar pasar", c: palette.ekuitas },
    { t: "3. Kembalikan", d: "Bayar pokok + biaya kecil", c: palette.aset },
  ];

  const box = usePop(150);
  const fail = useFade(180, 16);

  // Garis pembungkus "satu transaksi" yang menggambar mengelilingi 3 langkah.
  const wrap = interpolate(frame, [30, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title
        text="Flash Loan"
        sub="Pinjam besar tanpa jaminan, pakai, dan kembalikan dalam satu transaksi"
      />

      <div
        style={{
          marginTop: 24,
          border: `3px dashed ${palette.kewajiban}`,
          borderRadius: 18,
          padding: "22px 20px 18px",
          opacity: 0.4 + wrap * 0.6,
        }}
      >
        <div style={{ fontSize: 16, color: palette.kewajiban, fontWeight: 700, marginBottom: 14 }}>
          Satu transaksi (atomic)
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {steps.map((s, i) => {
            const p = usePop(40 + i * 28);
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
                <div
                  style={{
                    flex: 1,
                    transform: `scale(${p.scale})`,
                    opacity: p.opacity,
                    background: palette.bgSoft,
                    borderRadius: 14,
                    padding: "16px 18px",
                    border: `1px solid ${s.c}`,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 19, fontWeight: 800, color: s.c }}>{s.t}</div>
                  <div style={{ fontSize: 14, color: palette.muted, marginTop: 6 }}>{s.d}</div>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ fontSize: 28, color: palette.accent }}>&rarr;</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", gap: 20, marginTop: 24 }}>
        <div
          style={{
            flex: 1,
            transform: `scale(${box.scale})`,
            opacity: box.opacity,
            background: "rgba(52,211,153,0.12)",
            border: "1px solid rgba(52,211,153,0.4)",
            borderRadius: 14,
            padding: "16px 18px",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 800, color: palette.aset }}>Dikembalikan</div>
          <div style={{ fontSize: 15, color: palette.text, marginTop: 6 }}>
            Transaksi berhasil, peminjam menyimpan selisih untungnya.
          </div>
        </div>
        <div
          style={{
            flex: 1,
            opacity: fail,
            background: "rgba(244,114,182,0.12)",
            border: "1px solid rgba(244,114,182,0.4)",
            borderRadius: 14,
            padding: "16px 18px",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 800, color: palette.kredit }}>
            Tidak dikembalikan
          </div>
          <div style={{ fontSize: 15, color: palette.text, marginTop: 6 }}>
            Seluruh transaksi dibatalkan, seolah tidak pernah terjadi.
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18, fontSize: 16, color: palette.muted }}>
        Sisi gelapnya, flash loan pernah dipakai untuk manipulasi harga sesaat di pasar yang tipis.
      </div>
    </AbsoluteFill>
  );
};

export const FlashLoanVideoDuration = 215;
