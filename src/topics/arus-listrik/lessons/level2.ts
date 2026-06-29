import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "rangkaian-seri-dan-paralel",
    levelId: "rangkaian-hambatan",
    order: 1,
    title: "Rangkaian Seri dan Paralel",
    summary:
      "Lampu Natal yang mati semua versus lampu rumah yang mandiri. Dari dua kisah ini, aturan menjumlahkan hambatan akan kita temukan sendiri.",
    durationMin: 15,
    tags: ["fisika", "listrik", "rangkaian", "seri", "paralel"],
    blocks: [
      {
        type: "paragraph",
        html: "Pernah lihat lampu hias Natal? Kalau satu mati, kadang seluruh untaian ikut padam. Tapi di rumahmu, mematikan lampu kamar tidak mematikan lampu dapur. Dua perilaku berbeda ini berasal dari dua cara menyusun rangkaian: <strong>seri</strong> dan <strong>paralel</strong>. Mari amati keduanya dulu sebelum rumus penjumlahan hambatannya muncul.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Arus dalam Seri dan Paralel",
        caption: "Cara komponen disusun menentukan bagaimana arus dan hambatan berbagi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pada rangkaian <strong>seri</strong>, komponen berbaris satu jalur, seperti gerbong kereta. Arus hanya punya satu jalan, jadi jika satu lampu putus, jalur terputus dan semua padam. Pada rangkaian <strong>paralel</strong>, tiap komponen punya jalur sendiri, seperti banyak pintu keluar. Satu lampu mati tidak mengganggu yang lain. Amati: di seri hambatan bertambah, di paralel justru jalur makin lega.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Hambatan Total Dua Resistor 6 Ω dan 3 Ω",
        unit: "ohm",
        source: "perhitungan ilustratif",
        note: "Disusun seri, hambatan dijumlahkan menjadi 9 Ω. Disusun paralel, hambatan total justru lebih kecil dari resistor terkecil, hanya 2 Ω.",
        data: [
          { label: "Seri (6+3)", value: 9, color: "#f87171" },
          { label: "Paralel (6,3)", value: 2, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dua resistor 6 ohm dan 3 ohm disusun seri. Berapa hambatan totalnya?",
        answer: 9,
        tolerance: 0.01,
        suffix: " Ω",
        solution:
          "Pada seri, arus melewati keduanya berurutan, jadi hambatan tinggal dijumlahkan: 6 Ω + 3 Ω = <strong>9 ohm</strong>. Makin banyak gerbong, makin panjang jalannya.",
        hint: "Pada seri, jumlahkan saja semua hambatan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua resistor 6 ohm dan 3 ohm disusun paralel. Berapa hambatan totalnya?",
        answer: 2,
        tolerance: 0.05,
        suffix: " Ω",
        solution:
          "Pada paralel, 1/Rtotal = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2, jadi Rtotal = <strong>2 ohm</strong>. Menambah jalur membuat aliran makin lega, sehingga hambatan total mengecil.",
        hint: "Jumlahkan kebalikannya: 1/Rtotal = 1/R1 + 1/R2, lalu balik hasilnya.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap ciri ke jenis rangkaian yang tepat.",
        buckets: ["Rangkaian seri", "Rangkaian paralel"],
        items: [
          { text: "Arus sama di setiap komponen", bucket: "Rangkaian seri" },
          { text: "Tegangan sama di setiap cabang", bucket: "Rangkaian paralel" },
          { text: "Satu putus, semua padam", bucket: "Rangkaian seri" },
          { text: "Hambatan total lebih kecil dari yang terkecil", bucket: "Rangkaian paralel" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Instalasi Rumah Memakai Paralel",
        html: "Stop kontak dan lampu di rumah disusun <strong>paralel</strong>. Alasannya jelas dari pengamatan kita: setiap alat mendapat tegangan penuh 220 V yang sama, dan mematikan satu alat tidak memadamkan yang lain. Seandainya rumah disusun seri seperti lampu Natal murah, satu lampu putus akan memadamkan seluruh rumah, dan tiap alat hanya kebagian sebagian tegangan. Susunan paralel menyelesaikan kedua masalah itu sekaligus.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Dari pengamatan tadi, aturannya kita rangkum. <strong>Seri:</strong> Rtotal = R1 + R2 + ... (hambatan dijumlahkan, arus sama di semua bagian). <strong>Paralel:</strong> 1/Rtotal = 1/R1 + 1/R2 + ... (kebalikannya dijumlahkan, tegangan sama di tiap cabang). Rumus ini lahir dari logika 'satu jalur' versus 'banyak jalur', bukan dari hafalan.",
      },
      {
        type: "takeaways",
        items: [
          "Seri: satu jalur arus; Rtotal = R1 + R2 + ... dan arus sama di semua komponen.",
          "Paralel: banyak jalur; 1/Rtotal = 1/R1 + 1/R2 + ... dan tegangan sama di tiap cabang.",
          "Hambatan total paralel selalu lebih kecil dari hambatan terkecilnya.",
          "Instalasi rumah memakai paralel agar tiap alat mandiri dan bertegangan penuh.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada rangkaian seri, hambatan total dihitung dengan?",
            options: ["Rtotal = R1 + R2", "1/Rtotal = 1/R1 + 1/R2", "Rtotal = R1 × R2", "Rtotal = R1 - R2"],
            answer: 0,
            explain: "Pada seri, hambatan tinggal dijumlahkan.",
          },
          {
            q: "Dua resistor 4 ohm dan 4 ohm disusun paralel. Hambatan totalnya?",
            options: ["8 Ω", "4 Ω", "2 Ω", "16 Ω"],
            answer: 2,
            explain: "1/Rtotal = 1/4 + 1/4 = 1/2, jadi Rtotal = 2 Ω.",
          },
          {
            q: "Pada rangkaian paralel, besaran yang sama di tiap cabang adalah?",
            options: ["Arus", "Tegangan", "Hambatan", "Daya"],
            answer: 1,
            explain: "Tiap cabang paralel mendapat tegangan yang sama.",
          },
          {
            q: "Mengapa lampu Natal seri bisa padam semua saat satu putus?",
            options: [
              "Karena tegangannya habis",
              "Karena hanya ada satu jalur arus yang terputus",
              "Karena hambatannya nol",
              "Karena arusnya terbalik",
            ],
            answer: 1,
            explain: "Seri hanya punya satu jalur; jika putus, arus berhenti total.",
          },
          {
            q: "Hambatan total rangkaian paralel selalu?",
            options: [
              "Lebih besar dari yang terbesar",
              "Sama dengan jumlah semuanya",
              "Lebih kecil dari yang terkecil",
              "Selalu nol",
            ],
            answer: 2,
            explain: "Menambah jalur memperlega aliran, sehingga Rtotal mengecil.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kombinasi-seri-paralel",
    levelId: "rangkaian-hambatan",
    order: 2,
    title: "Kombinasi Seri-Paralel",
    summary:
      "Rangkaian nyata jarang murni seri atau paralel. Seperti menelusuri jalan tol bercabang, kita urai bagian demi bagian sampai sederhana.",
    durationMin: 15,
    tags: ["fisika", "listrik", "rangkaian", "kombinasi", "hambatan"],
    blocks: [
      {
        type: "paragraph",
        html: "Buka tutup belakang remote atau senter, lalu lihat papan rangkaian apa pun: jalurnya berkelok, bercabang, lalu menyatu lagi. Tidak ada yang murni seri atau murni paralel. Kabar baiknya, rangkaian rumit mana pun bisa diurai jadi potongan seri dan paralel sederhana. Mari kita amati cara menguraikannya dulu, baru rumus gabungannya menyusul.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Menyederhanakan Rangkaian Bertingkat",
        caption: "Rangkaian campuran diselesaikan dengan menyederhanakan blok demi blok.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan jalan tol: dua jalur sejajar (paralel) lalu menyatu jadi satu ruas panjang (seri). Untuk tahu total 'hambatan perjalanan', kita tidak hitung sekaligus. Kita gabungkan dulu dua jalur sejajar menjadi satu hambatan pengganti, lalu jumlahkan dengan ruas berikutnya yang seri. <strong>Sederhanakan dari dalam ke luar</strong>, sepotong demi sepotong. Belum ada rumus tunggal, hanya strategi mengurai.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Langkah baku menyederhanakan",
        html: "1) Cari kelompok resistor yang jelas <strong>paralel</strong>, ganti dengan satu hambatan pengganti. 2) Cari yang jelas <strong>seri</strong>, jumlahkan. 3) Ulangi sampai tersisa satu hambatan total. Selalu kerjakan blok terdalam lebih dulu.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Menyederhanakan: 4 Ω seri dengan (paralel 6 Ω & 3 Ω)",
        unit: "ohm",
        source: "perhitungan langkah demi langkah",
        note: "Paralel 6 Ω dan 3 Ω menjadi 2 Ω, lalu seri dengan 4 Ω menjadi total 6 Ω. Tiga batang ini menunjukkan satu rangkaian menciut jadi satu nilai.",
        data: [
          { label: "Paralel 6&3", value: 2, color: "#34d399" },
          { label: "Resistor seri", value: 4, color: "#22d3ee" },
          { label: "Total akhir", value: 6, color: "#a3e635" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Resistor 6 Ω dan 3 Ω paralel, lalu hasilnya dirangkai seri dengan 4 Ω. Berapa hambatan totalnya?",
        answer: 6,
        tolerance: 0.05,
        suffix: " Ω",
        solution:
          "Paralel dulu: 1/Rp = 1/6 + 1/3 = 1/2, jadi Rp = 2 Ω. Lalu seri: 2 Ω + 4 Ω = <strong>6 ohm</strong>. Sederhanakan dari dalam ke luar.",
        hint: "Hitung paralelnya dulu, baru jumlahkan dengan yang seri.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua resistor 10 Ω paralel, lalu hasilnya seri dengan 2 Ω. Berapa hambatan totalnya?",
        answer: 7,
        tolerance: 0.05,
        suffix: " Ω",
        solution:
          "Paralel dua 10 Ω yang sama: 10 ÷ 2 = 5 Ω. Lalu seri: 5 Ω + 2 Ω = <strong>7 ohm</strong>. Untuk dua resistor sama, paralelnya tinggal dibagi dua.",
        hint: "Dua resistor sama yang paralel = nilainya dibagi dua, lalu tambah yang seri.",
      },
      {
        type: "classifyExercise",
        prompt: "Saat menyederhanakan rangkaian campuran, kelompokkan langkah ini benar atau keliru.",
        buckets: ["Langkah benar", "Langkah keliru"],
        items: [
          { text: "Sederhanakan blok terdalam lebih dulu", bucket: "Langkah benar" },
          { text: "Jumlahkan langsung semua resistor tanpa melihat susunan", bucket: "Langkah keliru" },
          { text: "Ganti kelompok paralel dengan satu hambatan pengganti", bucket: "Langkah benar" },
          { text: "Anggap semua rangkaian pasti seri", bucket: "Langkah keliru" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Rangkaian Lampu Mobil",
        html: "Sistem lampu mobil memadukan seri dan paralel. Lampu-lampu utama dipasang <strong>paralel</strong> agar masing-masing mendapat tegangan aki penuh dan tetap menyala jika satu putus. Namun saklar, sekring, dan kabel penghubung berada <strong>seri</strong> dengan kelompok lampu itu. Untuk menghitung arus total dari aki, montir menyederhanakan blok paralel lampu dulu, lalu menambahkannya seri dengan hambatan kabel dan sekring. Persis strategi 'dalam ke luar' yang kita pelajari.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Tidak ada rumus baru, yang ada adalah <strong>strategi memakai dua rumus lama berulang</strong>. Untuk blok paralel: 1/Rp = 1/R1 + 1/R2 + ... Untuk blok seri: Rs = R1 + R2 + ... Sederhanakan blok terdalam lebih dulu, ganti dengan hambatan penggantinya, lalu ulangi sampai tersisa satu Rtotal. Setelah Rtotal didapat, arus dari sumber: I = V / Rtotal.",
      },
      {
        type: "takeaways",
        items: [
          "Rangkaian campuran diselesaikan dengan menyederhanakan blok demi blok, dari dalam ke luar.",
          "Ganti tiap kelompok paralel dengan satu hambatan pengganti sebelum menjumlahkan yang seri.",
          "Dua resistor sama yang diparalel bernilai setengah dari satu resistor.",
          "Setelah dapat Rtotal, arus sumber dihitung dengan I = V / Rtotal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Langkah pertama menyederhanakan rangkaian campuran sebaiknya?",
            options: [
              "Menjumlahkan semua resistor sekaligus",
              "Menyederhanakan blok terdalam (seri/paralel jelas) lebih dulu",
              "Mengabaikan resistor paralel",
              "Mengalikan semua nilai resistor",
            ],
            answer: 1,
            explain: "Selalu sederhanakan blok terdalam lebih dulu, dari dalam ke luar.",
          },
          {
            q: "Resistor 12 Ω dan 4 Ω paralel menghasilkan hambatan pengganti?",
            options: ["16 Ω", "3 Ω", "8 Ω", "48 Ω"],
            answer: 1,
            explain: "1/Rp = 1/12 + 1/4 = 1/12 + 3/12 = 4/12 = 1/3, jadi Rp = 3 Ω.",
          },
          {
            q: "Hasil paralel 3 Ω lalu diseri dengan 5 Ω menjadi?",
            options: ["8 Ω", "1,875 Ω", "15 Ω", "2 Ω"],
            answer: 0,
            explain: "Seri tinggal dijumlahkan: 3 + 5 = 8 Ω.",
          },
          {
            q: "Dua resistor 8 Ω yang identik diparalel bernilai?",
            options: ["16 Ω", "8 Ω", "4 Ω", "2 Ω"],
            answer: 2,
            explain: "Dua resistor sama yang diparalel = nilainya dibagi dua = 4 Ω.",
          },
          {
            q: "Setelah Rtotal didapat, arus dari sumber dihitung dengan?",
            options: ["I = V × Rtotal", "I = V / Rtotal", "I = Rtotal / V", "I = V + Rtotal"],
            answer: 1,
            explain: "Hukum Ohm: I = V / Rtotal.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hambatan-pengganti",
    levelId: "rangkaian-hambatan",
    order: 3,
    title: "Hambatan Pengganti",
    summary:
      "Banyak resistor bisa diganti satu resistor tunggal yang 'rasa'-nya sama bagi sumber. Dari sudut pandang baterai, kita pahami maknanya.",
    durationMin: 14,
    tags: ["fisika", "listrik", "hambatan-pengganti", "rangkaian", "ohm"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu seorang baterai. Kamu tidak bisa melihat ada berapa resistor di depanmu, kamu hanya merasakan satu hal: seberapa deras arus mengalir keluar darimu. Itu berarti susunan resistor serumit apa pun, bagimu, terasa seperti <strong>satu resistor tunggal</strong>. Itulah <strong>hambatan pengganti</strong>. Mari rasakan idenya dulu dari sudut pandang sumber, baru rumusnya kita tegaskan.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Satu Resistor yang Mewakili Semua",
        caption: "Hambatan pengganti adalah nilai tunggal yang menghasilkan arus total yang sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pasang baterai 12 V pada sebuah kotak hitam berisi banyak resistor. Kamu ukur arus keluarnya 3 A. Tanpa membuka kotak, kamu sudah bisa bilang: 'Bagi saya, isi kotak ini sama saja dengan satu resistor 4 Ω', karena 12 V ÷ 3 A = 4 Ω. Itulah <strong>hambatan pengganti</strong>: nilai tunggal yang menggantikan seluruh isi tanpa mengubah arus yang dirasakan sumber. Belum rumus formal, baru cara pandang.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa berguna",
        html: "Hambatan pengganti (Rp atau Rtotal) menyederhanakan analisis: begitu kita tahu nilainya, arus total langsung didapat dengan I = V / Rp. Untuk seri, Rp selalu lebih besar dari resistor mana pun; untuk paralel, Rp selalu lebih kecil dari resistor terkecil.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tiga Resistor 2 Ω: Pengganti Seri vs Paralel",
        unit: "ohm",
        source: "perhitungan ilustratif",
        note: "Tiga resistor 2 Ω: jika seri jadi 6 Ω (jauh lebih besar), jika paralel jadi 0,67 Ω (lebih kecil dari satu resistor). Susunan menentukan segalanya.",
        data: [
          { label: "Satu resistor", value: 2, color: "#22d3ee" },
          { label: "Seri (×3)", value: 6, color: "#f87171" },
          { label: "Paralel (÷3)", value: 0.67, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kotak resistor diberi tegangan 12 V dan mengalirkan arus 3 A. Berapa hambatan penggantinya?",
        answer: 4,
        tolerance: 0.05,
        suffix: " Ω",
        solution:
          "Dari sudut pandang sumber, Rpengganti = V / I = 12 V ÷ 3 A = <strong>4 ohm</strong>. Tidak peduli isi kotaknya, sumber hanya merasakan nilai tunggal ini.",
        hint: "Pakai Hukum Ohm dari sisi sumber: R = V / I.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tiga resistor identik 9 Ω disusun paralel. Berapa hambatan penggantinya?",
        answer: 3,
        tolerance: 0.05,
        suffix: " Ω",
        solution:
          "Untuk n resistor identik R yang diparalel, Rp = R / n = 9 ÷ 3 = <strong>3 ohm</strong>. Selalu lebih kecil dari satu resistornya.",
        hint: "n resistor sama yang paralel = nilainya dibagi n.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap susunan resistor identik R dengan hambatan penggantinya.",
        pairs: [
          { left: "Dua R seri", right: "2R" },
          { left: "Dua R paralel", right: "R/2" },
          { left: "Tiga R seri", right: "3R" },
          { left: "Tiga R paralel", right: "R/3" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengukur Hambatan Pengganti dengan Multimeter",
        html: "Saat teknisi ingin tahu hambatan total sebuah modul tanpa membongkarnya, ia cukup menempelkan dua probe multimeter pada dua titik terminal. Multimeter mengalirkan arus kecil yang diketahui dan mengukur tegangannya, lalu menampilkan <strong>hambatan pengganti</strong> di layar dengan prinsip R = V / I. Inilah bukti nyata bahwa rangkaian rumit benar-benar bisa diwakili satu angka, persis seperti yang baterai 'rasakan'.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang kita tegaskan. <strong>Hambatan pengganti</strong> adalah satu nilai R yang, jika menggantikan seluruh susunan, memberi arus total yang sama bagi sumber: <strong>Rpengganti = V / I</strong>. Cara menghitungnya tetap memakai aturan lama: seri Rp = R1 + R2 + ..., paralel 1/Rp = 1/R1 + 1/R2 + ... Maknanya yang baru: rangkaian apa pun setara dengan satu resistor tunggal.",
      },
      {
        type: "takeaways",
        items: [
          "Hambatan pengganti adalah satu resistor tunggal yang setara dengan seluruh susunan bagi sumber.",
          "Dari sisi sumber: Rpengganti = V / I.",
          "Seri menaikkan Rpengganti (lebih besar dari resistor mana pun); paralel menurunkannya (lebih kecil dari yang terkecil).",
          "n resistor identik: seri = nR, paralel = R/n.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hambatan pengganti sebuah rangkaian paling tepat diartikan sebagai?",
            options: [
              "Resistor terbesar dalam rangkaian",
              "Satu resistor tunggal yang setara bagi sumber",
              "Jumlah semua tegangan",
              "Resistor yang paling panas",
            ],
            answer: 1,
            explain: "Hambatan pengganti mewakili seluruh susunan sebagai satu resistor tunggal.",
          },
          {
            q: "Sumber 24 V mengalirkan 4 A ke sebuah rangkaian. Hambatan penggantinya?",
            options: ["96 Ω", "6 Ω", "0,17 Ω", "28 Ω"],
            answer: 1,
            explain: "Rpengganti = V/I = 24/4 = 6 Ω.",
          },
          {
            q: "Empat resistor 8 Ω identik diparalel. Hambatan penggantinya?",
            options: ["32 Ω", "8 Ω", "2 Ω", "4 Ω"],
            answer: 2,
            explain: "Rp = R/n = 8/4 = 2 Ω.",
          },
          {
            q: "Pada susunan seri, hambatan pengganti selalu?",
            options: [
              "Lebih kecil dari resistor terkecil",
              "Lebih besar dari resistor mana pun",
              "Sama dengan resistor pertama",
              "Selalu nol",
            ],
            answer: 1,
            explain: "Seri menjumlahkan, jadi Rp lebih besar dari resistor mana pun.",
          },
          {
            q: "Multimeter mengukur hambatan dengan prinsip?",
            options: ["R = V × I", "R = V / I", "R = I / V", "R = V + I"],
            answer: 1,
            explain: "Alat mengalirkan arus diketahui, mengukur tegangan, lalu R = V / I.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pembagi-tegangan-dan-arus",
    levelId: "rangkaian-hambatan",
    order: 4,
    title: "Pembagi Tegangan dan Arus",
    summary:
      "Kenapa volume HP bisa pelan dan keras? Dari resistor yang berbagi tegangan dan arus, lahir gagasan pembagi yang ada di hampir setiap alat.",
    durationMin: 14,
    tags: ["fisika", "listrik", "pembagi-tegangan", "pembagi-arus", "seri", "paralel"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat kamu menggeser tombol volume atau kecerahan layar, di balik layar ada resistor yang sedang <strong>membagi tegangan</strong>. Pada rangkaian seri, tegangan sumber dibagi-bagi ke tiap resistor; pada paralel, arus total dibagi-bagi ke tiap cabang. Mari amati cara pembagian ini bekerja dulu, baru rumus pembaginya muncul di akhir.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Resistor yang Berbagi Tegangan",
        caption: "Pada seri, resistor lebih besar mendapat bagian tegangan lebih besar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pasang dua resistor seri: 4 Ω dan 2 Ω pada baterai 6 V. Karena arusnya sama (seri), resistor yang lebih besar 'memakan' tegangan lebih banyak. Ukur: 4 Ω mendapat 4 V, 2 Ω mendapat 2 V, totalnya pas 6 V. Tegangan terbagi <strong>sebanding hambatan</strong>. Pada paralel kebalikannya: cabang berhambatan kecil justru kebagian arus lebih besar. Belum rumus, baru pola berbagi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua jenis pembagi",
        html: "<strong>Pembagi tegangan</strong> terjadi pada susunan seri: V tiap resistor = V sumber × (R resistor itu ÷ R total). <strong>Pembagi arus</strong> terjadi pada susunan paralel: cabang ber-R kecil mendapat arus lebih besar. Keduanya muncul karena Hukum Ohm berlaku di tiap bagian.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Pembagian Tegangan 6 V pada Seri 4 Ω dan 2 Ω",
        unit: "volt",
        source: "perhitungan ilustratif",
        note: "Arus sama 1 A mengalir di keduanya. Resistor 4 Ω mendapat 4 V, resistor 2 Ω mendapat 2 V; jumlahnya tepat 6 V sesuai Hukum Kirchhoff tegangan.",
        data: [
          { label: "V di 4 Ω", value: 4, color: "#f87171" },
          { label: "V di 2 Ω", value: 2, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dua resistor seri 4 Ω dan 2 Ω pada sumber 6 V. Berapa tegangan pada resistor 4 Ω? (gunakan V = Vsumber × R/Rtotal)",
        answer: 4,
        tolerance: 0.05,
        suffix: " V",
        solution:
          "Rtotal = 4 + 2 = 6 Ω. V4 = 6 V × (4/6) = <strong>4 volt</strong>. Resistor lebih besar mendapat bagian tegangan lebih besar.",
        hint: "Kalikan tegangan sumber dengan (R resistor itu / Rtotal).",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada seri yang sama (4 Ω dan 2 Ω, sumber 6 V), berapa tegangan pada resistor 2 Ω?",
        answer: 2,
        tolerance: 0.05,
        suffix: " V",
        solution:
          "V2 = 6 V × (2/6) = <strong>2 volt</strong>. Periksa: 4 V + 2 V = 6 V, cocok dengan tegangan sumber.",
        hint: "V2 = Vsumber × (2 / Rtotal); atau kurangi tegangan sumber dengan V resistor lain.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan ke jenis pembagi yang tepat.",
        buckets: ["Pembagi tegangan (seri)", "Pembagi arus (paralel)"],
        items: [
          { text: "Resistor besar mendapat tegangan lebih besar", bucket: "Pembagi tegangan (seri)" },
          { text: "Cabang ber-hambatan kecil mendapat arus lebih besar", bucket: "Pembagi arus (paralel)" },
          { text: "Arus sama di semua resistor", bucket: "Pembagi tegangan (seri)" },
          { text: "Tegangan sama di semua cabang", bucket: "Pembagi arus (paralel)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Potensiometer pada Tombol Volume",
        html: "Tombol volume dan dimmer memakai <strong>potensiometer</strong>, yaitu resistor yang titik tengahnya bisa digeser. Menggesernya mengubah perbandingan dua bagian hambatan, sehingga mengubah tegangan keluaran sesuai rumus pembagi tegangan. Saat tegangan keluaran kecil, suara pelan; saat besar, suara keras. Satu komponen sederhana yang seluruh kerjanya adalah pembagi tegangan, ada di hampir tiap perangkat elektronik.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Dari pola berbagi tadi, rumusnya kita rangkum. <strong>Pembagi tegangan (seri):</strong> tegangan pada satu resistor V_x = V_sumber × (R_x / R_total). <strong>Pembagi arus (paralel):</strong> arus pada satu cabang berbanding terbalik dengan hambatannya, cabang ber-R kecil mendapat arus lebih besar. Keduanya turunan langsung Hukum Ohm dan aturan seri-paralel, bukan rumus hafalan baru.",
      },
      {
        type: "takeaways",
        items: [
          "Pada seri, tegangan sumber terbagi sebanding hambatan: V_x = V_sumber × (R_x / R_total).",
          "Pada paralel, arus total terbagi; cabang ber-hambatan kecil mendapat arus lebih besar.",
          "Jumlah tegangan tiap resistor seri selalu sama dengan tegangan sumber.",
          "Potensiometer (volume, dimmer) bekerja sebagai pembagi tegangan yang dapat diatur.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus pembagi tegangan untuk resistor R_x pada susunan seri adalah?",
            options: [
              "V_x = V_sumber × (R_total / R_x)",
              "V_x = V_sumber × (R_x / R_total)",
              "V_x = V_sumber + R_x",
              "V_x = V_sumber / R_x",
            ],
            answer: 1,
            explain: "Tegangan terbagi sebanding hambatan: V_x = V_sumber × (R_x / R_total).",
          },
          {
            q: "Dua resistor seri 3 Ω dan 1 Ω pada sumber 8 V. Tegangan pada resistor 3 Ω?",
            options: ["2 V", "6 V", "8 V", "3 V"],
            answer: 1,
            explain: "V = 8 × (3/4) = 6 volt.",
          },
          {
            q: "Pada pembagi arus (paralel), cabang dengan hambatan paling kecil mendapat?",
            options: ["Arus paling kecil", "Arus paling besar", "Tegangan paling besar", "Tidak ada arus"],
            answer: 1,
            explain: "Arus berbanding terbalik dengan hambatan, jadi R kecil = arus besar.",
          },
          {
            q: "Jumlah tegangan semua resistor pada satu susunan seri sama dengan?",
            options: ["Nol", "Tegangan sumber", "Arus total", "Hambatan total"],
            answer: 1,
            explain: "Sesuai Hukum Kirchhoff tegangan, jumlahnya sama dengan tegangan sumber.",
          },
          {
            q: "Komponen yang bekerja sebagai pembagi tegangan yang dapat diatur adalah?",
            options: ["Dioda", "Potensiometer", "Sekring", "Kapasitor"],
            answer: 1,
            explain: "Potensiometer mengubah perbandingan hambatan, jadi pembagi tegangan yang diatur.",
          },
        ],
      },
    ],
  },
];
