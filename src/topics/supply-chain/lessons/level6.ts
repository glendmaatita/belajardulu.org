import type { Lesson } from "../../../types";

export const level6: Lesson[] = [
  // ============================================================
  {
    id: "optimasi-rute-tms",
    levelId: "transportasi",
    order: 1,
    title: "Optimasi Rute & Transportation Management",
    summary:
      "Tiap kilometer ekstra menambah BBM, upah sopir, dan emisi. Pelajari bagaimana merancang rute yang efisien dan peran sistem manajemen transportasi.",
    durationMin: 14,
    tags: ["transportasi", "rute", "tms"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah memutuskan moda angkut, tantangan berikutnya adalah <strong>bagaimana menjalankannya seefisien mungkin</strong>. Sebuah truk yang mengantar ke sepuluh toko bisa menempuh jarak total yang sangat berbeda tergantung urutan kunjungannya. <strong>Optimasi rute</strong> mencari urutan yang memperpendek jarak dan waktu tanpa menambah armada.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Single_lane_highway.jpg?width=400",
        alt: "Jalan raya lurus membentang di antara lahan terbuka",
        caption: "Tiap kilometer di jalan ini menambah BBM, upah sopir, dan waktu. Optimasi rute menentukan urutan kunjungan agar jarak total sependek mungkin.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Apa yang dioptimalkan",
        html: "Rute yang baik menyeimbangkan <strong>jarak tempuh</strong>, <strong>jendela waktu</strong> pelanggan (kapan boleh diantar), <strong>kapasitas kendaraan</strong>, dan <strong>jam kerja sopir</strong>. Ini dikenal sebagai Vehicle Routing Problem, salah satu masalah klasik dalam riset operasi.",
      },
      {
        type: "video",
        comp: "RouteOptimizationVideo",
        title: "Optimasi Rute",
        caption: "Dari urutan kunjungan asal-asalan menjadi rute terpendek yang menghemat jarak, waktu, dan emisi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Perkirakan emisi CO2 dari satu pengiriman dan bandingkan dampak antar moda, salah satu pertimbangan penting dalam perencanaan transportasi modern.",
      },
      { type: "widget", widget: "KalkulatorJejakKarbonLogistik" },
      {
        type: "chart",
        variant: "bar",
        title: "Penghematan Jarak dari Optimasi Rute (ilustrasi)",
        unit: "km per hari per armada",
        source: "ilustrasi edukatif pola yang umum dilaporkan",
        note: "Optimasi rute kerap memangkas jarak tempuh harian belasan persen tanpa menambah satu pun kendaraan.",
        data: [
          { label: "Rute manual", value: 220, color: "#f87171" },
          { label: "Rute optimal", value: 185, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Transportation Management System (TMS)",
        html: "Sebuah distributor dengan 30 truk dulu menyusun rute manual tiap pagi, memakan waktu berjam-jam dan sering meleset. Setelah memakai <strong>TMS</strong> (Transportation Management System), perangkat lunak otomatis menyusun rute optimal mempertimbangkan pesanan, lokasi, jendela waktu, dan kapasitas. Hasilnya: jarak tempuh turun, ketepatan waktu naik, dan biaya BBM berkurang. TMS juga memberi <strong>visibilitas</strong>, posisi tiap truk terpantau secara langsung.",
      },
      {
        type: "case",
        title: "Sejarah: UPS dan strategi 'hindari belok kiri' (ORION)",
        html: "Perusahaan logistik <strong>UPS</strong> menerapkan sistem optimasi rute bernama <strong>ORION</strong> yang, antara lain, meminimalkan <strong>belok kiri</strong> (menyeberang arus lawan di lalu lintas kanan). Belok kiri berarti menunggu lama dan berisiko, memboroskan waktu dan BBM. Dengan merancang rute yang lebih banyak belok kanan, UPS dilaporkan menghemat jutaan liter bahan bakar dan mengurangi emisi tiap tahun. Pelajarannya: optimasi kecil yang konsisten, dikali jutaan pengiriman, berdampak raksasa.",
      },
      {
        type: "calcExercise",
        prompt:
          "Optimasi rute memangkas jarak harian satu armada dari 220 km menjadi 185 km. Berapa persen penghematan jaraknya?",
        answer: 15.9,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Hemat = 220 - 185 = 35 km. Persentase = 35 / 220 x 100% = <strong>15,9%</strong>. Penghematan ini berulang setiap hari, untuk setiap armada.",
        hint: "Bagi selisih jarak dengan jarak awal, lalu kali 100%.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika satu armada menghemat 35 km per hari dan beroperasi 300 hari setahun, berapa total km yang dihemat dalam setahun?",
        answer: 10500,
        tolerance: 0,
        suffix: "km",
        solution:
          "35 km x 300 hari = <strong>10.500 km</strong> per tahun, per armada. Dikalikan puluhan armada, penghematannya sangat besar.",
        hint: "Kalikan penghematan harian dengan jumlah hari operasi.",
      },
      {
        type: "takeaways",
        items: [
          "Optimasi rute mencari urutan kunjungan yang memperpendek jarak dan waktu tanpa menambah armada.",
          "Rute baik menyeimbangkan jarak, jendela waktu, kapasitas kendaraan, dan jam kerja sopir.",
          "TMS mengotomatiskan penyusunan rute dan memberi visibilitas posisi armada secara langsung.",
          "Strategi ORION UPS menunjukkan optimasi kecil yang konsisten berdampak raksasa.",
          "Penghematan jarak harian berulang tiap hari, sehingga dampak tahunannya besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan optimasi rute?",
            options: [
              "Menambah jumlah truk",
              "Memperpendek jarak dan waktu tanpa menambah armada",
              "Memperlambat pengiriman",
              "Menghapus jendela waktu pelanggan",
            ],
            answer: 1,
            explain: "Optimasi rute mencari urutan terbaik agar jarak dan waktu turun dengan armada yang ada.",
          },
          {
            q: "Faktor mana yang TIDAK termasuk pertimbangan optimasi rute?",
            options: [
              "Jendela waktu pelanggan",
              "Kapasitas kendaraan",
              "Warna cat truk",
              "Jam kerja sopir",
            ],
            answer: 2,
            explain: "Warna truk tidak relevan; jarak, waktu, kapasitas, dan jam kerja yang diperhitungkan.",
          },
          {
            q: "Apa manfaat utama TMS?",
            options: [
              "Menambah biaya administrasi",
              "Menyusun rute optimal otomatis dan memberi visibilitas armada",
              "Menggantikan semua sopir",
              "Menghapus kebutuhan gudang",
            ],
            answer: 1,
            explain: "TMS mengotomatiskan perutean dan memantau posisi armada secara langsung.",
          },
          {
            q: "Mengapa UPS meminimalkan belok kiri?",
            options: [
              "Karena dilarang hukum",
              "Karena belok kiri memboroskan waktu dan BBM saat menunggu arus lawan",
              "Karena truk tidak bisa belok kiri",
              "Karena pelanggan memintanya",
            ],
            answer: 1,
            explain: "Mengurangi belok kiri menghemat waktu tunggu, bahan bakar, dan emisi secara besar.",
          },
          {
            q: "Rute turun dari 220 km menjadi 185 km berarti hemat sekitar?",
            options: ["5%", "15,9%", "35%", "50%"],
            answer: 1,
            explain: "35 / 220 sekitar 15,9%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "perencanaan-transportasi-jaringan",
    levelId: "transportasi",
    order: 2,
    title: "Perencanaan Transportasi & Konsolidasi Muatan",
    summary:
      "Sebelum truk berjalan, jaringan dan moda harus dirancang. Pelajari cara memilih jalur, menggabungkan muatan, dan kapan memakai hub agar biaya per kilogram turun.",
    durationMin: 15,
    tags: ["transportasi", "jaringan", "konsolidasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Perencanaan transportasi menjawab pertanyaan besar sebelum kendaraan bergerak: <strong>lewat jalur mana</strong> barang mengalir, <strong>moda apa</strong> yang dipakai di tiap ruas, dan <strong>bagaimana muatan digabung</strong> agar tidak ada truk berjalan setengah kosong. Keputusan ini menentukan biaya, kecepatan, dan keandalan jauh sebelum sopir menyalakan mesin.",
      },
      {
        type: "paragraph",
        html: "Inti perencanaan adalah <strong>konsolidasi</strong>: menggabungkan banyak kiriman kecil menjadi satu muatan besar. Mengirim 10 paket terpisah ke kota yang sama jauh lebih mahal daripada menumpuknya dalam satu truk penuh. Di sinilah <strong>hub</strong> dan pusat konsolidasi berperan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Freight_Train_Cars_and_Containers_-_Spokane.png?width=400",
        alt: "Rangkaian kereta barang panjang membawa banyak peti kemas",
        caption: "Satu rangkaian kereta menyatukan banyak peti kemas dalam satu perjalanan, contoh nyata konsolidasi yang menekan biaya per kilogram.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "RouteOptimizationVideo",
        title: "Merancang Jaringan yang Efisien",
        caption: "Menyusun urutan dan jalur perjalanan agar muatan tergabung dan tidak ada kendaraan berjalan setengah kosong.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga keputusan inti",
        html: "Perencanaan transportasi menetapkan: <strong>(1) struktur jaringan</strong> (langsung antar titik atau lewat hub), <strong>(2) pemilihan moda</strong> di tiap ruas (darat, laut, kereta, udara), dan <strong>(3) kebijakan konsolidasi</strong> (kapan menunggu muatan penuh, kapan kirim segera).",
      },
      {
        type: "callout",
        tone: "info",
        title: "Jaringan langsung vs hub-and-spoke",
        html: "Pengiriman <strong>langsung</strong> (point-to-point) cepat tetapi boros bila volume tiap rute kecil. Model <strong>hub-and-spoke</strong> mengumpulkan muatan di hub lalu menyebarkannya; jarak total bisa lebih panjang tetapi truk berjalan lebih penuh sehingga biaya per kilogram turun.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan biaya, waktu, dan emisi antar moda angkut untuk satu kiriman. Inilah inti dari pemilihan moda dalam perencanaan transportasi.",
      },
      { type: "widget", widget: "KalkulatorPilihModa" },
      {
        type: "chart",
        variant: "bar",
        title: "Biaya per kilogram menurut tingkat isian truk (ilustrasi)",
        unit: "Rp per kg",
        source: "ilustrasi edukatif pola biaya tetap dibagi muatan",
        note: "Biaya tetap perjalanan dibagi muatan: makin penuh truk, makin murah per kilogram. Inilah alasan konsolidasi.",
        data: [
          { label: "Isi 40%", value: 2500, color: "#f87171" },
          { label: "Isi 70%", value: 1430, color: "#fbbf24" },
          { label: "Isi 100%", value: 1000, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Konsolidasi muatan ke Surabaya",
        html: "Sebuah distributor di Jakarta mengirim ke Surabaya. Truk berkapasitas 10 ton dengan biaya tetap sekali jalan Rp 10 juta. Bila tiap pelanggan hanya pesan 2 ton dan dikirim sendiri-sendiri, biayanya Rp 5.000 per kg. Dengan menunggu lima pesanan terkumpul menjadi 10 ton penuh dalam satu truk, biaya turun menjadi <strong>Rp 1.000 per kg</strong>. Trade-off-nya: pelanggan pertama menunggu beberapa hari sampai muatan penuh.",
      },
      {
        type: "case",
        title: "Sejarah: lahirnya hub-and-spoke FedEx (1973)",
        html: "Saat <strong>FedEx</strong> memulai operasi pengiriman semalam pada tahun <strong>sekitar 1973</strong>, pendirinya Frederick Smith memakai model <strong>hub-and-spoke</strong>: semua paket dari seluruh AS diterbangkan ke satu hub pusat di Memphis, disortir malam hari, lalu diterbangkan kembali ke kota tujuan. Walau sebuah paket bisa menempuh jarak lebih jauh lewat Memphis, model ini membuat jaringan jauh lebih sederhana dan murah dibanding menerbangkan rute langsung antar tiap pasang kota. Konsep ini kemudian ditiru maskapai dan banyak jaringan logistik dunia.",
      },
      {
        type: "calcExercise",
        prompt:
          "Truk biaya tetap Rp 10.000.000 sekali jalan, kapasitas 10 ton (10.000 kg). Jika diisi penuh, berapa biaya angkut per kg?",
        answer: 1000,
        tolerance: 0,
        prefix: "Rp",
        suffix: "per kg",
        solution:
          "Biaya per kg = Rp 10.000.000 / 10.000 kg = <strong>Rp 1.000 per kg</strong>. Membagi biaya tetap dengan muatan penuh memberi biaya satuan terendah.",
        hint: "Bagi biaya tetap dengan jumlah kilogram muatan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Truk yang sama hanya diisi 4 ton (4.000 kg). Berapa biaya angkut per kg sekarang?",
        answer: 2500,
        tolerance: 0,
        prefix: "Rp",
        suffix: "per kg",
        solution:
          "Biaya per kg = Rp 10.000.000 / 4.000 kg = <strong>Rp 2.500 per kg</strong>. Truk setengah kosong membuat biaya satuan melonjak 2,5 kali lipat dibanding truk penuh.",
        hint: "Biaya tetap tetap sama; bagi dengan muatan yang lebih kecil.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan ciri berikut ke model jaringan yang tepat.",
        buckets: ["Pengiriman langsung", "Hub-and-spoke"],
        items: [
          { text: "Cocok untuk volume besar antar dua titik tetap", bucket: "Pengiriman langsung" },
          { text: "Mengumpulkan muatan di satu titik sebelum disebar", bucket: "Hub-and-spoke" },
          { text: "Waktu transit paling singkat", bucket: "Pengiriman langsung" },
          { text: "Truk berjalan lebih penuh sehingga biaya per kg turun", bucket: "Hub-and-spoke" },
          { text: "Jumlah rute yang dikelola jauh lebih sedikit", bucket: "Hub-and-spoke" },
          { text: "Boros bila volume tiap rute kecil", bucket: "Pengiriman langsung" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Perencanaan transportasi menetapkan jaringan, moda, dan kebijakan konsolidasi sebelum kendaraan bergerak.",
          "Konsolidasi menggabungkan kiriman kecil menjadi muatan besar agar biaya per kilogram turun.",
          "Model hub-and-spoke menambah jarak tetapi menyederhanakan jaringan dan menaikkan tingkat isian truk.",
          "Biaya tetap dibagi muatan: truk penuh jauh lebih murah per kilogram daripada truk setengah kosong.",
          "Trade-off konsolidasi adalah waktu tunggu pelanggan pertama hingga muatan terkumpul.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama konsolidasi muatan?",
            options: [
              "Memperlambat semua pengiriman",
              "Menggabungkan kiriman kecil agar biaya per kilogram turun",
              "Menambah jumlah truk",
              "Menghapus kebutuhan gudang",
            ],
            answer: 1,
            explain: "Menggabungkan muatan membuat truk lebih penuh sehingga biaya tetap terbagi ke lebih banyak kilogram.",
          },
          {
            q: "Ciri model hub-and-spoke adalah?",
            options: [
              "Setiap kota dihubungkan langsung ke semua kota lain",
              "Muatan dikumpulkan di hub lalu disebar ke tujuan",
              "Tidak pernah memakai truk",
              "Selalu lebih cepat dari pengiriman langsung",
            ],
            answer: 1,
            explain: "Hub-and-spoke mengumpulkan dan menyortir muatan di hub pusat sebelum menyebarkannya.",
          },
          {
            q: "Mengapa truk setengah kosong mahal per kilogram?",
            options: [
              "Karena BBM lebih boros saat kosong",
              "Karena biaya tetap perjalanan dibagi sedikit kilogram",
              "Karena sopir minta upah lebih",
              "Karena bannya cepat aus",
            ],
            answer: 1,
            explain: "Biaya tetap sekali jalan sama saja, tetapi dibagi muatan kecil sehingga biaya satuan naik.",
          },
          {
            q: "Kelemahan utama konsolidasi adalah?",
            options: [
              "Biaya per kilogram naik",
              "Pelanggan pertama harus menunggu hingga muatan penuh",
              "Truk jadi lebih sering rusak",
              "Emisi per kilogram meningkat",
            ],
            answer: 1,
            explain: "Menunggu muatan terkumpul menambah waktu tunggu, itulah trade-off konsolidasi.",
          },
          {
            q: "Siapa yang mempopulerkan model hub-and-spoke dalam pengiriman semalam sekitar 1973?",
            options: ["UPS", "FedEx", "DHL", "Pos Indonesia"],
            answer: 1,
            explain: "FedEx memakai hub pusat di Memphis untuk menyortir dan menyebarkan paket secara nasional.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "manajemen-armada-fleet",
    levelId: "transportasi",
    order: 3,
    title: "Manajemen Armada & Telematics",
    summary:
      "Kendaraan adalah aset mahal yang menganggur sama saja membakar uang. Pelajari utilisasi armada, peran telematics, dan perawatan agar truk tetap berjalan dan aman.",
    durationMin: 15,
    tags: ["transportasi", "armada", "telematics"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah rute dan jaringan ditata, perhatian beralih ke <strong>kendaraan itu sendiri</strong>. Sebuah truk adalah aset mahal: ada cicilan, asuransi, pajak, dan penyusutan yang berjalan terus, baik truk itu mengantar barang maupun parkir diam. Manajemen armada memastikan setiap kendaraan <strong>dipakai seproduktif mungkin</strong> dan tetap dalam kondisi prima.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trailer_Truck_5.jpg?width=400",
        alt: "Sebuah truk trailer besar siap beroperasi",
        caption: "Setiap truk trailer seperti ini adalah aset mahal yang biaya tetapnya terus berjalan. Telematics memantau posisi, BBM, dan gaya mengemudi agar utilisasinya tinggi.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "RouteOptimizationVideo",
        title: "Memaksimalkan Penggunaan Armada",
        caption: "Rute yang efisien membuat tiap kendaraan menempuh jarak produktif lebih banyak dan mengurangi jam menganggur.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Utilisasi adalah rajanya",
        html: "<strong>Utilisasi armada</strong> mengukur seberapa banyak waktu dan kapasitas kendaraan benar-benar dipakai. Truk yang berjalan penuh 80% waktunya jauh lebih ekonomis daripada truk yang menganggur separuh hari, karena biaya tetapnya tersebar ke lebih banyak pengiriman.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu telematics",
        html: "<strong>Telematics</strong> adalah perangkat di kendaraan yang mengirim data secara langsung: posisi GPS, kecepatan, konsumsi BBM, jam mesin, hingga gaya mengemudi (pengereman mendadak, akselerasi kasar). Data ini membantu memantau utilisasi, menjadwalkan perawatan, dan menekan kecelakaan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Hitung jejak karbon satu pengiriman. Data konsumsi BBM dari telematics adalah bahan baku perhitungan emisi armada yang akurat.",
      },
      { type: "widget", widget: "KalkulatorJejakKarbonLogistik" },
      {
        type: "chart",
        variant: "donut",
        title: "Rincian penggunaan waktu truk dalam sehari (ilustrasi)",
        unit: "jam",
        source: "ilustrasi edukatif distribusi waktu operasi",
        note: "Banyak waktu hilang pada bongkar muat dan tunggu. Mengurangi jam menganggur adalah cara cepat menaikkan utilisasi.",
        data: [
          { label: "Berjalan bermuatan", value: 9, color: "#34d399" },
          { label: "Bongkar muat", value: 4, color: "#fbbf24" },
          { label: "Menganggur / tunggu", value: 5, color: "#f87171" },
          { label: "Perawatan", value: 1, color: "#60a5fa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: telematics menekan biaya BBM",
        html: "Sebuah perusahaan ekspedisi dengan 50 truk memasang telematics. Data menunjukkan banyak sopir membiarkan mesin <strong>menyala saat parkir</strong> (idling) dan mengerem mendadak. Setelah pelatihan berbasis data, konsumsi BBM rata-rata turun dari <strong>4 km/liter menjadi 4,4 km/liter</strong>, naik 10%. Dengan armada menempuh jutaan kilometer setahun, penghematan BBM-nya mencapai ratusan juta rupiah. Bonus: rem mendadak berkurang sehingga kecelakaan dan keausan ban turun.",
      },
      {
        type: "case",
        title: "Sejarah: GPS dibuka penuh untuk warga sipil (Mei 2000)",
        html: "GPS awalnya milik militer AS dan sengaja diberi gangguan akurasi bagi pengguna sipil lewat fitur bernama <strong>Selective Availability</strong>. Pada <strong>Mei 2000</strong>, pemerintah AS mematikan gangguan ini sehingga akurasi GPS sipil melonjak dari sekitar 100 meter menjadi beberapa meter saja. Inilah pemicu utama lahirnya navigasi kendaraan massal dan <strong>telematics armada</strong> modern: tanpa posisi yang akurat dan murah, pemantauan truk secara langsung mustahil dilakukan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah truk berjalan bermuatan 9 jam dari total 18 jam operasi harian. Berapa persen utilisasi waktu bermuatannya?",
        answer: 50,
        tolerance: 0,
        suffix: "%",
        solution:
          "Utilisasi = 9 / 18 x 100% = <strong>50%</strong>. Separuh hari truk tidak menghasilkan, ini sinyal untuk memangkas waktu tunggu dan bongkar muat.",
        hint: "Bagi jam bermuatan dengan total jam operasi, lalu kali 100%.",
      },
      {
        type: "calcExercise",
        prompt:
          "Konsumsi BBM membaik dari 4 km/liter menjadi 4,4 km/liter. Untuk menempuh 4.400 km, berapa liter BBM yang dihemat dibanding sebelumnya?",
        answer: 100,
        tolerance: 0,
        suffix: "liter",
        solution:
          "Sebelum: 4.400 / 4 = 1.100 liter. Sesudah: 4.400 / 4,4 = 1.000 liter. Hemat = 1.100 - 1.000 = <strong>100 liter</strong> untuk jarak yang sama.",
        hint: "Hitung liter pada kedua efisiensi (jarak dibagi km per liter), lalu kurangkan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah manajemen armada dengan maknanya.",
        pairs: [
          { left: "Utilisasi", right: "Porsi waktu atau kapasitas kendaraan yang benar-benar dipakai" },
          { left: "Telematics", right: "Perangkat pengirim data posisi, BBM, dan gaya mengemudi" },
          { left: "Idling", right: "Mesin menyala saat kendaraan diam, memboroskan BBM" },
          { left: "Perawatan preventif", right: "Servis terjadwal sebelum kerusakan terjadi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kendaraan adalah aset mahal yang biaya tetapnya berjalan terus, dipakai atau menganggur.",
          "Utilisasi mengukur porsi waktu dan kapasitas kendaraan yang benar-benar produktif.",
          "Telematics mengirim data posisi, BBM, dan gaya mengemudi untuk memantau dan memperbaiki operasi.",
          "Perawatan preventif yang terjadwal mencegah kerusakan mahal dan kendaraan mogok di jalan.",
          "Akurasi GPS sipil sejak Mei 2000 memungkinkan telematics armada modern berkembang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa truk yang menganggur tetap merugikan?",
            options: [
              "Karena tidak ada biaya saat menganggur",
              "Karena biaya tetap seperti cicilan dan penyusutan tetap berjalan",
              "Karena BBM terbakar saat parkir total",
              "Karena sopir libur",
            ],
            answer: 1,
            explain: "Cicilan, asuransi, pajak, dan penyusutan berjalan terus walau truk diam.",
          },
          {
            q: "Apa yang diukur utilisasi armada?",
            options: [
              "Warna kendaraan",
              "Porsi waktu atau kapasitas kendaraan yang benar-benar dipakai",
              "Jumlah sopir",
              "Harga beli truk",
            ],
            answer: 1,
            explain: "Utilisasi mengukur seberapa produktif kendaraan dipakai dibanding kapasitasnya.",
          },
          {
            q: "Data apa yang umumnya dikirim telematics?",
            options: [
              "Hanya nama sopir",
              "Posisi GPS, konsumsi BBM, dan gaya mengemudi",
              "Hanya warna cat",
              "Hanya tahun pembuatan truk",
            ],
            answer: 1,
            explain: "Telematics mengirim posisi, kecepatan, BBM, jam mesin, dan pola mengemudi secara langsung.",
          },
          {
            q: "Apa itu idling?",
            options: [
              "Truk melaju kencang",
              "Mesin menyala saat kendaraan diam dan memboroskan BBM",
              "Servis berkala",
              "Mengganti ban",
            ],
            answer: 1,
            explain: "Idling adalah mesin hidup tanpa kendaraan bergerak, membakar BBM sia-sia.",
          },
          {
            q: "Peristiwa apa pada Mei 2000 yang mendorong telematics armada?",
            options: [
              "GPS pertama kali diluncurkan",
              "Gangguan akurasi GPS untuk sipil (Selective Availability) dimatikan",
              "Smartphone pertama dirilis",
              "Internet ditemukan",
            ],
            answer: 1,
            explain: "Mematikan Selective Availability membuat GPS sipil akurat hingga beberapa meter.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "manajemen-carrier-pengangkut",
    levelId: "transportasi",
    order: 4,
    title: "Manajemen Carrier & Kinerja Pengangkut",
    summary:
      "Banyak perusahaan tidak punya truk sendiri, melainkan menyewa pengangkut. Pelajari cara memilih carrier, menyusun kontrak, dan mengukur kinerjanya secara adil.",
    durationMin: 14,
    tags: ["transportasi", "carrier", "kontrak"],
    blocks: [
      {
        type: "paragraph",
        html: "Tidak semua perusahaan memiliki armada sendiri. Banyak yang menyerahkan pengangkutan ke pihak ketiga, disebut <strong>carrier</strong> atau pengangkut. Mengelola hubungan dengan carrier, dari memilih, membuat kontrak, hingga menilai kinerja, adalah inti dari <strong>manajemen carrier</strong>.",
      },
      {
        type: "paragraph",
        html: "Memilih carrier termurah belum tentu paling hemat. Carrier yang sering terlambat atau merusak barang menimbulkan <strong>biaya tersembunyi</strong>: pelanggan kecewa, klaim ganti rugi, dan pengiriman ulang. Penilaian yang baik menyeimbangkan harga, keandalan, dan kualitas layanan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Aircraft_cargo_loader_at_ZRH.jpg?width=400",
        alt: "Pemuat kargo memindahkan muatan ke pesawat di bandara",
        caption: "Carrier udara, laut, atau darat masing-masing punya tarif, keandalan, dan kualitas berbeda. Manajemen carrier menilai ketiganya, bukan hanya harga termurah.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "RouteOptimizationVideo",
        title: "Mengukur Kinerja Pengangkut",
        caption: "Carrier yang andal menjalankan rute tepat waktu dan efisien, dasar untuk menilai dan memilih pengangkut secara adil.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga pilar penilaian carrier",
        html: "Carrier dinilai dari <strong>(1) tarif</strong> (harga per kiriman atau per kilometer), <strong>(2) keandalan</strong> (ketepatan waktu, sering diukur sebagai On-Time Delivery), dan <strong>(3) kualitas</strong> (tingkat kerusakan dan kehilangan barang). Skor gabungan ini menentukan alokasi muatan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Jebakan memilih yang termurah",
        html: "Carrier dengan tarif paling murah tetapi On-Time Delivery rendah bisa lebih mahal secara total. Hitung <strong>biaya total kepemilikan</strong>: tarif ditambah biaya keterlambatan, klaim kerusakan, dan kehilangan pelanggan, bukan tarif semata.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan moda yang ditawarkan berbagai carrier dari sisi biaya, waktu, dan emisi sebelum mengambil keputusan kontrak.",
      },
      { type: "widget", widget: "KalkulatorPilihModa" },
      {
        type: "chart",
        variant: "bar",
        title: "Perbandingan kinerja pengiriman tiga carrier (ilustrasi)",
        unit: "% tepat waktu",
        source: "ilustrasi edukatif skor On-Time Delivery",
        note: "Carrier termurah (C) justru paling sering terlambat. Tarif rendah tidak selalu berarti biaya total rendah.",
        data: [
          { label: "Carrier A", value: 96, color: "#34d399" },
          { label: "Carrier B", value: 91, color: "#fbbf24" },
          { label: "Carrier C", value: 82, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: skor gabungan menentukan carrier",
        html: "Sebuah produsen menilai dua carrier untuk rute Jakarta-Bandung. Carrier A: tarif Rp 1.200.000, On-Time Delivery 96%, kerusakan 0,5%. Carrier C: tarif Rp 1.000.000, On-Time Delivery 82%, kerusakan 2%. Walau C lebih murah Rp 200.000, dari 100 kiriman ia terlambat 18 kali dan merusak 2 barang. Bila satu keterlambatan memicu kompensasi Rp 300.000, kerugian tambahan C mencapai jutaan rupiah, jauh melampaui selisih tarifnya. Perusahaan memilih <strong>Carrier A</strong>.",
      },
      {
        type: "case",
        title: "Sejarah: deregulasi truk AS dan ledakan carrier (1980)",
        html: "Sebelum tahun <strong>1980</strong>, industri truk di Amerika Serikat diatur ketat: tarif dan rute ditentukan pemerintah lewat lembaga bernama ICC, dan masuk ke pasar sangat sulit. Lewat <strong>Motor Carrier Act 1980</strong>, pasar dibuka lebar. Jumlah perusahaan pengangkut melonjak, tarif turun karena persaingan, dan pengirim untuk pertama kalinya bisa benar-benar <strong>memilih dan membandingkan carrier</strong>. Manajemen carrier sebagai disiplin modern, menilai dan menyeleksi pengangkut, tumbuh dari era kompetisi ini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 100 kiriman, Carrier C terlambat pada 18 kiriman. Bila tiap keterlambatan memicu kompensasi Rp 300.000, berapa total biaya keterlambatannya?",
        answer: 5400000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "18 keterlambatan x Rp 300.000 = <strong>Rp 5.400.000</strong>. Biaya tersembunyi ini jauh melebihi selisih tarif Rp 200.000 per kiriman terhadap Carrier A.",
        hint: "Kalikan jumlah keterlambatan dengan kompensasi per keterlambatan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Carrier A mengirim tepat waktu 96 dari 100 kiriman. Berapa persen tingkat keterlambatannya?",
        answer: 4,
        tolerance: 0,
        suffix: "%",
        solution:
          "Terlambat = 100 - 96 = 4 kiriman. Persentase = 4 / 100 x 100% = <strong>4%</strong>. On-Time Delivery 96% berarti tingkat keterlambatan 4%.",
        hint: "Keterlambatan adalah 100% dikurangi persentase tepat waktu.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap faktor ke pilar penilaian carrier yang sesuai.",
        buckets: ["Tarif", "Keandalan", "Kualitas"],
        items: [
          { text: "Harga per kilometer", bucket: "Tarif" },
          { text: "Persentase On-Time Delivery", bucket: "Keandalan" },
          { text: "Tingkat kerusakan barang", bucket: "Kualitas" },
          { text: "Biaya per kiriman", bucket: "Tarif" },
          { text: "Konsistensi waktu transit", bucket: "Keandalan" },
          { text: "Tingkat kehilangan paket", bucket: "Kualitas" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Carrier adalah pengangkut pihak ketiga yang dipakai saat perusahaan tidak punya armada sendiri.",
          "Penilaian carrier menimbang tarif, keandalan (On-Time Delivery), dan kualitas (kerusakan dan kehilangan).",
          "Carrier termurah bisa paling mahal secara total karena biaya keterlambatan dan klaim.",
          "Hitung biaya total kepemilikan, bukan tarif semata, saat memilih pengangkut.",
          "Deregulasi truk AS 1980 melahirkan kompetisi yang memungkinkan manajemen carrier modern.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Siapa yang disebut carrier?",
            options: [
              "Pelanggan akhir",
              "Pengangkut pihak ketiga yang menjalankan pengiriman",
              "Pemilik gudang",
              "Petugas bea cukai",
            ],
            answer: 1,
            explain: "Carrier adalah pihak ketiga yang menyediakan jasa angkut bagi perusahaan.",
          },
          {
            q: "Mengapa carrier termurah belum tentu paling hemat?",
            options: [
              "Karena tarif murah selalu palsu",
              "Karena keterlambatan dan kerusakan menimbulkan biaya tersembunyi",
              "Karena truknya selalu lebih kecil",
              "Karena pasti menolak kontrak",
            ],
            answer: 1,
            explain: "Biaya keterlambatan, klaim, dan kehilangan pelanggan bisa melebihi penghematan tarif.",
          },
          {
            q: "On-Time Delivery 96% berarti?",
            options: [
              "96% kiriman terlambat",
              "96% kiriman tiba tepat waktu",
              "Tarif naik 96%",
              "96% truk rusak",
            ],
            answer: 1,
            explain: "On-Time Delivery mengukur persentase kiriman yang tiba tepat waktu.",
          },
          {
            q: "Apa yang dimaksud biaya total kepemilikan dalam memilih carrier?",
            options: [
              "Hanya tarif angkut",
              "Tarif ditambah biaya keterlambatan, klaim, dan kehilangan pelanggan",
              "Hanya harga BBM",
              "Hanya gaji sopir",
            ],
            answer: 1,
            explain: "Biaya total mencakup semua konsekuensi, bukan hanya harga tarif di muka.",
          },
          {
            q: "Apa dampak Motor Carrier Act 1980 di AS?",
            options: [
              "Melarang perusahaan truk swasta",
              "Membuka pasar sehingga jumlah carrier melonjak dan tarif turun",
              "Menaikkan semua tarif angkut",
              "Menghapus industri truk",
            ],
            answer: 1,
            explain: "Deregulasi 1980 membuka kompetisi, menurunkan tarif, dan memungkinkan pengirim memilih carrier.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "optimasi-biaya-angkut-ltl-ftl",
    levelId: "transportasi",
    order: 5,
    title: "Optimasi Biaya Angkut: LTL, FTL & Backhaul",
    summary:
      "Memilih truk penuh atau berbagi, memanfaatkan perjalanan pulang, dan memahami fuel surcharge. Pelajari cara menekan biaya angkut tanpa mengorbankan layanan.",
    durationMin: 15,
    tags: ["transportasi", "biaya", "ltl-ftl"],
    blocks: [
      {
        type: "paragraph",
        html: "Biaya angkut bisa ditekan dengan keputusan cerdas tentang <strong>bagaimana</strong> mengisi dan menjalankan truk. Tiga tuas utamanya: memilih antara muatan penuh atau berbagi (<strong>FTL vs LTL</strong>), memanfaatkan perjalanan pulang yang biasanya kosong (<strong>backhaul</strong>), dan memahami biaya bahan bakar yang berfluktuasi (<strong>fuel surcharge</strong>).",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trailer_Truck_5.jpg?width=400",
        alt: "Truk trailer pengangkut barang di jalan",
        caption: "Truk penuh (FTL) atau berbagi ruang (LTL), dan jangan pulang kosong: mengisi perjalanan balik lewat backhaul membagi biaya pulang-pergi ke dua muatan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "RouteOptimizationVideo",
        title: "Menekan Biaya Angkut",
        caption: "Merancang perjalanan agar truk berjalan penuh dan tidak ada ruas kosong, kunci menurunkan biaya per kiriman.",
      },
      {
        type: "callout",
        tone: "key",
        title: "FTL vs LTL",
        html: "<strong>FTL (Full Truckload)</strong>: menyewa satu truk penuh untuk satu pengirim, ideal bila muatan besar. <strong>LTL (Less than Truckload)</strong>: berbagi satu truk dengan pengirim lain dan hanya membayar porsi ruang yang dipakai, hemat untuk muatan kecil. Aturan praktisnya: muatan kecil pakai LTL, muatan besar pakai FTL.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Backhaul: jangan pulang kosong",
        html: "Setelah mengantar, truk sering kembali ke asal dalam keadaan <strong>kosong</strong>, sebuah perjalanan yang tetap memakan BBM dan upah. <strong>Backhaul</strong> berarti mencari muatan untuk perjalanan pulang itu. Mengisi perjalanan balik membagi biaya pulang-pergi ke dua muatan sekaligus.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Fuel surcharge itu nyata",
        html: "Harga bahan bakar naik turun. Banyak carrier menambahkan <strong>fuel surcharge</strong>, biaya tambahan yang menyesuaikan tarif dengan harga BBM terkini. Saat menghitung anggaran transportasi, jangan lupakan komponen yang berfluktuasi ini.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan biaya dan emisi antar moda untuk menemukan kombinasi termurah bagi profil muatanmu.",
      },
      { type: "widget", widget: "KalkulatorPilihModa" },
      {
        type: "chart",
        variant: "bar",
        title: "Biaya mengirim 3 ton: FTL vs LTL (ilustrasi)",
        unit: "Rp per kiriman",
        source: "ilustrasi edukatif struktur tarif LTL dan FTL",
        note: "Untuk muatan kecil 3 ton, LTL jauh lebih murah karena hanya membayar ruang yang dipakai.",
        data: [
          { label: "FTL (truk penuh)", value: 10000000, color: "#f87171" },
          { label: "LTL (berbagi ruang)", value: 3500000, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: backhaul memangkas biaya pulang",
        html: "Sebuah pabrik di Semarang mengirim barang ke Jakarta dengan biaya satu arah Rp 6.000.000. Biasanya truk pulang kosong, tetap memakan Rp 6.000.000 BBM dan upah. Tim logistik menemukan pemasok di Jakarta yang butuh mengirim bahan baku ke Semarang. Dengan <strong>backhaul</strong>, truk membawa muatan saat pulang dan menagih Rp 4.500.000 ke pemasok itu. Biaya bersih perjalanan pulang turun dari Rp 6.000.000 menjadi <strong>Rp 1.500.000</strong>.",
      },
      {
        type: "case",
        title: "Sejarah: krisis minyak 1973 dan lahirnya fuel surcharge",
        html: "Pada tahun <strong>1973</strong>, embargo minyak oleh negara-negara OPEC membuat harga minyak dunia melonjak beberapa kali lipat dalam hitungan bulan. Industri angkutan yang bergantung penuh pada solar terpukul keras karena tarif kontrak mereka tetap, sementara biaya BBM meroket. Dari guncangan inilah praktik <strong>fuel surcharge</strong> meluas: tarif dipisah menjadi komponen dasar plus tambahan BBM yang mengikuti harga pasar, agar carrier tidak bangkrut saat harga minyak melonjak.",
      },
      {
        type: "calcExercise",
        prompt:
          "Perjalanan pulang berbiaya Rp 6.000.000. Dengan backhaul, truk menagih Rp 4.500.000 ke pemasok lain. Berapa biaya bersih perjalanan pulang sekarang?",
        answer: 1500000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Biaya bersih = Rp 6.000.000 - Rp 4.500.000 = <strong>Rp 1.500.000</strong>. Pendapatan backhaul menutup sebagian besar biaya perjalanan balik yang tadinya kosong.",
        hint: "Kurangi biaya perjalanan pulang dengan pendapatan backhaul.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tarif dasar angkut Rp 5.000.000. Carrier menambahkan fuel surcharge 12%. Berapa total tarif yang ditagih?",
        answer: 5600000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Fuel surcharge = 12% x Rp 5.000.000 = Rp 600.000. Total = Rp 5.000.000 + Rp 600.000 = <strong>Rp 5.600.000</strong>.",
        hint: "Hitung 12% dari tarif dasar lalu tambahkan ke tarif dasar.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah optimasi biaya angkut dengan maknanya.",
        pairs: [
          { left: "FTL", right: "Menyewa satu truk penuh untuk satu pengirim" },
          { left: "LTL", right: "Berbagi ruang truk dan membayar sesuai porsi yang dipakai" },
          { left: "Backhaul", right: "Mengisi muatan pada perjalanan pulang yang biasanya kosong" },
          { left: "Fuel surcharge", right: "Biaya tambahan yang menyesuaikan tarif dengan harga BBM" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "FTL menyewa truk penuh; LTL berbagi ruang dan membayar sesuai porsi, hemat untuk muatan kecil.",
          "Backhaul mengisi perjalanan pulang yang kosong sehingga biaya pulang-pergi terbagi dua muatan.",
          "Fuel surcharge adalah tambahan tarif yang mengikuti naik turunnya harga bahan bakar.",
          "Truk pulang kosong tetap membakar BBM dan upah, jadi backhaul adalah penghematan nyata.",
          "Krisis minyak 1973 mempopulerkan pemisahan tarif dasar dan komponen BBM.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapan LTL biasanya lebih hemat daripada FTL?",
            options: [
              "Saat muatan sangat besar dan memenuhi truk",
              "Saat muatan kecil dan tidak memenuhi satu truk",
              "Saat jarak sangat jauh",
              "Saat harga BBM tinggi",
            ],
            answer: 1,
            explain: "LTL membayar hanya porsi ruang yang dipakai, ideal untuk muatan kecil.",
          },
          {
            q: "Apa itu backhaul?",
            options: [
              "Mengirim dua kali lipat barang",
              "Mengisi muatan pada perjalanan pulang yang biasanya kosong",
              "Menambah jumlah truk",
              "Membatalkan pengiriman",
            ],
            answer: 1,
            explain: "Backhaul memanfaatkan perjalanan balik agar tidak pulang kosong dan membagi biaya.",
          },
          {
            q: "Apa fungsi fuel surcharge?",
            options: [
              "Menurunkan tarif saat permintaan tinggi",
              "Menyesuaikan tarif dengan harga BBM yang berfluktuasi",
              "Menggratiskan pengiriman",
              "Mengganti upah sopir",
            ],
            answer: 1,
            explain: "Fuel surcharge melindungi carrier dari lonjakan harga bahan bakar dengan menambah komponen BBM.",
          },
          {
            q: "Biaya pulang Rp 6.000.000, backhaul menagih Rp 4.500.000. Biaya bersih pulang?",
            options: ["Rp 6.000.000", "Rp 4.500.000", "Rp 1.500.000", "Rp 10.500.000"],
            answer: 2,
            explain: "Rp 6.000.000 dikurangi pendapatan backhaul Rp 4.500.000 sama dengan Rp 1.500.000.",
          },
          {
            q: "Peristiwa apa pada 1973 yang mempopulerkan fuel surcharge?",
            options: [
              "Krisis minyak akibat embargo OPEC",
              "Penemuan mesin diesel",
              "Pembukaan Terusan Suez",
              "Deregulasi truk AS",
            ],
            answer: 0,
            explain: "Lonjakan harga minyak 1973 memaksa carrier memisahkan tarif dasar dan komponen BBM.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "transportasi-multimoda-intermodal",
    levelId: "transportasi",
    order: 6,
    title: "Transportasi Multimoda & Intermodal",
    summary:
      "Satu pengiriman jarang cukup dengan satu moda. Pelajari cara menggabungkan laut, darat, dan kereta dalam satu rantai, serta peran peti kemas yang menyatukannya.",
    durationMin: 16,
    tags: ["transportasi", "intermodal", "multimoda"],
    blocks: [
      {
        type: "paragraph",
        html: "Mengirim mesin dari Surabaya ke pedalaman Eropa tidak mungkin dengan satu moda saja. Barang naik truk ke pelabuhan, menyeberang lautan dengan kapal, lalu lanjut kereta atau truk di benua tujuan. Menggabungkan beberapa moda dalam satu rantai pengiriman inilah <strong>transportasi multimoda dan intermodal</strong>.",
      },
      {
        type: "paragraph",
        html: "Kunci yang membuat perpindahan antar moda mulus adalah <strong>peti kemas</strong> (kontainer) berukuran standar. Karena kotak yang sama bisa diangkat dari kapal ke kereta ke truk tanpa membongkar isinya, perpindahan moda menjadi cepat, murah, dan minim kerusakan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg?width=400",
        alt: "Kapal kontainer besar bermuatan tumpukan peti kemas",
        caption: "Kapal kontainer menjadi tulang punggung rantai intermodal: peti kemas standar berpindah dari truk ke kapal ke kereta tanpa membongkar isinya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "RouteOptimizationVideo",
        title: "Merangkai Banyak Moda",
        caption: "Memilih moda terbaik untuk tiap ruas perjalanan, dari truk di ujung hingga kapal untuk jarak terjauh.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Multimoda vs intermodal",
        html: "Keduanya memakai banyak moda. Bedanya pada kontrak: <strong>multimoda</strong> berarti satu operator bertanggung jawab atas seluruh perjalanan lewat satu dokumen, sedangkan <strong>intermodal</strong> menekankan perpindahan peti kemas antar moda, kerap dengan kontrak terpisah per ruas. Dalam praktik sehari-hari istilahnya sering dipakai bergantian.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kekuatan tiap moda",
        html: "Tiap moda unggul di hal berbeda: <strong>laut</strong> termurah untuk volume besar jarak jauh tetapi lambat; <strong>kereta</strong> efisien dan hemat emisi untuk daratan jauh; <strong>truk</strong> fleksibel menjangkau titik akhir; <strong>udara</strong> tercepat tetapi termahal. Intermodal merangkai kekuatan ini.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan biaya, waktu, dan emisi tiap moda. Dalam rantai intermodal, kamu memilih moda terbaik untuk tiap ruas perjalanan.",
      },
      { type: "widget", widget: "KalkulatorPilihModa" },
      {
        type: "chart",
        variant: "bar",
        title: "Biaya angkut per ton-km menurut moda (ilustrasi)",
        unit: "indeks relatif (laut = 1)",
        source: "ilustrasi edukatif urutan biaya antar moda",
        note: "Laut paling murah per ton-km, udara paling mahal. Intermodal memakai moda murah untuk ruas panjang dan truk hanya di ujung.",
        data: [
          { label: "Laut", value: 1, color: "#34d399" },
          { label: "Kereta", value: 2, color: "#60a5fa" },
          { label: "Truk", value: 6, color: "#fbbf24" },
          { label: "Udara", value: 25, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: ekspor furnitur Jepara ke Eropa",
        html: "Sebuah eksportir furnitur di Jepara mengirim satu peti kemas ke Rotterdam. Rute intermodalnya: <strong>truk</strong> Jepara ke Pelabuhan Tanjung Emas Semarang, <strong>kapal</strong> Semarang ke Rotterdam lewat Singapura, lalu <strong>kereta dan truk</strong> ke gudang pembeli. Karena barang tetap dalam satu peti kemas sejak pabrik, tidak ada bongkar muat isi di tiap titik, sehingga risiko kerusakan dan biaya penanganan jauh lebih rendah dibanding mengangkut barang lepasan.",
      },
      {
        type: "case",
        title: "Sejarah: peti kemas pertama Malcolm McLean (1956)",
        html: "Pada tahun <strong>1956</strong>, pengusaha truk Amerika <strong>Malcolm McLean</strong> mengirim muatan dalam kotak logam standar di atas kapal Ideal X. Sebelumnya, barang dimuat satu per satu oleh banyak buruh pelabuhan, lambat dan mahal. Dengan <strong>peti kemas</strong>, satu kotak bisa berpindah dari truk ke kapal ke kereta tanpa dibongkar. Inovasi ini memangkas biaya bongkar muat secara drastis dan menjadi fondasi transportasi intermodal serta globalisasi perdagangan modern.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah rute intermodal: laut 18.000 km, kereta 600 km, dan truk 80 km. Berapa total jarak tempuh kiriman tersebut?",
        answer: 18680,
        tolerance: 0,
        suffix: "km",
        solution:
          "Total = 18.000 + 600 + 80 = <strong>18.680 km</strong>. Ruas laut mendominasi jarak, itulah sebabnya biaya per ton-km laut yang murah sangat menentukan.",
        hint: "Jumlahkan jarak ketiga ruas perjalanan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika biaya laut adalah indeks 1 per ton-km dan udara indeks 25, berapa kali lebih mahal udara dibanding laut?",
        answer: 25,
        tolerance: 0,
        suffix: "kali",
        solution:
          "25 / 1 = <strong>25 kali</strong>. Inilah alasan barang bervolume besar nyaris selalu memakai laut, bukan udara, kecuali sangat mendesak.",
        hint: "Bagi indeks biaya udara dengan indeks biaya laut.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap ciri ke moda yang paling tepat.",
        buckets: ["Laut", "Kereta", "Truk", "Udara"],
        items: [
          { text: "Termurah per ton-km untuk volume besar jarak jauh", bucket: "Laut" },
          { text: "Efisien dan hemat emisi untuk daratan jauh", bucket: "Kereta" },
          { text: "Paling fleksibel menjangkau titik pengantaran akhir", bucket: "Truk" },
          { text: "Tercepat tetapi paling mahal", bucket: "Udara" },
          { text: "Lambat tetapi cocok untuk peti kemas antar benua", bucket: "Laut" },
          { text: "Cocok untuk pengantaran door-to-door jarak pendek", bucket: "Truk" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Transportasi intermodal menggabungkan laut, kereta, dan truk dalam satu rantai pengiriman.",
          "Peti kemas standar memungkinkan perpindahan antar moda tanpa membongkar isi, cepat dan minim kerusakan.",
          "Tiap moda punya keunggulan: laut murah, kereta hemat emisi daratan, truk fleksibel, udara tercepat.",
          "Multimoda menekankan satu operator dan satu dokumen; intermodal menekankan perpindahan peti kemas.",
          "Peti kemas Malcolm McLean (1956) menjadi fondasi intermodal dan globalisasi perdagangan modern.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa kunci yang membuat perpindahan antar moda menjadi mulus?",
            options: [
              "Membongkar barang di tiap titik",
              "Peti kemas berukuran standar",
              "Menambah jumlah buruh",
              "Menghindari moda laut",
            ],
            answer: 1,
            explain: "Peti kemas standar berpindah dari kapal ke kereta ke truk tanpa membongkar isinya.",
          },
          {
            q: "Moda mana yang umumnya termurah per ton-km untuk volume besar jarak jauh?",
            options: ["Udara", "Truk", "Laut", "Sepeda motor"],
            answer: 2,
            explain: "Angkutan laut paling ekonomis per ton-km untuk volume besar lintas benua.",
          },
          {
            q: "Apa perbedaan penekanan multimoda dan intermodal?",
            options: [
              "Multimoda hanya satu moda, intermodal banyak moda",
              "Multimoda satu operator dan satu dokumen, intermodal menekankan perpindahan peti kemas",
              "Keduanya tidak memakai peti kemas",
              "Intermodal hanya untuk udara",
            ],
            answer: 1,
            explain: "Multimoda soal kontrak satu operator; intermodal soal perpindahan peti kemas antar moda.",
          },
          {
            q: "Mengapa barang bervolume besar jarang dikirim lewat udara?",
            options: [
              "Karena udara paling lambat",
              "Karena biaya udara jauh lebih mahal per ton-km",
              "Karena pesawat tidak punya ruang",
              "Karena udara dilarang untuk ekspor",
            ],
            answer: 1,
            explain: "Udara tercepat tetapi paling mahal, sehingga hanya dipakai untuk muatan mendesak atau bernilai tinggi.",
          },
          {
            q: "Apa kontribusi Malcolm McLean pada 1956?",
            options: [
              "Menciptakan pesawat kargo",
              "Mempelopori pengangkutan dengan peti kemas standar",
              "Membangun jalan tol pertama",
              "Menemukan mesin kapal uap",
            ],
            answer: 1,
            explain: "McLean mengirim muatan dalam peti kemas di kapal Ideal X, fondasi transportasi intermodal.",
          },
        ],
      },
    ],
  },
];
