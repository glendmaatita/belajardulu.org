import type { Lesson } from "../../../types";

export const level9: Lesson[] = [
  // ============================================================
  {
    id: "kpi-rantai-pasok",
    levelId: "analytics",
    order: 1,
    title: "KPI Rantai Pasok & Siklus Kas",
    summary:
      "Yang tidak diukur tidak bisa diperbaiki. Kenali metrik inti rantai pasok seperti OTIF dan siklus kas-ke-kas yang mengungkap kesehatan operasi.",
    durationMin: 14,
    tags: ["analytics", "kpi", "metrik", "cash-to-cash"],
    blocks: [
      {
        type: "paragraph",
        html: "Rantai pasok yang baik bukan soal perasaan, melainkan soal <strong>angka</strong>. Indikator kinerja utama (<strong>KPI</strong>) menerjemahkan operasi yang rumit menjadi ukuran yang bisa dipantau dan diperbaiki. Tanpa metrik, perbaikan hanya tebakan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Diagnostic_monitors_in_the_control_room_of_Wendelstein_7-X.jpg?width=400",
        alt: "Deretan monitor di sebuah ruang kendali",
        caption: "Ruang kendali penuh monitor menyatukan banyak KPI sekaligus, persis seperti dashboard rantai pasok yang memantau OTIF dan siklus kas-ke-kas dalam satu pandangan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga keluarga metrik",
        html: "<strong>Layanan</strong> (mis. OTIF, on-time in-full), <strong>biaya</strong> (mis. biaya logistik per pesanan), dan <strong>aset/modal</strong> (mis. perputaran persediaan dan siklus kas-ke-kas). Metrik yang baik menyeimbangkan ketiganya, bukan mengejar satu sambil merusak yang lain.",
      },
      {
        type: "callout",
        tone: "info",
        title: "OTIF: On-Time In-Full",
        html: "<strong>OTIF</strong> mengukur persen pesanan yang tiba <strong>tepat waktu</strong> sekaligus <strong>lengkap</strong>. Pesanan yang datang tepat waktu tapi kurang barang, atau lengkap tapi terlambat, tetap dihitung gagal. Karena itu OTIF jadi ukuran ketat keandalan rantai pasok.",
      },
      {
        type: "video",
        comp: "DigitalTwinVideo",
        title: "Digital Twin Rantai Pasok",
        caption: "Digital twin untuk menguji skenario dan membaca metrik sebelum diterapkan di dunia nyata.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Siklus kas-ke-kas mengukur berapa hari uang tertahan di rantai pasok. Geser hari persediaan, piutang, dan utang lalu lihat dampaknya.",
      },
      { type: "widget", widget: "KalkulatorCashToCash" },
      {
        type: "chart",
        variant: "bar",
        title: "Contoh Dashboard KPI Rantai Pasok (ilustrasi)",
        unit: "% pencapaian target",
        source: "ilustrasi edukatif",
        note: "Dashboard menyatukan beberapa KPI sekaligus agar manajer cepat melihat mana yang sehat dan mana yang merah.",
        data: [
          { label: "OTIF", value: 94, color: "#34d399" },
          { label: "Akurasi stok", value: 98, color: "#60a5fa" },
          { label: "Akurasi ramalan", value: 78, color: "#fbbf24" },
          { label: "Utilisasi armada", value: 85, color: "#a78bfa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Siklus kas-ke-kas yang memerdekakan modal",
        html: "Sebuah distributor punya persediaan tersimpan 45 hari (DIO), piutang tertagih 30 hari (DSO), dan tempo bayar ke pemasok 40 hari (DPO). Siklus kas-ke-kasnya = 45 + 30 - 40 = <strong>35 hari</strong>. Artinya uang perusahaan terjebak 35 hari sejak membayar pemasok sampai menerima bayaran pelanggan. Dengan mempercepat penagihan dan merundingkan tempo bayar lebih panjang, siklus ini bisa dipangkas, membebaskan modal kerja tanpa menambah utang.",
      },
      {
        type: "case",
        title: "Sejarah: Lahirnya model SCOR (1996)",
        html: "Pada <strong>1996</strong>, sebuah organisasi bernama <strong>Supply Chain Council</strong> memperkenalkan model <strong>SCOR</strong> (Supply Chain Operations Reference). Sebelum SCOR, tiap perusahaan mengukur rantai pasok dengan istilah berbeda sehingga sulit dibandingkan. SCOR memberi kerangka dan kamus metrik standar di sekitar lima proses (Plan, Source, Make, Deliver, Return), sehingga kinerja bisa diukur dan dibandingkan antar perusahaan. Ini tonggak penting yang menjadikan analitik rantai pasok sebuah disiplin terukur, bukan sekadar intuisi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah perusahaan punya DIO 45 hari, DSO 30 hari, dan DPO 40 hari. Berapa siklus kas-ke-kasnya? (CCC = DIO + DSO - DPO)",
        answer: 35,
        tolerance: 0,
        suffix: "hari",
        solution:
          "45 + 30 - 40 = <strong>35 hari</strong>. Inilah lama uang tertahan di rantai pasok. Makin pendek, makin sedikit modal kerja yang dibutuhkan.",
        hint: "Jumlahkan DIO dan DSO, lalu kurangi DPO.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 1.000 pesanan, 940 tiba tepat waktu dan lengkap. Berapa nilai OTIF-nya dalam persen?",
        answer: 94,
        tolerance: 0,
        suffix: "%",
        solution:
          "940 / 1.000 x 100% = <strong>94%</strong>. Sisanya 6% gagal entah karena terlambat, kurang lengkap, atau keduanya.",
        hint: "Bagi pesanan yang tepat-dan-lengkap dengan total pesanan, kali 100%.",
      },
      {
        type: "takeaways",
        items: [
          "KPI menerjemahkan operasi rumit menjadi angka yang bisa dipantau dan diperbaiki.",
          "Tiga keluarga metrik: layanan, biaya, dan aset/modal, yang harus diseimbangkan.",
          "OTIF mengukur pesanan yang tiba tepat waktu sekaligus lengkap.",
          "Siklus kas-ke-kas (DIO + DSO - DPO) menunjukkan berapa hari modal tertahan.",
          "Model SCOR (1996) memberi kamus metrik standar sehingga rantai pasok bisa dibandingkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa KPI penting dalam rantai pasok?",
            options: [
              "Agar laporan terlihat tebal",
              "Karena yang tidak diukur tidak bisa diperbaiki",
              "Untuk menggantikan pekerja",
              "Agar tidak perlu gudang",
            ],
            answer: 1,
            explain: "Metrik mengubah operasi rumit jadi ukuran yang bisa dipantau dan diperbaiki.",
          },
          {
            q: "Apa yang diukur OTIF?",
            options: [
              "Berat total barang",
              "Persen pesanan yang tiba tepat waktu sekaligus lengkap",
              "Jumlah pemasok",
              "Harga rata-rata produk",
            ],
            answer: 1,
            explain: "OTIF menghitung pesanan yang memenuhi dua syarat: tepat waktu dan lengkap.",
          },
          {
            q: "Rumus siklus kas-ke-kas adalah?",
            options: [
              "DIO x DSO x DPO",
              "DIO + DSO - DPO",
              "DPO - DIO - DSO",
              "DIO - DSO + DPO",
            ],
            answer: 1,
            explain: "CCC = DIO + DSO - DPO, lama uang tertahan di rantai pasok.",
          },
          {
            q: "Apa kontribusi utama model SCOR (1996)?",
            options: [
              "Melarang pengukuran kinerja",
              "Memberi kamus dan kerangka metrik standar untuk membandingkan rantai pasok",
              "Menghapus proses Deliver",
              "Membuat tiap perusahaan memakai istilah berbeda",
            ],
            answer: 1,
            explain: "SCOR menstandarkan metrik di sekitar Plan, Source, Make, Deliver, Return.",
          },
          {
            q: "Dari 1.000 pesanan, 940 tepat waktu dan lengkap. OTIF-nya?",
            options: ["6%", "94%", "100%", "9,4%"],
            answer: 1,
            explain: "940 / 1.000 = 94%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "dashboard-business-intelligence",
    levelId: "analytics",
    order: 2,
    title: "Dashboard & Business Intelligence",
    summary:
      "Data mentah tidak menjelaskan apa-apa sampai disusun jadi gambar. Pelajari cara dashboard menyatukan KPI, memungkinkan drill-down, dan menjaga satu sumber kebenaran.",
    durationMin: 14,
    tags: ["analytics", "dashboard", "business-intelligence", "kpi"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah perusahaan bisa menyimpan jutaan baris data pesanan, stok, dan pengiriman, namun manajer tetap buta jika data itu tidak diolah jadi gambar yang mudah dibaca. <strong>Business Intelligence</strong> (BI) adalah praktik mengubah data mentah menjadi informasi yang bisa ditindaklanjuti, dan <strong>dashboard</strong> adalah wujud visualnya.",
      },
      {
        type: "paragraph",
        html: "Dashboard yang baik menyajikan beberapa KPI sekaligus dalam satu layar, menandai mana yang sehat (hijau) dan mana yang bermasalah (merah), lalu mengizinkan pengguna menelusuri detail dari angka ringkas ke akar masalahnya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/UK-India_Business_Leaders_Climate_Group_breakfast_meeting_%285177859631%29.jpg?width=400",
        alt: "Sekelompok orang berdiskusi dalam rapat bisnis",
        caption: "Dashboard yang baik membuat rapat analitik berbicara dengan satu sumber kebenaran, bukan berdebat angka siapa yang benar.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga ciri dashboard yang baik",
        html: "<strong>Ringkas</strong> (satu layar untuk gambaran besar), <strong>bisa ditelusuri</strong> (klik angka ringkas untuk drill-down ke detail), dan <strong>terpercaya</strong> (semua angka berasal dari satu sumber kebenaran yang sama).",
      },
      {
        type: "callout",
        tone: "info",
        title: "Drill-down: dari ringkas ke akar",
        html: "OTIF nasional 88% terlihat di layar utama. Dengan <strong>drill-down</strong>, manajer mengklik angka itu dan melihat per wilayah: Jakarta 96%, Surabaya 92%, Makassar baru 70%. Akar masalah langsung ketahuan tanpa membongkar ribuan baris data manual.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bahaya banyak versi kebenaran",
        html: "Bila tim penjualan, gudang, dan keuangan masing-masing punya laporan sendiri dengan angka berbeda, rapat habis untuk berdebat angka siapa yang benar. <strong>Single source of truth</strong> menghapus debat itu: semua membaca data yang sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Siklus kas-ke-kas adalah salah satu KPI keuangan yang sering ditaruh di dashboard eksekutif. Geser komponennya dan lihat bagaimana satu angka ringkas berubah.",
      },
      { type: "widget", widget: "KalkulatorCashToCash" },
      {
        type: "video",
        comp: "DigitalTwinVideo",
        title: "Dashboard Hidup di Digital Twin",
        caption: "Digital twin memperbarui KPI di dashboard secara langsung sehingga manajer melihat status terkini dalam satu layar.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "OTIF per wilayah hasil drill-down (ilustrasi)",
        unit: "% OTIF",
        source: "ilustrasi edukatif",
        note: "Angka nasional 88% menyembunyikan satu wilayah merah; drill-down menampakkannya agar perbaikan tepat sasaran.",
        data: [
          { label: "Jakarta", value: 96, color: "#34d399" },
          { label: "Bandung", value: 93, color: "#60a5fa" },
          { label: "Surabaya", value: 92, color: "#60a5fa" },
          { label: "Medan", value: 89, color: "#fbbf24" },
          { label: "Makassar", value: 70, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Satu sumber kebenaran di distributor FMCG",
        html: "Sebuah distributor barang konsumsi di Indonesia punya tiga laporan stok berbeda: gudang menghitung 12.000 dus, penjualan memakai 12.800 dus, dan keuangan mencatat 11.500 dus. Akibat selisih ini, tim penjualan menjanjikan barang yang sebenarnya tidak ada, lalu 9% pesanan batal. Setelah menyatukan semua ke satu dashboard BI yang menarik data dari sistem gudang sebagai sumber tunggal, angka jadi seragam dan pesanan batal turun menjadi 2%.",
      },
      {
        type: "case",
        title: "Sejarah: Balanced Scorecard (1992)",
        html: "Pada <strong>1992</strong>, Robert Kaplan dan David Norton memperkenalkan <strong>Balanced Scorecard</strong> lewat Harvard Business Review. Idenya: jangan menilai perusahaan hanya dari angka keuangan, tetapi seimbangkan empat perspektif yakni keuangan, pelanggan, proses internal, serta pembelajaran dan pertumbuhan. Gagasan ini menjadi cikal bakal dashboard manajemen modern: menyajikan beberapa ukuran kunci berdampingan agar pengambil keputusan melihat gambaran utuh, bukan satu angka saja.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dashboard menampilkan OTIF nasional sebagai rata-rata sederhana dari 4 wilayah: 96%, 92%, 90%, dan 70%. Berapa OTIF nasional yang tampil?",
        answer: 87,
        tolerance: 0,
        suffix: "%",
        solution:
          "(96 + 92 + 90 + 70) / 4 = 348 / 4 = <strong>87%</strong>. Angka ringkas ini menyembunyikan wilayah 70%, itulah perlunya drill-down.",
        hint: "Jumlahkan keempat angka lalu bagi 4.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap elemen sebagai bagian dari dashboard yang baik atau praktik buruk yang harus dihindari.",
        buckets: ["Dashboard baik", "Praktik buruk"],
        items: [
          { text: "Satu sumber kebenaran untuk semua tim", bucket: "Dashboard baik" },
          { text: "Drill-down dari angka ringkas ke detail wilayah", bucket: "Dashboard baik" },
          { text: "Penanda warna hijau dan merah untuk status KPI", bucket: "Dashboard baik" },
          { text: "Tiga laporan stok dengan angka berbeda-beda", bucket: "Praktik buruk" },
          { text: "Menumpuk 50 metrik tanpa hierarki di satu layar", bucket: "Praktik buruk" },
          { text: "Data di-update manual ke salin-tempel spreadsheet", bucket: "Praktik buruk" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Business Intelligence mengubah data mentah menjadi informasi yang bisa ditindaklanjuti.",
          "Dashboard yang baik bersifat ringkas, bisa ditelusuri (drill-down), dan terpercaya.",
          "Drill-down membongkar angka ringkas menjadi detail sehingga akar masalah cepat ketemu.",
          "Satu sumber kebenaran menghapus debat angka antar departemen.",
          "Balanced Scorecard (1992) adalah cikal bakal dashboard manajemen seimbang modern.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi utama Business Intelligence?",
            options: [
              "Menyimpan data sebanyak mungkin tanpa diolah",
              "Mengubah data mentah menjadi informasi yang bisa ditindaklanjuti",
              "Menggantikan seluruh staf gudang",
              "Menghapus kebutuhan akan KPI",
            ],
            answer: 1,
            explain: "BI mengolah data jadi informasi yang berguna untuk keputusan.",
          },
          {
            q: "Apa itu drill-down pada dashboard?",
            options: [
              "Menghapus data lama",
              "Menelusuri dari angka ringkas ke detail penyusunnya",
              "Mengebor lokasi gudang baru",
              "Mencetak laporan ke kertas",
            ],
            answer: 1,
            explain: "Drill-down membongkar angka agregat menjadi rinciannya, mis. per wilayah.",
          },
          {
            q: "Mengapa single source of truth penting?",
            options: [
              "Agar tiap tim punya angka berbeda",
              "Supaya semua tim membaca data yang sama dan tidak berdebat angka",
              "Untuk memperbanyak laporan",
              "Agar dashboard lebih lambat",
            ],
            answer: 1,
            explain: "Satu sumber kebenaran membuat semua keputusan berpijak pada angka yang sama.",
          },
          {
            q: "OTIF empat wilayah 96%, 92%, 90%, 70%. Rata-rata sederhananya?",
            options: ["90%", "87%", "82%", "70%"],
            answer: 1,
            explain: "(96 + 92 + 90 + 70) / 4 = 87%.",
          },
          {
            q: "Apa kontribusi Balanced Scorecard (1992) bagi dashboard modern?",
            options: [
              "Menilai perusahaan hanya dari keuangan",
              "Menyajikan beberapa perspektif kunci berdampingan agar gambaran utuh",
              "Melarang pengukuran kinerja",
              "Menghapus perspektif pelanggan",
            ],
            answer: 1,
            explain: "BSC menyeimbangkan keuangan, pelanggan, proses internal, dan pembelajaran.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "akurasi-peramalan",
    levelId: "analytics",
    order: 3,
    title: "Akurasi Peramalan: MAPE, Bias & FVA",
    summary:
      "Ramalan pasti meleset, tapi seberapa jauh? Pelajari cara mengukur akurasi dengan MAPE, mendeteksi bias, dan menilai apakah usaha meramal benar-benar menambah nilai.",
    durationMin: 15,
    tags: ["analytics", "peramalan", "mape", "bias", "fva"],
    blocks: [
      {
        type: "paragraph",
        html: "Tidak ada ramalan yang tepat 100%. Pertanyaannya bukan apakah meleset, melainkan <strong>seberapa jauh</strong> melesetnya dan apakah meleset itu <strong>condong satu arah</strong>. Inilah yang dijawab oleh metrik akurasi peramalan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Data_logger.jpg?width=400",
        alt: "Sebuah perangkat perekam data dengan sensor",
        caption: "Perekam data mengumpulkan angka aktual dari lapangan, bahan mentah untuk membandingkan ramalan dengan kenyataan dan menghitung MAPE serta bias.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "MAPE: ukuran besar kesalahan",
        html: "<strong>MAPE</strong> (Mean Absolute Percentage Error) adalah rata-rata persen kesalahan absolut. Untuk satu periode, APE = |aktual - ramalan| / aktual x 100%. MAPE adalah rata-rata APE dari banyak periode. Makin kecil MAPE, makin akurat ramalan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bias: kesalahan yang condong satu arah",
        html: "MAPE memakai nilai absolut sehingga tidak peduli arah. <strong>Bias</strong> justru memperhatikan arah: bila ramalan terus-menerus lebih tinggi dari aktual, ada bias positif (over-forecast) yang membuat stok menumpuk. Bila terus lebih rendah, bias negatif (under-forecast) yang memicu kehabisan stok.",
      },
      {
        type: "callout",
        tone: "info",
        title: "FVA: apakah meramal menambah nilai?",
        html: "<strong>Forecast Value Added</strong> membandingkan akurasi ramalan canggih dengan ramalan naif (mis. asumsi permintaan bulan depan sama dengan bulan ini). Jika model rumit ternyata tidak lebih akurat dari tebakan naif, FVA-nya nol atau negatif, dan usaha meramal itu sia-sia.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Masukkan angka aktual dan ramalan untuk beberapa periode, lalu lihat MAPE dan biasnya dihitung otomatis.",
      },
      { type: "widget", widget: "KalkulatorForecastAccuracy" },
      {
        type: "video",
        comp: "DigitalTwinVideo",
        title: "Menguji Ramalan di Digital Twin",
        caption: "Digital twin membandingkan ramalan dengan permintaan nyata sehingga bias dan akurasi terlihat sebelum keputusan stok diambil.",
      },
      {
        type: "case",
        title: "Studi Kasus: Over-forecast yang menumpuk stok",
        html: "Sebuah produsen minuman di Indonesia meramal penjualan 6 bulan: ramalan rata-rata 15% di atas aktual setiap bulan. Karena ramalan selalu lebih tinggi, gudang terus memproduksi berlebih sampai stok kedaluwarsa senilai Rp 480 juta dalam setahun. Setelah tim sadar ini bias positif (bukan kesalahan acak), mereka mengoreksi ramalan turun 15% dan kerugian kedaluwarsa anjlok menjadi Rp 90 juta.",
      },
      {
        type: "case",
        title: "Sejarah: Kompetisi Makridakis (sekitar 1982)",
        html: "Sekitar <strong>1982</strong>, Spyros Makridakis menggelar <strong>M-Competition</strong>, lomba meramal ribuan deret data nyata dengan berbagai metode. Hasilnya mengejutkan banyak akademisi: metode statistik sederhana sering kali sama akurat atau lebih akurat ketimbang model rumit yang mahal. Temuan ini menjadi dasar gagasan Forecast Value Added, yakni meramal canggih hanya berguna bila terbukti mengalahkan tebakan naif.",
      },
      {
        type: "calcExercise",
        prompt:
          "Penjualan aktual sebuah produk 500 unit, sedangkan ramalannya 450 unit. Berapa persen kesalahan absolut (APE)?",
        answer: 10,
        tolerance: 0,
        suffix: "%",
        solution:
          "APE = |500 - 450| / 500 x 100% = 50 / 500 x 100% = <strong>10%</strong>.",
        hint: "Bagi selisih absolut dengan nilai aktual, lalu kali 100%.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tiga periode punya APE 8%, 12%, dan 10%. Berapa MAPE-nya?",
        answer: 10,
        tolerance: 0,
        suffix: "%",
        solution:
          "MAPE = (8 + 12 + 10) / 3 = 30 / 3 = <strong>10%</strong>, yaitu rata-rata kesalahan absolut antar periode.",
        hint: "Rata-ratakan ketiga nilai APE.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah peramalan dengan maknanya.",
        pairs: [
          { left: "MAPE", right: "Rata-rata persen kesalahan absolut" },
          { left: "Bias positif", right: "Ramalan cenderung lebih tinggi dari aktual" },
          { left: "Bias negatif", right: "Ramalan cenderung lebih rendah dari aktual" },
          { left: "FVA", right: "Selisih akurasi terhadap ramalan naif" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Semua ramalan meleset; yang penting seberapa jauh dan ke arah mana.",
          "MAPE mengukur besar kesalahan rata-rata dalam persen, tanpa peduli arah.",
          "Bias menangkap arah kesalahan: positif (over-forecast) atau negatif (under-forecast).",
          "FVA menilai apakah meramal canggih lebih baik daripada tebakan naif.",
          "Kompetisi Makridakis (sekitar 1982) menunjukkan metode sederhana sering cukup akurat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang diukur MAPE?",
            options: [
              "Arah kesalahan ramalan",
              "Rata-rata persen kesalahan absolut ramalan",
              "Total penjualan tahunan",
              "Jumlah produk yang dijual",
            ],
            answer: 1,
            explain: "MAPE merata-ratakan persen kesalahan absolut antar periode.",
          },
          {
            q: "Ramalan yang terus-menerus lebih tinggi dari aktual menunjukkan?",
            options: [
              "Bias negatif",
              "Bias positif (over-forecast)",
              "Akurasi sempurna",
              "Tidak ada pola",
            ],
            answer: 1,
            explain: "Konsisten lebih tinggi = bias positif yang membuat stok menumpuk.",
          },
          {
            q: "Aktual 500 unit, ramalan 450 unit. APE-nya?",
            options: ["5%", "10%", "50%", "90%"],
            answer: 1,
            explain: "|500 - 450| / 500 = 50 / 500 = 10%.",
          },
          {
            q: "APE tiga periode 8%, 12%, 10%. MAPE-nya?",
            options: ["30%", "10%", "12%", "8%"],
            answer: 1,
            explain: "(8 + 12 + 10) / 3 = 10%.",
          },
          {
            q: "Apa makna FVA yang negatif?",
            options: [
              "Ramalan canggih kalah akurat dari tebakan naif",
              "Ramalan selalu tepat",
              "Tidak ada stok tersisa",
              "Penjualan naik dua kali lipat",
            ],
            answer: 0,
            explain: "FVA negatif berarti usaha meramal rumit tidak menambah nilai dibanding metode naif.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "metrik-scor-lanjutan",
    levelId: "analytics",
    order: 4,
    title: "Metrik SCOR Lanjutan",
    summary:
      "Model SCOR menata kinerja rantai pasok ke lima atribut: keandalan, ketanggapan, kelincahan, biaya, dan aset. Pelajari metrik kunci tiap atribut dan trade-off di antaranya.",
    durationMin: 15,
    tags: ["analytics", "scor", "metrik", "kinerja"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah model SCOR menyatukan bahasa metrik, ia juga menatanya ke dalam <strong>lima atribut kinerja</strong>. Tiga atribut menghadap pelanggan (keandalan, ketanggapan, kelincahan) dan dua menghadap internal (biaya, aset). Memahami kelimanya membuat manajer tidak terjebak mengejar satu atribut sambil merusak yang lain.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Modern_warehouse_with_pallet_rack_storage_system.jpg?width=400",
        alt: "Gudang modern dengan sistem rak palet",
        caption: "Atribut SCOR seperti keandalan dan manajemen aset diuji nyata di gudang: seberapa cepat barang mengalir dan seberapa efisien modal yang terkunci di rak.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Lima atribut kinerja SCOR",
        html: "<strong>Reliability</strong> (keandalan, mis. OTIF), <strong>Responsiveness</strong> (ketanggapan, mis. lama siklus pemenuhan pesanan), <strong>Agility</strong> (kelincahan menghadapi perubahan permintaan), <strong>Cost</strong> (biaya total rantai pasok), dan <strong>Asset Management</strong> (efisiensi aset, mis. siklus kas-ke-kas).",
      },
      {
        type: "callout",
        tone: "info",
        title: "Metrik menghadap pelanggan vs internal",
        html: "Keandalan, ketanggapan, dan kelincahan dirasakan langsung oleh <strong>pelanggan</strong>. Biaya dan aset adalah urusan <strong>internal</strong> yang menentukan apakah layanan tadi menguntungkan. Perusahaan unggul menyeimbangkan keduanya.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Trade-off antar atribut",
        html: "Menaikkan ketanggapan dengan menambah stok pengaman akan menaikkan biaya dan memperburuk metrik aset. Menekan biaya habis-habisan bisa merusak keandalan. Tidak ada atribut yang gratis; setiap perbaikan punya harga di atribut lain.",
      },
      {
        type: "video",
        comp: "DigitalTwinVideo",
        title: "Menguji Trade-off SCOR di Digital Twin",
        caption: "Digital twin membantu menimbang efek perubahan satu atribut terhadap atribut lainnya sebelum diterapkan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Skor lima atribut SCOR dua perusahaan (ilustrasi)",
        unit: "skor relatif 0-100",
        source: "ilustrasi edukatif",
        note: "Perusahaan A unggul ketanggapan tapi mahal; B lebih efisien biaya namun kurang lincah. Tidak ada yang menang di semua atribut.",
        data: [
          { label: "Keandalan A", value: 92, color: "#34d399" },
          { label: "Keandalan B", value: 88, color: "#60a5fa" },
          { label: "Ketanggapan A", value: 90, color: "#34d399" },
          { label: "Ketanggapan B", value: 72, color: "#60a5fa" },
          { label: "Biaya A", value: 65, color: "#34d399" },
          { label: "Biaya B", value: 90, color: "#60a5fa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memilih atribut yang tepat di e-commerce",
        html: "Sebuah toko online di Indonesia ingin menaikkan ketanggapan dengan janji pengiriman 1 hari. Untuk itu mereka menambah stok pengaman 30% di lima gudang kota besar. Keandalan dan ketanggapan naik, tetapi biaya simpan bertambah Rp 1,2 miliar per tahun dan siklus kas-ke-kas memburuk dari 28 menjadi 41 hari. Manajemen lalu memutuskan janji 1 hari hanya untuk produk laris (20% SKU yang menyumbang 80% pesanan), sehingga manfaat ketanggapan didapat tanpa membengkakkan biaya untuk semua barang.",
      },
      {
        type: "case",
        title: "Sejarah: Benchmarking Xerox (sekitar 1979)",
        html: "Sekitar <strong>1979</strong>, Xerox mempelopori <strong>competitive benchmarking</strong>: membandingkan kinerja proses sendiri dengan pesaing terbaik, termasuk membongkar produk lawan untuk mengukur biaya. Praktik membandingkan kinerja terhadap acuan terbaik inilah yang kelak dianut model SCOR, yang tidak hanya mengukur metrik tetapi juga membandingkannya dengan kelas terbaik (best-in-class) agar perusahaan tahu seberapa jauh tertinggal.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap atribut SCOR dengan contoh metriknya.",
        pairs: [
          { left: "Reliability (keandalan)", right: "OTIF, persen pesanan sempurna" },
          { left: "Responsiveness (ketanggapan)", right: "Lama siklus pemenuhan pesanan" },
          { left: "Agility (kelincahan)", right: "Waktu adaptasi saat permintaan melonjak" },
          { left: "Cost (biaya)", right: "Biaya total manajemen rantai pasok" },
          { left: "Asset Management (aset)", right: "Siklus kas-ke-kas, perputaran persediaan" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 2.000 pesanan, 1.860 memenuhi kriteria pesanan sempurna (tepat waktu, lengkap, tanpa kerusakan, dokumen benar). Berapa persen pesanan sempurna (metrik keandalan)?",
        answer: 93,
        tolerance: 0,
        suffix: "%",
        solution:
          "1.860 / 2.000 x 100% = <strong>93%</strong>. Pesanan sempurna adalah metrik keandalan yang lebih ketat dari OTIF biasa.",
        hint: "Bagi pesanan sempurna dengan total pesanan, kali 100%.",
      },
      {
        type: "takeaways",
        items: [
          "SCOR menata kinerja ke lima atribut: keandalan, ketanggapan, kelincahan, biaya, aset.",
          "Tiga atribut menghadap pelanggan, dua menghadap internal.",
          "Setiap atribut punya trade-off; memperbaiki satu sering membebani yang lain.",
          "Pesanan sempurna adalah metrik keandalan yang lebih ketat dari OTIF.",
          "Benchmarking ala Xerox (sekitar 1979) menanamkan budaya membandingkan dengan kelas terbaik.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Berapa jumlah atribut kinerja dalam model SCOR?",
            options: ["Tiga", "Lima", "Tujuh", "Sepuluh"],
            answer: 1,
            explain: "Lima: keandalan, ketanggapan, kelincahan, biaya, dan aset.",
          },
          {
            q: "Atribut mana yang TIDAK langsung dirasakan pelanggan?",
            options: [
              "Keandalan",
              "Ketanggapan",
              "Biaya dan aset",
              "Kelincahan",
            ],
            answer: 2,
            explain: "Biaya dan aset adalah atribut internal; tiga lainnya menghadap pelanggan.",
          },
          {
            q: "Contoh metrik atribut Asset Management adalah?",
            options: [
              "OTIF",
              "Siklus kas-ke-kas dan perputaran persediaan",
              "Lama siklus pesanan",
              "Waktu adaptasi permintaan",
            ],
            answer: 1,
            explain: "Asset Management menyoroti efisiensi modal seperti siklus kas-ke-kas.",
          },
          {
            q: "Dari 2.000 pesanan, 1.860 sempurna. Persen pesanan sempurna?",
            options: ["86%", "93%", "97%", "100%"],
            answer: 1,
            explain: "1.860 / 2.000 = 93%.",
          },
          {
            q: "Apa inti trade-off antar atribut SCOR?",
            options: [
              "Semua atribut bisa dimaksimalkan sekaligus tanpa biaya",
              "Memperbaiki satu atribut sering membebani atribut lain",
              "Atribut tidak saling memengaruhi",
              "Hanya biaya yang penting",
            ],
            answer: 1,
            explain: "Mis. menaikkan ketanggapan lewat stok pengaman menaikkan biaya dan memperburuk aset.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "optimasi-jaringan-distribusi",
    levelId: "analytics",
    order: 5,
    title: "Optimasi Jaringan Distribusi",
    summary:
      "Berapa gudang yang ideal, di mana, dan berapa eselon? Pelajari trade-off biaya melawan layanan, dan mengapa memecah gudang justru menggemukkan stok pengaman.",
    durationMin: 15,
    tags: ["analytics", "network-design", "gudang", "trade-off"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Optimasi jaringan</strong> menjawab pertanyaan strategis: berapa banyak gudang yang dibutuhkan, di kota mana, dan berapa lapis (eselon) antara pabrik dan pelanggan. Keputusan ini menentukan ongkos dan kecepatan layanan selama bertahun-tahun ke depan.",
      },
      {
        type: "paragraph",
        html: "Inti persoalannya adalah <strong>trade-off biaya melawan layanan</strong>. Lebih banyak gudang yang dekat pelanggan mempercepat pengiriman, tetapi menaikkan biaya sewa, operasi, dan terutama stok pengaman.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg?width=400",
        alt: "Kapal kontainer besar mengangkut peti kemas",
        caption: "Jaringan distribusi merentang dari kapal kontainer antarbenua sampai gudang kota; menambah atau memangkas simpul jaringan menggeser biaya transportasi dan persediaan sekaligus.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga komponen biaya jaringan",
        html: "<strong>Biaya transportasi</strong> (turun bila gudang makin dekat pelanggan), <strong>biaya fasilitas</strong> (naik tiap menambah gudang), dan <strong>biaya persediaan</strong> (naik karena tiap gudang butuh stok pengaman sendiri). Jumlah gudang optimal ada di titik biaya total terendah.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Hukum akar kuadrat persediaan",
        html: "Memecah stok ke banyak lokasi menaikkan total stok pengaman mengikuti <strong>akar kuadrat jumlah lokasi</strong>. Jika satu gudang pusat butuh stok pengaman X, maka memecahnya ke N gudang membuat total stok pengaman menjadi sekitar X dikali akar N. Konsolidasi (pooling) menghemat persediaan, tetapi mengorbankan kedekatan ke pelanggan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lebih banyak gudang sering memperburuk siklus kas-ke-kas karena modal terkunci di stok pengaman ekstra. Coba simulator ini untuk merasakan dampaknya pada modal kerja.",
      },
      { type: "widget", widget: "KalkulatorCashToCash" },
      {
        type: "video",
        comp: "DigitalTwinVideo",
        title: "Menata Jaringan di Digital Twin",
        caption: "Digital twin menguji efek menambah atau mengonsolidasikan gudang terhadap biaya total sebelum jaringan nyata diubah.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Biaya total vs jumlah gudang (ilustrasi)",
        unit: "indeks biaya total",
        source: "ilustrasi edukatif",
        note: "Biaya total turun lalu naik kembali; titik terendah adalah jumlah gudang optimal, bukan sebanyak atau sesedikit mungkin.",
        data: [
          { label: "1 gudang", value: 118 },
          { label: "2 gudang", value: 102 },
          { label: "3 gudang", value: 95 },
          { label: "4 gudang", value: 98 },
          { label: "5 gudang", value: 110 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menata ulang jaringan ritel nasional",
        html: "Sebuah peritel di Indonesia semula punya 8 gudang regional dengan total stok pengaman 8.000 unit dan biaya operasi tinggi. Setelah analisis jaringan, mereka mengonsolidasikan ke 4 gudang besar di Jakarta, Surabaya, Medan, dan Makassar. Dengan hukum akar kuadrat, total stok pengaman turun mendekati 5.657 unit (sekitar 8.000 dibagi akar 2), menghemat ribuan unit modal. Pengiriman ke kota kecil sedikit lebih lama, tetapi penghematan biaya simpan dan operasi jauh lebih besar dari ongkos transportasi tambahan.",
      },
      {
        type: "case",
        title: "Sejarah: Jaringan distribusi Walmart (sekitar 1980-an)",
        html: "Sepanjang <strong>1980-an</strong>, Walmart di bawah Sam Walton membangun jaringan distribusi <strong>hub-and-spoke</strong>: gudang besar ditempatkan strategis sehingga tiap toko berada dalam jangkauan sekitar sehari berkendara. Dipadukan dengan cross-docking dan data penjualan real-time, desain jaringan ini menekan biaya logistik jauh di bawah pesaing dan menjadi tulang punggung dominasi ritel Walmart. Ini contoh klasik bahwa desain jaringan yang tepat adalah senjata strategis, bukan sekadar urusan operasional.",
      },
      {
        type: "calcExercise",
        prompt:
          "Satu gudang pusat membutuhkan stok pengaman 100 unit. Menurut hukum akar kuadrat, berapa total stok pengaman bila stok dipecah ke 4 gudang regional?",
        answer: 200,
        tolerance: 0,
        suffix: "unit",
        solution:
          "Total = 100 x akar(4) = 100 x 2 = <strong>200 unit</strong>. Memecah ke 4 lokasi menggandakan total stok pengaman.",
        hint: "Kalikan stok pengaman pusat dengan akar kuadrat dari jumlah lokasi.",
      },
      {
        type: "classifyExercise",
        prompt: "Saat jumlah gudang ditambah, tiap komponen biaya akan naik atau turun?",
        buckets: ["Cenderung naik", "Cenderung turun"],
        items: [
          { text: "Biaya fasilitas dan operasi gudang", bucket: "Cenderung naik" },
          { text: "Total stok pengaman (hukum akar kuadrat)", bucket: "Cenderung naik" },
          { text: "Modal kerja terkunci di persediaan", bucket: "Cenderung naik" },
          { text: "Biaya transportasi ke pelanggan", bucket: "Cenderung turun" },
          { text: "Waktu pengiriman ke pelanggan terdekat", bucket: "Cenderung turun" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Optimasi jaringan menentukan jumlah, lokasi, dan jumlah eselon gudang.",
          "Intinya trade-off biaya melawan layanan, dengan titik biaya total terendah.",
          "Tiga komponen biaya: transportasi, fasilitas, dan persediaan, bergerak berlawanan.",
          "Hukum akar kuadrat: memecah stok ke N lokasi menaikkan stok pengaman sekitar akar N kali.",
          "Jaringan Walmart (sekitar 1980-an) membuktikan desain jaringan adalah senjata strategis.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti persoalan optimasi jaringan distribusi?",
            options: [
              "Memperbanyak gudang tanpa batas",
              "Trade-off antara biaya dan layanan untuk menemukan titik optimal",
              "Menghapus semua gudang",
              "Memakai satu gudang untuk seluruh negeri tanpa kecuali",
            ],
            answer: 1,
            explain: "Tujuannya menyeimbangkan biaya dan layanan, bukan ekstrem mana pun.",
          },
          {
            q: "Saat jumlah gudang bertambah, biaya transportasi cenderung?",
            options: ["Naik", "Turun", "Tetap", "Nol"],
            answer: 1,
            explain: "Gudang lebih dekat pelanggan memendekkan jarak kirim sehingga biaya transportasi turun.",
          },
          {
            q: "Stok pengaman pusat 100 unit, dipecah ke 4 gudang. Total stok pengaman?",
            options: ["100 unit", "200 unit", "400 unit", "50 unit"],
            answer: 1,
            explain: "100 x akar(4) = 100 x 2 = 200 unit.",
          },
          {
            q: "Apa yang dijelaskan hukum akar kuadrat persediaan?",
            options: [
              "Stok pengaman turun saat lokasi ditambah",
              "Stok pengaman naik mengikuti akar jumlah lokasi saat dipecah",
              "Biaya transportasi naik tak terbatas",
              "Jumlah gudang tidak memengaruhi persediaan",
            ],
            answer: 1,
            explain: "Memecah stok ke banyak lokasi menambah total stok pengaman sebesar akar jumlah lokasi.",
          },
          {
            q: "Mengapa jaringan hub-and-spoke Walmart penting secara historis?",
            options: [
              "Membuktikan gudang tidak diperlukan",
              "Menunjukkan desain jaringan tepat bisa menjadi senjata strategis penekan biaya",
              "Menghapus kebutuhan transportasi",
              "Membuat biaya logistik naik drastis",
            ],
            answer: 1,
            explain: "Penempatan gudang strategis plus cross-docking menekan biaya logistik di bawah pesaing.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "simulasi-rantai-pasok",
    levelId: "analytics",
    order: 6,
    title: "Simulasi Rantai Pasok: Monte Carlo & What-If",
    summary:
      "Dunia nyata penuh ketidakpastian. Simulasi menjalankan ribuan skenario di komputer untuk menjawab pertanyaan what-if tanpa mempertaruhkan operasi sungguhan.",
    durationMin: 15,
    tags: ["analytics", "simulasi", "monte-carlo", "what-if"],
    blocks: [
      {
        type: "paragraph",
        html: "Permintaan, lead time, dan gangguan tidak bisa diketahui pasti. Daripada menebak dengan satu angka rata-rata, <strong>simulasi</strong> menjalankan ribuan kemungkinan di komputer untuk memetakan rentang hasil yang mungkin terjadi, lengkap dengan peluangnya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/UK-India_Business_Leaders_Climate_Group_breakfast_meeting_%285177859631%29.jpg?width=400",
        alt: "Tim berdiskusi membahas data dalam sebuah rapat",
        caption: "Hasil ribuan iterasi Monte Carlo dibahas tim untuk memilih tingkat layanan dan stok pengaman yang paling masuk akal, bukan sekadar memakai satu angka rata-rata.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Simulasi Monte Carlo",
        html: "<strong>Monte Carlo</strong> mengambil angka acak dari distribusi permintaan dan lead time, lalu mengulang perhitungan ribuan kali. Hasilnya bukan satu jawaban, melainkan sebaran: misalnya peluang kehabisan stok 5%, atau tingkat layanan rata-rata 95%.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Analisis what-if",
        html: "<strong>What-if</strong> bertanya: bagaimana jika permintaan naik 20%? Bagaimana jika satu pemasok terlambat 10 hari? Simulasi menjawabnya tanpa harus mencoba di operasi sungguhan, sehingga keputusan diuji lebih dulu di dunia maya.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Rata-rata bisa menyesatkan",
        html: "Merencanakan hanya dengan permintaan rata-rata mengabaikan lonjakan. Jika permintaan rata-rata 100 tapi kadang melonjak 160, stok berbasis rata-rata akan sering habis. Simulasi menampakkan ekor sebaran yang tak terlihat dari satu angka rata-rata.",
      },
      {
        type: "video",
        comp: "DigitalTwinVideo",
        title: "Menjalankan Skenario di Digital Twin",
        caption: "Digital twin adalah wadah ideal menjalankan simulasi Monte Carlo dan menguji skenario what-if.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Sebaran hasil 1.000 iterasi Monte Carlo permintaan harian (ilustrasi)",
        unit: "frekuensi (jumlah iterasi)",
        source: "ilustrasi edukatif",
        note: "Permintaan paling sering di kisaran 90-110, tetapi ada ekor sampai 150 yang harus diantisipasi stok pengaman.",
        data: [
          { label: "60-79", value: 80, color: "#a78bfa" },
          { label: "80-99", value: 300, color: "#60a5fa" },
          { label: "100-119", value: 360, color: "#34d399" },
          { label: "120-139", value: 200, color: "#fbbf24" },
          { label: "140-159", value: 60, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menentukan stok pengaman lewat simulasi",
        html: "Sebuah apotek jaringan di Indonesia menjual obat dengan permintaan harian rata-rata 100 boks, tetapi kadang melonjak. Dengan menjalankan 1.000 simulasi Monte Carlo atas permintaan dan lead time pemasok, mereka menemukan bahwa stok pengaman 40 boks menghasilkan tingkat layanan 95% (kehabisan stok hanya 50 dari 1.000 skenario). Menaikkan stok pengaman ke 70 boks hanya menambah layanan menjadi 99%, dengan biaya simpan jauh lebih besar. Simulasi membantu mereka memilih titik 95% yang paling ekonomis.",
      },
      {
        type: "case",
        title: "Sejarah: Lahirnya metode Monte Carlo (sekitar 1940-an)",
        html: "Pada <strong>sekitar 1940-an</strong> di Laboratorium Los Alamos, Stanislaw Ulam dan John von Neumann mengembangkan <strong>metode Monte Carlo</strong> untuk memecahkan persoalan fisika nuklir yang terlalu rumit dihitung secara langsung. Idenya: gunakan angka acak berulang-ulang untuk memperkirakan hasil. Namanya diambil dari kasino di Monako, lambang keberuntungan dan peluang. Kini metode yang sama dipakai luas di rantai pasok untuk menaksir risiko dan tingkat layanan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dalam 1.000 iterasi Monte Carlo, persediaan cukup memenuhi permintaan pada 950 iterasi. Berapa tingkat layanan (service level) hasil simulasinya?",
        answer: 95,
        tolerance: 0,
        suffix: "%",
        solution:
          "950 / 1.000 x 100% = <strong>95%</strong>. Artinya peluang kehabisan stok sekitar 5%.",
        hint: "Bagi jumlah iterasi yang terpenuhi dengan total iterasi, kali 100%.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika tingkat layanan hasil simulasi 95%, berapa persen peluang kehabisan stok (stockout)?",
        answer: 5,
        tolerance: 0,
        suffix: "%",
        solution:
          "100% - 95% = <strong>5%</strong>. Peluang stockout adalah pelengkap dari tingkat layanan.",
        hint: "Kurangi 100% dengan tingkat layanan.",
      },
      {
        type: "takeaways",
        items: [
          "Simulasi menjalankan ribuan kemungkinan untuk memetakan rentang hasil, bukan satu tebakan.",
          "Monte Carlo memakai angka acak berulang untuk menghasilkan sebaran peluang.",
          "Analisis what-if menguji skenario tanpa mempertaruhkan operasi nyata.",
          "Merencanakan hanya dengan rata-rata mengabaikan lonjakan yang memicu kehabisan stok.",
          "Metode Monte Carlo lahir di Los Alamos (sekitar 1940-an) lewat Ulam dan von Neumann.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa keluaran khas simulasi Monte Carlo?",
            options: [
              "Satu angka pasti tanpa ketidakpastian",
              "Sebaran hasil beserta peluangnya",
              "Daftar nama pemasok",
              "Harga jual produk",
            ],
            answer: 1,
            explain: "Monte Carlo menghasilkan distribusi hasil, bukan jawaban tunggal.",
          },
          {
            q: "Untuk apa analisis what-if dipakai?",
            options: [
              "Mencetak laporan keuangan",
              "Menguji skenario seperti lonjakan permintaan tanpa risiko nyata",
              "Mengganti seluruh karyawan",
              "Menghapus data lama",
            ],
            answer: 1,
            explain: "What-if menjawab pertanyaan skenario di dunia maya sebelum diterapkan.",
          },
          {
            q: "Mengapa merencanakan hanya dengan rata-rata berisiko?",
            options: [
              "Karena rata-rata selalu salah",
              "Karena mengabaikan lonjakan di ekor sebaran yang memicu kehabisan stok",
              "Karena rata-rata terlalu tinggi",
              "Karena tidak ada hubungannya dengan permintaan",
            ],
            answer: 1,
            explain: "Stok berbasis rata-rata sering habis saat permintaan melonjak di atas rata-rata.",
          },
          {
            q: "950 dari 1.000 iterasi terpenuhi. Tingkat layanannya?",
            options: ["5%", "95%", "50%", "99%"],
            answer: 1,
            explain: "950 / 1.000 = 95%.",
          },
          {
            q: "Dari mana metode Monte Carlo berasal?",
            options: [
              "Pasar saham New York 1929",
              "Laboratorium Los Alamos sekitar 1940-an oleh Ulam dan von Neumann",
              "Pabrik Toyota 1950-an",
              "Kantor Walmart 1980-an",
            ],
            answer: 1,
            explain: "Dikembangkan di Los Alamos untuk persoalan nuklir, dinamai kasino di Monako.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "digital-twin-control-tower",
    levelId: "analytics",
    order: 7,
    title: "Digital Twin & Control Tower",
    summary:
      "Puncak analitik rantai pasok: digital twin yang meniru operasi nyata dan control tower yang memberi visibilitas real-time untuk bertindak sebelum masalah membesar.",
    durationMin: 16,
    tags: ["analytics", "digital-twin", "control-tower", "visibilitas"],
    blocks: [
      {
        type: "paragraph",
        html: "Bila dashboard menunjukkan apa yang sudah terjadi dan simulasi menguji kemungkinan, <strong>digital twin</strong> dan <strong>control tower</strong> menyatukan keduanya secara langsung: meniru operasi nyata sekaligus memantau dan mengarahkannya saat kejadian berlangsung.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Diagnostic_monitors_in_the_control_room_of_Wendelstein_7-X.jpg?width=400",
        alt: "Ruang kendali penuh monitor pemantauan",
        caption: "Inilah wujud nyata control tower: satu ruang penuh monitor yang memberi visibilitas real-time lintas pemasok, gudang, dan pengiriman untuk bertindak sebelum masalah membesar.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Digital twin: digital twin",
        html: "<strong>Digital twin</strong> (kembaran digital) adalah model virtual yang meniru rantai pasok nyata, terus diperbarui oleh data sungguhan. Karena cerminannya hidup, kita bisa menguji perubahan di kembaran lebih dulu, melihat akibatnya, lalu menerapkannya di dunia nyata hanya jika hasilnya baik.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Control tower: menara kendali",
        html: "<strong>Control tower</strong> adalah pusat visibilitas <strong>real-time</strong> yang mengumpulkan data dari pemasok, gudang, dan pengiriman dalam satu layar. Ia menyalakan peringatan dini saat ada penyimpangan, sehingga tim bisa bertindak sebelum masalah kecil menjadi besar.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Visibilitas tanpa tindakan itu sia-sia",
        html: "Control tower hanya berguna bila peringatannya ditindaklanjuti. Banyak perusahaan punya layar penuh data tetapi tidak ada proses jelas siapa bertindak atas peringatan apa. Visibilitas harus dipasangkan dengan kewenangan dan prosedur untuk bertindak cepat.",
      },
      {
        type: "video",
        comp: "DigitalTwinVideo",
        title: "Digital Twin & Control Tower Bekerja",
        caption: "Digital twin menguji skenario sementara control tower memantau dan memberi peringatan dini secara real-time.",
      },
      {
        type: "case",
        title: "Studi Kasus: Control tower memangkas waktu respons",
        html: "Sebuah perusahaan logistik di Indonesia sebelumnya baru tahu pengiriman terhambat banjir rata-rata 30 jam setelah kejadian, lewat laporan manual. Setelah memasang control tower yang menarik data GPS armada dan cuaca secara real-time, gangguan terdeteksi dalam 2 jam. Dari 200 pengiriman berisiko dalam setahun, tim berhasil mengalihkan rute 150 di antaranya tepat waktu, menyelamatkan 75% pengiriman yang dulu pasti terlambat.",
      },
      {
        type: "case",
        title: "Sejarah: Simulator kembar Apollo 13 (1970)",
        html: "Pada <strong>1970</strong>, saat misi <strong>Apollo 13</strong> mengalami ledakan tangki oksigen, para insinyur NASA di Bumi memakai rangkaian <strong>simulator yang meniru kondisi pesawat</strong> untuk menguji prosedur penyelamatan sebelum diperintahkan ke awak. Simulator kembar ini sering disebut cikal bakal gagasan digital twin. Istilah digital twin sendiri baru dipopulerkan sekitar 2002, tetapi prinsipnya, menguji solusi pada cerminan sistem sebelum menyentuh yang asli, sudah menyelamatkan tiga astronaut puluhan tahun sebelumnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 200 pengiriman berisiko, control tower membantu menyelamatkan 150 dengan pengalihan rute tepat waktu. Berapa persen pengiriman yang terselamatkan?",
        answer: 75,
        tolerance: 0,
        suffix: "%",
        solution:
          "150 / 200 x 100% = <strong>75%</strong>. Visibilitas real-time mengubah gangguan yang dulu pasti telat menjadi bisa diatasi.",
        hint: "Bagi pengiriman terselamatkan dengan total berisiko, kali 100%.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah dengan perannya dalam analitik rantai pasok.",
        pairs: [
          { left: "Dashboard", right: "Menampilkan apa yang sudah terjadi" },
          { left: "Simulasi Monte Carlo", right: "Menguji rentang kemungkinan masa depan" },
          { left: "Digital twin", right: "Model hidup yang meniru operasi nyata" },
          { left: "Control tower", right: "Visibilitas real-time dan peringatan dini" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Digital twin adalah model virtual hidup yang meniru rantai pasok nyata untuk diuji lebih dulu.",
          "Control tower memberi visibilitas real-time dan peringatan dini lintas mitra.",
          "Visibilitas hanya bernilai bila dipasangkan dengan kewenangan dan prosedur bertindak.",
          "Deteksi gangguan yang lebih cepat memberi ruang mengalihkan rute dan menyelamatkan pengiriman.",
          "Prinsip digital twin sudah terbukti pada simulator kembar Apollo 13 (1970).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu digital twin dalam rantai pasok?",
            options: [
              "Salinan cetak laporan tahunan",
              "Model virtual hidup yang meniru operasi nyata untuk diuji lebih dulu",
              "Gudang cadangan fisik",
              "Daftar pemasok kedua",
            ],
            answer: 1,
            explain: "Digital twin adalah cerminan digital yang terus diperbarui oleh data nyata.",
          },
          {
            q: "Apa fungsi utama control tower?",
            options: [
              "Menyimpan arsip lama",
              "Memberi visibilitas real-time dan peringatan dini lintas rantai pasok",
              "Mengganti gudang fisik",
              "Mencetak faktur",
            ],
            answer: 1,
            explain: "Control tower menyatukan data dan menyalakan peringatan saat ada penyimpangan.",
          },
          {
            q: "Mengapa visibilitas saja tidak cukup?",
            options: [
              "Karena data selalu salah",
              "Karena tanpa kewenangan dan prosedur bertindak, peringatan tidak ditindaklanjuti",
              "Karena layar terlalu kecil",
              "Karena real-time itu mustahil",
            ],
            answer: 1,
            explain: "Visibilitas harus dipasangkan dengan tindakan agar bermanfaat.",
          },
          {
            q: "150 dari 200 pengiriman berisiko terselamatkan. Persentasenya?",
            options: ["50%", "75%", "85%", "100%"],
            answer: 1,
            explain: "150 / 200 = 75%.",
          },
          {
            q: "Peristiwa apa yang dianggap cikal bakal gagasan digital twin?",
            options: [
              "Krisis moneter 1998",
              "Simulator kembar yang dipakai menyelamatkan Apollo 13 pada 1970",
              "Peluncuran SCOR 1996",
              "Tulip mania 1637",
            ],
            answer: 1,
            explain: "NASA menguji prosedur penyelamatan di simulator kembar sebelum diperintahkan ke awak.",
          },
        ],
      },
    ],
  },
];
