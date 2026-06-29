import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "getaran-pegas-hooke",
    levelId: "sistem-getaran",
    order: 1,
    title: "Getaran Pegas dan Hukum Hooke",
    summary:
      "Mengapa makin jauh pegas ditarik, makin kuat ia menarik balik? Kita ukur dulu tarikannya sebelum rumus Hooke muncul.",
    durationMin: 14,
    tags: ["pegas", "hooke", "gaya-pemulih", "konstanta"],
    blocks: [
      {
        type: "paragraph",
        html: "Gantungkan beban di pegas, lalu tarik perlahan ke bawah. Makin jauh kamu menariknya, makin keras pegas melawan, seakan ingin kembali ke bentuk semula. Lepaskan, dan ia memantul naik-turun. Gaya 'ingin kembali' inilah jantung setiap getaran pegas. Sebelum menulis rumus, ayo ukur dulu seberapa kuat pegas menarik balik pada tiap regangan.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Pegas yang Selalu Ingin Kembali",
        caption: "Gaya pemulih membesar sebanding dengan regangan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan menarik pegas sejauh 1 cm: terasa ringan. Tarik 2 cm: terasa dua kali lebih berat. Tarik 3 cm: tiga kali lebih berat. Gaya perlawanan pegas tumbuh <strong>lurus</strong> sebanding regangan, dan arahnya selalu <strong>berlawanan</strong> dengan tarikanmu. Rasakan dulu pola lurus dan berlawanan arah ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Gaya pemulih dan konstanta pegas",
        html: "Pegas memberi <strong>gaya pemulih</strong> yang selalu menarik beban kembali ke titik seimbang. Besarnya sebanding dengan simpangan, dan kecuramannya diatur oleh <strong>konstanta pegas (k)</strong> dalam N/m: makin besar k, makin kaku pegasnya. Gaya pemulih inilah yang membuat beban bergetar bolak-balik.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Pegas terhadap Regangan",
        unit: "newton",
        source: "perhitungan F = kx, konstanta pegas k = 50 N/m",
        note: "Hubungan lurus: tiap tambahan regangan menambah gaya dengan kelipatan tetap. Kemiringan garis adalah konstanta pegas k.",
        data: [
          { label: "0 cm", value: 0, color: "#fb923c" },
          { label: "5 cm", value: 2.5, color: "#fb923c" },
          { label: "10 cm", value: 5, color: "#f59e0b" },
          { label: "15 cm", value: 7.5, color: "#f59e0b" },
          { label: "20 cm", value: 10, color: "#f59e0b" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pegas meregang 0,1 m saat ditarik gaya 5 N. Berapa konstanta pegasnya? (gunakan k = F/x)",
        answer: 50,
        tolerance: 1,
        suffix: " N/m",
        solution:
          "k = F/x = 5/0,1 = <strong>50 N/m</strong>. Artinya tiap meter regangan membutuhkan gaya 50 N. Pegas yang lebih kaku memberi angka k lebih besar.",
        hint: "Bagi gaya dengan regangan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Beban 0,2 kg digantung pada pegas k = 50 N/m. Berapa periode getarnya? (gunakan T = 2π√(m/k))",
        answer: 0.397,
        tolerance: 0.01,
        suffix: " s",
        solution:
          "T = 2π√(m/k) = 2π√(0,2/50) = 2π√(0,004) = 2π × 0,0632 ≈ <strong>0,397 sekon</strong>. Pegas yang lebih kaku (k besar) memperpendek periode.",
        hint: "Bagi massa dengan k, akarkan, lalu kalikan 2π.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan, manakah yang membuat gaya pemulih pegas membesar dan mana yang tidak.",
        buckets: ["Gaya pemulih membesar", "Gaya pemulih tidak berubah"],
        items: [
          { text: "Pegas ditarik lebih jauh", bucket: "Gaya pemulih membesar" },
          { text: "Pegas diganti yang lebih kaku (k besar)", bucket: "Gaya pemulih membesar" },
          { text: "Warna pegas diganti", bucket: "Gaya pemulih tidak berubah" },
          { text: "Beban dicat ulang tanpa menambah regangan", bucket: "Gaya pemulih tidak berubah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Timbangan Pegas dan Suspensi Mobil",
        html: "Timbangan pegas di pasar bekerja persis karena Hukum Hooke: makin berat belanjaan, makin jauh pegas meregang, dan skalanya dikalibrasi sesuai hubungan lurus antara gaya dan regangan. Suspensi mobil memakai prinsip yang sama dengan pegas yang jauh lebih kaku: saat roda menabrak lubang, pegas meredam guncangan dengan gaya pemulih yang sebanding simpangan, lalu mengembalikan bodi ke posisi semula. Satu hukum sederhana, dipakai dari pasar sampai jalan tol.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengukur tarikannya, rumus pun lahir. <strong>Hukum Hooke: F = −kx</strong>, dengan F gaya pemulih, k konstanta pegas (N/m), dan x simpangan. Tanda minus menegaskan gaya selalu berlawanan arah simpangan. Karena gaya pemulih inilah, periode getarannya menjadi <strong>T = 2π√(m/k)</strong>: makin berat beban memperlambat, makin kaku pegas mempercepat.",
      },
      {
        type: "takeaways",
        items: [
          "Pegas memberi gaya pemulih yang menarik beban kembali ke titik seimbang.",
          "Hukum Hooke: F = −kx, gaya sebanding simpangan dan berlawanan arah.",
          "Konstanta pegas k (N/m) menyatakan kekakuan; k = F/x.",
          "Periode getaran pegas: T = 2π√(m/k).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Hooke menyatakan gaya pemulih pegas sebanding dengan...",
            options: ["Massa beban", "Simpangan", "Waktu", "Suhu"],
            answer: 1,
            explain: "F = −kx, gaya pemulih sebanding simpangan x.",
          },
          {
            q: "Tanda minus pada F = −kx menunjukkan gaya...",
            options: [
              "Searah simpangan",
              "Berlawanan arah simpangan",
              "Selalu nol",
              "Tegak lurus",
            ],
            answer: 1,
            explain: "Gaya pemulih selalu berlawanan arah simpangan, menuju titik seimbang.",
          },
          {
            q: "Pegas meregang 0,2 m oleh gaya 10 N. Konstanta pegasnya...",
            options: ["2 N/m", "50 N/m", "20 N/m", "0,02 N/m"],
            answer: 1,
            explain: "k = F/x = 10/0,2 = 50 N/m.",
          },
          {
            q: "Periode getaran pegas dirumuskan...",
            options: ["T = 2π√(m/k)", "T = 2π√(k/m)", "T = 2π√(L/g)", "T = mk"],
            answer: 0,
            explain: "Periode getaran pegas T = 2π√(m/k).",
          },
          {
            q: "Pegas yang lebih kaku (k lebih besar) membuat getaran...",
            options: ["Lebih lambat", "Lebih cepat", "Berhenti", "Tak berubah"],
            answer: 1,
            explain: "k besar memperkecil T, jadi getaran lebih cepat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pegas-dan-bandul",
    levelId: "sistem-getaran",
    order: 2,
    title: "Pegas dan Bandul",
    summary:
      "Mengapa pegas berat berayun lambat, dan tali panjang berayun santai? Kita selidiki dulu, baru rumus periodenya muncul.",
    durationMin: 14,
    tags: ["pegas", "bandul", "periode", "osilasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Gantungkan beban di pegas lalu tarik ke bawah dan lepaskan: ia memantul naik-turun. Ikat batu di tali lalu ayunkan: ia berayun kiri-kanan. Keduanya bergetar, tapi apa yang menentukan cepat atau lambatnya? Sebelum menulis rumus, ayo selidiki dulu apa yang membuat iramanya berbeda.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Pegas dan Bandul Berosilasi",
        caption: "Dua sistem getaran klasik dengan irama masing-masing.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba bayangkan dua percobaan. Pertama, ganti beban pegas dengan yang lebih berat: ayunannya jadi lebih <strong>lambat</strong>. Kedua, perpanjang tali bandul: ayunannya juga lebih <strong>lambat</strong>. Menariknya, untuk bandul, berat batunya tidak berpengaruh sama sekali pada irama. Rasakan dulu pola ini sebelum menamainya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa yang menentukan periode?",
        html: "Pada <strong>pegas</strong>, periode bergantung pada massa beban dan kekakuan pegas. Pada <strong>bandul</strong>, periode bergantung pada panjang tali dan gravitasi, tapi <em>tidak</em> pada massa beban. Inilah yang membuat keduanya berbeda.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "chart",
        variant: "line",
        title: "Periode Bandul terhadap Panjang Tali",
        unit: "sekon",
        source: "perhitungan T = 2π√(L/g), g = 9,8 m/s²",
        note: "Semakin panjang tali, semakin besar periode, tetapi tidak linear: periode tumbuh mengikuti akar dari panjang.",
        data: [
          { label: "0,25 m", value: 1.0, color: "#fb923c" },
          { label: "0,5 m", value: 1.42, color: "#fb923c" },
          { label: "1,0 m", value: 2.01, color: "#f59e0b" },
          { label: "2,0 m", value: 2.84, color: "#f59e0b" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bandul bertali sepanjang 1 m berayun di tempat dengan g = 9,8 m/s². Berapa periodenya? (gunakan T = 2π√(L/g))",
        answer: 2.01,
        tolerance: 0.05,
        suffix: " s",
        solution:
          "T = 2π√(L/g) = 2π√(1/9,8) = 2π√(0,102) = 2π × 0,3194 ≈ <strong>2,01 sekon</strong>. Inilah mengapa bandul jam dinding klasik dengan tali sekitar satu meter berdetak sekitar sekali per detik tiap ayunan.",
        hint: "Hitung 1 dibagi 9,8 dulu, akarkan, lalu kali 2π.",
      },
      {
        type: "calcExercise",
        prompt:
          "Beban 0,5 kg digantung pada pegas dengan konstanta k = 200 N/m. Berapa periode getarnya? (gunakan T = 2π√(m/k))",
        answer: 0.314,
        tolerance: 0.01,
        suffix: " s",
        solution:
          "T = 2π√(m/k) = 2π√(0,5/200) = 2π√(0,0025) = 2π × 0,05 ≈ <strong>0,314 sekon</strong>. Pegas yang lebih kaku (k besar) berayun lebih cepat.",
        hint: "Bagi massa dengan k, akarkan, lalu kali 2π.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap perubahan dengan dampaknya pada periode.",
        pairs: [
          { left: "Beban pegas diperberat", right: "Periode bertambah (lebih lambat)" },
          { left: "Pegas dibuat lebih kaku", right: "Periode berkurang (lebih cepat)" },
          { left: "Tali bandul diperpanjang", right: "Periode bertambah (lebih lambat)" },
          { left: "Massa batu bandul ditambah", right: "Periode tetap" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Jam Bandul Galileo dan Huygens",
        html: "Galileo menyadari, saat mengamati lampu gantung di katedral, bahwa periode ayunan bandul tidak bergantung pada amplitudo, hanya pada panjang tali. Christiaan Huygens lalu memanfaatkan sifat ini untuk membuat jam bandul pertama pada 1656. Dengan memilih panjang tali yang tepat, mereka memperoleh ayunan yang periodenya sangat stabil, sebuah penunjuk waktu yang akurat selama berabad-abad sebelum jam kuarsa.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menyelidiki, baru rumus tampil. Periode pegas: <strong>T = 2π√(m/k)</strong>, dengan m massa beban dan k konstanta pegas. Periode bandul: <strong>T = 2π√(L/g)</strong>, dengan L panjang tali dan g percepatan gravitasi. Perhatikan, massa bandul memang tidak muncul di rumusnya, persis seperti yang kita amati tadi.",
      },
      {
        type: "takeaways",
        items: [
          "Periode pegas naik bila massa bertambah atau pegas makin lunak: T = 2π√(m/k).",
          "Periode bandul naik bila tali makin panjang: T = 2π√(L/g).",
          "Massa beban bandul tidak memengaruhi periodenya.",
          "Periode tumbuh mengikuti akar, jadi tidak berubah linear terhadap panjang atau massa.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Periode bandul bergantung pada...",
            options: ["Massa beban", "Panjang tali dan gravitasi", "Amplitudo besar", "Warna tali"],
            answer: 1,
            explain: "T = 2π√(L/g), bergantung panjang tali dan gravitasi, bukan massa.",
          },
          {
            q: "Jika massa beban pegas diperbesar, periodenya...",
            options: ["Bertambah", "Berkurang", "Tetap", "Menjadi nol"],
            answer: 0,
            explain: "T = 2π√(m/k); massa lebih besar berarti periode lebih besar.",
          },
          {
            q: "Pegas yang lebih kaku (k besar) membuat getaran...",
            options: ["Lebih lambat", "Lebih cepat", "Berhenti", "Tidak berubah"],
            answer: 1,
            explain: "k besar memperkecil T, jadi getaran lebih cepat.",
          },
          {
            q: "Mengapa jam bandul akurat?",
            options: [
              "Karena talinya berat",
              "Karena periodenya stabil untuk panjang tali tertentu",
              "Karena beban besar",
              "Karena amplitudonya besar",
            ],
            answer: 1,
            explain: "Periode bandul stabil dan hanya ditentukan panjang tali (dan g).",
          },
          {
            q: "Bandul tali 0,25 m memiliki periode sekitar...",
            options: ["0,1 s", "1,0 s", "5 s", "10 s"],
            answer: 1,
            explain: "T = 2π√(0,25/9,8) ≈ 1,0 sekon.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "resonansi-getaran",
    levelId: "sistem-getaran",
    order: 3,
    title: "Resonansi",
    summary:
      "Mengapa dorongan kecil yang tepat irama bisa membuat ayunan melambung tinggi? Kita rasakan dulu mantranya sebelum rumus muncul.",
    durationMin: 13,
    tags: ["resonansi", "frekuensi-alami", "getaran", "amplitudo"],
    blocks: [
      {
        type: "paragraph",
        html: "Mendorong ayunan dengan tenaga besar sekaligus malah tidak efektif. Tetapi dorongan kecil yang diberikan <strong>tepat pada saat yang sama</strong> tiap ayunan, lama-lama membuatnya melambung tinggi. Penyanyi opera konon bisa memecahkan gelas hanya dengan nada yang pas. Rahasianya satu: irama dorongan yang cocok. Ayo rasakan dulu mantra 'tepat irama' ini sebelum menamainya.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Dorongan Tepat Irama",
        caption: "Dorongan yang seirama frekuensi alami membuat amplitudo melonjak.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Setiap benda punya <strong>frekuensi alami</strong>, irama yang paling 'disukainya' untuk bergetar. Bayangkan memberi dorongan tepat pada irama itu: tiap dorongan menambah sedikit energi yang menumpuk, dan amplitudo membesar terus. Beri dorongan dengan irama yang salah, energinya malah saling membatalkan. Rasakan dulu mengapa hanya irama yang pas yang bekerja.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Frekuensi alami dan resonansi",
        html: "<strong>Frekuensi alami</strong> adalah frekuensi getaran suatu benda saat dibiarkan bergetar bebas. <strong>Resonansi</strong> terjadi ketika gaya pendorong berulang memiliki frekuensi sama dengan frekuensi alami, sehingga energi terus menumpuk dan amplitudo melonjak dramatis.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah ayunan memiliki periode alami 2 sekon. Agar terjadi resonansi, berapa frekuensi dorongan yang harus diberikan? (gunakan f = 1/T)",
        answer: 0.5,
        tolerance: 0.01,
        suffix: " Hz",
        solution:
          "Resonansi terjadi saat frekuensi dorongan = frekuensi alami = 1/T = 1/2 = <strong>0,5 Hz</strong>. Artinya satu dorongan tiap dua detik, tepat seirama ayunan.",
        hint: "Frekuensi dorongan harus sama dengan frekuensi alami, yaitu 1/T.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sistem pegas-massa punya k = 100 N/m dan m = 1 kg. Berapa frekuensi alaminya? (gunakan f = (1/2π)√(k/m))",
        answer: 1.59,
        tolerance: 0.05,
        suffix: " Hz",
        solution:
          "f = (1/2π)√(k/m) = (1/2π)√(100/1) = (1/2π) × 10 ≈ <strong>1,59 Hz</strong>. Bila didorong tepat pada 1,59 Hz, sistem ini akan beresonansi.",
        hint: "Akarkan k/m dulu, lalu bagi dengan 2π.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan, manakah peristiwa yang mengandalkan resonansi dan mana yang tidak.",
        buckets: ["Memanfaatkan resonansi", "Bukan resonansi"],
        items: [
          { text: "Menyetel radio agar menangkap satu stasiun", bucket: "Memanfaatkan resonansi" },
          { text: "Mendorong ayunan tepat tiap kali kembali", bucket: "Memanfaatkan resonansi" },
          { text: "Mengangkat batu dengan tuas", bucket: "Bukan resonansi" },
          { text: "Mendorong meja agar bergeser", bucket: "Bukan resonansi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tentara Memecah Langkah di Jembatan",
        html: "Ada aturan militer kuno: saat melintasi jembatan, pasukan diperintahkan <strong>memecah langkah</strong> alih-alih berbaris seragam. Mengapa? Langkah serentak ratusan tentara memberi dorongan berirama pada jembatan. Jika irama langkah itu kebetulan cocok dengan frekuensi alami jembatan, getaran bisa menumpuk lewat resonansi dan membahayakan struktur. Dengan melangkah tak seragam, dorongan jadi acak dan tidak pernah menumpuk. Prinsip yang sama membuat insinyur memasang peredam massa di gedung pencakar langit agar tidak beresonansi dengan gempa.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan mantranya, rumus pun jelas. Resonansi terjadi saat <strong>frekuensi pendorong = frekuensi alami (f = f₀)</strong>. Frekuensi alami sistem pegas: <strong>f₀ = (1/2π)√(k/m)</strong>; untuk bandul: <strong>f₀ = (1/2π)√(g/L)</strong>. Pada kondisi inilah amplitudo melonjak paling tinggi, karena tiap dorongan menambah energi tepat pada waktunya.",
      },
      {
        type: "takeaways",
        items: [
          "Setiap benda punya frekuensi alami, irama getaran bebasnya.",
          "Resonansi terjadi saat frekuensi dorongan sama dengan frekuensi alami.",
          "Pada resonansi, energi menumpuk dan amplitudo melonjak dramatis.",
          "Frekuensi alami pegas f₀ = (1/2π)√(k/m); bandul f₀ = (1/2π)√(g/L).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Resonansi terjadi ketika frekuensi dorongan...",
            options: [
              "Jauh di atas frekuensi alami",
              "Sama dengan frekuensi alami",
              "Nol",
              "Berubah-ubah acak",
            ],
            answer: 1,
            explain: "Resonansi muncul saat frekuensi dorongan cocok dengan frekuensi alami.",
          },
          {
            q: "Pada saat resonansi, amplitudo getaran...",
            options: ["Mengecil", "Melonjak besar", "Tetap", "Menjadi nol"],
            answer: 1,
            explain: "Energi terus menumpuk sehingga amplitudo melonjak.",
          },
          {
            q: "Frekuensi alami sistem pegas-massa dirumuskan...",
            options: [
              "f₀ = (1/2π)√(k/m)",
              "f₀ = 2π√(m/k)",
              "f₀ = km",
              "f₀ = (1/2π)√(m/k)",
            ],
            answer: 0,
            explain: "f₀ = (1/2π)√(k/m).",
          },
          {
            q: "Ayunan berperiode alami 2 s beresonansi bila didorong dengan frekuensi...",
            options: ["2 Hz", "0,5 Hz", "1 Hz", "4 Hz"],
            answer: 1,
            explain: "f = 1/T = 1/2 = 0,5 Hz, sama dengan frekuensi alaminya.",
          },
          {
            q: "Mengapa tentara memecah langkah di jembatan?",
            options: [
              "Agar lebih cepat",
              "Agar langkah tidak beresonansi dengan jembatan",
              "Agar terlihat rapi",
              "Agar hemat tenaga",
            ],
            answer: 1,
            explain: "Langkah seragam bisa memicu resonansi yang membahayakan jembatan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "redaman-getaran",
    levelId: "sistem-getaran",
    order: 4,
    title: "Redaman Getaran",
    summary:
      "Mengapa pintu yang dilengkapi peredam menutup mulus tanpa membanting? Kita amati dulu getaran yang meredup sebelum merangkumnya.",
    durationMin: 13,
    tags: ["redaman", "amplitudo", "getaran", "gesekan"],
    blocks: [
      {
        type: "paragraph",
        html: "Petik garpu tala: deringnya nyaring lalu pelan-pelan menghilang. Lepaskan ayunan: tiap ayunannya makin pendek sampai berhenti. Pintu berperedam menutup mulus tanpa membanting. Semua getaran nyata akhirnya meredup karena energinya bocor. Sebelum menulis rumus, ayo amati dulu bagaimana amplitudo getaran menyusut tiap putaran.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Getaran yang Meredup",
        caption: "Amplitudo menyusut tiap getaran karena energi terbuang jadi panas.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan ayunan yang tiap putaran amplitudonya tinggal sekitar 0,8 kali sebelumnya: 10 cm, lalu 8 cm, lalu 6,4 cm, terus menyusut. Periodenya hampir tidak berubah, tetapi tingginya merosot teratur. Inilah <strong>redaman</strong>: gesekan diam-diam menguras energi getaran. Rasakan dulu penyusutan bertahap ini sebelum menamai jenis-jenisnya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga rasa redaman",
        html: "<strong>Redaman ringan</strong>: getaran masih bolak-balik beberapa kali sambil mengecil (garpu tala, ayunan). <strong>Redaman kritis</strong>: kembali ke seimbang secepat mungkin tanpa melewati (peredam pintu, suspensi ideal). <strong>Redaman berat</strong>: kembali ke seimbang dengan lamban tanpa berosilasi (engsel yang sangat kental).",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Penyusutan Amplitudo Getaran Teredam",
        unit: "cm",
        source: "ilustrasi redaman ringan: tiap getaran amplitudo menjadi 0,8 kali sebelumnya",
        note: "Amplitudo menyusut dengan faktor tetap tiap getaran, menghasilkan kurva turun yang melandai. Periode getaran sendiri hampir tak berubah.",
        data: [
          { label: "Getaran 0", value: 10, color: "#fb923c" },
          { label: "Getaran 1", value: 8, color: "#fb923c" },
          { label: "Getaran 2", value: 6.4, color: "#f59e0b" },
          { label: "Getaran 3", value: 5.12, color: "#f59e0b" },
          { label: "Getaran 4", value: 4.1, color: "#f59e0b" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Amplitudo awal getaran 10 cm dan tiap getaran menyusut menjadi 0,8 kali sebelumnya. Berapa amplitudo setelah 3 getaran?",
        answer: 5.12,
        tolerance: 0.05,
        suffix: " cm",
        solution:
          "Tiap getaran dikali 0,8: A₃ = 10 × 0,8³ = 10 × 0,512 = <strong>5,12 cm</strong>. Penyusutan dengan faktor tetap inilah ciri redaman ringan.",
        hint: "Kalikan 10 dengan 0,8 sebanyak tiga kali (0,8³).",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan pola yang sama (faktor 0,8 tiap getaran), berapa amplitudo setelah 2 getaran?",
        answer: 6.4,
        tolerance: 0.05,
        suffix: " cm",
        solution:
          "A₂ = 10 × 0,8² = 10 × 0,64 = <strong>6,4 cm</strong>. Setelah dua getaran, amplitudo tinggal hampir dua pertiga semula.",
        hint: "Kalikan 10 dengan 0,8 dua kali (0,8²).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan jenis redaman dengan perilakunya.",
        pairs: [
          { left: "Redaman ringan", right: "Masih berosilasi beberapa kali sambil mengecil" },
          { left: "Redaman kritis", right: "Kembali ke seimbang secepat mungkin tanpa melewati" },
          { left: "Redaman berat", right: "Kembali ke seimbang dengan lamban tanpa berosilasi" },
          { left: "Tanpa redaman", right: "Berosilasi terus dengan amplitudo tetap" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Suspensi Mobil dan Penutup Pintu Otomatis",
        html: "Peredam kejut (shock absorber) mobil dirancang mendekati <strong>redaman kritis</strong>: setelah roda menabrak lubang, bodi mobil kembali tenang secepat mungkin tanpa terus mengayun-ayun. Kalau peredamnya rusak (redaman terlalu ringan), mobil akan terus berayun naik-turun setelah tiap gundukan. Penutup pintu otomatis di kantor juga memakai redaman agar pintu menutup mulus tanpa membanting. Dalam kedua kasus, insinyur sengaja membuang energi getaran dengan terkendali demi kenyamanan dan keamanan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati penyusutannya, rumus pun dirangkum. Pada getaran teredam, amplitudo meluruh secara eksponensial: <strong>A(t) = A₀ e^(−bt/2m)</strong>, dengan b koefisien redaman dan A₀ amplitudo awal. Karena energi sebanding kuadrat amplitudo, energi pun ikut meluruh. Besar kecilnya b menentukan apakah redaman ringan, kritis, atau berat.",
      },
      {
        type: "takeaways",
        items: [
          "Getaran nyata meredup karena gesekan menguras energinya jadi panas.",
          "Amplitudo getaran teredam menyusut, periode hampir tidak berubah.",
          "Tiga jenis: redaman ringan, kritis, dan berat.",
          "Amplitudo meluruh eksponensial: A(t) = A₀ e^(−bt/2m).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Penyebab utama getaran nyata akhirnya berhenti adalah...",
            options: ["Gravitasi hilang", "Gesekan menguras energi", "Periode membesar", "Massa berkurang"],
            answer: 1,
            explain: "Redaman akibat gesekan mengubah energi getaran menjadi panas.",
          },
          {
            q: "Pada getaran teredam, yang menyusut tiap getaran adalah...",
            options: ["Periode", "Amplitudo", "Frekuensi alami", "Massa"],
            answer: 1,
            explain: "Amplitudo menyusut, sementara periode hampir tetap.",
          },
          {
            q: "Suspensi mobil yang baik dirancang mendekati redaman...",
            options: ["Tanpa redaman", "Kritis", "Sangat ringan", "Nol"],
            answer: 1,
            explain: "Redaman kritis membuat bodi kembali tenang secepat mungkin tanpa mengayun.",
          },
          {
            q: "Amplitudo awal 10 cm menyusut 0,8 kali tiap getaran. Setelah 2 getaran...",
            options: ["8 cm", "6,4 cm", "5,12 cm", "4 cm"],
            answer: 1,
            explain: "10 × 0,8² = 6,4 cm.",
          },
          {
            q: "Jenis redaman yang masih berosilasi beberapa kali sambil mengecil disebut...",
            options: ["Redaman berat", "Redaman kritis", "Redaman ringan", "Tanpa redaman"],
            answer: 2,
            explain: "Redaman ringan masih berosilasi beberapa kali sambil amplitudonya mengecil.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "susunan-pegas",
    levelId: "sistem-getaran",
    order: 5,
    title: "Susunan Pegas Seri dan Paralel",
    summary:
      "Gabungkan dua pegas dan sistemnya berubah sifat. Disusun berjajar jadi lebih kaku, disusun bersambung jadi lebih lentur, dan periode getarannya ikut berubah.",
    durationMin: 14,
    tags: ["pegas", "seri", "paralel", "konstanta", "periode"],
    blocks: [
      {
        type: "paragraph",
        html: "Satu pegas punya konstanta kekakuan k tertentu. Tetapi di dunia nyata, mulai dari suspensi mobil sampai kasur pegas, sering dipakai banyak pegas sekaligus. Ada dua cara dasar menggabungkannya: <strong>paralel</strong> (berjajar) dan <strong>seri</strong> (bersambung). Keduanya menghasilkan satu pegas pengganti dengan kekakuan yang berbeda.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Dua Pegas, Dua Watak",
        caption: "Pegas paralel saling membantu menahan, pegas seri saling mewariskan regangan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua aturan penggabungan",
        html: "<strong>Paralel:</strong> k pengganti dijumlahkan, k&#8329; = k&#8321; + k&#8322;. Sistem jadi lebih kaku. <strong>Seri:</strong> kebalikannya yang dijumlahkan, 1/k&#8329; = 1/k&#8321; + 1/k&#8322;. Sistem jadi lebih lentur. Pola ini kebalikan dari aturan susunan hambatan listrik, jadi hati-hati jangan tertukar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Cara mengingat",
        html: "Paralel itu seperti banyak orang mengangkat beban bersama-sama, makin banyak makin kuat (k bertambah). Seri itu seperti rantai panjang, makin panjang makin mudah molor (k berkurang). Pegas pengganti seri selalu lebih kecil dari pegas terkecilnya.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Konstanta Pengganti Dua Pegas (k = 200 N/m masing-masing)",
        unit: "N/m",
        source: "ilustrasi edukatif",
        note: "Dengan dua pegas 200 N/m, susunan paralel menghasilkan 400 N/m (dua kali lebih kaku), sedangkan seri hanya 100 N/m (setengahnya).",
        data: [
          { label: "Satu pegas", value: 200, color: "#38bdf8" },
          { label: "Paralel", value: 400, color: "#0ea5e9" },
          { label: "Seri", value: 100, color: "#7dd3fc" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Periode Berubah karena Susunan",
        html: "Sebuah massa 1 kg digantung pada dua pegas yang masing-masing k = 200 N/m. Jika disusun <strong>paralel</strong>, k&#8329; = 400 N/m sehingga T = 2π√(m/k) = 2π√(1/400) = <strong>0,314 s</strong>. Jika disusun <strong>seri</strong>, k&#8329; = 100 N/m sehingga T = 2π√(1/100) = <strong>0,628 s</strong>. Susunan seri membuat sistem lebih lentur, jadi ayunannya dua kali lebih lambat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua pegas dengan k = 300 N/m dan k = 600 N/m disusun seri. Berapa konstanta pengganti sistem?",
        answer: 200,
        tolerance: 1,
        suffix: " N/m",
        solution:
          "Seri: 1/k&#8329; = 1/300 + 1/600 = 2/600 + 1/600 = 3/600 = 1/200, sehingga k&#8329; = <strong>200 N/m</strong>. Hasilnya lebih kecil dari pegas terlemah (300 N/m), sesuai sifat susunan seri.",
        hint: "Untuk seri, jumlahkan kebalikan tiap k lalu balikkan hasilnya.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan ini sesuai jenis susunan pegas yang dijelaskannya.",
        buckets: ["Susunan paralel", "Susunan seri"],
        items: [
          { text: "Konstanta pengganti dijumlahkan langsung", bucket: "Susunan paralel" },
          { text: "Sistem menjadi lebih kaku", bucket: "Susunan paralel" },
          { text: "Kebalikan konstanta yang dijumlahkan", bucket: "Susunan seri" },
          { text: "Pegas pengganti lebih lentur dari pegas terlemah", bucket: "Susunan seri" },
        ],
      },
      {
        type: "callout",
        tone: "key",
        title: "Ringkasan rumus",
        html: "<strong>Paralel:</strong> k&#8329; = k&#8321; + k&#8322; + ... <strong>Seri:</strong> 1/k&#8329; = 1/k&#8321; + 1/k&#8322; + ... Periode getaran tetap memakai <strong>T = 2π√(m/k&#8329;)</strong>. Makin besar k, makin singkat periode; makin kecil k, makin panjang periode.",
      },
      {
        type: "takeaways",
        items: [
          "Pegas paralel: konstanta dijumlahkan, sistem lebih kaku.",
          "Pegas seri: kebalikan konstanta dijumlahkan, sistem lebih lentur.",
          "Konstanta pengganti seri selalu lebih kecil dari pegas terkecilnya.",
          "Periode getaran mengikuti T = 2π√(m/k); k besar berarti periode singkat.",
          "Aturan pegas ini kebalikan dari aturan susunan hambatan listrik.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua pegas identik k = 100 N/m disusun paralel. Konstanta penggantinya...",
            options: ["50 N/m", "100 N/m", "200 N/m", "400 N/m"],
            answer: 2,
            explain: "Paralel: k = 100 + 100 = 200 N/m.",
          },
          {
            q: "Dua pegas identik k = 100 N/m disusun seri. Konstanta penggantinya...",
            options: ["50 N/m", "100 N/m", "200 N/m", "400 N/m"],
            answer: 0,
            explain: "Seri: 1/k = 1/100 + 1/100 = 2/100, jadi k = 50 N/m.",
          },
          {
            q: "Susunan pegas yang membuat sistem lebih kaku adalah...",
            options: ["Seri", "Paralel", "Keduanya sama", "Tergantung massa"],
            answer: 1,
            explain: "Paralel menjumlahkan konstanta, sehingga sistem lebih kaku.",
          },
          {
            q: "Jika konstanta diperbesar (massa tetap), periode getaran akan...",
            options: ["Bertambah", "Berkurang", "Tetap", "Menjadi nol"],
            answer: 1,
            explain: "T = 2π√(m/k); k makin besar membuat T makin kecil.",
          },
          {
            q: "Konstanta pengganti susunan seri selalu...",
            options: [
              "Lebih besar dari tiap pegas",
              "Sama dengan rata-rata",
              "Lebih kecil dari pegas terlemah",
              "Nol",
            ],
            answer: 2,
            explain: "Susunan seri membuat sistem lebih lentur, k pengganti lebih kecil dari pegas terlemah.",
          },
        ],
      },
    ],
  },
];
