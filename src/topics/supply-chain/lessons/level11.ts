import type { Lesson } from "../../../types";

export const level11: Lesson[] = [
  // ============================================================
  {
    id: "green-supply-chain-sirkular",
    levelId: "keberlanjutan",
    order: 1,
    title: "Green Supply Chain & Ekonomi Sirkular",
    summary:
      "Rantai pasok hijau bukan sekadar citra, tapi penghematan nyata. Pelajari logistik rendah emisi, ekonomi sirkular, dan reverse logistics yang menutup lingkaran.",
    durationMin: 14,
    tags: ["keberlanjutan", "green", "sirkular", "reverse logistics"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Green supply chain</strong> adalah upaya menekan dampak lingkungan di sepanjang rantai pasok: dari memilih bahan, moda angkut rendah emisi, kemasan yang bisa didaur ulang, sampai mengelola produk di akhir masa pakainya. Yang menarik, banyak langkah hijau sekaligus <strong>menghemat biaya</strong>, karena mengurangi pemborosan energi dan bahan.",
      },
      {
        type: "paragraph",
        html: "Model lama bersifat <strong>linear</strong>: ambil, pakai, buang. <strong>Ekonomi sirkular</strong> membentuk lingkaran: produk dirancang agar bisa diperbaiki, dipakai ulang, atau didaur ulang, sehingga bahan tetap bernilai dan limbah ditekan. Ini menambah satu arah baru dalam rantai pasok, yaitu <strong>reverse logistics</strong>: membawa barang dari konsumen kembali ke hulu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg?width=400",
        alt: "Kapal kontainer besar mengangkut peti kemas di laut",
        caption: "Kapal laut adalah moda angkut dengan emisi per ton-km paling rendah, salah satu kunci rantai pasok hijau.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Linear vs sirkular",
        html: "Rantai <strong>linear</strong> berakhir di tempat sampah. Rantai <strong>sirkular</strong> menutup lingkaran: bahan, produksi, pakai, lalu daur ulang kembali jadi bahan. Tujuannya memutus ketergantungan pada bahan baru yang mahal dan merusak lingkungan.",
      },
      {
        type: "video",
        comp: "GreenSupplyChainVideo",
        title: "Rantai Pasok Sirkular",
        caption: "Dari pola ambil-pakai-buang menjadi lingkaran tanpa limbah lewat reverse logistics.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Perkirakan emisi CO2 dari sebuah pengiriman dan lihat bagaimana memilih moda angkut yang lebih hijau bisa memangkasnya drastis.",
      },
      { type: "widget", widget: "KalkulatorJejakKarbonLogistik" },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan Emisi per Ton-Kilometer antar Moda (ilustrasi)",
        unit: "kg CO₂ per ton-km",
        source: "ilustrasi edukatif, urutan sesuai pola nyata",
        note: "Memindahkan muatan dari truk atau pesawat ke laut atau kereta memangkas emisi secara signifikan.",
        data: [
          { label: "Kapal laut", value: 0.016, color: "#34d399" },
          { label: "Kereta", value: 0.028, color: "#60a5fa" },
          { label: "Truk", value: 0.062, color: "#fbbf24" },
          { label: "Pesawat", value: 0.6, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kemasan yang lebih kecil, dampak yang besar",
        html: "Sebuah perusahaan barang konsumen merancang ulang kemasan agar lebih ringkas dan ringan. Hasilnya berlapis: satu truk kini memuat lebih banyak produk (lebih sedikit perjalanan), biaya bahan kemasan turun, dan emisi per produk berkurang. Ini contoh bahwa keputusan kecil di hulu, yaitu <strong>desain kemasan</strong>, beriak ke seluruh rantai pasok, menghemat biaya logistik sekaligus mengurangi jejak karbon. Langkah hijau dan langkah hemat sering berjalan seiring.",
      },
      {
        type: "case",
        title: "Sejarah: Ray Anderson dan Mission Zero Interface (1994)",
        html: "Pada <strong>1994</strong>, <strong>Ray Anderson</strong>, pendiri perusahaan karpet <strong>Interface</strong>, membaca buku tentang dampak lingkungan dan mengalami titik balik. Ia menetapkan visi radikal bernama <strong>Mission Zero</strong>: menghilangkan dampak negatif perusahaan terhadap lingkungan pada 2020. Interface mendaur ulang jaring ikan bekas menjadi bahan karpet dan memangkas limbah secara drastis. Yang mengejutkan, langkah ini justru menghemat ratusan juta dolar AS. Kisah Interface jadi bukti awal bahwa keberlanjutan bisa sejalan dengan keuntungan, bukan sekadar biaya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Memindahkan 10 ton barang sejauh 1.000 km. Dengan truk (0,062 kg CO2 per ton-km), berapa kg CO2 yang dihasilkan?",
        answer: 620,
        tolerance: 1,
        suffix: "kg CO₂",
        solution:
          "10 ton x 1.000 km x 0,062 = <strong>620 kg CO2</strong>. Bila dipindah ke kapal laut (0,016), emisinya hanya sekitar 160 kg, memangkas lebih dari 70%.",
        hint: "Kalikan berat (ton) x jarak (km) x faktor emisi moda.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk muatan yang sama (10 ton, 1.000 km), kapal laut menghasilkan 160 kg CO2 dan truk 620 kg CO2. Berapa persen emisi yang dihemat dengan beralih ke laut?",
        answer: 74.2,
        tolerance: 1,
        suffix: "%",
        solution:
          "Hemat = 620 - 160 = 460 kg. Persentase = 460 / 620 x 100% = <strong>74,2%</strong>. Memilih moda yang lebih hijau memberi penghematan emisi yang besar.",
        hint: "Bagi selisih emisi dengan emisi truk, lalu kali 100%.",
      },
      {
        type: "takeaways",
        items: [
          "Green supply chain menekan dampak lingkungan dan kerap menghemat biaya sekaligus.",
          "Ekonomi sirkular mengubah pola linear ambil-pakai-buang menjadi lingkaran tertutup.",
          "Reverse logistics membawa produk dari konsumen kembali ke hulu untuk dipakai ulang atau didaur ulang.",
          "Memindahkan muatan ke moda rendah emisi seperti laut dan kereta memangkas jejak karbon besar.",
          "Kisah Interface (1994) membuktikan keberlanjutan bisa sejalan dengan keuntungan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu green supply chain?",
            options: [
              "Rantai pasok yang hanya menjual produk hijau",
              "Upaya menekan dampak lingkungan di sepanjang rantai pasok",
              "Rantai pasok tanpa transportasi",
              "Gudang yang dicat hijau",
            ],
            answer: 1,
            explain: "Green supply chain mengurangi dampak lingkungan dari hulu sampai akhir masa pakai produk.",
          },
          {
            q: "Apa ciri ekonomi sirkular?",
            options: [
              "Ambil, pakai, buang",
              "Membentuk lingkaran: bahan dipakai ulang dan didaur ulang",
              "Memproduksi sebanyak mungkin",
              "Tidak ada daur ulang",
            ],
            answer: 1,
            explain: "Ekonomi sirkular menutup lingkaran agar bahan tetap bernilai dan limbah ditekan.",
          },
          {
            q: "Apa fungsi reverse logistics?",
            options: [
              "Mengirim barang lebih cepat ke konsumen",
              "Membawa produk dari konsumen kembali ke hulu untuk dipakai/daur ulang",
              "Menghapus gudang",
              "Menaikkan harga produk",
            ],
            answer: 1,
            explain: "Reverse logistics menambah arah balik agar produk bekas bisa dimanfaatkan kembali.",
          },
          {
            q: "Apa pelajaran dari Mission Zero Interface (1994)?",
            options: [
              "Keberlanjutan selalu merugi",
              "Keberlanjutan bisa sejalan dengan keuntungan",
              "Daur ulang itu mustahil",
              "Lingkungan tidak penting bagi bisnis",
            ],
            answer: 1,
            explain: "Interface memangkas limbah dan justru menghemat ratusan juta dolar AS.",
          },
          {
            q: "Memindah 10 ton sejauh 1.000 km dengan truk (0,062 kg CO2/ton-km) menghasilkan?",
            options: ["62 kg", "620 kg", "6.200 kg", "160 kg"],
            answer: 1,
            explain: "10 x 1.000 x 0,062 = 620 kg CO2.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "ekonomi-sirkular-lanjutan",
    levelId: "keberlanjutan",
    order: 2,
    title: "Ekonomi Sirkular Lanjutan: Reuse, Remanufacture, Recycle",
    summary:
      "Tidak semua lingkaran sama nilainya. Pelajari tangga prioritas reuse, remanufacture, recycle, plus Extended Producer Responsibility yang memaksa produsen ikut bertanggung jawab sampai akhir.",
    durationMin: 15,
    tags: ["keberlanjutan", "sirkular", "remanufaktur", "EPR", "daur ulang"],
    blocks: [
      {
        type: "paragraph",
        html: "Ekonomi sirkular punya banyak lingkaran, dan tidak semuanya bernilai sama. Ada tangga prioritas yang sering disebut <strong>9R</strong>, tetapi tiga yang paling sering dipakai di rantai pasok adalah <strong>reuse</strong> (pakai ulang apa adanya), <strong>remanufacture</strong> (bongkar, ganti komponen aus, rakit ulang ke kondisi seperti baru), dan <strong>recycle</strong> (hancurkan jadi bahan mentah lagi). Makin tinggi tangganya, makin banyak nilai dan energi yang dipertahankan.",
      },
      {
        type: "paragraph",
        html: "Agar produsen tidak lepas tangan setelah barang terjual, banyak negara menerapkan <strong>Extended Producer Responsibility (EPR)</strong>: tanggung jawab produsen diperluas sampai produk jadi sampah. Produsen wajib ikut menanggung pengumpulan dan pengolahan kemasan atau barang bekasnya, sehingga ada insentif kuat untuk merancang produk yang mudah didaur ulang sejak awal.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Modern_warehouse_with_pallet_rack_storage_system.jpg?width=400",
        alt: "Gudang modern dengan sistem rak palet bertingkat",
        caption: "Gudang yang rapi memudahkan memilah barang untuk dipakai ulang, diremanufaktur, atau didaur ulang sesuai tangga R.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tangga nilai: reuse menang",
        html: "Urutan prioritas dari yang paling hemat energi: <strong>reuse</strong> (pakai ulang) lebih baik daripada <strong>remanufacture</strong>, dan keduanya lebih baik daripada <strong>recycle</strong>. Recycle memang menutup lingkaran, tetapi menghancurkan produk jadi bahan mentah membuang banyak nilai dan energi yang sudah tertanam.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu EPR?",
        html: "<strong>Extended Producer Responsibility</strong> menggeser biaya pengelolaan sampah dari pemerintah ke produsen. Di Indonesia, peta jalan pengurangan sampah oleh produsen mendorong merek besar menarik kembali dan mendaur ulang kemasannya.",
      },
      {
        type: "video",
        comp: "GreenSupplyChainVideo",
        title: "Menutup Lingkaran Bahan",
        caption: "Reuse, remanufacture, dan recycle mengembalikan produk ke rantai pasok alih-alih ke tempat sampah.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Energi yang Dipertahankan per Strategi Sirkular (ilustrasi)",
        unit: "% nilai/energi tertahan",
        source: "ilustrasi edukatif, urutan sesuai prinsip tangga R",
        note: "Makin tinggi tangga R, makin banyak energi dan nilai yang diselamatkan dibanding membuat dari bahan baru.",
        data: [
          { label: "Reuse", value: 90, color: "#34d399" },
          { label: "Remanufacture", value: 70, color: "#60a5fa" },
          { label: "Recycle", value: 40, color: "#fbbf24" },
          { label: "Buang (linear)", value: 0, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Daur ulang aluminium kaleng minuman",
        html: "Membuat aluminium dari bijih bauksit sangat haus energi: butuh sekitar <strong>14 kWh untuk tiap kilogram</strong> logam primer. Mendaur ulang kaleng bekas hanya memakai sekitar <strong>5%</strong> energi itu, kira-kira 0,7 kWh per kg. Untuk 1 ton aluminium, daur ulang menghemat sekitar <strong>13.300 kWh</strong>. Inilah kenapa kaleng minuman jadi tulang punggung ekonomi sirkular: nilainya tinggi, dan rantai pengumpulan rosoknya sudah mapan, termasuk di Indonesia lewat jaringan pemulung dan bank sampah.",
      },
      {
        type: "case",
        title: "Sejarah: Patagonia dan iklan Don't Buy This Jacket (2011)",
        html: "Pada Black Friday <strong>2011</strong>, merek pakaian luar ruang <strong>Patagonia</strong> memasang iklan satu halaman penuh di koran dengan tulisan mengejutkan: <strong>Don't Buy This Jacket</strong> (Jangan Beli Jaket Ini). Pesannya: konsumsi berlebihan merusak planet, jadi perbaiki dan pakai lagi barang lama sebelum beli baru. Patagonia mempromosikan program <strong>Worn Wear</strong> untuk reparasi dan jual-beli barang bekasnya. Kampanye ini jadi tonggak gerakan reuse, membuktikan merek bisa mengajak konsumen mengurangi pembelian sekaligus memperkuat loyalitas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Membuat produk baru butuh 100 kg bahan baku perawan. Lewat remanufaktur, hanya 30 kg komponen baru yang diperlukan, sisanya komponen lama dipakai ulang. Berapa persen bahan baku perawan yang dihemat?",
        answer: 70,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Hemat = 100 - 30 = 70 kg. Persentase = 70 / 100 x 100% = <strong>70%</strong>. Remanufaktur mempertahankan sebagian besar nilai komponen lama.",
        hint: "Bandingkan bahan baru yang dibutuhkan dengan kebutuhan produk benar-benar baru.",
      },
      {
        type: "calcExercise",
        prompt:
          "Aluminium primer butuh 14 kWh/kg, daur ulang hanya 0,7 kWh/kg. Untuk mendaur ulang 1 ton (1.000 kg), berapa kWh energi yang dihemat dibanding membuat primer?",
        answer: 13300,
        tolerance: 10,
        suffix: "kWh",
        solution:
          "Primer: 1.000 x 14 = 14.000 kWh. Daur ulang: 1.000 x 0,7 = 700 kWh. Hemat = 14.000 - 700 = <strong>13.300 kWh</strong>.",
        hint: "Hitung energi kedua jalur untuk 1.000 kg, lalu kurangkan.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap tindakan ke tangga R yang tepat.",
        buckets: ["Reuse", "Remanufacture", "Recycle"],
        items: [
          { text: "Mengisi ulang botol kaca yang sama berkali-kali", bucket: "Reuse" },
          { text: "Membongkar mesin bekas, mengganti part aus, merakit ke kondisi baru", bucket: "Remanufacture" },
          { text: "Melebur kaleng aluminium jadi lembaran logam baru", bucket: "Recycle" },
          { text: "Memakai kembali palet kayu untuk pengiriman berikutnya", bucket: "Reuse" },
          { text: "Memulihkan kartrid printer kosong jadi siap pakai lagi", bucket: "Remanufacture" },
          { text: "Mencacah botol plastik jadi serpih untuk bahan baku baru", bucket: "Recycle" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Tangga R memberi prioritas: reuse mengalahkan remanufacture, dan keduanya mengalahkan recycle.",
          "Remanufaktur mempertahankan sebagian besar nilai komponen lama, jauh lebih hemat daripada membuat baru.",
          "Recycle tetap penting, tetapi menghancurkan produk membuang energi yang sudah tertanam.",
          "EPR memaksa produsen ikut bertanggung jawab sampai akhir masa pakai, mendorong desain yang mudah didaur ulang.",
          "Daur ulang aluminium menghemat sekitar 95% energi dibanding logam primer.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mana urutan prioritas tangga R yang benar dari paling hemat energi?",
            options: [
              "Recycle, remanufacture, reuse",
              "Reuse, remanufacture, recycle",
              "Remanufacture, recycle, reuse",
              "Recycle, reuse, remanufacture",
            ],
            answer: 1,
            explain: "Reuse mempertahankan paling banyak nilai, recycle paling sedikit.",
          },
          {
            q: "Apa inti dari Extended Producer Responsibility (EPR)?",
            options: [
              "Konsumen membayar pajak sampah lebih tinggi",
              "Produsen ikut bertanggung jawab atas produknya sampai jadi sampah",
              "Pemerintah melarang semua kemasan plastik",
              "Toko wajib menyediakan tempat sampah",
            ],
            answer: 1,
            explain: "EPR memperluas tanggung jawab produsen hingga akhir masa pakai produk.",
          },
          {
            q: "Apa beda remanufacture dengan recycle?",
            options: [
              "Keduanya sama persis",
              "Remanufacture merakit ulang komponen, recycle menghancurkan jadi bahan mentah",
              "Recycle lebih hemat energi daripada remanufacture",
              "Remanufacture selalu membuang produk",
            ],
            answer: 1,
            explain: "Remanufacture mempertahankan bentuk komponen; recycle mengembalikan ke bahan mentah.",
          },
          {
            q: "Apa pesan kampanye Patagonia Don't Buy This Jacket (2011)?",
            options: [
              "Belilah jaket sebanyak mungkin",
              "Kurangi konsumsi, perbaiki dan pakai ulang barang lama",
              "Jaket Patagonia tidak dijual lagi",
              "Daur ulang itu tidak penting",
            ],
            answer: 1,
            explain: "Patagonia mengajak konsumen mengurangi pembelian dan memperpanjang umur produk.",
          },
          {
            q: "Mendaur ulang 1 ton aluminium (primer 14 kWh/kg, daur ulang 0,7 kWh/kg) menghemat energi sekitar?",
            options: ["700 kWh", "1.400 kWh", "13.300 kWh", "14.000 kWh"],
            answer: 2,
            explain: "14.000 - 700 = 13.300 kWh dihemat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "esg-dalam-rantai-pasok",
    levelId: "keberlanjutan",
    order: 3,
    title: "ESG dalam Rantai Pasok",
    summary:
      "ESG bukan cuma urusan investor. Lihat bagaimana faktor environmental, social, dan governance hidup di operasi nyata: pemasok, gudang, dan armada, lalu dilaporkan dalam laporan keberlanjutan.",
    durationMin: 14,
    tags: ["keberlanjutan", "ESG", "pemasok", "pelaporan", "tata kelola"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>ESG</strong> adalah singkatan dari <strong>Environmental</strong> (lingkungan), <strong>Social</strong> (sosial), dan <strong>Governance</strong> (tata kelola). Di tingkat perusahaan, ESG sering terdengar seperti urusan investor dan laporan tahunan. Tetapi di rantai pasok, ESG sangat operasional: emisi armada, limbah gudang, keselamatan kerja pemasok, sampai kejujuran kontrak pengadaan semuanya adalah ESG yang nyata dan terukur.",
      },
      {
        type: "paragraph",
        html: "Pengukuran emisi karbon yang detail dibahas tuntas di topik <strong>carbon</strong> dan pembiayaannya di topik <strong>climate-finance</strong>. Di sini fokusnya beda: bagaimana faktor ESG diterjemahkan menjadi keputusan logistik dan pemilihan pemasok sehari-hari, lalu dirangkum dalam <strong>laporan keberlanjutan</strong> yang bisa diaudit.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/UK-India_Business_Leaders_Climate_Group_breakfast_meeting_%285177859631%29.jpg?width=400",
        alt: "Sejumlah pemimpin bisnis berdiskusi dalam rapat tentang iklim dan keberlanjutan",
        caption: "Keputusan ESG lahir dari ruang rapat lalu diterjemahkan menjadi pilihan pemasok, armada, dan gudang sehari-hari.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga huruf, tiga ranah operasi",
        html: "<strong>E</strong>: jejak lingkungan operasi (emisi armada, energi gudang, limbah kemasan). <strong>S</strong>: manusia di rantai pasok (keselamatan kerja, upah layak, larangan kerja paksa). <strong>G</strong>: cara mengambil keputusan (transparansi pengadaan, anti suap, ketertelusuran pemasok).",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tautan ke topik lain",
        html: "Akuntansi karbon (Scope 1, 2, 3) dan instrumen pembiayaan hijau dibahas mendalam di topik <strong>carbon</strong> dan <strong>climate-finance</strong>. Pelajaran ini tidak mengulanginya, melainkan memakai hasilnya sebagai salah satu metrik E.",
      },
      {
        type: "video",
        comp: "GreenSupplyChainVideo",
        title: "ESG Menjadi Operasi Nyata",
        caption: "Faktor environmental, social, dan governance mengalir ke pemasok, gudang, dan armada di rantai pasok.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Hati-hati greenwashing",
        html: "Klaim ESG tanpa data yang bisa diaudit adalah <strong>greenwashing</strong>. Laporan keberlanjutan yang kredibel memakai standar baku dan angka yang bisa ditelusuri sampai ke pemasok, bukan sekadar foto pohon dan kata sifat.",
      },
      {
        type: "widget",
        widget: "KalkulatorJejakKarbonLogistik",
      },
      {
        type: "case",
        title: "Studi Kasus: Audit pemasok sawit dan sertifikasi",
        html: "Sebuah produsen barang konsumen di Indonesia memakai minyak sawit dari banyak pemasok. Untuk memenuhi target ESG, ia mewajibkan pemasok bersertifikat <strong>ISPO</strong> (sertifikasi sawit berkelanjutan wajib pemerintah Indonesia) atau <strong>RSPO</strong> (standar global sukarela). Dari 50 pemasok awal, hanya 30 yang lolos audit pertama soal legalitas lahan, larangan pembukaan hutan, dan kondisi kerja. Perusahaan membina 20 sisanya selama setahun. Hasil audit ini, persentase volume bersertifikat, menjadi salah satu angka kunci di laporan keberlanjutannya.",
      },
      {
        type: "case",
        title: "Sejarah: Lahirnya RSPO (2004)",
        html: "Pada <strong>2004</strong>, di tengah sorotan dunia atas deforestasi akibat perluasan kebun sawit, berdirilah <strong>Roundtable on Sustainable Palm Oil (RSPO)</strong>, forum yang mempertemukan pekebun, pengolah, merek konsumen, dan organisasi lingkungan. RSPO menyusun kriteria sawit berkelanjutan yang bisa disertifikasi. Indonesia, sebagai produsen sawit terbesar dunia, kemudian meluncurkan skema wajibnya sendiri, <strong>ISPO</strong>, sekitar 2011. Kombinasi keduanya mengubah sawit dari komoditas tanpa jejak menjadi komoditas yang ketertelusurannya makin dituntut pasar global.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 50 pemasok sawit, 30 lolos audit keberlanjutan pada tahap pertama. Berapa persen pemasok yang lolos?",
        answer: 60,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "30 / 50 x 100% = <strong>60%</strong>. Sisanya 40% perlu pembinaan sebelum bisa disertifikasi.",
        hint: "Bagi jumlah yang lolos dengan total pemasok, lalu kali 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Masukkan tiap isu rantai pasok ke pilar ESG yang paling tepat.",
        buckets: ["Environmental", "Social", "Governance"],
        items: [
          { text: "Emisi CO2 dari armada pengiriman", bucket: "Environmental" },
          { text: "Keselamatan dan upah layak pekerja gudang", bucket: "Social" },
          { text: "Transparansi tender dan anti suap dalam pengadaan", bucket: "Governance" },
          { text: "Limbah kemasan yang tidak terdaur ulang", bucket: "Environmental" },
          { text: "Larangan kerja paksa di pabrik pemasok", bucket: "Social" },
          { text: "Kebijakan ketertelusuran dan kode etik pemasok", bucket: "Governance" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "ESG di rantai pasok bersifat operasional: emisi armada, kondisi kerja, dan tata kelola pengadaan.",
          "Pilar E mencakup emisi dan limbah, S mencakup manusia, G mencakup cara mengambil keputusan.",
          "Akuntansi karbon mendalam ada di topik carbon dan climate-finance; di sini ia jadi satu metrik E.",
          "Laporan keberlanjutan kredibel memakai angka yang bisa diaudit, bukan klaim greenwashing.",
          "Sertifikasi seperti ISPO dan RSPO menerjemahkan ESG sawit menjadi syarat pemasok yang terukur.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa kepanjangan ESG?",
            options: [
              "Energy, Safety, Growth",
              "Environmental, Social, Governance",
              "Ecology, Society, Government",
              "Emission, Supply, Goods",
            ],
            answer: 1,
            explain: "ESG = Environmental, Social, Governance.",
          },
          {
            q: "Keselamatan dan upah layak pekerja gudang termasuk pilar mana?",
            options: ["Environmental", "Social", "Governance", "Bukan ESG"],
            answer: 1,
            explain: "Isu manusia di rantai pasok masuk pilar Social.",
          },
          {
            q: "Mengapa akuntansi karbon tidak diulang mendalam di pelajaran ini?",
            options: [
              "Karena tidak penting",
              "Karena sudah dibahas tuntas di topik carbon dan climate-finance",
              "Karena tidak bisa diukur",
              "Karena bukan bagian ESG",
            ],
            answer: 1,
            explain: "Pelajaran ini fokus operasional dan memakai hasil akuntansi karbon sebagai satu metrik E.",
          },
          {
            q: "Apa itu greenwashing?",
            options: [
              "Mencuci kemasan dengan air daur ulang",
              "Klaim ramah lingkungan tanpa data yang bisa diaudit",
              "Mengecat gudang warna hijau",
              "Standar pelaporan resmi",
            ],
            answer: 1,
            explain: "Greenwashing adalah klaim keberlanjutan yang tidak didukung bukti terukur.",
          },
          {
            q: "Jika 30 dari 50 pemasok lolos audit, berapa persen yang lolos?",
            options: ["40%", "50%", "60%", "70%"],
            answer: 2,
            explain: "30 / 50 x 100% = 60%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "logistik-berkelanjutan",
    levelId: "keberlanjutan",
    order: 4,
    title: "Logistik Berkelanjutan: Moda, Konsolidasi, Kendaraan Listrik",
    summary:
      "Logistik adalah sumber emisi terbesar di banyak rantai pasok. Pelajari tiga pengungkit utama: memilih moda rendah emisi, mengisi penuh muatan, dan beralih ke kendaraan listrik.",
    durationMin: 15,
    tags: ["keberlanjutan", "logistik", "moda", "konsolidasi", "kendaraan listrik"],
    blocks: [
      {
        type: "paragraph",
        html: "Transportasi sering menjadi penyumbang emisi terbesar dalam rantai pasok. Kabar baiknya, ada tiga pengungkit yang ampuh dan kerap menghemat biaya sekaligus: <strong>memilih moda rendah emisi</strong>, <strong>mengonsolidasikan muatan</strong> agar kendaraan terisi penuh, dan <strong>beralih ke kendaraan listrik</strong> untuk jarak pendek di perkotaan.",
      },
      {
        type: "paragraph",
        html: "Pengungkit yang paling sering terlewat adalah <strong>tingkat keterisian</strong>. Truk yang berangkat setengah kosong memboroskan bahan bakar dan emisi untuk muatan yang sedikit. Mengisi penuh atau menggabungkan kiriman beberapa pelanggan dalam satu perjalanan, yang disebut <strong>konsolidasi muatan</strong>, langsung menurunkan emisi per unit barang.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Rivian_EDV-700_front.jpg?width=400",
        alt: "Van pengiriman listrik tampak depan",
        caption: "Van listrik untuk pengiriman last mile perkotaan memangkas emisi knalpot menjadi nol di jalanan kota.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga pengungkit logistik hijau",
        html: "1) <strong>Moda</strong>: geser dari truk/pesawat ke kereta/laut bila memungkinkan. 2) <strong>Konsolidasi</strong>: isi penuh kendaraan, gabungkan kiriman. 3) <strong>Elektrifikasi</strong>: pakai kendaraan listrik untuk jarak pendek perkotaan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Pakai kalkulator jejak karbon logistik untuk membandingkan emisi sebelum dan sesudah memindahkan muatan ke moda yang lebih hijau.",
      },
      {
        type: "widget",
        widget: "KalkulatorJejakKarbonLogistik",
      },
      {
        type: "video",
        comp: "GreenSupplyChainVideo",
        title: "Logistik Rendah Emisi",
        caption: "Moda yang tepat, muatan yang penuh, dan armada listrik memangkas jejak karbon pengiriman.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Emisi per Paket Saat Truk Terisi Penuh vs Setengah (ilustrasi)",
        unit: "indeks emisi per paket",
        source: "ilustrasi edukatif",
        note: "Emisi total truk hampir sama, tetapi dibagi ke lebih banyak paket, sehingga emisi per paket turun saat muatan penuh.",
        data: [
          { label: "Terisi penuh", value: 100, color: "#34d399" },
          { label: "Terisi 75%", value: 133, color: "#60a5fa" },
          { label: "Terisi 50%", value: 200, color: "#fbbf24" },
          { label: "Terisi 25%", value: 400, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Konsolidasi pengiriman e-commerce Jakarta",
        html: "Sebuah toko daring mengirim ke pelanggan di Jakarta dengan banyak motor yang masing-masing berangkat setengah kosong. Setelah memasang sistem yang menggabungkan beberapa pesanan satu area ke dalam satu rute, jumlah perjalanan turun. Misalnya dari <strong>200 perjalanan menjadi 150 perjalanan</strong> per hari untuk volume paket yang sama. Bila tiap perjalanan rata-rata mengeluarkan 2 kg CO2, emisi harian turun dari 400 kg menjadi 300 kg, hemat 100 kg CO2 per hari, sekaligus memangkas biaya bensin dan kurir.",
      },
      {
        type: "case",
        title: "Sejarah: Bangkitnya armada antar listrik",
        html: "Sekitar dekade <strong>2010-an akhir hingga 2020-an</strong>, perusahaan logistik besar dunia mulai memesan ribuan van listrik untuk pengiriman tahap akhir di kota. Pengiriman last mile cocok untuk kendaraan listrik karena jaraknya pendek, sering berhenti, dan kembali ke depo tiap malam untuk mengisi daya. Di Indonesia, uji coba motor dan kendaraan listrik untuk pengantaran makanan dan paket meluas pada awal 2020-an. Tren ini menandai pergeseran nyata logistik perkotaan menuju nol emisi knalpot.",
      },
      {
        type: "calcExercise",
        prompt:
          "Konsolidasi menurunkan perjalanan harian dari 200 menjadi 150. Jika tiap perjalanan menghasilkan 2 kg CO2, berapa kg CO2 yang dihemat per hari?",
        answer: 100,
        tolerance: 0.5,
        suffix: "kg CO₂",
        solution:
          "Sebelum: 200 x 2 = 400 kg. Sesudah: 150 x 2 = 300 kg. Hemat = 400 - 300 = <strong>100 kg CO2 per hari</strong>.",
        hint: "Hitung emisi sebelum dan sesudah, lalu kurangkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah van diesel mengeluarkan 0,25 kg CO2 per km dari knalpotnya. Van listrik nol emisi knalpot. Untuk rute 80 km per hari, berapa kg CO2 knalpot yang dihindari dengan beralih ke listrik?",
        answer: 20,
        tolerance: 0.5,
        suffix: "kg CO₂",
        solution:
          "Diesel: 80 km x 0,25 = 20 kg CO2. Van listrik knalpotnya 0, jadi yang dihindari = <strong>20 kg CO2 per hari</strong> (emisi pembangkit listrik dihitung terpisah).",
        hint: "Kalikan jarak dengan faktor emisi knalpot diesel.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap langkah logistik hijau dengan manfaat utamanya.",
        pairs: [
          { left: "Geser muatan dari truk ke kereta", right: "Emisi per ton-km jauh lebih rendah" },
          { left: "Konsolidasi pesanan satu rute", right: "Tingkat keterisian naik, perjalanan berkurang" },
          { left: "Van listrik untuk last mile", right: "Nol emisi knalpot di kota" },
          { left: "Rute pengiriman dioptimalkan", right: "Jarak tempuh total lebih pendek" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Transportasi sering jadi sumber emisi terbesar dalam rantai pasok.",
          "Tiga pengungkit utama: moda rendah emisi, konsolidasi muatan, dan elektrifikasi.",
          "Tingkat keterisian sangat menentukan: truk setengah kosong memboroskan emisi per paket.",
          "Kendaraan listrik paling cocok untuk last mile perkotaan yang jaraknya pendek.",
          "Langkah hijau logistik biasanya juga memangkas biaya bahan bakar dan operasional.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa konsolidasi muatan menurunkan emisi per paket?",
            options: [
              "Karena truk jadi lebih ringan",
              "Karena emisi total dibagi ke lebih banyak paket dalam satu perjalanan",
              "Karena bahan bakar jadi gratis",
              "Karena paket jadi lebih kecil",
            ],
            answer: 1,
            explain: "Mengisi penuh dan menggabungkan kiriman menurunkan emisi per unit barang.",
          },
          {
            q: "Jenis pengiriman apa yang paling cocok untuk kendaraan listrik?",
            options: [
              "Pengiriman antarbenua",
              "Last mile perkotaan jarak pendek",
              "Angkutan laut",
              "Penerbangan kargo",
            ],
            answer: 1,
            explain: "Last mile kota berjarak pendek dan kembali ke depo untuk mengisi daya, ideal untuk listrik.",
          },
          {
            q: "Manakah moda dengan emisi per ton-km paling rendah?",
            options: ["Pesawat", "Truk", "Kapal laut", "Sepeda motor"],
            answer: 2,
            explain: "Kapal laut umumnya paling efisien per ton-km untuk muatan besar.",
          },
          {
            q: "Konsolidasi menurunkan perjalanan dari 200 ke 150, tiap perjalanan 2 kg CO2. Hemat per hari?",
            options: ["50 kg", "100 kg", "200 kg", "300 kg"],
            answer: 1,
            explain: "400 - 300 = 100 kg CO2 dihemat per hari.",
          },
          {
            q: "Apa yang dimaksud nol emisi knalpot pada van listrik?",
            options: [
              "Tidak ada emisi sama sekali di seluruh rantai energi",
              "Tidak ada gas buang dari kendaraan, emisi pembangkit listrik dihitung terpisah",
              "Van tidak memakai energi",
              "Van hanya boleh berjalan malam hari",
            ],
            answer: 1,
            explain: "Knalpotnya nol emisi; jejak listriknya tergantung sumber pembangkit dan dihitung terpisah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "life-cycle-assessment",
    levelId: "keberlanjutan",
    order: 5,
    title: "Life Cycle Assessment (LCA): Jejak dari Hulu ke Akhir Pakai",
    summary:
      "Produk yang tampak hijau di toko bisa boros di tempat lain. LCA menghitung jejak lingkungan sepanjang hidup produk, dari bahan baku, produksi, distribusi, pakai, sampai akhir pakai.",
    durationMin: 15,
    tags: ["keberlanjutan", "LCA", "siklus hidup", "cradle to grave", "jejak lingkungan"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Life Cycle Assessment (LCA)</strong> adalah metode menghitung dampak lingkungan sebuah produk di sepanjang hidupnya, bukan hanya saat dibuat. Tahapannya umumnya: <strong>bahan baku</strong> (hulu), <strong>produksi</strong>, <strong>distribusi</strong>, <strong>penggunaan</strong>, dan <strong>akhir pakai</strong>. Pendekatan ini sering disebut <strong>cradle to grave</strong> (dari lahir sampai mati), atau <strong>cradle to cradle</strong> bila produk didaur ulang jadi produk baru.",
      },
      {
        type: "paragraph",
        html: "LCA penting karena mencegah kita salah fokus. Sebuah produk bisa terlihat ramah di rak toko, tetapi ternyata paling boros saat dipakai konsumen, atau saat bahan bakunya ditambang. Tanpa melihat seluruh siklus, kita bisa memindahkan masalah, bukan menyelesaikannya. Inilah yang disebut <strong>burden shifting</strong>: menutup satu dampak tetapi membuka dampak lebih besar di tahap lain.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trailer_Truck_5.jpg?width=400",
        alt: "Truk trailer pengangkut barang di jalan raya",
        caption: "Distribusi hanyalah satu tahap dalam siklus hidup produk; LCA menimbang dampak dari bahan baku sampai akhir pakai.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Cradle to grave",
        html: "LCA menelusuri lima tahap: <strong>bahan baku, produksi, distribusi, penggunaan, akhir pakai</strong>. Tujuannya menemukan tahap mana yang dampaknya terbesar, yang sering disebut <strong>hotspot</strong>, agar perbaikan diarahkan ke sana.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Awas burden shifting",
        html: "Mengganti bahan agar produksi lebih bersih, tetapi membuat produk jadi boros energi saat dipakai, bisa memperburuk total dampak. LCA mencegah memindahkan beban dari satu tahap ke tahap lain.",
      },
      {
        type: "video",
        comp: "GreenSupplyChainVideo",
        title: "Menelusuri Siklus Hidup Produk",
        caption: "Dari bahan baku hingga akhir pakai, tiap tahap menyumbang jejak lingkungan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Sebaran Jejak Karbon Sepanjang Siklus Hidup Mesin Cuci (ilustrasi)",
        unit: "% dari total jejak hidup",
        source: "ilustrasi edukatif, pola khas barang elektronik berenergi",
        note: "Untuk alat yang boros listrik saat dipakai, tahap penggunaan justru menjadi hotspot terbesar, bukan produksi.",
        data: [
          { label: "Bahan baku", value: 15, color: "#a78bfa" },
          { label: "Produksi", value: 20, color: "#60a5fa" },
          { label: "Distribusi", value: 5, color: "#22d3ee" },
          { label: "Penggunaan", value: 55, color: "#f87171" },
          { label: "Akhir pakai", value: 5, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tas belanja kain vs kantong plastik",
        html: "Tas kain katun terlihat lebih hijau daripada kantong plastik sekali pakai. Tetapi LCA mengungkap bahwa membuat tas katun butuh banyak air dan energi, sehingga dampak produksinya jauh lebih tinggi per lembar. Agar lebih baik daripada kantong plastik, tas katun perlu dipakai ulang <strong>puluhan hingga ratusan kali</strong>. Pelajarannya bukan plastik selalu menang, melainkan bahwa <strong>jumlah pemakaian ulang</strong> menentukan siapa yang sebenarnya lebih ramah. Tanpa LCA, kita bisa salah pilih.",
      },
      {
        type: "case",
        title: "Sejarah: Standar ISO 14040 untuk LCA (sekitar 1997)",
        html: "Metode LCA dipakai sejak 1960-an untuk membandingkan kemasan, tetapi tiap pihak memakai cara berbeda sehingga hasilnya sulit dipercaya. Sekitar <strong>1997</strong>, Organisasi Standardisasi Internasional menerbitkan kerangka <strong>ISO 14040</strong> yang membakukan tahapan LCA: penetapan tujuan dan ruang lingkup, inventarisasi, penilaian dampak, dan interpretasi. Standar ini mengubah LCA dari klaim sepihak menjadi metode yang bisa diaudit dan dibandingkan, fondasi bagi label lingkungan yang kredibel sampai hari ini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mesin cuci memiliki total jejak hidup 1.000 kg CO2. Tahap penggunaan menyumbang 55%. Berapa kg CO2 berasal dari tahap penggunaan?",
        answer: 550,
        tolerance: 1,
        suffix: "kg CO₂",
        solution:
          "55% x 1.000 = <strong>550 kg CO2</strong>. Karena penggunaan adalah hotspot, memperbaiki efisiensi listrik mesin memberi dampak terbesar.",
        hint: "Kalikan total dengan persentase tahap penggunaan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Membuat satu tas katun setara dampak 100 kantong plastik. Jika tas katun dipakai 200 kali, berapa kantong plastik yang setara untuk tiap satu kali pemakaian tas katun?",
        answer: 0.5,
        tolerance: 0.05,
        suffix: "kantong",
        solution:
          "100 kantong dibagi 200 kali pakai = <strong>0,5 kantong per pemakaian</strong>. Setelah 100 kali pakai, tas katun baru benar-benar lebih hemat daripada plastik sekali pakai.",
        hint: "Bagi dampak pembuatan tas dengan jumlah pemakaian.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap aktivitas ke tahap siklus hidup LCA yang sesuai.",
        buckets: ["Bahan baku", "Produksi", "Penggunaan", "Akhir pakai"],
        items: [
          { text: "Menambang bijih logam untuk rangka", bucket: "Bahan baku" },
          { text: "Merakit komponen di pabrik", bucket: "Produksi" },
          { text: "Listrik yang dipakai alat selama bertahun-tahun", bucket: "Penggunaan" },
          { text: "Mendaur ulang atau membuang produk rusak", bucket: "Akhir pakai" },
          { text: "Menanam dan memanen kapas untuk kain", bucket: "Bahan baku" },
          { text: "Air dan deterjen tiap kali mencuci", bucket: "Penggunaan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "LCA menghitung dampak lingkungan sepanjang hidup produk, dari bahan baku sampai akhir pakai.",
          "Pendekatan cradle to grave mencegah kita salah fokus hanya pada satu tahap.",
          "Tiap produk punya hotspot berbeda; untuk alat boros listrik, tahap penggunaan paling besar.",
          "Tanpa LCA bisa terjadi burden shifting: memindahkan dampak, bukan menguranginya.",
          "Standar ISO 14040 (sekitar 1997) membuat LCA bisa diaudit dan dibandingkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dihitung Life Cycle Assessment?",
            options: [
              "Hanya emisi saat produk dibuat",
              "Dampak lingkungan sepanjang hidup produk dari hulu sampai akhir pakai",
              "Harga jual produk",
              "Hanya emisi saat produk dibuang",
            ],
            answer: 1,
            explain: "LCA menelusuri seluruh siklus, bukan satu tahap saja.",
          },
          {
            q: "Apa arti cradle to grave?",
            options: [
              "Dari pabrik ke gudang",
              "Dari lahir (bahan baku) sampai mati (akhir pakai) produk",
              "Dari toko ke konsumen",
              "Dari hulu ke pabrik saja",
            ],
            answer: 1,
            explain: "Cradle to grave mencakup seluruh tahap hidup produk.",
          },
          {
            q: "Untuk alat yang boros listrik saat dipakai, tahap mana biasanya jadi hotspot terbesar?",
            options: ["Bahan baku", "Produksi", "Penggunaan", "Akhir pakai"],
            answer: 2,
            explain: "Konsumsi listrik bertahun-tahun membuat tahap penggunaan dominan.",
          },
          {
            q: "Apa itu burden shifting?",
            options: [
              "Memindahkan gudang ke kota lain",
              "Menutup satu dampak tetapi membuka dampak lebih besar di tahap lain",
              "Mengganti kurir",
              "Menaikkan harga produk",
            ],
            answer: 1,
            explain: "Tanpa melihat seluruh siklus, perbaikan bisa sekadar memindahkan beban.",
          },
          {
            q: "Mesin cuci berjejak 1.000 kg CO2, tahap penggunaan 55%. Berapa kg dari penggunaan?",
            options: ["55 kg", "155 kg", "550 kg", "1.000 kg"],
            answer: 2,
            explain: "55% x 1.000 = 550 kg CO2.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "ethical-sourcing-ketertelusuran-sosial",
    levelId: "keberlanjutan",
    order: 6,
    title: "Ethical Sourcing & Ketertelusuran Sosial",
    summary:
      "Keberlanjutan bukan hanya soal karbon. Pelajari ethical sourcing: memastikan barang dibuat tanpa kerja paksa, dengan kondisi kerja layak, dan rantai pasok yang bisa ditelusuri sampai ke pekerjanya.",
    durationMin: 15,
    tags: ["keberlanjutan", "ethical sourcing", "ketertelusuran", "kerja layak", "hak pekerja"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Ethical sourcing</strong> adalah memastikan barang yang kita beli dibuat dengan menghormati manusia: tanpa <strong>kerja paksa</strong> dan <strong>perbudakan modern</strong>, tanpa pekerja anak, dengan upah dan jam kerja yang layak, serta lingkungan kerja yang aman. Ini adalah sisi <strong>Social</strong> dari ESG yang paling sering tersembunyi, karena pelanggaran biasanya terjadi jauh di hulu, di pemasok lapis kedua dan ketiga yang tak terlihat dari kantor pusat.",
      },
      {
        type: "paragraph",
        html: "Kunci ethical sourcing adalah <strong>ketertelusuran sosial</strong>: kemampuan menelusuri dari produk akhir kembali ke pabrik, kebun, atau tambang tempat ia berasal, lengkap dengan siapa yang bekerja di sana dan dalam kondisi apa. Tanpa ketertelusuran, sebuah merek bisa tanpa sadar menjual barang hasil kerja paksa. Audit pemasok, kode etik, dan teknologi pelacakan membantu menutup celah ini.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg?width=400",
        alt: "Kapal kontainer mengangkut peti kemas lintas negara",
        caption: "Barang melintasi banyak negara dan tangan; ketertelusuran sosial menelusuri jejaknya kembali sampai ke pekerja di hulu.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Lihat sampai ke hulu",
        html: "Risiko sosial terbesar sering ada di <strong>lapis pemasok yang dalam</strong>: bukan pabrik perakit yang diaudit rutin, tetapi pemasok bahan mentahnya. Ketertelusuran sosial berarti memetakan rantai pasok sampai ke titik asal, bukan berhenti di lapis pertama.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Perbudakan modern itu nyata",
        html: "<strong>Perbudakan modern</strong> mencakup kerja paksa, jeratan utang, dan perdagangan manusia. Organisasi Buruh Internasional memperkirakan puluhan juta orang terjebak di dalamnya secara global. Rantai pasok yang panjang dan tidak transparan adalah tempat ia bersembunyi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Alat ethical sourcing",
        html: "Tiga alat utama: <strong>kode etik pemasok</strong> (aturan tertulis yang wajib dipatuhi), <strong>audit pihak ketiga</strong> (verifikasi independen di lapangan), dan <strong>ketertelusuran</strong> (peta rantai pasok sampai ke hulu).",
      },
      {
        type: "video",
        comp: "GreenSupplyChainVideo",
        title: "Menelusuri Rantai Pasok ke Hulu",
        caption: "Ketertelusuran memastikan tiap tahap rantai pasok bisa diperiksa kondisi kerjanya.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jumlah Pemasok yang Bisa Ditelusuri per Lapis (ilustrasi)",
        unit: "% pemasok teridentifikasi",
        source: "ilustrasi edukatif, pola umum keterbatasan visibilitas",
        note: "Visibilitas merosot tajam makin dalam ke hulu; di sanalah justru risiko sosial paling besar.",
        data: [
          { label: "Lapis 1 (perakit)", value: 95, color: "#34d399" },
          { label: "Lapis 2", value: 60, color: "#60a5fa" },
          { label: "Lapis 3", value: 30, color: "#fbbf24" },
          { label: "Lapis 4+ (bahan mentah)", value: 12, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ketertelusuran kebun sawit kecil",
        html: "Sebuah merek makanan ingin memastikan sawitnya bebas pekerja anak. Pabrik pengolahnya (lapis 1) mudah diaudit, tetapi sawit berasal dari ribuan <strong>petani kecil</strong> (lapis 3 dan 4) yang menjual ke pengepul. Merek itu memetakan jaringan pengepul dan mendaftarkan koordinat kebun lewat aplikasi. Dari target 5.000 petani, pada tahun pertama baru <strong>1.500 petani</strong> yang terdata lengkap, yaitu 30%. Angka ini jujur menggambarkan betapa sulitnya ketertelusuran ke hulu, sekaligus menjadi titik awal perbaikan bertahap.",
      },
      {
        type: "case",
        title: "Sejarah: Runtuhnya Rana Plaza (2013)",
        html: "Pada <strong>24 April 2013</strong>, gedung <strong>Rana Plaza</strong> di Bangladesh yang berisi sejumlah pabrik garmen runtuh dan menewaskan sekitar <strong>1.130 pekerja</strong>, sebagian besar perempuan. Sehari sebelumnya retakan sudah terlihat, tetapi pekerja tetap disuruh masuk. Tragedi ini mengguncang dunia karena banyak merek pakaian global ternyata memesan dari pabrik di sana tanpa tahu kondisinya. Rana Plaza menjadi titik balik gerakan ethical sourcing: lahir kesepakatan keselamatan pabrik dan dorongan kuat agar merek menelusuri serta bertanggung jawab atas seluruh rantai pasoknya, bukan hanya lapis pertama.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 5.000 petani sawit yang menjadi target, 1.500 sudah terdata lengkap pada tahun pertama. Berapa persen petani yang sudah tertelusur?",
        answer: 30,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "1.500 / 5.000 x 100% = <strong>30%</strong>. Sisanya 70% masih perlu dipetakan, menunjukkan tantangan ketertelusuran ke hulu.",
        hint: "Bagi jumlah petani terdata dengan total target, lalu kali 100%.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah merek mengaudit 80 pemasok lapis 1 dan menemukan 6 melanggar standar kerja. Berapa persen pemasok yang melanggar?",
        answer: 7.5,
        tolerance: 0.2,
        suffix: "%",
        solution:
          "6 / 80 x 100% = <strong>7,5%</strong>. Temuan ini memicu rencana perbaikan dan audit ulang.",
        hint: "Bagi jumlah pelanggar dengan total yang diaudit, lalu kali 100%.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap alat atau istilah ethical sourcing dengan maknanya.",
        pairs: [
          { left: "Kode etik pemasok", right: "Aturan tertulis yang wajib dipatuhi pemasok" },
          { left: "Audit pihak ketiga", right: "Verifikasi independen kondisi kerja di lapangan" },
          { left: "Ketertelusuran sosial", right: "Memetakan rantai pasok sampai ke titik asal" },
          { left: "Perbudakan modern", right: "Kerja paksa, jeratan utang, dan perdagangan manusia" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Ethical sourcing memastikan barang dibuat tanpa kerja paksa dan dengan kondisi kerja layak.",
          "Ini adalah sisi Social dari ESG yang sering tersembunyi di lapis pemasok yang dalam.",
          "Ketertelusuran sosial memetakan rantai pasok sampai ke pabrik, kebun, atau tambang asal.",
          "Alat utamanya: kode etik pemasok, audit pihak ketiga, dan teknologi pelacakan.",
          "Tragedi Rana Plaza (2013) menjadi titik balik tanggung jawab merek atas seluruh rantai pasoknya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fokus utama ethical sourcing?",
            options: [
              "Menekan harga pembelian serendah mungkin",
              "Memastikan barang dibuat dengan menghormati hak dan keselamatan pekerja",
              "Mempercepat pengiriman",
              "Menambah jumlah pemasok",
            ],
            answer: 1,
            explain: "Ethical sourcing menyangkut kondisi kerja layak dan bebas kerja paksa.",
          },
          {
            q: "Mengapa risiko sosial sering paling besar di lapis pemasok yang dalam?",
            options: [
              "Karena di sana paling sering diaudit",
              "Karena visibilitas merek paling rendah dan jauh dari pengawasan",
              "Karena upah di sana paling tinggi",
              "Karena tidak ada pekerja di sana",
            ],
            answer: 1,
            explain: "Makin ke hulu, makin sulit ditelusuri, sehingga pelanggaran mudah tersembunyi.",
          },
          {
            q: "Apa yang dimaksud perbudakan modern?",
            options: [
              "Pekerjaan dengan jam kerja panjang tapi dibayar",
              "Kerja paksa, jeratan utang, dan perdagangan manusia",
              "Kerja jarak jauh",
              "Pekerjaan musiman",
            ],
            answer: 1,
            explain: "Perbudakan modern mencakup kerja paksa, jeratan utang, dan perdagangan manusia.",
          },
          {
            q: "Apa pelajaran utama dari tragedi Rana Plaza (2013)?",
            options: [
              "Merek hanya perlu mengaudit pabrik perakit",
              "Merek harus menelusuri dan bertanggung jawab atas seluruh rantai pasoknya",
              "Keselamatan pabrik tidak penting",
              "Pekerja garmen tidak perlu dilindungi",
            ],
            answer: 1,
            explain: "Rana Plaza mendorong tanggung jawab merek atas kondisi kerja di seluruh rantai pasok.",
          },
          {
            q: "Dari 80 pemasok yang diaudit, 6 melanggar standar. Berapa persen pelanggar?",
            options: ["6%", "7,5%", "8%", "12%"],
            answer: 1,
            explain: "6 / 80 x 100% = 7,5%.",
          },
        ],
      },
    ],
  },
];
