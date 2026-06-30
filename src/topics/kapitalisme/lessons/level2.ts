import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "merkantilisme-revolusi-industri",
    levelId: "sejarah",
    order: 1,
    title: "Dari Merkantilisme ke Revolusi Industri",
    summary:
      "Kapitalisme modern tidak muncul tiba-tiba. Telusuri dari era merkantilisme, gagasan Adam Smith 1776, sampai ledakan produksi Revolusi Industri.",
    durationMin: 15,
    tags: ["sejarah", "merkantilisme", "revolusi industri", "adam smith"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebelum kapitalisme pasar, Eropa menganut <strong>merkantilisme</strong> (sekitar abad ke-16 sampai ke-18): negara dianggap kaya bila menimbun emas dan perak, ekspor didorong, impor dibatasi, dan dagang diatur ketat oleh kerajaan. Kekayaan dilihat sebagai kue tetap yang harus direbut dari bangsa lain.",
      },
      {
        type: "paragraph",
        html: "Pada <strong>1776</strong>, <strong>Adam Smith</strong> menerbitkan <em>The Wealth of Nations</em> dan membalik cara pandang itu: kekayaan bukan tumpukan emas, melainkan kemampuan memproduksi barang dan jasa. Pasar bebas, kata Smith, justru bisa membuat semua pihak lebih makmur.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pergeseran besar",
        html: "Dari <strong>merkantilisme</strong> (negara mengatur dagang demi menimbun emas) ke <strong>ekonomi pasar</strong> (individu bebas berdagang dan berproduksi). Revolusi Industri lalu menyediakan mesin yang membuat produksi meledak.",
      },
      {
        type: "video",
        comp: "SejarahKapitalismeVideo",
        title: "Lahirnya Kapitalisme Modern",
        caption: "Dari menimbun emas era merkantilisme sampai pabrik dan pasar global.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Adam_Smith%2C_1723_-_1790._Political_economist_-_Google_Art_Project.jpg?width=400",
        alt: "Lukisan potret Adam Smith, ekonom Skotlandia",
        caption: "Adam Smith (1723-1790), penulis The Wealth of Nations (1776), sering disebut bapak ekonomi modern.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Pendapatan per Kapita Dunia Melonjak Setelah Revolusi Industri (ilustrasi)",
        unit: "indeks pendapatan per orang",
        source: "ilustrasi berdasarkan pola sejarah yang banyak dikaji",
        note: "Selama ribuan tahun pendapatan nyaris datar, lalu meledak sejak Revolusi Industri abad ke-19.",
        data: [
          { label: "Tahun 1", value: 1 },
          { label: "1500", value: 1.5 },
          { label: "1700", value: 2 },
          { label: "1850", value: 4 },
          { label: "2000", value: 30 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pabrik tekstil mengubah hidup",
        html: "Sebelum Revolusi Industri, kain ditenun di rumah secara manual, lambat dan mahal. Dengan mesin tenun dan tenaga uap (sekitar <strong>1760-1840</strong>), satu pabrik bisa menghasilkan kain ratusan kali lipat. Harga pakaian anjlok, jutaan orang pindah dari desa ke kota mencari kerja, dan lahir kelas baru: <strong>buruh upahan</strong> dan <strong>pemilik pabrik</strong>. Produktivitas melonjak, tapi muncul pula masalah baru seperti jam kerja panjang dan kondisi buruk.",
      },
      {
        type: "case",
        title: "Sejarah: VOC, korporasi raksasa pertama (1602)",
        html: "Jauh sebelum Revolusi Industri, pada <strong>1602</strong> berdiri <strong>VOC</strong> di Belanda, sering disebut perusahaan saham gabungan dan multinasional pertama. VOC menghimpun modal dari banyak pemegang saham, lalu menguasai perdagangan rempah dari Nusantara. Ia menunjukkan dua benih kapitalisme: <strong>modal yang dihimpun bersama</strong> dan <strong>perusahaan</strong> sebagai mesin mengejar laba. Tapi VOC juga monopoli yang ditopang kekuasaan, pengingat bahwa pasar dan kekuasaan sering berkelindan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika satu mesin tenun menghasilkan 200 meter kain per hari dan penenun manual hanya 2 meter, berapa kali lipat produktivitas mesin?",
        answer: 100,
        tolerance: 0,
        suffix: "kali",
        solution:
          "200 / 2 = <strong>100 kali lipat</strong>. Lonjakan produktivitas inilah yang membuat harga barang anjlok dan ekonomi tumbuh pesat.",
        hint: "Bagi keluaran mesin dengan keluaran manual.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah dengan maknanya.",
        pairs: [
          { left: "Merkantilisme", right: "Negara menimbun emas dan mengatur dagang ketat" },
          { left: "Adam Smith 1776", right: "The Wealth of Nations, gagasan pasar bebas" },
          { left: "Revolusi Industri", right: "Mesin dan pabrik membuat produksi meledak" },
          { left: "VOC 1602", right: "Korporasi saham gabungan pertama" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Merkantilisme menyamakan kekayaan dengan timbunan emas dan dagang yang diatur ketat negara.",
          "Adam Smith (1776) menggeser pandangan: kekayaan adalah kemampuan memproduksi.",
          "Revolusi Industri (1760-1840) meledakkan produktivitas lewat mesin dan pabrik.",
          "Lahir kelas buruh upahan dan pemilik pabrik, dengan untung sekaligus masalah baru.",
          "VOC (1602) memperlihatkan benih awal: modal gabungan dan perusahaan pengejar laba.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa keyakinan inti merkantilisme?",
            options: [
              "Kekayaan adalah kemampuan memproduksi",
              "Kekayaan adalah timbunan emas dan perak",
              "Pasar harus sepenuhnya bebas",
              "Uang tidak penting",
            ],
            answer: 1,
            explain: "Merkantilisme menyamakan kekayaan dengan logam mulia dan surplus dagang.",
          },
          {
            q: "Apa gagasan utama Adam Smith dalam The Wealth of Nations (1776)?",
            options: [
              "Negara harus menimbun emas",
              "Pasar bebas bisa membuat semua pihak lebih makmur",
              "Perdagangan harus dilarang",
              "Hanya raja yang boleh berdagang",
            ],
            answer: 1,
            explain: "Smith berargumen pasar bebas dan pembagian kerja meningkatkan kemakmuran umum.",
          },
          {
            q: "Apa dampak utama Revolusi Industri?",
            options: [
              "Produksi melambat",
              "Produktivitas meledak lewat mesin dan pabrik",
              "Emas menjadi tak bernilai",
              "Semua orang kembali ke desa",
            ],
            answer: 1,
            explain: "Mesin dan tenaga uap melipatgandakan produksi dan menurunkan harga barang.",
          },
          {
            q: "Mengapa VOC penting dalam sejarah kapitalisme?",
            options: [
              "Korporasi saham gabungan pertama yang menghimpun modal bersama",
              "Bank sentral pertama",
              "Serikat buruh pertama",
              "Pasar saham modern pertama",
            ],
            answer: 0,
            explain: "VOC mempelopori penghimpunan modal dari banyak pemegang saham untuk mengejar laba.",
          },
          {
            q: "Mesin tenun 200 meter/hari vs manual 2 meter/hari berarti lipatan produktivitas?",
            options: ["10 kali", "100 kali", "2 kali", "20 kali"],
            answer: 1,
            explain: "200 dibagi 2 sama dengan 100 kali lipat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "merkantilisme-lebih-dalam",
    levelId: "sejarah",
    order: 2,
    title: "Merkantilisme Lebih Dalam",
    summary:
      "Kenapa raja-raja Eropa abad ke-16 sampai ke-18 begitu terobsesi menimbun emas? Bedah logika neraca dagang, tarif, dan koloni sebagai mesin keuntungan.",
    durationMin: 14,
    tags: ["sejarah", "merkantilisme", "neraca dagang", "tarif"],
    blocks: [
      {
        type: "paragraph",
        html: "Merkantilisme (kira-kira <strong>abad ke-16 sampai ke-18</strong>) bukan sekadar suka emas. Ia adalah cara berpikir: dunia punya jumlah kekayaan tetap, sehingga keuntungan satu negara pasti datang dari kerugian negara lain. Maka tujuan utama negara adalah menjual lebih banyak ke luar (ekspor) daripada membeli dari luar (impor), agar selisihnya dibayar dalam emas dan perak.",
      },
      {
        type: "paragraph",
        html: "Untuk mencapai <strong>surplus dagang</strong> itu, kerajaan memasang <strong>tarif</strong> tinggi atas barang impor, memberi subsidi ke produsen dalam negeri, dan melarang koloni berdagang dengan bangsa lain. Koloni dipaksa hanya menjual bahan mentah murah ke negeri induk, lalu membeli kembali barang jadi yang lebih mahal.",
      },
      {
        type: "video",
        comp: "SejarahKapitalismeVideo",
        title: "Obsesi Emas Era Merkantilis",
        caption: "Mengapa raja-raja Eropa menimbun emas dan mengatur dagang dengan tarif tinggi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Neraca dagang",
        html: "Neraca dagang = nilai ekspor dikurangi nilai impor. Bagi kaum merkantilis, <strong>surplus</strong> (ekspor lebih besar) berarti emas mengalir masuk dan negara menang. Hari ini kita tahu cara pandang itu terlalu sederhana, tapi istilah neraca dagang masih dipakai.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Kekeliruan kue tetap",
        html: "Anggapan bahwa kekayaan dunia adalah kue berukuran tetap membuat dagang dilihat sebagai perang. Adam Smith dan David Ricardo kelak menunjukkan bahwa lewat spesialisasi dan pertukaran, kue itu bisa membesar dan kedua pihak bisa untung.",
      },
      {
        type: "widget",
        widget: "SimulatorSpektrumEkonomi",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Adam_Smith%2C_1723_-_1790._Political_economist_-_Google_Art_Project.jpg?width=400",
        alt: "Lukisan potret Adam Smith",
        caption: "Adam Smith mengkritik keras merkantilisme dan tarifnya yang melindungi segelintir pedagang.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Logika Merkantilis: Dorong Ekspor, Tekan Impor (ilustrasi)",
        unit: "indeks nilai dagang",
        source: "ilustrasi edukatif pola kebijakan merkantilis",
        note: "Kebijakan diarahkan agar batang ekspor selalu lebih tinggi dari impor, menghasilkan surplus emas.",
        data: [
          { label: "Ekspor didorong", value: 100, color: "#16a34a" },
          { label: "Impor ditekan", value: 55, color: "#dc2626" },
          { label: "Surplus (emas masuk)", value: 45, color: "#d97706" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tarif Inggris atas tekstil India",
        html: "Pada abad ke-18, kain katun India sangat digemari di Inggris karena halus dan murah. Demi melindungi industri wol dan tekstil dalam negeri, parlemen Inggris menaikkan tarif dan bahkan sempat melarang kain India tertentu. Akibatnya konsumen membayar lebih mahal, tapi produsen lokal terlindungi. Ini contoh klasik <strong>proteksionisme merkantilis</strong>: keuntungan segelintir produsen dibayar oleh banyak konsumen.",
      },
      {
        type: "case",
        title: "Sejarah: Navigation Acts Inggris (1651)",
        html: "Pada <strong>1651</strong> Inggris mengesahkan <strong>Navigation Acts</strong>, aturan yang mewajibkan barang dari dan ke koloni hanya boleh diangkut kapal Inggris. Tujuannya menjegal pesaing dagang seperti Belanda dan memastikan keuntungan mengalir ke London. Aturan ini memicu serangkaian perang dagang Inggris-Belanda. Beratnya pembatasan dagang seperti ini juga menumpuk kekesalan di koloni Amerika, yang ikut menyulut Revolusi Amerika lebih dari satu abad kemudian.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah negara merkantilis mengekspor barang senilai 800 ribu keping emas dan mengimpor senilai 500 ribu keping. Berapa surplus dagang (emas masuk bersih)?",
        answer: 300000,
        tolerance: 0,
        suffix: "keping",
        solution:
          "Surplus = ekspor - impor = 800.000 - 500.000 = <strong>300.000 keping emas</strong>. Inilah yang dikejar kaum merkantilis.",
        hint: "Kurangkan nilai impor dari nilai ekspor.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap kebijakan: mendukung tujuan merkantilis atau bertentangan dengannya.",
        buckets: ["Khas merkantilis", "Bertentangan dengan merkantilis"],
        items: [
          { text: "Tarif tinggi atas barang impor", bucket: "Khas merkantilis" },
          { text: "Subsidi untuk produsen ekspor", bucket: "Khas merkantilis" },
          { text: "Koloni hanya boleh berdagang dengan negeri induk", bucket: "Khas merkantilis" },
          { text: "Perdagangan bebas tanpa tarif", bucket: "Bertentangan dengan merkantilis" },
          { text: "Mengizinkan impor barang murah dari mana saja", bucket: "Bertentangan dengan merkantilis" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Merkantilisme menganggap kekayaan dunia tetap, sehingga dagang dilihat sebagai menang-kalah.",
          "Tujuannya surplus dagang: ekspor lebih besar dari impor agar emas mengalir masuk.",
          "Alatnya tarif tinggi, subsidi produsen, dan koloni yang dipaksa berdagang dengan negeri induk.",
          "Navigation Acts (1651) dan tarif tekstil menunjukkan proteksionisme yang merugikan konsumen.",
          "Kritik klasik Smith dan Ricardo: lewat spesialisasi, kedua pihak bisa sama-sama untung.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama kebijakan merkantilis?",
            options: [
              "Memaksimalkan impor barang murah",
              "Mencapai surplus dagang agar emas mengalir masuk",
              "Menghapus semua tarif",
              "Membebaskan koloni berdagang dengan siapa saja",
            ],
            answer: 1,
            explain: "Merkantilis mengejar surplus dagang sebagai sumber timbunan emas dan perak.",
          },
          {
            q: "Apa itu neraca dagang?",
            options: [
              "Jumlah pajak yang dipungut negara",
              "Nilai ekspor dikurangi nilai impor",
              "Total uang beredar di pasar",
              "Selisih untung dan rugi perusahaan",
            ],
            answer: 1,
            explain: "Neraca dagang adalah selisih nilai ekspor terhadap impor.",
          },
          {
            q: "Apa isi pokok Navigation Acts 1651?",
            options: [
              "Membebaskan perdagangan koloni",
              "Mewajibkan barang koloni diangkut kapal Inggris",
              "Menghapus tarif tekstil",
              "Melarang penambangan emas",
            ],
            answer: 1,
            explain: "Navigation Acts memaksa pengangkutan barang koloni memakai kapal Inggris untuk menjegal pesaing.",
          },
          {
            q: "Apa kelemahan utama anggapan kue tetap dalam merkantilisme?",
            options: [
              "Mengabaikan bahwa pertukaran bisa membuat kedua pihak untung",
              "Terlalu memihak konsumen",
              "Membuat emas tak bernilai",
              "Melarang produksi dalam negeri",
            ],
            answer: 0,
            explain: "Smith dan Ricardo menunjukkan spesialisasi dan pertukaran bisa membesarkan kue, bukan sekadar membaginya.",
          },
          {
            q: "Ekspor 800 ribu dan impor 500 ribu keping emas menghasilkan surplus?",
            options: ["300 ribu keping", "1,3 juta keping", "500 ribu keping", "Tidak ada surplus"],
            answer: 0,
            explain: "800.000 - 500.000 = 300.000 keping emas masuk bersih.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "revolusi-industri-kelas-buruh",
    levelId: "sejarah",
    order: 3,
    title: "Revolusi Industri & Lahirnya Kelas Buruh",
    summary:
      "Mesin uap dan pabrik melipatgandakan produksi, tapi juga melahirkan kelas buruh upahan, urbanisasi besar, dan pertarungan panjang soal jam kerja dan upah.",
    durationMin: 15,
    tags: ["sejarah", "revolusi industri", "buruh", "urbanisasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Revolusi Industri (sekitar <strong>1760-1840</strong>) berawal di Inggris ketika mesin uap, mesin tenun, dan pabrik mengganti kerja tangan di rumah. Produksi yang dulu lambat dan tersebar kini terpusat di pabrik besar yang berputar nyaris tanpa henti. Untuk pertama kalinya dalam sejarah, kekayaan sebuah masyarakat bisa tumbuh jauh lebih cepat daripada jumlah penduduknya.",
      },
      {
        type: "paragraph",
        html: "Tapi ledakan produksi ini melahirkan susunan masyarakat baru. Petani dan perajin desa pindah ke kota menjadi <strong>buruh upahan</strong> yang menjual tenaganya per jam. Di sisi lain berdiri <strong>pemilik modal</strong> yang menguasai mesin dan pabrik. Hubungan keduanya, upah lawan laba, menjadi jantung sekaligus titik konflik kapitalisme industri.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dua kelas baru",
        html: "Industrialisasi memilah masyarakat menjadi <strong>pemilik modal</strong> (punya pabrik dan mesin) dan <strong>buruh</strong> (punya tenaga kerja). Dari ketegangan upah lawan laba inilah lahir serikat buruh, undang-undang ketenagakerjaan, sekaligus kritik tajam seperti gagasan Karl Marx.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Sisi gelap awal pabrik",
        html: "Pada dekade-dekade awal, jam kerja bisa 12 sampai 16 jam sehari, anak-anak ikut bekerja di tambang dan pabrik, dan kondisi sering berbahaya. Reaksi terhadap kondisi inilah yang melahirkan gerakan buruh dan undang-undang pembatasan jam kerja serta larangan pekerja anak.",
      },
      {
        type: "video",
        comp: "KapitalismeVideo",
        title: "Mesin, Pabrik, dan Buruh",
        caption: "Bagaimana tenaga uap mengubah cara manusia bekerja dan hidup.",
      },
      {
        type: "widget",
        widget: "KalkulatorLabaModal",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trading_Floor_at_the_New_York_Stock_Exchange_during_the_Zendesk_IPO.jpg?width=400",
        alt: "Lantai bursa New York Stock Exchange yang ramai",
        caption: "Modal yang dulu menumpuk di pabrik kini juga mengalir lewat bursa saham seperti NYSE, kelanjutan dari kapitalisme industri.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "area",
        title: "Penduduk Kota Inggris Melonjak Saat Industrialisasi (ilustrasi)",
        unit: "persen penduduk tinggal di kota",
        source: "ilustrasi berdasarkan tren urbanisasi Inggris abad ke-19",
        note: "Industrialisasi menyedot jutaan orang dari desa ke kota untuk bekerja di pabrik.",
        data: [
          { label: "1750", value: 18 },
          { label: "1800", value: 28 },
          { label: "1850", value: 50 },
          { label: "1900", value: 77 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Upah pabrik vs hasil tenun rumahan",
        html: "Seorang penenun rumahan dulu mungkin menghasilkan kain senilai 10 shilling seminggu dengan kerja keras seharian. Ketika mesin tenun datang, harga kain anjlok dan kerja tangan tak lagi bersaing. Banyak penenun terpaksa masuk pabrik sebagai buruh dengan upah tetap, katakanlah 8 shilling seminggu, tetapi jam kerja lebih panjang dan diatur jadwal mesin. Kemakmuran agregat naik, tapi pembagiannya timpang dan memicu protes.",
      },
      {
        type: "case",
        title: "Sejarah: Luddite menghancurkan mesin (1811-1816)",
        html: "Antara <strong>1811 dan 1816</strong> di Inggris, sekelompok perajin tekstil yang menyebut diri <strong>Luddite</strong> menyerbu pabrik dan menghancurkan mesin tenun yang mereka anggap merampas pekerjaan. Pemerintah menanggapi keras, bahkan menjadikan perusakan mesin sebagai kejahatan berat. Gerakan ini gagal menghentikan mesin, tetapi menjadi simbol abadi tentang ongkos sosial perubahan teknologi yang berlangsung terlalu cepat tanpa jaring pengaman.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang buruh bekerja 14 jam sehari. Setelah undang-undang membatasi jam kerja menjadi 10 jam sehari, berapa jam per hari pengurangannya?",
        answer: 4,
        tolerance: 0,
        suffix: "jam",
        solution:
          "14 - 10 = <strong>4 jam</strong> lebih pendek per hari. Pembatasan jam kerja adalah salah satu kemenangan awal gerakan buruh.",
        hint: "Kurangkan jam kerja baru dari jam kerja lama.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah era industri dengan maknanya.",
        pairs: [
          { left: "Buruh upahan", right: "Menjual tenaga kerja untuk upah" },
          { left: "Pemilik modal", right: "Menguasai pabrik dan mesin" },
          { left: "Urbanisasi", right: "Perpindahan penduduk desa ke kota" },
          { left: "Luddite", right: "Perajin yang merusak mesin karena takut kehilangan kerja" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Revolusi Industri (1760-1840) memusatkan produksi di pabrik bertenaga mesin uap.",
          "Lahir dua kelas: pemilik modal dan buruh upahan, dengan ketegangan upah lawan laba.",
          "Urbanisasi besar terjadi karena pabrik menyedot tenaga kerja dari desa ke kota.",
          "Jam kerja panjang dan pekerja anak memicu gerakan buruh dan undang-undang ketenagakerjaan.",
          "Luddite (1811-1816) menjadi simbol ongkos sosial perubahan teknologi yang terlalu cepat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa ciri utama produksi setelah Revolusi Industri?",
            options: [
              "Kerja tangan tersebar di rumah-rumah",
              "Produksi terpusat di pabrik bertenaga mesin",
              "Tidak ada pembagian kerja",
              "Semua barang dibuat di desa",
            ],
            answer: 1,
            explain: "Mesin dan pabrik memusatkan serta melipatgandakan produksi.",
          },
          {
            q: "Dua kelas sosial apa yang menonjol dalam kapitalisme industri?",
            options: [
              "Raja dan rakyat jelata",
              "Pemilik modal dan buruh upahan",
              "Petani dan nelayan",
              "Pedagang dan pelaut",
            ],
            answer: 1,
            explain: "Hubungan pemilik modal dan buruh upahan menjadi inti kapitalisme industri.",
          },
          {
            q: "Apa yang dilakukan kaum Luddite (1811-1816)?",
            options: [
              "Mendirikan pabrik baru",
              "Menghancurkan mesin yang dianggap merampas pekerjaan",
              "Menurunkan tarif impor",
              "Membentuk bank sentral",
            ],
            answer: 1,
            explain: "Luddite menyerbu pabrik dan merusak mesin tenun karena takut kehilangan pekerjaan.",
          },
          {
            q: "Mengapa terjadi urbanisasi besar pada era industri?",
            options: [
              "Kota melarang pertanian",
              "Pabrik di kota menyedot tenaga kerja dari desa",
              "Desa dilanda banjir",
              "Pemerintah memaksa semua orang pindah",
            ],
            answer: 1,
            explain: "Lapangan kerja pabrik menarik jutaan orang dari desa ke kota.",
          },
          {
            q: "Jam kerja turun dari 14 jam menjadi 10 jam berarti berkurang?",
            options: ["2 jam", "4 jam", "6 jam", "10 jam"],
            answer: 1,
            explain: "14 - 10 = 4 jam lebih pendek per hari.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kapitalisme-kolonialisme-nusantara",
    levelId: "sejarah",
    order: 4,
    title: "Kapitalisme, Kolonialisme & Nusantara",
    summary:
      "Bagaimana perburuan laba Eropa menyeret Nusantara ke dalam jaringan kapitalisme global, dari monopoli rempah sampai Tanam Paksa 1830 yang memeras petani Jawa.",
    durationMin: 15,
    tags: ["sejarah", "kolonialisme", "nusantara", "tanam paksa"],
    blocks: [
      {
        type: "paragraph",
        html: "Kapitalisme awal tidak tumbuh di ruang hampa. Ia ditopang oleh <strong>kolonialisme</strong>: perburuan bahan mentah murah dan pasar baru di luar Eropa. Nusantara, dengan rempah seperti cengkih, pala, dan lada, menjadi salah satu incaran paling berharga. Yang bagi penduduk lokal adalah tanaman biasa, di pasar Eropa bernilai luar biasa tinggi.",
      },
      {
        type: "paragraph",
        html: "Logikanya sederhana dan keras: kuasai sumber, tekan biaya, jual mahal di Eropa. Untuk itu kekuasaan dagang sering bersenjata. Keuntungan mengalir deras ke negeri induk, sementara penduduk Nusantara dipaksa menanam dan menyerahkan hasil dengan harga yang ditentukan sepihak.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kolonialisme sebagai mesin modal",
        html: "Rempah, gula, kopi, dan kelak karet dari koloni menjadi bahan bakar akumulasi modal di Eropa. Laba dari Nusantara ikut membiayai pertumbuhan kota, bank, dan industri di negeri penjajah.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Laba di atas paksaan",
        html: "Berbeda dengan gambaran pasar bebas yang sukarela, kapitalisme kolonial di Nusantara banyak bertumpu pada <strong>paksaan</strong>: monopoli, kerja wajib, dan penyerahan hasil panen. Ini sisi sejarah yang penting diingat saat membahas dari mana sebagian modal awal Eropa berasal.",
      },
      {
        type: "video",
        comp: "GlobalisasiVideo",
        title: "Rempah, Kapal, dan Modal",
        caption: "Bagaimana komoditas Nusantara menyatu ke jaringan dagang dunia.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Pasar_Terapung.jpg?width=400",
        alt: "Perahu jukung di pasar terapung Nusantara",
        caption: "Jaringan dagang lokal Nusantara, seperti pasar terapung, sudah hidup jauh sebelum dan selama era kolonial.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Lonjakan Nilai Rempah dari Nusantara ke Eropa (ilustrasi)",
        unit: "indeks harga per satuan",
        source: "ilustrasi edukatif selisih harga jalur rempah",
        note: "Selisih harga di sumber dan di pasar Eropa yang sangat besar inilah daya tarik utama penjajahan dagang.",
        data: [
          { label: "Harga di Nusantara", value: 1, color: "#16a34a" },
          { label: "Setelah pelayaran", value: 30, color: "#d97706" },
          { label: "Harga di pasar Eropa", value: 100, color: "#dc2626" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Hitungan Tanam Paksa di sepetak sawah",
        html: "Bayangkan seorang petani Jawa wajib menyisihkan seperlima tanahnya untuk menanam tanaman ekspor seperti kopi atau tebu bagi pemerintah kolonial. Dari satu hektar, berarti 0,2 hektar tak lagi untuk pangan keluarganya, melainkan untuk komoditas yang hasilnya diserahkan dengan harga rendah. Bagi banyak keluarga, kewajiban ini ditambah kerja paksa membuat pangan menipis, sementara untung besar mengalir ke kas negeri induk.",
      },
      {
        type: "case",
        title: "Sejarah: Tanam Paksa atau Cultuurstelsel (1830)",
        html: "Pada <strong>1830</strong>, Gubernur Jenderal Johannes van den Bosch menerapkan <strong>Tanam Paksa</strong> (cultuurstelsel) di Hindia Belanda. Petani diwajibkan menanam komoditas ekspor seperti kopi, tebu, dan nila, lalu menyerahkannya ke pemerintah kolonial. Sistem ini menghasilkan keuntungan besar yang dikenal sebagai batig slot bagi kas Belanda, tetapi menimbulkan kelaparan di sejumlah daerah. Kritik keras seperti dalam novel Max Havelaar (1860) ikut mendorong penghapusan bertahap sistem ini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dalam Tanam Paksa, seorang petani wajib menyisihkan seperlima dari sawah seluas 2 hektar untuk tanaman ekspor. Berapa hektar yang dipakai untuk tanaman wajib itu?",
        answer: 0.4,
        tolerance: 0.01,
        suffix: "hektar",
        solution:
          "Seperlima dari 2 hektar = 2 / 5 = <strong>0,4 hektar</strong> yang harus ditanami komoditas ekspor dan diserahkan ke pemerintah kolonial.",
        hint: "Bagi 2 hektar dengan 5.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap hal: dampak bagi negeri induk (Belanda) atau bagi penduduk Nusantara.",
        buckets: ["Untung bagi negeri induk", "Beban bagi penduduk Nusantara"],
        items: [
          { text: "Keuntungan batig slot mengalir ke kas Belanda", bucket: "Untung bagi negeri induk" },
          { text: "Bahan mentah murah untuk industri Eropa", bucket: "Untung bagi negeri induk" },
          { text: "Tanah pangan berkurang karena tanaman wajib", bucket: "Beban bagi penduduk Nusantara" },
          { text: "Kerja paksa dan kelaparan di sejumlah daerah", bucket: "Beban bagi penduduk Nusantara" },
          { text: "Harga serah hasil panen ditentukan sepihak dan rendah", bucket: "Beban bagi penduduk Nusantara" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kapitalisme awal Eropa ditopang kolonialisme: bahan mentah murah dan pasar di luar Eropa.",
          "Rempah Nusantara bernilai sangat tinggi di Eropa, memicu perburuan dan penjajahan dagang.",
          "Banyak laba kolonial bertumpu pada paksaan, monopoli, dan penyerahan hasil panen.",
          "Tanam Paksa 1830 mewajibkan petani Jawa menanam komoditas ekspor untuk negeri induk.",
          "Sistem ini menghasilkan batig slot bagi Belanda tetapi menimbulkan kelaparan di Nusantara.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa peran kolonialisme bagi kapitalisme awal Eropa?",
            options: [
              "Tidak ada kaitannya sama sekali",
              "Menyediakan bahan mentah murah dan pasar baru",
              "Menghapus perdagangan rempah",
              "Membuat Eropa berhenti berdagang",
            ],
            answer: 1,
            explain: "Koloni memasok bahan mentah murah dan menjadi pasar yang menopang akumulasi modal Eropa.",
          },
          {
            q: "Mengapa rempah Nusantara begitu diburu Eropa?",
            options: [
              "Karena tidak laku di Nusantara",
              "Karena selisih harga di sumber dan pasar Eropa sangat besar",
              "Karena dilarang di Eropa",
              "Karena beratnya ringan",
            ],
            answer: 1,
            explain: "Harga rempah di Eropa berlipat-lipat dibanding di sumber, sehingga sangat menguntungkan.",
          },
          {
            q: "Apa itu Tanam Paksa (cultuurstelsel) 1830?",
            options: [
              "Kewajiban petani menanam komoditas ekspor untuk pemerintah kolonial",
              "Pembagian tanah gratis kepada petani",
              "Larangan menanam kopi",
              "Pasar bebas tanpa pajak",
            ],
            answer: 0,
            explain: "Cultuurstelsel mewajibkan petani menanam dan menyerahkan komoditas ekspor ke pemerintah Belanda.",
          },
          {
            q: "Apa istilah untuk keuntungan besar Tanam Paksa bagi kas Belanda?",
            options: ["Batig slot", "Navigation Acts", "Laissez-faire", "Cultuurstelsel"],
            answer: 0,
            explain: "Surplus keuntungan yang dikirim ke Belanda dikenal sebagai batig slot.",
          },
          {
            q: "Seperlima dari sawah 2 hektar untuk tanaman wajib sama dengan?",
            options: ["0,2 hektar", "0,4 hektar", "1 hektar", "0,5 hektar"],
            answer: 1,
            explain: "2 dibagi 5 sama dengan 0,4 hektar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "penyebaran-kapitalisme-global",
    levelId: "sejarah",
    order: 5,
    title: "Penyebaran Kapitalisme Global",
    summary:
      "Setelah 1945, kapitalisme melebar ke seluruh dunia lewat perdagangan, lembaga internasional, dan rantai pasok global yang dipercepat berdirinya WTO pada 1995.",
    durationMin: 14,
    tags: ["sejarah", "globalisasi", "wto", "rantai pasok"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah Perang Dunia II berakhir pada <strong>1945</strong>, dunia membangun tatanan ekonomi baru yang mendorong perdagangan lintas negara. Tarif diturunkan bertahap, mata uang distabilkan, dan modal mulai mengalir lebih bebas. Inilah fase ketika kapitalisme pasar menyebar dari segelintir negara industri ke hampir seluruh dunia.",
      },
      {
        type: "paragraph",
        html: "Puncaknya, lembaga seperti <strong>WTO</strong> yang berdiri <strong>1995</strong> menyediakan aturan main perdagangan global. Perusahaan kini bisa merancang produk di satu negara, memproduksi komponen di beberapa negara lain, dan menjualnya ke seluruh dunia. Lahir <strong>rantai pasok global</strong>: sebuah ponsel bisa memuat bagian dari puluhan negara.",
      },
      {
        type: "video",
        comp: "GlobalisasiVideo",
        title: "Kapitalisme Menyebar ke Seluruh Dunia",
        caption: "Bagaimana perdagangan dan rantai pasok global menghubungkan ekonomi antarnegara.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Globalisasi",
        html: "Globalisasi adalah makin terhubungnya ekonomi dunia lewat perdagangan, investasi, teknologi, dan arus informasi. Kapitalisme menjadi kerangka dominan yang menggerakkannya, terutama setelah banyak negara membuka pasar pada akhir abad ke-20.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser pengaturan di simulator untuk melihat bagaimana posisi sebuah negara bisa bergeser di spektrum dari pasar yang sangat bebas sampai ekonomi yang banyak diatur negara.",
      },
      {
        type: "widget",
        widget: "SimulatorSpektrumEkonomi",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trading_Floor_at_the_New_York_Stock_Exchange_during_the_Zendesk_IPO.jpg?width=400",
        alt: "Lantai bursa saham New York Stock Exchange",
        caption: "Bursa global seperti NYSE menjadi simpul tempat modal dunia bertemu, ciri khas kapitalisme global.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Nilai Perdagangan Dunia Tumbuh Pesat Setelah 1945 (ilustrasi)",
        unit: "indeks volume perdagangan dunia",
        source: "ilustrasi berdasarkan tren ekspansi perdagangan global pascaperang",
        note: "Penurunan tarif dan lembaga seperti WTO mempercepat lonjakan perdagangan lintas negara.",
        data: [
          { label: "1950", value: 5 },
          { label: "1970", value: 18 },
          { label: "1995", value: 55 },
          { label: "2010", value: 100 },
          { label: "2020", value: 130 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sebuah ponsel rakitan dunia",
        html: "Sebuah ponsel modern bisa dirancang di Amerika Serikat, memakai cip dari Taiwan dan Korea, layar dari Jepang, mineral dari Afrika, lalu dirakit di Tiongkok dan dijual di Indonesia. Tidak ada satu negara pun yang membuat seluruhnya sendiri. Inilah <strong>rantai pasok global</strong>: pembagian kerja bukan lagi antar individu di satu pabrik, melainkan antar negara di seluruh dunia.",
      },
      {
        type: "case",
        title: "Sejarah: Berdirinya WTO (1995)",
        html: "Pada <strong>1 Januari 1995</strong>, <strong>World Trade Organization</strong> (WTO) berdiri menggantikan kesepakatan GATT yang sudah berjalan sejak 1947. WTO menyediakan aturan dan forum penyelesaian sengketa dagang antarnegara, mempercepat penurunan tarif dan keterbukaan pasar. Kehadirannya menandai puncak gelombang globalisasi pascaperang, sekaligus memicu perdebatan soal siapa yang paling diuntungkan oleh perdagangan bebas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika tarif impor rata-rata turun dari 40 persen menjadi 10 persen setelah serangkaian perundingan dagang, berapa poin persentase penurunannya?",
        answer: 30,
        tolerance: 0,
        suffix: "poin persen",
        solution:
          "40 - 10 = <strong>30 poin persen</strong>. Penurunan tarif sebesar ini membuat barang impor jauh lebih murah dan perdagangan melonjak.",
        hint: "Kurangkan tarif baru dari tarif lama.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah globalisasi dengan maknanya.",
        pairs: [
          { left: "WTO 1995", right: "Lembaga pengatur dan penyelesai sengketa dagang dunia" },
          { left: "Rantai pasok global", right: "Produksi tersebar di banyak negara" },
          { left: "Globalisasi", right: "Ekonomi dunia makin saling terhubung" },
          { left: "Tarif turun", right: "Barang impor jadi lebih murah" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Setelah 1945 dunia membangun tatanan yang mendorong perdagangan dan arus modal lintas negara.",
          "Kapitalisme pasar menyebar dari negara industri ke hampir seluruh dunia.",
          "WTO (1995) menyediakan aturan main dan forum sengketa, mempercepat perdagangan bebas.",
          "Rantai pasok global membuat satu produk dirakit dari komponen banyak negara.",
          "Globalisasi membawa pertumbuhan, tetapi memicu perdebatan soal pembagian keuntungannya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Peristiwa apa yang menjadi titik awal tatanan ekonomi global pascaperang?",
            options: [
              "Berakhirnya Perang Dunia II pada 1945",
              "Revolusi Industri 1760",
              "Berdirinya VOC 1602",
              "Tanam Paksa 1830",
            ],
            answer: 0,
            explain: "Setelah 1945 dibangun tatanan baru yang mendorong perdagangan dan arus modal lintas negara.",
          },
          {
            q: "Apa peran utama WTO yang berdiri 1995?",
            options: [
              "Mencetak mata uang dunia",
              "Menyediakan aturan dan forum penyelesaian sengketa dagang",
              "Melarang semua perdagangan internasional",
              "Menaikkan tarif global",
            ],
            answer: 1,
            explain: "WTO mengatur perdagangan global dan menjadi forum penyelesaian sengketa antarnegara.",
          },
          {
            q: "Apa yang dimaksud rantai pasok global?",
            options: [
              "Satu negara membuat seluruh produk sendiri",
              "Produksi satu barang tersebar di banyak negara",
              "Perdagangan hanya antar dua negara",
              "Larangan ekspor komponen",
            ],
            answer: 1,
            explain: "Rantai pasok global membagi produksi satu barang ke berbagai negara.",
          },
          {
            q: "Apa makna globalisasi dalam konteks ini?",
            options: [
              "Negara-negara makin tertutup",
              "Ekonomi dunia makin saling terhubung lewat dagang dan investasi",
              "Perdagangan dihapus",
              "Semua negara memakai satu pemerintahan",
            ],
            answer: 1,
            explain: "Globalisasi adalah keterhubungan ekonomi dunia yang makin erat.",
          },
          {
            q: "Tarif turun dari 40 persen ke 10 persen berarti turun?",
            options: ["10 poin persen", "30 poin persen", "40 poin persen", "4 poin persen"],
            answer: 1,
            explain: "40 - 10 = 30 poin persen.",
          },
        ],
      },
    ],
  },
];
