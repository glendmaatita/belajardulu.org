import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "lahirnya-bilangan",
    levelId: "bilangan-pola",
    order: 1,
    title: "Dari Menghitung Domba ke Bilangan",
    summary:
      "Bilangan tidak jatuh dari langit. Kita telusuri bagaimana manusia menemukannya dari kebutuhan sehari-hari.",
    durationMin: 12,
    tags: ["bilangan", "sejarah", "konsep", "abstraksi"],
    blocks: [
      {
        type: "paragraph",
        html: "Ribuan tahun lalu, seorang gembala perlu tahu apakah semua dombanya pulang. Ia belum punya angka. Bagaimana ia melakukannya? Mari berpetualang ke masa itu sebelum kita bicara lambang bilangan.",
      },
      {
        type: "video",
        comp: "LahirnyaBilangan",
        title: "Video: Bagaimana Bilangan Lahir",
        caption: "Dari satu batu untuk satu domba, menuju lambang angka yang abstrak.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sang gembala menaruh <strong>satu batu</strong> di kantong untuk tiap domba yang keluar. Saat domba pulang, ia membuang satu batu untuk tiap domba. Jika masih ada batu tersisa, ada domba yang hilang. Ia berhitung tanpa angka. Inilah ide <strong>korespondensi satu lawan satu</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Lompatan besar: abstraksi",
        html: "Lama-kelamaan orang sadar bahwa 'tiga batu', 'tiga domba', dan 'tiga pohon' punya sesuatu yang sama, yaitu sifat <strong>tiga</strong>. Lahirlah bilangan sebagai gagasan abstrak yang lepas dari bendanya.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Berapa Lambang untuk Menulis Bilangan 50?",
        unit: "banyak lambang",
        source: "ilustrasi edukatif",
        note: "Inilah kekuatan abstraksi. Sistem takik perlu 50 goresan, angka Romawi cukup satu huruf L, sedangkan sistem Hindu-Arab hanya butuh dua angka, yaitu 5 dan 0. Cara menulis yang lebih abstrak jauh lebih ringkas.",
        data: [
          { label: "Takik (goresan)", value: 50, color: "#fbbf24" },
          { label: "Romawi (L)", value: 1, color: "#60a5fa" },
          { label: "Hindu-Arab (50)", value: 2, color: "#34d399" },
        ],
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang gembala punya 12 batu untuk 12 domba. Saat pulang, 3 batu tersisa di kantong. Berapa domba yang belum kembali?",
        answer: 3,
        suffix: " domba",
        solution:
          "Setiap batu tersisa berarti satu domba belum membuang batunya, jadi <strong>3 domba</strong> belum kembali. Ini korespondensi satu lawan satu, jauh sebelum rumus.",
        hint: "Satu batu tersisa mewakili satu domba yang belum pulang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang petani menggores satu takik di kayunya untuk setiap karung panen. Di akhir musim ada 27 takik. Berapa karung yang ia panen?",
        answer: 27,
        suffix: " karung",
        solution:
          "Tiap takik mewakili tepat satu karung, jadi banyak karung sama dengan banyak takik, yaitu <strong>27 karung</strong>. Inilah korespondensi satu lawan satu, mencatat jumlah tanpa lambang angka.",
        hint: "Satu takik berarti satu karung, jadi hitung saja takiknya.",
      },
      {
        type: "case",
        title: "Studi Kasus: Tulang Ishango",
        html: "Di Afrika ditemukan <strong>Tulang Ishango</strong> berusia sekitar 20.000 tahun dengan deretan takik yang tergores rapi. Banyak ahli menduga itu alat mencatat jumlah, salah satu jejak tertua manusia 'menuliskan' bilangan. Jauh sebelum ada angka modern, manusia sudah berpetualang dengan cara mereka sendiri untuk mencatat kuantitas.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Gagasan pun lahir di akhir",
        html: "Setelah menelusuri sejarahnya, baru kita rumuskan: <strong>bilangan adalah gagasan abstrak untuk menyatakan banyaknya sesuatu</strong>, yang tumbuh dari kebutuhan nyata, bukan diturunkan begitu saja.",
      },
      {
        type: "takeaways",
        items: [
          "Bilangan lahir dari kebutuhan nyata seperti menghitung ternak.",
          "Korespondensi satu lawan satu adalah cara berhitung sebelum ada angka.",
          "Lompatan besar terjadi saat manusia memikirkan 'tiga' lepas dari bendanya.",
          "Angka modern adalah hasil abstraksi panjang, bukan sesuatu yang tiba-tiba ada.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Cara gembala memastikan dombanya lengkap tanpa angka adalah?",
            options: ["Menebak", "Korespondensi satu lawan satu", "Mengira-ira", "Menghafal wajah domba"],
            answer: 1,
            explain: "Satu batu mewakili satu domba, itulah korespondensi satu lawan satu.",
          },
          {
            q: "Lompatan terpenting dalam sejarah bilangan adalah?",
            options: [
              "Menemukan kalkulator",
              "Abstraksi: memikirkan kuantitas lepas dari bendanya",
              "Menghafal perkalian",
              "Membuat uang",
            ],
            answer: 1,
            explain: "Menyadari 'tiga' yang sama pada benda berbeda adalah inti abstraksi.",
          },
          {
            q: "Tulang Ishango diduga berfungsi sebagai?",
            options: ["Senjata", "Alat mencatat jumlah", "Perhiasan", "Mata uang"],
            answer: 1,
            explain: "Deretan takiknya diduga untuk mencatat kuantitas.",
          },
          {
            q: "Pernyataan yang benar tentang bilangan adalah?",
            options: [
              "Bilangan selalu ada sejak awal",
              "Bilangan adalah gagasan abstrak hasil kebutuhan manusia",
              "Bilangan hanya untuk berdagang",
              "Bilangan tidak berkaitan dengan kehidupan",
            ],
            answer: 1,
            explain: "Bilangan tumbuh dari kebutuhan nyata lalu menjadi gagasan abstrak.",
          },
          {
            q: "Jika 5 batu tersisa dari 20 batu untuk 20 kambing, berapa kambing belum pulang?",
            options: ["5", "15", "20", "25"],
            answer: 0,
            explain: "Tiap batu tersisa mewakili satu kambing, jadi 5 kambing belum pulang.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "operasi-cerita",
    levelId: "bilangan-pola",
    order: 2,
    title: "Empat Operasi lewat Cerita Sehari-hari",
    summary:
      "Penjumlahan, pengurangan, perkalian, dan pembagian bukan rumus kering. Kita temukan keempatnya dari kejadian nyata seperti belanja dan berbagi.",
    durationMin: 13,
    tags: ["operasi", "berhitung", "sehari-hari", "perkalian"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu ke warung membawa selembar uang, lalu pulang membawa beberapa barang dan uang kembalian. Tanpa sadar, kamu baru saja memakai beberapa 'operasi' sekaligus. Sebelum menghafal tanda <strong>+</strong>, <strong>-</strong>, <strong>x</strong>, dan <strong>:</strong>, mari kita temukan dulu maknanya dari cerita sehari-hari.",
      },
      {
        type: "video",
        comp: "EmpatOperasi",
        title: "Video: Empat Operasi dari Cerita Nyata",
        caption: "Menggabung, mengambil, mengulang, dan membagi rata, semuanya lahir dari situasi sehari-hari.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba rasakan empat cerita ini: <strong>menggabung</strong> 3 apel dengan 4 jeruk, <strong>mengurangi</strong> uang Rp 10.000 setelah membeli sesuatu, <strong>menyalin</strong> jajan yang sama untuk beberapa teman, dan <strong>membagi rata</strong> kue ke semua orang. Empat rasa inilah yang nanti kita beri nama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Menggabung dan mengambil",
        html: "Saat dua kelompok benda <strong>digabung</strong>, banyaknya bertambah. Itulah <strong>penjumlahan</strong>. Saat sebagian benda <strong>diambil</strong>, banyaknya berkurang. Itulah <strong>pengurangan</strong>. Keduanya saling membalikkan: jika 3 + 4 = 7, maka 7 - 4 = 3.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Perkalian itu penjumlahan yang diulang",
        html: "Kalau 4 anak masing-masing dapat 3 permen, kamu bisa menjumlah 3 + 3 + 3 + 3 = 12. Daripada lelah menulis berulang, kita singkat menjadi 4 x 3. Jadi <strong>perkalian adalah penjumlahan berulang</strong>. Lawannya, membagi 12 permen rata ke 4 anak, adalah <strong>pembagian</strong>.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "4 x 3 sebagai Penjumlahan Berulang (ilustrasi)",
        unit: "jumlah permen",
        source: "ilustrasi edukatif",
        note: "Tiap langkah menambah 3. Setelah 4 langkah, totalnya 12. Itulah 4 x 3.",
        data: [
          { label: "1 kelompok (3)", value: 3, color: "#fbbf24" },
          { label: "2 kelompok (3+3)", value: 6, color: "#60a5fa" },
          { label: "3 kelompok", value: 9, color: "#34d399" },
          { label: "4 kelompok", value: 12, color: "#f472b6" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorOperasi",
      },
      {
        type: "calcExercise",
        prompt:
          "Di toko, kamu membeli 3 buku tulis yang harganya sama, yaitu Rp 4.500 per buku. Berapa total yang harus dibayar?",
        answer: 13500,
        prefix: "Rp ",
        solution:
          "Membeli 3 buku dengan harga sama adalah penjumlahan berulang: 4.500 + 4.500 + 4.500, atau singkatnya 3 x 4.500 = <strong>Rp 13.500</strong>.",
        hint: "Harga yang sama dibeli beberapa kali, itu perkalian.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu membayar dengan uang Rp 20.000 untuk belanja seharga Rp 13.500. Berapa rupiah kembalianmu?",
        answer: 6500,
        prefix: "Rp ",
        solution:
          "Kembalian adalah sisa setelah uang diambil untuk membayar, jadi pengurangan: 20.000 - 13.500 = <strong>Rp 6.500</strong>.",
        hint: "Uang yang kamu beri dikurangi harga belanja.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap cerita ke operasi yang paling tepat.",
        buckets: ["Penjumlahan", "Pengurangan", "Perkalian", "Pembagian"],
        items: [
          { text: "Menggabung 5 kelereng merah dengan 8 kelereng biru", bucket: "Penjumlahan" },
          { text: "Roti 12 potong dibagi rata untuk 3 orang", bucket: "Pembagian" },
          { text: "6 kotak masing-masing berisi 10 telur", bucket: "Perkalian" },
          { text: "Sisa pulsa setelah dipakai menelepon", bucket: "Pengurangan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Belanja Bekal Piknik",
        html: "Ibu menyiapkan piknik. Ia membeli <strong>4 bungkus roti</strong> seharga Rp 6.000 per bungkus, jadi 4 x 6.000 = Rp 24.000. Ditambah <strong>2 botol jus</strong> seharga Rp 8.000 per botol, yaitu 2 x 8.000 = Rp 16.000. Total belanja 24.000 + 16.000 = <strong>Rp 40.000</strong>. Ibu membayar Rp 50.000, sehingga kembaliannya 50.000 - 40.000 = <strong>Rp 10.000</strong>. Lalu seluruh 6 buah roti dan jus dibagi rata untuk 3 anak, masing-masing menerima 6 : 3 = <strong>2 barang</strong>. Empat operasi muncul sekaligus dalam satu cerita.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir",
        html: "Setelah menelusuri ceritanya, baru kita rumuskan: <strong>penjumlahan</strong> menggabung kuantitas, <strong>pengurangan</strong> kebalikannya. <strong>Perkalian</strong> adalah penjumlahan berulang, a x b berarti b dijumlahkan sebanyak a kali, dan <strong>pembagian</strong> adalah kebalikan perkalian. Karena itu jika a x b = c, maka c : a = b.",
      },
      {
        type: "takeaways",
        items: [
          "Empat operasi dasar lahir dari situasi nyata: menggabung, mengambil, mengulang, dan membagi rata.",
          "Penjumlahan dan pengurangan saling membalikkan.",
          "Perkalian adalah cara singkat untuk penjumlahan berulang.",
          "Pembagian adalah kebalikan perkalian, sehingga keduanya bisa saling memeriksa.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Cerita 'menggabung 3 apel dengan 4 jeruk' paling tepat mewakili operasi?",
            options: ["Pengurangan", "Penjumlahan", "Perkalian", "Pembagian"],
            answer: 1,
            explain: "Menggabung dua kelompok berarti menambah banyaknya, itu penjumlahan.",
          },
          {
            q: "Mengapa 5 x 3 sama dengan 15?",
            options: [
              "Karena 5 ditambah 3",
              "Karena 3 dijumlahkan sebanyak 5 kali",
              "Karena 5 dibagi 3",
              "Karena 5 dikurangi 3",
            ],
            answer: 1,
            explain: "Perkalian adalah penjumlahan berulang: 3+3+3+3+3 = 15.",
          },
          {
            q: "Operasi yang merupakan kebalikan dari perkalian adalah?",
            options: ["Penjumlahan", "Pengurangan", "Pembagian", "Tidak ada"],
            answer: 2,
            explain: "Jika 4 x 3 = 12, maka 12 : 4 = 3. Pembagian membalik perkalian.",
          },
          {
            q: "12 kue dibagi rata untuk 4 anak. Tiap anak menerima?",
            options: ["3 kue", "4 kue", "8 kue", "16 kue"],
            answer: 0,
            explain: "12 : 4 = 3, jadi tiap anak mendapat 3 kue.",
          },
          {
            q: "Bayar Rp 15.000 untuk belanja Rp 9.000. Kembaliannya?",
            options: ["Rp 6.000", "Rp 5.000", "Rp 24.000", "Rp 9.000"],
            answer: 0,
            explain: "Kembalian adalah pengurangan: 15.000 - 9.000 = 6.000.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pecahan-desimal-persen",
    levelId: "bilangan-pola",
    order: 3,
    title: "Pecahan, Desimal, dan Persen",
    summary:
      "Tiga cara berbeda untuk menulis 'sebagian dari keseluruhan'. Kita mulai dari berbagi pizza sampai memburu diskon, lalu melihat bagaimana ketiganya terhubung.",
    durationMin: 14,
    tags: ["pecahan", "desimal", "persen", "sehari-hari"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah pizza dipotong menjadi 8 bagian sama besar, lalu kamu memakan 2 potong. Berapa bagian pizza yang kamu makan? Pertanyaan sederhana ini ternyata bisa dijawab dengan tiga 'bahasa' yang berbeda. Mari kita jelajahi dulu sebelum bertemu aturannya.",
      },
      {
        type: "video",
        comp: "PersenVideo",
        title: "Video: Persen sebagai Bagian per Seratus",
        caption: "Lewat kotak 10 x 10, kita lihat bagaimana pecahan, desimal, dan persen menyatakan bagian yang sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang gambaran pizza tadi. Makan 2 dari 8 potong bisa ditulis sebagai <strong>pecahan</strong> 2/8, yang setara dengan 1/4. Bisa juga ditulis sebagai <strong>desimal</strong> 0,25, atau sebagai <strong>persen</strong> 25%. Tiga tulisan, satu makna yang sama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pecahan: berapa potong dari berapa potong",
        html: "Pecahan a/b berarti keseluruhan dibagi menjadi <strong>b</strong> bagian sama, lalu kita ambil <strong>a</strong> bagian. Pada pizza, 2/8 artinya 2 dari 8 potong. Karena 2 dan 8 sama-sama bisa dibagi 2, pecahan ini bisa disederhanakan menjadi 1/4.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Desimal dan persen: dua busana lain",
        html: "Kalau pembilang kita bagi penyebutnya, 1 : 4 = 0,25, itulah bentuk <strong>desimal</strong>. Kalau kita bayangkan keseluruhan sebagai 100 bagian, maka 0,25 sama dengan 25 dari 100, ditulis <strong>25%</strong>. Persen sebenarnya hanya pecahan dengan penyebut 100.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Pizza 8 Potong, Dimakan 2 (ilustrasi)",
        unit: "potong",
        source: "ilustrasi edukatif",
        note: "Bagian yang dimakan adalah 2 dari 8, yaitu 2/8 = 1/4 = 0,25 = 25%.",
        data: [
          { label: "Dimakan", value: 2, color: "#f472b6" },
          { label: "Tersisa", value: 6, color: "#60a5fa" },
        ],
      },
      {
        type: "chart",
        variant: "bar",
        title: "Satu Nilai, Tiga Busana (ilustrasi)",
        unit: "persen dari keseluruhan",
        source: "ilustrasi edukatif",
        note: "Tiap pecahan punya pasangan desimal dan persennya. Tinggi batang adalah nilai persennya.",
        data: [
          { label: "1/5 = 0,2", value: 20, color: "#fbbf24" },
          { label: "1/4 = 0,25", value: 25, color: "#60a5fa" },
          { label: "1/2 = 0,5", value: 50, color: "#34d399" },
          { label: "3/4 = 0,75", value: 75, color: "#f472b6" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorPecahan",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah baju berharga Rp 80.000 sedang diskon 25%. Berapa rupiah potongan harganya?",
        answer: 20000,
        prefix: "Rp ",
        solution:
          "Diskon 25% sama dengan 1/4 dari harga. Seperempat dari 80.000 adalah 80.000 : 4 = <strong>Rp 20.000</strong>.",
        hint: "25% sama dengan 1/4. Cari seperempat dari harga.",
      },
      {
        type: "calcExercise",
        prompt: "Tulis pecahan 3/4 dalam bentuk persen. Berapa persennya?",
        answer: 75,
        suffix: "%",
        solution:
          "3/4 berarti 3 : 4 = 0,75. Untuk menjadi persen, kalikan 100: 0,75 x 100 = <strong>75%</strong>.",
        hint: "Bagi dulu 3 dengan 4, lalu kalikan 100.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap pecahan dengan bentuk persennya.",
        pairs: [
          { left: "1/2", right: "50%" },
          { left: "1/4", right: "25%" },
          { left: "1/5", right: "20%" },
          { left: "3/4", right: "75%" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Berburu Diskon di Toko",
        html: "Sebuah jaket dipajang seharga <strong>Rp 120.000</strong> dengan label diskon <strong>30%</strong>. Berapa yang kamu bayar? Diskon 30% berarti 30/100, atau desimal 0,3. Potongannya 0,3 x 120.000 = Rp 36.000. Maka harga yang dibayar adalah 120.000 - 36.000 = <strong>Rp 84.000</strong>. Perhatikan, satu soal toko ini sekaligus memakai persen, desimal, perkalian, dan pengurangan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir",
        html: "Setelah menjelajahi pizza dan diskon, baru kita rumuskan hubungannya: <strong>pecahan a/b = a : b (desimal)</strong>, dan <strong>persen = desimal x 100%</strong>. Sebaliknya, persen dibagi 100 kembali menjadi desimal. Contoh: 1/4 = 0,25 = 25%. Ketiganya hanyalah tiga cara menulis nilai yang sama.",
      },
      {
        type: "takeaways",
        items: [
          "Pecahan, desimal, dan persen adalah tiga cara menulis bagian dari keseluruhan.",
          "Pecahan a/b sama dengan hasil bagi a : b dalam bentuk desimal.",
          "Persen adalah pecahan dengan penyebut 100, yaitu desimal dikali 100.",
          "Memahami hubungannya membuat soal diskon dan pembagian jadi mudah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pecahan 1/2 sama dengan?",
            options: ["0,2 atau 20%", "0,5 atau 50%", "0,25 atau 25%", "0,75 atau 75%"],
            answer: 1,
            explain: "1 : 2 = 0,5 dan 0,5 x 100 = 50%.",
          },
          {
            q: "Persen sebenarnya adalah pecahan dengan penyebut?",
            options: ["10", "100", "1000", "Sembarang"],
            answer: 1,
            explain: "25% berarti 25/100, jadi penyebutnya selalu 100.",
          },
          {
            q: "Bentuk desimal dari 3/4 adalah?",
            options: ["0,34", "0,75", "0,43", "0,25"],
            answer: 1,
            explain: "3 : 4 = 0,75.",
          },
          {
            q: "Diskon 50% dari Rp 60.000 memotong harga sebesar?",
            options: ["Rp 30.000", "Rp 6.000", "Rp 12.000", "Rp 50.000"],
            answer: 0,
            explain: "50% sama dengan setengah, dan setengah dari 60.000 adalah 30.000.",
          },
          {
            q: "Manakah pernyataan yang benar?",
            options: [
              "Pecahan, desimal, dan persen selalu bernilai berbeda",
              "1/4, 0,25, dan 25% bernilai sama",
              "Persen lebih besar daripada pecahan",
              "Desimal tidak bisa diubah ke persen",
            ],
            answer: 1,
            explain: "Ketiganya adalah tiga busana untuk satu nilai yang sama.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "barisan-bilangan",
    levelId: "bilangan-pola",
    order: 4,
    title: "Menemukan Pola Barisan",
    summary:
      "Banyak hal di sekitar kita tumbuh dengan pola. Kita jelajahi barisan aritmetika dan geometri lewat contoh nyata, lalu menemukan sendiri rumus suku ke-n di akhir.",
    durationMin: 15,
    tags: ["barisan", "pola", "aritmetika", "geometri"],
    blocks: [
      {
        type: "paragraph",
        html: "Lihat anak tangga yang naik teratur, tabunganmu yang bertambah tiap minggu, atau kabar yang menyebar dari mulut ke mulut. Semua punya <strong>pola</strong>. Sebelum bertemu rumus suku ke-n, mari kita berburu pola itu dulu dengan mata kita sendiri.",
      },
      {
        type: "video",
        comp: "PolaAlam",
        title: "Video: Pola yang Bersembunyi di Alam",
        caption: "Dari kelopak bunga sampai cangkang siput, alam penuh barisan bilangan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tebak angka berikutnya pada dua barisan ini. Pertama: 2, 5, 8, 11, ... Kedua: 2, 4, 8, 16, ... Rasakan bedanya: yang satu <strong>bertambah tetap</strong> tiap langkah, yang lain <strong>berlipat tetap</strong>. Dua cara tumbuh yang sangat berbeda.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Barisan aritmetika: menambah yang sama",
        html: "Pada 2, 5, 8, 11, setiap suku diperoleh dengan <strong>menambah 3</strong> dari suku sebelumnya. Selisih tetap ini disebut <strong>beda</strong>. Inilah barisan <strong>aritmetika</strong>, tumbuh lurus dan stabil seperti menabung jumlah yang sama tiap hari.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Barisan geometri: melipatkan yang sama",
        html: "Pada 2, 4, 8, 16, setiap suku diperoleh dengan <strong>mengali 2</strong> dari suku sebelumnya. Pengali tetap ini disebut <strong>rasio</strong>. Inilah barisan <strong>geometri</strong>, yang tumbuh meledak cepat, seperti kabar yang setiap orang teruskan ke dua orang lain.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Barisan Aritmetika 2, 5, 8, 11, 14 (ilustrasi)",
        unit: "nilai suku",
        source: "ilustrasi edukatif",
        note: "Garis naik lurus karena selalu bertambah 3. Pertumbuhan ini stabil.",
        data: [
          { label: "Suku 1", value: 2, color: "#60a5fa" },
          { label: "Suku 2", value: 5, color: "#60a5fa" },
          { label: "Suku 3", value: 8, color: "#60a5fa" },
          { label: "Suku 4", value: 11, color: "#60a5fa" },
          { label: "Suku 5", value: 14, color: "#60a5fa" },
        ],
      },
      {
        type: "chart",
        variant: "area",
        title: "Barisan Geometri 2, 4, 8, 16, 32 (ilustrasi)",
        unit: "nilai suku",
        source: "ilustrasi edukatif",
        note: "Kurva melengkung naik makin curam karena selalu dikali 2. Pertumbuhan ini meledak.",
        data: [
          { label: "Suku 1", value: 2, color: "#f472b6" },
          { label: "Suku 2", value: 4, color: "#f472b6" },
          { label: "Suku 3", value: 8, color: "#f472b6" },
          { label: "Suku 4", value: 16, color: "#f472b6" },
          { label: "Suku 5", value: 32, color: "#f472b6" },
        ],
      },
      {
        type: "chart",
        variant: "bar",
        title: "Barisan Fibonacci 1, 1, 2, 3, 5, 8, 13 (ilustrasi)",
        unit: "nilai suku",
        source: "ilustrasi edukatif",
        note: "Tiap suku adalah jumlah dua suku sebelumnya. Pola ini sering muncul di alam.",
        data: [
          { label: "Suku 1", value: 1, color: "#34d399" },
          { label: "Suku 2", value: 1, color: "#34d399" },
          { label: "Suku 3", value: 2, color: "#34d399" },
          { label: "Suku 4", value: 3, color: "#34d399" },
          { label: "Suku 5", value: 5, color: "#34d399" },
          { label: "Suku 6", value: 8, color: "#34d399" },
          { label: "Suku 7", value: 13, color: "#34d399" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorFibonacci",
      },
      {
        type: "calcExercise",
        prompt:
          "Barisan aritmetika 4, 7, 10, 13, ... Suku pertamanya 4 dan bedanya 3. Berapa nilai suku ke-10?",
        answer: 31,
        solution:
          "Dari suku pertama, kita menambah beda sebanyak (10 - 1) = 9 kali: 4 + 9 x 3 = 4 + 27 = <strong>31</strong>.",
        hint: "Untuk mencapai suku ke-10, beda ditambahkan sebanyak 9 kali.",
      },
      {
        type: "calcExercise",
        prompt:
          "Barisan geometri 3, 6, 12, 24, ... Suku pertamanya 3 dan rasionya 2. Berapa nilai suku ke-5?",
        answer: 48,
        solution:
          "Dari suku pertama, kita mengali rasio sebanyak (5 - 1) = 4 kali: 3 x 2 x 2 x 2 x 2 = 3 x 16 = <strong>48</strong>.",
        hint: "Untuk mencapai suku ke-5, rasio dikalikan sebanyak 4 kali.",
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan jenis tiap barisan: bertambah tetap (aritmetika) atau berlipat tetap (geometri).",
        buckets: ["Aritmetika", "Geometri"],
        items: [
          { text: "5, 9, 13, 17, ...", bucket: "Aritmetika" },
          { text: "1, 3, 9, 27, ...", bucket: "Geometri" },
          { text: "100, 90, 80, 70, ...", bucket: "Aritmetika" },
          { text: "2, 10, 50, 250, ...", bucket: "Geometri" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kabar yang Menyebar Cepat",
        html: "Hari ini <strong>1 orang</strong> tahu sebuah kabar. Setiap putaran, tiap orang yang tahu menceritakannya ke <strong>2 orang baru</strong>, sehingga jumlah yang tahu berlipat. Putaran demi putaran: 1, 2, 4, 8, 16, ... Ini barisan geometri dengan rasio 2. Setelah 10 putaran, jumlah yang tahu menjadi 2 pangkat 10, yaitu <strong>1.024 orang</strong>. Bandingkan jika tiap putaran hanya bertambah 2 orang (aritmetika), setelah 10 putaran hanya sekitar 21 orang. Pertumbuhan geometri jauh lebih meledak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir",
        html: "Setelah berburu pola, baru rumusnya muncul. Untuk <strong>aritmetika</strong>: suku ke-n adalah <strong>Un = a + (n - 1) x b</strong>, dengan a suku pertama dan b beda. Untuk <strong>geometri</strong>: suku ke-n adalah <strong>Un = a x r pangkat (n - 1)</strong>, dengan r rasio. Rumus ini hanyalah ringkasan dari pola yang sudah kamu temukan sendiri.",
      },
      {
        type: "takeaways",
        items: [
          "Barisan aritmetika tumbuh dengan menambah beda yang tetap tiap langkah.",
          "Barisan geometri tumbuh dengan mengali rasio yang tetap tiap langkah.",
          "Pertumbuhan geometri jauh lebih cepat daripada aritmetika.",
          "Rumus suku ke-n adalah ringkasan dari pola, bukan titik awal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Barisan 2, 5, 8, 11, ... termasuk jenis?",
            options: ["Geometri", "Aritmetika", "Fibonacci", "Acak"],
            answer: 1,
            explain: "Selisih antar suku tetap 3, jadi aritmetika.",
          },
          {
            q: "Barisan 3, 6, 12, 24, ... termasuk jenis?",
            options: ["Aritmetika", "Geometri", "Acak", "Tidak berpola"],
            answer: 1,
            explain: "Tiap suku dikali 2 dari sebelumnya, jadi geometri dengan rasio 2.",
          },
          {
            q: "Beda dari barisan 7, 11, 15, 19, ... adalah?",
            options: ["3", "4", "5", "7"],
            answer: 1,
            explain: "11 - 7 = 4, dan selisihnya selalu 4.",
          },
          {
            q: "Suku ke-5 dari barisan geometri 1, 2, 4, 8, ... adalah?",
            options: ["10", "12", "16", "32"],
            answer: 2,
            explain: "1, 2, 4, 8, 16. Tiap suku dikali 2, jadi suku ke-5 adalah 16.",
          },
          {
            q: "Rumus suku ke-n barisan aritmetika adalah?",
            options: [
              "Un = a x r pangkat (n - 1)",
              "Un = a + (n - 1) x b",
              "Un = a + b + n",
              "Un = a x n",
            ],
            answer: 1,
            explain: "Beda b ditambahkan sebanyak (n - 1) kali ke suku pertama a.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "bilangan-prima",
    levelId: "bilangan-pola",
    order: 5,
    title: "Bilangan Prima: Batu Bata Penyusun Bilangan",
    summary:
      "Kita coba pecah bilangan menjadi perkalian yang lebih kecil, sampai bertemu bilangan yang tak bisa dipecah lagi, lalu menemukan mengapa ia begitu istimewa.",
    durationMin: 14,
    tags: ["bilangan prima", "faktorisasi", "pola", "bilangan"],
    blocks: [
      {
        type: "paragraph",
        html: "Ambil bilangan 12. Bisakah kamu menuliskannya sebagai perkalian dua bilangan yang lebih kecil? Tentu: 12 = 2 x 6. Lalu 6 masih bisa dipecah menjadi 2 x 3. Sekarang coba bilangan 7. Bisakah kamu memecahnya menjadi perkalian bilangan lebih kecil selain 1 x 7? Ternyata tidak. Ada bilangan yang bisa dipecah, ada yang tidak. Ayo selidiki dulu sebelum menamainya.",
      },
      {
        type: "video",
        comp: "LahirnyaBilangan",
        title: "Video: Bagaimana Bilangan Lahir",
        caption: "Setelah mengenal bilangan, kita temukan bahwa sebagian bilangan adalah penyusun bagi yang lain.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Jadilah pemecah bilangan. Pecah terus tiap bilangan menjadi perkalian sampai tidak bisa lagi: 12 = 2 x 2 x 3, lalu 30 = 2 x 3 x 5, lalu 18 = 2 x 3 x 3. Perhatikan, di ujung pemecahan selalu muncul bilangan yang sama, yaitu 2, 3, 5, 7, dan kawan-kawan yang tak bisa dipecah lagi. Siapa mereka?",
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "callout",
        tone: "info",
        title: "Yang bisa dipecah dan yang tidak",
        html: "Bilangan yang masih bisa dipecah menjadi perkalian bilangan lebih kecil disebut <strong>bilangan komposit</strong>, misalnya 12, 30, dan 18. Bilangan yang hanya bisa dibagi habis oleh 1 dan dirinya sendiri disebut <strong>bilangan prima</strong>, misalnya 2, 3, 5, dan 7. Catatan penting: angka 1 bukan prima maupun komposit, ia berdiri sendiri.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Banyaknya Bilangan Prima sampai Batas Tertentu",
        unit: "jumlah bilangan prima",
        source: "fakta matematika",
        note: "Sampai 10 ada 4 prima, sampai 20 ada 8, sampai 30 ada 10, sampai 50 ada 15. Jumlahnya terus bertambah, tetapi makin jarang. Prima makin langka saat bilangan membesar.",
        data: [
          { label: "sampai 10", value: 4, color: "#34d399" },
          { label: "sampai 20", value: 8, color: "#60a5fa" },
          { label: "sampai 30", value: 10, color: "#a78bfa" },
          { label: "sampai 50", value: 15, color: "#f472b6" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Faktorkan 36 menjadi perkalian bilangan prima. Hasilnya 2 x 2 x 3 x 3. Ada berapa faktor prima jika pengulangan ikut dihitung?",
        answer: 4,
        suffix: " faktor",
        solution:
          "36 = 4 x 9 = (2 x 2) x (3 x 3) = 2 x 2 x 3 x 3. Ada <strong>4 faktor prima</strong> bila pengulangan dihitung.",
        hint: "Pecah 36 sampai semua bagiannya bilangan prima, lalu hitung banyaknya.",
      },
      {
        type: "calcExercise",
        prompt: "Berapa banyak bilangan prima antara 1 dan 20?",
        answer: 8,
        suffix: " bilangan",
        solution:
          "Bilangan prima sampai 20 adalah 2, 3, 5, 7, 11, 13, 17, 19. Jumlahnya <strong>8 bilangan</strong>.",
        hint: "Daftar bilangan yang hanya habis dibagi 1 dan dirinya, mulai dari 2.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap bilangan: prima atau komposit?",
        buckets: ["Prima", "Komposit"],
        items: [
          { text: "7", bucket: "Prima" },
          { text: "9", bucket: "Komposit" },
          { text: "2", bucket: "Prima" },
          { text: "15", bucket: "Komposit" },
          { text: "13", bucket: "Prima" },
          { text: "21", bucket: "Komposit" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap bilangan dengan faktorisasi primanya.",
        pairs: [
          { left: "12", right: "2 x 2 x 3" },
          { left: "30", right: "2 x 3 x 5" },
          { left: "18", right: "2 x 3 x 3" },
          { left: "20", right: "2 x 2 x 5" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Saringan Eratosthenes",
        html: "Lebih dari 2.000 tahun lalu, seorang ilmuwan Yunani bernama <strong>Eratosthenes</strong> menemukan cara rapi untuk memburu bilangan prima. Tulis semua bilangan dari 2 ke atas, lalu coret semua kelipatan 2 (kecuali 2 sendiri), lalu kelipatan 3, lalu kelipatan 5, dan seterusnya. Bilangan yang lolos dari semua coretan itulah bilangan prima. Cara sederhana ini, yang kini disebut <strong>saringan Eratosthenes</strong>, masih dipakai sampai sekarang. Bilangan prima besar bahkan menjadi kunci pengaman transaksi internet dan perbankan, karena sangat sulit memecah bilangan raksasa kembali menjadi faktor primanya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir",
        html: "Setelah memecah banyak bilangan, polanya jelas. Barulah kita simpulkan: <strong>bilangan prima adalah bilangan asli lebih dari 1 yang hanya habis dibagi 1 dan dirinya sendiri</strong>. Setiap bilangan komposit dapat ditulis sebagai perkalian bilangan prima dengan cara yang tunggal. Itulah sebabnya prima disebut batu bata penyusun semua bilangan.",
      },
      {
        type: "takeaways",
        items: [
          "Bilangan prima hanya habis dibagi 1 dan dirinya sendiri, seperti 2, 3, 5, 7.",
          "Bilangan komposit masih bisa dipecah menjadi perkalian bilangan lebih kecil.",
          "Setiap bilangan dapat disusun dari perkalian bilangan prima secara tunggal.",
          "Angka 1 bukan prima maupun komposit.",
          "Bilangan prima makin langka saat bilangan membesar, dan berguna untuk keamanan data.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bilangan prima adalah bilangan yang?",
            options: [
              "Selalu genap",
              "Lebih dari 1 dan hanya habis dibagi 1 dan dirinya sendiri",
              "Bisa dipecah menjadi banyak faktor",
              "Selalu lebih besar dari 100",
            ],
            answer: 1,
            explain: "Prima hanya punya dua pembagi, yaitu 1 dan dirinya sendiri.",
          },
          {
            q: "Manakah yang merupakan bilangan prima?",
            options: ["9", "15", "17", "21"],
            answer: 2,
            explain: "17 hanya habis dibagi 1 dan 17, sedangkan yang lain bisa dipecah.",
          },
          {
            q: "Faktorisasi prima dari 12 adalah?",
            options: ["2 x 6", "3 x 4", "2 x 2 x 3", "12 x 1"],
            answer: 2,
            explain: "Pemecahan lengkap sampai semuanya prima adalah 2 x 2 x 3.",
          },
          {
            q: "Mengapa bilangan prima disebut batu bata penyusun bilangan?",
            options: [
              "Karena bentuknya seperti bata",
              "Karena setiap bilangan bisa disusun dari perkalian bilangan prima",
              "Karena selalu berjumlah genap",
              "Karena hanya ada sedikit",
            ],
            answer: 1,
            explain: "Semua bilangan komposit tersusun dari perkalian bilangan prima.",
          },
          {
            q: "Saringan Eratosthenes dipakai untuk?",
            options: [
              "Menghitung luas",
              "Menemukan bilangan prima dengan mencoret kelipatan",
              "Menggambar lingkaran",
              "Membagi pecahan",
            ],
            answer: 1,
            explain: "Dengan mencoret semua kelipatan, yang tersisa adalah bilangan prima.",
          },
        ],
      },
    ],
  },
];
