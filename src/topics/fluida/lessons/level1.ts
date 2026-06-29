import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "massa-jenis-dan-tekanan",
    levelId: "fluida-statis-tekanan",
    order: 1,
    title: "Massa Jenis dan Tekanan",
    summary:
      "Sebelum hafal rumus, kita rasakan dulu kenapa telinga sakit saat menyelam dan kenapa pisau tajam mudah memotong. Dari sana, rumus tekanan lahir sendiri.",
    durationMin: 14,
    tags: ["fluida", "massa jenis", "tekanan", "hidrostatis"],
    blocks: [
      {
        type: "paragraph",
        html: "Coba menyelam ke dasar kolam yang dalam. Semakin turun, telinga terasa makin ditekan. Tidak ada yang menyentuhmu, tetapi air di atasmu menindih dengan kuat. Sebelum bertemu rumus apa pun, ayo pahami dulu dua gagasan sederhana: seberapa <strong>padat</strong> sebuah zat, dan seberapa kuat ia <strong>menekan</strong>.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Dari Besaran ke Massa Jenis",
        caption: "Massa jenis dan tekanan dibangun dari besaran dasar yang sudah kita kenal.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan sebatang besi dan sebongkah kayu berukuran sama. Besi terasa jauh lebih berat. Padahal volumenya sama. Bedanya ada pada <strong>massa jenis</strong>: berapa banyak massa yang dijejalkan ke tiap satuan volume. Lalu rasakan: berdiri dengan sepatu hak runcing menekan lantai lebih kuat daripada sepatu datar, walau beratmu sama. Itulah <strong>tekanan</strong>, soal seberapa luas gaya itu disebar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua hal yang sering tertukar",
        html: "<strong>Massa jenis</strong> menjawab 'seberapa padat zatnya'. <strong>Tekanan</strong> menjawab 'seberapa terpusat gayanya'. Air punya massa jenis sekitar 1000 kg/m<sup>3</sup>, dan makin dalam kita menyelam, tekanannya makin besar karena air di atas makin tebal.",
      },
      {
        type: "widget",
        widget: "KonversiSatuan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tekanan Air vs Kedalaman",
        unit: "pascal (Pa)",
        source: "hitungan P = rho x g x h, air 1000 kg/m^3, g 10 m/s^2",
        note: "Tekanan naik lurus mengikuti kedalaman. Tiap turun 10 meter, air menambah sekitar 100.000 Pa, kira-kira setara satu atmosfer.",
        data: [
          { label: "0 m", value: 0, color: "#38bdf8" },
          { label: "10 m", value: 100000, color: "#22d3ee" },
          { label: "20 m", value: 200000, color: "#2dd4bf" },
          { label: "30 m", value: 300000, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah balok bermassa 600 gram memiliki volume 200 cm^3. Berapa massa jenisnya dalam gram per cm^3?",
        answer: 3,
        tolerance: 0.05,
        suffix: " g/cm^3",
        solution:
          "Massa jenis = massa dibagi volume = 600 g / 200 cm^3 = <strong>3 g/cm^3</strong>. Lebih padat dari air (1 g/cm^3), jadi balok ini akan tenggelam.",
        hint: "Bagi massa dengan volume.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang penyelam berada 25 meter di bawah permukaan air (massa jenis 1000 kg/m^3, g = 10 m/s^2). Berapa tekanan hidrostatis yang ia rasakan?",
        answer: 250000,
        tolerance: 1000,
        suffix: " Pa",
        solution:
          "P = rho x g x h = 1000 x 10 x 25 = <strong>250.000 Pa</strong>. Itu sekitar 2,5 kali tekanan atmosfer, sebab tiap 10 meter menambah kira-kira satu atmosfer.",
        hint: "Kalikan massa jenis, percepatan gravitasi, dan kedalaman.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan benda berikut: lebih padat dari air atau kurang padat dari air?",
        buckets: ["Lebih padat dari air", "Kurang padat dari air"],
        items: [
          { text: "Besi (7800 kg/m^3)", bucket: "Lebih padat dari air" },
          { text: "Gabus (240 kg/m^3)", bucket: "Kurang padat dari air" },
          { text: "Aluminium (2700 kg/m^3)", bucket: "Lebih padat dari air" },
          { text: "Es (920 kg/m^3)", bucket: "Kurang padat dari air" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Bendungan Lebih Tebal di Bawah",
        html: "Perhatikan dinding bendungan: bagian bawahnya jauh lebih tebal daripada bagian atas. Ini bukan sekadar gaya arsitektur. Air di dasar menekan jauh lebih kuat karena tekanan hidrostatis bertambah seiring kedalaman. Pada kedalaman 30 meter, air mendorong dengan sekitar 300.000 Pa, tiga kali lipat tekanan di kedalaman 10 meter. Insinyur menebalkan dasar bendungan agar sanggup menahan dorongan terbesar itu. Bentuk bangunannya seakan menggambar grafik tekanan vs kedalaman.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum dalam tiga rumus. <strong>Massa jenis</strong>: rho = m / V. <strong>Tekanan</strong>: P = F / A, gaya dibagi luas bidang tekan. <strong>Tekanan hidrostatis</strong>: P = rho x g x h, makin dalam (h besar) atau makin padat fluidanya (rho besar), makin besar tekanannya.",
      },
      {
        type: "takeaways",
        items: [
          "Massa jenis (rho = m/V) mengukur seberapa padat zat, bukan beratnya saja.",
          "Tekanan (P = F/A) bergantung pada luas bidang: gaya yang sama terasa lebih kuat pada bidang sempit.",
          "Tekanan hidrostatis P = rho x g x h bertambah lurus terhadap kedalaman.",
          "Tiap turun 10 meter dalam air, tekanan bertambah sekitar 100.000 Pa.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Massa jenis didefinisikan sebagai?",
            options: [
              "Massa dikali volume",
              "Massa dibagi volume",
              "Gaya dibagi luas",
              "Berat dikali tinggi",
            ],
            answer: 1,
            explain: "Massa jenis rho = m / V, yaitu massa per satuan volume.",
          },
          {
            q: "Mengapa sepatu hak runcing lebih mudah menancap di tanah lunak daripada sepatu datar?",
            options: [
              "Karena lebih berat",
              "Karena luas tekannya kecil sehingga tekanannya besar",
              "Karena massa jenisnya besar",
              "Karena gravitasinya berbeda",
            ],
            answer: 1,
            explain: "Tekanan P = F/A. Luas A kecil membuat tekanan besar walau gayanya sama.",
          },
          {
            q: "Tekanan hidrostatis pada kedalaman 20 m di air (rho 1000, g 10) adalah?",
            options: ["20.000 Pa", "200.000 Pa", "2.000 Pa", "2.000.000 Pa"],
            answer: 1,
            explain: "P = rho x g x h = 1000 x 10 x 20 = 200.000 Pa.",
          },
          {
            q: "Benda dengan massa jenis 700 kg/m^3 dimasukkan ke air (1000 kg/m^3). Apa yang terjadi?",
            options: ["Tenggelam", "Mengapung", "Melayang di tengah", "Larut"],
            answer: 1,
            explain: "Massa jenisnya lebih kecil dari air, jadi benda mengapung.",
          },
          {
            q: "Apa yang membuat tekanan hidrostatis bertambah?",
            options: [
              "Bertambahnya kedalaman",
              "Berkurangnya massa jenis fluida",
              "Berkurangnya gravitasi",
              "Bertambahnya luas permukaan kolam",
            ],
            answer: 0,
            explain: "P = rho x g x h, jadi tekanan naik saat kedalaman h bertambah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tekanan-hidrostatis",
    levelId: "fluida-statis-tekanan",
    order: 2,
    title: "Tekanan Hidrostatis",
    summary:
      "Kenapa bentuk wadah tidak penting, dan dasar bejana sempit bisa menahan tekanan yang sama dengan bejana lebar? Kita amati dulu, baru rumusnya jelas.",
    durationMin: 14,
    tags: ["fluida", "hidrostatis", "tekanan", "kedalaman"],
    blocks: [
      {
        type: "paragraph",
        html: "Tuang air ke dalam gelas tinggi ramping dan ke dalam baskom lebar sampai tingginya sama. Di kedalaman yang sama, tekanan air di dasar keduanya ternyata <strong>sama persis</strong>, walau jumlah airnya beda jauh. Aneh, bukan? Sebelum membuka rumus, ayo pahami dulu apa yang sebenarnya menentukan tekanan di dalam zat cair yang diam.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Yang Menentukan Tekanan Dalam Zat Cair",
        caption: "Tekanan hidrostatis hanya bergantung pada kedalaman dan massa jenis, bukan bentuk wadah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan menyelam di kolam. Telinga terasa ditekan, dan rasa tekan itu sama ke segala arah: dari atas, samping, bawah. Yang menentukan kuat tekanan bukanlah seberapa luas kolamnya, melainkan seberapa <strong>dalam</strong> kamu menyelam dan seberapa <strong>padat</strong> fluidanya. Di air laut yang lebih asin (lebih padat), pada kedalaman sama tekanannya sedikit lebih besar daripada air tawar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Paradoks hidrostatis",
        html: "Tekanan di dasar bejana hanya ditentukan oleh tinggi kolom fluida di atasnya, bukan oleh bentuk atau jumlah totalnya. Inilah <strong>paradoks hidrostatis</strong>: pipa sempit setinggi 10 meter memberi tekanan dasar yang sama dengan danau sedalam 10 meter. Yang penting hanya kedalaman titik yang ditinjau.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tekanan Hidrostatis di Berbagai Fluida (kedalaman 10 m)",
        unit: "pascal (Pa)",
        source: "hitungan P = rho x g x h, h 10 m, g 10 m/s^2",
        note: "Pada kedalaman sama, fluida yang lebih padat menekan lebih kuat. Air laut sedikit lebih padat dari air tawar, sedangkan minyak lebih ringan.",
        data: [
          { label: "Minyak (800)", value: 80000, color: "#facc15" },
          { label: "Alkohol (790)", value: 79000, color: "#fbbf24" },
          { label: "Air tawar (1000)", value: 100000, color: "#38bdf8" },
          { label: "Air laut (1030)", value: 103000, color: "#0ea5e9" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah titik berada 8 meter di bawah permukaan minyak (massa jenis 800 kg/m^3, g = 10 m/s^2). Berapa tekanan hidrostatis di titik itu?",
        answer: 64000,
        tolerance: 500,
        suffix: " Pa",
        solution:
          "P = rho x g x h = 800 x 10 x 8 = <strong>64.000 Pa</strong>. Karena minyak lebih ringan dari air, tekanannya lebih kecil daripada air pada kedalaman sama.",
        hint: "Kalikan massa jenis minyak, gravitasi, dan kedalaman.",
      },
      {
        type: "calcExercise",
        prompt:
          "Di dasar tangki, tekanan total terukur 140.000 Pa. Jika tekanan atmosfer di permukaan 100.000 Pa, berapa tekanan hidrostatis akibat air saja?",
        answer: 40000,
        tolerance: 500,
        suffix: " Pa",
        solution:
          "Tekanan total P = P0 + rho x g x h. Maka tekanan hidrostatis = P - P0 = 140.000 - 100.000 = <strong>40.000 Pa</strong>. Sisanya berasal dari udara yang menekan permukaan.",
        hint: "Kurangi tekanan total dengan tekanan atmosfer di permukaan.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Mana yang MEMENGARUHI tekanan hidrostatis di sebuah titik, dan mana yang TIDAK?",
        buckets: ["Memengaruhi", "Tidak memengaruhi"],
        items: [
          { text: "Kedalaman titik", bucket: "Memengaruhi" },
          { text: "Massa jenis fluida", bucket: "Memengaruhi" },
          { text: "Bentuk wadah", bucket: "Tidak memengaruhi" },
          { text: "Luas permukaan wadah", bucket: "Tidak memengaruhi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tong Pecah karena Pipa Tipis",
        html: "Pada abad ke-17, Blaise Pascal menutup rapat sebuah tong penuh air, lalu memasang pipa tipis panjang yang menjulang tinggi pada tutupnya. Ia menuang sedikit air ke pipa itu, hanya beberapa gelas. Tong yang kokoh itu pecah. Mengapa? Karena tekanan di dasar tong tidak ditentukan oleh jumlah air, melainkan oleh tinggi kolom air dalam pipa. Pipa setinggi beberapa meter menambah kedalaman efektif secara drastis, sehingga tekanan hidrostatis melonjak sampai tong tak sanggup menahannya. Inilah bukti nyata paradoks hidrostatis.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. Tekanan hidrostatis: <strong>P = rho x g x h</strong>, hanya bergantung pada massa jenis fluida dan kedalaman. Jika permukaan terbuka ke udara, tekanan total menjadi <strong>P = P0 + rho x g x h</strong>, dengan P0 tekanan atmosfer. Bentuk dan volume wadah tidak masuk hitungan sama sekali.",
      },
      {
        type: "takeaways",
        items: [
          "Tekanan hidrostatis P = rho x g x h hanya bergantung pada kedalaman dan massa jenis.",
          "Bentuk dan jumlah total fluida tidak memengaruhi tekanan di suatu titik.",
          "Tekanan zat cair bekerja sama besar ke segala arah.",
          "Tekanan total di dalam zat cair terbuka: P = P0 + rho x g x h.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tekanan hidrostatis di suatu titik bergantung pada?",
            options: [
              "Bentuk wadah",
              "Kedalaman dan massa jenis fluida",
              "Luas permukaan air",
              "Volume total air",
            ],
            answer: 1,
            explain: "P = rho x g x h, hanya kedalaman dan massa jenis yang menentukan.",
          },
          {
            q: "Dua bejana berbeda bentuk diisi air sampai tinggi sama. Tekanan di dasarnya?",
            options: ["Berbeda", "Sama", "Bergantung volume", "Bergantung lebar"],
            answer: 1,
            explain: "Paradoks hidrostatis: tekanan dasar sama karena kedalamannya sama.",
          },
          {
            q: "Tekanan hidrostatis pada kedalaman 8 m di air laut (rho 1030, g 10) sekitar?",
            options: ["8.240 Pa", "82.400 Pa", "824.000 Pa", "824 Pa"],
            answer: 1,
            explain: "P = 1030 x 10 x 8 = 82.400 Pa.",
          },
          {
            q: "Mengapa fluida yang lebih padat memberi tekanan lebih besar pada kedalaman sama?",
            options: [
              "Karena lebih panas",
              "Karena rho lebih besar dalam P = rho x g x h",
              "Karena volumenya lebih besar",
              "Karena gravitasinya berbeda",
            ],
            answer: 1,
            explain: "Massa jenis rho berbanding lurus dengan tekanan hidrostatis.",
          },
          {
            q: "Tekanan zat cair yang diam bekerja?",
            options: [
              "Hanya ke bawah",
              "Hanya ke samping",
              "Sama besar ke segala arah",
              "Hanya ke atas",
            ],
            answer: 2,
            explain: "Tekanan hidrostatis menekan sama besar ke segala arah di kedalaman yang sama.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tekanan-atmosfer",
    levelId: "fluida-statis-tekanan",
    order: 3,
    title: "Tekanan Atmosfer dan Barometer",
    summary:
      "Udara yang terasa kosong ternyata menekan kita tiap saat. Kita rasakan dulu lewat sedotan dan kaleng penyok, baru rumus barometer Torricelli muncul.",
    durationMin: 14,
    tags: ["fluida", "tekanan atmosfer", "barometer", "torricelli"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat ini juga, udara setebal puluhan kilometer sedang menindih tubuhmu dengan gaya setara berat seekor gajah kecil. Kamu tidak merasakannya karena tekanan itu seimbang dari segala arah. Sebelum melihat rumusnya, ayo buktikan dulu bahwa udara yang terasa kosong itu benar-benar <strong>menekan</strong>.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Lautan Udara di Atas Kita",
        caption: "Atmosfer adalah lautan udara yang menekan segala sesuatu di permukaan Bumi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Saat menyeruput minuman lewat sedotan, kamu sebenarnya tidak 'menarik' air ke atas. Kamu mengurangi tekanan udara di mulutmu, lalu <strong>tekanan atmosfer luar</strong> yang lebih tinggi mendorong air naik. Bukti lain: kaleng yang dipanaskan lalu ditutup dan didinginkan akan penyok sendiri, diremas oleh udara luar saat tekanan di dalamnya turun. Udara memang menekan, kuat sekali.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Berapa besar tekanan atmosfer",
        html: "Di permukaan laut, tekanan atmosfer sekitar <strong>101.325 Pa</strong>, biasa disebut 1 atmosfer (atm). Makin tinggi kita naik gunung, makin sedikit udara di atas kita, sehingga tekanannya makin kecil. Itulah sebabnya pendaki sering kesulitan bernapas di puncak tinggi.",
      },
      {
        type: "widget",
        widget: "KonversiSatuan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tekanan Atmosfer vs Ketinggian",
        unit: "pascal (Pa)",
        source: "data atmosfer standar internasional (dibulatkan)",
        note: "Makin tinggi, kolom udara di atas makin pendek, jadi tekanan turun. Pada sekitar 5.500 meter, tekanannya tinggal separuh tekanan permukaan laut.",
        data: [
          { label: "0 m", value: 101000, color: "#38bdf8" },
          { label: "1.500 m", value: 85000, color: "#22d3ee" },
          { label: "3.000 m", value: 70000, color: "#2dd4bf" },
          { label: "5.500 m", value: 50000, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Barometer raksa menunjukkan tinggi kolom 0,76 m (raksa rho 13.600 kg/m^3, g = 10 m/s^2). Berapa tekanan atmosfer yang terukur?",
        answer: 103360,
        tolerance: 500,
        suffix: " Pa",
        solution:
          "Tekanan atmosfer menahan kolom raksa, jadi P = rho x g x h = 13.600 x 10 x 0,76 = <strong>103.360 Pa</strong>, mendekati nilai 1 atmosfer.",
        hint: "Tekanan atmosfer sama dengan tekanan hidrostatis kolom raksa: P = rho x g x h.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika raksa diganti air (rho 1000 kg/m^3, g = 10), berapa tinggi kolom air yang bisa ditahan oleh tekanan 100.000 Pa?",
        answer: 10,
        tolerance: 0.3,
        suffix: " m",
        solution:
          "Dari P = rho x g x h, maka h = P / (rho x g) = 100.000 / (1000 x 10) = <strong>10 m</strong>. Itu sebabnya barometer air harus setinggi 10 meter, sangat tidak praktis, sehingga dipakai raksa yang jauh lebih padat.",
        hint: "Susun ulang P = rho x g x h menjadi h = P / (rho x g).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap peristiwa dengan peran tekanan atmosfer di dalamnya.",
        pairs: [
          { left: "Menyeruput lewat sedotan", right: "Udara luar mendorong air naik" },
          { left: "Kaleng panas yang penyok", right: "Tekanan luar meremas saat dalam mengecil" },
          { left: "Barometer raksa", right: "Atmosfer menahan kolom raksa 76 cm" },
          { left: "Sulit bernapas di puncak", right: "Tekanan udara berkurang di ketinggian" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memasak Lebih Lama di Pegunungan",
        html: "Di dataran tinggi, merebus telur atau memasak nasi terasa lebih lama. Penyebabnya tekanan atmosfer yang rendah. Air mendidih ketika tekanan uapnya menyamai tekanan udara di sekitarnya. Karena di gunung tekanan udara lebih kecil, air mendidih pada suhu di bawah 100 derajat Celsius, misalnya 90 derajat. Suhu yang lebih rendah ini membuat makanan butuh waktu lebih lama untuk matang. Inilah alasan panci presto diciptakan: ia menaikkan tekanan di dalamnya agar air mendidih pada suhu lebih tinggi sehingga masakan cepat matang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. Tekanan atmosfer standar: <strong>1 atm = 101.325 Pa</strong>, setara kolom raksa setinggi 76 cm. Dalam barometer, tekanan atmosfer ditandingi oleh tekanan hidrostatis kolom raksa: <strong>P_atm = rho x g x h</strong>. Makin padat zat pengisi (raksa), makin pendek kolom yang dibutuhkan untuk menandingi tekanan yang sama.",
      },
      {
        type: "takeaways",
        items: [
          "Atmosfer menekan segala sesuatu dengan sekitar 101.325 Pa di permukaan laut.",
          "Tekanan atmosfer berkurang seiring naiknya ketinggian.",
          "Barometer mengukur tekanan udara lewat tinggi kolom raksa: P = rho x g x h.",
          "Banyak peristiwa harian (sedotan, kaleng penyok) digerakkan oleh tekanan udara.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tekanan atmosfer standar di permukaan laut kira-kira?",
            options: ["1.013 Pa", "101.325 Pa", "10.000 Pa", "1.000.000 Pa"],
            answer: 1,
            explain: "Satu atmosfer sekitar 101.325 Pa.",
          },
          {
            q: "Saat menyeruput lewat sedotan, yang sebenarnya terjadi adalah?",
            options: [
              "Kita menarik air dengan otot mulut",
              "Tekanan udara luar mendorong air naik",
              "Gravitasi membalik arah",
              "Air menjadi lebih ringan",
            ],
            answer: 1,
            explain: "Kita menurunkan tekanan di mulut, lalu tekanan atmosfer mendorong air naik.",
          },
          {
            q: "Mengapa barometer memakai raksa, bukan air?",
            options: [
              "Raksa lebih murah",
              "Raksa jauh lebih padat sehingga kolomnya pendek",
              "Air membeku",
              "Raksa tidak menekan",
            ],
            answer: 1,
            explain: "Karena raksa sangat padat, kolomnya cukup 76 cm, sedangkan air butuh 10 m.",
          },
          {
            q: "Tekanan atmosfer di puncak gunung dibanding di pantai?",
            options: ["Lebih besar", "Lebih kecil", "Sama", "Nol"],
            answer: 1,
            explain: "Di ketinggian, kolom udara di atas lebih pendek, jadi tekanannya lebih kecil.",
          },
          {
            q: "Tekanan atmosfer menahan kolom raksa 0,76 m (rho 13.600, g 10) sebesar?",
            options: ["10.336 Pa", "103.360 Pa", "1.033.600 Pa", "1.036 Pa"],
            answer: 1,
            explain: "P = 13.600 x 10 x 0,76 = 103.360 Pa.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "manometer-bejana-berhubungan",
    levelId: "fluida-statis-tekanan",
    order: 4,
    title: "Manometer dan Bejana Berhubungan",
    summary:
      "Kenapa permukaan air di selang tukang bangunan selalu sejajar, dan bagaimana pipa U bisa mengukur tekanan gas? Kita amati dulu, baru rumusnya tersusun.",
    durationMin: 14,
    tags: ["fluida", "manometer", "bejana berhubungan", "tekanan gas"],
    blocks: [
      {
        type: "paragraph",
        html: "Tukang bangunan punya trik tua untuk memastikan dua titik berjauhan benar-benar sejajar: selang bening berisi air. Tinggi permukaan air di kedua ujung selalu sama tinggi, walau selangnya berliku ke mana-mana. Sebelum bertemu rumus, ayo pahami dulu kenapa zat cair yang terhubung selalu mencari satu ketinggian yang sama.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Zat Cair Mencari Permukaan Sama Tinggi",
        caption: "Dalam bejana berhubungan, fluida sejenis berhenti pada ketinggian permukaan yang sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sambungkan beberapa botol dengan selang di dasarnya, lalu tuang air. Permukaan air di semua botol akan rata, tak peduli botolnya gemuk, kurus, atau miring. Mengapa? Karena di dasar yang terhubung, tekanan harus seimbang. Jika satu sisi lebih tinggi, ia menekan lebih kuat dan mendorong air ke sisi lain sampai keduanya seimbang. Prinsip yang sama membuat air dalam <strong>pipa U</strong> bisa menjadi alat ukur tekanan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Manometer dan dua fluida",
        html: "<strong>Manometer</strong> adalah pipa U berisi zat cair untuk mengukur tekanan gas. Beda tinggi permukaan menunjukkan selisih tekanan. Jika pipa U berisi dua fluida berbeda yang tidak bercampur, permukaannya tidak lagi sama tinggi: fluida yang lebih ringan berdiri lebih tinggi, sesuai aturan <strong>rho1 x h1 = rho2 x h2</strong> dihitung dari bidang batas.",
      },
      {
        type: "widget",
        widget: "KonversiSatuan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tekanan Gas Terukur vs Beda Tinggi Raksa di Manometer",
        unit: "pascal (Pa)",
        source: "hitungan P = rho x g x h, raksa 13.600 kg/m^3, g 10 m/s^2",
        note: "Makin tinggi selisih permukaan raksa, makin besar selisih tekanan yang terbaca. Hubungannya lurus terhadap beda tinggi.",
        data: [
          { label: "5 cm", value: 6800, color: "#38bdf8" },
          { label: "10 cm", value: 13600, color: "#22d3ee" },
          { label: "15 cm", value: 20400, color: "#2dd4bf" },
          { label: "20 cm", value: 27200, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Manometer raksa terbuka menunjukkan beda tinggi 0,12 m (raksa rho 13.600, g = 10). Berapa selisih tekanan gas terhadap atmosfer?",
        answer: 16320,
        tolerance: 200,
        suffix: " Pa",
        solution:
          "Selisih tekanan = rho x g x h = 13.600 x 10 x 0,12 = <strong>16.320 Pa</strong>. Bila gas mendorong raksa turun di sisinya, tekanan gas lebih besar dari atmosfer sebesar nilai ini.",
        hint: "Pakai P = rho x g x h dengan beda tinggi raksa sebagai h.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pipa U berisi air (rho 1000) di satu sisi dan minyak (rho 800) di sisi lain. Jika kolom minyak setinggi 0,10 m diukur dari bidang batas, berapa tinggi kolom air yang menyeimbangkannya?",
        answer: 0.08,
        tolerance: 0.005,
        suffix: " m",
        solution:
          "Setimbang saat rho_air x h_air = rho_minyak x h_minyak. Maka h_air = (800 x 0,10) / 1000 = 80 / 1000 = <strong>0,08 m</strong>. Air yang lebih padat butuh kolom lebih pendek.",
        hint: "Gunakan rho1 x h1 = rho2 x h2 lalu cari tinggi kolom air.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap pernyataan dengan prinsip yang menjelaskannya.",
        pairs: [
          { left: "Selang air tukang bangunan", right: "Bejana berhubungan, permukaan sama tinggi" },
          { left: "Manometer pipa U", right: "Beda tinggi menunjukkan selisih tekanan" },
          { left: "Pipa U dua fluida", right: "Fluida lebih ringan berdiri lebih tinggi" },
          { left: "Menara air kota", right: "Tekanan mengalir ke rumah pada ketinggian lebih rendah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menara Air dan Tekanan di Keran Rumah",
        html: "Perusahaan air minum membangun menara penampung yang sangat tinggi, lalu mengalirkan air lewat pipa ke rumah-rumah di bawahnya. Tidak ada pompa di tiap rumah, namun air tetap menyembur dari keran. Rahasianya bejana berhubungan dan tekanan hidrostatis. Permukaan air di menara jauh lebih tinggi daripada keran rumah, sehingga beda ketinggian itu menghasilkan tekanan yang mendorong air keluar. Makin tinggi menara, makin besar tekanan air di keran. Itulah sebabnya rumah di lantai atas gedung sering bertekanan air lebih lemah daripada lantai bawah: beda ketinggiannya terhadap tangki lebih kecil.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. <strong>Bejana berhubungan</strong>: untuk satu fluida, permukaan selalu sama tinggi karena tekanan dasar harus seimbang. <strong>Pipa U dua fluida</strong>: pada bidang batas, rho1 x g x h1 = rho2 x g x h2, sehingga <strong>rho1 x h1 = rho2 x h2</strong>. <strong>Manometer</strong>: tekanan gas P_gas = P_atm + rho x g x h jika lebih tinggi dari atmosfer, atau P_atm - rho x g x h jika lebih rendah.",
      },
      {
        type: "takeaways",
        items: [
          "Dalam bejana berhubungan, satu fluida selalu mencari permukaan sama tinggi.",
          "Pipa U dua fluida memenuhi rho1 x h1 = rho2 x h2 dihitung dari bidang batas.",
          "Manometer mengukur tekanan gas dari beda tinggi: P = rho x g x h.",
          "Menara air memakai beda ketinggian untuk memberi tekanan air ke rumah tanpa pompa.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dalam bejana berhubungan berisi satu jenis fluida, permukaannya?",
            options: [
              "Berbeda tinggi sesuai lebar wadah",
              "Selalu sama tinggi",
              "Lebih tinggi di wadah sempit",
              "Lebih tinggi di wadah lebar",
            ],
            answer: 1,
            explain: "Tekanan dasar harus seimbang, sehingga permukaan fluida sejenis sama tinggi.",
          },
          {
            q: "Manometer pipa U mengukur tekanan gas berdasarkan?",
            options: [
              "Warna fluida",
              "Beda tinggi permukaan zat cair",
              "Suhu gas",
              "Volume pipa",
            ],
            answer: 1,
            explain: "Selisih tinggi kolom menunjukkan selisih tekanan: P = rho x g x h.",
          },
          {
            q: "Pipa U: air (1000) dan minyak (800). Pada bidang batas berlaku?",
            options: [
              "Permukaan sama tinggi",
              "rho_air x h_air = rho_minyak x h_minyak",
              "Minyak selalu lebih rendah",
              "Air selalu lebih tinggi",
            ],
            answer: 1,
            explain: "Kesetimbangan dua fluida: rho1 x h1 = rho2 x h2 dari bidang batas.",
          },
          {
            q: "Manometer raksa (13.600, g 10) beda tinggi 0,10 m menunjukkan selisih tekanan?",
            options: ["1.360 Pa", "13.600 Pa", "136.000 Pa", "136 Pa"],
            answer: 1,
            explain: "P = 13.600 x 10 x 0,10 = 13.600 Pa.",
          },
          {
            q: "Mengapa air di keran lantai bawah gedung lebih deras daripada lantai atas?",
            options: [
              "Pipanya lebih baru",
              "Beda ketinggian terhadap tangki lebih besar",
              "Gravitasi lebih kuat di bawah",
              "Airnya lebih padat",
            ],
            answer: 1,
            explain: "Makin besar beda tinggi terhadap tangki, makin besar tekanan hidrostatisnya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gaya-hidrostatis-bendungan",
    levelId: "fluida-statis-tekanan",
    order: 5,
    title: "Gaya Hidrostatis pada Dinding Bendungan",
    summary:
      "Tekanan air berubah-ubah di tiap kedalaman, lalu bagaimana menghitung satu gaya total yang menekan dinding bendungan? Kita amati dulu sebaran tekanan, baru rumus gaya hidrostatis muncul.",
    durationMin: 14,
    tags: ["fluida", "hidrostatis", "gaya", "bendungan"],
    blocks: [
      {
        type: "paragraph",
        html: "Kita sudah tahu tekanan hidrostatis bertambah seiring kedalaman. Tetapi dinding bendungan tidak hanya merasakan tekanan di satu titik, ia ditekan di seluruh permukaannya, dari nol di permukaan air sampai paling kuat di dasar. Bagaimana menjumlahkan semua tekanan yang berbeda-beda itu menjadi satu <strong>gaya total</strong>? Sebelum bertemu rumus, ayo amati dulu bentuk sebaran tekanannya.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Dari Tekanan ke Gaya Total",
        caption: "Tekanan yang berubah dengan kedalaman dijumlahkan menjadi satu gaya pada bidang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dinding bendungan dibagi menjadi banyak pita mendatar. Pita paling atas hampir tak ditekan, pita paling bawah ditekan paling kuat. Karena tekanan naik lurus dari nol di permukaan menjadi rho x g x H di dasar, tekanan <strong>rata-ratanya</strong> persis di tengah, yaitu rho x g x (H/2). Gaya total cukup dihitung dari tekanan rata-rata ini dikali seluruh luas dinding yang tercelup.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa pakai tekanan rata-rata",
        html: "Karena tekanan bertambah lurus terhadap kedalaman, sebarannya berbentuk segitiga: kecil di atas, besar di bawah. Nilai rata-rata sebaran lurus selalu jatuh di tengah. Jadi untuk dinding tegak yang puncaknya tepat di permukaan air, tekanan rata-rata = <strong>setengah tekanan di dasar</strong>.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Hidrostatis Total vs Kedalaman Air (dinding selebar 1 m)",
        unit: "newton (N)",
        source: "hitungan F = 0,5 x rho x g x w x H^2, air 1000 kg/m^3, g 10 m/s^2, lebar 1 m",
        note: "Tidak seperti tekanan yang naik lurus, gaya total tumbuh mengikuti kuadrat kedalaman. Menggandakan kedalaman air melipatgandakan gaya empat kali.",
        data: [
          { label: "1 m", value: 5000, color: "#38bdf8" },
          { label: "2 m", value: 20000, color: "#22d3ee" },
          { label: "3 m", value: 45000, color: "#2dd4bf" },
          { label: "4 m", value: 80000, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bendungan menahan air sedalam 4 m. Dinding yang tercelup selebar 5 m (air 1000 kg/m^3, g = 10 m/s^2). Berapa gaya hidrostatis total pada dinding itu? (F = 0,5 x rho x g x lebar x H^2)",
        answer: 400000,
        tolerance: 2000,
        suffix: " N",
        solution:
          "F = 0,5 x 1000 x 10 x 5 x 4^2 = 0,5 x 1000 x 10 x 5 x 16 = <strong>400.000 N</strong>. Tekanan rata-ratanya rho x g x (H/2) = 20.000 Pa, dikali luas 5 x 4 = 20 m^2, menghasilkan 400.000 N.",
        hint: "Hitung tekanan rata-rata rho x g x (H/2), lalu kalikan dengan luas dinding tercelup (lebar x H).",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pintu air tegak selebar 2 m menahan air setinggi 3 m, puncak pintu tepat di permukaan air (rho 1000, g = 10). Berapa gaya hidrostatis total yang mendorong pintu?",
        answer: 90000,
        tolerance: 1000,
        suffix: " N",
        solution:
          "Tekanan rata-rata = rho x g x (H/2) = 1000 x 10 x 1,5 = 15.000 Pa. Luas pintu = 2 x 3 = 6 m^2. Gaya = 15.000 x 6 = <strong>90.000 N</strong>.",
        hint: "Tekanan rata-rata di setengah kedalaman dikali luas pintu.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Tentukan apa yang MEMPERBESAR gaya hidrostatis total pada dinding dan apa yang TIDAK.",
        buckets: ["Memperbesar gaya", "Tidak memperbesar gaya"],
        items: [
          { text: "Kedalaman air bertambah", bucket: "Memperbesar gaya" },
          { text: "Dinding dibuat lebih lebar", bucket: "Memperbesar gaya" },
          { text: "Fluida diganti yang lebih padat", bucket: "Memperbesar gaya" },
          { text: "Bendungan dibuat lebih tebal", bucket: "Tidak memperbesar gaya" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Titik Tekan Bendungan Ada di Sepertiga Bawah",
        html: "Insinyur bendungan tidak cukup tahu besar gaya total, mereka juga perlu tahu di mana gaya itu seakan terpusat, disebut titik tangkap gaya. Karena tekanan paling kuat menumpuk di dekat dasar, titik tangkap gaya hidrostatis bukan di tengah dinding, melainkan lebih rendah, tepat pada sepertiga tinggi dari dasar. Itulah sebabnya dasar bendungan dibuat sangat tebal dan dijangkar kuat ke fondasi: di sanalah dorongan terbesar bekerja. Pada waduk besar seperti Jatiluhur, gaya air yang menekan dinding mencapai jutaan newton, sehingga perhitungan titik tangkap gaya menjadi penentu keselamatan struktur.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. Gaya hidrostatis pada bidang tegak yang puncaknya di permukaan: <strong>F = P_rata x A = rho x g x (H/2) x (lebar x H)</strong>, yang menyatu menjadi <strong>F = 0,5 x rho x g x lebar x H^2</strong>. Perhatikan H^2: gaya tumbuh mengikuti kuadrat kedalaman, jauh lebih cepat daripada tekanannya sendiri. Titik tangkap gaya berada di sepertiga tinggi dari dasar.",
      },
      {
        type: "takeaways",
        items: [
          "Tekanan pada dinding naik lurus dari nol di permukaan ke rho x g x H di dasar.",
          "Tekanan rata-rata jatuh di tengah: rho x g x (H/2).",
          "Gaya total F = 0,5 x rho x g x lebar x H^2, tumbuh mengikuti kuadrat kedalaman.",
          "Titik tangkap gaya hidrostatis ada di sepertiga tinggi dari dasar, bukan di tengah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tekanan rata-rata pada dinding tegak yang puncaknya di permukaan air adalah?",
            options: [
              "Sama dengan tekanan di dasar",
              "Setengah tekanan di dasar",
              "Nol",
              "Dua kali tekanan di dasar",
            ],
            answer: 1,
            explain: "Karena tekanan naik lurus dari nol ke nilai dasar, rata-ratanya di tengah, yaitu setengahnya.",
          },
          {
            q: "Gaya hidrostatis total pada dinding bergantung pada kedalaman secara?",
            options: ["Lurus (H)", "Kuadrat (H^2)", "Akar (akar H)", "Tidak bergantung"],
            answer: 1,
            explain: "F = 0,5 x rho x g x lebar x H^2, jadi gaya sebanding kuadrat kedalaman.",
          },
          {
            q: "Dinding selebar 3 m menahan air sedalam 2 m (rho 1000, g 10). Gaya totalnya?",
            options: ["30.000 N", "60.000 N", "120.000 N", "6.000 N"],
            answer: 1,
            explain: "F = 0,5 x 1000 x 10 x 3 x 2^2 = 0,5 x 1000 x 10 x 3 x 4 = 60.000 N.",
          },
          {
            q: "Di mana titik tangkap gaya hidrostatis pada dinding tegak?",
            options: [
              "Di permukaan air",
              "Tepat di tengah",
              "Pada sepertiga tinggi dari dasar",
              "Di dasar tepat",
            ],
            answer: 2,
            explain: "Karena tekanan menumpuk di bawah, gaya terpusat pada sepertiga tinggi dari dasar.",
          },
          {
            q: "Mengapa dasar bendungan dibuat lebih tebal daripada puncaknya?",
            options: [
              "Agar lebih indah",
              "Karena gaya dan tekanan air terbesar bekerja di dekat dasar",
              "Karena air lebih dingin di bawah",
              "Karena gravitasi lebih besar di bawah",
            ],
            answer: 1,
            explain: "Tekanan dan titik tangkap gaya terpusat di bagian bawah, sehingga dasar perlu paling kuat.",
          },
        ],
      },
    ],
  },
];
