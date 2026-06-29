import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade, usePop } from "./anim";

// DAO: organisasi yang diatur smart contract. Pemegang governance token
// mengajukan proposal dan memberi suara; jika lolos kuorum, kode mengeksekusi
// keputusan (mis. mengeluarkan dana treasury). Proposal -> voting -> eksekusi.
export const DAOVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const proposal = usePop(25);

  // Suara setuju bertambah sampai melewati kuorum.
  const kuorum = 60; // persen
  const setuju = interpolate(frame, [70, 140], [0, 72], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lolos = setuju >= kuorum;

  const exec = usePop(160);
  const note = useFade(185, 16);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title
        text="DAO: Organisasi yang Diatur Kode"
        sub="Proposal, voting pemegang token, lalu eksekusi otomatis oleh smart contract"
      />

      <div style={{ display: "flex", gap: 18, marginTop: 24, alignItems: "stretch" }}>
        <div
          style={{
            transform: `scale(${proposal.scale})`,
            opacity: proposal.opacity,
            flex: 1,
            background: palette.bgSoft,
            borderRadius: 16,
            padding: "18px 20px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ fontSize: 16, color: palette.muted }}>1. Proposal</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.text, marginTop: 4 }}>
            Danai pengembangan
          </div>
          <div style={{ fontSize: 15, color: palette.muted, marginTop: 6 }}>
            Diajukan pemegang governance token.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 30, color: palette.accent }}>
          &rarr;
        </div>

        <div
          style={{
            flex: 1.3,
            background: palette.bgSoft,
            borderRadius: 16,
            padding: "18px 20px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ fontSize: 16, color: palette.muted }}>2. Voting</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: palette.text, marginTop: 4 }}>
              Setuju
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: lolos ? palette.aset : palette.kewajiban,
              }}
            >
              {Math.round(setuju)}%
            </div>
          </div>
          <div style={{ position: "relative", height: 14, marginTop: 12 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 7,
                background: "rgba(255,255,255,0.08)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: `${setuju}%`,
                borderRadius: 7,
                background: lolos ? palette.aset : palette.ekuitas,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: `${kuorum}%`,
                top: -5,
                bottom: -5,
                width: 3,
                background: palette.kewajiban,
              }}
            />
          </div>
          <div style={{ fontSize: 14, color: palette.kewajiban, marginTop: 8 }}>
            Garis kuning = kuorum {kuorum}%
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 30, color: palette.accent }}>
          &rarr;
        </div>

        <div
          style={{
            transform: `scale(${exec.scale})`,
            opacity: lolos ? exec.opacity : 0.2,
            flex: 1,
            background: lolos ? palette.ekuitas : palette.bgSoft,
            color: lolos ? "#06121f" : palette.muted,
            borderRadius: 16,
            padding: "18px 20px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 16, opacity: 0.75 }}>3. Eksekusi</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 4 }}>
            {lolos ? "Kode mencairkan treasury" : "Menunggu kuorum"}
          </div>
          <div style={{ fontSize: 15, marginTop: 6, opacity: 0.85 }}>
            {lolos ? "Tanpa perantara, sesuai kontrak." : ""}
          </div>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted }}>
        Aturan ditulis dalam smart contract, jadi keputusan kolektif dijalankan otomatis dan
        transparan.
      </div>
    </AbsoluteFill>
  );
};

export const DAOVideoDuration = 215;
