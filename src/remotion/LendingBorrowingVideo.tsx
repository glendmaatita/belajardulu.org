import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade, usePop } from "./anim";

// DeFi lending: pemberi pinjaman menyetor aset dapat bunga; peminjam menaruh
// jaminan (overcollateralized) lalu meminjam. Jika nilai jaminan jatuh di bawah
// ambang, terjadi likuidasi.
export const LendingBorrowingVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const lender = usePop(25);
  const pool = usePop(55);
  const borrower = usePop(85);

  // Nilai jaminan turun seiring waktu sampai menembus ambang likuidasi.
  const ambang = 1500; // jaminan minimum untuk pinjaman Rp1.000
  const jaminan = interpolate(frame, [120, 185], [2200, 1350], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const likuidasi = jaminan < ambang;
  const warn = useFade(150, 14);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title
        text="Lending dan Borrowing DeFi"
        sub="Penyimpan dapat bunga, peminjam wajib menaruh jaminan lebih besar"
      />

      <div style={{ display: "flex", gap: 18, marginTop: 26, alignItems: "center" }}>
        <div
          style={{
            transform: `scale(${lender.scale})`,
            opacity: lender.opacity,
            flex: 1,
            background: palette.bgSoft,
            borderRadius: 16,
            padding: "18px 20px",
            border: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 16, color: palette.muted }}>Pemberi pinjaman</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginTop: 4 }}>
            Setor aset
          </div>
          <div style={{ fontSize: 16, color: palette.aset, marginTop: 6 }}>Dapat bunga +4%/th</div>
        </div>

        <div style={{ fontSize: 30, color: palette.accent }}>&rarr;</div>

        <div
          style={{
            transform: `scale(${pool.scale})`,
            opacity: pool.opacity,
            flex: 1,
            background: palette.ekuitas,
            color: "#06121f",
            borderRadius: 16,
            padding: "18px 20px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 700, opacity: 0.75 }}>Kolam likuiditas</div>
          <div style={{ fontSize: 24, fontWeight: 800, marginTop: 4 }}>Smart contract</div>
          <div style={{ fontSize: 15, marginTop: 6, opacity: 0.8 }}>Bunga ditentukan otomatis</div>
        </div>

        <div style={{ fontSize: 30, color: palette.accent }}>&rarr;</div>

        <div
          style={{
            transform: `scale(${borrower.scale})`,
            opacity: borrower.opacity,
            flex: 1,
            background: palette.bgSoft,
            borderRadius: 16,
            padding: "18px 20px",
            border: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 16, color: palette.muted }}>Peminjam</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginTop: 4 }}>
            Pinjam Rp1.000
          </div>
          <div style={{ fontSize: 16, color: palette.kewajiban, marginTop: 6 }}>
            Jaminan lebih besar
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 28,
          background: palette.bgSoft,
          borderRadius: 16,
          padding: "20px 24px",
          border: `2px solid ${likuidasi ? palette.kredit : "rgba(255,255,255,0.08)"}`,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ fontSize: 18, color: palette.muted }}>Nilai jaminan</div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: likuidasi ? palette.kredit : palette.aset,
            }}
          >
            Rp{Math.round(jaminan)}
          </div>
        </div>

        <div style={{ position: "relative", height: 16, marginTop: 14 }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 8,
              background: "rgba(255,255,255,0.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: `${Math.min(100, (jaminan / 2400) * 100)}%`,
              borderRadius: 8,
              background: likuidasi ? palette.kredit : palette.aset,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: `${(ambang / 2400) * 100}%`,
              top: -6,
              bottom: -6,
              width: 3,
              background: palette.kewajiban,
            }}
          />
        </div>
        <div style={{ fontSize: 14, color: palette.kewajiban, marginTop: 8 }}>
          Garis kuning = ambang likuidasi (Rp{ambang})
        </div>

        <div style={{ opacity: warn, marginTop: 12, fontSize: 18, fontWeight: 700 }}>
          {likuidasi ? (
            <span style={{ color: palette.kredit }}>
              Jaminan menembus ambang. Likuidasi dipicu otomatis untuk melindungi pemberi pinjaman.
            </span>
          ) : (
            <span style={{ color: palette.muted }}>
              Selama jaminan di atas ambang, posisi aman.
            </span>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const LendingBorrowingVideoDuration = 215;
