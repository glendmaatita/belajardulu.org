import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "pengertian-gelombang",
    levelId: "gelombang",
    order: 1,
    title: "Pengertian Gelombang",
    summary:
      "Saat penonton stadion membuat 'gelombang', orangnya tetap di kursi tapi polanya berkeliling. Kita amati dulu apa yang sebenarnya berpindah.",
    durationMin: 13,
    tags: ["gelombang", "energi", "medium", "getaran"],
    blocks: [
      {
        type: "paragraph",
        html: "Di stadion, penonton berdiri lalu duduk bergantian membentuk 'gelombang' yang berkeliling lapangan. Tidak ada satu orang pun yang berlari mengejar gelombang itu; mereka tetap di kursi. Yang berpindah hanyalah <strong>polanya</strong>. Riak di kolam pun begitu: airnya naik-turun di tempat, tapi riaknya menyebar. Sebelum menulis rumus, ayo amati dulu apa yang sebenarnya merambat.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Pola yang Berkeliling",
        caption: "Medium bergetar di tempat, tetapi energi dan polanya merambat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lempar gabus ke kolam lalu jatuhkan batu di dekatnya. Saat riak lewat, gabus hanya <strong>naik-turun</strong> di tempat, tidak ikut terbawa ke tepi. Artinya gelombang membawa <strong>energi</strong> dan getaran, bukan airnya. Sumber gelombang selalu sebuah getaran, dan frekuensi getaran sumber menentukan frekuensi gelombangnya. Rasakan dulu beda antara 'pola yang merambat' dan 'medium yang diam di tempat'.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Gelombang mekanik dan elektromagnetik",
        html: "<strong>Gelombang</strong> adalah getaran yang merambat sambil memindahkan energi. <strong>Gelombang mekanik</strong> (air, tali, bunyi) butuh medium untuk merambat. <strong>Gelombang elektromagnetik</strong> (cahaya, radio) bisa merambat bahkan di ruang hampa. Keduanya sama-sama membawa energi tanpa memindahkan medium secara permanen.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "calcExercise",
        prompt:
          "Sumber gelombang bergetar 10 kali penuh dalam 2 sekon. Berapa frekuensi gelombang yang dihasilkan? (gunakan f = n/t)",
        answer: 5,
        tolerance: 0.01,
        suffix: " Hz",
        solution:
          "Frekuensi gelombang sama dengan frekuensi getaran sumber: f = n/t = 10/2 = <strong>5 Hz</strong>. Gelombang hanya meneruskan irama sumbernya.",
        hint: "Frekuensi gelombang = frekuensi sumber = jumlah getaran dibagi waktu.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap gelombang sebagai mekanik (butuh medium) atau elektromagnetik (bisa di ruang hampa).",
        buckets: ["Gelombang mekanik", "Gelombang elektromagnetik"],
        items: [
          { text: "Bunyi merambat di udara", bucket: "Gelombang mekanik" },
          { text: "Cahaya Matahari menembus ruang hampa", bucket: "Gelombang elektromagnetik" },
          { text: "Riak di permukaan air", bucket: "Gelombang mekanik" },
          { text: "Sinyal radio dari satelit", bucket: "Gelombang elektromagnetik" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan pernyataan dengan kebenarannya tentang gelombang.",
        pairs: [
          { left: "Yang dipindahkan gelombang", right: "Energi dan pola getaran" },
          { left: "Nasib medium saat gelombang lewat", right: "Bergetar di tempat, tidak terbawa" },
          { left: "Sumber setiap gelombang", right: "Sebuah getaran" },
          { left: "Gelombang yang butuh medium", right: "Gelombang mekanik" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tsunami Menyeberangi Samudra",
        html: "Gempa di dasar laut bisa memicu tsunami yang menyeberangi samudra sejauh ribuan kilometer. Yang berpindah bukan 'air yang sama' dari pusat gempa sampai ke pantai, melainkan <strong>energi</strong> gempa yang merambat lewat air sebagai gelombang. Di laut dalam, gelombangnya rendah dan cepat; saat mendekati pantai yang dangkal, energi yang sama termampatkan ke kolom air lebih pendek sehingga tingginya melonjak menjadi dinding air yang menghancurkan. Memahami bahwa gelombang membawa energi, bukan massa air, adalah kunci sistem peringatan dini tsunami.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati polanya, definisinya pun jelas. <strong>Gelombang adalah getaran yang merambat sambil memindahkan energi tanpa memindahkan medium secara permanen.</strong> Frekuensi gelombang sama dengan frekuensi sumbernya: <strong>f = n/t</strong>. Inilah fondasi sebelum kita mengukur panjang gelombang dan cepat rambatnya di pelajaran berikutnya.",
      },
      {
        type: "takeaways",
        items: [
          "Gelombang adalah getaran yang merambat dan membawa energi.",
          "Medium hanya bergetar di tempat, tidak ikut terbawa gelombang.",
          "Gelombang mekanik butuh medium; elektromagnetik bisa di ruang hampa.",
          "Frekuensi gelombang sama dengan frekuensi getaran sumbernya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang sebenarnya dipindahkan oleh gelombang?",
            options: ["Medium", "Energi", "Massa air", "Wadah"],
            answer: 1,
            explain: "Gelombang memindahkan energi, bukan medium itu sendiri.",
          },
          {
            q: "Saat riak air lewat, gabus di permukaan akan...",
            options: ["Terbawa ke tepi", "Naik-turun di tempat", "Tenggelam", "Diam total"],
            answer: 1,
            explain: "Medium hanya bergetar di tempat, gabus naik-turun tanpa terbawa.",
          },
          {
            q: "Gelombang yang dapat merambat di ruang hampa adalah...",
            options: ["Bunyi", "Riak air", "Cahaya", "Getaran tali"],
            answer: 2,
            explain: "Cahaya adalah gelombang elektromagnetik, bisa merambat tanpa medium.",
          },
          {
            q: "Sumber setiap gelombang adalah...",
            options: ["Sebuah getaran", "Sebuah cahaya", "Sebuah massa", "Sebuah panas"],
            answer: 0,
            explain: "Gelombang lahir dari getaran sumbernya.",
          },
          {
            q: "Sumber bergetar 20 kali dalam 4 sekon. Frekuensi gelombangnya...",
            options: ["5 Hz", "80 Hz", "0,2 Hz", "24 Hz"],
            answer: 0,
            explain: "f = n/t = 20/4 = 5 Hz, sama dengan frekuensi sumber.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "jenis-gelombang",
    levelId: "gelombang",
    order: 2,
    title: "Jenis Gelombang",
    summary:
      "Getaran yang menjalar adalah gelombang. Kita amati dulu cara ia merambat, baru rumus v = fλ menyusul.",
    durationMin: 14,
    tags: ["gelombang", "transversal", "longitudinal", "cepat-rambat"],
    blocks: [
      {
        type: "paragraph",
        html: "Lempar batu ke kolam: riak menyebar ke segala arah, tapi airnya tidak ikut pergi, hanya naik-turun. Teriak di lembah: suaramu menjalar lewat udara. Getaran yang merambat dan membawa energi itulah <strong>gelombang</strong>. Sebelum menghitung kecepatannya, ayo amati dulu bagaimana ia bergerak.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Gelombang Merambat",
        caption: "Energi berpindah, tapi medium hanya bergetar di tempat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil seutas tali, lalu kibaskan ujungnya naik-turun: kamu melihat puncak dan lembah berjalan, sementara tali hanya bergerak <strong>tegak lurus</strong> arah rambat. Sekarang bayangkan menekan-tarik pegas slinki: muncul daerah rapat dan renggang yang menjalar <strong>searah</strong> rambat. Dua cara merambat yang berbeda, rasakan dulu bedanya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Transversal vs longitudinal",
        html: "Pada gelombang <strong>transversal</strong>, getaran tegak lurus arah rambat (misalnya tali, riak air, cahaya). Pada gelombang <strong>longitudinal</strong>, getaran sejajar arah rambat berupa rapatan dan renggangan (misalnya bunyi di udara).",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "line",
        title: "Panjang Gelombang Bunyi terhadap Frekuensi",
        unit: "meter",
        source: "perhitungan λ = v/f, laju bunyi v = 340 m/s",
        note: "Pada laju tetap, frekuensi tinggi berarti panjang gelombang pendek. Inilah wujud nyata hubungan v = fλ.",
        data: [
          { label: "100 Hz", value: 3.4, color: "#fb923c" },
          { label: "200 Hz", value: 1.7, color: "#fb923c" },
          { label: "340 Hz", value: 1.0, color: "#f59e0b" },
          { label: "680 Hz", value: 0.5, color: "#f59e0b" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah gelombang berfrekuensi 50 Hz memiliki panjang gelombang 4 m. Berapa cepat rambatnya? (gunakan v = fλ)",
        answer: 200,
        tolerance: 1,
        suffix: " m/s",
        solution:
          "v = f × λ = 50 × 4 = <strong>200 m/s</strong>. Cepat rambat adalah hasil kali frekuensi dengan panjang gelombang.",
        hint: "Kalikan frekuensi dengan panjang gelombang.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap gelombang sebagai transversal atau longitudinal.",
        buckets: ["Transversal", "Longitudinal"],
        items: [
          { text: "Riak di permukaan air", bucket: "Transversal" },
          { text: "Bunyi merambat di udara", bucket: "Longitudinal" },
          { text: "Getaran tali yang dikibaskan", bucket: "Transversal" },
          { text: "Rapatan-renggangan pada slinki yang ditekan", bucket: "Longitudinal" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Gelombang Gempa P dan S",
        html: "Saat gempa terjadi, dua jenis gelombang merambat dalam bumi. Gelombang <strong>P (primer)</strong> bersifat longitudinal, merambat lebih cepat, dan tiba lebih dulu. Gelombang <strong>S (sekunder)</strong> bersifat transversal, lebih lambat, dan lebih merusak. Karena P datang lebih dahulu, sistem peringatan dini gempa mendeteksi gelombang P untuk memberi tahu warga beberapa detik sebelum gelombang S yang menggoyang tiba.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati, rumus pun jelas. Cepat rambat gelombang: <strong>v = f λ</strong>, dengan f frekuensi (Hz) dan λ panjang gelombang (m). Karena pada medium tertentu v cenderung tetap, frekuensi tinggi otomatis berpasangan dengan panjang gelombang pendek, persis seperti grafik bunyi tadi.",
      },
      {
        type: "takeaways",
        items: [
          "Gelombang memindahkan energi tanpa memindahkan medium secara permanen.",
          "Transversal: getaran tegak lurus arah rambat (tali, air, cahaya).",
          "Longitudinal: getaran sejajar arah rambat (bunyi, rapatan-renggangan).",
          "Cepat rambat: v = fλ; pada laju tetap, f tinggi berarti λ pendek.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada gelombang transversal, getaran terjadi...",
            options: [
              "Searah rambat",
              "Tegak lurus arah rambat",
              "Tidak bergetar",
              "Berputar",
            ],
            answer: 1,
            explain: "Transversal: getaran tegak lurus arah rambat.",
          },
          {
            q: "Bunyi di udara termasuk gelombang...",
            options: ["Transversal", "Longitudinal", "Diam", "Cahaya"],
            answer: 1,
            explain: "Bunyi merambat sebagai rapatan-renggangan, jadi longitudinal.",
          },
          {
            q: "Gelombang 25 Hz dengan panjang gelombang 8 m memiliki cepat rambat...",
            options: ["100 m/s", "200 m/s", "3,1 m/s", "33 m/s"],
            answer: 1,
            explain: "v = fλ = 25 × 8 = 200 m/s.",
          },
          {
            q: "Pada laju tetap, jika frekuensi naik maka panjang gelombang...",
            options: ["Naik", "Turun", "Tetap", "Nol"],
            answer: 1,
            explain: "Karena v = fλ tetap, f naik berarti λ turun.",
          },
          {
            q: "Apa yang sebenarnya dipindahkan oleh gelombang?",
            options: ["Medium", "Energi", "Massa air", "Wadah"],
            answer: 1,
            explain: "Gelombang memindahkan energi, bukan medium itu sendiri.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "besaran-gelombang",
    levelId: "gelombang",
    order: 3,
    title: "Besaran Gelombang",
    summary:
      "Panjang gelombang, periode, dan cepat rambat ternyata satu keluarga. Kita ukur dulu jaraknya sebelum menyatukannya dalam rumus.",
    durationMin: 14,
    tags: ["panjang-gelombang", "periode", "cepat-rambat", "besaran"],
    blocks: [
      {
        type: "paragraph",
        html: "Lihat deretan ombak yang datang ke pantai. Ada jarak rapi antara satu puncak ke puncak berikutnya, dan ada selang waktu antara dua ombak yang memecah. Dari dua angka itu saja kita sudah bisa menghitung seberapa cepat ombak melaju. Sebelum menulis rumus, ayo ukur dulu jarak dan waktu pada gelombang sungguhan.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Mengukur Gelombang",
        caption: "Jarak antarpuncak dan selang waktu menentukan cepat rambat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan satu puncak gelombang menempuh jarak satu <strong>panjang gelombang (λ)</strong> dalam waktu satu <strong>periode (T)</strong>. Maka cepat rambatnya tinggal jarak dibagi waktu: λ/T. Karena 1/T sama dengan frekuensi, kita juga bisa menulis v = fλ. Rasakan dulu bahwa cepat rambat hanyalah 'jarak per waktu' yang biasa, hanya dengan nama gelombang.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Keluarga besaran gelombang",
        html: "<strong>Amplitudo (A)</strong>: simpangan terjauh. <strong>Panjang gelombang (λ)</strong>: jarak satu gelombang penuh, misalnya puncak ke puncak. <strong>Periode (T)</strong>: waktu satu gelombang melewati satu titik. <strong>Frekuensi (f)</strong>: jumlah gelombang per detik. <strong>Cepat rambat (v)</strong>: laju puncak gelombang menjalar.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Panjang Gelombang terhadap Periode (laju tetap)",
        unit: "meter",
        source: "perhitungan λ = vT, cepat rambat v = 2 m/s",
        note: "Pada laju tetap, panjang gelombang naik lurus terhadap periode: gelombang berperiode panjang merentang lebih jauh.",
        data: [
          { label: "0,5 s", value: 1, color: "#fb923c" },
          { label: "1,0 s", value: 2, color: "#fb923c" },
          { label: "2,0 s", value: 4, color: "#f59e0b" },
          { label: "3,0 s", value: 6, color: "#f59e0b" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah gelombang memiliki panjang gelombang 2 m dan periode 0,5 s. Berapa cepat rambatnya? (gunakan v = λ/T)",
        answer: 4,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "v = λ/T = 2/0,5 = <strong>4 m/s</strong>. Periksa lewat frekuensi: f = 1/T = 2 Hz, lalu v = fλ = 2 × 2 = 4 m/s. Cocok.",
        hint: "Bagi panjang gelombang dengan periode.",
      },
      {
        type: "calcExercise",
        prompt:
          "Bunyi merambat 340 m/s dengan frekuensi 170 Hz. Berapa panjang gelombangnya? (gunakan λ = v/f)",
        answer: 2,
        tolerance: 0.05,
        suffix: " m",
        solution:
          "λ = v/f = 340/170 = <strong>2 m</strong>. Pada cepat rambat tetap, frekuensi besar menghasilkan panjang gelombang pendek.",
        hint: "Bagi cepat rambat dengan frekuensi.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan besaran gelombang dengan maknanya.",
        pairs: [
          { left: "Amplitudo", right: "Simpangan terjauh dari titik seimbang" },
          { left: "Panjang gelombang", right: "Jarak satu gelombang penuh" },
          { left: "Periode", right: "Waktu satu gelombang melewati satu titik" },
          { left: "Cepat rambat", right: "Laju puncak gelombang menjalar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menebak Jarak Petir lewat Selang Waktu",
        html: "Saat melihat kilat lalu mendengar guruh beberapa detik kemudian, kamu sedang memakai besaran gelombang. Cahaya kilat tiba nyaris seketika, tetapi bunyi guruh merambat 'hanya' sekitar 340 m/s. Hitung selang waktunya: tiap 3 detik jeda berarti petir sekitar 1 kilometer jauhnya, karena 340 m/s dikali 3 s kira-kira 1.020 m. Dengan satu rumus jarak sama dengan laju dikali waktu, kamu bisa menebak seberapa dekat badai tanpa alat apa pun.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengukur jarak dan waktunya, rumus pun menyatu. Karena puncak menempuh λ dalam waktu T: <strong>v = λ/T</strong>. Dan karena f = 1/T, bentuk paling terkenalnya: <strong>v = f λ</strong>. Ketiga besaran ini saling terkait, jadi mengetahui dua di antaranya cukup untuk mencari yang ketiga.",
      },
      {
        type: "takeaways",
        items: [
          "Panjang gelombang λ adalah jarak satu gelombang penuh.",
          "Puncak menempuh λ dalam waktu T, sehingga v = λ/T.",
          "Karena f = 1/T, berlaku v = fλ.",
          "Mengetahui dua besaran cukup untuk mencari besaran ketiga.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Panjang gelombang adalah...",
            options: [
              "Simpangan terjauh",
              "Jarak satu gelombang penuh",
              "Jumlah gelombang per detik",
              "Waktu satu getaran",
            ],
            answer: 1,
            explain: "Panjang gelombang adalah jarak satu gelombang penuh, misalnya puncak ke puncak.",
          },
          {
            q: "Hubungan cepat rambat, panjang gelombang, dan periode adalah...",
            options: ["v = λT", "v = λ/T", "v = T/λ", "v = λ + T"],
            answer: 1,
            explain: "Puncak menempuh λ dalam waktu T, jadi v = λ/T.",
          },
          {
            q: "Gelombang berperiode 0,25 s dan panjang gelombang 1 m memiliki cepat rambat...",
            options: ["0,25 m/s", "4 m/s", "1 m/s", "0,5 m/s"],
            answer: 1,
            explain: "v = λ/T = 1/0,25 = 4 m/s.",
          },
          {
            q: "Bunyi 340 m/s berfrekuensi 340 Hz memiliki panjang gelombang...",
            options: ["1 m", "2 m", "0,5 m", "340 m"],
            answer: 0,
            explain: "λ = v/f = 340/340 = 1 m.",
          },
          {
            q: "Pada cepat rambat tetap, periode yang lebih panjang menghasilkan...",
            options: [
              "Panjang gelombang lebih pendek",
              "Panjang gelombang lebih panjang",
              "Amplitudo lebih besar",
              "Frekuensi lebih besar",
            ],
            answer: 1,
            explain: "λ = vT, jadi periode besar berarti panjang gelombang besar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gelombang-berjalan",
    levelId: "gelombang",
    order: 4,
    title: "Gelombang Berjalan",
    summary:
      "Bagaimana satu rumus bisa memberi tahu simpangan di mana saja dan kapan saja? Kita amati dulu polanya di ruang dan waktu, baru rumusnya lahir.",
    durationMin: 15,
    tags: ["gelombang-berjalan", "fase", "bilangan-gelombang", "simpangan"],
    blocks: [
      {
        type: "paragraph",
        html: "Pegang ujung tali panjang lalu gerakkan naik-turun terus-menerus. Puncak demi puncak lahir di tanganmu dan berjalan menjauh dengan rapi. Tiap titik di tali ikut bergetar, tapi sedikit terlambat dari titik sebelumnya. Pola yang berjalan inilah <strong>gelombang berjalan</strong>. Sebelum menulis rumusnya, ayo amati dulu bagaimana ia berubah terhadap waktu dan terhadap posisi.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Puncak yang Berjalan",
        caption: "Tiap titik bergetar dengan jeda fase terhadap titik sebelumnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan memotret gelombang pada satu saat: kamu melihat bentuk sinus di sepanjang tali (simpangan terhadap <strong>posisi</strong>). Sekarang amati satu titik saja sepanjang waktu: titik itu naik-turun seperti getaran biasa (simpangan terhadap <strong>waktu</strong>). Gelombang berjalan menggabungkan keduanya: ia sinus dalam ruang sekaligus sinus dalam waktu. Rasakan dulu dua wajah ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bilangan gelombang dan kecepatan sudut",
        html: "Untuk menggambarkan pola di ruang, kita pakai <strong>bilangan gelombang k = 2π/λ</strong> (rad/m): seberapa rapat gelombang di sepanjang ruang. Untuk pola di waktu, kita pakai <strong>kecepatan sudut ω = 2πf</strong> (rad/s). Cepat rambatnya: v = ω/k, yang ternyata sama dengan fλ.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Bentuk Gelombang terhadap Posisi (potret saat t = 0)",
        unit: "cm",
        source: "perhitungan y = A sin(kx), A = 5 cm, λ = 1 m, k = 2π rad/m",
        note: "Potret gelombang di sepanjang ruang berbentuk sinus, dengan satu gelombang penuh tiap 1 meter (λ = 1 m).",
        data: [
          { label: "0,0 m", value: 0, color: "#fb923c" },
          { label: "0,125 m", value: 3.54, color: "#fb923c" },
          { label: "0,25 m", value: 5, color: "#fb923c" },
          { label: "0,375 m", value: 3.54, color: "#fb923c" },
          { label: "0,5 m", value: 0, color: "#f59e0b" },
          { label: "0,625 m", value: -3.54, color: "#f59e0b" },
          { label: "0,75 m", value: -5, color: "#f59e0b" },
          { label: "0,875 m", value: -3.54, color: "#f59e0b" },
          { label: "1,0 m", value: 0, color: "#f59e0b" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah gelombang berjalan dinyatakan y = 0,05 sin(8πt − 2πx) (satuan SI). Berapa cepat rambatnya? (gunakan v = ω/k)",
        answer: 4,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Dari rumus, ω = 8π rad/s dan k = 2π rad/m. Maka v = ω/k = 8π/2π = <strong>4 m/s</strong>. Cepat rambat adalah perbandingan kecepatan sudut terhadap bilangan gelombang.",
        hint: "Ambil angka di depan t sebagai ω dan di depan x sebagai k, lalu bagi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari gelombang yang sama, y = 0,05 sin(8πt − 2πx), berapa panjang gelombangnya? (gunakan λ = 2π/k)",
        answer: 1,
        tolerance: 0.02,
        suffix: " m",
        solution:
          "k = 2π rad/m, sehingga λ = 2π/k = 2π/2π = <strong>1 m</strong>. Periksa: f = ω/2π = 8π/2π = 4 Hz, lalu v = fλ = 4 × 1 = 4 m/s. Cocok dengan jawaban sebelumnya.",
        hint: "Bagi 2π dengan bilangan gelombang k.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan lambang dalam y = A sin(ωt − kx) dengan maknanya.",
        pairs: [
          { left: "A", right: "Amplitudo, simpangan terjauh" },
          { left: "ω", right: "Kecepatan sudut, 2πf" },
          { left: "k", right: "Bilangan gelombang, 2π/λ" },
          { left: "ω/k", right: "Cepat rambat gelombang" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tanda Minus yang Menentukan Arah",
        html: "Mengapa rumus gelombang berjalan memakai (ωt − kx) dan bukan (ωt + kx)? Tanda itu menyimpan arah rambat. Dengan tanda <strong>minus</strong>, pola bergerak ke arah x positif: untuk melihat simpangan yang sama beberapa saat kemudian, kita harus melihat di posisi x yang lebih besar. Dengan tanda <strong>plus</strong>, gelombang berjalan ke arah x negatif. Para insinyur yang merancang antena dan saluran transmisi membaca tanda ini untuk memastikan sinyal berjalan ke arah yang benar, bukan memantul balik ke sumbernya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati dua wajahnya, rumus pun lahir. Gelombang berjalan: <strong>y = A sin(ωt − kx)</strong>, dengan ω = 2πf, k = 2π/λ, dan A amplitudo. Tanda minus berarti merambat ke arah x positif. Cepat rambatnya <strong>v = ω/k = fλ</strong>. Satu rumus ini memberi simpangan di sembarang posisi x dan sembarang waktu t.",
      },
      {
        type: "takeaways",
        items: [
          "Gelombang berjalan adalah pola sinus dalam ruang sekaligus dalam waktu.",
          "Bilangan gelombang k = 2π/λ; kecepatan sudut ω = 2πf.",
          "Persamaan y = A sin(ωt − kx) memberi simpangan di mana saja, kapan saja.",
          "Cepat rambatnya v = ω/k, yang sama dengan fλ.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada y = A sin(ωt − kx), besaran k disebut...",
            options: ["Amplitudo", "Bilangan gelombang", "Periode", "Frekuensi"],
            answer: 1,
            explain: "k = 2π/λ adalah bilangan gelombang.",
          },
          {
            q: "Cepat rambat gelombang berjalan dapat dihitung dengan...",
            options: ["v = ωk", "v = ω/k", "v = k/ω", "v = ω + k"],
            answer: 1,
            explain: "v = ω/k, yang juga sama dengan fλ.",
          },
          {
            q: "Bilangan gelombang dirumuskan...",
            options: ["k = 2πf", "k = 2π/λ", "k = λ/2π", "k = 2πλ"],
            answer: 1,
            explain: "k = 2π/λ, menyatakan kerapatan gelombang dalam ruang.",
          },
          {
            q: "Pada y = 0,1 sin(10t − 5x), cepat rambatnya...",
            options: ["2 m/s", "50 m/s", "15 m/s", "0,5 m/s"],
            answer: 0,
            explain: "v = ω/k = 10/5 = 2 m/s.",
          },
          {
            q: "Tanda minus pada (ωt − kx) menunjukkan gelombang merambat ke arah...",
            options: ["x negatif", "x positif", "diam", "tegak lurus"],
            answer: 1,
            explain: "Tanda minus berarti pola merambat ke arah x positif.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cepat-rambat-tali",
    levelId: "gelombang",
    order: 5,
    title: "Cepat Rambat Gelombang pada Tali",
    summary:
      "Mengapa senar gitar yang ditegangkan lebih kencang berbunyi lebih tinggi? Karena gelombang merambat lebih cepat. Kecepatan itu ditentukan tegangan dan kerapatan tali.",
    durationMin: 14,
    tags: ["gelombang", "tali", "tegangan", "cepat rambat"],
    blocks: [
      {
        type: "paragraph",
        html: "Petik senar gitar, lalu putar pemutarnya hingga senar lebih tegang. Nadanya naik. Ganti dengan senar yang lebih tebal, nadanya turun. Kedua perubahan itu sebenarnya mengubah satu hal yang sama: <strong>seberapa cepat gelombang merambat di sepanjang tali</strong>. Mari kita selidiki apa yang menentukan kecepatan ini.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Gelombang Berlari di Tali",
        caption: "Tali yang lebih tegang dan lebih ringan meneruskan gangguan lebih cepat.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua faktor penentu",
        html: "Cepat rambat gelombang pada tali hanya bergantung pada sifat talinya, bukan pada frekuensi getaran. Dua faktornya: <strong>tegangan tali (F)</strong> yang menariknya kembali ke bentuk lurus, dan <strong>massa per satuan panjang (μ = m/L)</strong> yang menyatakan seberapa berat tali itu. Makin tegang makin cepat, makin berat makin lambat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Perhatikan: hubungannya akar",
        html: "Menggandakan tegangan TIDAK menggandakan kecepatan. Karena kecepatan sebanding dengan akar tegangan, melipatempatkan tegangan baru menggandakan kecepatan. Inilah sebabnya menyetel gitar butuh putaran yang makin halus saat nada mendekati pas.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Cepat Rambat terhadap Tegangan Tali (μ = 0,005 kg/m)",
        unit: "m/s",
        source: "ilustrasi edukatif (v = √(F/μ))",
        note: "Kurva melengkung, bukan garis lurus: untuk menggandakan kecepatan dari 40 ke 80 m/s, tegangan harus naik empat kali lipat dari 8 ke 32 N.",
        data: [
          { label: "2 N", value: 20, color: "#0ea5e9" },
          { label: "8 N", value: 40, color: "#0ea5e9" },
          { label: "18 N", value: 60, color: "#0ea5e9" },
          { label: "32 N", value: 80, color: "#2563eb" },
          { label: "50 N", value: 100, color: "#2563eb" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Senar Tegang 50 N",
        html: "Sebuah senar panjang 2 m bermassa 0,01 kg, jadi μ = m/L = 0,01/2 = 0,005 kg/m. Senar ditegangkan dengan gaya 50 N. Cepat rambat gelombangnya: v = √(F/μ) = √(50/0,005) = √10.000 = <strong>100 m/s</strong>. Jika getaran yang diberikan berfrekuensi 250 Hz, panjang gelombang pada senar adalah λ = v/f = 100/250 = <strong>0,4 m</strong>.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah tali memiliki massa per panjang μ = 0,005 kg/m dan ditegangkan dengan gaya 20 N. Berapa cepat rambat gelombang pada tali ini?",
        answer: 63.2,
        tolerance: 0.5,
        suffix: " m/s",
        solution:
          "v = √(F/μ) = √(20/0,005) = √4000 ≈ <strong>63,2 m/s</strong>. Kecepatan ini hanya bergantung pada tegangan dan kerapatan tali.",
        hint: "Bagi tegangan dengan massa per panjang, lalu akarkan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan perubahan pada tali dengan pengaruhnya terhadap cepat rambat gelombang.",
        pairs: [
          { left: "Tegangan tali diperbesar", right: "Cepat rambat bertambah" },
          { left: "Tali diganti yang lebih tebal/berat", right: "Cepat rambat berkurang" },
          { left: "Tegangan dijadikan empat kali", right: "Cepat rambat menjadi dua kali" },
          { left: "Frekuensi getaran dinaikkan", right: "Cepat rambat tetap" },
        ],
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir",
        html: "Cepat rambat gelombang pada tali: <strong>v = √(F/μ)</strong>, dengan F tegangan tali (newton) dan μ = m/L massa per satuan panjang (kg/m). Setelah v diketahui, panjang gelombang mengikuti hubungan lama <strong>v = f λ</strong>. Frekuensi tidak mengubah v; ia hanya mengatur berapa λ yang termuat.",
      },
      {
        type: "takeaways",
        items: [
          "Cepat rambat di tali ditentukan tegangan F dan kerapatan μ, bukan frekuensi.",
          "Rumusnya v = √(F/μ); makin tegang makin cepat, makin berat makin lambat.",
          "Hubungannya akar: kecepatan dua kali butuh tegangan empat kali.",
          "Setelah v diketahui, panjang gelombang memakai v = f λ.",
          "Inilah dasar mengapa senar tegang dan tipis menghasilkan nada tinggi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Cepat rambat gelombang pada tali bergantung pada...",
            options: [
              "Frekuensi getaran",
              "Tegangan dan massa per panjang tali",
              "Amplitudo gelombang",
              "Warna tali",
            ],
            answer: 1,
            explain: "v = √(F/μ); hanya tegangan dan kerapatan tali yang menentukannya.",
          },
          {
            q: "Rumus cepat rambat gelombang pada tali adalah...",
            options: ["v = F μ", "v = √(F/μ)", "v = F/μ", "v = √(μ/F)"],
            answer: 1,
            explain: "v = akar dari tegangan dibagi massa per panjang.",
          },
          {
            q: "Jika tegangan tali dijadikan empat kali, cepat rambatnya menjadi...",
            options: ["Empat kali", "Dua kali", "Setengah", "Tetap"],
            answer: 1,
            explain: "Karena v sebanding akar F, empat kali tegangan memberi dua kali kecepatan.",
          },
          {
            q: "Tali μ = 0,005 kg/m ditegangkan 50 N. Cepat rambatnya...",
            options: ["50 m/s", "100 m/s", "250 m/s", "10 m/s"],
            answer: 1,
            explain: "v = √(50/0,005) = √10.000 = 100 m/s.",
          },
          {
            q: "Saat frekuensi getaran dinaikkan (tali sama), cepat rambat gelombang...",
            options: ["Naik", "Turun", "Tetap", "Menjadi nol"],
            answer: 2,
            explain: "v hanya bergantung pada tali; frekuensi mengubah panjang gelombang lewat v = f λ, bukan v.",
          },
        ],
      },
    ],
  },
];
