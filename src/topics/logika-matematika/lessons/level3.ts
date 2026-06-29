import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "implikasi-jika-maka",
    levelId: "implikasi",
    order: 1,
    title: "Implikasi: Jika ... maka ...",
    summary:
      "Sebuah janji baru dianggap ingkar bila syaratnya dipenuhi tetapi hasilnya tidak muncul. Kita uji dulu kapan janji 'jika-maka' disebut bohong sebelum merumuskan aturannya.",
    durationMin: 12,
    tags: ["logika", "implikasi", "jika-maka", "tabel kebenaran"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan seorang ayah berjanji: \"Jika kamu juara kelas, maka kamu akan dibelikan sepeda.\" Kapan sang ayah disebut ingkar janji? Hanya saat anaknya benar-benar juara tetapi sepeda tak kunjung datang. Sebelum membuat aturan, ayo telusuri dulu setiap kemungkinan dari janji ini.",
      },
      {
        type: "video",
        comp: "OperatorLogika",
        title: "Video: Operator Implikasi",
        caption: "Implikasi menghubungkan sebab (hipotesis) dengan akibat (konklusi).",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sebut p = 'kamu juara kelas' dan q = 'dibelikan sepeda'. Coba mainkan empat situasi: juara lalu dibelikan, juara tetapi tak dibelikan, tidak juara tetapi tetap dibelikan, tidak juara dan tak dibelikan. Tanyakan pada dirimu: di situasi mana sang ayah benar-benar bohong? Catat dugaanmu sebelum melihat aturannya.",
      },
      {
        type: "widget",
        widget: "SimulatorOperatorLogika",
      },
      {
        type: "callout",
        tone: "info",
        title: "Membaca lambangnya",
        html: "Implikasi ditulis <strong>p &rarr; q</strong>, dibaca 'jika p maka q'. Di sini p disebut <strong>hipotesis</strong> (syarat) dan q disebut <strong>konklusi</strong> (akibat). Perhatikan: implikasi tidak menjanjikan apa pun ketika syaratnya tidak terpenuhi.",
      },
      {
        type: "classifyExercise",
        prompt: "Untuk janji 'Jika kamu juara, maka dibelikan sepeda', kelompokkan tiap situasi: apakah janji DITEPATI atau DIINGKARI?",
        buckets: ["Janji ditepati", "Janji diingkari"],
        items: [
          { text: "Juara, lalu dibelikan sepeda", bucket: "Janji ditepati" },
          { text: "Juara, tetapi tidak dibelikan sepeda", bucket: "Janji diingkari" },
          { text: "Tidak juara, tetapi tetap dibelikan sepeda", bucket: "Janji ditepati" },
          { text: "Tidak juara, dan tidak dibelikan sepeda", bucket: "Janji ditepati" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan nilai p dan q dengan nilai implikasi p → q.",
        pairs: [
          { left: "p benar, q benar", right: "p → q benar" },
          { left: "p benar, q salah", right: "p → q salah" },
          { left: "p salah, q benar", right: "p → q benar" },
          { left: "p salah, q salah", right: "p → q benar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Garansi barang elektronik",
        html: "Sebuah toko menjanjikan: \"Jika barang rusak dalam 1 tahun, maka diganti baru.\" Janji ini hanya dilanggar bila barang benar-benar rusak dalam setahun tetapi toko menolak mengganti. Jika barang tidak rusak, toko tidak melanggar apa pun, entah ia mengganti atau tidak. Implikasi bukan sekadar rumus tabel, melainkan cara kita menilai kapan sebuah janji sungguh dikhianati.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah menguji semua situasi, baru kita rumuskan: implikasi <strong>p &rarr; q hanya bernilai salah ketika p benar tetapi q salah</strong>. Pada tiga kemungkinan lainnya, implikasi bernilai benar. Saat hipotesis salah, implikasi otomatis benar karena tidak ada janji yang dilanggar.",
      },
      {
        type: "takeaways",
        items: [
          "Implikasi p → q dibaca 'jika p maka q'; p adalah hipotesis, q adalah konklusi.",
          "p → q hanya salah bila p benar dan q salah.",
          "Jika hipotesis p salah, implikasi selalu bernilai benar.",
          "Implikasi memodelkan janji bersyarat yang hanya ingkar saat syarat dipenuhi tanpa hasil.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapan implikasi p → q bernilai salah?",
            options: [
              "Saat p salah dan q salah",
              "Saat p benar dan q salah",
              "Saat p salah dan q benar",
              "Saat p benar dan q benar",
            ],
            answer: 1,
            explain: "Implikasi hanya salah ketika hipotesis benar tetapi konklusi salah.",
          },
          {
            q: "'Jika 2 + 2 = 5, maka langit hijau.' Nilai implikasi ini?",
            options: ["Salah", "Benar", "Tidak dapat ditentukan", "Bukan pernyataan"],
            answer: 1,
            explain: "Hipotesis (2 + 2 = 5) salah, jadi implikasi bernilai benar berapa pun konklusinya.",
          },
          {
            q: "Pada p → q, bagian q disebut?",
            options: ["Hipotesis", "Negasi", "Konklusi", "Konvers"],
            answer: 2,
            explain: "q adalah konklusi atau akibat; p adalah hipotesis atau syarat.",
          },
          {
            q: "Janji 'Jika hujan maka jalan basah' dilanggar ketika?",
            options: [
              "Hujan dan jalan basah",
              "Tidak hujan dan jalan kering",
              "Hujan tetapi jalan kering",
              "Tidak hujan tetapi jalan basah",
            ],
            answer: 2,
            explain: "Syarat terpenuhi (hujan) tetapi akibat tidak muncul (jalan kering).",
          },
          {
            q: "Jika p → q benar dan p benar, maka q pasti?",
            options: ["Salah", "Benar", "Tergantung", "Tidak terkait"],
            answer: 1,
            explain: "Bila implikasi benar dan hipotesis benar, konklusi tak mungkin salah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "biimplikasi",
    levelId: "implikasi",
    order: 2,
    title: "Biimplikasi: ... jika dan hanya jika ...",
    summary:
      "Ada janji dua arah yang hanya benar saat kedua sisinya seia sekata. Kita selidiki dulu kapan kesepakatan timbal balik ini terpenuhi sebelum menyimpulkan aturannya.",
    durationMin: 12,
    tags: ["logika", "biimplikasi", "ekuivalensi", "tabel kebenaran"],
    blocks: [
      {
        type: "paragraph",
        html: "\"Kamu lulus ujian jika dan hanya jika nilaimu minimal 75.\" Kalimat ini lebih ketat daripada janji biasa: ia berlaku dua arah. Lulus berarti nilaimu cukup, dan nilai cukup berarti kamu lulus. Sebelum merumuskan aturannya, ayo uji dulu kapan pernyataan dua arah ini benar.",
      },
      {
        type: "video",
        comp: "OperatorLogika",
        title: "Video: Operator Biimplikasi",
        caption: "Biimplikasi menggabungkan dua implikasi yang saling berbalik arah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sebut p = 'kamu lulus' dan q = 'nilai minimal 75'. Cobalah keempat pasangan benar-salah dan tanyakan: apakah kondisi 'lulus' dan 'nilai cukup' selalu sejalan? Kapan keduanya cocok, dan kapan mereka bertentangan? Tuliskan dugaanmu lebih dulu.",
      },
      {
        type: "widget",
        widget: "TabelKebenaranBuilder",
      },
      {
        type: "callout",
        tone: "info",
        title: "Membaca lambangnya",
        html: "Biimplikasi ditulis <strong>p &harr; q</strong>, dibaca 'p jika dan hanya jika q'. Ia sama dengan gabungan dua implikasi: <strong>(p &rarr; q) dan (q &rarr; p)</strong>. Maka biimplikasi menuntut kedua arah benar sekaligus.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pasangan nilai p dan q: apakah p ↔ q BENAR atau SALAH?",
        buckets: ["p ↔ q benar", "p ↔ q salah"],
        items: [
          { text: "p benar, q benar", bucket: "p ↔ q benar" },
          { text: "p salah, q salah", bucket: "p ↔ q benar" },
          { text: "p benar, q salah", bucket: "p ↔ q salah" },
          { text: "p salah, q benar", bucket: "p ↔ q salah" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap kalimat dengan operator logika yang tepat.",
        pairs: [
          { left: "Jika hujan maka jalan basah", right: "Implikasi (p → q)" },
          { left: "Lulus jika dan hanya jika nilai cukup", right: "Biimplikasi (p ↔ q)" },
          { left: "Hari panas dan langit cerah", right: "Konjungsi (p ∧ q)" },
          { left: "Naik bus atau naik kereta", right: "Disjungsi (p ∨ q)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lampu dan saklar",
        html: "Sebuah lampu menyala jika dan hanya jika saklarnya ditekan ke posisi ON. Bila saklar ON, lampu pasti menyala; bila lampu menyala, pasti saklarnya ON. Keduanya selalu bernilai sama: sama-sama ON atau sama-sama OFF. Inilah biimplikasi dalam wujud nyata, dan dari sinilah para insinyur memastikan dua kondisi benar-benar setara, bukan sekadar kebetulan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah menguji semua kemungkinan, baru kita rumuskan: biimplikasi <strong>p &harr; q bernilai benar ketika p dan q bernilai sama</strong> (keduanya benar atau keduanya salah), dan bernilai salah ketika nilainya berbeda. Biimplikasi adalah tanda bahwa dua pernyataan ekuivalen.",
      },
      {
        type: "takeaways",
        items: [
          "Biimplikasi p ↔ q dibaca 'p jika dan hanya jika q'.",
          "p ↔ q benar bila p dan q bernilai sama, salah bila berbeda.",
          "Biimplikasi setara dengan (p → q) dan (q → p) sekaligus.",
          "Biimplikasi menyatakan dua pernyataan saling ekuivalen atau setara.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapan p ↔ q bernilai benar?",
            options: [
              "Saat p dan q berbeda nilai",
              "Saat p dan q bernilai sama",
              "Hanya saat keduanya benar",
              "Hanya saat keduanya salah",
            ],
            answer: 1,
            explain: "Biimplikasi benar bila kedua sisi bernilai sama, baik benar maupun salah.",
          },
          {
            q: "Biimplikasi p ↔ q setara dengan?",
            options: [
              "p → q saja",
              "q → p saja",
              "(p → q) dan (q → p)",
              "(p → q) atau (q → p)",
            ],
            answer: 2,
            explain: "Biimplikasi adalah dua implikasi berlawanan arah yang berlaku bersamaan.",
          },
          {
            q: "Jika p benar dan q salah, maka p ↔ q bernilai?",
            options: ["Benar", "Salah", "Tidak tentu", "Bukan pernyataan"],
            answer: 1,
            explain: "Nilai p dan q berbeda, sehingga biimplikasi salah.",
          },
          {
            q: "'2 genap jika dan hanya jika 2 habis dibagi 2.' Nilainya?",
            options: ["Salah", "Benar", "Tergantung", "Tidak dapat dinilai"],
            answer: 1,
            explain: "Kedua sisi sama-sama benar, jadi biimplikasi benar.",
          },
          {
            q: "Simbol biimplikasi adalah?",
            options: ["→", "↔", "∧", "∨"],
            answer: 1,
            explain: "Tanda panah dua arah ↔ menyatakan 'jika dan hanya jika'.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "konvers-invers-kontraposisi",
    levelId: "implikasi",
    order: 3,
    title: "Konvers, Invers, dan Kontraposisi",
    summary:
      "Dari satu kalimat 'jika-maka' bisa lahir tiga kalimat turunan. Kita bandingkan dulu nilai kebenarannya sebelum memutuskan mana yang sungguh setara dengan aslinya.",
    durationMin: 13,
    tags: ["logika", "konvers", "invers", "kontraposisi", "ekuivalensi"],
    blocks: [
      {
        type: "paragraph",
        html: "Dari janji \"Jika hujan, maka jalan basah\" kita bisa membentuk tiga saudara: membalik arahnya, mengingkari kedua sisinya, atau melakukan keduanya. Tetapi apakah saudara-saudara ini punya makna yang sama? Sebelum menyimpulkan, ayo uji satu per satu nilai kebenarannya.",
      },
      {
        type: "video",
        comp: "TabelKebenaran",
        title: "Video: Tabel Kebenaran",
        caption: "Membandingkan implikasi dengan turunannya lewat tabel kebenaran.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil p = 'hujan' dan q = 'jalan basah'. Bentuk tiga kalimat: konvers (balik arah, q &rarr; p), invers (ingkari keduanya, &not;p &rarr; &not;q), dan kontraposisi (balik dan ingkari, &not;q &rarr; &not;p). Susun tabel kebenaran tiap kalimat dan bandingkan dengan implikasi asli. Tebak dulu: mana yang kolom nilainya persis sama dengan aslinya?",
      },
      {
        type: "widget",
        widget: "TabelKebenaranBuilder",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga turunan dari satu implikasi",
        html: "Dari implikasi <strong>p &rarr; q</strong>: <strong>konvers</strong> adalah q &rarr; p, <strong>invers</strong> adalah &not;p &rarr; &not;q, dan <strong>kontraposisi</strong> adalah &not;q &rarr; &not;p. Ketiganya disusun dengan cara membalik arah, mengingkari, atau keduanya.",
      },
      {
        type: "matchExercise",
        prompt: "Untuk implikasi 'Jika hujan (p) maka jalan basah (q)', pasangkan istilah dengan kalimatnya.",
        pairs: [
          { left: "Implikasi (p → q)", right: "Jika hujan maka jalan basah" },
          { left: "Konvers (q → p)", right: "Jika jalan basah maka hujan" },
          { left: "Invers (¬p → ¬q)", right: "Jika tidak hujan maka jalan tidak basah" },
          { left: "Kontraposisi (¬q → ¬p)", right: "Jika jalan tidak basah maka tidak hujan" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap turunan: apakah SELALU ekuivalen dengan implikasi asli p → q, atau TIDAK selalu ekuivalen?",
        buckets: ["Ekuivalen dengan p → q", "Tidak selalu ekuivalen"],
        items: [
          { text: "Kontraposisi (¬q → ¬p)", bucket: "Ekuivalen dengan p → q" },
          { text: "Konvers (q → p)", bucket: "Tidak selalu ekuivalen" },
          { text: "Invers (¬p → ¬q)", bucket: "Tidak selalu ekuivalen" },
          { text: "Invers dibandingkan konvers", bucket: "Ekuivalen dengan p → q" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kesalahan berpikir di pengadilan",
        html: "Seorang jaksa berargumen: \"Jika ia pencuri, maka ia ada di lokasi.\" Lalu ia menyimpulkan: \"Ia ada di lokasi, jadi ia pencuri.\" Itu adalah konvers, dan konvers belum tentu benar walau implikasinya benar. Banyak orang ada di lokasi tanpa menjadi pencuri. Namun kontraposisi tetap aman: \"Jika ia tidak ada di lokasi, maka ia bukan pencuri.\" Memahami mana turunan yang sah menjaga kita dari kesimpulan keliru.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah membandingkan semua tabel, baru kita rumuskan: <strong>kontraposisi (&not;q &rarr; &not;p) selalu ekuivalen dengan implikasi asli p &rarr; q</strong>. Sementara <strong>konvers dan invers tidak selalu sama</strong> nilainya dengan implikasi asli, tetapi konvers dan invers selalu ekuivalen satu sama lain.",
      },
      {
        type: "takeaways",
        items: [
          "Konvers membalik arah (q → p); invers mengingkari kedua sisi (¬p → ¬q).",
          "Kontraposisi membalik sekaligus mengingkari (¬q → ¬p).",
          "Kontraposisi selalu ekuivalen dengan implikasi aslinya.",
          "Konvers dan invers tidak selalu ekuivalen dengan aslinya, tetapi ekuivalen satu sama lain.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Turunan mana yang SELALU ekuivalen dengan p → q?",
            options: ["Konvers", "Invers", "Kontraposisi", "Negasi"],
            answer: 2,
            explain: "Hanya kontraposisi (¬q → ¬p) yang nilai kebenarannya selalu sama dengan p → q.",
          },
          {
            q: "Konvers dari 'Jika x genap maka x bilangan bulat' adalah?",
            options: [
              "Jika x bilangan bulat maka x genap",
              "Jika x tidak genap maka x bukan bilangan bulat",
              "Jika x bukan bilangan bulat maka x tidak genap",
              "Jika x genap maka x bukan bulat",
            ],
            answer: 0,
            explain: "Konvers membalik arah: q → p, yaitu 'jika x bilangan bulat maka x genap'.",
          },
          {
            q: "Kontraposisi dari p → q adalah?",
            options: ["q → p", "¬p → ¬q", "¬q → ¬p", "p → ¬q"],
            answer: 2,
            explain: "Kontraposisi membalik arah dan mengingkari kedua sisi: ¬q → ¬p.",
          },
          {
            q: "Konvers selalu ekuivalen dengan?",
            options: ["Implikasi asli", "Kontraposisi", "Invers", "Negasi"],
            answer: 2,
            explain: "Konvers dan invers selalu ekuivalen satu sama lain.",
          },
          {
            q: "Jika 'Jika ia pencuri maka ia di lokasi' benar, manakah pasti benar juga?",
            options: [
              "Jika ia di lokasi maka ia pencuri",
              "Jika ia tidak di lokasi maka ia bukan pencuri",
              "Jika ia bukan pencuri maka ia tidak di lokasi",
              "Ia pasti pencuri",
            ],
            answer: 1,
            explain: "Itu kontraposisi, yang selalu ekuivalen dengan implikasi aslinya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "implikasi-dalam-kehidupan",
    levelId: "implikasi",
    order: 4,
    title: "Implikasi dalam Kehidupan",
    summary:
      "Aturan, syarat, dan jaminan di sekitar kita sesungguhnya implikasi yang menyamar. Kita kumpulkan dulu contoh nyatanya sebelum merumuskan cara membacanya dengan tepat.",
    durationMin: 12,
    tags: ["logika", "implikasi", "penalaran", "kehidupan"],
    blocks: [
      {
        type: "paragraph",
        html: "\"Jika berusia 17 tahun, maka boleh punya KTP.\" \"Jika beli dua, maka gratis satu.\" \"Jika tidak bayar pajak, maka kena denda.\" Setiap hari kita dikelilingi janji bersyarat. Sebelum merumuskan cara membacanya, ayo kumpulkan dan uji dulu beragam implikasi nyata di sekitar kita.",
      },
      {
        type: "video",
        comp: "DeduktifInduktif",
        title: "Video: Penalaran Deduktif dan Induktif",
        caption: "Implikasi adalah tulang punggung penalaran sehari-hari.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tangkap tiga aturan di sekitarmu hari ini, lalu tulis ulang dalam bentuk 'jika p maka q'. Untuk tiap aturan, tanyakan: dalam situasi apa aturan ini dilanggar? Ingat, sebuah aturan bersyarat hanya dilanggar saat syaratnya terpenuhi tetapi akibatnya tidak terjadi.",
      },
      {
        type: "widget",
        widget: "EvaluatorProposisi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Syarat cukup dan syarat perlu",
        html: "Pada p &rarr; q, p adalah <strong>syarat cukup</strong> bagi q (jika p terpenuhi, q pasti terjadi), dan q adalah <strong>syarat perlu</strong> bagi p (tanpa q, p tak mungkin benar). Misal 'jika hujan maka jalan basah': hujan cukup untuk membasahi jalan, dan jalan basah perlu agar bisa disebut karena hujan.",
      },
      {
        type: "classifyExercise",
        prompt: "Untuk aturan 'Jika berusia minimal 17 tahun (p), maka boleh punya KTP (q)', tentukan situasi yang MELANGGAR aturan dan yang TIDAK melanggar.",
        buckets: ["Melanggar aturan", "Tidak melanggar"],
        items: [
          { text: "Berusia 17 tahun tetapi ditolak membuat KTP", bucket: "Melanggar aturan" },
          { text: "Berusia 17 tahun dan boleh membuat KTP", bucket: "Tidak melanggar" },
          { text: "Berusia 15 tahun dan tidak boleh membuat KTP", bucket: "Tidak melanggar" },
          { text: "Berusia 15 tahun tetapi diizinkan membuat KTP", bucket: "Tidak melanggar" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan kalimat sehari-hari dengan bentuk logika 'jika p maka q'-nya.",
        pairs: [
          { left: "Beli dua gratis satu", right: "Jika beli dua maka dapat gratis satu" },
          { left: "Telat bayar kena denda", right: "Jika telat bayar maka kena denda" },
          { left: "Nilai 75 ke atas lulus", right: "Jika nilai minimal 75 maka lulus" },
          { left: "Hemat listrik tagihan turun", right: "Jika hemat listrik maka tagihan turun" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membaca syarat beasiswa",
        html: "Sebuah beasiswa menulis: \"Jika IPK minimal 3,5, maka berhak mendaftar.\" Banyak siswa keliru membaca konversnya: 'kalau aku mendaftar berarti IPK-ku 3,5' atau bahkan inversnya: 'kalau IPK kurang dari 3,5 pasti ditolak untuk semua hal'. Padahal aturan itu hanya menjamin satu arah. Membaca implikasi dengan tepat menyelamatkan kita dari salah paham yang merugikan, dan menunjukkan logika bukan sekadar berhitung, melainkan cara membaca dunia dengan cermat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah mengumpulkan banyak contoh, baru kita rumuskan: aturan dan janji bersyarat di kehidupan adalah implikasi <strong>p &rarr; q</strong> yang hanya dilanggar saat syarat terpenuhi tanpa hasil. Jangan tertukar dengan konvers (q &rarr; p) atau invers (&not;p &rarr; &not;q), karena keduanya belum tentu berlaku.",
      },
      {
        type: "takeaways",
        items: [
          "Banyak aturan, syarat, dan jaminan adalah implikasi 'jika-maka' yang menyamar.",
          "Aturan bersyarat hanya dilanggar saat syarat terpenuhi tetapi hasilnya tidak ada.",
          "p adalah syarat cukup bagi q; q adalah syarat perlu bagi p.",
          "Jangan menyimpulkan konvers atau invers dari sebuah aturan tanpa bukti tambahan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Aturan 'Jika telat bayar maka kena denda' dilanggar ketika?",
            options: [
              "Telat bayar dan kena denda",
              "Telat bayar tetapi tidak kena denda",
              "Tidak telat dan tidak kena denda",
              "Tidak telat tetapi kena denda",
            ],
            answer: 1,
            explain: "Syarat terpenuhi (telat) tetapi akibat tidak terjadi (tanpa denda).",
          },
          {
            q: "Pada 'jika hujan maka jalan basah', 'hujan' berperan sebagai?",
            options: ["Syarat perlu", "Syarat cukup", "Konklusi", "Negasi"],
            answer: 1,
            explain: "Hujan adalah syarat cukup: bila terjadi, jalan pasti basah.",
          },
          {
            q: "Beasiswa: 'Jika IPK minimal 3,5 maka berhak mendaftar.' Andi mendaftar. Apa yang pasti benar?",
            options: [
              "IPK Andi pasti minimal 3,5",
              "Tidak ada yang bisa dipastikan tentang IPK Andi dari aturan ini saja",
              "IPK Andi pasti di bawah 3,5",
              "Andi pasti diterima",
            ],
            answer: 1,
            explain: "Itu menarik konvers, yang tidak dijamin oleh implikasi aslinya.",
          },
          {
            q: "Pada p → q, q disebut syarat?",
            options: ["Cukup", "Perlu", "Mustahil", "Bebas"],
            answer: 1,
            explain: "q adalah syarat perlu: tanpa q, p tak mungkin benar.",
          },
          {
            q: "Mengapa memahami implikasi penting di kehidupan?",
            options: [
              "Agar bisa menghitung lebih cepat",
              "Agar tidak salah menafsirkan aturan dan janji bersyarat",
              "Karena semua kalimat adalah implikasi",
              "Agar bisa menghafal rumus",
            ],
            answer: 1,
            explain: "Implikasi membantu kita membaca syarat dan jaminan dengan tepat tanpa salah simpul.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "ekuivalensi-implikasi",
    levelId: "implikasi",
    order: 5,
    title: "Mengubah Implikasi Menjadi 'Atau'",
    summary:
      "Ternyata 'jika p maka q' bisa dituliskan ulang tanpa kata 'jika'. Kita cocokkan dulu kolom tabelnya sebelum menyimpulkan bentuk setaranya.",
    durationMin: 13,
    tags: ["logika", "implikasi", "ekuivalensi", "disjungsi"],
    blocks: [
      {
        type: "paragraph",
        html: "\"Jika kamu melanggar, maka kamu kena sanksi.\" Petugas berkata ulang: \"Kamu tidak melanggar, atau kamu kena sanksi.\" Anehnya, kedua kalimat itu berlaku sama persis. Bisakah setiap implikasi 'jika-maka' diubah menjadi kalimat ber-'atau'? Sebelum menyimpulkan, ayo cocokkan dulu kolom tabel kebenaran keduanya.",
      },
      {
        type: "video",
        comp: "TabelKebenaran",
        title: "Video: Membandingkan Dua Kolom Tabel",
        caption: "Dua pernyataan disebut setara bila kolom hasil tabelnya sama persis.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Susun dua tabel berdampingan: satu untuk p &rarr; q, satu untuk &not;p &or; q. Isi keempat baris (B,B), (B,S), (S,B), (S,S) pada masing-masing. Lalu bandingkan baris demi baris. Tebak dulu: apakah kolom hasilnya benar-benar sama di setiap baris, atau ada yang berbeda?",
      },
      {
        type: "widget",
        widget: "TabelKebenaranBuilder",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa arti 'setara'",
        html: "Dua pernyataan disebut <strong>ekuivalen</strong> (setara) bila kolom hasil tabel kebenarannya identik di setiap baris. Ditulis dengan tanda <strong>&equiv;</strong>. Yang akan kita uji: apakah <strong>p &rarr; q &equiv; &not;p &or; q</strong>.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Banyak baris BENAR pada implikasi p → q",
        unit: " baris",
        source: "Tabel kebenaran 2 variabel (4 baris)",
        note: "Implikasi salah hanya di baris (B,S), jadi benar di 3 baris, sama seperti ¬p ∨ q.",
        data: [
          { label: "Baris BENAR", value: 3, color: "#22c55e" },
          { label: "Baris SALAH", value: 1, color: "#94a3b8" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan nilai p dan q dengan nilai ¬p ∨ q, lalu perhatikan bahwa hasilnya sama dengan p → q.",
        pairs: [
          { left: "p benar, q benar", right: "¬p ∨ q benar" },
          { left: "p benar, q salah", right: "¬p ∨ q salah" },
          { left: "p salah, q benar", right: "¬p ∨ q benar" },
          { left: "p salah, q salah", right: "¬p ∨ q benar" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Mana penulisan ulang implikasi yang BENAR (setara) dan mana yang KELIRU?",
        buckets: ["Setara", "Keliru"],
        items: [
          { text: "'Jika hujan maka basah' = 'tidak hujan atau basah'", bucket: "Setara" },
          { text: "'Jika lulus maka senang' = 'tidak lulus atau senang'", bucket: "Setara" },
          { text: "'Jika hujan maka basah' = 'hujan atau basah'", bucket: "Keliru" },
          { text: "'Jika p maka q' = 'p dan tidak q'", bucket: "Keliru" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Pada tabel kebenaran implikasi p → q, berapa baris yang bernilai BENAR dari 4 baris?",
        answer: 3,
        suffix: " baris",
        solution:
          "Implikasi salah hanya pada baris (B,S), yaitu 1 baris. Sisanya 4 − 1 = 3 baris bernilai benar. Bentuk setaranya ¬p ∨ q juga benar di 3 baris yang sama.",
        hint: "Implikasi hanya salah ketika hipotesis benar tetapi konklusi salah.",
      },
      {
        type: "case",
        title: "Studi Kasus: Menegasikan sebuah janji",
        html: "Seseorang berjanji: \"Jika kamu kerja lembur, maka kamu dapat bonus.\" Bagaimana cara menyatakan bahwa janji ini diingkari? Karena p &rarr; q setara dengan &not;p &or; q, ingkarannya adalah &not;(&not;p &or; q), yang dengan hukum De Morgan menjadi <strong>p &and; &not;q</strong>: 'kamu kerja lembur tetapi tidak dapat bonus'. Mengubah implikasi menjadi bentuk 'atau' membuat kita bisa menegasikannya dengan tepat, bukan asal menambah kata 'tidak'.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah mencocokkan tabelnya, baru kita kunci: <strong>p &rarr; q &equiv; &not;p &or; q</strong>. Setiap implikasi dapat ditulis ulang sebagai disjungsi dengan menegasikan hipotesis. Akibatnya, ingkaran implikasi adalah <strong>&not;(p &rarr; q) &equiv; p &and; &not;q</strong>, yaitu hipotesis benar tetapi konklusi salah. Inilah satu-satunya keadaan yang membuat implikasi gagal.",
      },
      {
        type: "takeaways",
        items: [
          "Dua pernyataan setara bila kolom hasil tabel kebenarannya sama di setiap baris.",
          "p → q setara dengan ¬p ∨ q (negasikan hipotesis, lalu pakai 'atau').",
          "Ingkaran implikasi: ¬(p → q) setara dengan p ∧ ¬q.",
          "Implikasi gagal hanya ketika hipotesis benar tetapi konklusi salah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bentuk yang setara dengan p → q adalah?",
            options: ["p ∧ q", "¬p ∨ q", "p ∨ ¬q", "¬p ∧ q"],
            answer: 1,
            explain: "Implikasi setara dengan disjungsi: negasikan hipotesis lalu 'atau' konklusi.",
          },
          {
            q: "'Jika lapar maka makan' setara dengan?",
            options: [
              "Tidak lapar atau makan",
              "Lapar atau makan",
              "Lapar dan tidak makan",
              "Tidak lapar dan makan",
            ],
            answer: 0,
            explain: "p → q ≡ ¬p ∨ q, yaitu 'tidak lapar atau makan'.",
          },
          {
            q: "Ingkaran dari p → q adalah?",
            options: ["¬p → ¬q", "p ∧ ¬q", "q → p", "¬p ∨ q"],
            answer: 1,
            explain: "¬(p → q) ≡ p ∧ ¬q: hipotesis benar tetapi konklusi salah.",
          },
          {
            q: "Implikasi p → q bernilai salah pada berapa baris dari 4 baris tabel?",
            options: ["0", "1", "2", "3"],
            answer: 1,
            explain: "Hanya satu baris, yaitu (B,S).",
          },
          {
            q: "Dua pernyataan disebut ekuivalen bila?",
            options: [
              "Jumlah katanya sama",
              "Kolom hasil tabel kebenarannya sama di setiap baris",
              "Keduanya memakai kata 'jika'",
              "Keduanya selalu benar",
            ],
            answer: 1,
            explain: "Ekuivalensi berarti nilai kebenarannya identik untuk setiap kemungkinan.",
          },
        ],
      },
    ],
  },
];
