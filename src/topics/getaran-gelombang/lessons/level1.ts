import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "gerak-harmonik-sederhana",
    levelId: "getaran-ghs",
    order: 1,
    title: "Gerak Harmonik Sederhana",
    summary:
      "Sebelum bertemu rumus sinus, kita rasakan dulu irama ayunan yang bolak-balik dengan pola yang sama: itulah gerak harmonik.",
    durationMin: 13,
    tags: ["getaran", "osilasi", "harmonik", "periode"],
    blocks: [
      {
        type: "paragraph",
        html: "Dorong seorang anak di ayunan, lalu lepaskan. Ia meluncur maju, berhenti sejenak, kembali, lalu maju lagi, terus berulang dengan irama yang nyaris sama. Anak itu sedang melakukan <strong>getaran</strong>. Sebelum kita menulis rumus apa pun, ayo amati dulu irama bolak-balik yang teratur ini.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Irama Getaran",
        caption: "Setiap getaran bergerak menjauh lalu kembali ke titik seimbang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan menarik ayunan ke kiri lalu melepasnya. Perhatikan tiga hal: ada <strong>titik seimbang</strong> di tengah, ada <strong>simpangan</strong> terjauh di kiri dan kanan, dan satu <strong>periode</strong> adalah waktu untuk satu kali bolak-balik penuh. Jangan hafalkan apa pun dulu, cukup rasakan polanya yang berulang rapi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga kata kunci",
        html: "<strong>Amplitudo (A)</strong> adalah simpangan terjauh dari titik seimbang. <strong>Periode (T)</strong> adalah waktu satu getaran penuh. <strong>Frekuensi (f)</strong> adalah jumlah getaran tiap detik. Periode dan frekuensi adalah dua sisi mata uang yang sama.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "line",
        title: "Simpangan Ayunan terhadap Waktu",
        unit: "cm",
        source: "ilustrasi edukatif (A = 5 cm, T = 2 s)",
        note: "Grafik simpangan terhadap waktu berbentuk gelombang sinus: naik ke +5 cm, kembali nol, turun ke -5 cm, lalu berulang.",
        data: [
          { label: "0,0 s", value: 0, color: "#fb923c" },
          { label: "0,25 s", value: 3.54, color: "#fb923c" },
          { label: "0,5 s", value: 5, color: "#fb923c" },
          { label: "0,75 s", value: 3.54, color: "#fb923c" },
          { label: "1,0 s", value: 0, color: "#f59e0b" },
          { label: "1,25 s", value: -3.54, color: "#f59e0b" },
          { label: "1,5 s", value: -5, color: "#f59e0b" },
          { label: "1,75 s", value: -3.54, color: "#f59e0b" },
          { label: "2,0 s", value: 0, color: "#f59e0b" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bandul melakukan 2 getaran penuh tiap detik (f = 2 Hz). Berapa periodenya?",
        answer: 0.5,
        tolerance: 0.01,
        suffix: " s",
        solution:
          "Periode adalah kebalikan frekuensi: T = 1/f = 1/2 = <strong>0,5 sekon</strong>. Tiap getaran penuh memakan setengah detik.",
        hint: "Periode = 1 dibagi frekuensi.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan, manakah yang termasuk gerak harmonik (bolak-balik teratur) dan mana yang bukan.",
        buckets: ["Gerak harmonik", "Bukan gerak harmonik"],
        items: [
          { text: "Ayunan bandul yang berosilasi", bucket: "Gerak harmonik" },
          { text: "Mobil melaju lurus di jalan tol", bucket: "Bukan gerak harmonik" },
          { text: "Senar gitar yang dipetik", bucket: "Gerak harmonik" },
          { text: "Bola menggelinding menuruni bukit", bucket: "Bukan gerak harmonik" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ayunan Taman dan Dorongan Berirama",
        html: "Saat mendorong anak di ayunan, orang tua tidak mendorong asal-asalan. Mereka mendorong tepat saat ayunan mulai bergerak maju, dengan irama yang sama setiap kali. Mengapa? Karena ayunan punya periode <strong>tetap</strong>: berapa pun kuatnya dorongan, satu kali bolak-balik memakan waktu yang sama. Itulah ciri khas gerak harmonik, periodenya konsisten meski amplitudonya berubah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan iramanya, baru rumus muncul. Simpangan terhadap waktu mengikuti <strong>y = A sin(ωt)</strong>, dengan A amplitudo dan ω = 2πf kecepatan sudut. Hubungan periode dan frekuensi: <strong>T = 1/f</strong>. Rumus ini bukan untuk dihafal mati, melainkan rangkuman dari pola bolak-balik yang tadi kita amati.",
      },
      {
        type: "takeaways",
        items: [
          "Gerak harmonik adalah getaran bolak-balik teratur di sekitar titik seimbang.",
          "Amplitudo adalah simpangan terjauh; periode adalah waktu satu getaran penuh.",
          "Periode dan frekuensi saling berkebalikan: T = 1/f.",
          "Grafik simpangan terhadap waktu berbentuk sinus yang berulang rapi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud amplitudo?",
            options: [
              "Waktu satu getaran",
              "Simpangan terjauh dari titik seimbang",
              "Jumlah getaran per detik",
              "Kecepatan rata-rata",
            ],
            answer: 1,
            explain: "Amplitudo adalah simpangan maksimum dari titik seimbang.",
          },
          {
            q: "Jika frekuensi getaran 4 Hz, berapa periodenya?",
            options: ["0,25 s", "4 s", "2 s", "0,5 s"],
            answer: 0,
            explain: "T = 1/f = 1/4 = 0,25 sekon.",
          },
          {
            q: "Satu periode getaran adalah...",
            options: [
              "Setengah getaran",
              "Satu kali bolak-balik penuh",
              "Dua getaran",
              "Simpangan maksimum",
            ],
            answer: 1,
            explain: "Periode adalah waktu untuk satu getaran penuh (bolak-balik).",
          },
          {
            q: "Bentuk grafik simpangan terhadap waktu pada gerak harmonik adalah...",
            options: ["Garis lurus", "Parabola", "Sinusoidal", "Tangga"],
            answer: 2,
            explain: "Simpangan mengikuti fungsi sinus, jadi grafiknya sinusoidal.",
          },
          {
            q: "Hubungan kecepatan sudut dan frekuensi adalah...",
            options: ["ω = f", "ω = 2πf", "ω = f/2π", "ω = πf²"],
            answer: 1,
            explain: "Kecepatan sudut ω = 2πf.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "simpangan-kecepatan-percepatan",
    levelId: "getaran-ghs",
    order: 2,
    title: "Simpangan, Kecepatan, dan Percepatan",
    summary:
      "Kapan ayunan melaju paling cepat, dan kapan ia paling 'tertarik' kembali? Kita amati dulu di mana cepat dan di mana lambat, baru rumusnya muncul.",
    durationMin: 14,
    tags: ["simpangan", "kecepatan", "percepatan", "harmonik"],
    blocks: [
      {
        type: "paragraph",
        html: "Perhatikan ayunan dengan saksama. Di titik terjauh, sesaat ia berhenti total sebelum berbalik. Di tengah, justru ia melesat paling kencang. Anehnya, di titik terjauh itulah ia paling kuat ditarik kembali ke tengah. Sebelum menulis rumus, ayo amati dulu kapan getaran cepat, kapan lambat, dan kapan ia paling 'dipaksa' kembali.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Cepat di Tengah, Berhenti di Tepi",
        caption: "Kecepatan getaran berubah-ubah sepanjang lintasannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ikuti satu titik di ayunan dengan matamu. Saat melewati <strong>titik seimbang</strong>, kecepatannya paling besar tapi tidak ada yang menariknya (percepatan nol). Saat di <strong>simpangan terjauh</strong>, kecepatannya nol sejenak tapi tarikan kembali (percepatan) paling besar. Rasakan dulu pertukaran ini sebelum menamainya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga besaran yang menari bergantian",
        html: "<strong>Simpangan</strong> (y) adalah jarak dari titik seimbang. <strong>Kecepatan</strong> (v) adalah laju perubahan simpangan: paling besar di tengah. <strong>Percepatan</strong> (a) selalu mengarah balik ke titik seimbang dan paling besar di simpangan terjauh. Ketiganya bergantian mencapai puncak.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kecepatan Getaran terhadap Waktu",
        unit: "cm/s",
        source: "perhitungan v = Aω cos(ωt), A = 5 cm, T = 2 s, ω ≈ 3,14 rad/s",
        note: "Kecepatan maksimum (≈ 15,7 cm/s) terjadi saat simpangan nol (titik seimbang), dan nol saat simpangan terjauh.",
        data: [
          { label: "0,0 s", value: 15.7, color: "#fb923c" },
          { label: "0,25 s", value: 11.1, color: "#fb923c" },
          { label: "0,5 s", value: 0, color: "#f59e0b" },
          { label: "0,75 s", value: -11.1, color: "#f59e0b" },
          { label: "1,0 s", value: -15.7, color: "#f59e0b" },
          { label: "1,25 s", value: -11.1, color: "#f59e0b" },
          { label: "1,5 s", value: 0, color: "#f59e0b" },
          { label: "1,75 s", value: 11.1, color: "#fb923c" },
          { label: "2,0 s", value: 15.7, color: "#fb923c" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda bergetar harmonik dengan amplitudo A = 0,1 m dan kecepatan sudut ω = 10 rad/s. Berapa kecepatan maksimumnya? (gunakan vmaks = Aω)",
        answer: 1,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "vmaks = A × ω = 0,1 × 10 = <strong>1 m/s</strong>. Kecepatan tertinggi ini dicapai persis saat benda melewati titik seimbang.",
        hint: "Kalikan amplitudo dengan kecepatan sudut.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan A = 0,1 m dan ω = 10 rad/s, berapa percepatan maksimum benda itu? (gunakan amaks = Aω²)",
        answer: 10,
        tolerance: 0.1,
        suffix: " m/s²",
        solution:
          "amaks = A × ω² = 0,1 × 10² = 0,1 × 100 = <strong>10 m/s²</strong>. Percepatan terbesar ini terjadi di simpangan terjauh, saat tarikan kembali paling kuat.",
        hint: "Kalikan amplitudo dengan kuadrat kecepatan sudut.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap keadaan getaran berdasarkan posisi benda saat itu.",
        buckets: ["Di titik seimbang", "Di simpangan terjauh"],
        items: [
          { text: "Kecepatan paling besar", bucket: "Di titik seimbang" },
          { text: "Percepatan nol", bucket: "Di titik seimbang" },
          { text: "Kecepatan nol sesaat", bucket: "Di simpangan terjauh" },
          { text: "Percepatan paling besar", bucket: "Di simpangan terjauh" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengayun Lebih Tinggi dengan Mengayuh di Tengah",
        html: "Anak yang pandai mengayun sendiri tahu kapan harus mengayuh kakinya: tepat saat melewati bagian terendah, titik seimbangnya. Di situ getaran punya kecepatan terbesar, sehingga sentakan kaki yang searah gerak menambah energi paling efektif. Mengayuh di titik terjauh, saat ayunan sejenak diam, hampir tidak menambah laju. Tubuh kita secara naluriah menemukan bahwa kecepatan memuncak di tengah lintasan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati pertukarannya, rumus pun tampil. Bila <strong>y = A sin(ωt)</strong>, maka kecepatan <strong>v = Aω cos(ωt)</strong> dan percepatan <strong>a = −Aω² sin(ωt) = −ω²y</strong>. Maka <strong>vmaks = Aω</strong> (di titik seimbang) dan <strong>amaks = Aω²</strong> (di simpangan terjauh). Tanda minus pada a menegaskan percepatan selalu mengarah balik ke titik seimbang.",
      },
      {
        type: "takeaways",
        items: [
          "Kecepatan getaran maksimum di titik seimbang dan nol di simpangan terjauh.",
          "Percepatan maksimum di simpangan terjauh dan nol di titik seimbang.",
          "Percepatan selalu berlawanan arah simpangan: a = −ω²y.",
          "Nilai puncaknya: vmaks = Aω dan amaks = Aω².",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kecepatan benda yang bergetar harmonik paling besar saat berada di...",
            options: ["Simpangan terjauh", "Titik seimbang", "Setengah amplitudo", "Mana saja sama"],
            answer: 1,
            explain: "Kecepatan maksimum (vmaks = Aω) terjadi di titik seimbang.",
          },
          {
            q: "Percepatan getaran paling besar saat benda di...",
            options: ["Titik seimbang", "Simpangan terjauh", "Seperempat amplitudo", "Tidak pernah maksimum"],
            answer: 1,
            explain: "amaks = Aω² terjadi di simpangan terjauh.",
          },
          {
            q: "Arah percepatan pada gerak harmonik selalu...",
            options: [
              "Searah simpangan",
              "Menuju titik seimbang",
              "Menjauhi titik seimbang",
              "Tegak lurus gerak",
            ],
            answer: 1,
            explain: "a = −ω²y, tandanya menunjukkan arah balik menuju titik seimbang.",
          },
          {
            q: "Dengan A = 0,2 m dan ω = 5 rad/s, kecepatan maksimumnya...",
            options: ["1 m/s", "0,04 m/s", "5 m/s", "10 m/s"],
            answer: 0,
            explain: "vmaks = Aω = 0,2 × 5 = 1 m/s.",
          },
          {
            q: "Saat simpangan nol, percepatan benda bernilai...",
            options: ["Maksimum", "Nol", "Setengah maksimum", "Tak hingga"],
            answer: 1,
            explain: "a = −ω²y, jika y = 0 maka a = 0.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "periode-dan-frekuensi",
    levelId: "getaran-ghs",
    order: 3,
    title: "Periode dan Frekuensi",
    summary:
      "Berapa kali jantungmu berdetak dalam semenit? Kita hitung dulu denyut nyata sebelum merangkum hubungan periode dan frekuensi.",
    durationMin: 12,
    tags: ["periode", "frekuensi", "getaran", "osilasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Letakkan tangan di dada dan rasakan jantungmu berdetak. Hitung berapa detak dalam satu menit: itulah cara dokter mengukur 'frekuensi' jantung. Lihat pula sayap lebah yang berdengung, atau bandul jam yang berdetak. Semua punya irama yang bisa kita hitung. Sebelum menulis rumus, ayo cacah dulu getaran nyata terhadap waktu.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Mencacah Getaran",
        caption: "Banyaknya getaran dibagi waktu memberi frekuensi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan menghitung 30 ayunan penuh selama 10 detik. Ada dua cara melihatnya: berapa <strong>detik per satu ayunan</strong> (itu periode), dan berapa <strong>ayunan per satu detik</strong> (itu frekuensi). Coba rasakan, kedua angka ini saling berkebalikan. Makin sering bergetar, makin singkat tiap getaran.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua cara membaca irama yang sama",
        html: "<strong>Periode (T)</strong> diukur dalam sekon: waktu untuk satu getaran. <strong>Frekuensi (f)</strong> diukur dalam hertz (Hz): jumlah getaran tiap detik. Jika ada n getaran dalam waktu t, maka T = t/n dan f = n/t. Keduanya berkebalikan.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "line",
        title: "Periode terhadap Frekuensi",
        unit: "sekon",
        source: "perhitungan T = 1/f",
        note: "Hubungan berkebalikan: makin tinggi frekuensi, makin pendek periode. Kurva turun tajam lalu melandai.",
        data: [
          { label: "1 Hz", value: 1.0, color: "#fb923c" },
          { label: "2 Hz", value: 0.5, color: "#fb923c" },
          { label: "4 Hz", value: 0.25, color: "#f59e0b" },
          { label: "5 Hz", value: 0.2, color: "#f59e0b" },
          { label: "10 Hz", value: 0.1, color: "#f59e0b" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda melakukan 30 getaran penuh dalam 10 sekon. Berapa frekuensinya? (gunakan f = n/t)",
        answer: 3,
        tolerance: 0.01,
        suffix: " Hz",
        solution:
          "f = n/t = 30/10 = <strong>3 Hz</strong>. Artinya benda bergetar tiga kali tiap detik.",
        hint: "Bagi jumlah getaran dengan waktu total.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari soal yang sama (30 getaran dalam 10 sekon), berapa periodenya? (gunakan T = t/n)",
        answer: 0.333,
        tolerance: 0.01,
        suffix: " s",
        solution:
          "T = t/n = 10/30 ≈ <strong>0,333 sekon</strong>. Periksa: T = 1/f = 1/3 ≈ 0,333 s. Cocok, karena T dan f berkebalikan.",
        hint: "Bagi waktu total dengan jumlah getaran, atau ambil 1/f.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap getaran nyata dengan frekuensi khasnya.",
        pairs: [
          { left: "Jantung manusia istirahat", right: "Sekitar 1 Hz" },
          { left: "Dengung sayap lebah", right: "Sekitar 200 Hz" },
          { left: "Bandul jam dinding klasik", right: "Sekitar 0,5 Hz" },
          { left: "Senar gitar nada A", right: "Sekitar 110 Hz" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Frekuensi Jaringan Listrik PLN",
        html: "Listrik di rumah kita berupa arus bolak-balik dengan frekuensi <strong>50 Hz</strong>: arusnya berbalik arah 50 kali tiap detik, jadi periodenya 1/50 = 0,02 sekon. Angka ini dijaga sangat ketat oleh PLN. Jika frekuensi turun, berarti pembangkit kewalahan memenuhi beban; jika naik, berarti pasokan berlebih. Operator jaringan terus menyeimbangkan keduanya agar jam dinding listrik dan motor industri tetap berputar pada irama yang benar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mencacah getaran nyata, rumus pun jelas. Dari n getaran selama t sekon: <strong>f = n/t</strong> dan <strong>T = t/n</strong>. Karena keduanya berkebalikan: <strong>T = 1/f</strong> dan <strong>f = 1/T</strong>. Satuan frekuensi adalah hertz (Hz), yaitu getaran per sekon.",
      },
      {
        type: "takeaways",
        items: [
          "Periode adalah waktu satu getaran; frekuensi adalah jumlah getaran per detik.",
          "Dari n getaran selama t sekon: f = n/t dan T = t/n.",
          "Periode dan frekuensi berkebalikan: T = 1/f.",
          "Satuan frekuensi adalah hertz (Hz); listrik PLN berfrekuensi 50 Hz.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satuan frekuensi adalah...",
            options: ["Sekon", "Hertz", "Meter", "Newton"],
            answer: 1,
            explain: "Frekuensi diukur dalam hertz (Hz), getaran per sekon.",
          },
          {
            q: "Benda bergetar 20 kali dalam 4 sekon. Frekuensinya...",
            options: ["5 Hz", "0,2 Hz", "80 Hz", "24 Hz"],
            answer: 0,
            explain: "f = n/t = 20/4 = 5 Hz.",
          },
          {
            q: "Jika periode getaran 0,02 sekon, frekuensinya...",
            options: ["0,02 Hz", "20 Hz", "50 Hz", "2 Hz"],
            answer: 2,
            explain: "f = 1/T = 1/0,02 = 50 Hz.",
          },
          {
            q: "Hubungan periode dan frekuensi adalah...",
            options: ["T = f", "T = 1/f", "T = 2f", "T = f²"],
            answer: 1,
            explain: "Periode dan frekuensi saling berkebalikan: T = 1/f.",
          },
          {
            q: "Makin tinggi frekuensi suatu getaran, periodenya...",
            options: ["Makin panjang", "Makin pendek", "Tetap", "Nol"],
            answer: 1,
            explain: "Karena T = 1/f, frekuensi tinggi berarti periode pendek.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "energi-getaran",
    levelId: "getaran-ghs",
    order: 4,
    title: "Energi Getaran",
    summary:
      "Ke mana energi ayunan pergi saat ia diam sejenak di puncak? Kita telusuri dulu pertukaran energinya sebelum rumus muncul.",
    durationMin: 14,
    tags: ["energi", "kinetik", "potensial", "getaran"],
    blocks: [
      {
        type: "paragraph",
        html: "Tarik ayunan ke titik tertinggi lalu lepaskan. Di puncak ia diam sejenak tapi 'penuh tenaga'; di titik terendah ia melesat kencang. Energinya tidak hilang, hanya berpindah bentuk bolak-balik. Sebelum menulis rumus energi, ayo telusuri dulu ke mana energi itu mengalir sepanjang satu ayunan.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Pertukaran Energi Getaran",
        caption: "Energi potensial dan kinetik bergantian, totalnya tetap.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan menyimpan tenaga di pegas saat menariknya: itu <strong>energi potensial</strong>, paling besar di simpangan terjauh. Saat dilepas dan melaju di titik seimbang, tenaga itu berubah jadi <strong>energi kinetik</strong>, paling besar di tengah. Rasakan dulu, saat yang satu memuncak, yang lain mengempis, tapi jumlahnya selalu sama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tabungan yang berpindah dompet",
        html: "<strong>Energi potensial</strong> tersimpan karena simpangan: maksimum di tepi, nol di tengah. <strong>Energi kinetik</strong> tersimpan karena gerak: maksimum di tengah, nol di tepi. <strong>Energi total</strong> adalah jumlah keduanya dan nilainya tetap selama tidak ada gesekan.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Energi Getaran di Tiga Posisi (k = 200 N/m, A = 0,05 m)",
        unit: "joule",
        source: "perhitungan Ep = ½ky², Ek = Etotal − Ep, Etotal = ½kA² = 0,25 J",
        note: "Di tepi semua energi potensial; di tengah semua kinetik; di setengah amplitudo terbagi. Total selalu 0,25 J.",
        data: [
          { label: "Tepi: Ep", value: 0.25, color: "#fb923c" },
          { label: "Tepi: Ek", value: 0, color: "#38bdf8" },
          { label: "Tengah: Ep", value: 0, color: "#fb923c" },
          { label: "Tengah: Ek", value: 0.25, color: "#38bdf8" },
          { label: "½A: Ep", value: 0.0625, color: "#fb923c" },
          { label: "½A: Ek", value: 0.1875, color: "#38bdf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pegas berkonstanta k = 200 N/m bergetar dengan amplitudo A = 0,05 m. Berapa energi total getarannya? (gunakan E = ½kA²)",
        answer: 0.25,
        tolerance: 0.01,
        suffix: " J",
        solution:
          "E = ½ × k × A² = ½ × 200 × (0,05)² = ½ × 200 × 0,0025 = <strong>0,25 J</strong>. Energi ini tetap sepanjang getaran, hanya berubah bentuk antara potensial dan kinetik.",
        hint: "Kuadratkan amplitudo dulu, lalu kalikan ½ dan k.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada getaran yang sama (E = 0,25 J), berapa energi kinetik benda saat melewati titik seimbang?",
        answer: 0.25,
        tolerance: 0.01,
        suffix: " J",
        solution:
          "Di titik seimbang, simpangan nol sehingga energi potensial nol. Maka seluruh energi total menjadi kinetik: Ek = E = <strong>0,25 J</strong>.",
        hint: "Di titik seimbang Ep = 0, jadi Ek = energi total.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan posisi benda dengan keadaan energinya.",
        pairs: [
          { left: "Di simpangan terjauh", right: "Energi potensial maksimum, kinetik nol" },
          { left: "Di titik seimbang", right: "Energi kinetik maksimum, potensial nol" },
          { left: "Di antara keduanya", right: "Energi terbagi potensial dan kinetik" },
          { left: "Sepanjang getaran", right: "Energi total tetap (tanpa gesekan)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ayunan yang Lama-lama Berhenti",
        html: "Kalau energi total selalu tetap, mengapa ayunan sungguhan akhirnya berhenti? Karena ada gesekan udara dan gesekan di poros yang diam-diam mengubah sebagian energi getaran menjadi panas tiap kali bolak-balik. Amplitudonya menyusut sedikit demi sedikit, dan karena energi sebanding dengan kuadrat amplitudo, energinya pun ikut menyusut sampai habis. Pada kasus ideal tanpa gesekan, ayunan akan terus bergetar selamanya dengan amplitudo tetap.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menelusuri pertukarannya, rumus pun lahir. Energi total getaran: <strong>E = ½kA²</strong>, tetap selama tidak ada gesekan. Penyusunnya: energi potensial <strong>Ep = ½ky²</strong> dan energi kinetik <strong>Ek = ½mv²</strong>, dengan E = Ep + Ek di setiap saat. Perhatikan E sebanding dengan <strong>kuadrat amplitudo</strong>, jadi menggandakan amplitudo melipatempatkan energi.",
      },
      {
        type: "takeaways",
        items: [
          "Energi getaran berpindah bolak-balik antara potensial dan kinetik.",
          "Energi potensial maksimum di tepi; energi kinetik maksimum di tengah.",
          "Energi total tetap tanpa gesekan: E = ½kA² = Ep + Ek.",
          "Energi sebanding dengan kuadrat amplitudo, sehingga sangat peka pada A.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Energi kinetik benda bergetar paling besar saat berada di...",
            options: ["Simpangan terjauh", "Titik seimbang", "Seperempat amplitudo", "Mana saja sama"],
            answer: 1,
            explain: "Di titik seimbang kecepatan maksimum, jadi energi kinetik maksimum.",
          },
          {
            q: "Energi total getaran harmonik dirumuskan...",
            options: ["E = ½kA²", "E = kA", "E = mgA", "E = ½mA"],
            answer: 0,
            explain: "Energi total getaran E = ½kA².",
          },
          {
            q: "Di simpangan terjauh, energi benda berupa...",
            options: [
              "Seluruhnya kinetik",
              "Seluruhnya potensial",
              "Setengah-setengah",
              "Nol semua",
            ],
            answer: 1,
            explain: "Di tepi kecepatan nol, jadi seluruh energi berupa potensial.",
          },
          {
            q: "Jika amplitudo digandakan, energi getaran menjadi...",
            options: ["2 kali", "4 kali", "Tetap", "Setengahnya"],
            answer: 1,
            explain: "E ∝ A², jadi A digandakan membuat energi 4 kali lipat.",
          },
          {
            q: "Ayunan nyata akhirnya berhenti karena...",
            options: [
              "Energi total bertambah",
              "Gesekan mengubah energi getaran jadi panas",
              "Periodenya membesar",
              "Gravitasi hilang",
            ],
            answer: 1,
            explain: "Gesekan udara dan poros menguras energi menjadi panas.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "fase-getaran",
    levelId: "getaran-ghs",
    order: 5,
    title: "Fase dan Sudut Fase Getaran",
    summary:
      "Dua ayunan bisa bergerak bersamaan atau berlawanan. Kita pelajari 'fase', penanda sudah sampai mana sebuah getaran dalam satu putaran iramanya.",
    durationMin: 13,
    tags: ["getaran", "fase", "sudut fase", "beda fase"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan dua ayunan identik. Saat keduanya dilepas bersamaan, mereka maju dan mundur serempak, seolah saling bercermin. Tetapi jika satu dilepas belakangan, geraknya tertinggal. Untuk menjelaskan 'sudah sampai mana' sebuah getaran dalam satu putaran iramanya, fisikawan memakai kata <strong>fase</strong>.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Membaca Fase Getaran",
        caption: "Fase menandai posisi getaran dalam satu siklus penuh, dari 0 sampai satu periode.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Anggap satu getaran penuh seperti satu putaran jarum jam. <strong>Fase</strong> adalah pecahan putaran yang sudah dilewati: di awal fase 0, seperempat jalan fase 1/4, separuh jalan fase 1/2. Jangan hafalkan rumus dulu, cukup rasakan bahwa fase itu seperti penunjuk 'sudah berapa persen' satu getaran berlangsung.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Fase, sudut fase, dan beda fase",
        html: "<strong>Fase (φ)</strong> dinyatakan sebagai pecahan periode, φ = t/T. <strong>Sudut fase (θ)</strong> mengubahnya menjadi sudut: θ = 2π(t/T) radian atau (t/T) x 360°. <strong>Beda fase</strong> adalah selisih fase dua getaran; jika nol mereka sefase (serempak), jika 1/2 mereka berlawanan fase.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Simpangan terhadap Sudut Fase",
        unit: "y/A",
        source: "ilustrasi edukatif (y = A sin θ)",
        note: "Simpangan maksimum terjadi saat sudut fase 90° dan 270°; getaran melewati titik seimbang pada 0°, 180°, dan 360°.",
        data: [
          { label: "0°", value: 0, color: "#22d3ee" },
          { label: "45°", value: 0.71, color: "#22d3ee" },
          { label: "90°", value: 1, color: "#22d3ee" },
          { label: "135°", value: 0.71, color: "#22d3ee" },
          { label: "180°", value: 0, color: "#0ea5e9" },
          { label: "225°", value: -0.71, color: "#0ea5e9" },
          { label: "270°", value: -1, color: "#0ea5e9" },
          { label: "315°", value: -0.71, color: "#0ea5e9" },
          { label: "360°", value: 0, color: "#0ea5e9" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah getaran berperiode T = 4 s mulai dari titik seimbang. Berapa sudut fasenya (dalam derajat) saat t = 1 s?",
        answer: 90,
        tolerance: 0.5,
        suffix: "°",
        solution:
          "Sudut fase θ = (t/T) x 360° = (1/4) x 360° = <strong>90°</strong>. Pada saat ini getaran tepat berada di simpangan maksimum.",
        hint: "Bagi waktu dengan periode, lalu kalikan 360 derajat.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan fase getaran (pecahan periode) dengan posisi yang sedang dilewati (getaran mulai dari titik seimbang menuju arah positif).",
        pairs: [
          { left: "Fase 0", right: "Titik seimbang, mulai bergerak" },
          { left: "Fase 1/4", right: "Simpangan maksimum positif (+A)" },
          { left: "Fase 1/2", right: "Titik seimbang, arah berbalik" },
          { left: "Fase 3/4", right: "Simpangan maksimum negatif (-A)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dua Bandul yang Tertinggal Setengah Langkah",
        html: "Dua bandul identik berperiode 2 s. Bandul kedua dilepas 0,5 s setelah yang pertama. Beda fasenya adalah Δφ = Δt/T = 0,5/2 = <strong>1/4</strong>, atau sudut fase 90°. Akibatnya saat bandul pertama berada di simpangan maksimum, bandul kedua justru sedang melewati titik seimbang. Mereka tidak pernah serempak; selisih seperempat langkah itu terus terbawa selama keduanya berayun.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan iramanya, rumus fase muncul. Simpangan getaran: <strong>y = A sin(2π(t/T) + θ&#8320;)</strong> dengan θ&#8320; fase awal. Beda fase dua getaran: <strong>Δφ = Δt/T</strong>. Dua getaran <em>sefase</em> bila Δφ = 0, 1, 2, ... dan <em>berlawanan fase</em> bila Δφ = 1/2, 3/2, ...",
      },
      {
        type: "takeaways",
        items: [
          "Fase menandai posisi sebuah getaran dalam satu siklus penuh.",
          "Sudut fase θ = (t/T) x 360° atau 2π(t/T) radian.",
          "Beda fase dua getaran adalah Δφ = Δt/T.",
          "Sefase berarti serempak (Δφ bilangan bulat); berlawanan fase berarti Δφ = 1/2.",
          "Simpangan maksimum terjadi pada sudut fase 90° dan 270°.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Fase sebuah getaran dinyatakan sebagai...",
            options: [
              "Amplitudo dibagi periode",
              "Pecahan periode yang sudah dilalui, t/T",
              "Frekuensi dikali waktu",
              "Energi getaran",
            ],
            answer: 1,
            explain: "Fase φ = t/T menyatakan sudah sampai mana getaran dalam satu siklus.",
          },
          {
            q: "Getaran berperiode 2 s. Berapa sudut fase saat t = 0,5 s?",
            options: ["45°", "90°", "180°", "270°"],
            answer: 1,
            explain: "θ = (0,5/2) x 360° = 90°.",
          },
          {
            q: "Dua getaran disebut berlawanan fase bila beda fasenya...",
            options: ["0", "1/4", "1/2", "1"],
            answer: 2,
            explain: "Beda fase 1/2 (setengah periode) membuat kedua getaran berlawanan arah.",
          },
          {
            q: "Pada sudut fase berapa simpangan getaran bernilai maksimum positif?",
            options: ["0°", "90°", "180°", "360°"],
            answer: 1,
            explain: "y = A sin θ bernilai maksimum saat θ = 90°.",
          },
          {
            q: "Bandul kedua dilepas 0,25 s setelah bandul pertama yang berperiode 1 s. Beda fasenya...",
            options: ["1/4", "1/2", "1", "0"],
            answer: 0,
            explain: "Δφ = Δt/T = 0,25/1 = 1/4.",
          },
        ],
      },
    ],
  },
];
