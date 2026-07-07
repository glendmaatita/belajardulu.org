import type { Lesson } from "../../../types";

export const level8: Lesson[] = [
  // ============================================================
  {
    id: "sop-demand-planning",
    levelId: "demand",
    order: 1,
    title: "S&OP & Perencanaan Permintaan",
    summary:
      "Permintaan tidak pernah pasti, tapi bisa direncanakan dengan disiplin. Pelajari Sales & Operations Planning yang menyatukan satu angka rencana bagi seluruh perusahaan.",
    durationMin: 14,
    tags: ["demand", "sop", "forecasting"],
    blocks: [
      {
        type: "paragraph",
        html: "Bagian penjualan ingin stok melimpah agar tak kehilangan pembeli. Bagian keuangan ingin stok minimum agar modal tidak terikat. Bagian produksi ingin jadwal stabil. Ketiganya sering memakai angka ramalan yang berbeda. <strong>Sales & Operations Planning (S&OP)</strong> menyatukan mereka dalam <strong>satu rencana</strong> yang disepakati bersama.",
      },
      {
        type: "paragraph",
        html: "S&OP biasanya berjalan sebagai siklus <strong>bulanan</strong>: kumpulkan data permintaan, susun ramalan, padukan dengan kemampuan pasokan, lalu putuskan rencana akhir dalam rapat lintas bagian. Hasilnya satu angka yang dipakai semua orang, bukan ramalan yang saling bertabrakan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/UK-India_Business_Leaders_Climate_Group_breakfast_meeting_%285177859631%29.jpg?width=400",
        alt: "Rapat lintas bagian membahas rencana bersama",
        caption: "Inti S&OP adalah rapat lintas bagian yang menyepakati satu angka rencana, bukan ramalan yang saling bertabrakan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "SnOPVideo",
        title: "Satu Rencana untuk Semua Bagian",
        caption: "Bagaimana siklus S&OP menyatukan penjualan, keuangan, dan produksi dalam satu rencana.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Menyeimbangkan permintaan dan pasokan",
        html: "Jika rencana pasokan di bawah permintaan, perusahaan kehilangan penjualan atau kehabisan stok. Jika di atas, persediaan menumpuk dan modal terikat. S&OP mencari titik tengah yang menjaga layanan tinggi dengan biaya wajar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur kapasitas produksi tetap menghadapi permintaan yang naik-turun, lalu cari titik seimbang agar tidak kehabisan stok sekaligus tidak menumpuk.",
      },
      { type: "widget", widget: "SimulatorSnOP" },
      {
        type: "chart",
        variant: "line",
        title: "Permintaan Bulanan yang Berfluktuasi (ilustrasi)",
        unit: "unit per bulan",
        source: "ilustrasi edukatif pola musiman",
        note: "Permintaan naik-turun musiman; tugas S&OP adalah merencanakan pasokan menghadapi pola ini.",
        data: [
          { label: "Jan", value: 100 },
          { label: "Feb", value: 120 },
          { label: "Mar", value: 160 },
          { label: "Apr", value: 200 },
          { label: "Mei", value: 150 },
          { label: "Jun", value: 110 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lonjakan permintaan menjelang Lebaran",
        html: "Produsen makanan dan minuman di Indonesia menghadapi lonjakan tajam menjelang <strong>Idulfitri</strong>. Tanpa S&OP, pabrik bisa kewalahan dan rak toko kosong di puncak musim, atau sebaliknya kelebihan stok yang tak laku setelah Lebaran. Lewat S&OP, mereka membangun stok lebih awal beberapa bulan sebelumnya, menambah giliran kerja sementara, dan mengamankan bahan baku dari pemasok. Satu rencana yang disepakati membuat seluruh rantai bergerak serempak menyambut puncak musim.",
      },
      {
        type: "case",
        title: "Sejarah: Kemitraan CPFR Walmart dan P&G (1990-an)",
        html: "Pada <strong>1990-an</strong>, <strong>Walmart</strong> dan <strong>Procter & Gamble</strong> memelopori <strong>Collaborative Planning, Forecasting, and Replenishment (CPFR)</strong>. Alih-alih masing-masing meramal sendiri, keduanya berbagi data penjualan nyata dan menyusun ramalan bersama. Walmart membuka data kasir lewat sistem Retail Link, sehingga P&G bisa mengisi ulang rak tepat waktu. Hasilnya: stok lebih rendah, rak lebih jarang kosong, dan biaya turun di kedua sisi. Ini bukti bahwa berbagi data permintaan meredam ketidakpastian sekaligus efek bullwhip.",
      },
      {
        type: "calcExercise",
        prompt:
          "Produksi tetap 140 unit per bulan dengan stok awal 60 unit. Bulan pertama permintaan 100 unit. Berapa stok di akhir bulan pertama?",
        answer: 100,
        tolerance: 0,
        suffix: "unit",
        solution:
          "Stok akhir = stok awal + produksi - permintaan = 60 + 140 - 100 = <strong>100 unit</strong>. Karena produksi melebihi permintaan bulan ini, stok bertambah.",
        hint: "Stok akhir = stok awal + produksi - permintaan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Lanjutan: bulan kedua stok awal 100 unit, produksi 140 unit, permintaan 200 unit. Berapa stok akhir bulan kedua?",
        answer: 40,
        tolerance: 0,
        suffix: "unit",
        solution:
          "100 + 140 - 200 = <strong>40 unit</strong>. Permintaan kini melebihi produksi, jadi stok tergerus. Bila pola ini berlanjut, perusahaan bisa kehabisan stok.",
        hint: "Pakai rumus yang sama; perhatikan permintaan kini lebih besar dari produksi.",
      },
      {
        type: "takeaways",
        items: [
          "S&OP menyatukan penjualan, keuangan, dan produksi dalam satu rencana yang disepakati.",
          "Siklus S&OP umumnya bulanan: data, ramalan, padukan pasokan, putuskan rencana.",
          "Tujuannya menyeimbangkan permintaan dan pasokan: layanan tinggi dengan biaya wajar.",
          "Lonjakan musiman seperti Lebaran dikelola dengan membangun stok dan kapasitas lebih awal.",
          "CPFR Walmart dan P&G membuktikan berbagi data permintaan menekan stok dan efek bullwhip.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama S&OP?",
            options: [
              "Membuat tiap bagian memakai ramalan sendiri-sendiri",
              "Menyatukan satu rencana permintaan-pasokan yang disepakati bersama",
              "Menghapus bagian penjualan",
              "Memproduksi sebanyak mungkin",
            ],
            answer: 1,
            explain: "S&OP menyelaraskan semua bagian pada satu angka rencana yang sama.",
          },
          {
            q: "Apa risiko jika rencana pasokan jauh di bawah permintaan?",
            options: [
              "Persediaan menumpuk",
              "Kehilangan penjualan atau kehabisan stok",
              "Biaya simpan melonjak",
              "Tidak ada dampak",
            ],
            answer: 1,
            explain: "Pasokan kurang membuat stok habis dan penjualan hilang.",
          },
          {
            q: "Seberapa sering siklus S&OP umumnya dijalankan?",
            options: ["Tiap jam", "Bulanan", "Sekali sepuluh tahun", "Tidak pernah"],
            answer: 1,
            explain: "S&OP umumnya berjalan sebagai siklus bulanan lintas bagian.",
          },
          {
            q: "Apa inti kemitraan CPFR Walmart dan P&G?",
            options: [
              "Saling merahasiakan data penjualan",
              "Berbagi data penjualan nyata dan meramal bersama",
              "Berhenti bekerja sama",
              "Menaikkan harga bersama",
            ],
            answer: 1,
            explain: "Berbagi data dan ramalan bersama menekan stok dan kekosongan rak.",
          },
          {
            q: "Stok awal 100, produksi 140, permintaan 200. Stok akhir?",
            options: ["240", "40", "60", "0"],
            answer: 1,
            explain: "100 + 140 - 200 = 40 unit.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "demand-forecasting-dasar",
    levelId: "demand",
    order: 2,
    title: "Demand Forecasting Dasar",
    summary:
      "Meramal permintaan bukan menebak. Kenali dua keluarga metode, kualitatif dan kuantitatif, serta bagaimana horizon waktu menentukan pilihan dan ketelitian ramalan.",
    durationMin: 14,
    tags: ["demand", "forecasting", "horizon"],
    blocks: [
      {
        type: "paragraph",
        html: "Setiap rencana pasokan berdiri di atas sebuah <strong>ramalan permintaan</strong>. Pertanyaannya bukan apakah ramalan akan meleset, melainkan seberapa jauh dan bagaimana kita menyiapkan diri. Ada dua keluarga besar metode: <strong>kualitatif</strong> (mengandalkan penilaian manusia) dan <strong>kuantitatif</strong> (mengandalkan data historis dan rumus).",
      },
      {
        type: "paragraph",
        html: "Metode kualitatif dipakai saat data minim, misalnya produk baru: survei pasar, pendapat tenaga penjual, atau panel ahli. Metode kuantitatif dipakai saat ada riwayat penjualan yang cukup: deret waktu dan model sebab-akibat. Pilihan juga bergantung pada <strong>horizon</strong>: jangka pendek, menengah, atau panjang.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak supermarket penuh produk konsumen",
        caption: "Permintaan ritel di rak toko adalah titik awal setiap ramalan; metode kualitatif dan kuantitatif berlomba menebak laju barang terjual.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Horizon menentukan metode",
        html: "Ramalan jangka pendek (harian sampai mingguan) untuk pengisian stok cocok dengan metode kuantitatif yang cepat. Ramalan jangka panjang (tahunan) untuk investasi pabrik lebih banyak memakai penilaian dan skenario karena ketidakpastiannya besar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Semakin jauh, semakin kabur",
        html: "Ketelitian ramalan menurun seiring panjangnya horizon. Meramal penjualan minggu depan jauh lebih akurat daripada meramal penjualan dua tahun lagi. Karena itu rencana jangka panjang selalu diperbarui saat horizon mendekat.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Jangan hanya satu angka",
        html: "Ramalan yang baik menyertakan rentang, bukan satu titik. Menyatakan permintaan sekitar 900 sampai 1.100 unit lebih jujur dan berguna untuk menetapkan stok pengaman daripada bersikukuh tepat 1.000 unit.",
      },
      {
        type: "video",
        comp: "SnOPVideo",
        title: "Dari Permintaan ke Rencana",
        caption: "Bagaimana ramalan permintaan masuk ke siklus perencanaan yang disepakati bersama.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Error Ramalan Membesar Seiring Horizon (ilustrasi)",
        unit: "rata-rata error (%)",
        source: "ilustrasi edukatif prinsip ketelitian peramalan",
        note: "Semakin jauh horizon, semakin besar error; rencana jangka panjang wajib sering diperbarui.",
        data: [
          { label: "1 minggu", value: 8 },
          { label: "1 bulan", value: 15 },
          { label: "3 bulan", value: 24 },
          { label: "6 bulan", value: 33 },
          { label: "12 bulan", value: 45 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Peluncuran produk baru tanpa riwayat data",
        html: "Sebuah produsen FMCG meluncurkan minuman rasa baru di Indonesia. Tidak ada riwayat penjualan, jadi metode kuantitatif belum bisa dipakai. Tim memakai pendekatan <strong>kualitatif</strong>: survei selera ke 1.200 responden, pendapat 80 tenaga penjual lapangan, dan analogi dari produk sejenis yang pernah laku sekitar 50.000 unit per bulan di tahun pertama. Hasilnya: ramalan awal 35.000 sampai 45.000 unit per bulan, dengan kesepakatan memproduksi konservatif di 30.000 unit lalu menambah cepat bila permintaan terbukti kuat.",
      },
      {
        type: "case",
        title: "Sejarah: Kekacauan ramalan saat awal pandemi COVID-19 (2020)",
        html: "Pada awal <strong>2020</strong>, lonjakan pembelian panik membuat permintaan barang seperti tisu, sabun, dan bahan pokok melonjak jauh di atas pola normal dalam hitungan hari. Model kuantitatif yang berbasis riwayat tahun-tahun sebelumnya seketika tak berdaya karena polanya benar-benar baru. Banyak perusahaan terpaksa kembali ke penilaian manusia dan pembaruan harian. Pelajarannya: model statistik mengandaikan masa depan mirip masa lalu; saat asumsi itu runtuh, peran penilaian kualitatif dan pemantauan cepat menjadi penentu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Penjualan tiga bulan terakhir berturut-turut 200, 240, dan 220 unit. Berapa ramalan bulan depan dengan metode rata-rata sederhana (naif)?",
        answer: 220,
        tolerance: 0,
        suffix: "unit",
        solution:
          "Rata-rata = (200 + 240 + 220) / 3 = 660 / 3 = <strong>220 unit</strong>. Metode rata-rata sederhana memakai purata seluruh data yang tersedia sebagai ramalan periode berikutnya.",
        hint: "Jumlahkan ketiga angka lalu bagi tiga.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan setiap metode peramalan ke jenis yang tepat.",
        buckets: ["Kualitatif", "Kuantitatif"],
        items: [
          { text: "Survei niat beli konsumen", bucket: "Kualitatif" },
          { text: "Pendapat tenaga penjual lapangan", bucket: "Kualitatif" },
          { text: "Panel ahli dan metode Delphi", bucket: "Kualitatif" },
          { text: "Rata-rata bergerak dari penjualan historis", bucket: "Kuantitatif" },
          { text: "Penghalusan eksponensial", bucket: "Kuantitatif" },
          { text: "Regresi terhadap data penjualan masa lalu", bucket: "Kuantitatif" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Metode peramalan terbagi dua: kualitatif (penilaian) dan kuantitatif (data dan rumus).",
          "Pilihan metode bergantung pada ketersediaan data dan panjang horizon.",
          "Ketelitian ramalan menurun seiring jauhnya horizon, jadi rencana jangka panjang sering diperbarui.",
          "Produk baru tanpa riwayat data mengandalkan metode kualitatif seperti survei dan analogi.",
          "Ramalan sebaiknya berupa rentang, bukan satu angka tunggal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapan metode kualitatif paling tepat dipakai?",
            options: [
              "Saat riwayat penjualan panjang dan stabil",
              "Saat data minim, misalnya produk baru",
              "Saat hanya butuh ramalan harian",
              "Saat ingin menghindari penilaian manusia",
            ],
            answer: 1,
            explain: "Tanpa riwayat data, penilaian manusia seperti survei dan analogi menjadi andalan.",
          },
          {
            q: "Bagaimana hubungan horizon dengan ketelitian ramalan?",
            options: [
              "Semakin jauh horizon, semakin akurat",
              "Horizon tidak memengaruhi ketelitian",
              "Semakin jauh horizon, semakin besar galatnya",
              "Hanya horizon pendek yang punya error",
            ],
            answer: 2,
            explain: "Ketidakpastian tumbuh seiring jauhnya horizon sehingga error membesar.",
          },
          {
            q: "Manakah yang termasuk metode kuantitatif?",
            options: [
              "Metode Delphi",
              "Survei niat beli",
              "Penghalusan eksponensial",
              "Pendapat tenaga penjual",
            ],
            answer: 2,
            explain: "Penghalusan eksponensial mengolah data historis dengan rumus, jadi kuantitatif.",
          },
          {
            q: "Penjualan 200, 240, 220. Ramalan rata-rata sederhana bulan depan?",
            options: ["200", "210", "220", "240"],
            answer: 2,
            explain: "(200 + 240 + 220) / 3 = 220 unit.",
          },
          {
            q: "Mengapa awal pandemi 2020 menyulitkan model kuantitatif?",
            options: [
              "Data historis hilang total",
              "Pola permintaan berubah drastis sehingga riwayat tak lagi mewakili",
              "Komputer rusak serempak",
              "Tidak ada yang membeli apa pun",
            ],
            answer: 1,
            explain: "Model mengandaikan masa depan mirip masa lalu; saat pola berubah drastis, model gagal.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "peramalan-deret-waktu",
    levelId: "demand",
    order: 3,
    title: "Peramalan Deret Waktu (Time Series)",
    summary:
      "Saat riwayat penjualan tersedia, deret waktu menjadi alat utama. Pelajari rata-rata bergerak, penghalusan eksponensial (exponential smoothing), serta cara membaca tren dan musiman, lalu ukur ketelitiannya dengan MAPE.",
    durationMin: 15,
    tags: ["demand", "forecasting", "time-series"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Peramalan deret waktu</strong> mengandaikan pola masa lalu akan berlanjut, lalu memproyeksikannya ke depan. Datanya berupa angka penjualan yang berurutan dari waktu ke waktu. Tugas kita memisahkan tiga komponen: <strong>tingkat dasar</strong> (level), <strong>tren</strong> (kecenderungan naik atau turun), dan <strong>musiman</strong> (pola berulang seperti Lebaran atau musim hujan).",
      },
      {
        type: "paragraph",
        html: "Dua teknik klasik paling sering dipakai. <strong>Rata-rata bergerak</strong> menghaluskan gejolak dengan memurata beberapa periode terakhir. <strong>Penghalusan eksponensial</strong> memberi bobot lebih besar pada data terbaru lewat parameter alfa, sehingga ramalan cepat menyesuaikan diri terhadap perubahan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Diagnostic_monitors_in_the_control_room_of_Wendelstein_7-X.jpg?width=400",
        alt: "Layar pemantau data deret waktu di ruang kendali",
        caption: "Peramalan deret waktu membaca aliran angka penjualan dari waktu ke waktu, lalu memisahkan level, tren, dan musiman.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "SnOPVideo",
        title: "Mengubah Riwayat Jadi Ramalan",
        caption: "Bagaimana pola masa lalu diproyeksikan ke depan dan masuk ke rencana yang disepakati.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus penghalusan eksponensial",
        html: "Ramalan baru = Ramalan lama + alfa x (Aktual - Ramalan lama). Alfa antara 0 dan 1. Alfa besar membuat ramalan gesit mengikuti perubahan tetapi mudah terombang-ambing oleh gejolak; alfa kecil membuatnya stabil tetapi lambat menyesuaikan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Hitung ketelitian ramalanmu",
        html: "Pakai kalkulator untuk membandingkan aktual dengan ramalan dan melihat MAPE (Mean Absolute Percentage Error). Semakin kecil MAPE, semakin teliti ramalanmu.",
      },
      { type: "widget", widget: "KalkulatorForecastAccuracy" },
      {
        type: "callout",
        tone: "warn",
        title: "Hati-hati pola musiman",
        html: "Rata-rata bergerak biasa akan tertinggal saat permintaan musiman melonjak, misalnya menjelang Lebaran. Untuk pola berulang yang kuat, gunakan indeks musiman atau metode yang memang menangani musiman seperti Holt-Winters.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Penjualan Aktual vs Rata-rata Bergerak 3 Bulan (ilustrasi)",
        unit: "ribu unit",
        source: "ilustrasi edukatif penghalusan deret waktu",
        note: "Garis rata-rata bergerak lebih mulus dan menapis gejolak, tetapi sedikit tertinggal saat ada lonjakan.",
        data: [
          { label: "Jan", value: 100 },
          { label: "Feb", value: 130 },
          { label: "Mar", value: 110 },
          { label: "Apr", value: 160 },
          { label: "Mei", value: 140 },
          { label: "Jun", value: 180 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ramalan penjualan sirup menjelang Lebaran",
        html: "Sebuah merek sirup di Indonesia mencatat penjualan dasar sekitar 120.000 botol per bulan, tetapi melonjak hingga sekitar tiga kali lipat pada bulan Ramadan menjelang Lebaran. Rata-rata bergerak biasa meramalkan terlalu rendah di bulan puncak. Tim lalu menghitung <strong>indeks musiman</strong>: bulan Ramadan diberi indeks 3,0 sedangkan bulan biasa sekitar 0,8. Dengan mengalikan ramalan dasar ke indeks musiman, ramalan puncak menjadi sekitar 360.000 botol, jauh lebih dekat ke kenyataan dan stok pun cukup.",
      },
      {
        type: "case",
        title: "Sejarah: Lahirnya penghalusan eksponensial (1950-an sampai 1960-an)",
        html: "Teknik <strong>penghalusan eksponensial</strong> dirumuskan sekitar <strong>1950-an</strong> oleh <strong>Robert G. Brown</strong>, yang menerapkannya untuk pengendalian persediaan suku cadang Angkatan Laut Amerika Serikat. Pada awal <strong>1960-an</strong>, <strong>Charles Holt</strong> dan kemudian Peter Winters memperluasnya untuk menangani tren dan musiman, melahirkan metode yang kini dikenal sebagai Holt-Winters. Metode ini menjadi tulang punggung peramalan karena ringkas, cepat dihitung, dan cocok untuk ribuan produk sekaligus.",
      },
      {
        type: "calcExercise",
        prompt:
          "Penjualan empat minggu terakhir: 120, 140, dan 160 unit pada tiga minggu terakhir. Berapa ramalan minggu ke-5 dengan rata-rata bergerak 3 periode?",
        answer: 140,
        tolerance: 0,
        suffix: "unit",
        solution:
          "Rata-rata bergerak 3 periode = (120 + 140 + 160) / 3 = 420 / 3 = <strong>140 unit</strong>. Hanya tiga periode terbaru yang dipakai dan dirata-rata.",
        hint: "Ambil tiga angka terakhir lalu bagi tiga.",
      },
      {
        type: "calcExercise",
        prompt:
          "Ramalan bulan ini 100 unit, aktual ternyata 120 unit. Dengan penghalusan eksponensial alfa 0,2, berapa ramalan bulan depan?",
        answer: 104,
        tolerance: 0,
        suffix: "unit",
        solution:
          "Ramalan baru = 100 + 0,2 x (120 - 100) = 100 + 0,2 x 20 = 100 + 4 = <strong>104 unit</strong>. Ramalan naik sedikit menyesuaikan kejutan permintaan yang lebih tinggi.",
        hint: "Pakai Ramalan baru = Ramalan lama + alfa x (Aktual - Ramalan lama).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap istilah deret waktu dengan maknanya.",
        pairs: [
          { left: "Level", right: "Tingkat dasar permintaan saat ini" },
          { left: "Tren", right: "Kecenderungan naik atau turun jangka panjang" },
          { left: "Musiman", right: "Pola berulang pada periode tertentu" },
          { left: "Alfa", right: "Bobot data terbaru pada penghalusan eksponensial" },
          { left: "MAPE", right: "Ukuran error ramalan dalam persen" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Deret waktu memisahkan permintaan menjadi level, tren, dan musiman.",
          "Rata-rata bergerak menghaluskan gejolak dengan memurata beberapa periode terakhir.",
          "Penghalusan eksponensial memberi bobot lebih besar pada data terbaru lewat alfa.",
          "Pola musiman kuat seperti Lebaran perlu indeks musiman atau metode Holt-Winters.",
          "MAPE mengukur ketelitian ramalan; semakin kecil, semakin baik.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dilakukan rata-rata bergerak?",
            options: [
              "Memakai hanya data tertua",
              "Memurata beberapa periode terakhir untuk menghaluskan gejolak",
              "Mengabaikan seluruh data historis",
              "Menebak secara acak",
            ],
            answer: 1,
            explain: "Rata-rata bergerak memurata sejumlah periode terbaru agar gejolak teredam.",
          },
          {
            q: "Pada penghalusan eksponensial, apa efek alfa besar?",
            options: [
              "Ramalan lambat menyesuaikan",
              "Ramalan gesit mengikuti perubahan tetapi mudah terombang-ambing",
              "Ramalan mengabaikan data terbaru",
              "Tidak berpengaruh",
            ],
            answer: 1,
            explain: "Alfa besar memberi bobot besar ke data terbaru sehingga ramalan gesit namun mudah bergejolak.",
          },
          {
            q: "Ramalan 100, aktual 120, alfa 0,2. Ramalan berikutnya?",
            options: ["100", "104", "110", "120"],
            answer: 1,
            explain: "100 + 0,2 x (120 - 100) = 104 unit.",
          },
          {
            q: "Komponen apa yang menangkap pola berulang menjelang Lebaran?",
            options: ["Level", "Tren", "Musiman", "Error acak"],
            answer: 2,
            explain: "Pola berulang pada periode tertentu adalah komponen musiman.",
          },
          {
            q: "Siapa yang dikenal merumuskan penghalusan eksponensial pada 1950-an?",
            options: ["Robert G. Brown", "Jay Forrester", "Sam Walton", "Oliver Wight"],
            answer: 0,
            explain: "Robert G. Brown merumuskannya untuk pengendalian persediaan pada 1950-an.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "demand-sensing",
    levelId: "demand",
    order: 4,
    title: "Demand Sensing: Membaca Sinyal Jangka Pendek",
    summary:
      "Ramalan deret waktu memakai pola masa lalu, tetapi demand sensing menangkap sinyal nyata yang sedang terjadi: data kasir, cuaca, dan promo, untuk menyesuaikan rencana dalam hitungan hari.",
    durationMin: 14,
    tags: ["demand", "demand-sensing", "real-time"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Demand sensing</strong> adalah peramalan jangka sangat pendek yang memanfaatkan sinyal terbaru dari lapangan, bukan hanya rata-rata historis. Idenya: kapan pun ada data segar yang memberi petunjuk tentang permintaan hari ini dan besok, gunakan untuk memperbaiki rencana pengisian stok secepat mungkin.",
      },
      {
        type: "paragraph",
        html: "Sinyal yang lazim dipakai antara lain <strong>data kasir (POS)</strong> harian, jadwal dan respons <strong>promo</strong>, <strong>cuaca</strong>, hari libur, lalu lintas situs web, sampai tren pencarian. Berbeda dengan S&OP yang berhorizon bulanan, demand sensing bekerja pada horizon hari sampai minggu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Data_logger.jpg?width=400",
        alt: "Perekam data yang mengumpulkan sinyal secara berkala",
        caption: "Demand sensing menyerap sinyal segar dari lapangan, seperti data kasir dan cuaca, untuk menyesuaikan pasokan dalam hitungan hari.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "SnOPVideo",
        title: "Sinyal Cepat Menajamkan Rencana",
        caption: "Bagaimana sinyal jangka pendek mempertajam keputusan pengisian stok di dalam kerangka S&OP.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pendek dan reaktif, bukan pengganti",
        html: "Demand sensing melengkapi, bukan menggantikan, peramalan jangka menengah dan S&OP. Ia mempertajam keputusan pengisian stok harian sementara S&OP tetap menjadi kerangka rencana bulanan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Lihat dampak guncangan pada rencana",
        html: "Coba simulator perencanaan: naikkan permintaan mendadak seperti efek promo atau cuaca panas, lalu amati bagaimana stok dan kapasitas perlu menyesuaikan dengan cepat.",
      },
      { type: "widget", widget: "SimulatorSnOP" },
      {
        type: "callout",
        tone: "warn",
        title: "Sinyal palsu itu ada",
        html: "Tidak semua lonjakan berarti tren. Borong sesaat, kesalahan input data, atau efek satu hari libur bisa menipu. Demand sensing yang baik menyaring derau agar tidak bereaksi berlebihan terhadap sinyal sekali lewat.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Permintaan Harian vs Ramalan Mingguan Datar (ilustrasi)",
        unit: "ribu unit per hari",
        source: "ilustrasi edukatif sinyal jangka pendek",
        note: "Ramalan mingguan datar melewatkan lonjakan akhir pekan dan promo; demand sensing menangkapnya.",
        data: [
          { label: "Sen", value: 40 },
          { label: "Sel", value: 38 },
          { label: "Rab", value: 42 },
          { label: "Kam", value: 55 },
          { label: "Jum", value: 70 },
          { label: "Sab", value: 90 },
          { label: "Min", value: 75 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Cuaca panas dan minuman dingin di ritel",
        html: "Jaringan minimarket di Indonesia memantau prakiraan cuaca per wilayah. Saat suhu diperkirakan naik beberapa hari, sinyal ini dipakai untuk menaikkan kiriman air mineral, es krim, dan minuman dingin ke toko di kota terdampak. Misal permintaan harian dasar sebuah toko untuk air mineral 500 unit, dan data historis menunjukkan cuaca panas menaikkannya sekitar 40 persen. Tim demand sensing menyesuaikan kiriman ke sekitar 700 unit per hari selama gelombang panas, lalu kembali normal setelahnya.",
      },
      {
        type: "case",
        title: "Sejarah: Pop-Tarts dan badai di Walmart (sekitar 2004)",
        html: "Sekitar <strong>2004</strong>, menjelang Badai Frances, analis <strong>Walmart</strong> menelusuri data penjualan dari badai sebelumnya dan menemukan pola tak terduga: penjualan <strong>Pop-Tarts rasa stroberi</strong> melonjak beberapa kali lipat di toko-toko pada jalur badai, selain barang yang sudah diduga seperti senter dan air. Walmart lalu mengirim lebih banyak stok barang-barang itu ke toko terdampak sebelum badai tiba, dan terjual habis. Ini contoh klasik bagaimana sinyal nyata, di sini cuaca ekstrem, dipakai untuk menyesuaikan pasokan jangka pendek.",
      },
      {
        type: "calcExercise",
        prompt:
          "Permintaan harian dasar air mineral di sebuah toko 500 unit. Sinyal cuaca panas diperkirakan menaikkan permintaan 40 persen. Berapa perkiraan permintaan harian saat gelombang panas?",
        answer: 700,
        tolerance: 0,
        suffix: "unit",
        solution:
          "Permintaan saat panas = 500 x (1 + 0,40) = 500 x 1,40 = <strong>700 unit</strong> per hari. Toko perlu menambah kiriman sekitar 200 unit di atas dasar selama gelombang panas.",
        hint: "Kalikan permintaan dasar dengan 1,40.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap hal sebagai sinyal demand sensing atau bukan.",
        buckets: ["Sinyal demand sensing", "Bukan sinyal jangka pendek"],
        items: [
          { text: "Data kasir (POS) harian", bucket: "Sinyal demand sensing" },
          { text: "Prakiraan cuaca beberapa hari ke depan", bucket: "Sinyal demand sensing" },
          { text: "Jadwal dan respons promo", bucket: "Sinyal demand sensing" },
          { text: "Tren pencarian dan lalu lintas situs", bucket: "Sinyal demand sensing" },
          { text: "Proyeksi populasi sepuluh tahun lagi", bucket: "Bukan sinyal jangka pendek" },
          { text: "Rencana investasi pabrik lima tahun", bucket: "Bukan sinyal jangka pendek" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Demand sensing meramal jangka sangat pendek dengan sinyal terbaru dari lapangan.",
          "Sinyal lazim: data kasir, promo, cuaca, hari libur, dan tren pencarian.",
          "Horizonnya hari sampai minggu, melengkapi bukan mengganti S&OP bulanan.",
          "Saring derau agar tidak bereaksi berlebihan terhadap lonjakan sekali lewat.",
          "Sinyal cuaca dan promo bisa menggeser pasokan secara cepat dan tepat sasaran.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa ciri utama demand sensing?",
            options: [
              "Memakai hanya rata-rata historis bertahun-tahun",
              "Memanfaatkan sinyal terbaru untuk horizon hari sampai minggu",
              "Hanya untuk rencana investasi jangka panjang",
              "Menggantikan seluruh proses S&OP",
            ],
            answer: 1,
            explain: "Demand sensing memakai sinyal segar pada horizon sangat pendek.",
          },
          {
            q: "Manakah yang merupakan sinyal demand sensing?",
            options: [
              "Proyeksi populasi sepuluh tahun lagi",
              "Rencana pabrik lima tahun",
              "Data kasir (POS) harian",
              "Anggaran modal dekade depan",
            ],
            answer: 2,
            explain: "Data kasir harian adalah sinyal jangka pendek yang khas dipakai.",
          },
          {
            q: "Permintaan dasar 500 unit, naik 40 persen karena cuaca panas. Permintaan baru?",
            options: ["540", "700", "900", "200"],
            answer: 1,
            explain: "500 x 1,40 = 700 unit per hari.",
          },
          {
            q: "Mengapa perlu menyaring derau pada demand sensing?",
            options: [
              "Agar lebih lambat bereaksi",
              "Agar tidak bereaksi berlebihan terhadap lonjakan sekali lewat",
              "Agar mengabaikan semua sinyal",
              "Agar data historis dibuang",
            ],
            answer: 1,
            explain: "Lonjakan sesaat bisa menipu; penyaringan derau mencegah reaksi berlebih.",
          },
          {
            q: "Apa pelajaran dari kasus Pop-Tarts dan badai di Walmart?",
            options: [
              "Cuaca tidak memengaruhi penjualan",
              "Sinyal nyata seperti cuaca ekstrem dapat memandu pasokan jangka pendek",
              "Promo selalu gagal",
              "Data historis tidak berguna",
            ],
            answer: 1,
            explain: "Walmart memakai sinyal badai untuk menggeser stok sebelum badai tiba.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "collaborative-planning-cpfr",
    levelId: "demand",
    order: 5,
    title: "Collaborative Planning (CPFR)",
    summary:
      "Permintaan paling jernih saat mitra dagang berbagi data dan meramal bersama. Pelajari CPFR sebagai kerangka kolaborasi pemasok dan peritel untuk meredam efek bullwhip.",
    durationMin: 14,
    tags: ["demand", "cpfr", "kolaborasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Bila setiap mitra dalam rantai pasok meramal sendiri-sendiri, kesalahan kecil di rak toko membesar di setiap tingkat ke hulu. Inilah <strong>efek bullwhip</strong>. <strong>Collaborative Planning, Forecasting, and Replenishment (CPFR)</strong> melawannya dengan satu prinsip: mitra dagang berbagi data permintaan nyata dan menyusun <strong>satu ramalan bersama</strong>.",
      },
      {
        type: "paragraph",
        html: "CPFR menyatukan peritel dan pemasok dalam empat aktivitas inti: <strong>strategi dan perencanaan</strong> (sepakati aturan main), <strong>manajemen permintaan dan pasokan</strong> (susun ramalan penjualan dan rencana pengisian bersama), <strong>eksekusi</strong> (pesan dan kirim), serta <strong>analisis</strong> (ukur, pelajari, perbaiki). Yang membedakannya dari sekadar bertukar pesanan adalah keterbukaan data dan ramalan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Modern_warehouse_with_pallet_rack_storage_system.jpg?width=400",
        alt: "Gudang dengan sistem rak palet penyimpanan",
        caption: "CPFR menyelaraskan pengisian gudang peritel dengan rencana pasokan pemasok agar rak jarang kosong dan stok tidak menumpuk.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Satu ramalan, dua pihak",
        html: "Inti CPFR bukan teknologi, melainkan kesepakatan untuk transparan. Saat peritel membuka data penjualan kasir dan pemasok membuka rencana pasokan, keduanya bekerja dari satu angka, bukan saling menebak niat lawan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa bullwhip muncul",
        html: "Tanpa berbagi data, setiap tingkat menambah stok pengaman ekstra untuk berjaga, melebih-lebihkan pesanan, dan bereaksi terlambat terhadap perubahan. Akibatnya gejolak permintaan membesar makin ke hulu, dari toko ke distributor hingga pabrik.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Kolaborasi butuh kepercayaan",
        html: "CPFR gagal bila salah satu pihak menyembunyikan informasi atau memakai data mitra untuk menekan harga sepihak. Berbagi data menuntut perjanjian yang jelas tentang kerahasiaan dan pembagian manfaat.",
      },
      {
        type: "video",
        comp: "SnOPVideo",
        title: "Menyatukan Rencana Lintas Mitra",
        caption: "Bagaimana satu rencana yang disepakati meredam gejolak di sepanjang rantai pasok.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Efek Bullwhip: Ragam Pesanan Membesar ke Hulu (ilustrasi)",
        unit: "indeks variabilitas pesanan",
        source: "ilustrasi edukatif efek bullwhip",
        note: "Tanpa berbagi data, gejolak permintaan diperbesar dari toko menuju pabrik.",
        data: [
          { label: "Toko", value: 10 },
          { label: "Distributor", value: 22 },
          { label: "Pabrik", value: 40 },
          { label: "Pemasok bahan", value: 65 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Peritel dan pemasok mi instan berbagi data",
        html: "Sebuah peritel modern di Indonesia dan pemasok mi instan menerapkan pola CPFR. Sebelumnya pemasok hanya melihat pesanan, sehingga sering kaget saat ada promo. Setelah peritel membuka data penjualan kasir mingguan dan jadwal promo, keduanya menyusun ramalan bersama. Hasil dalam enam bulan: tingkat kekosongan rak turun dari sekitar 8 persen menjadi 3 persen, dan stok di gudang peritel turun sekitar 15 persen karena pengisian jadi lebih tepat waktu.",
      },
      {
        type: "case",
        title: "Sejarah: Beer Game MIT dan efek bullwhip (1960-an)",
        html: "Pada <strong>1960-an</strong>, <strong>Jay Forrester</strong> di <strong>MIT</strong> mengembangkan system dynamics dan permainan simulasi yang kelak terkenal sebagai <strong>Beer Game</strong>. Dalam permainan ini, pemain berperan sebagai peritel, grosir, distributor, dan pabrik bir, hanya boleh berkomunikasi lewat pesanan. Hasilnya hampir selalu sama: perubahan kecil permintaan konsumen memicu ayunan pesanan dan persediaan yang makin besar ke hulu. Permainan ini menjadi bukti ikonik efek bullwhip dan alasan mengapa berbagi informasi, inti CPFR, sangat menyembuhkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebelum CPFR, tingkat kekosongan rak 8 persen. Setelah CPFR turun menjadi 3 persen. Berapa poin persen penurunannya?",
        answer: 5,
        tolerance: 0,
        suffix: "poin persen",
        solution:
          "Penurunan = 8 - 3 = <strong>5 poin persen</strong>. Rak yang lebih jarang kosong berarti penjualan yang hilang ikut berkurang.",
        hint: "Kurangkan angka sesudah dari angka sebelum.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap aktivitas CPFR dengan kegiatannya.",
        pairs: [
          { left: "Strategi dan perencanaan", right: "Menyepakati aturan main dan tujuan bersama" },
          { left: "Manajemen permintaan dan pasokan", right: "Menyusun ramalan penjualan dan rencana pengisian bersama" },
          { left: "Eksekusi", right: "Memesan dan mengirim barang" },
          { left: "Analisis", right: "Mengukur kinerja lalu memperbaiki proses" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "CPFR membuat mitra dagang berbagi data dan menyusun satu ramalan bersama.",
          "Tujuan utamanya meredam efek bullwhip yang membesarkan gejolak ke hulu.",
          "Empat aktivitas: strategi, manajemen permintaan-pasokan, eksekusi, dan analisis.",
          "Keterbukaan data menurunkan kekosongan rak sekaligus stok berlebih.",
          "Kolaborasi menuntut kepercayaan dan perjanjian yang jelas antar mitra.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti dari CPFR?",
            options: [
              "Setiap mitra meramal sendiri secara rahasia",
              "Mitra berbagi data dan menyusun satu ramalan bersama",
              "Menghapus pemasok dari rantai",
              "Menaikkan stok pengaman di setiap tingkat",
            ],
            answer: 1,
            explain: "CPFR berlandaskan keterbukaan data dan ramalan bersama antar mitra.",
          },
          {
            q: "Apa itu efek bullwhip?",
            options: [
              "Gejolak permintaan mengecil ke hulu",
              "Gejolak permintaan membesar dari toko menuju pabrik",
              "Permintaan selalu tetap di semua tingkat",
              "Harga naik di setiap tingkat",
            ],
            answer: 1,
            explain: "Tanpa berbagi data, ragam pesanan diperbesar makin ke hulu.",
          },
          {
            q: "Manakah yang termasuk empat aktivitas inti CPFR?",
            options: [
              "Pemasaran, iklan, diskon, kemasan",
              "Strategi, manajemen permintaan-pasokan, eksekusi, analisis",
              "Rekrutmen, pelatihan, audit, pajak",
              "Desain, produksi, gudang, ekspor",
            ],
            answer: 1,
            explain: "Empatnya: strategi, manajemen permintaan-pasokan, eksekusi, dan analisis.",
          },
          {
            q: "Kekosongan rak turun dari 8 persen ke 3 persen. Berapa poin persen turunnya?",
            options: ["3", "5", "8", "11"],
            answer: 1,
            explain: "8 - 3 = 5 poin persen.",
          },
          {
            q: "Apa yang dibuktikan Beer Game MIT?",
            options: [
              "Berbagi data tidak berguna",
              "Perubahan kecil permintaan memicu ayunan besar ke hulu",
              "Permintaan tidak pernah berubah",
              "Pesanan selalu stabil di pabrik",
            ],
            answer: 1,
            explain: "Beer Game menunjukkan efek bullwhip dan pentingnya berbagi informasi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "integrated-business-planning",
    levelId: "demand",
    order: 6,
    title: "Integrated Business Planning (IBP)",
    summary:
      "IBP memperluas S&OP dari sekadar menyeimbangkan permintaan dan pasokan menjadi satu rencana yang menyambungkan volume, keuangan, dan strategi perusahaan.",
    durationMin: 15,
    tags: ["demand", "ibp", "sop"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Integrated Business Planning (IBP)</strong> adalah evolusi S&OP. Jika S&OP klasik fokus menyeimbangkan permintaan dan pasokan dalam satuan unit, IBP menambahkan dimensi <strong>keuangan</strong> dan <strong>strategi</strong>: rencana volume diterjemahkan ke pendapatan, laba, dan arus kas, lalu diuji terhadap target perusahaan.",
      },
      {
        type: "paragraph",
        html: "Dengan IBP, satu rapat pimpinan dapat melihat rantai utuh: ramalan permintaan, rencana pasokan, proyeksi keuangan, dan kesesuaiannya dengan sasaran tahunan. Bila ramalan menunjukkan penjualan di bawah target laba, manajemen bisa memutuskan tindakan sejak dini, misalnya promo, lini baru, atau penyesuaian biaya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/UK-India_Business_Leaders_Climate_Group_breakfast_meeting_%285177859631%29.jpg?width=400",
        alt: "Rapat pimpinan membahas rencana bisnis terpadu",
        caption: "IBP membawa rencana operasi ke meja pimpinan, menyambungkan volume dengan pendapatan, laba, dan strategi perusahaan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "SnOPVideo",
        title: "Dari Rencana Operasi ke Angka Bisnis",
        caption: "Bagaimana rencana volume diterjemahkan ke keuangan dan diuji terhadap target perusahaan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dari unit ke rupiah",
        html: "Perbedaan terbesar IBP dari S&OP adalah menyambungkan rencana operasi ke angka keuangan. Rencana 10.000 unit menjadi bermakna saat diterjemahkan ke proyeksi pendapatan dan laba yang bisa dibandingkan dengan anggaran.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Horizon lebih panjang",
        html: "IBP umumnya memandang ke depan 18 sampai 36 bulan secara bergulir, lebih panjang dari S&OP yang sering hanya beberapa bulan. Tujuannya menyelaraskan keputusan operasi harian dengan arah strategis perusahaan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Latih keseimbangan rencana",
        html: "Pakai simulator perencanaan untuk merasakan trade-off antara kapasitas, stok, dan permintaan. Intuisi inilah yang dipakai di meja IBP saat memutuskan rencana akhir yang menyentuh angka keuangan.",
      },
      { type: "widget", widget: "SimulatorSnOP" },
      {
        type: "chart",
        variant: "area",
        title: "Rencana Volume Diterjemahkan ke Pendapatan (ilustrasi)",
        unit: "miliar rupiah per kuartal",
        source: "ilustrasi edukatif keterkaitan volume dan keuangan",
        note: "IBP menyatukan proyeksi volume dengan pendapatan agar selaras target tahunan.",
        data: [
          { label: "K1", value: 50 },
          { label: "K2", value: 58 },
          { label: "K3", value: 72 },
          { label: "K4", value: 90 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menutup celah terhadap target laba tahunan",
        html: "Sebuah perusahaan barang konsumsi menjalankan IBP dan menemukan ramalan tahun berjalan hanya mencapai laba sekitar Rp 80 miliar, padahal target Rp 100 miliar. Dengan melihat rencana volume dan keuangan secara terpadu, manajemen memutuskan tiga langkah: meluncurkan kemasan ekonomis untuk pasar baru, mempercepat promo di kuartal lemah, dan menahan biaya tetap. Karena celah terlihat lewat IBP sejak awal tahun, mereka punya cukup waktu untuk menutupnya, bukan terkejut di akhir tahun.",
      },
      {
        type: "case",
        title: "Sejarah: Oliver Wight dan kelahiran istilah IBP (sekitar 2000-an)",
        html: "Konsep S&OP dipopulerkan sejak <strong>1980-an</strong> oleh praktik dan tulisan yang dikaitkan dengan <strong>Oliver Wight</strong>, seorang pelopor perencanaan manufaktur. Pada sekitar <strong>2000-an</strong>, kelompok konsultan Oliver Wight memperkenalkan istilah <strong>Integrated Business Planning</strong> untuk menggambarkan S&OP yang sudah diperluas ke keuangan dan strategi, melibatkan pimpinan puncak, bukan sekadar rapat operasi. Sejak itu IBP menjadi standar bagi banyak perusahaan besar untuk menyatukan rencana operasi dan bisnis.",
      },
      {
        type: "calcExercise",
        prompt:
          "Rencana penjualan 10.000 unit dengan harga Rp 25.000 per unit dan margin laba kotor 30 persen. Berapa laba kotor yang diproyeksikan?",
        answer: 75000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Pendapatan = 10.000 x Rp 25.000 = Rp 250.000.000. Laba kotor = 30 persen x Rp 250.000.000 = <strong>Rp 75.000.000</strong>. Inilah inti IBP: rencana volume diterjemahkan ke angka keuangan.",
        hint: "Hitung pendapatan dulu, lalu kalikan dengan margin 0,30.",
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan apakah tiap unsur dicakup oleh S&OP klasik saja atau ditambahkan oleh IBP.",
        buckets: ["Inti S&OP klasik", "Tambahan khas IBP"],
        items: [
          { text: "Menyeimbangkan permintaan dan pasokan dalam unit", bucket: "Inti S&OP klasik" },
          { text: "Ramalan permintaan bulanan", bucket: "Inti S&OP klasik" },
          { text: "Proyeksi pendapatan dan laba", bucket: "Tambahan khas IBP" },
          { text: "Pengujian terhadap target strategis perusahaan", bucket: "Tambahan khas IBP" },
          { text: "Horizon bergulir 18 sampai 36 bulan", bucket: "Tambahan khas IBP" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "IBP adalah evolusi S&OP yang menambah dimensi keuangan dan strategi.",
          "Rencana volume diterjemahkan ke pendapatan, laba, dan arus kas.",
          "Horizonnya bergulir lebih panjang, umumnya 18 sampai 36 bulan.",
          "IBP melibatkan pimpinan puncak untuk menutup celah terhadap target sejak dini.",
          "Istilah IBP dipopulerkan kelompok Oliver Wight pada sekitar 2000-an.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa pembeda utama IBP dari S&OP klasik?",
            options: [
              "IBP hanya memakai satuan unit",
              "IBP menyambungkan rencana operasi ke angka keuangan dan strategi",
              "IBP mengabaikan permintaan",
              "IBP hanya untuk perusahaan kecil",
            ],
            answer: 1,
            explain: "IBP menerjemahkan rencana volume ke keuangan dan menguji terhadap strategi.",
          },
          {
            q: "Berapa horizon yang umum dipakai IBP?",
            options: ["1 minggu", "1 bulan", "18 sampai 36 bulan bergulir", "10 tahun tetap"],
            answer: 2,
            explain: "IBP memandang ke depan 18 sampai 36 bulan secara bergulir.",
          },
          {
            q: "10.000 unit, harga Rp 25.000, margin 30 persen. Laba kotor?",
            options: ["Rp 25.000.000", "Rp 50.000.000", "Rp 75.000.000", "Rp 250.000.000"],
            answer: 2,
            explain: "Pendapatan Rp 250.000.000 x 30 persen = Rp 75.000.000.",
          },
          {
            q: "Manakah tambahan khas IBP, bukan S&OP klasik?",
            options: [
              "Menyeimbangkan permintaan dan pasokan unit",
              "Ramalan permintaan bulanan",
              "Proyeksi pendapatan dan laba",
              "Menyusun jadwal produksi",
            ],
            answer: 2,
            explain: "Proyeksi keuangan adalah lapisan yang ditambahkan IBP di atas S&OP.",
          },
          {
            q: "Siapa yang dikaitkan dengan mempopulerkan istilah IBP?",
            options: ["Jay Forrester", "Kelompok Oliver Wight", "Sam Walton", "Charles Holt"],
            answer: 1,
            explain: "Kelompok konsultan Oliver Wight memperkenalkan istilah IBP sekitar 2000-an.",
          },
        ],
      },
    ],
  },
];
