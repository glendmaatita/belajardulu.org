import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// NFT: token unik (non-fungible) yang menjadi bukti kepemilikan, menunjuk metadata + file di IPFS.
// Saat dijual, catatan pemilik berpindah di blockchain.
const Box: React.FC<{
  title: string;
  lines: string[];
  bg: string;
  fg?: string;
  delay: number;
  width?: number;
}> = ({ title, lines, bg, fg = "#06121f", delay, width }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: bg,
        color: fg,
        borderRadius: 16,
        padding: "16px 20px",
        width: width ?? 230,
        boxShadow: "0 16px 40px rgba(0,0,0,0.34)",
        fontFamily: font,
      }}
    >
      <div style={{ fontSize: 17, fontWeight: 800 }}>{title}</div>
      {lines.map((l, i) => (
        <div key={i} style={{ fontSize: 15, fontWeight: 600, opacity: 0.82, marginTop: 5 }}>
          {l}
        </div>
      ))}
    </div>
  );
};

export const NFTKepemilikanVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // Garis penghubung token -> metadata -> IPFS
  const link1 = interpolate(frame, [44, 64], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const link2 = interpolate(frame, [70, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Transfer pemilik saat dijual
  const sold = interpolate(frame, [120, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ownerOpacityLama = 1 - sold;
  const ownerOpacityBaru = sold;

  const fungibleFade = useFade(160, 18);
  const note = useFade(195, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="NFT: Bukti Kepemilikan yang Unik" sub="Satu token unik di blockchain menunjuk ke karya dan mencatat siapa pemiliknya" />

      <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 28 }}>
        <Box
          title="Token NFT"
          lines={["ID #001 (unik)", "Tidak bisa digandakan"]}
          bg={palette.ekuitas}
          delay={18}
          width={210}
        />
        <div style={{ width: 56, height: 4, background: palette.accent, opacity: link1, borderRadius: 2 }} />
        <Box
          title="Metadata"
          lines={["Nama, deskripsi", "Tautan ke berkas"]}
          bg={palette.aset}
          delay={40}
          width={210}
        />
        <div style={{ width: 56, height: 4, background: palette.accent, opacity: link2, borderRadius: 2 }} />
        <Box
          title="IPFS"
          lines={["Berkas gambar asli", "Tersimpan terdesentralisasi"]}
          bg={palette.kewajiban}
          delay={66}
          width={230}
        />
      </div>

      <div style={{ marginTop: 34 }}>
        <div style={{ fontSize: 18, color: palette.muted, marginBottom: 10 }}>Catatan pemilik berpindah saat NFT dijual</div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              opacity: 0.4 + 0.6 * ownerOpacityLama,
              background: palette.bgSoft,
              color: palette.text,
              borderRadius: 14,
              padding: "14px 22px",
              border: `2px solid ${palette.muted}`,
            }}
          >
            <div style={{ fontSize: 15, color: palette.muted }}>Pemilik lama</div>
            <div style={{ fontSize: 24, fontWeight: 800 }}>Andi</div>
          </div>
          <div style={{ fontSize: 38, color: palette.accent }}>&rarr;</div>
          <div
            style={{
              opacity: 0.4 + 0.6 * ownerOpacityBaru,
              background: palette.bgSoft,
              color: palette.text,
              borderRadius: 14,
              padding: "14px 22px",
              border: `2px solid ${palette.aset}`,
            }}
          >
            <div style={{ fontSize: 15, color: palette.muted }}>Pemilik baru</div>
            <div style={{ fontSize: 24, fontWeight: 800 }}>Bima</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 40, marginTop: 30, opacity: fungibleFade }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 800, color: palette.kewajiban }}>Fungible (token biasa)</div>
          <div style={{ fontSize: 15, color: palette.muted, marginTop: 4 }}>1 koin = 1 koin, bisa ditukar setara</div>
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 800, color: palette.ekuitas }}>Non-fungible (NFT)</div>
          <div style={{ fontSize: 15, color: palette.muted, marginTop: 4 }}>Tiap token berbeda dan tidak tergantikan</div>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 22, fontSize: 18, color: palette.muted }}>
        NFT membuktikan kepemilikan unik karena setiap token punya ID berbeda dan riwayatnya tercatat di blockchain.
      </div>
    </AbsoluteFill>
  );
};

export const NFTKepemilikanVideoDuration = 225;
