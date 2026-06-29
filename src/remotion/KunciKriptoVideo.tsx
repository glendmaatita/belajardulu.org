import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Kriptografi kunci publik: private key membuat public key dan address; tanda tangan diverifikasi publik.
const Kotak: React.FC<{
  ikon: string;
  judul: string;
  isi: string;
  delay: number;
  accent: string;
}> = ({ ikon, judul, isi, delay, accent }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        borderRadius: 16,
        padding: "16px 20px",
        border: `2px solid ${accent}`,
        boxShadow: "0 16px 44px rgba(0,0,0,0.32)",
        fontFamily: font,
        width: 230,
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 34 }}>{ikon}</div>
      <div style={{ fontSize: 20, fontWeight: 800, color: accent, marginTop: 6 }}>{judul}</div>
      <div style={{ fontSize: 15, color: palette.muted, marginTop: 6, lineHeight: 1.4 }}>{isi}</div>
    </div>
  );
};

const FlowArrow: React.FC<{ delay: number; label: string }> = ({ delay, label }) => {
  const frame = useCurrentFrame();
  const grow = interpolate(frame - delay, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: grow, fontFamily: font }}>
      <div style={{ fontSize: 14, color: palette.muted, whiteSpace: "nowrap" }}>{label}</div>
      <div style={{ fontSize: 34, color: palette.accent }}>&rarr;</div>
    </div>
  );
};

export const KunciKriptoVideo: React.FC = () => {
  const baris2 = useFade(120, 18);
  const note = useFade(180, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Kunci Publik dan Kunci Privat" sub="Satu rahasia, satu yang boleh dibagikan" />

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 30 }}>
        <Kotak
          ikon="&#128273;"
          judul="Private Key"
          isi="Rahasia, hanya milik kamu. Jangan pernah dibagikan."
          delay={24}
          accent={palette.kredit}
        />
        <FlowArrow delay={48} label="menghasilkan" />
        <Kotak
          ikon="&#128275;"
          judul="Public Key"
          isi="Boleh dibagikan ke siapa saja untuk verifikasi."
          delay={60}
          accent={palette.ekuitas}
        />
        <FlowArrow delay={84} label="diturunkan" />
        <Kotak
          ikon="&#127991;"
          judul="Address"
          isi="Alamat dompet untuk menerima dana."
          delay={96}
          accent={palette.aset}
        />
      </div>

      <div style={{ opacity: baris2, marginTop: 36 }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: palette.text, marginBottom: 14 }}>
          Menandatangani dan memverifikasi pesan
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Kotak
            ikon="&#9997;"
            judul="Tanda tangan"
            isi="Pemilik menandatangani pesan memakai private key."
            delay={124}
            accent={palette.kredit}
          />
          <FlowArrow delay={148} label="dikirim" />
          <Kotak
            ikon="&#9989;"
            judul="Verifikasi"
            isi="Siapa pun mengecek keaslian dengan public key."
            delay={160}
            accent={palette.aset}
          />
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, lineHeight: 1.5, maxWidth: 980 }}>
        Tanda tangan membuktikan pesan benar dari pemilik kunci, tanpa pernah membocorkan private key itu sendiri.
      </div>
    </AbsoluteFill>
  );
};

export const KunciKriptoVideoDuration = 215;
