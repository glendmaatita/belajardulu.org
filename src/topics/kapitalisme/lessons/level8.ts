import type { Lesson } from "../../../types";

export const level8: Lesson[] = [
  // ============================================================
  {
    id: "kritik-marx-ketimpangan",
    levelId: "kritik",
    order: 1,
    title: "Kritik Marx & Ketimpangan",
    summary:
      "Kapitalisme menghasilkan kemakmuran, tetapi juga ketimpangan. Pahami kritik Karl Marx dan cara mengukur kesenjangan lewat koefisien Gini.",
    durationMin: 15,
    tags: ["kritik", "marx", "ketimpangan", "gini"],
    blocks: [
      {
        type: "paragraph",
        html: "Kapitalisme terbukti melipatgandakan produksi, tetapi hasilnya tidak terbagi rata. Kritik paling terkenal datang dari <strong>Karl Marx</strong> (1818-1883), yang berargumen bahwa pemilik modal mengambil <strong>nilai lebih</strong> dari kerja buruh, sehingga si kaya makin kaya dan buruh tertekan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Inti kritik Marx",
        html: "Menurut Marx, nilai barang berasal dari <strong>kerja</strong>, tetapi buruh hanya menerima upah, sementara selisihnya (<strong>nilai lebih</strong>) diambil pemilik modal sebagai laba. Ia meramalkan ketegangan kelas antara pemilik modal dan buruh.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur pangsa pendapatan lima kelompok penduduk dan lihat koefisien Gini, ukuran baku seberapa timpang pembagian pendapatan.",
      },
      { type: "widget", widget: "KalkulatorGini" },
      {
        type: "video",
        comp: "KetimpanganGiniVideo",
        title: "Kurva Lorenz & Koefisien Gini",
        caption: "Mengukur seberapa jauh pembagian pendapatan menyimpang dari kesetaraan sempurna.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png?width=400",
        alt: "Foto potret Karl Marx",
        caption: "Karl Marx (1818-1883), penulis Das Kapital, kritikus kapitalisme paling berpengaruh.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Koefisien Gini Beberapa Negara (ilustrasi)",
        unit: "koefisien Gini (0-1)",
        source: "ilustrasi edukatif, urutan mendekati pola yang dilaporkan",
        note: "Makin tinggi Gini, makin timpang. Negara Nordik cenderung rendah, sejumlah negara berkembang lebih tinggi.",
        data: [
          { label: "Nordik", value: 0.27, color: "#34d399" },
          { label: "Indonesia", value: 0.38, color: "#60a5fa" },
          { label: "Amerika Serikat", value: 0.41, color: "#fbbf24" },
          { label: "Afrika Selatan", value: 0.63, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ketika 1% menguasai banyak kekayaan",
        html: "Berbagai laporan modern menyoroti bahwa di banyak negara, segelintir orang terkaya menguasai bagian besar total kekayaan, sementara separuh penduduk berbagi sisa yang kecil. Pendukung kapitalisme menyebut sebagian ketimpangan wajar sebagai imbalan inovasi dan risiko. Kritikus menilai ketimpangan ekstrem merusak kohesi sosial dan kesempatan yang setara. Perdebatan ini, yang akarnya sudah disuarakan Marx, masih sangat hidup hari ini.",
      },
      {
        type: "case",
        title: "Sejarah: Das Kapital (1867) dan Manifesto Komunis (1848)",
        html: "Bersama Friedrich Engels, Marx menerbitkan <strong>Manifesto Komunis</strong> pada <strong>1848</strong>, lalu karya besarnya <strong>Das Kapital</strong> pada <strong>1867</strong>. Ia menganalisis kapitalisme secara mendalam dan meramalkan keruntuhannya lewat pertentangan kelas. Ramalan keruntuhan itu tidak terjadi seperti yang ia bayangkan; kapitalisme justru beradaptasi, antara lain lewat hak buruh dan negara kesejahteraan. Namun analisis Marx tentang ketimpangan dan kekuatan modal tetap berpengaruh sampai sekarang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah barang dijual menghasilkan nilai Rp100.000. Buruh menerima upah Rp30.000 untuk membuatnya. Menurut istilah Marx, berapa nilai lebih yang diambil pemilik modal?",
        answer: 70000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Nilai lebih = nilai barang - upah buruh = 100.000 - 30.000 = <strong>Rp70.000</strong>. Inilah bagian yang menurut Marx diambil pemilik modal sebagai laba.",
        hint: "Kurangkan upah buruh dari nilai barang.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan: argumen PENDUKUNG atau KRITIK terhadap ketimpangan kapitalis.",
        buckets: ["Pendukung", "Kritik"],
        items: [
          { text: "Sebagian ketimpangan adalah imbalan wajar atas inovasi dan risiko", bucket: "Pendukung" },
          { text: "Ketimpangan ekstrem merusak kesempatan yang setara", bucket: "Kritik" },
          { text: "Laba mendorong orang berani berinvestasi", bucket: "Pendukung" },
          { text: "Pemilik modal mengambil nilai lebih dari kerja buruh", bucket: "Kritik" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kapitalisme melipatgandakan produksi tetapi hasilnya tidak terbagi rata.",
          "Marx menilai pemilik modal mengambil nilai lebih dari kerja buruh.",
          "Koefisien Gini mengukur ketimpangan: 0 sangat merata, 1 sangat timpang.",
          "Ramalan keruntuhan Marx tidak terjadi; kapitalisme beradaptasi lewat hak buruh dan jaring sosial.",
          "Perdebatan apakah ketimpangan wajar atau berbahaya masih sangat hidup.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti kritik Marx terhadap kapitalisme?",
            options: [
              "Harga terlalu murah",
              "Pemilik modal mengambil nilai lebih dari kerja buruh",
              "Pasar terlalu kecil",
              "Pajak terlalu rendah",
            ],
            answer: 1,
            explain: "Marx menilai laba berasal dari nilai lebih yang tidak dibayarkan ke buruh.",
          },
          {
            q: "Apa yang diukur koefisien Gini?",
            options: ["Inflasi", "Ketimpangan pendapatan", "Pertumbuhan ekonomi", "Tingkat bunga"],
            answer: 1,
            explain: "Gini mengukur seberapa timpang pendapatan dibagi, dari 0 sampai 1.",
          },
          {
            q: "Nilai Gini mendekati 0 berarti?",
            options: ["Sangat timpang", "Sangat merata", "Inflasi tinggi", "Ekonomi tumbuh"],
            answer: 1,
            explain: "Gini 0 berarti pembagian pendapatan merata sempurna.",
          },
          {
            q: "Apa yang terjadi pada ramalan keruntuhan kapitalisme Marx?",
            options: [
              "Terbukti tepat seperti ia bayangkan",
              "Tidak terjadi; kapitalisme beradaptasi lewat hak buruh dan jaring sosial",
              "Semua negara menjadi komunis",
              "Pasar menghilang",
            ],
            answer: 1,
            explain: "Kapitalisme bertahan dengan beradaptasi, meski kritik Marx tetap berpengaruh.",
          },
          {
            q: "Nilai barang Rp100.000 dengan upah buruh Rp30.000. Nilai lebih menurut Marx?",
            options: ["Rp30.000", "Rp70.000", "Rp100.000", "Rp130.000"],
            answer: 1,
            explain: "100.000 dikurangi 30.000 sama dengan Rp70.000.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kritik-ketimpangan-gini",
    levelId: "kritik",
    order: 2,
    title: "Ketimpangan Kekayaan & Koefisien Gini",
    summary:
      "Mengapa kekayaan menumpuk di puncak? Pahami tesis r > g dari Thomas Piketty dan cara membaca konsentrasi kekayaan lewat koefisien Gini.",
    durationMin: 14,
    tags: ["kritik", "ketimpangan", "kekayaan", "piketty", "gini"],
    blocks: [
      {
        type: "paragraph",
        html: "Ketimpangan <strong>pendapatan</strong> (penghasilan per tahun) berbeda dari ketimpangan <strong>kekayaan</strong> (total aset yang sudah dikumpulkan). Kekayaan cenderung jauh lebih timpang karena aset menghasilkan aset baru: tanah, saham, dan properti menumpuk dari generasi ke generasi.",
      },
      {
        type: "paragraph",
        html: "Ekonom Prancis <strong>Thomas Piketty</strong> merangkum gejala ini dengan rumus sederhana <strong>r &gt; g</strong>: bila imbal hasil modal (r) lebih besar daripada pertumbuhan ekonomi (g), pemilik modal makin kaya lebih cepat daripada pekerja biasa, sehingga kekayaan terus memusat di puncak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tesis r > g",
        html: "Bila modal tumbuh 5 persen per tahun (r) sementara ekonomi dan upah tumbuh 2 persen (g), kekayaan lama menggelinding lebih cepat daripada penghasilan baru. Inilah mesin yang, menurut Piketty, mendorong konsentrasi kekayaan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pendapatan vs kekayaan",
        html: "Koefisien Gini untuk <strong>kekayaan</strong> hampir selalu lebih tinggi daripada Gini <strong>pendapatan</strong> di negara yang sama, karena aset menumpuk lintas waktu sedangkan upah habis dipakai hidup.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser pangsa tiap kelompok penduduk dan amati bagaimana koefisien Gini bergerak naik saat satu kelompok menguasai porsi makin besar.",
      },
      { type: "widget", widget: "KalkulatorGini" },
      {
        type: "video",
        comp: "KetimpanganGiniVideo",
        title: "Membaca Kurva Lorenz",
        caption: "Kurva Lorenz menunjukkan seberapa jauh pembagian menyimpang dari garis kesetaraan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trading_Floor_at_the_New_York_Stock_Exchange_during_the_Zendesk_IPO.jpg?width=400",
        alt: "Lantai perdagangan Bursa Efek New York",
        caption: "Pasar saham mempercepat penumpukan kekayaan bagi pemilik modal, inti dari tesis r lebih besar daripada g.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Pangsa Kekayaan per Kelompok Penduduk (ilustrasi)",
        unit: "persen total kekayaan",
        source: "ilustrasi edukatif, pola mendekati banyak laporan kekayaan modern",
        note: "Kekayaan jauh lebih memusat daripada pendapatan: kelompok teratas menguasai porsi yang tidak sebanding dengan jumlah orangnya.",
        data: [
          { label: "1% teratas", value: 40, color: "#f87171" },
          { label: "9% berikut", value: 35, color: "#fbbf24" },
          { label: "40% tengah", value: 20, color: "#60a5fa" },
          { label: "50% terbawah", value: 5, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Konsentrasi yang menua",
        html: "Bayangkan total kekayaan sebuah negeri adalah 100 satuan. Kelompok <strong>10% teratas</strong> menguasai 70 satuan, sedangkan <strong>90% sisanya</strong> berbagi 30 satuan. Rata-rata kekayaan orang di kelompok atas menjadi 70 dibagi 10 sama dengan 7 satuan per orang, sementara di kelompok bawah hanya 30 dibagi 90 sama dengan sekitar 0,33 satuan. Artinya rata-rata orang kaya memegang sekitar 21 kali kekayaan orang biasa, padahal selisih pendapatan tahunannya jauh lebih kecil.",
      },
      {
        type: "case",
        title: "Sejarah: Capital in the Twenty-First Century (2013)",
        html: "Pada <strong>2013</strong> Thomas Piketty menerbitkan <strong>Capital in the Twenty-First Century</strong>, hasil riset data pajak dan warisan selama lebih dari dua abad di Eropa dan Amerika. Buku ini menjadi fenomena global dan menghidupkan kembali debat ketimpangan dengan tesis r &gt; g. Piketty menyarankan pajak progresif atas kekayaan, sebuah usulan yang ramai diperdebatkan hingga kini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Total kekayaan negeri 100 satuan. 10% teratas menguasai 70 satuan, 90% sisanya 30 satuan. Berapa kali lipat rata-rata kekayaan orang kelompok atas dibanding kelompok bawah?",
        answer: 21,
        tolerance: 1,
        suffix: "kali",
        solution:
          "Rata-rata kelompok atas = 70 / 10 = 7 satuan. Rata-rata kelompok bawah = 30 / 90 = 0,33 satuan. Rasio = 7 / 0,33 = sekitar <strong>21 kali</strong>.",
        hint: "Hitung rata-rata tiap kelompok dulu (pangsa dibagi jumlah orang), lalu bandingkan.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan: termasuk ketimpangan PENDAPATAN atau ketimpangan KEKAYAAN.",
        buckets: ["Pendapatan", "Kekayaan"],
        items: [
          { text: "Selisih gaji bulanan antar pekerja", bucket: "Pendapatan" },
          { text: "Perbedaan nilai tanah dan saham yang dimiliki keluarga", bucket: "Kekayaan" },
          { text: "Warisan properti lintas generasi", bucket: "Kekayaan" },
          { text: "Upah lembur tahunan seorang buruh", bucket: "Pendapatan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Ketimpangan kekayaan biasanya jauh lebih besar daripada ketimpangan pendapatan.",
          "Aset menghasilkan aset, sehingga kekayaan menumpuk lintas generasi.",
          "Tesis Piketty r > g: modal tumbuh lebih cepat daripada ekonomi dan upah.",
          "Gini kekayaan hampir selalu lebih tinggi daripada Gini pendapatan.",
          "Pajak progresif atas kekayaan adalah salah satu usulan yang diperdebatkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa beda pendapatan dan kekayaan?",
            options: [
              "Keduanya sama persis",
              "Pendapatan adalah penghasilan periodik, kekayaan adalah total aset yang terkumpul",
              "Kekayaan hanya berarti uang tunai",
              "Pendapatan selalu lebih besar daripada kekayaan",
            ],
            answer: 1,
            explain: "Pendapatan mengalir tiap periode; kekayaan adalah tumpukan aset.",
          },
          {
            q: "Apa makna tesis r > g Piketty?",
            options: [
              "Pajak lebih besar daripada belanja",
              "Imbal hasil modal lebih besar daripada pertumbuhan ekonomi",
              "Upah lebih besar daripada laba",
              "Risiko lebih besar daripada keuntungan",
            ],
            answer: 1,
            explain: "Bila r > g, pemilik modal makin kaya lebih cepat daripada pekerja.",
          },
          {
            q: "Mengapa Gini kekayaan biasanya lebih tinggi daripada Gini pendapatan?",
            options: [
              "Karena upah tidak ada",
              "Karena aset menumpuk lintas waktu sementara upah habis dipakai",
              "Karena pajak terlalu rendah",
              "Karena inflasi",
            ],
            answer: 1,
            explain: "Aset menggelinding dan diwariskan, sedangkan pendapatan terpakai.",
          },
          {
            q: "Pada 2013, karya apa yang menghidupkan kembali debat ketimpangan?",
            options: [
              "Das Kapital",
              "Capital in the Twenty-First Century karya Piketty",
              "The Wealth of Nations",
              "Manifesto Komunis",
            ],
            answer: 1,
            explain: "Buku Piketty 2013 menjadi fenomena global dengan tesis r > g.",
          },
          {
            q: "Top 10% menguasai 70 satuan, bottom 90% menguasai 30 satuan. Rasio rata-rata kekayaannya?",
            options: ["Sekitar 2 kali", "Sekitar 7 kali", "Sekitar 21 kali", "Sekitar 70 kali"],
            answer: 2,
            explain: "7 dibagi 0,33 sama dengan sekitar 21 kali.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kritik-eksternalitas-lingkungan",
    levelId: "kritik",
    order: 3,
    title: "Eksternalitas & Kerusakan Lingkungan",
    summary:
      "Mengapa pasar bebas bisa merusak udara dan iklim? Pahami eksternalitas negatif, tragedi milik bersama, dan mengapa krisis iklim disebut kegagalan pasar terbesar.",
    durationMin: 14,
    tags: ["kritik", "eksternalitas", "lingkungan", "iklim", "kegagalan-pasar"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat sebuah pabrik membuang asap ke udara tanpa membayar, biaya kesehatan dan kerusakan ditanggung orang lain. Beban yang tidak masuk ke harga pasar ini disebut <strong>eksternalitas negatif</strong>. Pasar bebas menghitung biaya privat produsen, tetapi mengabaikan <strong>biaya sosial</strong> yang lebih besar.",
      },
      {
        type: "paragraph",
        html: "Akibatnya pasar memproduksi barang yang mencemari <strong>terlalu banyak</strong> karena harganya terlihat murah. Inilah salah satu <strong>kegagalan pasar</strong>: tanpa aturan atau pajak, biaya lingkungan tidak pernah muncul di label harga.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Biaya yang disembunyikan",
        html: "Harga pasar = biaya privat saja. Biaya sebenarnya = biaya privat + biaya eksternal. Selama selisihnya tidak ditagih, produsen pencemar untung dan masyarakat menanggung kerugiannya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tragedi milik bersama",
        html: "Bila sebuah sumber daya dimiliki bersama dan bebas dipakai siapa saja, tiap orang terdorong mengambil sebanyak-banyaknya. Hasilnya sumber daya itu rusak untuk semua. Udara bersih dan iklim stabil adalah contoh milik bersama yang rentan dirusak.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur biaya eksternal per unit dan lihat bagaimana harga sosial yang benar berbeda jauh dari harga pasar yang terlihat murah.",
      },
      { type: "widget", widget: "KalkulatorEksternalitas" },
      {
        type: "video",
        comp: "KegagalanPasar",
        title: "Saat Pasar Gagal Menghitung",
        caption: "Mengapa harga pasar sering lebih rendah daripada biaya sosial yang sebenarnya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png?width=400",
        alt: "Foto potret Karl Marx",
        caption: "Kritik klasik atas kapitalisme menyoroti biaya sosial yang tidak ikut diperhitungkan pasar.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Harga Pasar vs Biaya Sosial Sebenarnya (ilustrasi)",
        unit: "rupiah per unit",
        source: "ilustrasi edukatif untuk menjelaskan eksternalitas",
        note: "Selisih antara biaya sosial dan harga pasar adalah eksternalitas yang ditanggung masyarakat, bukan produsen.",
        data: [
          { label: "Biaya privat (harga pasar)", value: 50000, color: "#60a5fa" },
          { label: "Biaya eksternal", value: 20000, color: "#f87171" },
          { label: "Biaya sosial total", value: 70000, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Asap yang tak bertuan",
        html: "Sebuah pabrik membuat produk dengan biaya produksi <strong>Rp50.000</strong> per unit. Polusi yang dihasilkan menimbulkan biaya kesehatan dan kerusakan lingkungan sekitar <strong>Rp20.000</strong> per unit, ditanggung warga sekitar. Biaya sosial sebenarnya adalah Rp70.000 per unit, tetapi harga pasar hanya mencerminkan Rp50.000. Selama Rp20.000 itu tidak ditagih, pabrik memproduksi lebih banyak daripada yang baik bagi masyarakat. Pajak lingkungan bertujuan menempelkan kembali biaya yang hilang ini ke harga.",
      },
      {
        type: "case",
        title: "Sejarah: The Tragedy of the Commons (1968)",
        html: "Pada <strong>1968</strong> ekolog <strong>Garrett Hardin</strong> menerbitkan esai <strong>The Tragedy of the Commons</strong> di jurnal Science. Ia menggambarkan padang gembala milik bersama yang rusak karena tiap penggembala menambah ternaknya demi untung pribadi. Gagasan ini menjadi kerangka penting untuk memahami krisis iklim: atmosfer adalah milik bersama global, dan emisi karbon adalah eksternalitas yang merusaknya bagi semua orang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Biaya produksi sebuah barang Rp50.000 per unit. Polusi menambah biaya eksternal Rp20.000 per unit. Berapa biaya sosial total per unit?",
        answer: 70000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Biaya sosial = biaya privat + biaya eksternal = 50.000 + 20.000 = <strong>Rp70.000</strong>. Inilah biaya sebenarnya yang seharusnya tercermin di harga.",
        hint: "Jumlahkan biaya privat dengan biaya eksternal.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap hal: termasuk EKSTERNALITAS NEGATIF atau BUKAN eksternalitas.",
        buckets: ["Eksternalitas negatif", "Bukan eksternalitas"],
        items: [
          { text: "Asap pabrik yang mencemari udara warga", bucket: "Eksternalitas negatif" },
          { text: "Upah yang dibayar perusahaan kepada karyawannya", bucket: "Bukan eksternalitas" },
          { text: "Emisi karbon yang memanaskan iklim global", bucket: "Eksternalitas negatif" },
          { text: "Harga bahan baku yang dibeli produsen", bucket: "Bukan eksternalitas" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Eksternalitas negatif adalah biaya yang tidak masuk ke harga pasar.",
          "Biaya sosial = biaya privat + biaya eksternal.",
          "Pasar bebas cenderung memproduksi terlalu banyak barang yang mencemari.",
          "Tragedi milik bersama menjelaskan rusaknya sumber daya yang dipakai bebas.",
          "Krisis iklim adalah eksternalitas global, sering disebut kegagalan pasar terbesar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu eksternalitas negatif?",
            options: [
              "Keuntungan tambahan bagi produsen",
              "Biaya yang ditanggung pihak lain dan tidak masuk ke harga pasar",
              "Pajak yang dibayar pembeli",
              "Subsidi pemerintah",
            ],
            answer: 1,
            explain: "Eksternalitas negatif adalah beban yang jatuh ke pihak ketiga.",
          },
          {
            q: "Bagaimana menghitung biaya sosial total?",
            options: [
              "Biaya privat dikurangi pajak",
              "Biaya privat ditambah biaya eksternal",
              "Hanya biaya eksternal",
              "Harga pasar dikali dua",
            ],
            answer: 1,
            explain: "Biaya sosial = biaya privat + biaya eksternal.",
          },
          {
            q: "Apa inti tragedi milik bersama?",
            options: [
              "Milik pribadi selalu rusak",
              "Sumber daya bersama yang bebas dipakai cenderung dirusak berlebihan",
              "Pemerintah selalu boros",
              "Pasar selalu efisien",
            ],
            answer: 1,
            explain: "Tiap orang mengambil sebanyak mungkin, sumber daya bersama pun rusak.",
          },
          {
            q: "Siapa penulis esai The Tragedy of the Commons 1968?",
            options: ["Adam Smith", "Garrett Hardin", "Karl Marx", "Thomas Piketty"],
            answer: 1,
            explain: "Garrett Hardin menerbitkannya di jurnal Science pada 1968.",
          },
          {
            q: "Biaya produksi Rp50.000 dan biaya eksternal Rp20.000. Biaya sosial total?",
            options: ["Rp20.000", "Rp50.000", "Rp70.000", "Rp30.000"],
            answer: 2,
            explain: "50.000 ditambah 20.000 sama dengan Rp70.000.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kritik-monopoli-pasar",
    levelId: "kritik",
    order: 4,
    title: "Monopoli & Kekuatan Pasar",
    summary:
      "Saat satu perusahaan menguasai pasar, harga naik dan inovasi bisa melambat. Pahami monopoli, kekuatan pasar, dan mengapa Standard Oil dipecah pada 1911.",
    durationMin: 14,
    tags: ["kritik", "monopoli", "kekuatan-pasar", "antitrust", "persaingan"],
    blocks: [
      {
        type: "paragraph",
        html: "Persaingan adalah jantung kapitalisme yang sehat: banyak penjual berebut pembeli, sehingga harga ditekan mendekati biaya. Tetapi bila satu perusahaan menguasai pasar (<strong>monopoli</strong>) atau hanya ada segelintir pemain (<strong>oligopoli</strong>), mereka punya <strong>kekuatan pasar</strong> untuk menaikkan harga di atas tingkat yang adil.",
      },
      {
        type: "paragraph",
        html: "Monopoli bisa menahan pasokan, mematok harga tinggi, dan memperlambat inovasi karena tidak ada pesaing yang menekan. Karena itu banyak negara membuat hukum <strong>antimonopoli</strong> untuk menjaga persaingan tetap hidup.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bahaya kekuatan pasar",
        html: "Monopolis menetapkan harga lebih tinggi dan kuantitas lebih rendah daripada pasar bersaing. Konsumen membayar lebih, dan sebagian transaksi yang seharusnya terjadi malah hilang.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Spektrum struktur pasar",
        html: "Dari paling sehat ke paling terkonsentrasi: <strong>persaingan sempurna</strong> (banyak penjual), <strong>persaingan monopolistik</strong>, <strong>oligopoli</strong> (sedikit pemain besar), sampai <strong>monopoli</strong> (satu penguasa).",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Ubah jumlah penjual dan amati bagaimana harga keseimbangan bergerak dari persaingan menuju monopoli.",
      },
      { type: "widget", widget: "SimulatorStrukturPasar" },
      {
        type: "video",
        comp: "MonopoliVsPersaingan",
        title: "Monopoli vs Persaingan",
        caption: "Bagaimana harga dan kuantitas berubah saat pasar berpindah dari banyak penjual ke satu penguasa.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trading_Floor_at_the_New_York_Stock_Exchange_during_the_Zendesk_IPO.jpg?width=400",
        alt: "Lantai perdagangan Bursa Efek New York",
        caption: "Perusahaan raksasa yang melantai di bursa kerap memicu pertanyaan soal konsentrasi pasar.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Harga per Unit Menurut Struktur Pasar (ilustrasi)",
        unit: "rupiah per unit",
        source: "ilustrasi edukatif untuk membandingkan struktur pasar",
        note: "Makin terkonsentrasi pasar, makin tinggi harga yang dibayar konsumen di atas biaya dasar.",
        data: [
          { label: "Persaingan sempurna", value: 10000, color: "#34d399" },
          { label: "Oligopoli", value: 13000, color: "#fbbf24" },
          { label: "Monopoli", value: 14000, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Markup sang monopolis",
        html: "Di pasar bersaing, harga sebuah barang mendekati biaya dasarnya, katakanlah <strong>Rp10.000</strong> per unit. Sebuah monopolis yang menguasai pasar menaikkan harga dengan markup <strong>40 persen</strong> karena pembeli tidak punya pilihan lain. Harga monopoli menjadi Rp10.000 dikali 1,4 sama dengan <strong>Rp14.000</strong>. Tambahan Rp4.000 per unit itu berpindah dari konsumen ke kantong monopolis, dan sebagian pembeli batal membeli karena harga terlalu mahal.",
      },
      {
        type: "case",
        title: "Sejarah: Standard Oil dipecah (1911)",
        html: "Perusahaan <strong>Standard Oil</strong> milik John D. Rockefeller pernah menguasai hampir seluruh penyulingan minyak Amerika Serikat. Pada <strong>1911</strong>, Mahkamah Agung AS memutuskan perusahaan itu melanggar hukum antimonopoli (Sherman Antitrust Act 1890) dan memerintahkannya dipecah menjadi 34 perusahaan terpisah. Putusan ini menjadi tonggak penting bahwa kapitalisme butuh aturan untuk menjaga persaingan, bukan membiarkan satu raksasa menguasai segalanya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Harga kompetitif sebuah barang Rp10.000 per unit. Monopolis menaikkannya dengan markup 40 persen. Berapa harga monopoli per unit?",
        answer: 14000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Harga monopoli = 10.000 x (1 + 0,40) = 10.000 x 1,4 = <strong>Rp14.000</strong>. Markup Rp4.000 ditanggung konsumen.",
        hint: "Kalikan harga kompetitif dengan 1,4.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap struktur pasar dengan ciri khasnya.",
        pairs: [
          { left: "Persaingan sempurna", right: "Banyak penjual, harga mendekati biaya" },
          { left: "Oligopoli", right: "Hanya beberapa pemain besar saling memengaruhi" },
          { left: "Monopoli", right: "Satu penjual menguasai seluruh pasar" },
          { left: "Antimonopoli", right: "Hukum untuk menjaga persaingan tetap hidup" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Persaingan menekan harga; monopoli dan oligopoli menaikkannya.",
          "Kekuatan pasar memungkinkan satu perusahaan mematok harga tinggi.",
          "Monopoli cenderung memperlambat inovasi karena tanpa tekanan pesaing.",
          "Hukum antimonopoli menjaga persaingan demi melindungi konsumen.",
          "Standard Oil dipecah pada 1911 sebagai tonggak penegakan antimonopoli.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud kekuatan pasar?",
            options: [
              "Kemampuan pemerintah menetapkan pajak",
              "Kemampuan perusahaan menaikkan harga di atas tingkat bersaing",
              "Jumlah pembeli di pasar",
              "Tingkat inflasi",
            ],
            answer: 1,
            explain: "Kekuatan pasar adalah kemampuan menetapkan harga di atas pasar bersaing.",
          },
          {
            q: "Dibanding pasar bersaing, monopoli cenderung?",
            options: [
              "Harga lebih rendah, kuantitas lebih banyak",
              "Harga lebih tinggi, kuantitas lebih sedikit",
              "Harga dan kuantitas sama",
              "Tidak menjual apa pun",
            ],
            answer: 1,
            explain: "Monopolis menahan pasokan dan menaikkan harga.",
          },
          {
            q: "Manakah struktur pasar paling sehat bagi konsumen?",
            options: ["Monopoli", "Oligopoli", "Persaingan sempurna", "Kartel"],
            answer: 2,
            explain: "Persaingan sempurna menekan harga mendekati biaya.",
          },
          {
            q: "Pada 1911, perusahaan raksasa apa yang dipecah karena melanggar antimonopoli?",
            options: ["Apple", "Standard Oil", "Microsoft", "Ford"],
            answer: 1,
            explain: "Mahkamah Agung AS memecah Standard Oil menjadi 34 perusahaan pada 1911.",
          },
          {
            q: "Harga kompetitif Rp10.000 dengan markup monopoli 40 persen. Harga monopoli?",
            options: ["Rp10.400", "Rp12.000", "Rp14.000", "Rp40.000"],
            answer: 2,
            explain: "10.000 dikali 1,4 sama dengan Rp14.000.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kritik-konsumerisme-komodifikasi",
    levelId: "kritik",
    order: 5,
    title: "Konsumerisme & Komodifikasi",
    summary:
      "Mengapa kita terus membeli barang baru? Pahami konsumerisme, komodifikasi, dan bagaimana iklan mengubah keinginan menjadi kebutuhan sejak pasca-Perang Dunia II.",
    durationMin: 13,
    tags: ["kritik", "konsumerisme", "komodifikasi", "iklan", "budaya"],
    blocks: [
      {
        type: "paragraph",
        html: "Kapitalisme modern tidak hanya menjual barang, tetapi juga membentuk <strong>keinginan</strong>. <strong>Konsumerisme</strong> adalah budaya yang mendorong orang terus membeli, sering kali melebihi kebutuhan, sebagai jalan mencari status dan kebahagiaan.",
      },
      {
        type: "paragraph",
        html: "Kritikus juga menyoroti <strong>komodifikasi</strong>: proses mengubah hampir segala hal, dari waktu luang, kesehatan, sampai hubungan sosial, menjadi barang yang diperjualbelikan. Nilai sebuah benda lalu lebih ditentukan oleh merek dan citra daripada manfaat aslinya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Keinginan yang diciptakan",
        html: "Iklan dan pemasaran bekerja mengubah <strong>keinginan</strong> menjadi terasa seperti <strong>kebutuhan</strong>. Selisih besar antara biaya produksi dan harga jual sering ditopang oleh citra merek, bukan bahan atau fungsi.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Sisi gelap konsumerisme",
        html: "Konsumsi berlebihan mendorong utang rumah tangga, limbah, dan keletihan, sambil mengaburkan batas antara kebutuhan nyata dan keinginan yang dipasarkan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan sekadar jelek",
        html: "Konsumsi tetap menggerakkan ekonomi dan menciptakan lapangan kerja. Kritik konsumerisme bukan menolak belanja, melainkan mempertanyakan konsumsi yang berlebihan dan tanpa makna.",
      },
      {
        type: "video",
        comp: "KapitalismeVideo",
        title: "Mesin Produksi dan Konsumsi",
        caption: "Bagaimana kapitalisme menautkan produksi tanpa henti dengan konsumsi tanpa henti.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak supermarket penuh produk kemasan",
        caption: "Rak yang berlimpah pilihan adalah wajah sehari-hari budaya konsumerisme.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Biaya Produksi vs Harga Jual Sebuah Produk Bermerek (ilustrasi)",
        unit: "rupiah per unit",
        source: "ilustrasi edukatif untuk menjelaskan komodifikasi merek",
        note: "Selisih besar antara biaya bahan dan harga jual sering ditopang oleh merek dan citra, bukan fungsi.",
        data: [
          { label: "Biaya produksi", value: 20000, color: "#34d399" },
          { label: "Nilai tambah merek", value: 100000, color: "#fbbf24" },
          { label: "Harga jual", value: 120000, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Harga sebuah merek",
        html: "Sebuah kaus diproduksi dengan biaya bahan dan jahit sekitar <strong>Rp20.000</strong>. Setelah ditempeli logo merek terkenal dan kampanye iklan, kaus itu dijual <strong>Rp120.000</strong>. Selisih <strong>Rp100.000</strong> sebagian besar adalah nilai merek dan citra, bukan kualitas bahan yang berbeda jauh. Inilah komodifikasi: yang dijual bukan sekadar kaus, melainkan identitas dan status yang melekat padanya.",
      },
      {
        type: "case",
        title: "Sejarah: Ledakan konsumerisme pasca-Perang Dunia II",
        html: "Setelah <strong>Perang Dunia II berakhir 1945</strong>, ekonomi Amerika Serikat dan Eropa Barat tumbuh pesat. Pabrik yang dulu memproduksi senjata beralih ke barang konsumsi, sementara televisi dan iklan massal berkembang pada tahun 1950-an. Mobil, kulkas, dan perabot menjadi simbol kemakmuran kelas menengah baru. Periode inilah yang sering disebut kelahiran budaya konsumerisme modern, ketika belanja menjadi gaya hidup, bukan sekadar memenuhi kebutuhan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kaus diproduksi seharga Rp20.000 dan dijual sebagai produk bermerek seharga Rp120.000. Berapa nilai tambah merek per kaus?",
        answer: 100000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Nilai tambah merek = harga jual - biaya produksi = 120.000 - 20.000 = <strong>Rp100.000</strong>. Inilah bagian yang mencerminkan citra dan merek, bukan bahan.",
        hint: "Kurangkan biaya produksi dari harga jual.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan: mencerminkan KONSUMERISME atau KONSUMSI WAJAR.",
        buckets: ["Konsumerisme", "Konsumsi wajar"],
        items: [
          { text: "Membeli ponsel baru tiap tahun demi gengsi padahal yang lama masih baik", bucket: "Konsumerisme" },
          { text: "Membeli beras dan sayur untuk kebutuhan makan keluarga", bucket: "Konsumsi wajar" },
          { text: "Berutang demi barang mewah hanya untuk citra di media sosial", bucket: "Konsumerisme" },
          { text: "Mengganti sepatu yang sudah rusak dengan yang baru", bucket: "Konsumsi wajar" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Konsumerisme adalah budaya mendorong konsumsi melebihi kebutuhan.",
          "Komodifikasi mengubah banyak hal menjadi barang yang diperjualbelikan.",
          "Iklan mengubah keinginan menjadi terasa seperti kebutuhan.",
          "Nilai merek bisa jauh melampaui biaya produksi sebenarnya.",
          "Budaya konsumerisme modern meledak pada periode pasca-Perang Dunia II.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu konsumerisme?",
            options: [
              "Larangan berbelanja",
              "Budaya yang mendorong konsumsi terus-menerus melebihi kebutuhan",
              "Sistem pajak konsumsi",
              "Cara menabung",
            ],
            answer: 1,
            explain: "Konsumerisme mendorong orang terus membeli sebagai gaya hidup.",
          },
          {
            q: "Apa yang dimaksud komodifikasi?",
            options: [
              "Menurunkan harga barang",
              "Mengubah banyak hal menjadi barang yang diperjualbelikan",
              "Melarang iklan",
              "Menyumbang barang gratis",
            ],
            answer: 1,
            explain: "Komodifikasi menjadikan hampir segala hal sebagai komoditas.",
          },
          {
            q: "Apa peran iklan menurut kritik konsumerisme?",
            options: [
              "Menurunkan keinginan membeli",
              "Mengubah keinginan menjadi terasa seperti kebutuhan",
              "Menghapus merek",
              "Menaikkan biaya produksi",
            ],
            answer: 1,
            explain: "Iklan membentuk persepsi sehingga keinginan terasa wajib dipenuhi.",
          },
          {
            q: "Kapan budaya konsumerisme modern meledak?",
            options: [
              "Sebelum Perang Dunia I",
              "Pada masa pasca-Perang Dunia II",
              "Pada Abad Pertengahan",
              "Pada 2010-an saja",
            ],
            answer: 1,
            explain: "Pertumbuhan ekonomi dan iklan massal pasca-1945 melahirkan konsumerisme modern.",
          },
          {
            q: "Biaya produksi kaus Rp20.000, harga jual bermerek Rp120.000. Nilai tambah merek?",
            options: ["Rp20.000", "Rp100.000", "Rp120.000", "Rp140.000"],
            answer: 1,
            explain: "120.000 dikurangi 20.000 sama dengan Rp100.000.",
          },
        ],
      },
    ],
  },
];
