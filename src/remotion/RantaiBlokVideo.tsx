import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Visualisasi rantai blok: tiap blok menyimpan hash blok sebelumnya, mengubah satu blok merusak rantai.
const blok = [
  { no: 1, data: "Andi kirim 2 BTC", hash: "00a1", prev: "0000" },
  { no: 2, data: "Budi kirim 1 BTC", hash: "9fb2", prev: "00a1" },
  { no: 3, data: "Cici kirim 5 BTC", hash: "4c73", prev: "9fb2" },
  { no: 4, data: "Dewi kirim 3 BTC", hash: "e80d", prev: "4c73" },
];

const Blok: React.FC<{
  no: number;
  data: string;
  hash: string;
  prev: string;
  delay: number;
  rusak: boolean;
}> = ({ no, data, hash, prev, delay, rusak }) => {
  const { scale, opacity } = usePop(delay);
  const warna = rusak ? palette.kredit : palette.aset;
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        borderRadius: 16,
        padding: "16px 18px",
        border: `2px solid ${warna}`,
        boxShadow: rusak ? "0 0 30px rgba(244,114,182,0.45)" : "0 16px 44px rgba(0,0,0,0.32)",
        fontFamily: font,
        width: 220,
      }}
    >
      <div style={{ fontSize: 15, fontWeight: 700, color: warna }}>Blok #{no}</div>
      <div style={{ fontSize: 17, fontWeight: 700, color: palette.text, marginTop: 8 }}>{data}</div>
      <div style={{ fontSize: 14, color: palette.muted, marginTop: 12 }}>
        Hash: <span style={{ color: warna, fontWeight: 700 }}>{hash}</span>
      </div>
      <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>
        Prev: <span style={{ fontWeight: 700 }}>{prev}</span>
      </div>
    </div>
  );
};

export const RantaiBlokVideo: React.FC = () => {
  const frame = useCurrentFrame();
  // Setelah frame 150, blok ke-2 diubah; blok 2,3,4 menjadi rusak (merah).
  const ubahMulai = 150;
  const rusakSampai = interpolate(frame, [ubahMulai, ubahMulai + 60], [1, 4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const warningOp = useFade(ubahMulai + 10, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Rantai Blok (Blockchain)" sub="Tiap blok mengunci hash blok sebelumnya" />

      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 40 }}>
        {blok.map((b, i) => {
          const rusak = b.no >= 2 && b.no <= Math.round(rusakSampai) && frame >= ubahMulai;
          return (
            <div key={b.no} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Blok
                no={b.no}
                data={b.no === 2 && frame >= ubahMulai ? "Budi kirim 9 BTC" : b.data}
                hash={b.hash}
                prev={b.prev}
                delay={28 + i * 22}
                rusak={rusak}
              />
              {i < blok.length - 1 && (
                <PanahMundur delay={40 + i * 22} aktif={b.no + 1 <= Math.round(rusakSampai) && frame >= ubahMulai} />
              )}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 36, fontSize: 18, color: palette.muted, lineHeight: 1.5, maxWidth: 980 }}>
        Panah menunjuk mundur: tiap blok menyimpan hash blok sebelumnya.
      </div>

      <div style={{ opacity: warningOp, marginTop: 12, fontSize: 19, color: palette.kredit, fontWeight: 700, lineHeight: 1.5, maxWidth: 980 }}>
        Mengubah data Blok #2 mengubah hash-nya, sehingga semua blok sesudahnya ikut tidak cocok dan rantai
        terdeteksi rusak.
      </div>
    </AbsoluteFill>
  );
};

const PanahMundur: React.FC<{ delay: number; aktif: boolean }> = ({ delay, aktif }) => {
  const frame = useCurrentFrame();
  const grow = interpolate(frame - delay, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        fontSize: 34,
        color: aktif ? palette.kredit : palette.accent,
        opacity: grow,
        fontFamily: font,
      }}
    >
      &larr;
    </div>
  );
};

export const RantaiBlokVideoDuration = 230;
