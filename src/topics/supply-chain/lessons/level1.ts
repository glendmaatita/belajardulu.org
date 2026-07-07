import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "pengantar-supply-chain",
    levelId: "fondasi",
    order: 1,
    title: "Pengantar Supply Chain Management",
    summary:
      "Apa itu rantai pasok, kenapa ia menentukan harga dan ketersediaan barang yang kita pakai sehari-hari, dan bagaimana memandangnya sebagai satu aliran dari hulu ke hilir.",
    durationMin: 14,
    tags: ["fondasi", "konsep", "rantai pasok"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Supply chain</strong> (rantai pasok) adalah seluruh rangkaian pihak, kegiatan, informasi, dan dana yang terlibat sejak bahan baku digali sampai produk jadi diterima konsumen. <strong>Supply Chain Management (SCM)</strong> adalah seni dan ilmu mengelola aliran itu agar barang yang tepat tiba di tempat yang tepat, waktu yang tepat, jumlah yang tepat, dan biaya yang serendah mungkin.",
      },
      {
        type: "paragraph",
        html: "Secangkir kopi yang kamu minum melewati petani, pengepul, pabrik sangrai, distributor, gudang, kurir, sampai gerai. Sepatu, ponsel, beras, vaksin, semua punya rantai pasoknya sendiri. Ketika satu mata rantai tersendat, harga naik atau rak kosong. SCM adalah disiplin yang menjaga agar aliran ini tetap lancar, murah, dan tangguh.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg?width=400",
        alt: "Kapal kontainer besar mengangkut ribuan peti kemas di laut",
        caption: "Kapal kontainer adalah salah satu simpul kunci rantai pasok global, mengangkut barang lintas pulau dan negara sebelum sampai ke konsumen.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga aliran dalam rantai pasok",
        html: "Rantai pasok bukan cuma barang. Ada <strong>aliran barang</strong> (hulu ke hilir), <strong>aliran informasi</strong> (pesanan, ramalan, status, dua arah), dan <strong>aliran dana</strong> (pembayaran, hilir ke hulu). Mengelola ketiganya bersama itulah inti SCM.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Biaya Logistik Nasional terhadap PDB (perbandingan, ilustrasi)",
        unit: "% dari PDB",
        source: "ilustrasi edukatif berdasarkan pola yang umum dilaporkan",
        note: "Biaya logistik Indonesia tergolong tinggi dibanding banyak negara, sehingga efisiensi rantai pasok berdampak besar pada daya saing.",
        data: [
          { label: "Indonesia", value: 23, color: "#f87171" },
          { label: "Thailand", value: 15, color: "#fbbf24" },
          { label: "Malaysia", value: 13, color: "#60a5fa" },
          { label: "Negara maju", value: 9, color: "#34d399" },
        ],
      },
      {
        type: "video",
        comp: "SupplyChainVideo",
        title: "Rantai Pasok dari Hulu ke Hilir",
        caption: "Barang melewati banyak simpul, masing-masing dengan biaya, dokumen, dan risikonya sendiri.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa ini penting buat Indonesia",
        html: "Sebagai negara <strong>kepulauan</strong> dengan ribuan pulau, biaya memindahkan barang di Indonesia relatif mahal. Rantai pasok yang efisien menekan disparitas harga antara Jawa dan wilayah timur, dan menentukan apakah produk lokal bisa bersaing.",
      },
      {
        type: "case",
        title: "Studi Kasus: Harga semen di pegunungan Papua",
        html: "Sementara harga semen di Jawa hanya puluhan ribu rupiah per sak, di sejumlah wilayah pegunungan Papua harga pernah menembus jutaan rupiah per sak. Penyebabnya bukan harga pabrik, melainkan <strong>rantai pasok</strong>: barang harus naik kapal, pindah ke truk, lalu diangkut pesawat kecil atau dipikul lewat jalan rusak. Tiap mata rantai menambah biaya. Memahami SCM berarti memahami dari mana biaya itu datang dan di mana ia bisa dipangkas.",
      },
      {
        type: "case",
        title: "Sejarah: VOC dan rantai pasok rempah abad ke-17",
        html: "Pada <strong>1602</strong>, Belanda mendirikan <strong>VOC</strong>, yang sering disebut perusahaan multinasional pertama di dunia. Kekuatan VOC bukan pada memproduksi rempah, melainkan pada <strong>menguasai rantai pasoknya</strong>: kebun pala di Banda, gudang di Batavia, armada kapal, sampai pasar di Amsterdam. Dengan mengendalikan tiap simpul, VOC bisa menentukan pasokan dan harga rempah dunia selama hampir dua abad. Ini pelajaran tertua bahwa siapa yang menguasai rantai pasok, menguasai pasar.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah produk berharga Rp50.000 di pabrik. Sampai ke konsumen di pulau terpencil, biaya logistik menambah Rp35.000. Berapa persen biaya logistik terhadap harga jual akhir?",
        answer: 41.2,
        tolerance: 1,
        suffix: "%",
        solution:
          "Harga akhir = 50.000 + 35.000 = Rp85.000. Porsi logistik = 35.000 / 85.000 x 100% = <strong>41,2%</strong>. Hampir separuh harga yang dibayar konsumen adalah biaya memindahkan barang, bukan biaya membuatnya.",
        hint: "Harga akhir = harga pabrik + biaya logistik. Lalu bagi biaya logistik dengan harga akhir.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap kegiatan ke aliran yang tepat dalam rantai pasok.",
        buckets: ["Aliran barang", "Aliran informasi", "Aliran dana"],
        items: [
          { text: "Truk mengantar produk dari gudang ke toko", bucket: "Aliran barang" },
          { text: "Toko mengirim data penjualan harian ke pusat", bucket: "Aliran informasi" },
          { text: "Distributor membayar tagihan ke pabrik", bucket: "Aliran dana" },
          { text: "Kontainer berisi bahan baku tiba di pelabuhan", bucket: "Aliran barang" },
          { text: "Pabrik mengirim perkiraan permintaan ke pemasok", bucket: "Aliran informasi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Supply chain adalah seluruh aliran dari bahan baku sampai produk diterima konsumen.",
          "SCM mengelola tiga aliran sekaligus: barang, informasi, dan dana.",
          "Di negara kepulauan seperti Indonesia, biaya logistik tinggi dan sangat memengaruhi harga.",
          "Sebagian besar harga akhir sebuah produk bisa berasal dari biaya rantai pasok, bukan produksi.",
          "Menguasai rantai pasok berarti menguasai pasokan dan harga, pelajaran sejak era VOC.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa definisi paling tepat dari supply chain?",
            options: [
              "Hanya kegiatan pengiriman barang oleh kurir",
              "Seluruh rangkaian dari bahan baku sampai produk diterima konsumen",
              "Proses produksi di dalam satu pabrik saja",
              "Sistem pembayaran antar bank",
            ],
            answer: 1,
            explain: "Supply chain mencakup semua pihak dan kegiatan dari hulu (bahan baku) sampai hilir (konsumen).",
          },
          {
            q: "Ketiga aliran dalam rantai pasok adalah?",
            options: [
              "Barang, informasi, dan dana",
              "Truk, kapal, dan pesawat",
              "Pabrik, gudang, dan toko",
              "Bahan baku, mesin, dan tenaga kerja",
            ],
            answer: 0,
            explain: "Rantai pasok mengalirkan barang (hulu ke hilir), informasi (dua arah), dan dana (hilir ke hulu).",
          },
          {
            q: "Mengapa biaya logistik penting khususnya bagi Indonesia?",
            options: [
              "Karena Indonesia tidak punya pabrik",
              "Karena sebagai negara kepulauan, memindahkan barang relatif mahal",
              "Karena semua barang diimpor",
              "Karena tidak ada jalan raya",
            ],
            answer: 1,
            explain: "Geografi kepulauan membuat biaya logistik tinggi dan memengaruhi disparitas harga antar daerah.",
          },
          {
            q: "Apa inti kekuatan VOC dalam perdagangan rempah?",
            options: [
              "Menemukan jenis rempah baru",
              "Menguasai seluruh rantai pasok dari kebun sampai pasar Eropa",
              "Menjual rempah paling murah",
              "Membagikan rempah gratis",
            ],
            answer: 1,
            explain: "VOC mengendalikan tiap simpul rantai pasok, sehingga bisa mengatur pasokan dan harga rempah dunia.",
          },
          {
            q: "Sebuah produk dijual Rp85.000, dengan biaya logistik Rp35.000. Pernyataan yang benar?",
            options: [
              "Biaya logistik kurang dari 10% harga jual",
              "Biaya logistik sekitar 41% dari harga jual",
              "Biaya logistik sama dengan biaya produksi pasti",
              "Biaya logistik tidak memengaruhi harga",
            ],
            answer: 1,
            explain: "35.000 / 85.000 sekitar 41%, menunjukkan logistik bisa jadi komponen besar harga akhir.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "evolusi-scm",
    levelId: "fondasi",
    order: 2,
    title: "Evolusi SCM: dari Logistik Militer ke Integrasi Hulu-Hilir",
    summary:
      "Bagaimana cara berpikir tentang aliran barang berkembang dari logistik perang, ke distribusi fisik, sampai manajemen rantai pasok terintegrasi yang kita kenal sekarang.",
    durationMin: 14,
    tags: ["fondasi", "sejarah", "evolusi"],
    blocks: [
      {
        type: "paragraph",
        html: "Istilah <strong>supply chain management</strong> baru populer pada awal 1980-an, tetapi praktiknya jauh lebih tua. Akar disiplin ini ada di <strong>logistik militer</strong>: bagaimana memindahkan pasukan, amunisi, dan ransum ke garis depan tepat waktu. Dari sana, dunia bisnis perlahan menyadari bahwa aliran barang bukan urusan satu departemen, melainkan satu sistem utuh dari pemasok sampai konsumen.",
      },
      {
        type: "paragraph",
        html: "Perjalanan ini bisa dibaca sebagai pergeseran cara pandang: dari mengurus <em>potongan</em> (gudang sendiri, transportasi sendiri, pembelian sendiri) menuju mengelola <em>keseluruhan aliran</em> sebagai satu kesatuan yang terintegrasi. Inti perubahannya adalah menghapus dinding antar fungsi dan antar perusahaan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_assembly_line_-_1913.jpg?width=400",
        alt: "Lini perakitan mobil Ford tahun 1913 dengan deretan pekerja dan rangka kendaraan",
        caption: "Lini perakitan Ford 1913 menandai cikal bakal integrasi aliran produksi, sebuah lompatan menuju cara berpikir rantai pasok yang terpadu.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "info",
        title: "Asal istilah SCM",
        html: "Frasa <strong>supply chain management</strong> banyak dikaitkan dengan <strong>Keith Oliver</strong>, konsultan Booz Allen Hamilton, yang menggunakannya dalam wawancara pada <strong>1982</strong>. Ia ingin menekankan bahwa pengelolaan harus melintasi seluruh rantai, bukan optimasi tiap fungsi secara terpisah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pergeseran inti",
        html: "Evolusi SCM pada dasarnya adalah perjalanan dari <strong>silo</strong> menuju <strong>integrasi</strong>. Awalnya tiap fungsi (pembelian, produksi, gudang, transportasi) mengejar efisiensinya sendiri. SCM modern mengoptimalkan biaya total seluruh rantai, kadang satu fungsi sengaja menanggung biaya lebih agar total sistem lebih murah.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Pergeseran Fokus Manajemen Aliran Barang per Era (ilustrasi konsep)",
        unit: "tingkat integrasi (skala 1-10)",
        source: "ilustrasi edukatif",
        note: "Tingkat integrasi naik dari era logistik fisik yang terpisah-pisah menuju rantai pasok digital yang saling terhubung.",
        data: [
          { label: "1950an logistik fisik", value: 2 },
          { label: "1970an distribusi", value: 4 },
          { label: "1982 istilah SCM", value: 5 },
          { label: "1990an integrasi", value: 7 },
          { label: "2000an digital", value: 9 },
        ],
      },
      {
        type: "video",
        comp: "SupplyChainVideo",
        title: "Dari Simpul Terpisah Menuju Aliran Terpadu",
        caption: "Saat tiap simpul saling berbagi informasi, rantai berubah dari kumpulan potongan menjadi satu sistem.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Cara mengenali integrasi",
        html: "Tanda rantai pasok yang terintegrasi: pemasok melihat ramalan permintaan ritel, pabrik tahu tingkat stok distributor, dan keputusan diambil berdasarkan data bersama. Bila tiap pihak hanya melihat pesanan persis di depannya, rantai itu masih terfragmentasi.",
      },
      {
        type: "case",
        title: "Studi Kasus: integrasi pemasok pada produsen mi instan",
        html: "Sebuah produsen mi instan nasional dulu memesan tepung secara mendadak setiap stok menipis, sehingga pemasok kerap kewalahan dan harga fluktuatif. Setelah <strong>mengintegrasikan ramalan</strong>, pabrik membagikan rencana produksi 8 minggu ke depan kepada pemasok tepung. Pemasok bisa menjadwalkan giling lebih rata, biaya bahan turun sekitar <strong>6%</strong>, dan kejadian kehabisan tepung di pabrik turun drastis. Tidak ada mesin baru, yang berubah hanya <strong>aliran informasi</strong>.",
      },
      {
        type: "case",
        title: "Sejarah: Henry Ford dan River Rouge (integrasi vertikal 1920an)",
        html: "Pada <strong>1920-an</strong>, Henry Ford membangun kompleks raksasa <strong>River Rouge</strong> di Michigan. Ford ingin menguasai seluruh rantai: ia memiliki tambang bijih besi, kapal pengangkut, pabrik baja, kaca, sampai jalur perakitan mobil di satu lokasi. Konon bijih besi yang masuk pagi hari bisa menjadi mobil jadi dalam hitungan hari. Ini adalah contoh ekstrem <strong>integrasi vertikal</strong>: satu perusahaan memiliki banyak mata rantai sekaligus. SCM modern sering memilih cara berbeda, yaitu berkoordinasi erat dengan mitra tanpa harus memiliki semuanya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebelum integrasi, biaya tepung produsen mi adalah Rp500 juta per bulan. Setelah berbagi ramalan, biaya turun 6%. Berapa rupiah penghematan per bulan?",
        answer: 30000000,
        tolerance: 1,
        prefix: "Rp",
        solution:
          "Penghematan = 6% x Rp500.000.000 = 0,06 x 500.000.000 = <strong>Rp30.000.000</strong> per bulan. Hanya dengan berbagi informasi, tanpa investasi mesin.",
        hint: "Kalikan biaya awal dengan persen penghematan dalam bentuk desimal (0,06).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan era atau tokoh dengan ciri khasnya dalam evolusi SCM.",
        pairs: [
          { left: "Logistik militer", right: "Akar disiplin: memindahkan pasukan dan pasokan tepat waktu" },
          { left: "Keith Oliver 1982", right: "Mempopulerkan istilah supply chain management" },
          { left: "Henry Ford River Rouge", right: "Integrasi vertikal: memiliki seluruh mata rantai" },
          { left: "Era digital 2000an", right: "Berbagi data real time antar mitra rantai" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "SCM berakar pada logistik militer sebelum diadopsi dunia bisnis.",
          "Istilah supply chain management dipopulerkan Keith Oliver sekitar 1982.",
          "Evolusi intinya bergerak dari silo antar fungsi menuju integrasi seluruh rantai.",
          "Integrasi sering dicapai lewat berbagi informasi, bukan sekadar membeli aset.",
          "River Rouge milik Ford adalah contoh ekstrem integrasi vertikal era 1920an.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dari mana akar historis disiplin manajemen rantai pasok?",
            options: [
              "Industri perbankan",
              "Logistik militer",
              "Pertanian organik",
              "Periklanan",
            ],
            answer: 1,
            explain: "Logistik militer mengajarkan cara memindahkan pasokan tepat waktu, yang kemudian diadopsi bisnis.",
          },
          {
            q: "Siapa yang banyak dikaitkan dengan mempopulerkan istilah supply chain management pada 1982?",
            options: [
              "Henry Ford",
              "Michael Porter",
              "Keith Oliver",
              "Jay Forrester",
            ],
            answer: 2,
            explain: "Keith Oliver, konsultan Booz Allen Hamilton, menggunakan istilah itu dalam wawancara tahun 1982.",
          },
          {
            q: "Apa pergeseran inti dalam evolusi SCM?",
            options: [
              "Dari integrasi menuju silo",
              "Dari silo antar fungsi menuju integrasi seluruh rantai",
              "Dari digital menuju manual",
              "Dari global menuju lokal saja",
            ],
            answer: 1,
            explain: "SCM modern mengoptimalkan biaya total rantai, bukan tiap fungsi secara terpisah.",
          },
          {
            q: "Apa yang dicontohkan kompleks River Rouge milik Ford?",
            options: [
              "Outsourcing penuh ke pemasok",
              "Integrasi vertikal, memiliki banyak mata rantai sekaligus",
              "Sistem just in time tanpa gudang",
              "Penjualan langsung ke konsumen via internet",
            ],
            answer: 1,
            explain: "Ford memiliki tambang, baja, kaca, sampai perakitan di satu kompleks, contoh integrasi vertikal.",
          },
          {
            q: "Produsen mi berbiaya tepung Rp500 juta per bulan menghemat 6% setelah berbagi ramalan. Penghematannya?",
            options: [
              "Rp6 juta",
              "Rp30 juta",
              "Rp60 juta",
              "Rp300 juta",
            ],
            answer: 1,
            explain: "6% x Rp500 juta = Rp30 juta per bulan, dicapai hanya dengan berbagi informasi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "supply-chain-vs-logistik",
    levelId: "fondasi",
    order: 3,
    title: "Supply Chain vs Logistik: Beda Cakupan, Bukan Sinonim",
    summary:
      "Banyak orang menyamakan logistik dengan rantai pasok. Padahal logistik adalah bagian dari SCM. Pelajaran ini menegaskan batas keduanya dan kenapa itu penting.",
    durationMin: 13,
    tags: ["fondasi", "konsep", "logistik"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Logistik</strong> berfokus pada perpindahan dan penyimpanan barang: transportasi, pergudangan, penanganan material, dan pengiriman. <strong>Supply Chain Management</strong> lebih luas: ia mencakup logistik <em>plus</em> pengadaan, perencanaan produksi, kolaborasi pemasok, manajemen permintaan, dan hubungan dengan mitra di seluruh rantai.",
      },
      {
        type: "paragraph",
        html: "Cara mudah mengingatnya: <strong>logistik adalah bagian dari SCM</strong>, seperti mesin adalah bagian dari mobil. Semua logistik adalah aktivitas rantai pasok, tetapi tidak semua aktivitas rantai pasok adalah logistik. Menyamakan keduanya membuat kita lupa pada bagian strategis seperti memilih pemasok dan merancang jaringan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trailer_Truck_5.jpg?width=400",
        alt: "Truk trailer pengangkut barang di jalan raya",
        caption: "Truk trailer melambangkan logistik, yaitu perpindahan dan penyimpanan barang, yang merupakan satu bagian dari rantai pasok yang lebih luas.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Hubungan keduanya",
        html: "<strong>Logistik &sube; Supply Chain Management.</strong> Logistik menjawab pertanyaan operasional: bagaimana barang berpindah dan disimpan. SCM menjawab pertanyaan strategis dan operasional sekaligus: dari mana sumbernya, siapa mitranya, berapa banyak diproduksi, dan bagaimana seluruh aliran diselaraskan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Kesalahan umum",
        html: "Menyebut tim logistik sebagai tim supply chain dapat membuat perusahaan hanya mengejar pengiriman murah, sambil mengabaikan keputusan besar seperti pemilihan pemasok dan perencanaan permintaan yang justru menentukan biaya total.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Komposisi Cakupan Aktivitas dalam SCM (ilustrasi konsep)",
        unit: "porsi cakupan",
        source: "ilustrasi edukatif",
        note: "Logistik (transportasi dan pergudangan) hanyalah sebagian dari aktivitas yang dikelola SCM.",
        data: [
          { label: "Transportasi & pergudangan (logistik)", value: 35, color: "#60a5fa" },
          { label: "Pengadaan & pemasok", value: 25, color: "#34d399" },
          { label: "Perencanaan & permintaan", value: 22, color: "#fbbf24" },
          { label: "Kolaborasi & layanan", value: 18, color: "#f87171" },
        ],
      },
      {
        type: "video",
        comp: "SupplyChainVideo",
        title: "Logistik sebagai Bagian dari Rantai Pasok",
        caption: "Logistik menggerakkan barang, sementara SCM merancang seluruh aliran tempat barang itu bergerak.",
      },
      {
        type: "case",
        title: "Studi Kasus: toko online yang mengira masalahnya logistik",
        html: "Sebuah toko online fesyen sering telat kirim dan menyalahkan ekspedisi. Setelah ditelusuri, penyebab utamanya bukan logistik, melainkan <strong>perencanaan</strong>: ramalan permintaan buruk membuat barang laris sering kosong, sehingga harus menunggu restok dari pemasok selama 10 hari. Mengganti ekspedisi tidak menolong. Memperbaiki <strong>peramalan dan pengadaan</strong>, dua aktivitas SCM di luar logistik, memangkas keterlambatan hingga lebih dari separuh.",
      },
      {
        type: "case",
        title: "Sejarah: pembentukan CSCMP dan pemisahan istilah",
        html: "Organisasi profesi logistik di Amerika Serikat yang dulu bernama <strong>Council of Logistics Management</strong> mengubah namanya menjadi <strong>Council of Supply Chain Management Professionals (CSCMP)</strong> pada sekitar <strong>2005</strong>. Perubahan nama ini menandai pengakuan resmi bahwa cakupan profesi telah meluas dari sekadar logistik menjadi manajemen rantai pasok yang lebih strategis dan menyeluruh.",
      },
      {
        type: "calcExercise",
        prompt:
          "Total biaya rantai pasok sebuah perusahaan Rp800 juta. Biaya logistik (transportasi dan pergudangan) Rp280 juta. Berapa persen biaya logistik terhadap total biaya rantai pasok?",
        answer: 35,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Porsi logistik = 280 / 800 x 100% = <strong>35%</strong>. Artinya 65% biaya rantai pasok ada di aktivitas non-logistik seperti pengadaan dan perencanaan.",
        hint: "Bagi biaya logistik dengan total biaya, lalu kalikan 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap aktivitas: murni logistik, atau aktivitas SCM yang lebih luas di luar logistik.",
        buckets: ["Logistik", "SCM di luar logistik"],
        items: [
          { text: "Menentukan rute pengiriman truk", bucket: "Logistik" },
          { text: "Menyimpan barang di gudang", bucket: "Logistik" },
          { text: "Memilih dan menilai pemasok bahan baku", bucket: "SCM di luar logistik" },
          { text: "Membuat ramalan permintaan kuartal depan", bucket: "SCM di luar logistik" },
          { text: "Memuat kontainer ke kapal", bucket: "Logistik" },
          { text: "Merancang ulang jaringan pabrik dan distributor", bucket: "SCM di luar logistik" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Logistik adalah perpindahan dan penyimpanan barang: transportasi, gudang, pengiriman.",
          "SCM lebih luas, mencakup logistik plus pengadaan, perencanaan, dan kolaborasi mitra.",
          "Logistik adalah bagian dari SCM, bukan sinonimnya.",
          "Banyak masalah pengiriman sebenarnya berakar pada perencanaan, bukan logistik.",
          "Perubahan nama CLM menjadi CSCMP sekitar 2005 menandai meluasnya cakupan profesi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hubungan yang benar antara logistik dan SCM adalah?",
            options: [
              "Keduanya sinonim",
              "SCM adalah bagian dari logistik",
              "Logistik adalah bagian dari SCM",
              "Keduanya tidak berhubungan",
            ],
            answer: 2,
            explain: "Logistik (transportasi dan pergudangan) adalah salah satu komponen dari SCM yang lebih luas.",
          },
          {
            q: "Manakah aktivitas SCM yang BUKAN logistik?",
            options: [
              "Mengangkut barang dengan truk",
              "Menyimpan barang di gudang",
              "Memilih dan menilai pemasok",
              "Memuat kontainer ke kapal",
            ],
            answer: 2,
            explain: "Pemilihan pemasok adalah aktivitas pengadaan, bagian SCM yang berada di luar logistik.",
          },
          {
            q: "Fokus utama logistik adalah?",
            options: [
              "Perpindahan dan penyimpanan barang",
              "Penetapan harga saham",
              "Perekrutan karyawan",
              "Desain kemasan iklan",
            ],
            answer: 0,
            explain: "Logistik berfokus pada transportasi, pergudangan, dan penanganan material.",
          },
          {
            q: "Toko online sering telat kirim karena barang laris kosong dan menunggu restok 10 hari. Akar masalahnya?",
            options: [
              "Ekspedisi yang lambat",
              "Perencanaan dan pengadaan yang buruk",
              "Harga jual terlalu murah",
              "Warna kemasan kurang menarik",
            ],
            answer: 1,
            explain: "Masalahnya pada peramalan dan pengadaan, aktivitas SCM di luar logistik, bukan pada ekspedisi.",
          },
          {
            q: "Total biaya rantai pasok Rp800 juta, biaya logistik Rp280 juta. Porsi logistik?",
            options: [
              "Sekitar 15%",
              "Sekitar 35%",
              "Sekitar 65%",
              "Sekitar 80%",
            ],
            answer: 1,
            explain: "280 / 800 = 35%, sehingga 65% biaya ada di aktivitas non-logistik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "value-chain-porter",
    levelId: "fondasi",
    order: 4,
    title: "Rantai Nilai Michael Porter: Di Mana Nilai Diciptakan",
    summary:
      "Rantai nilai memetakan aktivitas perusahaan menjadi aktivitas primer dan pendukung, lalu menunjukkan di mana margin sebenarnya tercipta dan di mana ia bisa diperbesar.",
    durationMin: 15,
    tags: ["fondasi", "value chain", "strategi"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Rantai nilai</strong> (value chain) adalah kerangka dari <strong>Michael Porter</strong> untuk membedah perusahaan menjadi kegiatan-kegiatan yang menciptakan nilai. Idenya: keunggulan bersaing lahir bukan dari perusahaan secara keseluruhan, melainkan dari <em>aktivitas tertentu</em> yang dilakukan lebih baik atau lebih murah daripada pesaing.",
      },
      {
        type: "paragraph",
        html: "Porter membagi aktivitas menjadi dua kelompok. <strong>Aktivitas primer</strong> langsung menyentuh produk: logistik masuk, operasi, logistik keluar, pemasaran dan penjualan, serta pelayanan. <strong>Aktivitas pendukung</strong> menopang semuanya: infrastruktur perusahaan, manajemen SDM, pengembangan teknologi, dan pengadaan. Selisih antara nilai yang diterima pelanggan dan total biaya semua aktivitas itu disebut <strong>margin</strong>.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak supermarket penuh produk kemasan yang tertata rapi",
        caption: "Rak supermarket adalah titik akhir rantai nilai; nilai yang ditambahkan tiap aktivitas, termasuk pemasaran dan pelayanan, baru terbayar saat konsumen memilih produk di sini.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "info",
        title: "Lima aktivitas primer",
        html: "<strong>1) Logistik masuk</strong> (menerima dan menyimpan bahan), <strong>2) Operasi</strong> (mengubah bahan jadi produk), <strong>3) Logistik keluar</strong> (mengirim ke pelanggan), <strong>4) Pemasaran dan penjualan</strong>, <strong>5) Pelayanan</strong> (purna jual). Inilah urutan nilai bergerak dari hulu ke hilir di dalam perusahaan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kaitan dengan SCM",
        html: "Rantai nilai memetakan penciptaan nilai di <strong>dalam satu perusahaan</strong>, sementara rantai pasok membentang <strong>antar banyak perusahaan</strong>. Logistik masuk dan logistik keluar pada rantai nilai adalah titik tempat rantai nilai sebuah perusahaan menyambung ke rantai pasok yang lebih besar.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kontribusi Tiap Aktivitas Primer pada Nilai Tambah (ilustrasi konsep)",
        unit: "% nilai tambah",
        source: "ilustrasi edukatif",
        note: "Pada banyak produk bermerek, pemasaran dan pelayanan menyumbang nilai tambah besar, bukan hanya operasi produksi.",
        data: [
          { label: "Logistik masuk", value: 10, color: "#60a5fa" },
          { label: "Operasi", value: 25, color: "#34d399" },
          { label: "Logistik keluar", value: 12, color: "#a78bfa" },
          { label: "Pemasaran & penjualan", value: 33, color: "#fbbf24" },
          { label: "Pelayanan", value: 20, color: "#f87171" },
        ],
      },
      {
        type: "video",
        comp: "SupplyChainVideo",
        title: "Menelusuri Rantai Nilai di Dalam Perusahaan",
        caption: "Tiap aktivitas menambahkan sedikit nilai; jumlah totalnya menentukan margin.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Cara memakai kerangka ini",
        html: "Petakan tiap aktivitas perusahaanmu, lalu tanya dua hal: di mana kita menambahkan <strong>nilai paling besar</strong> bagi pelanggan, dan di mana <strong>biaya membengkak</strong> tanpa menambah nilai. Aktivitas jenis kedua adalah kandidat untuk diperbaiki atau dialihdayakan.",
      },
      {
        type: "case",
        title: "Studi Kasus: kopi spesialti lokal dan letak nilainya",
        html: "Sebuah merek kopi spesialti lokal menjual biji seharga Rp150.000 per kilogram, jauh di atas harga komoditas Rp60.000. Selisihnya tidak datang dari menanam yang lebih murah, melainkan dari <strong>aktivitas hilir</strong>: kurasi mutu, cerita asal-usul (pemasaran), kemasan, dan layanan edukasi rasa. Dengan kerangka Porter, terlihat bahwa nilai tambah terbesar ada di <strong>pemasaran dan pelayanan</strong>, bukan sekadar operasi sangrai.",
      },
      {
        type: "case",
        title: "Sejarah: Michael Porter dan Competitive Advantage (1985)",
        html: "Konsep rantai nilai dipopulerkan <strong>Michael Porter</strong>, guru besar Harvard Business School, dalam bukunya <strong>Competitive Advantage</strong> yang terbit pada <strong>1985</strong>. Buku ini memberi perusahaan cara sistematis untuk membongkar dirinya menjadi aktivitas-aktivitas, lalu mencari sumber keunggulan biaya atau diferensiasi. Kerangka ini menjadi salah satu alat analisis strategi paling banyak diajarkan hingga kini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah produk diterima pelanggan dengan nilai persepsi Rp200.000. Total biaya seluruh aktivitas rantai nilai Rp145.000. Berapa rupiah marginnya?",
        answer: 55000,
        tolerance: 1,
        prefix: "Rp",
        solution:
          "Margin = nilai bagi pelanggan dikurangi total biaya aktivitas = 200.000 - 145.000 = <strong>Rp55.000</strong>. Margin inilah yang ingin diperbesar Porter, lewat menaikkan nilai atau menurunkan biaya aktivitas.",
        hint: "Margin = nilai bagi pelanggan - total biaya aktivitas.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap aktivitas Porter sebagai aktivitas primer atau aktivitas pendukung.",
        buckets: ["Aktivitas primer", "Aktivitas pendukung"],
        items: [
          { text: "Operasi mengubah bahan jadi produk", bucket: "Aktivitas primer" },
          { text: "Pemasaran dan penjualan", bucket: "Aktivitas primer" },
          { text: "Pelayanan purna jual", bucket: "Aktivitas primer" },
          { text: "Manajemen sumber daya manusia", bucket: "Aktivitas pendukung" },
          { text: "Pengembangan teknologi", bucket: "Aktivitas pendukung" },
          { text: "Pengadaan (procurement)", bucket: "Aktivitas pendukung" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Rantai nilai Porter membongkar perusahaan menjadi aktivitas penciptaan nilai.",
          "Aktivitas primer: logistik masuk, operasi, logistik keluar, pemasaran-penjualan, pelayanan.",
          "Aktivitas pendukung: infrastruktur, SDM, teknologi, dan pengadaan.",
          "Margin adalah selisih nilai bagi pelanggan dengan total biaya semua aktivitas.",
          "Konsep ini dipopulerkan Porter dalam Competitive Advantage tahun 1985.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Siapa yang mempopulerkan konsep rantai nilai?",
            options: [
              "Keith Oliver",
              "Michael Porter",
              "Henry Ford",
              "Jay Forrester",
            ],
            answer: 1,
            explain: "Michael Porter memperkenalkan rantai nilai dalam buku Competitive Advantage tahun 1985.",
          },
          {
            q: "Manakah yang termasuk aktivitas primer?",
            options: [
              "Manajemen SDM",
              "Pengembangan teknologi",
              "Logistik keluar",
              "Infrastruktur perusahaan",
            ],
            answer: 2,
            explain: "Logistik keluar adalah aktivitas primer; SDM, teknologi, dan infrastruktur adalah pendukung.",
          },
          {
            q: "Apa itu margin dalam rantai nilai?",
            options: [
              "Total biaya semua aktivitas",
              "Selisih nilai bagi pelanggan dengan total biaya aktivitas",
              "Jumlah karyawan dikali gaji",
              "Harga bahan baku saja",
            ],
            answer: 1,
            explain: "Margin adalah nilai yang diterima pelanggan dikurangi total biaya seluruh aktivitas.",
          },
          {
            q: "Apa perbedaan rantai nilai dan rantai pasok?",
            options: [
              "Keduanya identik",
              "Rantai nilai di dalam satu perusahaan, rantai pasok membentang antar perusahaan",
              "Rantai nilai hanya untuk jasa, rantai pasok hanya untuk barang",
              "Rantai pasok lebih sempit dari satu departemen",
            ],
            answer: 1,
            explain: "Rantai nilai memetakan nilai dalam satu perusahaan; rantai pasok menghubungkan banyak perusahaan.",
          },
          {
            q: "Nilai persepsi produk Rp200.000, total biaya aktivitas Rp145.000. Marginnya?",
            options: [
              "Rp45.000",
              "Rp55.000",
              "Rp145.000",
              "Rp345.000",
            ],
            answer: 1,
            explain: "200.000 - 145.000 = Rp55.000.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "ekosistem-rantai-pasok",
    levelId: "fondasi",
    order: 5,
    title: "Ekosistem Rantai Pasok: Siapa Saja Pemainnya",
    summary:
      "Mengenal para pemain dalam rantai pasok, dari pemasok, produsen, distributor, ritel, penyedia logistik pihak ketiga (3PL), sampai konsumen, dan bagaimana mereka saling bergantung.",
    durationMin: 14,
    tags: ["fondasi", "ekosistem", "pemain"],
    blocks: [
      {
        type: "paragraph",
        html: "Rantai pasok bukan garis lurus satu perusahaan, melainkan sebuah <strong>ekosistem</strong> berisi banyak pemain yang saling bergantung. Dari hulu ke hilir, barang mengalir melalui <strong>pemasok</strong> bahan baku, <strong>produsen</strong>, <strong>distributor</strong> atau grosir, <strong>peritel</strong>, dan akhirnya <strong>konsumen</strong>. Di sela-sela mereka bekerja penyedia jasa seperti <strong>3PL</strong>.",
      },
      {
        type: "paragraph",
        html: "<strong>3PL (third party logistics)</strong> adalah perusahaan yang menyediakan jasa logistik, seperti pergudangan dan pengiriman, agar pemain lain bisa fokus pada bisnis intinya. Selain itu ada pemain pendukung: penyedia teknologi, lembaga keuangan, bea cukai, dan pengangkut. Semua simpul ini harus selaras agar barang sampai murah dan tepat waktu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Modern_warehouse_with_pallet_rack_storage_system.jpg?width=400",
        alt: "Gudang modern dengan sistem rak palet bertingkat penuh barang",
        caption: "Gudang dengan rak palet adalah tempat para pemain ekosistem, seperti distributor dan penyedia 3PL, menyimpan dan menyalurkan barang di antara produsen dan peritel.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pemain inti dari hulu ke hilir",
        html: "<strong>Pemasok &rarr; Produsen &rarr; Distributor &rarr; Peritel &rarr; Konsumen.</strong> Pemasok menyediakan bahan, produsen mengubahnya jadi produk, distributor menyebarkan ke banyak titik, peritel menjual eceran, dan konsumen memakai. 3PL bisa menempel di mata rantai mana pun.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Apa itu 3PL",
        html: "Bayangkan toko online yang tidak mau repot mengurus gudang dan kurir. Ia menyewa <strong>3PL</strong> untuk menyimpan barang dan mengirimnya. Toko fokus berjualan, 3PL fokus logistik. Inilah mengapa banyak bisnis kecil bisa mengirim ke seluruh Indonesia tanpa memiliki satu pun truk.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Markup Harga di Tiap Simpul Sebuah Produk Konsumsi (ilustrasi konsep)",
        unit: "harga (Rp ribu)",
        source: "ilustrasi edukatif",
        note: "Tiap simpul menambahkan margin dan biaya, sehingga harga naik bertahap dari produsen sampai ke tangan konsumen.",
        data: [
          { label: "Harga pabrik", value: 50, color: "#34d399" },
          { label: "Setelah distributor", value: 62, color: "#60a5fa" },
          { label: "Setelah grosir", value: 70, color: "#a78bfa" },
          { label: "Harga ritel (konsumen)", value: 85, color: "#fbbf24" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorBullwhip",
      },
      {
        type: "video",
        comp: "SupplyChainVideo",
        title: "Para Pemain dalam Ekosistem Rantai Pasok",
        caption: "Pemasok, produsen, distributor, peritel, dan penyedia 3PL bekerja sebagai satu jaringan yang saling bergantung.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Ketergantungan menyimpan risiko",
        html: "Karena pemain saling bergantung, kegagalan satu simpul menjalar ke simpul lain. Jika satu pemasok tunggal berhenti, seluruh produsen di hilirnya ikut berhenti. Ekosistem yang sehat butuh alternatif pemasok dan transparansi antar pemain.",
      },
      {
        type: "case",
        title: "Studi Kasus: ekosistem warung dan distributor FMCG",
        html: "Sebuah produk sabun keluar dari pabrik seharga <strong>Rp50.000</strong> per lusin. Distributor mengambil margin dan mengantar ke ratusan grosir, harga naik jadi Rp62.000. Grosir menjual ke warung di harga Rp70.000, lalu warung menjual eceran setara Rp85.000 per lusin ke konsumen. Tiap pemain menambah biaya transport dan margin. Memahami ekosistem membantu kita melihat <strong>kenapa harga di warung lebih mahal daripada di pabrik</strong>, dan di mana rantai bisa dipangkas.",
      },
      {
        type: "case",
        title: "Sejarah: kemunculan model 3PL pada 1980an",
        html: "Penyedia <strong>logistik pihak ketiga (3PL)</strong> berkembang pesat sejak <strong>1980-an</strong>, terutama setelah deregulasi transportasi di Amerika Serikat membuat jasa angkutan lebih kompetitif. Perusahaan mulai menyadari bahwa memiliki armada dan gudang sendiri tidak selalu efisien, lebih baik menyerahkannya ke spesialis. Sejak itu raksasa logistik global tumbuh sebagai pemain penting dalam ekosistem rantai pasok modern.",
      },
      {
        type: "calcExercise",
        prompt:
          "Harga sabun di pabrik Rp50.000 per lusin dan di warung Rp85.000 per lusin. Berapa persen kenaikan harga total dari pabrik sampai konsumen?",
        answer: 70,
        tolerance: 1,
        suffix: "%",
        solution:
          "Kenaikan = (85.000 - 50.000) / 50.000 x 100% = 35.000 / 50.000 x 100% = <strong>70%</strong>. Inilah total markup seluruh simpul ekosistem dari hulu ke hilir.",
        hint: "Kenaikan persen = (harga akhir - harga awal) / harga awal x 100%.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap pemain ekosistem dengan perannya.",
        pairs: [
          { left: "Pemasok", right: "Menyediakan bahan baku ke produsen" },
          { left: "Produsen", right: "Mengubah bahan baku menjadi produk jadi" },
          { left: "Distributor", right: "Menyebarkan produk ke banyak titik penjualan" },
          { left: "Peritel", right: "Menjual produk eceran ke konsumen" },
          { left: "3PL", right: "Menyediakan jasa gudang dan pengiriman bagi pemain lain" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Rantai pasok adalah ekosistem pemain yang saling bergantung, bukan satu perusahaan.",
          "Alur inti: pemasok, produsen, distributor, peritel, konsumen.",
          "3PL menyediakan jasa logistik agar pemain lain fokus pada bisnis intinya.",
          "Tiap simpul menambah biaya dan margin, sehingga harga naik bertahap ke hilir.",
          "Ketergantungan antar pemain menyimpan risiko bila satu simpul gagal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Urutan yang benar dari hulu ke hilir adalah?",
            options: [
              "Konsumen, peritel, distributor, produsen, pemasok",
              "Pemasok, produsen, distributor, peritel, konsumen",
              "Produsen, pemasok, konsumen, peritel, distributor",
              "Distributor, konsumen, pemasok, produsen, peritel",
            ],
            answer: 1,
            explain: "Aliran barang bergerak dari pemasok bahan baku sampai ke konsumen akhir.",
          },
          {
            q: "Apa peran 3PL dalam ekosistem rantai pasok?",
            options: [
              "Membuat produk jadi",
              "Menyediakan jasa logistik seperti gudang dan pengiriman",
              "Menetapkan harga eceran",
              "Menggantikan konsumen",
            ],
            answer: 1,
            explain: "3PL adalah penyedia logistik pihak ketiga yang menangani pergudangan dan pengiriman.",
          },
          {
            q: "Mengapa harga di warung lebih mahal daripada di pabrik?",
            options: [
              "Karena warung menaikkan kualitas barang",
              "Karena tiap simpul menambah biaya transport dan margin",
              "Karena pabrik menjual rugi",
              "Karena konsumen meminta harga tinggi",
            ],
            answer: 1,
            explain: "Distributor, grosir, dan warung masing-masing menambahkan biaya dan margin.",
          },
          {
            q: "Apa risiko utama dari ketergantungan antar pemain?",
            options: [
              "Harga selalu turun",
              "Kegagalan satu simpul bisa menjalar ke simpul lain",
              "Tidak ada konsumen",
              "Pemasok jadi tidak penting",
            ],
            answer: 1,
            explain: "Jika satu pemasok tunggal berhenti, produsen di hilirnya ikut terganggu.",
          },
          {
            q: "Harga pabrik Rp50.000, harga warung Rp85.000. Total kenaikannya?",
            options: [
              "35%",
              "50%",
              "70%",
              "170%",
            ],
            answer: 2,
            explain: "(85.000 - 50.000) / 50.000 = 70% total markup seluruh ekosistem.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "model-scor",
    levelId: "fondasi",
    order: 6,
    title: "Model SCOR: Bahasa Bersama Mengelola Rantai Pasok",
    summary:
      "SCOR memetakan rantai pasok ke dalam enam proses inti: Plan, Source, Make, Deliver, Return, dan Enable. Kerangka ini menjadi bahasa standar untuk menilai dan memperbaiki kinerja.",
    durationMin: 16,
    tags: ["fondasi", "SCOR", "proses"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Model SCOR (Supply Chain Operations Reference)</strong> adalah kerangka standar yang membagi seluruh rantai pasok menjadi proses-proses inti yang bisa diukur dan dibandingkan. SCOR dikembangkan agar perusahaan yang berbeda bisa memakai <em>bahasa yang sama</em> saat membahas dan memperbaiki rantai pasoknya.",
      },
      {
        type: "paragraph",
        html: "Versi modern SCOR mengenal enam proses utama: <strong>Plan</strong> (rencana), <strong>Source</strong> (sumber/pengadaan), <strong>Make</strong> (produksi), <strong>Deliver</strong> (pengiriman), <strong>Return</strong> (pengembalian), dan <strong>Enable</strong> (pemungkin, seperti aturan, data, dan kontrak yang menopang lima proses lain). Plan menyelimuti semuanya, sedangkan Source, Make, dan Deliver adalah urat nadi aliran barang.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/UK-India_Business_Leaders_Climate_Group_breakfast_meeting_%285177859631%29.jpg?width=400",
        alt: "Sekelompok pemimpin bisnis berdiskusi dalam sebuah rapat lintas pihak",
        caption: "SCOR menyediakan bahasa bersama agar para pihak dalam rantai pasok dapat duduk satu meja dan membahas serta memperbaiki kinerja dengan istilah yang sama.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Enam proses SCOR",
        html: "<strong>Plan:</strong> menyeimbangkan permintaan dan pasokan. <strong>Source:</strong> mengadakan bahan dan jasa. <strong>Make:</strong> mengubah bahan jadi produk. <strong>Deliver:</strong> mengelola pesanan, gudang, dan pengiriman. <strong>Return:</strong> menangani barang kembali (rusak, garansi, daur ulang). <strong>Enable:</strong> mengelola aturan, kinerja, data, kontrak, dan risiko yang menopang seluruh proses.",
      },
      {
        type: "video",
        comp: "SCORModelVideo",
        title: "Enam Proses Inti Model SCOR",
        caption: "Plan menaungi semuanya, sementara Source, Make, dan Deliver menggerakkan barang dari hulu ke hilir.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa Return sering dilupakan",
        html: "Banyak perusahaan lupa merancang proses <strong>Return</strong>. Padahal pada bisnis e-commerce, tingkat pengembalian bisa tinggi dan biaya menangani barang kembali (reverse logistics) besar. Rantai pasok yang matang menyiapkan jalur pengembalian sejak awal, bukan menambalnya belakangan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Cara memakai SCOR",
        html: "Petakan rantai pasokmu ke enam proses, lalu ukur kinerja tiap proses (misal ketepatan kirim, lama siklus pengadaan). SCOR memberi daftar metrik standar sehingga kamu bisa membandingkan diri dengan praktik terbaik, bukan menebak-nebak.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Porsi Biaya Operasi pada Tiap Proses SCOR Sebuah Manufaktur (ilustrasi konsep)",
        unit: "% biaya operasi",
        source: "ilustrasi edukatif",
        note: "Source dan Make biasanya menyerap porsi biaya terbesar, tetapi Deliver dan Return tetap perlu dikelola serius.",
        data: [
          { label: "Source", value: 38, color: "#34d399" },
          { label: "Make", value: 30, color: "#60a5fa" },
          { label: "Deliver", value: 20, color: "#fbbf24" },
          { label: "Return", value: 7, color: "#f87171" },
          { label: "Plan & Enable", value: 5, color: "#a78bfa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: memetakan rantai pasok produsen sepatu lokal",
        html: "Produsen sepatu lokal memetakan operasinya dengan SCOR. <strong>Plan:</strong> meramal permintaan musiman. <strong>Source:</strong> membeli kulit dan sol. <strong>Make:</strong> menjahit dan merakit. <strong>Deliver:</strong> mengirim ke toko dan marketplace. <strong>Return:</strong> menangani retur ukuran yang tidak pas, yang mencapai sekitar <strong>12%</strong> dari penjualan online. Dengan memetakan Return secara eksplisit, mereka membuat panduan ukuran lebih jelas dan retur turun ke sekitar 7%, menghemat biaya reverse logistics yang signifikan.",
      },
      {
        type: "case",
        title: "Sejarah: lahirnya SCOR oleh Supply Chain Council (1996)",
        html: "Model SCOR diperkenalkan oleh <strong>Supply Chain Council</strong> pada sekitar <strong>1996</strong> sebagai upaya pertama membuat kerangka rujukan lintas industri untuk operasi rantai pasok. Belakangan Supply Chain Council bergabung ke dalam <strong>APICS</strong> (kini bagian dari ASCM), dan SCOR terus diperbarui, termasuk menambahkan proses <strong>Enable</strong> agar aspek tata kelola dan data tidak terlupakan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Penjualan online sepatu 5.000 pasang per bulan dengan tingkat retur 12%. Setelah panduan ukuran diperbaiki, retur turun jadi 7%. Berapa pasang retur yang berhasil dicegah per bulan?",
        answer: 250,
        tolerance: 0,
        suffix: " pasang",
        solution:
          "Retur awal = 12% x 5.000 = 600 pasang. Retur baru = 7% x 5.000 = 350 pasang. Selisih = 600 - 350 = <strong>250 pasang</strong> retur dicegah per bulan.",
        hint: "Hitung retur pada 12% dan pada 7% dari 5.000, lalu cari selisihnya.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap kegiatan ke proses SCOR yang tepat.",
        buckets: ["Plan", "Source", "Make", "Deliver", "Return"],
        items: [
          { text: "Membuat ramalan permintaan kuartal depan", bucket: "Plan" },
          { text: "Membeli kulit dari pemasok", bucket: "Source" },
          { text: "Menjahit dan merakit sepatu", bucket: "Make" },
          { text: "Mengirim pesanan ke marketplace", bucket: "Deliver" },
          { text: "Menerima sepatu retur karena ukuran salah", bucket: "Return" },
          { text: "Menyeimbangkan permintaan dengan kapasitas pabrik", bucket: "Plan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "SCOR adalah kerangka standar agar rantai pasok bisa diukur dengan bahasa yang sama.",
          "Enam proses intinya: Plan, Source, Make, Deliver, Return, dan Enable.",
          "Plan menaungi seluruh proses; Source, Make, Deliver adalah urat nadi aliran barang.",
          "Return (reverse logistics) sering dilupakan padahal mahal, terutama di e-commerce.",
          "SCOR diperkenalkan Supply Chain Council sekitar 1996 dan terus diperbarui.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa kepanjangan dan fungsi utama SCOR?",
            options: [
              "Kerangka standar untuk memetakan dan mengukur proses rantai pasok",
              "Software akuntansi keuangan",
              "Metode penetapan harga eceran",
              "Sistem perekrutan karyawan",
            ],
            answer: 0,
            explain: "SCOR (Supply Chain Operations Reference) adalah kerangka rujukan untuk menilai dan memperbaiki rantai pasok.",
          },
          {
            q: "Manakah enam proses inti SCOR?",
            options: [
              "Beli, Jual, Simpan, Kirim, Bayar, Tagih",
              "Plan, Source, Make, Deliver, Return, Enable",
              "Input, Proses, Output, Umpan balik, Kontrol, Audit",
              "Hulu, Tengah, Hilir, Gudang, Truk, Toko",
            ],
            answer: 1,
            explain: "Versi modern SCOR terdiri dari Plan, Source, Make, Deliver, Return, dan Enable.",
          },
          {
            q: "Proses SCOR mana yang menangani barang yang dikembalikan pelanggan?",
            options: [
              "Make",
              "Source",
              "Return",
              "Plan",
            ],
            answer: 2,
            explain: "Return menangani pengembalian barang, termasuk reverse logistics seperti retur dan daur ulang.",
          },
          {
            q: "Apa peran proses Enable dalam SCOR?",
            options: [
              "Menjahit produk",
              "Mengelola aturan, data, kontrak, dan risiko yang menopang proses lain",
              "Mengantar barang ke konsumen",
              "Membeli bahan baku",
            ],
            answer: 1,
            explain: "Enable adalah proses pemungkin: tata kelola, data, kontrak, dan manajemen risiko.",
          },
          {
            q: "Penjualan 5.000 pasang, retur turun dari 12% ke 7%. Retur yang dicegah per bulan?",
            options: [
              "150 pasang",
              "250 pasang",
              "350 pasang",
              "600 pasang",
            ],
            answer: 1,
            explain: "600 (12%) dikurangi 350 (7%) sama dengan 250 pasang retur yang dicegah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "efek-bullwhip",
    levelId: "fondasi",
    order: 7,
    title: "Efek Bullwhip: Riak Kecil yang Jadi Gelombang Besar",
    summary:
      "Perubahan permintaan kecil di konsumen bisa membesar berlipat saat merambat ke hulu. Pelajaran ini membongkar penyebab efek bullwhip dan cara meredamnya.",
    durationMin: 15,
    tags: ["fondasi", "bullwhip", "permintaan"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Efek bullwhip</strong> (efek cambuk) adalah gejala di mana variasi permintaan yang kecil di hilir (konsumen) <em>membesar</em> semakin ke hulu (peritel, distributor, produsen, pemasok). Seperti ujung cambuk yang bergerak jauh lebih liar daripada pergelangan tangan yang menggerakkannya, pemasok di ujung hulu mengalami ayunan pesanan yang jauh lebih ekstrem daripada permintaan konsumen sebenarnya.",
      },
      {
        type: "paragraph",
        html: "Akibatnya mahal: stok menumpuk lalu kosong bergantian, pabrik kewalahan lalu menganggur, dan biaya membengkak di sepanjang rantai. Yang menarik, efek ini muncul <strong>bukan karena ada yang bodoh</strong>, melainkan karena tiap pemain mengambil keputusan masuk akal hanya dengan informasi yang ia lihat di depannya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak supermarket berisi produk kemasan yang siap dibeli konsumen",
        caption: "Riak permintaan kecil di rak supermarket, seperti saat panic buying, dapat membesar menjadi gelombang pesanan raksasa saat merambat ke hulu rantai pasok.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat penyebab utama",
        html: "<strong>1) Pembaruan ramalan</strong> berlebihan dari pesanan terbaru. <strong>2) Pemesanan dalam batch</strong> (order besar sesekali, bukan kecil rutin). <strong>3) Fluktuasi harga</strong> dan promosi yang memicu penimbunan. <strong>4) Penjatahan dan permainan</strong> saat barang langka (pelanggan memesan berlebih agar kebagian).",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser variasi permintaan konsumen dan lihat bagaimana pesanan membesar di tiap tingkat hulu. Rasakan sendiri bahwa riak kecil di konsumen bisa berubah jadi gelombang besar di pemasok.",
      },
      {
        type: "widget",
        widget: "SimulatorBullwhip",
      },
      {
        type: "chart",
        variant: "line",
        title: "Penguatan Variasi Pesanan dari Hilir ke Hulu (ilustrasi konsep)",
        unit: "rentang ayunan pesanan (%)",
        source: "ilustrasi edukatif berdasarkan pola yang umum diamati",
        note: "Variasi pesanan menguat di tiap tingkat ke hulu, meski permintaan konsumen relatif stabil.",
        data: [
          { label: "Konsumen", value: 5 },
          { label: "Peritel", value: 12 },
          { label: "Distributor", value: 25 },
          { label: "Produsen", value: 40 },
          { label: "Pemasok", value: 60 },
        ],
      },
      {
        type: "video",
        comp: "BullwhipVideo",
        title: "Bagaimana Efek Bullwhip Terbentuk",
        caption: "Tiap simpul bereaksi pada pesanan tetangganya, dan reaksi itu menumpuk jadi ayunan besar di hulu.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Peredam yang terbukti",
        html: "Bullwhip diredam dengan <strong>berbagi data permintaan asli</strong> ke seluruh rantai (bukan hanya pesanan tetangga), memperkecil ukuran batch, menstabilkan harga (kurangi promosi mendadak), dan memperpendek lead time. Inti semua peredam itu satu: <strong>perbanyak informasi, kurangi tebakan</strong>.",
      },
      {
        type: "case",
        title: "Studi Kasus: panik beli sembako dan masker awal 2020",
        html: "Saat awal pandemi <strong>2020</strong>, lonjakan kecil kekhawatiran konsumen memicu <strong>panic buying</strong> masker, hand sanitizer, dan sembako. Permintaan eceran naik tajam sesaat, peritel memesan ekstra, distributor melipatgandakan pesanan, dan pabrik diminta berproduksi jauh di atas konsumsi nyata. Begitu kepanikan reda, pesanan anjlok dan gudang dipenuhi stok berlebih. Ini contoh nyata efek bullwhip: <strong>riak kecil di konsumen jadi gelombang besar di hulu</strong>.",
      },
      {
        type: "case",
        title: "Sejarah: Beer Game dan Jay Forrester (system dynamics, 1960an)",
        html: "Efek bullwhip dipelajari lewat <strong>Beer Distribution Game</strong>, simulasi yang dikembangkan di <strong>MIT</strong> berakar pada karya <strong>Jay Forrester</strong> tentang <em>system dynamics</em> pada <strong>1960-an</strong>. Dalam permainan ini, peserta berperan sebagai mata rantai berbeda dan hanya boleh melihat pesanan tetangganya. Hasilnya hampir selalu sama: pesanan berayun liar di hulu meski permintaan konsumen hanya berubah sedikit. Istilah bullwhip kemudian dipopulerkan lewat studi kasus Procter & Gamble pada popok bayi pada 1990-an.",
      },
      {
        type: "calcExercise",
        prompt:
          "Permintaan konsumen naik dari 100 menjadi 110 unit (naik 10%). Akibat bullwhip, pesanan pemasok melonjak dari 100 menjadi 160 unit. Berapa persen lonjakan pesanan pemasok?",
        answer: 60,
        tolerance: 0,
        suffix: "%",
        solution:
          "Lonjakan pemasok = (160 - 100) / 100 x 100% = <strong>60%</strong>. Bandingkan dengan kenaikan permintaan konsumen yang hanya 10%. Pesanan di hulu menguat enam kali lipat dari sinyal aslinya.",
        hint: "Pakai (nilai baru - nilai lama) / nilai lama x 100%.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan penyebab bullwhip dengan peredam yang paling tepat.",
        pairs: [
          { left: "Ramalan berlebihan dari pesanan tetangga", right: "Berbagi data permintaan konsumen asli ke seluruh rantai" },
          { left: "Pemesanan dalam batch besar", right: "Memperkecil ukuran pesanan dan pesan lebih sering" },
          { left: "Promosi dan diskon mendadak", right: "Menstabilkan harga sehari-hari" },
          { left: "Lead time panjang", right: "Memperpendek lead time pengiriman" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Efek bullwhip: variasi permintaan kecil di hilir membesar ke hulu.",
          "Penyebabnya: ramalan berlebihan, batch order, fluktuasi harga, dan penjatahan.",
          "Akibatnya stok dan produksi berayun liar, biaya rantai membengkak.",
          "Peredam utama: berbagi data permintaan asli, batch kecil, harga stabil, lead time pendek.",
          "Panic buying 2020 dan Beer Game MIT adalah contoh klasik efek bullwhip.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu efek bullwhip?",
            options: [
              "Permintaan konsumen yang selalu menurun",
              "Variasi permintaan kecil di hilir yang membesar ke hulu",
              "Harga yang selalu naik tiap tahun",
              "Barang yang rusak saat pengiriman",
            ],
            answer: 1,
            explain: "Bullwhip adalah penguatan variasi pesanan semakin ke hulu rantai pasok.",
          },
          {
            q: "Manakah yang BUKAN penyebab efek bullwhip?",
            options: [
              "Pemesanan dalam batch besar",
              "Promosi dan fluktuasi harga",
              "Berbagi data permintaan asli ke seluruh rantai",
              "Penjatahan saat barang langka",
            ],
            answer: 2,
            explain: "Berbagi data permintaan asli justru meredam bullwhip, bukan menyebabkannya.",
          },
          {
            q: "Peredam efek bullwhip yang paling mendasar adalah?",
            options: [
              "Menaikkan harga setinggi mungkin",
              "Berbagi informasi permintaan nyata, bukan hanya pesanan tetangga",
              "Memperbesar ukuran batch pesanan",
              "Memperpanjang lead time",
            ],
            answer: 1,
            explain: "Transparansi data permintaan mengurangi tebakan yang memperbesar ayunan pesanan.",
          },
          {
            q: "Simulasi klasik untuk mempelajari bullwhip yang dikembangkan di MIT disebut?",
            options: [
              "Beer Distribution Game",
              "Monopoly",
              "Simulasi pasar saham",
              "Permainan catur",
            ],
            answer: 0,
            explain: "Beer Game di MIT, berakar pada system dynamics Jay Forrester, mendemonstrasikan efek bullwhip.",
          },
          {
            q: "Permintaan konsumen naik 10%, tetapi pesanan pemasok melonjak dari 100 ke 160 unit. Lonjakannya?",
            options: [
              "10%",
              "16%",
              "60%",
              "160%",
            ],
            answer: 2,
            explain: "(160 - 100) / 100 = 60%, jauh lebih besar dari kenaikan konsumen 10%.",
          },
        ],
      },
    ],
  },
];
