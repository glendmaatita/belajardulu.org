import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "apa-itu-kapitalisme",
    levelId: "fondasi",
    order: 1,
    title: "Apa Itu Kapitalisme",
    summary:
      "Sistem ekonomi yang bertumpu pada milik pribadi, pasar bebas, motif laba, dan persaingan. Kenali empat pilarnya dan apa yang membedakannya dari sistem lain.",
    durationMin: 14,
    tags: ["fondasi", "definisi", "sistem ekonomi"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Kapitalisme</strong> adalah sistem ekonomi di mana alat produksi (pabrik, tanah, modal) sebagian besar dimiliki <strong>swasta</strong>, dan keputusan tentang apa yang diproduksi serta berapa harganya ditentukan oleh <strong>pasar</strong>, bukan oleh komando negara. Pendorong utamanya adalah pencarian <strong>laba</strong>.",
      },
      {
        type: "paragraph",
        html: "Setiap hari kita hidup di dalamnya: warung memilih barang yang laku, perusahaan bersaing menurunkan harga, dan orang bekerja demi penghasilan. Semua koordinasi rumit itu terjadi tanpa satu kantor pusat yang memerintah, melainkan lewat sinyal harga.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat pilar kapitalisme",
        html: "<strong>Milik pribadi</strong> (orang boleh memiliki aset dan usaha), <strong>pasar bebas</strong> (harga lahir dari tawar-menawar), <strong>motif laba</strong> (untung jadi pendorong), dan <strong>persaingan</strong> (banyak penjual berlomba). Mencabut satu pilar mengubah sistemnya.",
      },
      {
        type: "video",
        comp: "KapitalismeVideo",
        title: "Empat Pilar Kapitalisme",
        caption: "Milik pribadi, pasar bebas, motif laba, dan persaingan yang menjadi tulang punggung sistem ini.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak supermarket penuh berbagai merek produk yang bersaing",
        caption: "Rak penuh pilihan adalah wajah sehari-hari kapitalisme: banyak produsen bersaing memikat pembeli.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser dari pasar bebas murni ke ekonomi terencana penuh, dan lihat bagaimana tiap posisi menukar efisiensi dengan pemerataan.",
      },
      { type: "widget", widget: "SimulatorSpektrumEkonomi" },
      {
        type: "chart",
        variant: "bar",
        title: "Siapa Memiliki & Memutuskan: Tiga Sistem Ekonomi (ilustrasi)",
        unit: "porsi keputusan oleh pasar (%)",
        source: "ilustrasi edukatif perbandingan konsep",
        note: "Kapitalisme menyerahkan sebagian besar keputusan ke pasar; ekonomi komando ke negara; campuran di antaranya.",
        data: [
          { label: "Kapitalisme pasar", value: 85, color: "#34d399" },
          { label: "Ekonomi campuran", value: 55, color: "#fbbf24" },
          { label: "Ekonomi komando", value: 15, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pensil yang tak bisa dibuat satu orang",
        html: "Sebatang pensil sederhana butuh kayu dari satu negara, grafit dari negara lain, karet, logam, dan cat. Tidak ada satu orang pun yang tahu cara membuat semuanya dari nol. Namun pensil tetap tersedia murah di toko. Rahasianya: <strong>pasar</strong> mengoordinasikan ribuan orang yang tak saling kenal, masing-masing mengejar kepentingannya sendiri, lewat sinyal harga. Inilah keajaiban koordinasi tanpa komando yang jadi inti kapitalisme.",
      },
      {
        type: "case",
        title: "Sejarah: Runtuhnya ekonomi komando dan Tembok Berlin 1989",
        html: "Selama abad ke-20, dunia terbelah antara ekonomi pasar dan ekonomi <strong>komando</strong> ala Uni Soviet, di mana negara menentukan produksi dan harga. Sistem komando kerap menghadapi kelangkaan, antrean panjang, dan minim inovasi. Pada <strong>1989</strong>, Tembok Berlin runtuh, disusul bubarnya Uni Soviet pada <strong>1991</strong>. Banyak negara lalu beralih ke ekonomi pasar. Peristiwa ini sering dianggap kemenangan praktis kapitalisme, meski perdebatannya jauh dari selesai.",
      },
      {
        type: "calcExercise",
        prompt:
          "Di sebuah ekonomi, 80% keputusan produksi ditentukan pasar dan sisanya oleh negara. Berapa persen yang ditentukan negara?",
        answer: 20,
        tolerance: 0,
        suffix: "%",
        solution:
          "100% - 80% = <strong>20%</strong>. Tidak ada ekonomi nyata yang 100% pasar atau 100% negara; semuanya campuran dengan kadar berbeda.",
        hint: "Kurangkan porsi pasar dari 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri ke sistem yang paling sesuai.",
        buckets: ["Kapitalisme", "Ekonomi komando"],
        items: [
          { text: "Alat produksi dimiliki swasta", bucket: "Kapitalisme" },
          { text: "Negara menetapkan harga dan kuota produksi", bucket: "Ekonomi komando" },
          { text: "Laba jadi pendorong utama kegiatan usaha", bucket: "Kapitalisme" },
          { text: "Rencana pusat menentukan apa yang dibuat", bucket: "Ekonomi komando" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kapitalisme bertumpu pada milik pribadi, pasar bebas, motif laba, dan persaingan.",
          "Pasar mengoordinasikan jutaan keputusan lewat harga, tanpa komando pusat.",
          "Tidak ada ekonomi nyata yang murni pasar atau murni komando; semuanya campuran.",
          "Runtuhnya ekonomi komando Soviet (1989-1991) mendorong banyak negara ke ekonomi pasar.",
          "Mencabut satu pilar mengubah sistemnya, misalnya tanpa persaingan menjadi monopoli.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa pendorong utama kegiatan ekonomi dalam kapitalisme?",
            options: ["Perintah negara", "Pencarian laba", "Undian", "Kewajiban agama"],
            answer: 1,
            explain: "Laba menjadi insentif yang menggerakkan produksi dan investasi.",
          },
          {
            q: "Siapa yang terutama menentukan harga dalam kapitalisme?",
            options: ["Kantor pusat negara", "Pasar lewat penawaran dan permintaan", "Raja", "Bank dunia"],
            answer: 1,
            explain: "Harga lahir dari tawar-menawar di pasar, bukan ditetapkan komando pusat.",
          },
          {
            q: "Manakah yang BUKAN pilar kapitalisme?",
            options: ["Milik pribadi", "Persaingan", "Perencanaan terpusat penuh", "Motif laba"],
            answer: 2,
            explain: "Perencanaan terpusat penuh adalah ciri ekonomi komando, kebalikan kapitalisme.",
          },
          {
            q: "Apa pelajaran dari kisah pembuatan pensil?",
            options: [
              "Pensil mudah dibuat satu orang",
              "Pasar mengoordinasikan banyak orang tanpa komando pusat",
              "Negara membuat semua pensil",
              "Pensil tidak butuh bahan baku",
            ],
            answer: 1,
            explain: "Koordinasi tanpa komando lewat sinyal harga adalah inti cara kerja pasar.",
          },
          {
            q: "Apa makna ekonomi runtuhnya Tembok Berlin 1989?",
            options: [
              "Kemenangan ekonomi komando",
              "Banyak negara beralih dari ekonomi komando ke ekonomi pasar",
              "Akhir semua perdagangan",
              "Lahirnya merkantilisme",
            ],
            answer: 1,
            explain: "Setelah blok Soviet runtuh, banyak negara beralih ke ekonomi pasar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tiga-sistem-ekonomi",
    levelId: "fondasi",
    order: 2,
    title: "Tiga Sistem Ekonomi: Pasar, Komando, Campuran",
    summary:
      "Setiap masyarakat menjawab tiga pertanyaan: apa yang diproduksi, bagaimana, dan untuk siapa. Cara menjawabnya membedakan ekonomi pasar, komando, dan campuran.",
    durationMin: 14,
    tags: ["fondasi", "sistem ekonomi", "perbandingan"],
    blocks: [
      {
        type: "paragraph",
        html: "Setiap masyarakat menghadapi tiga pertanyaan dasar: <strong>apa</strong> yang diproduksi, <strong>bagaimana</strong> memproduksinya, dan <strong>untuk siapa</strong> hasilnya. Cara sebuah negara menjawab tiga pertanyaan ini menentukan sistem ekonominya.",
      },
      {
        type: "paragraph",
        html: "Ada tiga model besar. Dalam <strong>ekonomi pasar</strong>, jawabannya datang dari interaksi pembeli dan penjual. Dalam <strong>ekonomi komando</strong>, negara yang memutuskan lewat rencana pusat. Dalam <strong>ekonomi campuran</strong>, keduanya berbagi peran. Dunia nyata hampir selalu campuran, hanya kadarnya berbeda.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga pertanyaan ekonomi",
        html: "Apa, bagaimana, dan untuk siapa. Ekonomi <strong>pasar</strong> menjawabnya lewat harga; ekonomi <strong>komando</strong> lewat rencana negara; ekonomi <strong>campuran</strong> memadukan keduanya.",
      },
      {
        type: "video",
        comp: "SistemEkonomi",
        title: "Tiga Sistem Ekonomi",
        caption: "Bagaimana pasar, komando, dan campuran menjawab pertanyaan apa, bagaimana, dan untuk siapa.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Pasar_Terapung.jpg?width=400",
        alt: "Pedagang di pasar terapung menjual barang dari perahu",
        caption: "Pasar terapung: penjual dan pembeli bertemu langsung, harga lahir dari tawar-menawar tanpa komando pusat.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser posisi dari pasar bebas penuh ke ekonomi komando penuh, lalu amati pertukaran antara efisiensi dan pemerataan di tiap titik.",
      },
      { type: "widget", widget: "SimulatorSpektrumEkonomi" },
      {
        type: "chart",
        variant: "bar",
        title: "Porsi Belanja Negara terhadap PDB (ilustrasi tiga model)",
        unit: "% PDB",
        source: "ilustrasi edukatif perbandingan konsep",
        note: "Makin besar peran negara, makin dekat ke ekonomi komando; makin kecil, makin dekat ke pasar bebas.",
        data: [
          { label: "Pasar bebas", value: 25, color: "#34d399" },
          { label: "Campuran", value: 45, color: "#fbbf24" },
          { label: "Komando", value: 80, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Roti di tiga sistem",
        html: "Bayangkan kebutuhan roti naik. Dalam <strong>ekonomi pasar</strong>, harga roti naik, toko roti untung, lalu lebih banyak orang membuka usaha roti sampai pasokan cukup. Dalam <strong>ekonomi komando</strong>, kantor perencanaan harus menyadari kekurangan itu, mengubah kuota, dan menyalurkan bahan, proses yang sering lambat sehingga muncul antrean. Dalam <strong>ekonomi campuran</strong>, pasar mengatur produksi roti tetapi negara menjaga agar harga pangan pokok tetap terjangkau lewat subsidi atau cadangan.",
      },
      {
        type: "case",
        title: "Sejarah: Gosplan dan rencana lima tahun Uni Soviet (1928)",
        html: "Pada <strong>1928</strong>, Uni Soviet meluncurkan <strong>Rencana Lima Tahun</strong> pertama yang dikelola badan perencanaan pusat bernama <strong>Gosplan</strong>. Negara menetapkan target produksi baja, batu bara, hingga sepatu untuk seluruh negeri. Industri berat memang tumbuh cepat, tetapi barang konsumsi sering langka dan antrean menjadi pemandangan biasa karena rencana pusat sulit menebak kebutuhan jutaan orang secara tepat. Ini contoh nyata ekonomi komando yang berjalan selama puluhan tahun.",
      },
      {
        type: "calcExercise",
        prompt:
          "Di sebuah negara, belanja pemerintah setara 35% dari PDB dan sisanya kegiatan swasta. Berapa persen porsi swasta?",
        answer: 65,
        tolerance: 0,
        suffix: "%",
        solution:
          "100% - 35% = <strong>65%</strong>. Angka belanja negara terhadap PDB adalah salah satu petunjuk seberapa dekat sebuah ekonomi ke model komando atau pasar.",
        hint: "Kurangkan porsi negara dari 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri ke sistem ekonomi yang paling sesuai.",
        buckets: ["Ekonomi pasar", "Ekonomi komando", "Ekonomi campuran"],
        items: [
          { text: "Harga ditentukan tawar-menawar pembeli dan penjual", bucket: "Ekonomi pasar" },
          { text: "Rencana lima tahun menetapkan target produksi", bucket: "Ekonomi komando" },
          { text: "Pasar bebas tetapi negara memberi subsidi pangan pokok", bucket: "Ekonomi campuran" },
          { text: "Kantor pusat menentukan kuota tiap pabrik", bucket: "Ekonomi komando" },
          { text: "Usaha swasta bebas berdiri, negara mengatur lewat pajak dan aturan", bucket: "Ekonomi campuran" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Setiap ekonomi menjawab tiga pertanyaan: apa, bagaimana, dan untuk siapa diproduksi.",
          "Ekonomi pasar menjawab lewat harga, komando lewat rencana negara, campuran memadukan keduanya.",
          "Hampir semua negara nyata adalah ekonomi campuran, hanya kadar peran negaranya berbeda.",
          "Rencana pusat sulit menebak kebutuhan jutaan orang, sehingga rawan kelangkaan dan antrean.",
          "Belanja negara terhadap PDB adalah petunjuk kasar posisi sebuah ekonomi pada spektrum.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tiga pertanyaan dasar yang dijawab setiap sistem ekonomi adalah?",
            options: [
              "Kapan, di mana, dan mengapa",
              "Apa, bagaimana, dan untuk siapa diproduksi",
              "Siapa menang dan siapa kalah",
              "Berapa pajak dan utang",
            ],
            answer: 1,
            explain: "Apa, bagaimana, dan untuk siapa adalah tiga pertanyaan inti ekonomi.",
          },
          {
            q: "Dalam ekonomi komando, siapa yang menentukan produksi?",
            options: ["Pasar", "Rencana pusat negara", "Bank swasta", "Konsumen lewat harga"],
            answer: 1,
            explain: "Negara lewat badan perencanaan menetapkan apa dan berapa yang diproduksi.",
          },
          {
            q: "Apa ciri ekonomi campuran?",
            options: [
              "Seratus persen diatur negara",
              "Seratus persen diserahkan ke pasar",
              "Pasar bekerja tetapi negara tetap mengatur dan mengoreksi",
              "Tidak ada uang sama sekali",
            ],
            answer: 2,
            explain: "Ekonomi campuran memadukan mekanisme pasar dengan peran negara.",
          },
          {
            q: "Mengapa ekonomi komando rawan antrean dan kelangkaan?",
            options: [
              "Karena tidak ada pabrik",
              "Karena rencana pusat sulit menebak kebutuhan jutaan orang secara tepat",
              "Karena harga selalu turun",
              "Karena tidak ada pekerja",
            ],
            answer: 1,
            explain: "Tanpa sinyal harga, perencana sulit mengetahui kebutuhan riil masyarakat.",
          },
          {
            q: "Apa yang ditunjukkan Rencana Lima Tahun Soviet 1928?",
            options: [
              "Contoh ekonomi pasar bebas",
              "Contoh nyata ekonomi komando dengan perencanaan pusat",
              "Akhir industri berat",
              "Sistem tanpa pemerintah",
            ],
            answer: 1,
            explain: "Gosplan menetapkan target produksi terpusat, ciri khas ekonomi komando.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "milik-pribadi-pilar",
    levelId: "fondasi",
    order: 3,
    title: "Milik Pribadi sebagai Pilar",
    summary:
      "Hak milik pribadi adalah fondasi kapitalisme: ia memberi insentif untuk merawat, berinvestasi, dan berdagang. Tanpa kepastian milik, ekonomi pasar sulit berjalan.",
    durationMin: 13,
    tags: ["fondasi", "milik pribadi", "hak milik"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Hak milik pribadi</strong> berarti seseorang boleh memiliki, memakai, dan memindahkan aset, lalu menikmati hasilnya. Pilar ini terdengar sederhana, tetapi tanpa kepastian milik, hampir semua mesin kapitalisme berhenti bekerja.",
      },
      {
        type: "paragraph",
        html: "Kepastian milik menciptakan <strong>insentif</strong>. Orang merawat dan memperbaiki apa yang mereka miliki, berani berinvestasi karena tahu hasilnya tidak akan disita sembarangan, dan bersedia berdagang karena hak bisa dipindahkan dengan aman lewat kontrak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Mengapa milik pribadi penting",
        html: "Ia memberi <strong>insentif merawat</strong>, <strong>keberanian berinvestasi</strong>, dan <strong>dasar pertukaran</strong>. Hak yang jelas dan dilindungi membuat orang mau menanam modal untuk jangka panjang.",
      },
      {
        type: "video",
        comp: "KapitalismeVideo",
        title: "Pilar-Pilar Kapitalisme",
        caption: "Milik pribadi adalah pilar pertama yang menopang pasar bebas, motif laba, dan persaingan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trading_Floor_at_the_New_York_Stock_Exchange_during_the_Zendesk_IPO.jpg?width=400",
        alt: "Lantai bursa New York Stock Exchange saat penawaran saham perdana",
        caption: "Saham adalah bentuk milik pribadi: pemegangnya memiliki sepotong perusahaan dan boleh memperjualbelikannya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Tragedi milik bersama",
        html: "Jika sebuah sumber daya dimiliki bersama tanpa aturan, tiap orang cenderung mengambil sebanyak mungkin sebelum habis. Padang gembala, ikan di laut, dan udara bersih bisa rusak justru karena tidak ada yang merasa memilikinya.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Insentif Merawat: Milik Pribadi vs Milik Bersama Tanpa Aturan (ilustrasi)",
        unit: "indeks perawatan aset",
        source: "ilustrasi edukatif perbandingan konsep",
        note: "Saat sebuah aset jelas pemiliknya, insentif merawat dan berinvestasi cenderung lebih tinggi.",
        data: [
          { label: "Milik pribadi", value: 80, color: "#34d399" },
          { label: "Milik bersama (ada aturan)", value: 55, color: "#fbbf24" },
          { label: "Milik bersama tanpa aturan", value: 20, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dua petak sawah",
        html: "Pak Budi menggarap sawah miliknya sendiri, sedangkan sebidang tanah desa digarap bergiliran tanpa pemilik tetap. Pak Budi memupuk, memperbaiki saluran air, dan menanam pohon karena ia tahu hasilnya untuk keluarganya bertahun-tahun ke depan. Tanah desa tanpa pemilik tetap justru terbengkalai karena tak seorang pun merasa untung merawatnya. Kepastian milik mengubah perilaku.",
      },
      {
        type: "case",
        title: "Sejarah: Gerakan enclosure di Inggris (abad 16 hingga 18)",
        html: "Selama abad <strong>16 sampai 18</strong>, lahan bersama (common land) di Inggris perlahan dipagari dan dijadikan <strong>milik pribadi</strong> lewat gerakan yang disebut <strong>enclosure</strong>. Banyak petani kecil kehilangan akses, sebuah biaya sosial yang nyata. Namun para pemilik baru, karena kini menanggung untung-rugi sendiri, berani memperbaiki teknik bertani sehingga produktivitas meningkat. Proses ini sering dikaitkan dengan jalan menuju Revolusi Industri, sekaligus menunjukkan bahwa perubahan hak milik membawa dampak ekonomi dan sosial sekaligus.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seseorang membeli rumah seharga Rp500 juta, lalu menjualnya Rp650 juta. Berapa persen keuntungannya?",
        answer: 30,
        tolerance: 0,
        suffix: "%",
        solution:
          "Keuntungan = Rp650 juta - Rp500 juta = Rp150 juta. Persentase = 150 / 500 x 100% = <strong>30%</strong>. Hak milik membuat keuntungan ini sah menjadi milik penjual.",
        hint: "Bagi selisih harga dengan harga beli, lalu kalikan 100%.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Hak milik", right: "Wewenang memiliki, memakai, dan memindahkan aset" },
          { left: "Insentif", right: "Dorongan untuk merawat dan berinvestasi pada apa yang dimiliki" },
          { left: "Tragedi milik bersama", right: "Sumber daya rusak karena tak ada yang merasa memilikinya" },
          { left: "Kontrak", right: "Cara memindahkan hak milik secara aman antar pihak" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Hak milik pribadi adalah wewenang memiliki, memakai, dan memindahkan aset serta menikmati hasilnya.",
          "Kepastian milik menciptakan insentif untuk merawat dan berinvestasi jangka panjang.",
          "Tanpa pemilik yang jelas, sumber daya bersama rawan rusak (tragedi milik bersama).",
          "Saham adalah contoh milik pribadi atas sepotong perusahaan yang bisa diperjualbelikan.",
          "Perubahan hak milik, seperti enclosure di Inggris, membawa dampak ekonomi dan sosial sekaligus.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti dari hak milik pribadi?",
            options: [
              "Negara memiliki semua aset",
              "Wewenang memiliki, memakai, dan memindahkan aset serta menikmati hasilnya",
              "Larangan berdagang",
              "Semua barang gratis",
            ],
            answer: 1,
            explain: "Hak milik memberi kendali atas aset dan hasil yang ditimbulkannya.",
          },
          {
            q: "Mengapa kepastian milik mendorong investasi?",
            options: [
              "Karena hasilnya bisa disita kapan saja",
              "Karena pemilik tahu hasilnya akan menjadi miliknya, bukan disita sembarangan",
              "Karena harga selalu nol",
              "Karena negara melarang menabung",
            ],
            answer: 1,
            explain: "Tanpa rasa aman atas hasil, sedikit orang mau menanam modal jangka panjang.",
          },
          {
            q: "Apa itu tragedi milik bersama?",
            options: [
              "Aset dirawat terlalu baik",
              "Sumber daya bersama rusak karena tak ada yang merasa memilikinya",
              "Pasar terlalu ramai",
              "Pajak terlalu tinggi",
            ],
            answer: 1,
            explain: "Tanpa pemilik yang jelas, setiap orang mengambil tanpa merawat.",
          },
          {
            q: "Saham adalah contoh dari?",
            options: [
              "Milik negara penuh",
              "Milik pribadi atas sepotong perusahaan",
              "Barang gratis",
              "Pajak",
            ],
            answer: 1,
            explain: "Pemegang saham memiliki sebagian perusahaan dan boleh memperjualbelikannya.",
          },
          {
            q: "Apa salah satu dampak gerakan enclosure di Inggris?",
            options: [
              "Semua tanah menjadi milik bersama",
              "Produktivitas meningkat tetapi banyak petani kecil kehilangan akses lahan",
              "Pertanian berhenti total",
              "Tidak ada perubahan apa pun",
            ],
            answer: 1,
            explain: "Enclosure menaikkan produktivitas sekaligus menimbulkan biaya sosial bagi petani kecil.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "persaingan-dan-monopoli",
    levelId: "fondasi",
    order: 4,
    title: "Persaingan & Monopoli",
    summary:
      "Persaingan menekan harga dan memaksa inovasi, sedangkan monopoli melakukan sebaliknya. Pahami spektrum struktur pasar dan mengapa negara mengatur monopoli.",
    durationMin: 14,
    tags: ["fondasi", "persaingan", "monopoli", "struktur pasar"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Persaingan</strong> adalah mesin disiplin kapitalisme. Ketika banyak penjual berlomba memikat pembeli yang sama, mereka terdorong menurunkan harga, menaikkan mutu, dan berinovasi. Pembeli yang diuntungkan.",
      },
      {
        type: "paragraph",
        html: "Lawannya adalah <strong>monopoli</strong>, yaitu pasar dengan satu penjual dominan tanpa pesaing berarti. Tanpa tekanan persaingan, monopolis bisa menaikkan harga, menahan pasokan, dan malas berinovasi. Karena itu banyak negara membuat aturan antimonopoli.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Spektrum struktur pasar",
        html: "Dari <strong>persaingan sempurna</strong> (banyak penjual, produk seragam), ke <strong>persaingan monopolistik</strong> dan <strong>oligopoli</strong> (sedikit pemain), hingga <strong>monopoli</strong> (satu penjual). Makin sedikit pesaing, makin besar kuasa penjual atas harga.",
      },
      {
        type: "video",
        comp: "MonopoliVsPersaingan",
        title: "Monopoli vs Persaingan",
        caption: "Bagaimana jumlah penjual memengaruhi harga, mutu, dan kecepatan inovasi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shelves_of_Progresso_products_at_the_Giant_supermarket_in_Kingstowne.jpg?width=400",
        alt: "Rak supermarket dengan banyak merek produk bersaing",
        caption: "Banyak merek di satu rak memaksa tiap produsen menjaga harga dan mutu agar dipilih pembeli.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Ubah jumlah penjual dari satu ke banyak, lalu amati bagaimana harga, jumlah barang, dan keuntungan berubah seiring meningkatnya persaingan.",
      },
      { type: "widget", widget: "SimulatorStrukturPasar" },
      {
        type: "chart",
        variant: "bar",
        title: "Pangsa Pasar Penyulingan Minyak Standard Oil (sekitar 1890)",
        unit: "% pasar AS",
        source: "ilustrasi berdasarkan catatan sejarah Standard Oil",
        note: "Pada puncaknya, satu perusahaan menguasai hampir seluruh penyulingan minyak Amerika Serikat.",
        data: [
          { label: "Standard Oil", value: 90, color: "#f87171" },
          { label: "Pesaing lain (gabungan)", value: 10, color: "#94a3b8" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Satu penjual menaikkan harga",
        html: "Di sebuah pulau hanya ada satu pemasok air bersih. Karena tak punya pesaing, ia bisa menaikkan harga jauh di atas biaya dan tetap laku, sebab warga tak punya pilihan lain. Bandingkan jika ada lima pemasok: begitu satu menaikkan harga terlalu tinggi, pembeli pindah ke yang lebih murah. Persaingan inilah yang melindungi konsumen, bukan kebaikan hati penjual.",
      },
      {
        type: "case",
        title: "Sejarah: Standard Oil dipecah oleh Mahkamah Agung AS (1911)",
        html: "<strong>Standard Oil</strong> milik John D. Rockefeller pernah menguasai sekitar <strong>90%</strong> penyulingan minyak Amerika Serikat. Pada <strong>1911</strong>, Mahkamah Agung AS memutuskan perusahaan itu melanggar undang-undang antimonopoli (Sherman Antitrust Act 1890) dan memerintahkannya dipecah menjadi <strong>34</strong> perusahaan terpisah. Beberapa keturunan perusahaan itu kelak menjadi raksasa seperti Exxon dan Mobil. Kasus ini menjadi tonggak bahwa negara dapat membatasi monopoli demi menjaga persaingan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah perusahaan menjual 4.500 dari total 5.000 unit di pasar. Berapa persen pangsa pasarnya?",
        answer: 90,
        tolerance: 0,
        suffix: "%",
        solution:
          "Pangsa pasar = 4.500 / 5.000 x 100% = <strong>90%</strong>. Pangsa sebesar ini menandakan dominasi mendekati monopoli, mirip Standard Oil pada masanya.",
        hint: "Bagi penjualan perusahaan dengan total pasar, lalu kalikan 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri ke struktur pasar yang sesuai.",
        buckets: ["Persaingan", "Monopoli"],
        items: [
          { text: "Banyak penjual berlomba menurunkan harga", bucket: "Persaingan" },
          { text: "Satu penjual menentukan harga sesukanya", bucket: "Monopoli" },
          { text: "Pembeli mudah pindah ke penjual lain", bucket: "Persaingan" },
          { text: "Tidak ada pesaing berarti, inovasi melambat", bucket: "Monopoli" },
          { text: "Mutu dan layanan terus ditingkatkan agar dipilih", bucket: "Persaingan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Persaingan menekan harga, menaikkan mutu, dan memaksa inovasi demi konsumen.",
          "Monopoli adalah pasar satu penjual dominan yang bisa menaikkan harga dan menahan pasokan.",
          "Struktur pasar membentang dari persaingan sempurna hingga monopoli.",
          "Makin sedikit pesaing, makin besar kuasa penjual atas harga.",
          "Standard Oil dipecah pada 1911 sebagai tonggak pembatasan monopoli oleh negara.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa manfaat utama persaingan bagi konsumen?",
            options: [
              "Harga naik dan pilihan berkurang",
              "Harga tertekan, mutu naik, dan inovasi terdorong",
              "Penjual bebas menentukan harga",
              "Tidak ada barang yang dijual",
            ],
            answer: 1,
            explain: "Persaingan memaksa penjual bersaing demi pembeli, menguntungkan konsumen.",
          },
          {
            q: "Apa ciri pasar monopoli?",
            options: [
              "Banyak penjual setara",
              "Satu penjual dominan tanpa pesaing berarti",
              "Tidak ada penjual",
              "Harga selalu nol",
            ],
            answer: 1,
            explain: "Monopoli berarti satu penjual menguasai pasar tanpa pesaing nyata.",
          },
          {
            q: "Mengapa monopolis bisa menaikkan harga?",
            options: [
              "Karena banyak pesaing",
              "Karena pembeli tidak punya pilihan lain",
              "Karena negara memaksanya",
              "Karena biaya produksi nol",
            ],
            answer: 1,
            explain: "Tanpa alternatif, pembeli terpaksa menerima harga yang ditetapkan monopolis.",
          },
          {
            q: "Urutan dari paling banyak ke paling sedikit penjual adalah?",
            options: [
              "Monopoli, oligopoli, persaingan sempurna",
              "Persaingan sempurna, oligopoli, monopoli",
              "Oligopoli, monopoli, persaingan sempurna",
              "Monopoli, persaingan sempurna, oligopoli",
            ],
            answer: 1,
            explain: "Persaingan sempurna punya paling banyak penjual, monopoli paling sedikit (satu).",
          },
          {
            q: "Apa makna pemecahan Standard Oil tahun 1911?",
            options: [
              "Negara mendukung monopoli",
              "Negara dapat membatasi monopoli demi menjaga persaingan",
              "Persaingan dilarang",
              "Minyak tidak lagi dijual",
            ],
            answer: 1,
            explain: "Putusan 1911 menegaskan wewenang negara membatasi monopoli lewat hukum antimonopoli.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "harga-sebagai-sinyal",
    levelId: "fondasi",
    order: 5,
    title: "Harga sebagai Sinyal Ekonomi",
    summary:
      "Harga bukan sekadar angka di label, melainkan pesan ringkas tentang kelangkaan dan kebutuhan. Pelajari bagaimana harga memandu jutaan keputusan, dan apa yang terjadi saat sinyal ini rusak.",
    durationMin: 14,
    tags: ["fondasi", "harga", "sinyal pasar", "koordinasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan tidak ada satu pun kantor pusat yang memberi tahu petani harus menanam apa, atau pabrik harus membuat berapa banyak. Toh, rak toko hampir selalu terisi. Rahasianya ada pada <strong>harga</strong>. Harga adalah pesan ringkas: ketika sesuatu langka tetapi banyak dibutuhkan, harganya naik; ketika berlimpah atau sepi peminat, harganya turun.",
      },
      {
        type: "paragraph",
        html: "Setiap perubahan harga membawa dua informasi sekaligus. Bagi <strong>produsen</strong>, harga tinggi berkata \"buatlah lebih banyak, ada untung di sini\". Bagi <strong>konsumen</strong>, harga tinggi berkata \"hematlah, carilah pengganti\". Tanpa rapat, tanpa perintah, jutaan orang yang tak saling kenal menyesuaikan diri hanya dengan membaca angka ini.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Harga adalah sinyal sekaligus insentif",
        html: "Harga memadatkan informasi yang tersebar di kepala jutaan orang menjadi satu angka. Ia tidak hanya <strong>memberi tahu</strong> di mana ada kelangkaan, tetapi juga <strong>memberi insentif</strong> untuk bertindak: produsen menambah pasokan, konsumen mengurangi pemakaian. Inilah cara pasar mengoordinasikan tanpa komando.",
      },
      {
        type: "video",
        comp: "PermintaanPenawaran",
        title: "Permintaan, Penawaran, dan Harga Keseimbangan",
        caption: "Bagaimana tarik-menarik pembeli dan penjual melahirkan harga yang menyeimbangkan pasar.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Pasar_Terapung.jpg?width=400",
        alt: "Pedagang di pasar terapung menawarkan barang dari perahu",
        caption: "Di pasar terapung, harga lahir langsung dari tawar-menawar. Tiap kesepakatan adalah sinyal kecil tentang seberapa langka dan dibutuhkannya sebuah barang.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser kurva permintaan dan penawaran, lalu amati bagaimana harga keseimbangan dan jumlah barang ikut bergeser. Perhatikan harga selalu mencari titik di mana keinginan beli dan keinginan jual bertemu.",
      },
      { type: "widget", widget: "SimulatorKeseimbanganPasar" },
      {
        type: "chart",
        variant: "area",
        title: "Harga Masker per Kotak di Indonesia Sepanjang 2020 (ilustrasi)",
        unit: "ribu rupiah per kotak",
        source: "ilustrasi edukatif berdasarkan pola lonjakan harga masker awal pandemi",
        note: "Lonjakan harga adalah sinyal kelangkaan yang mendorong pabrik menambah produksi, sehingga harga perlahan turun kembali.",
        data: [
          { label: "Jan", value: 25, color: "#34d399" },
          { label: "Feb", value: 60, color: "#fbbf24" },
          { label: "Mar", value: 150, color: "#f87171" },
          { label: "Mei", value: 110, color: "#fbbf24" },
          { label: "Jul", value: 70, color: "#fbbf24" },
          { label: "Okt", value: 40, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Masker melonjak di awal pandemi 2020",
        html: "Ketika COVID-19 menyebar pada awal <strong>2020</strong>, permintaan masker melonjak mendadak sementara pasokan terbatas. Harga satu kotak masker yang semula sekitar <strong>Rp30.000</strong> sempat melonjak ke <strong>Rp150.000</strong> atau lebih. Harga setinggi itu memang menyakitkan, tetapi ia menjadi sinyal kuat: banyak pabrik garmen lalu beralih memproduksi masker, importir menambah pasokan, dan dalam beberapa bulan harga turun kembali. Sinyal harga mengarahkan sumber daya ke tempat yang paling dibutuhkan.",
      },
      {
        type: "case",
        title: "Sejarah: Hiperinflasi Jerman merusak sinyal harga (1923)",
        html: "Pada <strong>1923</strong>, Republik Weimar di Jerman mengalami hiperinflasi dahsyat. Harga berlipat ganda hanya dalam hitungan hari, dan menjelang November 1923 satu dolar AS ditukar dengan sekitar <strong>4,2 triliun mark</strong>. Saat harga berubah secepat itu, ia berhenti menjadi sinyal yang berguna: orang tak bisa lagi membedakan mana barang yang benar-benar langka. Pekerja dibayar dua kali sehari agar bisa langsung berbelanja sebelum uang kehilangan nilai. Kisah ini menunjukkan bahwa ketika harga rusak, kemampuan pasar mengoordinasikan ekonomi ikut lumpuh.",
      },
      {
        type: "calcExercise",
        prompt:
          "Harga satu kotak masker naik dari Rp30.000 menjadi Rp150.000 saat awal pandemi. Berapa persen kenaikannya?",
        answer: 400,
        tolerance: 0,
        suffix: "%",
        solution:
          "Kenaikan = Rp150.000 - Rp30.000 = Rp120.000. Persentase = 120.000 / 30.000 x 100% = <strong>400%</strong>. Lonjakan setajam ini adalah sinyal kelangkaan yang mendorong produsen menambah pasokan.",
        hint: "Bagi selisih harga dengan harga awal, lalu kalikan 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Sebuah harga naik atau turun mengirim sinyal berbeda. Golongkan tiap pesan ke sinyal yang sesuai.",
        buckets: ["Sinyal harga naik", "Sinyal harga turun"],
        items: [
          { text: "Produsen sebaiknya menambah produksi karena ada untung", bucket: "Sinyal harga naik" },
          { text: "Konsumen sebaiknya berhemat atau mencari pengganti", bucket: "Sinyal harga naik" },
          { text: "Barang berlimpah, produsen sebaiknya mengurangi produksi", bucket: "Sinyal harga turun" },
          { text: "Konsumen bisa membeli lebih banyak karena murah", bucket: "Sinyal harga turun" },
          { text: "Kelangkaan sedang terjadi, sumber daya perlu diarahkan ke sini", bucket: "Sinyal harga naik" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Harga adalah pesan ringkas tentang kelangkaan dan kebutuhan, bukan sekadar angka di label.",
          "Setiap harga membawa dua sinyal: insentif bagi produsen menambah pasokan, dan dorongan bagi konsumen berhemat.",
          "Lewat sinyal harga, jutaan orang yang tak saling kenal saling menyesuaikan tanpa komando pusat.",
          "Lonjakan harga masker pada 2020 mendorong produksi naik, lalu harga turun kembali.",
          "Hiperinflasi merusak sinyal harga, seperti di Jerman 1923, sehingga koordinasi pasar lumpuh.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi utama harga dalam ekonomi pasar?",
            options: [
              "Sekadar mempersulit pembeli",
              "Menjadi sinyal tentang kelangkaan dan kebutuhan yang memandu keputusan",
              "Ditetapkan tetap oleh negara",
              "Tidak berpengaruh pada produksi",
            ],
            answer: 1,
            explain: "Harga memadatkan informasi kelangkaan menjadi satu angka yang memandu produsen dan konsumen.",
          },
          {
            q: "Ketika harga suatu barang naik tajam, sinyal apa yang diterima produsen?",
            options: [
              "Hentikan produksi",
              "Tambah produksi karena ada peluang untung",
              "Bagikan barang gratis",
              "Tidak ada sinyal apa pun",
            ],
            answer: 1,
            explain: "Harga tinggi memberi insentif bagi produsen untuk menambah pasokan ke tempat yang dibutuhkan.",
          },
          {
            q: "Mengapa harga masker turun kembali beberapa bulan setelah lonjakan 2020?",
            options: [
              "Karena negara melarang masker",
              "Karena banyak produsen menambah pasokan setelah melihat harga tinggi",
              "Karena tidak ada yang membutuhkan masker",
              "Karena masker menjadi gratis",
            ],
            answer: 1,
            explain: "Sinyal harga tinggi menarik lebih banyak pasokan, sehingga harga kembali turun.",
          },
          {
            q: "Apa yang terjadi pada sinyal harga saat hiperinflasi?",
            options: [
              "Sinyal harga menjadi makin akurat",
              "Harga berubah terlalu cepat sehingga berhenti menjadi sinyal yang berguna",
              "Harga membeku permanen",
              "Tidak ada barang yang dijual",
            ],
            answer: 1,
            explain: "Saat harga melonjak tiap hari, orang tak bisa lagi membaca mana yang benar-benar langka.",
          },
          {
            q: "Apa pelajaran dari hiperinflasi Jerman 1923?",
            options: [
              "Inflasi tinggi membuat ekonomi lebih efisien",
              "Ketika harga rusak, kemampuan pasar mengoordinasikan ekonomi ikut lumpuh",
              "Uang tidak pernah kehilangan nilai",
              "Sinyal harga tidak penting",
            ],
            answer: 1,
            explain: "Harga yang berubah terlalu cepat melumpuhkan koordinasi pasar yang bergantung padanya.",
          },
        ],
      },
    ],
  },
];
