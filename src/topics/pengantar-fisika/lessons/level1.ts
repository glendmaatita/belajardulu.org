import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "apa-itu-fisika",
    levelId: "besaran-satuan",
    order: 1,
    title: "Apa Itu Fisika?",
    summary:
      "Sebelum satu rumus pun muncul, kita kenali dulu apa yang sebenarnya dikerjakan fisika: mengamati alam, mencari polanya, lalu mengujinya.",
    durationMin: 11,
    tags: ["fisika", "pengantar", "metode ilmiah"],
    blocks: [
      {
        type: "paragraph",
        html: "Kenapa langit biru? Kenapa benda jatuh ke bawah, bukan ke samping? Kenapa es mengapung di air? Fisika bukan tumpukan rumus untuk dihafal, melainkan cara manusia <strong>memahami alam</strong>: mengamati, mencari pola, lalu mengujinya sampai pola itu bisa dipercaya. Sebelum bertemu simbol dan persamaan, mari rasakan dulu apa yang dikerjakan fisika.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Fisika, Bahasa Semesta",
        caption: "Dari jatuhnya apel sampai orbit planet, semuanya mengikuti pola yang sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba jatuhkan sebuah pulpen dan selembar kertas bersamaan. Pulpen lebih dulu menyentuh lantai. Sekarang remas kertasnya jadi bola, ulangi. Hampir bersamaan! Fisika lahir dari rasa penasaran seperti ini: kita tidak menghafal jawaban, kita <strong>bertanya, menebak, lalu menguji</strong>. Ternyata yang memperlambat kertas tadi bukan beratnya, melainkan hambatan udara.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Inti metode ilmiah",
        html: "Fisika bekerja dengan siklus: <strong>amati</strong> gejala, susun <strong>hipotesis</strong> (tebakan terdidik), lakukan <strong>percobaan</strong> dan ukur, lalu bandingkan hasil dengan tebakan. Kalau cocok berulang kali, tebakan itu naik pangkat jadi hukum atau teori. Rumus hanyalah cara ringkas menuliskan pola yang sudah teruji.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap cabang fisika dengan gejala yang dipelajarinya.",
        pairs: [
          { left: "Mekanika", right: "Gerak benda dan gaya" },
          { left: "Termodinamika", right: "Panas dan suhu" },
          { left: "Optika", right: "Cahaya dan lensa" },
          { left: "Elektromagnetisme", right: "Listrik dan magnet" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pertanyaan: bisa dijawab dengan pengukuran fisika, atau bukan ranah fisika?",
        buckets: ["Bisa diukur fisika", "Bukan ranah fisika"],
        items: [
          { text: "Berapa cepat bola menggelinding menuruni bukit?", bucket: "Bisa diukur fisika" },
          { text: "Lagu mana yang paling merdu?", bucket: "Bukan ranah fisika" },
          { text: "Berapa suhu air saat mendidih di puncak gunung?", bucket: "Bisa diukur fisika" },
          { text: "Apakah warna biru lebih indah dari merah?", bucket: "Bukan ranah fisika" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Cahaya merambat sekitar 300.000 km tiap sekon. Berapa jarak yang ditempuh cahaya dalam 2 sekon?",
        answer: 600000,
        tolerance: 1,
        suffix: " km",
        solution:
          "Jarak = kelajuan × waktu = 300.000 km/s × 2 s = <strong>600.000 km</strong>. Perhatikan, kita tidak menghafal angka ini, kita memahaminya: kelajuan dikali waktu memberi jarak. Pola sederhana inilah inti fisika.",
        hint: "Kalikan kelajuan cahaya dengan lama waktunya.",
      },
      {
        type: "case",
        title: "Studi Kasus: Galileo dan Menara Pisa",
        html: "Ratusan tahun orang percaya benda berat pasti jatuh lebih cepat daripada benda ringan, karena Aristoteles berkata begitu. Galileo tidak menghafal otoritas itu, ia <strong>menguji</strong>. Konon ia menjatuhkan dua bola berbeda massa dari ketinggian dan keduanya mendarat hampir bersamaan. Tanpa hambatan udara, semua benda jatuh dengan percepatan sama. Inilah jiwa fisika: percaya pada pengamatan dan percobaan, bukan sekadar pada apa yang sudah lama dikatakan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Fisika adalah ilmu yang mempelajari alam melalui pengamatan, pengukuran, dan pengujian.</strong> Tujuannya menemukan pola yang berlaku umum, lalu menuliskannya secara ringkas (kadang dalam bentuk rumus). Jadi rumus bukan titik awal, melainkan hasil akhir dari proses bertanya dan menguji.",
      },
      {
        type: "takeaways",
        items: [
          "Fisika mempelajari alam lewat pengamatan, pengukuran, dan pengujian.",
          "Metode ilmiah: amati, susun hipotesis, uji dengan percobaan, bandingkan.",
          "Rumus adalah ringkasan pola yang sudah teruji, bukan sesuatu untuk dihafal mentah.",
          "Cabang fisika (mekanika, termodinamika, optika, dan lainnya) mengkaji gejala alam yang berbeda.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama fisika?",
            options: [
              "Menghafal sebanyak mungkin rumus",
              "Memahami pola alam lewat pengamatan dan pengujian",
              "Membuat kalkulator lebih cepat",
              "Menghindari percobaan",
            ],
            answer: 1,
            explain: "Fisika berupaya memahami alam melalui pengamatan, pengukuran, dan pengujian.",
          },
          {
            q: "Dalam metode ilmiah, hipotesis adalah...",
            options: [
              "Kesimpulan akhir yang pasti benar",
              "Tebakan terdidik yang masih harus diuji",
              "Rumus yang sudah baku",
              "Alat ukur",
            ],
            answer: 1,
            explain: "Hipotesis adalah tebakan terdidik yang kebenarannya diuji lewat percobaan.",
          },
          {
            q: "Mengapa kertas yang diremas jatuh lebih cepat daripada kertas lembaran?",
            options: [
              "Karena jadi lebih berat",
              "Karena hambatan udaranya berkurang",
              "Karena gravitasi bertambah",
              "Karena massanya hilang",
            ],
            answer: 1,
            explain: "Meremas mengurangi luas permukaan, sehingga hambatan udara mengecil. Massanya tetap.",
          },
          {
            q: "Cabang fisika yang mempelajari panas dan suhu adalah...",
            options: ["Optika", "Mekanika", "Termodinamika", "Akustika"],
            answer: 2,
            explain: "Termodinamika mengkaji panas, suhu, dan perpindahan energi.",
          },
          {
            q: "Pelajaran utama dari kisah Galileo adalah...",
            options: [
              "Selalu percaya pada otoritas",
              "Pengamatan dan percobaan mengalahkan sekadar pendapat lama",
              "Benda berat selalu jatuh lebih cepat",
              "Fisika tidak butuh pengukuran",
            ],
            answer: 1,
            explain: "Galileo menguji klaim lama dengan percobaan, dan menemukan kenyataannya berbeda.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "besaran-dan-satuan",
    levelId: "besaran-satuan",
    order: 2,
    title: "Besaran Pokok dan Turunan",
    summary:
      "Sebelum menghafal rumus apa pun, kita pelajari cara fisika 'berbicara': mengukur dan menamai apa yang ada di alam.",
    durationMin: 12,
    tags: ["fisika", "besaran", "satuan", "SI"],
    blocks: [
      {
        type: "paragraph",
        html: "Seseorang berkata 'jaraknya 5'. Lima apa? Lima meter, lima kilometer, atau lima langkah? Tanpa <strong>satuan</strong>, sebuah angka tidak berarti. Sebelum bertemu rumus, ayo pahami dulu bagaimana fisika mengukur dan menamai dunia.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Tujuh Besaran Pokok SI",
        caption: "Semua besaran fisika dibangun dari tujuh besaran dasar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba sebutkan apa saja yang bisa diukur pada secangkir kopi: massanya (kg), suhunya (K), waktu menyeduhnya (s). Tiap pengukuran punya <strong>besaran</strong> (apa yang diukur) dan <strong>satuan</strong> (acuan pembandingnya). Amati, hampir semua hal bisa diukur dengan menggabungkan beberapa besaran dasar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Besaran pokok vs turunan",
        html: "<strong>Besaran pokok</strong> berdiri sendiri (panjang, massa, waktu, dan empat lainnya). <strong>Besaran turunan</strong> adalah gabungannya, misalnya kecepatan (panjang dibagi waktu) atau gaya (massa kali percepatan).",
      },
      {
        type: "widget",
        widget: "KonversiSatuan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Satu Kilometer dalam Berbagai Satuan",
        unit: "nilai setara",
        source: "ilustrasi edukatif",
        note: "Jarak yang sama bisa ditulis berbeda. Satuan SI hanya menggeser koma desimal lewat pangkat 10.",
        data: [
          { label: "kilometer", value: 1, color: "#38bdf8" },
          { label: "hektometer", value: 10, color: "#22d3ee" },
          { label: "dekameter", value: 100, color: "#2dd4bf" },
          { label: "meter", value: 1000, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Sebuah meja panjangnya 150 cm. Berapa panjangnya dalam meter?",
        answer: 1.5,
        tolerance: 0.01,
        suffix: " m",
        solution:
          "1 meter = 100 cm, jadi 150 cm dibagi 100 = <strong>1,5 meter</strong>. Konversi satuan hanyalah membagi atau mengali dengan pangkat 10.",
        hint: "Bagi jumlah sentimeter dengan 100.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap besaran sebagai pokok atau turunan.",
        buckets: ["Besaran pokok", "Besaran turunan"],
        items: [
          { text: "Massa (kg)", bucket: "Besaran pokok" },
          { text: "Kecepatan (m/s)", bucket: "Besaran turunan" },
          { text: "Waktu (s)", bucket: "Besaran pokok" },
          { text: "Gaya (newton)", bucket: "Besaran turunan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Hilangnya Mars Climate Orbiter",
        html: "Pada 1999, wahana NASA senilai sekitar USD 125 juta hancur saat mendekati Mars. Penyebabnya bukan teknologi gagal, melainkan <strong>satuan</strong>: satu tim memakai satuan imperial (pon) sementara tim lain memakai satuan metrik (newton). Angka yang sama dengan satuan berbeda membuat wahana salah jalur. Pelajaran fisikanya jelas: angka tanpa satuan yang konsisten bisa berakibat fatal.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum: setiap hasil ukur dalam fisika terdiri dari <strong>angka + satuan</strong>. Sistem Internasional (SI) memakai tujuh besaran pokok dengan satuan baku (meter, kilogram, sekon, ampere, kelvin, mol, candela), dan semua besaran lain diturunkan darinya.",
      },
      {
        type: "takeaways",
        items: [
          "Setiap pengukuran fisika terdiri dari angka dan satuan.",
          "Ada tujuh besaran pokok SI; besaran lain adalah turunannya.",
          "Konversi satuan SI hanyalah perkalian atau pembagian dengan pangkat 10.",
          "Satuan yang konsisten itu krusial, sebab angka tanpa satuan tidak bermakna.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satuan SI untuk massa adalah?",
            options: ["gram", "kilogram", "newton", "pon"],
            answer: 1,
            explain: "Satuan pokok SI untuk massa adalah kilogram (kg).",
          },
          {
            q: "Manakah yang merupakan besaran turunan?",
            options: ["Panjang", "Waktu", "Kecepatan", "Suhu"],
            answer: 2,
            explain: "Kecepatan = panjang dibagi waktu, jadi besaran turunan.",
          },
          {
            q: "250 cm sama dengan berapa meter?",
            options: ["2,5 m", "25 m", "0,25 m", "2500 m"],
            answer: 0,
            explain: "250 dibagi 100 = 2,5 meter.",
          },
          {
            q: "Mengapa angka tanpa satuan bisa menyesatkan?",
            options: [
              "Karena angka selalu salah",
              "Karena tidak jelas acuan pembandingnya",
              "Karena satuan tidak penting",
              "Karena fisika tidak pakai angka",
            ],
            answer: 1,
            explain: "Tanpa satuan, kita tidak tahu '5' itu 5 apa.",
          },
          {
            q: "Berapa jumlah besaran pokok dalam SI?",
            options: ["5", "6", "7", "10"],
            answer: 2,
            explain: "Ada tujuh besaran pokok dalam Sistem Internasional.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "satuan-si",
    levelId: "besaran-satuan",
    order: 3,
    title: "Satuan Sistem Internasional",
    summary:
      "Kenapa seluruh dunia sains sepakat memakai satu set satuan? Kita telusuri tujuh satuan pokok SI dan awalan-awalannya.",
    durationMin: 12,
    tags: ["fisika", "satuan", "SI", "awalan"],
    blocks: [
      {
        type: "paragraph",
        html: "Dulu orang mengukur panjang dengan 'kaki' raja atau 'depa' tangan, sehingga satu meter di satu kota berbeda dengan kota lain. Kekacauan ini mendorong para ilmuwan menyepakati satu acuan bersama: <strong>Sistem Internasional (SI)</strong>. Sebelum menghafal daftar satuan, mari pahami mengapa dunia butuh acuan tunggal.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Tujuh Satuan Pokok SI",
        caption: "Meter, kilogram, sekon, dan empat lainnya menjadi fondasi semua pengukuran.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kamu memesan kawat 'sepanjang 3 hasta' lewat internet ke pabrik di negara lain. Hasta siapa? Tangan siapa yang jadi acuan? Di sinilah SI menyelamatkan kita: satu meter punya definisi yang sama persis di mana pun. Rasakan, <strong>acuan yang seragam</strong> membuat sains dan perdagangan bisa saling dipercaya lintas negara.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Awalan SI: hanya menggeser koma",
        html: "Awalan seperti kilo (×1000), centi (×0,01), dan mili (×0,001) memudahkan menulis besaran sangat besar atau sangat kecil. Jadi 1 km = 1000 m, dan 1 mm = 0,001 m. Semuanya kelipatan pangkat 10, sehingga konversinya cukup menggeser koma desimal.",
      },
      {
        type: "widget",
        widget: "KonversiSatuan",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap besaran pokok SI dengan satuan dan lambangnya yang benar.",
        pairs: [
          { left: "Panjang", right: "meter (m)" },
          { left: "Massa", right: "kilogram (kg)" },
          { left: "Waktu", right: "sekon (s)" },
          { left: "Kuat arus listrik", right: "ampere (A)" },
          { left: "Suhu", right: "kelvin (K)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap awalan SI dengan nilai pengalinya.",
        pairs: [
          { left: "kilo (k)", right: "1000" },
          { left: "centi (c)", right: "0,01" },
          { left: "mili (m)", right: "0,001" },
          { left: "mikro (µ)", right: "0,000001" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Sebuah obat ditakar 250 mg. Berapa massanya dalam gram?",
        answer: 0.25,
        tolerance: 0.001,
        suffix: " g",
        solution:
          "Awalan mili berarti 0,001, jadi 250 mg = 250 × 0,001 g = <strong>0,25 g</strong>. Sekali lagi, kita hanya menggeser koma sesuai awalannya.",
        hint: "1 mg = 0,001 g, jadi bagi 250 dengan 1000.",
      },
      {
        type: "case",
        title: "Studi Kasus: Kilogram yang Akhirnya 'Pensiun'",
        html: "Selama lebih dari seabad, 1 kilogram didefinisikan oleh sepotong logam khusus yang disimpan di Prancis. Masalahnya, massa logam itu perlahan berubah beberapa mikrogram seiring waktu, padahal ia jadi acuan seluruh dunia. Pada 2019, para ilmuwan mengganti definisinya dengan <strong>konstanta alam</strong> (konstanta Planck) yang tidak bisa berubah atau rusak. Pelajarannya: satuan yang baik harus stabil dan bisa diukur ulang siapa saja, kapan saja.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>SI menetapkan tujuh satuan pokok</strong> (meter, kilogram, sekon, ampere, kelvin, mol, candela) sebagai acuan baku sedunia, lengkap dengan <strong>awalan kelipatan pangkat 10</strong> agar besaran sebesar apa pun bisa ditulis rapi. Inilah bahasa pengukuran yang membuat sains bisa saling dipercaya.",
      },
      {
        type: "takeaways",
        items: [
          "SI adalah sistem satuan baku yang disepakati di seluruh dunia.",
          "Ada tujuh satuan pokok: m, kg, s, A, K, mol, dan candela.",
          "Awalan SI (kilo, centi, mili, mikro) adalah kelipatan pangkat 10.",
          "Satuan modern didefinisikan lewat konstanta alam agar stabil dan bisa diukur ulang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satuan SI untuk kuat arus listrik adalah...",
            options: ["volt", "ampere", "watt", "ohm"],
            answer: 1,
            explain: "Satuan pokok SI untuk kuat arus listrik adalah ampere (A).",
          },
          {
            q: "Awalan 'kilo' berarti dikalikan...",
            options: ["100", "1000", "0,001", "1.000.000"],
            answer: 1,
            explain: "Kilo berarti ×1000, jadi 1 km = 1000 m.",
          },
          {
            q: "5000 g sama dengan berapa kilogram?",
            options: ["0,5 kg", "5 kg", "50 kg", "500 kg"],
            answer: 1,
            explain: "1 kg = 1000 g, jadi 5000 g = 5 kg.",
          },
          {
            q: "Mengapa dunia membutuhkan satu sistem satuan seperti SI?",
            options: [
              "Agar pengukuran seragam dan bisa saling dipercaya lintas negara",
              "Agar rumus terlihat rumit",
              "Agar setiap negara punya satuan sendiri",
              "Agar tidak perlu mengukur",
            ],
            answer: 0,
            explain: "Acuan yang seragam membuat sains dan perdagangan bisa saling dipahami.",
          },
          {
            q: "Sejak 2019, satuan kilogram didefinisikan berdasarkan...",
            options: [
              "Sepotong logam di Prancis",
              "Konstanta alam (konstanta Planck)",
              "Berat satu liter air",
              "Massa rata-rata manusia",
            ],
            answer: 1,
            explain: "Definisi kilogram kini berbasis konstanta Planck agar stabil dan tidak berubah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "konversi-satuan",
    levelId: "besaran-satuan",
    order: 4,
    title: "Konversi Satuan",
    summary:
      "Mengubah km/jam jadi m/s bukan sulap. Kita pelajari cara aman mengonversi satuan dengan 'mengalikan dengan 1' yang cerdas.",
    durationMin: 12,
    tags: ["fisika", "konversi", "satuan", "faktor"],
    blocks: [
      {
        type: "paragraph",
        html: "Speedometer mobil menunjukkan 72 km/jam, tetapi rumus fisika butuh satuan m/s. Banyak yang asal mengira-ngira, lalu salah. Padahal ada cara yang selalu benar dan tidak perlu dihafal: <strong>mengalikan dengan 1</strong> dalam bentuk pecahan satuan. Sebelum melihat trik angkanya, mari pahami idenya dulu.",
      },
      {
        type: "video",
        comp: "MatematikaVsBerhitung",
        title: "Video: Berhitung yang Bermakna",
        caption: "Konversi satuan adalah berhitung yang menjaga arti, bukan sekadar menekan tombol.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Karena 1000 m = 1 km, maka pecahan (1000 m / 1 km) nilainya sama dengan <strong>1</strong>. Mengalikan apa pun dengan 1 tidak mengubah nilainya, hanya bentuknya. Coba rasakan: kalau kita susun pecahan satuan agar satuan lama saling mencoret, yang tersisa otomatis satuan baru yang kita inginkan. Tidak ada yang perlu dihafal, cukup atur agar satuannya 'coret-mencoret'.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Resep konversi km/jam ke m/s",
        html: "72 km/jam = 72 × (1000 m / 1 km) × (1 jam / 3600 s). Satuan km dan jam saling mencoret, tersisa m/s. Hasilnya 72 × 1000 / 3600 = 20 m/s. Jalan pintasnya: bagi nilai km/jam dengan 3,6 untuk mendapat m/s.",
      },
      {
        type: "widget",
        widget: "KonversiSatuan",
      },
      {
        type: "calcExercise",
        prompt: "Sebuah motor melaju 90 km/jam. Berapa kelajuannya dalam m/s?",
        answer: 25,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "90 km/jam = 90 × (1000 m / 3600 s) = 90 / 3,6 = <strong>25 m/s</strong>. Kita tidak menebak, kita menyusun pecahan satuan sampai km/jam berubah jadi m/s.",
        hint: "Bagi nilai km/jam dengan 3,6.",
      },
      {
        type: "calcExercise",
        prompt: "Sebuah ruangan luasnya 2,5 m². Berapa luasnya dalam cm²? (ingat: 1 m = 100 cm)",
        answer: 25000,
        tolerance: 1,
        suffix: " cm²",
        solution:
          "Karena satuannya kuadrat, faktornya juga dikuadratkan: 1 m² = (100 cm)² = 10.000 cm². Jadi 2,5 m² = 2,5 × 10.000 = <strong>25.000 cm²</strong>. Hati-hati, untuk luas faktornya 100², bukan 100.",
        hint: "1 m² = (100 cm)² = 10.000 cm².",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap konversi: hasilnya menjadi angka lebih besar atau lebih kecil dari semula?",
        buckets: ["Angka jadi lebih besar", "Angka jadi lebih kecil"],
        items: [
          { text: "5 km diubah ke meter", bucket: "Angka jadi lebih besar" },
          { text: "2000 g diubah ke kilogram", bucket: "Angka jadi lebih kecil" },
          { text: "3 jam diubah ke sekon", bucket: "Angka jadi lebih besar" },
          { text: "500 cm diubah ke meter", bucket: "Angka jadi lebih kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pesawat Gimli Glider Kehabisan Bahan Bakar",
        html: "Pada 1983, sebuah Boeing 767 Air Canada kehabisan bahan bakar di tengah penerbangan dan terpaksa meluncur tanpa mesin sampai mendarat darurat. Salah satu sebabnya, kru salah <strong>mengonversi satuan</strong> bahan bakar antara pon dan kilogram, sehingga jumlah bahan bakar yang dimuat jauh lebih sedikit dari kebutuhan. Untungnya pilot berhasil mendaratkan pesawat tanpa korban jiwa. Pelajarannya: konversi satuan yang ceroboh bukan sekadar soal ujian, kadang menyangkut nyawa.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum metodenya. <strong>Untuk mengonversi satuan, kalikan dengan pecahan satuan yang bernilai 1, disusun agar satuan lama saling mencoret.</strong> Untuk satuan luas, faktornya dikuadratkan; untuk volume, dipangkatkan tiga. Jalan pintas yang sering dipakai: km/jam ke m/s cukup dibagi 3,6.",
      },
      {
        type: "takeaways",
        items: [
          "Konversi satuan = mengalikan dengan pecahan satuan yang bernilai 1.",
          "Susun pecahan agar satuan lama saling mencoret dan tersisa satuan baru.",
          "Untuk luas, faktor konversi dikuadratkan; untuk volume, dipangkatkan tiga.",
          "Jalan pintas: km/jam dibagi 3,6 menghasilkan m/s.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "36 km/jam sama dengan berapa m/s?",
            options: ["6 m/s", "10 m/s", "13 m/s", "100 m/s"],
            answer: 1,
            explain: "36 dibagi 3,6 = 10 m/s.",
          },
          {
            q: "Mengapa kita boleh mengalikan dengan pecahan seperti (1000 m / 1 km)?",
            options: [
              "Karena nilainya sama dengan 1, jadi tidak mengubah besaran",
              "Karena angkanya bagus",
              "Karena km lebih besar dari m",
              "Karena fisika selalu pakai 1000",
            ],
            answer: 0,
            explain: "1000 m = 1 km, jadi pecahan itu bernilai 1 dan hanya mengubah bentuk satuannya.",
          },
          {
            q: "1 m² sama dengan berapa cm²?",
            options: ["100 cm²", "1000 cm²", "10.000 cm²", "1.000.000 cm²"],
            answer: 2,
            explain: "1 m² = (100 cm)² = 10.000 cm², karena satuan luas faktornya dikuadratkan.",
          },
          {
            q: "2 jam sama dengan berapa sekon?",
            options: ["120 s", "1200 s", "3600 s", "7200 s"],
            answer: 3,
            explain: "1 jam = 3600 s, jadi 2 jam = 7200 s.",
          },
          {
            q: "Saat mengubah 5 km menjadi meter, angkanya akan...",
            options: [
              "menjadi lebih kecil",
              "menjadi lebih besar (5000)",
              "tetap 5",
              "menjadi nol",
            ],
            answer: 1,
            explain: "Meter lebih kecil dari kilometer, jadi diperlukan angka lebih besar: 5000 m.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "skalar-vektor",
    levelId: "besaran-satuan",
    order: 5,
    title: "Besaran Skalar dan Vektor",
    summary:
      "Kenapa '5 km' kadang tidak cukup, dan kita perlu '5 km ke utara'? Kita kenali beda besaran yang punya arah dan yang tidak.",
    durationMin: 12,
    tags: ["fisika", "skalar", "vektor", "arah"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu berjalan 3 km, lalu balik 3 km ke titik awal. Jarak yang ditempuh 6 km, tetapi <strong>perpindahanmu nol</strong>, karena kamu kembali ke tempat semula. Bagaimana satu perjalanan bisa punya dua angka? Jawabannya: sebagian besaran membutuhkan <strong>arah</strong>. Sebelum melihat aturannya, mari rasakan dulu beda keduanya.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Ketika Arah Ikut Menentukan",
        caption: "Dorongan ke kiri dan ke kanan sama besar bisa saling meniadakan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua orang menarik sebuah kotak. Kalau keduanya menarik ke kanan dengan gaya sama, kotak melaju cepat. Tapi kalau satu menarik ke kiri dan satu ke kanan sama kuat, kotak diam. Gaya yang sama besar bisa memberi hasil berbeda <strong>tergantung arahnya</strong>. Rasakan: besaran seperti ini, yang butuh besar dan arah, kita sebut <strong>vektor</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Skalar vs vektor",
        html: "<strong>Skalar</strong> cukup dinyatakan dengan angka dan satuan saja, misalnya suhu 30°C, massa 5 kg, atau waktu 10 s. <strong>Vektor</strong> butuh angka, satuan, <em>dan</em> arah, misalnya kecepatan 20 m/s ke timur, atau gaya 10 N ke bawah.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap besaran sebagai skalar (tanpa arah) atau vektor (punya arah).",
        buckets: ["Skalar", "Vektor"],
        items: [
          { text: "Suhu 30 derajat Celsius", bucket: "Skalar" },
          { text: "Kecepatan 20 m/s ke timur", bucket: "Vektor" },
          { text: "Massa 5 kg", bucket: "Skalar" },
          { text: "Gaya 10 N ke bawah", bucket: "Vektor" },
          { text: "Perpindahan 3 km ke utara", bucket: "Vektor" },
          { text: "Waktu 12 sekon", bucket: "Skalar" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Seseorang berjalan 4 m ke timur lalu 3 m ke utara. Berapa besar perpindahannya (jarak garis lurus dari titik awal ke titik akhir)?",
        answer: 5,
        tolerance: 0.1,
        suffix: " m",
        solution:
          "Karena kedua arah saling tegak lurus, besar perpindahan dihitung seperti sisi miring: √(4² + 3²) = √(16 + 9) = √25 = <strong>5 m</strong>. Bandingkan dengan jarak tempuh yang 4 + 3 = 7 m. Arah membuat keduanya berbeda.",
        hint: "Gunakan teorema Pythagoras pada segitiga siku-siku dengan sisi 4 dan 3.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua gaya searah, 12 N dan 8 N, bekerja pada satu benda ke kanan. Berapa besar gaya total (resultan)?",
        answer: 20,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Karena keduanya searah, besarnya tinggal dijumlahkan: 12 N + 8 N = <strong>20 N ke kanan</strong>. Kalau berlawanan arah, justru dikurangi menjadi 4 N. Inilah pentingnya memperhatikan arah pada vektor.",
        hint: "Gaya searah dijumlahkan, gaya berlawanan dikurangkan.",
      },
      {
        type: "case",
        title: "Studi Kasus: Perahu Menyeberang Sungai Berarus",
        html: "Seorang pendayung mengarahkan perahunya lurus menyeberangi sungai, tetapi ia selalu mendarat lebih ke hilir, bukan tepat di seberang. Mengapa? Karena kecepatan perahu dan kecepatan arus adalah <strong>vektor</strong> yang punya arah berbeda, dan keduanya berpadu. Para insinyur dan nahkoda harus menjumlahkan vektor-vektor ini untuk tahu lintasan sebenarnya. Tanpa memperhitungkan arah, kapal bisa meleset jauh dari tujuan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Besaran skalar cukup dengan angka dan satuan; besaran vektor butuh tambahan arah.</strong> Vektor yang searah dijumlahkan, yang berlawanan dikurangkan, dan yang saling tegak lurus dipadukan dengan teorema Pythagoras: resultan = √(a² + b²). Arah bukan hiasan, ia ikut menentukan hasil akhir.",
      },
      {
        type: "takeaways",
        items: [
          "Skalar cukup dinyatakan dengan angka dan satuan (suhu, massa, waktu).",
          "Vektor butuh angka, satuan, dan arah (kecepatan, gaya, perpindahan).",
          "Vektor searah dijumlahkan, berlawanan dikurangkan.",
          "Vektor tegak lurus dipadukan dengan Pythagoras: resultan = √(a² + b²).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Manakah yang merupakan besaran vektor?",
            options: ["Massa", "Suhu", "Kecepatan", "Waktu"],
            answer: 2,
            explain: "Kecepatan punya besar dan arah, jadi termasuk vektor.",
          },
          {
            q: "Apa yang membedakan vektor dari skalar?",
            options: [
              "Vektor punya arah, skalar tidak",
              "Vektor selalu lebih besar",
              "Skalar tidak punya satuan",
              "Tidak ada bedanya",
            ],
            answer: 0,
            explain: "Ciri khas vektor adalah memiliki arah, sedangkan skalar tidak.",
          },
          {
            q: "Seseorang berjalan 6 m ke utara lalu 6 m ke selatan. Perpindahannya adalah...",
            options: ["12 m", "6 m", "0 m", "3 m"],
            answer: 2,
            explain: "Ia kembali ke titik awal, jadi perpindahannya nol meski jaraknya 12 m.",
          },
          {
            q: "Dua gaya 10 N dan 6 N berlawanan arah pada satu benda. Resultannya...",
            options: ["16 N", "4 N", "60 N", "0 N"],
            answer: 1,
            explain: "Gaya berlawanan dikurangkan: 10 N - 6 N = 4 N searah gaya yang lebih besar.",
          },
          {
            q: "Perpindahan 8 m ke timur dan 6 m ke utara menghasilkan besar perpindahan...",
            options: ["14 m", "10 m", "2 m", "48 m"],
            answer: 1,
            explain: "√(8² + 6²) = √(64 + 36) = √100 = 10 m.",
          },
        ],
      },
    ],
  },
];
