import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "pemilu-sistem-pemilihan",
    levelId: "pemilu",
    order: 1,
    title: "Pemilu & Sistem Pemilihan",
    summary:
      "Pemilu adalah jantung demokrasi perwakilan. Pelajari cara suara diubah menjadi kursi, dan mengapa pilihan sistem sangat menentukan hasil.",
    durationMin: 15,
    tags: ["pemilu", "sistem pemilihan", "proporsional", "kursi"],
    blocks: [
      {
        type: "paragraph",
        html: "Lewat <strong>pemilu</strong>, rakyat memilih wakil dan pemimpin secara berkala. Tetapi cara <strong>menerjemahkan suara menjadi kursi</strong> tidak tunggal. Dua keluarga besar: sistem <strong>distrik/pluralitas</strong> (pemenang di tiap wilayah mengambil kursi) dan sistem <strong>proporsional</strong> (kursi dibagi sesuai persen suara).",
      },
      {
        type: "callout",
        tone: "key",
        title: "Setiap sistem punya konsekuensi",
        html: "Sistem <strong>distrik</strong> menghasilkan parlemen sederhana dan pemerintah stabil, tetapi membuang suara partai kalah. Sistem <strong>proporsional</strong> lebih mencerminkan ragam suara, tetapi parlemen bisa terpecah ke banyak partai.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur perolehan suara, lalu lihat bagaimana metode D'Hondt membagi kursi dengan membagi suara secara berurutan.",
      },
      { type: "widget", widget: "KalkulatorKursiDHondt" },
      {
        type: "video",
        comp: "SistemPemiluVideo",
        title: "Suara Menjadi Kursi",
        caption: "Suara yang sama bisa menghasilkan komposisi kursi berbeda tergantung sistem pemilunya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pemilihan_Umum_Indonesia_2019_170419002.JPG?width=400",
        alt: "Suasana pemungutan suara pada pemilu Indonesia",
        caption: "Pemilu Indonesia: salah satu pesta demokrasi terbesar di dunia dalam satu hari pemungutan suara.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Suara Sama, Kursi Berbeda (ilustrasi)",
        unit: "kursi dari 100 (Partai kecil)",
        source: "ilustrasi edukatif perbandingan sistem",
        note: "Partai kecil dengan 10% suara bisa mendapat kursi jauh berbeda tergantung sistemnya.",
        data: [
          { label: "Proporsional", value: 10, color: "#34d399" },
          { label: "Distrik/pluralitas", value: 2, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ambang batas parlemen di Indonesia",
        html: "Indonesia memakai sistem <strong>proporsional</strong> dengan <strong>ambang batas parlemen</strong> 4%: partai yang suaranya di bawah 4% tidak mendapat kursi di DPR, meski meraih jutaan suara. Tujuannya menyederhanakan parlemen agar tidak terpecah ke terlalu banyak partai. Konsekuensinya, suara pemilih partai kecil bisa <strong>terbuang</strong>. Di sinilah terlihat ketegangan abadi pemilu: antara keterwakilan yang adil dan parlemen yang bisa bekerja efektif.",
      },
      {
        type: "case",
        title: "Sejarah: Perjuangan hak pilih universal",
        html: "Pada awalnya, hak memilih sangat terbatas: hanya pria pemilik tanah. Perluasannya butuh perjuangan panjang. <strong>Selandia Baru</strong> menjadi negara pertama yang memberi <strong>hak pilih perempuan</strong> pada <strong>1893</strong>. Banyak negara lain menyusul setelah Perang Dunia I dan II. Di Amerika, hak pilih warga kulit hitam baru benar-benar terjamin lewat undang-undang hak suara <strong>1965</strong>. Demokrasi yang kita kenal, dengan satu orang satu suara untuk semua warga dewasa, adalah pencapaian yang relatif baru.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah partai meraih 3,2% suara, sementara ambang batas parlemen 4%. Berapa selisih persen yang membuatnya gugur dari parlemen?",
        answer: 0.8,
        tolerance: 0.05,
        suffix: "%",
        solution:
          "4% - 3,2% = <strong>0,8%</strong>. Selisih kecil ini membuat seluruh suara partai tersebut tidak terwakili di parlemen, lalu dibagikan ke partai yang lolos.",
        hint: "Kurangkan perolehan partai dari ambang batas.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap akibat ke sistem yang lebih mungkin menghasilkannya.",
        buckets: ["Sistem distrik", "Sistem proporsional"],
        items: [
          { text: "Parlemen sederhana, sering dua partai besar", bucket: "Sistem distrik" },
          { text: "Banyak partai mendapat kursi sesuai suara", bucket: "Sistem proporsional" },
          { text: "Suara partai kecil sering terbuang", bucket: "Sistem distrik" },
          { text: "Keterwakilan beragam, tapi parlemen terpecah", bucket: "Sistem proporsional" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Pemilu menerjemahkan suara menjadi kursi, dan caranya tidak tunggal.",
          "Sistem distrik menyederhanakan tapi membuang suara partai kalah.",
          "Sistem proporsional lebih mewakili tetapi parlemen bisa terpecah.",
          "Ambang batas parlemen (4% di Indonesia) menyederhanakan tetapi membuang suara partai kecil.",
          "Hak pilih universal adalah pencapaian baru: perempuan di Selandia Baru baru 1893.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa dua keluarga besar sistem pemilu?",
            options: [
              "Langsung dan tidak langsung",
              "Distrik/pluralitas dan proporsional",
              "Tertutup dan terbuka",
              "Pagi dan malam",
            ],
            answer: 1,
            explain: "Sistem distrik (pemenang ambil kursi) dan proporsional (kursi sesuai suara).",
          },
          {
            q: "Apa kelebihan sistem proporsional?",
            options: [
              "Parlemen selalu dua partai",
              "Lebih mencerminkan ragam suara rakyat",
              "Membuang suara kecil",
              "Tidak butuh pemilu",
            ],
            answer: 1,
            explain: "Proporsional membagi kursi sesuai persen suara, lebih mewakili keragaman.",
          },
          {
            q: "Apa fungsi ambang batas parlemen?",
            options: [
              "Menaikkan suara partai kecil",
              "Menyederhanakan parlemen dengan menyingkirkan partai di bawah ambang",
              "Menghapus pemilu",
              "Menambah jumlah partai",
            ],
            answer: 1,
            explain: "Ambang batas menyaring partai kecil agar parlemen tidak terlalu terpecah.",
          },
          {
            q: "Negara pertama yang memberi hak pilih perempuan adalah?",
            options: ["Amerika 1920", "Selandia Baru 1893", "Prancis 1789", "Inggris 1215"],
            answer: 1,
            explain: "Selandia Baru memberi hak pilih perempuan pada 1893, yang pertama di dunia.",
          },
          {
            q: "Partai meraih 3,2% dengan ambang 4%. Selisihnya?",
            options: ["0,8%", "1,2%", "3,2%", "7,2%"],
            answer: 0,
            explain: "4% dikurangi 3,2% sama dengan 0,8%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hak-pilih-perluasan",
    levelId: "pemilu",
    order: 2,
    title: "Hak Pilih & Sejarah Perluasannya",
    summary:
      "Hak memilih bukan pemberian alami, melainkan hasil perjuangan panjang. Telusuri bagaimana hak pilih meluas dari segelintir orang menjadi hak setiap warga dewasa.",
    durationMin: 14,
    tags: ["hak pilih", "suffrage", "sejarah", "hak warga"],
    blocks: [
      {
        type: "paragraph",
        html: "Hari ini kita anggap wajar bahwa setiap warga dewasa punya <strong>satu suara</strong>. Padahal selama berabad-abad hak pilih hanya milik kelompok kecil: pria dewasa pemilik tanah dengan kekayaan tertentu. <strong>Hak pilih universal</strong> baru lahir lewat gerakan sosial yang menuntut perluasan secara bertahap.",
      },
      {
        type: "paragraph",
        html: "Perluasan itu menyentuh banyak penghalang: syarat kepemilikan harta, jenis kelamin, ras, dan usia. Setiap penghalang yang runtuh menambah jutaan suara baru ke dalam demokrasi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Hak pilih diperjuangkan, bukan diberi",
        html: "Tidak ada negara yang langsung lahir dengan hak pilih universal. Setiap perluasan, dari pencabutan syarat harta sampai hak pilih perempuan, adalah hasil tekanan publik bertahun-tahun.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga gelombang besar",
        html: "Secara kasar: gelombang pertama mencabut syarat <strong>kekayaan</strong>, gelombang kedua memberi hak pilih <strong>perempuan</strong>, gelombang ketiga menjamin hak pilih tanpa diskriminasi <strong>ras</strong> dan menurunkan batas <strong>usia</strong>.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur jumlah pemilih terdaftar dan yang hadir, lalu lihat bagaimana angka partisipasi berubah saat hak pilih meluas ke kelompok baru.",
      },
      { type: "widget", widget: "KalkulatorPartisipasiPemilih" },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Dari Segelintir ke Semua",
        caption: "Lingkaran pemilih melebar seiring waktu, dari pria pemilik tanah menjadi seluruh warga dewasa.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ballot_dropped_into_ballot_box_2024_Swedish_EU_election_at_St%C3%A5ngen%C3%A4sskolan%2C_Brastad.jpg?width=400",
        alt: "Surat suara dimasukkan ke dalam kotak suara",
        caption: "Satu orang satu suara: prinsip yang kini terasa biasa, tetapi butuh lebih dari satu abad untuk diwujudkan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Perluasan Hak Pilih Perempuan Antar Negara",
        unit: "tahun pertama kali",
        source: "fakta sejarah, tahun perolehan hak pilih nasional perempuan",
        note: "Selandia Baru memelopori pada 1893, diikuti banyak negara setelah Perang Dunia.",
        data: [
          { label: "Selandia Baru", value: 1893, color: "#34d399" },
          { label: "Australia", value: 1902, color: "#60a5fa" },
          { label: "AS", value: 1920, color: "#f59e0b" },
          { label: "Indonesia", value: 1945, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Hak pilih perempuan di Indonesia",
        html: "Sejak pemilu nasional pertama <strong>1955</strong>, perempuan Indonesia memilih dan dipilih setara dengan laki-laki. Konstitusi 1945 sudah menegaskan kesetaraan warga negara. Bandingkan dengan banyak negara Barat yang baru memberi hak pilih perempuan pada awal abad ke-20 setelah perdebatan panjang. Bagi Indonesia, hak pilih perempuan menjadi bagian bawaan dari republik sejak awal berdirinya.",
      },
      {
        type: "case",
        title: "Sejarah: Surat suara rahasia dan hak pilih perempuan",
        html: "Dua tonggak penting. Pertama, <strong>surat suara rahasia</strong> (dikenal sebagai Australian ballot) pertama kali dipakai luas di Victoria, Australia, pada <strong>1856</strong>, sehingga pemilih bisa memilih tanpa takut diawasi atau ditekan. Kedua, <strong>Selandia Baru</strong> menjadi negara pertama yang memberi <strong>hak pilih perempuan</strong> dalam pemilu nasional pada <strong>1893</strong>. Di Amerika Serikat, hak pilih warga kulit hitam baru benar-benar terjamin lewat <strong>Voting Rights Act 1965</strong> yang melarang berbagai hambatan diskriminatif.",
      },
      {
        type: "calcExercise",
        prompt:
          "Perempuan memperoleh hak pilih nasional di Selandia Baru pada 1893 dan di Amerika Serikat pada 1920. Berapa selisih tahunnya?",
        answer: 27,
        tolerance: 0,
        suffix: " tahun",
        solution:
          "1920 - 1893 = <strong>27 tahun</strong>. Selandia Baru mendahului Amerika Serikat lebih dari seperempat abad dalam memberi hak pilih perempuan.",
        hint: "Kurangkan tahun lebih awal dari tahun lebih akhir.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tonggak sejarah dengan tahunnya.",
        pairs: [
          { left: "Surat suara rahasia (Australian ballot) di Victoria", right: "1856" },
          { left: "Hak pilih perempuan Selandia Baru", right: "1893" },
          { left: "Voting Rights Act Amerika Serikat", right: "1965" },
          { left: "Pemilu nasional pertama Indonesia", right: "1955" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Hak pilih universal adalah pencapaian baru, hasil perjuangan bertahap.",
          "Penghalang yang runtuh: syarat harta, jenis kelamin, ras, dan usia.",
          "Selandia Baru memberi hak pilih perempuan pertama di dunia pada 1893.",
          "Surat suara rahasia (1856) melindungi pemilih dari tekanan dan pengawasan.",
          "Voting Rights Act 1965 menjamin hak pilih tanpa diskriminasi ras di AS.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sebelum perluasan, siapa yang umumnya boleh memilih?",
            options: [
              "Semua warga dewasa",
              "Hanya pria dewasa pemilik tanah",
              "Hanya perempuan",
              "Hanya anak-anak",
            ],
            answer: 1,
            explain: "Hak pilih awalnya dibatasi pada pria dewasa pemilik tanah dengan kekayaan tertentu.",
          },
          {
            q: "Negara pertama yang memberi hak pilih perempuan dalam pemilu nasional adalah?",
            options: ["Amerika Serikat", "Inggris", "Selandia Baru", "Prancis"],
            answer: 2,
            explain: "Selandia Baru memberi hak pilih perempuan pada 1893, yang pertama di dunia.",
          },
          {
            q: "Apa fungsi surat suara rahasia (Australian ballot)?",
            options: [
              "Mempercepat penghitungan",
              "Melindungi pemilih agar bebas dari tekanan dan pengawasan",
              "Menambah jumlah partai",
              "Menghapus pemilu",
            ],
            answer: 1,
            explain: "Surat suara rahasia membuat orang memilih tanpa takut diintimidasi.",
          },
          {
            q: "Voting Rights Act 1965 di Amerika Serikat terutama menjamin apa?",
            options: [
              "Hak pilih perempuan",
              "Hak pilih tanpa diskriminasi ras",
              "Batas usia memilih",
              "Jumlah kursi parlemen",
            ],
            answer: 1,
            explain: "Undang-undang 1965 melarang hambatan diskriminatif berbasis ras dalam memilih.",
          },
          {
            q: "Selisih tahun hak pilih perempuan Selandia Baru (1893) dan AS (1920)?",
            options: ["17 tahun", "27 tahun", "37 tahun", "7 tahun"],
            answer: 1,
            explain: "1920 dikurangi 1893 sama dengan 27 tahun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sistem-distrik-fptp",
    levelId: "pemilu",
    order: 3,
    title: "Sistem Distrik (First-Past-The-Post)",
    summary:
      "Di sistem distrik, peraih suara terbanyak di satu wilayah mengambil seluruh kursi wilayah itu. Sederhana, tetapi banyak suara terbuang.",
    durationMin: 14,
    tags: ["sistem distrik", "pluralitas", "FPTP", "kursi"],
    blocks: [
      {
        type: "paragraph",
        html: "Sistem <strong>distrik</strong> atau <strong>First-Past-The-Post</strong> (FPTP) membagi negara menjadi banyak wilayah kecil. Tiap wilayah memilih satu wakil, dan <strong>calon dengan suara terbanyak menang</strong>, meski tidak meraih mayoritas mutlak. Inilah sistem yang dipakai Inggris, Amerika Serikat untuk DPR-nya, dan banyak bekas jajahan Inggris.",
      },
      {
        type: "paragraph",
        html: "Kelebihannya jelas: hasilnya mudah dipahami, ada wakil yang jelas untuk tiap wilayah, dan parlemen cenderung sederhana dengan dua partai besar. Tetapi ada harga yang dibayar berupa <strong>suara terbuang</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pemenang mengambil semua",
        html: "Di tiap distrik, hanya satu calon yang menang. Semua suara untuk calon kalah tidak menghasilkan kursi sama sekali, sebanyak apa pun jumlahnya.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Awas distorsi suara",
        html: "Sebuah partai bisa meraih banyak suara nasional tetapi sedikit kursi, jika suaranya tersebar tipis di banyak distrik tanpa pernah menang. Sebaliknya, partai yang menang tipis di banyak distrik bisa mendominasi parlemen.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Ubah perolehan suara tiap partai, lalu bandingkan komposisi kursi pada sistem distrik dan proporsional di simulator.",
      },
      { type: "widget", widget: "SimulatorSistemPemilu" },
      {
        type: "video",
        comp: "SistemPemiluVideo",
        title: "Pemenang Ambil Kursi",
        caption: "Di sistem distrik, suara untuk calon kalah tidak berbuah kursi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/DPR_sahkan_RUU.jpg?width=400",
        alt: "Suasana sidang DPR Indonesia",
        caption: "Komposisi kursi di parlemen sangat dipengaruhi oleh pilihan sistem pemilu.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Satu Distrik, Tiga Calon (ilustrasi)",
        unit: "persen suara",
        source: "ilustrasi edukatif sistem pluralitas",
        note: "Calon A menang dengan 40% suara, tetapi 60% suara pemilih lain tidak menghasilkan kursi.",
        data: [
          { label: "Calon A (menang)", value: 40, color: "#34d399" },
          { label: "Calon B", value: 35, color: "#f87171" },
          { label: "Calon C", value: 25, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menang tanpa mayoritas",
        html: "Di sebuah distrik dengan tiga calon, hasilnya A 40%, B 35%, C 25%. Calon <strong>A menang</strong> dan mengambil kursi, padahal <strong>60% pemilih</strong> sebenarnya memilih orang lain. Inilah ciri khas sistem pluralitas: pemenang tidak harus didukung mayoritas, cukup unggul dari yang lain. Suara untuk B dan C, sebanyak 60%, tidak berbuah kursi sama sekali.",
      },
      {
        type: "case",
        title: "Sejarah: FPTP dan dua partai besar di Amerika",
        html: "Sistem distrik mendorong munculnya dua partai dominan, sebuah pola yang dikenal sebagai <strong>Hukum Duverger</strong>. Amerika Serikat, yang memilih anggota DPR-nya lewat sistem distrik sejak abad ke-19, hampir selalu didominasi <strong>dua partai besar</strong>. Pada <strong>1856</strong> Australia memperkenalkan surat suara rahasia yang juga menyebar ke sistem distrik di banyak negara, sehingga pemilih bebas memilih calon distriknya tanpa tekanan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Di sebuah distrik, calon menang dengan 40% suara. Berapa persen suara yang terbuang karena diberikan ke calon yang kalah?",
        answer: 60,
        tolerance: 0,
        suffix: "%",
        solution:
          "100% - 40% = <strong>60%</strong>. Seluruh 60% suara untuk calon kalah tidak menghasilkan kursi apa pun di sistem distrik.",
        hint: "Kurangkan persen suara pemenang dari 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan sebagai kelebihan atau kelemahan sistem distrik.",
        buckets: ["Kelebihan", "Kelemahan"],
        items: [
          { text: "Ada wakil yang jelas untuk tiap wilayah", bucket: "Kelebihan" },
          { text: "Hasil mudah dipahami publik", bucket: "Kelebihan" },
          { text: "Suara untuk calon kalah terbuang", bucket: "Kelemahan" },
          { text: "Partai kecil sulit mendapat kursi", bucket: "Kelemahan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Sistem distrik (FPTP): peraih suara terbanyak di wilayah mengambil kursi.",
          "Pemenang tidak harus didukung mayoritas, cukup unggul dari yang lain.",
          "Suara untuk calon kalah terbuang, tidak menghasilkan kursi.",
          "FPTP cenderung melahirkan dua partai besar (Hukum Duverger).",
          "Kelebihannya: wakil wilayah jelas dan hasil mudah dipahami.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bagaimana pemenang ditentukan di sistem distrik (FPTP)?",
            options: [
              "Harus meraih lebih dari 50% suara",
              "Calon dengan suara terbanyak menang, meski tanpa mayoritas",
              "Kursi dibagi sesuai persen suara",
              "Ditentukan undian",
            ],
            answer: 1,
            explain: "Pluralitas berarti suara terbanyak menang, tidak harus mayoritas mutlak.",
          },
          {
            q: "Apa kelemahan utama sistem distrik?",
            options: [
              "Parlemen terlalu terpecah",
              "Banyak suara terbuang karena hanya pemenang yang dapat kursi",
              "Tidak ada wakil wilayah",
              "Hasil sulit dipahami",
            ],
            answer: 1,
            explain: "Semua suara untuk calon kalah tidak menghasilkan kursi.",
          },
          {
            q: "Pola dua partai besar yang dipicu sistem distrik dikenal sebagai?",
            options: ["Hukum Duverger", "Hukum Pareto", "Teorema Arrow", "Hukum Okun"],
            answer: 0,
            explain: "Hukum Duverger menjelaskan kecenderungan FPTP melahirkan dua partai dominan.",
          },
          {
            q: "Negara yang memilih DPR-nya lewat sistem distrik dan didominasi dua partai adalah?",
            options: ["Belanda", "Amerika Serikat", "Israel", "Indonesia"],
            answer: 1,
            explain: "Amerika Serikat memakai sistem distrik untuk DPR-nya dan didominasi dua partai besar.",
          },
          {
            q: "Pemenang distrik meraih 40% suara. Berapa persen suara terbuang?",
            options: ["40%", "50%", "60%", "100%"],
            answer: 2,
            explain: "100% dikurangi 40% sama dengan 60% suara yang terbuang.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sistem-proporsional-pembagian-kursi",
    levelId: "pemilu",
    order: 4,
    title: "Sistem Proporsional & Pembagian Kursi",
    summary:
      "Sistem proporsional membagi kursi sesuai persen suara. Pelajari kuota Hare dan metode D'Hondt yang dipakai untuk menerjemahkan suara menjadi kursi secara adil.",
    durationMin: 15,
    tags: ["proporsional", "kuota", "D'Hondt", "kursi"],
    blocks: [
      {
        type: "paragraph",
        html: "Sistem <strong>proporsional</strong> bertujuan agar persentase kursi sebuah partai mendekati persentase suaranya. Jika partai meraih 30% suara, idealnya ia mendapat sekitar 30% kursi. Indonesia, Belanda, dan banyak negara Eropa memakai sistem ini.",
      },
      {
        type: "paragraph",
        html: "Persoalannya, kursi adalah bilangan bulat dan suara jarang membagi rata. Maka dibutuhkan <strong>metode pembagian</strong>. Dua yang umum: <strong>kuota</strong> (misalnya kuota Hare) dan <strong>metode divisor</strong> seperti <strong>D'Hondt</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kuota Hare itu sederhana",
        html: "Kuota Hare = total suara sah dibagi jumlah kursi. Tiap partai mendapat kursi sebanyak suaranya dibagi kuota (dibulatkan ke bawah), lalu sisa kursi dibagikan ke partai dengan sisa suara terbesar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Metode D'Hondt menguntungkan partai besar",
        html: "D'Hondt membagi suara tiap partai dengan 1, 2, 3, dan seterusnya, lalu kursi diberikan pada hasil bagi terbesar berturut-turut. Dibanding kuota Hare, D'Hondt sedikit lebih menguntungkan <strong>partai besar</strong>.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Masukkan perolehan suara tiap partai dan jumlah kursi, lalu lihat metode D'Hondt membagi kursi langkah demi langkah.",
      },
      { type: "widget", widget: "KalkulatorKursiDHondt" },
      {
        type: "video",
        comp: "SistemPemiluVideo",
        title: "Membagi Kursi Secara Proporsional",
        caption: "Suara diubah menjadi kursi lewat kuota atau metode divisor seperti D'Hondt.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pemilihan_Umum_Indonesia_2019_170419002.JPG?width=400",
        alt: "Pemungutan suara pada pemilu Indonesia 2019",
        caption: "Indonesia memakai sistem proporsional untuk memilih anggota DPR.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Suara vs Kursi dengan Kuota Hare (ilustrasi)",
        unit: "kursi dari 5 (kuota 20.000 suara)",
        source: "ilustrasi edukatif, total 100.000 suara sah",
        note: "Partai A 60.000 suara mendapat 3 kursi, B 30.000 dapat 1, C 10.000 dapat 0 lalu kursi sisa.",
        data: [
          { label: "Partai A (60rb)", value: 3, color: "#34d399" },
          { label: "Partai B (30rb)", value: 1, color: "#60a5fa" },
          { label: "Partai C (10rb)", value: 1, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membagi 5 kursi dengan kuota Hare",
        html: "Total suara sah <strong>100.000</strong> untuk <strong>5 kursi</strong>, maka kuota Hare = 100.000 / 5 = <strong>20.000</strong>. Partai A meraih 60.000 suara, B 30.000, C 10.000. Pembagian penuh: A = 60.000 / 20.000 = <strong>3 kursi</strong>, B = 30.000 / 20.000 = <strong>1 kursi</strong>, C = 0 kursi. Sudah terbagi 4 kursi, sisa 1 kursi diberikan ke <strong>sisa suara terbesar</strong>, yaitu C dengan sisa 10.000. Hasil akhir: A 3, B 1, C 1.",
      },
      {
        type: "case",
        title: "Sejarah: Pemilu langsung dan sistem proporsional Indonesia",
        html: "Indonesia memakai sistem <strong>proporsional</strong> untuk memilih anggota DPR sejak pemilu pertama <strong>1955</strong>. Sebuah tonggak besar terjadi pada <strong>2004</strong>, ketika untuk pertama kalinya rakyat memilih <strong>presiden secara langsung</strong>, bukan lagi lewat MPR. Sejak itu Indonesia memadukan pemilihan presiden langsung dengan pemilu legislatif proporsional, sebuah kombinasi yang menentukan peta politik sampai hari ini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Total suara sah 100.000 untuk 5 kursi. Berapa nilai kuota Hare (suara yang dibutuhkan per kursi)?",
        answer: 20000,
        tolerance: 0,
        solution:
          "Kuota Hare = total suara sah / jumlah kursi = 100.000 / 5 = <strong>20.000</strong>. Setiap kelipatan 20.000 suara penuh memberi satu kursi.",
        hint: "Bagi total suara dengan jumlah kursi.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan partai dengan jumlah kursinya pada studi kasus kuota Hare di atas.",
        pairs: [
          { left: "Partai A (60.000 suara)", right: "3 kursi" },
          { left: "Partai B (30.000 suara)", right: "1 kursi" },
          { left: "Partai C (10.000 suara, sisa terbesar)", right: "1 kursi" },
          { left: "Kuota Hare (100.000 / 5 kursi)", right: "20.000 suara" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Sistem proporsional membuat persen kursi mendekati persen suara.",
          "Kuota Hare = total suara sah dibagi jumlah kursi.",
          "Kursi sisa dibagikan ke partai dengan sisa suara terbesar.",
          "Metode D'Hondt membagi suara dengan 1, 2, 3, dan seterusnya.",
          "D'Hondt sedikit lebih menguntungkan partai besar dibanding kuota Hare.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama sistem proporsional?",
            options: [
              "Hanya dua partai yang menang",
              "Persen kursi mendekati persen suara tiap partai",
              "Membuang suara partai kecil",
              "Pemenang ambil semua kursi",
            ],
            answer: 1,
            explain: "Proporsional berusaha membuat kursi sebanding dengan suara.",
          },
          {
            q: "Bagaimana menghitung kuota Hare?",
            options: [
              "Total suara dikali jumlah kursi",
              "Total suara sah dibagi jumlah kursi",
              "Jumlah kursi dibagi total suara",
              "Suara partai terbesar dibagi dua",
            ],
            answer: 1,
            explain: "Kuota Hare = total suara sah / jumlah kursi.",
          },
          {
            q: "Metode D'Hondt membagi suara tiap partai dengan deret apa?",
            options: ["1, 2, 3, ...", "2, 4, 6, ...", "1, 3, 5, ...", "10, 20, 30, ..."],
            answer: 0,
            explain: "D'Hondt membagi dengan 1, 2, 3, dan seterusnya, lalu mengambil hasil bagi terbesar.",
          },
          {
            q: "Kapan rakyat Indonesia pertama kali memilih presiden secara langsung?",
            options: ["1955", "1998", "2004", "2014"],
            answer: 2,
            explain: "Pemilihan presiden langsung pertama digelar pada 2004.",
          },
          {
            q: "Total suara 100.000 untuk 5 kursi. Kuota Hare-nya?",
            options: ["10.000", "20.000", "25.000", "50.000"],
            answer: 1,
            explain: "100.000 dibagi 5 sama dengan 20.000.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "integritas-pemilu-partisipasi",
    levelId: "pemilu",
    order: 5,
    title: "Integritas Pemilu & Partisipasi",
    summary:
      "Pemilu bermakna hanya jika jujur dan diikuti banyak orang. Pelajari pilar integritas pemilu dan cara mengukur partisipasi pemilih.",
    durationMin: 14,
    tags: ["integritas", "partisipasi", "golput", "pemilu jujur"],
    blocks: [
      {
        type: "paragraph",
        html: "Sistem pemilu terbaik pun tak berarti jika prosesnya curang atau diabaikan rakyat. <strong>Integritas pemilu</strong> menjamin suara dihitung jujur, dan <strong>partisipasi</strong> menunjukkan seberapa banyak warga benar-benar terlibat. Keduanya menentukan apakah hasil pemilu sah secara moral, bukan hanya secara hukum.",
      },
      {
        type: "paragraph",
        html: "Integritas berdiri di atas beberapa pilar: pemilih terdaftar dengan benar, surat suara rahasia, penghitungan terbuka, penyelenggara yang netral, dan jalur sengketa yang adil. Lemah di satu pilar bisa meruntuhkan kepercayaan pada keseluruhan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dua ukuran kesehatan pemilu",
        html: "Pemilu sehat butuh <strong>kejujuran</strong> (suara dihitung apa adanya) dan <strong>keterlibatan</strong> (banyak warga ikut memilih). Angka partisipasi tinggi dengan proses jujur adalah tanda demokrasi yang hidup.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Golput dan suara tidak sah",
        html: "Warga yang tidak memilih disebut <strong>golput</strong>. Partisipasi rendah bisa membuat hasil kurang mewakili kehendak rakyat. Suara yang dicoblos salah juga dihitung sebagai <strong>suara tidak sah</strong> dan tidak masuk perhitungan kursi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Masukkan jumlah pemilih terdaftar dan yang hadir, lalu hitung angka partisipasi serta perkirakan suara tidak sah.",
      },
      { type: "widget", widget: "KalkulatorPartisipasiPemilih" },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Pemilu yang Jujur dan Hidup",
        caption: "Integritas dan partisipasi adalah dua sayap yang membuat pemilu bermakna.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ballot_dropped_into_ballot_box_2024_Swedish_EU_election_at_St%C3%A5ngen%C3%A4sskolan%2C_Brastad.jpg?width=400",
        alt: "Pemilih memasukkan surat suara ke kotak suara",
        caption: "Surat suara rahasia dan kotak suara yang aman adalah pilar dasar integritas pemilu.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Partisipasi Pemilih Pilpres Indonesia (ilustrasi)",
        unit: "persen partisipasi",
        source: "ilustrasi edukatif berbasis tren angka partisipasi nasional",
        note: "Partisipasi pemilu presiden Indonesia cenderung tinggi, umumnya di atas 70%.",
        data: [
          { label: "2014", value: 70, color: "#60a5fa" },
          { label: "2019", value: 81, color: "#34d399" },
          { label: "2024", value: 80, color: "#f59e0b" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menghitung angka partisipasi",
        html: "Sebuah daerah punya <strong>200.000</strong> pemilih terdaftar dalam daftar pemilih tetap. Pada hari pemungutan suara, <strong>160.000</strong> orang hadir dan mencoblos. Angka partisipasi = 160.000 / 200.000 = <strong>80%</strong>. Artinya 20% pemilih, yaitu 40.000 orang, tidak menggunakan hak pilihnya alias golput. Angka 80% tergolong sehat, tetapi penyelenggara tetap perlu mendorong yang absen agar ikut pada pemilu berikutnya.",
      },
      {
        type: "case",
        title: "Sejarah: Surat suara rahasia menjaga integritas",
        html: "Sebelum ada <strong>surat suara rahasia</strong>, pemilih sering memberikan suara secara terbuka, sehingga mudah ditekan, disuap, atau diintimidasi. Reformasi besar datang dari Victoria, Australia, pada <strong>1856</strong> dengan surat suara yang dicetak negara dan dicoblos secara rahasia. Model <strong>Australian ballot</strong> ini menyebar ke seluruh dunia dan menjadi pilar integritas pemilu modern, termasuk di Indonesia, karena melindungi kebebasan memilih setiap warga.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah daerah memiliki 200.000 pemilih terdaftar, dan 160.000 orang hadir mencoblos. Berapa persen angka partisipasinya?",
        answer: 80,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Partisipasi = (hadir / terdaftar) x 100% = (160.000 / 200.000) x 100% = <strong>80%</strong>. Sisanya 20% adalah pemilih yang tidak hadir.",
        hint: "Bagi jumlah yang hadir dengan jumlah terdaftar, lalu kalikan 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap hal sebagai pilar integritas pemilu atau ancaman terhadap integritas.",
        buckets: ["Pilar integritas", "Ancaman integritas"],
        items: [
          { text: "Surat suara rahasia", bucket: "Pilar integritas" },
          { text: "Penghitungan suara terbuka untuk publik", bucket: "Pilar integritas" },
          { text: "Penyelenggara yang netral", bucket: "Pilar integritas" },
          { text: "Intimidasi pemilih di TPS", bucket: "Ancaman integritas" },
          { text: "Manipulasi daftar pemilih", bucket: "Ancaman integritas" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Pemilu bermakna jika jujur (integritas) dan diikuti banyak orang (partisipasi).",
          "Pilar integritas: pendaftaran benar, surat suara rahasia, hitung terbuka, penyelenggara netral.",
          "Partisipasi = jumlah hadir dibagi jumlah pemilih terdaftar.",
          "Golput dan suara tidak sah mengurangi keterwakilan hasil pemilu.",
          "Surat suara rahasia (Australian ballot 1856) melindungi kebebasan memilih.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua ukuran kesehatan pemilu adalah?",
            options: [
              "Biaya dan kecepatan",
              "Integritas (kejujuran) dan partisipasi (keterlibatan)",
              "Jumlah partai dan jumlah kursi",
              "Cuaca dan lokasi",
            ],
            answer: 1,
            explain: "Pemilu sehat butuh proses jujur dan keikutsertaan warga yang tinggi.",
          },
          {
            q: "Apa yang dimaksud golput?",
            options: [
              "Warga yang memilih dua kali",
              "Warga yang tidak menggunakan hak pilihnya",
              "Penyelenggara pemilu",
              "Partai pemenang",
            ],
            answer: 1,
            explain: "Golput adalah warga terdaftar yang tidak ikut memilih.",
          },
          {
            q: "Manakah yang merupakan pilar integritas pemilu?",
            options: [
              "Intimidasi pemilih",
              "Manipulasi daftar pemilih",
              "Surat suara rahasia dan penghitungan terbuka",
              "Suap penyelenggara",
            ],
            answer: 2,
            explain: "Surat suara rahasia dan penghitungan terbuka menjaga kejujuran pemilu.",
          },
          {
            q: "Reformasi surat suara rahasia (Australian ballot) bermula di Victoria pada?",
            options: ["1776", "1856", "1893", "1965"],
            answer: 1,
            explain: "Surat suara rahasia model Victoria dipakai pada 1856 lalu menyebar ke dunia.",
          },
          {
            q: "200.000 terdaftar, 160.000 hadir. Angka partisipasinya?",
            options: ["60%", "70%", "80%", "90%"],
            answer: 2,
            explain: "160.000 dibagi 200.000 sama dengan 0,8 atau 80%.",
          },
        ],
      },
    ],
  },
];
