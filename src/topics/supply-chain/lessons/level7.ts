import type { Lesson } from "../../../types";

export const level7: Lesson[] = [
  // ============================================================
  {
    id: "lean-toyota-production-system",
    levelId: "produksi",
    order: 1,
    title: "Lean Manufacturing & Toyota Production System",
    summary:
      "Produksi yang ramping membuang semua yang tidak menambah nilai. Pelajari tujuh pemborosan, ide just-in-time, dan ukuran produktivitas mesin OEE.",
    durationMin: 15,
    tags: ["produksi", "lean", "tps", "oee"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Lean manufacturing</strong> adalah filosofi produksi yang berfokus pada satu hal: memberi nilai kepada pelanggan dengan <strong>pemborosan sesedikit mungkin</strong>. Akarnya adalah <strong>Toyota Production System (TPS)</strong> yang dikembangkan di Jepang setelah Perang Dunia II, ketika sumber daya langka memaksa efisiensi ekstrem.",
      },
      {
        type: "paragraph",
        html: "Inti lean adalah memburu <strong>muda</strong> (pemborosan dalam bahasa Jepang). Ada tujuh jenis klasik: produksi berlebih, menunggu, transport tak perlu, proses berlebih, persediaan menumpuk, gerakan sia-sia, dan produk cacat. Apa pun yang tidak menambah nilai di mata pelanggan adalah kandidat untuk dihapus.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_assembly_line_-_1913.jpg?width=400",
        alt: "Lini perakitan Ford tahun 1913",
        caption: "Lini perakitan Ford 1913, cikal bakal produksi mengalir yang kelak disempurnakan Toyota menjadi lean dengan memburu pemborosan di tiap stasiun.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Just-in-Time (JIT)",
        html: "Salah satu pilar TPS adalah <strong>Just-in-Time</strong>: produksi dan pasokan barang <strong>tepat saat dibutuhkan</strong>, dalam jumlah yang dibutuhkan. JIT memangkas persediaan menumpuk, tapi menuntut rantai pasok yang sangat andal, karena nyaris tak ada stok pengaman.",
      },
      {
        type: "video",
        comp: "LeanTPSVideo",
        title: "Lean & Tujuh Pemborosan",
        caption: "Menghapus muda satu per satu sampai hanya aliran nilai yang tersisa mengalir ke pelanggan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "OEE mengukur seberapa produktif sebuah mesin. Lihat bagaimana kerugian kecil di ketersediaan, kinerja, dan mutu menumpuk karena ketiganya dikalikan.",
      },
      { type: "widget", widget: "KalkulatorOEE" },
      {
        type: "chart",
        variant: "bar",
        title: "Tingkat Persediaan: Produksi Massal vs Lean (ilustrasi)",
        unit: "indeks hari persediaan",
        source: "ilustrasi edukatif pola yang umum diamati",
        note: "Pendekatan lean dengan JIT memangkas hari persediaan secara drastis dibanding produksi massal tradisional.",
        data: [
          { label: "Produksi massal", value: 60, color: "#f87171" },
          { label: "Lean / JIT", value: 12, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kanban sebagai sinyal tarik",
        html: "Di lini perakitan Toyota, stasiun kerja tidak memproduksi sebanyak mungkin, melainkan hanya saat ada permintaan dari stasiun berikutnya. Sinyalnya berupa kartu <strong>kanban</strong>: ketika sebuah wadah komponen kosong, kartunya dikirim ke hulu sebagai izin memproduksi penggantinya. Sistem <em>tarik</em> (pull) ini mencegah produksi berlebih dan menjaga persediaan tetap rendah, kebalikan dari sistem <em>dorong</em> (push) yang membuat barang menumpuk tanpa permintaan nyata.",
      },
      {
        type: "case",
        title: "Sejarah: Taiichi Ohno dan kelahiran TPS",
        html: "<strong>Taiichi Ohno</strong>, insinyur Toyota, dianggap bapak TPS yang ia kembangkan sepanjang <strong>1948 sampai 1975</strong>. Ia terinspirasi cara kerja <strong>supermarket Amerika</strong>: rak diisi ulang hanya saat barang diambil pembeli. Ohno menerapkan logika yang sama di pabrik, melahirkan sistem tarik kanban. Berkat TPS, Toyota tumbuh dari produsen kecil pascaperang menjadi salah satu pembuat mobil terbesar dunia, dan idenya menyebar ke seluruh industri sebagai lean.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mesin punya ketersediaan 90%, kinerja 95%, dan mutu 99%. Berapa nilai OEE-nya? (OEE = ketersediaan x kinerja x mutu)",
        answer: 84.6,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "0,90 x 0,95 x 0,99 = 0,8464 = <strong>84,6%</strong>. Meski tiap faktor tinggi, hasil kalinya lebih rendah karena kerugian menumpuk. Angka di atas 85% dianggap kelas dunia.",
        hint: "Kalikan ketiga persentase dalam bentuk desimal, lalu ubah ke persen.",
      },
      {
        type: "classifyExercise",
        prompt: "Manakah yang termasuk pemborosan (muda) dan manakah kegiatan bernilai tambah?",
        buckets: ["Pemborosan (muda)", "Nilai tambah"],
        items: [
          { text: "Produk menunggu berjam-jam antar proses", bucket: "Pemborosan (muda)" },
          { text: "Mengubah bahan baku menjadi komponen jadi", bucket: "Nilai tambah" },
          { text: "Memindahkan barang bolak-balik tanpa perlu", bucket: "Pemborosan (muda)" },
          { text: "Merakit bagian yang diminta pelanggan", bucket: "Nilai tambah" },
          { text: "Memperbaiki produk cacat", bucket: "Pemborosan (muda)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Lean berfokus memberi nilai ke pelanggan dengan pemborosan sesedikit mungkin.",
          "Tujuh muda: produksi berlebih, menunggu, transport, proses berlebih, persediaan, gerakan, cacat.",
          "Just-in-Time memproduksi tepat saat dibutuhkan, memangkas persediaan tapi menuntut rantai andal.",
          "Kanban adalah sinyal tarik: produksi hanya saat ada permintaan nyata dari hilir.",
          "OEE mengalikan ketersediaan, kinerja, dan mutu; kerugian kecil menumpuk jadi besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fokus utama lean manufacturing?",
            options: [
              "Memproduksi sebanyak mungkin",
              "Memberi nilai ke pelanggan dengan pemborosan minimum",
              "Menambah jumlah mesin",
              "Menumpuk persediaan besar",
            ],
            answer: 1,
            explain: "Lean memburu dan menghapus pemborosan agar hanya nilai yang mengalir.",
          },
          {
            q: "Apa itu Just-in-Time?",
            options: [
              "Memproduksi jauh sebelum dibutuhkan",
              "Memproduksi dan memasok tepat saat dibutuhkan",
              "Menyimpan stok sebanyak mungkin",
              "Mengirim barang lebih cepat dari jadwal",
            ],
            answer: 1,
            explain: "JIT menyediakan barang tepat waktu dalam jumlah yang dibutuhkan, memangkas persediaan.",
          },
          {
            q: "Apa fungsi kartu kanban?",
            options: [
              "Mencatat gaji pekerja",
              "Sinyal tarik untuk memproduksi pengganti saat barang diambil",
              "Daftar harga produk",
              "Jadwal libur pabrik",
            ],
            answer: 1,
            explain: "Kanban memicu produksi hanya saat ada permintaan nyata dari proses berikutnya.",
          },
          {
            q: "Siapa yang dianggap bapak Toyota Production System?",
            options: ["Henry Ford", "Taiichi Ohno", "Peter Kraljic", "Malcolm McLean"],
            answer: 1,
            explain: "Taiichi Ohno mengembangkan TPS, terinspirasi cara kerja supermarket Amerika.",
          },
          {
            q: "Mesin dengan ketersediaan 90%, kinerja 95%, mutu 99% punya OEE sekitar?",
            options: ["95%", "84,6%", "99%", "73%"],
            answer: 1,
            explain: "0,90 x 0,95 x 0,99 = 0,846 atau 84,6%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "perencanaan-kapasitas",
    levelId: "produksi",
    order: 2,
    title: "Perencanaan Kapasitas: Kapasitas vs Beban",
    summary:
      "Kapasitas adalah kemampuan maksimum berproduksi; beban adalah pekerjaan yang masuk. Pelajari cara menyeimbangkan keduanya dan menemukan bottleneck yang membatasi seluruh lini.",
    durationMin: 14,
    tags: ["produksi", "kapasitas", "bottleneck", "utilisasi"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Perencanaan kapasitas</strong> menjawab pertanyaan: seberapa banyak yang sanggup kita produksi, dan apakah itu cukup untuk memenuhi permintaan? <strong>Kapasitas</strong> adalah keluaran maksimum yang bisa dihasilkan dalam periode tertentu, sedangkan <strong>beban</strong> (load) adalah jumlah pekerjaan yang dijadwalkan masuk. Bila beban melebihi kapasitas, pesanan terlambat; bila kapasitas jauh di atas beban, mesin dan pekerja menganggur.",
      },
      {
        type: "paragraph",
        html: "Sebuah lini produksi hanya secepat stasiun terlambatnya. Stasiun dengan kapasitas paling kecil disebut <strong>bottleneck</strong> (leher botol): ia membatasi keluaran seluruh lini, sekuat apa pun stasiun lain. Menambah kapasitas di stasiun non-bottleneck tidak menambah keluaran sama sekali.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Autonomous_Mobile_Robot_AMR.png?width=400",
        alt: "Robot otonom bergerak di lantai pabrik",
        caption: "Robot otonom di pabrik bisa menambah kapasitas suatu stasiun, tetapi keluaran lini tetap dibatasi stasiun bottleneck yang paling lambat.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "LeanTPSVideo",
        title: "Menyeimbangkan Beban Antar-Stasiun",
        caption: "Aliran hanya secepat stasiun terlambat, jadi beban tiap stasiun perlu diseimbangkan agar tak ada leher botol yang menahan lini.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Utilisasi vs efisiensi",
        html: "<strong>Utilisasi</strong> = keluaran aktual dibagi kapasitas desain (kapasitas teoretis maksimum). <strong>Efisiensi</strong> = keluaran aktual dibagi kapasitas efektif (kapasitas realistis setelah dikurangi perawatan, ganti alat, dan istirahat). Pabrik sehat menjaga utilisasi tinggi tanpa memaksa mesin sampai rusak.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Jangan memperbaiki yang bukan bottleneck",
        html: "Mempercepat stasiun yang bukan leher botol justru menumpuk barang setengah jadi di depan bottleneck. Yang terjadi bukan tambahan keluaran, melainkan tambahan persediaan dalam proses (WIP).",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "OEE menunjukkan berapa kapasitas yang benar-benar terpakai setelah dikurangi berhenti, lambat, dan cacat. Ini ukuran nyata kapasitas efektif sebuah mesin.",
      },
      { type: "widget", widget: "KalkulatorOEE" },
      {
        type: "chart",
        variant: "bar",
        title: "Kapasitas Tiap Stasiun pada Lini Perakitan (ilustrasi)",
        unit: "unit per jam",
        source: "ilustrasi edukatif",
        note: "Stasiun Pengecatan (90 unit/jam) adalah bottleneck; keluaran seluruh lini tidak akan melebihi 90 unit/jam meski stasiun lain lebih cepat.",
        data: [
          { label: "Pemotongan", value: 120, color: "#60a5fa" },
          { label: "Perakitan", value: 110, color: "#60a5fa" },
          { label: "Pengecatan", value: 90, color: "#f87171" },
          { label: "Pengemasan", value: 130, color: "#60a5fa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pabrik sepatu di Tangerang",
        html: "Sebuah pabrik sepatu punya empat stasiun dengan kapasitas 120, 110, 90, dan 130 pasang per jam. Permintaan naik menjadi 1000 pasang per hari (8 jam kerja). Karena bottleneck di pengecatan hanya 90 pasang/jam, keluaran maksimum lini = 90 x 8 = <strong>720 pasang/hari</strong>, masih kurang 280 pasang. Manajer menambah satu booth pengecatan sehingga kapasitas stasiun itu naik ke 135 pasang/jam. Kini bottleneck pindah ke perakitan (110/jam), keluaran menjadi 110 x 8 = <strong>880 pasang/hari</strong>. Memperbaiki bottleneck memindahkan, bukan menghapus, kendala.",
      },
      {
        type: "case",
        title: "Sejarah: Lini perakitan bergerak Ford 1913",
        html: "Pada <strong>sekitar 1913</strong>, <strong>Henry Ford</strong> memperkenalkan <strong>lini perakitan bergerak</strong> di pabrik Highland Park untuk Model T. Dengan membagi pekerjaan ke banyak stasiun dan menyeimbangkan bebannya, waktu perakitan satu sasis turun drastis dari sekitar <strong>12,5 jam</strong> menjadi sekitar <strong>1,5 jam (93 menit)</strong>. Inilah praktik awal penyeimbangan kapasitas antar-stasiun: aliran mengalir secepat stasiun terlambat, sehingga Ford menyeimbangkan beban setiap stasiun agar tak ada leher botol yang menahan lini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lini memiliki empat stasiun dengan kapasitas 120, 90, 110, dan 100 unit per jam. Bila bekerja 8 jam sehari, berapa unit maksimum yang bisa dihasilkan lini ini per hari?",
        answer: 720,
        tolerance: 1,
        suffix: " unit",
        solution:
          "Bottleneck adalah stasiun terlambat, yaitu 90 unit/jam. Keluaran lini = 90 x 8 = <strong>720 unit/hari</strong>. Stasiun lain yang lebih cepat tidak menambah keluaran.",
        hint: "Cari kapasitas terkecil (bottleneck), lalu kalikan dengan jam kerja.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mesin punya kapasitas desain 200 unit/hari dan menghasilkan 153 unit/hari. Berapa persen utilisasinya?",
        answer: 76.5,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Utilisasi = keluaran aktual / kapasitas desain = 153 / 200 = 0,765 = <strong>76,5%</strong>.",
        hint: "Bagi keluaran aktual dengan kapasitas desain, lalu ubah ke persen.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan istilah berikut menjadi konsep Kapasitas atau konsep Beban/Bottleneck.",
        buckets: ["Kapasitas", "Beban/Bottleneck"],
        items: [
          { text: "Keluaran maksimum mesin per jam", bucket: "Kapasitas" },
          { text: "Stasiun paling lambat yang membatasi lini", bucket: "Beban/Bottleneck" },
          { text: "Kapasitas efektif setelah dikurangi perawatan", bucket: "Kapasitas" },
          { text: "Jumlah pesanan yang dijadwalkan masuk", bucket: "Beban/Bottleneck" },
          { text: "Antrian WIP menumpuk di depan satu stasiun", bucket: "Beban/Bottleneck" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kapasitas adalah keluaran maksimum; beban adalah pekerjaan yang masuk. Keduanya harus diseimbangkan.",
          "Bottleneck adalah stasiun terlambat yang membatasi keluaran seluruh lini.",
          "Memperbaiki stasiun non-bottleneck tidak menambah keluaran, hanya menambah WIP.",
          "Utilisasi membandingkan keluaran dengan kapasitas desain; efisiensi dengan kapasitas efektif.",
          "Memperbaiki bottleneck biasanya memindahkan kendala ke stasiun lain, bukan menghapusnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud bottleneck dalam sebuah lini produksi?",
            options: [
              "Stasiun tercepat",
              "Stasiun dengan kapasitas terkecil yang membatasi keluaran lini",
              "Stasiun terakhir",
              "Stasiun dengan pekerja terbanyak",
            ],
            answer: 1,
            explain: "Lini hanya secepat stasiun terlambatnya, yaitu bottleneck.",
          },
          {
            q: "Jika kita mempercepat stasiun yang bukan bottleneck, apa yang terjadi?",
            options: [
              "Keluaran lini naik tajam",
              "Tidak menambah keluaran, malah menumpuk WIP",
              "Bottleneck hilang",
              "Kapasitas desain turun",
            ],
            answer: 1,
            explain: "Keluaran tetap dibatasi bottleneck; barang setengah jadi justru menumpuk.",
          },
          {
            q: "Utilisasi dihitung dengan membandingkan keluaran aktual terhadap?",
            options: ["Kapasitas efektif", "Kapasitas desain", "Jumlah pekerja", "Beban pesanan"],
            answer: 1,
            explain: "Utilisasi = keluaran aktual / kapasitas desain.",
          },
          {
            q: "Lini dengan stasiun 120, 90, 110, 100 unit/jam yang bekerja 8 jam menghasilkan maksimum?",
            options: ["960 unit", "720 unit", "880 unit", "800 unit"],
            answer: 1,
            explain: "Bottleneck 90 unit/jam x 8 jam = 720 unit/hari.",
          },
          {
            q: "Inovasi Henry Ford pada sekitar 1913 yang memangkas waktu rakit Model T adalah?",
            options: [
              "Robot industri",
              "Lini perakitan bergerak dengan beban stasiun seimbang",
              "Sistem MRP",
              "Just-in-Time",
            ],
            answer: 1,
            explain: "Lini bergerak Ford menyeimbangkan kapasitas antar-stasiun, memangkas waktu rakit drastis.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "aggregate-planning-level-vs-chase",
    levelId: "produksi",
    order: 3,
    title: "Aggregate Planning: Strategi Level vs Chase",
    summary:
      "Rencana agregat menyeimbangkan produksi dengan permintaan yang naik-turun selama beberapa bulan. Bandingkan strategi level yang menjaga produksi tetap dan strategi chase yang mengikuti permintaan.",
    durationMin: 14,
    tags: ["produksi", "aggregate-planning", "level", "chase"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Aggregate planning</strong> (perencanaan agregat) adalah rencana produksi jangka menengah, biasanya 3 sampai 18 bulan, yang menyeimbangkan permintaan yang berfluktuasi dengan kapasitas tenaga kerja, persediaan, dan jam kerja. Disebut agregat karena melihat keluaran secara gabungan, misalnya total unit, bukan rincian tiap model.",
      },
      {
        type: "paragraph",
        html: "Ada dua strategi murni. <strong>Strategi level</strong> menjaga tingkat produksi tetap konstan dan menyerap naik-turun permintaan lewat persediaan dan pesanan tertunda. <strong>Strategi chase</strong> mengubah produksi mengikuti permintaan tiap periode, dengan menambah atau mengurangi pekerja, lembur, atau subkontrak. Praktiknya sering memakai strategi campuran.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/UK-India_Business_Leaders_Climate_Group_breakfast_meeting_%285177859631%29.jpg?width=400",
        alt: "Rapat perencanaan para pemimpin bisnis",
        caption: "Perencanaan agregat diputuskan dalam rapat lintas fungsi yang menyeimbangkan perkiraan permintaan dengan kapasitas tenaga kerja dan persediaan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "info",
        title: "Level vs chase",
        html: "Strategi <strong>level</strong> hemat biaya rekrut-pecat tapi mahal di biaya simpan persediaan. Strategi <strong>chase</strong> hemat persediaan tapi mahal di biaya merekrut, melatih, memberhentikan, dan lembur. Pilihan tergantung mana yang lebih murah di industri itu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Leveling adalah jiwa heijunka",
        html: "Dalam lean, meratakan produksi disebut <strong>heijunka</strong>. Permintaan yang dijaga rata membuat pemasok dan lini lebih stabil, hingga JIT bisa berjalan tanpa kejutan beban.",
      },
      {
        type: "video",
        comp: "LeanTPSVideo",
        title: "Meratakan Aliran Produksi",
        caption: "Strategi level dan heijunka sama-sama meratakan beban agar rantai pasok tidak terguncang lonjakan permintaan.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Permintaan Bulanan vs Produksi Strategi Level (ilustrasi)",
        unit: "unit",
        source: "ilustrasi edukatif",
        note: "Strategi level menahan produksi di rata-rata 300 unit/bulan; selisihnya diserap persediaan saat permintaan rendah dan dikuras saat permintaan tinggi.",
        data: [
          { label: "Jan (200)", value: 200, color: "#60a5fa" },
          { label: "Feb (300)", value: 300, color: "#60a5fa" },
          { label: "Mar (400)", value: 400, color: "#60a5fa" },
          { label: "Apr (300)", value: 300, color: "#60a5fa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pabrik kipas angin menyiapkan musim kemarau",
        html: "Sebuah pabrik kipas angin di Surabaya memperkirakan permintaan empat bulan: 200, 300, 400, dan 300 unit, total <strong>1200 unit</strong>. Dengan <strong>strategi level</strong>, produksi dijaga 1200 / 4 = <strong>300 unit/bulan</strong>. Bulan 1 memproduksi 300 tapi terjual 200, sehingga ada sisa 100 unit. Bulan 2 stok tetap 100 (produksi 300, terjual 300). Bulan 3 stok 100 itu menutup kekurangan saat permintaan melonjak ke 400. Total biaya simpan jika ongkos simpan Rp10.000/unit/bulan atas stok akhir (100 + 100 + 0 + 0 = 200 unit-bulan) = <strong>Rp2.000.000</strong>. Dengan strategi chase, stok nyaris nol tetapi pabrik harus menambah dan mengurangi pekerja tiap bulan.",
      },
      {
        type: "case",
        title: "Sejarah: Aturan Keputusan Linear HMMS 1960",
        html: "Pada <strong>sekitar 1960</strong>, empat peneliti Charles <strong>Holt, Franco Modigliani, John Muth, dan Herbert Simon</strong> menerbitkan buku <em>Planning Production, Inventories, and Work Force</em>. Mereka merumuskan <strong>Linear Decision Rule</strong>, salah satu metode matematis pertama untuk menyeimbangkan produksi, persediaan, dan jumlah pekerja secara optimal. Modigliani dan Simon kemudian sama-sama meraih Hadiah Nobel Ekonomi, menandai betapa pentingnya pendekatan kuantitatif untuk perencanaan agregat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Permintaan empat bulan adalah 200, 300, 400, dan 300 unit. Dengan strategi level, berapa unit per bulan yang harus diproduksi agar total persis memenuhi permintaan?",
        answer: 300,
        tolerance: 1,
        suffix: " unit/bulan",
        solution:
          "Total permintaan = 200 + 300 + 400 + 300 = 1200 unit. Strategi level = 1200 / 4 = <strong>300 unit/bulan</strong>.",
        hint: "Jumlahkan semua permintaan lalu bagi dengan jumlah bulan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap karakteristik dengan strategi yang paling tepat.",
        pairs: [
          { left: "Produksi konstan tiap bulan", right: "Strategi level" },
          { left: "Menyerap fluktuasi lewat persediaan", right: "Strategi level" },
          { left: "Menambah/mengurangi pekerja mengikuti permintaan", right: "Strategi chase" },
          { left: "Persediaan nyaris nol", right: "Strategi chase" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Aggregate planning adalah rencana produksi jangka menengah yang melihat keluaran secara gabungan.",
          "Strategi level menjaga produksi konstan dan menyerap fluktuasi lewat persediaan.",
          "Strategi chase mengubah produksi mengikuti permintaan dengan menambah/mengurangi tenaga kerja atau lembur.",
          "Level mahal di biaya simpan; chase mahal di biaya rekrut-pecat dan lembur.",
          "Praktik nyata umumnya memakai strategi campuran sesuai biaya termurah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa ciri utama strategi level dalam aggregate planning?",
            options: [
              "Produksi berubah tiap bulan",
              "Produksi dijaga konstan, fluktuasi diserap persediaan",
              "Tidak menyimpan persediaan",
              "Selalu memakai subkontrak",
            ],
            answer: 1,
            explain: "Strategi level menjaga laju produksi tetap dan menumpuk/menguras persediaan.",
          },
          {
            q: "Strategi chase paling cocok ketika?",
            options: [
              "Biaya simpan persediaan sangat mahal dan tenaga kerja mudah disesuaikan",
              "Permintaan benar-benar rata",
              "Tidak ada pekerja",
              "Produksi harus selalu konstan",
            ],
            answer: 0,
            explain: "Chase menukar biaya simpan dengan biaya menyesuaikan tenaga kerja.",
          },
          {
            q: "Permintaan 200, 300, 400, 300 unit. Strategi level memproduksi berapa per bulan?",
            options: ["200 unit", "300 unit", "400 unit", "1200 unit"],
            answer: 1,
            explain: "Total 1200 dibagi 4 bulan = 300 unit/bulan.",
          },
          {
            q: "Dalam lean, meratakan produksi disebut?",
            options: ["Kanban", "Heijunka", "Muda", "Kaizen"],
            answer: 1,
            explain: "Heijunka adalah penyetaraan/perataan beban produksi, serupa strategi level.",
          },
          {
            q: "Siapa di antara perumus Linear Decision Rule (sekitar 1960) yang kelak meraih Nobel Ekonomi?",
            options: [
              "Taiichi Ohno",
              "Modigliani dan Simon",
              "Henry Ford",
              "Joseph Orlicky",
            ],
            answer: 1,
            explain: "Franco Modigliani dan Herbert Simon sama-sama kemudian meraih Hadiah Nobel Ekonomi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "material-requirement-planning",
    levelId: "produksi",
    order: 4,
    title: "Material Requirement Planning (MRP)",
    summary:
      "MRP menerjemahkan rencana produk jadi menjadi kebutuhan tepat tiap komponen. Pelajari BOM, kebutuhan kotor vs bersih, dan penggeseran waktu pesan menurut lead time.",
    durationMin: 15,
    tags: ["produksi", "mrp", "bom", "lead-time"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Material Requirement Planning (MRP)</strong> adalah sistem yang menghitung berapa banyak tiap bahan dan komponen yang dibutuhkan, serta kapan harus dipesan, agar produk jadi selesai tepat waktu. MRP mengubah jadwal produk akhir (Master Production Schedule) menjadi daftar pesanan komponen yang rinci.",
      },
      {
        type: "paragraph",
        html: "Tiga masukan utama MRP: <strong>jadwal produksi induk</strong> (berapa produk jadi dan kapan), <strong>Bill of Materials/BOM</strong> (struktur komponen tiap produk), dan <strong>catatan persediaan</strong> (stok di tangan dan pesanan yang sudah dalam perjalanan). Dari sini MRP menghitung kebutuhan kotor, lalu kebutuhan bersih, lalu menggeser waktu pesan sesuai lead time.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Modern_warehouse_with_pallet_rack_storage_system.jpg?width=400",
        alt: "Gudang modern dengan rak palet",
        caption: "MRP membaca catatan persediaan di gudang seperti ini untuk mengubah kebutuhan kotor menjadi kebutuhan bersih yang benar-benar perlu dipesan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kebutuhan kotor vs bersih",
        html: "<strong>Kebutuhan kotor</strong> adalah total komponen yang diperlukan dari BOM. <strong>Kebutuhan bersih</strong> = kebutuhan kotor - stok di tangan - penerimaan terjadwal. Hanya kebutuhan bersih yang perlu dipesan atau diproduksi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Lead time offset",
        html: "Bila sebuah komponen dibutuhkan di minggu ke-6 dan lead time-nya 2 minggu, pesanan harus <strong>dilepas (release) di minggu ke-4</strong>. Penggeseran mundur ini disebut <strong>lead time offset</strong> dan menjamin barang tiba pas saat dipakai.",
      },
      {
        type: "video",
        comp: "MRPVideo",
        title: "Cara Kerja MRP",
        caption: "Dari jadwal produk jadi, BOM diledakkan menjadi kebutuhan komponen, lalu digeser mundur sesuai lead time.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Ubah jumlah produk jadi, stok awal, dan lead time. Lihat bagaimana kebutuhan bersih dan waktu pelepasan pesanan ikut berubah.",
      },
      { type: "widget", widget: "KalkulatorMRP" },
      {
        type: "chart",
        variant: "bar",
        title: "Dari Kebutuhan Kotor ke Bersih untuk Komponen Kaki Meja (ilustrasi)",
        unit: "unit",
        source: "ilustrasi edukatif",
        note: "Stok 50 dan penerimaan terjadwal 30 mengurangi kebutuhan kotor 400 menjadi kebutuhan bersih 320 yang perlu dipesan.",
        data: [
          { label: "Kebutuhan kotor", value: 400, color: "#f87171" },
          { label: "Stok di tangan", value: 50, color: "#60a5fa" },
          { label: "Penerimaan terjadwal", value: 30, color: "#60a5fa" },
          { label: "Kebutuhan bersih", value: 320, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bengkel mebel memproduksi 100 meja",
        html: "Sebuah bengkel mebel di Jepara mendapat pesanan <strong>100 meja</strong>. Menurut BOM, tiap meja butuh <strong>4 kaki</strong> dan 1 papan. Kebutuhan kotor kaki = 100 x 4 = <strong>400 kaki</strong>. Di gudang sudah ada 50 kaki, dan 30 kaki sedang dalam pengiriman (penerimaan terjadwal). Kebutuhan bersih = 400 - 50 - 30 = <strong>320 kaki</strong>. Kaki dibutuhkan saat perakitan minggu ke-6, sedangkan pemasok butuh 2 minggu, maka pesanan 320 kaki harus dilepas di <strong>minggu ke-4</strong>. Tanpa MRP, bengkel mudah memesan terlalu banyak atau terlambat.",
      },
      {
        type: "case",
        title: "Sejarah: Joseph Orlicky membakukan MRP 1975",
        html: "<strong>Joseph Orlicky</strong>, insinyur di IBM, membakukan metode MRP dalam bukunya <em>Material Requirements Planning</em> yang terbit pada <strong>sekitar 1975</strong>. Saat komputer mulai mampu mengolah BOM besar, MRP menyebar cepat ke pabrik-pabrik. Bersama Oliver Wight dan George Plossl, Orlicky mendorong gerakan MRP di Amerika, mengubah perencanaan bahan dari tebakan manual menjadi perhitungan sistematis berbasis komputer.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kebutuhan kotor sebuah komponen adalah 400 unit. Stok di tangan 50 unit dan penerimaan terjadwal 30 unit. Berapa kebutuhan bersihnya?",
        answer: 320,
        tolerance: 1,
        suffix: " unit",
        solution:
          "Kebutuhan bersih = kebutuhan kotor - stok di tangan - penerimaan terjadwal = 400 - 50 - 30 = <strong>320 unit</strong>.",
        hint: "Kurangi kebutuhan kotor dengan stok yang sudah ada dan yang sedang dalam perjalanan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah komponen dibutuhkan (planned order receipt) di minggu ke-6. Lead time pemasok 2 minggu. Di minggu ke berapa pesanan harus dilepas?",
        answer: 4,
        tolerance: 0,
        prefix: "Minggu ke-",
        solution:
          "Lead time offset = 6 - 2 = <strong>minggu ke-4</strong>. Pesanan dilepas 2 minggu lebih awal agar tiba tepat saat dibutuhkan.",
        hint: "Kurangi minggu kebutuhan dengan lead time.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap hal sebagai Masukan MRP atau Keluaran MRP.",
        buckets: ["Masukan MRP", "Keluaran MRP"],
        items: [
          { text: "Bill of Materials (BOM)", bucket: "Masukan MRP" },
          { text: "Jadwal produksi induk", bucket: "Masukan MRP" },
          { text: "Catatan stok persediaan", bucket: "Masukan MRP" },
          { text: "Rencana pelepasan pesanan tiap komponen", bucket: "Keluaran MRP" },
          { text: "Jadwal kapan komponen harus tiba", bucket: "Keluaran MRP" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "MRP menghitung berapa dan kapan tiap komponen dibutuhkan agar produk jadi selesai tepat waktu.",
          "Tiga masukan MRP: jadwal produksi induk, BOM, dan catatan persediaan.",
          "Kebutuhan bersih = kebutuhan kotor - stok di tangan - penerimaan terjadwal.",
          "Lead time offset menggeser waktu pelepasan pesanan mundur sebesar lead time.",
          "Joseph Orlicky membakukan MRP pada sekitar 1975 saat komputer mulai mampu mengolah BOM besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa keluaran utama dari sistem MRP?",
            options: [
              "Laporan laba rugi",
              "Rencana berapa dan kapan tiap komponen dipesan",
              "Strategi pemasaran",
              "Daftar gaji pekerja",
            ],
            answer: 1,
            explain: "MRP menghasilkan rencana pelepasan pesanan komponen yang rinci dan terjadwal.",
          },
          {
            q: "Kebutuhan bersih dihitung dengan rumus?",
            options: [
              "Kebutuhan kotor + stok di tangan",
              "Kebutuhan kotor - stok di tangan - penerimaan terjadwal",
              "Stok di tangan x lead time",
              "Kebutuhan kotor x jumlah produk",
            ],
            answer: 1,
            explain: "Hanya selisih yang belum tertutup stok dan penerimaan yang perlu dipesan.",
          },
          {
            q: "Komponen dibutuhkan minggu ke-6, lead time 2 minggu. Pesanan dilepas minggu ke?",
            options: ["Minggu ke-8", "Minggu ke-6", "Minggu ke-4", "Minggu ke-2"],
            answer: 2,
            explain: "Lead time offset: 6 - 2 = minggu ke-4.",
          },
          {
            q: "Bill of Materials (BOM) menjelaskan?",
            options: [
              "Harga jual produk",
              "Struktur komponen penyusun tiap produk",
              "Jadwal libur pabrik",
              "Daftar pelanggan",
            ],
            answer: 1,
            explain: "BOM adalah daftar dan struktur komponen yang menyusun satu produk jadi.",
          },
          {
            q: "Siapa yang membakukan MRP lewat bukunya sekitar 1975?",
            options: ["Taiichi Ohno", "Joseph Orlicky", "Eliyahu Goldratt", "Henry Ford"],
            answer: 1,
            explain: "Joseph Orlicky dari IBM menerbitkan buku Material Requirements Planning.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "mrp-ii-dan-erp",
    levelId: "produksi",
    order: 5,
    title: "MRP II & ERP: Dari Bahan ke Seluruh Perusahaan",
    summary:
      "MRP II memperluas MRP ke perencanaan kapasitas dan keuangan, lalu ERP mengintegrasikan semua fungsi bisnis dalam satu basis data. Pelajari evolusi dan manfaatnya.",
    durationMin: 14,
    tags: ["produksi", "mrp-ii", "erp", "integrasi"],
    blocks: [
      {
        type: "paragraph",
        html: "MRP klasik hanya menghitung kebutuhan bahan. Pertanyaannya: apakah pabrik punya cukup jam mesin dan uang untuk menjalankan rencana itu? <strong>MRP II (Manufacturing Resource Planning)</strong> memperluas MRP dengan menambahkan <strong>perencanaan kapasitas</strong> dan menerjemahkan rencana produksi ke <strong>angka keuangan</strong>, sehingga rencana bahan, mesin, dan uang menjadi satu kesatuan.",
      },
      {
        type: "paragraph",
        html: "Langkah berikutnya adalah <strong>ERP (Enterprise Resource Planning)</strong>: satu sistem yang mengintegrasikan seluruh fungsi perusahaan, mulai produksi, persediaan, pembelian, penjualan, keuangan, sampai sumber daya manusia, dalam satu basis data bersama. Saat bagian penjualan menerima pesanan, produksi, gudang, dan keuangan langsung melihat dampaknya secara real time.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Diagnostic_monitors_in_the_control_room_of_Wendelstein_7-X.jpg?width=400",
        alt: "Deretan monitor di sebuah ruang kendali",
        caption: "ERP menyatukan data seluruh fungsi dalam satu basis data, mirip ruang kendali yang menampilkan kondisi semua bagian secara real time pada satu layar.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Evolusi: MRP &rarr; MRP II &rarr; ERP",
        html: "<strong>MRP</strong> mengurus bahan. <strong>MRP II</strong> menambah kapasitas dan keuangan. <strong>ERP</strong> mengintegrasikan semua fungsi bisnis. Setiap tahap memperluas cakupan, tetapi intinya tetap satu rencana yang konsisten dan saling terhubung.",
      },
      {
        type: "callout",
        tone: "info",
        title: "CRP: Capacity Requirements Planning",
        html: "Bagian penting MRP II adalah <strong>CRP</strong>, yang mengecek apakah jam mesin dan jam kerja yang tersedia cukup untuk menjalankan rencana bahan. Bila kebutuhan kapasitas melebihi yang tersedia, rencana harus disesuaikan sebelum dijalankan.",
      },
      {
        type: "video",
        comp: "MRPVideo",
        title: "Dari MRP ke Sistem Terpadu",
        caption: "Logika MRP yang sama meluas dari bahan menjadi kapasitas, keuangan, lalu seluruh perusahaan di ERP.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Cakupan Fungsi Bisnis: MRP, MRP II, ERP (ilustrasi)",
        unit: "jumlah fungsi terhubung",
        source: "ilustrasi edukatif",
        note: "Tiap tahap evolusi menambah fungsi yang terhubung dalam satu rencana, dari sekadar bahan sampai seluruh perusahaan.",
        data: [
          { label: "MRP", value: 1, color: "#60a5fa" },
          { label: "MRP II", value: 3, color: "#fbbf24" },
          { label: "ERP", value: 7, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Produsen elektronik memeriksa kapasitas",
        html: "Sebuah produsen elektronik di Batam memakai MRP II. MRP menyatakan perlu memproduksi <strong>320 unit</strong> dalam satu minggu. Tiap unit butuh <strong>0,25 jam mesin</strong> perakitan, sehingga kebutuhan kapasitas (CRP) = 320 x 0,25 = <strong>80 jam mesin</strong>. Kapasitas tersedia hanya 100 jam mesin/minggu, jadi beban = 80 / 100 = <strong>80%</strong>, masih layak. Jika permintaan naik menjadi 480 unit (kebutuhan 120 jam), rencana melebihi kapasitas dan perusahaan harus lembur atau menggeser jadwal sebelum berkomitmen.",
      },
      {
        type: "case",
        title: "Sejarah: Penyebaran ERP dan SAP R/3 era 1990-an",
        html: "Istilah <strong>ERP</strong> dipopulerkan oleh lembaga riset Gartner pada <strong>sekitar 1990</strong>. Dua tahun kemudian, <strong>sekitar 1992</strong>, perusahaan Jerman <strong>SAP</strong> meluncurkan <strong>SAP R/3</strong> berbasis arsitektur klien-server. Sepanjang 1990-an, ribuan perusahaan besar dunia mengadopsi ERP untuk menyatukan data yang sebelumnya tercerai-berai di banyak sistem terpisah. Gelombang ini juga mendorong proyek raksasa menjelang tahun 2000, ketika banyak perusahaan mengganti sistem lama sekaligus mengantisipasi masalah Y2K.",
      },
      {
        type: "calcExercise",
        prompt:
          "MRP meminta produksi 320 unit minggu ini. Tiap unit butuh 0,25 jam mesin. Berapa total jam mesin yang dibutuhkan (CRP)?",
        answer: 80,
        tolerance: 0.5,
        suffix: " jam",
        solution:
          "Kebutuhan kapasitas = 320 x 0,25 = <strong>80 jam mesin</strong>. Bandingkan dengan kapasitas tersedia untuk menilai kelayakan rencana.",
        hint: "Kalikan jumlah unit dengan jam mesin per unit.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kebutuhan kapasitas 80 jam mesin dan kapasitas tersedia 100 jam mesin. Berapa persen beban (utilisasi) yang dibebankan rencana ini?",
        answer: 80,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Beban = kebutuhan / tersedia = 80 / 100 = 0,80 = <strong>80%</strong>. Karena di bawah 100%, rencana masih layak dijalankan.",
        hint: "Bagi kebutuhan kapasitas dengan kapasitas tersedia.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap sistem atau istilah dengan cakupannya.",
        pairs: [
          { left: "MRP", right: "Menghitung kebutuhan bahan dan komponen" },
          { left: "MRP II", right: "Menambah perencanaan kapasitas dan keuangan" },
          { left: "ERP", right: "Mengintegrasikan seluruh fungsi bisnis dalam satu basis data" },
          { left: "CRP", right: "Mengecek apakah jam mesin cukup untuk rencana" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "MRP II memperluas MRP dengan perencanaan kapasitas dan terjemahan ke angka keuangan.",
          "ERP mengintegrasikan produksi, persediaan, pembelian, penjualan, keuangan, dan HR dalam satu basis data.",
          "CRP mengecek apakah jam mesin dan tenaga kerja cukup untuk menjalankan rencana bahan.",
          "Evolusi MRP ke MRP II ke ERP memperluas cakupan sambil menjaga satu rencana yang konsisten.",
          "Istilah ERP populer sekitar 1990 dan SAP R/3 (sekitar 1992) mempercepat adopsinya di era 1990-an.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang ditambahkan MRP II dibanding MRP biasa?",
            options: [
              "Hanya menghitung bahan",
              "Perencanaan kapasitas dan terjemahan ke angka keuangan",
              "Modul pemasaran media sosial",
              "Tidak ada yang baru",
            ],
            answer: 1,
            explain: "MRP II memperluas MRP ke kapasitas (CRP) dan dampak keuangan.",
          },
          {
            q: "Ciri utama sistem ERP adalah?",
            options: [
              "Banyak sistem terpisah tanpa data bersama",
              "Satu basis data terintegrasi untuk seluruh fungsi bisnis",
              "Hanya untuk bagian keuangan",
              "Hanya untuk gudang",
            ],
            answer: 1,
            explain: "ERP menyatukan semua fungsi dalam satu basis data bersama.",
          },
          {
            q: "Produksi 320 unit, tiap unit 0,25 jam mesin. Kebutuhan kapasitas (CRP) adalah?",
            options: ["80 jam", "320 jam", "100 jam", "40 jam"],
            answer: 0,
            explain: "320 x 0,25 = 80 jam mesin.",
          },
          {
            q: "Apa fungsi CRP dalam MRP II?",
            options: [
              "Menghitung gaji",
              "Mengecek apakah kapasitas mesin cukup untuk rencana bahan",
              "Menentukan harga jual",
              "Memilih pemasok",
            ],
            answer: 1,
            explain: "Capacity Requirements Planning menilai kecukupan kapasitas terhadap rencana.",
          },
          {
            q: "Sistem ERP yang luas diadopsi pada era 1990-an dan diluncurkan SAP sekitar 1992 adalah?",
            options: ["SAP R/3", "Windows 95", "Oracle 7", "Lotus 1-2-3"],
            answer: 0,
            explain: "SAP R/3 berbasis klien-server menjadi pendorong gelombang ERP di tahun 1990-an.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "penjadwalan-produksi-shop-floor",
    levelId: "produksi",
    order: 6,
    title: "Penjadwalan Produksi & Shop Floor Control",
    summary:
      "Setelah rencana bahan siap, lantai produksi harus memutuskan urutan kerja. Pelajari aturan sequencing, bagan Gantt, dan dispatching yang mengatur job di mesin.",
    durationMin: 14,
    tags: ["produksi", "penjadwalan", "sequencing", "gantt"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Penjadwalan produksi</strong> menentukan kapan dan dalam urutan apa setiap pekerjaan (job) dikerjakan di mesin. <strong>Shop floor control</strong> adalah pengendalian harian di lantai pabrik: melepas pekerjaan ke stasiun, memantau kemajuan, dan menjaga agar jadwal benar-benar berjalan. Rencana yang bagus bisa gagal bila urutan kerja di lantai berantakan.",
      },
      {
        type: "paragraph",
        html: "Pertanyaan inti sequencing: dari sekian pekerjaan yang antre, mana yang dikerjakan dulu? Beberapa aturan umum: <strong>FCFS</strong> (yang datang lebih dulu dilayani dulu), <strong>SPT</strong> (pekerjaan tercepat dulu), dan <strong>EDD</strong> (jatuh tempo paling awal dulu). Tiap aturan unggul untuk tujuan berbeda.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Forklift.jpg?width=400",
        alt: "Forklift memindahkan barang di lantai pabrik",
        caption: "Di lantai produksi, shop floor control melepas dan memindahkan pekerjaan antar stasiun, lalu menjaga agar urutan kerja yang dijadwalkan benar-benar berjalan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "MRPVideo",
        title: "Dari Rencana ke Urutan Kerja",
        caption: "Setelah MRP menetapkan kebutuhan dan jadwal, lantai produksi memutuskan urutan job yang dijalankan di tiap mesin.",
      },
      {
        type: "callout",
        tone: "key",
        title: "SPT memangkas lead time rata-rata",
        html: "Aturan <strong>Shortest Processing Time (SPT)</strong> mengerjakan job tercepat lebih dulu. Ini terbukti <strong>meminimalkan rata-rata waktu alir</strong> (flow time) dan rata-rata jumlah pekerjaan yang menunggu, karena job pendek tidak tertahan di belakang job panjang.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bagan Gantt dan dispatching",
        html: "<strong>Bagan Gantt</strong> menampilkan jadwal sebagai batang horizontal di garis waktu tiap mesin, sehingga tumpang-tindih dan waktu nganggur terlihat jelas. <strong>Dispatching</strong> adalah keputusan real time memilih job berikutnya yang dijalankan ketika sebuah mesin selesai dan menganggur.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Penjadwalan yang baik menaikkan waktu produktif mesin. Lihat lewat OEE bagaimana berhenti dan menunggu menggerus ketersediaan, faktor yang bisa diperbaiki dengan urutan kerja yang rapi.",
      },
      { type: "widget", widget: "KalkulatorOEE" },
      {
        type: "chart",
        variant: "bar",
        title: "Rata-rata Waktu Alir: FCFS vs SPT untuk 4 Job (ilustrasi)",
        unit: "hari",
        source: "ilustrasi edukatif perhitungan job 2, 4, 1, 3 hari",
        note: "Dengan empat job berdurasi 2, 4, 1, 3 hari, SPT menurunkan rata-rata waktu alir dari 6,25 menjadi 5 hari.",
        data: [
          { label: "FCFS", value: 6.25, color: "#f87171" },
          { label: "SPT", value: 5, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bengkel bubut mengatur antrean job",
        html: "Sebuah bengkel bubut di Cikarang punya empat pesanan dengan waktu proses 2, 4, 1, dan 3 hari. Dengan urutan kedatangan <strong>FCFS</strong> (2, 4, 1, 3), waktu selesai tiap job adalah 2, 6, 7, 10 hari, rata-rata (2+6+7+10)/4 = <strong>6,25 hari</strong>. Dengan <strong>SPT</strong> (urut 1, 2, 3, 4), waktu selesai menjadi 1, 3, 6, 10 hari, rata-rata (1+3+6+10)/4 = <strong>5 hari</strong>. Hanya dengan mengubah urutan, rata-rata lead time pelanggan turun lebih dari satu hari tanpa biaya tambahan.",
      },
      {
        type: "case",
        title: "Sejarah: Henry Gantt dan bagannya sekitar 1910-an",
        html: "<strong>Henry Laurence Gantt</strong>, seorang insinyur Amerika, mengembangkan <strong>bagan Gantt</strong> pada <strong>sekitar 1910-an</strong>. Bagan batang waktu ini dipakai luas untuk menjadwalkan produksi, termasuk pada upaya industri besar saat Perang Dunia I. Lebih dari seabad kemudian, bagan Gantt tetap menjadi alat standar untuk memvisualkan jadwal di pabrik maupun manajemen proyek modern.",
      },
      {
        type: "calcExercise",
        prompt:
          "Empat job punya waktu proses 2, 4, 1, dan 3 hari di satu mesin. Dengan aturan SPT (tercepat dulu), berapa rata-rata waktu alir (flow time) keempat job?",
        answer: 5,
        tolerance: 0.1,
        suffix: " hari",
        solution:
          "Urutan SPT: 1, 2, 3, 4. Waktu selesai kumulatif: 1, 3, 6, 10 hari. Rata-rata = (1 + 3 + 6 + 10) / 4 = 20 / 4 = <strong>5 hari</strong>.",
        hint: "Urutkan dari job tercepat, jumlahkan waktu selesai kumulatif tiap job, lalu bagi 4.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap aturan atau istilah penjadwalan dengan maksudnya.",
        pairs: [
          { left: "FCFS", right: "Melayani sesuai urutan kedatangan job" },
          { left: "SPT", right: "Meminimalkan rata-rata waktu alir" },
          { left: "EDD", right: "Mendahulukan job dengan jatuh tempo paling awal" },
          { left: "Bagan Gantt", right: "Memvisualkan jadwal sebagai batang di garis waktu" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Penjadwalan menentukan urutan kerja; shop floor control menjaga jadwal benar-benar berjalan.",
          "Aturan sequencing umum: FCFS, SPT, dan EDD, masing-masing untuk tujuan berbeda.",
          "SPT meminimalkan rata-rata waktu alir karena job pendek tidak tertahan job panjang.",
          "Bagan Gantt memvisualkan jadwal di garis waktu; dispatching memilih job berikutnya secara real time.",
          "Mengubah urutan kerja bisa memangkas lead time tanpa biaya tambahan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama shop floor control?",
            options: [
              "Menentukan harga jual",
              "Mengendalikan pelaksanaan harian agar jadwal produksi berjalan",
              "Merekrut pekerja baru",
              "Menyusun laporan pajak",
            ],
            answer: 1,
            explain: "Shop floor control melepas pekerjaan, memantau kemajuan, dan menjaga jadwal di lantai pabrik.",
          },
          {
            q: "Aturan SPT mengerjakan job berdasarkan?",
            options: [
              "Urutan kedatangan",
              "Waktu proses tercepat lebih dulu",
              "Jatuh tempo paling akhir",
              "Nilai pesanan terbesar",
            ],
            answer: 1,
            explain: "SPT mendahulukan job dengan waktu proses paling pendek.",
          },
          {
            q: "Mengapa SPT meminimalkan rata-rata waktu alir?",
            options: [
              "Karena job panjang dikerjakan dulu",
              "Karena job pendek tidak tertahan di belakang job panjang",
              "Karena semua job dikerjakan bersamaan",
              "Karena mesin lebih cepat",
            ],
            answer: 1,
            explain: "Menyelesaikan job pendek dulu menurunkan total lead time seluruh antrean.",
          },
          {
            q: "Job dengan waktu 2, 4, 1, 3 hari diurut SPT memberi rata-rata waktu alir?",
            options: ["6,25 hari", "5 hari", "10 hari", "2,5 hari"],
            answer: 1,
            explain: "Urutan 1,2,3,4 memberi waktu selesai 1,3,6,10; rata-rata 20/4 = 5 hari.",
          },
          {
            q: "Siapa yang mengembangkan bagan batang waktu untuk penjadwalan sekitar 1910-an?",
            options: ["Eliyahu Goldratt", "Henry Gantt", "Joseph Orlicky", "Taiichi Ohno"],
            answer: 1,
            explain: "Henry Laurence Gantt mengembangkan bagan Gantt yang masih dipakai hingga kini.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "theory-of-constraints-goldratt",
    levelId: "produksi",
    order: 7,
    title: "Theory of Constraints: Mengelola Kendala",
    summary:
      "Goldratt mengajarkan bahwa setiap sistem dibatasi sedikit kendala. Pelajari lima langkah fokus, drum-buffer-rope, dan mengapa keluaran hanya naik bila kendala diperbaiki.",
    durationMin: 15,
    tags: ["produksi", "theory-of-constraints", "goldratt", "bottleneck"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Theory of Constraints (TOC)</strong>, digagas Eliyahu Goldratt, berangkat dari satu gagasan kuat: keluaran (throughput) setiap sistem dibatasi oleh sejumlah kecil <strong>kendala</strong> (constraint), sering hanya satu. Memperbaiki bagian lain tidak menaikkan keluaran sama sekali. Karena itu, fokuslah pada kendala.",
      },
      {
        type: "paragraph",
        html: "TOC menawarkan <strong>lima langkah fokus</strong>: (1) <em>identifikasi</em> kendala, (2) <em>manfaatkan</em> kendala semaksimal mungkin tanpa investasi besar, (3) <em>selaraskan</em> semua proses lain agar tunduk pada irama kendala, (4) <em>tingkatkan</em> kapasitas kendala bila masih kurang, (5) <em>ulangi</em> ke kendala berikutnya, jangan biarkan inersia membuat kemajuan berhenti.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_assembly_line_-_1913.jpg?width=400",
        alt: "Lini perakitan panjang dengan banyak stasiun kerja",
        caption: "Pada lini panjang seperti ini, satu stasiun terlambat menjadi kendala yang membatasi keluaran seluruh sistem, persis fokus Theory of Constraints.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Throughput hanya naik bila kendala diperbaiki",
        html: "Satu jam yang hilang di kendala adalah satu jam yang hilang bagi seluruh sistem. Sebaliknya, satu jam yang dihemat di stasiun non-kendala adalah <strong>fatamorgana</strong>: tidak menambah keluaran apa pun, karena keluaran tetap dibatasi kendala.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Drum-Buffer-Rope (DBR)",
        html: "Metode penjadwalan TOC: kendala menjadi <strong>drum</strong> (penabuh irama seluruh pabrik), <strong>buffer</strong> stok kecil ditaruh tepat di depan kendala agar ia tak pernah kelaparan bahan, dan <strong>rope</strong> mengikat pelepasan bahan baru pada laju kendala agar WIP tidak meledak.",
      },
      {
        type: "video",
        comp: "LeanTPSVideo",
        title: "Fokus pada Kendala",
        caption: "Seperti lean memburu pemborosan, TOC memusatkan perbaikan pada satu titik yang benar-benar membatasi aliran.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Mesin kendala wajib dijaga produktif. Lihat lewat OEE bagaimana berhenti dan cacat di mesin kendala langsung menggerus keluaran seluruh sistem.",
      },
      { type: "widget", widget: "KalkulatorOEE" },
      {
        type: "chart",
        variant: "bar",
        title: "Keluaran Sistem: Memperbaiki Non-Kendala vs Kendala (ilustrasi)",
        unit: "unit per jam",
        source: "ilustrasi edukatif",
        note: "Mempercepat stasiun non-kendala tidak menambah keluaran (tetap 50); hanya meningkatkan kapasitas kendala yang menaikkannya ke 65.",
        data: [
          { label: "Kondisi awal", value: 50, color: "#94a3b8" },
          { label: "Perbaiki non-kendala", value: 50, color: "#f87171" },
          { label: "Perbaiki kendala", value: 65, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pabrik furnitur ekspor mengangkat kendala",
        html: "Sebuah pabrik furnitur ekspor di Jepara menemukan bahwa mesin pengeringan kayu adalah kendala, hanya mampu <strong>40 unit/jam</strong> sementara stasiun lain di atas 60 unit/jam. Sesuai TOC, perusahaan pertama memanfaatkan kendala (menjadwalkan tanpa jeda makan, memastikan tak pernah kehabisan bahan), lalu meningkatkannya dengan menyewa satu oven tambahan sehingga kapasitas naik ke <strong>50 unit/jam</strong>. Tambahan 10 unit/jam selama 8 jam = <strong>80 unit/hari</strong>. Dengan margin kontribusi Rp25.000/unit, tambahan keluaran ini bernilai 80 x Rp25.000 = <strong>Rp2.000.000/hari</strong>.",
      },
      {
        type: "case",
        title: "Sejarah: Goldratt dan novel The Goal 1984",
        html: "<strong>Eliyahu Goldratt</strong>, seorang fisikawan Israel, memperkenalkan Theory of Constraints lewat novel bisnis <em>The Goal</em> yang terbit pada <strong>sekitar 1984</strong>. Lewat tokoh Alex Rogo yang menyelamatkan pabriknya dengan fokus pada bottleneck, buku ini membuat konsep kendala mudah dipahami dan terjual jutaan kopi di seluruh dunia. TOC kemudian menjadi salah satu mazhab manajemen operasi paling berpengaruh, mendampingi lean dan six sigma.",
      },
      {
        type: "calcExercise",
        prompt:
          "Mesin kendala awalnya 40 unit/jam, lalu ditingkatkan menjadi 50 unit/jam. Bila pabrik bekerja 8 jam sehari, berapa tambahan unit per hari?",
        answer: 80,
        tolerance: 1,
        suffix: " unit",
        solution:
          "Tambahan per jam = 50 - 40 = 10 unit. Selama 8 jam = 10 x 8 = <strong>80 unit/hari</strong>. Karena ini di kendala, tambahannya langsung menjadi tambahan keluaran sistem.",
        hint: "Hitung selisih kapasitas per jam lalu kalikan jam kerja.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap langkah TOC (lima langkah fokus) dengan tindakannya.",
        pairs: [
          { left: "Identifikasi", right: "Temukan kendala yang membatasi sistem" },
          { left: "Manfaatkan", right: "Pakai kendala semaksimal mungkin tanpa investasi besar" },
          { left: "Selaraskan", right: "Atur proses lain mengikuti irama kendala" },
          { left: "Tingkatkan", right: "Tambah kapasitas kendala dengan investasi bila masih kurang" },
          { left: "Ulangi", right: "Cari kendala berikutnya, jangan biarkan inersia" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "TOC menyatakan keluaran sistem dibatasi sedikit kendala, sering hanya satu.",
          "Lima langkah fokus: identifikasi, manfaatkan, selaraskan, tingkatkan, ulangi.",
          "Satu jam hilang di kendala adalah hilang bagi seluruh sistem; hemat di non-kendala adalah fatamorgana.",
          "Drum-buffer-rope menjadikan kendala penabuh irama, dengan buffer di depannya dan rope menahan pelepasan bahan.",
          "Goldratt memperkenalkan TOC lewat novel The Goal sekitar 1984.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Menurut Theory of Constraints, keluaran sistem dibatasi oleh?",
            options: [
              "Stasiun tercepat",
              "Sejumlah kecil kendala (constraint), sering hanya satu",
              "Jumlah pekerja total",
              "Harga bahan baku",
            ],
            answer: 1,
            explain: "TOC memusatkan perhatian pada kendala yang membatasi seluruh aliran.",
          },
          {
            q: "Apa langkah pertama dari lima langkah fokus TOC?",
            options: [
              "Tingkatkan kapasitas kendala",
              "Identifikasi kendala",
              "Selaraskan proses lain",
              "Ulangi prosesnya",
            ],
            answer: 1,
            explain: "Langkah pertama adalah mengidentifikasi kendala sebelum bertindak.",
          },
          {
            q: "Menghemat satu jam di stasiun non-kendala berdampak apa pada keluaran sistem?",
            options: [
              "Menaikkan keluaran besar",
              "Tidak menambah keluaran sama sekali",
              "Menurunkan keluaran",
              "Menghapus kendala",
            ],
            answer: 1,
            explain: "Keluaran tetap dibatasi kendala, sehingga hemat di non-kendala adalah fatamorgana.",
          },
          {
            q: "Dalam drum-buffer-rope, peran kendala adalah?",
            options: [
              "Rope penahan bahan",
              "Drum penabuh irama seluruh pabrik",
              "Buffer cadangan",
              "Stasiun tercepat",
            ],
            answer: 1,
            explain: "Kendala menjadi drum yang menentukan laju seluruh sistem.",
          },
          {
            q: "Lewat karya apa Goldratt memperkenalkan TOC sekitar 1984?",
            options: [
              "Buku Material Requirements Planning",
              "Novel bisnis The Goal",
              "Sistem SAP R/3",
              "Toyota Production System",
            ],
            answer: 1,
            explain: "The Goal mengisahkan Alex Rogo menyelamatkan pabriknya dengan fokus pada bottleneck.",
          },
        ],
      },
    ],
  },
];
