import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade, usePop } from "./anim";

// Oracle: smart contract butuh data dunia nyata (mis. harga) yang dipasok oracle.
// Oracle terdesentralisasi mengirim harga ke kontrak. Ada risiko manipulasi.
export const OracleVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // Beberapa sumber harga digabung jadi satu harga median yang dikirim ke kontrak.
  const sumber = [
    { delay: 20, nama: "Bursa A", harga: "Rp151" },
    { delay: 34, nama: "Bursa B", harga: "Rp149" },
    { delay: 48, nama: "Bursa C", harga: "Rp150" },
  ];
  const kirim = interpolate(frame, [70, 95], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const hargaKontrak = useFade(95, 16);
  const risiko = useFade(150, 20);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Oracle: Jembatan ke Data Nyata" sub="Smart contract tidak bisa membaca dunia luar sendiri, oracle yang memasok datanya" />

      <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 24 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, color: palette.muted, marginBottom: 8 }}>Sumber harga terdesentralisasi</div>
          {sumber.map((s) => {
            const { scale, opacity } = usePop(s.delay);
            return (
              <div
                key={s.nama}
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                  background: palette.bgSoft,
                  borderLeft: `4px solid ${palette.ekuitas}`,
                  borderRadius: 12,
                  padding: "10px 16px",
                  marginBottom: 10,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: 17, color: palette.text }}>{s.nama}</span>
                <span style={{ fontSize: 17, fontWeight: 800, color: palette.text }}>{s.harga}</span>
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: kirim }}>
          <div style={{ fontSize: 14, color: palette.muted, whiteSpace: "nowrap" }}>harga median</div>
          <div style={{ fontSize: 40, color: palette.accent }}>&rarr;</div>
        </div>

        <div style={{ flex: 1, opacity: hargaKontrak }}>
          <div
            style={{
              background: palette.bgSoft,
              border: `2px solid ${palette.aset}`,
              borderRadius: 16,
              padding: "20px 24px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 15, color: palette.muted }}>Smart contract menerima</div>
            <div style={{ fontSize: 44, fontWeight: 800, color: palette.aset, marginTop: 4 }}>Rp150</div>
            <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>dipakai untuk pinjaman, likuidasi, dan lainnya</div>
          </div>
        </div>
      </div>

      <div
        style={{
          opacity: risiko,
          marginTop: 22,
          background: palette.bgSoft,
          border: "1px solid rgba(244,114,182,0.5)",
          borderRadius: 14,
          padding: "14px 18px",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 700, color: palette.kredit }}>Risiko manipulasi: </span>
        <span style={{ fontSize: 16, color: palette.text }}>
          bila oracle terpusat atau sumbernya buruk, harga palsu bisa menipu kontrak dan memicu likuidasi keliru.
        </span>
      </div>
    </AbsoluteFill>
  );
};

export const OracleVideoDuration = 205;
