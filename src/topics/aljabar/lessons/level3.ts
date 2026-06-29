import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "menyederhanakan-suku-sejenis",
    levelId: "operasi-bentuk",
    order: 1,
    title: "Menyederhanakan Suku Sejenis",
    summary:
      "Mengapa 3x + 2x boleh digabung tetapi 3x + 2y tidak? Kita mulai dari keranjang belanja sampai aturannya terasa wajar.",
    durationMin: 12,
    tags: ["aljabar", "suku sejenis", "menyederhanakan", "operasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan keranjang belanja berisi 3 apel, lalu kamu tambah 2 apel lagi. Tanpa berpikir lama, jumlahnya 5 apel. Tetapi kalau ada 3 apel dan 2 jeruk, kamu tidak bisa bilang 5 apa pun, karena keduanya benda berbeda. Sebelum menulis aturan, rasakan dulu logika sederhana ini.",
      },
      {
        type: "video",
        comp: "AljabarVideo",
        title: "Video: Mengelompokkan yang Sejenis",
        caption: "Hanya benda yang sama yang boleh dijumlahkan menjadi satu hitungan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Anggap apel kita beri nama <strong>x</strong> dan jeruk kita beri nama <strong>y</strong>. Maka 3 apel ditambah 2 apel adalah 3x + 2x = 5x. Sedangkan 3 apel ditambah 2 jeruk tetap 3x + 2y, tidak bisa dipersingkat. Coba utak-atik beberapa keranjang lain dalam kepalamu sebelum lanjut.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan sekadar berhitung",
        html: "Menyederhanakan bukan sekadar menjumlahkan angka. Ia melatih kita <strong>mengenali apa yang sejenis</strong>, sebuah kebiasaan berpikir yang dipakai di mana-mana, dari menata lemari sampai menyusun anggaran.",
      },
      {
        type: "widget",
        widget: "SimulatorOperasi",
      },
      {
        type: "calcExercise",
        prompt:
          "Sederhanakan 6x + 5x - 4x. Hasilnya berbentuk ...x. Berapa koefisiennya?",
        answer: 7,
        suffix: " (yaitu 7x)",
        solution:
          "Semua suku sejenis (sama-sama x), jadi tinggal hitung koefisien: 6 + 5 - 4 = <strong>7</strong>. Hasilnya 7x.",
        hint: "Jumlahkan dan kurangkan angka di depan x saja.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada bentuk 5a + 3b - 2a + b, setelah disederhanakan suku a menjadi ...a. Berapa koefisien a-nya?",
        answer: 3,
        suffix: " (yaitu 3a)",
        solution:
          "Kumpulkan suku a: 5a - 2a = 3a. Suku b: 3b + b = 4b. Jadi hasilnya 3a + 4b, dan koefisien a adalah <strong>3</strong>.",
        hint: "Kelompokkan dulu semua suku a, lalu semua suku b.",
      },
      {
        type: "classifyExercise",
        prompt: "Manakah yang sejenis dengan 2x, dan mana yang tidak sejenis?",
        buckets: ["Sejenis dengan 2x", "Tidak sejenis"],
        items: [
          { text: "5x", bucket: "Sejenis dengan 2x" },
          { text: "-x", bucket: "Sejenis dengan 2x" },
          { text: "3x² (x berpangkat 2)", bucket: "Tidak sejenis" },
          { text: "7y", bucket: "Tidak sejenis" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menata stok kios",
        html: "Seorang pemilik kios mencatat stok dengan huruf: <strong>b</strong> untuk botol air dan <strong>k</strong> untuk kaleng. Di rak ada 8b + 5k, lalu dia menjual 3 botol dan 2 kaleng, sisanya 8b + 5k - 3b - 2k. Karena hanya yang sejenis bisa digabung, hasilnya 5b + 3k. Aljabar membantunya merapikan catatan tanpa mencampur botol dengan kaleng.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berpetualang, baru kita rumuskan: dua suku disebut <strong>sejenis</strong> jika punya variabel dan pangkat yang sama. Suku sejenis dijumlahkan dengan menjumlahkan koefisiennya: ax + bx = (a + b)x. Suku yang tidak sejenis tidak bisa digabung.",
      },
      {
        type: "takeaways",
        items: [
          "Suku sejenis memiliki variabel dan pangkat yang persis sama.",
          "Menggabung suku sejenis berarti menjumlahkan koefisiennya: ax + bx = (a + b)x.",
          "Suku tidak sejenis, seperti x dan y atau x dan x², tidak bisa digabung.",
          "Menyederhanakan adalah keterampilan mengenali yang sejenis, bukan sekadar berhitung.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hasil dari 7x + 2x adalah?",
            options: ["9x", "9x²", "14x", "9"],
            answer: 0,
            explain: "Keduanya sejenis, jumlahkan koefisien: 7 + 2 = 9, jadi 9x.",
          },
          {
            q: "Manakah pasangan suku yang sejenis?",
            options: ["3x dan 3y", "4a dan 7a", "2x dan 2x²", "5m dan 5n"],
            answer: 1,
            explain: "4a dan 7a punya variabel dan pangkat sama, jadi sejenis.",
          },
          {
            q: "Bentuk paling sederhana dari 9p - 4p - p adalah?",
            options: ["5p", "4p", "6p", "14p"],
            answer: 1,
            explain: "9 - 4 - 1 = 4, jadi 4p.",
          },
          {
            q: "Mengapa 3x + 2y tidak bisa disederhanakan lebih jauh?",
            options: [
              "Karena angkanya terlalu kecil",
              "Karena x dan y bukan suku sejenis",
              "Karena tidak ada tanda kurung",
              "Karena hasilnya pasti nol",
            ],
            answer: 1,
            explain: "x dan y variabel berbeda, jadi tidak sejenis dan tidak bisa digabung.",
          },
          {
            q: "Sederhanakan 6a + 2b - 4a + 3b. Hasilnya?",
            options: ["2a + 5b", "10a + 5b", "2a + b", "5ab"],
            answer: 0,
            explain: "Suku a: 6a - 4a = 2a. Suku b: 2b + 3b = 5b. Jadi 2a + 5b.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sifat-distributif",
    levelId: "operasi-bentuk",
    order: 2,
    title: "Sifat Distributif: Membuka Tanda Kurung",
    summary:
      "Mengapa 5 × (3.000 + 2.000) sama dengan 5 × 3.000 + 5 × 2.000? Dari hitungan belanja lahir aturan membuka kurung.",
    durationMin: 13,
    tags: ["aljabar", "distributif", "tanda kurung", "operasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu membeli 5 paket sarapan. Tiap paket berisi roti Rp3.000 dan susu Rp2.000. Ada dua cara menghitung: jumlahkan dulu isi satu paket (Rp5.000) lalu kali 5, atau hitung total roti dan total susu lalu dijumlahkan. Hasilnya pasti sama. Mengapa? Mari kita temukan sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "AljabarVideo",
        title: "Video: Membagi Rata ke Dalam Kurung",
        caption: "Angka di depan kurung dikalikan ke setiap suku di dalamnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Cara pertama: 5 × (3.000 + 2.000) = 5 × 5.000 = 25.000. Cara kedua: 5 × 3.000 + 5 × 2.000 = 15.000 + 10.000 = 25.000. Sama persis! Angka 5 seolah dibagikan ke setiap penghuni kurung. Coba ganti angkanya sendiri dan buktikan tetap cocok.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Dua Cara, Total yang Sama (5 paket sarapan)",
        unit: "rupiah",
        source: "ilustrasi edukatif",
        note: "5 × 3.000 untuk roti dan 5 × 2.000 untuk susu menghasilkan total Rp25.000, sama dengan 5 × 5.000.",
        data: [
          { label: "Total roti (5×3.000)", value: 15000, color: "#e879f9" },
          { label: "Total susu (5×2.000)", value: 10000, color: "#c084fc" },
          { label: "Gabungan (5×5.000)", value: 25000, color: "#a855f7" },
        ],
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan sekadar berhitung",
        html: "Sifat distributif bukan trik menghafal. Ia adalah cara berpikir <strong>memecah sesuatu yang besar menjadi bagian yang adil</strong>, persis seperti membagi tugas sama rata ke setiap orang dalam kelompok.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jabarkan 4(2x + 3). Suku pertamanya berbentuk ...x. Berapa koefisiennya?",
        answer: 8,
        suffix: " (yaitu 8x)",
        solution:
          "Bagikan 4 ke setiap suku: 4 × 2x = 8x dan 4 × 3 = 12. Jadi 4(2x + 3) = 8x + 12, dengan koefisien x adalah <strong>8</strong>.",
        hint: "Kalikan 4 ke 2x lebih dulu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Hasil 2(3a - 5) adalah 6a - .... Berapa angka yang dikurangkan?",
        answer: 10,
        solution:
          "2 × 3a = 6a dan 2 × 5 = 10, tanda tetap minus. Jadi 2(3a - 5) = 6a - <strong>10</strong>.",
        hint: "Distributif berlaku juga untuk pengurangan: a(b - c) = ab - ac.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan bentuk berkurung dengan hasil penjabarannya.",
        pairs: [
          { left: "3(x + 2)", right: "3x + 6" },
          { left: "5(x - 1)", right: "5x - 5" },
          { left: "2(4x + 3)", right: "8x + 6" },
          { left: "x(x + 4)", right: "x² + 4x" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Panitia membeli seragam",
        html: "Panitia memesan kaos untuk <strong>n</strong> anggota. Tiap anggota dapat 1 kaos (Rp40.000) dan 1 topi (Rp15.000). Total biaya bisa ditulis n(40.000 + 15.000) atau 40.000n + 15.000n. Saat anggaran roti naik atau jumlah anggota berubah, bentuk distributif memudahkan panitia mengubah satu angka tanpa menghitung ulang dari awal.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berpetualang, baru kita rumuskan <strong>sifat distributif</strong>: a(b + c) = ab + ac, dan a(b - c) = ab - ac. Angka di depan kurung dikalikan ke setiap suku di dalam kurung.",
      },
      {
        type: "takeaways",
        items: [
          "Sifat distributif: a(b + c) = ab + ac dan a(b - c) = ab - ac.",
          "Angka di depan kurung dibagikan ke setiap suku di dalamnya, tanda ikut diperhatikan.",
          "Membuka kurung dan menggabung kembali memberi hasil yang sama.",
          "Distributif adalah cara memecah hitungan besar menjadi bagian yang adil, bukan sekadar aturan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hasil penjabaran 3(x + 4) adalah?",
            options: ["3x + 4", "3x + 12", "x + 12", "3x + 7"],
            answer: 1,
            explain: "3 × x = 3x dan 3 × 4 = 12, jadi 3x + 12.",
          },
          {
            q: "Bentuk 5(2a - 3) sama dengan?",
            options: ["10a - 15", "10a - 3", "7a - 8", "10a + 15"],
            answer: 0,
            explain: "5 × 2a = 10a dan 5 × 3 = 15 dengan tanda minus, jadi 10a - 15.",
          },
          {
            q: "Manakah penerapan sifat distributif yang benar?",
            options: [
              "a(b + c) = ab + c",
              "a(b + c) = ab + ac",
              "a(b + c) = a + bc",
              "a(b + c) = abc",
            ],
            answer: 1,
            explain: "Setiap suku dalam kurung dikalikan a: ab + ac.",
          },
          {
            q: "Jabarkan x(x + 5).",
            options: ["x² + 5", "2x + 5", "x² + 5x", "x + 5x"],
            answer: 2,
            explain: "x × x = x² dan x × 5 = 5x, jadi x² + 5x.",
          },
          {
            q: "Mengapa 7 × 98 mudah dihitung dengan distributif sebagai 7(100 - 2)?",
            options: [
              "Karena 98 angka genap",
              "Karena 7 × 100 - 7 × 2 = 700 - 14 = 686 lebih mudah",
              "Karena tanda kurung boleh diabaikan",
              "Karena hasilnya berubah",
            ],
            answer: 1,
            explain: "Distributif memecah jadi 700 - 14 = 686, lebih ringan dihitung.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "perkalian-bentuk-aljabar",
    levelId: "operasi-bentuk",
    order: 3,
    title: "Perkalian Bentuk Aljabar lewat Luas",
    summary:
      "Apa arti (x + 2)(x + 3)? Kita gambar sebuah persegi panjang dan luasnya sendiri yang membuka rumusnya.",
    durationMin: 14,
    tags: ["aljabar", "perkalian", "luas", "distributif"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah kebun berbentuk persegi panjang. Panjangnya x meter lalu diperlebar 2 meter, dan lebarnya x meter lalu diperlebar 3 meter. Berapa luas kebun sekarang? Daripada menghafal rumus, ayo gambar dulu kebunnya dan hitung luas tiap bagian.",
      },
      {
        type: "video",
        comp: "MenemukanLuas",
        title: "Video: Luas Persegi Panjang yang Bercerita",
        caption: "Memecah persegi panjang menjadi bagian-bagian membuat perkalian terlihat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sisi panjangnya (x + 2) dan sisi lebarnya (x + 3). Bagi kebun menjadi 4 petak: petak x kali x, petak x kali 3, petak 2 kali x, dan petak 2 kali 3. Luas tiap petak: x², 3x, 2x, dan 6. Jumlahkan: x² + 3x + 2x + 6 = x² + 5x + 6. Belum perlu rumus, cukup menghitung luas.",
      },
      {
        type: "widget",
        widget: "PenemuLuas",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Luas Tiap Petak saat x = 4 meter",
        unit: "meter persegi",
        source: "ilustrasi edukatif",
        note: "Dengan x = 4, total luas 16 + 20 + 6 = 42, sama dengan (4+2)(4+3) = 6 × 7 = 42.",
        data: [
          { label: "Petak x² (4×4)", value: 16, color: "#e879f9" },
          { label: "Petak 5x (4×5)", value: 20, color: "#c084fc" },
          { label: "Petak 6 (tetap)", value: 6, color: "#a855f7" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan sekadar berhitung",
        html: "Perkalian dua bentuk aljabar sebenarnya hanya <strong>luas yang dipecah menjadi petak</strong>. Begitu kamu melihatnya sebagai gambar, rumus yang tampak rumit jadi masuk akal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Hasil (x + 2)(x + 3) = x² + bx + 6. Berapa nilai b?",
        answer: 5,
        solution:
          "Suku tengah berasal dari 3x + 2x = 5x, jadi b = <strong>5</strong>. Lengkapnya (x + 2)(x + 3) = x² + 5x + 6.",
        hint: "Jumlahkan dua suku x dari petak tengah: 3x + 2x.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jabarkan (x + 5)(x + 1) lalu hitung nilainya saat x = 3. Berapa hasilnya?",
        answer: 32,
        solution:
          "(x + 5)(x + 1) = x² + 6x + 5. Saat x = 3: 9 + 18 + 5 = <strong>32</strong>. Cek lewat sisi: (3+5)(3+1) = 8 × 4 = 32.",
        hint: "Jabarkan dulu, atau langsung hitung (3+5) × (3+1).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan perkalian dengan hasil penjabarannya.",
        pairs: [
          { left: "(x + 1)(x + 4)", right: "x² + 5x + 4" },
          { left: "(x + 2)(x + 5)", right: "x² + 7x + 10" },
          { left: "(x + 3)(x + 3)", right: "x² + 6x + 9" },
          { left: "(x + 6)(x + 1)", right: "x² + 7x + 6" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membesarkan kolam ikan",
        html: "Seorang peternak ikan punya kolam persegi panjang berukuran x kali x meter. Ia memperpanjang satu sisi 4 meter dan sisi lain 1 meter agar muat lebih banyak ikan. Luas baru (x + 4)(x + 1) = x² + 5x + 4. Dengan bentuk ini ia bisa langsung menghitung luas untuk ukuran kolam awal berapa pun, tanpa mengukur ulang setiap kali.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berpetualang lewat luas, baru kita rumuskan: <strong>(x + a)(x + b) = x² + (a + b)x + ab</strong>. Suku tengah adalah jumlah a dan b, suku terakhir adalah hasil kali a dan b. Ini hanya sifat distributif yang dipakai dua kali.",
      },
      {
        type: "takeaways",
        items: [
          "Perkalian dua bentuk aljabar bisa dilihat sebagai luas persegi panjang yang dipecah.",
          "(x + a)(x + b) = x² + (a + b)x + ab.",
          "Suku tengah adalah jumlah a + b, suku akhir adalah hasil kali a × b.",
          "Ini sama saja dengan menerapkan sifat distributif dua kali.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hasil (x + 2)(x + 3) adalah?",
            options: ["x² + 6", "x² + 5x + 6", "x² + 6x + 5", "2x + 6"],
            answer: 1,
            explain: "Suku tengah 2 + 3 = 5, suku akhir 2 × 3 = 6, jadi x² + 5x + 6.",
          },
          {
            q: "Pada (x + a)(x + b), suku terakhir (tanpa x) adalah?",
            options: ["a + b", "a × b", "a - b", "x²"],
            answer: 1,
            explain: "Suku konstanta adalah hasil kali a dan b.",
          },
          {
            q: "Jabarkan (x + 4)(x + 1).",
            options: ["x² + 5x + 4", "x² + 4x + 1", "x² + 4", "x² + 5x + 5"],
            answer: 0,
            explain: "Tengah 4 + 1 = 5, akhir 4 × 1 = 4, jadi x² + 5x + 4.",
          },
          {
            q: "Mengapa model luas membantu memahami (x + 2)(x + 3)?",
            options: [
              "Karena luas selalu negatif",
              "Karena tiap petak luas mewakili satu suku hasil perkalian",
              "Karena x harus bernilai 0",
              "Karena kurung bisa diabaikan",
            ],
            answer: 1,
            explain: "Empat petak luas (x², 3x, 2x, 6) menjelaskan setiap suku hasilnya.",
          },
          {
            q: "Hasil (x + 3)(x + 3) adalah?",
            options: ["x² + 9", "x² + 6x + 9", "x² + 3x + 9", "2x + 6"],
            answer: 1,
            explain: "Tengah 3 + 3 = 6, akhir 3 × 3 = 9, jadi x² + 6x + 9.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pemfaktoran",
    levelId: "operasi-bentuk",
    order: 4,
    title: "Pemfaktoran: Kebalikan dari Perkalian",
    summary:
      "Jika perkalian menyatukan petak menjadi luas, pemfaktoran menyusun ulang luas menjadi persegi panjang. Kita pakai model luas lagi.",
    durationMin: 14,
    tags: ["aljabar", "pemfaktoran", "faktorisasi", "luas"],
    blocks: [
      {
        type: "paragraph",
        html: "Sekarang masalahnya dibalik. Kamu punya potongan-potongan dengan total luas x² + 5x + 6, dan ingin menyusunnya kembali menjadi satu persegi panjang utuh. Berapa panjang dan lebarnya? Sebelum menghafal aturan, ayo coba susun petaknya seperti puzzle.",
      },
      {
        type: "video",
        comp: "MenemukanLuas",
        title: "Video: Menyusun Ulang Luas Menjadi Sisi",
        caption: "Pemfaktoran adalah perjalanan pulang dari luas menuju kedua sisinya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Luas x² + 5x + 6 harus jadi persegi panjang (x + ?)(x + ?). Dua angka itu harus berjumlah 5 (dari suku 5x) dan berkali jadi 6 (dari suku 6). Coba pasangan: 2 dan 3 berjumlah 5 dan berkali 6. Cocok! Jadi sisinya (x + 2) dan (x + 3). Pemfaktoran hanyalah perkalian yang dijalankan mundur.",
      },
      {
        type: "widget",
        widget: "PenemuLuas",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan sekadar berhitung",
        html: "Memfaktorkan melatih cara berpikir <strong>mencari struktur tersembunyi</strong>: dari hasil yang sudah jadi, kita menelusuri balik bagian-bagian penyusunnya. Keterampilan ini nanti membuka pintu ke persamaan kuadrat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Faktorkan x² + 7x + 12 = (x + 3)(x + ?). Berapa angka yang hilang?",
        answer: 4,
        solution:
          "Cari dua angka yang berjumlah 7 dan berkali 12. Pasangan 3 dan 4 cocok (3 + 4 = 7, 3 × 4 = 12). Jadi angkanya <strong>4</strong>, dan x² + 7x + 12 = (x + 3)(x + 4).",
        hint: "Dua angka harus berjumlah 7 dan hasil kalinya 12.",
      },
      {
        type: "calcExercise",
        prompt:
          "Faktorkan dengan FPB: 6x + 9 = ...(2x + 3). Berapa angka di depan kurung?",
        answer: 3,
        solution:
          "FPB dari 6 dan 9 adalah 3. Keluarkan 3: 6x + 9 = 3(2x + 3). Jadi angkanya <strong>3</strong>. Cek balik: 3 × 2x = 6x dan 3 × 3 = 9.",
        hint: "Cari faktor persekutuan terbesar dari 6 dan 9.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk memfaktorkan x² + bx + c menjadi (x + m)(x + n), syarat apa yang harus dipenuhi m dan n? Kelompokkan pernyataan berikut.",
        buckets: ["Syarat benar", "Bukan syarat"],
        items: [
          { text: "m + n harus sama dengan b", bucket: "Syarat benar" },
          { text: "m × n harus sama dengan c", bucket: "Syarat benar" },
          { text: "m dan n harus bilangan yang sama", bucket: "Bukan syarat" },
          { text: "m harus selalu lebih besar dari b", bucket: "Bukan syarat" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan bentuk kuadrat dengan hasil pemfaktorannya.",
        pairs: [
          { left: "x² + 5x + 6", right: "(x + 2)(x + 3)" },
          { left: "x² + 6x + 8", right: "(x + 2)(x + 4)" },
          { left: "x² + 7x + 10", right: "(x + 2)(x + 5)" },
          { left: "x² + 8x + 15", right: "(x + 3)(x + 5)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menata ubin taman",
        html: "Tukang taman punya ubin dengan total luas x² + 6x + 8 dan ingin menatanya menjadi satu hamparan persegi panjang. Ia mencari dua angka yang berjumlah 6 dan berkali 8, yaitu 2 dan 4. Maka hamparannya berukuran (x + 2) kali (x + 4). Dengan memfaktorkan, ia tahu ukuran sisi taman tanpa mencoba-coba menyusun ubin satu per satu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berpetualang, baru kita rumuskan: <strong>pemfaktoran adalah kebalikan perkalian</strong>. Untuk x² + bx + c, carilah dua bilangan m dan n dengan m + n = b dan m × n = c, sehingga x² + bx + c = (x + m)(x + n). Bentuk lain difaktorkan dengan mengeluarkan FPB: ab + ac = a(b + c).",
      },
      {
        type: "takeaways",
        items: [
          "Pemfaktoran adalah kebalikan dari perkalian bentuk aljabar.",
          "x² + bx + c = (x + m)(x + n) dengan m + n = b dan m × n = c.",
          "Bentuk seperti 6x + 9 difaktorkan dengan mengeluarkan FPB: 3(2x + 3).",
          "Selalu bisa dicek dengan mengalikan kembali hasilnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pemfaktoran dari x² + 5x + 6 adalah?",
            options: ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x + 5)(x + 1)", "(x + 6)(x - 1)"],
            answer: 1,
            explain: "2 dan 3 berjumlah 5 dan berkali 6, jadi (x + 2)(x + 3).",
          },
          {
            q: "Untuk memfaktorkan x² + bx + c, dua bilangan dicari agar?",
            options: [
              "Jumlahnya c dan kalinya b",
              "Jumlahnya b dan kalinya c",
              "Selisihnya b dan kalinya c",
              "Keduanya sama dengan b",
            ],
            answer: 1,
            explain: "Dua bilangan harus berjumlah b dan berkali c.",
          },
          {
            q: "Faktorkan 4x + 8 dengan FPB.",
            options: ["4(x + 2)", "2(2x + 8)", "4(x + 8)", "8(x + 1)"],
            answer: 0,
            explain: "FPB dari 4 dan 8 adalah 4, sehingga 4(x + 2).",
          },
          {
            q: "Pemfaktoran dari x² + 7x + 10 adalah?",
            options: ["(x + 2)(x + 5)", "(x + 1)(x + 10)", "(x + 3)(x + 4)", "(x + 7)(x + 10)"],
            answer: 0,
            explain: "2 dan 5 berjumlah 7 dan berkali 10, jadi (x + 2)(x + 5).",
          },
          {
            q: "Bagaimana cara mengecek hasil pemfaktoran sudah benar?",
            options: [
              "Membagi dengan nol",
              "Mengalikan kembali kedua faktornya",
              "Menghapus suku tengah",
              "Menambah semua angka",
            ],
            answer: 1,
            explain: "Kalikan kembali faktornya, hasilnya harus sama dengan bentuk awal.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "mengkuadratkan-bentuk",
    levelId: "operasi-bentuk",
    order: 5,
    title: "Mengkuadratkan Bentuk: (a + b)²",
    summary:
      "Kenapa (a + b)² bukan a² + b²? Kita potong-potong sebuah persegi besar dulu sampai suku tengah yang sering terlupakan muncul sendiri.",
    durationMin: 14,
    tags: ["aljabar", "kuadrat", "luas", "perkalian"],
    blocks: [
      {
        type: "paragraph",
        html: "Banyak orang buru-buru menulis (a + b)² = a² + b². Sebelum percaya, ayo uji dengan angka: (10 + 3)² jelas sama dengan 13² = 169. Tetapi a² + b² = 100 + 9 = 109. Ada 60 yang hilang. Ke mana perginya? Sebuah gambar persegi akan menjawabnya.",
      },
      {
        type: "video",
        comp: "MenemukanLuas",
        title: "Video: Memotong Persegi Besar Menjadi Empat Bagian",
        caption: "Persegi sisi (a + b) terbagi empat: a², dua kotak ab, dan b².",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar persegi besar bersisi (a + b). Garis pemisah membaginya menjadi empat ubin: kotak besar a × a = a², kotak kecil b × b = b², dan <strong>dua</strong> kotak panjang a × b. Jumlahkan luasnya: a² + ab + ab + b² = a² + <strong>2ab</strong> + b². Suku 2ab itulah 60 yang tadi hilang pada (10 + 3)².",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua kotak silang yang sering dilupakan",
        html: "Kuadrat suku dua punya tiga bagian, bukan dua: kuadrat suku pertama, <strong>dua kali</strong> hasil kali kedua suku, dan kuadrat suku kedua. Untuk selisih, tanda tengahnya berubah: (a - b)² = a² - 2ab + b².",
      },
      {
        type: "widget",
        widget: "PenemuLuas",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Dari Mana Datangnya 13² = 169",
        unit: "satuan luas",
        source: "(10 + 3)² dipotong empat bagian",
        note: "Dua kotak silang (30 + 30 = 60) adalah bagian yang hilang jika keliru menulis (a + b)² = a² + b².",
        data: [
          { label: "10 × 10 = 100", value: 100, color: "#c084fc" },
          { label: "10 × 3 = 30", value: 30, color: "#e879f9" },
          { label: "3 × 10 = 30", value: 30, color: "#f472b6" },
          { label: "3 × 3 = 9", value: 9, color: "#fb7185" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Gunakan (a + b)² untuk menghitung 21². (petunjuk: 21 = 20 + 1)",
        answer: 441,
        solution:
          "21² = (20 + 1)² = 20² + 2(20)(1) + 1² = 400 + 40 + 1 = <strong>441</strong>.",
        hint: "Hitung a², lalu 2ab, lalu b², kemudian jumlahkan.",
      },
      {
        type: "calcExercise",
        prompt: "Pada hasil penjabaran (x + 6)² = x² + ___ x + 36, berapa koefisien suku tengahnya?",
        answer: 12,
        solution:
          "Suku tengah (a + b)² adalah 2ab. Di sini a = x dan b = 6, jadi 2 × 6 = <strong>12</strong>, sehingga (x + 6)² = x² + 12x + 36.",
        hint: "Suku tengah adalah dua kali hasil kali kedua suku.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap bentuk kuadrat dengan penjabarannya.",
        pairs: [
          { left: "(x + 1)²", right: "x² + 2x + 1" },
          { left: "(x + 2)²", right: "x² + 4x + 4" },
          { left: "(x + 3)²", right: "x² + 6x + 9" },
          { left: "(x + 5)²", right: "x² + 10x + 25" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap hasil penjabaran: berasal dari kuadrat jumlah atau kuadrat selisih?",
        buckets: ["Kuadrat jumlah (a + b)²", "Kuadrat selisih (a - b)²"],
        items: [
          { text: "x² + 6x + 9", bucket: "Kuadrat jumlah (a + b)²" },
          { text: "x² - 6x + 9", bucket: "Kuadrat selisih (a - b)²" },
          { text: "x² + 10x + 25", bucket: "Kuadrat jumlah (a + b)²" },
          { text: "x² - 4x + 4", bucket: "Kuadrat selisih (a - b)²" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memperluas kebun persegi",
        html: "Sebuah kebun persegi bersisi 10 m hendak diperluas 3 m ke kanan dan 3 m ke atas, menjadi sisi 13 m. Luas baru = (10 + 3)² = 169 m². Tambahan luasnya 169 - 100 = <strong>69 m²</strong>, yang persis berasal dari dua jalur tepi 2(10)(3) = 60 m² ditambah pojok kecil 3² = 9 m². Rumus (a + b)² menjelaskan tepat di mana tambahan luas itu berada.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memotong persegi, baru kita rumuskan: <strong>(a + b)² = a² + 2ab + b²</strong> dan <strong>(a - b)² = a² - 2ab + b²</strong>. Inti yang sering dilupakan adalah suku tengah 2ab, yaitu dua kotak silang pada gambar. Ini hanya sifat distributif yang dipakai pada (a + b)(a + b).",
      },
      {
        type: "takeaways",
        items: [
          "(a + b)² bukan a² + b²; ada suku tengah 2ab yang sering dilupakan.",
          "(a + b)² = a² + 2ab + b² dan (a - b)² = a² - 2ab + b².",
          "Suku tengah berasal dari dua kotak silang a × b pada persegi.",
          "Rumus ini mempercepat hitungan seperti 21² = 400 + 40 + 1 = 441.",
          "Rumusnya tetap sifat distributif (a + b)(a + b), bukan aturan baru.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Penjabaran (a + b)² yang benar adalah?",
            options: ["a² + b²", "a² + 2ab + b²", "a² + ab + b²", "2a + 2b"],
            answer: 1,
            explain: "Ada suku tengah 2ab dari dua kotak silang.",
          },
          {
            q: "Hasil dari (x + 4)² adalah?",
            options: ["x² + 16", "x² + 8x + 16", "x² + 4x + 16", "x² + 4x + 8"],
            answer: 1,
            explain: "2 × 4 = 8 untuk suku tengah dan 4² = 16, jadi x² + 8x + 16.",
          },
          {
            q: "Suku tengah pada (a - b)² bertanda?",
            options: ["Positif", "Negatif", "Selalu nol", "Tidak ada"],
            answer: 1,
            explain: "(a - b)² = a² - 2ab + b², suku tengahnya bertanda negatif.",
          },
          {
            q: "Dengan rumus kuadrat, 19² = (20 - 1)² sama dengan?",
            options: ["361", "400", "399", "381"],
            answer: 0,
            explain: "400 - 2(20)(1) + 1 = 400 - 40 + 1 = 361.",
          },
          {
            q: "Kesalahan menulis (a + b)² = a² + b² melupakan?",
            options: ["a²", "b²", "Suku tengah 2ab", "Tanda kurang"],
            answer: 2,
            explain: "Yang hilang adalah suku tengah 2ab.",
          },
        ],
      },
    ],
  },
];
