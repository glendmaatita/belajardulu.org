import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "mesin-kalor-dan-refrigerasi",
    levelId: "mesin-kalor",
    order: 1,
    title: "Mesin Kalor dan Refrigerasi",
    summary:
      "Mesin mobil mengubah panas jadi gerak, kulkas memindahkan panas keluar dari dalamnya. Keduanya bekerja dengan kalor. Kita pahami dari benda nyata dulu.",
    durationMin: 15,
    tags: ["fisika", "termodinamika", "mesin kalor", "refrigerasi", "efisiensi"],
    blocks: [
      {
        type: "paragraph",
        html: "Mesin mobil membakar bensin yang panas dan mengubah sebagiannya menjadi gerak. Kulkas melakukan kebalikannya: ia memindahkan kalor dari dalam yang dingin ke ruangan yang lebih hangat. Keduanya adalah mesin yang mengelola aliran <strong>kalor</strong>. Ayo bongkar cara kerjanya dulu sebelum bertemu rumus efisiensi.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Mengubah Kalor Menjadi Usaha",
        caption: "Mesin kalor mengambil panas, mengubah sebagian jadi usaha, membuang sisanya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Raba bagian belakang kulkas: hangat. Kulkas tidak 'membuat dingin', ia <strong>memindahkan</strong> kalor dari dalam ke luar, dan untuk itu butuh kerja listrik dari kompresor. Mesin mobil bekerja sebaliknya: mengambil kalor pembakaran, mengubah sebagian jadi gerak, dan membuang sisanya lewat knalpot. Amati: tidak ada mesin yang mengubah semua kalor jadi usaha; selalu ada yang terbuang.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mesin kalor vs refrigerator",
        html: "<strong>Mesin kalor</strong> mengambil kalor Q<sub>h</sub> dari sumber panas, menghasilkan usaha W, dan membuang kalor Q<sub>c</sub> ke sumber dingin. <strong>Refrigerator</strong> (kulkas, AC) adalah mesin kalor terbalik: dengan memberi kerja W, ia menarik kalor Q<sub>c</sub> dari ruang dingin dan membuangnya ke luar. Keduanya dibatasi Hukum II termodinamika.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Efisiensi Maksimum Carnot pada Th = 600 K",
        unit: "efisiensi (0-1)",
        source: "dihitung dari η = 1 − Tc/Th",
        note: "Makin dingin sumber pembuangan Tc, makin tinggi efisiensi maksimum. Nilai ini dihitung dari η = 1 − Tc/Th, batas yang tak bisa dilampaui mesin nyata.",
        data: [
          { label: "Tc = 300 K", value: 0.5, color: "#34d399" },
          { label: "Tc = 400 K", value: 0.333, color: "#fbbf24" },
          { label: "Tc = 500 K", value: 0.167, color: "#fb923c" },
          { label: "Tc = 550 K", value: 0.083, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mesin kalor menyerap 1000 J dan menghasilkan usaha 300 J. Berapa efisiensinya (dalam persen)?",
        answer: 30,
        tolerance: 0.5,
        suffix: " %",
        solution:
          "Efisiensi η = W / Q<sub>h</sub> = 300 / 1000 = 0,30 = <strong>30%</strong>. Sisanya, 700 J, terbuang sebagai kalor ke lingkungan dingin.",
        hint: "Efisiensi = usaha keluar dibagi kalor masuk, lalu kali 100%.",
      },
      {
        type: "calcExercise",
        prompt:
          "Mesin Carnot bekerja antara sumber panas 500 K dan sumber dingin 300 K. Berapa efisiensi maksimumnya (dalam persen)?",
        answer: 40,
        tolerance: 0.5,
        suffix: " %",
        solution:
          "Efisiensi Carnot η = 1 − T<sub>c</sub>/T<sub>h</sub> = 1 − 300/500 = 1 − 0,6 = 0,40 = <strong>40%</strong>. Inilah batas tertinggi; mesin nyata selalu di bawahnya. Suhu harus dalam kelvin.",
        hint: "Pakai η = 1 − Tc/Th dengan suhu dalam kelvin.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap besaran dengan maknanya pada mesin kalor.",
        pairs: [
          { left: "Q_h", right: "Kalor yang diserap dari sumber panas" },
          { left: "Q_c", right: "Kalor yang dibuang ke sumber dingin" },
          { left: "W", right: "Usaha berguna yang dihasilkan mesin" },
          { left: "η = W / Q_h", right: "Efisiensi mesin kalor" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kulkas Membuang Panas ke Dapur",
        html: "Membuka pintu kulkas untuk 'mendinginkan' dapur justru menghangatkannya. Kulkas hanya memindahkan kalor dari dalam ke kisi-kisi belakangnya, ditambah kalor dari kerja kompresornya. Jadi total panas yang dilepas ke dapur lebih besar daripada yang ditarik dari dalam. Ini penerapan langsung Hukum II: memindahkan kalor dari dingin ke panas <strong>selalu</strong> menuntut kerja tambahan, yang akhirnya juga jadi panas.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah membongkar cara kerjanya, rumusnya jelas. Efisiensi mesin kalor: <strong>η = W / Q<sub>h</sub> = 1 − Q<sub>c</sub>/Q<sub>h</sub></strong>. Batas tertinggi diberikan mesin Carnot: <strong>η<sub>maks</sub> = 1 − T<sub>c</sub>/T<sub>h</sub></strong> (suhu dalam kelvin). Untuk refrigerator, ukurannya koefisien kinerja <strong>COP = Q<sub>c</sub>/W</strong>. Tak ada mesin yang melampaui efisiensi Carnot.",
      },
      {
        type: "takeaways",
        items: [
          "Mesin kalor mengubah sebagian kalor jadi usaha dan membuang sisanya.",
          "Efisiensi mesin kalor: η = W / Q_h = 1 − Q_c/Q_h.",
          "Efisiensi maksimum (Carnot): η_maks = 1 − Tc/Th, suhu dalam kelvin.",
          "Refrigerator memindahkan kalor dari dingin ke panas dengan bantuan kerja (COP = Q_c/W).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Efisiensi mesin kalor didefinisikan sebagai?",
            options: ["η = Q_h / W", "η = W / Q_h", "η = Q_c / Q_h", "η = W × Q_h"],
            answer: 1,
            explain: "Efisiensi = usaha berguna dibagi kalor yang diserap, η = W / Q_h.",
          },
          {
            q: "Mesin Carnot antara 600 K dan 300 K punya efisiensi maksimum?",
            options: ["50%", "30%", "100%", "20%"],
            answer: 0,
            explain: "η = 1 − 300/600 = 0,5 = 50%.",
          },
          {
            q: "Sebuah kulkas pada dasarnya?",
            options: [
              "Membuat dingin dari ketiadaan",
              "Memindahkan kalor dari dingin ke panas dengan kerja",
              "Mesin kalor biasa",
              "Menghancurkan energi",
            ],
            answer: 1,
            explain: "Refrigerator memindahkan kalor dari dingin ke panas, butuh kerja.",
          },
          {
            q: "Mengapa tidak ada mesin kalor 100% efisien?",
            options: [
              "Karena teknologi belum maju",
              "Karena Hukum II mengharuskan sebagian kalor dibuang",
              "Karena bahan bakar mahal",
              "Karena gesekan saja",
            ],
            answer: 1,
            explain: "Hukum II melarang; selalu ada kalor yang harus dibuang ke sumber dingin.",
          },
          {
            q: "Untuk menaikkan efisiensi Carnot, kita bisa?",
            options: [
              "Menaikkan Tc",
              "Menurunkan Th",
              "Menurunkan Tc atau menaikkan Th",
              "Menyamakan Tc dan Th",
            ],
            answer: 2,
            explain: "η = 1 − Tc/Th naik bila Tc turun atau Th naik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "siklus-dan-efisiensi",
    levelId: "mesin-kalor",
    order: 2,
    title: "Siklus Termodinamika dan Efisiensi",
    summary:
      "Mesin mobil mengulang langkah yang sama ribuan kali per menit, kembali ke awal setiap putaran. Itulah siklus. Kita pahami cara kerjanya dulu sebelum berumus efisiensi.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "siklus", "efisiensi"],
    blocks: [
      {
        type: "paragraph",
        html: "Mesin mobil tidak melakukan satu ledakan lalu berhenti. Ia mengulang rangkaian langkah yang sama, ribuan kali per menit, dan setiap putaran kembali ke keadaan awal agar bisa mengulang lagi. Rangkaian berulang yang kembali ke titik awal ini disebut <strong>siklus</strong>. Ayo pahami cara siklus menghasilkan usaha dulu sebelum kita susun rumus efisiensinya.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Mesin yang Bekerja Berulang",
        caption: "Mesin menyerap kalor, melakukan usaha, membuang sisa kalor, lalu kembali ke awal.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan satu putaran mesin: gas menyerap kalor banyak dari pembakaran (Q<sub>h</sub>), memuai mendorong piston (melakukan usaha W), lalu membuang sisa kalor lewat knalpot (Q<sub>c</sub>), dan kembali ke keadaan semula. Karena kembali ke awal, energi dalamnya bersih nol per siklus. Amati konsekuensinya: <strong>usaha yang dihasilkan persis sama dengan kalor masuk dikurangi kalor buang</strong>, W = Q<sub>h</sub> − Q<sub>c</sub>. Tidak ada usaha yang muncul dari ketiadaan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kembali ke awal berarti ΔU = 0",
        html: "Karena siklus berakhir di keadaan yang sama persis dengan awalnya, perubahan energi dalam selama satu siklus penuh adalah <strong>nol</strong> (ΔU = 0). Dari Hukum I, ΔU = Q − W, maka usaha bersih sama dengan kalor bersih: <strong>W = Q<sub>h</sub> − Q<sub>c</sub></strong>. Mesin tidak menyimpan energi dari putaran ke putaran; ia hanya menyalurkan selisih kalor menjadi usaha. Sisanya, Q<sub>c</sub>, wajib dibuang menurut Hukum II.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Aliran Energi Satu Siklus Mesin (Q_h = 2000 J)",
        unit: "joule",
        source: "neraca W = Q_h − Q_c per siklus",
        note: "Dari 2000 J kalor masuk, 600 J menjadi usaha berguna dan 1400 J terbuang. Perhatikan: 2000 = 600 + 1400, energi tetap kekal walau hanya sebagian jadi usaha.",
        data: [
          { label: "Kalor masuk Q_h", value: 2000, color: "#f87171" },
          { label: "Usaha berguna W", value: 600, color: "#34d399" },
          { label: "Kalor buang Q_c", value: 1400, color: "#38bdf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dalam satu siklus, mesin menyerap 2000 J dari sumber panas dan membuang 1400 J ke sumber dingin. Berapa efisiensinya (dalam persen)?",
        answer: 30,
        tolerance: 0.5,
        suffix: " %",
        solution:
          "Usaha bersih W = Q<sub>h</sub> − Q<sub>c</sub> = 2000 − 1400 = 600 J. Efisiensi η = W/Q<sub>h</sub> = 600/2000 = 0,30 = <strong>30%</strong>. Bisa juga langsung η = 1 − Q<sub>c</sub>/Q<sub>h</sub> = 1 − 1400/2000 = 0,30.",
        hint: "Cari W = Q_h − Q_c dulu, lalu η = W/Q_h. Atau pakai η = 1 − Q_c/Q_h.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mesin berefisiensi 25% menyerap 4000 J kalor per siklus. Berapa kalor yang terbuang ke sumber dingin (joule)?",
        answer: 3000,
        tolerance: 10,
        suffix: " J",
        solution:
          "Usaha W = η·Q<sub>h</sub> = 0,25 × 4000 = 1000 J. Kalor buang Q<sub>c</sub> = Q<sub>h</sub> − W = 4000 − 1000 = <strong>3000 J</strong>. Tiga perempat kalor masuk justru terbuang, lazim untuk mesin nyata.",
        hint: "Hitung W = η·Q_h, lalu Q_c = Q_h − W.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap pernyataan tentang siklus dengan nilainya.",
        pairs: [
          { left: "Perubahan energi dalam per siklus penuh", right: "Nol (ΔU = 0)" },
          { left: "Usaha bersih per siklus", right: "W = Q_h − Q_c" },
          { left: "Efisiensi mesin", right: "η = W / Q_h" },
          { left: "Kalor yang wajib dibuang", right: "Q_c, sisa yang tidak jadi usaha" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Siklus Otto pada Mesin Bensin",
        html: "Mesin bensin bekerja dengan <strong>siklus Otto</strong>: hisap, kompresi, pembakaran dan ekspansi (langkah tenaga), lalu buang. Setiap siklus, gas menyerap kalor dari pembakaran, melakukan usaha pada piston, dan membuang gas panas lewat knalpot, lalu kembali ke awal untuk mengulang. Efisiensi nyata mesin bensin sekitar 25 sampai 35 persen, sisanya terbuang sebagai panas knalpot dan radiator. Memahami siklus menjelaskan mengapa sebagian besar energi bensin tidak pernah jadi gerak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami siklusnya, rumusnya padat. Karena ΔU = 0 per siklus, usaha bersih <strong>W = Q<sub>h</sub> − Q<sub>c</sub></strong>. Efisiensi <strong>η = W/Q<sub>h</sub> = 1 − Q<sub>c</sub>/Q<sub>h</sub></strong>, selalu kurang dari 1 karena Q<sub>c</sub> tidak pernah nol (Hukum II). Pada diagram P-V, siklus membentuk lintasan tertutup, dan usaha bersih sama dengan luas daerah di dalam loop tersebut.",
      },
      {
        type: "takeaways",
        items: [
          "Siklus adalah rangkaian proses yang kembali ke keadaan awal.",
          "Per siklus penuh ΔU = 0, sehingga W = Q_h − Q_c.",
          "Efisiensi: η = W/Q_h = 1 − Q_c/Q_h, selalu kurang dari 100%.",
          "Pada diagram P-V, usaha bersih = luas daerah dalam loop siklus.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Perubahan energi dalam selama satu siklus penuh adalah?",
            options: ["Nol", "Sama dengan Q_h", "Sama dengan W", "Tak terhingga"],
            answer: 0,
            explain: "Siklus kembali ke awal, jadi ΔU = 0.",
          },
          {
            q: "Usaha bersih mesin per siklus sama dengan?",
            options: ["Q_h + Q_c", "Q_h − Q_c", "Q_c − Q_h", "Q_h × Q_c"],
            answer: 1,
            explain: "Karena ΔU = 0, W = Q_h − Q_c.",
          },
          {
            q: "Mesin menyerap 1000 J dan membuang 600 J. Efisiensinya?",
            options: ["40%", "60%", "100%", "166%"],
            answer: 0,
            explain: "W = 1000 − 600 = 400 J, η = 400/1000 = 40%.",
          },
          {
            q: "Efisiensi mesin selalu kurang dari 100% karena?",
            options: [
              "Q_c selalu ada dan harus dibuang (Hukum II)",
              "Mesin selalu rusak",
              "Energi tidak kekal",
              "Suhu selalu nol",
            ],
            answer: 0,
            explain: "Hukum II mengharuskan sebagian kalor dibuang, jadi η < 100%.",
          },
          {
            q: "Pada diagram P-V, usaha bersih satu siklus sama dengan?",
            options: [
              "Panjang lintasan",
              "Luas daerah di dalam loop tertutup",
              "Tinggi puncak",
              "Nol",
            ],
            answer: 1,
            explain: "Usaha bersih = luas daerah yang dilingkupi loop siklus.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "siklus-carnot",
    levelId: "mesin-kalor",
    order: 3,
    title: "Siklus Carnot: Batas Tertinggi",
    summary:
      "Tidak peduli secanggih apa pun mesin, ada batas efisiensi yang tak bisa dilampaui, ditentukan hanya oleh dua suhu. Carnot menemukannya. Kita pahami dulu sebelum berumus.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "carnot", "efisiensi maksimum"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu insinyur yang diminta membuat mesin sehemat mungkin. Berapa batas tertinggi efisiensi yang mungkin dicapai? Pada 1824, Sadi Carnot membuktikan ada langit-langit yang tak bisa ditembus, dan anehnya batas itu <strong>hanya ditentukan oleh dua suhu</strong>: sumber panas dan sumber dingin, bukan oleh bahan bakar atau desain. Ayo pahami gagasan batas ini dulu sebelum bertemu rumusnya.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Batas Ideal Sebuah Mesin",
        caption: "Mesin paling efisien yang mungkin ada hanyalah mesin Carnot yang sepenuhnya reversibel.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Mesin Carnot adalah mesin khayal sempurna: tiap langkahnya berjalan begitu lambat dan mulus sehingga bisa dibalik tanpa kerugian (reversibel). Ia bekerja antara dua suhu, panas T<sub>h</sub> dan dingin T<sub>c</sub>. Amati pola pentingnya: <strong>makin jauh jarak antara T<sub>h</sub> dan T<sub>c</sub>, makin tinggi efisiensi maksimumnya</strong>. Jika sumber panas dan dingin sama suhu, efisiensi nol; tidak ada usaha bisa diambil dari dua benda yang sudah setimbang.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa Carnot jadi patokan",
        html: "Carnot membuktikan tidak ada mesin nyata yang bisa lebih efisien daripada mesin Carnot ideal yang bekerja antara dua suhu yang sama. Mesin nyata punya gesekan, kebocoran kalor, dan proses cepat tak reversibel, sehingga selalu di bawah batas Carnot. Hebatnya, efisiensi Carnot <strong>hanya bergantung pada perbandingan dua suhu mutlak</strong>, sama sekali tidak pada jenis gas atau bahan bakar yang dipakai.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Efisiensi Carnot vs Suhu Sumber Panas (Tc = 300 K)",
        unit: "efisiensi (0-1)",
        source: "dihitung dari η = 1 − Tc/Th, Tc = 300 K",
        note: "Makin tinggi suhu sumber panas Th, makin tinggi efisiensi maksimum, tetapi tidak pernah mencapai 1 selama Tc di atas nol mutlak. Nilai dihitung langsung dari rumus Carnot.",
        data: [
          { label: "Th = 400 K", value: 0.25, color: "#38bdf8" },
          { label: "Th = 500 K", value: 0.4, color: "#34d399" },
          { label: "Th = 600 K", value: 0.5, color: "#fbbf24" },
          { label: "Th = 800 K", value: 0.625, color: "#fb923c" },
          { label: "Th = 1000 K", value: 0.7, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Mesin Carnot bekerja antara sumber panas 800 K dan sumber dingin 300 K. Berapa efisiensi maksimumnya (dalam persen)?",
        answer: 62.5,
        tolerance: 0.5,
        suffix: " %",
        solution:
          "η = 1 − T<sub>c</sub>/T<sub>h</sub> = 1 − 300/800 = 1 − 0,375 = 0,625 = <strong>62,5%</strong>. Inilah batas tertinggi; mesin nyata antara dua suhu ini pasti di bawahnya. Suhu wajib dalam kelvin.",
        hint: "Pakai η = 1 − Tc/Th dengan suhu dalam kelvin.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah turbin uap bekerja antara 500 K dan 350 K. Berapa efisiensi Carnot maksimumnya (dalam persen)?",
        answer: 30,
        tolerance: 0.5,
        suffix: " %",
        solution:
          "η = 1 − T<sub>c</sub>/T<sub>h</sub> = 1 − 350/500 = 1 − 0,7 = 0,30 = <strong>30%</strong>. Karena jarak kedua suhu cukup dekat, batas efisiensinya rendah. Untuk menaikkannya, perbesar Th atau perkecil Tc.",
        hint: "Pakai η = 1 − Tc/Th. Jarak suhu yang dekat berarti efisiensi rendah.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap tindakan: menaikkan atau menurunkan efisiensi Carnot.",
        buckets: ["Menaikkan efisiensi", "Menurunkan efisiensi"],
        items: [
          { text: "Menaikkan suhu sumber panas Th", bucket: "Menaikkan efisiensi" },
          { text: "Menurunkan suhu sumber dingin Tc", bucket: "Menaikkan efisiensi" },
          { text: "Menaikkan suhu sumber dingin Tc", bucket: "Menurunkan efisiensi" },
          { text: "Menyamakan Th dan Tc", bucket: "Menurunkan efisiensi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Pembangkit Listrik Memakai Uap Sangat Panas",
        html: "Pembangkit listrik tenaga uap memanaskan air hingga ratusan derajat untuk memutar turbin. Mengapa tidak uap hangat saja yang lebih hemat bahan bakar? Karena efisiensi Carnot menuntut <strong>suhu sumber panas setinggi mungkin</strong>: makin tinggi T<sub>h</sub>, makin besar fraksi kalor yang bisa diubah jadi listrik. Sumber dinginnya, sungai atau menara pendingin, dijaga serendah mungkin. Itulah sebabnya pembangkit modern memakai uap superpanas bertekanan tinggi demi mendekati batas Carnot.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami gagasan batasnya, rumus Carnot jadi bermakna: <strong>η<sub>Carnot</sub> = 1 − T<sub>c</sub>/T<sub>h</sub></strong>, dengan T<sub>c</sub> dan T<sub>h</sub> suhu mutlak dalam kelvin. Ini efisiensi maksimum yang mungkin dicapai mesin apa pun antara dua suhu itu. Efisiensi naik bila T<sub>h</sub> dinaikkan atau T<sub>c</sub> diturunkan, dan hanya akan 100% jika T<sub>c</sub> = 0 K, sesuatu yang mustahil dicapai.",
      },
      {
        type: "takeaways",
        items: [
          "Mesin Carnot ideal adalah batas efisiensi tertinggi antara dua suhu.",
          "Efisiensi Carnot: η = 1 − Tc/Th, suhu dalam kelvin.",
          "Efisiensi hanya bergantung pada dua suhu, bukan bahan bakar atau desain.",
          "Naikkan Th atau turunkan Tc untuk efisiensi lebih tinggi; 100% mustahil.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Efisiensi maksimum mesin Carnot adalah?",
            options: ["η = 1 − Tc/Th", "η = W/Q_c", "η = Tc/Th", "η = Q_h − Q_c"],
            answer: 0,
            explain: "Efisiensi Carnot: η = 1 − Tc/Th.",
          },
          {
            q: "Mesin Carnot antara 400 K dan 300 K punya efisiensi?",
            options: ["25%", "75%", "100%", "133%"],
            answer: 0,
            explain: "η = 1 − 300/400 = 0,25 = 25%.",
          },
          {
            q: "Efisiensi Carnot bergantung pada?",
            options: [
              "Jenis bahan bakar",
              "Hanya dua suhu mutlak Th dan Tc",
              "Warna mesin",
              "Ukuran mesin",
            ],
            answer: 1,
            explain: "Hanya bergantung pada perbandingan dua suhu mutlak.",
          },
          {
            q: "Agar efisiensi Carnot 100%, suhu sumber dingin harus?",
            options: ["0 K (mustahil dicapai)", "300 K", "100 K", "Sama dengan Th"],
            answer: 0,
            explain: "η = 1 hanya jika Tc = 0 K, yang mustahil dicapai.",
          },
          {
            q: "Mengapa pembangkit listrik memakai uap sangat panas?",
            options: [
              "Agar lebih murah",
              "Agar Th tinggi sehingga efisiensi Carnot lebih besar",
              "Agar Tc tinggi",
              "Agar mesin lebih berat",
            ],
            answer: 1,
            explain: "Th tinggi menaikkan batas efisiensi Carnot, jadi lebih banyak listrik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "mesin-pendingin",
    levelId: "mesin-kalor",
    order: 4,
    title: "Mesin Pendingin dan Pompa Kalor",
    summary:
      "Kulkas dan AC memindahkan panas melawan arah alaminya, dari dingin ke panas, dengan bantuan listrik. Anehnya, makin kecil beda suhu, makin hemat. Kita pahami dulu sebelum berumus.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "refrigerator", "cop", "pompa kalor"],
    blocks: [
      {
        type: "paragraph",
        html: "Kulkas, AC, dan freezer semuanya melakukan hal yang menurut Hukum II tidak terjadi sendiri: memindahkan kalor dari yang <strong>dingin ke yang panas</strong>. Mereka 'menyalahi' arah alami kalor, tetapi tidak melanggar hukum, karena membayar dengan kerja listrik. Yang menarik, makin kecil beda suhu yang harus dilawan, makin hemat kerjanya. Ayo pahami cara kerjanya dulu sebelum bertemu rumus koefisien kinerjanya.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Memindahkan Kalor Melawan Arah Alami",
        caption: "Dengan kerja kompresor, mesin pendingin menarik kalor dari ruang dingin ke luar yang panas.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Mesin pendingin adalah mesin kalor yang dijalankan terbalik. Dengan memberi kerja W lewat kompresor, ia menarik kalor Q<sub>c</sub> dari dalam ruang dingin dan membuang Q<sub>h</sub> = Q<sub>c</sub> + W ke luar. Amati: ukuran 'kehebatan'-nya bukan efisiensi biasa, melainkan <strong>berapa banyak kalor yang dipindahkan per satuan kerja listrik</strong>. Nilai ini, disebut COP, biasanya lebih besar dari 1, karena kita memindahkan kalor, bukan menciptakannya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "COP, bukan efisiensi biasa",
        html: "Untuk mesin pendingin, ukurannya <strong>koefisien kinerja (COP)</strong>: kalor yang ditarik dari ruang dingin dibagi kerja yang dipakai, COP = Q<sub>c</sub>/W. Berbeda dengan efisiensi mesin kalor yang selalu di bawah 1, COP bisa jauh di atas 1. Untuk pompa kalor yang menghangatkan ruangan, yang dihitung adalah kalor yang dilepas, COP = Q<sub>h</sub>/W. Makin <strong>kecil beda suhu</strong> antara dalam dan luar, makin tinggi COP, jadi makin hemat listrik.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "COP Maksimum Kulkas vs Beda Suhu (Tc = 270 K)",
        unit: "COP",
        source: "dihitung dari COP = Tc/(Th − Tc), Tc = 270 K",
        note: "Makin kecil selisih suhu dalam dan luar, makin tinggi COP, jadi makin sedikit listrik per kalor yang dipindahkan. Nilai dihitung dari rumus COP Carnot.",
        data: [
          { label: "Beda 10 K", value: 27, color: "#34d399" },
          { label: "Beda 20 K", value: 13.5, color: "#fbbf24" },
          { label: "Beda 30 K", value: 9, color: "#fb923c" },
          { label: "Beda 50 K", value: 5.4, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kulkas menarik 300 J kalor dari dalam dengan memakai 100 J kerja listrik. Berapa koefisien kinerjanya (COP)?",
        answer: 3,
        tolerance: 0.05,
        solution:
          "COP = Q<sub>c</sub>/W = 300/100 = <strong>3</strong>. Artinya tiap 1 joule listrik memindahkan 3 joule kalor keluar dari kulkas. Nilai di atas 1 wajar karena mesin memindahkan kalor, bukan membuatnya.",
        hint: "COP = Q_c / W, dengan Q_c kalor yang ditarik dari ruang dingin.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kulkas Carnot ideal menjaga ruang dalam 270 K sementara dapur 300 K. Berapa COP maksimumnya? Pakai COP = Tc/(Th − Tc).",
        answer: 9,
        tolerance: 0.1,
        solution:
          "COP = T<sub>c</sub>/(T<sub>h</sub> − T<sub>c</sub>) = 270/(300 − 270) = 270/30 = <strong>9</strong>. Inilah COP tertinggi yang mungkin; kulkas nyata selalu di bawahnya karena ada kerugian. Suhu dalam kelvin.",
        hint: "Pakai COP = Tc/(Th − Tc) dengan suhu dalam kelvin.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap mesin atau besaran dengan maknanya.",
        pairs: [
          { left: "Refrigerator (kulkas)", right: "Menarik kalor dari ruang dingin" },
          { left: "Pompa kalor penghangat", right: "Melepas kalor ke ruang yang dihangatkan" },
          { left: "COP = Q_c / W", right: "Ukuran kinerja kulkas" },
          { left: "Q_h = Q_c + W", right: "Kalor total yang dibuang ke luar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pompa Kalor, Pemanas yang Lebih Hemat dari Pemanas Listrik",
        html: "Pemanas listrik biasa mengubah 1 joule listrik menjadi tepat 1 joule panas. Tetapi <strong>pompa kalor</strong> bisa memberi 3 sampai 4 joule panas per joule listrik, karena ia tidak membuat panas, melainkan <strong>memindahkan</strong> panas dari udara luar yang dingin ke dalam ruangan, persis kulkas yang dibalik. Selama beda suhu dalam dan luar tidak terlalu besar, COP-nya tinggi dan tagihan listriknya jauh lebih murah. Inilah sebabnya pompa kalor menjadi andalan pemanas rumah hemat energi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami cara kerjanya, rumusnya jelas. Kekekalan energi: <strong>Q<sub>h</sub> = Q<sub>c</sub> + W</strong>. Koefisien kinerja kulkas: <strong>COP = Q<sub>c</sub>/W</strong>, dan untuk pompa kalor penghangat <strong>COP = Q<sub>h</sub>/W</strong>. Batas ideal Carnot: <strong>COP<sub>maks</sub> = T<sub>c</sub>/(T<sub>h</sub> − T<sub>c</sub>)</strong> (suhu dalam kelvin). Makin kecil beda suhu, makin besar COP, makin hemat.",
      },
      {
        type: "takeaways",
        items: [
          "Mesin pendingin memindahkan kalor dari dingin ke panas dengan bantuan kerja.",
          "Kekekalan energi: Q_h = Q_c + W (kalor buang = kalor tarik + kerja).",
          "Koefisien kinerja kulkas: COP = Q_c/W, bisa jauh di atas 1.",
          "COP maksimum Carnot: Tc/(Th − Tc); beda suhu kecil berarti COP tinggi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Koefisien kinerja (COP) kulkas didefinisikan sebagai?",
            options: ["COP = W/Q_c", "COP = Q_c/W", "COP = Q_h/Q_c", "COP = W/Q_h"],
            answer: 1,
            explain: "COP kulkas = kalor ditarik dibagi kerja = Q_c/W.",
          },
          {
            q: "Kulkas menarik 400 J dengan kerja 100 J. COP-nya?",
            options: ["4", "0,25", "500", "100"],
            answer: 0,
            explain: "COP = 400/100 = 4.",
          },
          {
            q: "Hubungan kalor pada mesin pendingin adalah?",
            options: ["Q_h = Q_c + W", "Q_h = Q_c − W", "Q_c = Q_h + W", "W = Q_h + Q_c"],
            answer: 0,
            explain: "Kalor yang dibuang Q_h = kalor ditarik Q_c + kerja W.",
          },
          {
            q: "COP kulkas menjadi lebih tinggi (hemat) saat?",
            options: [
              "Beda suhu dalam dan luar makin besar",
              "Beda suhu dalam dan luar makin kecil",
              "Kerja makin besar",
              "Suhu luar makin tinggi",
            ],
            answer: 1,
            explain: "COP = Tc/(Th − Tc), naik saat beda suhu mengecil.",
          },
          {
            q: "Mengapa pompa kalor lebih hemat daripada pemanas listrik biasa?",
            options: [
              "Karena menciptakan panas dari ketiadaan",
              "Karena memindahkan panas, memberi lebih dari 1 joule panas per joule listrik",
              "Karena tidak memakai listrik",
              "Karena melanggar Hukum II",
            ],
            answer: 1,
            explain: "Pompa kalor memindahkan panas, sehingga COP > 1, lebih hemat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "mesin-uap-revolusi-industri",
    levelId: "mesin-kalor",
    order: 5,
    title: "Mesin Uap dan Lahirnya Revolusi Industri",
    summary:
      "Mesin uap pertama hanya mengubah sekitar 1% panas menjadi gerak, tetapi mengubah dunia. Perbaikannya selama dua abad mengikuti satu hukum: efisiensi dibatasi suhu. Kita telusuri dulu sebelum berumus.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "mesin uap", "efisiensi", "sejarah"],
    blocks: [
      {
        type: "paragraph",
        html: "Pada awal 1700-an, mesin uap pertama dibuat untuk memompa air keluar dari tambang. Mesin itu sangat boros: dari seluruh kalor batu bara yang dibakar, hanya sekitar 1% berubah menjadi gerak. Namun penemuan ini memicu <strong>Revolusi Industri</strong>. Selama dua abad berikutnya, efisiensinya naik puluhan kali lipat, tetapi tidak pernah lepas dari batas yang ditetapkan termodinamika. Ayo telusuri perjalanannya dulu sebelum bertemu rumusnya.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Kalor Pembakaran Menjadi Gerak",
        caption: "Mesin uap memanaskan air menjadi uap bertekanan yang mendorong piston atau memutar turbin.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan mesin uap: batu bara memanaskan air menjadi uap panas (sumber panas T<sub>h</sub>), uap mendorong piston melakukan usaha, lalu uap mendingin dan mengembun di kondensor (sumber dingin T<sub>c</sub>). Amati polanya: makin panas uapnya dan makin dingin kondensornya, makin besar fraksi kalor yang bisa jadi gerak. Mesin awal boros karena uapnya tidak terlalu panas dan banyak kalor bocor. Setiap perbaikan sejarah pada dasarnya menaikkan T<sub>h</sub> atau menurunkan T<sub>c</sub>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dari 1% menuju 60%",
        html: "Mesin uap Newcomen (1712) hanya berefisiensi sekitar 1%. James Watt menambahkan <strong>kondensor terpisah</strong> pada 1769 sehingga silinder tetap panas, menaikkan efisiensi jadi sekitar 3%. Mesin pembakaran dan turbin modern, dengan suhu kerja jauh lebih tinggi, kini mencapai 30 sampai 60%. Semua peningkatan ini tetap tunduk pada batas Carnot: tidak ada mesin yang melampaui <strong>1 − T<sub>c</sub>/T<sub>h</sub></strong>.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Efisiensi Mesin Kalor Sepanjang Sejarah",
        unit: "%",
        source: "ilustrasi data historis efisiensi mesin",
        note: "Efisiensi naik dari sekitar 1% pada mesin Newcomen menjadi sekitar 60% pada pembangkit siklus gabungan modern, terutama berkat suhu uap yang makin tinggi.",
        data: [
          { label: "Newcomen 1712", value: 1, color: "#a16207" },
          { label: "Watt 1780", value: 3, color: "#fb923c" },
          { label: "Bensin modern", value: 30, color: "#fbbf24" },
          { label: "Diesel modern", value: 42, color: "#34d399" },
          { label: "Siklus gabungan", value: 60, color: "#38bdf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mesin uap awal menyerap 10.000 J kalor dari pembakaran dan menghasilkan usaha 400 J. Berapa efisiensinya (dalam persen)?",
        answer: 4,
        tolerance: 0.2,
        suffix: " %",
        solution:
          "Efisiensi η = W / Q<sub>h</sub> = 400 / 10.000 = 0,04 = <strong>4%</strong>. Sangat boros: 9.600 J terbuang sebagai panas. Mesin uap awal memang seperti ini, tetapi tetap berguna karena tenaga kuda dan air sangat mahal saat itu.",
        hint: "Efisiensi = usaha keluar dibagi kalor masuk, lalu kali 100%.",
      },
      {
        type: "calcExercise",
        prompt:
          "Mesin uap itu bekerja antara uap 450 K dan kondensor 300 K. Berapa efisiensi maksimum Carnot-nya (dalam persen)? Pakai η = 1 − Tc/Th.",
        answer: 33.3,
        tolerance: 0.5,
        suffix: " %",
        solution:
          "η = 1 − T<sub>c</sub>/T<sub>h</sub> = 1 − 300/450 = 1 − 0,667 = 0,333 = <strong>33,3%</strong>. Bandingkan dengan efisiensi nyata 4% tadi: mesin awal jauh di bawah batas Carnot, jadi ada ruang besar untuk perbaikan, dan memang teknologi terus menutup jaraknya.",
        hint: "Pakai η = 1 − Tc/Th dengan suhu dalam kelvin, lalu bandingkan dengan efisiensi nyata.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap mesin atau era dengan efisiensinya kira-kira.",
        pairs: [
          { left: "Mesin Newcomen (1712)", right: "Sekitar 1%" },
          { left: "Mesin uap Watt (1780)", right: "Sekitar 3%" },
          { left: "Mesin diesel modern", right: "Sekitar 40%" },
          { left: "Pembangkit siklus gabungan", right: "Sekitar 60%" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap tindakan: menaikkan atau menurunkan efisiensi mesin uap.",
        buckets: ["Menaikkan efisiensi", "Menurunkan efisiensi"],
        items: [
          { text: "Menaikkan suhu uap dari boiler (Th lebih tinggi)", bucket: "Menaikkan efisiensi" },
          { text: "Menambah kondensor terpisah agar Tc lebih rendah", bucket: "Menaikkan efisiensi" },
          { text: "Membiarkan banyak kalor bocor ke lingkungan", bucket: "Menurunkan efisiensi" },
          { text: "Menjalankan mesin dengan gesekan besar tanpa pelumas", bucket: "Menurunkan efisiensi" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Kondensor Terpisah Watt dan Revolusi Industri",
        html: "Mesin Newcomen memanaskan lalu mendinginkan silinder yang sama setiap langkah, sehingga banyak kalor terbuang sia-sia. Pada 1769 James Watt menambahkan <strong>kondensor terpisah</strong>: uap mengembun di wadah lain yang dingin, sementara silinder utama tetap panas. Inovasi ini melipatgandakan efisiensi dan menghemat batu bara secara drastis. Mesin Watt menggerakkan pabrik tekstil, tambang, dan kemudian lokomotif, menjadi mesin pendorong utama Revolusi Industri. Satu perbaikan termodinamika sederhana mengubah arah sejarah ekonomi dunia.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menelusuri sejarahnya, rumusnya jelas. Efisiensi nyata mesin: <strong>η = W / Q<sub>h</sub></strong>. Batas tertinggi yang tak bisa dilampaui adalah efisiensi Carnot <strong>η<sub>maks</sub> = 1 − T<sub>c</sub>/T<sub>h</sub></strong> (suhu dalam kelvin). Seluruh sejarah perbaikan mesin uap, dari Newcomen ke Watt hingga turbin modern, pada intinya adalah usaha menaikkan T<sub>h</sub>, menurunkan T<sub>c</sub>, dan mengurangi kebocoran agar mesin nyata mendekati batas Carnot.",
      },
      {
        type: "takeaways",
        items: [
          "Mesin uap mengubah kalor pembakaran menjadi usaha, memicu Revolusi Industri.",
          "Efisiensi naik dari sekitar 1% (Newcomen) menjadi 60% (siklus gabungan modern).",
          "Inovasi kunci Watt adalah kondensor terpisah yang menjaga silinder tetap panas.",
          "Semua mesin nyata tetap di bawah batas Carnot, η = 1 − Tc/Th.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mesin uap pada dasarnya mengubah kalor pembakaran menjadi?",
            options: ["Listrik secara langsung", "Usaha mekanik (gerak)", "Cahaya", "Suara"],
            answer: 1,
            explain: "Mesin uap mengubah sebagian kalor menjadi usaha mekanik yang menggerakkan piston atau turbin.",
          },
          {
            q: "Inovasi besar James Watt yang menaikkan efisiensi mesin uap adalah?",
            options: [
              "Memakai bensin",
              "Menambahkan kondensor terpisah",
              "Mendinginkan boiler",
              "Menghilangkan piston",
            ],
            answer: 1,
            explain: "Kondensor terpisah menjaga silinder tetap panas, menaikkan efisiensi.",
          },
          {
            q: "Efisiensi mesin uap awal Newcomen kira-kira?",
            options: ["1%", "33%", "60%", "100%"],
            answer: 0,
            explain: "Mesin Newcomen sangat boros, efisiensinya sekitar 1%.",
          },
          {
            q: "Mesin nyata seefisien apa pun selalu di bawah batas?",
            options: [
              "Hukum Boyle",
              "Efisiensi Carnot (1 − Tc/Th)",
              "Massa jenis air",
              "Hukum Dalton",
            ],
            answer: 1,
            explain: "Carnot menetapkan batas tertinggi yang tak bisa dilampaui mesin apa pun.",
          },
          {
            q: "Mengapa pembangkit modern jauh lebih efisien daripada mesin Newcomen?",
            options: [
              "Karena memakai lebih banyak batu bara",
              "Karena suhu uapnya jauh lebih tinggi dan kebocoran kalornya kecil",
              "Karena tidak membuang kalor sama sekali",
              "Karena melanggar Hukum II",
            ],
            answer: 1,
            explain: "Th yang tinggi dan rekayasa lebih baik mendekatkan mesin ke batas Carnot.",
          },
        ],
      },
    ],
  },
];
