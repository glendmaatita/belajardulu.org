import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "economic-order-quantity",
    levelId: "inventory",
    order: 1,
    title: "Economic Order Quantity (EOQ)",
    summary:
      "Memesan terlalu sering boros ongkos pesan; memesan terlalu banyak boros ongkos simpan. EOQ mencari titik tengah yang paling hemat.",
    durationMin: 14,
    tags: ["inventory", "eoq", "persediaan"],
    blocks: [
      {
        type: "paragraph",
        html: "Berapa banyak sebaiknya kita pesan dalam sekali order? Jawaban naif: sekalian banyak biar tidak repot. Tapi menyimpan banyak barang juga mahal: sewa gudang, modal terikat, risiko rusak. <strong>Economic Order Quantity (EOQ)</strong> adalah jumlah pesan yang menyeimbangkan dua biaya yang saling tarik-menarik ini.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Modern_warehouse_with_pallet_rack_storage_system.jpg?width=400",
        alt: "Gudang modern dengan sistem rak palet",
        caption: "Setiap palet di rak ini adalah modal yang terikat dan ruang yang dibayar; EOQ mencari jumlah pesan yang menyeimbangkan ongkos pesan dan ongkos simpan ini.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dua biaya yang berlawanan",
        html: "<strong>Biaya pesan</strong> turun bila memesan dalam jumlah besar (lebih jarang order). <strong>Biaya simpan</strong> naik bila memesan dalam jumlah besar (stok menumpuk lebih lama). EOQ adalah titik di mana jumlah keduanya paling kecil.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser kebutuhan, biaya pesan, dan biaya simpan, lalu lihat bagaimana jumlah pesan optimal dan total biaya bergeser.",
      },
      { type: "widget", widget: "KalkulatorEOQ" },
      {
        type: "video",
        comp: "EOQVideo",
        title: "Titik Hemat EOQ",
        caption: "Pertemuan kurva biaya pesan yang menurun dan biaya simpan yang menaik menghasilkan total biaya minimum.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Total Biaya Persediaan terhadap Jumlah Pesan (ilustrasi)",
        unit: "indeks biaya tahunan",
        source: "ilustrasi berdasarkan rumus EOQ",
        note: "Total biaya berbentuk cekungan: turun lalu naik. Titik terendah adalah EOQ.",
        data: [
          { label: "Q kecil", value: 95 },
          { label: "Q sedang", value: 58 },
          { label: "Q = EOQ", value: 42 },
          { label: "Q besar", value: 64 },
          { label: "Q sangat besar", value: 92 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Toko bahan bangunan memesan semen",
        html: "Sebuah toko menjual 12.000 sak semen per tahun. Biaya sekali memesan (administrasi, ongkos kirim minimum) sekitar Rp300.000, dan biaya menyimpan satu sak setahun sekitar Rp6.000. Dengan EOQ, toko menemukan jumlah pesan ideal sekitar 1.095 sak per order, memesan sekitar 11 kali setahun. Lebih sering dari itu, ongkos pesan membengkak; lebih jarang, gudang penuh dan modal terikat di tumpukan semen.",
      },
      {
        type: "case",
        title: "Sejarah: Ford W. Harris dan lahirnya rumus EOQ (1913)",
        html: "Rumus EOQ pertama kali diterbitkan oleh <strong>Ford Whitman Harris</strong> pada <strong>1913</strong>, seorang insinyur di Westinghouse. Saat itu pabrik bergulat dengan pertanyaan sederhana namun mahal: berapa banyak harus diproduksi atau dipesan sekali jalan. Harris menyederhanakannya jadi satu rumus yang menyeimbangkan biaya setup dan biaya simpan. Lebih dari seabad kemudian, rumus akar kuadrat ini masih jadi fondasi manajemen persediaan modern.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan kebutuhan tahunan 12.000 unit, biaya pesan Rp300.000 per order, dan biaya simpan Rp6.000 per unit per tahun, berapa EOQ-nya? (EOQ = akar dari 2DS/H)",
        answer: 1095,
        tolerance: 10,
        suffix: "unit",
        solution:
          "EOQ = akar(2 x 12.000 x 300.000 / 6.000) = akar(1.200.000) = sekitar <strong>1.095 unit</strong>. Inilah jumlah pesan yang meminimalkan total biaya pesan dan simpan.",
        hint: "Hitung 2 x D x S, bagi dengan H, lalu akar kuadratkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika kebutuhan tahunan 12.000 unit dan EOQ-nya 1.095 unit, kira-kira berapa kali memesan dalam setahun?",
        answer: 11,
        tolerance: 0.5,
        suffix: "kali",
        solution:
          "Frekuensi pesan = D / EOQ = 12.000 / 1.095 = sekitar <strong>11 kali</strong> per tahun, atau kira-kira sekali tiap lima minggu.",
        hint: "Bagi kebutuhan tahunan dengan jumlah per pesan.",
      },
      {
        type: "takeaways",
        items: [
          "EOQ adalah jumlah pesan yang menyeimbangkan biaya pesan dan biaya simpan.",
          "Biaya pesan turun saat order besar; biaya simpan naik saat order besar.",
          "Total biaya berbentuk cekungan; titik terendahnya adalah EOQ.",
          "Rumus EOQ = akar(2DS/H), dengan D kebutuhan, S biaya pesan, H biaya simpan.",
          "Rumus ini lahir dari Ford W. Harris pada 1913 dan masih dipakai sampai sekarang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang diseimbangkan oleh EOQ?",
            options: [
              "Biaya iklan dan biaya gaji",
              "Biaya pesan dan biaya simpan",
              "Harga jual dan harga beli",
              "Pajak dan subsidi",
            ],
            answer: 1,
            explain: "EOQ mencari titik di mana jumlah biaya pesan dan biaya simpan paling kecil.",
          },
          {
            q: "Apa yang terjadi pada biaya simpan bila kita memesan dalam jumlah sangat besar?",
            options: ["Turun", "Naik karena stok menumpuk lebih lama", "Tetap", "Menjadi nol"],
            answer: 1,
            explain: "Order besar membuat stok menumpuk lama, sehingga biaya simpan naik.",
          },
          {
            q: "Rumus EOQ adalah?",
            options: ["D x S x H", "Akar dari 2DS/H", "D + S + H", "2D / SH"],
            answer: 1,
            explain: "EOQ = akar(2DS/H), dengan D kebutuhan, S biaya pesan, H biaya simpan per unit per tahun.",
          },
          {
            q: "Siapa yang pertama menerbitkan rumus EOQ dan tahun berapa?",
            options: [
              "Peter Kraljic, 1983",
              "Ford W. Harris, 1913",
              "Taiichi Ohno, 1950",
              "Henry Ford, 1908",
            ],
            answer: 1,
            explain: "Ford Whitman Harris menerbitkan rumus EOQ pada 1913.",
          },
          {
            q: "Bentuk kurva total biaya persediaan terhadap jumlah pesan adalah?",
            options: [
              "Garis lurus naik",
              "Cekungan: turun lalu naik, dengan titik terendah di EOQ",
              "Garis lurus turun",
              "Datar sepanjang waktu",
            ],
            answer: 1,
            explain: "Total biaya turun lalu naik kembali; titik minimumnya adalah EOQ.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "safety-stock-reorder-point",
    levelId: "inventory",
    order: 2,
    title: "Safety Stock & Titik Pemesanan Ulang",
    summary:
      "Permintaan dan waktu tunggu tidak pernah pasti. Safety stock adalah bantalan agar tidak kehabisan stok, dan reorder point memberi tahu kapan harus memesan lagi.",
    durationMin: 15,
    tags: ["inventory", "safety-stock", "reorder-point", "tingkat-layanan"],
    blocks: [
      {
        type: "paragraph",
        html: "EOQ menjawab <strong>berapa banyak</strong> yang dipesan. Pertanyaan berikutnya: <strong>kapan</strong> harus memesan? Kalau menunggu stok benar-benar habis baru pesan, kita pasti kehabisan selama barang dalam perjalanan. Maka kita memesan saat stok mencapai titik tertentu, yaitu <strong>reorder point (ROP)</strong>, dan menyimpan cadangan ekstra bernama <strong>safety stock</strong>.",
      },
      {
        type: "paragraph",
        html: "Kenapa butuh cadangan? Karena dua hal tidak pernah pasti: permintaan harian bisa naik turun, dan waktu tunggu (lead time) pemasok bisa molor. Safety stock melindungi kita dari kejutan keduanya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_warehouse_full_of_USAID_goods_-_20110826-FS-LSC-0046_-_Flickr_-_USDAgov.jpg?width=400",
        alt: "Gudang penuh barang yang tersusun rapi",
        caption: "Stok cadangan yang menumpuk di gudang seperti ini adalah safety stock: bantalan agar tidak kehabisan saat permintaan melonjak atau pengiriman pemasok molor.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dua rumus inti",
        html: "<strong>Safety stock</strong> = Z x simpangan baku permintaan x akar(lead time). <strong>Reorder point</strong> = (permintaan harian rata-rata x lead time) + safety stock. Nilai <strong>Z</strong> berasal dari tingkat layanan yang diinginkan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tingkat layanan dan nilai Z",
        html: "Tingkat layanan adalah peluang tidak kehabisan stok selama lead time. Layanan 90% memakai Z sekitar 1,28; layanan 95% memakai Z sekitar 1,65; layanan 99% memakai Z sekitar 2,33. Makin tinggi layanan, makin besar safety stock yang dibutuhkan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser tingkat layanan, lead time, dan simpangan permintaan untuk melihat safety stock dan reorder point bergerak secara langsung.",
      },
      { type: "widget", widget: "KalkulatorSafetyStock" },
      {
        type: "video",
        comp: "EOQVideo",
        title: "Kapan Memesan Ulang",
        caption: "EOQ menjawab berapa banyak yang dipesan; reorder point dan safety stock menjawab kapan memesannya agar stok tidak keburu habis.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Safety Stock terhadap Tingkat Layanan (ilustrasi)",
        unit: "unit cadangan",
        source: "ilustrasi berdasarkan rumus SS = Z x sigma x akar(L)",
        note: "Naik dari 90% ke 99% melipatgandakan cadangan; layanan sempurna sangat mahal.",
        data: [
          { label: "90% (Z 1,28)", value: 38 },
          { label: "95% (Z 1,65)", value: 48 },
          { label: "98% (Z 2,05)", value: 60 },
          { label: "99% (Z 2,33)", value: 68 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Apotek menjaga stok masker",
        html: "Sebuah apotek menjual rata-rata 50 boks masker per hari dengan simpangan baku 12 boks. Lead time pemasok 6 hari. Untuk tingkat layanan 95% (Z 1,65), safety stock = 1,65 x 12 x akar(6) = sekitar 48 boks. Reorder point = (50 x 6) + 48 = 300 + 48 = <strong>348 boks</strong>. Jadi begitu stok menyentuh 348 boks, apotek memesan lagi, dan rata-rata sisa 48 boks saat barang baru tiba.",
      },
      {
        type: "case",
        title: "Sejarah: Kelangkaan masker saat COVID-19 (2020)",
        html: "Awal pandemi COVID-19 pada 2020, permintaan masker melonjak berkali lipat dalam hitungan minggu dan lead time impor membengkak. Banyak apotek dan rumah sakit yang hanya berbekal safety stock tipis langsung kehabisan. Peristiwa ini mengajarkan bahwa safety stock yang dihitung dari kondisi normal bisa runtuh saat permintaan dan lead time sama sama meledak, sehingga manajemen risiko persediaan jadi makin penting.",
      },
      {
        type: "calcExercise",
        prompt:
          "Permintaan harian rata-rata 50 unit, simpangan baku 12 unit, lead time 6 hari, tingkat layanan 95% (Z = 1,65). Berapa safety stock-nya? (SS = Z x sigma x akar L)",
        answer: 48,
        tolerance: 2,
        suffix: "unit",
        solution:
          "SS = 1,65 x 12 x akar(6) = 1,65 x 12 x 2,449 = sekitar <strong>48 unit</strong>. Inilah cadangan untuk menutup ketidakpastian selama lead time.",
        hint: "Hitung akar dari lead time dulu, lalu kalikan dengan sigma dan Z.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan permintaan harian 50 unit, lead time 6 hari, dan safety stock 48 unit, berapa reorder point-nya?",
        answer: 348,
        tolerance: 1,
        suffix: "unit",
        solution:
          "ROP = (50 x 6) + 48 = 300 + 48 = <strong>348 unit</strong>. Begitu stok menyentuh 348 unit, saatnya memesan ulang.",
        hint: "Kalikan permintaan harian dengan lead time, lalu tambahkan safety stock.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan faktor berikut: apakah ia menaikkan atau tidak memengaruhi kebutuhan safety stock?",
        buckets: ["Menaikkan safety stock", "Tidak menaikkan safety stock"],
        items: [
          { text: "Tingkat layanan dinaikkan dari 95% ke 99%", bucket: "Menaikkan safety stock" },
          { text: "Lead time pemasok bertambah panjang", bucket: "Menaikkan safety stock" },
          { text: "Permintaan jadi lebih bergejolak (sigma naik)", bucket: "Menaikkan safety stock" },
          { text: "Permintaan sangat stabil tiap hari", bucket: "Tidak menaikkan safety stock" },
          { text: "Pemasok mengirim tepat waktu dan konsisten", bucket: "Tidak menaikkan safety stock" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Safety stock adalah cadangan untuk menghadapi ketidakpastian permintaan dan lead time.",
          "Reorder point memberi tahu kapan memesan: permintaan selama lead time ditambah safety stock.",
          "Tingkat layanan menentukan nilai Z; 95% memakai Z sekitar 1,65.",
          "Layanan mendekati 100% menuntut safety stock yang jauh lebih besar dan mahal.",
          "Lead time yang panjang dan permintaan yang bergejolak sama sama membesarkan safety stock.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi safety stock?",
            options: [
              "Mempercepat produksi",
              "Bantalan terhadap ketidakpastian permintaan dan lead time",
              "Menurunkan harga jual",
              "Menggantikan reorder point",
            ],
            answer: 1,
            explain: "Safety stock melindungi dari kejutan permintaan dan waktu tunggu yang tidak pasti.",
          },
          {
            q: "Reorder point dihitung sebagai?",
            options: [
              "Safety stock dikurangi permintaan",
              "(Permintaan harian x lead time) + safety stock",
              "EOQ dibagi lead time",
              "Permintaan tahunan dibagi 12",
            ],
            answer: 1,
            explain: "ROP = permintaan selama lead time ditambah safety stock.",
          },
          {
            q: "Nilai Z untuk tingkat layanan sekitar 95% adalah?",
            options: ["0,84", "1,28", "1,65", "2,33"],
            answer: 2,
            explain: "Layanan 95% memakai Z sekitar 1,65; 90% memakai 1,28 dan 99% memakai 2,33.",
          },
          {
            q: "Apa dampak menaikkan tingkat layanan dari 95% ke 99%?",
            options: [
              "Safety stock turun",
              "Safety stock tetap",
              "Safety stock naik cukup besar",
              "Reorder point jadi nol",
            ],
            answer: 2,
            explain: "Nilai Z naik dari 1,65 ke 2,33, sehingga safety stock ikut membesar.",
          },
          {
            q: "Faktor mana yang TIDAK membesarkan safety stock?",
            options: [
              "Lead time makin panjang",
              "Permintaan makin bergejolak",
              "Permintaan harian sangat stabil",
              "Tingkat layanan dinaikkan",
            ],
            answer: 2,
            explain: "Permintaan yang stabil berarti simpangan kecil, sehingga safety stock yang dibutuhkan kecil.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "analisis-abc",
    levelId: "inventory",
    order: 3,
    title: "Analisis ABC (Prinsip Pareto)",
    summary:
      "Tidak semua barang sama pentingnya. Analisis ABC memfokuskan kontrol ketat pada sedikit barang yang menyumbang sebagian besar nilai.",
    durationMin: 14,
    tags: ["inventory", "abc", "pareto", "klasifikasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan gudang dengan 1.000 jenis barang. Mustahil memberi perhatian yang sama ke semuanya. <strong>Analisis ABC</strong> memilah barang berdasarkan kontribusinya terhadap nilai pemakaian tahunan (harga x volume), lalu memfokuskan kontrol paling ketat pada kelas yang paling bernilai.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga kelas",
        html: "<strong>Kelas A</strong>: sekitar 20% jenis barang yang menyumbang sekitar 80% nilai, dikontrol sangat ketat. <strong>Kelas B</strong>: sekitar 30% jenis, sekitar 15% nilai, kontrol sedang. <strong>Kelas C</strong>: sekitar 50% jenis, hanya sekitar 5% nilai, kontrol longgar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Prinsip Pareto (aturan 80/20)",
        html: "Analisis ABC adalah penerapan prinsip Pareto: sebagian kecil sebab menghasilkan sebagian besar akibat. Di persediaan, sedikit barang menguasai sebagian besar nilai modal yang terikat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Ubah harga dan volume tiap barang, lalu lihat bagaimana barang berpindah kelas A, B, atau C berdasarkan nilai pemakaiannya.",
      },
      { type: "widget", widget: "SimulatorABCInventory" },
      {
        type: "video",
        comp: "ABCAnalysisVideo",
        title: "Memilah Barang dengan Analisis ABC",
        caption: "Sedikit barang kelas A menguasai sebagian besar nilai; banyak barang kelas C hanya menyumbang sedikit.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Kontribusi Nilai per Kelas ABC (ilustrasi 80/15/5)",
        unit: "% nilai pemakaian tahunan",
        source: "ilustrasi prinsip Pareto",
        note: "Kelas A hanya sekitar 20% jenis barang tetapi menguasai sekitar 80% nilai.",
        data: [
          { label: "Kelas A", value: 80 },
          { label: "Kelas B", value: 15 },
          { label: "Kelas C", value: 5 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bengkel mengklasifikasi suku cadang",
        html: "Sebuah bengkel punya 10 jenis suku cadang. Dua jenis (mesin dan transmisi) bernilai pemakaian Rp800 juta dari total Rp1 miliar setahun, jadi keduanya kelas A meski hanya 20% dari jumlah jenis. Tiga jenis berikutnya menyumbang Rp150 juta (kelas B), dan lima jenis sisanya seperti baut dan klip hanya Rp50 juta (kelas C). Bengkel memantau stok kelas A hampir tiap hari, sementara baut kelas C cukup dipesan borongan sesekali.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vilfredo_Pareto_1870s2.jpg?width=400",
        alt: "Potret ekonom Italia Vilfredo Pareto",
        caption: "Vilfredo Pareto, ekonom Italia yang mengamati pola 80/20. Pengamatannya menjadi dasar analisis ABC dalam manajemen persediaan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Sejarah: Vilfredo Pareto dan kebun kacangnya (sekitar 1896)",
        html: "Ekonom Italia <strong>Vilfredo Pareto</strong> sekitar <strong>1896</strong> mengamati bahwa kira kira 80% tanah di Italia dimiliki oleh sekitar 20% penduduk. Konon ia juga memperhatikan bahwa sekitar 20% tanaman kacang di kebunnya menghasilkan sebagian besar polong. Pola 80/20 ini kemudian dikenal sebagai prinsip Pareto dan jadi dasar analisis ABC dalam manajemen persediaan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah suku cadang dipakai 5.000 unit per tahun dengan harga Rp40.000 per unit. Berapa nilai pemakaian tahunannya? (nilai = volume x harga)",
        answer: 200000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Nilai pemakaian = 5.000 x Rp40.000 = <strong>Rp200.000.000</strong>. Nilai inilah, bukan harga satuan saja, yang dipakai untuk memilah kelas ABC.",
        hint: "Kalikan volume pemakaian tahunan dengan harga per unit.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika kelas A menyumbang Rp800 juta dari total nilai pemakaian Rp1 miliar, berapa persen kontribusi kelas A?",
        answer: 80,
        tolerance: 0,
        suffix: "%",
        solution:
          "Persentase = 800 / 1.000 x 100 = <strong>80%</strong>. Khas Pareto: sedikit barang kelas A menguasai sebagian besar nilai.",
        hint: "Bagi nilai kelas A dengan total nilai, lalu kalikan 100.",
      },
      {
        type: "classifyExercise",
        prompt: "Berdasarkan nilai pemakaian tahunan, kelompokkan tiap barang ke kelas ABC yang tepat.",
        buckets: ["Kelas A", "Kelas B", "Kelas C"],
        items: [
          { text: "Komponen mesin, nilai pemakaian Rp600 juta/tahun", bucket: "Kelas A" },
          { text: "Modul elektronik, nilai pemakaian Rp200 juta/tahun", bucket: "Kelas A" },
          { text: "Selang dan filter, nilai pemakaian Rp80 juta/tahun", bucket: "Kelas B" },
          { text: "Baut dan mur, nilai pemakaian Rp8 juta/tahun", bucket: "Kelas C" },
          { text: "Klip plastik, nilai pemakaian Rp2 juta/tahun", bucket: "Kelas C" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Analisis ABC memilah barang berdasarkan nilai pemakaian tahunan, bukan harga satuan saja.",
          "Kelas A: sedikit jenis, nilai besar, kontrol ketat.",
          "Kelas C: banyak jenis, nilai kecil, kontrol longgar.",
          "Ini penerapan prinsip Pareto 80/20 dari Vilfredo Pareto.",
          "Fokuskan waktu dan modal pada kelas A yang paling memengaruhi biaya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Analisis ABC memilah barang berdasarkan apa?",
            options: [
              "Abjad nama barang",
              "Nilai pemakaian tahunan (harga x volume)",
              "Warna kemasan",
              "Tanggal pembelian",
            ],
            answer: 1,
            explain: "Dasar pemilahan adalah nilai pemakaian tahunan, gabungan harga dan volume.",
          },
          {
            q: "Ciri kelas A adalah?",
            options: [
              "Banyak jenis, nilai kecil",
              "Sedikit jenis, nilai besar, kontrol ketat",
              "Jenis paling murah",
              "Tidak perlu dipantau",
            ],
            answer: 1,
            explain: "Kelas A adalah sedikit barang bernilai besar yang dikontrol paling ketat.",
          },
          {
            q: "Analisis ABC adalah penerapan prinsip apa?",
            options: ["Prinsip Pareto 80/20", "Hukum Moore", "Hukum permintaan", "Prinsip Bernoulli"],
            answer: 0,
            explain: "ABC menerapkan prinsip Pareto: sebagian kecil sebab menghasilkan sebagian besar akibat.",
          },
          {
            q: "Siapa pencetus prinsip 80/20 dan kapan?",
            options: [
              "Taiichi Ohno, sekitar 1950",
              "Vilfredo Pareto, sekitar 1896",
              "Ford W. Harris, 1913",
              "W. Edwards Deming, sekitar 1950",
            ],
            answer: 1,
            explain: "Vilfredo Pareto mengamati pola 80/20 sekitar 1896.",
          },
          {
            q: "Bagaimana sebaiknya barang kelas C diperlakukan?",
            options: [
              "Dipantau lebih ketat dari kelas A",
              "Kontrol longgar, dipesan borongan sesekali",
              "Dihapus dari gudang",
              "Diberi safety stock terbesar",
            ],
            answer: 1,
            explain: "Kelas C bernilai kecil, jadi cukup dikontrol longgar agar perhatian terfokus ke kelas A.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "analisis-xyz",
    levelId: "inventory",
    order: 4,
    title: "Analisis XYZ & Matriks ABC-XYZ",
    summary:
      "Analisis ABC melihat nilai. Analisis XYZ melihat seberapa mudah permintaan diramal. Digabung, keduanya memberi peta strategi persediaan yang jauh lebih tajam.",
    durationMin: 14,
    tags: ["inventory", "xyz", "variabilitas", "abc-xyz"],
    blocks: [
      {
        type: "paragraph",
        html: "Analisis ABC memberi tahu barang mana yang paling bernilai, tetapi tidak mengatakan apakah permintaannya mudah diramal. Dua barang kelas A bisa sangat berbeda: yang satu terjual stabil tiap hari, yang lain melonjak tak terduga. <strong>Analisis XYZ</strong> mengukur variabilitas permintaan lewat <strong>koefisien variasi</strong> (simpangan baku dibagi rata-rata).",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Forklift.jpg?width=400",
        alt: "Forklift mengangkut barang di gudang",
        caption: "Barang yang lalu lalang di gudang punya pola permintaan berbeda; analisis XYZ memilahnya dari yang stabil mudah diramal sampai yang liar tak menentu.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga kategori variabilitas",
        html: "<strong>X</strong>: permintaan stabil, koefisien variasi rendah (kira kira di bawah 0,5), mudah diramal. <strong>Y</strong>: permintaan musiman atau berfluktuasi sedang (kira kira 0,5 sampai 1). <strong>Z</strong>: permintaan tidak menentu, koefisien variasi tinggi (kira kira di atas 1), sulit diramal.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Matriks gabungan ABC-XYZ",
        html: "Gabungkan keduanya menjadi sembilan sel. <strong>AX</strong> (bernilai tinggi dan stabil) cocok untuk kontrol ketat bergaya JIT dengan stok minim. <strong>CZ</strong> (bernilai kecil dan tak menentu) cukup distok seadanya. Sel <strong>AZ</strong> paling menantang: penting tetapi sulit diramal, butuh safety stock besar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Hitung sendiri",
        html: "Koefisien variasi = simpangan baku permintaan dibagi rata-rata permintaan. Makin kecil angkanya, makin stabil dan makin mudah barang itu dikelola.",
      },
      {
        type: "video",
        comp: "ABCAnalysisVideo",
        title: "Dari ABC ke ABC-XYZ",
        caption: "Setelah memilah berdasarkan nilai, tambahkan dimensi variabilitas permintaan untuk strategi yang lebih tajam.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Koefisien Variasi Tiga Barang Contoh",
        unit: "koefisien variasi",
        source: "ilustrasi edukatif",
        note: "Makin tinggi koefisien variasi, makin sulit permintaan diramal dan makin besar safety stock yang dibutuhkan.",
        data: [
          { label: "Barang X (stabil)", value: 0.2 },
          { label: "Barang Y (sedang)", value: 0.7 },
          { label: "Barang Z (tak menentu)", value: 1.3 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Minimarket memetakan tiga produk",
        html: "Air mineral terjual sangat stabil, rata rata 120 botol per hari dengan simpangan baku 24, jadi koefisien variasinya 0,2 dan masuk kategori X. Payung terjual musiman, koefisien variasi sekitar 0,7, masuk kategori Y. Kembang api hanya laku menjelang tahun baru dengan lonjakan ekstrem, koefisien variasi di atas 1, masuk kategori Z. Air mineral yang juga bernilai tinggi (AX) dikelola dengan pemesanan rutin, sedangkan kembang api (kemungkinan CZ) cukup dibeli sekali jelang momen.",
      },
      {
        type: "case",
        title: "Sejarah: Model build-to-order Dell di era 1990-an",
        html: "Pada era 1990-an, <strong>Dell</strong> menjadi terkenal karena model build-to-order: komputer baru dirakit setelah pesanan masuk, sehingga persediaan komponen ditekan sangat tipis. Strategi ini paling pas untuk komponen yang permintaannya relatif mudah diramal dan bernilai tinggi, mirip kuadran AX pada matriks ABC-XYZ. Untuk komponen yang permintaannya liar, pendekatan stok minim seperti itu jauh lebih berisiko.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah barang punya permintaan harian rata-rata 120 unit dengan simpangan baku 30 unit. Berapa koefisien variasinya? (CV = simpangan baku / rata-rata)",
        answer: 0.25,
        tolerance: 0.02,
        solution:
          "CV = 30 / 120 = <strong>0,25</strong>. Karena di bawah 0,5, barang ini tergolong kategori X yang permintaannya stabil dan mudah diramal.",
        hint: "Bagi simpangan baku dengan rata-rata permintaan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap sel matriks ABC-XYZ dengan strategi persediaan yang paling masuk akal.",
        pairs: [
          { left: "AX (nilai tinggi, permintaan stabil)", right: "Kontrol ketat bergaya JIT, stok minim" },
          { left: "AZ (nilai tinggi, permintaan tak menentu)", right: "Safety stock besar, pantau ketat" },
          { left: "CX (nilai kecil, permintaan stabil)", right: "Pesan otomatis dengan aturan sederhana" },
          { left: "CZ (nilai kecil, permintaan tak menentu)", right: "Stok seadanya, beli saat dibutuhkan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Analisis XYZ mengukur variabilitas permintaan lewat koefisien variasi.",
          "X stabil (CV rendah), Y sedang, Z tak menentu (CV tinggi).",
          "Matriks ABC-XYZ menggabungkan nilai dan keteramalan menjadi sembilan sel strategi.",
          "AX cocok untuk stok minim bergaya JIT; AZ butuh safety stock besar.",
          "Koefisien variasi = simpangan baku dibagi rata-rata permintaan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang diukur analisis XYZ?",
            options: [
              "Nilai pemakaian tahunan",
              "Variabilitas atau keteramalan permintaan",
              "Berat barang",
              "Harga pemasok",
            ],
            answer: 1,
            explain: "XYZ menilai seberapa stabil dan mudah diramal permintaan sebuah barang.",
          },
          {
            q: "Koefisien variasi dihitung sebagai?",
            options: [
              "Rata-rata dibagi simpangan baku",
              "Simpangan baku dibagi rata-rata",
              "Simpangan baku dikali rata-rata",
              "Rata-rata dikurangi simpangan baku",
            ],
            answer: 1,
            explain: "CV = simpangan baku / rata-rata; makin kecil, makin stabil permintaannya.",
          },
          {
            q: "Barang dengan koefisien variasi 0,2 termasuk kategori?",
            options: ["X (stabil)", "Y (sedang)", "Z (tak menentu)", "Tidak terklasifikasi"],
            answer: 0,
            explain: "CV di bawah 0,5 menandakan permintaan stabil, yaitu kategori X.",
          },
          {
            q: "Sel mana yang paling cocok untuk pendekatan stok minim bergaya JIT?",
            options: ["CZ", "AX", "BZ", "CY"],
            answer: 1,
            explain: "AX bernilai tinggi dan permintaannya stabil, sehingga aman dikelola dengan stok minim.",
          },
          {
            q: "Mengapa sel AZ paling menantang?",
            options: [
              "Karena bernilai kecil dan stabil",
              "Karena bernilai tinggi tetapi permintaannya sulit diramal",
              "Karena tidak punya nilai",
              "Karena permintaannya selalu nol",
            ],
            answer: 1,
            explain: "AZ penting bagi modal namun tak menentu, sehingga butuh safety stock besar dan pemantauan ketat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "penilaian-persediaan",
    levelId: "inventory",
    order: 5,
    title: "Penilaian Persediaan: FIFO vs Rata-rata",
    summary:
      "Saat harga beli berubah-ubah, metode penilaian menentukan berapa harga pokok penjualan dan laba yang dilaporkan. FIFO dan rata-rata tertimbang diizinkan PSAK; LIFO tidak.",
    durationMin: 15,
    tags: ["inventory", "fifo", "rata-rata", "penilaian", "psak"],
    blocks: [
      {
        type: "paragraph",
        html: "Misal kita membeli barang yang sama dengan harga berbeda di waktu berbeda. Saat menjual, harga beli yang mana yang dibebankan? Pilihan metode penilaian persediaan menentukan besarnya <strong>harga pokok penjualan (HPP)</strong>, nilai persediaan akhir, dan laba yang dilaporkan, meski arus barang fisiknya sama.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Modern_warehouse_with_pallet_rack_storage_system.jpg?width=400",
        alt: "Gudang rak palet berisi barang yang dibeli pada waktu berbeda",
        caption: "Barang sama di rak ini bisa dibeli dengan harga berbeda di waktu berbeda; FIFO dan rata-rata tertimbang menentukan harga mana yang dibebankan saat terjual.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dua metode utama",
        html: "<strong>FIFO</strong> (first in, first out): barang yang dibeli lebih dulu dianggap terjual lebih dulu. <strong>Rata-rata tertimbang</strong>: HPP memakai harga rata-rata seluruh unit yang tersedia. Saat harga naik, FIFO menghasilkan HPP lebih kecil dan laba lebih besar dibanding rata-rata.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "PSAK melarang LIFO",
        html: "Di Indonesia, <strong>PSAK 14</strong> (selaras dengan IAS 2) hanya mengizinkan <strong>FIFO</strong> dan <strong>rata-rata tertimbang</strong>. Metode <strong>LIFO</strong> (last in, first out) tidak diperbolehkan karena dianggap kurang mencerminkan arus barang dan bisa menggerus nilai persediaan di laporan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Hubungannya dengan EOQ",
        html: "Setelah memutuskan berapa banyak yang dipesan lewat EOQ, biaya pembelian yang berubah ubah itulah yang nanti dinilai dengan FIFO atau rata-rata saat barang terjual.",
      },
      { type: "widget", widget: "KalkulatorEOQ" },
      {
        type: "video",
        comp: "EOQVideo",
        title: "Dari Jumlah Pesan ke Penilaian Biaya",
        caption: "Setelah EOQ menentukan berapa banyak yang dibeli, biaya pembelian yang berubah ubah itulah yang dinilai dengan FIFO atau rata-rata saat barang terjual.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "HPP atas 150 Unit saat Harga Naik (FIFO vs Rata-rata vs LIFO)",
        unit: "Rp ribu",
        source: "ilustrasi pembelian 100 @ Rp10.000 lalu 100 @ Rp12.000",
        note: "Saat harga naik, FIFO memberi HPP terkecil dan laba terbesar; LIFO sebaliknya, tetapi LIFO dilarang PSAK.",
        data: [
          { label: "FIFO", value: 1600 },
          { label: "Rata-rata", value: 1650 },
          { label: "LIFO (dilarang)", value: 1700 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Toko membeli beras dua kali",
        html: "Sebuah toko membeli 100 karung beras seharga Rp10.000 per karung, lalu 100 karung lagi seharga Rp12.000 karena harga naik. Toko menjual 150 karung. Dengan <strong>FIFO</strong>, HPP = 100 x Rp10.000 + 50 x Rp12.000 = Rp1.600.000, persediaan akhir 50 karung senilai Rp600.000. Dengan <strong>rata-rata tertimbang</strong>, harga rata rata = Rp2.200.000 / 200 = Rp11.000, sehingga HPP = 150 x Rp11.000 = Rp1.650.000. FIFO memberi laba lebih besar Rp50.000 dibanding rata-rata pada periode ini.",
      },
      {
        type: "case",
        title: "Sejarah: Konvergensi Indonesia ke IFRS dan larangan LIFO",
        html: "Standar akuntansi internasional <strong>IAS 2</strong> melarang LIFO sejak revisinya yang berlaku sekitar 2005. Indonesia secara bertahap mengonvergensikan PSAK ke IFRS sepanjang dekade berikutnya, dan PSAK 14 tentang persediaan ikut menutup pintu bagi LIFO. Sejak itu, perusahaan di Indonesia menilai persediaan hanya dengan FIFO atau rata-rata tertimbang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Beli 100 unit @ Rp10.000, lalu 100 unit @ Rp12.000. Jual 150 unit. Dengan metode FIFO, berapa harga pokok penjualannya?",
        answer: 1600000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "FIFO membebankan barang termurah dulu: 100 x Rp10.000 + 50 x Rp12.000 = Rp1.000.000 + Rp600.000 = <strong>Rp1.600.000</strong>.",
        hint: "Habiskan dulu 100 unit batch pertama, sisanya dari batch kedua.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari pembelian yang sama (100 @ Rp10.000 dan 100 @ Rp12.000), berapa harga rata-rata tertimbang per unit?",
        answer: 11000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Total biaya = Rp1.000.000 + Rp1.200.000 = Rp2.200.000 untuk 200 unit. Rata-rata = Rp2.200.000 / 200 = <strong>Rp11.000</strong> per unit.",
        hint: "Bagi total biaya seluruh pembelian dengan total unit.",
      },
      {
        type: "classifyExercise",
        prompt: "Saat harga beli sedang naik, kelompokkan pernyataan berikut sebagai ciri FIFO atau rata-rata tertimbang.",
        buckets: ["FIFO", "Rata-rata tertimbang"],
        items: [
          { text: "HPP cenderung lebih kecil", bucket: "FIFO" },
          { text: "Laba yang dilaporkan cenderung lebih besar", bucket: "FIFO" },
          { text: "Persediaan akhir dinilai dengan harga terbaru", bucket: "FIFO" },
          { text: "HPP memakai satu harga rata-rata semua unit", bucket: "Rata-rata tertimbang" },
          { text: "Menghaluskan dampak fluktuasi harga beli", bucket: "Rata-rata tertimbang" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Metode penilaian menentukan HPP, persediaan akhir, dan laba meski arus barang sama.",
          "FIFO membebankan barang yang dibeli lebih dulu; rata-rata memakai harga rata-rata.",
          "Saat harga naik, FIFO memberi HPP lebih kecil dan laba lebih besar dibanding rata-rata.",
          "PSAK 14 di Indonesia hanya mengizinkan FIFO dan rata-rata tertimbang.",
          "LIFO dilarang oleh PSAK maupun IFRS (IAS 2).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Metode penilaian persediaan apa yang dilarang di Indonesia menurut PSAK 14?",
            options: ["FIFO", "Rata-rata tertimbang", "LIFO", "Identifikasi khusus"],
            answer: 2,
            explain: "PSAK 14, selaras dengan IAS 2, melarang metode LIFO.",
          },
          {
            q: "Saat harga beli sedang naik, FIFO menghasilkan?",
            options: [
              "HPP lebih besar dan laba lebih kecil",
              "HPP lebih kecil dan laba lebih besar",
              "HPP dan laba sama persis dengan rata-rata",
              "Persediaan akhir bernilai nol",
            ],
            answer: 1,
            explain: "FIFO membebankan barang termurah dulu, jadi HPP kecil dan laba besar saat harga naik.",
          },
          {
            q: "Beli 100 @ Rp10.000 lalu 100 @ Rp12.000, jual 150 unit. HPP FIFO-nya?",
            options: ["Rp1.500.000", "Rp1.600.000", "Rp1.650.000", "Rp1.700.000"],
            answer: 1,
            explain: "100 x Rp10.000 + 50 x Rp12.000 = Rp1.600.000.",
          },
          {
            q: "Harga rata-rata tertimbang dari pembelian itu adalah?",
            options: ["Rp10.000", "Rp11.000", "Rp12.000", "Rp22.000"],
            answer: 1,
            explain: "Rp2.200.000 dibagi 200 unit = Rp11.000 per unit.",
          },
          {
            q: "Mengapa metode penilaian penting meski barang fisiknya sama?",
            options: [
              "Karena mengubah berat barang",
              "Karena memengaruhi HPP, nilai persediaan, dan laba yang dilaporkan",
              "Karena mengubah warna produk",
              "Karena menentukan lokasi gudang",
            ],
            answer: 1,
            explain: "Pilihan metode menggeser angka HPP, persediaan akhir, dan laba dalam laporan keuangan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cycle-counting-akurasi-stok",
    levelId: "inventory",
    order: 6,
    title: "Cycle Counting & Akurasi Stok",
    summary:
      "Angka di sistem belum tentu cocok dengan barang di rak. Cycle counting menghitung sebagian stok secara rutin agar selisih ketahuan lebih cepat tanpa menutup gudang.",
    durationMin: 13,
    tags: ["inventory", "cycle-counting", "akurasi", "perpetual", "periodik"],
    blocks: [
      {
        type: "paragraph",
        html: "Semua perhitungan EOQ dan safety stock jadi sia sia kalau angka stok di sistem salah. Barang bisa hilang, salah catat, atau tertukar. <strong>Akurasi stok</strong> adalah seberapa cocok catatan sistem dengan kenyataan di rak, dan menjaganya adalah pekerjaan rutin yang sering diremehkan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/EAN-13-5901234123457.svg?width=400",
        alt: "Contoh barcode EAN-13",
        caption: "Barcode seperti ini membuat setiap keluar masuk barang tercatat cepat dan akurat, fondasi cycle counting dan sistem perpetual yang menjaga akurasi stok.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Perpetual vs periodik",
        html: "Sistem <strong>perpetual</strong> memperbarui catatan stok setiap kali ada transaksi, sehingga angka selalu hidup. Sistem <strong>periodik</strong> hanya menghitung fisik pada akhir periode, misalnya tiap akhir bulan, sehingga di antaranya angka bisa melenceng.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Cycle counting, bukan stock opname besar",
        html: "Daripada menutup gudang setahun sekali untuk menghitung semuanya (stock opname), <strong>cycle counting</strong> menghitung sebagian kecil barang setiap hari secara bergilir. Barang kelas A dihitung paling sering, kelas C paling jarang. Selisih ketahuan lebih awal dan operasi tetap jalan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Prioritas hitung pakai ABC",
        html: "Gabungkan dengan analisis ABC: barang kelas A yang bernilai besar pantas dihitung jauh lebih sering daripada baut kelas C.",
      },
      { type: "widget", widget: "SimulatorABCInventory" },
      {
        type: "video",
        comp: "ABCAnalysisVideo",
        title: "Prioritas Hitung dengan ABC",
        caption: "Kelas A yang bernilai besar dihitung paling sering, kelas C paling jarang, agar perhatian dan akurasi terfokus pada barang yang paling penting.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Frekuensi Cycle Counting per Kelas ABC (ilustrasi)",
        unit: "kali hitung per tahun",
        source: "ilustrasi praktik cycle counting",
        note: "Barang kelas A bernilai besar dihitung jauh lebih sering daripada kelas C.",
        data: [
          { label: "Kelas A", value: 12 },
          { label: "Kelas B", value: 4 },
          { label: "Kelas C", value: 1 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Selisih stok di gudang distributor",
        html: "Sebuah gudang distributor menghitung 1.000 jenis barang dalam sebulan lewat cycle counting. Dari 1.000 jenis, 950 cocok antara sistem dan fisik, sementara 50 jenis selisih karena salah scan dan kerusakan. Akurasi catatan persediaan = 950 / 1.000 = <strong>95%</strong>. Setelah memperketat scan barcode di pintu masuk, bulan berikutnya akurasi naik ke 98%, mengurangi pesanan mendadak akibat stok hantu.",
      },
      {
        type: "case",
        title: "Sejarah: Barcode pertama dipindai (1974)",
        html: "Pada <strong>26 Juni 1974</strong>, sebungkus permen karet Wrigley menjadi produk pertama yang dipindai dengan barcode di sebuah supermarket di Troy, Ohio, Amerika Serikat. Barcode mengubah cara toko mencatat keluar masuk barang: pencatatan jadi cepat dan jauh lebih akurat. Teknologi inilah yang kemudian membuat sistem perpetual dan cycle counting praktis dijalankan di gudang modern.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 1.000 jenis barang yang dihitung, 950 jenis cocok antara catatan sistem dan stok fisik. Berapa persen akurasi catatan persediaannya?",
        answer: 95,
        tolerance: 0,
        suffix: "%",
        solution:
          "Akurasi = jumlah cocok / jumlah dihitung x 100 = 950 / 1.000 x 100 = <strong>95%</strong>.",
        hint: "Bagi jumlah yang cocok dengan total yang dihitung, lalu kalikan 100.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sistem mencatat 500 unit, tetapi hitungan fisik menemukan 470 unit. Berapa selisih stok (jumlah unit yang hilang)?",
        answer: 30,
        tolerance: 0,
        suffix: "unit",
        solution:
          "Selisih = 500 - 470 = <strong>30 unit</strong>. Selisih negatif seperti ini sering disebut penyusutan stok dan perlu ditelusuri sebabnya.",
        hint: "Kurangkan jumlah fisik dari jumlah yang tercatat di sistem.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap ciri ke sistem pencatatan yang tepat.",
        buckets: ["Sistem perpetual", "Sistem periodik"],
        items: [
          { text: "Catatan stok diperbarui tiap transaksi", bucket: "Sistem perpetual" },
          { text: "Mengandalkan scan barcode setiap keluar masuk barang", bucket: "Sistem perpetual" },
          { text: "Angka stok diketahui hampir secara langsung", bucket: "Sistem perpetual" },
          { text: "Stok dihitung hanya pada akhir periode", bucket: "Sistem periodik" },
          { text: "Di antara periode, angka bisa melenceng tanpa ketahuan", bucket: "Sistem periodik" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Akurasi stok mengukur kecocokan catatan sistem dengan barang fisik.",
          "Sistem perpetual memperbarui tiap transaksi; periodik hanya pada akhir periode.",
          "Cycle counting menghitung sebagian stok secara rutin tanpa menutup gudang.",
          "Barang kelas A dihitung lebih sering daripada kelas C.",
          "Akurasi = jumlah cocok dibagi jumlah dihitung, dikali 100.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa keunggulan cycle counting dibanding stock opname tahunan?",
            options: [
              "Tidak perlu menghitung sama sekali",
              "Selisih ketahuan lebih awal tanpa menutup gudang",
              "Selalu 100% akurat otomatis",
              "Menghapus kebutuhan sistem",
            ],
            answer: 1,
            explain: "Cycle counting menghitung sebagian stok rutin sehingga selisih terdeteksi cepat dan operasi tetap jalan.",
          },
          {
            q: "Ciri sistem perpetual adalah?",
            options: [
              "Hanya menghitung pada akhir bulan",
              "Memperbarui catatan stok setiap transaksi",
              "Tidak butuh barcode",
              "Mengabaikan transaksi harian",
            ],
            answer: 1,
            explain: "Perpetual menjaga catatan tetap hidup dengan memperbaruinya pada setiap transaksi.",
          },
          {
            q: "Dari 1.000 jenis dihitung, 950 cocok. Akurasinya?",
            options: ["90%", "95%", "98%", "99%"],
            answer: 1,
            explain: "950 / 1.000 x 100 = 95%.",
          },
          {
            q: "Barang kelas mana yang sebaiknya paling sering dihitung?",
            options: ["Kelas C", "Kelas B", "Kelas A", "Semua sama saja"],
            answer: 2,
            explain: "Kelas A bernilai paling besar, sehingga akurasinya paling kritis dan dihitung paling sering.",
          },
          {
            q: "Sistem mencatat 500 unit tetapi fisik 470 unit. Ini disebut?",
            options: [
              "Kelebihan stok 30 unit",
              "Selisih atau penyusutan stok 30 unit",
              "Akurasi 100%",
              "Reorder point 30 unit",
            ],
            answer: 1,
            explain: "Catatan lebih besar dari fisik berarti ada selisih atau penyusutan stok sebesar 30 unit.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "inventory-optimization",
    levelId: "inventory",
    order: 7,
    title: "Optimasi Persediaan Multi-Eselon",
    summary:
      "Di jaringan dengan banyak gudang, persediaan tidak dioptimalkan satu per satu melainkan sebagai satu sistem. Memusatkan stok bisa memangkas safety stock lewat efek penggabungan risiko.",
    durationMin: 15,
    tags: ["inventory", "optimasi", "multi-eselon", "risk-pooling"],
    blocks: [
      {
        type: "paragraph",
        html: "Sampai sini kita mengelola satu gudang. Tapi rantai pasok nyata berjenjang: pabrik, gudang pusat, gudang regional, lalu toko. Inilah jaringan <strong>multi-eselon</strong>. Mengoptimalkan tiap titik sendiri sendiri sering boros; yang benar adalah mengoptimalkan persediaan sebagai satu sistem utuh.",
      },
      {
        type: "paragraph",
        html: "Inti tegangannya selalu sama: <strong>tingkat layanan melawan biaya</strong>. Makin tinggi layanan yang dijanjikan, makin besar safety stock dan biaya simpan. Optimasi persediaan mencari titik di mana tambahan layanan tidak lagi sepadan dengan tambahan biayanya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_warehouse_full_of_USAID_goods_-_20110826-FS-LSC-0046_-_Flickr_-_USDAgov.jpg?width=400",
        alt: "Gudang pusat penuh barang dari berbagai wilayah",
        caption: "Memusatkan stok beberapa wilayah ke satu gudang seperti ini memicu penggabungan risiko: lonjakan satu wilayah diimbangi penurunan wilayah lain, sehingga total safety stock menyusut.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Penggabungan risiko (risk pooling)",
        html: "Saat permintaan beberapa lokasi digabung di satu gudang pusat, lonjakan di satu lokasi bisa diimbangi penurunan di lokasi lain. Akibatnya total safety stock yang dibutuhkan turun. Inilah <strong>square root law</strong>: bila stok dipusatkan dari N lokasi menjadi satu, kebutuhan safety stock menyusut sekitar akar(N) kali.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Layanan mendekati 100% itu mahal",
        html: "Biaya safety stock naik makin curam saat tingkat layanan mendekati 100%. Mengejar layanan sempurna biasanya tidak ekonomis; banyak perusahaan menetapkan target seperti 95% atau 98% sebagai keseimbangan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser tingkat layanan pada kalkulator safety stock dan rasakan bagaimana sedikit kenaikan layanan bisa melonjakkan kebutuhan cadangan.",
      },
      { type: "widget", widget: "KalkulatorSafetyStock" },
      {
        type: "video",
        comp: "EOQVideo",
        title: "Menyeimbangkan Layanan dan Biaya",
        caption: "Seperti EOQ menyeimbangkan dua biaya yang berlawanan, optimasi persediaan menyeimbangkan tingkat layanan melawan biaya simpan di seluruh jaringan.",
      },
      {
        type: "chart",
        variant: "area",
        title: "Biaya Safety Stock terhadap Tingkat Layanan (ilustrasi)",
        unit: "indeks biaya",
        source: "ilustrasi berdasarkan kurva nilai Z",
        note: "Kurva menanjak makin curam mendekati 100%; layanan sempurna jadi sangat mahal.",
        data: [
          { label: "90%", value: 38 },
          { label: "95%", value: 48 },
          { label: "98%", value: 60 },
          { label: "99%", value: 68 },
          { label: "99,9%", value: 90 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memusatkan empat gudang regional",
        html: "Sebuah perusahaan punya 4 gudang regional yang masing masing menyimpan safety stock 100 unit, jadi total 400 unit. Karena permintaan tiap wilayah naik turun mandiri, manajemen menggabungkannya ke satu gudang pusat. Lewat square root law, safety stock terpusat menjadi 100 x akar(4) = <strong>200 unit</strong>, separuh dari semula. Modal yang terikat di cadangan turun drastis, dengan catatan ongkos kirim ke wilayah perlu diperhitungkan ulang.",
      },
      {
        type: "case",
        title: "Sejarah: Toyota dan produksi just-in-time",
        html: "Sejak era pascaperang, <strong>Toyota</strong> mengembangkan sistem produksi just-in-time yang dipelopori antara lain oleh <strong>Taiichi Ohno</strong>. Idenya: persediaan adalah pemborosan yang menyembunyikan masalah, sehingga stok ditekan seminimal mungkin dan komponen tiba tepat saat dibutuhkan. Pendekatan ini menggeser fokus dunia dari menimbun banyak stok menjadi mengoptimalkan aliran, walau menuntut pemasok yang sangat andal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Empat gudang masing-masing menyimpan safety stock 100 unit. Bila dipusatkan menjadi satu gudang, berapa safety stock terpusatnya menurut square root law? (SS = 100 x akar N)",
        answer: 200,
        tolerance: 0,
        suffix: "unit",
        solution:
          "SS terpusat = 100 x akar(4) = 100 x 2 = <strong>200 unit</strong>, separuh dari total 400 unit sebelumnya.",
        hint: "Akar dari 4 adalah 2; kalikan dengan safety stock per gudang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari pemusatan tadi, total safety stock turun dari 400 unit menjadi 200 unit. Berapa persen penghematan safety stock-nya?",
        answer: 50,
        tolerance: 0,
        suffix: "%",
        solution:
          "Penghematan = (400 - 200) / 400 x 100 = <strong>50%</strong>. Inilah kekuatan penggabungan risiko.",
        hint: "Bagi selisih penurunan dengan jumlah awal, lalu kalikan 100.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap konsep optimasi persediaan dengan penjelasannya.",
        pairs: [
          { left: "Multi-eselon", right: "Jaringan persediaan berjenjang dari pusat ke toko" },
          { left: "Penggabungan risiko", right: "Memusatkan stok memangkas total safety stock" },
          { left: "Square root law", right: "Safety stock menyusut sekitar akar(N) kali saat dipusatkan" },
          { left: "Trade-off layanan vs biaya", right: "Layanan lebih tinggi menuntut cadangan dan biaya lebih besar" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Jaringan multi-eselon dioptimalkan sebagai satu sistem, bukan per gudang.",
          "Tegangan inti adalah tingkat layanan melawan biaya persediaan.",
          "Penggabungan risiko: memusatkan stok memangkas total safety stock.",
          "Square root law: stok dari N lokasi yang dipusatkan menyusut sekitar akar(N) kali.",
          "Layanan mendekati 100% menjadi sangat mahal; pilih target yang seimbang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud jaringan persediaan multi-eselon?",
            options: [
              "Satu gudang tunggal",
              "Jaringan berjenjang seperti pusat, regional, lalu toko",
              "Persediaan tanpa gudang",
              "Hanya stok di toko",
            ],
            answer: 1,
            explain: "Multi-eselon adalah persediaan yang tersebar di beberapa jenjang jaringan.",
          },
          {
            q: "Apa inti dari penggabungan risiko (risk pooling)?",
            options: [
              "Menambah jumlah gudang memperbesar safety stock",
              "Memusatkan stok memangkas total safety stock yang dibutuhkan",
              "Menghapus semua safety stock",
              "Menaikkan biaya simpan",
            ],
            answer: 1,
            explain: "Dengan dipusatkan, lonjakan satu lokasi diimbangi penurunan lokasi lain sehingga cadangan total turun.",
          },
          {
            q: "Empat gudang masing-masing 100 unit dipusatkan. Safety stock terpusat menurut square root law?",
            options: ["100 unit", "200 unit", "300 unit", "400 unit"],
            answer: 1,
            explain: "100 x akar(4) = 100 x 2 = 200 unit.",
          },
          {
            q: "Apa tegangan utama dalam optimasi persediaan?",
            options: [
              "Warna gudang vs lokasi",
              "Tingkat layanan vs biaya",
              "Harga jual vs iklan",
              "Pajak vs subsidi",
            ],
            answer: 1,
            explain: "Layanan lebih tinggi menuntut safety stock dan biaya lebih besar; itulah trade-off yang dioptimalkan.",
          },
          {
            q: "Mengapa mengejar tingkat layanan mendekati 100% jarang ekonomis?",
            options: [
              "Karena layanan tinggi menurunkan biaya",
              "Karena biaya safety stock naik makin curam mendekati 100%",
              "Karena permintaan jadi nol",
              "Karena gudang menyusut",
            ],
            answer: 1,
            explain: "Kurva biaya safety stock menanjak tajam mendekati 100%, sehingga tambahan layanan jadi sangat mahal.",
          },
        ],
      },
    ],
  },
];
