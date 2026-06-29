import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "hukum-pascal",
    levelId: "pascal-archimedes",
    order: 1,
    title: "Hukum Pascal",
    summary:
      "Bagaimana satu tangan bisa mengangkat mobil? Kita telusuri dongkrak hidrolik dulu, baru rumus pelipat gaya Pascal muncul dengan sendirinya.",
    durationMin: 14,
    tags: ["fluida", "pascal", "hidrolik", "tekanan"],
    blocks: [
      {
        type: "paragraph",
        html: "Di bengkel, seorang montir menekan tuas kecil dengan ringan, dan sebuah mobil seberat satu ton terangkat naik. Sihir? Bukan. Itu <strong>dongkrak hidrolik</strong>. Sebelum melihat rumusnya, ayo pahami dulu gagasan ajaib di baliknya: bagaimana tekanan diteruskan oleh zat cair.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Tekanan yang Diteruskan",
        caption: "Zat cair meneruskan tekanan ke segala arah dengan sama besar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua tabung yang terhubung dan terisi minyak, satu sempit dan satu lebar, masing-masing ditutup penghisap. Saat kamu menekan penghisap sempit, tekanan itu menjalar lewat minyak dan muncul utuh di penghisap lebar. Karena penghisap lebar punya <strong>luas</strong> jauh lebih besar, tekanan yang sama menghasilkan <strong>gaya</strong> yang jauh lebih besar. Gaya kecilmu berubah menjadi gaya raksasa. Itulah inti dongkrak hidrolik.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kunci pemahamannya",
        html: "Zat cair tidak bisa dimampatkan dengan mudah, jadi tekanan yang diberikan pada satu titik diteruskan <strong>sama besar ke seluruh fluida</strong>. Yang berubah bukan tekanannya, melainkan gaya, karena luas penghisapnya berbeda.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Angkat vs Perbandingan Luas Penghisap",
        unit: "newton (N)",
        source: "hitungan F2 = F1 x (A2/A1), dengan gaya masuk F1 100 N",
        note: "Dengan gaya masuk tetap 100 N, gaya keluar tumbuh lurus mengikuti perbandingan luas penghisap. Penghisap 10 kali lebih luas melipatgandakan gaya 10 kali.",
        data: [
          { label: "1x", value: 100, color: "#38bdf8" },
          { label: "2x", value: 200, color: "#22d3ee" },
          { label: "5x", value: 500, color: "#2dd4bf" },
          { label: "10x", value: 1000, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada dongkrak hidrolik, penghisap kecil berluas 0,01 m^2 ditekan dengan gaya 200 N. Penghisap besar berluas 0,5 m^2. Berapa gaya angkat yang dihasilkan?",
        answer: 10000,
        tolerance: 50,
        suffix: " N",
        solution:
          "Tekanan sama di kedua sisi: P = F1/A1 = 200/0,01 = 20.000 Pa. Gaya keluar = P x A2 = 20.000 x 0,5 = <strong>10.000 N</strong>. Gaya dilipatgandakan 50 kali, sebesar perbandingan luasnya.",
        hint: "Cari dulu tekanan di penghisap kecil, lalu kalikan dengan luas penghisap besar.",
      },
      {
        type: "calcExercise",
        prompt:
          "Penghisap kecil sebuah dongkrak berluas 0,002 m^2, penghisap besar 0,02 m^2. Untuk mengangkat beban 3000 N, berapa gaya minimal pada penghisap kecil?",
        answer: 300,
        tolerance: 5,
        suffix: " N",
        solution:
          "F1/A1 = F2/A2, jadi F1 = F2 x (A1/A2) = 3000 x (0,002/0,02) = 3000 x 0,1 = <strong>300 N</strong>. Luasnya 10 kali lebih kecil, jadi gaya yang dibutuhkan 10 kali lebih kecil.",
        hint: "Gunakan F1/A1 = F2/A2 dan cari F1.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap alat dengan prinsip kerja Pascal yang dipakainya.",
        pairs: [
          { left: "Dongkrak hidrolik", right: "Gaya kecil mengangkat mobil" },
          { left: "Rem hidrolik mobil", right: "Tekanan pedal diteruskan ke kampas roda" },
          { left: "Pengangkat alat berat", right: "Penghisap luas menghasilkan gaya besar" },
          { left: "Pompa hidrolik", right: "Tekanan diteruskan sama besar ke seluruh fluida" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Rem Hidrolik yang Menyelamatkan Nyawa",
        html: "Saat kamu menginjak pedal rem mobil, kakimu hanya memberi gaya beberapa puluh newton. Namun mobil seberat lebih dari satu ton bisa berhenti. Rahasianya Hukum Pascal: tekanan dari pedal diteruskan oleh minyak rem melalui pipa ke empat penghisap di roda yang berluas lebih besar. Gaya kecil di kakimu berubah menjadi gaya cengkeram besar pada cakram roda. Tanpa prinsip ini, mengerem mobil butuh tenaga yang mustahil dikeluarkan kaki manusia.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan: tekanan masuk sama dengan tekanan keluar, P1 = P2. Karena P = F/A, maka <strong>F1 / A1 = F2 / A2</strong>. Inilah Hukum Pascal. Perbandingan luas penghisap (A2/A1) menjadi faktor pelipat gaya. Yang kita 'bayar' adalah jarak: penghisap kecil harus bergerak jauh agar penghisap besar naik sedikit, sehingga usaha tetap kekal.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum Pascal: tekanan pada fluida tertutup diteruskan sama besar ke segala arah.",
          "Rumus pelipat gaya: F1/A1 = F2/A2.",
          "Perbandingan luas penghisap menentukan seberapa besar gaya dilipatgandakan.",
          "Gaya bertambah, tetapi jarak gerak berkurang, jadi usaha tetap kekal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Pascal menyatakan bahwa tekanan pada fluida tertutup diteruskan?",
            options: [
              "Hanya ke bawah",
              "Sama besar ke segala arah",
              "Makin lemah saat menjauh",
              "Hanya ke penghisap besar",
            ],
            answer: 1,
            explain: "Tekanan diteruskan sama besar ke seluruh bagian fluida tertutup.",
          },
          {
            q: "Pada dongkrak hidrolik, apa yang menyebabkan gaya menjadi lebih besar?",
            options: [
              "Tekanan yang membesar",
              "Luas penghisap keluar yang lebih besar",
              "Fluida yang memuai",
              "Gravitasi yang bertambah",
            ],
            answer: 1,
            explain: "Tekanan sama, tetapi luas penghisap keluar lebih besar sehingga F = P x A lebih besar.",
          },
          {
            q: "F1 = 100 N pada A1 = 0,01 m^2. Jika A2 = 0,1 m^2, berapa F2?",
            options: ["100 N", "1000 N", "10 N", "10.000 N"],
            answer: 1,
            explain: "P = 100/0,01 = 10.000 Pa; F2 = 10.000 x 0,1 = 1000 N.",
          },
          {
            q: "Apa yang dikorbankan demi mendapat gaya angkat besar pada sistem hidrolik?",
            options: [
              "Tekanan menjadi nol",
              "Jarak gerak penghisap kecil menjadi jauh",
              "Fluida menjadi panas",
              "Massa jenis berkurang",
            ],
            answer: 1,
            explain: "Agar usaha kekal, penghisap kecil bergerak jauh untuk menaikkan beban sedikit.",
          },
          {
            q: "Manakah alat yang TIDAK memakai prinsip Pascal?",
            options: ["Rem hidrolik", "Dongkrak mobil", "Pengangkat hidrolik", "Termometer raksa"],
            answer: 3,
            explain: "Termometer raksa bekerja karena pemuaian zat, bukan penerusan tekanan Pascal.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "dongkrak-rem-hidrolik",
    levelId: "pascal-archimedes",
    order: 2,
    title: "Dongkrak dan Rem Hidrolik",
    summary:
      "Mengapa penghisap berdiameter dua kali lipat melipatgandakan gaya empat kali? Kita amati mesin nyata dulu, baru rumus keuntungan mekanis muncul.",
    durationMin: 14,
    tags: ["fluida", "hidrolik", "keuntungan mekanis", "pascal"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah ekskavator mengangkat bongkahan beton seberat berton-ton dengan lengan bajanya, digerakkan oleh batang-batang hidrolik mengilap. Operatornya hanya menggerakkan tuas kecil. Kita sudah tahu Hukum Pascal, tetapi sekarang ayo lihat lebih dalam: bagaimana <strong>ukuran penghisap</strong> menentukan seberapa besar gaya yang bisa dilipatgandakan, dan apa harga yang harus dibayar.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Mesin Hidrolik Bekerja",
        caption: "Sistem hidrolik mengubah gaya kecil menjadi gaya besar lewat beda luas penghisap.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Penghisap berbentuk lingkaran. Luas lingkaran sebanding dengan <strong>kuadrat diameternya</strong>. Jadi bila diameter penghisap besar dua kali penghisap kecil, luasnya bukan dua kali, melainkan empat kali. Gaya pun terlipat empat kali. Diameter tiga kali memberi gaya sembilan kali. Inilah kenapa silinder hidrolik gemuk pada alat berat bisa menghasilkan gaya luar biasa hanya dari pompa kecil.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Harga dari gaya besar",
        html: "Energi tidak bisa diciptakan. Saat gaya dilipatgandakan, <strong>jarak tempuh</strong> berkurang dengan perbandingan yang sama. Penghisap kecil harus dipompa berkali-kali dan menempuh jarak jauh agar penghisap besar naik sedikit. Usaha masuk sama dengan usaha keluar: W = F1 x s1 = F2 x s2.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Keluar vs Perbandingan Diameter Penghisap",
        unit: "newton (N)",
        source: "hitungan F2 = F1 x (d2/d1)^2, gaya masuk F1 100 N",
        note: "Karena luas sebanding kuadrat diameter, gaya keluar tumbuh mengikuti kuadrat perbandingan diameter. Diameter 4 kali memberi gaya 16 kali lipat.",
        data: [
          { label: "1x", value: 100, color: "#38bdf8" },
          { label: "2x", value: 400, color: "#22d3ee" },
          { label: "3x", value: 900, color: "#2dd4bf" },
          { label: "4x", value: 1600, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dongkrak hidrolik punya penghisap kecil berdiameter 2 cm dan penghisap besar berdiameter 10 cm. Jika ditekan gaya 80 N, berapa gaya angkatnya? (gaya sebanding kuadrat diameter)",
        answer: 2000,
        tolerance: 20,
        suffix: " N",
        solution:
          "Perbandingan diameter 10/2 = 5, jadi perbandingan luas = 5^2 = 25. Gaya keluar = 80 x 25 = <strong>2000 N</strong>. Diameter 5 kali melipatgandakan gaya 25 kali.",
        hint: "Gaya keluar = gaya masuk x (d2/d1)^2.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk mengangkat beban, penghisap kecil harus ditekan turun 0,40 m. Jika gaya dilipatgandakan 8 kali, sejauh apa penghisap besar naik?",
        answer: 0.05,
        tolerance: 0.005,
        suffix: " m",
        solution:
          "Usaha kekal: F1 x s1 = F2 x s2. Karena F2 = 8 x F1, maka s2 = s1 / 8 = 0,40 / 8 = <strong>0,05 m</strong>. Gaya naik 8 kali, jarak turun 8 kali.",
        hint: "Jarak penghisap besar = jarak penghisap kecil dibagi faktor pelipat gaya.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Saat sistem hidrolik dipakai untuk memperbesar gaya, mana yang BERTAMBAH dan mana yang BERKURANG di penghisap keluar?",
        buckets: ["Bertambah", "Berkurang"],
        items: [
          { text: "Gaya yang dihasilkan", bucket: "Bertambah" },
          { text: "Luas penghisap", bucket: "Bertambah" },
          { text: "Jarak gerak penghisap", bucket: "Berkurang" },
          { text: "Kecepatan gerak penghisap", bucket: "Berkurang" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lengan Ekskavator yang Bertenaga",
        html: "Ekskavator menggali tanah keras dengan tenaga yang seakan tak terbatas, padahal mesin dieselnya hanya menggerakkan pompa oli. Pompa itu menekan oli bertekanan tinggi ke dalam silinder hidrolik berdiameter besar pada lengan. Karena luas penghisap silinder sangat besar, gaya dorongnya menjadi puluhan ribu newton. Operator cukup menggerakkan tuas yang mengatur aliran oli. Yang dikorbankan adalah kecepatan: lengan ekskavator bergerak pelan dan mantap, bukan menyentak cepat. Itulah pertukaran khas hidrolik, gaya besar ditukar dengan gerak lambat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. Dari F1/A1 = F2/A2 dan luas lingkaran A = (pi/4) x d^2, lahir <strong>F2 = F1 x (d2/d1)^2</strong>. Keuntungan mekanis sistem hidrolik sama dengan perbandingan luas, yaitu kuadrat perbandingan diameter. Kekekalan usaha menuntut <strong>F1 x s1 = F2 x s2</strong>, jadi gaya yang dilipatgandakan selalu dibayar dengan jarak gerak yang berkurang sebesar faktor yang sama.",
      },
      {
        type: "takeaways",
        items: [
          "Luas penghisap sebanding kuadrat diameter, jadi F2 = F1 x (d2/d1)^2.",
          "Keuntungan mekanis hidrolik sama dengan perbandingan luas penghisap.",
          "Usaha kekal: F1 x s1 = F2 x s2, gaya besar dibayar jarak gerak pendek.",
          "Sistem hidrolik menukar gaya besar dengan gerak yang lebih lambat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Jika diameter penghisap besar 3 kali penghisap kecil, gaya dilipatgandakan?",
            options: ["3 kali", "6 kali", "9 kali", "12 kali"],
            answer: 2,
            explain: "Luas sebanding kuadrat diameter, jadi faktor pelipat = 3^2 = 9 kali.",
          },
          {
            q: "Keuntungan mekanis dongkrak hidrolik sama dengan?",
            options: [
              "Perbandingan diameter penghisap",
              "Perbandingan luas penghisap",
              "Perbandingan massa jenis fluida",
              "Perbandingan suhu",
            ],
            answer: 1,
            explain: "Keuntungan mekanis = A2/A1, yaitu perbandingan luas penghisap.",
          },
          {
            q: "Gaya 50 N pada penghisap kecil, diameter besar 4 kali kecil. Gaya keluar?",
            options: ["200 N", "400 N", "800 N", "1000 N"],
            answer: 2,
            explain: "Faktor = 4^2 = 16, jadi 50 x 16 = 800 N.",
          },
          {
            q: "Saat gaya dilipatgandakan 10 kali pada sistem hidrolik, jarak gerak penghisap keluar?",
            options: [
              "Juga 10 kali lebih jauh",
              "10 kali lebih pendek",
              "Sama saja",
              "Menjadi nol",
            ],
            answer: 1,
            explain: "Usaha kekal, jadi jarak gerak berkurang 10 kali saat gaya naik 10 kali.",
          },
          {
            q: "Mengapa lengan ekskavator bergerak lambat tapi sangat kuat?",
            options: [
              "Mesinnya lemah",
              "Gaya besar ditukar dengan gerak lambat sesuai kekekalan usaha",
              "Olinya kental",
              "Gravitasi menahannya",
            ],
            answer: 1,
            explain: "Sistem hidrolik menukar gaya besar dengan jarak dan kecepatan gerak yang kecil.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-archimedes",
    levelId: "pascal-archimedes",
    order: 3,
    title: "Hukum Archimedes",
    summary:
      "Bagaimana kapal baja seberat ribuan ton bisa mengapung? Kita selidiki gaya apung dulu, baru rumus Archimedes serta terapung, melayang, dan tenggelam jadi jelas.",
    durationMin: 15,
    tags: ["fluida", "archimedes", "gaya apung", "terapung"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebatang paku kecil tenggelam, tetapi kapal baja seberat puluhan ribu ton justru mengapung. Logam yang sama, nasib berbeda. Sebelum membuka rumus, ayo rasakan dulu gaya tak terlihat yang mendorong benda naik di dalam air: <strong>gaya apung</strong>.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Gaya yang Mendorong ke Atas",
        caption: "Fluida selalu mendorong benda yang tercelup ke arah atas.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pernah mengangkat batu di dalam kolam? Terasa lebih ringan daripada di darat. Begitu kamu mengangkatnya keluar dari air, mendadak terasa berat lagi. Air memberi dorongan ke atas. Coba juga tekan bola plastik ke dasar ember: ia melawan dan menyembur naik. Besar dorongan itu ternyata sama dengan <strong>berat air yang dipindahkan</strong> oleh benda. Makin banyak air yang tersingkir, makin kuat dorongannya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga nasib benda di dalam fluida",
        html: "Bandingkan gaya apung dengan berat benda. Jika gaya apung lebih besar, benda <strong>terapung</strong>. Jika tepat sama, benda <strong>melayang</strong> diam di tengah. Jika gaya apung lebih kecil, benda <strong>tenggelam</strong>. Cara cepatnya: bandingkan massa jenis benda dengan massa jenis fluida.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Apung vs Volume Benda yang Tercelup",
        unit: "newton (N)",
        source: "hitungan Fa = rho x g x V, air 1000 kg/m^3, g 10 m/s^2",
        note: "Makin besar volume yang tercelup, makin banyak air tersingkir, dan makin besar gaya apungnya. Hubungannya lurus.",
        data: [
          { label: "1 L", value: 10, color: "#38bdf8" },
          { label: "2 L", value: 20, color: "#22d3ee" },
          { label: "3 L", value: 30, color: "#2dd4bf" },
          { label: "4 L", value: 40, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda tercelup penuh di air, memindahkan 0,005 m^3 air (rho 1000 kg/m^3, g = 10 m/s^2). Berapa gaya apung yang bekerja padanya?",
        answer: 50,
        tolerance: 1,
        suffix: " N",
        solution:
          "Fa = rho x g x V = 1000 x 10 x 0,005 = <strong>50 N</strong>. Gaya apung sama dengan berat air yang dipindahkan benda.",
        hint: "Kalikan massa jenis fluida, gravitasi, dan volume tercelup.",
      },
      {
        type: "calcExercise",
        prompt:
          "Balok bervolume 0,02 m^3 mengapung di air dengan setengah bagiannya tercelup. Berapa gaya apung yang menahannya (rho air 1000, g = 10)?",
        answer: 100,
        tolerance: 2,
        suffix: " N",
        solution:
          "Volume tercelup = setengah dari 0,02 = 0,01 m^3. Fa = 1000 x 10 x 0,01 = <strong>100 N</strong>. Saat mengapung, gaya apung ini sama dengan berat balok.",
        hint: "Pakai hanya volume yang tercelup, yaitu setengah volume balok.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Sebuah fluida bermassa jenis 1000 kg/m^3. Tentukan nasib tiap benda berdasarkan massa jenisnya.",
        buckets: ["Terapung", "Melayang", "Tenggelam"],
        items: [
          { text: "Kayu (600 kg/m^3)", bucket: "Terapung" },
          { text: "Benda khusus (1000 kg/m^3)", bucket: "Melayang" },
          { text: "Besi (7800 kg/m^3)", bucket: "Tenggelam" },
          { text: "Gabus (240 kg/m^3)", bucket: "Terapung" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kapal Baja Raksasa yang Mengapung",
        html: "Baja delapan kali lebih padat dari air, jadi paku baja pasti tenggelam. Lalu bagaimana kapal kontainer seberat 200.000 ton bisa mengapung? Rahasianya bentuk lambung yang berongga besar. Lambung itu memindahkan air dalam jumlah sangat banyak, dan berat air yang tersingkir itulah gaya apungnya. Selama gaya apung sama dengan berat total kapal beserta muatannya, kapal mengapung. Inilah sebabnya jika lambung bocor dan terisi air, volume rongga berkurang, gaya apung menurun, dan kapal pun tenggelam.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan Hukum Archimedes: <strong>Fa = rho_fluida x g x V_tercelup</strong>. Gaya apung sama dengan berat fluida yang dipindahkan. Bandingkan dengan berat benda untuk menentukan nasibnya: rho_benda &lt; rho_fluida maka <strong>terapung</strong>; rho_benda = rho_fluida maka <strong>melayang</strong>; rho_benda &gt; rho_fluida maka <strong>tenggelam</strong>.",
      },
      {
        type: "takeaways",
        items: [
          "Gaya apung sama dengan berat fluida yang dipindahkan benda.",
          "Rumus Archimedes: Fa = rho_fluida x g x V_tercelup.",
          "Terapung, melayang, atau tenggelam ditentukan oleh perbandingan massa jenis benda dan fluida.",
          "Kapal baja mengapung karena lambung berongga memindahkan air dalam jumlah besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Gaya apung pada benda yang tercelup sama dengan?",
            options: [
              "Berat benda itu sendiri",
              "Berat fluida yang dipindahkan benda",
              "Massa jenis benda",
              "Volume seluruh fluida",
            ],
            answer: 1,
            explain: "Hukum Archimedes: gaya apung sama dengan berat fluida yang dipindahkan.",
          },
          {
            q: "Sebuah benda melayang di dalam air. Apa yang benar tentang massa jenisnya?",
            options: [
              "Lebih besar dari air",
              "Lebih kecil dari air",
              "Sama dengan air",
              "Nol",
            ],
            answer: 2,
            explain: "Melayang terjadi saat massa jenis benda sama dengan massa jenis fluida.",
          },
          {
            q: "Benda tercelup penuh memindahkan 0,003 m^3 air (rho 1000, g 10). Gaya apungnya?",
            options: ["3 N", "30 N", "300 N", "0,3 N"],
            answer: 1,
            explain: "Fa = 1000 x 10 x 0,003 = 30 N.",
          },
          {
            q: "Mengapa kapal baja bisa mengapung walau baja lebih padat dari air?",
            options: [
              "Baja menjadi ringan di air",
              "Lambung berongga memindahkan banyak air",
              "Air mendorong dari atas",
              "Gravitasi hilang di laut",
            ],
            answer: 1,
            explain: "Lambung berongga memindahkan banyak air sehingga gaya apung menyamai berat kapal.",
          },
          {
            q: "Benda dengan massa jenis 1200 kg/m^3 di air (1000 kg/m^3) akan?",
            options: ["Terapung", "Melayang", "Tenggelam", "Menguap"],
            answer: 2,
            explain: "Massa jenis benda lebih besar dari air, jadi benda tenggelam.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "terapung-melayang-tenggelam",
    levelId: "pascal-archimedes",
    order: 4,
    title: "Terapung, Melayang, dan Tenggelam",
    summary:
      "Kenapa es batu menyembul 8 persen di atas air, dan bagaimana kapal selam mengatur naik turunnya? Kita amati dulu, baru rumus fraksi tercelup dan berat semu muncul.",
    durationMin: 15,
    tags: ["fluida", "archimedes", "terapung", "kapal selam"],
    blocks: [
      {
        type: "paragraph",
        html: "Es batu di gelas selalu mengapung dengan sebagian besar tubuhnya tersembunyi di bawah permukaan, hanya menyembul sedikit di atas. Kapal selam bisa memilih untuk mengapung, melayang, atau menyelam ke dasar laut, semuanya dengan badan yang sama. Kita sudah kenal gaya apung. Sekarang ayo lihat lebih dalam: apa yang menentukan <strong>seberapa banyak</strong> bagian benda yang tercelup.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Mengatur Nasib di Dalam Fluida",
        caption: "Dengan mengubah massa jenis rata-rata, sebuah benda bisa memilih terapung, melayang, atau tenggelam.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Benda yang terapung akan tenggelam tepat sampai berat air yang dipindahkan menyamai beratnya sendiri, lalu berhenti. Es bermassa jenis sekitar 920 kg/m^3 di air 1000 kg/m^3 akan tercelup sekitar 0,92 bagian, menyembul hanya 0,08 bagian. Itulah 'puncak gunung es' yang terkenal: hampir seluruhnya tersembunyi. Makin dekat massa jenis benda ke massa jenis fluida, makin dalam ia tercelup.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Berat semu dan fraksi tercelup",
        html: "Saat benda tercelup, timbangan menunjukkan <strong>berat semu</strong> yang lebih kecil dari berat aslinya, karena gaya apung membantu mengangkat. Untuk benda yang terapung, bagian yang tercelup mengikuti perbandingan massa jenis: makin padat bendanya, makin besar bagian yang tenggelam.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Fraksi Tercelup Berbagai Benda Terapung di Air",
        unit: "fraksi tercelup",
        source: "hitungan fraksi = rho_benda / rho_air, air 1000 kg/m^3",
        note: "Bagian yang tercelup sama dengan perbandingan massa jenis benda terhadap air. Es tercelup 0,92 bagian, hanya menyembul sedikit.",
        data: [
          { label: "Gabus (240)", value: 0.24, color: "#38bdf8" },
          { label: "Kayu pinus (500)", value: 0.5, color: "#22d3ee" },
          { label: "Kayu jati (650)", value: 0.65, color: "#2dd4bf" },
          { label: "Es (920)", value: 0.92, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah balok kayu bermassa jenis 600 kg/m^3 mengapung di air (1000 kg/m^3). Berapa fraksi bagian balok yang tercelup?",
        answer: 0.6,
        tolerance: 0.02,
        suffix: " bagian",
        solution:
          "Saat mengapung, berat = gaya apung. Maka fraksi tercelup = rho_benda / rho_fluida = 600 / 1000 = <strong>0,6 bagian</strong>. Jadi 60 persen tubuh balok berada di bawah air.",
        hint: "Fraksi tercelup = massa jenis benda dibagi massa jenis fluida.",
      },
      {
        type: "calcExercise",
        prompt:
          "Benda dengan berat asli 50 N tercelup penuh di air dan mengalami gaya apung 30 N. Berapa berat semunya saat ditimbang di dalam air?",
        answer: 20,
        tolerance: 1,
        suffix: " N",
        solution:
          "Berat semu = berat asli - gaya apung = 50 - 30 = <strong>20 N</strong>. Gaya apung membantu mengangkat sehingga benda terasa lebih ringan di dalam air.",
        hint: "Kurangi berat asli dengan gaya apung.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Benda-benda berikut dimasukkan ke air laut (massa jenis 1030 kg/m^3). Tentukan nasibnya.",
        buckets: ["Terapung", "Melayang", "Tenggelam"],
        items: [
          { text: "Kayu (700 kg/m^3)", bucket: "Terapung" },
          { text: "Es (920 kg/m^3)", bucket: "Terapung" },
          { text: "Benda khusus (1030 kg/m^3)", bucket: "Melayang" },
          { text: "Aluminium (2700 kg/m^3)", bucket: "Tenggelam" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kapal Selam Mengatur Tangki Ballast",
        html: "Kapal selam bisa naik ke permukaan, melayang di kedalaman tertentu, lalu turun ke dasar, semuanya tanpa mengubah bentuk badannya. Caranya dengan tangki ballast. Untuk menyelam, kru mengisi tangki dengan air laut, sehingga massa total kapal bertambah dan massa jenis rata-ratanya melebihi air laut: kapal tenggelam. Untuk naik, air dalam tangki didorong keluar dengan udara bertekanan, massa berkurang, dan massa jenis rata-rata turun di bawah air laut: kapal terapung. Untuk melayang diam, kru menyetel isi tangki agar massa jenis rata-rata persis sama dengan air laut. Persis Hukum Archimedes yang dikendalikan dengan sengaja.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. Untuk benda <strong>terapung</strong>, berat = gaya apung, sehingga fraksi tercelup = <strong>rho_benda / rho_fluida</strong>. Untuk benda tercelup penuh, <strong>berat semu = berat asli - Fa</strong>. Mengatur nasib benda berarti mengatur massa jenis rata-ratanya: di bawah rho fluida terapung, sama dengan rho fluida melayang, di atasnya tenggelam.",
      },
      {
        type: "takeaways",
        items: [
          "Benda terapung tercelup sebesar fraksi rho_benda / rho_fluida.",
          "Es tercelup 0,92 bagian, sehingga 'gunung es' hampir seluruhnya tersembunyi.",
          "Berat semu = berat asli - gaya apung; benda terasa lebih ringan di dalam fluida.",
          "Kapal selam mengubah massa jenis rata-ratanya lewat tangki ballast.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Benda terapung bermassa jenis 800 kg/m^3 di air 1000. Fraksi tercelupnya?",
            options: ["0,2 bagian", "0,8 bagian", "1,25 bagian", "0,5 bagian"],
            answer: 1,
            explain: "Fraksi tercelup = 800/1000 = 0,8 bagian.",
          },
          {
            q: "Mengapa es menyembul hanya sedikit di atas air?",
            options: [
              "Es lebih ringan dari udara",
              "Massa jenis es 920 hampir sama dengan air 1000",
              "Air mendorong es ke bawah",
              "Es menyerap air",
            ],
            answer: 1,
            explain: "Karena rho es mendekati rho air, fraksi tercelupnya besar (0,92).",
          },
          {
            q: "Benda berat 60 N tercelup penuh dengan gaya apung 25 N. Berat semunya?",
            options: ["85 N", "35 N", "25 N", "60 N"],
            answer: 1,
            explain: "Berat semu = 60 - 25 = 35 N.",
          },
          {
            q: "Bagaimana kapal selam menyelam?",
            options: [
              "Menambah berat dengan mengisi tangki ballast berisi air",
              "Mengeluarkan air dari tangki",
              "Memperbesar lambung",
              "Memanaskan air laut",
            ],
            answer: 0,
            explain: "Mengisi ballast menambah massa sehingga massa jenis rata-rata melebihi air.",
          },
          {
            q: "Agar sebuah benda melayang diam di dalam fluida, massa jenisnya harus?",
            options: [
              "Lebih kecil dari fluida",
              "Sama dengan fluida",
              "Lebih besar dari fluida",
              "Nol",
            ],
            answer: 1,
            explain: "Melayang terjadi saat massa jenis benda sama dengan massa jenis fluida.",
          },
        ],
      },
    ],
  },
];
