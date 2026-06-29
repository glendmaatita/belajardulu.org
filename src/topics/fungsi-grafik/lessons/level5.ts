import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "membaca-informasi-dari-grafik",
    levelId: "membaca-grafik",
    order: 1,
    title: "Membaca Informasi dari Grafik",
    summary:
      "Sebelum menghafal istilah, kita amati dulu grafik suhu satu hari penuh sampai ceritanya terbaca jelas.",
    durationMin: 13,
    tags: ["grafik", "membaca", "puncak", "naik-turun"],
    blocks: [
      {
        type: "paragraph",
        html: "Pagi-pagi udara terasa sejuk, siang menyengat, malam dingin lagi. Stasiun cuaca mencatat suhu tiap jam dan menggambarnya jadi sebuah garis. Sebelum belajar istilah resminya, ayo baca dulu cerita satu hari ini lewat grafiknya.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Membaca Cerita di Balik Grafik",
        caption: "Naik, turun, dan puncak sebuah grafik menceritakan apa yang terjadi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Telusuri garisnya dari kiri ke kanan. Dari pagi suhu terus naik, mencapai titik tertinggi sekitar siang, lalu menurun sampai malam. Tanpa rumus apa pun, kamu sudah bisa menunjuk kapan paling panas dan kapan paling sejuk. Itulah inti membaca grafik.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Suhu Udara Sebuah Kota dalam Satu Hari",
        unit: "derajat Celsius",
        source: "ilustrasi edukatif",
        note: "Garis naik berarti suhu bertambah, garis turun berarti berkurang. Titik tertinggi terjadi pada pukul 13.00.",
        data: [
          { label: "06.00", value: 23, color: "#38bdf8" },
          { label: "09.00", value: 27, color: "#38bdf8" },
          { label: "13.00", value: 33, color: "#f97316" },
          { label: "16.00", value: 30, color: "#38bdf8" },
          { label: "19.00", value: 26, color: "#38bdf8" },
          { label: "22.00", value: 24, color: "#38bdf8" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga hal yang selalu kita cari",
        html: "Saat membaca grafik, perhatikan: (1) <strong>sumbu</strong> mendatar dan tegak menunjukkan apa, (2) bagian yang <strong>naik atau turun</strong>, dan (3) <strong>titik tertinggi (maksimum) dan terendah (minimum)</strong>. Tiga hal ini hampir selalu jadi pertanyaan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari grafik suhu di atas, berapa selisih suhu antara titik tertinggi (pukul 13.00) dan suhu pukul 06.00?",
        answer: 10,
        suffix: " °C",
        solution:
          "Suhu tertinggi 33 °C terjadi pukul 13.00, suhu pukul 06.00 adalah 23 °C. Selisihnya 33 - 23 = <strong>10 °C</strong>.",
        hint: "Cari nilai tertinggi pada grafik, lalu kurangi dengan nilai pukul 06.00.",
      },
      {
        type: "classifyExercise",
        prompt: "Berdasarkan grafik suhu, kelompokkan tiap selang waktu berikut.",
        buckets: ["Suhu naik", "Suhu turun"],
        items: [
          { text: "Pukul 06.00 ke 09.00", bucket: "Suhu naik" },
          { text: "Pukul 09.00 ke 13.00", bucket: "Suhu naik" },
          { text: "Pukul 13.00 ke 16.00", bucket: "Suhu turun" },
          { text: "Pukul 19.00 ke 22.00", bucket: "Suhu turun" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah membaca grafik dengan artinya.",
        pairs: [
          { left: "Titik maksimum", right: "Nilai tertinggi pada grafik" },
          { left: "Titik minimum", right: "Nilai terendah pada grafik" },
          { left: "Bagian naik", right: "Garis bergerak ke atas saat ke kanan" },
          { left: "Sumbu mendatar", right: "Menunjukkan waktu atau masukan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Grafik harga saham",
        html: "Layar aplikasi saham menampilkan garis harga sepanjang hari. Investor tidak membaca rumus; ia membaca grafiknya. Bagian yang naik berarti harga menguat, bagian yang turun berarti melemah, dan puncak tertinggi menandai harga terbaik hari itu. Dengan keterampilan yang sama seperti membaca grafik suhu, ia memutuskan kapan membeli atau menjual.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Membaca grafik berarti menerjemahkan garis menjadi cerita: <strong>arah naik-turun</strong> menceritakan perubahan, <strong>titik tertinggi dan terendah</strong> menandai puncak peristiwa, dan <strong>sumbu</strong> memberi tahu kita satuan serta makna setiap angka. Grafik adalah ringkasan data yang bisa dibaca dalam sekejap.",
      },
      {
        type: "takeaways",
        items: [
          "Garis naik berarti nilai bertambah, garis turun berarti nilai berkurang.",
          "Titik maksimum adalah nilai tertinggi, titik minimum adalah nilai terendah.",
          "Sumbu mendatar dan tegak memberi tahu satuan dan makna setiap angka.",
          "Membaca grafik adalah menerjemahkan garis menjadi cerita data.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada grafik suhu, garis yang bergerak naik ke kanan menunjukkan?",
            options: [
              "Suhu sedang bertambah",
              "Suhu sedang berkurang",
              "Suhu tetap",
              "Tidak ada data",
            ],
            answer: 0,
            explain: "Garis naik artinya nilai (suhu) bertambah seiring waktu.",
          },
          {
            q: "Titik tertinggi pada sebuah grafik disebut?",
            options: ["Titik minimum", "Titik maksimum", "Sumbu", "Gradien"],
            answer: 1,
            explain: "Nilai tertinggi pada grafik disebut titik maksimum.",
          },
          {
            q: "Pada grafik suhu di pelajaran, suhu tertinggi terjadi pada pukul?",
            options: ["06.00", "09.00", "13.00", "22.00"],
            answer: 2,
            explain: "Nilai tertinggi 33 °C tercatat pada pukul 13.00.",
          },
          {
            q: "Sumbu mendatar pada grafik suhu harian biasanya menunjukkan?",
            options: ["Suhu", "Waktu", "Harga", "Jarak"],
            answer: 1,
            explain: "Sumbu mendatar menunjukkan waktu, sumbu tegak menunjukkan suhu.",
          },
          {
            q: "Jika harga saham digrafikkan dan garisnya menurun, artinya?",
            options: [
              "Harga menguat",
              "Harga melemah",
              "Harga tidak berubah",
              "Tidak bisa dibaca",
            ],
            answer: 1,
            explain: "Garis turun berarti nilai berkurang, jadi harga melemah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menggeser-grafik",
    levelId: "membaca-grafik",
    order: 2,
    title: "Menggeser Grafik (Translasi)",
    summary:
      "Kita amati dua hari cuaca yang bentuknya sama tapi posisinya bergeser, lalu temukan aturan menggeser grafik.",
    durationMin: 14,
    tags: ["grafik", "translasi", "geser", "transformasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan grafik pasang air laut hari ini dan besok. Bentuk gelombangnya nyaris sama, hanya saja besok puncaknya datang lebih lambat dan airnya sedikit lebih tinggi. Grafiknya seperti digeser. Ayo selami dulu apa yang sebenarnya terjadi.",
      },
      {
        type: "video",
        comp: "FungsiVideo",
        title: "Video: Menggeser Grafik ke Segala Arah",
        caption: "Bentuk grafik tetap, hanya posisinya yang berpindah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Mainkan plotter: gambar y = f(x), lalu tambahkan 3 menjadi y = f(x) + 3. Seluruh grafik melompat ke atas 3 satuan, bentuknya sama persis. Sekarang coba y = f(x - 2). Aneh, tanda minus malah menggeser grafik ke kanan. Rasakan dulu pola ini sebelum kita namai aturannya.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Ketinggian Air Pasang Dua Hari Berturut-turut",
        unit: "meter",
        source: "ilustrasi edukatif",
        note: "Hari kedua mencatat ketinggian yang kira-kira 1 meter lebih tinggi pada tiap jam, seolah grafiknya digeser ke atas.",
        data: [
          { label: "Hari-1 06.00", value: 2, color: "#0ea5e9" },
          { label: "Hari-1 12.00", value: 5, color: "#0ea5e9" },
          { label: "Hari-1 18.00", value: 3, color: "#0ea5e9" },
          { label: "Hari-2 06.00", value: 3, color: "#22c55e" },
          { label: "Hari-2 12.00", value: 6, color: "#22c55e" },
          { label: "Hari-2 18.00", value: 4, color: "#22c55e" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Hati-hati arah mendatar",
        html: "Geseran ke atas atau bawah terasa wajar: <strong>+k naik, -k turun</strong>. Tapi geseran mendatar berlawanan dengan dugaan. Menulis <strong>f(x - h)</strong> justru menggeser grafik ke <strong>kanan</strong> sebesar h, sedangkan <strong>f(x + h)</strong> menggeser ke <strong>kiri</strong>. Sebabnya, agar keluaran yang sama muncul, x harus dinaikkan lebih dulu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Titik (2, 5) berada pada grafik y = f(x). Setelah digeser menjadi y = f(x) + 4, berapa nilai y untuk titik dengan x = 2?",
        answer: 9,
        solution:
          "Menambah 4 menggeser grafik ke atas 4 satuan, jadi nilai y bertambah 4: 5 + 4 = <strong>9</strong>. Titiknya menjadi (2, 9).",
        hint: "Geser ke atas berarti tinggi setiap titik bertambah sesuai angka yang ditambahkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Grafik y = f(x - 3) adalah hasil pergeseran y = f(x). Berapa satuan grafik bergeser ke kanan?",
        answer: 3,
        suffix: " satuan",
        solution:
          "Bentuk f(x - 3) menggeser grafik ke kanan sebesar <strong>3</strong> satuan. Tanda minus di dalam kurung berarti pindah ke kanan, bukan kiri.",
        hint: "f(x - h) menggeser ke kanan sebesar h.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan setiap transformasi berdasarkan arah geserannya.",
        buckets: ["Geser ke atas/bawah", "Geser ke kiri/kanan"],
        items: [
          { text: "y = f(x) + 5", bucket: "Geser ke atas/bawah" },
          { text: "y = f(x) - 2", bucket: "Geser ke atas/bawah" },
          { text: "y = f(x - 4)", bucket: "Geser ke kiri/kanan" },
          { text: "y = f(x + 1)", bucket: "Geser ke kiri/kanan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Jadwal matahari terbenam",
        html: "Grafik waktu matahari terbenam sepanjang tahun berbentuk gelombang. Saat berpindah ke zona waktu yang berbeda, semua jadwal maju atau mundur dengan jumlah jam yang sama: grafiknya tergeser secara vertikal. Saat musim berganti, puncaknya bergeser ke tanggal yang berbeda: grafiknya tergeser secara horizontal. Dua jenis geseran ini muncul di kehidupan nyata persis seperti di plotter.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Aturan translasi: <strong>y = f(x) + k</strong> menggeser grafik ke atas (k turun jika negatif), <strong>y = f(x - h)</strong> menggeser ke kanan, dan <strong>y = f(x + h)</strong> menggeser ke kiri. Bentuk grafik tidak berubah sama sekali, hanya posisinya yang berpindah.",
      },
      {
        type: "takeaways",
        items: [
          "Menambah konstanta di luar fungsi, f(x) + k, menggeser grafik ke atas atau bawah.",
          "Mengubah x di dalam fungsi, f(x - h), menggeser grafik ke kanan; f(x + h) ke kiri.",
          "Geseran horizontal berlawanan dengan tanda yang terlihat.",
          "Translasi memindahkan posisi grafik tanpa mengubah bentuknya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Grafik y = f(x) + 3 adalah hasil menggeser y = f(x)?",
            options: [
              "Ke atas 3 satuan",
              "Ke bawah 3 satuan",
              "Ke kanan 3 satuan",
              "Ke kiri 3 satuan",
            ],
            answer: 0,
            explain: "Menambah 3 di luar fungsi menggeser grafik ke atas 3 satuan.",
          },
          {
            q: "Grafik y = f(x - 2) bergeser ke?",
            options: [
              "Kiri 2 satuan",
              "Kanan 2 satuan",
              "Atas 2 satuan",
              "Bawah 2 satuan",
            ],
            answer: 1,
            explain: "f(x - h) menggeser ke kanan sebesar h, jadi kanan 2 satuan.",
          },
          {
            q: "Untuk menggeser grafik ke kiri 5 satuan, kita tulis?",
            options: ["f(x - 5)", "f(x + 5)", "f(x) + 5", "f(x) - 5"],
            answer: 1,
            explain: "f(x + 5) menggeser grafik ke kiri 5 satuan.",
          },
          {
            q: "Titik (1, 4) pada y = f(x). Pada y = f(x) - 1, titik untuk x = 1 menjadi?",
            options: ["(1, 5)", "(1, 3)", "(0, 4)", "(2, 4)"],
            answer: 1,
            explain: "Geser ke bawah 1: 4 - 1 = 3, jadi (1, 3).",
          },
          {
            q: "Saat grafik ditranslasikan, apa yang TIDAK berubah?",
            options: [
              "Posisinya",
              "Letak puncaknya",
              "Bentuk grafiknya",
              "Titik potong sumbunya",
            ],
            answer: 2,
            explain: "Translasi hanya memindahkan posisi; bentuk grafik tetap sama.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "meregang-dan-membalik-grafik",
    levelId: "membaca-grafik",
    order: 3,
    title: "Meregang dan Membalik Grafik",
    summary:
      "Dengan grafik lompatan bola, kita rasakan dulu apa artinya grafik direntangkan tinggi dan dibalik terbalik.",
    durationMin: 14,
    tags: ["grafik", "regang", "pencerminan", "transformasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Lemparkan bola pelan, lintasannya membentuk lengkung rendah. Lemparkan kuat, lengkungnya jauh lebih tinggi padahal bentuknya mirip. Dan kalau kita gambar lintasan air mancur yang jatuh, lengkungnya seakan terbalik. Ayo amati dulu apa yang membuat grafik merentang dan membalik.",
      },
      {
        type: "video",
        comp: "PolaAlam",
        title: "Video: Meregang dan Mencerminkan Grafik",
        caption: "Mengalikan fungsi mengubah tinggi dan arah lengkungannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Di plotter, gambar y = f(x). Lalu coba y = 2 · f(x): grafik terentang dua kali lebih tinggi, makin curam. Sekarang coba y = -f(x): seluruh grafik terbalik seperti dipantulkan di cermin sumbu mendatar, yang tadinya puncak kini menjadi lembah. Rasakan dua efek berbeda ini.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Ketinggian Bola yang Dilempar (Lemparan Pelan vs Kuat)",
        unit: "meter",
        source: "ilustrasi edukatif",
        note: "Lemparan kuat menghasilkan lengkung yang sama bentuknya tetapi dua kali lebih tinggi, seperti grafik yang diregang ke arah tegak.",
        data: [
          { label: "Pelan 1 dtk", value: 4, color: "#0ea5e9" },
          { label: "Pelan 2 dtk", value: 6, color: "#0ea5e9" },
          { label: "Pelan 3 dtk", value: 4, color: "#0ea5e9" },
          { label: "Kuat 1 dtk", value: 8, color: "#f97316" },
          { label: "Kuat 2 dtk", value: 12, color: "#f97316" },
          { label: "Kuat 3 dtk", value: 8, color: "#f97316" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Regang berbeda dengan balik",
        html: "Mengalikan dengan angka positif lebih dari 1, seperti <strong>2 · f(x)</strong>, <strong>meregang</strong> grafik ke arah tegak (lebih tinggi). Mengalikan dengan pecahan seperti 0,5 · f(x) justru <strong>memendekkan</strong>. Sedangkan tanda negatif, <strong>-f(x)</strong>, <strong>membalik</strong> grafik terhadap sumbu mendatar. Dan <strong>f(-x)</strong> membalik terhadap sumbu tegak (kiri jadi kanan).",
      },
      {
        type: "calcExercise",
        prompt:
          "Titik (2, 5) ada pada grafik y = f(x). Pada grafik y = 3 · f(x), berapa nilai y untuk x = 2?",
        answer: 15,
        solution:
          "Mengalikan fungsi dengan 3 mengalikan tinggi setiap titik dengan 3: 5 × 3 = <strong>15</strong>. Titiknya menjadi (2, 15).",
        hint: "Regang vertikal berarti tinggi tiap titik dikalikan faktornya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Titik (4, 7) ada pada grafik y = f(x). Pada grafik y = -f(x), berapa nilai y untuk x = 4?",
        answer: -7,
        solution:
          "Tanda negatif membalik grafik terhadap sumbu mendatar, jadi tanda nilai y dibalik: -7. Titiknya menjadi (4, <strong>-7</strong>).",
        hint: "y = -f(x) mengubah tanda setiap nilai keluaran.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap transformasi dengan efeknya pada grafik.",
        pairs: [
          { left: "y = 2 · f(x)", right: "Regang tegak, dua kali lebih tinggi" },
          { left: "y = 0,5 · f(x)", right: "Pendek tegak, setengah tinggi" },
          { left: "y = -f(x)", right: "Pencerminan terhadap sumbu mendatar" },
          { left: "y = f(-x)", right: "Pencerminan terhadap sumbu tegak" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pantulan suara dan gema",
        html: "Insinyur audio menggambar gelombang suara sebagai grafik. Untuk memperkeras suara, mereka mengalikan gelombang dengan angka lebih dari 1: grafiknya meregang lebih tinggi (amplitudo naik). Untuk membuat efek peredam bising, mereka membalik gelombang dengan tanda negatif sehingga puncak bertemu lembah dan saling meniadakan. Meregang dan membalik grafik adalah pekerjaan sehari-hari di studio.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Aturan regang dan pencerminan: <strong>a · f(x)</strong> dengan a &gt; 1 meregang grafik ke arah tegak, dengan 0 &lt; a &lt; 1 memendekkannya; <strong>y = -f(x)</strong> mencerminkan terhadap sumbu mendatar (sumbu-x); dan <strong>y = f(-x)</strong> mencerminkan terhadap sumbu tegak (sumbu-y).",
      },
      {
        type: "takeaways",
        items: [
          "Mengalikan fungsi dengan a > 1 meregang grafik ke arah tegak (lebih tinggi).",
          "Mengalikan dengan 0 < a < 1 memendekkan grafik ke arah tegak.",
          "y = -f(x) mencerminkan grafik terhadap sumbu mendatar.",
          "y = f(-x) mencerminkan grafik terhadap sumbu tegak.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Grafik y = 4 · f(x) dibandingkan y = f(x) menjadi?",
            options: [
              "Empat kali lebih tinggi",
              "Empat kali lebih pendek",
              "Bergeser ke kanan 4",
              "Terbalik",
            ],
            answer: 0,
            explain: "Faktor 4 (lebih dari 1) meregang grafik menjadi empat kali lebih tinggi.",
          },
          {
            q: "Transformasi yang membalik grafik terhadap sumbu mendatar adalah?",
            options: ["y = f(x) + 1", "y = -f(x)", "y = f(-x)", "y = 2 f(x)"],
            answer: 1,
            explain: "Tanda negatif di luar fungsi, -f(x), mencerminkan terhadap sumbu-x.",
          },
          {
            q: "Titik (3, 6) pada y = f(x). Pada y = -f(x), titik untuk x = 3 menjadi?",
            options: ["(3, 6)", "(3, -6)", "(-3, 6)", "(-3, -6)"],
            answer: 1,
            explain: "Tanda nilai y dibalik: 6 menjadi -6, jadi (3, -6).",
          },
          {
            q: "Grafik y = 0,5 · f(x) menjadi?",
            options: [
              "Dua kali lebih tinggi",
              "Setengah tinggi semula",
              "Terbalik kiri-kanan",
              "Bergeser ke bawah",
            ],
            answer: 1,
            explain: "Faktor 0,5 memendekkan grafik menjadi setengah tinggi.",
          },
          {
            q: "Transformasi y = f(-x) mencerminkan grafik terhadap?",
            options: [
              "Sumbu mendatar",
              "Sumbu tegak",
              "Titik asal",
              "Garis y = x",
            ],
            answer: 1,
            explain: "Mengubah x menjadi -x mencerminkan grafik terhadap sumbu tegak (sumbu-y).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "grafik-dalam-kehidupan-nyata",
    levelId: "membaca-grafik",
    order: 4,
    title: "Grafik dalam Kehidupan Nyata",
    summary:
      "Kita gabungkan semua keterampilan membaca dan transformasi pada grafik nyata: perjalanan, penjualan, dan cuaca.",
    durationMin: 13,
    tags: ["grafik", "aplikasi", "membaca", "transformasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Buka aplikasi peta, layar saham, atau ramalan cuaca: semua bercerita lewat grafik. Sekali kamu bisa membaca arah, puncak, dan geseran sebuah garis, dunia data jadi mudah dimengerti. Ayo gabungkan semua yang sudah kita pelajari pada kejadian nyata.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Grafik di Sekitar Kita",
        caption: "Dari perjalanan mobil sampai penjualan toko, semua bisa dibaca.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan grafik jarak perjalanan mobil terhadap waktu. Bagian yang menanjak curam berarti mobil melaju cepat, bagian yang mendatar berarti berhenti. Tanpa angka pasti pun, kamu bisa menebak kapan mobil ngebut dan kapan terjebak macet. Coba baca dulu cerita perjalanannya.",
      },
      {
        type: "widget",
        widget: "SimulatorKecepatan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Jarak Tempuh Mobil terhadap Waktu",
        unit: "kilometer",
        source: "ilustrasi edukatif",
        note: "Bagian curam (menit 0 sampai 20) berarti melaju cepat; bagian mendatar (menit 20 sampai 30) berarti berhenti, mungkin macet.",
        data: [
          { label: "0 mnt", value: 0, color: "#6366f1" },
          { label: "10 mnt", value: 12, color: "#6366f1" },
          { label: "20 mnt", value: 24, color: "#6366f1" },
          { label: "30 mnt", value: 24, color: "#f97316" },
          { label: "40 mnt", value: 32, color: "#6366f1" },
          { label: "50 mnt", value: 40, color: "#6366f1" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Membaca dan mengubah sekaligus",
        html: "Di kehidupan nyata, dua keterampilan bekerja bersama. <strong>Membaca</strong>: arah naik-turun dan puncak menceritakan peristiwa. <strong>Transformasi</strong>: saat dua grafik berbentuk sama tetapi satu lebih tinggi atau bergeser, kita bisa langsung mengenali geseran (translasi) atau peregangan tanpa menghitung ulang semuanya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari grafik perjalanan, berapa kilometer yang ditempuh mobil selama 10 menit pertama (menit 0 sampai 10)?",
        answer: 12,
        suffix: " km",
        solution:
          "Pada menit 0 jaraknya 0 km, pada menit 10 jaraknya 12 km. Jarak yang ditempuh 12 - 0 = <strong>12 km</strong>.",
        hint: "Baca nilai grafik di menit 0 dan menit 10, lalu kurangkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Selama menit 20 sampai 30 grafik mendatar di 24 km. Berapa kilometer yang ditempuh mobil pada selang itu?",
        answer: 0,
        suffix: " km",
        solution:
          "Grafik mendatar berarti jarak tidak bertambah: tetap 24 km. Jarak yang ditempuh 24 - 24 = <strong>0 km</strong>, mobil berhenti.",
        hint: "Garis mendatar berarti tidak ada perubahan nilai.",
      },
      {
        type: "classifyExercise",
        prompt: "Berdasarkan grafik perjalanan, kelompokkan keadaan mobil pada tiap selang.",
        buckets: ["Mobil bergerak", "Mobil berhenti"],
        items: [
          { text: "Menit 0 sampai 10 (grafik menanjak)", bucket: "Mobil bergerak" },
          { text: "Menit 20 sampai 30 (grafik mendatar)", bucket: "Mobil berhenti" },
          { text: "Menit 30 sampai 40 (grafik menanjak)", bucket: "Mobil bergerak" },
          { text: "Menit 40 sampai 50 (grafik menanjak)", bucket: "Mobil bergerak" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Grafik penjualan dua toko",
        html: "Seorang manajer membandingkan grafik penjualan dua cabang. Cabang B punya bentuk grafik yang mirip cabang A, tetapi selalu sekitar 10 juta lebih tinggi setiap bulan: ini translasi ke atas. Saat ada diskon besar, grafik penjualan satu cabang melonjak jadi dua kali lebih tinggi sementara polanya tetap: ini peregangan. Dengan membaca dan mengenali transformasi, manajer langsung paham kondisi tanpa membaca ribuan angka.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Grafik adalah bahasa data sehari-hari. <strong>Membaca</strong> arah, puncak, dan kemiringan menceritakan apa yang terjadi; <strong>mengenali transformasi</strong> (translasi, regang, pencerminan) membuat kita memahami hubungan antargrafik dengan cepat. Inilah inti dari membaca dan mengubah grafik: mengubah garis menjadi keputusan.",
      },
      {
        type: "takeaways",
        items: [
          "Grafik nyata seperti perjalanan, penjualan, dan cuaca bisa dibaca dengan keterampilan yang sama.",
          "Garis curam berarti perubahan cepat; garis mendatar berarti tidak ada perubahan.",
          "Dua grafik berbentuk sama yang bergeser atau merentang menandakan transformasi.",
          "Membaca dan mengubah grafik membantu mengambil keputusan dari data.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada grafik jarak terhadap waktu, bagian yang mendatar berarti?",
            options: [
              "Mobil melaju cepat",
              "Mobil berhenti",
              "Mobil mundur",
              "Mobil mempercepat",
            ],
            answer: 1,
            explain: "Garis mendatar berarti jarak tidak bertambah, mobil berhenti.",
          },
          {
            q: "Bagian grafik jarak yang paling curam menunjukkan mobil?",
            options: [
              "Bergerak paling lambat",
              "Berhenti",
              "Bergerak paling cepat",
              "Sedang mundur",
            ],
            answer: 2,
            explain: "Makin curam garisnya, makin cepat jarak bertambah, jadi mobil paling cepat.",
          },
          {
            q: "Grafik penjualan cabang B selalu 10 juta lebih tinggi dari cabang A dengan bentuk sama. Ini contoh?",
            options: [
              "Translasi ke atas",
              "Pencerminan",
              "Peregangan tegak",
              "Pemendekan",
            ],
            answer: 0,
            explain: "Bentuk sama tetapi selalu lebih tinggi tetap sebesar 10 juta adalah translasi ke atas.",
          },
          {
            q: "Saat diskon membuat grafik penjualan jadi dua kali lebih tinggi dengan pola tetap, itu?",
            options: [
              "Translasi ke kanan",
              "Peregangan tegak",
              "Pencerminan sumbu-y",
              "Pergeseran ke bawah",
            ],
            answer: 1,
            explain: "Pola sama tetapi dua kali lebih tinggi menandakan peregangan ke arah tegak.",
          },
          {
            q: "Mengapa grafik berguna dalam kehidupan nyata?",
            options: [
              "Hanya untuk mempercantik laporan",
              "Meringkas banyak data agar cepat dibaca dan jadi dasar keputusan",
              "Menggantikan semua angka selamanya",
              "Membuat data jadi lebih rumit",
            ],
            answer: 1,
            explain: "Grafik meringkas data sehingga arah dan pola cepat terbaca untuk mengambil keputusan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "interpolasi-dan-ekstrapolasi",
    levelId: "membaca-grafik",
    order: 5,
    title: "Menebak Nilai: Interpolasi dan Ekstrapolasi",
    summary:
      "Dengan grafik tinggi tanaman yang diukur tiap minggu, kita taksir nilai di sela data dan ramal masa depannya, lalu pahami batasnya.",
    durationMin: 13,
    tags: ["grafik", "interpolasi", "ekstrapolasi", "memprediksi"],
    blocks: [
      {
        type: "paragraph",
        html: "Seorang anak mengukur tinggi tanamannya tiap minggu: minggu 0 setinggi 10 cm, minggu 1 jadi 14 cm, minggu 2 jadi 18 cm, minggu 3 jadi 22 cm. Tapi ia lupa mengukur di hari ke pertengahan minggu, dan penasaran berapa tingginya minggu depan. Bisakah kita menebak tanpa mengukur ulang? Ayo coba dulu lewat grafiknya, baru kita beri nama caranya.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Menebak di Sela dan di Luar Data",
        caption: "Grafik membantu menaksir nilai yang tidak sempat diukur.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Datanya naik tetap 4 cm tiap minggu. Mau tahu tinggi di minggu 1,5 (di antara dua ukuran)? Ambil pertengahan 14 dan 18, yaitu 16 cm. Mau ramal minggu ke-4 (di luar data)? Teruskan polanya: 22 + 4 = 26 cm. Menebak di sela terasa aman, menebak jauh ke depan terasa lebih nekat. Rasakan bedanya dulu.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tinggi Tanaman yang Diukur Tiap Minggu",
        unit: "sentimeter",
        source: "ilustrasi edukatif",
        note: "Empat titik terukur (minggu 0 sampai 3) naik tetap 4 cm. Nilai di antaranya bisa ditaksir (interpolasi), nilai di luarnya bisa diramal (ekstrapolasi) selama polanya bertahan.",
        data: [
          { label: "Minggu 0", value: 10, color: "#38bdf8" },
          { label: "Minggu 1", value: 14, color: "#38bdf8" },
          { label: "Minggu 2", value: 18, color: "#38bdf8" },
          { label: "Minggu 3", value: 22, color: "#38bdf8" },
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "Ekstrapolasi harus hati-hati",
        html: "Menebak di antara data (interpolasi) cukup aman karena terapit nilai yang sudah diketahui. Menebak jauh di luar data (ekstrapolasi) berisiko: pola bisa berubah. Tanaman tidak akan tumbuh 4 cm tiap minggu selamanya, suatu saat ia berhenti. Makin jauh dari data, makin besar peluang tebakan meleset.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tinggi minggu 1 adalah 14 cm dan minggu 2 adalah 18 cm. Perkirakan tinggi di pertengahannya (minggu 1,5) dengan interpolasi.",
        answer: 16,
        suffix: " cm",
        solution:
          "Ambil nilai tengah antara 14 dan 18: (14 + 18) / 2 = <strong>16 cm</strong>. Interpolasi menaksir nilai di sela data yang sudah ada.",
        hint: "Cari nilai tengah dari dua tinggi yang mengapitnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan pola naik tetap 4 cm per minggu, perkirakan tinggi tanaman pada minggu ke-5 (ekstrapolasi).",
        answer: 30,
        suffix: " cm",
        solution:
          "Dari minggu 3 (22 cm) maju 2 minggu: 22 + 2 × 4 = 22 + 8 = <strong>30 cm</strong>. Ekstrapolasi meneruskan pola ke luar jangkauan data.",
        hint: "Mulai dari ukuran terakhir, tambahkan 4 cm untuk tiap minggu berikutnya.",
      },
      {
        type: "classifyExercise",
        prompt: "Data terukur hanya minggu 0 sampai 3. Kelompokkan tiap tebakan.",
        buckets: ["Interpolasi (di dalam data)", "Ekstrapolasi (di luar data)"],
        items: [
          { text: "Menaksir tinggi di minggu 1,5", bucket: "Interpolasi (di dalam data)" },
          { text: "Menaksir tinggi di minggu 2,5", bucket: "Interpolasi (di dalam data)" },
          { text: "Meramal tinggi di minggu ke-6", bucket: "Ekstrapolasi (di luar data)" },
          { text: "Meramal tinggi di minggu ke-10", bucket: "Ekstrapolasi (di luar data)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Interpolasi", right: "Menaksir nilai di antara data yang ada" },
          { left: "Ekstrapolasi", right: "Meramal nilai di luar jangkauan data" },
          { left: "Titik data", right: "Nilai yang benar-benar diukur" },
          { left: "Tren", right: "Pola umum yang dijadikan dasar tebakan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sensus penduduk Indonesia",
        html: "Badan Pusat Statistik menghitung penduduk lewat sensus tiap sepuluh tahun: sekitar 206 juta pada 2000, sekitar 238 juta pada 2010, dan sekitar 270 juta pada 2020. Untuk menaksir jumlah penduduk pada 2015 (di antara dua sensus), kita interpolasi: kira-kira 254 juta, di tengah 238 dan 270. Untuk memperkirakan penduduk 2030, kita ekstrapolasi dengan meneruskan tren. Namun para ahli berhati-hati: laju pertumbuhan bisa melambat, sehingga ekstrapolasi jauh ke depan perlu ditinjau ulang tiap sensus baru.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "<strong>Interpolasi</strong> adalah menaksir nilai di antara data yang sudah diukur, dan <strong>ekstrapolasi</strong> adalah meramal nilai di luar jangkauan data. Keduanya bersandar pada pola atau tren yang terbaca dari grafik. Interpolasi relatif aman karena terapit data nyata; ekstrapolasi lebih berisiko dan makin meragukan bila kita melangkah terlalu jauh.",
      },
      {
        type: "takeaways",
        items: [
          "Interpolasi menaksir nilai di antara titik data yang sudah ada.",
          "Ekstrapolasi meramal nilai di luar jangkauan data dengan meneruskan tren.",
          "Interpolasi relatif aman karena terapit data nyata di kedua sisi.",
          "Ekstrapolasi berisiko karena pola bisa berubah; makin jauh, makin tidak pasti.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Menaksir nilai di antara dua data yang sudah diukur disebut?",
            options: ["Interpolasi", "Ekstrapolasi", "Pembulatan", "Pencerminan"],
            answer: 0,
            explain: "Interpolasi adalah menaksir nilai di sela data yang ada.",
          },
          {
            q: "Meramal nilai jauh di luar jangkauan data disebut?",
            options: ["Interpolasi", "Ekstrapolasi", "Translasi", "Substitusi"],
            answer: 1,
            explain: "Ekstrapolasi adalah meramal di luar data yang terukur.",
          },
          {
            q: "Tinggi minggu 2 adalah 18 cm, minggu 3 adalah 22 cm. Taksiran minggu 2,5 (interpolasi)?",
            options: ["19 cm", "20 cm", "21 cm", "24 cm"],
            answer: 1,
            explain: "Nilai tengah (18 + 22) / 2 = 20 cm.",
          },
          {
            q: "Mengapa ekstrapolasi lebih berisiko dari interpolasi?",
            options: [
              "Karena pola bisa berubah di luar data",
              "Karena selalu salah",
              "Karena tidak memakai grafik",
              "Karena angkanya lebih kecil",
            ],
            answer: 0,
            explain: "Di luar jangkauan data, tren bisa berubah sehingga tebakan kurang andal.",
          },
          {
            q: "Menaksir penduduk 2015 dari sensus 2010 dan 2020 termasuk?",
            options: ["Ekstrapolasi", "Interpolasi", "Pembulatan", "Pencerminan"],
            answer: 1,
            explain: "2015 berada di antara dua sensus, jadi ini interpolasi.",
          },
        ],
      },
    ],
  },
];
