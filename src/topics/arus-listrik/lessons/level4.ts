import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "daya-listrik",
    levelId: "energi-daya-listrik",
    order: 1,
    title: "Daya Listrik",
    summary:
      "Kenapa setrika cepat panas tapi lampu LED tidak? Dari laju energi yang diserahkan tiap detik, kita temukan apa itu daya.",
    durationMin: 14,
    tags: ["fisika", "listrik", "daya", "watt", "energi"],
    blocks: [
      {
        type: "paragraph",
        html: "Pegang lampu LED yang menyala: hangat ringan. Pegang setrika menyala: panas membara. Keduanya pakai listrik, tapi yang satu menyerahkan energi jauh lebih cepat. Laju penyerahan energi tiap detik itulah <strong>daya</strong>. Mari rasakan dulu apa yang membuat satu alat 'lebih bertenaga' dari yang lain, baru rumus dayanya kita susun di akhir.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Daya Sebagai Laju Energi",
        caption: "Daya adalah seberapa cepat energi listrik diubah menjadi panas, cahaya, atau gerak.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lihat label alat di rumah: lampu LED tertulis '10 W', setrika '350 W', AC '800 W'. Angka watt itu bukan jumlah energi, melainkan <strong>laju</strong> energi tiap detik. Setrika 350 W menyerahkan 350 joule tiap detik, 35 kali lebih cepat dari lampu 10 W. Itulah kenapa setrika cepat panas. Makin besar tegangan dan arus yang dipakai alat, makin besar dayanya. Belum rumus, baru membaca label.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Watt: joule per sekon",
        html: "<strong>Daya (P)</strong> diukur dalam <strong>watt (W)</strong>, dan satu watt berarti satu joule energi tiap satu sekon. Alat berdaya besar mengubah energi lebih cepat, bukan menyimpan energi lebih banyak.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Daya Beberapa Alat Rumah Tangga",
        unit: "watt",
        source: "nilai pasaran umum",
        note: "Angka watt menunjukkan laju energi tiap detik. Pemanas dan AC berdaya besar; lampu LED dan pengisi HP berdaya kecil. Angka ini nyata dari label alat.",
        data: [
          { label: "Lampu LED", value: 10, color: "#a3e635" },
          { label: "Kipas", value: 55, color: "#4ade80" },
          { label: "TV", value: 80, color: "#34d399" },
          { label: "Setrika", value: 350, color: "#fb923c" },
          { label: "AC", value: 800, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lampu bekerja pada 220 V dan menarik arus 0,5 A. Berapa dayanya? (gunakan P = V × I)",
        answer: 110,
        tolerance: 0.5,
        suffix: " W",
        solution:
          "P = V × I = 220 × 0,5 = <strong>110 watt</strong>. Inilah laju energi yang diubah lampu tiap detik.",
        hint: "Kalikan tegangan dengan arus.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pemanas berhambatan 22 Ω dipasang pada 220 V. Berapa dayanya? (gunakan P = V² / R)",
        answer: 2200,
        tolerance: 1,
        suffix: " W",
        solution:
          "P = V² / R = (220 × 220) / 22 = 48400 / 22 = <strong>2200 watt</strong>. Pada tegangan tetap, hambatan kecil justru menghasilkan daya besar.",
        hint: "Kuadratkan tegangan lalu bagi dengan hambatan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap bentuk rumus daya dengan besaran yang dibutuhkan.",
        pairs: [
          { left: "P = V × I", right: "tegangan dan arus" },
          { left: "P = I² × R", right: "arus dan hambatan" },
          { left: "P = V² / R", right: "tegangan dan hambatan" },
          { left: "Satuan daya", right: "watt = joule per sekon" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap alat sebagai berdaya besar atau berdaya kecil.",
        buckets: ["Berdaya besar", "Berdaya kecil"],
        items: [
          { text: "AC 800 W", bucket: "Berdaya besar" },
          { text: "Lampu LED 10 W", bucket: "Berdaya kecil" },
          { text: "Pemanas air 1500 W", bucket: "Berdaya besar" },
          { text: "Pengisi HP 5 W", bucket: "Berdaya kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memilih MCB Sesuai Daya Rumah",
        html: "Rumah dengan langganan PLN 900 VA hanya boleh menarik daya sampai sekitar 900 watt sekaligus. Jika setrika 350 W, rice cooker 400 W, dan pemanas air 350 W menyala bersamaan, total 1100 W melampaui batas, dan <strong>MCB</strong> (pemutus otomatis) langsung memutus arus agar instalasi aman. Memahami daya membantu kita mengatur pemakaian alat agar listrik tidak 'jepret' dan kabel tidak kepanasan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Dari membaca label dan merasakan panas, kita rangkum. Daya adalah laju energi: bentuk dasarnya <strong>P = V × I</strong>. Dengan Hukum Ohm (V = IR), bentuk ini setara dengan <strong>P = I² × R = V² / R</strong>. Satuannya watt, yaitu joule per sekon. Rumus lahir dari gagasan 'seberapa cepat energi diserahkan', bukan dari hafalan.",
      },
      {
        type: "takeaways",
        items: [
          "Daya (P) adalah laju energi listrik tiap detik, diukur dalam watt (joule per sekon).",
          "Bentuk dasar: P = V × I; setara dengan P = I² × R = V² / R lewat Hukum Ohm.",
          "Alat berdaya besar mengubah energi lebih cepat, bukan menyimpan lebih banyak.",
          "Total daya alat yang menyala bersamaan dibatasi langganan PLN dan MCB.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satu watt setara dengan?",
            options: ["1 joule per sekon", "1 coulomb per sekon", "1 volt per ampere", "1 ohm per volt"],
            answer: 0,
            explain: "Watt adalah joule per sekon, yaitu laju energi.",
          },
          {
            q: "Alat 220 V menarik arus 4 A. Dayanya?",
            options: ["55 W", "880 W", "224 W", "0,018 W"],
            answer: 1,
            explain: "P = V × I = 220 × 4 = 880 watt.",
          },
          {
            q: "Bentuk daya yang hanya butuh arus dan hambatan adalah?",
            options: ["P = V × I", "P = V² / R", "P = I² × R", "P = V / I"],
            answer: 2,
            explain: "P = I² × R memakai arus dan hambatan.",
          },
          {
            q: "Pemanas 11 Ω pada 220 V. Dayanya (P = V²/R)?",
            options: ["2420 W", "4400 W", "20 W", "242 W"],
            answer: 1,
            explain: "P = 220²/11 = 48400/11 = 4400 watt.",
          },
          {
            q: "Mengapa MCB memutus arus saat terlalu banyak alat menyala?",
            options: [
              "Karena tegangan naik",
              "Karena total daya melampaui batas langganan",
              "Karena arus menjadi nol",
              "Karena hambatan menghilang",
            ],
            answer: 1,
            explain: "Total daya melebihi batas, MCB memutus demi keamanan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "energi-listrik-dan-biaya",
    levelId: "energi-daya-listrik",
    order: 2,
    title: "Energi Listrik dan Biaya PLN",
    summary:
      "Apa sebenarnya yang kita bayar tiap bulan ke PLN? Bukan arus, bukan tegangan, tapi energi: daya dikali lama pemakaian.",
    durationMin: 15,
    tags: ["fisika", "listrik", "energi", "kwh", "biaya"],
    blocks: [
      {
        type: "paragraph",
        html: "Tagihan PLN datang tiap bulan dengan angka <strong>kWh</strong> yang menentukan berapa rupiah kita bayar. Tapi kWh itu apa? Bukan arus, bukan tegangan, melainkan <strong>energi</strong>: berapa banyak daya yang kita pakai dikali berapa lama. Mari telusuri dari meteran rumah dulu, baru rumus energi dan biayanya kita rangkum.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Energi, Daya, dan Waktu",
        caption: "Energi adalah daya dikali waktu; kWh adalah satuan energi praktis PLN.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sebuah lampu 10 W menyala 10 jam memakai energi 10 × 10 = 100 watt-jam. Sebuah AC 1000 W menyala 1 jam juga memakai 1000 × 1 = 1000 watt-jam. Lihat: alat kecil yang menyala lama dan alat besar yang menyala sebentar sama-sama bisa boros. Yang menentukan tagihan adalah <strong>daya dikali waktu</strong>, bukan hanya besar dayanya. Belum rumus formal, baru hitung-hitung pemakaian.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu satu kWh",
        html: "<strong>Satu kilowatt-jam (kWh)</strong> adalah energi yang dipakai alat berdaya 1000 watt selama 1 jam. Inilah satuan yang dicatat meteran dan ditagih PLN. Biaya = jumlah kWh × tarif per kWh.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Energi Harian Beberapa Alat (kWh per hari)",
        unit: "kWh per hari",
        source: "perhitungan daya × waktu pemakaian khas",
        note: "AC menyala 8 jam menyedot energi jauh lebih besar daripada lampu menyala 10 jam. Angka ini nyata dari daya dikali lama pakai, bukan persentase.",
        data: [
          { label: "Lampu 10 W ×10 jam", value: 0.1, color: "#a3e635" },
          { label: "TV 80 W ×5 jam", value: 0.4, color: "#4ade80" },
          { label: "Kulkas 100 W ×24 jam", value: 2.4, color: "#22d3ee" },
          { label: "AC 800 W ×8 jam", value: 6.4, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah AC 800 watt menyala 5 jam. Berapa energi yang dipakai dalam kWh? (gunakan W = P × t)",
        answer: 4,
        tolerance: 0.01,
        suffix: " kWh",
        solution:
          "W = P × t = 0,8 kW × 5 jam = <strong>4 kWh</strong> (ingat 800 W = 0,8 kW). Inilah energi yang masuk tagihan.",
        hint: "Ubah watt ke kilowatt (bagi 1000), lalu kalikan dengan jam.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika tarif PLN Rp1.500 per kWh, berapa biaya memakai energi 4 kWh tadi?",
        answer: 6000,
        tolerance: 1,
        prefix: "Rp",
        solution:
          "Biaya = energi × tarif = 4 kWh × Rp1.500 = <strong>Rp6.000</strong>. Energi yang menentukan rupiah, bukan arus atau tegangan saja.",
        hint: "Kalikan jumlah kWh dengan tarif per kWh.",
      },
      {
        type: "calcExercise",
        prompt:
          "Lampu 20 watt menyala 100 jam sebulan. Berapa energinya dalam kWh?",
        answer: 2,
        tolerance: 0.01,
        suffix: " kWh",
        solution:
          "W = P × t = 0,02 kW × 100 jam = <strong>2 kWh</strong> (20 W = 0,02 kW). Daya kecil pun menumpuk jika menyala lama.",
        hint: "20 W = 0,02 kW; kalikan dengan jumlah jam.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang energi dan biaya listrik sebagai benar atau salah.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "1 kWh = energi alat 1000 W selama 1 jam", bucket: "Benar" },
          { text: "Yang ditagih PLN adalah tegangan", bucket: "Salah" },
          { text: "Energi = daya × waktu", bucket: "Benar" },
          { text: "Alat kecil yang menyala lama tidak pernah boros", bucket: "Salah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menghemat Tagihan Tanpa Hidup Susah",
        html: "Sebuah keluarga kaget tagihannya membengkak. Setelah dihitung, ternyata pemanas air 1500 W yang menyala 3 jam tiap hari menyumbang 1,5 × 3 = 4,5 kWh per hari, atau sekitar 135 kWh sebulan. Dengan mengurangi pemakaian jadi 1 jam, hematnya 90 kWh sebulan, setara puluhan ribu hingga ratusan ribu rupiah. Memahami rumus W = P × t mengubah kebiasaan kecil menjadi penghematan nyata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Dari menelusuri meteran, kita rangkum. Energi listrik adalah daya dikali waktu: <strong>W = P × t</strong>. Bila P dalam kilowatt dan t dalam jam, hasilnya langsung dalam <strong>kWh</strong>. Biaya listrik = <strong>jumlah kWh × tarif per kWh</strong>. Inilah yang sesungguhnya kita bayar: energi, bukan arus atau tegangan sendirian.",
      },
      {
        type: "takeaways",
        items: [
          "Energi listrik: W = P × t; jika P dalam kW dan t dalam jam, satuannya kWh.",
          "Satu kWh = energi alat 1000 watt selama 1 jam.",
          "Biaya listrik = jumlah kWh × tarif per kWh.",
          "Alat berdaya kecil pun boros jika menyala sangat lama; yang menentukan adalah daya kali waktu.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Energi listrik dihitung dengan rumus?",
            options: ["W = P / t", "W = P × t", "W = P + t", "W = t / P"],
            answer: 1,
            explain: "Energi = daya dikali waktu: W = P × t.",
          },
          {
            q: "Satu kWh sama dengan energi alat?",
            options: [
              "1 watt selama 1 jam",
              "1000 watt selama 1 jam",
              "1000 watt selama 1 detik",
              "1 watt selama 1 detik",
            ],
            answer: 1,
            explain: "1 kWh = 1000 W selama 1 jam.",
          },
          {
            q: "Alat 500 W menyala 4 jam. Energinya?",
            options: ["2 kWh", "2000 kWh", "0,125 kWh", "125 kWh"],
            answer: 0,
            explain: "W = 0,5 kW × 4 jam = 2 kWh.",
          },
          {
            q: "Tarif Rp1.400/kWh, pemakaian 3 kWh. Biayanya?",
            options: ["Rp4.200", "Rp1.400", "Rp420", "Rp4.667"],
            answer: 0,
            explain: "Biaya = 3 × Rp1.400 = Rp4.200.",
          },
          {
            q: "Yang sebenarnya kita bayar ke PLN adalah?",
            options: ["Arus", "Tegangan", "Energi (kWh)", "Hambatan"],
            answer: 2,
            explain: "Yang ditagih adalah energi dalam kWh, yaitu daya kali waktu.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "alat-listrik-rumah-tangga",
    levelId: "energi-daya-listrik",
    order: 3,
    title: "Alat Listrik Rumah Tangga",
    summary:
      "Setrika, lampu, kipas, kulkas: semua mengubah listrik jadi bentuk energi lain. Dari fungsinya, kita pahami ke mana energi listrik pergi.",
    durationMin: 13,
    tags: ["fisika", "listrik", "alat", "konversi-energi", "rumah-tangga"],
    blocks: [
      {
        type: "paragraph",
        html: "Setrika jadi panas, lampu jadi terang, kipas jadi angin, speaker jadi suara. Semua alat ini meminum energi listrik yang sama, lalu mengubahnya jadi bentuk energi yang berbeda-beda. Memahami ke mana energi pergi membantu kita memakai listrik dengan cerdas. Mari amati konversi energi tiap alat dulu, baru rumus daya dan efisiensinya kita rangkum.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Listrik Berubah Bentuk",
        caption: "Tiap alat mengubah energi listrik menjadi panas, cahaya, gerak, atau suara.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang tiap alat saat bekerja. Setrika dan pemanas: hampir semua listrik jadi <strong>panas</strong> (memang itu tujuannya). Kipas dan mesin cuci: listrik jadi <strong>gerak</strong>. Lampu LED: listrik jadi <strong>cahaya</strong> dengan sedikit panas. Lampu pijar: justru kebanyakan jadi panas, hanya sedikit cahaya, makanya boros. Amati: alat yang baik mengubah energi ke bentuk yang kita inginkan, bukan terbuang jadi panas percuma. Belum rumus, baru pengamatan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Efisiensi alat",
        html: "<strong>Efisiensi</strong> adalah seberapa besar energi listrik berubah menjadi bentuk yang kita inginkan. Lampu LED jauh lebih efisien daripada lampu pijar: untuk terang yang sama, LED butuh daya jauh lebih kecil karena tidak banyak energi terbuang jadi panas.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Daya untuk Tingkat Terang yang Setara",
        unit: "watt",
        source: "perbandingan lampu pasaran",
        note: "Untuk cahaya yang kira-kira sama, lampu pijar butuh 60 W sementara LED cukup 8 W. Selisih 52 W terbuang jadi panas pada lampu pijar. Angka watt ini nyata.",
        data: [
          { label: "Lampu pijar", value: 60, color: "#f87171" },
          { label: "Lampu hemat (CFL)", value: 15, color: "#fbbf24" },
          { label: "Lampu LED", value: 8, color: "#a3e635" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap alat dengan bentuk energi utama yang dihasilkannya.",
        pairs: [
          { left: "Setrika", right: "energi panas" },
          { left: "Lampu LED", right: "energi cahaya" },
          { left: "Kipas angin", right: "energi gerak" },
          { left: "Speaker", right: "energi suara" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Lampu pijar 60 W diganti LED 8 W untuk terang yang sama. Berapa watt daya yang dihemat tiap lampu?",
        answer: 52,
        tolerance: 0.5,
        suffix: " W",
        solution:
          "Penghematan daya = 60 − 8 = <strong>52 watt</strong> tiap lampu. Itulah energi yang tadinya terbuang jadi panas pada lampu pijar.",
        hint: "Kurangi daya lampu pijar dengan daya LED.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kulkas 100 W menyala terus selama 24 jam. Berapa energi yang dipakainya dalam kWh?",
        answer: 2.4,
        tolerance: 0.01,
        suffix: " kWh",
        solution:
          "W = P × t = 0,1 kW × 24 jam = <strong>2,4 kWh</strong>. Kulkas berdaya sedang tapi menyala terus, jadi penyumbang tetap tagihan.",
        hint: "100 W = 0,1 kW; kalikan dengan 24 jam.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap alat berdasarkan bentuk energi utama yang dihasilkan.",
        buckets: ["Terutama panas", "Terutama gerak"],
        items: [
          { text: "Pemanas air", bucket: "Terutama panas" },
          { text: "Mesin cuci", bucket: "Terutama gerak" },
          { text: "Rice cooker", bucket: "Terutama panas" },
          { text: "Pompa air", bucket: "Terutama gerak" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengganti Semua Lampu Rumah ke LED",
        html: "Sebuah rumah punya 10 lampu pijar 60 W yang menyala rata-rata 5 jam sehari. Energinya: 10 × 0,06 kW × 5 jam = 3 kWh per hari. Diganti LED 8 W: 10 × 0,008 kW × 5 jam = 0,4 kWh per hari. Hemat 2,6 kWh tiap hari, sekitar 78 kWh sebulan. Penghematan ini lahir bukan dari mengurangi kenyamanan, melainkan dari memilih alat yang lebih efisien. Fisika energi langsung berdampak ke dompet.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Dari mengamati ke mana energi pergi, kita rangkum. Tiap alat mengubah energi listrik dengan daya <strong>P = V × I</strong> menjadi panas, cahaya, gerak, atau suara. Energi yang dipakainya <strong>W = P × t</strong>. <strong>Efisiensi</strong> = energi berguna ÷ energi listrik total. Memilih alat efisien (LED, inverter) berarti P lebih kecil untuk hasil yang sama, sehingga W dan biaya turun. Rumus lama, makna baru: hemat energi.",
      },
      {
        type: "takeaways",
        items: [
          "Tiap alat mengubah energi listrik menjadi panas, cahaya, gerak, atau suara.",
          "Daya alat: P = V × I; energi yang dipakai: W = P × t.",
          "Efisiensi = energi berguna dibagi energi listrik total; LED jauh lebih efisien dari lampu pijar.",
          "Memilih alat efisien menurunkan daya untuk hasil sama, sehingga tagihan turun tanpa mengurangi kenyamanan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Setrika mengubah energi listrik terutama menjadi?",
            options: ["Energi cahaya", "Energi panas", "Energi suara", "Energi kimia"],
            answer: 1,
            explain: "Setrika dirancang mengubah listrik menjadi panas.",
          },
          {
            q: "Mengapa lampu LED lebih hemat dari lampu pijar?",
            options: [
              "Karena LED lebih murah",
              "Karena LED tidak butuh tegangan",
              "Karena LED lebih efisien, sedikit energi terbuang jadi panas",
              "Karena LED lebih besar",
            ],
            answer: 2,
            explain: "LED mengubah lebih banyak listrik jadi cahaya, sedikit terbuang jadi panas.",
          },
          {
            q: "Kipas angin mengubah energi listrik menjadi terutama?",
            options: ["Panas", "Gerak", "Cahaya", "Suara"],
            answer: 1,
            explain: "Kipas menghasilkan energi gerak (angin).",
          },
          {
            q: "Kulkas 150 W menyala 24 jam memakai energi?",
            options: ["3,6 kWh", "150 kWh", "0,15 kWh", "36 kWh"],
            answer: 0,
            explain: "W = 0,15 kW × 24 jam = 3,6 kWh.",
          },
          {
            q: "Efisiensi alat listrik berarti?",
            options: [
              "Seberapa mahal alatnya",
              "Bagian energi yang berubah jadi bentuk yang diinginkan",
              "Besar tegangan kerjanya",
              "Berat alatnya",
            ],
            answer: 1,
            explain: "Efisiensi = energi berguna dibagi energi listrik total.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "keselamatan-listrik",
    levelId: "energi-daya-listrik",
    order: 4,
    title: "Keselamatan Listrik",
    summary:
      "Listrik menyalakan rumah tapi juga bisa mencelakai. Dari sekring, grounding, sampai korsleting, kita pahami cara fisika melindungi kita.",
    durationMin: 13,
    tags: ["fisika", "listrik", "keselamatan", "sekring", "grounding"],
    blocks: [
      {
        type: "paragraph",
        html: "Listrik yang sama yang menyalakan lampu bisa membakar rumah atau menyetrum nyawa jika lepas kendali. Tapi instalasi modern penuh dengan pelindung cerdas: sekring, MCB, grounding, dan saklar pemutus. Semuanya bekerja dengan prinsip fisika yang sudah kita pelajari. Mari amati bahaya dan pelindungnya dulu, baru aturan keselamatannya kita rangkum.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Saat Arus Lepas Kendali",
        caption: "Korsleting membuat hambatan nyaris nol, sehingga arus melonjak berbahaya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua kabel telanjang bersentuhan: hambatan di antaranya nyaris <strong>nol</strong>. Dari Hukum Ohm I = V/R, jika R mendekati nol, arus melonjak sangat besar, inilah <strong>korsleting</strong>. Arus raksasa ini memanaskan kabel dalam sekejap dan bisa memicu kebakaran. Maka dipasang <strong>sekring</strong>: kawat tipis yang sengaja meleleh saat arus berlebih, memutus rangkaian sebelum bahaya. Belum aturan formal, baru memahami sebabnya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga pelindung utama",
        html: "<strong>Sekring/MCB</strong> memutus arus saat melebihi batas aman (mencegah kabel terbakar). <strong>Grounding (pembumian)</strong> mengalirkan arus bocor ke tanah agar tidak lewat tubuh kita. <strong>Isolator</strong> (pembungkus karet/plastik) mencegah kita menyentuh konduktor bertegangan.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Lonjakan Arus saat Korsleting (V tetap 220 V)",
        unit: "ampere",
        source: "perhitungan I = V/R",
        note: "Saat hambatan anjlok dari 220 Ω (normal) ke 0,5 Ω (korsleting), arus melonjak dari 1 A menjadi 440 A. Lonjakan inilah yang memicu sekring memutus. Angka ini nyata dari Hukum Ohm.",
        data: [
          { label: "Normal (220 Ω)", value: 1, color: "#a3e635" },
          { label: "Beban berat (22 Ω)", value: 10, color: "#fbbf24" },
          { label: "Korsleting (0,5 Ω)", value: 440, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Saat korsleting, hambatan turun jadi 0,5 Ω pada tegangan 220 V. Berapa arus yang mengalir? (gunakan I = V / R)",
        answer: 440,
        tolerance: 1,
        suffix: " A",
        solution:
          "I = V / R = 220 / 0,5 = <strong>440 ampere</strong>. Arus sebesar ini jauh melampaui batas aman, itulah kenapa sekring harus segera memutus.",
        hint: "Bagi tegangan dengan hambatan yang sangat kecil.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah rumah dilindungi sekring 6 A pada 220 V. Berapa daya maksimum yang boleh dipakai sebelum sekring putus? (gunakan P = V × I)",
        answer: 1320,
        tolerance: 1,
        suffix: " W",
        solution:
          "P = V × I = 220 × 6 = <strong>1320 watt</strong>. Melebihi daya ini, arus naik di atas 6 A dan sekring memutus demi keamanan.",
        hint: "Kalikan tegangan dengan arus maksimum sekring.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap tindakan sebagai aman atau berbahaya.",
        buckets: ["Aman", "Berbahaya"],
        items: [
          { text: "Memakai alas kaki karet saat memperbaiki listrik", bucket: "Aman" },
          { text: "Menyentuh kabel telanjang dengan tangan basah", bucket: "Berbahaya" },
          { text: "Memasang grounding pada alat logam", bucket: "Aman" },
          { text: "Menumpuk banyak colokan pada satu stop kontak", bucket: "Berbahaya" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap pelindung dengan cara kerjanya.",
        pairs: [
          { left: "Sekring / MCB", right: "memutus arus saat berlebih" },
          { left: "Grounding", right: "mengalirkan arus bocor ke tanah" },
          { left: "Isolator", right: "mencegah sentuhan ke konduktor" },
          { left: "Saklar fasa", right: "memutus tegangan dari sumber" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Bahaya Listrik Naik saat Basah",
        html: "Air, apalagi yang mengandung garam dan kotoran, adalah <strong>konduktor</strong> yang cukup baik. Kulit kering punya hambatan tinggi (ratusan ribu ohm), tapi kulit basah hambatannya anjlok drastis. Dari I = V/R, hambatan yang kecil membuat arus lewat tubuh melonjak pada tegangan yang sama. Itulah sebabnya menyentuh alat listrik dengan tangan basah, atau memakai HP di kamar mandi yang sedang dicas, jauh lebih berbahaya. Fisika hambatan langsung soal nyawa.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Dari memahami bahaya, kita rangkum. Korsleting = hambatan mendekati nol, sehingga dari <strong>I = V / R</strong> arus melonjak sangat besar dan memanaskan kabel. <strong>Sekring/MCB</strong> putus saat arus melewati batas, dengan daya batas <strong>P = V × I</strong>. <strong>Grounding</strong> memberi jalur hambatan rendah ke tanah agar arus bocor tidak lewat tubuh. Semua pelindung ini adalah penerapan langsung Hukum Ohm dan daya, bukan aturan hafalan.",
      },
      {
        type: "takeaways",
        items: [
          "Korsleting membuat R mendekati nol, sehingga arus melonjak (I = V/R) dan dapat memicu kebakaran.",
          "Sekring/MCB memutus arus saat melebihi batas; daya batas P = V × I.",
          "Grounding mengalirkan arus bocor ke tanah agar tidak lewat tubuh; isolator mencegah sentuhan.",
          "Tubuh basah berhambatan rendah, sehingga arus lewat tubuh melonjak; hindari listrik saat basah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa korsleting menghasilkan arus sangat besar?",
            options: [
              "Karena tegangan naik tajam",
              "Karena hambatan mendekati nol (I = V/R)",
              "Karena daya menjadi nol",
              "Karena kabel memanjang",
            ],
            answer: 1,
            explain: "Hambatan nyaris nol membuat I = V/R melonjak besar.",
          },
          {
            q: "Fungsi utama sekring atau MCB adalah?",
            options: [
              "Menaikkan tegangan",
              "Memutus arus saat melebihi batas aman",
              "Menyimpan energi",
              "Menerangi ruangan",
            ],
            answer: 1,
            explain: "Sekring/MCB memutus rangkaian saat arus berlebih.",
          },
          {
            q: "Sekring 10 A pada 220 V memutus pada daya sekitar?",
            options: ["2200 W", "22 W", "230 W", "0,045 W"],
            answer: 0,
            explain: "P = V × I = 220 × 10 = 2200 watt.",
          },
          {
            q: "Grounding (pembumian) berfungsi untuk?",
            options: [
              "Menambah daya alat",
              "Mengalirkan arus bocor ke tanah agar tidak lewat tubuh",
              "Menaikkan tegangan",
              "Mempercepat arus",
            ],
            answer: 1,
            explain: "Grounding memberi jalur aman arus bocor ke tanah.",
          },
          {
            q: "Mengapa menyentuh listrik dengan tangan basah berbahaya?",
            options: [
              "Karena air menaikkan tegangan",
              "Karena hambatan tubuh basah turun, arus lewat tubuh melonjak",
              "Karena air menambah daya",
              "Karena tangan basah jadi isolator",
            ],
            answer: 1,
            explain: "Tubuh basah berhambatan rendah, sehingga arus lewat tubuh besar (I = V/R).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "efek-pemanasan-joule",
    levelId: "energi-daya-listrik",
    order: 5,
    title: "Efek Pemanasan Joule",
    summary:
      "Kenapa kawat yang dialiri arus selalu menghangat, dari setrika sampai sekring? Dari pengamatan panas itu, lahir Hukum Joule tentang kalor.",
    durationMin: 14,
    tags: ["fisika", "listrik", "joule", "kalor", "pemanasan"],
    blocks: [
      {
        type: "paragraph",
        html: "Charger yang hangat, setrika yang membara, lampu pijar yang panas: setiap kali arus melewati hambatan, sebagian energi listrik berubah menjadi <strong>kalor</strong> (panas). Kadang panas ini kita inginkan (pemanas), kadang terbuang percuma (kabel). James Prescott Joule mengukur dengan teliti berapa kalor yang muncul. Mari amati apa yang menentukan besar panas ini dulu, baru Hukum Joule kita rangkum di akhir.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Arus yang Berubah Jadi Panas",
        caption: "Saat muatan menembus hambatan, energinya terlepas sebagai kalor.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang kawat elemen pemanas. Saat arus kecil, hangat saja; saat arus digandakan, panasnya melonjak jauh lebih dari dua kali lipat. Ternyata kalor bergantung pada <strong>kuadrat arus</strong>: gandakan arus, kalornya empat kali lipat. Panas juga bertambah jika hambatannya lebih besar dan jika waktu menyalanya lebih lama. Tiga hal inilah, arus, hambatan, dan waktu, yang menentukan kalor. Belum ada rumus, baru pengamatan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kalor, joule, dan kalori",
        html: "<strong>Kalor (Q)</strong> adalah energi panas yang dihasilkan, satuannya joule (J). Karena kalor adalah energi, ia juga bisa dinyatakan dalam <strong>kalori</strong>: 1 kalori kira-kira 4,2 joule, sehingga 1 joule kira-kira 0,24 kalori. Kalor yang muncul di hambatan tidak hilang, ia menyebar ke sekitar sebagai panas.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kalor vs Arus pada Hambatan 10 Ω selama 1 sekon",
        unit: "joule",
        source: "perhitungan Q = I²·R·t",
        note: "Arus 1, 2, 3, 4 A menghasilkan kalor 10, 40, 90, 160 J. Perhatikan: menggandakan arus melipatempatkan kalor, karena kalor sebanding kuadrat arus. Pola melengkung ini nyata, bukan persen karangan.",
        data: [
          { label: "1 A", value: 10, color: "#a3e635" },
          { label: "2 A", value: 40, color: "#4ade80" },
          { label: "3 A", value: 90, color: "#fb923c" },
          { label: "4 A", value: 160, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Arus 2 A mengalir melalui hambatan 5 Ω selama 10 sekon. Berapa kalor yang dihasilkan? (gunakan Q = I² × R × t)",
        answer: 200,
        tolerance: 0.5,
        suffix: " J",
        solution:
          "Q = I² × R × t = 2² × 5 × 10 = 4 × 5 × 10 = <strong>200 joule</strong>. Kuadrat arus membuat panas naik cepat saat arus bertambah.",
        hint: "Kuadratkan arus dulu, lalu kalikan dengan hambatan dan waktu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah hambatan menghasilkan kalor 1000 joule. Berapa kira-kira nilainya dalam kalori? (gunakan 1 joule = 0,24 kalori)",
        answer: 240,
        tolerance: 5,
        suffix: " kalori",
        solution:
          "Q = 1000 J × 0,24 = <strong>240 kalori</strong> (sekitar segitu, karena 1 kalori kira-kira 4,2 joule). Kalor dan energi listrik adalah hal yang sama dalam satuan berbeda.",
        hint: "Kalikan jumlah joule dengan 0,24.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap perubahan: menaikkan atau menurunkan kalor Joule yang dihasilkan.",
        buckets: ["Menaikkan kalor", "Menurunkan kalor"],
        items: [
          { text: "Arus digandakan (R dan t tetap)", bucket: "Menaikkan kalor" },
          { text: "Waktu menyala diperpanjang", bucket: "Menaikkan kalor" },
          { text: "Hambatan diperkecil pada arus tetap", bucket: "Menurunkan kalor" },
          { text: "Arus diputus menjadi nol", bucket: "Menurunkan kalor" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pemanas Celup Memanaskan Air",
        html: "Sebuah pemanas celup berdaya 350 watt dicelupkan ke segelas air dan dinyalakan 5 menit (300 sekon). Karena daya adalah laju energi, kalor yang dilepasnya: Q = P × t = 350 × 300 = <strong>105.000 joule</strong> (105 kJ). Energi sebesar ini berpindah ke air dan menaikkan suhunya. Inilah efek pemanasan Joule yang berguna: seluruh daya listrik sengaja diubah menjadi kalor. Pada kabel biasa, kalor seperti ini justru kerugian yang ingin ditekan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Pengukuran Joule tadi punya nama: <strong>Hukum Joule</strong>. Kalor yang dihasilkan hambatan: <strong>Q = I² × R × t</strong> (dalam joule). Karena V = IR dan P = VI, bentuk ini setara dengan Q = V·I·t = P·t. Dalam satuan kalori, Q = 0,24 × I² × R × t. Rumus ini lahir dari pengamatan 'panas naik seiring kuadrat arus', bukan dari hafalan.",
      },
      {
        type: "takeaways",
        items: [
          "Efek pemanasan Joule: arus yang melewati hambatan mengubah energi listrik menjadi kalor.",
          "Hukum Joule: Q = I² × R × t (joule), setara dengan Q = P × t.",
          "Kalor sebanding kuadrat arus: menggandakan arus melipatempatkan panas.",
          "Dalam kalori: Q = 0,24 × I² × R × t, karena 1 joule kira-kira 0,24 kalori.",
          "Panas ini berguna pada pemanas, tetapi merupakan kerugian pada kabel penghantar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Joule menyatakan kalor Q sama dengan?",
            options: ["I × R × t", "I² × R × t", "I × R² × t", "I² × R / t"],
            answer: 1,
            explain: "Kalor pada hambatan: Q = I² × R × t.",
          },
          {
            q: "Jika arus digandakan (R dan t tetap), kalor menjadi?",
            options: ["Dua kali", "Empat kali", "Setengahnya", "Tetap"],
            answer: 1,
            explain: "Kalor sebanding kuadrat arus, jadi 2² = 4 kali lipat.",
          },
          {
            q: "Arus 3 A melewati hambatan 4 Ω selama 5 sekon. Kalornya?",
            options: ["60 J", "180 J", "360 J", "20 J"],
            answer: 1,
            explain: "Q = I²Rt = 9 × 4 × 5 = 180 joule.",
          },
          {
            q: "Satu joule kira-kira sama dengan berapa kalori?",
            options: ["4,2 kalori", "0,24 kalori", "1 kalori", "24 kalori"],
            answer: 1,
            explain: "1 kalori kira-kira 4,2 joule, sehingga 1 joule kira-kira 0,24 kalori.",
          },
          {
            q: "Mengapa kawat sekring meleleh saat arus berlebih?",
            options: [
              "Karena tegangannya hilang",
              "Karena kalor Joule (Q = I²Rt) melonjak dan melelehkan kawat",
              "Karena hambatannya menjadi nol",
              "Karena arus berhenti mengalir",
            ],
            answer: 1,
            explain: "Arus besar membuat kalor I²Rt melonjak, cukup untuk melelehkan kawat sekring.",
          },
        ],
      },
    ],
  },
];
