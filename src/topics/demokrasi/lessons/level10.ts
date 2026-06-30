import type { Lesson } from "../../../types";

export const level10: Lesson[] = [
  // ============================================================
  {
    id: "demokrasi-pancasila-indonesia",
    levelId: "indonesia",
    order: 1,
    title: "Demokrasi Pancasila di Indonesia",
    summary:
      "Perjalanan demokrasi Indonesia: dari demokrasi terpimpin dan Orde Baru sampai Reformasi 1998 dan pemilu langsung.",
    durationMin: 15,
    tags: ["indonesia", "pancasila", "reformasi", "pemilu"],
    blocks: [
      {
        type: "paragraph",
        html: "Indonesia menganut <strong>demokrasi Pancasila</strong>: kedaulatan rakyat yang dijiwai nilai-nilai Pancasila, terutama sila keempat tentang musyawarah dan perwakilan. Perjalanannya panjang dan berliku, dari kemerdekaan 1945 sampai demokrasi langsung yang kita kenal sekarang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga babak besar",
        html: "<strong>Demokrasi liberal lalu terpimpin</strong> (1950-an hingga 1965), <strong>Orde Baru</strong> (1966-1998) yang stabil tetapi otoriter, dan <strong>Reformasi</strong> (1998-sekarang) dengan pemilu bebas, kebebasan pers, dan otonomi daerah.",
      },
      {
        type: "video",
        comp: "SejarahDemokrasiVideo",
        title: "Perjalanan Demokrasi",
        caption: "Tonggak panjang demokrasi dunia dan Indonesia sampai Reformasi 1998.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Presiden_Sukarno.jpg?width=400",
        alt: "Foto Presiden Sukarno, proklamator dan presiden pertama Indonesia",
        caption: "Sukarno, presiden pertama. Pada masanya demokrasi sempat bergeser menjadi demokrasi terpimpin.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Hitung tingkat partisipasi pemilih dan lihat bagaimana keikutsertaan rakyat memperkuat legitimasi pemimpin terpilih.",
      },
      { type: "widget", widget: "KalkulatorPartisipasiPemilih" },
      {
        type: "chart",
        variant: "line",
        title: "Tonggak Demokrasi Indonesia",
        unit: "tahun peristiwa",
        source: "tanggal historis terverifikasi",
        note: "Demokrasi Indonesia berkembang dari kemerdekaan, melalui Orde Baru, sampai pemilu langsung pertama.",
        data: [
          { label: "Merdeka", value: 1945 },
          { label: "Pemilu pertama", value: 1955 },
          { label: "Orde Baru", value: 1966 },
          { label: "Reformasi", value: 1998 },
          { label: "Pilpres langsung", value: 2004 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pemilu langsung dan lembaga pengawal demokrasi",
        html: "Sejak Reformasi, Indonesia membangun lembaga-lembaga pengawal demokrasi: <strong>KPU</strong> menyelenggarakan pemilu, <strong>Bawaslu</strong> mengawasinya, dan <strong>Mahkamah Konstitusi</strong> menyelesaikan sengketa hasil. Pada <strong>2004</strong>, untuk pertama kalinya rakyat memilih presiden secara <strong>langsung</strong>, bukan lewat MPR. Pemilu Indonesia kini menjadi salah satu yang terbesar di dunia, melibatkan ratusan juta pemilih dalam satu hari. Ini lompatan besar dari masa ketika hasil sudah bisa ditebak.",
      },
      {
        type: "case",
        title: "Sejarah: Reformasi 1998",
        html: "Setelah 32 tahun <strong>Orde Baru</strong> yang stabil tetapi membatasi kebebasan dan diwarnai korupsi, krisis moneter <strong>1997-1998</strong> memicu gelombang protes besar, terutama oleh mahasiswa. Pada <strong>Mei 1998</strong>, Presiden Soeharto mengundurkan diri, menandai dimulainya era <strong>Reformasi</strong>. Sesudahnya lahir kebebasan pers, sistem multipartai, pembatasan masa jabatan presiden, dan otonomi daerah. Reformasi menunjukkan kekuatan rakyat yang terorganisir untuk menuntut demokrasi, sekaligus mengingatkan bahwa demokrasi harus terus dijaga.",
      },
      {
        type: "calcExercise",
        prompt:
          "Orde Baru berlangsung dari 1966 sampai 1998. Berapa tahun lamanya kira-kira?",
        answer: 32,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "1998 - 1966 = <strong>32 tahun</strong>. Masa yang panjang ini membuat Reformasi 1998 menjadi perubahan yang sangat besar bagi Indonesia.",
        hint: "Kurangkan tahun awal dari tahun akhir.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri ke era yang tepat.",
        buckets: ["Orde Baru", "Reformasi"],
        items: [
          { text: "Kebebasan pers dibatasi", bucket: "Orde Baru" },
          { text: "Presiden dipilih langsung oleh rakyat", bucket: "Reformasi" },
          { text: "Sistem dengan partai yang sangat dibatasi", bucket: "Orde Baru" },
          { text: "Otonomi daerah dan sistem multipartai", bucket: "Reformasi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Indonesia menganut demokrasi Pancasila yang dijiwai musyawarah dan perwakilan.",
          "Perjalanannya melewati demokrasi terpimpin, Orde Baru, dan Reformasi.",
          "Reformasi 1998 melahirkan kebebasan pers, multipartai, dan otonomi daerah.",
          "Sejak 2004, rakyat memilih presiden secara langsung.",
          "Lembaga seperti KPU, Bawaslu, dan MK mengawal jalannya demokrasi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa landasan demokrasi Indonesia?",
            options: ["Liberalisme murni", "Demokrasi Pancasila", "Monarki", "Demokrasi langsung Athena"],
            answer: 1,
            explain: "Indonesia menganut demokrasi Pancasila yang dijiwai musyawarah dan perwakilan.",
          },
          {
            q: "Apa yang menandai dimulainya era Reformasi?",
            options: [
              "Pemilu pertama 1955",
              "Pengunduran diri Presiden Soeharto pada Mei 1998",
              "Kemerdekaan 1945",
              "Pilpres langsung 2004",
            ],
            answer: 1,
            explain: "Reformasi dimulai setelah Soeharto mengundurkan diri pada Mei 1998.",
          },
          {
            q: "Apa lompatan demokrasi yang terjadi pada 2004?",
            options: [
              "Pemilu pertama digelar",
              "Rakyat memilih presiden secara langsung untuk pertama kali",
              "Orde Baru dimulai",
              "Indonesia merdeka",
            ],
            answer: 1,
            explain: "Pada 2004 presiden dipilih langsung rakyat, bukan lagi oleh MPR.",
          },
          {
            q: "Lembaga mana yang menyelesaikan sengketa hasil pemilu?",
            options: ["KPU", "Bawaslu", "Mahkamah Konstitusi", "DPR"],
            answer: 2,
            explain: "Mahkamah Konstitusi mengadili sengketa hasil pemilu.",
          },
          {
            q: "Berapa lama Orde Baru berlangsung (1966-1998)?",
            options: ["22 tahun", "32 tahun", "42 tahun", "30 tahun"],
            answer: 1,
            explain: "1998 dikurangi 1966 sama dengan 32 tahun.",
          },
        ],
      },
    ],
  },
  {
    id: "pancasila-uud-1945-dasar",
    levelId: "indonesia",
    order: 2,
    title: "Pancasila & UUD 1945 sebagai Dasar",
    summary:
      "Pancasila dan UUD 1945 menjadi landasan demokrasi Indonesia, termasuk pembatasan kekuasaan lewat empat kali amandemen pada era Reformasi.",
    durationMin: 14,
    tags: ["indonesia", "pancasila", "uud-1945", "konstitusi"],
    blocks: [
      {
        type: "paragraph",
        html: "Demokrasi Indonesia berpijak pada dua landasan utama: <strong>Pancasila</strong> sebagai dasar negara dan <strong>UUD 1945</strong> sebagai hukum dasar tertulis. UUD 1945 disahkan oleh PPKI pada <strong>18 Agustus 1945</strong>, sehari setelah proklamasi kemerdekaan.",
      },
      {
        type: "paragraph",
        html: "Sila keempat Pancasila, <em>kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan perwakilan</em>, menjadi jiwa demokrasi kita: keputusan diambil lewat musyawarah dan perwakilan, bukan sekadar suara terbanyak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dua landasan",
        html: "<strong>Pancasila</strong> memberi nilai dan arah, sedangkan <strong>UUD 1945</strong> mengatur aturan main bernegara, termasuk pembagian kekuasaan dan hak warga negara.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Empat kali amandemen",
        html: "Pada era Reformasi, UUD 1945 diamandemen <strong>empat kali</strong> berturut-turut pada 1999, 2000, 2001, dan 2002. Hasil pentingnya antara lain pembatasan masa jabatan presiden dan penguatan hak asasi manusia.",
      },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Apa Itu Demokrasi",
        caption: "Prinsip dasar demokrasi yang dijabarkan Pancasila dan UUD 1945 di Indonesia.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/DPR_sahkan_RUU.jpg?width=400",
        alt: "Suasana rapat paripurna DPR Indonesia saat mengesahkan rancangan undang-undang",
        caption: "DPR menjalankan fungsi legislasi sesuai mandat UUD 1945 hasil amandemen.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana indeks demokrasi sebuah negara naik ketika pembatasan kekuasaan dan kebebasan sipil dijamin oleh konstitusi.",
      },
      { type: "widget", widget: "SimulatorIndeksDemokrasi" },
      {
        type: "chart",
        variant: "bar",
        title: "Masa Jabatan Presiden: Sebelum vs Sesudah Amandemen",
        unit: "tahun",
        source: "fakta historis dan ketentuan UUD 1945",
        note: "Amandemen UUD 1945 membatasi presiden maksimal dua periode, atau sepuluh tahun.",
        data: [
          { label: "Soeharto (1968-1998)", value: 30 },
          { label: "Batas kini (2 periode)", value: 10 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pembatasan masa jabatan presiden",
        html: "Sebelum amandemen, UUD 1945 tidak membatasi berapa kali seseorang boleh menjabat presiden. Soeharto memerintah sekitar <strong>30 tahun</strong>. Amandemen ketiga UUD 1945 menegaskan presiden hanya boleh menjabat <strong>dua periode</strong>, masing-masing lima tahun, sehingga maksimal <strong>10 tahun</strong>. Aturan ini mencegah pemusatan kekuasaan yang terlalu lama di satu tangan.",
      },
      {
        type: "case",
        title: "Sejarah: Pengesahan UUD 1945 pada 18 Agustus 1945",
        html: "Sehari setelah proklamasi 17 Agustus 1945, <strong>PPKI</strong> bersidang pada <strong>18 Agustus 1945</strong> dan mengesahkan <strong>UUD 1945</strong> sekaligus memilih <strong>Sukarno</strong> dan <strong>Mohammad Hatta</strong> sebagai presiden dan wakil presiden pertama. Hari itu Indonesia tidak hanya merdeka, tetapi juga memiliki dasar hukum bernegara yang menjadi fondasi demokrasi sampai sekarang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Presiden boleh menjabat maksimal dua periode, masing-masing lima tahun. Berapa tahun batas maksimalnya?",
        answer: 10,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "2 periode x 5 tahun = <strong>10 tahun</strong>. Inilah batas yang ditetapkan amandemen UUD 1945 agar kekuasaan tidak terpusat terlalu lama.",
        hint: "Kalikan jumlah periode dengan lama satu periode.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap sila Pancasila dengan inti nilainya.",
        pairs: [
          { left: "Sila ke-1", right: "Ketuhanan Yang Maha Esa" },
          { left: "Sila ke-2", right: "Kemanusiaan yang adil dan beradab" },
          { left: "Sila ke-3", right: "Persatuan Indonesia" },
          { left: "Sila ke-4", right: "Kerakyatan lewat musyawarah perwakilan" },
          { left: "Sila ke-5", right: "Keadilan sosial bagi seluruh rakyat" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Pancasila menjadi dasar negara, UUD 1945 menjadi hukum dasar tertulis.",
          "UUD 1945 disahkan PPKI pada 18 Agustus 1945, sehari setelah proklamasi.",
          "Sila keempat menjiwai demokrasi lewat musyawarah dan perwakilan.",
          "UUD 1945 diamandemen empat kali pada 1999 sampai 2002.",
          "Amandemen membatasi masa jabatan presiden maksimal dua periode atau sepuluh tahun.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapan UUD 1945 pertama kali disahkan?",
            options: ["17 Agustus 1945", "18 Agustus 1945", "1 Juni 1945", "5 Juli 1959"],
            answer: 1,
            explain: "PPKI mengesahkan UUD 1945 pada 18 Agustus 1945, sehari setelah proklamasi.",
          },
          {
            q: "Sila keberapa yang menjiwai demokrasi permusyawaratan?",
            options: ["Sila pertama", "Sila kedua", "Sila ketiga", "Sila keempat"],
            answer: 3,
            explain: "Sila keempat berbunyi kerakyatan yang dipimpin hikmat kebijaksanaan dalam permusyawaratan perwakilan.",
          },
          {
            q: "Berapa kali UUD 1945 diamandemen pada era Reformasi?",
            options: ["Dua kali", "Tiga kali", "Empat kali", "Lima kali"],
            answer: 2,
            explain: "UUD 1945 diamandemen empat kali, yaitu pada 1999, 2000, 2001, dan 2002.",
          },
          {
            q: "Berapa lama batas maksimal seorang presiden menjabat kini?",
            options: ["5 tahun", "10 tahun", "15 tahun", "Tanpa batas"],
            answer: 1,
            explain: "Maksimal dua periode lima tahunan, sehingga totalnya sepuluh tahun.",
          },
          {
            q: "Siapa presiden dan wakil presiden pertama yang dipilih PPKI?",
            options: [
              "Sukarno dan Hatta",
              "Soeharto dan Adam Malik",
              "Sjahrir dan Tan Malaka",
              "Hatta dan Sjahrir",
            ],
            answer: 0,
            explain: "Pada 18 Agustus 1945 PPKI memilih Sukarno dan Mohammad Hatta.",
          },
        ],
      },
    ],
  },
  {
    id: "demokrasi-terpimpin-orde-baru",
    levelId: "indonesia",
    order: 3,
    title: "Demokrasi Terpimpin & Orde Baru",
    summary:
      "Dua masa ketika demokrasi Indonesia menyempit: demokrasi terpimpin sejak Dekrit 1959 dan Orde Baru yang stabil tetapi otoriter sampai 1998.",
    durationMin: 14,
    tags: ["indonesia", "orde-baru", "demokrasi-terpimpin", "sejarah"],
    blocks: [
      {
        type: "paragraph",
        html: "Tidak semua babak demokrasi Indonesia berjalan bebas. Pada akhir 1950-an, demokrasi liberal yang penuh pergantian kabinet dianggap tidak stabil. Sukarno lalu mengeluarkan <strong>Dekrit Presiden 5 Juli 1959</strong> yang membubarkan Konstituante dan memulai era <strong>demokrasi terpimpin</strong>.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Demokrasi yang menyempit",
        html: "Pada demokrasi terpimpin, kekuasaan terpusat di tangan presiden. Setelah 1966, <strong>Orde Baru</strong> di bawah Soeharto memang membawa stabilitas, tetapi membatasi kebebasan pers, partai, dan oposisi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Hanya tiga partai",
        html: "Sejak penyederhanaan partai tahun 1973, pemilu Orde Baru hanya diikuti tiga kontestan: <strong>Golkar</strong>, <strong>PPP</strong>, dan <strong>PDI</strong>. Golkar selalu menang besar.",
      },
      {
        type: "video",
        comp: "KemunduranDemokrasiVideo",
        title: "Saat Demokrasi Mundur",
        caption: "Bagaimana kekuasaan yang terpusat membuat demokrasi menyempit, seperti pada Orde Baru.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Presiden_Sukarno.jpg?width=400",
        alt: "Foto Presiden Sukarno yang memulai era demokrasi terpimpin lewat Dekrit 5 Juli 1959",
        caption: "Sukarno memulai demokrasi terpimpin lewat Dekrit Presiden 5 Juli 1959.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Turunkan kebebasan sipil dan proses pemilu pada simulator, lalu lihat indeks demokrasi anjlok seperti pada masa Orde Baru.",
      },
      { type: "widget", widget: "SimulatorIndeksDemokrasi" },
      {
        type: "chart",
        variant: "bar",
        title: "Perolehan Suara Golkar di Pemilu Orde Baru",
        unit: "% suara",
        source: "hasil pemilu Orde Baru",
        note: "Golkar memenangi setiap pemilu Orde Baru dengan suara dominan, ciri pemilu yang tidak setara.",
        data: [
          { label: "1971", value: 62.8 },
          { label: "1977", value: 62.1 },
          { label: "1982", value: 64.3 },
          { label: "1987", value: 73.2 },
          { label: "1992", value: 68.1 },
          { label: "1997", value: 74.5 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pemilu yang hasilnya mudah ditebak",
        html: "Orde Baru tetap menggelar pemilu secara rutin, tetapi dengan hanya <strong>tiga partai</strong> dan tekanan terhadap oposisi, <strong>Golkar</strong> selalu menang. Pada pemilu <strong>1997</strong>, Golkar meraih sekitar <strong>74,5%</strong> suara. Pemilu tetap ada, tetapi persaingannya tidak setara, sehingga hasilnya bisa ditebak jauh sebelum pencoblosan.",
      },
      {
        type: "case",
        title: "Sejarah: Dekrit Presiden 5 Juli 1959",
        html: "Setelah Badan Konstituante gagal menyusun konstitusi baru, Sukarno mengeluarkan <strong>Dekrit Presiden pada 5 Juli 1959</strong>. Isinya antara lain membubarkan Konstituante dan memberlakukan kembali <strong>UUD 1945</strong>. Dekrit ini menandai dimulainya <strong>demokrasi terpimpin</strong>, ketika kekuasaan presiden menguat dan ruang demokrasi liberal menyempit.",
      },
      {
        type: "calcExercise",
        prompt:
          "Orde Baru menggelar pemilu pada 1971, 1977, 1982, 1987, 1992, dan 1997. Berapa kali total pemilu pada masa itu?",
        answer: 6,
        tolerance: 0,
        suffix: "kali",
        solution:
          "Hitung tahunnya: 1971, 1977, 1982, 1987, 1992, 1997 berarti <strong>6 kali</strong> pemilu. Semuanya dimenangi Golkar.",
        hint: "Hitung jumlah tahun yang disebut.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri ke masa yang tepat.",
        buckets: ["Demokrasi Terpimpin", "Orde Baru"],
        items: [
          { text: "Dimulai lewat Dekrit Presiden 5 Juli 1959", bucket: "Demokrasi Terpimpin" },
          { text: "Hanya tiga partai sejak 1973", bucket: "Orde Baru" },
          { text: "Konstituante dibubarkan", bucket: "Demokrasi Terpimpin" },
          { text: "Golkar dominan dari 1971 sampai 1997", bucket: "Orde Baru" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Demokrasi terpimpin dimulai lewat Dekrit Presiden 5 Juli 1959.",
          "Pada demokrasi terpimpin kekuasaan terpusat di tangan presiden.",
          "Orde Baru 1966 sampai 1998 stabil tetapi membatasi kebebasan.",
          "Pemilu Orde Baru hanya diikuti Golkar, PPP, dan PDI sejak 1973.",
          "Golkar memenangi keenam pemilu Orde Baru dengan suara dominan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang menandai dimulainya demokrasi terpimpin?",
            options: [
              "Proklamasi 1945",
              "Dekrit Presiden 5 Juli 1959",
              "Pemilu 1955",
              "Reformasi 1998",
            ],
            answer: 1,
            explain: "Dekrit Presiden 5 Juli 1959 membubarkan Konstituante dan memulai demokrasi terpimpin.",
          },
          {
            q: "Berapa partai yang boleh ikut pemilu Orde Baru sejak 1973?",
            options: ["Dua", "Tiga", "Lima", "Banyak"],
            answer: 1,
            explain: "Hanya Golkar, PPP, dan PDI, yaitu tiga kontestan.",
          },
          {
            q: "Partai mana yang selalu menang di pemilu Orde Baru?",
            options: ["PPP", "PDI", "Golkar", "PKI"],
            answer: 2,
            explain: "Golkar memenangi seluruh pemilu Orde Baru dengan suara dominan.",
          },
          {
            q: "Apa ciri utama pemilu Orde Baru?",
            options: [
              "Persaingan setara antarpartai",
              "Hasil sulit ditebak",
              "Persaingan tidak setara dan hasil mudah ditebak",
              "Tanpa pemilu sama sekali",
            ],
            answer: 2,
            explain: "Pemilu tetap digelar tetapi persaingannya tidak setara sehingga hasilnya mudah ditebak.",
          },
          {
            q: "Sampai tahun berapa Orde Baru berkuasa?",
            options: ["1966", "1985", "1998", "2004"],
            answer: 2,
            explain: "Orde Baru berakhir pada 1998 saat Soeharto mengundurkan diri.",
          },
        ],
      },
    ],
  },
  {
    id: "reformasi-1998-pemilu-langsung",
    levelId: "indonesia",
    order: 4,
    title: "Reformasi 1998 & Pemilu Langsung",
    summary:
      "Gelombang Reformasi Mei 1998 membuka era multipartai, pemilu bebas 1999, dan pemilihan presiden langsung pertama pada 2004.",
    durationMin: 15,
    tags: ["indonesia", "reformasi", "pemilu", "multipartai"],
    blocks: [
      {
        type: "paragraph",
        html: "Krisis moneter 1997-1998 memukul ekonomi Indonesia dan memicu protes besar, terutama dari mahasiswa. Tuntutannya jelas: reformasi dan akhir dari kekuasaan yang terlalu lama. Pada <strong>21 Mei 1998</strong>, Presiden Soeharto mengundurkan diri, menandai dimulainya era <strong>Reformasi</strong>.",
      },
      {
        type: "paragraph",
        html: "Reformasi membuka pintu demokrasi yang lebih luas: kebebasan pers, sistem <strong>multipartai</strong>, dan pemilihan langsung. Pemilu 1999 menjadi pemilu bebas pertama setelah Orde Baru, lalu pada 2004 rakyat memilih presiden secara langsung.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Lompatan demokrasi",
        html: "Dari hanya <strong>3 partai</strong> di Orde Baru, pemilu <strong>1999</strong> diikuti <strong>48 partai</strong>. Lalu pada <strong>2004</strong>, untuk pertama kalinya presiden dipilih langsung oleh rakyat, bukan oleh MPR.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Lembaga penyelenggara",
        html: "Untuk menjaga pemilu tetap jujur, dibentuk <strong>KPU</strong> sebagai penyelenggara dan <strong>Mahkamah Konstitusi</strong> pada 2003 untuk mengadili sengketa hasil pemilu.",
      },
      {
        type: "video",
        comp: "SejarahDemokrasiVideo",
        title: "Perjalanan Demokrasi",
        caption: "Reformasi 1998 sebagai tonggak besar menuju pemilu bebas dan langsung di Indonesia.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jakarta_riot_14_May_1998.jpg?width=400",
        alt: "Suasana gejolak di Jakarta pada Mei 1998 menjelang berakhirnya Orde Baru",
        caption: "Gejolak Mei 1998 di Jakarta menjelang pengunduran diri Presiden Soeharto.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Hitung tingkat partisipasi pemilih pada pemilu langsung dan lihat bagaimana keikutsertaan rakyat memperkuat legitimasi hasil.",
      },
      { type: "widget", widget: "KalkulatorPartisipasiPemilih" },
      {
        type: "chart",
        variant: "line",
        title: "Jumlah Partai Peserta Pemilu",
        unit: "partai",
        source: "data peserta pemilu nasional",
        note: "Setelah Reformasi, jumlah partai melonjak, lalu menyusut seiring aturan pemilu yang lebih ketat.",
        data: [
          { label: "1997", value: 3 },
          { label: "1999", value: 48 },
          { label: "2004", value: 24 },
          { label: "2009", value: 38 },
          { label: "2014", value: 12 },
          { label: "2019", value: 16 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pilpres langsung pertama 2004",
        html: "Pada <strong>2004</strong>, Indonesia menggelar pemilihan presiden <strong>langsung</strong> untuk pertama kalinya. Karena tidak ada pasangan yang meraih lebih dari setengah suara di putaran pertama, pemilu berlanjut ke <strong>putaran kedua</strong>. Pasangan <strong>Susilo Bambang Yudhoyono dan Jusuf Kalla</strong> akhirnya menang. Inilah bukti nyata bahwa kedaulatan benar-benar berada di tangan rakyat.",
      },
      {
        type: "case",
        title: "Sejarah: Soeharto mundur pada 21 Mei 1998",
        html: "Setelah berhari-hari aksi mahasiswa, termasuk pendudukan gedung DPR/MPR, dan tekanan politik yang memuncak, <strong>Soeharto mengumumkan pengunduran dirinya pada 21 Mei 1998</strong>. Wakil Presiden B.J. Habibie naik menggantikannya. Peristiwa ini mengakhiri 32 tahun Orde Baru dan membuka era Reformasi yang melahirkan kebebasan pers dan sistem multipartai.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pemilu Orde Baru hanya diikuti 3 partai, sedangkan pemilu 1999 diikuti 48 partai. Berapa selisih jumlah partainya?",
        answer: 45,
        tolerance: 0,
        suffix: "partai",
        solution:
          "48 - 3 = <strong>45 partai</strong>. Lonjakan besar ini menunjukkan terbukanya sistem multipartai setelah Reformasi.",
        hint: "Kurangkan jumlah partai Orde Baru dari jumlah partai 1999.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tahun dengan peristiwa demokrasi yang tepat.",
        pairs: [
          { left: "21 Mei 1998", right: "Soeharto mengundurkan diri" },
          { left: "1999", right: "Pemilu multipartai pertama setelah Orde Baru" },
          { left: "2003", right: "Mahkamah Konstitusi dibentuk" },
          { left: "2004", right: "Pemilihan presiden langsung pertama" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Krisis moneter 1997-1998 memicu gelombang Reformasi.",
          "Soeharto mengundurkan diri pada 21 Mei 1998.",
          "Pemilu 1999 diikuti 48 partai, jauh dari 3 partai Orde Baru.",
          "Pada 2004 rakyat memilih presiden secara langsung untuk pertama kali.",
          "KPU dan Mahkamah Konstitusi dibentuk untuk menjaga pemilu tetap jujur.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapan Soeharto mengundurkan diri?",
            options: ["17 Agustus 1945", "5 Juli 1959", "21 Mei 1998", "20 Oktober 2004"],
            answer: 2,
            explain: "Soeharto mengundurkan diri pada 21 Mei 1998, mengakhiri Orde Baru.",
          },
          {
            q: "Berapa partai yang ikut pemilu 1999?",
            options: ["3 partai", "10 partai", "24 partai", "48 partai"],
            answer: 3,
            explain: "Pemilu 1999 diikuti 48 partai, menandai terbukanya sistem multipartai.",
          },
          {
            q: "Apa yang istimewa dari pemilu 2004?",
            options: [
              "Pemilu pertama digelar",
              "Presiden dipilih langsung oleh rakyat untuk pertama kali",
              "Hanya satu partai ikut",
              "Tidak ada pemilu",
            ],
            answer: 1,
            explain: "Pada 2004 presiden dipilih langsung rakyat, bukan oleh MPR.",
          },
          {
            q: "Lembaga apa yang dibentuk pada 2003 untuk mengadili sengketa pemilu?",
            options: ["KPU", "Bawaslu", "Mahkamah Konstitusi", "DPD"],
            answer: 2,
            explain: "Mahkamah Konstitusi dibentuk pada 2003 dan berwenang mengadili sengketa hasil pemilu.",
          },
          {
            q: "Siapa yang menggantikan Soeharto setelah ia mundur?",
            options: ["Megawati", "B.J. Habibie", "Gus Dur", "SBY"],
            answer: 1,
            explain: "Wakil Presiden B.J. Habibie naik menggantikan Soeharto pada 21 Mei 1998.",
          },
        ],
      },
    ],
  },
  {
    id: "lembaga-demokrasi-otonomi-daerah",
    levelId: "indonesia",
    order: 5,
    title: "Lembaga Demokrasi & Otonomi Daerah",
    summary:
      "Demokrasi Indonesia dijalankan lewat lembaga negara yang saling mengawasi dan disebarkan ke daerah lewat otonomi serta pilkada langsung.",
    durationMin: 15,
    tags: ["indonesia", "lembaga-negara", "otonomi-daerah", "pemilu"],
    blocks: [
      {
        type: "paragraph",
        html: "Demokrasi tidak berjalan sendiri, melainkan lewat <strong>lembaga negara</strong> yang saling mengawasi. UUD 1945 hasil amandemen membagi kekuasaan menjadi tiga cabang: <strong>legislatif</strong> (membuat undang-undang), <strong>eksekutif</strong> (menjalankan pemerintahan), dan <strong>yudikatif</strong> (mengadili).",
      },
      {
        type: "paragraph",
        html: "Sejak Reformasi, demokrasi juga disebarkan ke daerah lewat <strong>otonomi daerah</strong>. Daerah diberi kewenangan mengurus rumah tangganya sendiri, dan sejak <strong>2005</strong> kepala daerah dipilih langsung oleh rakyat lewat <strong>pilkada</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pemisahan kekuasaan",
        html: "<strong>DPR, DPD, dan MPR</strong> mewakili legislatif, <strong>presiden</strong> memimpin eksekutif, sedangkan <strong>MA dan Mahkamah Konstitusi</strong> memegang yudikatif. Pembagian ini mencegah kekuasaan menumpuk di satu tangan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Otonomi sejak 1999",
        html: "Otonomi daerah dimulai dengan <strong>Undang-Undang Nomor 22 Tahun 1999</strong>, lalu disempurnakan oleh undang-undang berikutnya. Daerah mengelola urusan seperti pendidikan dasar, kesehatan, dan layanan publik lokal.",
      },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Apa Itu Demokrasi",
        caption: "Lembaga negara dan otonomi daerah sebagai cara demokrasi bekerja sehari-hari.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pemilihan_Umum_Indonesia_2019_170419002.JPG?width=400",
        alt: "Warga mengikuti pemungutan suara pada pemilu Indonesia 2019",
        caption: "Pemilu 2019, salah satu wujud nyata lembaga demokrasi yang melibatkan jutaan pemilih.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Ubah ambang batas parlemen dan lihat berapa partai yang lolos mendapat kursi. Aturan ini menentukan komposisi DPR.",
      },
      { type: "widget", widget: "SimulatorAmbangParlemen" },
      {
        type: "chart",
        variant: "line",
        title: "Ambang Batas Parlemen dari Pemilu ke Pemilu",
        unit: "% suara nasional",
        source: "ketentuan ambang parlemen tiap pemilu",
        note: "Ambang parlemen dinaikkan agar jumlah partai di DPR lebih ringkas dan pemerintahan lebih stabil.",
        data: [
          { label: "2009", value: 2.5 },
          { label: "2014", value: 3.5 },
          { label: "2019", value: 4 },
          { label: "2024", value: 4 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ambang parlemen menyaring partai",
        html: "Sejak pemilu <strong>2019</strong>, partai harus meraih minimal <strong>4%</strong> suara sah nasional untuk mendapat kursi di DPR. Jika total suara sah <strong>100 juta</strong>, sebuah partai butuh setidaknya <strong>4 juta</strong> suara. Partai yang gagal menembus ambang ini tidak mendapat kursi DPR meski memiliki pemilih. Aturan ini menyaring jumlah partai agar pemerintahan lebih stabil.",
      },
      {
        type: "case",
        title: "Sejarah: Otonomi daerah dan pilkada langsung",
        html: "Sebelum Reformasi, pemerintahan sangat terpusat di Jakarta. Lewat <strong>Undang-Undang Nomor 22 Tahun 1999</strong>, dimulailah era <strong>otonomi daerah</strong>: kewenangan dan anggaran sebagian besar dialihkan ke kabupaten dan kota. Puncaknya, sejak <strong>2005</strong> rakyat memilih langsung gubernur, bupati, dan wali kota lewat <strong>pilkada</strong>, memperluas demokrasi sampai ke tingkat lokal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Ambang parlemen 4%. Jika total suara sah nasional 100 juta, berapa suara minimal yang dibutuhkan sebuah partai untuk lolos?",
        answer: 4000000,
        tolerance: 0,
        suffix: "suara",
        solution:
          "4% dari 100 juta = 0,04 x 100.000.000 = <strong>4.000.000 suara</strong>. Partai di bawah jumlah ini tidak mendapat kursi DPR.",
        hint: "Kalikan total suara dengan 4% atau 0,04.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap lembaga ke cabang kekuasaannya.",
        buckets: ["Legislatif", "Eksekutif", "Yudikatif"],
        items: [
          { text: "DPR", bucket: "Legislatif" },
          { text: "DPD", bucket: "Legislatif" },
          { text: "Presiden", bucket: "Eksekutif" },
          { text: "Mahkamah Agung", bucket: "Yudikatif" },
          { text: "Mahkamah Konstitusi", bucket: "Yudikatif" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kekuasaan dibagi menjadi legislatif, eksekutif, dan yudikatif agar saling mengawasi.",
          "DPR dan DPD menjalankan fungsi legislatif, presiden memimpin eksekutif.",
          "MA dan Mahkamah Konstitusi memegang kekuasaan yudikatif.",
          "Otonomi daerah dimulai dengan UU Nomor 22 Tahun 1999.",
          "Sejak 2005 kepala daerah dipilih langsung lewat pilkada.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Lembaga mana yang menjalankan fungsi legislatif?",
            options: ["Presiden", "DPR", "Mahkamah Agung", "BPK"],
            answer: 1,
            explain: "DPR bersama DPD menjalankan fungsi legislatif, yaitu membuat undang-undang.",
          },
          {
            q: "Ke cabang mana Mahkamah Konstitusi termasuk?",
            options: ["Legislatif", "Eksekutif", "Yudikatif", "Tidak termasuk apa pun"],
            answer: 2,
            explain: "Mahkamah Konstitusi termasuk cabang yudikatif yang mengadili perkara konstitusi.",
          },
          {
            q: "Undang-undang apa yang memulai otonomi daerah?",
            options: [
              "UU Nomor 22 Tahun 1999",
              "UU Nomor 24 Tahun 2003",
              "Dekrit 5 Juli 1959",
              "UUD 1945 asli",
            ],
            answer: 0,
            explain: "Otonomi daerah dimulai dengan UU Nomor 22 Tahun 1999.",
          },
          {
            q: "Sejak tahun berapa kepala daerah dipilih langsung lewat pilkada?",
            options: ["1999", "2004", "2005", "2014"],
            answer: 2,
            explain: "Pilkada langsung mulai digelar sejak 2005.",
          },
          {
            q: "Berapa ambang batas parlemen sejak pemilu 2019?",
            options: ["2,5%", "3,5%", "4%", "5%"],
            answer: 2,
            explain: "Sejak 2019 ambang parlemen ditetapkan 4% suara sah nasional.",
          },
        ],
      },
    ],
  },
];
