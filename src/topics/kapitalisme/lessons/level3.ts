import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "pasar-tangan-tak-tampak",
    levelId: "pasar",
    order: 1,
    title: "Pasar & Tangan Tak Tampak",
    summary:
      "Bagaimana jutaan keputusan egois bisa menghasilkan keteraturan tanpa komando? Pelajari penawaran, permintaan, dan metafora tangan tak tampak Adam Smith.",
    durationMin: 14,
    tags: ["pasar", "harga", "tangan tak tampak", "penawaran permintaan"],
    blocks: [
      {
        type: "paragraph",
        html: "Di pasar, <strong>harga</strong> bukan sekadar angka, melainkan <strong>sinyal</strong>. Harga tinggi memberi tahu produsen untuk membuat lebih banyak dan konsumen untuk berhemat. Harga rendah melakukan sebaliknya. Lewat sinyal ini, pasar terus menyesuaikan diri menuju keseimbangan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Hukum penawaran & permintaan",
        html: "<strong>Permintaan</strong> cenderung turun saat harga naik; <strong>penawaran</strong> cenderung naik saat harga naik. Titik temu keduanya adalah <strong>harga keseimbangan</strong>, tempat jumlah yang ingin dibeli sama dengan yang ingin dijual.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Tetapkan harga sebuah barang, lalu lihat bagaimana surplus atau kelangkaan mendorong harga kembali ke titik seimbang, tanpa ada yang memerintah.",
      },
      { type: "widget", widget: "SimulatorTanganTakTampak" },
      {
        type: "video",
        comp: "TanganTakTampak",
        title: "Tangan Tak Tampak",
        caption: "Kepentingan pribadi banyak orang menata pasar tanpa ada satu pihak yang mengomando.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Pasar_Terapung.jpg?width=400",
        alt: "Pedagang di pasar terapung dengan perahu kecil menjajakan dagangan",
        caption: "Pasar terapung: tawar-menawar harga yang menyeimbangkan penawaran dan permintaan secara langsung.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Penawaran, Permintaan & Titik Keseimbangan (ilustrasi)",
        unit: "jumlah barang",
        source: "ilustrasi edukatif hukum penawaran-permintaan",
        note: "Saat harga naik, permintaan menurun dan penawaran meningkat; keduanya bertemu di harga keseimbangan.",
        data: [
          { label: "Harga rendah", value: 90 },
          { label: "Harga sedang", value: 64 },
          { label: "Harga seimbang", value: 50 },
          { label: "Harga tinggi", value: 30 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Harga cabai saat panen gagal",
        html: "Ketika cuaca buruk merusak panen, pasokan <strong>cabai</strong> turun drastis. Tanpa ada yang memerintah, harga melonjak. Harga tinggi ini mengirim dua sinyal sekaligus: konsumen mengurangi pemakaian cabai, dan petani terdorong menanam lebih banyak untuk musim berikutnya. Beberapa bulan kemudian pasokan pulih dan harga turun. Pasar mengoreksi dirinya sendiri lewat sinyal harga, meski prosesnya bisa terasa menyakitkan bagi konsumen.",
      },
      {
        type: "case",
        title: "Sejarah: Frasa 'tangan tak tampak' Adam Smith",
        html: "Dalam <em>The Wealth of Nations</em> (<strong>1776</strong>), Adam Smith menulis kalimat yang kini termasyhur: kita mendapatkan makan malam bukan karena kebaikan hati tukang daging, pembuat bir, atau pembuat roti, melainkan karena mereka mengejar <strong>kepentingan mereka sendiri</strong>. Dari kepentingan pribadi yang bertemu di pasar, lahir keteraturan yang seolah diatur sebuah <strong>tangan tak tampak</strong>. Smith tidak berarti pasar selalu sempurna, tetapi ia menunjukkan bagaimana koordinasi bisa muncul tanpa komando.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada harga Rp20.000, permintaan cabai 60 kg dan penawaran 40 kg. Berapa kg kekurangannya (kelangkaan) di pasar?",
        answer: 20,
        tolerance: 0,
        suffix: "kg",
        solution:
          "Kelangkaan = permintaan - penawaran = 60 - 40 = <strong>20 kg</strong>. Kekurangan ini mendorong harga naik sampai permintaan dan penawaran kembali seimbang.",
        hint: "Kurangkan penawaran dari permintaan.",
      },
      {
        type: "classifyExercise",
        prompt: "Saat harga sebuah barang NAIK, golongkan dampaknya.",
        buckets: ["Permintaan", "Penawaran"],
        items: [
          { text: "Konsumen membeli lebih sedikit", bucket: "Permintaan" },
          { text: "Produsen terdorong memproduksi lebih banyak", bucket: "Penawaran" },
          { text: "Sebagian pembeli beralih ke barang pengganti", bucket: "Permintaan" },
          { text: "Penjual baru tertarik masuk pasar", bucket: "Penawaran" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Harga adalah sinyal yang mengarahkan keputusan produsen dan konsumen.",
          "Permintaan turun dan penawaran naik saat harga naik; keduanya bertemu di harga keseimbangan.",
          "Kelangkaan mendorong harga naik, surplus mendorong harga turun.",
          "Tangan tak tampak Adam Smith: keteraturan muncul dari kepentingan pribadi di pasar.",
          "Pasar mengoreksi diri sendiri, meski prosesnya tidak selalu mulus atau adil.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi utama harga dalam pasar?",
            options: ["Sekadar pajak", "Sinyal yang mengarahkan produsen dan konsumen", "Hiasan", "Ditetapkan negara"],
            answer: 1,
            explain: "Harga memberi informasi yang mengoordinasikan keputusan jutaan orang.",
          },
          {
            q: "Saat harga naik, apa yang umumnya terjadi pada permintaan?",
            options: ["Naik", "Turun", "Tetap", "Hilang"],
            answer: 1,
            explain: "Hukum permintaan: semakin tinggi harga, semakin sedikit yang diminta.",
          },
          {
            q: "Apa itu harga keseimbangan?",
            options: [
              "Harga termahal",
              "Harga saat jumlah diminta sama dengan jumlah ditawarkan",
              "Harga yang ditetapkan pemerintah",
              "Harga nol",
            ],
            answer: 1,
            explain: "Di titik keseimbangan, permintaan dan penawaran sama besar.",
          },
          {
            q: "Apa maksud 'tangan tak tampak' Adam Smith?",
            options: [
              "Pemerintah diam-diam mengatur harga",
              "Keteraturan pasar muncul dari kepentingan pribadi tanpa komando",
              "Tangan pencuri di pasar",
              "Bank sentral mengatur uang",
            ],
            answer: 1,
            explain: "Kepentingan pribadi yang bertemu di pasar menghasilkan koordinasi tanpa pusat.",
          },
          {
            q: "Permintaan 60 kg dan penawaran 40 kg menimbulkan?",
            options: ["Surplus 20 kg", "Kelangkaan 20 kg", "Keseimbangan", "Surplus 100 kg"],
            answer: 1,
            explain: "Permintaan melebihi penawaran 20 kg, sehingga terjadi kelangkaan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pasar-hukum-permintaan",
    levelId: "pasar",
    order: 2,
    title: "Hukum Permintaan",
    summary:
      "Mengapa semakin mahal sebuah barang, semakin sedikit yang ingin dibeli? Pahami kurva permintaan, faktor penggesernya, dan elastisitas.",
    durationMin: 14,
    tags: ["pasar", "permintaan", "elastisitas", "kurva"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Permintaan</strong> adalah jumlah barang yang ingin dan mampu dibeli konsumen pada berbagai tingkat harga. <strong>Hukum permintaan</strong> menyatakan: bila harga naik, jumlah yang diminta cenderung turun, dan sebaliknya. Hubungan terbalik ini membuat <strong>kurva permintaan</strong> melandai dari kiri atas ke kanan bawah.",
      },
      {
        type: "paragraph",
        html: "Penyebabnya dua: <strong>efek substitusi</strong> (saat suatu barang mahal, orang beralih ke pengganti) dan <strong>efek pendapatan</strong> (harga naik membuat daya beli riil berkurang). Keduanya menekan jumlah yang diminta saat harga naik.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Hukum permintaan",
        html: "Dengan faktor lain tetap, <strong>harga naik &rarr; jumlah diminta turun</strong>. Yang bergerak di sepanjang kurva adalah <em>jumlah yang diminta</em>; sedangkan perubahan selera, pendapatan, atau harga barang lain menggeser seluruh <em>kurva permintaan</em>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Geser kurva vs gerak di kurva",
        html: "Perubahan <strong>harga barang itu sendiri</strong> hanya menggerakkan titik di sepanjang kurva. Perubahan <strong>pendapatan, selera, jumlah pembeli, atau harga barang terkait</strong> menggeser seluruh kurva ke kanan (naik) atau kiri (turun).",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba kalkulatornya",
        html: "Hitung elastisitas harga: ubah harga dan jumlah, lalu lihat apakah permintaan barang itu elastis (peka) atau inelastis (kaku).",
      },
      { type: "widget", widget: "KalkulatorElastisitas" },
      {
        type: "video",
        comp: "PermintaanPenawaran",
        title: "Permintaan & Penawaran",
        caption: "Kurva permintaan melandai turun: makin mahal, makin sedikit yang ingin dibeli.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak supermarket penuh produk dengan label harga",
        caption: "Setiap label harga di rak menguji hukum permintaan: harga lebih murah biasanya menarik lebih banyak pembeli.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kurva Permintaan: Harga vs Jumlah Diminta (ilustrasi)",
        unit: "jumlah diminta",
        source: "ilustrasi edukatif hukum permintaan",
        note: "Saat harga naik dari rendah ke tinggi, jumlah yang ingin dibeli konsumen menurun.",
        data: [
          { label: "Rp4.000", value: 100 },
          { label: "Rp6.000", value: 75 },
          { label: "Rp8.000", value: 50 },
          { label: "Rp10.000", value: 30 },
          { label: "Rp12.000", value: 15 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kopi sachet vs kopi premium",
        html: "Sebuah warung menjual kopi sachet Rp3.000 per gelas dan terjual 200 gelas sehari. Saat harga dinaikkan ke Rp4.000, penjualan turun ke 150 gelas karena banyak pembeli beralih ke teh atau kopi tetangga (efek substitusi). Karena permintaan kopi sachet cukup <strong>elastis</strong>, kenaikan harga 33% justru bisa menurunkan total pendapatan bila penurunan jumlah terlalu besar.",
      },
      {
        type: "case",
        title: "Sejarah: Krisis minyak 1973 dan permintaan bensin",
        html: "Saat embargo minyak <strong>1973</strong> melambungkan harga bensin di Amerika Serikat, masyarakat baru menyadari bahwa permintaan bensin jangka pendek sangat <strong>inelastis</strong>: orang tetap perlu berkendara ke tempat kerja, sehingga jumlah yang dibeli turun jauh lebih kecil daripada lonjakan harganya. Namun dalam jangka panjang permintaan menjadi lebih elastis, terbukti dari munculnya mobil hemat bahan bakar pada akhir 1970-an.",
      },
      {
        type: "calcExercise",
        prompt:
          "Harga naik dari Rp8.000 ke Rp10.000 (naik 25%), dan jumlah diminta turun dari 50 ke 40 unit (turun 20%). Berapa nilai elastisitas harga permintaan (absolut)?",
        answer: 0.8,
        tolerance: 0.05,
        solution:
          "Elastisitas = persentase perubahan jumlah dibagi persentase perubahan harga = 20% / 25% = <strong>0,8</strong>. Karena di bawah 1, permintaan barang ini <strong>inelastis</strong> (kurang peka terhadap harga).",
        hint: "Bagi persentase perubahan jumlah dengan persentase perubahan harga.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan: menggerakkan titik DI SEPANJANG kurva permintaan, atau MENGGESER seluruh kurva?",
        buckets: ["Gerak di kurva", "Geser kurva"],
        items: [
          { text: "Harga barang itu sendiri naik", bucket: "Gerak di kurva" },
          { text: "Pendapatan konsumen meningkat", bucket: "Geser kurva" },
          { text: "Tren membuat barang jadi populer", bucket: "Geser kurva" },
          { text: "Harga turun karena diskon barang itu", bucket: "Gerak di kurva" },
          { text: "Harga barang pengganti naik", bucket: "Geser kurva" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Hukum permintaan: harga naik membuat jumlah yang diminta turun.",
          "Efek substitusi dan efek pendapatan menjelaskan mengapa kurva melandai turun.",
          "Perubahan harga barang itu sendiri menggerakkan titik di kurva; faktor lain menggeser kurva.",
          "Elastisitas mengukur seberapa peka jumlah diminta terhadap perubahan harga.",
          "Barang inelastis (elastisitas di bawah 1) kurang peka; barang elastis (di atas 1) sangat peka.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum permintaan menyatakan bahwa saat harga naik, jumlah diminta?",
            options: ["Naik", "Turun", "Tetap", "Selalu nol"],
            answer: 1,
            explain: "Ada hubungan terbalik antara harga dan jumlah yang diminta.",
          },
          {
            q: "Apa yang MENGGESER seluruh kurva permintaan, bukan sekadar gerak di kurva?",
            options: ["Harga barang itu sendiri", "Kenaikan pendapatan konsumen", "Diskon barang itu", "Tidak ada"],
            answer: 1,
            explain: "Pendapatan, selera, dan harga barang lain menggeser kurva; harga barang itu sendiri hanya menggerakkan titik.",
          },
          {
            q: "Permintaan disebut inelastis bila nilai elastisitasnya?",
            options: ["Di bawah 1", "Tepat 100", "Di atas 1", "Negatif tak hingga"],
            answer: 0,
            explain: "Elastisitas di bawah 1 berarti jumlah kurang peka terhadap harga.",
          },
          {
            q: "Mengapa konsumen membeli lebih sedikit saat harga naik?",
            options: [
              "Hanya karena dilarang",
              "Efek substitusi dan efek pendapatan",
              "Karena harga selalu salah",
              "Karena pemerintah memaksa",
            ],
            answer: 1,
            explain: "Orang beralih ke pengganti dan daya beli riilnya berkurang.",
          },
          {
            q: "Harga naik 25% dan jumlah diminta turun 20%. Elastisitasnya?",
            options: ["1,25", "0,8", "5", "20"],
            answer: 1,
            explain: "20% dibagi 25% sama dengan 0,8, berarti inelastis.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pasar-hukum-penawaran",
    levelId: "pasar",
    order: 3,
    title: "Hukum Penawaran",
    summary:
      "Mengapa produsen mau menjual lebih banyak saat harga tinggi? Pahami kurva penawaran, biaya produksi, dan apa yang menggeser pasokan.",
    durationMin: 14,
    tags: ["pasar", "penawaran", "produksi", "kurva"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Penawaran</strong> adalah jumlah barang yang ingin dan mampu dijual produsen pada berbagai tingkat harga. <strong>Hukum penawaran</strong> menyatakan: bila harga naik, jumlah yang ditawarkan cenderung naik. Hubungan searah ini membuat <strong>kurva penawaran</strong> menanjak dari kiri bawah ke kanan atas.",
      },
      {
        type: "paragraph",
        html: "Alasannya sederhana: harga yang lebih tinggi membuat produksi tambahan menjadi <strong>menguntungkan</strong>, sehingga produsen lama menambah output dan produsen baru tertarik masuk. Sebaliknya, harga rendah membuat sebagian penjual berhenti karena tak menutup biaya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Hukum penawaran",
        html: "Dengan faktor lain tetap, <strong>harga naik &rarr; jumlah ditawarkan naik</strong>. Perubahan harga barang itu menggerakkan titik di sepanjang kurva; perubahan <em>biaya produksi, teknologi, pajak, atau jumlah penjual</em> menggeser seluruh kurva penawaran.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Pasokan bisa ditahan",
        html: "Penawaran tak selalu mengikuti niat baik. Produsen dengan kuasa pasar bisa sengaja <strong>menahan pasokan</strong> agar harga naik. Inilah yang membedakan pasar kompetitif dari pasar yang dikuasai segelintir pemain.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser harga dan biaya produksi, lalu lihat bagaimana jumlah yang ditawarkan produsen ikut berubah.",
      },
      { type: "widget", widget: "SimulatorKeseimbanganPasar" },
      {
        type: "video",
        comp: "PergeseranKurva",
        title: "Pergeseran Kurva",
        caption: "Biaya produksi turun menggeser kurva penawaran ke kanan: lebih banyak ditawarkan pada setiap harga.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Pasar_Terapung.jpg?width=400",
        alt: "Penjual di pasar terapung membawa hasil panen untuk ditawarkan",
        caption: "Penjual membawa lebih banyak dagangan saat harga sedang bagus: hukum penawaran di pasar nyata.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kurva Penawaran: Harga vs Jumlah Ditawarkan (ilustrasi)",
        unit: "jumlah ditawarkan",
        source: "ilustrasi edukatif hukum penawaran",
        note: "Saat harga naik, produsen terdorong menawarkan lebih banyak karena produksi tambahan menjadi menguntungkan.",
        data: [
          { label: "Rp4.000", value: 20 },
          { label: "Rp6.000", value: 45 },
          { label: "Rp8.000", value: 70 },
          { label: "Rp10.000", value: 100 },
          { label: "Rp12.000", value: 130 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Petani sayur saat harga melonjak",
        html: "Saat harga tomat naik dari Rp6.000 menjadi Rp12.000 per kg, petani yang semula menanam seadanya kini memperluas lahan dan menambah pupuk. Pada Rp12.000, mereka bersedia menjual <strong>130 kg</strong>, jauh di atas 45 kg saat harga Rp6.000. Harga tinggi mengubah perhitungan untung-rugi sehingga produksi tambahan jadi masuk akal.",
      },
      {
        type: "case",
        title: "Sejarah: OPEC menahan pasokan minyak 1973",
        html: "Pada Oktober <strong>1973</strong>, negara-negara anggota <strong>OPEC</strong> sepakat memangkas dan mengembargo ekspor minyak ke sejumlah negara Barat. Dengan menahan pasokan (menggeser kurva penawaran ke kiri), harga minyak dunia melonjak sekitar empat kali lipat dalam beberapa bulan. Peristiwa ini menunjukkan kekuatan sisi penawaran: ketika pasokan ditahan sementara permintaan kaku, harga melesat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada harga Rp12.000, produsen menawarkan 130 kg sementara konsumen hanya meminta 90 kg. Berapa kg surplus (kelebihan pasokan) di pasar?",
        answer: 40,
        tolerance: 0,
        suffix: "kg",
        solution:
          "Surplus = penawaran - permintaan = 130 - 90 = <strong>40 kg</strong>. Kelebihan pasokan ini menekan harga turun sampai permintaan dan penawaran kembali seimbang.",
        hint: "Kurangkan permintaan dari penawaran.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap peristiwa dengan arah pergeseran kurva penawaran.",
        pairs: [
          { left: "Biaya bahan baku turun", right: "Penawaran bertambah (geser kanan)" },
          { left: "Pajak produksi dinaikkan", right: "Penawaran berkurang (geser kiri)" },
          { left: "Teknologi baru mempercepat produksi", right: "Penawaran bertambah (geser kanan)" },
          { left: "OPEC menahan ekspor minyak", right: "Penawaran berkurang (geser kiri)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Hukum penawaran: harga naik membuat jumlah yang ditawarkan naik.",
          "Kurva penawaran menanjak karena produksi tambahan jadi menguntungkan saat harga tinggi.",
          "Perubahan harga barang itu menggerakkan titik; biaya, teknologi, dan pajak menggeser kurva.",
          "Surplus (penawaran melebihi permintaan) menekan harga turun.",
          "Pemain berkuasa bisa menahan pasokan untuk mengerek harga, seperti OPEC pada 1973.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum penawaran menyatakan bahwa saat harga naik, jumlah ditawarkan?",
            options: ["Turun", "Naik", "Tetap", "Hilang"],
            answer: 1,
            explain: "Ada hubungan searah antara harga dan jumlah yang ditawarkan.",
          },
          {
            q: "Apa yang menggeser kurva penawaran ke kanan (bertambah)?",
            options: ["Biaya bahan baku turun", "Pajak produksi naik", "Harga barang itu turun", "Tidak ada"],
            answer: 0,
            explain: "Biaya produksi yang lebih rendah membuat produsen menawarkan lebih banyak pada setiap harga.",
          },
          {
            q: "Penawaran 130 kg dan permintaan 90 kg menimbulkan?",
            options: ["Kelangkaan 40 kg", "Surplus 40 kg", "Keseimbangan", "Surplus 220 kg"],
            answer: 1,
            explain: "Penawaran melebihi permintaan 40 kg, sehingga terjadi surplus.",
          },
          {
            q: "Apa yang dilakukan OPEC pada 1973 sehingga harga minyak melonjak?",
            options: [
              "Menambah pasokan besar-besaran",
              "Menahan dan memangkas pasokan minyak",
              "Menurunkan harga sukarela",
              "Membagikan minyak gratis",
            ],
            answer: 1,
            explain: "Dengan menahan pasokan, kurva penawaran bergeser ke kiri dan harga melonjak.",
          },
          {
            q: "Mengapa produsen mau menjual lebih banyak saat harga tinggi?",
            options: [
              "Karena dipaksa konsumen",
              "Karena produksi tambahan menjadi menguntungkan",
              "Karena harga tak berpengaruh",
              "Karena ingin merugi",
            ],
            answer: 1,
            explain: "Harga tinggi menutup biaya tambahan, sehingga menambah output jadi masuk akal.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pasar-keseimbangan-pergeseran",
    levelId: "pasar",
    order: 4,
    title: "Keseimbangan & Pergeseran Kurva",
    summary:
      "Di titik mana penawaran dan permintaan bertemu, dan apa yang terjadi ketika salah satu kurva bergeser? Pelajari mekanika harga keseimbangan.",
    durationMin: 15,
    tags: ["pasar", "keseimbangan", "pergeseran kurva", "harga"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Harga keseimbangan</strong> adalah harga ketika jumlah yang diminta tepat sama dengan jumlah yang ditawarkan. Di atas harga ini muncul <strong>surplus</strong> yang menekan harga turun; di bawahnya muncul <strong>kelangkaan</strong> yang mendorong harga naik. Pasar terus bergerak menuju titik temu ini.",
      },
      {
        type: "paragraph",
        html: "Ketika salah satu kurva <strong>bergeser</strong>, titik keseimbangan berpindah. Permintaan yang naik (geser kanan) menaikkan harga dan jumlah keseimbangan. Penawaran yang naik (geser kanan) menurunkan harga tetapi menaikkan jumlah. Memahami arah pergeseran membantu kita memprediksi gerak harga.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat pergeseran dasar",
        html: "<strong>Permintaan naik</strong>: harga &uarr; jumlah &uarr;. <strong>Permintaan turun</strong>: harga &darr; jumlah &darr;. <strong>Penawaran naik</strong>: harga &darr; jumlah &uarr;. <strong>Penawaran turun</strong>: harga &uarr; jumlah &darr;.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Harga adalah penyeimbang",
        html: "Tanpa ada yang memerintah, harga bergerak sendiri menutup selisih antara permintaan dan penawaran. Itulah sebabnya pasar bebas bisa mengoordinasikan jutaan keputusan tanpa pusat komando.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser kurva permintaan atau penawaran dan amati bagaimana harga serta jumlah keseimbangan ikut berpindah.",
      },
      { type: "widget", widget: "SimulatorKeseimbanganPasar" },
      {
        type: "video",
        comp: "PergeseranKurva",
        title: "Pergeseran Kurva",
        caption: "Saat kurva bergeser, titik keseimbangan berpindah dan harga baru terbentuk.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak supermarket dengan stok produk yang melimpah",
        caption: "Stok yang menumpuk adalah tanda surplus; harga akan turun atau diskon untuk mengembalikan keseimbangan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Pergeseran Permintaan: Harga Keseimbangan Sebelum vs Sesudah (ilustrasi)",
        unit: "ribu rupiah",
        source: "ilustrasi edukatif pergeseran kurva",
        note: "Saat permintaan naik dan penawaran tetap, harga keseimbangan dan jumlah keseimbangan sama-sama meningkat.",
        data: [
          { label: "Harga awal", value: 10 },
          { label: "Harga setelah permintaan naik", value: 13 },
          { label: "Jumlah awal", value: 100 },
          { label: "Jumlah setelah permintaan naik", value: 120 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Masker saat awal pandemi",
        html: "Pada awal pandemi, permintaan masker melonjak (kurva permintaan geser kanan) sementara penawaran tak bisa segera mengejar. Pada harga lama Rp2.000 per buah, permintaan melompat ke 130 unit sementara penawaran tetap 100 unit, menimbulkan kelangkaan 30 unit. Harga pun melonjak hingga produsen baru masuk dan keseimbangan baru terbentuk di harga yang lebih tinggi.",
      },
      {
        type: "case",
        title: "Sejarah: Kelangkaan sebagai sinyal saat krisis 1998",
        html: "Saat krisis moneter <strong>1998</strong> di Indonesia, nilai rupiah anjlok dan banyak barang impor menjadi langka. Harga sembako melonjak tajam karena permintaan untuk menimbun naik sementara pasokan terganggu. Lonjakan harga, meski menyakitkan, berfungsi sebagai <strong>sinyal kelangkaan</strong> yang mendorong penghematan dan menarik pasokan baru. Pemerintah lalu turun tangan dengan operasi pasar untuk meredam gejolak.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada harga keseimbangan lama Rp2.000, penawaran tetap 100 unit. Permintaan melonjak menjadi 130 unit. Berapa unit kelangkaan yang muncul pada harga lama itu?",
        answer: 30,
        tolerance: 0,
        suffix: "unit",
        solution:
          "Kelangkaan = permintaan baru - penawaran = 130 - 100 = <strong>30 unit</strong>. Kelangkaan ini mendorong harga naik sampai keseimbangan baru tercapai.",
        hint: "Kurangkan penawaran yang tetap dari permintaan yang baru.",
      },
      {
        type: "classifyExercise",
        prompt: "Apa dampak tiap pergeseran terhadap HARGA keseimbangan?",
        buckets: ["Harga naik", "Harga turun"],
        items: [
          { text: "Permintaan bergeser ke kanan (naik)", bucket: "Harga naik" },
          { text: "Penawaran bergeser ke kanan (naik)", bucket: "Harga turun" },
          { text: "Permintaan bergeser ke kiri (turun)", bucket: "Harga turun" },
          { text: "Penawaran bergeser ke kiri (turun)", bucket: "Harga naik" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Harga keseimbangan terjadi saat jumlah diminta sama dengan jumlah ditawarkan.",
          "Surplus menekan harga turun; kelangkaan mendorong harga naik.",
          "Permintaan naik menaikkan harga dan jumlah; penawaran naik menurunkan harga tetapi menaikkan jumlah.",
          "Pergeseran kurva memindahkan titik keseimbangan ke harga dan jumlah baru.",
          "Lonjakan harga saat krisis adalah sinyal kelangkaan yang mendorong hemat dan menarik pasokan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang terjadi pada harga di atas titik keseimbangan?",
            options: ["Muncul kelangkaan", "Muncul surplus yang menekan harga turun", "Harga naik terus", "Tidak terjadi apa-apa"],
            answer: 1,
            explain: "Di atas keseimbangan, penawaran melebihi permintaan sehingga surplus menekan harga turun.",
          },
          {
            q: "Jika permintaan naik dan penawaran tetap, harga dan jumlah keseimbangan?",
            options: ["Keduanya turun", "Keduanya naik", "Harga naik, jumlah turun", "Tidak berubah"],
            answer: 1,
            explain: "Permintaan geser kanan menaikkan baik harga maupun jumlah keseimbangan.",
          },
          {
            q: "Jika penawaran naik dan permintaan tetap, apa yang terjadi?",
            options: ["Harga turun, jumlah naik", "Harga naik, jumlah naik", "Harga naik, jumlah turun", "Tidak ada perubahan"],
            answer: 0,
            explain: "Penawaran geser kanan menurunkan harga tetapi menaikkan jumlah keseimbangan.",
          },
          {
            q: "Permintaan 130 dan penawaran 100 pada harga lama menimbulkan?",
            options: ["Surplus 30", "Kelangkaan 30", "Keseimbangan", "Surplus 230"],
            answer: 1,
            explain: "Permintaan melebihi penawaran 30 unit, sehingga terjadi kelangkaan.",
          },
          {
            q: "Mengapa lonjakan harga saat krisis bisa berguna?",
            options: [
              "Karena selalu adil",
              "Menjadi sinyal kelangkaan yang mendorong hemat dan menarik pasokan",
              "Karena membuat semua kaya",
              "Tidak ada gunanya sama sekali",
            ],
            answer: 1,
            explain: "Harga tinggi memberi sinyal agar konsumen berhemat dan produsen menambah pasokan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "struktur-pasar",
    levelId: "pasar",
    order: 5,
    title: "Struktur Pasar: Persaingan Sempurna sampai Monopoli",
    summary:
      "Tidak semua pasar bekerja sama. Kenali empat struktur pasar, dari persaingan sempurna yang ramai pesaing sampai monopoli yang dikuasai satu pemain, beserta dampaknya pada harga.",
    durationMin: 14,
    tags: ["pasar", "struktur pasar", "monopoli", "oligopoli", "persaingan"],
    blocks: [
      {
        type: "paragraph",
        html: "Sejauh ini kita menganggap pasar selalu ramai oleh banyak penjual dan pembeli. Kenyataannya, <strong>kuasa pasar</strong> tiap penjual berbeda-beda. Ekonom membagi pasar menjadi empat <strong>struktur</strong>: <strong>persaingan sempurna</strong>, <strong>persaingan monopolistik</strong>, <strong>oligopoli</strong>, dan <strong>monopoli</strong>. Semakin sedikit penjual dan semakin sulit pemain baru masuk, semakin besar kuasa penjual menentukan harga.",
      },
      {
        type: "paragraph",
        html: "Dalam <strong>persaingan sempurna</strong>, penjual hanyalah <em>penerima harga</em>: produknya seragam dan terlalu kecil untuk memengaruhi harga pasar. Di ujung lain, <strong>monopoli</strong> adalah satu-satunya penjual sehingga ia menjadi <em>penentu harga</em>. Di antara keduanya ada persaingan monopolistik (banyak penjual, produk sedikit berbeda) dan oligopoli (segelintir pemain besar).",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat struktur pasar",
        html: "<strong>Persaingan sempurna</strong>: banyak penjual, produk seragam, bebas keluar-masuk. <strong>Monopolistik</strong>: banyak penjual, produk dibedakan lewat merek. <strong>Oligopoli</strong>: segelintir pemain besar yang saling memengaruhi. <strong>Monopoli</strong>: hanya satu penjual, ada hambatan masuk yang kuat.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Kuasa pasar bisa merugikan konsumen",
        html: "Semakin sedikit pesaing, semakin leluasa penjual menaikkan harga di atas biaya. Itulah sebabnya banyak negara punya <strong>hukum antimonopoli</strong> untuk menjaga persaingan tetap sehat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur jumlah penjual dan tingkat hambatan masuk, lalu lihat bagaimana harga dan kuasa pasar berubah dari persaingan sempurna menuju monopoli.",
      },
      { type: "widget", widget: "SimulatorStrukturPasar" },
      {
        type: "video",
        comp: "StrukturPasarVideo",
        title: "Empat Struktur Pasar",
        caption: "Dari pasar yang ramai pesaing sampai satu pemain tunggal, kuasa atas harga makin besar.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trading_Floor_at_the_New_York_Stock_Exchange_during_the_Zendesk_IPO.jpg?width=400",
        alt: "Lantai perdagangan Bursa Efek New York dipenuhi banyak pelaku pasar",
        caption: "Bursa saham mendekati persaingan sempurna: ribuan pembeli dan penjual, produk seragam, dan tak satu pun bisa mendikte harga.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kuasa Pasar dan Markup Harga di Atas Biaya (ilustrasi)",
        unit: "% markup",
        source: "ilustrasi edukatif struktur pasar",
        note: "Makin sedikit pesaing, makin besar kemampuan penjual mengerek harga di atas biaya produksi.",
        data: [
          { label: "Persaingan sempurna", value: 2 },
          { label: "Monopolistik", value: 15 },
          { label: "Oligopoli", value: 30 },
          { label: "Monopoli", value: 60 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tiga warung vs satu kantin kampus",
        html: "Di sebuah jalan ada tiga warung nasi yang bersaing ketat; jika satu warung menaikkan harga, pembeli pindah ke sebelah, sehingga harga tertahan dekat biaya. Bandingkan dengan <strong>satu-satunya kantin</strong> di dalam kampus yang dipagari. Karena mahasiswa sulit keluar mencari makan, kantin itu bisa mematok harga jauh di atas biaya. Bila biaya satu porsi Rp10.000 dan kantin menjualnya Rp16.000, <strong>markup</strong>-nya 60%, persis ciri kuasa monopoli karena tidak ada pesaing dekat.",
      },
      {
        type: "case",
        title: "Sejarah: Standard Oil dipecah pada 1911",
        html: "Pada akhir abad ke-19, <strong>Standard Oil</strong> milik John D. Rockefeller menguasai hampir seluruh penyulingan minyak Amerika Serikat, sebuah monopoli raksasa. Lewat <strong>Sherman Antitrust Act 1890</strong>, pemerintah menggugat perusahaan ini. Pada <strong>1911</strong>, Mahkamah Agung AS memutuskan Standard Oil dipecah menjadi puluhan perusahaan terpisah. Kasus ini menjadi tonggak hukum antimonopoli: negara boleh membongkar kuasa pasar yang dianggap merugikan persaingan dan konsumen.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pasar dikuasai 4 perusahaan dengan pangsa 40%, 30%, 20%, dan 10%. Hitung indeks konsentrasi HHI (jumlah kuadrat tiap pangsa).",
        answer: 3000,
        tolerance: 0,
        solution:
          "HHI = 40^2 + 30^2 + 20^2 + 10^2 = 1600 + 900 + 400 + 100 = <strong>3000</strong>. Nilai di atas 2500 menandakan pasar sangat terkonsentrasi (mengarah ke oligopoli kuat).",
        hint: "Kuadratkan tiap pangsa pasar, lalu jumlahkan.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap contoh ke struktur pasarnya.",
        buckets: ["Persaingan sempurna", "Monopolistik", "Oligopoli", "Monopoli"],
        items: [
          { text: "Pasar saham dan valuta asing", bucket: "Persaingan sempurna" },
          { text: "Warung makan dan salon dengan merek masing-masing", bucket: "Monopolistik" },
          { text: "Segelintir operator seluler besar", bucket: "Oligopoli" },
          { text: "De Beers yang lama menguasai pasar berlian dunia", bucket: "Monopoli" },
          { text: "Beberapa produsen semen yang mendominasi pasar", bucket: "Oligopoli" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Ada empat struktur pasar: persaingan sempurna, monopolistik, oligopoli, dan monopoli.",
          "Makin sedikit penjual dan makin sulit pemain baru masuk, makin besar kuasa atas harga.",
          "Penjual di persaingan sempurna adalah penerima harga; monopoli adalah penentu harga.",
          "Kuasa pasar memungkinkan markup tinggi di atas biaya, sehingga merugikan konsumen.",
          "Hukum antimonopoli, seperti pada kasus Standard Oil 1911, menjaga persaingan tetap sehat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Penjual dalam persaingan sempurna disebut sebagai?",
            options: ["Penentu harga", "Penerima harga", "Pemilik monopoli", "Pembuat regulasi"],
            answer: 1,
            explain: "Produknya seragam dan terlalu kecil untuk memengaruhi harga, jadi ia hanya menerima harga pasar.",
          },
          {
            q: "Struktur pasar dengan hanya satu penjual dan hambatan masuk kuat disebut?",
            options: ["Oligopoli", "Persaingan monopolistik", "Monopoli", "Persaingan sempurna"],
            answer: 2,
            explain: "Monopoli berarti satu-satunya penjual sehingga menjadi penentu harga.",
          },
          {
            q: "Pasar yang dikuasai segelintir pemain besar yang saling memengaruhi disebut?",
            options: ["Oligopoli", "Monopoli", "Persaingan sempurna", "Pasar bebas"],
            answer: 0,
            explain: "Oligopoli adalah pasar dengan sedikit pemain besar yang keputusannya saling bergantung.",
          },
          {
            q: "Apa hasil keputusan Mahkamah Agung AS atas Standard Oil pada 1911?",
            options: [
              "Dibiarkan tetap utuh",
              "Dipecah menjadi banyak perusahaan terpisah",
              "Dijadikan milik negara",
              "Diberi subsidi besar",
            ],
            answer: 1,
            explain: "Berdasarkan Sherman Antitrust Act 1890, Standard Oil dipecah menjadi puluhan perusahaan.",
          },
          {
            q: "Pangsa 40%, 30%, 20%, 10% menghasilkan indeks HHI sebesar?",
            options: ["100", "1000", "3000", "10000"],
            answer: 2,
            explain: "1600 + 900 + 400 + 100 = 3000, menandakan pasar sangat terkonsentrasi.",
          },
        ],
      },
    ],
  },
];
