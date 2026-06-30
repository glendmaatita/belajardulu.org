import type { Lesson } from "../../../types";

export const level6: Lesson[] = [
  // ============================================================
  {
    id: "konstitusi-negara-hukum",
    levelId: "konstitusi",
    order: 1,
    title: "Konstitusi & Negara Hukum",
    summary:
      "Aturan main tertinggi yang membatasi kekuasaan. Pelajari konstitusi, supremasi hukum, dan mengapa bahkan penguasa harus tunduk padanya.",
    durationMin: 14,
    tags: ["konstitusi", "negara hukum", "rule of law", "judicial review"],
    blocks: [
      {
        type: "paragraph",
        html: "Demokrasi butuh aturan main yang disepakati dan tidak mudah diubah sesuka penguasa. Itulah <strong>konstitusi</strong>: hukum tertinggi yang mengatur bagaimana kekuasaan diperoleh, dibatasi, dan dipertanggungjawabkan. Di Indonesia, konstitusi itu adalah <strong>UUD 1945</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Supremasi hukum (rule of law)",
        html: "Dalam <strong>negara hukum</strong>, hukum berlaku untuk <strong>semua orang</strong> tanpa kecuali, termasuk presiden. Tidak ada yang kebal hukum. Inilah pembeda demokrasi dari kekuasaan sewenang-wenang, tempat penguasa berada di atas hukum.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana melemahnya pengawasan, termasuk yudikatif yang menjaga konstitusi, menggerus kesehatan demokrasi.",
      },
      { type: "widget", widget: "SimulatorTriasPolitica" },
      {
        type: "video",
        comp: "ChecksBalancesVideo",
        title: "Checks and Balances",
        caption: "Konstitusi menempatkan rem agar tiap cabang kekuasaan saling mengawasi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Magna_Carta_%28British_Library_Cotton_MS_Augustus_II.106%29.jpg?width=400",
        alt: "Naskah kuno Magna Carta tahun 1215",
        caption: "Magna Carta (1215): salah satu dokumen tertua yang menundukkan penguasa pada hukum.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Negara Hukum vs Negara Kekuasaan (ilustrasi)",
        unit: "perlindungan hak warga (relatif)",
        source: "ilustrasi edukatif konsep rule of law",
        note: "Saat hukum berlaku untuk semua, hak warga lebih terlindungi daripada saat penguasa di atas hukum.",
        data: [
          { label: "Hukum berlaku untuk semua", value: 90, color: "#34d399" },
          { label: "Penguasa kebal hukum", value: 20, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Judicial review menjaga konstitusi",
        html: "Lewat <strong>judicial review</strong>, pengadilan dapat menguji apakah suatu undang-undang atau tindakan pemerintah sesuai konstitusi. Di Indonesia, <strong>Mahkamah Konstitusi</strong> mengemban tugas ini. Dengan begitu, konstitusi bukan sekadar dokumen di lemari, melainkan hukum hidup yang bisa membatalkan aturan yang melanggarnya. Mekanisme ini memastikan mayoritas sekalipun tidak bisa membuat undang-undang yang menabrak hak dasar warga.",
      },
      {
        type: "case",
        title: "Sejarah: Dari Magna Carta ke Konstitusi Amerika 1787",
        html: "Gagasan bahwa kekuasaan harus dibatasi hukum punya garis panjang: dari <strong>Magna Carta (1215)</strong> yang menundukkan raja Inggris, sampai <strong>Konstitusi Amerika (1787)</strong>, konstitusi tertulis nasional pertama yang masih berlaku. Tak lama setelahnya, lewat kasus <strong>Marbury vs Madison (1803)</strong>, Mahkamah Agung AS menegaskan wewenang <strong>judicial review</strong>. Rangkaian ini membangun gagasan modern bahwa konstitusi adalah hukum tertinggi yang mengikat semua, termasuk pembuat undang-undang.",
      },
      {
        type: "calcExercise",
        prompt:
          "UUD 1945 telah diamandemen sebanyak 4 kali (1999-2002). Jika konstitusi disahkan 1945, berapa tahun sampai amandemen pertama (1999)?",
        answer: 54,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "1999 - 1945 = <strong>54 tahun</strong>. Konstitusi sengaja sulit diubah agar stabil, tetapi tetap bisa disempurnakan lewat prosedur amandemen yang ketat.",
        hint: "Kurangkan tahun pengesahan dari tahun amandemen pertama.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri: NEGARA HUKUM atau NEGARA KEKUASAAN.",
        buckets: ["Negara hukum", "Negara kekuasaan"],
        items: [
          { text: "Presiden pun bisa diadili bila melanggar hukum", bucket: "Negara hukum" },
          { text: "Penguasa berada di atas hukum dan kebal", bucket: "Negara kekuasaan" },
          { text: "Undang-undang bisa diuji terhadap konstitusi", bucket: "Negara hukum" },
          { text: "Aturan berubah sesuai kehendak penguasa", bucket: "Negara kekuasaan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Konstitusi adalah hukum tertinggi yang mengatur dan membatasi kekuasaan.",
          "Negara hukum berarti hukum berlaku untuk semua, termasuk penguasa.",
          "Judicial review memungkinkan pengadilan membatalkan aturan yang melanggar konstitusi.",
          "UUD 1945 adalah konstitusi Indonesia, telah diamandemen empat kali.",
          "Garis dari Magna Carta 1215 ke Konstitusi AS 1787 membangun gagasan konstitusi modern.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu konstitusi?",
            options: [
              "Daftar pejabat negara",
              "Hukum tertinggi yang mengatur dan membatasi kekuasaan",
              "Anggaran tahunan",
              "Surat suara",
            ],
            answer: 1,
            explain: "Konstitusi adalah aturan main tertinggi sebuah negara.",
          },
          {
            q: "Apa inti supremasi hukum (rule of law)?",
            options: [
              "Hukum hanya untuk rakyat biasa",
              "Hukum berlaku untuk semua, termasuk penguasa",
              "Penguasa membuat hukum sesuka hati",
              "Tidak ada hukum",
            ],
            answer: 1,
            explain: "Negara hukum menundukkan semua orang, termasuk penguasa, pada hukum.",
          },
          {
            q: "Apa fungsi judicial review?",
            options: [
              "Memilih presiden",
              "Menguji apakah undang-undang sesuai konstitusi",
              "Menyusun anggaran",
              "Mengangkat menteri",
            ],
            answer: 1,
            explain: "Judicial review menjaga agar aturan tidak menabrak konstitusi.",
          },
          {
            q: "Konstitusi tertulis nasional pertama yang masih berlaku adalah?",
            options: ["Magna Carta 1215", "Konstitusi Amerika 1787", "UUD 1945", "Deklarasi Prancis 1789"],
            answer: 1,
            explain: "Konstitusi Amerika 1787 adalah konstitusi nasional tertulis tertua yang masih berlaku.",
          },
          {
            q: "Berapa tahun dari pengesahan UUD 1945 ke amandemen pertama 1999?",
            options: ["44 tahun", "54 tahun", "64 tahun", "50 tahun"],
            answer: 1,
            explain: "1999 dikurangi 1945 sama dengan 54 tahun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "apa-itu-konstitusi",
    levelId: "konstitusi",
    order: 2,
    title: "Apa itu Konstitusi",
    summary:
      "Mengenal konstitusi sebagai hukum tertinggi: isi, fungsi, jenis tertulis dan tidak tertulis, serta posisinya dalam hierarki aturan.",
    durationMin: 13,
    tags: ["konstitusi", "UUD 1945", "hierarki hukum", "negara hukum"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Konstitusi</strong> adalah hukum dasar tertinggi sebuah negara. Ia menjawab tiga pertanyaan pokok: bagaimana kekuasaan dibentuk, bagaimana kekuasaan dibatasi, dan apa saja hak warga yang dijamin. Semua aturan lain harus tunduk padanya.",
      },
      {
        type: "paragraph",
        html: "Konstitusi bisa <strong>tertulis</strong> (satu naskah resmi seperti UUD 1945) atau <strong>tidak tertulis</strong> (kumpulan konvensi dan undang-undang yang dianggap mendasar, seperti di Inggris). Apa pun bentuknya, ia berfungsi sebagai patokan tertinggi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Hukum di atas segala hukum",
        html: "Konstitusi berada di puncak <strong>hierarki hukum</strong>. Undang-undang tidak boleh bertentangan dengannya, peraturan tidak boleh bertentangan dengan undang-undang. Bila bertabrakan, aturan yang lebih rendah dapat dibatalkan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Isi pokok sebuah konstitusi",
        html: "Umumnya memuat tiga hal: <strong>struktur kekuasaan</strong> (lembaga negara dan wewenangnya), <strong>pembatasan kekuasaan</strong> (checks and balances), dan <strong>jaminan hak asasi</strong> warga negara.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Konstitusi membagi kekuasaan ke beberapa cabang. Mainkan simulator untuk melihat akibat bila satu cabang menelan cabang lain.",
      },
      { type: "widget", widget: "SimulatorTriasPolitica" },
      {
        type: "video",
        comp: "TriasPoliticaVideo",
        title: "Trias Politica",
        caption: "Konstitusi membagi kekuasaan menjadi tiga cabang yang saling mengawasi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/United_States_Declaration_of_Independence.jpg?width=400",
        alt: "Naskah Deklarasi Kemerdekaan Amerika Serikat tahun 1776",
        caption: "Deklarasi Kemerdekaan AS (1776) mendahului Konstitusi AS (1787) yang menjadi hukum tertinggi tertulis.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Hierarki aturan di Indonesia (ilustrasi tingkat)",
        unit: "tingkat dari yang tertinggi",
        source: "ilustrasi edukatif berdasarkan UU 12/2011 tentang pembentukan peraturan",
        note: "Makin tinggi tingkatnya, makin mengikat. UUD 1945 berada di puncak dan tak boleh dilanggar aturan di bawahnya.",
        data: [
          { label: "UUD 1945", value: 5, color: "#34d399" },
          { label: "Undang-Undang", value: 4, color: "#60a5fa" },
          { label: "Peraturan Pemerintah", value: 3, color: "#a78bfa" },
          { label: "Peraturan Presiden", value: 2, color: "#fbbf24" },
          { label: "Peraturan Daerah", value: 1, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sebuah Perda dibatalkan karena melanggar UU",
        html: "Bayangkan sebuah pemerintah daerah menerbitkan Peraturan Daerah yang melarang warga pindah agama. Karena <strong>Perda</strong> berada di tingkat paling bawah dan UUD 1945 menjamin kebebasan beragama, aturan itu bertentangan dengan konstitusi dan undang-undang di atasnya. Lewat mekanisme pengujian, Perda semacam ini dapat dibatalkan. Inilah cara hierarki hukum menjaga agar tak ada aturan yang menabrak konstitusi.",
      },
      {
        type: "case",
        title: "Sejarah: Konstitusi Amerika 1787, naskah tertua yang masih berlaku",
        html: "Pada <strong>1787</strong>, para perumus di Philadelphia menyusun <strong>Konstitusi Amerika Serikat</strong>, konstitusi tertulis nasional pertama yang masih berlaku sampai hari ini. Sebelumnya, gagasan membatasi penguasa lewat dokumen sudah muncul sejak <strong>Magna Carta (1215)</strong> di Inggris. Konstitusi AS menjadi cetak biru bagi banyak negara, termasuk semangat di balik penyusunan UUD 1945 yang menempatkan hukum dasar tertulis sebagai patokan tertinggi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Konstitusi Amerika disahkan 1787 dan masih berlaku pada 2025. Berapa tahun usianya pada 2025?",
        answer: 238,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "2025 - 1787 = <strong>238 tahun</strong>. Usia panjang ini menunjukkan konstitusi sengaja dibuat stabil dan sulit diubah.",
        hint: "Kurangkan tahun pengesahan dari tahun sekarang.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah dengan penjelasannya.",
        pairs: [
          { left: "Konstitusi", right: "Hukum dasar tertinggi negara" },
          { left: "Hierarki hukum", right: "Urutan tingkat aturan dari tinggi ke rendah" },
          { left: "Konstitusi tertulis", right: "Termuat dalam satu naskah resmi" },
          { left: "Jaminan hak", right: "Bagian konstitusi yang melindungi warga" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Konstitusi adalah hukum dasar tertinggi yang mengatur, membatasi, dan menjamin hak.",
          "Ia bisa tertulis (UUD 1945) atau tidak tertulis (Inggris).",
          "Dalam hierarki hukum, aturan lebih rendah tak boleh melanggar yang lebih tinggi.",
          "Aturan yang menabrak konstitusi dapat dibatalkan.",
          "Konstitusi AS 1787 adalah naskah konstitusi nasional tertua yang masih berlaku.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa posisi konstitusi dalam hierarki hukum?",
            options: ["Paling bawah", "Di tengah", "Paling tinggi", "Setara undang-undang"],
            answer: 2,
            explain: "Konstitusi berada di puncak hierarki hukum.",
          },
          {
            q: "Contoh konstitusi tidak tertulis ada di negara?",
            options: ["Indonesia", "Amerika Serikat", "Inggris", "Prancis"],
            answer: 2,
            explain: "Inggris memakai konstitusi tidak tertulis berupa konvensi dan undang-undang dasar.",
          },
          {
            q: "Manakah yang bukan isi pokok konstitusi?",
            options: ["Struktur kekuasaan", "Pembatasan kekuasaan", "Jaminan hak asasi", "Daftar harga pasar"],
            answer: 3,
            explain: "Daftar harga pasar bukan materi konstitusi.",
          },
          {
            q: "Bila Perda bertentangan dengan konstitusi, maka?",
            options: ["Konstitusi yang batal", "Perda dapat dibatalkan", "Keduanya berlaku", "Tidak ada akibat"],
            answer: 1,
            explain: "Aturan lebih rendah yang melanggar konstitusi dapat dibatalkan.",
          },
          {
            q: "Konstitusi nasional tertulis tertua yang masih berlaku adalah?",
            options: ["UUD 1945", "Konstitusi Amerika 1787", "Magna Carta 1215", "Konstitusi Prancis 1791"],
            answer: 1,
            explain: "Konstitusi Amerika 1787 masih berlaku hingga kini.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "supremasi-hukum-rule-of-law",
    levelId: "konstitusi",
    order: 3,
    title: "Supremasi Hukum (Rule of Law)",
    summary:
      "Mengapa hukum harus berlaku sama untuk semua, termasuk penguasa. Prinsip rule of law, persamaan di depan hukum, dan due process.",
    durationMin: 14,
    tags: ["rule of law", "supremasi hukum", "kesetaraan", "due process"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Supremasi hukum</strong> atau <strong>rule of law</strong> adalah prinsip bahwa hukum berdiri di atas semua orang. Tak ada warga, pejabat, bahkan presiden yang kebal. Lawan dari prinsip ini adalah <strong>rule of man</strong>, ketika kehendak penguasa menjadi hukum.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga pilar rule of law",
        html: "Pertama, <strong>persamaan di depan hukum</strong> (equality before the law). Kedua, <strong>kepastian hukum</strong> (aturan jelas dan diumumkan lebih dulu). Ketiga, <strong>proses hukum yang adil</strong> (due process: hak membela diri, peradilan tidak memihak).",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bahaya hukum yang pandang bulu",
        html: "Bila hukum hanya tajam ke bawah dan tumpul ke atas, kepercayaan publik runtuh. Warga merasa percuma menaati aturan bila penguasa bisa melanggarnya tanpa konsekuensi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Peradilan yang merdeka adalah penjaga rule of law. Lihat di simulator bagaimana yudikatif yang lemah membuat kekuasaan tak terkendali.",
      },
      { type: "widget", widget: "SimulatorTriasPolitica" },
      {
        type: "video",
        comp: "TriasPoliticaVideo",
        title: "Pemisahan Kekuasaan",
        caption: "Rule of law tegak saat tiga cabang kekuasaan terpisah dan saling mengawasi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Magna_Carta_%28British_Library_Cotton_MS_Augustus_II.106%29.jpg?width=400",
        alt: "Naskah Magna Carta tahun 1215",
        caption: "Magna Carta (1215) menundukkan raja Inggris pada hukum, akar gagasan rule of law.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Indeks Rule of Law dunia (skala 0-1, ilustrasi peringkat)",
        unit: "skor indeks (0-1)",
        source: "ilustrasi edukatif pola WJP Rule of Law Index",
        note: "Skor mendekati 1 berarti hukum lebih kuat menundukkan kekuasaan. Negara Nordik biasanya memimpin indeks ini.",
        data: [
          { label: "Negara Nordik (tinggi)", value: 0.9, color: "#34d399" },
          { label: "Demokrasi mapan", value: 0.74, color: "#60a5fa" },
          { label: "Demokrasi berkembang", value: 0.52, color: "#fbbf24" },
          { label: "Negara otoriter", value: 0.32, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pejabat tinggi diadili seperti warga biasa",
        html: "Dalam negara hukum, seorang menteri yang terbukti korupsi tetap diproses pidana dan dapat dipenjara, persis seperti warga biasa yang mencuri. Tidak ada pengecualian karena jabatan. Inilah wujud nyata <strong>persamaan di depan hukum</strong>: status sosial atau kekuasaan tidak memberi kekebalan. Sebaliknya, di negara yang lemah rule of law-nya, pejabat besar nyaris tak tersentuh hukum.",
      },
      {
        type: "case",
        title: "Sejarah: Magna Carta 1215 menundukkan raja pada hukum",
        html: "Pada <strong>1215</strong>, para bangsawan Inggris memaksa <strong>Raja John</strong> menandatangani <strong>Magna Carta</strong>. Dokumen ini menegaskan bahwa raja pun tunduk pada hukum dan tidak bisa menahan orang bebas tanpa proses hukum yang sah. Inilah salah satu tonggak paling awal gagasan <strong>rule of law</strong> dan <strong>due process</strong>, yang berabad kemudian menjadi fondasi konstitusi modern di seluruh dunia.",
      },
      {
        type: "calcExercise",
        prompt:
          "Magna Carta ditandatangani 1215. Berapa tahun jaraknya sampai Konstitusi Amerika disahkan 1787?",
        answer: 572,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "1787 - 1215 = <strong>572 tahun</strong>. Butuh berabad-abad bagi gagasan rule of law untuk matang menjadi konstitusi tertulis.",
        hint: "Kurangkan 1215 dari 1787.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan: SESUAI RULE OF LAW atau MELANGGAR RULE OF LAW.",
        buckets: ["Sesuai rule of law", "Melanggar rule of law"],
        items: [
          { text: "Pejabat korupsi diadili seperti warga biasa", bucket: "Sesuai rule of law" },
          { text: "Terdakwa diberi hak membela diri", bucket: "Sesuai rule of law" },
          { text: "Penguasa menghukum lawan politik tanpa pengadilan", bucket: "Melanggar rule of law" },
          { text: "Aturan dibuat berlaku surut untuk menjerat seseorang", bucket: "Melanggar rule of law" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Rule of law berarti hukum berdiri di atas semua orang, termasuk penguasa.",
          "Tiga pilarnya: persamaan di depan hukum, kepastian hukum, dan due process.",
          "Hukum yang pandang bulu meruntuhkan kepercayaan publik.",
          "Peradilan yang merdeka adalah penjaga utama rule of law.",
          "Magna Carta 1215 adalah tonggak awal gagasan ini.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti dari rule of law?",
            options: [
              "Penguasa menjadi sumber hukum",
              "Hukum berdiri di atas semua orang",
              "Hukum hanya untuk rakyat",
              "Tidak perlu pengadilan",
            ],
            answer: 1,
            explain: "Rule of law menundukkan semua orang, termasuk penguasa, pada hukum.",
          },
          {
            q: "Manakah yang termasuk pilar rule of law?",
            options: ["Kekebalan pejabat", "Persamaan di depan hukum", "Hukum rahasia", "Aturan berlaku surut"],
            answer: 1,
            explain: "Persamaan di depan hukum adalah salah satu pilar utama.",
          },
          {
            q: "Apa yang dimaksud due process?",
            options: [
              "Proses hukum yang adil dan tidak memihak",
              "Proses memilih presiden",
              "Proses menyusun anggaran",
              "Proses dagang",
            ],
            answer: 0,
            explain: "Due process menjamin peradilan adil dan hak membela diri.",
          },
          {
            q: "Lawan dari rule of law adalah?",
            options: ["Rule of man", "Rule of court", "Rule of vote", "Rule of book"],
            answer: 0,
            explain: "Rule of man berarti kehendak penguasa menjadi hukum.",
          },
          {
            q: "Dokumen 1215 yang menundukkan raja Inggris pada hukum adalah?",
            options: ["Konstitusi AS", "Magna Carta", "UUD 1945", "Bill of Rights"],
            answer: 1,
            explain: "Magna Carta 1215 adalah tonggak awal rule of law.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "mahkamah-konstitusi-judicial-review",
    levelId: "konstitusi",
    order: 4,
    title: "Mahkamah Konstitusi & Judicial Review",
    summary:
      "Lembaga penjaga konstitusi: apa itu judicial review, bagaimana Mahkamah Konstitusi RI bekerja, dan mengapa ia melindungi minoritas dari mayoritas.",
    durationMin: 14,
    tags: ["mahkamah konstitusi", "judicial review", "uji materi", "konstitusi"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Judicial review</strong> adalah kewenangan pengadilan untuk menguji apakah suatu undang-undang sesuai dengan konstitusi. Bila bertentangan, undang-undang itu bisa dibatalkan. Di Indonesia, tugas ini dipegang <strong>Mahkamah Konstitusi (MK)</strong> yang dibentuk pada 2003.",
      },
      {
        type: "paragraph",
        html: "MK menguji undang-undang terhadap UUD 1945 lewat proses yang disebut <strong>uji materi</strong>. Putusannya bersifat final dan mengikat. Inilah cara konstitusi tetap hidup: bukan sekadar teks, melainkan ukuran yang bisa membatalkan aturan yang melanggarnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Penjaga konstitusi dari mayoritas",
        html: "Mayoritas di parlemen bisa saja membuat undang-undang yang menabrak hak dasar minoritas. <strong>Judicial review</strong> menjadi rem: pengadilan dapat membatalkan undang-undang itu karena melanggar konstitusi, meski didukung suara terbanyak.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Wewenang Mahkamah Konstitusi RI",
        html: "MK menguji undang-undang terhadap UUD, memutus sengketa kewenangan lembaga negara, memutus pembubaran partai, memutus sengketa hasil pemilu, dan memberi putusan atas pendapat DPR soal pelanggaran presiden.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "MK adalah bagian cabang yudikatif. Mainkan simulator dan perhatikan: tanpa yudikatif yang kuat, kekuasaan kehilangan penjaganya.",
      },
      { type: "widget", widget: "SimulatorTriasPolitica" },
      {
        type: "video",
        comp: "ChecksBalancesVideo",
        title: "Checks and Balances",
        caption: "Judicial review adalah salah satu rem terpenting dalam sistem saling mengawasi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/DPR_sahkan_RUU.jpg?width=400",
        alt: "Sidang DPR Indonesia mengesahkan rancangan undang-undang",
        caption: "DPR membuat undang-undang, MK dapat mengujinya terhadap konstitusi.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Permohonan uji materi ke MK RI per periode (ilustrasi tren)",
        unit: "jumlah permohonan (relatif)",
        source: "ilustrasi edukatif pola perkara Mahkamah Konstitusi",
        note: "Sejak berdiri 2003, MK makin sering dipakai warga untuk menguji undang-undang, tanda konstitusi makin hidup.",
        data: [
          { label: "2003-2005", value: 60 },
          { label: "2006-2010", value: 130 },
          { label: "2011-2015", value: 180 },
          { label: "2016-2020", value: 210 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Undang-undang dibatalkan karena melanggar UUD",
        html: "Misalkan sebuah undang-undang menghapus hak warga untuk menggugat pemerintah ke pengadilan. Seorang warga mengajukan <strong>uji materi</strong> ke MK karena ketentuan itu melanggar jaminan akses keadilan dalam UUD 1945. Bila MK setuju, pasal itu dinyatakan <strong>tidak berlaku</strong>. Putusan ini final dan mengikat semua orang. Dengan begitu, satu warga biasa pun dapat membatalkan undang-undang yang inkonstitusional.",
      },
      {
        type: "case",
        title: "Sejarah: Marbury vs Madison 1803 melahirkan judicial review",
        html: "Pada <strong>1803</strong>, lewat kasus <strong>Marbury vs Madison</strong>, Mahkamah Agung Amerika di bawah Ketua John Marshall menegaskan bahwa pengadilan berwenang menyatakan sebuah undang-undang batal bila bertentangan dengan konstitusi. Inilah kelahiran resmi doktrin <strong>judicial review</strong>. Dua abad kemudian, Indonesia mengadopsi semangat yang sama dengan membentuk <strong>Mahkamah Konstitusi pada 2003</strong> sebagai penjaga UUD 1945.",
      },
      {
        type: "calcExercise",
        prompt:
          "Doktrin judicial review lahir 1803 (Marbury vs Madison). MK RI berdiri 2003. Berapa tahun selisihnya?",
        answer: 200,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "2003 - 1803 = <strong>200 tahun</strong>. Indonesia melembagakan gagasan ini tepat dua abad setelah kelahirannya di AS.",
        hint: "Kurangkan 1803 dari 2003.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap wewenang dengan lembaga atau istilah yang tepat.",
        pairs: [
          { left: "Menguji UU terhadap UUD", right: "Mahkamah Konstitusi" },
          { left: "Membuat undang-undang", right: "DPR" },
          { left: "Uji materi", right: "Proses pengujian UU di MK" },
          { left: "Marbury vs Madison 1803", right: "Kelahiran judicial review" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Judicial review adalah kewenangan menguji UU terhadap konstitusi.",
          "Di Indonesia, tugas itu dipegang Mahkamah Konstitusi yang berdiri 2003.",
          "Putusan MK bersifat final dan mengikat.",
          "Mekanisme ini melindungi hak minoritas dari undang-undang mayoritas.",
          "Doktrin ini lahir lewat Marbury vs Madison 1803 di Amerika Serikat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi utama Mahkamah Konstitusi RI?",
            options: [
              "Membuat undang-undang",
              "Menguji undang-undang terhadap UUD 1945",
              "Mengangkat menteri",
              "Menyusun APBN",
            ],
            answer: 1,
            explain: "MK menguji undang-undang terhadap konstitusi.",
          },
          {
            q: "Kapan Mahkamah Konstitusi RI dibentuk?",
            options: ["1998", "2001", "2003", "2009"],
            answer: 2,
            explain: "MK RI dibentuk pada 2003.",
          },
          {
            q: "Sifat putusan MK adalah?",
            options: ["Sementara", "Bisa dibanding", "Final dan mengikat", "Hanya saran"],
            answer: 2,
            explain: "Putusan MK bersifat final dan mengikat.",
          },
          {
            q: "Kasus yang melahirkan doktrin judicial review adalah?",
            options: ["Magna Carta 1215", "Marbury vs Madison 1803", "Brown vs Board 1954", "Roe vs Wade 1973"],
            answer: 1,
            explain: "Marbury vs Madison 1803 menegaskan wewenang judicial review.",
          },
          {
            q: "Mengapa judicial review melindungi minoritas?",
            options: [
              "Karena mayoritas selalu benar",
              "Karena bisa membatalkan UU yang menabrak hak dasar meski didukung suara terbanyak",
              "Karena minoritas tidak boleh kalah",
              "Karena hakim memihak minoritas",
            ],
            answer: 1,
            explain: "Judicial review membatalkan undang-undang inkonstitusional meski didukung mayoritas.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "amandemen-konstitusi-stabilitas",
    levelId: "konstitusi",
    order: 5,
    title: "Amandemen Konstitusi & Stabilitas",
    summary:
      "Mengapa konstitusi sengaja sulit diubah, bagaimana prosedur amandemen yang ketat menjaga stabilitas, dan kisah empat amandemen UUD 1945.",
    durationMin: 14,
    tags: ["amandemen", "UUD 1945", "stabilitas", "reformasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Konstitusi harus <strong>stabil</strong> agar menjadi patokan yang dipercaya, tetapi juga harus bisa <strong>disempurnakan</strong> mengikuti zaman. Jalan tengahnya adalah <strong>amandemen</strong>: perubahan konstitusi lewat prosedur yang sengaja dibuat ketat dan tidak mudah.",
      },
      {
        type: "paragraph",
        html: "Karena syaratnya berat, konstitusi tidak bisa diubah sesuka penguasa atau atas dorongan emosi sesaat. Inilah yang membuat konstitusi berbeda dari undang-undang biasa: ia tahan terhadap angin politik harian.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kaku tapi tidak beku",
        html: "Konstitusi dirancang <strong>rigid</strong>: butuh dukungan luas untuk mengubahnya. Ini mencegah perubahan gegabah, sekaligus tetap membuka pintu perbaikan bila benar-benar dibutuhkan dan disepakati banyak pihak.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bahaya amandemen yang terlalu mudah",
        html: "Bila konstitusi gampang diubah, penguasa bisa memperpanjang masa jabatan atau menghapus pembatasan kekuasaan demi kepentingannya. Prosedur ketat adalah benteng melawan godaan ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Empat amandemen UUD 1945",
        html: "Setelah Reformasi, UUD 1945 diamandemen <strong>empat kali</strong> pada 1999, 2000, 2001, dan 2002. Hasilnya antara lain pembatasan masa jabatan presiden dua periode, pemilihan presiden langsung, dan pembentukan Mahkamah Konstitusi.",
      },
      {
        type: "video",
        comp: "TriasPoliticaVideo",
        title: "Pemisahan Kekuasaan",
        caption: "Amandemen UUD 1945 mempertegas pemisahan dan pembatasan kekuasaan pasca Reformasi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/DPR_sahkan_RUU.jpg?width=400",
        alt: "Sidang DPR Indonesia",
        caption: "Perubahan konstitusi dibahas dalam sidang lembaga perwakilan dengan syarat dukungan yang ketat.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Empat amandemen UUD 1945 menurut tahun",
        unit: "tahun pengesahan",
        source: "fakta sejarah ketatanegaraan Indonesia 1999-2002",
        note: "Empat amandemen berlangsung beruntun dalam empat tahun pertama era Reformasi.",
        data: [
          { label: "Amandemen I", value: 1999, color: "#60a5fa" },
          { label: "Amandemen II", value: 2000, color: "#34d399" },
          { label: "Amandemen III", value: 2001, color: "#a78bfa" },
          { label: "Amandemen IV", value: 2002, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pembatasan masa jabatan presiden",
        html: "Sebelum amandemen, UUD 1945 tidak tegas membatasi berapa kali seseorang bisa menjadi presiden, sehingga seorang presiden bisa menjabat sangat lama. <strong>Amandemen pertama (1999)</strong> menetapkan presiden hanya boleh menjabat <strong>dua periode</strong>, masing-masing lima tahun. Satu perubahan kalimat dalam konstitusi ini menjadi rem kuat terhadap pemusatan kekuasaan jangka panjang.",
      },
      {
        type: "case",
        title: "Sejarah: Empat amandemen UUD 1945 era Reformasi 1999-2002",
        html: "Setelah <strong>Reformasi 1998</strong> menumbangkan kekuasaan yang terlalu lama, MPR menjalankan <strong>empat kali amandemen UUD 1945</strong> berturut-turut pada <strong>1999, 2000, 2001, dan 2002</strong>. Perubahan ini membatasi masa jabatan presiden, memperkenalkan pemilihan presiden langsung, memperkuat hak asasi manusia, dan membentuk <strong>Mahkamah Konstitusi pada 2003</strong>. Inilah contoh konstitusi yang stabil namun tetap mampu menyempurnakan diri lewat prosedur yang sah.",
      },
      {
        type: "calcExercise",
        prompt:
          "UUD 1945 diamandemen empat kali, mulai 1999 sampai 2002. Berapa tahun rentang waktu proses amandemen itu?",
        answer: 3,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "2002 - 1999 = <strong>3 tahun</strong>. Empat amandemen berlangsung beruntun hanya dalam rentang tiga tahun.",
        hint: "Kurangkan tahun amandemen pertama dari yang terakhir.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap hal: HASIL AMANDEMEN UUD 1945 atau BUKAN HASIL AMANDEMEN.",
        buckets: ["Hasil amandemen", "Bukan hasil amandemen"],
        items: [
          { text: "Pembatasan presiden dua periode", bucket: "Hasil amandemen" },
          { text: "Pemilihan presiden secara langsung", bucket: "Hasil amandemen" },
          { text: "Pembentukan Mahkamah Konstitusi", bucket: "Hasil amandemen" },
          { text: "Penetapan harga bahan bakar", bucket: "Bukan hasil amandemen" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Konstitusi sengaja dibuat rigid agar stabil dan tidak diubah sembarangan.",
          "Amandemen butuh dukungan luas lewat prosedur yang ketat.",
          "Prosedur sulit melindungi dari penguasa yang ingin melanggengkan kekuasaan.",
          "UUD 1945 diamandemen empat kali pada 1999-2002.",
          "Hasilnya antara lain pembatasan masa jabatan presiden dan pembentukan MK.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa konstitusi dibuat sulit diubah?",
            options: [
              "Agar tidak pernah bisa diperbaiki",
              "Agar stabil dan tidak diubah sesuka penguasa",
              "Agar hanya presiden yang bisa mengubah",
              "Tanpa alasan",
            ],
            answer: 1,
            explain: "Prosedur ketat menjaga stabilitas sekaligus mencegah perubahan gegabah.",
          },
          {
            q: "Berapa kali UUD 1945 diamandemen pada era Reformasi?",
            options: ["Dua kali", "Tiga kali", "Empat kali", "Lima kali"],
            answer: 2,
            explain: "UUD 1945 diamandemen empat kali pada 1999-2002.",
          },
          {
            q: "Manakah hasil amandemen UUD 1945?",
            options: [
              "Penetapan harga pasar",
              "Pembatasan masa jabatan presiden dua periode",
              "Penghapusan pemilu",
              "Pembubaran DPR",
            ],
            answer: 1,
            explain: "Pembatasan masa jabatan dua periode adalah hasil amandemen pertama.",
          },
          {
            q: "Apa bahaya konstitusi yang terlalu mudah diubah?",
            options: [
              "Tidak ada bahaya",
              "Penguasa bisa menghapus pembatasan kekuasaan demi kepentingannya",
              "Rakyat jadi terlalu kuat",
              "Hukum jadi terlalu stabil",
            ],
            answer: 1,
            explain: "Amandemen yang gampang membuka peluang penyalahgunaan kekuasaan.",
          },
          {
            q: "Amandemen UUD 1945 berlangsung pada rentang tahun?",
            options: ["1945-1949", "1965-1968", "1999-2002", "2009-2012"],
            answer: 2,
            explain: "Empat amandemen berlangsung pada 1999, 2000, 2001, dan 2002.",
          },
        ],
      },
    ],
  },
];
