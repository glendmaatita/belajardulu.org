import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "pembagian-kekuasaan-trias-politica",
    levelId: "kekuasaan",
    order: 1,
    title: "Pembagian Kekuasaan (Trias Politica)",
    summary:
      "Agar kekuasaan tidak menumpuk di satu tangan, ia dibagi tiga: legislatif, eksekutif, dan yudikatif, yang saling mengawasi.",
    durationMin: 14,
    tags: ["kekuasaan", "trias politica", "montesquieu", "checks and balances"],
    blocks: [
      {
        type: "paragraph",
        html: "Kekuasaan yang menumpuk di satu tangan cenderung disalahgunakan. Untuk mencegahnya, filsuf Prancis <strong>Montesquieu</strong> menggagas <strong>trias politica</strong>: kekuasaan dibagi menjadi tiga cabang yang terpisah dan saling mengawasi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga cabang kekuasaan",
        html: "<strong>Legislatif</strong> membuat undang-undang (di Indonesia: DPR). <strong>Eksekutif</strong> menjalankannya (Presiden dan kabinet). <strong>Yudikatif</strong> mengadili pelanggaran (Mahkamah Agung dan Mahkamah Konstitusi). Ketiganya saling menahan lewat <em>checks and balances</em>.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Matikan satu per satu pilar pengawasan dan lihat bagaimana kekuasaan mulai menumpuk serta skor kesehatan demokrasi merosot.",
      },
      { type: "widget", widget: "SimulatorTriasPolitica" },
      {
        type: "video",
        comp: "TriasPoliticaVideo",
        title: "Trias Politica",
        caption: "Kekuasaan dibagi tiga agar tak ada yang berkuasa mutlak, gagasan Montesquieu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Montesquieu_-_Versailles_MV_2976.png?width=400",
        alt: "Lukisan potret Montesquieu, filsuf Prancis",
        caption: "Montesquieu (1689-1755), penggagas pembagian kekuasaan dalam The Spirit of the Laws (1748).",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Risiko Penyalahgunaan vs Jumlah Cabang Independen (ilustrasi)",
        unit: "risiko penyalahgunaan (relatif)",
        source: "ilustrasi edukatif konsep pembagian kekuasaan",
        note: "Makin sedikit cabang yang independen, makin tinggi risiko kekuasaan disalahgunakan.",
        data: [
          { label: "3 cabang independen", value: 20, color: "#34d399" },
          { label: "2 cabang", value: 50, color: "#fbbf24" },
          { label: "1 cabang (terpusat)", value: 95, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mahkamah membatalkan undang-undang",
        html: "Di Indonesia, <strong>Mahkamah Konstitusi</strong> berwenang menguji apakah sebuah undang-undang bertentangan dengan konstitusi. Bila ya, undang-undang itu bisa dibatalkan, meski sudah disahkan DPR dan pemerintah. Ini contoh nyata <strong>checks and balances</strong>: cabang yudikatif menahan cabang legislatif dan eksekutif. Tanpa mekanisme ini, mayoritas di parlemen bisa membuat aturan apa pun tanpa rem, termasuk yang melanggar hak warga.",
      },
      {
        type: "case",
        title: "Sejarah: Montesquieu dan The Spirit of the Laws (1748)",
        html: "Pada <strong>1748</strong>, Montesquieu menerbitkan <em>The Spirit of the Laws</em>, tempat ia merumuskan pembagian kekuasaan. Ia belajar dari sejarah Roma dan praktik Inggris, lalu menyimpulkan bahwa <strong>kebebasan hanya terjaga bila kekuasaan tidak menumpuk</strong>. Gagasannya sangat memengaruhi para perancang Konstitusi Amerika <strong>1787</strong>, yang membangun sistem checks and balances ketat. Hingga kini, trias politica menjadi cetak biru hampir semua negara demokrasi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah RUU butuh dukungan minimal 50% + 1 dari 575 anggota DPR untuk lolos. Berapa suara minimal yang dibutuhkan?",
        answer: 288,
        tolerance: 0,
        suffix: "suara",
        solution:
          "Setengah dari 575 adalah 287,5; ditambah satu menjadi 288 (dibulatkan ke atas dari mayoritas). Jadi minimal <strong>288 suara</strong>. Aturan mayoritas memastikan keputusan didukung lebih dari separuh wakil.",
        hint: "Hitung lebih dari setengah jumlah anggota.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan cabang kekuasaan dengan tugas dan lembaganya di Indonesia.",
        pairs: [
          { left: "Legislatif", right: "Membuat undang-undang (DPR)" },
          { left: "Eksekutif", right: "Menjalankan undang-undang (Presiden)" },
          { left: "Yudikatif", right: "Mengadili dan menguji hukum (MA & MK)" },
          { left: "Checks and balances", right: "Tiap cabang menahan cabang lain" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kekuasaan dibagi tiga agar tidak menumpuk dan disalahgunakan.",
          "Legislatif membuat hukum, eksekutif menjalankan, yudikatif mengadili.",
          "Checks and balances membuat tiap cabang bisa menahan cabang lain.",
          "Mahkamah Konstitusi bisa membatalkan undang-undang yang melanggar konstitusi.",
          "Montesquieu (1748) merumuskan trias politica yang kini jadi cetak biru demokrasi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa kekuasaan dibagi tiga?",
            options: [
              "Agar pekerjaan lebih banyak",
              "Agar kekuasaan tidak menumpuk dan disalahgunakan",
              "Agar lebih mahal",
              "Agar rakyat bingung",
            ],
            answer: 1,
            explain: "Pembagian kekuasaan mencegah penumpukan dan penyalahgunaan.",
          },
          {
            q: "Cabang mana yang membuat undang-undang?",
            options: ["Eksekutif", "Legislatif", "Yudikatif", "Militer"],
            answer: 1,
            explain: "Legislatif (di Indonesia DPR) bertugas membuat undang-undang.",
          },
          {
            q: "Apa contoh checks and balances?",
            options: [
              "Presiden membuat semua undang-undang",
              "Mahkamah membatalkan undang-undang yang melanggar konstitusi",
              "DPR mengadili perkara",
              "Militer memilih presiden",
            ],
            answer: 1,
            explain: "Yudikatif menahan legislatif/eksekutif dengan menguji undang-undang.",
          },
          {
            q: "Siapa penggagas trias politica?",
            options: ["John Locke", "Montesquieu", "Rousseau", "Aristoteles"],
            answer: 1,
            explain: "Montesquieu merumuskannya dalam The Spirit of the Laws (1748).",
          },
          {
            q: "Mayoritas dari 575 anggota DPR minimal berapa suara?",
            options: ["287", "288", "300", "575"],
            answer: 1,
            explain: "Setengah 575 adalah 287,5; mayoritas berarti minimal 288.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cabang-legislatif",
    levelId: "kekuasaan",
    order: 2,
    title: "Cabang Legislatif",
    summary:
      "Cabang yang membuat undang-undang. Di Indonesia diwakili DPR dengan tiga fungsi inti: legislasi, anggaran, dan pengawasan.",
    durationMin: 14,
    tags: ["legislatif", "dpr", "mpr", "fungsi anggaran", "pengawasan"],
    blocks: [
      {
        type: "paragraph",
        html: "Cabang <strong>legislatif</strong> adalah pembuat undang-undang. Di Indonesia, peran ini terutama dipegang <strong>DPR</strong> (Dewan Perwakilan Rakyat). Bersama DPD, anggota DPR juga membentuk <strong>MPR</strong>, lembaga yang berwenang mengubah dan menetapkan UUD.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga fungsi DPR",
        html: "<strong>Fungsi legislasi</strong>: membahas dan mengesahkan undang-undang. <strong>Fungsi anggaran</strong>: menyetujui APBN bersama presiden. <strong>Fungsi pengawasan</strong>: mengawasi jalannya pemerintahan, termasuk memanggil menteri. Ketiganya membuat DPR menjadi penyeimbang kekuasaan eksekutif.",
      },
      {
        type: "callout",
        tone: "info",
        title: "DPR bukan satu-satunya",
        html: "Selain DPR ada <strong>DPD</strong> (Dewan Perwakilan Daerah) yang mewakili provinsi, dan <strong>DPRD</strong> di tingkat daerah. Tetapi kewenangan membuat undang-undang nasional ada pada DPR bersama presiden.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat apa yang terjadi pada keseimbangan kekuasaan bila fungsi pengawasan legislatif dimatikan.",
      },
      { type: "widget", widget: "SimulatorTriasPolitica" },
      {
        type: "video",
        comp: "ChecksBalancesVideo",
        title: "Checks and Balances",
        caption: "Legislatif menahan eksekutif lewat fungsi anggaran dan pengawasan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Inside_the_D%C3%A1il_-_The_Irish_Parliament_Chamber.jpg?width=400",
        alt: "Ruang sidang parlemen dengan deretan kursi anggota dewan",
        caption: "Ruang sidang parlemen, tempat para wakil rakyat membahas dan mengesahkan undang-undang.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Komposisi MPR Indonesia (periode 2024-2029)",
        unit: "jumlah anggota",
        source: "UUD 1945 dan ketentuan KPU tentang kursi DPR dan DPD",
        note: "MPR terdiri dari seluruh anggota DPR ditambah seluruh anggota DPD.",
        data: [
          { label: "DPR (580 kursi)", value: 580, color: "#60a5fa" },
          { label: "DPD (152 kursi)", value: 152, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: DPR menahan anggaran",
        html: "Setiap tahun pemerintah mengajukan rancangan <strong>APBN</strong> ke DPR. Jika DPR menilai sebuah pos belanja tidak wajar, DPR bisa menolak atau memintanya direvisi sebelum disetujui. Karena pemerintah tidak bisa membelanjakan uang negara tanpa persetujuan DPR, fungsi anggaran ini menjadi rem nyata bagi eksekutif. Inilah salah satu bentuk checks and balances yang paling kuat.",
      },
      {
        type: "case",
        title: "Sejarah: KNIP, parlemen pertama Indonesia (1945)",
        html: "Pada <strong>29 Agustus 1945</strong>, hanya beberapa hari setelah proklamasi, dibentuk <strong>Komite Nasional Indonesia Pusat (KNIP)</strong>. Lewat <strong>Maklumat 16 Oktober 1945</strong>, KNIP diberi kewenangan legislatif, ikut menetapkan garis besar haluan negara bersama presiden. KNIP menjadi cikal bakal DPR. Peristiwa ini menunjukkan bahwa sejak awal, para pendiri bangsa ingin kekuasaan membuat hukum tidak hanya di tangan presiden.",
      },
      {
        type: "calcExercise",
        prompt:
          "MPR beranggotakan seluruh anggota DPR (580) ditambah seluruh anggota DPD (152). Berapa total anggota MPR?",
        answer: 732,
        tolerance: 0,
        suffix: "anggota",
        solution:
          "MPR = DPR + DPD = 580 + 152 = <strong>732 anggota</strong>. Karena DPR mewakili rakyat lewat partai dan DPD mewakili daerah, MPR menyatukan dua jenis perwakilan dalam satu lembaga.",
        hint: "Jumlahkan kursi DPR dan kursi DPD.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan kegiatan berikut sesuai tiga fungsi DPR.",
        buckets: ["Fungsi Legislasi", "Fungsi Anggaran", "Fungsi Pengawasan"],
        items: [
          { text: "Membahas dan mengesahkan rancangan undang-undang", bucket: "Fungsi Legislasi" },
          { text: "Menyetujui APBN yang diajukan pemerintah", bucket: "Fungsi Anggaran" },
          { text: "Memanggil menteri untuk dimintai keterangan", bucket: "Fungsi Pengawasan" },
          { text: "Menetapkan pagu belanja kementerian", bucket: "Fungsi Anggaran" },
          { text: "Membentuk panitia khusus menyelidiki kebijakan", bucket: "Fungsi Pengawasan" },
          { text: "Mengubah pasal dalam sebuah undang-undang", bucket: "Fungsi Legislasi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Legislatif adalah cabang pembuat undang-undang, di Indonesia terutama DPR.",
          "DPR punya tiga fungsi: legislasi, anggaran, dan pengawasan.",
          "MPR terdiri dari seluruh anggota DPR (580) dan DPD (152), total 732.",
          "Fungsi anggaran membuat DPR mampu menahan belanja pemerintah.",
          "KNIP (1945) adalah cikal bakal parlemen Indonesia.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tugas utama cabang legislatif?",
            options: [
              "Menjalankan pemerintahan",
              "Membuat undang-undang",
              "Mengadili perkara",
              "Mencetak uang",
            ],
            answer: 1,
            explain: "Legislatif adalah cabang pembuat undang-undang.",
          },
          {
            q: "Manakah yang BUKAN fungsi DPR?",
            options: ["Legislasi", "Anggaran", "Pengawasan", "Mengadili terdakwa"],
            answer: 3,
            explain: "Mengadili adalah tugas yudikatif, bukan DPR.",
          },
          {
            q: "Lembaga apa yang berwenang mengubah UUD?",
            options: ["DPR", "MPR", "DPD", "Presiden"],
            answer: 1,
            explain: "MPR berwenang mengubah dan menetapkan UUD.",
          },
          {
            q: "Berapa total anggota MPR bila DPR 580 dan DPD 152?",
            options: ["580", "152", "732", "428"],
            answer: 2,
            explain: "580 + 152 = 732 anggota.",
          },
          {
            q: "Cikal bakal parlemen Indonesia yang dibentuk 1945 adalah?",
            options: ["Volksraad", "KNIP", "BPUPKI", "PPKI"],
            answer: 1,
            explain: "KNIP dibentuk 29 Agustus 1945 dan diberi fungsi legislatif.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cabang-eksekutif",
    levelId: "kekuasaan",
    order: 3,
    title: "Cabang Eksekutif",
    summary:
      "Cabang yang menjalankan undang-undang dan memimpin pemerintahan. Di Indonesia dipegang Presiden, yang masa jabatannya dibatasi dua periode.",
    durationMin: 14,
    tags: ["eksekutif", "presiden", "kabinet", "masa jabatan", "reformasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Cabang <strong>eksekutif</strong> bertugas menjalankan undang-undang dan memimpin pemerintahan sehari-hari. Di Indonesia, kekuasaan ini dipegang <strong>Presiden</strong> yang dibantu wakil presiden dan para menteri dalam kabinet.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Batas dua periode",
        html: "Setelah amandemen UUD 1945, presiden Indonesia hanya boleh menjabat <strong>maksimal dua periode</strong>, masing-masing lima tahun. Aturan ini lahir dari pengalaman pahit kekuasaan yang terlalu lama. Membatasi masa jabatan adalah bentuk checks and balances terhadap eksekutif.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Eksekutif paling mudah menumpuk kuasa",
        html: "Karena memegang aparat, anggaran, dan birokrasi, cabang eksekutif paling berpotensi menumpuk kekuasaan. Itulah mengapa legislatif dan yudikatif perlu kuat untuk mengimbanginya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Perkuat hanya cabang eksekutif dan lemahkan pengawasan, lalu amati skor kesehatan demokrasi.",
      },
      { type: "widget", widget: "SimulatorTriasPolitica" },
      {
        type: "video",
        comp: "ChecksBalancesVideo",
        title: "Checks and Balances",
        caption: "Batas dua periode dan pengawasan DPR menahan kekuasaan eksekutif.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/DPR_sahkan_RUU.jpg?width=400",
        alt: "Suasana rapat pengesahan rancangan undang-undang di DPR",
        caption: "Undang-undang yang dibahas DPR dijalankan oleh pemerintah sebagai cabang eksekutif.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Lama menjabat Presiden Indonesia",
        unit: "tahun menjabat",
        source: "data sejarah ketatanegaraan Indonesia",
        note: "Sebelum amandemen tidak ada batas; sesudahnya presiden maksimal dua periode atau 10 tahun.",
        data: [
          { label: "Soekarno (1945-1967)", value: 22, color: "#fbbf24" },
          { label: "Soeharto (1967-1998)", value: 31, color: "#f87171" },
          { label: "SBY (2004-2014)", value: 10, color: "#60a5fa" },
          { label: "Joko Widodo (2014-2024)", value: 10, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Presiden menjalankan, bukan membuat hukum",
        html: "Ketika DPR mengesahkan undang-undang pajak baru, presiden dan jajarannya yang harus menyiapkan aturan pelaksana, sistem, dan petugas agar undang-undang itu berjalan. Presiden bisa mengusulkan RUU, tetapi tidak bisa memberlakukannya sendiri tanpa persetujuan DPR. Pembagian peran ini mencegah satu orang sekaligus membuat dan menjalankan hukum.",
      },
      {
        type: "case",
        title: "Sejarah: Reformasi 1998 dan batas masa jabatan",
        html: "Presiden <strong>Soeharto</strong> berkuasa lebih dari <strong>30 tahun (1967-1998)</strong> karena saat itu tidak ada batas periode jabatan. Setelah <strong>Reformasi 1998</strong>, UUD 1945 diamandemen (1999) dan Pasal 7 ditegaskan: presiden dan wakil presiden hanya boleh dipilih untuk satu kali masa jabatan berikutnya, jadi maksimal dua periode. Pembatasan ini menjadi salah satu warisan terpenting Reformasi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Satu periode jabatan presiden adalah 5 tahun, dan maksimal dua periode. Berapa tahun paling lama seorang presiden boleh menjabat?",
        answer: 10,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "Dua periode x 5 tahun = <strong>10 tahun</strong>. Batas ini memastikan tidak ada presiden yang berkuasa terlalu lama seperti sebelum Reformasi.",
        hint: "Kalikan jumlah periode dengan lama satu periode.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan peran eksekutif dengan deskripsinya.",
        pairs: [
          { left: "Presiden", right: "Kepala negara dan kepala pemerintahan" },
          { left: "Menteri", right: "Memimpin satu bidang pemerintahan" },
          { left: "Kabinet", right: "Kumpulan menteri pembantu presiden" },
          { left: "Aturan pelaksana", right: "Petunjuk teknis menjalankan undang-undang" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Eksekutif menjalankan undang-undang dan memimpin pemerintahan.",
          "Di Indonesia, kekuasaan eksekutif dipegang Presiden dan kabinet.",
          "Presiden hanya boleh menjabat maksimal dua periode atau 10 tahun.",
          "Eksekutif paling berpotensi menumpuk kuasa sehingga perlu diimbangi.",
          "Batas masa jabatan adalah warisan Reformasi 1998.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tugas utama cabang eksekutif?",
            options: [
              "Membuat undang-undang",
              "Menjalankan undang-undang dan memimpin pemerintahan",
              "Mengadili perkara",
              "Mengubah UUD",
            ],
            answer: 1,
            explain: "Eksekutif menjalankan undang-undang dan memimpin pemerintahan.",
          },
          {
            q: "Berapa periode maksimal seorang presiden Indonesia menjabat?",
            options: ["Satu periode", "Dua periode", "Tiga periode", "Tanpa batas"],
            answer: 1,
            explain: "Setelah amandemen, presiden maksimal dua periode.",
          },
          {
            q: "Berapa tahun paling lama seorang presiden boleh menjabat?",
            options: ["5 tahun", "8 tahun", "10 tahun", "15 tahun"],
            answer: 2,
            explain: "Dua periode x 5 tahun = 10 tahun.",
          },
          {
            q: "Mengapa eksekutif perlu diimbangi cabang lain?",
            options: [
              "Karena paling lemah",
              "Karena memegang aparat dan anggaran sehingga rawan menumpuk kuasa",
              "Karena tidak punya tugas",
              "Karena dipilih rakyat",
            ],
            answer: 1,
            explain: "Eksekutif memegang birokrasi dan anggaran sehingga rawan menumpuk kuasa.",
          },
          {
            q: "Pembatasan masa jabatan presiden adalah warisan peristiwa?",
            options: ["Sumpah Pemuda 1928", "Proklamasi 1945", "Reformasi 1998", "Pemilu 1955"],
            answer: 2,
            explain: "Batas dua periode lahir dari amandemen UUD pasca-Reformasi 1998.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cabang-yudikatif-judicial-review",
    levelId: "kekuasaan",
    order: 4,
    title: "Cabang Yudikatif & Judicial Review",
    summary:
      "Cabang yang mengadili dan menjaga konstitusi. Lewat judicial review, pengadilan bisa membatalkan undang-undang yang melanggar konstitusi.",
    durationMin: 15,
    tags: ["yudikatif", "judicial review", "mahkamah konstitusi", "mahkamah agung"],
    blocks: [
      {
        type: "paragraph",
        html: "Cabang <strong>yudikatif</strong> bertugas mengadili dan menafsirkan hukum. Di Indonesia, puncaknya ada di <strong>Mahkamah Agung (MA)</strong> untuk perkara umum dan <strong>Mahkamah Konstitusi (MK)</strong> untuk soal konstitusi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Apa itu judicial review?",
        html: "<strong>Judicial review</strong> adalah kewenangan pengadilan menguji apakah sebuah undang-undang bertentangan dengan konstitusi. Jika bertentangan, undang-undang itu bisa dibatalkan, meski sudah disahkan DPR dan presiden. Inilah rem terakhir agar kekuasaan tetap tunduk pada konstitusi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "MA dan MK berbagi tugas",
        html: "<strong>MA</strong> menguji peraturan di bawah undang-undang dan menjadi puncak peradilan umum. <strong>MK</strong> menguji undang-undang terhadap UUD, memutus sengketa kewenangan lembaga negara, dan menyelesaikan perselisihan hasil pemilu.",
      },
      {
        type: "video",
        comp: "ChecksBalancesVideo",
        title: "Checks and Balances",
        caption: "Yudikatif menahan legislatif dan eksekutif lewat judicial review.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Montesquieu_-_Versailles_MV_2976.png?width=400",
        alt: "Lukisan potret Montesquieu, filsuf Prancis",
        caption: "Montesquieu menekankan bahwa kekuasaan mengadili harus terpisah dari pembuat dan pelaksana hukum.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Asal usul 9 hakim Mahkamah Konstitusi RI",
        unit: "jumlah hakim",
        source: "UUD 1945 Pasal 24C",
        note: "Sembilan hakim MK diajukan sama rata oleh tiga cabang agar seimbang dan independen.",
        data: [
          { label: "Diajukan Mahkamah Agung", value: 3, color: "#a78bfa" },
          { label: "Diajukan DPR", value: 3, color: "#60a5fa" },
          { label: "Diajukan Presiden", value: 3, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: MK membatalkan pasal yang merugikan warga",
        html: "Bila DPR dan pemerintah mengesahkan undang-undang yang dianggap melanggar hak konstitusional, warga dapat mengajukan <strong>pengujian undang-undang</strong> ke MK. Jika MK setuju bahwa pasal itu bertentangan dengan UUD, pasal tersebut dinyatakan tidak berlaku. Dengan begitu, mayoritas di parlemen tidak bisa membuat aturan apa pun tanpa rem konstitusi.",
      },
      {
        type: "case",
        title: "Sejarah: Marbury vs Madison (1803) dan lahirnya MK RI (2003)",
        html: "Pada <strong>1803</strong>, Mahkamah Agung Amerika dalam perkara <strong>Marbury vs Madison</strong>, di bawah Ketua Hakim John Marshall, untuk pertama kalinya menyatakan sebuah undang-undang tidak berlaku karena melanggar konstitusi. Inilah kelahiran <strong>judicial review</strong>. Gagasan ini menyebar ke banyak negara. Indonesia membentuk <strong>Mahkamah Konstitusi pada 2003</strong> sebagai hasil amandemen UUD 1945, dengan kewenangan menguji undang-undang terhadap konstitusi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Mahkamah Konstitusi RI beranggotakan 9 hakim yang diajukan sama rata oleh 3 lembaga (MA, DPR, Presiden). Berapa hakim yang diajukan tiap lembaga?",
        answer: 3,
        tolerance: 0,
        suffix: "hakim",
        solution:
          "9 hakim dibagi 3 lembaga = <strong>3 hakim</strong> per lembaga. Pembagian yang sama rata ini menjaga MK tetap seimbang dan tidak dikuasai satu cabang saja.",
        hint: "Bagi jumlah hakim dengan jumlah lembaga pengusul.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan lembaga atau istilah yudikatif dengan perannya.",
        pairs: [
          { left: "Mahkamah Konstitusi", right: "Menguji undang-undang terhadap UUD" },
          { left: "Mahkamah Agung", right: "Puncak peradilan umum dan kasasi" },
          { left: "Judicial review", right: "Membatalkan hukum yang melanggar konstitusi" },
          { left: "Marbury vs Madison", right: "Perkara 1803 yang melahirkan judicial review" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Yudikatif mengadili dan menafsirkan hukum, puncaknya MA dan MK.",
          "Judicial review memungkinkan pengadilan membatalkan undang-undang yang melanggar konstitusi.",
          "MK menguji undang-undang terhadap UUD; MA memimpin peradilan umum.",
          "Sembilan hakim MK diajukan sama rata oleh MA, DPR, dan Presiden.",
          "Judicial review lahir dari Marbury vs Madison (1803); MK RI dibentuk 2003.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tugas utama cabang yudikatif?",
            options: [
              "Membuat undang-undang",
              "Menjalankan pemerintahan",
              "Mengadili dan menafsirkan hukum",
              "Menyusun anggaran",
            ],
            answer: 2,
            explain: "Yudikatif bertugas mengadili dan menafsirkan hukum.",
          },
          {
            q: "Apa itu judicial review?",
            options: [
              "Memilih presiden",
              "Menguji apakah undang-undang melanggar konstitusi",
              "Menyusun APBN",
              "Mengangkat menteri",
            ],
            answer: 1,
            explain: "Judicial review menguji undang-undang terhadap konstitusi.",
          },
          {
            q: "Lembaga apa yang menguji undang-undang terhadap UUD di Indonesia?",
            options: ["DPR", "Mahkamah Konstitusi", "Presiden", "Kepolisian"],
            answer: 1,
            explain: "MK berwenang menguji undang-undang terhadap UUD.",
          },
          {
            q: "Perkara apa yang melahirkan judicial review pada 1803?",
            options: ["Marbury vs Madison", "Brown vs Board", "Roe vs Wade", "Miranda vs Arizona"],
            answer: 0,
            explain: "Marbury vs Madison (1803) pertama kali menyatakan UU melanggar konstitusi.",
          },
          {
            q: "Tahun berapa Mahkamah Konstitusi RI dibentuk?",
            options: ["1945", "1998", "2003", "2009"],
            answer: 2,
            explain: "MK RI dibentuk pada 2003 hasil amandemen UUD 1945.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "lembaga-negara-independen",
    levelId: "kekuasaan",
    order: 5,
    title: "Lembaga Negara Independen",
    summary:
      "Selain tiga cabang utama, demokrasi modern punya lembaga independen seperti Bank Indonesia, KPK, Ombudsman, dan Komnas HAM yang menjaga bidang khusus.",
    durationMin: 14,
    tags: ["lembaga independen", "bank indonesia", "kpk", "ombudsman", "komnas ham"],
    blocks: [
      {
        type: "paragraph",
        html: "Trias politica adalah kerangka dasar, tetapi negara modern butuh lembaga khusus yang bekerja <strong>independen</strong> dari kepentingan politik sesaat. Contohnya <strong>Bank Indonesia</strong>, <strong>KPK</strong>, <strong>Ombudsman</strong>, dan <strong>Komnas HAM</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Mengapa harus independen?",
        html: "Beberapa tugas akan rusak bila ditarik kepentingan politik. Bank sentral yang dikuasai politisi bisa mencetak uang demi popularitas dan memicu inflasi. Lembaga antikorupsi yang tunduk pada penguasa tak akan berani mengusut pejabat. Karena itu lembaga ini sengaja dibuat <strong>independen</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Independen, bukan tanpa kontrol",
        html: "Lembaga independen tetap diawasi: mereka melapor ke publik dan DPR, anggarannya diperiksa, dan pimpinannya dipilih lewat seleksi terbuka. Independensi berarti bebas dari intervensi, bukan bebas dari pertanggungjawaban.",
      },
      {
        type: "video",
        comp: "TriasPoliticaVideo",
        title: "Trias Politica",
        caption: "Lembaga independen melengkapi tiga cabang utama kekuasaan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Inside_the_D%C3%A1il_-_The_Irish_Parliament_Chamber.jpg?width=400",
        alt: "Ruang sidang parlemen tempat undang-undang dibahas",
        caption: "Lembaga independen lahir dari undang-undang yang dibahas parlemen, lalu bekerja bebas dari intervensi.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Usia lembaga independen Indonesia (per 2024)",
        unit: "tahun",
        source: "tahun pembentukan menurut undang-undang dan keputusan masing-masing lembaga",
        note: "Komnas HAM adalah yang tertua; OJK termasuk paling muda.",
        data: [
          { label: "Komnas HAM (1993)", value: 31, color: "#a78bfa" },
          { label: "BI independen (1999)", value: 25, color: "#34d399" },
          { label: "Ombudsman (2000)", value: 24, color: "#60a5fa" },
          { label: "KPK (2002)", value: 22, color: "#f87171" },
          { label: "OJK (2011)", value: 13, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bank Indonesia menjaga nilai rupiah",
        html: "Bayangkan menjelang pemilu pemerintah ingin mencetak banyak uang agar bisa membagikan bantuan. Bila Bank Indonesia tunduk, jumlah uang beredar melonjak dan harga barang ikut melambung. Karena <strong>BI bersifat independen</strong>, ia bisa menolak permintaan itu dan tetap fokus menjaga inflasi serta nilai rupiah. Independensi inilah yang melindungi tabungan rakyat dari godaan politik jangka pendek.",
      },
      {
        type: "case",
        title: "Sejarah: KPK lahir pada 2002",
        html: "Setelah Reformasi, korupsi dinilai sudah mengakar dan sulit diberantas lewat lembaga biasa. Maka lewat <strong>Undang-Undang Nomor 30 Tahun 2002</strong>, dibentuklah <strong>Komisi Pemberantasan Korupsi (KPK)</strong> sebagai lembaga independen, dengan pimpinan pertama dilantik pada 2003. KPK diberi kewenangan menyelidik, menyidik, dan menuntut perkara korupsi tanpa bisa dihentikan oleh penguasa. Pembentukannya menandai babak baru pemberantasan korupsi di Indonesia.",
      },
      {
        type: "calcExercise",
        prompt:
          "Komnas HAM berdiri pada 1993 dan OJK pada 2011. Berapa selisih tahun antara keduanya?",
        answer: 18,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "2011 - 1993 = <strong>18 tahun</strong>. Selisih ini menunjukkan bahwa lembaga independen dibentuk bertahap sesuai kebutuhan zaman, dari isu hak asasi hingga pengawasan jasa keuangan.",
        hint: "Kurangkan tahun berdiri yang lebih awal dari yang lebih akhir.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tugas lembaga independen berikut sesuai bidangnya.",
        buckets: ["Bidang Ekonomi & Keuangan", "Bidang Hukum & Pengawasan"],
        items: [
          { text: "Bank Indonesia menjaga nilai rupiah dan inflasi", bucket: "Bidang Ekonomi & Keuangan" },
          { text: "OJK mengawasi bank dan pasar modal", bucket: "Bidang Ekonomi & Keuangan" },
          { text: "OJK melindungi konsumen jasa keuangan", bucket: "Bidang Ekonomi & Keuangan" },
          { text: "KPK memberantas tindak pidana korupsi", bucket: "Bidang Hukum & Pengawasan" },
          { text: "Ombudsman mengawasi pelayanan publik", bucket: "Bidang Hukum & Pengawasan" },
          { text: "Komnas HAM membela hak asasi manusia", bucket: "Bidang Hukum & Pengawasan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Demokrasi modern melengkapi tiga cabang dengan lembaga independen.",
          "Bank Indonesia, KPK, Ombudsman, dan Komnas HAM bekerja bebas dari intervensi politik.",
          "Independensi melindungi tugas penting dari kepentingan sesaat.",
          "Independen bukan berarti tanpa pengawasan; mereka tetap bertanggung jawab ke publik dan DPR.",
          "KPK dibentuk lewat UU Nomor 30 Tahun 2002.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa Bank Indonesia dibuat independen?",
            options: [
              "Agar bisa dikuasai presiden",
              "Agar tidak mudah ditarik kepentingan politik dan dapat menjaga rupiah",
              "Agar bisa mencetak uang sebanyak-banyaknya",
              "Agar tidak diawasi siapa pun",
            ],
            answer: 1,
            explain: "Independensi menjaga BI dari godaan politik yang bisa memicu inflasi.",
          },
          {
            q: "Manakah lembaga negara independen?",
            options: ["DPR", "Mahkamah Agung", "KPK", "Kementerian Keuangan"],
            answer: 2,
            explain: "KPK adalah lembaga independen pemberantas korupsi.",
          },
          {
            q: "Apa arti independen di sini?",
            options: [
              "Bebas dari intervensi, tetapi tetap bertanggung jawab",
              "Bebas tanpa pengawasan apa pun",
              "Tunduk penuh pada presiden",
              "Hanya melapor ke partai",
            ],
            answer: 0,
            explain: "Independen berarti bebas intervensi, namun tetap dapat dipertanggungjawabkan.",
          },
          {
            q: "Tahun berapa KPK dibentuk?",
            options: ["1998", "2000", "2002", "2009"],
            answer: 2,
            explain: "KPK dibentuk lewat UU Nomor 30 Tahun 2002.",
          },
          {
            q: "Komnas HAM (1993) dan OJK (2011) berselisih berapa tahun?",
            options: ["8 tahun", "18 tahun", "11 tahun", "20 tahun"],
            answer: 1,
            explain: "2011 - 1993 = 18 tahun.",
          },
        ],
      },
    ],
  },
];
