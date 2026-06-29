import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "fungsi-eksponen",
    levelId: "jenis-fungsi",
    order: 1,
    title: "Fungsi Eksponen: Pertumbuhan dan Peluruhan",
    summary:
      "Sebelum bertemu rumus a·b^x, kita ikuti dulu satu sel bakteri yang terus membelah sampai polanya meledak.",
    durationMin: 14,
    tags: ["fungsi", "eksponen", "pertumbuhan", "peluruhan"],
    blocks: [
      {
        type: "paragraph",
        html: "Satu sel bakteri membelah jadi dua tiap jam. Jam ke-0 ada 1, jam ke-1 ada 2, jam ke-2 ada 4, jam ke-3 ada 8. Kelihatan kecil di awal, tetapi ayo ikuti dulu polanya beberapa jam lagi sebelum kita beri nama. Ada yang aneh: tambahannya tidak tetap, malah makin besar.",
      },
      {
        type: "video",
        comp: "PertumbuhanMajemuk",
        title: "Video: Ketika Angka Berlipat Ganda",
        caption: "Pertumbuhan yang mengali dirinya sendiri terlihat pelan, lalu meledak.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Perhatikan: 1, 2, 4, 8, 16. Tiap langkah bukan ditambah angka tetap, melainkan <strong>dikali 2</strong>. Inilah bedanya dengan garis lurus. Pada fungsi linear kita menambah jumlah tetap; di sini kita mengalikan dengan faktor tetap. Coba teruskan: setelah 16 berapa?",
      },
      {
        type: "widget",
        widget: "SimulatorBungaMajemuk",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jumlah Bakteri Tiap Jam (membelah dua)",
        unit: "jumlah sel",
        source: "ilustrasi edukatif",
        note: "Bandingkan dengan garis lurus: di sini tiap batang bukan bertambah tetap, tetapi dikali 2. Lompatannya makin jauh.",
        data: [
          { label: "Jam 0", value: 1, color: "#38bdf8" },
          { label: "Jam 1", value: 2, color: "#38bdf8" },
          { label: "Jam 2", value: 4, color: "#38bdf8" },
          { label: "Jam 3", value: 8, color: "#38bdf8" },
          { label: "Jam 4", value: 16, color: "#38bdf8" },
          { label: "Jam 5", value: 32, color: "#38bdf8" },
        ],
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Naik atau turun?",
        html: "Kalau faktor pengalinya lebih dari 1 (misalnya kali 2), nilainya naik makin cepat: itu <strong>pertumbuhan</strong>. Kalau faktornya antara 0 dan 1 (misalnya kali setengah), nilainya turun makin pelan mendekati nol: itu <strong>peluruhan</strong>.",
      },
      {
        type: "calcExercise",
        prompt:
          "Bakteri mulai dari 1 sel dan membelah jadi dua tiap jam. Berapa jumlahnya setelah 6 jam?",
        answer: 64,
        suffix: " sel",
        solution:
          "Tiap jam dikali 2, selama 6 jam: 2 × 2 × 2 × 2 × 2 × 2 = 2^6 = <strong>64</strong>. Dengan notasi fungsi, jumlah = 1 × 2^x, jadi f(6) = 2^6 = 64.",
        hint: "Kalikan 2 sebanyak 6 kali, atau hitung 2 pangkat 6.",
      },
      {
        type: "calcExercise",
        prompt:
          "Obat 200 mg meluruh tinggal setengahnya tiap 4 jam. Berapa mg yang tersisa setelah 12 jam?",
        answer: 25,
        suffix: " mg",
        solution:
          "12 jam berarti 3 kali paruh waktu (12 ÷ 4 = 3). 200 → 100 → 50 → <strong>25</strong>. Ini peluruhan dengan faktor setengah: 200 × (1/2)^3 = 25 mg.",
        hint: "Bagi dua tiap 4 jam. 12 jam adalah 3 kali pembagian.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap fungsi: pertumbuhan (faktor > 1) atau peluruhan (faktor antara 0 dan 1)?",
        buckets: ["Pertumbuhan", "Peluruhan"],
        items: [
          { text: "f(x) = 2^x", bucket: "Pertumbuhan" },
          { text: "f(x) = (1/2)^x", bucket: "Peluruhan" },
          { text: "f(x) = 3^x", bucket: "Pertumbuhan" },
          { text: "f(x) = 0,9^x", bucket: "Peluruhan" },
          { text: "f(x) = 1,5^x", bucket: "Pertumbuhan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bunga majemuk tabungan",
        html: "Kamu menabung Rp1.000.000 dengan bunga 10% per tahun yang ikut berbunga (majemuk). Tahun pertama jadi 1.000.000 × 1,1 = 1.100.000. Tahun kedua 1.100.000 × 1,1 = 1.210.000. Tiap tahun saldo dikali 1,1, bukan ditambah jumlah tetap. Itulah sebabnya tabungan jangka panjang tumbuh jauh lebih cepat dari dugaan: saldo = 1.000.000 × 1,1^x.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Baru sekarang rumusnya muncul",
        html: "Setelah merasakan polanya, kita beri nama: <strong>fungsi eksponen f(x) = a · b^x</strong>. Di sini <strong>a</strong> nilai awal dan <strong>b</strong> faktor pengali tetap. Jika <strong>b &gt; 1</strong> terjadi pertumbuhan; jika <strong>0 &lt; b &lt; 1</strong> terjadi peluruhan. Ciri khasnya: yang tetap adalah perbandingan (rasio), bukan selisih.",
      },
      {
        type: "takeaways",
        items: [
          "Fungsi eksponen mengalikan dengan faktor tetap, bukan menambah jumlah tetap.",
          "Bentuk umumnya f(x) = a · b^x dengan a nilai awal dan b faktor pengali.",
          "b > 1 berarti pertumbuhan; 0 < b < 1 berarti peluruhan.",
          "Pertumbuhan eksponen terlihat pelan di awal lalu meledak cepat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Ciri utama fungsi eksponen dibanding fungsi linear adalah?",
            options: [
              "Tiap langkah dikali faktor tetap",
              "Tiap langkah ditambah jumlah tetap",
              "Nilainya selalu nol",
              "Grafiknya garis lurus",
            ],
            answer: 0,
            explain: "Eksponen mengalikan dengan faktor tetap; linear menambah jumlah tetap.",
          },
          {
            q: "Pada f(x) = a · b^x, kapan terjadi peluruhan?",
            options: ["b > 1", "0 < b < 1", "b = 1", "b = 0"],
            answer: 1,
            explain: "Faktor antara 0 dan 1 membuat nilai menyusut tiap langkah.",
          },
          {
            q: "Jika f(x) = 2^x, maka f(4) adalah?",
            options: ["8", "16", "6", "32"],
            answer: 1,
            explain: "2 × 2 × 2 × 2 = 16.",
          },
          {
            q: "Tabungan dikali 1,1 tiap tahun. Ini termasuk?",
            options: ["Pertumbuhan eksponen", "Peluruhan eksponen", "Fungsi linear", "Bukan fungsi"],
            answer: 0,
            explain: "Faktor 1,1 lebih dari 1, jadi tumbuh secara eksponen.",
          },
          {
            q: "Zat 80 gram meluruh tinggal setengah tiap periode. Setelah 2 periode tersisa?",
            options: ["40 gram", "20 gram", "10 gram", "60 gram"],
            answer: 1,
            explain: "80 → 40 → 20. Dua kali dibagi dua menghasilkan 20 gram.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "fungsi-akar",
    levelId: "jenis-fungsi",
    order: 2,
    title: "Fungsi Akar: Tumbuh Tapi Makin Santai",
    summary:
      "Sebelum menulis f(x) = akar x, kita balik dulu soal luas dan sisi persegi sampai pola akarnya terasa.",
    durationMin: 13,
    tags: ["fungsi", "akar", "domain", "kuadrat"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah persegi berluas 9 punya sisi 3, karena 3 × 3 = 9. Luas 16 punya sisi 4. Luas 25 punya sisi 5. Kita sedang berjalan mundur dari kuadrat: dari hasil mencari sisinya. Ayo rasakan dulu polanya, baru kita beri nama akar.",
      },
      {
        type: "video",
        comp: "FungsiVideo",
        title: "Video: Membalik Kuadrat",
        caption: "Kalau kuadrat mengalikan angka dengan dirinya, akar mencari angka asalnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lihat pasangannya: luas 1 → sisi 1, luas 4 → sisi 2, luas 9 → sisi 3, luas 16 → sisi 4. Luas melompat jauh (1, 4, 9, 16), tetapi sisinya naik pelan dan teratur (1, 2, 3, 4). Akar membuat angka besar menjadi jinak.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Sisi Persegi dari Luasnya (akar)",
        unit: "panjang sisi",
        source: "ilustrasi edukatif",
        note: "Masukan melompat 1, 4, 9, 16, 25, tetapi keluarannya naik pelan 1, 2, 3, 4, 5. Itulah ciri fungsi akar: tumbuh makin santai.",
        data: [
          { label: "Luas 0", value: 0, color: "#22d3ee" },
          { label: "Luas 1", value: 1, color: "#22d3ee" },
          { label: "Luas 4", value: 2, color: "#22d3ee" },
          { label: "Luas 9", value: 3, color: "#22d3ee" },
          { label: "Luas 16", value: 4, color: "#22d3ee" },
          { label: "Luas 25", value: 5, color: "#22d3ee" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Tidak semua angka boleh masuk",
        html: "Tidak ada persegi dengan luas negatif, dan tidak ada bilangan real yang dikuadratkan jadi negatif. Maka akar hanya menerima masukan <strong>nol atau positif</strong>. Daerah masukan yang diizinkan ini disebut <strong>domain</strong>.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah taman berbentuk persegi memiliki luas 144 meter persegi. Berapa panjang sisinya?",
        answer: 12,
        suffix: " m",
        solution:
          "Cari angka yang dikalikan dirinya menghasilkan 144. Karena 12 × 12 = 144, sisinya <strong>12 m</strong>. Inilah f(144) = akar 144 = 12.",
        hint: "Cari bilangan yang dikuadratkan menghasilkan 144.",
      },
      {
        type: "calcExercise",
        prompt: "Berapa nilai dari akar 81?",
        answer: 9,
        solution:
          "9 × 9 = 81, jadi akar 81 = <strong>9</strong>. Akar mencari bilangan tak negatif yang kuadratnya 81.",
        hint: "Bilangan apa dikali dirinya jadi 81?",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang terdefinisi pada bilangan real (akar hanya menerima nol atau positif)?",
        buckets: ["Terdefinisi", "Tidak terdefinisi"],
        items: [
          { text: "akar 16", bucket: "Terdefinisi" },
          { text: "akar 0", bucket: "Terdefinisi" },
          { text: "akar -4", bucket: "Tidak terdefinisi" },
          { text: "akar 49", bucket: "Terdefinisi" },
          { text: "akar -1", bucket: "Tidak terdefinisi" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap masukan dengan nilai akarnya.",
        pairs: [
          { left: "akar 4", right: "2" },
          { left: "akar 9", right: "3" },
          { left: "akar 36", right: "6" },
          { left: "akar 100", right: "10" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ukuran layar dan ubin",
        html: "Seorang tukang memasang 196 ubin persegi untuk membentuk satu lantai persegi besar. Berapa ubin di tiap sisi? Karena lantai berbentuk persegi, jumlah ubin per sisi adalah akar dari total: akar 196 = 14, sebab 14 × 14 = 196. Jadi 14 ubin di tiap baris dan 14 baris. Persoalan luas yang diketahui dan sisi yang dicari selalu memanggil fungsi akar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Baru sekarang rumusnya muncul",
        html: "Setelah membalik kuadrat berkali-kali, kita beri nama: <strong>fungsi akar f(x) = akar x</strong>. Fungsi ini adalah <strong>kebalikan dari kuadrat</strong>. Cirinya: <strong>domain x ≥ 0</strong>, nilainya selalu tak negatif, dan grafiknya naik makin landai (melengkung mendatar ke kanan).",
      },
      {
        type: "takeaways",
        items: [
          "Fungsi akar mencari bilangan tak negatif yang kuadratnya sama dengan masukan.",
          "Akar adalah kebalikan dari fungsi kuadrat.",
          "Domain fungsi akar adalah x ≥ 0; akar bilangan negatif tak terdefinisi pada bilangan real.",
          "Grafiknya naik tetapi makin landai, berbeda dengan eksponen yang makin curam.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Fungsi akar adalah kebalikan dari fungsi?",
            options: ["Linear", "Kuadrat", "Eksponen", "Nilai mutlak"],
            answer: 1,
            explain: "Akar membatalkan pengkuadratan, jadi ia kebalikan kuadrat.",
          },
          {
            q: "Domain dari f(x) = akar x adalah?",
            options: ["Semua bilangan", "x ≥ 0", "x < 0", "Hanya x = 0"],
            answer: 1,
            explain: "Akar hanya menerima masukan nol atau positif pada bilangan real.",
          },
          {
            q: "Nilai dari akar 64 adalah?",
            options: ["6", "7", "8", "9"],
            answer: 2,
            explain: "8 × 8 = 64.",
          },
          {
            q: "Manakah yang tidak terdefinisi pada bilangan real?",
            options: ["akar 25", "akar 0", "akar -9", "akar 1"],
            answer: 2,
            explain: "Tidak ada bilangan real yang kuadratnya negatif.",
          },
          {
            q: "Dibanding eksponen yang makin curam, grafik fungsi akar?",
            options: [
              "Naik makin landai",
              "Turun terus",
              "Berbentuk V",
              "Garis lurus",
            ],
            answer: 0,
            explain: "Fungsi akar naik tetapi kenaikannya melambat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "fungsi-nilai-mutlak",
    levelId: "jenis-fungsi",
    order: 3,
    title: "Fungsi Nilai Mutlak: Soal Jarak, Bukan Arah",
    summary:
      "Sebelum menulis f(x) = |x|, kita ukur dulu jarak dari titik nol sampai grafiknya membentuk huruf V.",
    durationMin: 12,
    tags: ["fungsi", "nilai mutlak", "jarak", "grafik"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu berdiri di titik 0 pada garis bilangan. Teman A di posisi 3, teman B di posisi -3. Siapa yang lebih jauh darimu? Sama jauh, masing-masing 3 langkah. Arah boleh berbeda (kiri atau kanan), tetapi jaraknya sama. Ayo mainkan dulu gagasan jarak ini sebelum kita beri lambang.",
      },
      {
        type: "video",
        comp: "FungsiVideo",
        title: "Video: Sejauh Apa dari Nol",
        caption: "Jarak tidak pernah negatif, walau arahnya berlawanan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba ubah tiap angka menjadi jaraknya dari nol: -3 jadi 3, -1 jadi 1, 0 tetap 0, 2 tetap 2. Angka negatif kehilangan tanda minusnya, angka positif tetap. Yang keluar selalu nol atau positif. Apa yang terjadi pada grafiknya kalau dua sisi ini bertemu di nol?",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jarak Tiap Titik dari Nol",
        unit: "jarak",
        source: "ilustrasi edukatif",
        note: "Perhatikan simetrinya: -3 dan 3 sama tinggi, -2 dan 2 sama tinggi. Titik terendah di nol. Bentuknya seperti huruf V.",
        data: [
          { label: "-3", value: 3, color: "#818cf8" },
          { label: "-2", value: 2, color: "#818cf8" },
          { label: "-1", value: 1, color: "#818cf8" },
          { label: "0", value: 0, color: "#818cf8" },
          { label: "1", value: 1, color: "#818cf8" },
          { label: "2", value: 2, color: "#818cf8" },
          { label: "3", value: 3, color: "#818cf8" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Selalu nol atau positif",
        html: "Karena yang diukur adalah jarak, hasil nilai mutlak <strong>tidak pernah negatif</strong>. Titik terendahnya adalah 0, tepat saat masukannya 0. Itu sebabnya grafiknya punya satu titik sudut tajam di bawah.",
      },
      {
        type: "calcExercise",
        prompt:
          "Suhu kamar ditargetkan 25 derajat. Hari ini terukur 18 derajat. Berapa besar selisihnya dari target (selalu positif)?",
        answer: 7,
        suffix: " derajat",
        solution:
          "Selisihnya 18 - 25 = -7, tetapi kita ingin besarnya saja: |-7| = <strong>7</strong>. Nilai mutlak mengukur seberapa jauh, bukan ke arah mana.",
        hint: "Hitung selisihnya lalu abaikan tanda minusnya.",
      },
      {
        type: "calcExercise",
        prompt: "Berapa nilai dari |3 - 10| ?",
        answer: 7,
        solution:
          "Kerjakan di dalam dulu: 3 - 10 = -7. Lalu nilai mutlaknya: |-7| = <strong>7</strong>.",
        hint: "Selesaikan pengurangan di dalam, baru ambil nilai mutlaknya.",
      },
      {
        type: "classifyExercise",
        prompt: "Berapa hasil tiap nilai mutlak ini? Kelompokkan sesuai nilainya.",
        buckets: ["Bernilai 5", "Bernilai 2", "Bernilai 0"],
        items: [
          { text: "|5|", bucket: "Bernilai 5" },
          { text: "|-5|", bucket: "Bernilai 5" },
          { text: "|-2|", bucket: "Bernilai 2" },
          { text: "|2|", bucket: "Bernilai 2" },
          { text: "|0|", bucket: "Bernilai 0" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Toleransi pabrik baut",
        html: "Sebuah pabrik membuat baut dengan panjang ideal 50 mm dan toleransi 2 mm. Artinya baut diterima jika selisih panjangnya dari 50 tidak lebih dari 2 mm, ke atas maupun ke bawah. Baut 51 mm punya selisih |51 - 50| = 1 mm (diterima). Baut 47 mm punya selisih |47 - 50| = 3 mm (ditolak). Karena yang dinilai besar penyimpangan tanpa peduli arah, kontrol kualitas memakai nilai mutlak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Baru sekarang lambangnya muncul",
        html: "Setelah merasakan idenya, kita tulis: <strong>fungsi nilai mutlak f(x) = |x|</strong>, yaitu <strong>jarak x dari nol</strong>. Cirinya: hasil <strong>selalu nol atau positif</strong>, grafiknya berbentuk <strong>huruf V</strong> dengan titik sudut di bawah, dan simetris terhadap sumbu tegak.",
      },
      {
        type: "takeaways",
        items: [
          "Nilai mutlak |x| mengukur jarak x dari nol, jadi selalu nol atau positif.",
          "Tanda minus pada masukan hilang; hasilnya tidak pernah negatif.",
          "Grafiknya berbentuk huruf V dengan satu titik sudut tajam.",
          "Dipakai untuk menghitung selisih atau penyimpangan tanpa peduli arah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Nilai mutlak suatu bilangan menyatakan?",
            options: [
              "Jaraknya dari nol",
              "Arahnya saja",
              "Kuadratnya",
              "Kebalikannya",
            ],
            answer: 0,
            explain: "|x| adalah jarak x dari nol, selalu tak negatif.",
          },
          {
            q: "Berapa nilai dari |-8| ?",
            options: ["-8", "8", "0", "16"],
            answer: 1,
            explain: "Jarak -8 dari nol adalah 8.",
          },
          {
            q: "Grafik fungsi f(x) = |x| berbentuk?",
            options: ["Garis lurus", "Parabola", "Huruf V", "Lingkaran"],
            answer: 2,
            explain: "Dua sisi bertemu di titik nol membentuk huruf V.",
          },
          {
            q: "Hasil dari fungsi nilai mutlak selalu?",
            options: [
              "Nol atau positif",
              "Selalu negatif",
              "Bisa negatif",
              "Selalu nol",
            ],
            answer: 0,
            explain: "Karena mengukur jarak, hasilnya tidak pernah negatif.",
          },
          {
            q: "Baut ideal 50 mm, terukur 53 mm. Penyimpangannya?",
            options: ["3 mm", "-3 mm", "53 mm", "0 mm"],
            answer: 0,
            explain: "|53 - 50| = 3 mm, besar penyimpangan tanpa peduli arah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "mengenali-fungsi-dari-grafiknya",
    levelId: "jenis-fungsi",
    order: 4,
    title: "Mengenali Fungsi dari Grafiknya",
    summary:
      "Sebelum menghafal daftar ciri, kita jadi detektif dulu: tebak jenis fungsi hanya dari bentuk grafiknya.",
    durationMin: 13,
    tags: ["fungsi", "grafik", "mengenali", "ciri"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu hanya diberi sketsa grafik tanpa rumus. Garis lurus, lengkung seperti mangkuk, naik meledak, melengkung santai, atau huruf V. Tiap bentuk punya cerita. Ayo latih mata kita membaca cerita itu sebelum kita susun daftar cirinya.",
      },
      {
        type: "video",
        comp: "PolaAlam",
        title: "Video: Pola Tersembunyi dalam Bentuk",
        caption: "Bentuk grafik adalah sidik jari sebuah fungsi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba cocokkan firasatmu: bentuk <strong>garis lurus</strong> menandakan perubahan tetap (linear). Lengkung simetris seperti <strong>mangkuk atau payung</strong> berarti kuadrat (parabola). Naik <strong>makin curam tanpa simetri</strong> berarti eksponen. Naik tetapi <strong>makin landai</strong> berarti akar. Bentuk <strong>huruf V</strong> berarti nilai mutlak.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tanya tiga hal pada grafik",
        html: "Untuk menebak jenis fungsi, tanyakan: (1) Apakah lurus atau melengkung? (2) Apakah simetris? Parabola simetris kiri-kanan, V simetris, eksponen tidak. (3) Bagaimana lajunya? Eksponen makin cepat, akar makin pelan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan bentuk grafik dengan jenis fungsinya.",
        pairs: [
          { left: "Garis lurus", right: "Fungsi linear" },
          { left: "Lengkung simetris seperti mangkuk", right: "Fungsi kuadrat" },
          { left: "Naik makin curam, tak simetris", right: "Fungsi eksponen" },
          { left: "Naik makin landai dari titik nol", right: "Fungsi akar" },
          { left: "Bentuk huruf V", right: "Fungsi nilai mutlak" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap ciri ke jenis fungsi yang paling tepat.",
        buckets: ["Linear", "Kuadrat", "Eksponen", "Nilai mutlak"],
        items: [
          { text: "Gradien tetap, perubahan sama tiap langkah", bucket: "Linear" },
          { text: "Punya titik puncak dan sumbu simetri", bucket: "Kuadrat" },
          { text: "Dikali faktor tetap, meledak cepat", bucket: "Eksponen" },
          { text: "Punya titik sudut tajam di bawah", bucket: "Nilai mutlak" },
          { text: "Grafik garis lurus dengan gradien", bucket: "Linear" },
          { text: "Pertumbuhan atau peluruhan", bucket: "Eksponen" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah tabel menunjukkan x = 1, 2, 3, 4 dengan y = 2, 4, 8, 16. Tiap langkah y dikali berapa?",
        answer: 2,
        solution:
          "Dari 2 ke 4 dikali 2, dari 4 ke 8 dikali 2, dari 8 ke 16 dikali 2. Faktor tetapnya <strong>2</strong>. Karena yang tetap adalah pengali (bukan selisih), ini fungsi eksponen.",
        hint: "Bandingkan tiap nilai dengan nilai sebelumnya: dibagi berapa?",
      },
      {
        type: "case",
        title: "Studi Kasus: Membaca grafik koran",
        html: "Sebuah koran memuat grafik jumlah pengguna sebuah aplikasi yang naik makin curam tiap bulan, dari 1.000 ke 2.000 ke 4.000 ke 8.000. Tanpa rumus pun kita bisa menebak ini pertumbuhan eksponen karena tiap bulan dikali 2, bukan ditambah jumlah tetap. Sebaliknya, grafik penjualan tiket yang naik 50 unit tiap hari menghasilkan garis lurus, tanda fungsi linear. Membaca bentuk lebih cepat daripada menghitung rumus.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Baru sekarang daftar cirinya dirangkum",
        html: "Setelah berlatih menebak, inilah rangkuman sidik jari tiap fungsi. <strong>Linear:</strong> garis lurus, perubahan tetap. <strong>Kuadrat:</strong> parabola simetris dengan titik puncak. <strong>Eksponen:</strong> naik atau turun makin tajam, faktor pengali tetap. <strong>Akar:</strong> naik makin landai, kebalikan kuadrat. <strong>Nilai mutlak:</strong> bentuk huruf V dengan titik sudut. Mengenali fungsi mulai dari bentuk, bukan dari hafalan rumus.",
      },
      {
        type: "takeaways",
        items: [
          "Tiap jenis fungsi punya bentuk grafik khas yang bisa dikenali tanpa rumus.",
          "Garis lurus = linear; parabola simetris = kuadrat; V = nilai mutlak.",
          "Naik makin curam = eksponen; naik makin landai = akar.",
          "Tanyakan lurus atau lengkung, simetris atau tidak, dan bagaimana lajunya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Grafik berbentuk garis lurus menandakan fungsi?",
            options: ["Linear", "Kuadrat", "Eksponen", "Akar"],
            answer: 0,
            explain: "Perubahan tetap menghasilkan garis lurus, ciri fungsi linear.",
          },
          {
            q: "Grafik berbentuk huruf V adalah ciri fungsi?",
            options: ["Eksponen", "Nilai mutlak", "Kuadrat", "Akar"],
            answer: 1,
            explain: "Dua sisi bertemu di titik sudut membentuk V, ciri nilai mutlak.",
          },
          {
            q: "Grafik naik makin curam tanpa simetri menandakan fungsi?",
            options: ["Linear", "Akar", "Eksponen", "Kuadrat"],
            answer: 2,
            explain: "Pengali tetap membuat eksponen naik makin tajam.",
          },
          {
            q: "Parabola simetris dengan titik puncak adalah ciri fungsi?",
            options: ["Kuadrat", "Linear", "Nilai mutlak", "Eksponen"],
            answer: 0,
            explain: "Kuadrat menghasilkan parabola dengan sumbu simetri dan titik puncak.",
          },
          {
            q: "Tabel y = 3, 6, 12, 24 (dikali 2 tiap langkah) menunjukkan fungsi?",
            options: ["Linear", "Eksponen", "Akar", "Nilai mutlak"],
            answer: 1,
            explain: "Yang tetap adalah faktor pengali, bukan selisih, jadi eksponen.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "fungsi-kebalikan",
    levelId: "jenis-fungsi",
    order: 5,
    title: "Fungsi Kebalikan: Saat Satu Naik, yang Lain Turun",
    summary:
      "Sebelum menulis y = k/x, kita bagi-bagi kue dan atur kecepatan sampai pola berbanding terbalik terasa.",
    durationMin: 14,
    tags: ["fungsi", "kebalikan", "berbanding terbalik", "hiperbola"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah perjalanan sejauh 120 km harus ditempuh. Kalau melaju 20 km/jam butuh 6 jam, kalau 40 km/jam cukup 3 jam, kalau 60 km/jam hanya 2 jam. Makin cepat, makin singkat. Tidak seperti hubungan linear yang sama-sama naik, di sini saat satu naik yang lain malah turun. Ayo rasakan dulu pola berlawanan ini sebelum kita beri rumus.",
      },
      {
        type: "video",
        comp: "FungsiVideo",
        title: "Video: Saat Satu Naik, yang Lain Turun",
        caption: "Bila hasil kali dua besaran tetap, keduanya bergerak berlawanan arah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Perhatikan hasil kalinya: 20 × 6 = 120, 40 × 3 = 120, 60 × 2 = 120, 120 × 1 = 120. Selalu 120, yaitu jaraknya. Di hubungan linear, yang tetap adalah selisih. Di sini yang tetap adalah <strong>hasil kali</strong>. Maka kalau kecepatan dilipatgandakan, waktunya pasti separuh. Coba: pada 80 km/jam, berapa jam?",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Lama Perjalanan terhadap Kecepatan (jarak tetap 120 km)",
        unit: "jam",
        source: "perhitungan waktu = 120 / kecepatan",
        note: "Kurva menurun makin landai: menggandakan kecepatan memangkas waktu menjadi separuh. Hasil kali kecepatan dan waktu selalu 120.",
        data: [
          { label: "20 km/j", value: 6, color: "#22d3ee" },
          { label: "40 km/j", value: 3, color: "#22d3ee" },
          { label: "60 km/j", value: 2, color: "#22d3ee" },
          { label: "80 km/j", value: 1.5, color: "#22d3ee" },
          { label: "120 km/j", value: 1, color: "#22d3ee" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Berbanding lurus vs berbanding terbalik",
        html: "Pada hubungan <strong>berbanding lurus</strong>, dua besaran naik bersama dan perbandingannya tetap (y/x tetap). Pada hubungan <strong>berbanding terbalik</strong>, saat satu naik yang lain turun dan <strong>hasil kalinya</strong> yang tetap (x · y tetap). Fungsi kebalikan menggambarkan yang kedua.",
      },
      {
        type: "calcExercise",
        prompt:
          "Perjalanan 120 km. Pada kecepatan 48 km/jam, berapa jam waktu tempuhnya?",
        answer: 2.5,
        suffix: " jam",
        tolerance: 0.05,
        solution:
          "Waktu = 120 / kecepatan = 120 / 48 = <strong>2,5 jam</strong>. Hasil kali 48 × 2,5 = 120, sesuai jaraknya.",
        hint: "Bagi jarak 120 dengan kecepatannya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pekerjaan butuh 72 jam-orang. Jika dikerjakan 8 pekerja, berapa hari selesai (anggap 1 hari kerja per orang per hari)?",
        answer: 9,
        suffix: " hari",
        solution:
          "Total kerja tetap 72 jam-orang. Dengan 8 pekerja: 72 / 8 = <strong>9 hari</strong>. Makin banyak pekerja, makin sedikit harinya, itulah berbanding terbalik.",
        hint: "Bagi total 72 dengan jumlah pekerja.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap hubungan: berbanding lurus atau berbanding terbalik?",
        buckets: ["Berbanding lurus", "Berbanding terbalik"],
        items: [
          { text: "Makin banyak bensin, makin jauh jarak tempuh", bucket: "Berbanding lurus" },
          { text: "Makin cepat berlari, makin singkat waktu tiba", bucket: "Berbanding terbalik" },
          { text: "Makin banyak pekerja, makin singkat waktu kerja", bucket: "Berbanding terbalik" },
          { text: "Makin banyak jam lembur, makin besar upah", bucket: "Berbanding lurus" },
          { text: "Makin banyak orang berbagi kue, makin kecil bagian tiap orang", bucket: "Berbanding terbalik" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Untuk fungsi kebalikan y = 12/x, pasangkan tiap masukan dengan keluarannya.",
        pairs: [
          { left: "x = 2", right: "y = 6" },
          { left: "x = 3", right: "y = 4" },
          { left: "x = 4", right: "y = 3" },
          { left: "x = 6", right: "y = 2" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membagi kue ulang tahun",
        html: "Sebuah loyang berisi 24 potong kue dibagi rata. Untuk 2 anak, tiap anak dapat 12 potong; untuk 3 anak, 8 potong; untuk 4 anak, 6 potong; untuk 6 anak, 4 potong. Jumlah anak dikali bagian per anak selalu 24, yaitu total potongnya. Maka bagian per anak = 24 / jumlah anak. Inilah fungsi kebalikan: makin banyak yang berbagi, makin kecil bagian masing-masing, dan hasil kalinya tetap.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Baru sekarang rumusnya muncul",
        html: "Setelah merasakan polanya, kita beri nama: <strong>fungsi kebalikan f(x) = k/x</strong>, yang menggambarkan hubungan <strong>berbanding terbalik</strong>. Cirinya: <strong>hasil kali x · y selalu tetap (= k)</strong>, grafiknya melengkung turun makin landai (disebut <strong>hiperbola</strong>), dan <strong>x tidak boleh nol</strong> karena pembagian dengan nol tak terdefinisi.",
      },
      {
        type: "takeaways",
        items: [
          "Fungsi kebalikan f(x) = k/x menggambarkan hubungan berbanding terbalik.",
          "Cirinya hasil kali x · y selalu tetap, sebesar k.",
          "Saat satu besaran naik, yang lain turun; menggandakan satu memangkas yang lain jadi separuh.",
          "Domainnya x tidak boleh nol, dan grafiknya berupa kurva menurun (hiperbola).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada hubungan berbanding terbalik, yang selalu tetap adalah?",
            options: ["Hasil kali kedua besaran", "Selisih keduanya", "Jumlah keduanya", "Perbandingan y/x"],
            answer: 0,
            explain: "Berbanding terbalik berarti x · y tetap.",
          },
          {
            q: "Bentuk umum fungsi kebalikan adalah?",
            options: ["y = mx + c", "y = k/x", "y = ax² + bx + c", "y = a·b^x"],
            answer: 1,
            explain: "Fungsi kebalikan berbentuk y = k/x.",
          },
          {
            q: "Jika y = 12/x, maka nilai y saat x = 4 adalah?",
            options: ["2", "3", "4", "6"],
            answer: 1,
            explain: "12 / 4 = 3.",
          },
          {
            q: "Mengapa x tidak boleh nol pada y = k/x?",
            options: [
              "Pembagian dengan nol tak terdefinisi",
              "Karena k selalu negatif",
              "Karena y harus nol",
              "Karena grafiknya garis lurus",
            ],
            answer: 0,
            explain: "Membagi dengan nol tidak terdefinisi, jadi x = 0 dikecualikan.",
          },
          {
            q: "Perjalanan 120 km. Jika kecepatan digandakan dari 30 menjadi 60 km/jam, waktunya?",
            options: [
              "Menjadi separuh",
              "Menjadi dua kali",
              "Tetap sama",
              "Bertambah sedikit",
            ],
            answer: 0,
            explain: "Berbanding terbalik: kecepatan dua kali membuat waktu separuh, dari 4 jam jadi 2 jam.",
          },
        ],
      },
    ],
  },
];
