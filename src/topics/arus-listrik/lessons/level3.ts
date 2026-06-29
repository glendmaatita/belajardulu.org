import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "hukum-i-kirchhoff",
    levelId: "hukum-kirchhoff",
    order: 1,
    title: "Hukum I Kirchhoff: Titik Cabang",
    summary:
      "Di pertemuan banyak kabel, ke mana arus pergi? Seperti air di persimpangan pipa, yang masuk harus sama dengan yang keluar.",
    durationMin: 13,
    tags: ["fisika", "listrik", "kirchhoff", "arus", "titik-cabang"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan persimpangan jalan tempat tiga gang bertemu satu jalan besar. Mobil yang masuk dari jalan besar harus terbagi ke gang-gang; tidak ada mobil yang lenyap di persimpangan. Arus listrik di <strong>titik cabang</strong> berperilaku persis sama. Mari amati 'lalu lintas muatan' ini dulu, baru aturan Kirchhoff yang pertama kita rangkum.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Arus di Titik Percabangan",
        caption: "Di tiap simpul, jumlah arus masuk sama dengan jumlah arus keluar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lihat satu titik tempat tiga kabel bertemu. Misal arus 5 A masuk dari satu kabel, lalu keluar lewat dua kabel lain. Jika satu kabel keluar membawa 3 A, berapa yang lewat kabel sisanya? Tentu 2 A, supaya totalnya tetap 5 A. Muatan tidak menumpuk dan tidak lenyap di titik itu. <strong>Yang masuk = yang keluar.</strong> Belum ada rumus, baru hitung-hitungan lalu lintas.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa berlaku",
        html: "Hukum I Kirchhoff lahir dari <strong>kekekalan muatan</strong>: muatan listrik tidak bisa diciptakan atau dimusnahkan di sebuah titik. Maka di tiap simpul (titik cabang), total muatan per detik yang masuk harus sama dengan yang keluar.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Arus di Satu Titik Cabang: Masuk vs Keluar",
        unit: "ampere",
        source: "ilustrasi konservasi muatan",
        note: "Arus masuk 5 A terbagi menjadi 3 A dan 2 A yang keluar. Jumlah keluar (3+2=5) tepat sama dengan yang masuk, itulah inti Hukum I Kirchhoff.",
        data: [
          { label: "Masuk", value: 5, color: "#22d3ee" },
          { label: "Keluar cabang 1", value: 3, color: "#34d399" },
          { label: "Keluar cabang 2", value: 2, color: "#a3e635" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Arus 7 A masuk ke sebuah titik cabang. Keluar lewat dua cabang; satu cabang membawa 4 A. Berapa arus di cabang lainnya?",
        answer: 3,
        tolerance: 0.01,
        suffix: " A",
        solution:
          "Yang masuk = yang keluar: 7 A = 4 A + I, jadi I = 7 - 4 = <strong>3 ampere</strong>. Tidak ada muatan yang hilang di titik itu.",
        hint: "Kurangi arus masuk dengan arus cabang yang sudah diketahui.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tiga arus masuk ke satu titik: 2 A, 3 A, dan 1 A. Seluruhnya keluar lewat satu kabel tunggal. Berapa arus di kabel itu?",
        answer: 6,
        tolerance: 0.01,
        suffix: " A",
        solution:
          "Jumlah arus masuk = 2 + 3 + 1 = 6 A, jadi arus keluar = <strong>6 ampere</strong>. Semua yang masuk harus keluar.",
        hint: "Jumlahkan semua arus yang masuk.",
      },
      {
        type: "classifyExercise",
        prompt: "Untuk sebuah titik cabang, kelompokkan pernyataan ini benar atau salah.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Jumlah arus masuk = jumlah arus keluar", bucket: "Benar" },
          { text: "Muatan boleh menumpuk di titik cabang", bucket: "Salah" },
          { text: "Hukum ini berdasar kekekalan muatan", bucket: "Benar" },
          { text: "Arus keluar boleh lebih besar dari arus masuk", bucket: "Salah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pembagian Arus di Kotak Sekring Rumah",
        html: "Dari meteran PLN, satu kabel utama masuk ke kotak pembagi, lalu bercabang ke jalur dapur, kamar, dan ruang tamu. Arus total yang ditarik rumah pada satu saat sama dengan jumlah arus semua cabang itu, persis Hukum I Kirchhoff. Itulah dasar perhitungan ukuran kabel utama: ia harus sanggup menampung jumlah seluruh arus cabang yang mungkin menyala bersamaan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Pengamatan lalu lintas tadi punya nama: <strong>Hukum I Kirchhoff</strong> (hukum titik cabang). Di setiap simpul: <strong>ΣI masuk = ΣI keluar</strong>. Atau, jika arus masuk dihitung positif dan keluar negatif, jumlah seluruh arus di satu titik sama dengan nol. Aturan ini lahir langsung dari kekekalan muatan, bukan dari hafalan.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum I Kirchhoff: jumlah arus masuk = jumlah arus keluar di tiap titik cabang.",
          "Dasarnya adalah kekekalan muatan; muatan tak menumpuk atau lenyap di simpul.",
          "Bila arus masuk positif dan keluar negatif, jumlah arus di satu titik = nol.",
          "Kabel utama harus menampung jumlah seluruh arus cabang yang mungkin aktif.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum I Kirchhoff berlaku pada?",
            options: ["Lintasan tertutup (loop)", "Titik cabang (simpul)", "Resistor tunggal", "Baterai saja"],
            answer: 1,
            explain: "Hukum I berlaku di titik cabang: arus masuk = arus keluar.",
          },
          {
            q: "Hukum I Kirchhoff merupakan penerapan kekekalan?",
            options: ["Energi", "Muatan", "Momentum", "Massa"],
            answer: 1,
            explain: "Muatan tidak hilang di simpul, jadi arus masuk = arus keluar.",
          },
          {
            q: "Arus 9 A masuk, keluar lewat dua cabang 5 A dan I. Berapa I?",
            options: ["14 A", "4 A", "45 A", "5 A"],
            answer: 1,
            explain: "9 = 5 + I, jadi I = 4 A.",
          },
          {
            q: "Dua arus 6 A dan 2 A masuk satu titik, keluar lewat satu kabel. Arus keluar?",
            options: ["4 A", "8 A", "12 A", "3 A"],
            answer: 1,
            explain: "Jumlah masuk = 6 + 2 = 8 A, jadi arus keluar 8 A.",
          },
          {
            q: "Pada titik cabang, muatan listrik?",
            options: [
              "Boleh menumpuk",
              "Tidak menumpuk maupun lenyap",
              "Bisa diciptakan",
              "Bisa dimusnahkan",
            ],
            answer: 1,
            explain: "Kekekalan muatan: tidak menumpuk dan tidak lenyap.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-ii-kirchhoff",
    levelId: "hukum-kirchhoff",
    order: 2,
    title: "Hukum II Kirchhoff: Loop",
    summary:
      "Berjalan mengitari satu lintasan tertutup lalu kembali ke titik awal: ketinggianmu nol lagi. Begitu pula jumlah tegangan dalam satu loop.",
    durationMin: 14,
    tags: ["fisika", "listrik", "kirchhoff", "tegangan", "loop"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu mendaki bukit lalu menuruninya dan kembali ke titik berangkat. Berapa pun naik-turunnya, perubahan ketinggian totalmu <strong>nol</strong>, karena kamu kembali ke tempat semula. Tegangan dalam satu <strong>lintasan tertutup (loop)</strong> berperilaku sama. Mari rasakan analogi 'kembali ke ketinggian semula' ini dulu, baru Hukum II Kirchhoff kita rangkum.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Tegangan Mengelilingi Satu Loop",
        caption: "Naik tegangan di baterai, turun di resistor; total mengelilingi loop nol.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Susun baterai 12 V dengan dua resistor seri 4 Ω dan 2 Ω. Mulai dari kutub baterai, kamu 'naik' 12 V. Lalu di resistor 4 Ω tegangan 'turun' (arus 2 A × 4 Ω = 8 V), di resistor 2 Ω turun lagi (2 A × 2 Ω = 4 V). Naik 12, turun 8, turun 4: kembali ke nol. <strong>Yang naik sama dengan yang turun.</strong> Belum rumus, baru menelusuri loop.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa berlaku",
        html: "Hukum II Kirchhoff lahir dari <strong>kekekalan energi</strong>: tiap muatan yang berkeliling satu loop penuh menerima energi dari baterai dan menyerahkannya di resistor, lalu kembali ke titik awal dengan energi yang sama seperti semula. Maka jumlah seluruh kenaikan dan penurunan tegangan dalam satu loop adalah nol.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tegangan Mengelilingi Loop: Baterai 12 V, R 4 Ω & 2 Ω",
        unit: "volt",
        source: "perhitungan ilustratif (I = 2 A)",
        note: "Naik 12 V di baterai, turun 8 V di resistor 4 Ω, turun 4 V di resistor 2 Ω. Naik 12 sama dengan turun (8+4), sehingga total mengelilingi loop nol.",
        data: [
          { label: "Naik (baterai)", value: 12, color: "#a3e635" },
          { label: "Turun 4 Ω", value: 8, color: "#f87171" },
          { label: "Turun 2 Ω", value: 4, color: "#fb923c" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Baterai 12 V dalam satu loop dengan dua resistor seri. Resistor pertama menjatuhkan tegangan 8 V. Berapa tegangan jatuh pada resistor kedua?",
        answer: 4,
        tolerance: 0.01,
        suffix: " V",
        solution:
          "Total turun harus sama dengan total naik: 12 V = 8 V + V2, jadi V2 = <strong>4 volt</strong>. Mengelilingi loop, jumlah tegangan kembali nol.",
        hint: "Kurangi tegangan baterai dengan tegangan jatuh resistor pertama.",
      },
      {
        type: "calcExercise",
        prompt:
          "Satu loop berisi baterai 9 V dan tiga resistor seri yang menjatuhkan 2 V, 3 V, dan V3. Berapa V3?",
        answer: 4,
        tolerance: 0.01,
        suffix: " V",
        solution:
          "9 V = 2 V + 3 V + V3, jadi V3 = 9 - 5 = <strong>4 volt</strong>. Jumlah seluruh tegangan jatuh sama dengan GGL baterai.",
        hint: "Jumlah tegangan jatuh semua resistor = tegangan baterai.",
      },
      {
        type: "classifyExercise",
        prompt: "Saat menelusuri satu loop, kelompokkan tiap kejadian sebagai naik atau turun tegangan.",
        buckets: ["Naik tegangan", "Turun tegangan"],
        items: [
          { text: "Melewati baterai dari kutub negatif ke positif", bucket: "Naik tegangan" },
          { text: "Melewati resistor searah arus", bucket: "Turun tegangan" },
          { text: "Muatan menyerahkan energi di resistor", bucket: "Turun tegangan" },
          { text: "Sumber memberi energi ke muatan", bucket: "Naik tegangan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mendeteksi Tegangan Jatuh yang Hilang",
        html: "Seorang teknisi menemukan lampu redup pada rangkaian seri. Dengan Hukum II Kirchhoff, ia menelusuri loop dan menjumlahkan tegangan jatuh tiap komponen. Ternyata sebuah sambungan kendor menjatuhkan tegangan besar yang seharusnya tidak ada, sehingga lampu kekurangan tegangan. Karena jumlah seluruh tegangan dalam loop harus sama dengan GGL sumber, setiap volt yang 'hilang' di tempat tak terduga langsung menunjuk lokasi masalah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Penelusuran loop tadi punya nama: <strong>Hukum II Kirchhoff</strong> (hukum loop). Sepanjang satu lintasan tertutup, jumlah seluruh beda tegangan adalah nol: <strong>ΣV = 0</strong>, atau setara: jumlah GGL = jumlah tegangan jatuh (Σε = ΣIR). Aturan ini lahir dari kekekalan energi, bukan dari hafalan.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum II Kirchhoff: jumlah seluruh beda tegangan dalam satu loop tertutup = nol (ΣV = 0).",
          "Setara dengan: jumlah GGL = jumlah tegangan jatuh (Σε = ΣIR).",
          "Dasarnya kekekalan energi: muatan kembali ke titik awal dengan energi semula.",
          "Tegangan naik di sumber dan turun di resistor; totalnya saling meniadakan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum II Kirchhoff menyatakan bahwa dalam satu loop tertutup?",
            options: ["ΣI = 0", "ΣV = 0", "ΣR = 0", "ΣP = 0"],
            answer: 1,
            explain: "Jumlah seluruh beda tegangan mengelilingi loop sama dengan nol.",
          },
          {
            q: "Hukum II Kirchhoff merupakan penerapan kekekalan?",
            options: ["Muatan", "Energi", "Massa", "Momentum"],
            answer: 1,
            explain: "Muatan kembali ke titik awal dengan energi semula: kekekalan energi.",
          },
          {
            q: "Baterai 10 V, dua resistor seri menjatuhkan 6 V dan V2. Berapa V2?",
            options: ["16 V", "4 V", "60 V", "10 V"],
            answer: 1,
            explain: "10 = 6 + V2, jadi V2 = 4 V.",
          },
          {
            q: "Saat menelusuri resistor searah arus, tegangan?",
            options: ["Naik", "Turun", "Tetap", "Menjadi nol"],
            answer: 1,
            explain: "Muatan menyerahkan energi di resistor, jadi tegangan turun.",
          },
          {
            q: "Bentuk setara Hukum II Kirchhoff adalah?",
            options: ["Σε = ΣIR", "ΣI masuk = ΣI keluar", "P = VI", "R = ρL/A"],
            answer: 0,
            explain: "Jumlah GGL sama dengan jumlah tegangan jatuh: Σε = ΣIR.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "ggl-dan-hambatan-dalam",
    levelId: "hukum-kirchhoff",
    order: 3,
    title: "GGL dan Hambatan Dalam",
    summary:
      "Kenapa lampu mobil meredup sesaat saat distarter? Baterai ternyata punya hambatan tersembunyi di dalam dirinya sendiri.",
    durationMin: 14,
    tags: ["fisika", "listrik", "ggl", "hambatan-dalam", "baterai"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat kamu menstarter mobil, lampu dasbor sekejap meredup. Mengapa? Karena baterai bukan sumber sempurna; ia punya <strong>hambatan dalam</strong> tersembunyi di tubuhnya sendiri. Saat starter menarik arus besar, sebagian tegangan baterai 'termakan' di dalam, dan yang sampai ke lampu berkurang. Mari amati gejala ini dulu, baru rumus GGL dan hambatan dalam kita susun.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Tegangan Jepit yang Turun",
        caption: "Makin besar arus, makin besar tegangan yang hilang di hambatan dalam baterai.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ukur baterai senter tanpa beban: voltmeter menunjuk 1,5 V, itulah <strong>GGL</strong> murninya. Sekarang sambungkan ke lampu yang menarik arus: tegangannya turun jadi, misalnya, 1,3 V. Ke mana 0,2 V yang hilang? Terbuang di dalam baterai sendiri, di <strong>hambatan dalam</strong>. Makin besar arus yang ditarik, makin besar tegangan yang lenyap di dalam. Belum rumus, baru pengamatan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "GGL, hambatan dalam, dan tegangan jepit",
        html: "<strong>GGL (ε)</strong> adalah tegangan murni sumber tanpa beban. <strong>Hambatan dalam (r)</strong> adalah hambatan tersembunyi di dalam sumber. <strong>Tegangan jepit (V)</strong> adalah tegangan yang benar-benar tersedia di terminal saat arus mengalir, selalu lebih kecil dari GGL ketika ada arus.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tegangan Jepit vs Arus (GGL 1,5 V, r 0,5 Ω)",
        unit: "volt",
        source: "perhitungan V = ε − I·r",
        note: "Tanpa arus, tegangan jepit penuh 1,5 V. Makin besar arus, makin banyak tegangan termakan di hambatan dalam, sehingga tegangan jepit turun lurus. Garis menurun ini nyata, bukan persen karangan.",
        data: [
          { label: "0 A", value: 1.5, color: "#a3e635" },
          { label: "0,2 A", value: 1.4, color: "#4ade80" },
          { label: "0,4 A", value: 1.3, color: "#34d399" },
          { label: "0,6 A", value: 1.2, color: "#22d3ee" },
          { label: "0,8 A", value: 1.1, color: "#38bdf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Baterai GGL 1,5 V punya hambatan dalam 0,5 Ω dan mengalirkan arus 0,4 A. Berapa tegangan jepitnya? (gunakan V = ε − I·r)",
        answer: 1.3,
        tolerance: 0.01,
        suffix: " V",
        solution:
          "V = ε − I·r = 1,5 − (0,4 × 0,5) = 1,5 − 0,2 = <strong>1,3 volt</strong>. Sebesar 0,2 V termakan di hambatan dalam.",
        hint: "Kurangi GGL dengan hasil kali arus dan hambatan dalam.",
      },
      {
        type: "calcExercise",
        prompt:
          "Baterai GGL 12 V, hambatan dalam 1 Ω, dihubungkan ke resistor luar 5 Ω. Berapa arus yang mengalir? (gunakan I = ε / (R + r))",
        answer: 2,
        tolerance: 0.01,
        suffix: " A",
        solution:
          "Arus dibatasi hambatan total termasuk hambatan dalam: I = ε / (R + r) = 12 / (5 + 1) = 12 / 6 = <strong>2 ampere</strong>.",
        hint: "Bagi GGL dengan jumlah hambatan luar dan hambatan dalam.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang GGL dan hambatan dalam sebagai benar atau salah.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Tegangan jepit < GGL saat ada arus", bucket: "Benar" },
          { text: "Hambatan dalam berada di luar baterai", bucket: "Salah" },
          { text: "Makin besar arus, makin besar tegangan hilang di dalam", bucket: "Benar" },
          { text: "Tanpa arus, tegangan jepit sama dengan GGL", bucket: "Benar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Baterai Tua yang Cepat Drop",
        html: "Baterai HP lama tampak penuh tapi langsung mati saat dipakai berat seperti main game. Penyebabnya: seiring usia, <strong>hambatan dalam</strong> baterai membesar. Saat aplikasi menarik arus besar, tegangan jepit anjlok di bawah ambang kerja perangkat, dan HP mati walau indikator masih menunjukkan sisa daya. Inilah bukti nyata bahwa hambatan dalam, bukan hanya GGL, menentukan apakah baterai masih layak pakai.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Dari pengamatan tegangan yang 'termakan', kita rangkum. Tegangan jepit: <strong>V = ε − I·r</strong>, dengan ε GGL, r hambatan dalam, I arus. Dalam rangkaian dengan resistor luar R: arus total <strong>I = ε / (R + r)</strong>. Ini sebenarnya Hukum II Kirchhoff yang diterapkan pada loop tunggal berisi sumber tak ideal. Rumus lahir dari gejala, bukan hafalan.",
      },
      {
        type: "takeaways",
        items: [
          "GGL (ε) adalah tegangan murni sumber tanpa beban; tegangan jepit adalah yang tersedia saat ada arus.",
          "Tegangan jepit: V = ε − I·r, selalu lebih kecil dari GGL ketika arus mengalir.",
          "Arus dalam loop tunggal: I = ε / (R + r), hambatan dalam ikut membatasi arus.",
          "Hambatan dalam yang membesar membuat baterai cepat drop di bawah beban berat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tegangan jepit baterai dihitung dengan?",
            options: ["V = ε + I·r", "V = ε − I·r", "V = ε × I·r", "V = ε / r"],
            answer: 1,
            explain: "Sebagian tegangan termakan di hambatan dalam: V = ε − I·r.",
          },
          {
            q: "Saat tidak ada arus mengalir, tegangan jepit sama dengan?",
            options: ["Nol", "GGL (ε)", "Setengah GGL", "Hambatan dalam"],
            answer: 1,
            explain: "Tanpa arus, tidak ada tegangan yang hilang, jadi V = ε.",
          },
          {
            q: "GGL 6 V, hambatan dalam 0,5 Ω, arus 2 A. Tegangan jepitnya?",
            options: ["7 V", "5 V", "6,5 V", "3 V"],
            answer: 1,
            explain: "V = 6 − (2 × 0,5) = 6 − 1 = 5 V.",
          },
          {
            q: "GGL 12 V, R luar 3 Ω, r dalam 1 Ω. Arus yang mengalir?",
            options: ["4 A", "3 A", "12 A", "2 A"],
            answer: 1,
            explain: "I = ε/(R+r) = 12/(3+1) = 3 A.",
          },
          {
            q: "Baterai tua cepat mati di bawah beban berat karena?",
            options: [
              "GGL-nya naik",
              "Hambatan dalamnya membesar",
              "Arusnya menjadi nol",
              "Tegangannya tak pernah turun",
            ],
            answer: 1,
            explain: "Hambatan dalam besar membuat tegangan jepit anjlok saat arus besar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "rangkaian-dua-loop",
    levelId: "hukum-kirchhoff",
    order: 4,
    title: "Rangkaian Dua Loop",
    summary:
      "Saat rangkaian punya dua jalur melingkar, satu hukum tak cukup. Kita gabungkan aturan titik cabang dan aturan loop untuk membongkarnya.",
    durationMin: 16,
    tags: ["fisika", "listrik", "kirchhoff", "dua-loop", "rangkaian"],
    blocks: [
      {
        type: "paragraph",
        html: "Beberapa rangkaian tak bisa disederhanakan jadi seri-paralel biasa, misalnya dua baterai mendorong dari dua sisi berbeda. Di sini kita butuh kedua hukum Kirchhoff sekaligus: aturan titik cabang untuk arus, aturan loop untuk tegangan. Mari telusuri cara menggabungkannya lewat satu contoh nyata, baru langkah bakunya kita rangkum.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Membongkar Rangkaian Dua Loop",
        caption: "Dua persamaan loop dan satu persamaan titik cabang membongkar arus tiap cabang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua loop berbagi satu cabang tengah, seperti angka 8. Arus di cabang kiri (I1) dan cabang kanan (I2) bertemu di titik tengah, lalu mengalir bersama di cabang tengah (I3 = I1 + I2). Itu Hukum I. Lalu telusuri tiap loop, jumlahkan tegangannya jadi nol. Itu Hukum II. Dengan beberapa persamaan ini, semua arus bisa ditemukan. Belum rumus tunggal, baru strategi menggabungkan dua hukum.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Langkah baku rangkaian dua loop",
        html: "1) Beri nama dan arah dugaan arus tiap cabang (I1, I2, I3). 2) Tulis Hukum I di titik cabang (misal I3 = I1 + I2). 3) Tulis Hukum II untuk tiap loop (Σε = ΣIR). 4) Selesaikan persamaan-persamaan itu bersama. Jika hasil arus negatif, artinya arah dugaan terbalik, nilainya tetap benar.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Arus Tiap Cabang pada Contoh Dua Loop",
        unit: "ampere",
        source: "hasil penyelesaian Kirchhoff",
        note: "Pada contoh ini I1 = 1 A dan I2 = 2 A bertemu menjadi I3 = 3 A di cabang tengah. Perhatikan I3 = I1 + I2, sesuai Hukum I Kirchhoff.",
        data: [
          { label: "I1 (loop kiri)", value: 1, color: "#a3e635" },
          { label: "I2 (loop kanan)", value: 2, color: "#34d399" },
          { label: "I3 (cabang tengah)", value: 3, color: "#22d3ee" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Di titik cabang sebuah rangkaian dua loop, arus I1 = 1 A dan I2 = 2 A masuk lalu bergabung menjadi I3. Berapa I3? (Hukum I)",
        answer: 3,
        tolerance: 0.01,
        suffix: " A",
        solution:
          "Hukum I Kirchhoff: I3 = I1 + I2 = 1 + 2 = <strong>3 ampere</strong>. Cabang tengah membawa gabungan kedua arus.",
        hint: "Jumlahkan kedua arus yang masuk ke titik cabang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Telusuri satu loop: baterai 10 V, lalu tegangan jatuh 4 V dan V2 pada dua resistor. Dari Hukum II, berapa V2?",
        answer: 6,
        tolerance: 0.01,
        suffix: " V",
        solution:
          "Hukum II: ΣV = 0, jadi 10 − 4 − V2 = 0, maka V2 = 10 − 4 = <strong>6 volt</strong>. Total tegangan jatuh sama dengan GGL loop.",
        hint: "Tegangan baterai dikurangi tegangan jatuh yang sudah diketahui.",
      },
      {
        type: "classifyExercise",
        prompt: "Saat menyelesaikan rangkaian dua loop, kelompokkan tiap langkah ke hukum yang dipakai.",
        buckets: ["Hukum I (titik cabang)", "Hukum II (loop)"],
        items: [
          { text: "Menulis I3 = I1 + I2", bucket: "Hukum I (titik cabang)" },
          { text: "Menjumlahkan tegangan satu loop = 0", bucket: "Hukum II (loop)" },
          { text: "Menyamakan arus masuk dan keluar simpul", bucket: "Hukum I (titik cabang)" },
          { text: "Menulis Σε = ΣIR untuk lintasan tertutup", bucket: "Hukum II (loop)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dua Panel Surya Menyuplai Satu Beban",
        html: "Dua panel surya dengan tegangan sedikit berbeda dipasang untuk menyuplai satu beban bersama. Rangkaian ini punya dua loop. Insinyur memakai Hukum Kirchhoff untuk menghitung arus dari tiap panel: Hukum I memastikan arus gabungan sama dengan yang masuk beban, Hukum II memastikan tegangan tiap loop seimbang. Hasilnya menunjukkan panel bertegangan lebih tinggi menyumbang arus lebih besar, persis yang diramalkan persamaan-persamaan itu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Untuk rangkaian dua loop, kita pakai <strong>kedua hukum Kirchhoff bersama</strong>. Titik cabang: <strong>I3 = I1 + I2</strong> (Hukum I). Tiap loop: <strong>Σε = ΣIR</strong> atau ΣV = 0 (Hukum II). Susun persamaan-persamaan ini lalu selesaikan serentak untuk mendapat tiap arus. Tidak ada rumus ajaib baru, hanya dua hukum lama yang dipakai bersamaan secara sistematis.",
      },
      {
        type: "takeaways",
        items: [
          "Rangkaian dua loop diselesaikan dengan menggabungkan Hukum I dan Hukum II Kirchhoff.",
          "Hukum I di titik cabang memberi hubungan antar arus, misal I3 = I1 + I2.",
          "Hukum II di tiap loop memberi persamaan tegangan (Σε = ΣIR).",
          "Arus negatif berarti arah dugaan terbalik; besar nilainya tetap benar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Untuk menyelesaikan rangkaian dua loop, kita memakai?",
            options: [
              "Hanya Hukum I Kirchhoff",
              "Hanya Hukum II Kirchhoff",
              "Hukum I dan Hukum II bersama-sama",
              "Hanya Hukum Ohm",
            ],
            answer: 2,
            explain: "Dibutuhkan kedua hukum Kirchhoff secara bersamaan.",
          },
          {
            q: "Di titik cabang, I1 = 2 A dan I2 = 5 A bergabung menjadi I3. Berapa I3?",
            options: ["3 A", "7 A", "10 A", "2,5 A"],
            answer: 1,
            explain: "Hukum I: I3 = I1 + I2 = 2 + 5 = 7 A.",
          },
          {
            q: "Persamaan loop menggunakan prinsip?",
            options: ["ΣI = 0", "Σε = ΣIR (ΣV = 0)", "R = ρL/A", "P = VI"],
            answer: 1,
            explain: "Hukum II Kirchhoff: jumlah GGL = jumlah tegangan jatuh dalam loop.",
          },
          {
            q: "Jika hasil perhitungan sebuah arus bernilai negatif, artinya?",
            options: [
              "Perhitungan pasti salah",
              "Arah dugaan arus terbalik, nilainya tetap benar",
              "Arusnya nol",
              "Rangkaian rusak",
            ],
            answer: 1,
            explain: "Tanda negatif hanya menandai arah dugaan terbalik.",
          },
          {
            q: "Loop: baterai 9 V, tegangan jatuh 5 V dan V2. Berapa V2?",
            options: ["14 V", "4 V", "45 V", "9 V"],
            answer: 1,
            explain: "ΣV = 0: 9 − 5 − V2 = 0, jadi V2 = 4 V.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-kirchhoff-dan-daya-listrik",
    levelId: "hukum-kirchhoff",
    order: 5,
    title: "Kirchhoff dan Daya Listrik",
    summary:
      "Dari tagihan PLN dan persimpangan kabel, kita rangkum dua aturan kekekalan Kirchhoff dan sekilas melihat bagaimana listrik berubah jadi energi yang kita bayar.",
    durationMin: 16,
    tags: ["fisika", "listrik", "kirchhoff", "daya", "energi"],
    blocks: [
      {
        type: "paragraph",
        html: "Tiap bulan datang tagihan listrik PLN dalam satuan kWh. Apa sebenarnya yang kita bayar? Dan ketika banyak kabel bertemu di satu titik sambungan, ke mana arusnya pergi? Dua pertanyaan ini menuntun kita merangkum aturan kekekalan Gustav Kirchhoff sekaligus mengintip gagasan <strong>daya listrik</strong> yang akan kita dalami di level berikutnya. Seperti biasa, kita amati kisah nyatanya dulu, rumusnya menyusul di akhir.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Arus, Tegangan, dan Daya",
        caption: "Listrik tidak hanya mengalir, ia juga menyerahkan energi tiap detik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan persimpangan pipa air: berapa pun air yang masuk lewat satu pipa, jumlah yang sama harus keluar lewat pipa-pipa lain, tidak ada air yang lenyap. Arus listrik pun begitu di setiap titik sambungan. Lalu rasakan setrika yang panas: tegangan mendorong arus, dan tiap detik energi listrik berubah jadi panas. Makin besar tegangan dan arusnya, makin cepat energi mengalir. Itulah benih gagasan <strong>daya</strong>, sebelum kita beri rumus.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua aturan Kirchhoff",
        html: "<strong>Hukum Arus Kirchhoff:</strong> di setiap titik percabangan, jumlah arus yang masuk sama dengan jumlah arus yang keluar (muatan tidak hilang). <strong>Hukum Tegangan Kirchhoff:</strong> sepanjang satu lintasan tertutup, jumlah seluruh beda tegangan adalah nol (energi tidak hilang).",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Daya Khas Alat Rumah Tangga",
        unit: "watt",
        source: "nilai pasaran umum",
        note: "Alat pemanas menyedot daya jauh lebih besar daripada lampu LED. Angka watt ini nyata dan menentukan tagihan listrik.",
        data: [
          { label: "Lampu LED", value: 10, color: "#a3e635" },
          { label: "TV", value: 80, color: "#4ade80" },
          { label: "Kulkas", value: 100, color: "#22d3ee" },
          { label: "Setrika", value: 350, color: "#fb923c" },
          { label: "AC", value: 800, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah setrika bekerja pada tegangan 220 volt dan menarik arus 2 ampere. Berapa daya listriknya?",
        answer: 440,
        tolerance: 0.5,
        suffix: " W",
        solution:
          "Daya adalah tegangan kali arus: 220 V × 2 A = <strong>440 watt</strong>. Inilah laju energi yang diubah setrika tiap detik, dan inilah yang menentukan tagihan.",
        hint: "Kalikan tegangan dengan arus.",
      },
      {
        type: "calcExercise",
        prompt:
          "Arus 3 ampere mengalir melalui hambatan 4 ohm. Berapa daya yang terbuang sebagai panas?",
        answer: 36,
        tolerance: 0.5,
        suffix: " W",
        solution:
          "Gunakan P = I² × R = 3² × 4 = 9 × 4 = <strong>36 watt</strong>. Pada hambatan, daya selalu berubah menjadi panas.",
        hint: "Pakai P = I² × R; kuadratkan arus lalu kalikan hambatan.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan ke hukum Kirchhoff yang sesuai.",
        buckets: ["Hukum Arus (titik percabangan)", "Hukum Tegangan (lintasan tertutup)"],
        items: [
          { text: "Arus masuk = arus keluar di satu titik", bucket: "Hukum Arus (titik percabangan)" },
          { text: "Jumlah beda tegangan dalam satu loop = nol", bucket: "Hukum Tegangan (lintasan tertutup)" },
          { text: "Berdasar kekekalan muatan", bucket: "Hukum Arus (titik percabangan)" },
          { text: "Berdasar kekekalan energi", bucket: "Hukum Tegangan (lintasan tertutup)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap rumus daya dengan bentuknya yang setara.",
        pairs: [
          { left: "Bentuk dasar", right: "P = V × I" },
          { left: "Tanpa tegangan", right: "P = I² × R" },
          { left: "Tanpa arus", right: "P = V² / R" },
          { left: "Satuan daya", right: "watt (joule per sekon)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membaca Tagihan Listrik PLN",
        html: "Tagihan PLN dihitung dalam <strong>kilowatt-jam (kWh)</strong>, yaitu daya dikali waktu pemakaian. AC 800 watt yang menyala 5 jam memakai 800 × 5 = 4000 watt-jam = 4 kWh. Inilah sebabnya alat berdaya besar seperti AC dan setrika paling membengkakkan tagihan. Yang kita bayar bukan arus atau tegangan saja, melainkan <strong>energi</strong>: daya yang dikalikan lama pemakaian.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. <strong>Hukum Arus Kirchhoff:</strong> ΣI masuk = ΣI keluar. <strong>Hukum Tegangan Kirchhoff:</strong> ΣV dalam satu loop = 0. <strong>Daya listrik:</strong> P = V × I, dan dengan Hukum Ohm bisa ditulis P = I² × R = V² / R. Energi yang dipakai adalah daya kali waktu: W = P × t. Semua ini rangkuman dari kekekalan muatan, kekekalan energi, dan pengamatan setrika yang memanas.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum Arus Kirchhoff: jumlah arus masuk = jumlah arus keluar di tiap titik (kekekalan muatan).",
          "Hukum Tegangan Kirchhoff: jumlah beda tegangan dalam satu loop tertutup = nol (kekekalan energi).",
          "Daya listrik: P = V × I = I² × R = V² / R, diukur dalam watt.",
          "Energi yang dibayar = daya × waktu (kWh); alat berdaya besar paling boros.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Arus Kirchhoff berdasar pada kekekalan?",
            options: ["Energi", "Muatan", "Momentum", "Massa"],
            answer: 1,
            explain: "Arus masuk = arus keluar karena muatan tidak hilang.",
          },
          {
            q: "Daya listrik dihitung dengan rumus dasar?",
            options: ["P = V / I", "P = V × I", "P = V + I", "P = I / V"],
            answer: 1,
            explain: "Daya = tegangan dikali arus: P = V × I.",
          },
          {
            q: "Lampu 220 V menarik arus 0,5 A. Dayanya?",
            options: ["110 W", "440 W", "220 W", "0,5 W"],
            answer: 0,
            explain: "P = V × I = 220 × 0,5 = 110 watt.",
          },
          {
            q: "Dalam satu lintasan tertutup, jumlah seluruh beda tegangan sama dengan?",
            options: ["Tegangan sumber", "Nol", "Arus total", "Hambatan total"],
            answer: 1,
            explain: "Hukum Tegangan Kirchhoff: ΣV dalam satu loop = 0 (kekekalan energi).",
          },
          {
            q: "Tagihan listrik PLN dihitung berdasarkan?",
            options: ["Arus saja", "Tegangan saja", "Energi (daya × waktu) dalam kWh", "Hambatan total"],
            answer: 2,
            explain: "Yang dibayar adalah energi: daya dikali lama pemakaian, satuan kWh.",
          },
        ],
      },
    ],
  },
];
