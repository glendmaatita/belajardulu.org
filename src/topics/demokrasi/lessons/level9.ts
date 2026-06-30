import type { Lesson } from "../../../types";

export const level9: Lesson[] = [
  // ============================================================
  {
    id: "tantangan-demokrasi-modern",
    levelId: "tantangan",
    order: 1,
    title: "Tantangan Demokrasi Modern",
    summary:
      "Demokrasi tidak pernah selesai. Kenali ancaman populisme, kemunduran demokrasi, disinformasi, dan polarisasi yang menggerogotinya dari dalam.",
    durationMin: 15,
    tags: ["tantangan", "populisme", "kemunduran demokrasi", "disinformasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Demokrasi modern jarang runtuh lewat kudeta mendadak. Lebih sering, ia <strong>menurun perlahan</strong> dari dalam: pemimpin terpilih secara sah lalu sedikit demi sedikit melemahkan lembaga pengawas, menekan pers, dan memanipulasi pemilu. Proses ini disebut <strong>kemunduran demokrasi</strong> (democratic backsliding).",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Ancaman dari dalam",
        html: "<strong>Populisme</strong> yang membelah 'rakyat asli' vs 'musuh', <strong>disinformasi</strong> lewat media sosial, <strong>polarisasi</strong> yang membuat lawan politik dianggap musuh, dan <strong>korupsi</strong> menggerogoti kepercayaan. Semuanya bisa melumpuhkan demokrasi tanpa satu tembakan pun.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Nilai lima dimensi demokrasi dan lihat bagaimana penurunan di beberapa dimensi menggeser sebuah negara dari demokrasi penuh ke rezim hibrida.",
      },
      { type: "widget", widget: "SimulatorIndeksDemokrasi" },
      {
        type: "video",
        comp: "KemunduranDemokrasiVideo",
        title: "Kemunduran Demokrasi",
        caption: "Jarang lewat kudeta mendadak, lebih sering menurun perlahan dan tampak legal.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jakarta_riot_14_May_1998.jpg?width=400",
        alt: "Suasana kerusuhan dan gejolak di Jakarta pada Mei 1998",
        caption: "Gejolak Mei 1998 di Jakarta: tekanan rakyat yang mengakhiri rezim otoriter dan membuka Reformasi.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "area",
        title: "Tahap Kemunduran Demokrasi (ilustrasi)",
        unit: "kesehatan demokrasi (relatif)",
        source: "ilustrasi edukatif pola democratic backsliding",
        note: "Penurunan berlangsung bertahap dan tampak legal, sehingga sulit dilawan tepat waktu.",
        data: [
          { label: "Sehat", value: 90 },
          { label: "Lembaga dilemahkan", value: 70 },
          { label: "Pers ditekan", value: 50 },
          { label: "Pemilu tak adil", value: 30 },
          { label: "Otoriter", value: 10 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Disinformasi dan media sosial",
        html: "Media sosial mempercepat penyebaran informasi, termasuk yang <strong>palsu</strong>. Berita bohong, ujaran kebencian, dan algoritma yang menyukai konten provokatif bisa memperdalam <strong>polarisasi</strong>. Pemilih bisa mengambil keputusan berdasarkan hoaks, dan masyarakat terpecah ke dalam gelembung yang saling membenci. Demokrasi yang sehat membutuhkan warga yang terinformasi; disinformasi menyerang langsung syarat itu. Karena itu literasi digital dan jurnalisme yang kredibel jadi pertahanan penting.",
      },
      {
        type: "case",
        title: "Sejarah: Ketika demokrasi menggali kuburnya sendiri (1933)",
        html: "Pelajaran paling keras datang dari <strong>Jerman 1933</strong>. Partai Nazi naik lewat jalur yang tampak <strong>legal</strong>: pemilu dan penunjukan resmi. Setelah berkuasa, mereka cepat membongkar demokrasi dari dalam, membubarkan partai lain, dan menghapus kebebasan. Demokrasi Weimar runtuh bukan karena diserang dari luar, melainkan karena lembaga dan kebebasannya dilumpuhkan dari dalam. Sejarah ini mengingatkan: demokrasi bisa dipakai untuk menghancurkan demokrasi bila warganya lengah.",
      },
      {
        type: "calcExercise",
        prompt:
          "Skor indeks demokrasi sebuah negara turun dari 7,4 menjadi 5,9 dalam satu dekade. Berapa poin penurunannya?",
        answer: 1.5,
        tolerance: 0,
        suffix: "poin",
        solution:
          "7,4 - 5,9 = <strong>1,5 poin</strong>. Penurunan sebesar ini bisa menggeser sebuah negara dari kategori demokrasi cacat ke ambang rezim hibrida.",
        hint: "Kurangkan skor akhir dari skor awal.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap hal: MEMPERKUAT atau MENGANCAM demokrasi.",
        buckets: ["Memperkuat", "Mengancam"],
        items: [
          { text: "Literasi digital dan pers yang kredibel", bucket: "Memperkuat" },
          { text: "Penyebaran hoaks yang memecah belah", bucket: "Mengancam" },
          { text: "Lembaga pengawas yang independen", bucket: "Memperkuat" },
          { text: "Pemimpin melemahkan pengadilan dan pers", bucket: "Mengancam" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Demokrasi modern lebih sering menurun perlahan daripada runtuh lewat kudeta.",
          "Kemunduran demokrasi melumpuhkan lembaga pengawas dan pers secara bertahap dan tampak legal.",
          "Populisme, disinformasi, polarisasi, dan korupsi menggerogoti demokrasi dari dalam.",
          "Jerman 1933 menunjukkan demokrasi bisa dipakai untuk menghancurkan demokrasi.",
          "Warga yang terinformasi dan lembaga yang kuat adalah pertahanan utama.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bagaimana demokrasi modern paling sering runtuh?",
            options: [
              "Lewat kudeta militer mendadak",
              "Menurun perlahan dari dalam oleh pemimpin terpilih",
              "Karena bencana alam",
              "Karena kehabisan pemilih",
            ],
            answer: 1,
            explain: "Kemunduran demokrasi umumnya bertahap dan tampak legal.",
          },
          {
            q: "Mengapa disinformasi berbahaya bagi demokrasi?",
            options: [
              "Membuat internet lambat",
              "Merusak syarat warga yang terinformasi dan memperdalam polarisasi",
              "Menaikkan pajak",
              "Tidak berbahaya",
            ],
            answer: 1,
            explain: "Demokrasi butuh warga terinformasi; hoaks menyerang syarat itu.",
          },
          {
            q: "Apa pelajaran dari Jerman 1933?",
            options: [
              "Demokrasi selalu aman",
              "Demokrasi bisa dipakai untuk menghancurkan demokrasi dari dalam",
              "Kudeta selalu dari luar",
              "Pemilu tidak penting",
            ],
            answer: 1,
            explain: "Nazi naik lewat jalur legal lalu membongkar demokrasi dari dalam.",
          },
          {
            q: "Manakah yang MEMPERKUAT demokrasi?",
            options: [
              "Penyebaran hoaks",
              "Lembaga pengawas independen dan pers kredibel",
              "Melemahkan pengadilan",
              "Membungkam oposisi",
            ],
            answer: 1,
            explain: "Lembaga independen dan pers bebas menjaga demokrasi tetap sehat.",
          },
          {
            q: "Skor indeks turun dari 7,4 ke 5,9. Penurunannya?",
            options: ["1,5 poin", "2,5 poin", "0,5 poin", "1,3 poin"],
            answer: 0,
            explain: "7,4 dikurangi 5,9 sama dengan 1,5 poin.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "populisme",
    levelId: "tantangan",
    order: 2,
    title: "Populisme: 'Kami Rakyat, Mereka Musuh'",
    summary:
      "Populisme membelah masyarakat menjadi 'rakyat sejati' melawan 'elite jahat'. Kenali retorikanya, mengapa ia menarik, dan kapan ia membahayakan demokrasi.",
    durationMin: 14,
    tags: ["populisme", "retorika", "polarisasi", "tantangan"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Populisme</strong> adalah gaya politik yang membagi masyarakat menjadi dua kubu sederhana: <strong>'rakyat sejati' yang murni</strong> melawan <strong>'elite' yang korup</strong>. Pemimpin populis mengklaim hanya dialah suara rakyat yang asli, sehingga siapa pun yang menentangnya dianggap mengkhianati rakyat. Populisme tidak selalu jahat, tetapi ia mudah berbalik menyerang lembaga pengawas, pers, dan kelompok minoritas.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Ciri inti populisme",
        html: "Populisme bersandar pada tiga klaim: (1) masyarakat terbelah antara rakyat murni dan elite korup, (2) politik harus mengikuti 'kehendak rakyat' tanpa penghalang, dan (3) sang pemimpin adalah satu-satunya wakil rakyat yang sah.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Kapan populisme membahayakan",
        html: "Bahaya muncul saat klaim 'hanya saya wakil rakyat' dipakai untuk <strong>melumpuhkan</strong> pengadilan, parlemen, dan pers yang dianggap menghalangi. Pluralisme, gagasan bahwa banyak kelompok punya kepentingan sah, justru ditolak.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba detektornya",
        html: "Retorika populis sering memakai sesat pikir seperti dilema palsu (kami atau mereka) dan serangan pribadi. Latih telingamu mengenali pola ini.",
      },
      { type: "widget", widget: "DetektorFallacy" },
      {
        type: "video",
        comp: "FallacyVideo",
        title: "Mengenali Sesat Pikir",
        caption: "Retorika populis kerap memakai dilema palsu dan menyerang lawan, bukan gagasannya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/G20_peaceful_crowd.jpg?width=400",
        alt: "Kerumunan massa dalam sebuah unjuk rasa damai",
        caption: "Populisme mengatasnamakan 'kehendak rakyat', tetapi rakyat sesungguhnya beragam, bukan satu suara tunggal.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Pemimpin populis yang berkuasa di dunia",
        unit: "jumlah pemimpin (perkiraan)",
        source: "ilustrasi berdasarkan riset Tony Blair Institute",
        note: "Jumlah pemimpin populis yang berkuasa meningkat tajam sejak 1990-an, gejala global, bukan kebetulan lokal.",
        data: [
          { label: "1990", value: 4 },
          { label: "2000", value: 7 },
          { label: "2010", value: 13 },
          { label: "2018", value: 20 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Retorika 'kami vs mereka'",
        html: "Seorang kandidat berkampanye: 'Saya satu-satunya suara rakyat kecil. Media, hakim, dan parlemen semuanya antek elite yang ingin menjatuhkan kita.' Kalimat ini khas populis: ia <strong>menyatukan</strong> pendukung lewat rasa terancam, lalu <strong>melegitimasi</strong> serangan terhadap pers dan lembaga. Begitu berkuasa, klaim 'saya wakil rakyat sejati' dipakai untuk menafsirkan kritik sebagai pengkhianatan, bukan sebagai bagian wajar dari demokrasi.",
      },
      {
        type: "case",
        title: "Sejarah: McCarthyism di Amerika Serikat (1950-an)",
        html: "Pada awal <strong>1950-an</strong>, Senator <strong>Joseph McCarthy</strong> menuduh banyak warga, pejabat, dan seniman sebagai komunis tanpa bukti memadai. Ia membelah Amerika menjadi 'warga setia' melawan 'musuh dalam selimut', memanfaatkan ketakutan Perang Dingin untuk menyerang lawan politik dan membungkam kritik. Gelombang tuduhan ini mereda setelah dengar pendapat Army-McCarthy 1954 dan Senat mencela McCarthy pada akhir 1954. Pelajarannya: retorika 'kami vs mereka' bisa merusak kebebasan sipil bahkan tanpa mengganti sistem.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang kandidat populis menang dengan 18 juta suara dari total 30 juta suara sah. Berapa persen suara yang ia peroleh?",
        answer: 60,
        tolerance: 0,
        suffix: "%",
        solution:
          "18 juta dibagi 30 juta dikali 100 sama dengan <strong>60%</strong>. Meski menang, ia tetap tidak mewakili 40% pemilih lain, sehingga klaim 'mewakili seluruh rakyat' tidaklah akurat.",
        hint: "Bagi suara yang diperoleh dengan total suara, lalu kalikan 100.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan: POPULIS atau PLURALIS.",
        buckets: ["Populis", "Pluralis"],
        items: [
          { text: "Hanya saya yang benar-benar mewakili rakyat sejati", bucket: "Populis" },
          { text: "Banyak kelompok punya kepentingan sah yang perlu dikompromikan", bucket: "Pluralis" },
          { text: "Elite, media, dan hakim adalah musuh rakyat", bucket: "Populis" },
          { text: "Lembaga pengawas tetap penting walau memperlambat keputusan saya", bucket: "Pluralis" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Populisme membelah masyarakat menjadi 'rakyat sejati' melawan 'elite korup'.",
          "Pemimpin populis mengklaim sebagai satu-satunya wakil rakyat yang sah.",
          "Bahaya muncul saat klaim itu dipakai melumpuhkan pengadilan, parlemen, dan pers.",
          "McCarthyism menunjukkan retorika 'kami vs mereka' bisa merusak kebebasan sipil.",
          "Pluralisme, pengakuan atas keragaman kepentingan, adalah penyeimbang populisme.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti dari populisme?",
            options: [
              "Membela hak semua kelompok secara setara",
              "Membelah masyarakat menjadi rakyat murni melawan elite korup",
              "Menguatkan lembaga pengawas",
              "Menghapus pemilu",
            ],
            answer: 1,
            explain: "Populisme menyederhanakan masyarakat menjadi dua kubu yang berlawanan.",
          },
          {
            q: "Kapan populisme paling membahayakan demokrasi?",
            options: [
              "Saat ia menang pemilu",
              "Saat klaim 'wakil rakyat sejati' dipakai melumpuhkan lembaga pengawas",
              "Saat ia kalah",
              "Saat ia berdialog dengan oposisi",
            ],
            answer: 1,
            explain: "Bahaya muncul ketika lembaga independen dianggap penghalang dan dilemahkan.",
          },
          {
            q: "Apa pelajaran dari McCarthyism 1950-an?",
            options: [
              "Tuduhan tanpa bukti tidak berbahaya",
              "Retorika 'kami vs mereka' bisa merusak kebebasan sipil",
              "Perang Dingin memperkuat demokrasi",
              "Senat tidak punya peran",
            ],
            answer: 1,
            explain: "McCarthy menyerang lawan lewat ketakutan, mengikis kebebasan sipil.",
          },
          {
            q: "Manakah pernyataan yang PLURALIS?",
            options: [
              "Hanya saya wakil rakyat sejati",
              "Media adalah musuh rakyat",
              "Banyak kelompok punya kepentingan sah yang perlu dikompromikan",
              "Hakim harus tunduk pada saya",
            ],
            answer: 2,
            explain: "Pluralisme mengakui keragaman kepentingan dalam masyarakat.",
          },
          {
            q: "Kandidat menang 18 juta dari 30 juta suara. Persentasenya?",
            options: ["50%", "60%", "70%", "40%"],
            answer: 1,
            explain: "18 dibagi 30 dikali 100 sama dengan 60%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kemunduran-demokrasi",
    levelId: "tantangan",
    order: 3,
    title: "Kemunduran Demokrasi: Runtuh Tanpa Suara Tembakan",
    summary:
      "Democratic backsliding adalah erosi demokrasi yang bertahap dan tampak legal. Pelajari taktiknya dan cara mengenalinya sebelum terlambat.",
    durationMin: 15,
    tags: ["kemunduran demokrasi", "backsliding", "otokratisasi", "tantangan"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Kemunduran demokrasi</strong> (democratic backsliding) adalah pelemahan demokrasi yang terjadi <strong>perlahan</strong> dan sering <strong>tampak legal</strong>. Tidak ada tank di jalanan; yang ada adalah serangkaian aturan, penunjukan, dan tekanan yang sedikit demi sedikit menumpulkan pengawasan. Karena tiap langkah terlihat kecil dan sah, masyarakat sering baru sadar setelah demokrasinya tinggal nama.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pola yang berulang",
        html: "Backsliding biasa menempuh jalur: <strong>isi pengadilan</strong> dengan loyalis, <strong>tekan pers</strong> kritis, <strong>ubah aturan pemilu</strong> demi keuntungan penguasa, lalu <strong>lemahkan oposisi</strong>. Tiap langkah dibungkus alasan hukum.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Gelombang otokratisasi global",
        html: "Sejak 2010-an, lebih banyak negara mengalami <strong>otokratisasi</strong> daripada demokratisasi. Sebagian besar penduduk dunia kini hidup di bawah rezim yang menurun atau otokratis.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Turunkan beberapa dimensi demokrasi dan amati bagaimana skor total bisa anjlok dari demokrasi penuh menjadi rezim hibrida.",
      },
      { type: "widget", widget: "SimulatorIndeksDemokrasi" },
      {
        type: "video",
        comp: "KemunduranDemokrasiVideo",
        title: "Kemunduran Demokrasi",
        caption: "Tahap demi tahap, lembaga dilemahkan dengan cara yang tampak legal.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Headquarters_of_the_United_Nations%2C_New_York_City%2C_20231001_1103_1006.jpg?width=400",
        alt: "Gedung markas besar Perserikatan Bangsa-Bangsa di New York",
        caption: "Lembaga dan norma internasional memantau kondisi demokrasi, tetapi pertahanan utama tetap di dalam negeri.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Penduduk dunia menurut jenis rezim",
        unit: "persen penduduk dunia",
        source: "ilustrasi berdasarkan laporan V-Dem",
        note: "Mayoritas penduduk dunia kini hidup di negara yang otokratis atau sedang menurun, bukan demokrasi yang menguat.",
        data: [
          { label: "Rezim otokratis", value: 72 },
          { label: "Negara demokratis", value: 28 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Court packing yang melumpuhkan rem",
        html: "Sebuah pemerintah menambah jumlah hakim agung dari 9 menjadi 15, lalu mengisi 6 kursi baru dengan loyalis. Secara hukum, perubahan jumlah hakim bisa saja sah. Namun dampaknya besar: setiap kebijakan penguasa kini hampir pasti diloloskan pengadilan. <strong>Rem konstitusional</strong> yang seharusnya menahan kekuasaan menjadi tak berfungsi, padahal tidak ada satu undang-undang pun yang secara terbuka menghapus demokrasi.",
      },
      {
        type: "case",
        title: "Sejarah: Venezuela sejak 1998",
        html: "<strong>Hugo Chavez</strong> memenangi pemilu presiden Venezuela pada akhir <strong>1998</strong> dan menjabat sejak 1999. Lewat jalur yang awalnya sah, kekuasaan dipusatkan secara bertahap: konstitusi diubah, pengadilan dan lembaga pemilu diisi pendukung, serta media kritis ditekan. Di bawah penerusnya, Nicolas Maduro, Venezuela meluncur menjadi rezim otoriter dengan pemilu yang tidak lagi adil. Kasus ini menunjukkan backsliding bisa bermula dari kemenangan pemilu yang sah, lalu mengikis demokrasi dari dalam selama bertahun-tahun.",
      },
      {
        type: "calcExercise",
        prompt:
          "Indeks demokrasi sebuah negara turun rata-rata 0,4 poin per tahun selama 6 tahun. Berapa total penurunannya?",
        answer: 2.4,
        tolerance: 0,
        suffix: "poin",
        solution:
          "0,4 poin dikali 6 tahun sama dengan <strong>2,4 poin</strong>. Penurunan sebesar ini bisa menggeser sebuah negara dari demokrasi cacat menjadi rezim hibrida atau otoriter.",
        hint: "Kalikan penurunan per tahun dengan jumlah tahun.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan taktik kemunduran demokrasi dengan penjelasannya.",
        pairs: [
          { left: "Court packing", right: "Mengisi pengadilan dengan loyalis agar putusan menguntungkan penguasa" },
          { left: "Gerrymandering", right: "Mengubah batas daerah pemilihan demi keuntungan partai penguasa" },
          { left: "Tekanan pers", right: "Membungkam media kritis lewat regulasi atau intimidasi" },
          { left: "Pelemahan oposisi", right: "Menjegal partai lawan lewat aturan dan kriminalisasi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kemunduran demokrasi bersifat bertahap dan sering tampak legal.",
          "Taktik umum: court packing, tekanan pers, manipulasi pemilu, dan pelemahan oposisi.",
          "Sejak 2010-an, otokratisasi lebih banyak terjadi daripada demokratisasi.",
          "Venezuela sejak 1998 menunjukkan erosi bisa bermula dari kemenangan pemilu yang sah.",
          "Lembaga independen yang berfungsi adalah rem utama terhadap penyalahgunaan kekuasaan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa ciri khas kemunduran demokrasi?",
            options: [
              "Kudeta militer yang cepat",
              "Erosi yang bertahap dan tampak legal",
              "Invasi dari negara lain",
              "Pemilu yang selalu adil",
            ],
            answer: 1,
            explain: "Backsliding berlangsung perlahan dan dibungkus alasan hukum.",
          },
          {
            q: "Apa itu court packing?",
            options: [
              "Menambah anggaran pengadilan",
              "Mengisi pengadilan dengan loyalis agar putusan menguntungkan penguasa",
              "Memindahkan gedung pengadilan",
              "Mengurangi jumlah perkara",
            ],
            answer: 1,
            explain: "Court packing melumpuhkan fungsi pengadilan sebagai rem kekuasaan.",
          },
          {
            q: "Apa tren rezim global sejak 2010-an?",
            options: [
              "Demokratisasi mendominasi",
              "Otokratisasi lebih banyak terjadi daripada demokratisasi",
              "Tidak ada perubahan",
              "Semua negara jadi demokrasi penuh",
            ],
            answer: 1,
            explain: "Mayoritas penduduk dunia kini hidup di rezim yang menurun atau otokratis.",
          },
          {
            q: "Apa pelajaran dari Venezuela sejak 1998?",
            options: [
              "Demokrasi tidak bisa rusak setelah pemilu",
              "Erosi bisa bermula dari kemenangan pemilu yang sah",
              "Otokrasi selalu datang lewat kudeta",
              "Konstitusi tidak pernah diubah",
            ],
            answer: 1,
            explain: "Chavez menang lewat pemilu lalu memusatkan kekuasaan secara bertahap.",
          },
          {
            q: "Indeks turun 0,4 poin per tahun selama 6 tahun. Total penurunannya?",
            options: ["1,2 poin", "2,4 poin", "0,4 poin", "3,6 poin"],
            answer: 1,
            explain: "0,4 dikali 6 sama dengan 2,4 poin.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "disinformasi-media-sosial",
    levelId: "tantangan",
    order: 4,
    title: "Disinformasi dan Media Sosial",
    summary:
      "Hoaks menyebar lebih cepat daripada fakta dan menyerang syarat utama demokrasi: warga yang terinformasi. Pelajari mekanismenya dan cara bertahan.",
    durationMin: 14,
    tags: ["disinformasi", "hoaks", "media sosial", "literasi digital"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Disinformasi</strong> adalah informasi salah yang sengaja disebarkan untuk menipu. Berbeda dengan <em>misinformasi</em> yang menyebar tanpa niat jahat, disinformasi dirancang untuk memengaruhi opini, memecah belah, atau menggoyahkan kepercayaan. Media sosial mempercepatnya: algoritma menyukai konten yang memancing emosi, dan konten yang memancing emosi sering kali justru yang paling menyesatkan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Mengapa hoaks menang adu cepat",
        html: "Studi menemukan berita bohong cenderung menyebar <strong>lebih jauh dan lebih cepat</strong> daripada berita benar, karena ia dibuat lebih mengejutkan dan memancing reaksi. Fakta yang membosankan kalah saing dengan kebohongan yang menghebohkan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Sasaran utamanya: demokrasi",
        html: "Demokrasi membutuhkan warga yang <strong>terinformasi</strong> untuk memilih dengan bijak. Disinformasi menyerang syarat itu secara langsung, sehingga keputusan kolektif jadi keliru dan masyarakat terpecah dalam gelembung yang saling membenci.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba detektornya",
        html: "Kita gampang percaya hoaks yang sesuai keyakinan kita (bias konfirmasi). Latih dirimu mengenali bias yang membuat kita rentan tertipu.",
      },
      { type: "widget", widget: "DetektorBiasKognitif" },
      {
        type: "video",
        comp: "BiasKognitif",
        title: "Bias Kognitif",
        caption: "Bias konfirmasi membuat kita menelan hoaks yang cocok dengan keyakinan kita.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/G20_peaceful_crowd.jpg?width=400",
        alt: "Kerumunan orang banyak yang sebagian memegang ponsel",
        caption: "Di era media sosial, satu pesan bisa menjangkau jutaan orang dalam hitungan jam, benar atau salah.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jangkauan berita benar vs berita bohong",
        unit: "indeks jangkauan relatif",
        source: "ilustrasi berdasarkan studi MIT 2018",
        note: "Berita bohong cenderung dibagikan jauh lebih luas daripada berita benar, sehingga fakta perlu usaha ekstra untuk mengejar.",
        data: [
          { label: "Berita benar", value: 100 },
          { label: "Berita bohong", value: 170 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Hoaks jelang pemilu",
        html: "Menjelang sebuah pemilu, beredar pesan berantai berisi tudingan palsu tentang seorang kandidat. Pesan dibuat menghebohkan dan diberi cap 'sebarkan sebelum dihapus'. Dalam dua hari, pesan itu menjangkau ratusan ribu orang sebelum diklarifikasi. Sebagian pemilih sudah terlanjur percaya. Inilah bahaya disinformasi: <strong>kecepatan</strong> kebohongan mengalahkan <strong>kelambatan</strong> klarifikasi, dan keputusan memilih bisa diambil di atas informasi yang salah.",
      },
      {
        type: "case",
        title: "Sejarah: Skandal Cambridge Analytica (terungkap 2018)",
        html: "Pada <strong>2018</strong>, terungkap bahwa firma <strong>Cambridge Analytica</strong> mengumpulkan data hingga puluhan juta pengguna Facebook tanpa izin yang layak, lalu memakainya untuk menyasar iklan politik secara sangat tertarget, termasuk terkait pemilu Amerika Serikat 2016 dan referendum Brexit. Skandal ini membuka mata dunia bahwa data pribadi dan media sosial bisa dipakai memanipulasi opini pemilih dalam skala besar, dan memicu gelombang kekhawatiran tentang disinformasi digital yang berlanjut hingga kini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah berita bohong menjangkau 3 kali lebih banyak orang daripada berita benar. Jika berita benar menjangkau 5.000 orang, berapa orang yang dijangkau berita bohong itu?",
        answer: 15000,
        tolerance: 0,
        suffix: "orang",
        solution:
          "3 dikali 5.000 sama dengan <strong>15.000 orang</strong>. Itulah sebabnya klarifikasi sering kalah cepat dan kalah luas dibanding hoaks aslinya.",
        hint: "Kalikan jangkauan berita benar dengan 3.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri: KREDIBEL atau HOAKS.",
        buckets: ["Kredibel", "Hoaks"],
        items: [
          { text: "Mencantumkan sumber dan tanggal yang jelas", bucket: "Kredibel" },
          { text: "Judul memancing emosi dan meminta segera disebarkan", bucket: "Hoaks" },
          { text: "Diverifikasi oleh beberapa media independen", bucket: "Kredibel" },
          { text: "Tanpa penulis dan penuh huruf kapital yang menggebu", bucket: "Hoaks" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Disinformasi adalah informasi salah yang sengaja disebar untuk menipu.",
          "Berita bohong cenderung menyebar lebih jauh dan cepat daripada berita benar.",
          "Disinformasi menyerang syarat demokrasi: warga yang terinformasi.",
          "Skandal Cambridge Analytica 2018 menunjukkan data dan media sosial bisa memanipulasi pemilih.",
          "Literasi digital, verifikasi sebelum membagikan, dan pers kredibel adalah pertahanannya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa beda disinformasi dan misinformasi?",
            options: [
              "Tidak ada bedanya",
              "Disinformasi sengaja menipu; misinformasi menyebar tanpa niat jahat",
              "Misinformasi selalu lebih berbahaya",
              "Disinformasi hanya soal angka",
            ],
            answer: 1,
            explain: "Yang membedakan adalah niat untuk menyesatkan.",
          },
          {
            q: "Mengapa hoaks sering menang adu cepat dengan fakta?",
            options: [
              "Karena lebih akurat",
              "Karena dibuat lebih menghebohkan dan memancing reaksi",
              "Karena lebih panjang",
              "Karena berasal dari pemerintah",
            ],
            answer: 1,
            explain: "Konten yang memancing emosi lebih banyak dibagikan.",
          },
          {
            q: "Mengapa disinformasi berbahaya bagi demokrasi?",
            options: [
              "Membuat ponsel cepat panas",
              "Merusak syarat warga yang terinformasi dan memecah belah",
              "Menaikkan harga internet",
              "Tidak berbahaya sama sekali",
            ],
            answer: 1,
            explain: "Demokrasi butuh warga terinformasi; hoaks menyerang syarat itu.",
          },
          {
            q: "Apa yang terungkap dari skandal Cambridge Analytica 2018?",
            options: [
              "Media sosial aman dari penyalahgunaan",
              "Data pribadi bisa dipakai memanipulasi opini pemilih dalam skala besar",
              "Iklan politik dilarang total",
              "Data pengguna tidak bernilai",
            ],
            answer: 1,
            explain: "Data jutaan pengguna dipakai menyasar iklan politik tertarget.",
          },
          {
            q: "Berita bohong menjangkau 3 kali berita benar. Jika benar 5.000 orang, bohong?",
            options: ["8.000 orang", "15.000 orang", "5.000 orang", "10.000 orang"],
            answer: 1,
            explain: "3 dikali 5.000 sama dengan 15.000 orang.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "polarisasi-korupsi",
    levelId: "tantangan",
    order: 5,
    title: "Polarisasi dan Korupsi",
    summary:
      "Polarisasi mengubah lawan politik menjadi musuh, dan korupsi menggerogoti kepercayaan publik. Dua penyakit yang saling menyuburkan ini melemahkan demokrasi dari dalam.",
    durationMin: 14,
    tags: ["polarisasi", "korupsi", "kepercayaan publik", "tantangan"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Polarisasi</strong> terjadi ketika perbedaan politik mengeras menjadi permusuhan: pendukung kubu lain bukan lagi sesama warga yang berbeda pendapat, melainkan <strong>musuh</strong> yang harus dikalahkan dengan cara apa pun. <strong>Korupsi</strong> melengkapinya dengan merusak kepercayaan: bila pejabat dianggap hanya mengurus diri sendiri, warga kehilangan keyakinan bahwa demokrasi bisa melayani mereka.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Lingkaran setan",
        html: "Polarisasi membuat pendukung memaafkan korupsi pemimpinnya sendiri asalkan 'menang melawan musuh'. Korupsi yang dibiarkan lalu memperdalam ketidakpercayaan, yang memicu kemarahan, yang dimanfaatkan untuk mempertajam polarisasi. Keduanya saling memberi makan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Polarisasi afektif",
        html: "Yang paling berbahaya bukan beda kebijakan, melainkan <strong>polarisasi afektif</strong>: rasa benci dan tidak percaya pada kubu lawan. Saat lawan dianggap jahat, kompromi, syarat hidup demokrasi, menjadi mustahil.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Turunkan dimensi 'budaya politik' dan 'fungsi pemerintahan' pada simulator dan amati bagaimana polarisasi serta korupsi menyeret skor demokrasi ke bawah.",
      },
      { type: "widget", widget: "SimulatorIndeksDemokrasi" },
      {
        type: "video",
        comp: "FallacyVideo",
        title: "Mengenali Sesat Pikir",
        caption: "Polarisasi tumbuh subur lewat dilema palsu: seolah hanya ada dua kubu dan satu pasti jahat.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jakarta_riot_14_May_1998.jpg?width=400",
        alt: "Suasana kerusuhan di Jakarta pada Mei 1998",
        caption: "Mei 1998: kemarahan atas korupsi, kolusi, dan nepotisme ikut mendorong tumbangnya Orde Baru.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Indeks Persepsi Korupsi 2023 (sebagian negara)",
        unit: "skor 0-100 (makin tinggi makin bersih)",
        source: "Transparency International, CPI 2023",
        note: "Skor rendah menandakan korupsi yang dipersepsikan parah; Indonesia masih jauh dari batas tengah skala.",
        data: [
          { label: "Denmark", value: 90 },
          { label: "Jerman", value: 78 },
          { label: "Indonesia", value: 34 },
          { label: "Venezuela", value: 13 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ketika korupsi mengikis kepercayaan",
        html: "Sebuah survei menunjukkan kepercayaan publik pada parlemen turun dari 60% menjadi 35% setelah serangkaian kasus korupsi terungkap. Akibatnya, partisipasi pemilih menurun dan banyak warga merasa 'memilih siapa pun sama saja'. Padahal sikap apatis justru menguntungkan pejabat yang menyalahgunakan kekuasaan. <strong>Korupsi</strong> tidak hanya merugikan keuangan negara, tetapi juga merusak <strong>legitimasi</strong> demokrasi itu sendiri.",
      },
      {
        type: "case",
        title: "Sejarah: Reformasi 1998 di Indonesia",
        html: "Pada <strong>Mei 1998</strong>, di tengah krisis moneter dan gelombang unjuk rasa, Presiden <strong>Soeharto</strong> mundur setelah lebih dari tiga dekade berkuasa. Salah satu pemicu kemarahan publik adalah praktik <strong>KKN</strong> (korupsi, kolusi, dan nepotisme) yang merajalela. Reformasi yang menyusul melahirkan amandemen konstitusi, pemilu yang lebih bebas, dan lembaga antikorupsi. Peristiwa ini menegaskan: korupsi yang dibiarkan menumpuk bisa meruntuhkan legitimasi sebuah rezim, sekaligus membuka jalan bagi pembaruan demokrasi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Skor Indeks Persepsi Korupsi Indonesia pada 2023 adalah 34 dari skala 100. Berapa poin lagi yang dibutuhkan untuk mencapai 50?",
        answer: 16,
        tolerance: 0,
        suffix: "poin",
        solution:
          "50 dikurangi 34 sama dengan <strong>16 poin</strong>. Ini menggambarkan betapa jauh jarak yang harus ditempuh untuk sekadar mencapai pertengahan skala.",
        hint: "Kurangkan skor sekarang dari target 50.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap sikap: MEMPERDALAM atau MEREDAM polarisasi.",
        buckets: ["Memperdalam", "Meredam"],
        items: [
          { text: "Menyebut semua pendukung lawan sebagai pengkhianat", bucket: "Memperdalam" },
          { text: "Berdialog dan mencari titik temu lintas kelompok", bucket: "Meredam" },
          { text: "Hanya mengikuti media yang menguatkan keyakinan sendiri", bucket: "Memperdalam" },
          { text: "Memverifikasi informasi sebelum membagikannya", bucket: "Meredam" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan bentuk korupsi dengan penjelasannya.",
        pairs: [
          { left: "Suap", right: "Memberi uang agar pejabat mengambil keputusan yang menguntungkan pemberi" },
          { left: "Gratifikasi", right: "Pemberian hadiah kepada pejabat yang terkait dengan jabatannya" },
          { left: "Penggelapan", right: "Mengambil uang publik yang dipercayakan untuk kepentingan pribadi" },
          { left: "Nepotisme", right: "Mengutamakan kerabat dalam jabatan tanpa melihat kelayakan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Polarisasi mengubah lawan politik menjadi musuh yang harus dikalahkan dengan cara apa pun.",
          "Polarisasi afektif, yakni rasa benci pada kubu lawan, membuat kompromi mustahil.",
          "Korupsi mengikis kepercayaan dan legitimasi demokrasi, bukan hanya keuangan negara.",
          "Polarisasi dan korupsi saling menyuburkan dalam lingkaran setan.",
          "Reformasi 1998 menunjukkan korupsi yang menumpuk bisa meruntuhkan legitimasi rezim.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud polarisasi afektif?",
            options: [
              "Beda pendapat soal kebijakan ekonomi",
              "Rasa benci dan tidak percaya pada kubu lawan",
              "Jumlah partai yang banyak",
              "Tingkat partisipasi pemilih",
            ],
            answer: 1,
            explain: "Polarisasi afektif adalah permusuhan emosional, bukan sekadar beda kebijakan.",
          },
          {
            q: "Bagaimana polarisasi dan korupsi saling menyuburkan?",
            options: [
              "Keduanya tidak berhubungan",
              "Polarisasi membuat pendukung memaafkan korupsi kubunya sendiri",
              "Korupsi menghapus polarisasi",
              "Polarisasi memberantas korupsi",
            ],
            answer: 1,
            explain: "Demi 'menang melawan musuh', korupsi sendiri kerap dimaklumi.",
          },
          {
            q: "Mengapa korupsi berbahaya bagi demokrasi?",
            options: [
              "Hanya merugikan keuangan negara",
              "Mengikis kepercayaan dan legitimasi demokrasi",
              "Membuat pemilu lebih ramai",
              "Tidak berdampak apa-apa",
            ],
            answer: 1,
            explain: "Hilangnya kepercayaan membuat warga apatis dan demokrasi melemah.",
          },
          {
            q: "Apa pelajaran dari Reformasi 1998?",
            options: [
              "Korupsi tidak memengaruhi kekuasaan",
              "Korupsi yang menumpuk bisa meruntuhkan legitimasi rezim",
              "Unjuk rasa tidak pernah berdampak",
              "Konstitusi tidak boleh diubah",
            ],
            answer: 1,
            explain: "KKN yang merajalela ikut mendorong tumbangnya Orde Baru.",
          },
          {
            q: "Skor IPK Indonesia 2023 adalah 34. Berapa poin lagi menuju 50?",
            options: ["16 poin", "14 poin", "24 poin", "12 poin"],
            answer: 0,
            explain: "50 dikurangi 34 sama dengan 16 poin.",
          },
        ],
      },
    ],
  },
];
