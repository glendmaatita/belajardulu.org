import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "arus-tegangan-hambatan",
    levelId: "arus-hukum-ohm",
    order: 1,
    title: "Arus, Tegangan, dan Hambatan",
    summary:
      "Sebelum menyentuh rumus apa pun, kita rasakan dulu apa yang sebenarnya 'mengalir' saat lampu menyala dan apa yang mendorongnya.",
    durationMin: 13,
    tags: ["fisika", "listrik", "arus", "tegangan", "hambatan"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat kamu menekan sakelar, lampu rumah menyala seketika. Tapi apa yang sebenarnya bergerak di dalam kawat? Bayangkan air dalam pipa: ada <strong>air yang mengalir</strong>, ada <strong>tekanan yang mendorongnya</strong>, dan ada <strong>pipa sempit yang menghambat</strong>. Sebelum bertemu rumus, ayo rasakan dulu tiga 'pemain' listrik ini lewat kisah nyata baterai dan lampu.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Ampere, Besaran Pokok Arus",
        caption: "Arus listrik diukur dalam ampere, salah satu dari tujuh besaran pokok SI.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang sebuah baterai senter. Di tubuhnya tertulis '1,5 V'. Itulah <strong>tegangan</strong>: dorongan yang membuat muatan ingin mengalir, seperti tekanan air. Saat kamu sambungkan ke lampu, muatan mulai mengalir lewat kawat, itulah <strong>arus</strong>. Dan kawat tipis di dalam lampu menahan aliran itu sehingga memanas dan bersinar, itulah <strong>hambatan</strong>. Belum ada rumus, baru pengamatan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga pemain, tiga satuan",
        html: "<strong>Arus (I)</strong> diukur dalam ampere (A), yaitu berapa banyak muatan lewat tiap detik. <strong>Tegangan (V)</strong> diukur dalam volt (V), yaitu dorongan per satuan muatan. <strong>Hambatan (R)</strong> diukur dalam ohm (Ω), yaitu seberapa kuat aliran ditahan.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Arus Khas Beberapa Alat Rumah (pada 220 V)",
        unit: "ampere",
        source: "ilustrasi edukatif",
        note: "Alat yang menarik daya besar membutuhkan arus lebih besar. Angka ini nyata, bukan persentase karangan.",
        data: [
          { label: "Lampu LED", value: 0.05, color: "#a3e635" },
          { label: "Pengisi HP", value: 0.1, color: "#4ade80" },
          { label: "Kipas angin", value: 0.25, color: "#34d399" },
          { label: "Setrika", value: 1.4, color: "#22d3ee" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dalam 30 detik, muatan sebesar 60 coulomb mengalir lewat sebuah lampu. Berapa kuat arusnya?",
        answer: 2,
        tolerance: 0.01,
        suffix: " A",
        solution:
          "Arus adalah muatan per detik: 60 coulomb dibagi 30 detik = <strong>2 ampere</strong>. Perhatikan polanya, arus hanyalah laju mengalirnya muatan.",
        hint: "Bagi jumlah muatan (coulomb) dengan waktu (detik).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap besaran listrik dengan satuannya.",
        pairs: [
          { left: "Arus listrik", right: "ampere (A)" },
          { left: "Tegangan", right: "volt (V)" },
          { left: "Hambatan", right: "ohm (Ω)" },
          { left: "Muatan listrik", right: "coulomb (C)" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Dalam analogi air-pipa, kelompokkan tiap hal sebagai analog tegangan atau analog hambatan.",
        buckets: ["Analog tegangan", "Analog hambatan"],
        items: [
          { text: "Tekanan air dari pompa", bucket: "Analog tegangan" },
          { text: "Pipa yang menyempit", bucket: "Analog hambatan" },
          { text: "Tinggi tangki air", bucket: "Analog tegangan" },
          { text: "Kerikil yang menyumbat pipa", bucket: "Analog hambatan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Burung Aman di Kabel Listrik",
        html: "Burung bertengger di kabel tegangan tinggi tanpa tersengat. Mengapa? Karena yang berbahaya bukan tegangan tinggi semata, melainkan <strong>arus</strong> yang mengalir lewat tubuh. Dua kaki burung menyentuh kawat yang sama, jadi tidak ada beda tegangan di antara kakinya, sehingga tidak ada arus yang mengalir lewat tubuhnya. Ini menegaskan: arus mengalir hanya jika ada beda tegangan yang mendorongnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati, baru kita tuliskan polanya. Arus adalah muatan yang mengalir tiap detik: <strong>I = Q / t</strong> (ampere = coulomb per sekon). Tegangan adalah dorongan yang menyebabkan aliran, dan hambatan adalah penahannya. Rumus ini bukan untuk dihafal, tapi rangkuman dari apa yang baru saja kita amati.",
      },
      {
        type: "takeaways",
        items: [
          "Arus (I) adalah laju mengalirnya muatan: I = Q / t, diukur dalam ampere.",
          "Tegangan (V) adalah dorongan yang menyebabkan muatan mengalir, diukur dalam volt.",
          "Hambatan (R) adalah penahan aliran muatan, diukur dalam ohm.",
          "Arus hanya mengalir jika ada beda tegangan; tanpa beda tegangan, tidak ada arus.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satuan SI untuk arus listrik adalah?",
            options: ["volt", "ohm", "ampere", "coulomb"],
            answer: 2,
            explain: "Arus diukur dalam ampere (A), salah satu besaran pokok SI.",
          },
          {
            q: "Dalam analogi air, tegangan paling mirip dengan?",
            options: ["Lebar pipa", "Tekanan air", "Suhu air", "Warna air"],
            answer: 1,
            explain: "Tegangan adalah dorongan, mirip tekanan air yang membuatnya mengalir.",
          },
          {
            q: "Jika 40 coulomb mengalir dalam 10 detik, berapa arusnya?",
            options: ["4 A", "400 A", "0,25 A", "50 A"],
            answer: 0,
            explain: "I = Q/t = 40/10 = 4 ampere.",
          },
          {
            q: "Mengapa burung aman bertengger di satu kabel listrik?",
            options: [
              "Karena bulunya isolator",
              "Karena tidak ada beda tegangan antara kedua kakinya",
              "Karena tegangannya nol",
              "Karena burung tidak menghantar listrik",
            ],
            answer: 1,
            explain: "Tanpa beda tegangan, tidak ada arus yang mengalir lewat tubuhnya.",
          },
          {
            q: "Hambatan listrik diukur dalam satuan?",
            options: ["ampere", "ohm", "watt", "joule"],
            answer: 1,
            explain: "Hambatan (R) diukur dalam ohm (Ω).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "beda-potensial",
    levelId: "arus-hukum-ohm",
    order: 2,
    title: "Beda Potensial: Dorongan di Balik Arus",
    summary:
      "Mengapa air terjun mengalir deras tapi kolam diam? Dari beda ketinggian, kita temukan gagasan beda potensial yang mendorong muatan.",
    durationMin: 13,
    tags: ["fisika", "listrik", "tegangan", "beda-potensial", "energi"],
    blocks: [
      {
        type: "paragraph",
        html: "Air di puncak air terjun meluncur deras, tapi air di kolam datar diam saja. Bedanya hanya satu: <strong>beda ketinggian</strong>. Listrik punya kembarannya yang disebut <strong>beda potensial</strong> atau tegangan. Sebelum menulis rumus, mari rasakan dulu mengapa baterai 9 V mendorong muatan lebih kuat daripada baterai 1,5 V.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Tegangan Sebagai Dorongan",
        caption: "Beda potensial adalah selisih energi tiap muatan antara dua titik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sentuh kutub baterai 1,5 V dengan lidah (banyak orang pernah iseng), terasa geli ringan. Sekarang bayangkan baterai 9 V: dorongannya jauh lebih kuat. Yang berubah bukan jumlah muatannya, melainkan <strong>energi yang dibawa tiap muatan</strong>. Makin tinggi 'air terjunnya', makin besar energi yang diserahkan tiap muatan saat mengalir. Belum ada rumus, baru pengamatan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Beda potensial vs GGL",
        html: "<strong>Beda potensial (V)</strong> adalah selisih energi per muatan antara dua titik dalam rangkaian. <strong>GGL (gaya gerak listrik, ε)</strong> adalah dorongan total yang diberikan sumber seperti baterai sebelum ada arus. Keduanya sama-sama diukur dalam volt, yaitu joule per coulomb.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Beda Potensial Khas Beberapa Sumber Listrik",
        unit: "volt",
        source: "nilai pasaran umum",
        note: "Tiap sumber memberi dorongan berbeda. Angka volt ini nyata dan menentukan seberapa kuat muatan didorong.",
        data: [
          { label: "Baterai AA", value: 1.5, color: "#a3e635" },
          { label: "Baterai kotak", value: 9, color: "#4ade80" },
          { label: "Aki motor", value: 12, color: "#34d399" },
          { label: "Stop kontak PLN", value: 220, color: "#22d3ee" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah baterai menyerahkan energi 18 joule untuk memindahkan 2 coulomb muatan. Berapa beda potensialnya?",
        answer: 9,
        tolerance: 0.01,
        suffix: " V",
        solution:
          "Beda potensial adalah energi per muatan: 18 joule dibagi 2 coulomb = <strong>9 volt</strong>. Inilah arti sebenarnya satu volt, yaitu satu joule per coulomb.",
        hint: "Bagi energi (joule) dengan muatan (coulomb).",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk memindahkan 5 coulomb muatan, sebuah sumber memberi energi 60 joule. Berapa tegangannya?",
        answer: 12,
        tolerance: 0.01,
        suffix: " V",
        solution:
          "V = W / Q = 60 J ÷ 5 C = <strong>12 volt</strong>. Persis dorongan aki motor.",
        hint: "Tegangan = energi dibagi muatan.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan ini sebagai benar atau salah tentang beda potensial.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Volt sama dengan joule per coulomb", bucket: "Benar" },
          { text: "Tegangan selalu butuh arus untuk ada", bucket: "Salah" },
          { text: "Beda potensial mendorong muatan mengalir", bucket: "Benar" },
          { text: "Baterai kosong tetap punya tegangan penuh", bucket: "Salah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Saklar Diletakkan di Kabel Fasa",
        html: "Di instalasi rumah, saklar dipasang pada kabel <strong>fasa</strong> (yang bertegangan 220 V terhadap netral), bukan pada kabel netral. Alasannya soal beda potensial: saat saklar terbuka di kabel fasa, lampu benar-benar terputus dari sumber tegangan, sehingga aman disentuh. Jika saklar dipasang di netral, lampu tetap 'bertegangan' walau padam, dan menyentuhnya bisa berbahaya. Beda potensial menentukan aman tidaknya, bukan sekadar nyala atau mati.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan dorongan dan air terjunnya, baru kita rangkum. Beda potensial adalah energi yang diserahkan tiap muatan: <strong>V = W / Q</strong> (volt = joule per coulomb). Dari sini energi W = Q × V. Rumus ini lahir dari gagasan 'tinggi air terjun', bukan dari hafalan.",
      },
      {
        type: "takeaways",
        items: [
          "Beda potensial (tegangan) adalah energi per muatan: V = W / Q, satuannya volt.",
          "Satu volt berarti satu joule energi tiap satu coulomb muatan.",
          "GGL adalah dorongan total sumber sebelum ada arus; beda potensial diukur antara dua titik.",
          "Tegangan bisa ada tanpa arus, seperti baterai yang belum disambung.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satu volt setara dengan?",
            options: ["1 joule per coulomb", "1 coulomb per detik", "1 watt per ampere", "1 ohm per ampere"],
            answer: 0,
            explain: "Volt didefinisikan sebagai joule per coulomb (energi per muatan).",
          },
          {
            q: "Energi 24 joule memindahkan 4 coulomb. Beda potensialnya?",
            options: ["6 V", "96 V", "0,17 V", "20 V"],
            answer: 0,
            explain: "V = W/Q = 24/4 = 6 volt.",
          },
          {
            q: "Apa yang membedakan baterai 9 V dari baterai 1,5 V?",
            options: [
              "Jumlah muatannya",
              "Energi yang dibawa tiap muatan",
              "Kecepatan elektronnya",
              "Warna kemasannya",
            ],
            answer: 1,
            explain: "Tegangan lebih tinggi berarti energi per muatan lebih besar.",
          },
          {
            q: "Apakah tegangan bisa ada tanpa arus mengalir?",
            options: [
              "Tidak pernah bisa",
              "Bisa, contohnya baterai yang belum disambung",
              "Hanya pada arus searah",
              "Hanya jika ada hambatan",
            ],
            answer: 1,
            explain: "Baterai punya beda potensial walau belum ada arus yang mengalir.",
          },
          {
            q: "GGL sebuah sumber paling tepat diartikan sebagai?",
            options: [
              "Arus maksimum sumber",
              "Dorongan total sumber sebelum ada arus",
              "Hambatan dalam sumber",
              "Daya keluaran sumber",
            ],
            answer: 1,
            explain: "GGL adalah dorongan (tegangan) total sumber sebelum arus mengalir.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hambatan-dan-hambatan-jenis",
    levelId: "arus-hukum-ohm",
    order: 3,
    title: "Hambatan dan Hambatan Jenis",
    summary:
      "Kenapa kabel listrik tebal dan pendek, sedangkan elemen pemanas tipis dan panjang? Dari bentuk kawat, kita temukan rumus hambatan.",
    durationMin: 14,
    tags: ["fisika", "listrik", "hambatan", "hambatan-jenis", "kawat"],
    blocks: [
      {
        type: "paragraph",
        html: "Perhatikan kabel pengisi HP: tembaganya tebal dan sependek mungkin. Lalu lihat elemen pemanas di dalam setrika: kawatnya tipis, panjang, dan berkelok. Kenapa berbeda? Karena bentuk kawat menentukan <strong>hambatannya</strong>. Mari amati apa yang membuat sebuah kawat menahan arus, baru rumusnya kita susun di akhir.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Ohm dan Sifat Bahan",
        caption: "Hambatan bergantung pada bahan, panjang, dan luas penampang kawat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan orang berdesakan lewat lorong. Lorong <strong>panjang</strong> membuat mereka makin susah lewat: hambatan naik. Lorong <strong>lebar</strong> membuat lebih banyak orang lewat sekaligus: hambatan turun. Dan jenis lantai juga penting: lantai licin (tembaga) memudahkan, lantai kasar (nikrom) menyusahkan. Tiga hal inilah, yaitu panjang, luas penampang, dan bahan, yang menentukan hambatan. Belum ada rumus, baru pengamatan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Hambatan jenis (ρ)",
        html: "<strong>Hambatan jenis (ρ, dibaca rho)</strong> adalah sifat bawaan bahan, seberapa kuat ia menahan arus per satuan bentuk. Tembaga punya ρ sangat kecil sehingga jadi kabel; nikrom punya ρ besar sehingga jadi elemen pemanas. Satuannya ohm-meter (Ω·m).",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Hambatan Jenis Beberapa Bahan (×10⁻⁸ Ω·m)",
        unit: "×10⁻⁸ Ω·m",
        source: "tabel fisika standar",
        note: "Tembaga dan perak menghantar sangat baik (ρ kecil); nikrom menahan kuat (ρ besar) sehingga dipakai sebagai pemanas. Angka ini nyata dari tabel bahan.",
        data: [
          { label: "Perak", value: 1.6, color: "#a3e635" },
          { label: "Tembaga", value: 1.7, color: "#4ade80" },
          { label: "Aluminium", value: 2.8, color: "#34d399" },
          { label: "Nikrom", value: 110, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kawat punya hambatan jenis 2 ×10⁻⁶ Ω·m, panjang 4 m, dan luas penampang 2 ×10⁻⁶ m². Berapa hambatannya? (gunakan R = ρL/A)",
        answer: 4,
        tolerance: 0.01,
        suffix: " Ω",
        solution:
          "R = ρL/A = (2×10⁻⁶ × 4) ÷ (2×10⁻⁶) = (8×10⁻⁶) ÷ (2×10⁻⁶) = <strong>4 ohm</strong>. Panjang menaikkan, luas penampang menurunkan.",
        hint: "Kalikan ρ dengan panjang, lalu bagi dengan luas penampang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kawat berhambatan 6 Ω dipotong sehingga panjangnya menjadi dua kali lipat dengan bahan dan penampang sama. Berapa hambatan kawat yang baru?",
        answer: 12,
        tolerance: 0.01,
        suffix: " Ω",
        solution:
          "Hambatan berbanding lurus dengan panjang. Panjang dua kali lipat berarti hambatan dua kali lipat: 6 Ω × 2 = <strong>12 ohm</strong>.",
        hint: "Pada R = ρL/A, jika hanya L yang berubah, R ikut sebanding.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap perubahan: menaikkan atau menurunkan hambatan kawat.",
        buckets: ["Menaikkan hambatan", "Menurunkan hambatan"],
        items: [
          { text: "Kawat dibuat lebih panjang", bucket: "Menaikkan hambatan" },
          { text: "Penampang kawat diperbesar", bucket: "Menurunkan hambatan" },
          { text: "Diganti bahan dengan ρ lebih besar", bucket: "Menaikkan hambatan" },
          { text: "Diganti tembaga menggantikan nikrom", bucket: "Menurunkan hambatan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Elemen Pemanas Dibuat dari Nikrom",
        html: "Elemen setrika, oven, dan pemanas air memakai kawat <strong>nikrom</strong>, bukan tembaga. Hambatan jenis nikrom sekitar 60 kali tembaga, sehingga hambatannya besar. Hambatan besar inilah yang membuatnya cepat panas saat dialiri arus, persis yang kita inginkan untuk pemanas. Sebaliknya, kabel listrik dibuat dari tembaga ber-ρ kecil agar tidak boros panas dan tidak rugi energi di sepanjang jalan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Dari pengamatan lorong tadi, kita rangkum. Hambatan sebuah kawat: <strong>R = ρ L / A</strong>, dengan ρ hambatan jenis bahan (Ω·m), L panjang kawat (m), dan A luas penampang (m²). Makin panjang makin besar hambatan, makin lebar penampang makin kecil hambatan. Rumus ini lahir dari logika 'lorong panjang dan sempit menyusahkan', bukan dari hafalan.",
      },
      {
        type: "takeaways",
        items: [
          "Hambatan kawat: R = ρ L / A (hambatan jenis kali panjang dibagi luas penampang).",
          "Hambatan jenis (ρ) adalah sifat bawaan bahan, satuannya ohm-meter.",
          "Kawat lebih panjang menaikkan hambatan; penampang lebih lebar menurunkannya.",
          "Tembaga (ρ kecil) untuk kabel; nikrom (ρ besar) untuk elemen pemanas.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus hambatan kawat adalah?",
            options: ["R = ρ A / L", "R = ρ L / A", "R = L A / ρ", "R = ρ + L + A"],
            answer: 1,
            explain: "R = ρL/A: hambatan jenis kali panjang dibagi luas penampang.",
          },
          {
            q: "Jika luas penampang kawat diperbesar (panjang dan bahan tetap), hambatannya?",
            options: ["Bertambah", "Berkurang", "Tetap", "Menjadi nol"],
            answer: 1,
            explain: "A ada di penyebut, jadi memperbesar A mengecilkan R.",
          },
          {
            q: "Satuan hambatan jenis (ρ) adalah?",
            options: ["ohm", "ohm-meter", "meter", "ohm per meter"],
            answer: 1,
            explain: "Hambatan jenis diukur dalam ohm-meter (Ω·m).",
          },
          {
            q: "Mengapa elemen pemanas memakai nikrom, bukan tembaga?",
            options: [
              "Karena nikrom lebih murah",
              "Karena ρ nikrom besar sehingga cepat panas",
              "Karena nikrom tidak menghantar listrik",
              "Karena nikrom lebih ringan",
            ],
            answer: 1,
            explain: "Hambatan jenis nikrom besar, sehingga hambatannya besar dan cepat memanas.",
          },
          {
            q: "Kawat berhambatan 5 Ω dijadikan tiga kali lebih panjang (bahan dan penampang tetap). Hambatannya jadi?",
            options: ["5 Ω", "15 Ω", "1,67 Ω", "8 Ω"],
            answer: 1,
            explain: "R sebanding L, jadi 5 × 3 = 15 ohm.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-ohm",
    levelId: "arus-hukum-ohm",
    order: 4,
    title: "Hukum Ohm",
    summary:
      "Kita tidak akan menghafal V = IR. Kita akan menemukannya sendiri dari pola sederhana: makin besar dorongan, makin deras arusnya.",
    durationMin: 14,
    tags: ["fisika", "listrik", "hukum-ohm", "tegangan", "arus"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat kamu memutar tombol dimmer lampu, cahayanya meredup lalu menyala terang lagi. Apa yang berubah? Kamu sedang mengubah <strong>hambatan</strong>, dan itu mengubah <strong>arus</strong> yang lewat. Tapi adakah pola pasti antara tegangan, arus, dan hambatan? Mari kita ukur dan amati dulu, baru rumusnya akan muncul dengan sendirinya.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Menemukan Hukum Ohm",
        caption: "Saat tegangan dinaikkan pada hambatan tetap, arus naik secara lurus.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil sebuah hambatan tetap, misalnya 10 ohm. Beri tegangan 2 V, ukur arusnya: 0,2 A. Naikkan ke 4 V, arusnya jadi 0,4 A. Naikkan lagi ke 6 V, arusnya 0,6 A. Lihat polanya? Setiap kali tegangan dilipatkan, arus ikut terlipat dengan kelipatan sama. Belum ada rumus, hanya pola yang kita amati lewat pengukuran.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "line",
        title: "Arus vs Tegangan pada Hambatan Tetap 10 Ω",
        unit: "ampere",
        source: "pengukuran ilustratif",
        note: "Titik-titik membentuk garis lurus yang melewati nol. Garis lurus inilah tanda khas Hukum Ohm: arus berbanding lurus dengan tegangan.",
        data: [
          { label: "2 V", value: 0.2, color: "#a3e635" },
          { label: "4 V", value: 0.4, color: "#4ade80" },
          { label: "6 V", value: 0.6, color: "#34d399" },
          { label: "8 V", value: 0.8, color: "#22d3ee" },
          { label: "10 V", value: 1.0, color: "#38bdf8" },
        ],
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah hambatan 12 ohm dialiri arus 0,5 ampere. Berapa beda tegangan di ujung-ujungnya?",
        answer: 6,
        tolerance: 0.01,
        suffix: " V",
        solution:
          "Dari pola tadi, tegangan = arus kali hambatan: 0,5 A × 12 Ω = <strong>6 volt</strong>. Inilah pola yang kita temukan, bukan yang kita hafal.",
        hint: "Kalikan arus dengan hambatan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lampu dialiri arus 0,3 ampere ketika diberi tegangan 9 volt. Berapa hambatan lampu itu?",
        answer: 30,
        tolerance: 0.1,
        suffix: " Ω",
        solution:
          "Hambatan = tegangan dibagi arus: 9 V ÷ 0,3 A = <strong>30 ohm</strong>. Pola yang sama dapat disusun ulang untuk mencari besaran mana pun.",
        hint: "Bagi tegangan dengan arus.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan komponen sebagai ohmik (mengikuti garis lurus) atau non-ohmik.",
        buckets: ["Ohmik", "Non-ohmik"],
        items: [
          { text: "Kawat logam pada suhu tetap", bucket: "Ohmik" },
          { text: "Resistor karbon biasa", bucket: "Ohmik" },
          { text: "Dioda (LED)", bucket: "Non-ohmik" },
          { text: "Lampu pijar yang memanas", bucket: "Non-ohmik" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Kabel Tipis Cepat Panas",
        html: "Charger murah kadang memakai kawat yang sangat tipis. Kawat tipis punya <strong>hambatan besar</strong>. Saat arus melewatinya, beda tegangan di sepanjang kawat menjadi besar, dan energi terbuang sebagai panas. Itulah sebabnya kabel berkualitas rendah cepat hangat bahkan meleleh. Dengan pola yang baru kita temukan, gejala ini bisa diprediksi: hambatan tinggi pada arus tertentu berarti tegangan jatuh yang besar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Pola garis lurus tadi punya nama: <strong>Hukum Ohm</strong>. Tegangan sama dengan arus kali hambatan: <strong>V = I × R</strong>. Dari sini, arus I = V / R dan hambatan R = V / I. Georg Ohm menemukannya bukan dengan menghafal, melainkan dengan mengukur pola, persis seperti yang baru kita lakukan.",
      },
      {
        type: "takeaways",
        items: [
          "Pada hambatan tetap, arus berbanding lurus dengan tegangan (grafik garis lurus).",
          "Hukum Ohm merangkum pola itu: V = I × R.",
          "Rumus bisa disusun ulang: I = V / R dan R = V / I.",
          "Komponen ohmik mengikuti garis lurus; dioda dan lampu pijar bersifat non-ohmik.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Ohm menyatakan hubungan?",
            options: ["V = I + R", "V = I × R", "V = I / R", "V = R / I"],
            answer: 1,
            explain: "Tegangan sama dengan arus dikali hambatan: V = I × R.",
          },
          {
            q: "Grafik arus terhadap tegangan untuk resistor ohmik berbentuk?",
            options: ["Garis lurus lewat titik nol", "Parabola", "Lingkaran", "Garis mendatar"],
            answer: 0,
            explain: "Arus berbanding lurus dengan tegangan, jadi garis lurus melewati nol.",
          },
          {
            q: "Tegangan 12 V pada hambatan 4 ohm menghasilkan arus?",
            options: ["48 A", "3 A", "0,33 A", "16 A"],
            answer: 1,
            explain: "I = V/R = 12/4 = 3 ampere.",
          },
          {
            q: "Jika hambatan diperbesar sementara tegangan tetap, arus akan?",
            options: ["Membesar", "Mengecil", "Tetap", "Menjadi nol"],
            answer: 1,
            explain: "I = V/R, jadi memperbesar R mengecilkan arus.",
          },
          {
            q: "Komponen berikut yang non-ohmik adalah?",
            options: ["Resistor karbon", "Kawat tembaga", "Dioda LED", "Hambatan geser"],
            answer: 2,
            explain: "Dioda tidak mengikuti garis lurus, jadi non-ohmik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "konduktor-dan-isolator",
    levelId: "arus-hukum-ohm",
    order: 5,
    title: "Konduktor dan Isolator",
    summary:
      "Kenapa kabel dibungkus plastik tapi intinya tembaga? Dari elektron yang bebas atau terikat, kita pahami siapa yang menghantar dan siapa yang menahan.",
    durationMin: 12,
    tags: ["fisika", "listrik", "konduktor", "isolator", "bahan"],
    blocks: [
      {
        type: "paragraph",
        html: "Lihat kabel listrik di rumahmu: bagian dalamnya logam mengkilap, bagian luarnya plastik lentur. Bukan kebetulan. Logam di dalam adalah <strong>konduktor</strong> yang menghantar arus, dan plastik di luar adalah <strong>isolator</strong> yang menahannya agar tidak menyetrum kita. Sebelum membuat aturan, ayo amati dulu apa yang membedakan keduanya di tingkat elektron.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Bahan dan Hantaran Listrik",
        caption: "Konduktor punya elektron bebas; isolator mengikat elektronnya erat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua ruangan. Di ruang <strong>konduktor</strong>, banyak orang bebas berlari ke mana saja, jadi pesan cepat sampai dari ujung ke ujung. Di ruang <strong>isolator</strong>, semua orang terikat di kursinya, jadi pesan macet. Begitulah elektron: di logam mereka bebas bergerak (arus mengalir mudah), di karet dan plastik mereka terikat erat (arus tertahan). Belum ada aturan, baru gambaran.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Di antara keduanya: semikonduktor",
        html: "<strong>Konduktor</strong> (tembaga, perak, besi) punya hambatan jenis sangat kecil. <strong>Isolator</strong> (karet, plastik, kaca, kayu kering) punya hambatan jenis sangat besar. Di tengahnya ada <strong>semikonduktor</strong> seperti silikon, yang bisa diatur menghantar atau menahan, dan menjadi dasar semua chip elektronik.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Hambatan Jenis: Konduktor vs Isolator (skala pangkat 10)",
        unit: "pangkat dari 10 (Ω·m)",
        source: "tabel fisika standar",
        note: "Angka pada batang adalah pangkat 10 dari hambatan jenis. Tembaga sekitar 10⁻⁸ Ω·m, karet sekitar 10¹³ Ω·m. Selisihnya lebih dari 20 pangkat sepuluh, sungguh nyata.",
        data: [
          { label: "Tembaga", value: -8, color: "#a3e635" },
          { label: "Silikon", value: 3, color: "#fbbf24" },
          { label: "Kaca", value: 11, color: "#fb923c" },
          { label: "Karet", value: 13, color: "#f87171" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap bahan sebagai konduktor atau isolator.",
        buckets: ["Konduktor", "Isolator"],
        items: [
          { text: "Tembaga", bucket: "Konduktor" },
          { text: "Karet", bucket: "Isolator" },
          { text: "Aluminium", bucket: "Konduktor" },
          { text: "Kaca", bucket: "Isolator" },
          { text: "Besi", bucket: "Konduktor" },
          { text: "Plastik", bucket: "Isolator" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap bahan dengan peran khasnya pada peralatan listrik.",
        pairs: [
          { left: "Inti kabel", right: "tembaga (konduktor)" },
          { left: "Pembungkus kabel", right: "plastik (isolator)" },
          { left: "Pegangan obeng listrik", right: "karet (isolator)" },
          { left: "Chip prosesor", right: "silikon (semikonduktor)" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sepotong tembaga (ρ = 1,7 ×10⁻⁸ Ω·m) panjang 2 m, penampang 1 ×10⁻⁶ m². Berapa kira-kira hambatannya dalam ohm? (R = ρL/A)",
        answer: 0.034,
        tolerance: 0.005,
        suffix: " Ω",
        solution:
          "R = ρL/A = (1,7×10⁻⁸ × 2) ÷ (1×10⁻⁶) = (3,4×10⁻⁸) ÷ (1×10⁻⁶) = <strong>0,034 ohm</strong>. Sangat kecil, itulah ciri konduktor yang baik.",
        hint: "Hitung ρ × L lalu bagi dengan A; hasilnya akan sangat kecil.",
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Tukang Listrik Memakai Sarung Tangan Karet",
        html: "Saat memperbaiki instalasi bertegangan, teknisi memakai sarung tangan dan alas kaki dari <strong>karet</strong>. Karet adalah isolator dengan hambatan jenis luar biasa besar, sehingga nyaris tidak ada arus yang bisa lewat tubuh ke tanah. Prinsipnya sama dengan pembungkus kabel: meletakkan isolator di jalur yang tidak boleh dilewati arus. Memahami konduktor dan isolator bukan teori belaka, tapi penyelamat nyawa.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Aturannya kita rangkum dari gambaran elektron tadi. <strong>Konduktor</strong> = banyak elektron bebas, hambatan jenis ρ sangat kecil, arus mengalir mudah. <strong>Isolator</strong> = elektron terikat erat, ρ sangat besar, arus nyaris tertahan. Hubungannya kembali ke R = ρL/A: ρ kecil berarti R kecil (menghantar), ρ besar berarti R besar (menahan). Tidak ada yang perlu dihafal buta, semuanya mengalir dari sifat elektron.",
      },
      {
        type: "takeaways",
        items: [
          "Konduktor punya elektron bebas dan hambatan jenis sangat kecil; arus mengalir mudah.",
          "Isolator mengikat elektronnya erat dan punya hambatan jenis sangat besar; arus tertahan.",
          "Semikonduktor (silikon) berada di antara keduanya dan menjadi dasar chip elektronik.",
          "Kabel memadukan konduktor (inti tembaga) dan isolator (pembungkus plastik) demi keamanan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang membuat logam menjadi konduktor yang baik?",
            options: [
              "Warnanya mengkilap",
              "Banyak elektron bebas bergerak",
              "Massanya berat",
              "Permukaannya keras",
            ],
            answer: 1,
            explain: "Konduktor punya banyak elektron bebas, sehingga arus mudah mengalir.",
          },
          {
            q: "Bahan berikut yang merupakan isolator adalah?",
            options: ["Tembaga", "Aluminium", "Karet", "Besi"],
            answer: 2,
            explain: "Karet mengikat elektronnya erat, jadi isolator.",
          },
          {
            q: "Hambatan jenis isolator dibanding konduktor adalah?",
            options: ["Jauh lebih kecil", "Sama saja", "Jauh lebih besar", "Selalu nol"],
            answer: 2,
            explain: "Isolator punya ρ jauh lebih besar, sehingga menahan arus.",
          },
          {
            q: "Bahan yang menjadi dasar chip elektronik dan berada di antara konduktor dan isolator adalah?",
            options: ["Karet", "Silikon (semikonduktor)", "Perak", "Kaca"],
            answer: 1,
            explain: "Silikon adalah semikonduktor, dasar dari chip dan prosesor.",
          },
          {
            q: "Mengapa pembungkus kabel terbuat dari plastik?",
            options: [
              "Agar kabel lebih berat",
              "Karena plastik isolator yang menahan arus bocor",
              "Agar arus mengalir lebih cepat",
              "Karena plastik menghantar listrik",
            ],
            answer: 1,
            explain: "Plastik isolator mencegah arus bocor dan melindungi pengguna.",
          },
        ],
      },
    ],
  },
];
