import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "strategic-sourcing",
    levelId: "procurement",
    order: 1,
    title: "Strategic Sourcing & Matriks Kraljic",
    summary:
      "Membeli bukan sekadar cari yang termurah. Pelajari cara memetakan barang beli berdasarkan risiko pasokan dan dampak biaya, lalu memilih strategi yang tepat untuk tiap kelompok.",
    durationMin: 14,
    tags: ["procurement", "sourcing", "kraljic"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Strategic sourcing</strong> adalah pendekatan sistematis dalam memutuskan apa yang dibeli, dari siapa, dan bagaimana. Bedanya dengan sekadar belanja: sourcing strategis menimbang risiko, total biaya, dan hubungan jangka panjang, bukan hanya harga termurah hari ini.",
      },
      {
        type: "paragraph",
        html: "Tidak semua barang yang dibeli perlu diperlakukan sama. Mur dan baut tidak butuh strategi serumit mesin produksi utama. Untuk memetakannya, banyak perusahaan memakai <strong>matriks Kraljic</strong>, yang dikenalkan Peter Kraljic pada 1983.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_warehouse_full_of_USAID_goods_-_20110826-FS-LSC-0046_-_Flickr_-_USDAgov.jpg?width=400",
        alt: "Gudang penuh berbagai jenis barang yang ditumpuk rapi",
        caption: "Beragam barang yang dibeli punya risiko dan dampak biaya berbeda, persis alasan matriks Kraljic memilahnya menjadi empat kelompok.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dua sumbu matriks Kraljic",
        html: "<strong>Dampak terhadap biaya/laba</strong> (seberapa besar nilai pembeliannya) dan <strong>risiko pasokan</strong> (seberapa sulit atau langka barangnya). Dari dua sumbu ini lahir empat kelompok: rutin, leverage, bottleneck, dan strategis.",
      },
      {
        type: "video",
        comp: "StrategicSourcingVideo",
        title: "Matriks Kraljic",
        caption: "Empat kuadran yang menentukan strategi membeli, dari tekan harga sampai bangun kemitraan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan beberapa pemasok dengan bobot kriteria yang bisa kamu atur sendiri, dan lihat bagaimana prioritas mengubah pemenang.",
      },
      { type: "widget", widget: "KalkulatorVendorScoring" },
      {
        type: "chart",
        variant: "donut",
        title: "Komposisi Strategi Sourcing pada Total Nilai Belanja (ilustrasi)",
        unit: "% nilai belanja",
        source: "ilustrasi edukatif pola yang umum diamati",
        note: "Barang strategis dan leverage biasanya menyita sebagian besar nilai belanja, sehingga layak perhatian paling besar.",
        data: [
          { label: "Strategis", value: 40, color: "#f472b6" },
          { label: "Leverage", value: 35, color: "#60a5fa" },
          { label: "Bottleneck", value: 15, color: "#fbbf24" },
          { label: "Rutin", value: 10, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pengadaan barang lewat e-Katalog LKPP",
        html: "Di Indonesia, belanja pemerintah didorong lewat <strong>e-Katalog</strong> yang dikelola <strong>LKPP</strong> (Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah). Untuk barang standar bervolume besar seperti laptop atau alat tulis (kategori <em>leverage</em>), katalog elektronik membuat banyak penyedia bersaing transparan sehingga harga tertekan. Ini contoh nyata bahwa strategi yang tepat untuk barang leverage adalah memperbanyak persaingan, bukan mengikat satu pemasok.",
      },
      {
        type: "case",
        title: "Sejarah: Jaringan pemasok Toyota (keiretsu)",
        html: "Sejak pertengahan abad ke-20, Toyota membangun <strong>keiretsu</strong>, jaringan pemasok yang terikat erat dan saling memiliki saham. Untuk komponen <strong>strategis</strong> seperti sistem rem dan kelistrikan, Toyota tidak mencari pemasok termurah tiap tahun, melainkan membina kemitraan puluhan tahun: berbagi insinyur, data, dan perbaikan terus-menerus. Hasilnya mutu tinggi dan biaya turun bersama. Ini contoh klasik strategi kuadran strategis: bangun kemitraan, bukan sekadar transaksi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pemasok dinilai pada 3 kriteria: harga (skor 80, bobot 50%), mutu (skor 90, bobot 30%), dan ketepatan (skor 70, bobot 20%). Berapa skor akhir tertimbangnya?",
        answer: 81,
        tolerance: 0.5,
        solution:
          "80 x 0,5 + 90 x 0,3 + 70 x 0,2 = 40 + 27 + 14 = <strong>81</strong>. Pembobotan membuat kriteria yang lebih penting (harga) berpengaruh lebih besar pada keputusan.",
        hint: "Kalikan tiap skor dengan bobotnya (dalam desimal), lalu jumlahkan.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap barang ke kuadran Kraljic yang paling tepat.",
        buckets: ["Rutin", "Leverage", "Bottleneck", "Strategis"],
        items: [
          { text: "Alat tulis kantor, murah dan banyak penjual", bucket: "Rutin" },
          { text: "Laptop bervolume besar, banyak merek bersaing", bucket: "Leverage" },
          { text: "Komponen langka dari satu pemasok kecil", bucket: "Bottleneck" },
          { text: "Mesin inti produksi dari mitra jangka panjang", bucket: "Strategis" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Strategic sourcing menimbang risiko dan total biaya, bukan hanya harga termurah.",
          "Matriks Kraljic memetakan barang beli pada sumbu dampak biaya dan risiko pasokan.",
          "Barang leverage ditangani dengan memperbanyak persaingan, seperti lewat e-Katalog LKPP.",
          "Barang strategis ditangani dengan kemitraan jangka panjang, seperti keiretsu Toyota.",
          "Pemilihan pemasok yang baik memakai kriteria tertimbang, bukan satu faktor saja.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang membedakan strategic sourcing dari belanja biasa?",
            options: [
              "Selalu memilih harga termurah",
              "Menimbang risiko, total biaya, dan hubungan jangka panjang",
              "Hanya membeli dari luar negeri",
              "Menghindari semua kontrak",
            ],
            answer: 1,
            explain: "Sourcing strategis melihat gambaran besar, bukan sekadar harga termurah hari ini.",
          },
          {
            q: "Dua sumbu matriks Kraljic adalah?",
            options: [
              "Harga dan warna",
              "Dampak terhadap biaya dan risiko pasokan",
              "Jarak dan waktu",
              "Jumlah dan berat",
            ],
            answer: 1,
            explain: "Kraljic memetakan barang pada dampak biaya/laba dan risiko pasokan.",
          },
          {
            q: "Strategi tepat untuk barang 'leverage' (dampak tinggi, risiko rendah) adalah?",
            options: [
              "Mengikat satu pemasok seumur hidup",
              "Memperbanyak persaingan untuk menekan harga",
              "Berhenti membelinya",
              "Membayar berapa pun harganya",
            ],
            answer: 1,
            explain: "Karena banyak penjual, persaingan terbuka menekan harga, seperti pada e-Katalog.",
          },
          {
            q: "Apa inti strategi keiretsu Toyota untuk komponen strategis?",
            options: [
              "Ganti pemasok tiap tahun cari termurah",
              "Bangun kemitraan jangka panjang yang saling membina",
              "Beli dari pasar bebas tanpa kontrak",
              "Produksi semua sendiri",
            ],
            answer: 1,
            explain: "Untuk barang strategis, kemitraan erat menghasilkan mutu tinggi dan biaya yang turun bersama.",
          },
          {
            q: "Pemasok dengan skor harga 80 (bobot 50%), mutu 90 (30%), ketepatan 70 (20%) punya skor akhir?",
            options: ["80", "81", "84", "90"],
            answer: 1,
            explain: "40 + 27 + 14 = 81. Pembobotan menyesuaikan pengaruh tiap kriteria.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "supplier-selection",
    levelId: "procurement",
    order: 2,
    title: "Seleksi & Evaluasi Pemasok",
    summary:
      "Memilih pemasok tidak boleh berdasarkan firasat. Pelajari kriteria penilaian, sistem skor tertimbang, dan audit pemasok agar keputusan obyektif dan bisa dipertanggungjawabkan.",
    durationMin: 14,
    tags: ["procurement", "supplier", "evaluasi", "scoring"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah strategi sourcing ditetapkan, langkah berikutnya adalah <strong>memilih pemasok yang tepat</strong>. Banyak kegagalan rantai pasok bermula dari pemilihan pemasok yang asal murah, tanpa menilai mutu, keandalan, dan risiko keuangan pemasok itu.",
      },
      {
        type: "paragraph",
        html: "Kerangka klasik penilaian pemasok dikenal sebagai <strong>QCDF</strong>: Quality (mutu), Cost (biaya), Delivery (ketepatan kirim), dan Flexibility (kelenturan). Banyak perusahaan menambah kriteria keuangan, keberlanjutan, dan teknologi sesuai kebutuhan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/UK-India_Business_Leaders_Climate_Group_breakfast_meeting_%285177859631%29.jpg?width=400",
        alt: "Para pelaku usaha berdiskusi dalam sebuah rapat di meja",
        caption: "Seleksi pemasok matang lewat penilaian dan pembahasan bersama, bukan firasat. Kriteria QCDF menjadi bahasa bersama di meja keputusan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "StrategicSourcingVideo",
        title: "Menimbang pemasok dengan kriteria",
        caption: "Posisi barang pada matriks Kraljic menentukan seberapa ketat kriteria seleksi pemasok perlu diterapkan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga tahap seleksi pemasok",
        html: "<strong>1. Kualifikasi</strong>: saring pemasok yang memenuhi syarat minimum (legalitas, kapasitas, sertifikat). <strong>2. Penilaian tertimbang</strong>: beri skor tiap kriteria lalu kalikan bobotnya. <strong>3. Audit</strong>: kunjungi pabrik atau periksa dokumen untuk membuktikan klaim pemasok.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Masukkan beberapa pemasok, atur bobot tiap kriteria, dan lihat bagaimana pemenang berubah saat prioritas digeser. Inilah inti sistem skor tertimbang.",
      },
      { type: "widget", widget: "KalkulatorVendorScoring" },
      {
        type: "chart",
        variant: "bar",
        title: "Skor Akhir Tertimbang Tiga Calon Pemasok (ilustrasi)",
        unit: "skor 0-100",
        source: "ilustrasi edukatif sistem penilaian tertimbang",
        note: "Pemasok B menang bukan karena termurah, melainkan karena unggul merata pada mutu dan ketepatan kirim.",
        data: [
          { label: "Pemasok A", value: 74, color: "#60a5fa" },
          { label: "Pemasok B", value: 82, color: "#34d399" },
          { label: "Pemasok C", value: 68, color: "#fbbf24" },
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "Audit bukan formalitas",
        html: "Skor di atas kertas bisa menipu. Audit lapangan sering mengungkap kapasitas yang dilebih-lebihkan, mutu yang tak konsisten, atau kondisi keuangan yang rapuh. Pemasok dengan skor tinggi tetapi gagal audit harus dicoret.",
      },
      {
        type: "case",
        title: "Studi Kasus: Penilaian pemasok komponen oleh pabrik di Indonesia",
        html: "Sebuah pabrik perakitan di Bekasi menilai tiga pemasok baut presisi. Bobot yang dipakai: mutu 40%, harga 40%, ketepatan kirim 20%. Pemasok A unggul harga tetapi mutunya pas-pasan, Pemasok B seimbang, Pemasok C mahal. Dengan skor tertimbang, B menang. Audit lalu membuktikan B punya sistem kendali mutu ISO 9001 yang nyata, sehingga keputusan diperkuat data, bukan sekadar angka.",
      },
      {
        type: "case",
        title: "Sejarah: Banjir Thailand 2011 dan risiko pemasok tunggal",
        html: "Pada akhir 2011, banjir besar melanda kawasan industri Thailand dan melumpuhkan pabrik komponen <strong>hard disk drive</strong> yang memasok sebagian besar dunia. Harga hard disk global melonjak dan kelangkaan bertahan berbulan-bulan. Pelajarannya jelas: penilaian pemasok tidak cukup menilai harga dan mutu, tetapi juga <strong>risiko geografis dan ketergantungan pada sumber tunggal</strong>. Sejak itu banyak perusahaan menambah kriteria ketahanan pasokan dalam evaluasi pemasoknya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pemasok dinilai pada mutu (skor 90, bobot 40%), harga (skor 80, bobot 40%), dan ketepatan kirim (skor 70, bobot 20%). Berapa skor akhir tertimbangnya?",
        answer: 82,
        tolerance: 0.5,
        solution:
          "90 x 0,4 + 80 x 0,4 + 70 x 0,2 = 36 + 32 + 14 = <strong>82</strong>. Bobot mutu dan harga sama besar, sehingga keduanya menentukan paling kuat.",
        hint: "Kalikan tiap skor dengan bobot desimalnya, lalu jumlahkan ketiganya.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap aspek penilaian ke kategori QCDF yang tepat.",
        buckets: ["Quality", "Cost", "Delivery", "Flexibility"],
        items: [
          { text: "Tingkat cacat produk per seribu unit", bucket: "Quality" },
          { text: "Harga satuan dan syarat pembayaran", bucket: "Cost" },
          { text: "Persentase pengiriman tepat waktu", bucket: "Delivery" },
          { text: "Kemampuan menaikkan volume saat permintaan melonjak", bucket: "Flexibility" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Pemilihan pemasok memakai kriteria QCDF: mutu, biaya, kirim, dan kelenturan.",
          "Skor tertimbang membuat keputusan obyektif: skor dikali bobot lalu dijumlah.",
          "Audit lapangan membuktikan klaim pemasok sebelum kontrak diteken.",
          "Pemenang sering bukan yang termurah, melainkan yang paling seimbang dan andal.",
          "Risiko pemasok tunggal dan geografis wajib masuk kriteria, pelajaran banjir Thailand 2011.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kerangka QCDF dalam penilaian pemasok singkatan dari?",
            options: [
              "Quick, Cheap, Direct, Fast",
              "Quality, Cost, Delivery, Flexibility",
              "Quota, Credit, Demand, Finance",
              "Quality, Capacity, Distance, Freight",
            ],
            answer: 1,
            explain: "QCDF: Quality (mutu), Cost (biaya), Delivery (ketepatan kirim), Flexibility (kelenturan).",
          },
          {
            q: "Apa fungsi utama skor tertimbang dalam seleksi pemasok?",
            options: [
              "Selalu memilih harga termurah",
              "Membuat keputusan obyektif dengan menimbang tiap kriteria sesuai kepentingannya",
              "Menghapus kebutuhan audit",
              "Mengacak pemenang",
            ],
            answer: 1,
            explain: "Skor dikalikan bobot agar kriteria penting berpengaruh lebih besar secara obyektif.",
          },
          {
            q: "Mengapa audit lapangan tetap diperlukan walau skor sudah tinggi?",
            options: [
              "Untuk menambah biaya",
              "Karena klaim di atas kertas bisa menyesatkan dan perlu dibuktikan",
              "Karena skor selalu salah",
              "Audit hanya formalitas hukum",
            ],
            answer: 1,
            explain: "Audit mengungkap kapasitas berlebihan, mutu tak konsisten, atau keuangan rapuh.",
          },
          {
            q: "Pelajaran utama dari banjir Thailand 2011 untuk evaluasi pemasok adalah?",
            options: [
              "Harga adalah satu-satunya hal penting",
              "Risiko geografis dan ketergantungan pemasok tunggal harus dinilai",
              "Hindari semua pemasok asing",
              "Audit tidak diperlukan",
            ],
            answer: 1,
            explain: "Bencana di satu kawasan dapat melumpuhkan pasokan dunia bila bergantung pada sumber tunggal.",
          },
          {
            q: "Pemasok dengan mutu 90 (bobot 40%), harga 80 (40%), kirim 70 (20%) punya skor akhir?",
            options: ["80", "82", "85", "90"],
            answer: 1,
            explain: "36 + 32 + 14 = 82.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "supplier-relationship-management",
    levelId: "procurement",
    order: 3,
    title: "Supplier Relationship Management (SRM)",
    summary:
      "Tidak semua pemasok layak diperlakukan sama. Pelajari cara menyegmentasi pemasok dan membangun kemitraan strategis yang menciptakan nilai bersama, bukan sekadar transaksi.",
    durationMin: 14,
    tags: ["procurement", "srm", "kemitraan", "segmentasi"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Supplier Relationship Management (SRM)</strong> adalah pendekatan mengelola hubungan dengan pemasok secara terstruktur, agar nilai yang didapat maksimal sepanjang umur kerja sama. Intinya: investasikan waktu dan perhatian terbesar pada pemasok yang paling penting.",
      },
      {
        type: "paragraph",
        html: "Sebuah perusahaan bisa punya ratusan pemasok, tetapi tidak mungkin membina semuanya secara intensif. Karena itu pemasok perlu <strong>disegmentasi</strong>, biasanya menjadi tiga lapis: transaksional, terpilih (preferred), dan strategis.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_warehouse_full_of_USAID_goods_-_20110826-FS-LSC-0046_-_Flickr_-_USDAgov.jpg?width=400",
        alt: "Gudang berisi banyak barang dari berbagai pemasok",
        caption: "Pasokan dari ratusan pemasok tidak bisa dikelola seragam. Segmentasi memusatkan perhatian terbesar pada mitra strategis yang paling vital.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga lapis segmentasi pemasok",
        html: "<strong>Transaksional</strong>: banyak, mudah diganti, kelola efisien lewat proses standar. <strong>Preferred</strong>: penting, dijaga dengan kontrak jangka menengah dan evaluasi rutin. <strong>Strategis</strong>: sedikit tetapi vital, dibina dengan kemitraan dalam, berbagi rencana dan inovasi.",
      },
      {
        type: "video",
        comp: "StrategicSourcingVideo",
        title: "Dari transaksi ke kemitraan",
        caption: "Kuadran strategis Kraljic menuntun ke hubungan kemitraan dalam, bukan tawar-menawar harga semata.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Sebaran Jumlah Pemasok vs Nilai Belanja per Lapis (ilustrasi)",
        unit: "% nilai belanja",
        source: "ilustrasi edukatif pola umum SRM",
        note: "Pemasok strategis sedikit jumlahnya tetapi menyerap porsi nilai belanja terbesar, sehingga layak perhatian paling dalam.",
        data: [
          { label: "Strategis", value: 55, color: "#f472b6" },
          { label: "Preferred", value: 30, color: "#60a5fa" },
          { label: "Transaksional", value: 15, color: "#34d399" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Kemitraan menciptakan nilai dua arah",
        html: "Pada pemasok strategis, pembeli berbagi ramalan permintaan, peta jalan produk, dan masukan teknis. Pemasok membalas dengan prioritas kapasitas, inovasi bersama, dan harga yang turun seiring efisiensi. Nilai tumbuh untuk kedua pihak.",
      },
      {
        type: "case",
        title: "Studi Kasus: Kemitraan pabrikan dan pemasok kemasan lokal",
        html: "Sebuah produsen makanan di Indonesia menjadikan satu pemasok kemasan sebagai mitra strategis. Mereka berbagi rencana peluncuran produk enam bulan ke depan. Karena itu pemasok berinvestasi pada mesin cetak baru lebih awal, dan biaya kemasan per unit turun sekitar 8% dari kontrak Rp 10 miliar per tahun, menghemat sekitar Rp 800 juta. Penghematan itu lahir dari kepercayaan dan berbagi informasi, bukan dari menekan harga sepihak.",
      },
      {
        type: "case",
        title: "Sejarah: Kebakaran pabrik Aisin 1997 dan kekuatan jaringan Toyota",
        html: "Pada Februari 1997, kebakaran melumpuhkan pabrik <strong>Aisin</strong>, pemasok tunggal katup rem proporsional untuk hampir seluruh lini Toyota. Produksi Toyota terancam berhenti total. Yang menyelamatkan adalah jaringan kemitraan: puluhan pemasok lain dalam keiretsu Toyota dengan cepat berbagi cetak biru dan mengatur ulang lini mereka untuk membuat katup darurat. Dalam beberapa hari produksi pulih. Ini bukti bahwa SRM yang dibangun bertahun-tahun berbuah ketahanan saat krisis.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kontrak kemasan bernilai Rp 10 miliar per tahun. Lewat kemitraan strategis, biaya turun 8%. Berapa rupiah penghematan setahun?",
        answer: 800000000,
        tolerance: 1000,
        prefix: "Rp",
        solution:
          "Rp 10.000.000.000 x 8% = <strong>Rp 800.000.000</strong>. Penghematan ini lahir dari efisiensi bersama, bukan dari menekan margin pemasok.",
        hint: "Kalikan nilai kontrak dengan 8% (0,08).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap lapis pemasok dengan cara pengelolaan yang paling tepat.",
        pairs: [
          { left: "Transaksional", right: "Proses standar yang efisien dan otomatis" },
          { left: "Preferred", right: "Kontrak jangka menengah dengan evaluasi rutin" },
          { left: "Strategis", right: "Kemitraan dalam, berbagi rencana dan inovasi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "SRM mengelola hubungan pemasok agar nilai maksimal sepanjang kerja sama.",
          "Pemasok disegmentasi: transaksional, preferred, dan strategis.",
          "Pemasok strategis sedikit jumlahnya tetapi menyerap nilai belanja terbesar.",
          "Kemitraan menciptakan nilai dua arah lewat berbagi informasi dan inovasi.",
          "SRM yang kuat menghasilkan ketahanan saat krisis, contoh kebakaran Aisin 1997.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama Supplier Relationship Management?",
            options: [
              "Menekan harga semua pemasok sekeras mungkin",
              "Memaksimalkan nilai dari hubungan pemasok sepanjang kerja sama",
              "Mengganti pemasok setiap bulan",
              "Menghindari kontrak apa pun",
            ],
            answer: 1,
            explain: "SRM fokus pada nilai jangka panjang, bukan kemenangan harga sesaat.",
          },
          {
            q: "Tiga lapis segmentasi pemasok yang umum adalah?",
            options: [
              "Murah, sedang, mahal",
              "Transaksional, preferred, strategis",
              "Lokal, regional, global",
              "Baru, lama, pensiun",
            ],
            answer: 1,
            explain: "Segmentasi membagi perhatian sesuai kepentingan: transaksional, preferred, strategis.",
          },
          {
            q: "Ciri pengelolaan pemasok strategis adalah?",
            options: [
              "Diproses otomatis tanpa interaksi",
              "Kemitraan dalam dengan berbagi rencana dan inovasi",
              "Selalu ditenderkan ulang tiap bulan",
              "Tidak pernah dievaluasi",
            ],
            answer: 1,
            explain: "Pemasok strategis dibina lewat kemitraan dan berbagi informasi dua arah.",
          },
          {
            q: "Apa pelajaran dari kebakaran pabrik Aisin 1997?",
            options: [
              "Pemasok tunggal selalu aman",
              "Jaringan kemitraan yang kuat memberi ketahanan saat krisis",
              "Toyota berhenti produksi selamanya",
              "Kontrak tidak penting",
            ],
            answer: 1,
            explain: "Jaringan keiretsu cepat memulihkan produksi katup rem berkat hubungan bertahun-tahun.",
          },
          {
            q: "Kontrak Rp 10 miliar dengan penurunan biaya 8% menghemat berapa?",
            options: ["Rp 80 juta", "Rp 800 juta", "Rp 1,8 miliar", "Rp 8 miliar"],
            answer: 1,
            explain: "Rp 10.000.000.000 x 0,08 = Rp 800.000.000.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tender-contract-management",
    levelId: "procurement",
    order: 4,
    title: "Tender & Manajemen Kontrak",
    summary:
      "Dari undangan penawaran sampai pengelolaan kontrak. Pelajari RFQ, RFP, jenis kontrak, dan SLA agar kesepakatan dengan pemasok jelas, adil, dan dapat ditegakkan.",
    durationMin: 15,
    tags: ["procurement", "tender", "kontrak", "sla"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah pemasok potensial dikenali, perusahaan mengundang penawaran lewat <strong>tender</strong>. Dua instrumen yang umum: <strong>RFQ</strong> (Request for Quotation) untuk barang standar yang jelas spesifikasinya, dan <strong>RFP</strong> (Request for Proposal) untuk kebutuhan kompleks yang menuntut solusi dari pemasok.",
      },
      {
        type: "paragraph",
        html: "Hasil tender dituangkan dalam <strong>kontrak</strong>. Memilih jenis kontrak yang tepat menentukan siapa menanggung risiko biaya. Kontrak juga memuat <strong>SLA</strong> (Service Level Agreement), janji tingkat layanan yang terukur beserta sanksinya bila tak dipenuhi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/UK-India_Business_Leaders_Climate_Group_breakfast_meeting_%285177859631%29.jpg?width=400",
        alt: "Sejumlah orang berunding di meja perundingan bisnis",
        caption: "Tender dan kontrak lahir dari meja perundingan. Di sinilah jenis kontrak dan SLA disepakati agar adil dan dapat ditegakkan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "RFQ vs RFP",
        html: "<strong>RFQ</strong> dipakai saat kebutuhan sudah pasti dan tinggal membandingkan harga, misalnya membeli 1.000 unit baut ukuran tertentu. <strong>RFP</strong> dipakai saat masalahnya kompleks dan pembeli ingin pemasok mengusulkan solusi, misalnya membangun sistem gudang otomatis.",
      },
      {
        type: "video",
        comp: "StrategicSourcingVideo",
        title: "Memilih strategi tender",
        caption: "Jenis barang pada matriks Kraljic ikut menentukan apakah cukup RFQ atau perlu RFP yang lebih dalam.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga jenis kontrak utama",
        html: "<strong>Fixed price</strong> (harga tetap): risiko biaya ada pada pemasok, cocok bila lingkup jelas. <strong>Cost plus</strong> (biaya plus marjin): risiko pada pembeli, cocok bila lingkup belum pasti. <strong>Time and material</strong>: dibayar per jam dan bahan, cocok untuk pekerjaan yang sulit ditaksir di muka.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Pembagian Risiko Biaya Menurut Jenis Kontrak (ilustrasi)",
        unit: "% risiko ditanggung pembeli",
        source: "ilustrasi edukatif konsep alokasi risiko",
        note: "Semakin tidak pasti lingkup pekerjaan, semakin besar porsi risiko biaya yang ditanggung pembeli.",
        data: [
          { label: "Fixed price", value: 20, color: "#34d399" },
          { label: "Time & material", value: 60, color: "#fbbf24" },
          { label: "Cost plus", value: 85, color: "#f87171" },
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "SLA tanpa sanksi hanyalah harapan",
        html: "SLA harus menyebut metrik terukur (misalnya ketersediaan 99%), cara pengukuran, dan sanksi bila gagal (misalnya potongan biaya). Tanpa sanksi yang jelas, target layanan mudah diabaikan saat pemasok sibuk.",
      },
      {
        type: "case",
        title: "Studi Kasus: SLA layanan logistik dengan denda keterlambatan",
        html: "Sebuah perusahaan ritel menyewa jasa logistik senilai Rp 500 juta per bulan dengan SLA ketepatan kirim 99%. Kontrak menetapkan denda 2% dari biaya bulanan untuk setiap 1 poin persen di bawah target. Pada satu bulan, kinerja hanya 97%, dua poin di bawah target. Dendanya 2 x 2% x Rp 500 juta = Rp 20 juta. Angka konkret membuat SLA punya gigi, bukan sekadar janji.",
      },
      {
        type: "case",
        title: "Sejarah: Bangkitnya e-procurement dan Ariba akhir 1990-an",
        html: "Pada akhir dekade 1990-an, perusahaan seperti <strong>Ariba</strong> (didirikan 1996) mempelopori <strong>e-procurement</strong>, memindahkan tender dan katalog pembelian ke internet. Sebelumnya tender berjalan dengan tumpukan dokumen kertas dan faks. Platform elektronik membuat undangan penawaran lebih transparan, mempercepat perbandingan harga, dan memperluas peserta tender. Pola ini kelak mengilhami sistem pengadaan elektronik pemerintah, termasuk di Indonesia.",
      },
      {
        type: "calcExercise",
        prompt:
          "Biaya jasa logistik Rp 500 juta per bulan, SLA ketepatan kirim 99%. Denda 2% dari biaya bulanan per 1 poin persen di bawah target. Bila kinerja 97% (dua poin di bawah), berapa rupiah dendanya?",
        answer: 20000000,
        tolerance: 1000,
        prefix: "Rp",
        solution:
          "Kekurangan 2 poin persen. Denda = 2 x 2% x Rp 500.000.000 = 4% x Rp 500.000.000 = <strong>Rp 20.000.000</strong>.",
        hint: "Hitung selisih poin persen, kalikan dengan 2% per poin, lalu kalikan biaya bulanan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan situasi pengadaan dengan instrumen atau jenis kontrak yang paling cocok.",
        pairs: [
          { left: "Membeli 1.000 baut dengan spesifikasi pasti", right: "RFQ" },
          { left: "Membangun sistem gudang otomatis yang kompleks", right: "RFP" },
          { left: "Lingkup jelas, ingin risiko biaya di pemasok", right: "Kontrak fixed price" },
          { left: "Lingkup belum pasti, bayar biaya plus marjin", right: "Kontrak cost plus" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "RFQ untuk barang standar berspesifikasi jelas, RFP untuk kebutuhan kompleks.",
          "Jenis kontrak menentukan siapa menanggung risiko biaya: fixed price, cost plus, time and material.",
          "Fixed price menaruh risiko pada pemasok, cost plus pada pembeli.",
          "SLA harus punya metrik terukur dan sanksi agar dapat ditegakkan.",
          "E-procurement sejak akhir 1990-an membuat tender lebih transparan dan cepat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapan RFQ lebih tepat dipakai dibanding RFP?",
            options: [
              "Saat kebutuhan kompleks dan butuh solusi",
              "Saat spesifikasi sudah jelas dan tinggal membandingkan harga",
              "Saat tidak ada pemasok",
              "Saat ingin menghindari kontrak",
            ],
            answer: 1,
            explain: "RFQ cocok untuk barang standar yang jelas, RFP untuk masalah kompleks butuh proposal solusi.",
          },
          {
            q: "Pada jenis kontrak apa risiko biaya paling besar ditanggung pembeli?",
            options: ["Fixed price", "Cost plus", "Lump sum", "Tidak ada"],
            answer: 1,
            explain: "Cost plus membayar biaya aktual plus marjin, sehingga risiko membengkak ada di pembeli.",
          },
          {
            q: "Apa yang membuat SLA dapat ditegakkan?",
            options: [
              "Kalimat yang panjang",
              "Metrik terukur ditambah sanksi yang jelas",
              "Tanda tangan saja",
              "Janji lisan",
            ],
            answer: 1,
            explain: "Tanpa metrik dan sanksi, SLA hanya harapan yang mudah diabaikan.",
          },
          {
            q: "Apa kontribusi e-procurement seperti Ariba sejak akhir 1990-an?",
            options: [
              "Memperlambat tender",
              "Membuat tender lebih transparan, cepat, dan luas pesertanya",
              "Menghapus kebutuhan pemasok",
              "Menambah tumpukan kertas",
            ],
            answer: 1,
            explain: "Memindahkan tender ke internet mempercepat perbandingan harga dan memperluas peserta.",
          },
          {
            q: "Biaya Rp 500 juta/bulan, denda 2% per poin, kinerja 2 poin di bawah SLA. Berapa denda?",
            options: ["Rp 10 juta", "Rp 20 juta", "Rp 40 juta", "Rp 100 juta"],
            answer: 1,
            explain: "2 x 2% x Rp 500 juta = 4% x Rp 500 juta = Rp 20 juta.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "global-sourcing",
    levelId: "procurement",
    order: 5,
    title: "Global Sourcing & Total Cost of Ownership",
    summary:
      "Mencari pemasok lintas negara membuka peluang harga, tetapi membawa risiko tersembunyi. Pelajari cara menilainya dengan Total Cost of Ownership, bukan harga satuan semata.",
    durationMin: 15,
    tags: ["procurement", "global-sourcing", "tco", "impor"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Global sourcing</strong> adalah membeli barang atau jasa dari pemasok di negara lain untuk memanfaatkan keunggulan biaya, mutu, atau kapasitas. Banyak produsen Indonesia mengimpor bahan baku atau komponen yang tak tersedia atau lebih murah di luar negeri.",
      },
      {
        type: "paragraph",
        html: "Harga satuan dari luar negeri sering tampak jauh lebih murah, tetapi itu menyesatkan. Keputusan yang benar memakai <strong>Total Cost of Ownership (TCO)</strong>: seluruh biaya kepemilikan, termasuk ongkos kirim, bea masuk, asuransi, administrasi, dan risiko.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg?width=400",
        alt: "Kapal kontainer raksasa mengangkut peti kemas di laut",
        caption: "Sumber lintas negara berjalan lewat jalur laut. Ongkos kirim dan waktu tempuh kapal inilah yang sering membuat harga impor murah menyusut dalam hitungan TCO.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Komponen TCO impor",
        html: "Harga barang + ongkos kirim (freight) + bea masuk dan pajak impor + asuransi + biaya administrasi dan pelabuhan + biaya simpan dan risiko. Harga satuan murah bisa kalah setelah semua biaya tersembunyi dijumlahkan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Risiko sumber lintas negara",
        html: "Global sourcing menambah lead time panjang, fluktuasi kurs, risiko geopolitik, perbedaan zona waktu dan bahasa, serta ketergantungan pada jalur laut tertentu. Hemat harga bisa lenyap oleh satu gangguan pasokan.",
      },
      {
        type: "video",
        comp: "StrategicSourcingVideo",
        title: "Lokal atau global?",
        caption: "Keputusan sumber lintas negara tetap berpijak pada peta risiko dan dampak biaya ala Kraljic.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perbandingan TCO per Unit: Lokal vs Impor (ilustrasi)",
        unit: "Rp per unit",
        source: "ilustrasi edukatif perhitungan TCO",
        note: "Harga barang impor lebih murah, tetapi setelah freight, bea, dan administrasi, selisihnya menyusut tipis.",
        data: [
          { label: "Lokal (total)", value: 120000, color: "#34d399" },
          { label: "Impor harga barang", value: 90000, color: "#93c5fd" },
          { label: "Impor (TCO penuh)", value: 118000, color: "#60a5fa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Impor komponen dengan bea masuk 10%",
        html: "Sebuah pabrik membandingkan komponen lokal seharga Rp 120.000 per unit dengan komponen impor seharga Rp 90.000. Untuk impor ditambah ongkos kirim Rp 15.000, bea masuk 10% dari harga barang yaitu Rp 9.000, dan biaya administrasi Rp 4.000. TCO impor = 90.000 + 15.000 + 9.000 + 4.000 = Rp 118.000 per unit. Hanya unggul Rp 2.000 dari lokal, dengan tambahan risiko lead time panjang. Banyak perusahaan akhirnya memilih lokal demi keandalan.",
      },
      {
        type: "case",
        title: "Sejarah: China masuk WTO 2001 dan ledakan global sourcing",
        html: "Pada Desember 2001, <strong>China resmi menjadi anggota WTO</strong>. Tarif dan hambatan dagang turun, dan dalam satu dekade China menjadi pusat manufaktur dunia. Perusahaan global berlomba memindahkan pengadaan ke sana demi harga murah. Namun banyak yang baru belajar bahwa harga satuan rendah tidak otomatis berarti TCO rendah: ongkos kirim, mutu, dan risiko jarak ikut menggerus penghematan. Pelajaran TCO menjadi makin penting sejak era ini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Komponen impor: harga barang Rp 90.000, ongkos kirim Rp 15.000, bea masuk 10% dari harga barang, dan administrasi Rp 4.000. Berapa Total Cost of Ownership per unit?",
        answer: 118000,
        tolerance: 100,
        prefix: "Rp",
        solution:
          "Bea masuk = 10% x Rp 90.000 = Rp 9.000. TCO = 90.000 + 15.000 + 9.000 + 4.000 = <strong>Rp 118.000</strong>.",
        hint: "Hitung dulu bea masuk 10% dari harga barang, lalu jumlahkan semua komponen biaya.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pos sebagai bagian Harga Barang atau Biaya Tambahan dalam TCO impor.",
        buckets: ["Harga Barang", "Biaya Tambahan TCO"],
        items: [
          { text: "Nilai faktur komponen dari pabrik luar negeri", bucket: "Harga Barang" },
          { text: "Ongkos kirim laut (freight)", bucket: "Biaya Tambahan TCO" },
          { text: "Bea masuk dan pajak impor", bucket: "Biaya Tambahan TCO" },
          { text: "Biaya administrasi dan pelabuhan", bucket: "Biaya Tambahan TCO" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Global sourcing membeli lintas negara demi biaya, mutu, atau kapasitas.",
          "Keputusan yang benar memakai TCO, bukan harga satuan semata.",
          "TCO mencakup freight, bea masuk, asuransi, administrasi, dan risiko.",
          "Harga impor murah bisa kalah tipis setelah semua biaya tersembunyi dijumlahkan.",
          "Sejak China masuk WTO 2001, global sourcing meledak dan pelajaran TCO makin penting.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa kelemahan menilai pembelian impor hanya dari harga satuan?",
            options: [
              "Tidak ada kelemahan",
              "Mengabaikan biaya kirim, bea masuk, dan risiko yang tersembunyi",
              "Harga satuan selalu salah",
              "Membuat barang gratis",
            ],
            answer: 1,
            explain: "Harga satuan murah bisa kalah setelah TCO penuh dihitung.",
          },
          {
            q: "TCO (Total Cost of Ownership) mencakup?",
            options: [
              "Hanya harga barang",
              "Seluruh biaya kepemilikan termasuk kirim, bea, asuransi, dan risiko",
              "Hanya bea masuk",
              "Hanya ongkos kirim",
            ],
            answer: 1,
            explain: "TCO menjumlahkan semua biaya yang muncul untuk memiliki dan memakai barang.",
          },
          {
            q: "Manakah yang termasuk risiko khas global sourcing?",
            options: [
              "Lead time pendek dan kurs stabil",
              "Lead time panjang, fluktuasi kurs, dan risiko geopolitik",
              "Tidak ada risiko sama sekali",
              "Bahasa selalu sama",
            ],
            answer: 1,
            explain: "Jarak dan lintas negara menambah lead time, risiko kurs, dan geopolitik.",
          },
          {
            q: "Apa dampak China masuk WTO pada 2001 terhadap pengadaan global?",
            options: [
              "Menutup perdagangan dunia",
              "Memicu ledakan global sourcing dan menegaskan pentingnya analisis TCO",
              "Menghapus bea masuk selamanya",
              "Membuat harga tidak relevan",
            ],
            answer: 1,
            explain: "China jadi pusat manufaktur dunia, dan pelajaran TCO makin penting sejak itu.",
          },
          {
            q: "Harga barang Rp 90.000, kirim Rp 15.000, bea 10%, administrasi Rp 4.000. Berapa TCO?",
            options: ["Rp 105.000", "Rp 114.000", "Rp 118.000", "Rp 125.000"],
            answer: 2,
            explain: "Bea = Rp 9.000. 90.000 + 15.000 + 9.000 + 4.000 = Rp 118.000.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sustainable-ethical-procurement",
    levelId: "procurement",
    order: 6,
    title: "Pengadaan Berkelanjutan & Beretika",
    summary:
      "Pengadaan modern dinilai bukan hanya dari harga, tetapi juga dampak lingkungan dan sosialnya. Pelajari ESG dalam pengadaan dan ketertelusuran rantai pasok.",
    durationMin: 14,
    tags: ["procurement", "esg", "keberlanjutan", "etika"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Pengadaan berkelanjutan dan beretika</strong> menambahkan dimensi <strong>ESG</strong> ke keputusan membeli: Environmental (lingkungan), Social (sosial), dan Governance (tata kelola). Pembeli kini ikut bertanggung jawab atas praktik pemasoknya, bukan hanya atas barang yang diterima.",
      },
      {
        type: "paragraph",
        html: "Inti praktiknya adalah <strong>ketertelusuran</strong> (traceability): mampu melacak dari mana bahan berasal dan dalam kondisi apa diproduksi. Tanpa ketertelusuran, perusahaan bisa tanpa sadar memakai bahan dari kerja paksa, perusakan hutan, atau pabrik yang tidak aman.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Modern_warehouse_with_pallet_rack_storage_system.jpg?width=400",
        alt: "Gudang modern dengan sistem rak palet yang tertata",
        caption: "Ketertelusuran menuntut catatan rapi di setiap titik penyimpanan, sehingga asal dan kondisi produksi bahan dapat dilacak dan dipertanggungjawabkan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga pilar ESG dalam pengadaan",
        html: "<strong>Environmental</strong>: jejak karbon, limbah, bahan bersertifikat lestari. <strong>Social</strong>: keselamatan kerja, larangan kerja paksa dan kerja anak, upah layak. <strong>Governance</strong>: antikorupsi, transparansi, dan kepatuhan hukum di rantai pasok.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Risiko reputasi menular ke pembeli",
        html: "Bila pemasok ketahuan melanggar etika, merek pembeli ikut tercoreng walau tidak melakukannya sendiri. Konsumen dan investor makin menuntut bukti rantai pasok yang bersih, bukan sekadar janji.",
      },
      {
        type: "video",
        comp: "StrategicSourcingVideo",
        title: "ESG masuk peta sourcing",
        caption: "Kriteria keberlanjutan kini menjadi sumbu tambahan saat menilai dan memilih pemasok.",
      },
      {
        type: "chart",
        variant: "area",
        title: "Kemajuan Sertifikasi ESG Pemasok per Tahun (ilustrasi)",
        unit: "% pemasok bersertifikat",
        source: "ilustrasi edukatif program pemasok berkelanjutan",
        note: "Sertifikasi ESG pemasok biasanya tumbuh bertahap karena audit dan perbaikan butuh waktu.",
        data: [
          { label: "2021", value: 35, color: "#34d399" },
          { label: "2022", value: 48, color: "#34d399" },
          { label: "2023", value: 60, color: "#34d399" },
          { label: "2024", value: 72, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Program sertifikasi ESG pemasok di Indonesia",
        html: "Sebuah perusahaan barang konsumsi memiliki 250 pemasok. Saat ini 60% sudah punya sertifikasi ESG, yaitu 150 pemasok. Manajemen menetapkan target 90% atau 225 pemasok pada akhir tahun. Berarti 225 dikurangi 150 sama dengan 75 pemasok lagi harus diaudit dan disertifikasi. Target yang jelas dengan angka membuat program keberlanjutan terukur, bukan slogan.",
      },
      {
        type: "case",
        title: "Sejarah: Runtuhnya Rana Plaza 2013 dan kebangkitan etika pengadaan",
        html: "Pada 24 April 2013, gedung <strong>Rana Plaza</strong> di Bangladesh yang berisi pabrik garmen runtuh dan menewaskan lebih dari seribu pekerja. Banyak merek busana dunia ternyata memesan dari pabrik di gedung itu tanpa mengetahui kondisinya. Tragedi ini menjadi titik balik: perusahaan global memperketat audit pemasok, menuntut ketertelusuran, dan menandatangani kesepakatan keselamatan pabrik. Etika pengadaan berubah dari pilihan menjadi keharusan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Perusahaan punya 250 pemasok, 60% sudah bersertifikasi ESG. Target akhir tahun 90% bersertifikasi. Berapa pemasok lagi yang harus disertifikasi?",
        answer: 75,
        tolerance: 0,
        suffix: "pemasok",
        solution:
          "Sekarang 60% x 250 = 150 pemasok. Target 90% x 250 = 225 pemasok. Selisih = 225 - 150 = <strong>75 pemasok</strong>.",
        hint: "Hitung jumlah pemasok pada 60% dan pada 90%, lalu cari selisihnya.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap isu pemasok ke pilar ESG yang tepat.",
        buckets: ["Environmental", "Social", "Governance"],
        items: [
          { text: "Emisi karbon dan limbah pabrik", bucket: "Environmental" },
          { text: "Keselamatan kerja dan larangan kerja anak", bucket: "Social" },
          { text: "Antisuap dan transparansi kontrak", bucket: "Governance" },
          { text: "Penggunaan bahan baku bersertifikat lestari", bucket: "Environmental" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Pengadaan berkelanjutan menambah dimensi ESG ke keputusan membeli.",
          "Ketertelusuran memastikan asal dan kondisi produksi bahan diketahui.",
          "ESG bertumpu pada tiga pilar: lingkungan, sosial, dan tata kelola.",
          "Pelanggaran etika pemasok dapat mencoreng reputasi pembeli.",
          "Tragedi Rana Plaza 2013 menjadikan etika pengadaan sebuah keharusan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa kepanjangan dimensi ESG dalam pengadaan?",
            options: [
              "Economy, Sales, Growth",
              "Environmental, Social, Governance",
              "Export, Supply, Goods",
              "Energy, Safety, Gross",
            ],
            answer: 1,
            explain: "ESG: Environmental (lingkungan), Social (sosial), Governance (tata kelola).",
          },
          {
            q: "Mengapa ketertelusuran penting dalam pengadaan beretika?",
            options: [
              "Untuk menaikkan harga",
              "Agar asal dan kondisi produksi bahan dapat dilacak dan dipertanggungjawabkan",
              "Agar pemasok lebih banyak",
              "Tidak ada gunanya",
            ],
            answer: 1,
            explain: "Tanpa ketertelusuran, perusahaan bisa tanpa sadar memakai bahan dari praktik buruk.",
          },
          {
            q: "Mengapa pelanggaran etika pemasok berbahaya bagi pembeli?",
            options: [
              "Tidak berpengaruh apa pun",
              "Reputasi merek pembeli ikut tercoreng walau bukan pelakunya",
              "Pembeli otomatis untung",
              "Hanya pemasok yang rugi",
            ],
            answer: 1,
            explain: "Konsumen dan investor menuntut rantai pasok bersih, risiko reputasi menular ke pembeli.",
          },
          {
            q: "Apa dampak tragedi Rana Plaza 2013 pada praktik pengadaan?",
            options: [
              "Audit pemasok dilonggarkan",
              "Audit dan ketertelusuran diperketat, etika menjadi keharusan",
              "Merek berhenti memesan garmen",
              "Tidak ada perubahan",
            ],
            answer: 1,
            explain: "Tragedi itu memicu audit ketat, tuntutan ketertelusuran, dan kesepakatan keselamatan pabrik.",
          },
          {
            q: "250 pemasok, 60% bersertifikasi, target 90%. Berapa pemasok lagi perlu disertifikasi?",
            options: ["30", "75", "90", "150"],
            answer: 1,
            explain: "90% x 250 = 225; 60% x 250 = 150; selisih 75 pemasok.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "spend-analysis-category-management",
    levelId: "procurement",
    order: 7,
    title: "Spend Analysis & Category Management",
    summary:
      "Sebelum menghemat, kamu harus tahu ke mana uang mengalir. Pelajari analisis belanja dan pengelompokan kategori untuk menemukan peluang penghematan terbesar.",
    durationMin: 14,
    tags: ["procurement", "spend-analysis", "category", "pareto"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Spend analysis</strong> adalah mengumpulkan, membersihkan, dan mengelompokkan seluruh data belanja perusahaan agar terlihat ke mana uang sebenarnya pergi. Banyak organisasi terkejut menemukan belanja yang tersebar, ganda, atau di luar kontrak.",
      },
      {
        type: "paragraph",
        html: "Setelah belanja terpetakan, <strong>category management</strong> mengelompokkannya menjadi kategori serupa (misalnya IT, logistik, bahan baku, jasa) dan menetapkan strategi khusus per kategori. Pendekatan ini memusatkan daya tawar dan menghindari pembelian tercerai-berai.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak supermarket berisi produk yang dikelompokkan per kategori",
        caption: "Seperti rak toko yang ditata per kategori, category management menyusun belanja serupa dalam satu kelompok agar strategi dan daya tawar terpusat.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Prinsip Pareto pada belanja",
        html: "Biasanya sekitar 20% pemasok atau kategori menyerap sekitar 80% nilai belanja. Memusatkan upaya penghematan pada kelompok besar ini memberi hasil paling cepat, daripada menyebar tenaga pada banyak transaksi kecil.",
      },
      {
        type: "video",
        comp: "StrategicSourcingVideo",
        title: "Dari data belanja ke strategi kategori",
        caption: "Tiap kategori belanja dipetakan ulang dengan logika risiko dan dampak biaya ala Kraljic.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Nilai Belanja per Kategori Setahun (ilustrasi)",
        unit: "Rp miliar",
        source: "ilustrasi edukatif analisis belanja perusahaan",
        note: "Kategori IT dan bahan baku menyerap porsi terbesar, sehingga menjadi prioritas utama penghematan.",
        data: [
          { label: "IT", value: 24, color: "#60a5fa" },
          { label: "Bahan baku", value: 22, color: "#34d399" },
          { label: "Logistik", value: 18, color: "#fbbf24" },
          { label: "Jasa kantor", value: 10, color: "#f472b6" },
          { label: "Lain-lain", value: 6, color: "#a78bfa" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Bersihkan data dulu",
        html: "Satu pemasok bisa tercatat dengan beberapa nama berbeda akibat salah ketik. Tanpa pembersihan dan penyatuan data, analisis belanja akan menyesatkan. Konsolidasi nama pemasok adalah langkah pertama yang sering terlupakan.",
      },
      {
        type: "case",
        title: "Studi Kasus: Memetakan belanja Rp 80 miliar",
        html: "Sebuah perusahaan menganalisis total belanja Rp 80 miliar setahun. Kategori IT ternyata menyerap Rp 24 miliar, yaitu 24 dibagi 80 sama dengan 30% dari total. Karena IT kategori terbesar, tim pengadaan menjadikannya prioritas: konsolidasi vendor dan negosiasi kontrak payung. Penghematan 5% di kategori ini saja bernilai Rp 1,2 miliar, jauh lebih besar daripada mengejar kategori kecil.",
      },
      {
        type: "case",
        title: "Sejarah: Vilfredo Pareto dan kelahiran prinsip 80/20",
        html: "Pada sekitar tahun 1896, ekonom Italia <strong>Vilfredo Pareto</strong> mengamati bahwa sekitar 80% tanah di Italia dimiliki oleh sekitar 20% penduduk. Pola ketimpangan serupa ternyata muncul di banyak bidang. Gagasan ini kelak dikenal sebagai <strong>prinsip Pareto</strong> atau aturan 80/20. Dalam pengadaan, prinsip ini memandu kita memusatkan perhatian pada sebagian kecil kategori yang menyerap sebagian besar nilai belanja.",
      },
      {
        type: "calcExercise",
        prompt:
          "Total belanja setahun Rp 80 miliar. Kategori IT menyerap Rp 24 miliar. Berapa persen porsi belanja IT dari total?",
        answer: 30,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "24 dibagi 80 dikali 100% = <strong>30%</strong>. Kategori sebesar ini layak jadi prioritas penghematan.",
        hint: "Bagi nilai kategori dengan total belanja, lalu kalikan 100%.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah dengan maknanya dalam analisis belanja.",
        pairs: [
          { left: "Spend analysis", right: "Mengelompokkan data belanja untuk melihat ke mana uang pergi" },
          { left: "Category management", right: "Menetapkan strategi khusus per kelompok belanja serupa" },
          { left: "Prinsip Pareto", right: "Sebagian kecil kategori menyerap sebagian besar nilai" },
          { left: "Maverick spending", right: "Pembelian di luar kontrak yang sudah disepakati" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Spend analysis memetakan ke mana uang belanja sebenarnya pergi.",
          "Category management menetapkan strategi khusus per kelompok belanja.",
          "Prinsip Pareto: sekitar 20% kategori menyerap sekitar 80% nilai belanja.",
          "Pembersihan data pemasok wajib dilakukan sebelum analisis.",
          "Penghematan kecil di kategori besar bernilai lebih dari upaya di kategori kecil.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama spend analysis?",
            options: [
              "Menambah jumlah pemasok",
              "Melihat ke mana uang belanja sebenarnya pergi",
              "Menaikkan harga beli",
              "Menghapus kontrak",
            ],
            answer: 1,
            explain: "Spend analysis mengumpulkan dan mengelompokkan data agar aliran belanja terlihat jelas.",
          },
          {
            q: "Apa inti category management?",
            options: [
              "Membeli semuanya dari satu pemasok",
              "Mengelompokkan belanja serupa dan menetapkan strategi per kategori",
              "Mengabaikan data belanja",
              "Membeli tanpa perencanaan",
            ],
            answer: 1,
            explain: "Category management memusatkan daya tawar lewat strategi khusus tiap kelompok belanja.",
          },
          {
            q: "Apa makna prinsip Pareto dalam pengadaan?",
            options: [
              "Semua kategori sama besarnya",
              "Sebagian kecil kategori menyerap sebagian besar nilai belanja",
              "Belanja selalu merata",
              "Penghematan tidak mungkin",
            ],
            answer: 1,
            explain: "Sekitar 20% kategori biasanya menyerap sekitar 80% nilai, jadi prioritaskan kelompok besar.",
          },
          {
            q: "Mengapa pembersihan data pemasok penting sebelum analisis?",
            options: [
              "Agar data lebih banyak",
              "Karena satu pemasok bisa tercatat beberapa nama dan menyesatkan analisis",
              "Agar harga naik",
              "Tidak penting sama sekali",
            ],
            answer: 1,
            explain: "Nama ganda akibat salah ketik membuat analisis keliru bila tidak disatukan dulu.",
          },
          {
            q: "Total belanja Rp 80 miliar, IT Rp 24 miliar. Berapa persen porsi IT?",
            options: ["20%", "24%", "30%", "40%"],
            answer: 2,
            explain: "24 / 80 x 100% = 30%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "indonesia-government-procurement",
    levelId: "procurement",
    order: 8,
    title: "Pengadaan Pemerintah Indonesia",
    summary:
      "Belanja negara diatur ketat agar transparan dan efisien. Pelajari peran LKPP, e-Katalog, e-Tendering, dan kebijakan TKDN dalam pengadaan pemerintah Indonesia.",
    durationMin: 15,
    tags: ["procurement", "lkpp", "ekatalog", "tkdn", "indonesia"],
    blocks: [
      {
        type: "paragraph",
        html: "Pengadaan barang dan jasa pemerintah Indonesia memakai uang publik, sehingga dituntut <strong>transparan, bersaing, dan efisien</strong>. Lembaga yang menyusun kebijakannya adalah <strong>LKPP</strong> (Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah).",
      },
      {
        type: "paragraph",
        html: "Untuk menekan korupsi dan mempercepat proses, pengadaan dipindahkan ke sistem elektronik. Dua tulang punggungnya adalah <strong>e-Katalog</strong> (etalase produk dengan harga yang sudah disepakati) dan <strong>e-Tendering</strong> (lelang elektronik untuk paket yang lebih besar).",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/U_S_Customs_and_Border_Protection_Seattle_Washington_Inspection_%285764585803%29.jpg?width=400",
        alt: "Petugas memeriksa barang di pos pemeriksaan resmi",
        caption: "Belanja negara dengan uang publik menuntut pemeriksaan dan kepatuhan yang ketat, persis semangat di balik LKPP, e-Katalog, dan aturan TKDN.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Instrumen utama pengadaan pemerintah",
        html: "<strong>e-Katalog</strong>: pembelian cepat barang standar lewat etalase resmi (e-Purchasing). <strong>e-Tendering</strong>: lelang terbuka untuk pekerjaan bernilai besar. <strong>TKDN</strong>: Tingkat Komponen Dalam Negeri, ukuran seberapa besar isi lokal sebuah produk.",
      },
      {
        type: "video",
        comp: "StrategicSourcingVideo",
        title: "Logika sourcing di sektor publik",
        caption: "Barang standar bervolume besar (leverage) cocok lewat e-Katalog yang memperbanyak persaingan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa TKDN penting",
        html: "TKDN mendorong produk dengan kandungan lokal tinggi agar diutamakan dalam belanja negara. Tujuannya menumbuhkan industri dalam negeri, membuka lapangan kerja, dan mengurangi ketergantungan impor.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Pertumbuhan Nilai Transaksi e-Katalog (ilustrasi tren)",
        unit: "indeks relatif",
        source: "ilustrasi edukatif arah kebijakan digitalisasi pengadaan",
        note: "Sejak diluncurkan, transaksi e-Katalog terus tumbuh seiring perluasan produk dan kewajiban penggunaannya.",
        data: [
          { label: "2018", value: 30, color: "#60a5fa" },
          { label: "2020", value: 48, color: "#60a5fa" },
          { label: "2022", value: 72, color: "#60a5fa" },
          { label: "2024", value: 100, color: "#60a5fa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menghitung TKDN sebuah produk",
        html: "Sebuah instansi membeli peralatan senilai kontrak Rp 10 miliar. Dari nilai itu, komponen yang diproduksi di dalam negeri bernilai Rp 6,5 miliar. Maka TKDN = 6,5 dibagi 10 dikali 100% sama dengan 65%. Karena banyak kebijakan menetapkan ambang minimal (misalnya 25% atau 40%), produk dengan TKDN 65% mudah memenuhi syarat dan diutamakan dalam belanja negara.",
      },
      {
        type: "case",
        title: "Sejarah: LKPP berdiri 2007 dan e-Katalog ~2012",
        html: "Pengadaan pemerintah Indonesia dulu rawan korupsi dan lambat. <strong>LKPP dibentuk pada 2007</strong> untuk membenahi kebijakan pengadaan secara nasional. Beberapa tahun kemudian, sekitar 2012, <strong>e-Katalog</strong> diluncurkan agar instansi bisa membeli barang standar dengan harga yang sudah dinegosiasikan, tanpa lelang berulang. Digitalisasi ini menekan peluang suap dan mempercepat belanja. Ini sejalan dengan gerakan e-procurement dunia yang dirintis sejak akhir 1990-an.",
      },
      {
        type: "calcExercise",
        prompt:
          "Nilai kontrak peralatan Rp 10 miliar. Komponen dalam negeri bernilai Rp 6,5 miliar. Berapa persen TKDN produk tersebut?",
        answer: 65,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "TKDN = 6,5 miliar dibagi 10 miliar dikali 100% = <strong>65%</strong>. Angka di atas ambang minimal umum, sehingga produk diutamakan.",
        hint: "Bagi nilai komponen dalam negeri dengan nilai total kontrak, lalu kalikan 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap situasi pengadaan pemerintah ke instrumen yang paling tepat.",
        buckets: ["e-Katalog (e-Purchasing)", "e-Tendering"],
        items: [
          { text: "Membeli laptop standar yang sudah ada di etalase resmi", bucket: "e-Katalog (e-Purchasing)" },
          { text: "Membangun gedung kantor bernilai besar", bucket: "e-Tendering" },
          { text: "Membeli alat tulis kantor dengan harga yang sudah disepakati", bucket: "e-Katalog (e-Purchasing)" },
          { text: "Proyek jalan yang butuh lelang terbuka", bucket: "e-Tendering" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Pengadaan pemerintah memakai uang publik, jadi wajib transparan dan efisien.",
          "LKPP menyusun kebijakan pengadaan barang dan jasa pemerintah nasional.",
          "e-Katalog untuk pembelian cepat barang standar, e-Tendering untuk lelang besar.",
          "TKDN mengukur kandungan lokal dan mendorong industri dalam negeri.",
          "LKPP berdiri 2007 dan e-Katalog meluncur sekitar 2012 untuk menekan korupsi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa peran utama LKPP?",
            options: [
              "Menjual barang ke masyarakat",
              "Menyusun kebijakan pengadaan barang dan jasa pemerintah",
              "Mengatur pajak impor",
              "Mencetak uang",
            ],
            answer: 1,
            explain: "LKPP adalah lembaga yang membenahi dan menyusun kebijakan pengadaan pemerintah nasional.",
          },
          {
            q: "Kapan e-Katalog lebih tepat dipakai dibanding e-Tendering?",
            options: [
              "Untuk proyek konstruksi bernilai besar",
              "Untuk membeli barang standar yang sudah ada di etalase dengan harga disepakati",
              "Untuk semua pekerjaan kompleks",
              "Tidak pernah dipakai",
            ],
            answer: 1,
            explain: "e-Katalog mempercepat pembelian barang standar tanpa lelang berulang.",
          },
          {
            q: "Apa yang diukur oleh TKDN?",
            options: [
              "Tinggi gedung kantor",
              "Tingkat Komponen Dalam Negeri, seberapa besar isi lokal sebuah produk",
              "Total pajak yang dibayar",
              "Jumlah pegawai instansi",
            ],
            answer: 1,
            explain: "TKDN mengukur porsi kandungan lokal untuk mendorong industri dalam negeri.",
          },
          {
            q: "Apa tujuan utama digitalisasi lewat e-Katalog sejak ~2012?",
            options: [
              "Memperlambat belanja",
              "Menekan peluang suap dan mempercepat belanja pemerintah",
              "Menambah dokumen kertas",
              "Menghapus persaingan",
            ],
            answer: 1,
            explain: "Sistem elektronik membuat harga transparan, menekan korupsi, dan mempercepat proses.",
          },
          {
            q: "Kontrak Rp 10 miliar, komponen dalam negeri Rp 6,5 miliar. Berapa TKDN?",
            options: ["35%", "50%", "65%", "85%"],
            answer: 2,
            explain: "6,5 / 10 x 100% = 65%.",
          },
        ],
      },
    ],
  },
];
