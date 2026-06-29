import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade, usePop } from "./anim";

// Penambangan Proof of Work: penambang mencoba banyak nonce sampai hash blok
// jatuh di bawah target (banyak nol di depan). Yang pertama menemukan dapat imbalan.
export const MiningVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // Daftar hash semu (deterministik, bukan acak) yang dicoba berurutan.
  const hashes = [
    "9af3c1d8e2",
    "7b21e0aa4c",
    "c4e9810b3f",
    "5d77af20e1",
    "a0e3b912cc",
    "31fb8a02de",
    "8c14d9e7b0",
    "6ef2a3119d",
    "00003af9b1", // inilah yang valid (4 nol di depan)
  ];

  // Fase mencoba nonce: frame 25..150, ganti hash cepat.
  const tries = hashes.length;
  const idxRaw = interpolate(frame, [25, 150], [0, tries - 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const idx = Math.min(tries - 1, Math.round(idxRaw));
  const found = idx >= tries - 1 && frame >= 150;
  const currentHash = hashes[idx];
  const nonce = 48211 + idx * 137;

  const target = "0000xxxxxx";
  const reward = usePop(165);
  const note = useFade(185, 16);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title
        text="Penambangan Proof of Work"
        sub="Penambang mencoba jutaan nonce sampai hash blok jatuh di bawah target"
      />

      <div style={{ display: "flex", gap: 28, marginTop: 26, alignItems: "stretch" }}>
        <div
          style={{
            flex: 1,
            background: palette.bgSoft,
            borderRadius: 18,
            padding: "22px 26px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ fontSize: 16, color: palette.muted }}>Target (hash harus lebih kecil)</div>
          <div style={{ fontSize: 30, fontWeight: 800, color: palette.kewajiban, letterSpacing: 2 }}>
            {target}
          </div>
          <div style={{ fontSize: 15, color: palette.muted, marginTop: 6 }}>
            Makin banyak nol di depan, makin sulit ditemukan.
          </div>

          <div style={{ marginTop: 20, fontSize: 16, color: palette.muted }}>Nonce dicoba</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: palette.text }}>{nonce}</div>

          <div style={{ marginTop: 18, fontSize: 16, color: palette.muted }}>Hasil hash</div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: 2,
              color: found ? palette.aset : palette.text,
              fontFamily: "monospace",
            }}
          >
            {currentHash}
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 16,
              fontWeight: 700,
              color: found ? palette.aset : palette.kredit,
            }}
          >
            {found ? "Valid! Hash di bawah target." : "Belum valid, coba nonce berikutnya."}
          </div>
        </div>

        <div
          style={{
            flex: 1,
            background: palette.bgSoft,
            borderRadius: 18,
            padding: "22px 26px",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {found ? (
            <div style={{ transform: `scale(${reward.scale})`, opacity: reward.opacity }}>
              <div style={{ fontSize: 22, color: palette.muted }}>Blok ditemukan</div>
              <div style={{ fontSize: 56, marginTop: 4 }}>&#9989;</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginTop: 10 }}>
                Imbalan blok
              </div>
              <div style={{ fontSize: 30, fontWeight: 800, color: palette.aset, marginTop: 2 }}>
                3,125 BTC + biaya
              </div>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 22, color: palette.muted }}>Mencari nonce</div>
              <div style={{ fontSize: 48, fontWeight: 800, color: palette.accent, marginTop: 8 }}>
                {Math.round((idx / (tries - 1)) * 100)}%
              </div>
              <div style={{ fontSize: 15, color: palette.muted, marginTop: 8 }}>
                Penambang tercepat yang pertama menemukan
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 22, fontSize: 18, color: palette.muted }}>
        Mencari hash valid butuh tenaga komputasi besar, tetapi memverifikasinya sangat mudah.
      </div>
    </AbsoluteFill>
  );
};

export const MiningVideoDuration = 215;
