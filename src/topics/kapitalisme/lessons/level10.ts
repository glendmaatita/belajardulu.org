import type { Lesson } from "../../../types";

export const level10: Lesson[] = [
  // ============================================================
  {
    id: "ekonomi-pancasila-indonesia",
    levelId: "indonesia",
    order: 1,
    title: "Ekonomi Pancasila & Pasal 33",
    summary:
      "Indonesia tidak menganut kapitalisme murni maupun sosialisme, melainkan ekonomi campuran berlandaskan Pancasila dan Pasal 33 UUD 1945.",
    durationMin: 15,
    tags: ["indonesia", "ekonomi pancasila", "pasal 33", "bumn"],
    blocks: [
      {
        type: "paragraph",
        html: "Indonesia memilih jalan tengah: <strong>ekonomi campuran</strong> yang dibingkai nilai <strong>Pancasila</strong>. Pasar dan usaha swasta diberi ruang, tetapi negara hadir kuat di sektor yang menyangkut hajat hidup orang banyak. Landasannya adalah <strong>Pasal 33 UUD 1945</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pasal 33 UUD 1945",
        html: "Perekonomian disusun sebagai <strong>usaha bersama</strong> atas asas kekeluargaan; cabang produksi penting yang menguasai hajat hidup orang banyak dikuasai negara; dan bumi, air, serta kekayaan alam dipakai untuk <strong>sebesar-besarnya kemakmuran rakyat</strong>.",
      },
      {
        type: "video",
        comp: "SistemEkonomi",
        title: "Sistem Ekonomi",
        caption: "Perbandingan sistem pasar, komando, dan campuran tempat ekonomi Indonesia berdiri.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Pasar_Terapung.jpg?width=400",
        alt: "Pasar terapung tradisional dengan pedagang di atas perahu",
        caption: "Pasar rakyat: wajah ekonomi kerakyatan yang hidup berdampingan dengan korporasi modern.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana komponen pengeluaran membentuk Produk Domestik Bruto, ukuran besarnya ekonomi sebuah negara.",
      },
      { type: "widget", widget: "KalkulatorPDB" },
      {
        type: "chart",
        variant: "donut",
        title: "Tiga Pelaku Ekonomi Indonesia (ilustrasi)",
        unit: "porsi peran (ilustrasi)",
        source: "ilustrasi edukatif konsep tiga pelaku ekonomi",
        note: "Ekonomi Indonesia ditopang BUMN, swasta, dan koperasi yang saling melengkapi.",
        data: [
          { label: "Swasta", value: 55, color: "#60a5fa" },
          { label: "BUMN", value: 35, color: "#f87171" },
          { label: "Koperasi & UMKM", value: 10, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: BUMN di sektor strategis",
        html: "Listrik, bahan bakar, dan air adalah kebutuhan dasar yang menyangkut hajat hidup orang banyak. Karena itu, sesuai semangat Pasal 33, negara hadir lewat <strong>BUMN</strong> seperti PLN, Pertamina, dan perusahaan air. Tujuannya menjaga agar layanan vital tetap terjangkau dan merata, tidak sekadar mengejar laba seperti perusahaan biasa. Di sini terlihat beda ekonomi Indonesia dari kapitalisme murni: ada sektor yang sengaja tidak diserahkan sepenuhnya ke pasar.",
      },
      {
        type: "case",
        title: "Sejarah: Dari Orde Baru ke Reformasi 1998",
        html: "Pada era <strong>Orde Baru</strong>, ekonomi Indonesia tumbuh pesat tetapi diwarnai praktik <strong>kolusi dan monopoli</strong> yang dekat dengan kekuasaan. Ketika <strong>krisis moneter Asia 1997-1998</strong> menghantam, rupiah anjlok, banyak usaha bangkrut, dan ketimpangan terkuak. Gelombang protes memuncak pada <strong>Reformasi 1998</strong>. Sesudahnya, Indonesia mendorong pasar yang lebih terbuka dan bersaing, sekaligus memperkuat lembaga seperti pengawas persaingan usaha. Sejarah ini menegaskan bahwa pasar butuh aturan dan keterbukaan agar sehat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah ekonomi punya konsumsi Rp600 triliun, investasi Rp250 triliun, belanja pemerintah Rp200 triliun, dan ekspor neto Rp50 triliun. Berapa PDB-nya? (PDB = C + I + G + NX)",
        answer: 1100,
        tolerance: 0,
        suffix: "triliun",
        solution:
          "PDB = 600 + 250 + 200 + 50 = <strong>Rp1.100 triliun</strong>. Rumus pengeluaran ini menjumlahkan konsumsi, investasi, belanja pemerintah, dan ekspor neto.",
        hint: "Jumlahkan keempat komponen pengeluaran.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan: sesuai semangat KAPITALISME MURNI atau EKONOMI PANCASILA.",
        buckets: ["Kapitalisme murni", "Ekonomi Pancasila"],
        items: [
          { text: "Semua sektor diserahkan sepenuhnya ke pasar", bucket: "Kapitalisme murni" },
          { text: "Sektor vital dikuasai negara demi kemakmuran rakyat", bucket: "Ekonomi Pancasila" },
          { text: "Perekonomian sebagai usaha bersama asas kekeluargaan", bucket: "Ekonomi Pancasila" },
          { text: "Laba adalah satu-satunya tujuan tanpa pertimbangan sosial", bucket: "Kapitalisme murni" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Indonesia menganut ekonomi campuran berlandaskan Pancasila dan Pasal 33 UUD 1945.",
          "Sektor yang menguasai hajat hidup orang banyak dikuasai negara, sering lewat BUMN.",
          "Ekonomi ditopang tiga pelaku: swasta, BUMN, dan koperasi/UMKM.",
          "Krisis 1997-1998 dan Reformasi mendorong pasar yang lebih terbuka dan diawasi.",
          "Pasar diberi ruang, tetapi dibingkai nilai keadilan sosial, bukan kapitalisme murni.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sistem ekonomi Indonesia paling tepat disebut?",
            options: ["Kapitalisme murni", "Sosialisme murni", "Ekonomi campuran berlandaskan Pancasila", "Ekonomi komando"],
            answer: 2,
            explain: "Indonesia memadukan pasar dan peran negara dalam bingkai Pancasila.",
          },
          {
            q: "Apa inti Pasal 33 UUD 1945?",
            options: [
              "Semua usaha harus milik asing",
              "Cabang produksi yang menguasai hajat hidup orang banyak dikuasai negara",
              "Pasar dilarang",
              "Pajak dihapus",
            ],
            answer: 1,
            explain: "Pasal 33 menempatkan sektor vital di tangan negara demi kemakmuran rakyat.",
          },
          {
            q: "Mengapa listrik dan BBM dikelola BUMN?",
            options: [
              "Agar harganya semahal mungkin",
              "Karena menyangkut hajat hidup orang banyak dan harus terjangkau merata",
              "Agar tidak ada yang memakainya",
              "Karena dilarang swasta menyentuh energi",
            ],
            answer: 1,
            explain: "Sektor vital dijaga negara agar layanan tetap terjangkau dan merata.",
          },
          {
            q: "Apa dampak krisis moneter 1997-1998 bagi ekonomi Indonesia?",
            options: [
              "Tidak ada perubahan",
              "Memicu Reformasi dan dorongan ke pasar yang lebih terbuka dan diawasi",
              "Menghapus semua BUMN",
              "Membuat rupiah menguat",
            ],
            answer: 1,
            explain: "Krisis dan Reformasi 1998 mendorong keterbukaan pasar dan penguatan lembaga pengawas.",
          },
          {
            q: "C=600, I=250, G=200, NX=50 (triliun). Berapa PDB?",
            options: ["Rp1.050 triliun", "Rp1.100 triliun", "Rp1.000 triliun", "Rp950 triliun"],
            answer: 1,
            explain: "600 + 250 + 200 + 50 = Rp1.100 triliun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pasal-33-ekonomi-kerakyatan",
    levelId: "indonesia",
    order: 2,
    title: "Pasal 33 & Ekonomi Kerakyatan",
    summary:
      "Ekonomi kerakyatan menempatkan rakyat kecil, UMKM, dan koperasi sebagai tulang punggung, sesuai semangat usaha bersama dan asas kekeluargaan dalam Pasal 33.",
    durationMin: 14,
    tags: ["indonesia", "ekonomi kerakyatan", "pasal 33", "umkm", "koperasi"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Ekonomi kerakyatan</strong> adalah cara pandang yang menaruh rakyat kecil di pusat: pedagang pasar, petani, nelayan, perajin, dan pelaku <strong>UMKM</strong>. Semangatnya langsung dari Pasal 33: perekonomian disusun sebagai <strong>usaha bersama</strong> atas <strong>asas kekeluargaan</strong>, bukan sekadar persaingan bebas antar pemodal besar.",
      },
      {
        type: "paragraph",
        html: "UMKM bukan pemain pinggiran. Mereka menyerap sebagian besar tenaga kerja Indonesia dan menyumbang porsi besar dari PDB. Karena itu, menjaga UMKM tetap hidup adalah inti dari menjaga keadilan ekonomi.",
      },
      {
        type: "video",
        comp: "KomponenPDB",
        title: "Komponen Pembentuk PDB",
        caption: "Konsumsi rumah tangga, yang banyak ditopang UMKM, menjadi penyumbang terbesar PDB Indonesia.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Asas kekeluargaan",
        html: "Asas kekeluargaan berarti pelaku ekonomi tidak saling mematikan, melainkan <strong>saling menopang</strong>. Bentuk paling murninya adalah <strong>koperasi</strong>, tempat anggota sekaligus menjadi pemilik dan pengguna.",
      },
      {
        type: "callout",
        tone: "info",
        title: "UMKM penyerap kerja terbesar",
        html: "Mayoritas tenaga kerja Indonesia bekerja di sektor <strong>UMKM</strong>. Goncangan pada UMKM langsung terasa pada jutaan keluarga, sehingga sektor ini menjadi prioritas kebijakan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Pasar_Terapung.jpg?width=400",
        alt: "Pedagang di pasar terapung menjual dagangan dari atas perahu",
        caption: "Pasar terapung: contoh nyata ekonomi kerakyatan yang ditopang pedagang kecil.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser komponen pengeluaran dan lihat bagaimana konsumsi rumah tangga, yang banyak ditopang UMKM, mendominasi PDB Indonesia.",
      },
      { type: "widget", widget: "KalkulatorPDB" },
      {
        type: "chart",
        variant: "bar",
        title: "Penyerapan Tenaga Kerja: UMKM vs Usaha Besar (ilustrasi)",
        unit: "porsi tenaga kerja (ilustrasi)",
        source: "ilustrasi edukatif pola struktur ketenagakerjaan Indonesia",
        note: "UMKM menyerap jauh lebih banyak pekerja, itulah alasan ekonomi kerakyatan jadi prioritas.",
        data: [
          { label: "UMKM", value: 97, color: "#34d399" },
          { label: "Usaha besar", value: 3, color: "#60a5fa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Warung kelontong vs ritel modern",
        html: "Sebuah warung kelontong bermodal kecil melayani satu kampung. Ketika gerai ritel modern besar buka di dekatnya, omzet warung bisa tergerus. Semangat ekonomi kerakyatan mendorong kebijakan yang menjaga ruang hidup pelaku kecil, misalnya pembatasan jam dan lokasi gerai besar, kemitraan pasokan, serta akses kredit usaha rakyat agar warung tetap bisa bersaing. Tujuannya bukan melarang yang besar, tetapi menjaga agar yang kecil tidak tergilas.",
      },
      {
        type: "case",
        title: "Sejarah: Mohammad Hatta dan Hari Koperasi 12 Juli 1947",
        html: "<strong>Mohammad Hatta</strong>, wakil presiden pertama, dikenal sebagai <strong>Bapak Koperasi Indonesia</strong>. Ia meyakini koperasi adalah bentuk usaha yang paling sesuai dengan asas kekeluargaan Pasal 33. Pada <strong>12 Juli 1947</strong> digelar Kongres Koperasi pertama di Tasikmalaya, dan tanggal itu kini diperingati sebagai <strong>Hari Koperasi</strong>. Gagasan Hatta menegaskan bahwa ekonomi Indonesia sejak awal dirancang berpihak pada kebersamaan, bukan semata persaingan modal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah koperasi simpan pinjam dalam setahun memperoleh pendapatan Rp500 juta dan menanggung biaya operasional Rp380 juta. Berapa Sisa Hasil Usaha (SHU) koperasi tersebut?",
        answer: 120,
        tolerance: 0,
        prefix: "Rp",
        suffix: "juta",
        solution:
          "SHU = pendapatan - biaya = 500 - 380 = <strong>Rp120 juta</strong>. SHU inilah yang dibagikan kepada anggota sesuai jasa dan partisipasi mereka.",
        hint: "Kurangkan biaya dari pendapatan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah ekonomi kerakyatan dengan maknanya.",
        pairs: [
          { left: "UMKM", right: "Usaha mikro, kecil, dan menengah penyerap kerja terbesar" },
          { left: "Koperasi", right: "Usaha milik bersama anggota atas asas kekeluargaan" },
          { left: "SHU", right: "Sisa hasil usaha koperasi yang dibagi ke anggota" },
          { left: "Asas kekeluargaan", right: "Pelaku ekonomi saling menopang, bukan saling mematikan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Ekonomi kerakyatan menempatkan rakyat kecil, UMKM, dan koperasi di pusat.",
          "Landasannya adalah usaha bersama dan asas kekeluargaan dalam Pasal 33.",
          "UMKM menyerap mayoritas tenaga kerja Indonesia.",
          "Koperasi adalah bentuk usaha paling sesuai dengan asas kekeluargaan.",
          "Mohammad Hatta adalah Bapak Koperasi; Hari Koperasi diperingati 12 Juli.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti dari ekonomi kerakyatan?",
            options: [
              "Menyerahkan semua usaha ke korporasi besar",
              "Menempatkan rakyat kecil, UMKM, dan koperasi sebagai tulang punggung",
              "Menghapus pasar sepenuhnya",
              "Melarang usaha swasta",
            ],
            answer: 1,
            explain: "Ekonomi kerakyatan berpusat pada pelaku kecil sesuai asas kekeluargaan.",
          },
          {
            q: "Siapa yang dikenal sebagai Bapak Koperasi Indonesia?",
            options: ["Soekarno", "Mohammad Hatta", "Sutan Sjahrir", "Ki Hajar Dewantara"],
            answer: 1,
            explain: "Mohammad Hatta dikenal sebagai Bapak Koperasi Indonesia.",
          },
          {
            q: "Kapan Hari Koperasi diperingati?",
            options: ["17 Agustus", "1 Juni", "12 Juli", "28 Oktober"],
            answer: 2,
            explain: "Hari Koperasi diperingati 12 Juli, merujuk Kongres Koperasi pertama 1947.",
          },
          {
            q: "Apa itu SHU dalam koperasi?",
            options: [
              "Pajak yang dibayar koperasi",
              "Sisa hasil usaha yang dibagi ke anggota sesuai partisipasi",
              "Utang koperasi ke bank",
              "Modal awal koperasi",
            ],
            answer: 1,
            explain: "SHU adalah sisa hasil usaha yang dibagikan kepada anggota.",
          },
          {
            q: "Mengapa UMKM jadi prioritas kebijakan ekonomi?",
            options: [
              "Karena jumlahnya sedikit",
              "Karena menyerap mayoritas tenaga kerja sehingga menyangkut banyak keluarga",
              "Karena tidak membayar pajak",
              "Karena dilarang tumbuh besar",
            ],
            answer: 1,
            explain: "UMKM menyerap sebagian besar tenaga kerja Indonesia.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "bumn-swasta-koperasi",
    levelId: "indonesia",
    order: 3,
    title: "BUMN, Swasta & Koperasi",
    summary:
      "Tiga pelaku ekonomi Indonesia memiliki peran berbeda yang saling melengkapi: negara menjaga sektor vital, swasta mendorong efisiensi dan inovasi, koperasi merawat kebersamaan.",
    durationMin: 14,
    tags: ["indonesia", "bumn", "swasta", "koperasi", "pelaku ekonomi"],
    blocks: [
      {
        type: "paragraph",
        html: "Ekonomi Indonesia berdiri di atas <strong>tiga pelaku</strong>: <strong>BUMN</strong> (milik negara), <strong>swasta</strong> (milik perorangan atau perusahaan), dan <strong>koperasi</strong> (milik bersama anggota). Ketiganya bukan saingan yang harus saling meniadakan, melainkan tiga peran yang saling menambal kekurangan satu sama lain.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pembagian peran",
        html: "<strong>BUMN</strong> hadir di sektor vital yang menyangkut hajat hidup orang banyak; <strong>swasta</strong> unggul mengejar efisiensi dan inovasi; <strong>koperasi</strong> menjaga semangat kebersamaan dan keadilan pembagian hasil.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bukan tanpa risiko",
        html: "BUMN bisa kurang efisien bila tanpa pengawasan, swasta bisa abai pada kepentingan publik bila hanya mengejar laba, dan koperasi bisa lemah bila pengelolaannya tidak profesional. Karena itu ketiganya butuh tata kelola yang baik.",
      },
      {
        type: "video",
        comp: "KapitalismeVideo",
        title: "Kapitalisme dan Peran Modal",
        caption: "Bagaimana modal swasta bekerja, dan mengapa negara tetap hadir di sektor tertentu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak supermarket modern penuh dengan produk dalam kemasan",
        caption: "Ritel modern adalah wajah sektor swasta yang mengejar efisiensi dan pilihan luas.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi Kasus: Dividen BUMN untuk negara",
        html: "BUMN yang sehat tidak hanya melayani publik, tetapi juga menyumbang ke kas negara lewat <strong>dividen</strong>. Misalkan sebuah BUMN mencatat laba bersih Rp10 triliun dan rapat pemegang saham menetapkan rasio dividen 40 persen untuk negara. Maka negara menerima Rp4 triliun yang bisa dipakai membiayai pembangunan. Inilah salah satu cara peran negara dalam ekonomi berputar kembali menjadi manfaat bagi rakyat.",
      },
      {
        type: "case",
        title: "Sejarah: Pendirian Pertamina 1968",
        html: "Pada <strong>1968</strong>, pemerintah menggabungkan dua perusahaan minyak negara menjadi <strong>Pertamina</strong>. Tujuannya menempatkan pengelolaan minyak dan gas, kekayaan alam yang menyangkut hajat hidup orang banyak, di tangan negara sesuai semangat Pasal 33. Sejarah ini menunjukkan bagaimana prinsip konstitusi diterjemahkan menjadi lembaga usaha nyata yang sampai sekarang menopang energi nasional.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah BUMN membukukan laba bersih Rp10 triliun. Rapat pemegang saham menetapkan rasio dividen 40 persen untuk negara. Berapa dividen yang diterima negara?",
        answer: 4,
        tolerance: 0,
        prefix: "Rp",
        suffix: "triliun",
        solution:
          "Dividen = 40% x 10 triliun = <strong>Rp4 triliun</strong>. Sisanya, Rp6 triliun, biasanya ditahan untuk investasi dan penguatan modal perusahaan.",
        hint: "Kalikan laba dengan persentase dividen.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri ke pelaku ekonomi yang paling tepat.",
        buckets: ["BUMN", "Swasta", "Koperasi"],
        items: [
          { text: "Dimiliki negara dan menjaga sektor vital", bucket: "BUMN" },
          { text: "Membagikan dividen ke kas negara", bucket: "BUMN" },
          { text: "Dimiliki perorangan dan mengejar laba serta efisiensi", bucket: "Swasta" },
          { text: "Berinovasi cepat menanggapi pasar", bucket: "Swasta" },
          { text: "Dimiliki bersama anggota atas asas kekeluargaan", bucket: "Koperasi" },
          { text: "Membagi SHU sesuai partisipasi anggota", bucket: "Koperasi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Tiga pelaku ekonomi Indonesia: BUMN, swasta, dan koperasi.",
          "BUMN menjaga sektor vital, swasta mengejar efisiensi dan inovasi, koperasi merawat kebersamaan.",
          "BUMN sehat menyumbang dividen ke kas negara untuk pembangunan.",
          "Ketiganya saling melengkapi dan sama-sama butuh tata kelola yang baik.",
          "Pertamina (1968) adalah contoh Pasal 33 yang diwujudkan jadi lembaga usaha.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Siapa pemilik sebuah BUMN?",
            options: ["Perorangan", "Negara", "Anggota koperasi", "Investor asing"],
            answer: 1,
            explain: "BUMN adalah Badan Usaha Milik Negara.",
          },
          {
            q: "Apa keunggulan khas sektor swasta?",
            options: [
              "Selalu mengutamakan kepentingan publik",
              "Efisiensi dan inovasi karena mengejar laba",
              "Tidak pernah bangkrut",
              "Dimiliki bersama anggota",
            ],
            answer: 1,
            explain: "Swasta cenderung efisien dan inovatif karena bersaing mengejar laba.",
          },
          {
            q: "Bagaimana BUMN sehat menyumbang ke negara?",
            options: [
              "Lewat dividen yang masuk kas negara",
              "Dengan menaikkan harga setinggi mungkin",
              "Dengan menutup layanan publik",
              "Dengan menghindari pajak",
            ],
            answer: 0,
            explain: "BUMN untung membagikan dividen yang menjadi penerimaan negara.",
          },
          {
            q: "Perusahaan apa yang didirikan tahun 1968 untuk mengelola minyak negara?",
            options: ["PLN", "Pertamina", "Telkom", "Garuda"],
            answer: 1,
            explain: "Pertamina dibentuk pada 1968 dari penggabungan perusahaan minyak negara.",
          },
          {
            q: "BUMN laba Rp10 triliun, dividen 40% untuk negara. Berapa diterima negara?",
            options: ["Rp2 triliun", "Rp4 triliun", "Rp6 triliun", "Rp10 triliun"],
            answer: 1,
            explain: "40% x 10 triliun = Rp4 triliun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "orde-baru-ke-reformasi",
    levelId: "indonesia",
    order: 4,
    title: "Dari Orde Baru ke Reformasi",
    summary:
      "Pertumbuhan pesat Orde Baru rapuh karena kolusi dan utang, runtuh saat krisis moneter 1997-1998, lalu Reformasi 1998 melahirkan pasar yang lebih terbuka dan diawasi.",
    durationMin: 15,
    tags: ["indonesia", "orde baru", "reformasi", "krisis moneter", "sejarah"],
    blocks: [
      {
        type: "paragraph",
        html: "Selama <strong>Orde Baru</strong> (1966-1998), ekonomi Indonesia tumbuh cepat dan kemiskinan turun tajam. Namun pertumbuhan itu ditopang utang luar negeri besar dan diwarnai <strong>kolusi serta monopoli</strong> yang dekat dengan kekuasaan. Pondasi yang tampak kokoh ternyata rapuh terhadap guncangan.",
      },
      {
        type: "paragraph",
        html: "Guncangan itu datang sebagai <strong>krisis moneter Asia 1997-1998</strong>. Nilai rupiah runtuh, perbankan kolaps, harga melonjak, dan jutaan orang kehilangan pekerjaan. Tekanan ekonomi memicu tekanan politik hingga lahir <strong>Reformasi 1998</strong>.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Akar kerapuhan",
        html: "Utang swasta dalam dolar yang menumpuk, perbankan yang lemah, dan praktik <strong>kolusi</strong> membuat ekonomi tidak tahan banting. Ketika kepercayaan investor runtuh, modal kabur dan rupiah jatuh bebas.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Warisan Reformasi",
        html: "Setelah 1998, Indonesia mendorong <strong>keterbukaan dan persaingan sehat</strong>: lahir lembaga pengawas persaingan usaha (KPPU, 2000), otonomi daerah, dan tata kelola yang lebih transparan. Pelajarannya: pasar butuh aturan dan pengawasan agar tidak rapuh.",
      },
      {
        type: "video",
        comp: "SistemEkonomi",
        title: "Sistem Ekonomi",
        caption: "Mengapa keseimbangan pasar dan peran negara penting agar ekonomi tahan krisis.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak ritel modern dengan harga tercantum pada produk",
        caption: "Saat krisis, harga barang melonjak sementara daya beli rakyat anjlok.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Perjalanan Nilai Tukar Rupiah Saat Krisis (ilustrasi)",
        unit: "rupiah per dolar AS (ilustrasi)",
        source: "ilustrasi edukatif berdasarkan rentang nilai tukar 1996-1998",
        note: "Dari sekitar Rp2.400 menjadi belasan ribu per dolar, rupiah anjlok dalam hitungan bulan.",
        data: [
          { label: "1996", value: 2350, color: "#60a5fa" },
          { label: "Pertengahan 1997", value: 2600, color: "#60a5fa" },
          { label: "Akhir 1997", value: 5500, color: "#f59e0b" },
          { label: "Pertengahan 1998", value: 15000, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Beban utang dolar saat rupiah jatuh",
        html: "Bayangkan sebuah perusahaan berutang 1 juta dolar AS. Saat kurs Rp2.500 per dolar, utangnya setara Rp2,5 miliar. Ketika rupiah anjlok ke Rp15.000 per dolar, utang yang sama melonjak jadi Rp15 miliar dalam rupiah, padahal pendapatannya tetap dalam rupiah. Inilah yang membangkrutkan banyak perusahaan pada 1998: utang dolar membengkak enam kali lipat tanpa tambahan barang apa pun.",
      },
      {
        type: "case",
        title: "Sejarah: Reformasi dan mundurnya Soeharto 21 Mei 1998",
        html: "Puncak krisis terjadi pada Mei 1998. Setelah gelombang demonstrasi besar dan krisis ekonomi yang parah, Presiden <strong>Soeharto menyatakan berhenti pada 21 Mei 1998</strong>, mengakhiri Orde Baru yang berlangsung lebih dari tiga dekade. Era <strong>Reformasi</strong> yang menyusul membawa demokratisasi, kebebasan pers, otonomi daerah, dan penguatan lembaga pengawas ekonomi. Krisis menyakitkan ini menjadi titik balik menuju tata kelola yang lebih terbuka.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebelum krisis, kurs sekitar Rp2.500 per dolar AS. Saat puncak krisis, kurs mencapai sekitar Rp15.000 per dolar. Berapa kali lipat nilai dolar terhadap rupiah naik?",
        answer: 6,
        tolerance: 0,
        suffix: "kali",
        solution:
          "15.000 dibagi 2.500 = <strong>6 kali</strong>. Artinya beban utang dalam dolar membengkak enam kali lipat ketika diukur dengan rupiah.",
        hint: "Bagi kurs saat krisis dengan kurs sebelum krisis.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan peristiwa atau istilah dengan keterangannya.",
        pairs: [
          { left: "Orde Baru", right: "Masa pertumbuhan pesat 1966-1998 yang rapuh karena kolusi" },
          { left: "Krisis moneter", right: "Runtuhnya rupiah dan perbankan pada 1997-1998" },
          { left: "Reformasi 1998", right: "Titik balik menuju keterbukaan dan demokratisasi" },
          { left: "KPPU", right: "Lembaga pengawas persaingan usaha yang lahir setelah Reformasi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Orde Baru tumbuh cepat tetapi rapuh karena utang, perbankan lemah, dan kolusi.",
          "Krisis moneter 1997-1998 meruntuhkan rupiah dan memicu kebangkrutan massal.",
          "Utang dalam dolar membengkak berkali lipat saat rupiah jatuh.",
          "Soeharto berhenti 21 Mei 1998, mengawali era Reformasi.",
          "Reformasi melahirkan keterbukaan, pengawasan, dan tata kelola yang lebih sehat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang membuat ekonomi Orde Baru rapuh terhadap krisis?",
            options: [
              "Tidak ada pertumbuhan sama sekali",
              "Utang besar, perbankan lemah, dan praktik kolusi",
              "Terlalu banyak koperasi",
              "Tidak ada investasi asing",
            ],
            answer: 1,
            explain: "Pondasi rapuh akibat utang, perbankan lemah, dan kolusi.",
          },
          {
            q: "Kapan terjadi krisis moneter yang melanda Indonesia?",
            options: ["1965", "1980-1981", "1997-1998", "2008-2009"],
            answer: 2,
            explain: "Krisis moneter Asia menghantam Indonesia pada 1997-1998.",
          },
          {
            q: "Mengapa banyak perusahaan bangkrut saat rupiah jatuh?",
            options: [
              "Karena pajak naik",
              "Karena utang dalam dolar membengkak saat diukur rupiah",
              "Karena ekspor dilarang",
              "Karena upah turun",
            ],
            answer: 1,
            explain: "Utang dolar membengkak berkali lipat sementara pendapatan tetap rupiah.",
          },
          {
            q: "Kapan Soeharto menyatakan berhenti sebagai presiden?",
            options: ["17 Agustus 1945", "21 Mei 1998", "1 Juni 2000", "20 Oktober 2004"],
            answer: 1,
            explain: "Soeharto berhenti pada 21 Mei 1998, mengawali Reformasi.",
          },
          {
            q: "Kurs naik dari Rp2.500 ke Rp15.000 per dolar. Berapa kali lipat?",
            options: ["3 kali", "5 kali", "6 kali", "10 kali"],
            answer: 2,
            explain: "15.000 / 2.500 = 6 kali lipat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "indonesia-ekonomi-global",
    levelId: "indonesia",
    order: 5,
    title: "Indonesia dalam Ekonomi Global",
    summary:
      "Sebagai anggota WTO sejak 1995 dan anggota G20, Indonesia terhubung pada perdagangan dan keuangan dunia, dengan peluang ekspor sekaligus tantangan menjaga industri dalam negeri.",
    durationMin: 15,
    tags: ["indonesia", "globalisasi", "wto", "g20", "perdagangan"],
    blocks: [
      {
        type: "paragraph",
        html: "Ekonomi Indonesia tidak berdiri sendiri. Lewat perdagangan, investasi, dan keuangan, ia terhubung pada <strong>ekonomi global</strong>. Indonesia menjadi anggota <strong>WTO sejak 1 Januari 1995</strong> dan termasuk dalam <strong>G20</strong>, kelompok ekonomi besar dunia, bahkan menjadi tuan rumah KTT G20 di Bali pada 2022.",
      },
      {
        type: "paragraph",
        html: "Keterbukaan membawa <strong>peluang</strong>: pasar ekspor yang luas, masuknya teknologi dan modal. Namun juga membawa <strong>tantangan</strong>: industri dalam negeri harus bersaing dengan produk impor, dan guncangan ekonomi dunia bisa cepat menjalar ke dalam negeri.",
      },
      {
        type: "callout",
        tone: "info",
        title: "WTO dan G20",
        html: "<strong>WTO</strong> (Organisasi Perdagangan Dunia) mengatur aturan main perdagangan antarnegara; Indonesia menjadi anggota sejak <strong>1995</strong>. <strong>G20</strong> adalah forum 20 ekonomi besar yang membahas kebijakan ekonomi dan keuangan global.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Neraca perdagangan",
        html: "<strong>Surplus</strong> terjadi bila nilai ekspor melebihi impor; <strong>defisit</strong> bila sebaliknya. Neraca perdagangan adalah salah satu penanda kesehatan hubungan ekonomi sebuah negara dengan dunia.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser komponen pertumbuhan dan amati bagaimana ekspor neto, hasil dari ekspor dikurangi impor, ikut menentukan laju ekonomi.",
      },
      { type: "widget", widget: "SimulatorPertumbuhanEkonomi" },
      {
        type: "video",
        comp: "GlobalisasiVideo",
        title: "Globalisasi Ekonomi",
        caption: "Bagaimana barang, modal, dan teknologi mengalir lintas negara dan menyentuh Indonesia.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak supermarket berisi produk impor dan lokal berdampingan",
        caption: "Di rak yang sama, produk lokal bersaing langsung dengan barang impor.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Ilustrasi Neraca Perdagangan: Ekspor vs Impor",
        unit: "triliun rupiah (ilustrasi)",
        source: "ilustrasi edukatif konsep surplus perdagangan",
        note: "Saat ekspor melebihi impor, neraca perdagangan mencatat surplus.",
        data: [
          { label: "Ekspor", value: 250, color: "#34d399" },
          { label: "Impor", value: 200, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Hilirisasi nikel",
        html: "Indonesia adalah penghasil nikel terbesar dunia. Dulu nikel banyak diekspor sebagai bijih mentah berharga rendah. Lewat kebijakan <strong>hilirisasi</strong>, bijih diolah dulu di dalam negeri menjadi produk bernilai lebih tinggi seperti bahan baterai, sehingga nilai ekspor melonjak dan lapangan kerja bertambah. Ini contoh memanfaatkan posisi dalam ekonomi global sambil tetap menjaga semangat Pasal 33: kekayaan alam untuk sebesar-besarnya kemakmuran rakyat.",
      },
      {
        type: "case",
        title: "Sejarah: Indonesia anggota pendiri WTO 1995",
        html: "Pada <strong>1 Januari 1995</strong>, WTO resmi berdiri menggantikan GATT, dan <strong>Indonesia menjadi salah satu anggotanya sejak awal</strong>. Keanggotaan ini menandai komitmen Indonesia pada perdagangan dunia yang berbasis aturan. Belakangan, peran Indonesia di panggung global makin kuat lewat <strong>G20</strong>, hingga menjadi tuan rumah KTT G20 di Bali pada <strong>2022</strong>. Sejarah ini menunjukkan Indonesia memilih terhubung dengan dunia, bukan menutup diri.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dalam satu tahun, nilai ekspor Indonesia Rp250 triliun dan nilai impor Rp200 triliun. Berapa surplus neraca perdagangannya? (Neraca = ekspor - impor)",
        answer: 50,
        tolerance: 0,
        prefix: "Rp",
        suffix: "triliun",
        solution:
          "Neraca perdagangan = ekspor - impor = 250 - 200 = <strong>Rp50 triliun</strong>. Karena positif, ini disebut surplus.",
        hint: "Kurangkan impor dari ekspor.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap hal sebagai PELUANG atau TANTANGAN dari keterbukaan ekonomi global.",
        buckets: ["Peluang", "Tantangan"],
        items: [
          { text: "Pasar ekspor yang lebih luas untuk produk Indonesia", bucket: "Peluang" },
          { text: "Masuknya teknologi dan modal asing", bucket: "Peluang" },
          { text: "Industri lokal harus bersaing dengan produk impor", bucket: "Tantangan" },
          { text: "Guncangan ekonomi dunia cepat menjalar ke dalam negeri", bucket: "Tantangan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Indonesia terhubung ke ekonomi global lewat perdagangan, investasi, dan keuangan.",
          "Indonesia anggota WTO sejak 1995 dan anggota G20 (tuan rumah KTT 2022 di Bali).",
          "Keterbukaan membawa peluang ekspor sekaligus tantangan bagi industri lokal.",
          "Surplus terjadi bila ekspor melebihi impor; defisit bila sebaliknya.",
          "Hilirisasi nikel menunjukkan cara menaikkan nilai sambil menjaga semangat Pasal 33.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sejak kapan Indonesia menjadi anggota WTO?",
            options: ["1945", "1967", "1995", "2008"],
            answer: 2,
            explain: "Indonesia menjadi anggota WTO sejak 1 Januari 1995.",
          },
          {
            q: "Apa itu G20?",
            options: [
              "Organisasi militer",
              "Forum 20 ekonomi besar dunia",
              "Kelompok negara ASEAN",
              "Lembaga pengawas bank Indonesia",
            ],
            answer: 1,
            explain: "G20 adalah forum 20 ekonomi besar dunia; Indonesia menjadi tuan rumah KTT 2022.",
          },
          {
            q: "Kapan neraca perdagangan disebut surplus?",
            options: [
              "Saat impor melebihi ekspor",
              "Saat ekspor melebihi impor",
              "Saat ekspor sama dengan impor",
              "Saat tidak ada perdagangan",
            ],
            answer: 1,
            explain: "Surplus terjadi ketika nilai ekspor lebih besar dari impor.",
          },
          {
            q: "Apa tujuan kebijakan hilirisasi nikel?",
            options: [
              "Mengekspor bijih mentah sebanyak mungkin",
              "Mengolah bijih di dalam negeri agar nilainya lebih tinggi",
              "Menghentikan ekspor sepenuhnya",
              "Mengimpor lebih banyak nikel",
            ],
            answer: 1,
            explain: "Hilirisasi mengolah bahan mentah jadi produk bernilai lebih tinggi di dalam negeri.",
          },
          {
            q: "Ekspor Rp250 triliun, impor Rp200 triliun. Berapa surplus perdagangan?",
            options: ["Rp50 triliun", "Rp450 triliun", "Rp200 triliun", "Rp250 triliun"],
            answer: 0,
            explain: "250 - 200 = Rp50 triliun surplus.",
          },
        ],
      },
    ],
  },
];
