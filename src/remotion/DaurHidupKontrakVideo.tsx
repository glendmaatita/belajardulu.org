import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Daur hidup smart contract: tulis kode, compile, deploy, panggil fungsi, state berubah.
const Langkah: React.FC<{
  no: number;
  judul: string;
  detail: string;
  warna: string;
  delay: number;
  y: number;
}> = ({ no, judul, detail, warna, delay, y }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        position: "absolute",
        left: 60,
        top: y,
        width: 1160,
        display: "flex",
        alignItems: "center",
        gap: 22,
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          background: warna,
          color: "#06121f",
          fontSize: 26,
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {no}
      </div>
      <div
        style={{
          flex: 1,
          background: palette.bgSoft,
          border: `2px solid ${warna}`,
          borderRadius: 16,
          padding: "14px 22px",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 800, color: palette.text }}>{judul}</div>
        <div style={{ fontSize: 18, color: palette.muted, marginTop: 4 }}>{detail}</div>
      </div>
    </div>
  );
};

const Konektor: React.FC<{ delay: number; y: number }> = ({ delay, y }) => {
  const frame = useCurrentFrame();
  const grow = interpolate(frame - delay, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        left: 84,
        top: y,
        fontSize: 26,
        color: palette.accent,
        opacity: grow,
      }}
    >
      &darr;
    </div>
  );
};

export const DaurHidupKontrakVideo: React.FC = () => {
  const note = useFade(170, 18);
  const langkah = [
    { judul: "Tulis kode", detail: "Logika ditulis dalam bahasa Solidity.", warna: palette.ekuitas },
    { judul: "Compile", detail: "Kode diubah jadi bytecode yang dipahami mesin virtual.", warna: palette.kewajiban },
    { judul: "Deploy ke blockchain", detail: "Kontrak dikirim sebagai transaksi dan mendapat address unik.", warna: palette.accent },
    { judul: "Pengguna memanggil fungsi", detail: "Transaksi ke address kontrak menjalankan fungsi tertentu.", warna: palette.kredit },
    { judul: "State berubah, event dipancarkan", detail: "Data tersimpan diperbarui dan event dicatat untuk aplikasi.", warna: palette.aset },
  ];

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "32px 50px" }}>
      <Title text="Daur Hidup Smart Contract" sub="Dari baris kode hingga berjalan di blockchain" />

      <div style={{ position: "relative", marginTop: 6, height: 540 }}>
        {langkah.map((l, i) => (
          <Langkah
            key={i}
            no={i + 1}
            judul={l.judul}
            detail={l.detail}
            warna={l.warna}
            delay={18 + i * 22}
            y={i * 102}
          />
        ))}
        {langkah.slice(0, -1).map((_, i) => (
          <Konektor key={i} delay={30 + i * 22} y={i * 102 + 76} />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 50,
          right: 50,
          opacity: note,
          fontSize: 18,
          color: palette.muted,
        }}
      >
        Setelah di-deploy, kode kontrak tidak bisa diubah. Karena itu, audit sebelum deploy sangat penting.
      </div>
    </AbsoluteFill>
  );
};

export const DaurHidupKontrakVideoDuration = 215;
