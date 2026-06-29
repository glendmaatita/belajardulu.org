import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "menggelinding-tanpa-slip",
    levelId: "menggelinding",
    order: 1,
    title: "Menggelinding tanpa Slip",
    summary:
      "Roda yang menggelinding mulus menyatukan gerak maju dan berputar. Titik sentuhnya justru diam sesaat. Kisah dulu, rumus di akhir.",
    durationMin: 14,
    tags: ["fisika", "rotasi", "menggelinding", "tanpa slip", "kecepatan"],
    blocks: [
      {
        type: "paragraph",
        html: "Roda sepeda melaju mulus di aspal tanpa tergelincir. Anehnya, titik roda yang menyentuh tanah justru diam sesaat, sementara puncak roda melesat paling cepat. Bagaimana satu benda bisa diam dan bergerak cepat sekaligus? Inilah keajaiban menggelinding tanpa slip. Ayo telusuri kisahnya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Saat Putaran dan Geseran Menyatu",
        caption: "Menggelinding adalah perpaduan gerak maju dan gerak berputar dalam satu benda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Perhatikan roda yang menggelinding tanpa selip di jalan. Titik roda yang menyentuh tanah sebenarnya diam sesaat (tidak tergelincir), sementara puncak roda bergerak paling cepat. Karena roda tidak selip, ada hubungan rapi antara seberapa cepat ia <strong>maju</strong> dan seberapa cepat ia <strong>berputar</strong>: makin cepat berputar, makin cepat pula majunya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Syarat tanpa slip",
        html: "Menggelinding tanpa slip berarti roda tidak tergelincir di permukaan. Akibatnya, dalam satu putaran penuh roda maju sejauh satu keliling (2πr). Ini mengunci hubungan antara kecepatan maju dan kecepatan putar: <strong>v = ω·r</strong>. Bila roda berputar tetapi tidak maju seimbang (misalnya ban di lumpur), itu namanya selip dan v = ω·r tidak berlaku.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kecepatan Maju Roda r = 0,4 m pada Berbagai Putaran",
        unit: "m/s",
        source: "perhitungan v = ω·r dengan r tetap 0,4 m",
        note: "Jari-jari tetap 0,4 m. Karena menggelinding tanpa slip, kecepatan maju terkunci pada kecepatan putar: makin cepat berputar, makin cepat majunya, lurus dan rapi.",
        data: [
          { label: "ω = 5 rad/s", value: 2, color: "#f472b6" },
          { label: "ω = 10 rad/s", value: 4, color: "#e879f9" },
          { label: "ω = 15 rad/s", value: 6, color: "#c084fc" },
          { label: "ω = 20 rad/s", value: 8, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah roda berjari-jari 0,4 m menggelinding tanpa selip dengan kecepatan sudut 5 rad/s. Berapa kecepatan majunya? (v = ω·r)",
        answer: 2,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "Syarat menggelinding tanpa selip: v = ω × r = 5 × 0,4 = <strong>2 m/s</strong>. Kecepatan maju terikat langsung pada kecepatan putar.",
        hint: "Kalikan kecepatan sudut dengan jari-jari roda.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bola menggelinding tanpa selip dengan kecepatan maju 6 m/s. Jika jari-jarinya 0,3 m, berapa kecepatan sudutnya? (ω = v / r)",
        answer: 20,
        tolerance: 0.1,
        suffix: " rad/s",
        solution:
          "Dari v = ω·r, maka ω = v / r = 6 / 0,3 = <strong>20 rad/s</strong>. Makin kecil jari-jari, makin cepat ia harus berputar untuk laju maju yang sama.",
        hint: "Bagi kecepatan maju dengan jari-jari.",
      },
      {
        type: "calcExercise",
        prompt:
          "Roda menggelinding tanpa slip. Puncak roda bergerak secepat apa jika pusatnya melaju 3 m/s? (puncak = 2v)",
        answer: 6,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "Pada menggelinding tanpa slip, titik sentuh diam (0) dan puncak roda bergerak dua kali kecepatan pusat: 2 × 3 = <strong>6 m/s</strong>.",
        hint: "Puncak roda bergerak dua kali kecepatan pusatnya.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan keadaan roda: menggelinding tanpa selip atau tergelincir (selip).",
        buckets: ["Menggelinding tanpa selip", "Tergelincir (selip)"],
        items: [
          { text: "Roda sepeda melaju mulus, v = ω·r terpenuhi", bucket: "Menggelinding tanpa selip" },
          { text: "Ban mobil berputar kencang tapi mobil diam di lumpur", bucket: "Tergelincir (selip)" },
          { text: "Bola biliar menggelinding stabil di meja", bucket: "Menggelinding tanpa selip" },
          { text: "Roda mengunci saat direm dan menyeret di aspal", bucket: "Tergelincir (selip)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan titik pada roda menggelinding dengan kecepatannya.",
        pairs: [
          { left: "Titik sentuh ke tanah", right: "Diam sesaat (0)" },
          { left: "Pusat roda", right: "v = ω·r" },
          { left: "Puncak roda", right: "2v (dua kali pusat)" },
          { left: "Syarat tanpa slip", right: "v = ω·r" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ban Mobil dan Sistem Anti-Selip",
        html: "Saat mengerem mendadak, ban bisa mengunci dan menyeret di aspal (selip), membuat mobil sulit dikendalikan dan jarak berhenti memanjang. Sistem rem ABS sengaja menjaga ban tetap menggelinding tanpa slip (v = ω·r) dengan melepas-tekan rem berkali-kali tiap detik. Insinyur tidak menghafal rumus; mereka memanfaatkan bahwa roda yang menggelinding (bukan menyeret) memberi cengkeraman dan kendali terbaik.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya terasa wajar. Syarat menggelinding tanpa selip: <strong>v = ω·r</strong> (dan percepatannya a = α·r). Titik sentuh ke tanah diam sesaat, pusat roda bergerak v, dan puncak roda bergerak 2v. Hubungan v = ω·r inilah jembatan yang mengunci gerak maju dan gerak putar menjadi satu. Berikutnya kita lihat bagaimana energinya terbagi di antara keduanya.",
      },
      {
        type: "takeaways",
        items: [
          "Menggelinding tanpa selip menggabungkan gerak maju dan berputar: v = ω·r.",
          "Pada titik sentuh ke tanah, roda diam sesaat sehingga tidak tergelincir.",
          "Pusat roda bergerak v, puncak roda bergerak 2v.",
          "Bila v ≠ ω·r, roda sedang selip (tergelincir), seperti ban di lumpur.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Syarat menggelinding tanpa selip adalah?",
            options: ["v = ω·r", "v = ω/r", "v = ω²·r", "v = r/ω"],
            answer: 0,
            explain: "Tanpa selip, kecepatan maju terikat pada kecepatan putar: v = ω·r.",
          },
          {
            q: "Roda jari-jari 0,5 m berputar 10 rad/s tanpa selip. Kecepatan majunya?",
            options: ["2 m/s", "5 m/s", "10 m/s", "20 m/s"],
            answer: 1,
            explain: "v = ω·r = 10 × 0,5 = 5 m/s.",
          },
          {
            q: "Titik roda yang menyentuh tanah saat menggelinding tanpa selip?",
            options: [
              "Bergerak paling cepat",
              "Diam sesaat",
              "Bergerak mundur",
              "Bergerak ke atas",
            ],
            answer: 1,
            explain: "Pada menggelinding tanpa selip, titik sentuh diam sesaat sehingga tidak tergelincir.",
          },
          {
            q: "Jika pusat roda melaju 4 m/s, puncak roda bergerak?",
            options: ["2 m/s", "4 m/s", "8 m/s", "0 m/s"],
            answer: 2,
            explain: "Puncak roda bergerak dua kali kecepatan pusat: 2 × 4 = 8 m/s.",
          },
          {
            q: "Ban yang berputar kencang tapi mobil diam di lumpur sedang?",
            options: ["Menggelinding tanpa slip", "Selip (tergelincir)", "Diam total", "Setimbang"],
            answer: 1,
            explain: "v ≠ ω·r: roda berputar tanpa maju seimbang, artinya selip.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "energi-menggelinding",
    levelId: "menggelinding",
    order: 2,
    title: "Energi Total Benda Menggelinding",
    summary:
      "Bola dan cincin diturunkan bersama dari papan miring, tetapi tidak tiba bersama. Energinya terbagi antara maju dan berputar. Rumus di akhir.",
    durationMin: 14,
    tags: ["fisika", "rotasi", "menggelinding", "energi", "bidang miring"],
    blocks: [
      {
        type: "paragraph",
        html: "Letakkan bola pejal dan cincin di puncak papan miring, lalu lepaskan bersamaan. Keduanya menggelinding turun, tetapi bola selalu menang sampai di bawah lebih dulu. Padahal kemiringannya sama. Apa yang membuat satu benda lebih lincah menggelinding daripada yang lain? Ayo telusuri kisahnya sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Energi yang Terbagi Dua",
        caption: "Benda menggelinding membagi energinya antara gerak maju dan gerak berputar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Saat sebuah benda menggelinding turun, energi gravitasinya berubah menjadi gerak. Tetapi gerak itu ada dua macam: <strong>maju</strong> dan <strong>berputar</strong>. Energi gravitasi harus dibagi ke keduanya. Benda yang momen inersianya besar (seperti cincin) menyedot lebih banyak energi untuk berputar, sehingga sisa untuk maju lebih sedikit, dan ia kalah cepat.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua dompet energi",
        html: "Benda menggelinding menyimpan energi di dua tempat: <strong>energi gerak maju</strong> (½mv²) dan <strong>energi rotasi</strong> (½Iω²). Total keduanya berasal dari energi potensial gravitasi (mgh) yang turun. Karena sebagian 'tersedot' untuk berputar, benda menggelinding selalu lebih lambat daripada benda yang meluncur tanpa berputar.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Percepatan Menggelinding Turun Bidang Miring 30°",
        unit: "m/s²",
        source: "perhitungan a = g·sin θ / (1 + I/MR²), g = 9,8 m/s²",
        note: "Kemiringan dan massa sama; hanya sebaran massa berbeda. Bola pejal (momen inersia kecil) paling kencang, cincin (momen inersia besar) paling lambat. Inilah pemenang lomba menggelinding.",
        data: [
          { label: "Bola pejal", value: 3.5, color: "#f472b6" },
          { label: "Silinder pejal", value: 3.27, color: "#e879f9" },
          { label: "Bola berongga", value: 2.94, color: "#c084fc" },
          { label: "Cincin", value: 2.45, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda bermassa 2 kg menggelinding dengan kecepatan maju 3 m/s. Berapa energi gerak majunya saja? (½mv²)",
        answer: 9,
        tolerance: 0.01,
        suffix: " J",
        solution:
          "Energi gerak maju = ½mv² = ½ × 2 × 3² = ½ × 2 × 9 = <strong>9 J</strong>. Ini baru bagian translasinya, belum termasuk rotasi.",
        hint: "Pakai ½mv² dengan m = 2 kg dan v = 3 m/s.",
      },
      {
        type: "calcExercise",
        prompt:
          "Benda yang sama (m = 2 kg, v = 3 m/s) juga berputar dengan energi rotasi 4,5 J. Berapa energi kinetik totalnya? (½mv² + ½Iω²)",
        answer: 13.5,
        tolerance: 0.01,
        suffix: " J",
        solution:
          "Energi total = energi maju + energi rotasi = 9 + 4,5 = <strong>13,5 J</strong>. Total inilah yang berasal dari energi gravitasi yang turun.",
        hint: "Jumlahkan energi gerak maju (9 J) dengan energi rotasinya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah silinder pejal (I = ½MR², sehingga energi rotasi = ¼Mv²) bermassa 4 kg menggelinding 2 m/s. Berapa energi kinetik totalnya? (½Mv² + ¼Mv²)",
        answer: 12,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Energi maju = ½ × 4 × 2² = 8 J. Energi rotasi = ¼ × 4 × 2² = 4 J. Total = 8 + 4 = <strong>12 J</strong>. Sepertiga energinya tersimpan dalam putaran.",
        hint: "Hitung ½Mv² lalu tambahkan ¼Mv² untuk silinder pejal.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah energi menggelinding dengan maknanya.",
        pairs: [
          { left: "Energi gerak maju", right: "½mv²" },
          { left: "Energi rotasi", right: "½Iω²" },
          { left: "Energi total menggelinding", right: "½mv² + ½Iω²" },
          { left: "Sumber energi di bidang miring", right: "Energi potensial mgh" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Untuk massa dan jari-jari sama, kelompokkan benda yang menggelinding cepat atau lambat.",
        buckets: ["Menggelinding cepat", "Menggelinding lambat"],
        items: [
          { text: "Bola pejal (momen inersia kecil)", bucket: "Menggelinding cepat" },
          { text: "Cincin (momen inersia besar)", bucket: "Menggelinding lambat" },
          { text: "Silinder pejal", bucket: "Menggelinding cepat" },
          { text: "Bola berongga (massa di kulit)", bucket: "Menggelinding lambat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lomba Menggelinding di Papan Miring",
        html: "Turunkan bola pejal, silinder, dan cincin bermassa sama dari puncak papan miring. Urutan tibanya selalu sama: bola pejal pertama, cincin terakhir. Sebabnya bukan massa (semuanya sama) melainkan sebaran massa. Cincin menyimpan momen inersia terbesar, jadi lebih banyak energi gravitasi habis untuk memutarnya dan lebih sedikit tersisa untuk maju. Perancang ban dan roda tidak menghafal urutan ini; mereka paham bahwa energi yang turun terbagi antara maju dan berputar, lalu menghitung pemenangnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya wajar. Energi total benda menggelinding adalah jumlah energi maju dan energi putar: <strong>Ek total = ½mv² + ½Iω²</strong>. Di bidang miring, ini berasal dari energi potensial: <strong>mgh = ½mv² + ½Iω²</strong>. Karena sebagian energi tersedot untuk berputar, benda dengan momen inersia terkecil (bola pejal) menyisakan paling banyak untuk maju, sehingga menggelinding paling cepat.",
      },
      {
        type: "takeaways",
        items: [
          "Energi total menggelinding = ½mv² + ½Iω², terbagi antara maju dan berputar.",
          "Di bidang miring, mgh berubah menjadi energi maju plus energi rotasi.",
          "Benda dengan momen inersia besar menyedot lebih banyak energi untuk berputar.",
          "Bola pejal (momen inersia terkecil) menggelinding paling cepat menuruni bidang miring.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Energi kinetik total benda menggelinding adalah?",
            options: ["½mv²", "½Iω²", "½mv² + ½Iω²", "mgh"],
            answer: 2,
            explain: "Energi terbagi antara gerak maju (½mv²) dan gerak putar (½Iω²).",
          },
          {
            q: "Benda m = 2 kg menggelinding v = 4 m/s. Energi gerak majunya?",
            options: ["8 J", "16 J", "32 J", "4 J"],
            answer: 1,
            explain: "½mv² = ½ × 2 × 4² = ½ × 2 × 16 = 16 J.",
          },
          {
            q: "Dari puncak bidang miring yang sama, mana yang tiba lebih dulu?",
            options: ["Cincin", "Bola berongga", "Bola pejal", "Tiba bersamaan"],
            answer: 2,
            explain: "Bola pejal punya momen inersia terkecil, jadi lebih banyak energi untuk maju dan tiba lebih dulu.",
          },
          {
            q: "Di bidang miring, energi potensial mgh berubah menjadi?",
            options: [
              "Hanya energi maju",
              "Hanya energi rotasi",
              "Energi maju + energi rotasi",
              "Energi panas saja",
            ],
            answer: 2,
            explain: "mgh = ½mv² + ½Iω²: terbagi antara gerak maju dan gerak putar.",
          },
          {
            q: "Mengapa benda menggelinding lebih lambat daripada benda yang meluncur tanpa berputar?",
            options: [
              "Karena lebih berat",
              "Karena sebagian energi tersedot untuk berputar",
              "Karena gesekan lebih besar",
              "Karena gravitasi lebih kecil",
            ],
            answer: 1,
            explain: "Energi gravitasi harus dibagi ke gerak maju dan rotasi, jadi maju lebih lambat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gasing-dan-giroskop",
    levelId: "menggelinding",
    order: 3,
    title: "Gasing dan Giroskop",
    summary:
      "Gasing yang berputar menolak jatuh dan malah berputar pelan mengitari poros. Inilah presesi, buah dari momentum sudut. Rumus di akhir.",
    durationMin: 14,
    tags: ["fisika", "rotasi", "gasing", "giroskop", "presesi"],
    blocks: [
      {
        type: "paragraph",
        html: "Gasing yang diam langsung roboh. Tetapi begitu diputar kencang, ia berdiri tegak menantang gravitasi, dan porosnya perlahan berputar membentuk kerucut. Mengapa berputar membuatnya begitu kokoh dan anggun? Rahasianya tersimpan dalam momentum sudut. Ayo telusuri kisahnya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Poros yang Enggan Jatuh",
        caption: "Gasing berputar mempertahankan arah porosnya berkat momentum sudut yang besar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gasing yang berputar punya momentum sudut besar yang menunjuk sepanjang porosnya. Gravitasi mencoba menjatuhkannya, memberi torsi. Tetapi alih-alih jatuh, poros gasing malah <strong>berbelok perlahan menyamping</strong>, mengitari sumbu tegak. Gerakan lambat berputar ini disebut <strong>presesi</strong>. Makin cepat gasing berputar, makin lambat presesinya dan makin tegak ia berdiri.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Torsi mengubah arah, bukan besar",
        html: "Pada gasing, torsi gravitasi tidak memperlambat putaran, melainkan <strong>memutar arah</strong> momentum sudutnya. Karena momentum sudut adalah besaran berarah (vektor), torsi yang tegak lurus terhadapnya hanya membelokkan arahnya, bukan mengubah besarnya. Itulah presesi: poros berputar pelan tanpa gasing terjatuh.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Laju Presesi vs Kecepatan Putar Gasing",
        unit: "rad/s",
        source: "perhitungan Ω = τ/L = τ/(I·ω), torsi tetap",
        note: "Torsi gravitasi tetap. Makin cepat gasing berputar (momentum sudut besar), makin lambat presesinya. Gasing yang melambat justru berpresesi makin cepat lalu jatuh.",
        data: [
          { label: "ω = 20 rad/s", value: 2, color: "#f472b6" },
          { label: "ω = 40 rad/s", value: 1, color: "#e879f9" },
          { label: "ω = 80 rad/s", value: 0.5, color: "#c084fc" },
          { label: "ω = 160 rad/s", value: 0.25, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Gasing punya momentum sudut 4 kg·m²/s. Torsi gravitasi 2 N·m bekerja menyamping. Berapa laju presesinya? (Ω = τ/L)",
        answer: 0.5,
        tolerance: 0.01,
        suffix: " rad/s",
        solution:
          "Laju presesi Ω = τ/L = 2/4 = <strong>0,5 rad/s</strong>. Makin besar momentum sudut, makin lambat poros mengitari sumbu tegak.",
        hint: "Bagi torsi dengan momentum sudut.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah giroskop berputar dengan I = 0,2 kg·m² pada 50 rad/s. Berapa momentum sudutnya? (L = I·ω)",
        answer: 10,
        tolerance: 0.01,
        suffix: " kg·m²/s",
        solution:
          "L = I·ω = 0,2 × 50 = <strong>10 kg·m²/s</strong>. Momentum sudut sebesar ini membuat poros giroskop sangat keras kepala mempertahankan arah.",
        hint: "Kalikan momen inersia dengan kecepatan sudut.",
      },
      {
        type: "calcExercise",
        prompt:
          "Giroskop bermomentum sudut 10 kg·m²/s mendapat torsi 1 N·m. Berapa laju presesinya? (Ω = τ/L)",
        answer: 0.1,
        tolerance: 0.01,
        suffix: " rad/s",
        solution:
          "Ω = τ/L = 1/10 = <strong>0,1 rad/s</strong>. Momentum sudut besar membuat presesinya lambat, sehingga poros terasa sangat stabil.",
        hint: "Bagi torsi dengan momentum sudut.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah gasing dan giroskop dengan maknanya.",
        pairs: [
          { left: "Presesi", right: "Poros berputar pelan mengitari sumbu tegak" },
          { left: "Momentum sudut besar", right: "Poros stabil, sulit dijatuhkan" },
          { left: "Torsi gravitasi pada gasing", right: "Membelokkan arah L, bukan menjatuhkan" },
          { left: "Laju presesi Ω", right: "τ/L" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan keadaan gasing: stabil tegak atau hampir jatuh.",
        buckets: ["Stabil tegak", "Hampir jatuh"],
        items: [
          { text: "Gasing baru diputar sangat kencang", bucket: "Stabil tegak" },
          { text: "Gasing yang putarannya hampir habis", bucket: "Hampir jatuh" },
          { text: "Giroskop pada putaran tinggi", bucket: "Stabil tegak" },
          { text: "Gasing melambat, presesi makin cepat", bucket: "Hampir jatuh" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Giroskop pada Pesawat dan Ponsel",
        html: "Giroskop adalah cakram berputar cepat yang porosnya keras kepala mempertahankan arah. Pesawat dan kapal memakainya sebagai kompas dan penjaga keseimbangan, karena poros giroskop tetap menunjuk arah yang sama walau wahananya miring. Ponselmu pun punya giroskop mini untuk mendeteksi rotasi. Para insinyur tidak menghafal rumus; mereka memanfaatkan bahwa momentum sudut besar membuat arah poros stabil, dan torsi hanya menyebabkan presesi lambat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya jelas. Gasing tidak jatuh karena momentum sudutnya besar (<strong>L = I·ω</strong>) dan torsi gravitasi hanya membelokkan arahnya. Laju presesi adalah <strong>Ω = τ/L = τ/(I·ω)</strong>. Makin besar momentum sudut, makin lambat presesi dan makin stabil porosnya. Inilah mengapa gasing yang berputar kencang berdiri tegak begitu lama, dan mengapa giroskop dipakai untuk menjaga arah.",
      },
      {
        type: "takeaways",
        items: [
          "Gasing berputar tidak jatuh karena momentum sudutnya besar (L = I·ω).",
          "Torsi gravitasi membelokkan arah momentum sudut, menyebabkan presesi.",
          "Laju presesi Ω = τ/L: makin besar L, makin lambat dan stabil presesinya.",
          "Giroskop memanfaatkan ini untuk menjaga arah pada pesawat, kapal, dan ponsel.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Gerakan poros gasing berputar pelan mengitari sumbu tegak disebut?",
            options: ["Rotasi", "Presesi", "Translasi", "Osilasi"],
            answer: 1,
            explain: "Presesi adalah perputaran lambat poros gasing akibat torsi gravitasi.",
          },
          {
            q: "Mengapa gasing yang berputar tidak langsung jatuh?",
            options: [
              "Karena gravitasi hilang",
              "Karena momentum sudutnya besar dan torsi hanya membelokkan arahnya",
              "Karena tidak ada gesekan",
              "Karena massanya berkurang",
            ],
            answer: 1,
            explain: "Momentum sudut besar membuat poros stabil; torsi gravitasi hanya menyebabkan presesi.",
          },
          {
            q: "Laju presesi gasing dirumuskan?",
            options: ["Ω = τ·L", "Ω = τ/L", "Ω = L/τ", "Ω = ½Iω²"],
            answer: 1,
            explain: "Laju presesi Ω = τ/L, dengan L = I·ω.",
          },
          {
            q: "Makin cepat gasing berputar (L makin besar), presesinya?",
            options: ["Makin cepat", "Makin lambat", "Tetap", "Berhenti"],
            answer: 1,
            explain: "Ω = τ/L; momentum sudut besar membuat presesi lambat dan poros stabil.",
          },
          {
            q: "Giroskop pada pesawat berguna untuk?",
            options: [
              "Menambah kecepatan",
              "Menjaga arah karena porosnya stabil",
              "Mengurangi berat",
              "Menghasilkan listrik",
            ],
            answer: 1,
            explain: "Poros giroskop mempertahankan arah berkat momentum sudut besar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "aplikasi-rotasi",
    levelId: "menggelinding",
    order: 4,
    title: "Rotasi di Dunia Nyata",
    summary:
      "Dari gigi sepeda sampai roda gila mobil hybrid, satu set hukum rotasi mengatur semuanya. Saatnya melihat fisika rotasi bekerja di sekeliling kita.",
    durationMin: 13,
    tags: ["fisika", "rotasi", "aplikasi", "gigi", "transmisi"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat menanjak, kamu memindahkan gigi sepeda ke yang lebih ringan; di jalan datar, kamu memilih gigi berat agar melaju kencang. Sepeda, mobil, mesin bor, sampai turbin angin semuanya bermain dengan torsi, momen inersia, dan momentum sudut. Ayo lihat bagaimana semua pelajaran rotasi bekerja di dunia nyata sebelum merangkum rumusnya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Roda Gigi dan Pertukaran Torsi",
        caption: "Gigi besar dan kecil menukar antara torsi dan kecepatan, semua lewat hukum rotasi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pada sepeda, gir depan memutar gir belakang lewat rantai. Bila gir belakang kecil, roda berputar lebih cepat tetapi torsinya kecil (cocok di jalan datar). Bila gir belakang besar, roda berputar pelan tetapi torsinya besar (cocok menanjak). Kamu tidak menambah tenaga; kamu hanya <strong>menukar antara kecepatan dan torsi</strong> lewat ukuran gigi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Satu keluarga hukum",
        html: "Semua aplikasi memakai hukum yang sudah kita pelajari. <strong>Torsi</strong> (τ = r·F) untuk membuka baut dan menukar gigi. <strong>Momen inersia</strong> dan <strong>τ = I·α</strong> untuk mempercepat roda. <strong>Momentum sudut</strong> (L = I·ω) untuk menjaga arah giroskop. <strong>Energi rotasi</strong> (½Iω²) untuk roda gila penyimpan tenaga. Tidak ada rumus baru, hanya penerapan.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Torsi Roda dari Rasio Gigi (gaya pedal tetap)",
        unit: "satuan torsi relatif",
        source: "perhitungan torsi ∝ rasio gigi belakang/depan",
        note: "Tenaga kayuh sama, hanya rasio gigi yang berubah. Gigi ringan (rasio besar) memberi torsi besar untuk menanjak; gigi berat (rasio kecil) memberi torsi kecil tetapi roda berputar cepat.",
        data: [
          { label: "Gigi sangat ringan", value: 4, color: "#f472b6" },
          { label: "Gigi ringan", value: 3, color: "#e879f9" },
          { label: "Gigi sedang", value: 2, color: "#c084fc" },
          { label: "Gigi berat", value: 1, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Mesin memberi torsi 40 N·m ke roda dengan momen inersia 8 kg·m². Berapa percepatan sudut roda? (τ = I·α)",
        answer: 5,
        tolerance: 0.01,
        suffix: " rad/s²",
        solution:
          "α = τ/I = 40/8 = <strong>5 rad/s²</strong>. Penerapan langsung hukum Newton rotasi pada roda kendaraan.",
        hint: "Bagi torsi dengan momen inersia roda.",
      },
      {
        type: "calcExercise",
        prompt:
          "Roda gila mobil hybrid menyimpan energi pada I = 0,5 kg·m² dan ω = 40 rad/s. Berapa energi tersimpannya? (½Iω²)",
        answer: 400,
        tolerance: 1,
        suffix: " J",
        solution:
          "Ek = ½Iω² = ½ × 0,5 × 40² = ½ × 0,5 × 1600 = <strong>400 J</strong>. Energi pengereman disimpan di putaran roda gila.",
        hint: "Kuadratkan 40, kalikan 0,5, lalu bagi dua.",
      },
      {
        type: "calcExercise",
        prompt:
          "Gigi depan sepeda 48 gigi memutar gigi belakang 16 gigi. Berapa kali roda belakang berputar untuk satu putaran pedal? (rasio = depan/belakang)",
        answer: 3,
        tolerance: 0.01,
        suffix: " putaran",
        solution:
          "Rasio = 48/16 = <strong>3 putaran</strong>. Satu kayuhan pedal memutar roda belakang tiga kali, cocok untuk melaju kencang di jalan datar.",
        hint: "Bagi jumlah gigi depan dengan gigi belakang.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan aplikasi nyata dengan hukum rotasi yang dipakainya.",
        pairs: [
          { left: "Menukar gigi sepeda", right: "Torsi τ = r·F" },
          { left: "Mempercepat roda kendaraan", right: "Hukum Newton rotasi τ = I·α" },
          { left: "Roda gila penyimpan energi", right: "Energi rotasi ½Iω²" },
          { left: "Giroskop penjaga arah", right: "Momentum sudut L = I·ω" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pilihan gigi sepeda berdasarkan kegunaannya.",
        buckets: ["Untuk menanjak (torsi besar)", "Untuk jalan datar (kecepatan)"],
        items: [
          { text: "Gir belakang besar, roda pelan", bucket: "Untuk menanjak (torsi besar)" },
          { text: "Gir belakang kecil, roda cepat", bucket: "Untuk jalan datar (kecepatan)" },
          { text: "Gigi ringan saat tanjakan curam", bucket: "Untuk menanjak (torsi besar)" },
          { text: "Gigi berat saat sprint di aspal rata", bucket: "Untuk jalan datar (kecepatan)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pengereman Regeneratif Mobil Hybrid",
        html: "Saat mobil hybrid mengerem, energi gerak tidak terbuang menjadi panas seperti rem biasa, melainkan memutar generator dan sebagian disimpan, antara lain di roda gila atau baterai. Energi rotasi ½Iω² yang tersimpan dipakai lagi saat mobil berakselerasi, menghemat bahan bakar. Insinyur menggabungkan torsi, momen inersia, dan energi rotasi sekaligus. Mereka tidak menghafal rumus terpisah; mereka melihatnya sebagai satu sistem rotasi yang utuh.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Semua pelajaran rotasi berkumpul di sini. <strong>Torsi τ = r·F</strong> menukar gaya menjadi putaran. <strong>τ = I·α</strong> mempercepat roda. <strong>L = I·ω</strong> menjaga arah dan kekal tanpa torsi luar. <strong>Ek = ½Iω²</strong> menyimpan energi. <strong>v = ω·r</strong> menghubungkan putaran dengan laju. Roda gigi hanya menukar antara torsi dan kecepatan tanpa menambah tenaga. Itulah seluruh fisika rotasi, bukan untuk dihafal melainkan untuk dipakai.",
      },
      {
        type: "takeaways",
        items: [
          "Roda gigi menukar antara torsi dan kecepatan tanpa menambah tenaga.",
          "Mempercepat roda kendaraan memakai τ = I·α; menyimpan energi memakai ½Iω².",
          "Giroskop memanfaatkan momentum sudut L = I·ω untuk menjaga arah.",
          "Semua aplikasi rotasi memakai satu keluarga hukum yang sama, tinggal diterapkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Memindah gigi sepeda pada dasarnya menukar antara?",
            options: [
              "Massa dan berat",
              "Torsi dan kecepatan putar",
              "Energi dan momentum",
              "Gaya dan gravitasi",
            ],
            answer: 1,
            explain: "Roda gigi menukar antara torsi besar (gigi ringan) dan kecepatan tinggi (gigi berat).",
          },
          {
            q: "Mesin memberi torsi 30 N·m ke roda I = 6 kg·m². Percepatan sudutnya?",
            options: ["3 rad/s²", "5 rad/s²", "24 rad/s²", "180 rad/s²"],
            answer: 1,
            explain: "α = τ/I = 30/6 = 5 rad/s².",
          },
          {
            q: "Roda gila mobil hybrid menyimpan energi memakai rumus?",
            options: ["L = I·ω", "Ek = ½Iω²", "τ = r·F", "v = ω·r"],
            answer: 1,
            explain: "Energi rotasi yang tersimpan adalah ½Iω².",
          },
          {
            q: "Gir depan 50, gir belakang 10. Berapa putaran roda per satu kayuhan?",
            options: ["2", "5", "10", "0,2"],
            answer: 1,
            explain: "Rasio = 50/10 = 5 putaran roda belakang per putaran pedal.",
          },
          {
            q: "Giroskop penjaga arah pesawat memanfaatkan besaran?",
            options: ["Energi rotasi", "Momentum sudut", "Torsi gesek", "Percepatan sentripetal"],
            answer: 1,
            explain: "Momentum sudut L = I·ω yang besar membuat poros giroskop mempertahankan arah.",
          },
        ],
      },
    ],
  },
];
