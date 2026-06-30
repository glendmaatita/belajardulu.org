import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "milik-pribadi-modal-laba",
    levelId: "milik-modal",
    order: 1,
    title: "Milik Pribadi, Modal & Laba",
    summary:
      "Mesin penggerak kapitalisme: hak milik yang aman, modal yang diinvestasikan, dan laba sebagai sinyal serta imbalan atas risiko.",
    durationMin: 14,
    tags: ["milik pribadi", "modal", "laba", "faktor produksi"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Hak milik pribadi</strong> yang aman adalah fondasi kapitalisme: orang mau bekerja keras dan berinvestasi bila yakin hasilnya menjadi miliknya. <strong>Modal</strong> (mesin, uang, bangunan) lalu digabung dengan tenaga kerja dan sumber daya alam untuk memproduksi barang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Laba: sinyal sekaligus imbalan",
        html: "<strong>Laba</strong> = pendapatan - biaya. Ia memberi tahu pengusaha bahwa mereka menciptakan nilai yang dihargai orang, dan menjadi imbalan atas <strong>risiko</strong> yang ditanggung. Laba juga mengarahkan modal ke tempat yang paling dibutuhkan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur pendapatan, biaya, dan modal sebuah usaha, lalu lihat bagaimana laba, margin, dan imbal hasil modal menentukan daya tariknya bagi investor.",
      },
      { type: "widget", widget: "KalkulatorLabaModal" },
      {
        type: "video",
        comp: "CircularFlow",
        title: "Aliran Melingkar Ekonomi",
        caption: "Rumah tangga menyediakan tenaga kerja dan modal, perusahaan membayar upah dan menghasilkan barang.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trading_Floor_at_the_New_York_Stock_Exchange_during_the_Zendesk_IPO.jpg?width=400",
        alt: "Lantai perdagangan Bursa Efek New York saat penawaran saham perdana",
        caption: "Bursa saham: tempat modal dihimpun dari banyak investor untuk mendanai perusahaan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Ke Mana Perginya Pendapatan Sebuah Perusahaan (ilustrasi)",
        unit: "% dari pendapatan",
        source: "ilustrasi edukatif pola yang umum",
        note: "Sebagian besar pendapatan habis untuk biaya dan upah; laba bersih kerap hanya sebagian kecil.",
        data: [
          { label: "Bahan & biaya", value: 55, color: "#94a3b8" },
          { label: "Upah pekerja", value: 28, color: "#60a5fa" },
          { label: "Pajak", value: 7, color: "#fbbf24" },
          { label: "Laba bersih", value: 10, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Warung kopi dan keputusan investasi",
        html: "Seorang pemilik warung kopi mengumpulkan <strong>modal</strong> Rp100 juta untuk membeli mesin espreso dan menyewa tempat. Bila setahun ia memperoleh laba Rp20 juta, imbal hasil modalnya 20%, jauh di atas bunga deposito. Sinyal ini menarik orang lain membuka warung serupa, sampai persaingan menurunkan laba ke tingkat wajar. Begitulah <strong>laba mengarahkan modal</strong>: mengalir ke usaha yang menguntungkan sampai keuntungan berlebih terkikis persaingan.",
      },
      {
        type: "case",
        title: "Sejarah: Hernando de Soto dan modal yang 'mati'",
        html: "Ekonom <strong>Hernando de Soto</strong> menyoroti bahwa di banyak negara berkembang, rakyat miskin sebenarnya punya aset (rumah, tanah) tetapi tanpa <strong>sertifikat milik</strong> yang sah. Tanpa bukti milik yang diakui hukum, aset itu tak bisa dijadikan jaminan pinjaman atau modal usaha, sehingga menjadi <strong>modal mati</strong>. Gagasannya menegaskan satu pilar kapitalisme: hak milik yang jelas dan ditegakkan hukum adalah syarat agar aset bisa menghidupkan ekonomi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah usaha bermodal Rp100 juta menghasilkan laba Rp20 juta setahun. Berapa persen imbal hasil modalnya?",
        answer: 20,
        tolerance: 0,
        suffix: "%",
        solution:
          "Imbal hasil modal = laba / modal x 100% = 20 juta / 100 juta x 100% = <strong>20%</strong>. Bila ini di atas bunga bank, modal cenderung mengalir ke usaha tersebut.",
        hint: "Bagi laba dengan modal, lalu kali 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap hal sebagai faktor produksi yang tepat.",
        buckets: ["Modal", "Tenaga kerja", "Sumber daya alam"],
        items: [
          { text: "Mesin dan gedung pabrik", bucket: "Modal" },
          { text: "Keterampilan dan jam kerja karyawan", bucket: "Tenaga kerja" },
          { text: "Tanah dan bahan tambang", bucket: "Sumber daya alam" },
          { text: "Uang untuk membeli peralatan", bucket: "Modal" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Hak milik pribadi yang aman mendorong orang bekerja dan berinvestasi.",
          "Modal digabung dengan tenaga kerja dan sumber daya alam untuk memproduksi.",
          "Laba adalah sinyal penciptaan nilai sekaligus imbalan atas risiko.",
          "Laba mengarahkan modal ke usaha menguntungkan sampai persaingan mengikis kelebihannya.",
          "Tanpa bukti milik yang sah, aset menjadi modal mati yang tak bisa menghidupkan ekonomi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa hak milik pribadi penting bagi kapitalisme?",
            options: [
              "Agar negara bisa menyita aset",
              "Karena orang mau bekerja dan berinvestasi bila hasilnya menjadi miliknya",
              "Agar tidak ada yang menabung",
              "Supaya harga selalu naik",
            ],
            answer: 1,
            explain: "Jaminan kepemilikan menjadi insentif untuk berusaha dan menanam modal.",
          },
          {
            q: "Bagaimana laba dihitung?",
            options: ["Pendapatan + biaya", "Pendapatan - biaya", "Biaya - pajak", "Modal x bunga"],
            answer: 1,
            explain: "Laba adalah selisih pendapatan dikurangi seluruh biaya.",
          },
          {
            q: "Apa peran laba selain sebagai imbalan?",
            options: [
              "Menghapus persaingan",
              "Mengarahkan modal ke usaha yang dibutuhkan",
              "Menaikkan pajak",
              "Membekukan harga",
            ],
            answer: 1,
            explain: "Laba menjadi sinyal yang menarik modal ke kegiatan yang menciptakan nilai.",
          },
          {
            q: "Apa maksud 'modal mati' menurut Hernando de Soto?",
            options: [
              "Uang yang hilang dicuri",
              "Aset tanpa bukti milik sah sehingga tak bisa jadi jaminan atau modal",
              "Pabrik yang tutup",
              "Saham yang anjlok",
            ],
            answer: 1,
            explain: "Tanpa sertifikat milik, aset tak bisa dimanfaatkan untuk pinjaman atau usaha.",
          },
          {
            q: "Modal Rp100 juta menghasilkan laba Rp20 juta. Imbal hasil modalnya?",
            options: ["2%", "20%", "120%", "10%"],
            answer: 1,
            explain: "20 juta dibagi 100 juta sama dengan 20%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "faktor-produksi",
    levelId: "milik-modal",
    order: 2,
    title: "Faktor Produksi",
    summary:
      "Empat bahan dasar untuk menghasilkan barang dan jasa: tanah, tenaga kerja, modal, dan kewirausahaan, masing-masing dengan imbalannya sendiri.",
    durationMin: 14,
    tags: ["faktor produksi", "tanah", "tenaga kerja", "modal", "kewirausahaan"],
    blocks: [
      {
        type: "paragraph",
        html: "Untuk memproduksi apa pun, dibutuhkan bahan dasar yang disebut <strong>faktor produksi</strong>. Ekonomi klasik menyebut empat: <strong>tanah</strong> (sumber daya alam), <strong>tenaga kerja</strong> (usaha manusia), <strong>modal</strong> (alat dan dana yang dibuat untuk berproduksi), dan <strong>kewirausahaan</strong> (yang menggabungkan ketiganya dan menanggung risiko).",
      },
      {
        type: "paragraph",
        html: "Tiap faktor mendapat imbalannya sendiri: tanah memperoleh <strong>sewa</strong>, tenaga kerja memperoleh <strong>upah</strong>, modal memperoleh <strong>bunga</strong>, dan kewirausahaan memperoleh <strong>laba</strong>. Laba bersifat sisa: ia muncul setelah faktor lain dibayar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat faktor, empat imbalan",
        html: "Tanah &rarr; sewa. Tenaga kerja &rarr; upah. Modal &rarr; bunga. Kewirausahaan &rarr; laba. Kalimat ini merangkum bagaimana hasil produksi dibagi kepada pihak yang menyumbang faktornya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Modal bukan sekadar uang",
        html: "Dalam ekonomi, <strong>modal</strong> berarti barang buatan manusia yang dipakai untuk memproduksi barang lain: mesin, gedung, truk, perangkat lunak. Uang hanyalah bentuk cair dari modal yang belum diwujudkan menjadi alat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana biaya tiap faktor menumpuk menjadi biaya total, dan berapa output yang harus terjual agar usaha menutup semuanya.",
      },
      { type: "widget", widget: "SimulatorTitikImpas" },
      {
        type: "video",
        comp: "BiayaProduksi",
        title: "Anatomi Biaya Produksi",
        caption: "Biaya tetap dan biaya variabel dari tiap faktor membentuk total biaya sebuah usaha.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Federal_Hall_August_2017_01.jpg?width=400",
        alt: "Federal Hall di Wall Street, New York",
        caption: "Kawasan Wall Street: simbol bertemunya modal, kewirausahaan, dan tenaga kerja dalam ekonomi modern.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Penguraian Biaya Mebel per Unit (ilustrasi)",
        unit: "ribu rupiah per unit",
        source: "ilustrasi edukatif sebuah bengkel mebel",
        note: "Kayu (tanah), upah tukang (tenaga kerja), dan penyusutan mesin (modal) bersama menentukan biaya; sisanya menjadi laba kewirausahaan.",
        data: [
          { label: "Kayu (tanah)", value: 200, color: "#a3a30f" },
          { label: "Upah (tenaga kerja)", value: 150, color: "#60a5fa" },
          { label: "Mesin (modal)", value: 80, color: "#94a3b8" },
          { label: "Laba (wirausaha)", value: 70, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bengkel mebel membagi hasil",
        html: "Sebuah bengkel menjual satu set meja seharga <strong>Rp500 ribu</strong>. Kayu menghabiskan Rp200 ribu (sewa atas sumber daya alam), tukang dibayar Rp150 ribu (upah), penyusutan mesin Rp80 ribu (imbalan modal). Sisa <strong>Rp70 ribu</strong> menjadi laba pemilik yang menggabungkan semua faktor dan menanggung risiko tidak laku. Inilah wujud nyata empat faktor produksi dan imbalannya dalam satu transaksi.",
      },
      {
        type: "case",
        title: "Sejarah: VOC dan modal gabungan tahun 1602",
        html: "Pada tahun <strong>1602</strong>, <strong>VOC</strong> (Perserikatan Dagang Hindia Timur Belanda) didirikan dan menjadi salah satu perusahaan saham gabungan pertama yang besar. Ia menghimpun <strong>modal</strong> dari banyak pemilik, memperkerjakan ribuan pelaut dan tentara (tenaga kerja), dan mengincar tanah serta rempah Nusantara (sumber daya alam). VOC menunjukkan secara dini bagaimana keempat faktor produksi disatukan oleh kewirausahaan dalam skala raksasa, sekaligus dengan dampak kolonial yang kelam bagi Nusantara.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah produk terjual Rp100 juta. Sewa tanah Rp10 juta, upah Rp30 juta, bunga modal Rp40 juta. Berapa laba kewirausahaan (dalam juta rupiah)?",
        answer: 20,
        tolerance: 0,
        prefix: "Rp",
        suffix: " juta",
        solution:
          "Laba = pendapatan - (sewa + upah + bunga) = 100 - (10 + 30 + 40) = 100 - 80 = <strong>Rp20 juta</strong>. Laba adalah sisa setelah faktor lain dibayar.",
        hint: "Jumlahkan sewa, upah, dan bunga, lalu kurangkan dari pendapatan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap faktor produksi dengan imbalannya.",
        pairs: [
          { left: "Tanah", right: "Sewa" },
          { left: "Tenaga kerja", right: "Upah" },
          { left: "Modal", right: "Bunga" },
          { left: "Kewirausahaan", right: "Laba" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap contoh ke faktor produksi yang tepat.",
        buckets: ["Tanah", "Tenaga kerja", "Modal", "Kewirausahaan"],
        items: [
          { text: "Lahan sawah dan air sungai", bucket: "Tanah" },
          { text: "Tukang las yang bekerja 8 jam", bucket: "Tenaga kerja" },
          { text: "Mesin jahit di pabrik konveksi", bucket: "Modal" },
          { text: "Orang yang berani buka usaha dan menanggung rugi", bucket: "Kewirausahaan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Faktor produksi ada empat: tanah, tenaga kerja, modal, dan kewirausahaan.",
          "Imbalannya berturut-turut: sewa, upah, bunga, dan laba.",
          "Modal berarti alat buatan manusia untuk berproduksi, bukan sekadar uang.",
          "Laba bersifat sisa: muncul setelah faktor lain dibayar.",
          "VOC 1602 adalah contoh awal penyatuan keempat faktor dalam skala besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Manakah yang BUKAN faktor produksi klasik?",
            options: ["Tanah", "Tenaga kerja", "Modal", "Pajak"],
            answer: 3,
            explain: "Empat faktor klasik adalah tanah, tenaga kerja, modal, dan kewirausahaan; pajak bukan faktor produksi.",
          },
          {
            q: "Apa imbalan bagi faktor tenaga kerja?",
            options: ["Sewa", "Upah", "Bunga", "Laba"],
            answer: 1,
            explain: "Tenaga kerja memperoleh upah atas usaha yang disumbangkannya.",
          },
          {
            q: "Dalam ekonomi, 'modal' paling tepat berarti...",
            options: [
              "Hanya uang tunai",
              "Barang buatan manusia untuk memproduksi barang lain",
              "Tanah dan tambang",
              "Jumlah pekerja",
            ],
            answer: 1,
            explain: "Modal adalah alat produksi seperti mesin dan gedung; uang hanya bentuk cairnya.",
          },
          {
            q: "Mengapa laba disebut imbalan yang bersifat sisa?",
            options: [
              "Karena selalu nol",
              "Karena muncul setelah sewa, upah, dan bunga dibayar",
              "Karena ditetapkan pemerintah",
              "Karena tidak kena pajak",
            ],
            answer: 1,
            explain: "Laba adalah yang tersisa bagi wirausaha setelah faktor lain memperoleh bagiannya.",
          },
          {
            q: "Mengapa VOC tahun 1602 relevan dengan faktor produksi?",
            options: [
              "Karena menghapus tenaga kerja",
              "Karena menyatukan modal, tenaga kerja, dan sumber daya alam dalam skala besar",
              "Karena melarang perdagangan",
              "Karena tidak memakai modal",
            ],
            answer: 1,
            explain: "VOC menghimpun modal gabungan dan menggabungkan keempat faktor dalam usaha raksasa.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kewirausahaan-risiko",
    levelId: "milik-modal",
    order: 3,
    title: "Kewirausahaan & Risiko",
    summary:
      "Wirausaha menggabungkan faktor produksi dan menanggung ketidakpastian. Laba adalah imbalan atas risiko yang berani diambil, bukan kepastian.",
    durationMin: 13,
    tags: ["kewirausahaan", "risiko", "laba", "startup"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Wirausaha</strong> adalah orang yang melihat peluang, menggabungkan tanah, tenaga kerja, dan modal, lalu menanggung <strong>risiko</strong> bahwa hasilnya bisa untung atau buntung. Tanpa kepastian inilah laba menjadi bermakna: ia imbalan karena berani melangkah ke ketidakpastian.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Laba sebagai upah keberanian",
        html: "Jika sebuah usaha pasti untung, semua orang akan masuk dan keuntungan terkikis. Laba yang besar biasanya menyertai risiko yang besar. Wirausaha dibayar untuk menanggung ketidakpastian yang tak mau ditanggung orang lain.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Banyak usaha gagal",
        html: "Kewirausahaan bukan jalan pasti menuju kaya. Sebagian besar usaha baru tutup dalam beberapa tahun pertama. Memahami risiko, bukan mengabaikannya, adalah ciri wirausaha yang matang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser harga dan biaya untuk melihat berapa unit yang harus terjual agar mencapai titik impas, batas antara rugi dan untung yang harus dilewati setiap usaha baru.",
      },
      { type: "widget", widget: "SimulatorLabaMaksimum" },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Pasar_Terapung.jpg?width=400",
        alt: "Perahu jukung pedagang di pasar terapung",
        caption: "Pedagang pasar terapung: wirausaha kecil yang setiap hari menanggung risiko dagangan tidak laku.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "KapitalismeVideo",
        title: "Berani Mengambil Risiko",
        caption: "Wirausaha menyatukan modal dan tenaga kerja lalu menanggung ketidakpastian demi peluang laba.",
      },
      {
        type: "chart",
        variant: "area",
        title: "Tingkat Bertahan Usaha Baru Menurut Usia (ilustrasi)",
        unit: "% usaha yang masih beroperasi",
        source: "ilustrasi edukatif pola yang lazim diamati",
        note: "Sekitar separuh usaha baru tidak bertahan sampai tahun kelima; risiko kegagalan adalah bagian nyata dari kewirausahaan.",
        data: [
          { label: "Tahun 1", value: 80, color: "#34d399" },
          { label: "Tahun 2", value: 70, color: "#60a5fa" },
          { label: "Tahun 3", value: 60, color: "#fbbf24" },
          { label: "Tahun 5", value: 50, color: "#f59e0b" },
          { label: "Tahun 10", value: 35, color: "#ef4444" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menimbang sebuah usaha yang berisiko",
        html: "Seorang wirausaha menimbang peluang baru. Bila berhasil (peluang <strong>40%</strong>), ia untung <strong>Rp50 juta</strong>. Bila gagal (peluang <strong>60%</strong>), ia rugi <strong>Rp20 juta</strong>. Nilai harapannya: 0,4 x 50 + 0,6 x (-20) = 20 - 12 = <strong>Rp8 juta</strong>. Karena positif, secara rata-rata usaha ini layak dicoba, meski di satu percobaan ia tetap bisa rugi. Wirausaha berpikir dalam peluang, bukan kepastian.",
      },
      {
        type: "case",
        title: "Sejarah: Ledakan startup dan kewirausahaan modern",
        html: "Sejak akhir abad ke-20, terutama setelah munculnya internet pada tahun <strong>1990-an</strong>, dunia menyaksikan ledakan <strong>startup</strong>: perusahaan rintisan yang menghimpun modal ventura untuk tumbuh cepat. Banyak yang gagal total, tetapi sebagian kecil seperti perusahaan teknologi besar mengubah cara hidup manusia. Pola ini menegaskan logika lama kapitalisme: dari banyak keberanian yang gagal, lahir sedikit terobosan yang membayar semua kerugian dan lebih.",
      },
      {
        type: "calcExercise",
        prompt:
          "Peluang sukses 40% memberi laba Rp50 juta; peluang gagal 60% memberi rugi Rp20 juta. Berapa nilai harapan laba (dalam juta rupiah)?",
        answer: 8,
        tolerance: 0,
        prefix: "Rp",
        suffix: " juta",
        solution:
          "Nilai harapan = 0,4 x 50 + 0,6 x (-20) = 20 - 12 = <strong>Rp8 juta</strong>. Karena positif, secara rata-rata usaha ini menguntungkan.",
        hint: "Kalikan tiap hasil dengan peluangnya, lalu jumlahkan. Kerugian bernilai negatif.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan sebagai sikap wirausaha yang sehat atau keliru terhadap risiko.",
        buckets: ["Sikap sehat", "Sikap keliru"],
        items: [
          { text: "Menghitung peluang untung dan rugi sebelum memulai", bucket: "Sikap sehat" },
          { text: "Menyiapkan dana cadangan bila usaha gagal", bucket: "Sikap sehat" },
          { text: "Yakin pasti untung tanpa menimbang risiko", bucket: "Sikap keliru" },
          { text: "Mempertaruhkan seluruh tabungan tanpa rencana mundur", bucket: "Sikap keliru" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Wirausaha menggabungkan faktor produksi dan menanggung ketidakpastian hasil.",
          "Laba adalah imbalan atas risiko, bukan jaminan keuntungan.",
          "Sebagian besar usaha baru gagal; risiko adalah bagian nyata kewirausahaan.",
          "Nilai harapan membantu menimbang peluang yang untungnya tak pasti.",
          "Dari banyak kegagalan startup, lahir sedikit terobosan yang besar dampaknya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa peran utama seorang wirausaha?",
            options: [
              "Menghindari semua risiko",
              "Menggabungkan faktor produksi dan menanggung risiko hasil",
              "Menetapkan pajak",
              "Menjamin upah tetap naik",
            ],
            answer: 1,
            explain: "Wirausaha menyatukan tanah, tenaga kerja, dan modal sambil menanggung ketidakpastian.",
          },
          {
            q: "Mengapa laba besar biasanya menyertai risiko besar?",
            options: [
              "Karena pemerintah mengaturnya",
              "Karena jika pasti untung, persaingan akan mengikis keuntungannya",
              "Karena risiko menghapus pajak",
              "Karena bank menjaminnya",
            ],
            answer: 1,
            explain: "Peluang yang pasti untung akan dimasuki semua orang sampai labanya habis.",
          },
          {
            q: "Peluang sukses 40% laba Rp50 juta, gagal 60% rugi Rp20 juta. Nilai harapannya?",
            options: ["Rp30 juta", "Rp8 juta", "Rp70 juta", "Rp-12 juta"],
            answer: 1,
            explain: "0,4 x 50 + 0,6 x (-20) = 20 - 12 = Rp8 juta.",
          },
          {
            q: "Manakah sikap wirausaha yang matang terhadap risiko?",
            options: [
              "Mengabaikan kemungkinan gagal",
              "Menghitung peluang dan menyiapkan rencana cadangan",
              "Mempertaruhkan semua tabungan tanpa rencana",
              "Menolak semua peluang berisiko",
            ],
            answer: 1,
            explain: "Memahami dan mengelola risiko, bukan mengabaikan atau menolaknya buta.",
          },
          {
            q: "Apa pelajaran dari ledakan startup sejak 1990-an?",
            options: [
              "Semua startup pasti berhasil",
              "Dari banyak kegagalan, lahir sedikit terobosan besar",
              "Kewirausahaan tidak butuh modal",
              "Risiko bisa dihapus sepenuhnya",
            ],
            answer: 1,
            explain: "Sebagian besar gagal, tetapi sedikit yang berhasil membayar semua kerugian dan lebih.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pasar-modal-saham-perusahaan",
    levelId: "milik-modal",
    order: 4,
    title: "Pasar Modal, Saham & Perusahaan",
    summary:
      "Bagaimana perusahaan menghimpun modal dari banyak orang lewat saham, dan bagaimana pasar modal mempertemukan penabung dengan usaha yang butuh dana.",
    durationMin: 15,
    tags: ["pasar modal", "saham", "perusahaan", "dividen", "IPO"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah usaha besar butuh modal lebih dari yang dimiliki satu orang. Solusinya: bagi kepemilikan menjadi potongan kecil bernama <strong>saham</strong>, lalu jual ke banyak orang. Pemegang saham menjadi pemilik sebagian perusahaan dan berhak atas bagian laba berupa <strong>dividen</strong>.",
      },
      {
        type: "paragraph",
        html: "<strong>Pasar modal</strong> (bursa saham) adalah tempat saham diperjualbelikan. Ia mempertemukan <strong>penabung</strong> yang punya dana lebih dengan <strong>perusahaan</strong> yang butuh modal untuk tumbuh, sehingga uang yang menganggur dapat diubah menjadi pabrik, riset, dan lapangan kerja.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dua sumber imbal hasil saham",
        html: "Pemegang saham bisa untung dari <strong>dividen</strong> (bagian laba yang dibagikan) dan dari <strong>capital gain</strong> (selisih harga jual di atas harga beli). Keduanya tidak dijamin: harga saham bisa naik maupun turun.",
      },
      {
        type: "callout",
        tone: "info",
        title: "IPO: membuka pintu modal",
        html: "Saat perusahaan pertama kali menjual sahamnya ke publik, peristiwa itu disebut <strong>IPO</strong> (penawaran saham perdana). Dana yang terkumpul dipakai untuk ekspansi, sementara pemilik lama berbagi kepemilikan dengan investor baru.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Saham bukan tabungan",
        html: "Berbeda dengan deposito, modal di saham bisa berkurang. Imbal hasil yang lebih tinggi dalam jangka panjang adalah kompensasi atas risiko naik turunnya harga.",
      },
      {
        type: "video",
        comp: "KapitalismeVideo",
        title: "Bagaimana Modal Bekerja",
        caption: "Tabungan banyak orang mengalir lewat pasar modal menjadi investasi nyata pada perusahaan.",
      },
      { type: "widget", widget: "KalkulatorLabaModal" },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trading_Floor_at_the_New_York_Stock_Exchange_during_the_Zendesk_IPO.jpg?width=400",
        alt: "Lantai perdagangan Bursa Efek New York saat sebuah IPO",
        caption: "Bursa Efek New York: salah satu pasar modal terbesar tempat ribuan perusahaan menghimpun dana.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Rp10 Juta Selama 20 Tahun: Deposito 5% vs Saham 10% (ilustrasi majemuk)",
        unit: "juta rupiah",
        source: "ilustrasi edukatif bunga majemuk",
        note: "Imbal hasil lebih tinggi pada saham, bila bertahan jangka panjang, melebar jauh karena efek bunga majemuk, tetapi disertai risiko naik turun.",
        data: [
          { label: "Awal", value: 10, color: "#94a3b8" },
          { label: "Th 5 deposito", value: 13, color: "#60a5fa" },
          { label: "Th 5 saham", value: 16, color: "#34d399" },
          { label: "Th 20 deposito", value: 27, color: "#60a5fa" },
          { label: "Th 20 saham", value: 67, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menghitung imbal hasil selembar saham",
        html: "Seorang investor membeli satu saham seharga <strong>Rp1.000</strong>. Setahun kemudian perusahaan membagikan <strong>dividen Rp50</strong>, dan harga saham naik menjadi <strong>Rp1.250</strong>. Total keuntungannya: dividen Rp50 ditambah capital gain Rp250 = Rp300. Dibanding modal Rp1.000, imbal hasilnya <strong>30%</strong>. Bila harga justru turun ke Rp900, ia rugi Rp100 meski tetap menerima dividen Rp50, sehingga hasilnya minus Rp50 alias -5%.",
      },
      {
        type: "case",
        title: "Sejarah: Bursa Amsterdam 1602, bursa saham tertua",
        html: "Pada tahun <strong>1602</strong>, bersamaan dengan berdirinya VOC, lahir <strong>Bursa Efek Amsterdam</strong> yang dianggap bursa saham modern tertua di dunia. Untuk pertama kalinya, saham sebuah perusahaan dapat diperjualbelikan secara terus menerus oleh publik. Inovasi ini memisahkan kepemilikan dari pengelolaan dan memungkinkan modal dihimpun dalam jumlah besar dari banyak orang, sebuah pilar yang masih menopang kapitalisme hingga kini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Saham dibeli Rp1.000, dijual Rp1.250, dan memberi dividen Rp50. Berapa persen total imbal hasilnya?",
        answer: 30,
        tolerance: 0,
        suffix: "%",
        solution:
          "Total imbal hasil = (capital gain + dividen) / harga beli x 100% = (250 + 50) / 1.000 x 100% = 300 / 1.000 x 100% = <strong>30%</strong>.",
        hint: "Jumlahkan selisih harga dan dividen, bagi dengan harga beli, kali 100%.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah pasar modal dengan artinya.",
        pairs: [
          { left: "Saham", right: "Bukti kepemilikan sebagian perusahaan" },
          { left: "Dividen", right: "Bagian laba yang dibagikan ke pemegang saham" },
          { left: "Capital gain", right: "Selisih harga jual di atas harga beli" },
          { left: "IPO", right: "Penjualan saham pertama kali ke publik" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri sebagai milik saham atau deposito.",
        buckets: ["Saham", "Deposito"],
        items: [
          { text: "Nilai modal bisa naik maupun turun", bucket: "Saham" },
          { text: "Memberi hak atas sebagian laba perusahaan", bucket: "Saham" },
          { text: "Imbal hasil tetap dan dijamin sampai batas tertentu", bucket: "Deposito" },
          { text: "Pokok dana relatif aman dan tidak berfluktuasi", bucket: "Deposito" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Saham membagi kepemilikan perusahaan menjadi potongan kecil yang bisa dijual ke banyak orang.",
          "Pasar modal mempertemukan penabung dengan perusahaan yang butuh dana.",
          "Imbal hasil saham datang dari dividen dan capital gain, keduanya tak dijamin.",
          "IPO adalah saat perusahaan pertama kali menjual saham ke publik.",
          "Bursa Amsterdam 1602 adalah bursa saham modern tertua di dunia.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu saham?",
            options: [
              "Pinjaman ke bank",
              "Bukti kepemilikan sebagian perusahaan",
              "Pajak atas laba",
              "Upah pekerja",
            ],
            answer: 1,
            explain: "Saham menjadikan pemegangnya pemilik sebagian perusahaan.",
          },
          {
            q: "Dari mana imbal hasil pemegang saham bisa datang?",
            options: [
              "Hanya dari pajak",
              "Dari dividen dan capital gain",
              "Hanya dari bunga tetap",
              "Dari subsidi pemerintah",
            ],
            answer: 1,
            explain: "Dividen adalah bagian laba; capital gain adalah selisih harga jual di atas beli.",
          },
          {
            q: "Saham dibeli Rp1.000, dijual Rp1.250, dividen Rp50. Total imbal hasil?",
            options: ["25%", "30%", "5%", "20%"],
            answer: 1,
            explain: "(250 + 50) / 1.000 = 30%.",
          },
          {
            q: "Apa fungsi utama pasar modal?",
            options: [
              "Mencetak uang",
              "Mempertemukan penabung dengan perusahaan yang butuh modal",
              "Menetapkan harga semua barang",
              "Menghapus risiko investasi",
            ],
            answer: 1,
            explain: "Pasar modal menyalurkan dana menganggur menjadi investasi nyata pada usaha.",
          },
          {
            q: "Mengapa Bursa Amsterdam 1602 bersejarah?",
            options: [
              "Bursa saham modern tertua yang memperdagangkan saham publik",
              "Bursa pertama yang melarang saham",
              "Tempat pertama mencetak uang kertas",
              "Bank sentral pertama dunia",
            ],
            answer: 0,
            explain: "Di sanalah saham VOC dapat diperjualbelikan publik secara terus menerus untuk pertama kalinya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "upah-tenaga-kerja-pembagian-hasil",
    levelId: "milik-modal",
    order: 5,
    title: "Upah, Tenaga Kerja & Pembagian Hasil",
    summary:
      "Bagaimana upah ditentukan, mengapa produktivitas penting, dan bagaimana nilai yang dihasilkan dibagi antara pekerja dan pemilik modal.",
    durationMin: 14,
    tags: ["upah", "tenaga kerja", "produktivitas", "serikat buruh", "pembagian hasil"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Upah</strong> adalah imbalan bagi tenaga kerja. Dalam pasar yang bersaing, upah cenderung bergerak menuju nilai yang disumbang seorang pekerja bagi hasil produksi. Semakin tinggi <strong>produktivitas</strong> (output per pekerja), semakin besar nilai yang ia ciptakan, dan semakin kuat dasar bagi upah yang lebih tinggi.",
      },
      {
        type: "paragraph",
        html: "Nilai yang dihasilkan sebuah usaha dibagi: sebagian menjadi <strong>upah</strong> bagi pekerja, sebagian menjadi <strong>laba</strong> bagi pemilik modal. Proporsi pembagian ini, sering disebut <strong>bagian upah</strong>, menjadi salah satu pertanyaan paling diperdebatkan dalam ekonomi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Upah mengikuti produktivitas",
        html: "Mesin, pelatihan, dan teknologi menaikkan output per pekerja. Saat produktivitas naik berkelanjutan, upah riil cenderung ikut naik. Inilah sebabnya pendidikan dan investasi modal penting bagi kesejahteraan pekerja.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tawar menawar dan serikat",
        html: "Upah tidak hanya soal angka produktivitas; ia juga hasil <strong>tawar menawar</strong>. Lewat <strong>serikat buruh</strong>, pekerja bersama dapat menegosiasikan upah, jam kerja, dan keselamatan kerja yang lebih baik daripada bila tawar sendiri sendiri.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Naikkan produktivitas seorang pekerja dan lihat bagaimana nilai yang ia ciptakan, serta batas atas upah yang masuk akal, ikut bergerak.",
      },
      { type: "widget", widget: "KalkulatorUpahProduktivitas" },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Pasar_Terapung.jpg?width=400",
        alt: "Pedagang bekerja di atas perahu di pasar terapung",
        caption: "Tenaga kerja dalam beragam wujud: dari pedagang mandiri sampai pekerja pabrik, semua menyumbang nilai.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "BiayaProduksi",
        title: "Dari Nilai Produksi ke Upah",
        caption: "Nilai yang dihasilkan sebuah usaha dibagi menjadi upah bagi pekerja dan laba bagi pemilik modal.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Pembagian Nilai Tambah Sebuah Pabrik (ilustrasi)",
        unit: "% dari nilai tambah",
        source: "ilustrasi edukatif pola pembagian pendapatan faktor",
        note: "Bagian terbesar nilai tambah biasanya menjadi upah; sisanya terbagi menjadi laba, sewa, dan bunga.",
        data: [
          { label: "Upah pekerja", value: 60, color: "#60a5fa" },
          { label: "Laba pemilik", value: 22, color: "#34d399" },
          { label: "Sewa", value: 10, color: "#a3a30f" },
          { label: "Bunga modal", value: 8, color: "#94a3b8" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mesin baru menaikkan produktivitas dan upah",
        html: "Sebuah konveksi semula menghasilkan output bernilai <strong>Rp100 juta</strong> per bulan dengan upah total <strong>Rp60 juta</strong>, sehingga bagian upah 60%. Setelah membeli mesin jahit otomatis, output naik menjadi <strong>Rp150 juta</strong> dengan pekerja yang sama. Pemilik menaikkan upah total menjadi Rp84 juta agar pekerja terampil tak pindah. Pekerja kini lebih sejahtera karena produktivitasnya naik, meski bagian upah turun menjadi 56%. Produktivitas yang naik memperbesar kue yang dibagi.",
      },
      {
        type: "case",
        title: "Sejarah: Gerakan buruh dan lahirnya Hari Buruh",
        html: "Sepanjang abad ke-19, pekerja pabrik menghadapi jam kerja sangat panjang. Tuntutan kerja <strong>8 jam sehari</strong> memuncak pada peristiwa <strong>Haymarket di Chicago tahun 1886</strong>. Dari perjuangan inilah lahir tradisi <strong>Hari Buruh 1 Mei</strong> yang diperingati di banyak negara. Gerakan serikat buruh abad 19 dan 20 menunjukkan bahwa pembagian hasil antara pekerja dan pemilik modal bukan hanya soal pasar, tetapi juga soal tawar menawar dan hak yang diperjuangkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah usaha menghasilkan nilai tambah Rp100 juta dan membayar upah Rp60 juta. Berapa persen bagian upah (labour share)?",
        answer: 60,
        tolerance: 0,
        suffix: "%",
        solution:
          "Bagian upah = upah / nilai tambah x 100% = 60 juta / 100 juta x 100% = <strong>60%</strong>. Sisanya menjadi laba, sewa, dan bunga.",
        hint: "Bagi total upah dengan nilai tambah, lalu kali 100%.",
      },
      {
        type: "calcExercise",
        prompt:
          "Lima pekerja bersama menghasilkan output bernilai Rp150 juta per bulan. Berapa produktivitas rata-rata per pekerja (dalam juta rupiah)?",
        answer: 30,
        tolerance: 0,
        prefix: "Rp",
        suffix: " juta",
        solution:
          "Produktivitas per pekerja = output total / jumlah pekerja = 150 / 5 = <strong>Rp30 juta</strong> per pekerja. Angka ini menjadi dasar bagi batas atas upah yang masuk akal.",
        hint: "Bagi nilai output total dengan jumlah pekerja.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap faktor: cenderung MENAIKKAN atau MENURUNKAN upah seorang pekerja.",
        buckets: ["Menaikkan upah", "Menurunkan upah"],
        items: [
          { text: "Pelatihan dan keterampilan yang langka", bucket: "Menaikkan upah" },
          { text: "Mesin yang melipatgandakan output per pekerja", bucket: "Menaikkan upah" },
          { text: "Banyak pelamar untuk pekerjaan yang sama tanpa keahlian khusus", bucket: "Menurunkan upah" },
          { text: "Produktivitas yang sangat rendah", bucket: "Menurunkan upah" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Upah adalah imbalan tenaga kerja dan cenderung mengikuti nilai yang disumbang pekerja.",
          "Produktivitas yang naik memperbesar kue yang dibagi dan mendasari upah lebih tinggi.",
          "Nilai tambah dibagi menjadi upah, laba, sewa, dan bunga; proporsinya disebut bagian upah.",
          "Tawar menawar dan serikat buruh ikut menentukan upah, bukan hanya pasar.",
          "Peristiwa Haymarket 1886 melahirkan tradisi Hari Buruh 1 Mei dan tuntutan kerja 8 jam.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dalam pasar bersaing, upah cenderung bergerak menuju...",
            options: [
              "Nol",
              "Nilai yang disumbang pekerja bagi hasil produksi",
              "Harga emas",
              "Angka yang ditetapkan pemilik sesuka hati",
            ],
            answer: 1,
            explain: "Upah cenderung mendekati produktivitas marginal pekerja dalam pasar bersaing.",
          },
          {
            q: "Mengapa produktivitas penting bagi upah?",
            options: [
              "Karena menurunkan output",
              "Karena output per pekerja yang lebih tinggi memperbesar nilai yang bisa dibagi",
              "Karena menghapus laba",
              "Karena menaikkan pajak",
            ],
            answer: 1,
            explain: "Produktivitas yang naik memperbesar kue, sehingga upah dapat naik berkelanjutan.",
          },
          {
            q: "Nilai tambah Rp100 juta, upah Rp60 juta. Berapa bagian upah?",
            options: ["6%", "60%", "40%", "160%"],
            answer: 1,
            explain: "60 juta dibagi 100 juta sama dengan 60%.",
          },
          {
            q: "Apa peran serikat buruh dalam penentuan upah?",
            options: [
              "Menghapus pasar tenaga kerja",
              "Memberi kekuatan tawar menawar kolektif kepada pekerja",
              "Menjamin laba pemilik",
              "Menetapkan harga barang",
            ],
            answer: 1,
            explain: "Serikat memungkinkan pekerja menegosiasikan upah dan kondisi kerja secara bersama.",
          },
          {
            q: "Peristiwa Haymarket 1886 berkaitan dengan...",
            options: [
              "Berdirinya bursa saham",
              "Tuntutan kerja 8 jam dan lahirnya Hari Buruh 1 Mei",
              "Penemuan mesin uap",
              "Krisis moneter Indonesia",
            ],
            answer: 1,
            explain: "Perjuangan kerja 8 jam di Chicago 1886 melahirkan tradisi Hari Buruh 1 Mei.",
          },
        ],
      },
    ],
  },
];
