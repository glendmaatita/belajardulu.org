import type { Lesson } from "../../../types";

export const level6: Lesson[] = [
  // ============================================================
  {
    id: "varian-kapitalisme",
    levelId: "varian",
    order: 1,
    title: "Varian Kapitalisme",
    summary:
      "Tidak ada satu kapitalisme tunggal. Dari laissez-faire sampai negara kesejahteraan Nordik, kenali spektrum dan trade-off tiap model.",
    durationMin: 14,
    tags: ["varian", "ekonomi campuran", "negara kesejahteraan"],
    blocks: [
      {
        type: "paragraph",
        html: "Orang sering membayangkan kapitalisme sebagai satu hal, padahal ada banyak <strong>varian</strong>. Bedanya terletak pada seberapa besar peran negara: mengatur pasar, memungut pajak, dan menyediakan jaring pengaman sosial.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dari pasar bebas ke negara aktif",
        html: "<strong>Laissez-faire</strong>: negara minim campur tangan. <strong>Ekonomi campuran</strong>: pasar dengan regulasi dan layanan publik (mayoritas negara). <strong>Negara kesejahteraan</strong> (model Nordik): pasar bebas tapi pajak tinggi dan jaminan sosial luas.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser peran negara dari pasar bebas murni sampai terencana penuh, dan amati pertukaran antara efisiensi dan pemerataan.",
      },
      { type: "widget", widget: "SimulatorSpektrumEkonomi" },
      {
        type: "video",
        comp: "SpektrumEkonomiVideo",
        title: "Spektrum Sistem Ekonomi",
        caption: "Hampir semua negara berada di antara pasar bebas murni dan ekonomi terencana penuh.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Juggling_on_the_Berlin_Wall_1a.jpg?width=400",
        alt: "Orang-orang di atas Tembok Berlin pada masa keruntuhannya 1989",
        caption: "Runtuhnya Tembok Berlin 1989 menandai surutnya ekonomi komando dan menguatnya ekonomi pasar.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Pengeluaran Pemerintah terhadap PDB antar Model (ilustrasi)",
        unit: "% PDB",
        source: "ilustrasi edukatif, urutan sesuai pola yang umum dilaporkan",
        note: "Makin besar peran negara, makin tinggi porsi pengeluaran pemerintah; model Nordik paling tinggi.",
        data: [
          { label: "Laissez-faire", value: 25, color: "#34d399" },
          { label: "Campuran (AS)", value: 38, color: "#60a5fa" },
          { label: "Nordik", value: 50, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Model Nordik, pasar plus jaring pengaman",
        html: "Negara seperti Swedia dan Denmark sering disalahpahami sebagai sosialis. Sebenarnya mereka sangat <strong>pro-pasar</strong>: perusahaan swasta bebas bersaing dan mudah memecat-merekrut. Namun pajaknya tinggi dan dipakai untuk <strong>jaminan sosial</strong> luas: kesehatan, pendidikan, dan tunjangan pengangguran. Modelnya menukar efisiensi pasar dengan pemerataan yang dibiayai pajak besar. Tidak ada makan siang gratis, tetapi banyak warga menilai pertukaran itu sepadan.",
      },
      {
        type: "case",
        title: "Sejarah: Eksperimen besar abad ke-20",
        html: "Abad ke-20 menjadi laboratorium raksasa: Uni Soviet mencoba ekonomi <strong>komando</strong> penuh, Amerika condong ke <strong>pasar</strong>, dan Eropa Barat membangun <strong>negara kesejahteraan</strong>. Ketika Tembok Berlin runtuh (<strong>1989</strong>) dan Uni Soviet bubar (<strong>1991</strong>), ekonomi komando murni dianggap gagal menyediakan kemakmuran dan kebebasan. Namun krisis 2008 kembali menghidupkan perdebatan tentang seberapa bebas pasar seharusnya. Sejarah menunjukkan: bukan pasar atau negara, melainkan <em>takarannya</em> yang terus diperdebatkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Di model Nordik, pengeluaran pemerintah sekitar 50% PDB; di model laissez-faire sekitar 25%. Berapa selisih poin persennya?",
        answer: 25,
        tolerance: 0,
        suffix: "poin persen",
        solution:
          "50 - 25 = <strong>25 poin persen</strong>. Selisih sebesar ini mencerminkan perbedaan besar dalam peran negara dan tingkat pajak antar-model.",
        hint: "Kurangkan porsi yang lebih kecil dari yang lebih besar.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri ke model yang paling sesuai.",
        buckets: ["Laissez-faire", "Negara kesejahteraan (Nordik)"],
        items: [
          { text: "Pajak rendah, campur tangan negara minim", bucket: "Laissez-faire" },
          { text: "Pajak tinggi membiayai kesehatan & pendidikan gratis", bucket: "Negara kesejahteraan (Nordik)" },
          { text: "Jaring pengaman sosial luas", bucket: "Negara kesejahteraan (Nordik)" },
          { text: "Negara membiarkan pasar mengatur dirinya", bucket: "Laissez-faire" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Tidak ada kapitalisme tunggal; varian dibedakan oleh besarnya peran negara.",
          "Laissez-faire minim campur tangan; ekonomi campuran adalah mayoritas negara.",
          "Model Nordik tetap pro-pasar tetapi berpajak tinggi dengan jaring pengaman luas.",
          "Tiap model menukar efisiensi dengan pemerataan; tidak ada yang gratis.",
          "Sejarah memperdebatkan takaran pasar dan negara, bukan memilih salah satu secara mutlak.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang terutama membedakan varian-varian kapitalisme?",
            options: ["Warna bendera", "Besarnya peran negara dalam ekonomi", "Jumlah penduduk", "Iklim"],
            answer: 1,
            explain: "Varian berbeda terutama pada seberapa besar negara mengatur dan menyediakan layanan.",
          },
          {
            q: "Apa ciri model Nordik?",
            options: [
              "Tidak ada pasar sama sekali",
              "Pro-pasar tetapi pajak tinggi dengan jaminan sosial luas",
              "Negara memiliki semua perusahaan",
              "Tidak ada pajak",
            ],
            answer: 1,
            explain: "Model Nordik memadukan pasar bebas dengan pajak tinggi dan jaring pengaman.",
          },
          {
            q: "Mayoritas negara di dunia menganut model?",
            options: ["Laissez-faire murni", "Ekonomi komando murni", "Ekonomi campuran", "Tanpa sistem"],
            answer: 2,
            explain: "Hampir semua negara nyata adalah ekonomi campuran dengan kadar berbeda.",
          },
          {
            q: "Apa pelajaran dari eksperimen ekonomi abad ke-20?",
            options: [
              "Ekonomi komando murni terbukti paling makmur",
              "Yang diperdebatkan adalah takaran pasar dan negara, bukan memilih salah satu mutlak",
              "Pasar tidak pernah gagal",
              "Negara harus menguasai semua",
            ],
            answer: 1,
            explain: "Sejarah menunjukkan perdebatan soal takaran, bukan kemenangan mutlak satu kutub.",
          },
          {
            q: "Selisih pengeluaran pemerintah Nordik (50%) dan laissez-faire (25%) adalah?",
            options: ["10 poin", "25 poin", "75 poin", "5 poin"],
            answer: 1,
            explain: "50 dikurangi 25 sama dengan 25 poin persen.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "laissez-faire-pasar-bebas-murni",
    levelId: "varian",
    order: 2,
    title: "Laissez-faire: Pasar Bebas Murni",
    summary:
      "Negara seminim mungkin, pasar semaksimal mungkin. Kenali janji efisiensi laissez-faire sekaligus risiko ketimpangan dan monopoli yang menyertainya.",
    durationMin: 14,
    tags: ["laissez-faire", "pasar bebas", "regulasi minimal"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Laissez-faire</strong> (bahasa Prancis, kira-kira berarti biarkan saja) adalah varian kapitalisme dengan campur tangan negara paling kecil. Pemerintah dibatasi pada tugas dasar: menegakkan hukum, melindungi hak milik, dan menjaga keamanan. Selebihnya, pasar yang menentukan harga, upah, dan apa yang diproduksi.",
      },
      {
        type: "paragraph",
        html: "Gagasannya: bila setiap orang bebas mengejar kepentingannya, persaingan akan mendorong efisiensi dan inovasi seolah ada <strong>tangan tak terlihat</strong> yang menata. Pajak rendah dan regulasi tipis dipercaya membuat ekonomi tumbuh cepat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Inti laissez-faire",
        html: "Negara minim, pasar maksimal. Harga dan upah ditentukan persaingan, bukan keputusan pemerintah. Pajak rendah, regulasi tipis, jaring pengaman sosial nyaris tidak ada.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Sisi gelapnya",
        html: "Tanpa rambu, pasar bisa melahirkan <strong>monopoli</strong>, jam kerja ekstrem, dan jurang kaya-miskin yang lebar. Saat terjadi krisis, tidak ada jaring pengaman bagi yang jatuh.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Tonton dulu",
        html: "Video berikut menjelaskan logika dasar kapitalisme: insentif, persaingan, dan peran harga sebagai sinyal.",
      },
      {
        type: "video",
        comp: "KapitalismeVideo",
        title: "Cara Kerja Kapitalisme",
        caption: "Persaingan dan harga sebagai sinyal adalah jantung argumen pro-pasar.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak supermarket penuh aneka produk sebagai gambaran pasar yang melimpah",
        caption: "Rak yang melimpah adalah hasil khas pasar bebas: banyak pilihan didorong persaingan produsen.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Porsi Pengeluaran Pemerintah AS terhadap PDB (ilustrasi)",
        unit: "% PDB",
        source: "ilustrasi edukatif, pola jangka panjang yang umum dilaporkan",
        note: "Pada era laissez-faire akhir abad ke-19, peran negara sangat kecil; porsinya membengkak sepanjang abad ke-20.",
        data: [
          { label: "1890", value: 7, color: "#34d399" },
          { label: "1920", value: 12, color: "#34d399" },
          { label: "1950", value: 24, color: "#60a5fa" },
          { label: "1980", value: 33, color: "#60a5fa" },
          { label: "2020", value: 38, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pajak rendah, negara kecil",
        html: "Sebuah negara hipotetis menganut laissez-faire dengan pengeluaran pemerintah hanya <strong>25% PDB</strong>. Bila PDB-nya Rp 1.000 triliun, anggaran negara hanya sekitar Rp 250 triliun untuk seluruh fungsi: hukum, pertahanan, sedikit infrastruktur. Bandingkan dengan model Nordik 50% PDB yang menyediakan kesehatan dan pendidikan gratis. Pajak rendah memang menyisakan lebih banyak uang di kantong warga, tetapi layanan publik harus dibeli sendiri di pasar.",
      },
      {
        type: "case",
        title: "Sejarah: Gilded Age Amerika, akhir abad ke-19",
        html: "Pada <strong>Gilded Age</strong> (sekitar 1870 sampai 1900), Amerika Serikat mendekati laissez-faire: industri meledak, rel kereta membentang, dan taipan seperti Rockefeller dan Carnegie membangun kekayaan raksasa. Namun era yang sama melahirkan <strong>monopoli</strong> (mis. Standard Oil), kondisi kerja keras, dan ketimpangan tajam. Reaksi atasnya melahirkan undang-undang antimonopoli <strong>Sherman Antitrust Act 1890</strong>, awal mula negara mulai memasang rambu bagi pasar yang tadinya nyaris bebas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Di model laissez-faire, pengeluaran pemerintah sekitar 25% PDB. Jika PDB sebuah negara Rp 1.000 triliun, berapa anggaran pemerintahnya?",
        answer: 250,
        tolerance: 0,
        prefix: "Rp",
        suffix: "triliun",
        solution:
          "25% x Rp 1.000 triliun = 0,25 x 1.000 = <strong>Rp 250 triliun</strong>. Sisanya tetap berputar di sektor swasta.",
        hint: "Kalikan PDB dengan 0,25.",
      },
      {
        type: "classifyExercise",
        prompt: "Tandai mana yang merupakan ciri laissez-faire dan mana yang bukan.",
        buckets: ["Ciri laissez-faire", "Bukan ciri laissez-faire"],
        items: [
          { text: "Pajak rendah dan regulasi tipis", bucket: "Ciri laissez-faire" },
          { text: "Harga ditentukan persaingan pasar", bucket: "Ciri laissez-faire" },
          { text: "Jaminan kesehatan gratis dari negara", bucket: "Bukan ciri laissez-faire" },
          { text: "Negara menetapkan upah semua pekerja", bucket: "Bukan ciri laissez-faire" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Laissez-faire berarti negara minim dan pasar maksimal.",
          "Janjinya: efisiensi dan inovasi lewat persaingan bebas.",
          "Risikonya: monopoli, ketimpangan tajam, dan tiadanya jaring pengaman.",
          "Gilded Age Amerika adalah contoh nyata sekaligus pemicu lahirnya antimonopoli.",
          "Pajak rendah menyisakan uang di warga, tetapi layanan publik harus dibeli sendiri.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti dasar laissez-faire?",
            options: ["Negara menguasai pasar", "Biarkan saja, campur tangan negara minim", "Tanpa uang", "Tanpa perdagangan"],
            answer: 1,
            explain: "Laissez-faire menekankan peran negara seminim mungkin dan kebebasan pasar.",
          },
          {
            q: "Apa fungsi negara yang masih dipertahankan dalam laissez-faire?",
            options: [
              "Menentukan semua harga",
              "Menegakkan hukum dan melindungi hak milik",
              "Menyediakan kesehatan gratis",
              "Memiliki semua pabrik",
            ],
            answer: 1,
            explain: "Negara tetap menjaga hukum, hak milik, dan keamanan sebagai tugas dasar.",
          },
          {
            q: "Apa risiko khas pasar yang nyaris tanpa rambu?",
            options: ["Inflasi nol", "Monopoli dan ketimpangan tajam", "Pengangguran mustahil", "Harga selalu turun"],
            answer: 1,
            explain: "Tanpa regulasi, pasar bisa melahirkan monopoli dan jurang kaya-miskin lebar.",
          },
          {
            q: "Periode mana yang sering dianggap mendekati laissez-faire di AS?",
            options: ["New Deal 1933", "Gilded Age akhir abad ke-19", "Perang Dingin", "Era 2010-an"],
            answer: 1,
            explain: "Gilded Age (sekitar 1870 sampai 1900) mendekati pasar bebas dengan regulasi minim.",
          },
          {
            q: "Jika PDB Rp 1.000 triliun dan pengeluaran pemerintah 25% PDB, berapa anggarannya?",
            options: ["Rp 100 triliun", "Rp 250 triliun", "Rp 500 triliun", "Rp 750 triliun"],
            answer: 1,
            explain: "0,25 x 1.000 = Rp 250 triliun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "ekonomi-campuran",
    levelId: "varian",
    order: 3,
    title: "Ekonomi Campuran",
    summary:
      "Pasar untuk hampir semua hal, negara untuk hal yang pasar gagal urus. Inilah model yang sebenarnya dianut hampir semua negara, termasuk Indonesia.",
    durationMin: 14,
    tags: ["ekonomi campuran", "regulasi", "barang publik"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Ekonomi campuran</strong> menggabungkan pasar bebas dengan peran aktif negara. Mayoritas kegiatan ekonomi diserahkan ke swasta, tetapi negara mengatur (regulasi), memungut pajak, dan menyediakan <strong>barang publik</strong> seperti jalan, pertahanan, dan pendidikan dasar.",
      },
      {
        type: "paragraph",
        html: "Hampir semua negara nyata, termasuk Indonesia, Amerika Serikat, dan Jerman, adalah ekonomi campuran. Bedanya hanya pada <strong>takaran</strong>: seberapa banyak yang diatur dan seberapa luas layanan publiknya.",
      },
      {
        type: "video",
        comp: "SistemEkonomi",
        title: "Ragam Sistem Ekonomi",
        caption: "Ekonomi campuran berdiri di tengah, memadukan kekuatan pasar dengan peran aktif negara.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Logika ekonomi campuran",
        html: "Pasar efisien mengurus sebagian besar barang, tetapi gagal pada hal tertentu: barang publik, monopoli alami, polusi, dan jaminan sosial. Di titik <strong>kegagalan pasar</strong> itulah negara masuk.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Indonesia juga campuran",
        html: "Pasal 33 UUD 1945 menempatkan cabang produksi penting dan kekayaan alam dikuasai negara, sementara sebagian besar usaha lain berjalan di pasar. Itu ciri khas ekonomi campuran.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser peran negara dan amati bagaimana keseimbangan efisiensi dan pemerataan bergeser di sepanjang spektrum.",
      },
      { type: "widget", widget: "SimulatorSpektrumEkonomi" },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Pasar_Terapung.jpg?width=400",
        alt: "Pedagang di pasar terapung dengan perahu jukung di Kalimantan",
        caption: "Pasar terapung: perdagangan swasta yang hidup, tetapi tetap berada dalam aturan dan infrastruktur yang disediakan negara.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tingkat Pengangguran AS sebelum dan sesudah New Deal (ilustrasi)",
        unit: "%",
        source: "ilustrasi edukatif berdasarkan pola yang umum dilaporkan",
        note: "Setelah negara aktif lewat New Deal dan belanja Perang Dunia II, pengangguran turun tajam dari puncak Depresi.",
        data: [
          { label: "1933", value: 25, color: "#f87171" },
          { label: "1937", value: 14, color: "#fbbf24" },
          { label: "1941", value: 10, color: "#60a5fa" },
          { label: "1944", value: 2, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membagi PDB antara swasta dan negara",
        html: "Sebuah ekonomi campuran bertipe Amerika memiliki PDB Rp 2.000 triliun, dengan pengeluaran pemerintah sekitar <strong>38% PDB</strong>. Berarti sekitar Rp 760 triliun dikelola negara (pendidikan, kesehatan, infrastruktur, pertahanan), sementara sisanya Rp 1.240 triliun berputar di sektor swasta. Negara tidak menggantikan pasar, melainkan melengkapi tempat-tempat yang gagal diurus pasar.",
      },
      {
        type: "case",
        title: "Sejarah: New Deal 1933",
        html: "Saat Depresi Besar menghantam, pengangguran AS menembus sekitar 25%. Presiden <strong>Franklin D. Roosevelt</strong> meluncurkan <strong>New Deal mulai 1933</strong>: proyek pekerjaan umum, regulasi perbankan (mis. Glass-Steagall), dan jaminan sosial (Social Security 1935). New Deal menandai pergeseran tegas dari laissez-faire menuju <strong>ekonomi campuran</strong>: pasar tetap dominan, tetapi negara kini aktif menstabilkan dan melindungi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Ekonomi campuran dengan PDB Rp 2.000 triliun memiliki pengeluaran pemerintah 38% PDB. Berapa rupiah yang dikelola negara?",
        answer: 760,
        tolerance: 0,
        prefix: "Rp",
        suffix: "triliun",
        solution:
          "38% x Rp 2.000 triliun = 0,38 x 2.000 = <strong>Rp 760 triliun</strong>. Sisanya, Rp 1.240 triliun, berputar di sektor swasta.",
        hint: "Kalikan PDB dengan 0,38.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan jenis urusan dengan pihak yang lazim menanganinya di ekonomi campuran.",
        pairs: [
          { left: "Menjual makanan dan pakaian", right: "Swasta lewat pasar" },
          { left: "Membangun jalan raya nasional", right: "Negara sebagai barang publik" },
          { left: "Mengatur agar tidak ada monopoli", right: "Regulasi pemerintah" },
          { left: "Memberi tunjangan pengangguran", right: "Jaring pengaman negara" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Ekonomi campuran memadukan pasar dominan dengan peran aktif negara.",
          "Negara masuk di titik kegagalan pasar: barang publik, monopoli, polusi, jaminan sosial.",
          "Hampir semua negara nyata, termasuk Indonesia, adalah ekonomi campuran.",
          "Perbedaan antar negara terletak pada takaran, bukan jenis sistemnya.",
          "New Deal 1933 adalah tonggak pergeseran AS dari laissez-faire ke ekonomi campuran.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti ekonomi campuran?",
            options: [
              "Hanya negara yang berproduksi",
              "Pasar dominan dengan peran aktif negara",
              "Tidak ada pajak",
              "Tidak ada swasta",
            ],
            answer: 1,
            explain: "Ekonomi campuran memadukan pasar yang dominan dengan negara yang mengatur dan menyediakan barang publik.",
          },
          {
            q: "Kapan negara biasanya masuk dalam ekonomi campuran?",
            options: ["Saat pasar bekerja sempurna", "Di titik kegagalan pasar", "Tidak pernah", "Hanya saat pemilu"],
            answer: 1,
            explain: "Negara masuk untuk barang publik, monopoli alami, polusi, dan jaminan sosial.",
          },
          {
            q: "Model apa yang sebenarnya dianut hampir semua negara?",
            options: ["Laissez-faire murni", "Ekonomi komando murni", "Ekonomi campuran", "Tanpa sistem"],
            answer: 2,
            explain: "Hampir semua negara nyata adalah ekonomi campuran dengan kadar berbeda.",
          },
          {
            q: "Apa makna sejarah New Deal 1933?",
            options: [
              "Kembali ke laissez-faire",
              "Pergeseran AS menuju ekonomi campuran dengan negara aktif",
              "Penghapusan semua pasar",
              "Awal komunisme di AS",
            ],
            answer: 1,
            explain: "New Deal menandai negara aktif menstabilkan dan melindungi tanpa menghapus pasar.",
          },
          {
            q: "PDB Rp 2.000 triliun, pengeluaran pemerintah 38% PDB, berapa yang dikelola negara?",
            options: ["Rp 380 triliun", "Rp 760 triliun", "Rp 1.240 triliun", "Rp 2.000 triliun"],
            answer: 1,
            explain: "0,38 x 2.000 = Rp 760 triliun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "negara-kesejahteraan-nordik",
    levelId: "varian",
    order: 4,
    title: "Negara Kesejahteraan Model Nordik",
    summary:
      "Pasar bebas yang sangat kompetitif, tetapi dengan pajak tinggi dan jaring pengaman sosial paling luas di dunia. Kenali resep khas Swedia dan Denmark.",
    durationMin: 14,
    tags: ["negara kesejahteraan", "model nordik", "pajak tinggi"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Model Nordik</strong> (Swedia, Denmark, Norwegia, Finlandia, Islandia) sering dikira sosialis, padahal pasarnya sangat bebas dan kompetitif. Kuncinya bukan menggantikan pasar, melainkan memungut <strong>pajak tinggi</strong> lalu memakainya untuk jaring pengaman sosial yang luas.",
      },
      {
        type: "paragraph",
        html: "Resepnya sering disebut <strong>flexicurity</strong>: perusahaan bebas memecat dan merekrut (fleksibel), tetapi pekerja yang kehilangan kerja ditopang tunjangan, pelatihan ulang, dan layanan publik gratis (security). Pasar tetap menjadi mesin, negara menjadi bantalannya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Inti model Nordik",
        html: "Pasar bebas plus pajak tinggi plus jaring pengaman luas. Kesehatan dan pendidikan dibiayai negara, tetapi perusahaan tetap swasta dan bersaing bebas. Bukan negara yang berproduksi, melainkan negara yang meratakan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan sosialisme",
        html: "Di Swedia dan Denmark, sebagian besar perusahaan adalah <strong>swasta</strong> dan pasar tenaga kerja sangat lentur. Yang besar bukan kepemilikan negara, melainkan <strong>belanja sosialnya</strong>. Itu sebabnya disebut kapitalisme kesejahteraan, bukan ekonomi komando.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Harga yang harus dibayar",
        html: "Jaring pengaman luas menuntut pajak sangat tinggi, termasuk PPN sekitar 25% dan pajak penghasilan progresif yang berat. Modelnya juga butuh kepercayaan publik tinggi dan birokrasi bersih; sulit ditiru di negara dengan korupsi tinggi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba kalkulatornya",
        html: "Pakai kalkulator PDB untuk merasakan betapa besar dana yang terkumpul saat porsi belanja negara dinaikkan ke level Nordik.",
      },
      { type: "widget", widget: "KalkulatorPDB" },
      {
        type: "video",
        comp: "SistemEkonomi",
        title: "Ragam Sistem Ekonomi",
        caption: "Model Nordik duduk di sisi pasar, tetapi dengan belanja sosial yang paling besar.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak supermarket penuh aneka produk sebagai gambaran pasar yang tetap bebas",
        caption: "Di model Nordik, rak toko tetap dipenuhi swasta yang bersaing bebas; yang berbeda adalah pajak dan jaring pengamannya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Pengeluaran Pemerintah terhadap PDB antar Negara (ilustrasi)",
        unit: "% PDB",
        source: "ilustrasi edukatif, urutan sesuai pola yang umum dilaporkan",
        note: "Negara Nordik berbelanja jauh lebih besar terhadap PDB dibanding rata-rata ekonomi pasar lain.",
        data: [
          { label: "Denmark", value: 51, color: "#fbbf24" },
          { label: "Swedia", value: 49, color: "#fbbf24" },
          { label: "Norwegia", value: 46, color: "#f59e0b" },
          { label: "AS", value: 38, color: "#60a5fa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pajak tinggi membiayai layanan",
        html: "Sebuah negara bertipe Nordik punya PDB Rp 1.500 triliun dengan pengeluaran pemerintah <strong>50% PDB</strong>. Berarti sekitar Rp 750 triliun dikelola negara untuk kesehatan gratis, pendidikan tanpa biaya kuliah, dan tunjangan pengangguran. Sebagai imbalannya, warga membayar pajak penghasilan progresif berat dan PPN sekitar 25%. Layanan publik bukan gratis, melainkan sudah dibayar di muka lewat pajak bersama.",
      },
      {
        type: "case",
        title: "Sejarah: Folkhemmet Swedia, pasca Perang Dunia II",
        html: "Gagasan <strong>folkhemmet</strong> (rumah rakyat) dicetuskan Per Albin Hansson pada <strong>1928</strong>, lalu diwujudkan Partai Sosial Demokrat. Setelah <strong>Perang Dunia II</strong> berakhir 1945, Swedia memperluasnya menjadi negara kesejahteraan modern sepanjang 1950-an dan 1960-an: jaminan kesehatan menyeluruh, pensiun publik, dan pendidikan gratis. Yang penting, mereka tetap mempertahankan ekonomi pasar terbuka dan ekspor industri kuat, bukan menasionalisasi seluruh perusahaan. Inilah cetak biru kapitalisme kesejahteraan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Negara bertipe Nordik memiliki PDB Rp 1.500 triliun dengan pengeluaran pemerintah 50% PDB. Berapa rupiah yang dikelola negara?",
        answer: 750,
        tolerance: 0,
        prefix: "Rp",
        suffix: "triliun",
        solution:
          "50% x Rp 1.500 triliun = 0,5 x 1.500 = <strong>Rp 750 triliun</strong>. Dana sebesar ini membiayai kesehatan, pendidikan, dan tunjangan sosial.",
        hint: "Kalikan PDB dengan 0,5.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan unsur model Nordik dengan penjelasannya.",
        pairs: [
          { left: "Flexicurity", right: "Mudah memecat, tetapi pekerja ditopang tunjangan" },
          { left: "PPN sekitar 25%", right: "Pajak konsumsi yang ikut membiayai layanan" },
          { left: "Folkhemmet", right: "Gagasan rumah rakyat dari Swedia" },
          { left: "Perusahaan swasta", right: "Tetap menjadi mesin produksi utama" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Model Nordik adalah pasar bebas dengan pajak tinggi dan jaring pengaman terluas.",
          "Negara tidak menggantikan pasar, melainkan meratakan hasilnya lewat belanja sosial.",
          "Flexicurity memadukan pasar kerja lentur dengan perlindungan kuat bagi pekerja.",
          "Modelnya menuntut pajak berat, kepercayaan publik tinggi, dan birokrasi bersih.",
          "Folkhemmet Swedia pasca Perang Dunia II adalah cetak biru kapitalisme kesejahteraan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang paling membedakan model Nordik dari laissez-faire?",
            options: [
              "Tidak ada perusahaan swasta",
              "Pajak tinggi dan jaring pengaman sosial yang luas",
              "Tidak ada pasar",
              "Negara memiliki semua pabrik",
            ],
            answer: 1,
            explain: "Pasarnya tetap bebas; yang berbeda adalah pajak tinggi dan belanja sosial besar.",
          },
          {
            q: "Mengapa model Nordik disebut bukan sosialisme?",
            options: [
              "Karena tidak memungut pajak",
              "Karena sebagian besar perusahaan tetap swasta dan pasar bebas",
              "Karena negara melarang perdagangan",
              "Karena tidak ada layanan publik",
            ],
            answer: 1,
            explain: "Yang besar adalah belanja sosial, bukan kepemilikan negara atas produksi.",
          },
          {
            q: "Apa yang dimaksud flexicurity?",
            options: [
              "Pasar kerja lentur dipadu perlindungan kuat bagi pekerja",
              "Larangan memecat pekerja",
              "Tidak ada tunjangan sama sekali",
              "Upah ditetapkan negara untuk semua",
            ],
            answer: 0,
            explain: "Perusahaan mudah memecat-merekrut, tetapi pekerja ditopang tunjangan dan pelatihan.",
          },
          {
            q: "Dari mana gagasan folkhemmet berasal?",
            options: ["Amerika Serikat", "Swedia", "Uni Soviet", "Tiongkok"],
            answer: 1,
            explain: "Folkhemmet (rumah rakyat) dicetuskan di Swedia pada 1928 dan diwujudkan pasca Perang Dunia II.",
          },
          {
            q: "PDB Rp 1.500 triliun, pengeluaran pemerintah 50% PDB, berapa yang dikelola negara?",
            options: ["Rp 300 triliun", "Rp 500 triliun", "Rp 750 triliun", "Rp 1.500 triliun"],
            answer: 2,
            explain: "0,5 x 1.500 = Rp 750 triliun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kapitalisme-negara-tiongkok",
    levelId: "varian",
    order: 5,
    title: "Kapitalisme Negara (mis. Tiongkok)",
    summary:
      "Pasar yang hidup dan kompetitif, tetapi tetap dikemudikan negara dan partai. Pelajari resep Tiongkok sejak reformasi 1978 dan trade-off-nya.",
    durationMin: 14,
    tags: ["kapitalisme negara", "tiongkok", "reformasi 1978"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Kapitalisme negara</strong> adalah varian di mana pasar dibiarkan hidup dan kompetitif, tetapi arah besarnya tetap <strong>dikemudikan negara</strong>. Perusahaan swasta boleh untung, tetapi sektor strategis dikuasai badan usaha milik negara, dan rencana pembangunan ditentukan dari atas.",
      },
      {
        type: "paragraph",
        html: "Contoh paling menonjol adalah <strong>Tiongkok</strong>. Sejak reformasi 1978, ia memadukan dinamika pasar dengan kendali politik satu partai. Beijing menyebutnya <strong>sosialisme dengan karakteristik Tiongkok</strong>: alat pasar dipakai untuk tujuan yang ditetapkan negara.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Inti kapitalisme negara",
        html: "Pasar sebagai alat, negara sebagai sopir. Ada persaingan, harga, dan laba, tetapi negara mengarahkan industri prioritas, mengendalikan bank besar, dan menjaga BUMN di sektor strategis.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan laissez-faire",
        html: "Berbeda dari pasar bebas, di sini negara aktif memilih pemenang: memberi subsidi, mengatur kredit, dan menetapkan target lewat rencana lima tahunan. Pertumbuhan cepat sering jadi hasilnya, tetapi arah ditentukan kebijakan, bukan semata pasar.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Risikonya",
        html: "Kendali negara yang kuat bisa menekan kebebasan, mengaburkan batas bisnis dan politik, serta menumpuk utang pada proyek yang belum tentu efisien. Pertumbuhan tinggi tidak otomatis berarti pasar yang sehat dan terbuka.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser peran negara ke arah tengah-kanan spektrum untuk merasakan posisi kapitalisme negara: pasar aktif, tetapi kemudi tetap di tangan negara.",
      },
      { type: "widget", widget: "SimulatorSpektrumEkonomi" },
      {
        type: "video",
        comp: "GlobalisasiVideo",
        title: "Globalisasi dan Rantai Pasok Dunia",
        caption: "Keterbukaan terhadap perdagangan global menjadi mesin lonjakan ekonomi Tiongkok setelah 1978.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Juggling_on_the_Berlin_Wall_1a.jpg?width=400",
        alt: "Orang-orang di atas Tembok Berlin pada masa keruntuhannya 1989",
        caption: "Saat ekonomi komando Soviet runtuh bersama Tembok Berlin 1989, Tiongkok memilih jalan lain: membuka pasar tanpa melepas kendali partai.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "area",
        title: "Penurunan Kemiskinan Ekstrem Tiongkok (ilustrasi)",
        unit: "% penduduk",
        source: "ilustrasi edukatif berdasarkan pola data Bank Dunia (garis kemiskinan ekstrem)",
        note: "Setelah reformasi pasar 1978, porsi penduduk miskin ekstrem turun dramatis dari mayoritas menjadi nyaris nol.",
        data: [
          { label: "1981", value: 88, color: "#f87171" },
          { label: "1990", value: 66, color: "#fbbf24" },
          { label: "2000", value: 40, color: "#fbbf24" },
          { label: "2010", value: 11, color: "#60a5fa" },
          { label: "2019", value: 1, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pertumbuhan cepat dan aturan 72",
        html: "Bila sebuah ekonomi tumbuh sekitar <strong>10% per tahun</strong> (mendekati laju Tiongkok di puncak reformasi), <strong>aturan 72</strong> memperkirakan ukurannya berlipat dua dalam 72 dibagi 10, yaitu sekitar <strong>7,2 tahun</strong>. Itulah sebabnya dalam beberapa dekade saja Tiongkok melompat dari ekonomi miskin menjadi raksasa kedua dunia. Negara mengarahkan investasi besar-besaran, sementara pasar mendorong efisiensi dan ekspor.",
      },
      {
        type: "case",
        title: "Sejarah: Reformasi Deng Xiaoping mulai 1978",
        html: "Pada Sidang Pleno Ketiga Desember <strong>1978</strong>, <strong>Deng Xiaoping</strong> memimpin kebijakan <strong>Reformasi dan Keterbukaan</strong> (Gaige Kaifang). Pertanian dibuka untuk insentif keluarga, dan pada 1980 dibentuk <strong>Zona Ekonomi Khusus</strong> seperti Shenzhen untuk menarik modal asing. Deng meringkasnya dengan ujaran pragmatis: tidak peduli kucing hitam atau putih, asal menangkap tikus. Negara tetap memegang kemudi politik, tetapi alat pasar dipakai untuk mengejar kemakmuran.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan aturan 72, jika ekonomi tumbuh 10% per tahun, kira-kira berapa tahun yang dibutuhkan agar ukurannya berlipat dua?",
        answer: 7.2,
        tolerance: 0.2,
        suffix: "tahun",
        solution:
          "Aturan 72: 72 dibagi 10 = <strong>7,2 tahun</strong>. Aturan ini adalah pendekatan cepat untuk waktu penggandaan pada pertumbuhan majemuk.",
        hint: "Bagi 72 dengan angka pertumbuhan (dalam persen).",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri ke kapitalisme negara atau laissez-faire.",
        buckets: ["Kapitalisme negara", "Laissez-faire"],
        items: [
          { text: "Negara memilih industri prioritas lewat rencana lima tahunan", bucket: "Kapitalisme negara" },
          { text: "BUMN menguasai sektor strategis", bucket: "Kapitalisme negara" },
          { text: "Negara nyaris tidak mengarahkan pasar", bucket: "Laissez-faire" },
          { text: "Harga dan investasi sepenuhnya diserahkan pasar", bucket: "Laissez-faire" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kapitalisme negara memakai pasar sebagai alat, tetapi negara tetap menjadi sopir.",
          "Tiongkok adalah contoh utama, memadukan pasar dengan kendali satu partai.",
          "Reformasi Deng Xiaoping mulai 1978 membuka pasar tanpa melepas kendali politik.",
          "Pertumbuhan cepat menurunkan kemiskinan ekstrem secara dramatis sejak 1981.",
          "Risikonya: kebebasan tertekan, batas bisnis-politik kabur, dan utang pada proyek tak efisien.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti kapitalisme negara?",
            options: [
              "Tidak ada pasar sama sekali",
              "Pasar hidup, tetapi arah besarnya dikemudikan negara",
              "Negara tidak boleh ikut campur",
              "Tidak ada perusahaan swasta",
            ],
            answer: 1,
            explain: "Pasar dibiarkan kompetitif, tetapi negara mengarahkan industri prioritas dan sektor strategis.",
          },
          {
            q: "Siapa yang memimpin reformasi pasar Tiongkok mulai 1978?",
            options: ["Mao Zedong", "Deng Xiaoping", "Joseph Stalin", "Adam Smith"],
            answer: 1,
            explain: "Deng Xiaoping memimpin kebijakan Reformasi dan Keterbukaan sejak 1978.",
          },
          {
            q: "Apa yang dimaksud sosialisme dengan karakteristik Tiongkok?",
            options: [
              "Penghapusan total pasar",
              "Memakai alat pasar untuk tujuan yang ditetapkan negara",
              "Menyerahkan semua keputusan ke pasar bebas",
              "Kembali ke ekonomi komando murni",
            ],
            answer: 1,
            explain: "Istilah ini menandai pemakaian mekanisme pasar di bawah kendali politik partai.",
          },
          {
            q: "Apa salah satu risiko kapitalisme negara?",
            options: [
              "Tidak mungkin tumbuh",
              "Batas bisnis dan politik kabur serta utang pada proyek tak efisien",
              "Pasti tanpa korupsi",
              "Pasar selalu sehat dan terbuka",
            ],
            answer: 1,
            explain: "Kendali negara yang kuat bisa mengaburkan batas bisnis-politik dan menumpuk utang.",
          },
          {
            q: "Dengan aturan 72, pertumbuhan 10% per tahun menggandakan ekonomi dalam berapa tahun?",
            options: ["3,6 tahun", "7,2 tahun", "14 tahun", "72 tahun"],
            answer: 1,
            explain: "72 dibagi 10 sama dengan sekitar 7,2 tahun.",
          },
        ],
      },
    ],
  },
];
