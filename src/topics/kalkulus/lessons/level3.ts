import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "fungsi-naik-dan-turun",
    levelId: "aplikasi-turunan",
    order: 1,
    title: "Fungsi Naik dan Turun: Membaca Arah Lewat Turunan",
    summary:
      "Sebelum menulis aturannya, kita rasakan dulu bagaimana tanda turunan memberi tahu arah jalannya sebuah fungsi.",
    durationMin: 14,
    tags: ["kalkulus", "aplikasi-turunan", "fungsi-naik", "fungsi-turun"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu mengayuh sepeda di jalan berbukit. Saat menanjak, kamu merasa berat dan lambat; saat menurun, kamu meluncur ringan. Tanpa melihat peta, tubuhmu sudah tahu arah jalan dari rasa kemiringannya. Turunan bekerja persis seperti itu: ia membaca kemiringan kurva di setiap titik. Ayo selidiki dulu rasanya sebelum menulis aturan.",
      },
      {
        type: "video",
        comp: "TurunanVideo",
        title: "Video: Tanda Turunan dan Arah Fungsi",
        caption: "Kemiringan garis singgung menunjukkan apakah fungsi sedang naik atau turun.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil fungsi f(x) = x kuadrat. Hitung kemiringannya di beberapa titik: di x = -2, lalu x = -1, lalu x = 1, lalu x = 2. Perhatikan apakah kurva sedang menukik turun atau memanjat naik di tiap titik itu. Belum perlu rumus, cukup rasakan arahnya.",
      },
      {
        type: "widget",
        widget: "SimulatorTurunan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Nilai f(x) = x kuadrat dari Kiri ke Kanan",
        unit: "nilai f(x)",
        source: "ilustrasi edukatif",
        note: "Di sisi kiri kurva menurun, lalu mencapai titik terendah, lalu memanjat naik. Tanda turunan berubah dari negatif ke positif.",
        data: [
          { label: "x=-2", value: 4, color: "#a5b4fc" },
          { label: "x=-1", value: 1, color: "#818cf8" },
          { label: "x=0", value: 0, color: "#6366f1" },
          { label: "x=1", value: 1, color: "#4f46e5" },
          { label: "x=2", value: 4, color: "#4338ca" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Tanda mengalahkan angka",
        html: "Yang kita pedulikan di sini bukan seberapa besar turunannya, melainkan <strong>tandanya</strong>. Turunan positif berarti kurva sedang memanjat, turunan negatif berarti kurva sedang menukik. Satu informasi tanda saja sudah cukup untuk membaca arah perjalanan fungsi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk f(x) = x kuadrat, turunannya f'(x) = 2x. Berapa nilai f'(3)?",
        answer: 6,
        solution:
          "Masukkan x = 3 ke f'(x) = 2x, didapat 2 x 3 = <strong>6</strong>. Karena hasilnya positif, fungsi sedang <strong>naik</strong> di x = 3.",
        hint: "Substitusikan x = 3 ke dalam f'(x) = 2x.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Dengan f'(x) = 2x untuk f(x) = x kuadrat, kelompokkan tiap titik: fungsi sedang naik atau turun?",
        buckets: ["Naik (f' > 0)", "Turun (f' < 0)"],
        items: [
          { text: "di x = 4, karena f'(4) = 8", bucket: "Naik (f' > 0)" },
          { text: "di x = 1, karena f'(1) = 2", bucket: "Naik (f' > 0)" },
          { text: "di x = -3, karena f'(-3) = -6", bucket: "Turun (f' < 0)" },
          { text: "di x = -5, karena f'(-5) = -10", bucket: "Turun (f' < 0)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Suhu kota sepanjang hari",
        html: "Dinas cuaca mencatat suhu udara dari pagi hingga malam. Saat matahari naik, suhu memanjat, jadi laju perubahannya positif. Selepas sore, suhu mulai turun, jadi lajunya negatif. Dengan hanya melihat <strong>tanda</strong> laju perubahan, peramal cuaca bisa langsung tahu kapan suhu sedang naik dan kapan mulai mendingin tanpa perlu membandingkan setiap angka satu per satu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturannya baru kita tulis sekarang",
        html: "Setelah merasakan polanya, baru kita rumuskan: pada selang di mana <strong>f'(x) > 0</strong> fungsi <strong>naik</strong>, dan pada selang di mana <strong>f'(x) < 0</strong> fungsi <strong>turun</strong>. Titik tempat tanda berubah adalah tempat kurva berbalik arah, dan itu menjadi pintu menuju gagasan maksimum dan minimum.",
      },
      {
        type: "takeaways",
        items: [
          "Turunan membaca kemiringan kurva di setiap titik.",
          "Jika f'(x) > 0 maka fungsi sedang naik di titik itu.",
          "Jika f'(x) < 0 maka fungsi sedang turun di titik itu.",
          "Tempat tanda turunan berubah adalah tempat kurva berbalik arah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti f'(x) > 0 pada suatu titik?",
            options: [
              "Fungsi sedang turun",
              "Fungsi sedang naik",
              "Fungsi bernilai nol",
              "Fungsi konstan",
            ],
            answer: 1,
            explain: "Turunan positif berarti kemiringan ke atas, jadi fungsi sedang naik.",
          },
          {
            q: "Untuk f(x) = x kuadrat dengan f'(x) = 2x, di x = -4 fungsi sedang?",
            options: ["Naik", "Turun", "Berhenti", "Tak hingga"],
            answer: 1,
            explain: "f'(-4) = -8, bernilai negatif, jadi fungsi sedang turun.",
          },
          {
            q: "Informasi apa dari turunan yang menentukan arah fungsi?",
            options: [
              "Besar nilainya",
              "Tandanya, positif atau negatif",
              "Satuannya",
              "Angka di belakang koma",
            ],
            answer: 1,
            explain: "Yang menentukan arah naik atau turun adalah tanda turunan.",
          },
          {
            q: "Untuk f(x) = x kuadrat, di x = 5 nilai f'(5) adalah?",
            options: ["5", "10", "25", "0"],
            answer: 1,
            explain: "f'(x) = 2x sehingga f'(5) = 2 x 5 = 10, dan fungsi sedang naik.",
          },
          {
            q: "Apa makna titik tempat tanda turunan berubah dari negatif ke positif?",
            options: [
              "Kurva berbalik dari turun menjadi naik",
              "Kurva tetap turun",
              "Fungsi menghilang",
              "Kemiringan menjadi tak hingga",
            ],
            answer: 0,
            explain: "Perubahan tanda dari negatif ke positif menandai titik balik dari turun ke naik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "titik-maksimum-dan-minimum",
    levelId: "aplikasi-turunan",
    order: 2,
    title: "Titik Maksimum dan Minimum: Saat Kurva Berhenti Sejenak",
    summary:
      "Sebelum aturannya, kita amati bahwa di puncak dan lembah sebuah kurva, kemiringannya sesaat menjadi datar.",
    durationMin: 15,
    tags: ["kalkulus", "aplikasi-turunan", "maksimum", "minimum", "titik-stasioner"],
    blocks: [
      {
        type: "paragraph",
        html: "Lemparkan bola lurus ke atas. Pada saat tertinggi, bola seolah berhenti sejenak sebelum jatuh kembali. Di titik itu kecepatannya nol, padahal sesaat sebelumnya naik dan sesaat sesudahnya turun. Puncak lintasan selalu ditandai oleh momen 'datar' ini. Ayo amati dulu fenomenanya sebelum menulis aturannya.",
      },
      {
        type: "video",
        comp: "TurunanVideo",
        title: "Video: Titik Datar pada Puncak dan Lembah",
        caption: "Di titik tertinggi dan terendah, garis singgung kurva menjadi mendatar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil fungsi f(x) = x kuadrat - 4x + 3. Hitung nilainya di x = 0, 1, 2, 3, dan 4. Cari di mana nilainya paling kecil. Lalu rasakan: tepat sebelum titik itu kurva menurun, tepat sesudahnya kurva menaik. Apa yang terjadi pada kemiringan di titik terendah itu sendiri?",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Nilai f(x) = x kuadrat - 4x + 3",
        unit: "nilai f(x)",
        source: "ilustrasi edukatif",
        note: "Kurva menurun sampai x = 2 lalu menaik lagi. Titik terendah berada tepat di x = 2 dengan nilai -1.",
        data: [
          { label: "x=0", value: 3, color: "#a5b4fc" },
          { label: "x=1", value: 0, color: "#818cf8" },
          { label: "x=2", value: -1, color: "#6366f1" },
          { label: "x=3", value: 0, color: "#4f46e5" },
          { label: "x=4", value: 3, color: "#4338ca" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Datar bukan berarti diam selamanya",
        html: "Kemiringan nol di titik puncak atau lembah hanyalah sesaat. Sebelum dan sesudahnya kurva tetap bergerak. Titik tempat kemiringan menjadi nol kita sebut <strong>titik stasioner</strong>, dan di sanalah kandidat maksimum atau minimum berada.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk f(x) = x kuadrat - 4x + 3, turunannya f'(x) = 2x - 4. Pada nilai x berapa f'(x) = 0?",
        answer: 2,
        solution:
          "Selesaikan 2x - 4 = 0, sehingga 2x = 4 dan x = <strong>2</strong>. Di x = 2 inilah kemiringan menjadi nol, yaitu titik minimum kurva.",
        hint: "Buat f'(x) = 2x - 4 sama dengan nol, lalu cari x.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Sebuah parabola berbentuk a x kuadrat + ... . Tentukan apakah titik stasionernya maksimum atau minimum berdasarkan arah kurva.",
        buckets: ["Titik minimum", "Titik maksimum"],
        items: [
          { text: "f(x) = x kuadrat - 4x + 3 (parabola membuka ke atas)", bucket: "Titik minimum" },
          { text: "f(x) = 2x kuadrat - 8x (parabola membuka ke atas)", bucket: "Titik minimum" },
          { text: "f(x) = -x kuadrat + 6x (parabola membuka ke bawah)", bucket: "Titik maksimum" },
          { text: "f(x) = -3x kuadrat + 12x - 1 (parabola membuka ke bawah)", bucket: "Titik maksimum" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Titik stasioner", right: "Tempat f'(x) = 0" },
          { left: "Titik maksimum", right: "Puncak, kurva naik lalu turun" },
          { left: "Titik minimum", right: "Lembah, kurva turun lalu naik" },
          { left: "f'(x) berubah tanda", right: "Penanda titik balik kurva" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ketinggian roket air",
        html: "Sebuah roket air diluncurkan dan ketinggiannya mengikuti lintasan melengkung terhadap waktu. Tim ingin tahu kapan roket mencapai puncak. Daripada menebak dari foto, mereka mencari saat <strong>kecepatannya nol</strong>, yaitu saat turunan ketinggian terhadap waktu sama dengan nol. Pada saat itulah roket berada di titik tertinggi sebelum mulai jatuh. Satu persamaan f'(t) = 0 menjawab pertanyaan yang sulit diukur dengan mata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Sekarang baru kita rumuskan aturannya",
        html: "Titik maksimum dan minimum sebuah fungsi terjadi pada <strong>titik stasioner</strong>, yaitu saat <strong>f'(x) = 0</strong>. Untuk menentukan jenisnya: jika f'(x) berubah dari positif ke negatif, itu <strong>maksimum</strong>; jika berubah dari negatif ke positif, itu <strong>minimum</strong>. Inilah alat utama untuk menemukan nilai terbaik dalam masalah nyata.",
      },
      {
        type: "takeaways",
        items: [
          "Di titik maksimum dan minimum, kemiringan kurva sesaat menjadi nol.",
          "Titik stasioner ditemukan dengan menyelesaikan f'(x) = 0.",
          "Maksimum bila f'(x) berubah dari positif ke negatif.",
          "Minimum bila f'(x) berubah dari negatif ke positif.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa ciri kemiringan kurva di titik maksimum atau minimum?",
            options: [
              "Sangat besar",
              "Bernilai nol sesaat",
              "Selalu negatif",
              "Tak hingga",
            ],
            answer: 1,
            explain: "Di puncak dan lembah, garis singgung mendatar sehingga turunannya nol.",
          },
          {
            q: "Untuk f(x) = x kuadrat - 4x + 3 dengan f'(x) = 2x - 4, titik stasionernya di x =?",
            options: ["1", "2", "3", "4"],
            answer: 1,
            explain: "2x - 4 = 0 memberi x = 2, yaitu titik minimum kurva.",
          },
          {
            q: "Bila f'(x) berubah dari positif ke negatif di suatu titik, titik itu adalah?",
            options: ["Minimum", "Maksimum", "Bukan titik balik", "Asimtot"],
            answer: 1,
            explain: "Naik lalu turun menandai puncak, yaitu titik maksimum.",
          },
          {
            q: "Parabola f(x) = -x kuadrat + 6x membuka ke bawah, jadi titik stasionernya?",
            options: ["Minimum", "Maksimum", "Tidak ada", "Dua-duanya"],
            answer: 1,
            explain: "Parabola membuka ke bawah memiliki titik puncak, yaitu maksimum.",
          },
          {
            q: "Langkah pertama mencari titik maksimum atau minimum sebuah fungsi adalah?",
            options: [
              "Menggambar dulu sampai jadi",
              "Menyelesaikan f'(x) = 0",
              "Menghitung f(0)",
              "Mengalikan dengan nol",
            ],
            answer: 1,
            explain: "Titik balik selalu dicari dari syarat f'(x) = 0.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "masalah-optimasi",
    levelId: "aplikasi-turunan",
    order: 3,
    title: "Masalah Optimasi: Memaksimalkan Luas dengan Pagar Terbatas",
    summary:
      "Sebelum aturannya, kita coba sendiri membagi pagar yang terbatas agar kandang seluas mungkin.",
    durationMin: 16,
    tags: ["kalkulus", "aplikasi-turunan", "optimasi", "maksimum"],
    blocks: [
      {
        type: "paragraph",
        html: "Seorang peternak punya pagar kawat sepanjang 40 meter dan ingin membuat kandang persegi panjang seluas mungkin. Kalau ia membuatnya panjang dan tipis, luasnya kecil. Kalau terlalu pendek, juga kecil. Pasti ada bentuk paling pas di antaranya. Ayo coba-coba dulu mencari bentuk terbaik itu sebelum menulis aturan optimasinya.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Mencari Nilai Terbaik dengan Turunan",
        caption: "Bagaimana laju perubahan membantu menemukan ukuran yang memaksimalkan hasil.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pagar 40 meter dipakai untuk empat sisi kandang, jadi panjang + lebar = 20. Jika lebarnya x, maka panjangnya 20 - x, dan luasnya L = x kali (20 - x). Coba isi tabel untuk x = 2, 5, 10, 15, 18. Luas mana yang paling besar? Rasakan luas memuncak lalu menurun lagi.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Luas Kandang L = x (20 - x) untuk Berbagai Lebar x",
        unit: "meter persegi",
        source: "ilustrasi edukatif",
        note: "Luas naik, memuncak di x = 10 dengan 100 meter persegi, lalu turun lagi. Bentuk paling luas adalah persegi 10 x 10.",
        data: [
          { label: "x=2", value: 36, color: "#a5b4fc" },
          { label: "x=5", value: 75, color: "#818cf8" },
          { label: "x=10", value: 100, color: "#6366f1" },
          { label: "x=15", value: 75, color: "#4f46e5" },
          { label: "x=18", value: 36, color: "#4338ca" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Memodelkan dulu, baru menurunkan",
        html: "Kunci optimasi adalah menulis besaran yang ingin dimaksimalkan sebagai satu fungsi. Di sini luas L = x(20 - x) = 20x - x kuadrat. Setelah berbentuk fungsi, kita bisa memakai turunan untuk menemukan puncaknya, persis seperti mencari titik maksimum di pelajaran sebelumnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Luas L = 20x - x kuadrat punya turunan L'(x) = 20 - 2x. Pada lebar x berapa luas maksimum tercapai?",
        answer: 10,
        solution:
          "Selesaikan 20 - 2x = 0, sehingga 2x = 20 dan x = <strong>10</strong>. Lebar terbaik adalah 10 meter, dan karena panjangnya 20 - 10 = 10, kandang terbaik berbentuk persegi.",
        hint: "Buat L'(x) = 20 - 2x sama dengan nol.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan lebar terbaik x = 10, berapa luas maksimum kandang dalam meter persegi?",
        answer: 100,
        solution:
          "Masukkan x = 10 ke L = x(20 - x) = 10 x 10 = <strong>100</strong> meter persegi. Itulah luas terbesar yang bisa dicapai dengan pagar 40 meter.",
        hint: "Hitung L = 10 x (20 - 10).",
      },
      {
        type: "classifyExercise",
        prompt:
          "Dalam menyusun masalah optimasi, kelompokkan tiap pernyataan: bagian dari fungsi tujuan atau syarat batas (kendala)?",
        buckets: ["Fungsi tujuan", "Syarat batas"],
        items: [
          { text: "Luas L = x (20 - x) yang ingin dimaksimalkan", bucket: "Fungsi tujuan" },
          { text: "Laba yang ingin dibuat sebesar mungkin", bucket: "Fungsi tujuan" },
          { text: "Total pagar hanya 40 meter", bucket: "Syarat batas" },
          { text: "Panjang + lebar harus sama dengan 20", bucket: "Syarat batas" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Laba maksimum sebuah warung kopi",
        html: "Sebuah warung mendapati labanya mengikuti L(x) = -2x kuadrat + 80x - 200, dengan x harga per cangkir dalam ribuan rupiah. Harga terlalu murah membuat laba tipis, harga terlalu mahal membuat pembeli kabur. Dengan menurunkan, L'(x) = -4x + 80, dan menyetelnya nol didapat x = 20. Jadi harga Rp20.000 per cangkir memberi laba tertinggi. Turunan mengubah tebak-tebakan harga menjadi keputusan yang pasti.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan optimasi, baru di akhir",
        html: "Langkah optimasi: (1) tulis besaran yang ingin dimaksimalkan atau diminimalkan sebagai <strong>satu fungsi</strong> dengan memakai syarat batas, (2) cari turunannya dan selesaikan <strong>f'(x) = 0</strong>, (3) periksa bahwa titik itu benar maksimum atau minimum, lalu (4) hitung nilai akhirnya. Pola yang sama menyelesaikan soal luas, laba, biaya, hingga bahan kemasan.",
      },
      {
        type: "takeaways",
        items: [
          "Optimasi dimulai dengan menulis besaran tujuan sebagai satu fungsi.",
          "Syarat batas dipakai untuk menyederhanakan fungsi menjadi satu peubah.",
          "Nilai terbaik dicari dengan menyelesaikan f'(x) = 0.",
          "Pola ini menyelesaikan soal luas, laba, maupun biaya minimum.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Langkah pertama menyelesaikan masalah optimasi adalah?",
            options: [
              "Langsung menebak jawabannya",
              "Menulis besaran tujuan sebagai sebuah fungsi",
              "Menggambar pagar",
              "Mengalikan semua angka",
            ],
            answer: 1,
            explain: "Optimasi selalu diawali dengan memodelkan tujuan sebagai fungsi.",
          },
          {
            q: "Untuk L = 20x - x kuadrat dengan L'(x) = 20 - 2x, luas maksimum di x =?",
            options: ["5", "10", "15", "20"],
            answer: 1,
            explain: "20 - 2x = 0 memberi x = 10, yaitu lebar yang memaksimalkan luas.",
          },
          {
            q: "Berapa luas terbesar kandang dengan pagar 40 meter?",
            options: ["80", "90", "100", "120"],
            answer: 2,
            explain: "Dengan x = 10, luasnya 10 x 10 = 100 meter persegi.",
          },
          {
            q: "Untuk laba L(x) = -2x kuadrat + 80x - 200 dengan L'(x) = -4x + 80, harga terbaik x =?",
            options: ["10", "20", "40", "80"],
            answer: 1,
            explain: "-4x + 80 = 0 memberi x = 20, yaitu harga yang memaksimalkan laba.",
          },
          {
            q: "Apa fungsi syarat batas dalam optimasi?",
            options: [
              "Membuat soal lebih sulit",
              "Mengurangi fungsi menjadi satu peubah",
              "Menghapus turunan",
              "Menambah jumlah jawaban",
            ],
            answer: 1,
            explain: "Syarat batas menghubungkan peubah agar fungsi tujuan tinggal satu peubah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menggambar-grafik-dengan-turunan",
    levelId: "aplikasi-turunan",
    order: 4,
    title: "Menggambar Grafik dengan Turunan: Peta dari Tanda Kemiringan",
    summary:
      "Sebelum aturannya, kita susun bentuk kurva hanya dari informasi naik, turun, dan titik baliknya.",
    durationMin: 16,
    tags: ["kalkulus", "aplikasi-turunan", "grafik", "titik-balik"],
    blocks: [
      {
        type: "paragraph",
        html: "Seorang pendaki bisa menggambar bentuk pegunungan hanya dari catatan: 'mula-mula menurun, lalu mencapai lembah, lalu memanjat ke puncak, lalu menurun lagi'. Tanpa foto pun, peta ketinggian bisa direka dari urutan naik dan turun. Turunan memberi kita catatan yang sama untuk sebuah fungsi. Ayo coba menyusun bentuk kurva dari petunjuk-petunjuk itu sebelum menulis aturannya.",
      },
      {
        type: "video",
        comp: "TurunanVideo",
        title: "Video: Membaca Bentuk Kurva dari Turunannya",
        caption: "Tanda turunan dan titik stasioner cukup untuk menyusun sketsa grafik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil fungsi f(x) = x pangkat tiga - 3x. Turunannya f'(x) = 3x kuadrat - 3, yang nol saat x = -1 dan x = 1. Hitung nilai fungsi di x = -2, -1, 0, 1, 2. Tandai mana titik tinggi dan mana titik rendah, lalu bayangkan garis yang menghubungkannya dengan mulus.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Bentuk Kurva f(x) = x pangkat tiga - 3x",
        unit: "nilai f(x)",
        source: "ilustrasi edukatif",
        note: "Kurva naik ke maksimum lokal di x = -1 (nilai 2), turun ke minimum lokal di x = 1 (nilai -2), lalu naik lagi. Dua titik balik membentuk lekukan khas.",
        data: [
          { label: "x=-2", value: -2, color: "#a5b4fc" },
          { label: "x=-1", value: 2, color: "#818cf8" },
          { label: "x=0", value: 0, color: "#6366f1" },
          { label: "x=1", value: -2, color: "#4f46e5" },
          { label: "x=2", value: 2, color: "#4338ca" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Titik balik adalah tiang tenda",
        html: "Bayangkan titik maksimum dan minimum sebagai tiang yang menyangga tenda. Begitu posisi tiang diketahui dan kita tahu arah naik atau turun di antaranya, kain tenda, yaitu kurvanya, tinggal dibentangkan mengikuti petunjuk. Tidak perlu menghitung ratusan titik.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk f(x) = x pangkat tiga - 3x dengan f'(x) = 3x kuadrat - 3, salah satu titik stasionernya bernilai positif. Berapa nilai x itu?",
        answer: 1,
        solution:
          "Selesaikan 3x kuadrat - 3 = 0, sehingga x kuadrat = 1 dan x = -1 atau x = 1. Nilai x yang positif adalah <strong>1</strong>, yang merupakan titik minimum lokal.",
        hint: "Buat 3x kuadrat - 3 = 0 lalu cari x yang positif.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk f(x) = x pangkat tiga - 3x dengan titik balik di x = -1 dan x = 1, kelompokkan jenis tiap titik.",
        buckets: ["Maksimum lokal", "Minimum lokal"],
        items: [
          { text: "x = -1, kurva naik lalu turun", bucket: "Maksimum lokal" },
          { text: "x = 1, kurva turun lalu naik", bucket: "Minimum lokal" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan petunjuk turunan dengan bentuk kurva yang dihasilkan.",
        pairs: [
          { left: "f'(x) > 0 pada suatu selang", right: "Kurva naik di selang itu" },
          { left: "f'(x) < 0 pada suatu selang", right: "Kurva turun di selang itu" },
          { left: "f'(x) = 0 lalu berubah ke negatif", right: "Maksimum lokal" },
          { left: "f'(x) = 0 lalu berubah ke positif", right: "Minimum lokal" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Grafik populasi rusa di taman nasional",
        html: "Peneliti memodelkan populasi rusa dengan sebuah fungsi terhadap waktu. Daripada memplot ribuan titik, mereka mencari titik stasionernya: kapan populasi mencapai puncak sebelum menurun karena keterbatasan pangan, dan kapan mencapai titik terendah sebelum pulih. Dengan dua titik balik dan tanda turunan di antaranya, bentuk keseluruhan grafik populasi langsung terbaca, dan kebijakan konservasi bisa direncanakan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan menyketsa grafik, baru di akhir",
        html: "Untuk menggambar grafik dengan turunan: (1) cari titik stasioner dari <strong>f'(x) = 0</strong>, (2) tentukan tanda f'(x) di tiap selang untuk tahu naik atau turun, (3) tetapkan tiap titik stasioner sebagai <strong>maksimum</strong> atau <strong>minimum</strong> lokal dari perubahan tanda, lalu (4) hubungkan titik-titik itu mengikuti arahnya. Beberapa titik kunci sudah cukup untuk sketsa yang benar.",
      },
      {
        type: "takeaways",
        items: [
          "Titik stasioner dari f'(x) = 0 menjadi kerangka sketsa grafik.",
          "Tanda f'(x) di tiap selang menentukan bagian naik dan turun.",
          "Perubahan tanda turunan membedakan maksimum lokal dari minimum lokal.",
          "Beberapa titik kunci cukup untuk menyketsa bentuk kurva dengan benar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa kerangka utama untuk menyketsa grafik dengan turunan?",
            options: [
              "Memplot ratusan titik acak",
              "Titik stasioner dari f'(x) = 0",
              "Nilai di x = 0 saja",
              "Warna kurva",
            ],
            answer: 1,
            explain: "Titik stasioner menjadi tiang penyangga bentuk grafik.",
          },
          {
            q: "Untuk f(x) = x pangkat tiga - 3x, titik stasionernya berada di x =?",
            options: ["0 dan 3", "-1 dan 1", "-3 dan 3", "1 dan 2"],
            answer: 1,
            explain: "3x kuadrat - 3 = 0 memberi x = -1 dan x = 1.",
          },
          {
            q: "Di x = -1, fungsi f(x) = x pangkat tiga - 3x memiliki titik?",
            options: ["Minimum lokal", "Maksimum lokal", "Bukan titik balik", "Asimtot"],
            answer: 1,
            explain: "Di x = -1 kurva naik lalu turun, jadi itu maksimum lokal dengan nilai 2.",
          },
          {
            q: "Bagaimana cara mengetahui sebuah selang naik atau turun?",
            options: [
              "Dari tanda f'(x) di selang itu",
              "Dari panjang selang",
              "Dari nilai f(0)",
              "Dengan menebak",
            ],
            answer: 0,
            explain: "Tanda turunan positif berarti naik, negatif berarti turun.",
          },
          {
            q: "Berapa banyak titik yang dibutuhkan untuk sketsa kurva yang benar?",
            options: [
              "Ratusan titik",
              "Beberapa titik kunci di sekitar titik stasioner",
              "Tepat satu titik",
              "Tidak perlu titik sama sekali",
            ],
            answer: 1,
            explain: "Titik stasioner dan arah di antaranya sudah cukup untuk sketsa yang benar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "turunan-kedua-dan-kecekungan",
    levelId: "aplikasi-turunan",
    order: 5,
    title: "Turunan Kedua dan Kecekungan: Melengkung ke Atas atau ke Bawah",
    summary:
      "Sebelum aturannya, kita rasakan beda kurva yang melengkung seperti mangkuk dan yang melengkung seperti payung lewat turunan dari turunan.",
    durationMin: 15,
    tags: ["kalkulus", "aplikasi-turunan", "turunan-kedua", "kecekungan", "titik-belok"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua jalan sama-sama menanjak, tetapi satu terasa makin curam (melengkung seperti mangkuk) dan satu makin landai (melengkung seperti payung). Tanda naik atau turun saja tidak cukup menangkap bedanya. Kita butuh tahu bagaimana kemiringan itu sendiri berubah. Ayo selidiki dulu rasa melengkung ini sebelum menulis aturannya.",
      },
      {
        type: "video",
        comp: "TurunanVideo",
        title: "Video: Kurva Mencekung ke Atas dan ke Bawah",
        caption: "Mengamati bagaimana kemiringan kurva berubah, bukan sekadar arahnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil f(x) = x pangkat tiga. Turunan pertamanya f'(x) = 3x kuadrat memberi kemiringan. Sekarang turunkan sekali lagi: turunan dari 3x kuadrat adalah 6x. Hitung 6x di x = -2, -1, 0, 1, 2. Perhatikan tandanya berubah dari negatif ke positif. Rasakan kurva berpindah dari mencekung ke bawah menjadi mencekung ke atas.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Turunan Kedua f''(x) = 6x untuk f(x) = x pangkat tiga",
        unit: "nilai f''(x)",
        source: "perhitungan turunan kedua dari f(x) = x pangkat tiga",
        note: "f'' bertanda negatif di kiri (cekung ke bawah) lalu positif di kanan (cekung ke atas). Tepat di x = 0 ia nol, itulah titik belok.",
        data: [
          { label: "x=-2", value: -12, color: "#a5b4fc" },
          { label: "x=-1", value: -6, color: "#818cf8" },
          { label: "x=0", value: 0, color: "#6366f1" },
          { label: "x=1", value: 6, color: "#4f46e5" },
          { label: "x=2", value: 12, color: "#4338ca" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Turunan dari turunan",
        html: "Turunan kedua adalah turunan dari turunan pertama, ditulis f''(x). Maknanya: seberapa cepat kemiringan berubah. Jika <strong>f''(x) > 0</strong> kurva mencekung ke atas seperti mangkuk; jika <strong>f''(x) < 0</strong> kurva mencekung ke bawah seperti payung. Titik tempat kecekungan berbalik disebut <strong>titik belok</strong>.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk f(x) = x pangkat tiga, turunan keduanya f''(x) = 6x. Berapa nilai f''(2)?",
        answer: 12,
        solution:
          "Masukkan x = 2 ke f''(x) = 6x, didapat 6 x 2 = <strong>12</strong>. Karena positif, kurva mencekung ke atas di x = 2.",
        hint: "Substitusikan x = 2 ke f''(x) = 6x.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk f(x) = x pangkat tiga dengan f''(x) = 6x, pada nilai x berapa f''(x) = 0 (titik belok)?",
        answer: 0,
        solution:
          "Selesaikan 6x = 0, sehingga x = <strong>0</strong>. Di sinilah kecekungan berbalik dari bawah ke atas, yaitu titik belok.",
        hint: "Buat 6x sama dengan nol.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk f(x) = x pangkat tiga dengan f''(x) = 6x, kelompokkan kecekungan di tiap titik.",
        buckets: ["Cekung ke atas (f'' > 0)", "Cekung ke bawah (f'' < 0)"],
        items: [
          { text: "di x = 3, karena f''(3) = 18", bucket: "Cekung ke atas (f'' > 0)" },
          { text: "di x = 1, karena f''(1) = 6", bucket: "Cekung ke atas (f'' > 0)" },
          { text: "di x = -2, karena f''(-2) = -12", bucket: "Cekung ke bawah (f'' < 0)" },
          { text: "di x = -4, karena f''(-4) = -24", bucket: "Cekung ke bawah (f'' < 0)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kurva wabah yang mulai melandai",
        html: "Saat wabah menyebar, grafik jumlah kasus kumulatif terus naik, jadi turunan pertamanya (kasus baru per hari) positif. Kabar baik datang bukan saat grafik turun, melainkan saat ia mulai <strong>melandai</strong>: kasus baru per hari mencapai puncak lalu menurun. Di titik itu turunan kedua berubah dari positif ke negatif, dan grafik kumulatif melewati titik beloknya. Para ahli epidemiologi memantau tanda turunan kedua ini untuk memastikan wabah mulai terkendali.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah merasakan polanya, baru kita rumuskan: <strong>turunan kedua f''(x) mengukur kecekungan</strong>. Jika f''(x) > 0 kurva cekung ke atas, jika f''(x) < 0 cekung ke bawah, dan titik tempat f''(x) berganti tanda adalah <strong>titik belok</strong>. Turunan kedua juga membantu uji titik stasioner: di titik stasioner, f'' positif berarti minimum dan f'' negatif berarti maksimum.",
      },
      {
        type: "takeaways",
        items: [
          "Turunan kedua f''(x) adalah turunan dari turunan pertama.",
          "f''(x) > 0 berarti kurva cekung ke atas seperti mangkuk.",
          "f''(x) < 0 berarti kurva cekung ke bawah seperti payung.",
          "Titik tempat f''(x) berganti tanda adalah titik belok.",
          "Tanda turunan kedua di titik stasioner membedakan minimum dari maksimum.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Turunan kedua sebuah fungsi adalah?",
            options: [
              "Nilai fungsi dikuadratkan",
              "Turunan dari turunan pertama",
              "Dua kali nilai fungsi",
              "Luas di bawah kurva",
            ],
            answer: 1,
            explain: "Turunan kedua f''(x) adalah turunan dari f'(x).",
          },
          {
            q: "Jika f''(x) > 0 pada suatu selang, kurva di sana?",
            options: [
              "Cekung ke bawah",
              "Cekung ke atas",
              "Selalu turun",
              "Datar sempurna",
            ],
            answer: 1,
            explain: "Turunan kedua positif berarti kurva mencekung ke atas seperti mangkuk.",
          },
          {
            q: "Untuk f(x) = x pangkat tiga dengan f''(x) = 6x, di x = -2 kurva?",
            options: ["Cekung ke atas", "Cekung ke bawah", "Garis lurus", "Titik belok"],
            answer: 1,
            explain: "f''(-2) = -12, bernilai negatif, jadi cekung ke bawah.",
          },
          {
            q: "Titik tempat kecekungan berbalik disebut?",
            options: ["Titik maksimum", "Titik belok", "Asimtot", "Titik potong"],
            answer: 1,
            explain: "Tempat f''(x) berganti tanda adalah titik belok.",
          },
          {
            q: "Di sebuah titik stasioner, f''(x) negatif menandakan titik itu?",
            options: ["Minimum", "Maksimum", "Titik belok", "Bukan titik balik"],
            answer: 1,
            explain: "Cekung ke bawah di titik stasioner berarti puncak, yaitu maksimum.",
          },
        ],
      },
    ],
  },
];
