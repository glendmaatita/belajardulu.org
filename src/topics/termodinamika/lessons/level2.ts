import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "kapasitas-kalor-dan-kalor-jenis",
    levelId: "perpindahan-kapasitas-kalor",
    order: 1,
    title: "Kapasitas Kalor dan Kalor Jenis",
    summary:
      "Pasir pantai membakar telapak kaki padahal air lautnya sejuk, di bawah matahari yang sama. Rahasianya: kalor jenis. Kita temukan dari pengalaman dulu.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "kalor jenis", "kapasitas kalor"],
    blocks: [
      {
        type: "paragraph",
        html: "Siang terik di pantai: pasir panas membakar telapak kaki, tapi begitu kamu masuk ke air laut, terasa sejuk. Padahal matahari menyinari keduanya sama. Mengapa pasir cepat panas dan air tidak? Jawabannya satu sifat zat bernama <strong>kalor jenis</strong>. Ayo rasakan dulu fenomenanya sebelum menuliskan rumus.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Energi untuk Menaikkan Suhu",
        caption: "Menaikkan suhu zat butuh energi; tiap zat punya 'harga' energinya sendiri.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan memanaskan 1 kg air dan 1 kg minyak goreng di atas api yang sama selama satu menit. Minyak akan jauh lebih cepat panas. Air seakan 'keras kepala' menahan kenaikan suhu. Sifat inilah <strong>kalor jenis</strong>: jumlah kalor untuk menaikkan suhu 1 kg zat sebesar 1 °C. Air punya kalor jenis sangat tinggi, itulah kenapa ia dipakai sebagai pendingin mesin.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kalor jenis vs kapasitas kalor",
        html: "<strong>Kalor jenis (c)</strong> adalah sifat zat: kalor per kilogram per derajat (J/kg·°C). <strong>Kapasitas kalor (C)</strong> adalah sifat benda tertentu: kalor per derajat untuk seluruh benda itu (J/°C), yaitu C = m·c. Air punya c besar (sekitar 4200 J/kg·°C), jadi butuh banyak energi untuk memanaskannya.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kalor Jenis Berbagai Zat",
        unit: "J/kg·°C",
        source: "nilai kalor jenis acuan",
        note: "Air menonjol paling tinggi. Untuk menaikkan suhu 1 kg air sebesar 1 °C butuh 4200 J, sekitar sepuluh kali lebih banyak daripada untuk besi.",
        data: [
          { label: "Air", value: 4200, color: "#38bdf8" },
          { label: "Minyak", value: 2000, color: "#fbbf24" },
          { label: "Aluminium", value: 900, color: "#f59e0b" },
          { label: "Pasir", value: 830, color: "#a16207" },
          { label: "Besi", value: 450, color: "#a3a3a3" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa kalor (joule) untuk memanaskan 2 kg air dari 20 °C menjadi 80 °C? Pakai c air = 4200 J/kg·°C.",
        answer: 504000,
        tolerance: 1000,
        suffix: " J",
        solution:
          "Pakai Q = m·c·ΔT. Massa m = 2 kg, c = 4200, ΔT = 80 − 20 = 60 °C. Maka Q = 2 × 4200 × 60 = <strong>504.000 J</strong> (504 kJ). Itu sebabnya merebus air terasa lama.",
        hint: "Q = m × c × ΔT, dengan ΔT = suhu akhir − suhu awal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sepotong besi 0,5 kg menyerap 9000 J kalor. Berapa kenaikan suhunya (°C)? Pakai c besi = 450 J/kg·°C.",
        answer: 40,
        tolerance: 0.5,
        suffix: " °C",
        solution:
          "Dari Q = m·c·ΔT, maka ΔT = Q / (m·c) = 9000 / (0,5 × 450) = 9000 / 225 = <strong>40 °C</strong>. Karena kalor jenis besi kecil, suhunya naik banyak dengan kalor sedang.",
        hint: "Susun ulang rumus menjadi ΔT = Q / (m × c).",
      },
      {
        type: "case",
        title: "Studi Kasus: Air sebagai Pendingin Mesin Mobil",
        html: "Mesin mobil memakai air (dicampur coolant) untuk membuang panas, bukan minyak atau cairan lain sembarangan. Alasannya fisika murni: kalor jenis air sangat tinggi, sekitar 4200 J/kg·°C, sehingga sejumlah kecil air mampu menyerap kalor besar dari mesin tanpa suhunya melonjak drastis. Air bersirkulasi ke radiator, melepas kalor, lalu kembali. Memahami <strong>kalor jenis</strong> langsung menjelaskan pilihan rekayasa ini.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan fenomenanya, rumus jadi jelas. Kalor untuk mengubah suhu: <strong>Q = m·c·ΔT</strong>, dengan m massa, c kalor jenis, ΔT perubahan suhu. Kapasitas kalor benda <strong>C = m·c</strong>. Saat zat berubah wujud (suhu tetap), pakai kalor laten: <strong>Q = m·L</strong>, dengan L kalor laten lebur atau uap.",
      },
      {
        type: "takeaways",
        items: [
          "Kalor jenis c adalah energi untuk menaikkan suhu 1 kg zat sebesar 1 °C.",
          "Rumus inti perubahan suhu: Q = m·c·ΔT.",
          "Air punya kalor jenis sangat tinggi, ideal sebagai pendingin.",
          "Kapasitas kalor benda C = m·c, sifat benda itu sebagai keseluruhan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti kalor jenis air 4200 J/kg·°C?",
            options: [
              "Air mendidih pada 4200 °C",
              "Butuh 4200 J menaikkan 1 kg air sebesar 1 °C",
              "Air punya massa 4200 kg",
              "Air melepas 4200 J saat membeku",
            ],
            answer: 1,
            explain: "Kalor jenis = kalor per kg per derajat kenaikan suhu.",
          },
          {
            q: "Kalor untuk memanaskan 3 kg air sebesar 10 °C (c = 4200) adalah?",
            options: ["126.000 J", "12.600 J", "1.260 J", "420.000 J"],
            answer: 0,
            explain: "Q = 3 × 4200 × 10 = 126.000 J.",
          },
          {
            q: "Mengapa pasir lebih cepat panas daripada air di pantai?",
            options: [
              "Pasir lebih berat",
              "Kalor jenis pasir lebih kecil daripada air",
              "Air tidak menyerap kalor",
              "Matahari hanya menyinari pasir",
            ],
            answer: 1,
            explain: "Kalor jenis pasir kecil, jadi suhunya naik lebih cepat.",
          },
          {
            q: "Hubungan kapasitas kalor C dengan kalor jenis c adalah?",
            options: ["C = c / m", "C = m·c", "C = m / c", "C = m + c"],
            answer: 1,
            explain: "Kapasitas kalor benda C = massa × kalor jenis.",
          },
          {
            q: "Sepotong logam menyerap kalor sama tapi suhunya naik lebih banyak daripada air. Artinya logam itu?",
            options: [
              "Kalor jenisnya lebih besar",
              "Kalor jenisnya lebih kecil",
              "Tidak punya kalor jenis",
              "Lebih berat",
            ],
            answer: 1,
            explain: "Kalor jenis kecil berarti suhu naik banyak dengan kalor yang sama.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "asas-black",
    levelId: "perpindahan-kapasitas-kalor",
    order: 2,
    title: "Asas Black: Percampuran Panas dan Dingin",
    summary:
      "Mencampur air panas dan air dingin tidak menghasilkan suhu rata-rata sembarangan. Ada aturan kekal kalor yang menentukannya. Kita uji dulu lewat percobaan sederhana.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "asas black", "kesetimbangan termal"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu mencampur secangkir air panas 90 °C dengan dua cangkir air dingin 20 °C. Berapa suhu akhir campurannya? Bukan tepat di tengah, dan bukan tebakan. Ada hukum yang menentukannya: <strong>kalor yang dilepas air panas tepat sama dengan kalor yang diterima air dingin</strong>. Ayo uji dulu gagasan ini sebelum menulis rumusnya.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Kekekalan Energi pada Percampuran",
        caption: "Saat dua benda bercampur, kalor hanya berpindah, tidak hilang dan tidak tercipta.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Campur air 90 °C dan air 20 °C dalam jumlah sama, lalu ukur suhu akhirnya: sekitar 55 °C, tepat di tengah karena massanya sama. Sekarang tambah air dinginnya jadi dua kali lebih banyak: suhu akhir bergeser lebih dekat ke 20 °C. Amati polanya: <strong>benda dengan massa lebih besar 'menarik' suhu akhir ke arahnya</strong>. Kalor mengalir dari panas ke dingin sampai keduanya bertemu di satu suhu, yaitu kesetimbangan termal.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kesetimbangan termal",
        html: "Saat dua benda bersuhu beda disentuhkan, kalor mengalir dari yang panas ke yang dingin sampai suhunya sama. Pada keadaan ini, sistem mencapai <strong>kesetimbangan termal</strong>. Jika tidak ada kalor yang bocor ke lingkungan, maka kalor yang dilepas benda panas persis sama dengan kalor yang diterima benda dingin. Inilah inti <strong>asas Black</strong>, sebuah penerapan langsung kekekalan energi.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Suhu Campuran Dua Air Bersuhu 90 °C dan 20 °C",
        unit: "°C",
        source: "dihitung dari asas Black, c air sama",
        note: "Makin banyak air dingin dibanding air panas, makin dekat suhu akhir ke 20 °C. Nilai dihitung dari rata-rata berbobot massa, bukan tebakan.",
        data: [
          { label: "Panas 3 : dingin 1", value: 72.5, color: "#f87171" },
          { label: "Panas 1 : dingin 1", value: 55, color: "#fb923c" },
          { label: "Panas 1 : dingin 2", value: 43.3, color: "#fbbf24" },
          { label: "Panas 1 : dingin 3", value: 37.5, color: "#38bdf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebanyak 0,2 kg air 90 °C dicampur dengan 0,3 kg air 20 °C. Berapa suhu akhir campurannya (°C)? Anggap kalor jenis air sama dan tidak ada kalor yang bocor.",
        answer: 48,
        tolerance: 0.5,
        suffix: " °C",
        solution:
          "Asas Black: m₁c(T₁ − Tc) = m₂c(Tc − T₂). Karena c sama, kita pakai rata-rata berbobot massa: Tc = (0,2×90 + 0,3×20) / (0,2 + 0,3) = (18 + 6) / 0,5 = 24 / 0,5 = <strong>48 °C</strong>. Suhu akhir lebih dekat ke 20 °C karena air dingin lebih banyak.",
        hint: "Tc = (m₁T₁ + m₂T₂) / (m₁ + m₂) bila kalor jenisnya sama.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebanyak 0,4 kg air 100 °C dicampur dengan 0,6 kg air 40 °C. Berapa suhu akhirnya (°C)? Anggap kalor jenis air sama.",
        answer: 64,
        tolerance: 0.5,
        suffix: " °C",
        solution:
          "Tc = (0,4×100 + 0,6×40) / (0,4 + 0,6) = (40 + 24) / 1,0 = 64 / 1 = <strong>64 °C</strong>. Cek: air panas turun 36 °C, air dingin naik 24 °C, dan 0,4×36 = 0,6×24 = 14,4, jadi kalor seimbang.",
        hint: "Pakai rata-rata berbobot massa, lalu cek kalor lepas = kalor terima.",
      },
      {
        type: "classifyExercise",
        prompt: "Pada percampuran dua benda, kelompokkan tiap pernyataan: benar atau keliru.",
        buckets: ["Benar", "Keliru"],
        items: [
          { text: "Kalor yang dilepas benda panas = kalor yang diterima benda dingin", bucket: "Benar" },
          { text: "Kalor mengalir sampai kedua benda bersuhu sama", bucket: "Benar" },
          { text: "Suhu akhir selalu tepat di tengah, apa pun massanya", bucket: "Keliru" },
          { text: "Benda bermassa lebih besar menarik suhu akhir ke arahnya", bucket: "Benar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kalorimeter Mengukur Kalor Jenis",
        html: "Bagaimana ilmuwan mengukur kalor jenis logam yang belum diketahui? Mereka memanaskan logam itu lalu mencelupkannya ke air dingin di dalam <strong>kalorimeter</strong>, wadah yang menahan kalor agar tidak bocor. Dengan mengukur suhu akhir, lalu menerapkan asas Black (kalor lepas logam = kalor terima air), nilai kalor jenis logam bisa dihitung. Jadi asas Black bukan sekadar teori, melainkan alat ukur nyata di laboratorium.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menguji polanya, asas Black ditulis rapi: <strong>Q<sub>lepas</sub> = Q<sub>terima</sub></strong>. Diuraikan menjadi <strong>m₁·c₁·(T₁ − Tc) = m₂·c₂·(Tc − T₂)</strong>, dengan T₁ suhu benda panas, T₂ suhu benda dingin, dan Tc suhu kesetimbangan. Jika kedua zat sama (c sama), rumus menyederhana jadi rata-rata berbobot massa: <strong>Tc = (m₁T₁ + m₂T₂)/(m₁ + m₂)</strong>.",
      },
      {
        type: "takeaways",
        items: [
          "Saat dua benda bercampur, kalor mengalir sampai keduanya setimbang termal.",
          "Asas Black: kalor yang dilepas = kalor yang diterima (Q lepas = Q terima).",
          "Rumus lengkap: m₁c₁(T₁ − Tc) = m₂c₂(Tc − T₂).",
          "Suhu akhir condong ke benda bermassa atau berkapasitas kalor lebih besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Asas Black menyatakan bahwa pada percampuran?",
            options: [
              "Suhu selalu naik",
              "Kalor yang dilepas = kalor yang diterima",
              "Kalor menghilang",
              "Massa berubah",
            ],
            answer: 1,
            explain: "Asas Black: Q lepas = Q terima, penerapan kekekalan energi.",
          },
          {
            q: "Mencampur 1 kg air 80 °C dengan 1 kg air 20 °C (c sama) menghasilkan suhu?",
            options: ["50 °C", "60 °C", "40 °C", "100 °C"],
            answer: 0,
            explain: "Massa sama, jadi suhu akhir rata-rata: (80 + 20)/2 = 50 °C.",
          },
          {
            q: "Jika air dingin jauh lebih banyak daripada air panas, suhu akhir akan?",
            options: [
              "Lebih dekat ke suhu air panas",
              "Lebih dekat ke suhu air dingin",
              "Tepat di tengah",
              "Lebih tinggi dari air panas",
            ],
            answer: 1,
            explain: "Massa dingin lebih besar menarik suhu akhir ke arahnya.",
          },
          {
            q: "Saat dua benda mencapai kesetimbangan termal, maka?",
            options: [
              "Suhunya menjadi sama",
              "Salah satu membeku",
              "Kalor terus mengalir selamanya",
              "Suhunya makin berbeda",
            ],
            answer: 0,
            explain: "Kesetimbangan termal berarti kedua benda bersuhu sama.",
          },
          {
            q: "Alat untuk mengukur kalor jenis lewat asas Black disebut?",
            options: ["Termostat", "Kalorimeter", "Barometer", "Bimetal"],
            answer: 1,
            explain: "Kalorimeter menahan kalor agar asas Black bisa dipakai mengukur kalor jenis.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "perpindahan-kalor",
    levelId: "perpindahan-kapasitas-kalor",
    order: 3,
    title: "Tiga Cara Perpindahan Kalor",
    summary:
      "Gagang panci ikut panas, asap dapur naik, dan wajah terasa hangat di depan api unggun. Tiga cara kalor berpindah kita temukan dari kejadian nyata dulu.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "konduksi", "konveksi", "radiasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu memasak air. Gagang sendok logam yang menempel di panci ikut panas, uap dan air berputar dalam panci, dan tanganmu yang berjarak beberapa sentimeter dari kompor pun terasa hangat. Tiga peristiwa, tiga cara kalor berpindah: <strong>konduksi</strong>, <strong>konveksi</strong>, dan <strong>radiasi</strong>. Ayo kenali wujudnya dulu sebelum menyentuh rumus.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Tiga Jalan Kalor Berpindah",
        caption: "Konduksi lewat sentuhan, konveksi lewat aliran zat, radiasi lewat gelombang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sentuh gagang logam dan gagang kayu dari panci yang sama. Logam terasa lebih panas karena menghantarkan kalor lebih baik (konduksi). Lihat air mendidih: gelembung panas naik, air dingin turun, membentuk arus (konveksi). Dekatkan tangan ke samping api, bukan di atas: kamu tetap merasa hangat tanpa sentuhan dan tanpa udara naik, itulah radiasi. Amati ketiganya bekerja bersamaan di dapur.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga mekanisme",
        html: "<strong>Konduksi</strong>: kalor merambat lewat zat padat tanpa zatnya berpindah, dari partikel ke partikel. <strong>Konveksi</strong>: kalor terbawa aliran fluida (zat cair atau gas) yang panas naik dan dingin turun. <strong>Radiasi</strong>: kalor berpindah sebagai gelombang elektromagnetik, bahkan menembus ruang hampa, seperti panas matahari sampai ke Bumi.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Konduktivitas Termal Berbagai Bahan",
        unit: "W/m·K",
        source: "nilai konduktivitas termal acuan",
        note: "Makin tinggi nilainya, makin cepat bahan menghantarkan kalor. Logam jauh di atas kayu dan udara, itulah sebabnya gagang panci sering dibuat dari kayu atau plastik.",
        data: [
          { label: "Tembaga", value: 401, color: "#fb923c" },
          { label: "Aluminium", value: 237, color: "#f59e0b" },
          { label: "Besi", value: 80, color: "#a3a3a3" },
          { label: "Kaca", value: 0.8, color: "#38bdf8" },
          { label: "Kayu", value: 0.15, color: "#a16207" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap peristiwa sebagai konduksi, konveksi, atau radiasi.",
        buckets: ["Konduksi", "Konveksi", "Radiasi"],
        items: [
          { text: "Gagang sendok logam memanas di air panas", bucket: "Konduksi" },
          { text: "Asap dan udara panas naik dari api", bucket: "Konveksi" },
          { text: "Panas matahari sampai ke Bumi lewat ruang hampa", bucket: "Radiasi" },
          { text: "Angin laut akibat udara panas darat naik", bucket: "Konveksi" },
          { text: "Setrika panas menghantar ke kain yang disentuhnya", bucket: "Konduksi" },
          { text: "Wajah terasa hangat di depan api unggun", bucket: "Radiasi" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap mekanisme dengan ciri khasnya.",
        pairs: [
          { left: "Konduksi", right: "Lewat sentuhan zat padat, zat tidak berpindah" },
          { left: "Konveksi", right: "Terbawa aliran fluida yang panas naik dingin turun" },
          { left: "Radiasi", right: "Gelombang elektromagnetik, bisa menembus ruang hampa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Termos yang Menahan Tiga Jalan Kalor",
        html: "Termos menjaga kopi tetap panas berjam-jam dengan melawan ketiga mekanisme sekaligus. Dinding kacanya tipis dan ruang antar-dindingnya divakum, sehingga <strong>konduksi</strong> dan <strong>konveksi</strong> nyaris terhenti karena tidak ada zat penghantar. Permukaan dalamnya dilapisi cermin mengilap untuk memantulkan kembali <strong>radiasi</strong> panas. Inilah penerapan langsung pemahaman tiga jalan perpindahan kalor.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami wujudnya, rumus jadi masuk akal. Laju konduksi: <strong>Q/t = k·A·ΔT / L</strong>, dengan k konduktivitas, A luas, ΔT beda suhu, L tebal. Konveksi mengikuti <strong>Q/t = h·A·ΔT</strong>. Radiasi mengikuti Hukum Stefan-Boltzmann: <strong>P = e·σ·A·T⁴</strong>, dengan σ = 5,67 × 10⁻⁸ W/m²K⁴. Perhatikan radiasi tumbuh dengan pangkat empat suhu mutlak.",
      },
      {
        type: "takeaways",
        items: [
          "Konduksi merambat lewat zat padat tanpa zatnya ikut berpindah.",
          "Konveksi membawa kalor lewat aliran fluida (panas naik, dingin turun).",
          "Radiasi memindahkan kalor sebagai gelombang, bahkan di ruang hampa.",
          "Laju radiasi sebanding dengan pangkat empat suhu mutlak (T⁴).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Panas matahari sampai ke Bumi melalui ruang hampa lewat?",
            options: ["Konduksi", "Konveksi", "Radiasi", "Sentuhan"],
            answer: 2,
            explain: "Hanya radiasi yang bisa menembus ruang hampa.",
          },
          {
            q: "Air mendidih membentuk arus naik-turun. Ini contoh?",
            options: ["Konduksi", "Konveksi", "Radiasi", "Evaporasi"],
            answer: 1,
            explain: "Aliran fluida panas naik dan dingin turun adalah konveksi.",
          },
          {
            q: "Mengapa gagang panci dibuat dari kayu atau plastik?",
            options: [
              "Karena lebih murah saja",
              "Karena konduktivitas termalnya rendah",
              "Karena memantulkan radiasi",
              "Karena menghantar kalor lebih cepat",
            ],
            answer: 1,
            explain: "Kayu dan plastik konduktivitasnya rendah, jadi tidak cepat panas.",
          },
          {
            q: "Konduksi terjadi paling baik pada?",
            options: ["Ruang hampa", "Logam padat", "Udara diam", "Cahaya"],
            answer: 1,
            explain: "Logam menghantarkan kalor lewat konduksi dengan sangat baik.",
          },
          {
            q: "Laju radiasi sebanding dengan?",
            options: ["T", "T²", "T³", "T⁴"],
            answer: 3,
            explain: "Hukum Stefan-Boltzmann: daya radiasi sebanding dengan T⁴.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "konduksi",
    levelId: "perpindahan-kapasitas-kalor",
    order: 4,
    title: "Konduksi: Menghantar Lewat Sentuhan",
    summary:
      "Lantai keramik terasa lebih dingin daripada karpet padahal suhunya sama, dan dinding tebal menahan panas lebih baik. Semua soal konduksi. Kita selami dulu sebelum berumus.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "konduksi", "isolasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Pagi hari, kakimu menapak lantai keramik dan terasa dingin, tetapi begitu pindah ke karpet, terasa hangat. Padahal termometer mengukur suhu keduanya sama. Yang berbeda adalah seberapa cepat masing-masing <strong>menghantarkan kalor</strong> keluar dari kakimu. Keramik menyedot kalor dengan cepat, karpet tidak. Ayo selami konduksi dulu sebelum kita susun rumus lajunya.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Kalor Merambat Antarpartikel",
        caption: "Pada konduksi, partikel yang bergetar cepat menularkan getarannya ke tetangga.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang ujung sendok logam panjang yang ujung lainnya dicelup ke air panas: lama-lama ujung yang kamu pegang ikut menghangat. Sekarang bayangkan sendok yang dua kali lebih panjang, panasnya merambat lebih lambat sampai ke tanganmu. Amati polanya: laju kalor <strong>naik</strong> bila bedanya suhu besar dan penampangnya lebar, tetapi <strong>turun</strong> bila bendanya makin tebal atau panjang. Itulah inti konduksi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa yang menentukan laju konduksi",
        html: "Empat hal mengatur seberapa cepat kalor menembus benda padat: <strong>konduktivitas termal (k)</strong> bahannya, <strong>luas penampang (A)</strong>, <strong>beda suhu (ΔT)</strong> antara dua sisi, dan <strong>tebal (L)</strong> benda. Bahan dengan k tinggi (logam) disebut konduktor, bahan dengan k rendah (kayu, busa, udara diam) disebut isolator. Dinding rumah dan baju tebal memperlambat konduksi dengan memperbesar L dan memakai bahan ber-k rendah.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Laju Kalor Bocor lewat Dinding vs Tebal Isolasi",
        unit: "watt",
        source: "dihitung dari Q/t = k·A·ΔT/L, k=0,04, A=10 m², ΔT=20 °C",
        note: "Makin tebal isolasi, makin kecil kalor yang bocor, tetapi tidak linear: menggandakan tebal memangkas kebocoran jadi separuh. Nilai dihitung langsung dari rumus konduksi.",
        data: [
          { label: "5 cm", value: 160, color: "#f87171" },
          { label: "10 cm", value: 80, color: "#fb923c" },
          { label: "20 cm", value: 40, color: "#fbbf24" },
          { label: "40 cm", value: 20, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dinding berinsulasi luas 10 m² dan tebal 0,1 m memisahkan ruang 25 °C dari luar 5 °C. Berapa laju kalor yang bocor (watt)? Pakai k = 0,04 W/m·K.",
        answer: 80,
        tolerance: 1,
        suffix: " W",
        solution:
          "Pakai Q/t = k·A·ΔT/L. ΔT = 25 − 5 = 20 °C, jadi Q/t = (0,04 × 10 × 20) / 0,1 = 8 / 0,1 = <strong>80 W</strong>. Sebanding dengan beban kecil; itulah gunanya isolasi ber-k rendah.",
        hint: "Q/t = k·A·ΔT/L, dengan ΔT beda suhu kedua sisi dinding.",
      },
      {
        type: "calcExercise",
        prompt:
          "Batang tembaga berpenampang 0,002 m² dan panjang 0,4 m menghubungkan dua benda yang berbeda suhu 50 °C. Berapa laju kalor (watt)? Pakai k tembaga = 401 W/m·K.",
        answer: 100.25,
        tolerance: 2,
        suffix: " W",
        solution:
          "Q/t = k·A·ΔT/L = (401 × 0,002 × 50) / 0,4 = 40,1 / 0,4 = <strong>100,25 W</strong>. Karena tembaga konduktor sangat baik (k besar), kalor mengalir deras walau penampangnya kecil.",
        hint: "Masukkan k tembaga yang besar ke Q/t = k·A·ΔT/L.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap faktor dengan pengaruhnya pada laju konduksi.",
        pairs: [
          { left: "Konduktivitas k makin besar", right: "Laju kalor makin besar" },
          { left: "Tebal L makin besar", right: "Laju kalor makin kecil" },
          { left: "Beda suhu ΔT makin besar", right: "Laju kalor makin besar" },
          { left: "Luas penampang A makin besar", right: "Laju kalor makin besar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dinding Rumah Berlapis di Negeri Empat Musim",
        html: "Di negara dingin, dinding rumah dibuat berongga dan diisi busa atau wol kaca. Mengapa tidak dinding beton padat saja yang tebal? Karena yang menentukan adalah hasil bagi <strong>k dibagi L</strong>: bahan ber-k sangat rendah seperti wol kaca menahan kalor jauh lebih baik per sentimeter daripada beton. Rongga berisi udara diam pun jadi isolator hebat karena udara ber-k kecil. Memahami rumus konduksi langsung memandu pilihan bahan bangunan hemat energi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menyelami faktornya, rumus konduksi jadi padat: <strong>Q/t = k·A·ΔT / L</strong>. Laju kalor (watt) naik bersama konduktivitas k, luas A, dan beda suhu ΔT, tetapi turun bila tebal L bertambah. Konduktor (logam) punya k besar; isolator (busa, kayu, udara diam) punya k kecil. Untuk menahan kalor, perbesar L dan pilih bahan ber-k rendah.",
      },
      {
        type: "takeaways",
        items: [
          "Konduksi adalah perambatan kalor lewat zat padat tanpa zatnya berpindah.",
          "Laju konduksi: Q/t = k·A·ΔT/L.",
          "Konduktor punya k besar (logam); isolator punya k kecil (busa, kayu, udara).",
          "Menahan kalor berarti memperbesar tebal L dan memakai bahan ber-k rendah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Laju konduksi kalor dirumuskan?",
            options: ["Q/t = k·A·ΔT/L", "Q/t = m·c·ΔT", "Q/t = e·σ·A·T⁴", "Q/t = P·V"],
            answer: 0,
            explain: "Konduksi: Q/t = k·A·ΔT/L.",
          },
          {
            q: "Jika tebal dinding digandakan, laju kalor yang bocor menjadi?",
            options: ["Dua kali", "Setengahnya", "Tetap", "Empat kali"],
            answer: 1,
            explain: "L di penyebut, jadi tebal dua kali membuat laju jadi separuh.",
          },
          {
            q: "Mengapa lantai keramik terasa lebih dingin daripada karpet bersuhu sama?",
            options: [
              "Keramik lebih dingin",
              "Keramik menghantar kalor dari kaki lebih cepat",
              "Karpet menyerap panas",
              "Keramik memantulkan radiasi",
            ],
            answer: 1,
            explain: "Konduktivitas keramik lebih tinggi, jadi menyedot kalor kaki lebih cepat.",
          },
          {
            q: "Manakah yang merupakan isolator (k kecil)?",
            options: ["Tembaga", "Aluminium", "Wol kaca", "Besi"],
            answer: 2,
            explain: "Wol kaca ber-k sangat rendah, jadi isolator yang baik.",
          },
          {
            q: "Memperbesar beda suhu ΔT antara dua sisi dinding akan?",
            options: [
              "Mengurangi laju kalor",
              "Menambah laju kalor",
              "Tidak berpengaruh",
              "Membalik arah kalor",
            ],
            answer: 1,
            explain: "ΔT berbanding lurus dengan laju kalor pada Q/t = k·A·ΔT/L.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "radiasi-stefan-boltzmann",
    levelId: "perpindahan-kapasitas-kalor",
    order: 5,
    title: "Radiasi dan Hukum Stefan-Boltzmann",
    summary:
      "Baju hitam membuat gerah di siang hari, dan kamera termal bisa melihat di gelap total. Kuncinya radiasi panas. Kita amati dulu sebelum bertemu rumus pangkat empat.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "radiasi", "stefan-boltzmann"],
    blocks: [
      {
        type: "paragraph",
        html: "Berdiri di bawah matahari memakai baju hitam terasa jauh lebih gerah daripada baju putih. Kamera termal bisa 'melihat' orang dalam kegelapan total tanpa cahaya lampu. Keduanya bekerja karena setiap benda hangat <strong>memancarkan kalor sebagai gelombang</strong>, tanpa perlu sentuhan atau udara. Ayo amati radiasi dulu sebelum bertemu rumus yang melibatkan pangkat empat suhu.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Kalor sebagai Gelombang",
        caption: "Setiap benda di atas nol mutlak memancarkan gelombang inframerah yang membawa kalor.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Dekatkan tangan ke samping bara api unggun, bukan di atasnya: kamu merasa hangat walau udara panasnya naik ke atas, bukan ke samping. Kalor itu datang sebagai <strong>radiasi</strong>. Amati pula: permukaan hitam dan kusam menyerap sekaligus memancarkan radiasi paling kuat, sedangkan permukaan putih mengilap memantulkannya. Dan yang paling mengejutkan, sedikit saja menaikkan suhu benda membuat pancaran radiasinya melonjak tajam, bukan sekadar bertambah pelan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Emisivitas dan benda hitam",
        html: "Setiap benda di atas nol mutlak memancarkan radiasi. Kuat tidaknya diukur oleh <strong>emisivitas (e)</strong>, antara 0 dan 1. Benda hitam sempurna punya e = 1 (pemancar dan penyerap terbaik), permukaan mengilap punya e mendekati 0. Hebatnya, daya radiasi tidak sebanding lurus dengan suhu, melainkan dengan <strong>pangkat empat suhu mutlak (T⁴)</strong>, sehingga menggandakan suhu kelvin melipatkan pancaran 16 kali.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Daya Radiasi Benda Hitam 1 m² vs Suhu",
        unit: "watt",
        source: "dihitung dari P = σ·A·T⁴, e=1, A=1 m²",
        note: "Perhatikan kurva menanjak tajam: dari 300 K ke 600 K (dua kali lipat), daya melonjak dari 459 W ke 7348 W, yaitu 16 kali lipat. Itulah tanda hubungan T⁴.",
        data: [
          { label: "300 K", value: 459, color: "#38bdf8" },
          { label: "400 K", value: 1451, color: "#34d399" },
          { label: "500 K", value: 3544, color: "#fbbf24" },
          { label: "600 K", value: 7348, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda hitam (e = 1) berluas 1 m² bersuhu 300 K. Berapa daya radiasinya (watt)? Pakai σ = 5,67 × 10⁻⁸ W/m²K⁴.",
        answer: 459,
        tolerance: 5,
        suffix: " W",
        solution:
          "Pakai P = e·σ·A·T⁴. Hitung T⁴ = 300⁴ = 8,1 × 10⁹. Maka P = 1 × (5,67 × 10⁻⁸) × 1 × (8,1 × 10⁹) = <strong>459 W</strong>. Suhu harus dalam kelvin karena rumus memakai pangkat empat suhu mutlak.",
        hint: "P = e·σ·A·T⁴. Hitung dulu T⁴ dengan T dalam kelvin.",
      },
      {
        type: "calcExercise",
        prompt:
          "Benda hitam yang sama (1 m², e = 1) dipanaskan hingga 600 K. Berapa daya radiasinya sekarang (watt)?",
        answer: 7348,
        tolerance: 30,
        suffix: " W",
        solution:
          "T⁴ = 600⁴ = 1,296 × 10¹¹. P = (5,67 × 10⁻⁸) × 1,296 × 10¹¹ = <strong>7348 W</strong>. Suhu naik dua kali (300 ke 600 K), tetapi daya melonjak 2⁴ = 16 kali, dari 459 W menjadi 7348 W.",
        hint: "Hitung 600⁴ lalu kalikan σ. Bandingkan hasilnya dengan soal sebelumnya.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap permukaan: pemancar/penyerap radiasi kuat atau lemah.",
        buckets: ["Kuat (e mendekati 1)", "Lemah (e mendekati 0)"],
        items: [
          { text: "Aspal hitam kusam di siang hari", bucket: "Kuat (e mendekati 1)" },
          { text: "Baju hitam di bawah matahari", bucket: "Kuat (e mendekati 1)" },
          { text: "Lapisan cermin perak di dalam termos", bucket: "Lemah (e mendekati 0)" },
          { text: "Atap seng mengilap yang dicat putih", bucket: "Lemah (e mendekati 0)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Astronaut dan Satelit Dibungkus Foil Emas",
        html: "Di ruang angkasa tidak ada udara, jadi konduksi dan konveksi nyaris nol; satu-satunya jalan kalor adalah <strong>radiasi</strong>. Satelit dan pakaian astronaut dibungkus lapisan foil mengilap keemasan dengan emisivitas sangat rendah, agar tidak terlalu banyak memancarkan panas saat di sisi gelap dan memantulkan radiasi matahari saat di sisi terang. Tanpa lapisan ini, perangkat bisa membeku atau kepanasan ekstrem. Hukum Stefan-Boltzmann menjadi pertimbangan utama rekayasa antariksa.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati polanya, lahir Hukum Stefan-Boltzmann: <strong>P = e·σ·A·T⁴</strong>. P daya radiasi (watt), e emisivitas (0 sampai 1), σ = 5,67 × 10⁻⁸ W/m²K⁴, A luas permukaan, dan T suhu mutlak dalam kelvin. Kunci utamanya pangkat empat: menaikkan suhu sedikit melonjakkan pancaran kalor sangat besar, dan suhu wajib dalam kelvin.",
      },
      {
        type: "takeaways",
        items: [
          "Radiasi memancarkan kalor sebagai gelombang, tanpa perlu zat perantara.",
          "Daya radiasi: P = e·σ·A·T⁴, dengan σ = 5,67 × 10⁻⁸ W/m²K⁴.",
          "Pancaran sebanding T⁴: menggandakan suhu kelvin melipatkan daya 16 kali.",
          "Permukaan hitam kusam (e tinggi) memancar dan menyerap kuat; cermin (e rendah) tidak.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Stefan-Boltzmann untuk daya radiasi adalah?",
            options: ["P = e·σ·A·T⁴", "P = k·A·ΔT/L", "P = m·c·ΔT", "P = nRT"],
            answer: 0,
            explain: "Radiasi: P = e·σ·A·T⁴.",
          },
          {
            q: "Jika suhu mutlak benda digandakan, daya radiasinya menjadi?",
            options: ["2 kali", "4 kali", "8 kali", "16 kali"],
            answer: 3,
            explain: "Daya sebanding T⁴, jadi 2⁴ = 16 kali.",
          },
          {
            q: "Suhu pada rumus radiasi harus dalam satuan?",
            options: ["Celsius", "Fahrenheit", "Kelvin", "Joule"],
            answer: 2,
            explain: "T harus suhu mutlak dalam kelvin karena dipangkatkan empat.",
          },
          {
            q: "Benda hitam sempurna punya emisivitas?",
            options: ["e = 0", "e = 0,5", "e = 1", "e = 100"],
            answer: 2,
            explain: "Benda hitam sempurna memancar dan menyerap paling kuat, e = 1.",
          },
          {
            q: "Mengapa satelit dibungkus foil mengilap?",
            options: [
              "Agar terlihat indah",
              "Agar emisivitasnya rendah sehingga mengatur radiasi panas",
              "Agar menghantar listrik",
              "Agar lebih berat",
            ],
            answer: 1,
            explain: "Emisivitas rendah membatasi pancaran dan pantulan radiasi di ruang hampa.",
          },
        ],
      },
    ],
  },
];
