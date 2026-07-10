import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "desain-tata-letak-gudang",
    levelId: "warehousing",
    order: 1,
    title: "Desain & Tata Letak Gudang",
    summary:
      "Gudang yang baik bukan sekadar ruang luas, tapi aliran yang mulus. Pelajari bagaimana tata letak menentukan kecepatan, biaya, dan ketepatan.",
    durationMin: 14,
    tags: ["warehousing", "layout", "gudang"],
    blocks: [
      {
        type: "paragraph",
        html: "Gudang adalah jantung yang memompa barang dalam rantai pasok. Tujuannya bukan menimbun, melainkan <strong>mengalirkan</strong> barang masuk dan keluar secepat dan seakurat mungkin. Desain dan tata letak yang baik bisa memangkas jarak jalan kaki pekerja, mempercepat pengambilan, dan menurunkan kesalahan.",
      },
      {
        type: "paragraph",
        html: "Aliran kerja gudang umumnya melewati enam tahap: <strong>receiving</strong> (terima), <strong>putaway</strong> (simpan ke rak), <strong>storage</strong> (penyimpanan), <strong>picking</strong> (ambil sesuai pesanan), <strong>packing</strong> (kemas), dan <strong>shipping</strong> (kirim). Picking biasanya menyita biaya tenaga kerja terbesar, sehingga banyak optimasi berfokus di sana.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Prinsip tata letak",
        html: "Letakkan barang <strong>cepat laku</strong> dekat area kemas dan kirim agar jarak ambil pendek. Sediakan <strong>gang</strong> yang cukup untuk forklift, tapi jangan boros ruang. Pisahkan alur masuk dan keluar agar tidak bertabrakan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Modern_warehouse_with_pallet_rack_storage_system.jpg?width=400",
        alt: "Gudang modern dengan sistem rak palet bertingkat dan gang untuk forklift",
        caption: "Tata letak gudang dengan rak palet tinggi dan gang yang cukup lebar membuat aliran barang dan forklift tetap mulus.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "WarehouseFlowVideo",
        title: "Aliran Kerja Gudang",
        caption: "Enam tahap dari barang datang sampai barang keluar, dengan picking sebagai titik biaya terbesar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Tidak semua ruang gudang untuk menyimpan. Lihat kapan gudang mulai terlalu padat saat kamu mengubah luas, porsi area simpan, dan tinggi rak.",
      },
      { type: "widget", widget: "KalkulatorUtilisasiGudang" },
      {
        type: "chart",
        variant: "bar",
        title: "Porsi Biaya Operasional Gudang (ilustrasi)",
        unit: "% biaya operasional",
        source: "ilustrasi edukatif pola yang umum dilaporkan",
        note: "Tenaga kerja, terutama untuk picking, biasanya jadi komponen biaya gudang terbesar.",
        data: [
          { label: "Tenaga kerja", value: 50, color: "#f87171" },
          { label: "Sewa/ruang", value: 25, color: "#fbbf24" },
          { label: "Peralatan", value: 15, color: "#60a5fa" },
          { label: "Lainnya", value: 10, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Gudang e-commerce saat Harbolnas",
        html: "Menjelang <strong>Harbolnas</strong> (Hari Belanja Online Nasional), gudang sebuah marketplace harus memproses lonjakan pesanan berkali lipat. Tanpa tata letak yang baik, pekerja akan saling berebut lorong dan jarak jalan kaki meledak. Solusinya: barang yang diprediksi laris dipindahkan ke zona dekat area packing (disebut <em>slotting</em>), jalur picking dibuat satu arah, dan area kemas diperbanyak sementara. Tata letak yang adaptif menentukan apakah promo besar berakhir lancar atau berantakan.",
      },
      {
        type: "case",
        title: "Sejarah: Amazon membeli Kiva Systems (2012)",
        html: "Pada <strong>2012</strong>, Amazon membeli <strong>Kiva Systems</strong>, pembuat robot gudang, senilai sekitar 775 juta dolar AS. Idenya membalik logika lama: alih-alih pekerja berjalan ke rak, <strong>rak yang berjalan ke pekerja</strong>, dibawa robot oranye di bawahnya. Ini memangkas waktu picking secara drastis dan mengubah desain gudang modern. Peristiwa ini menandai awal otomasi gudang skala besar yang kini ditiru di seluruh dunia.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah gudang seluas 2.000 m2 mengalokasikan 60% luasnya untuk area simpan. Berapa meter persegi area simpannya?",
        answer: 1200,
        tolerance: 0,
        suffix: "m²",
        solution:
          "2.000 x 60% = 2.000 x 0,6 = <strong>1.200 m2</strong>. Sisanya 800 m2 dipakai untuk gang, dok bongkar muat, area kemas, dan kantor.",
        hint: "Kalikan luas total dengan porsi area simpan dalam desimal.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tahap aliran gudang dengan kegiatannya.",
        pairs: [
          { left: "Receiving", right: "Menerima dan memeriksa barang masuk" },
          { left: "Putaway", right: "Menyimpan barang ke lokasi rak" },
          { left: "Picking", right: "Mengambil barang sesuai pesanan" },
          { left: "Packing", right: "Mengemas dan memberi label" },
          { left: "Shipping", right: "Mengirim barang ke pelanggan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Tujuan gudang adalah mengalirkan barang cepat dan akurat, bukan sekadar menimbun.",
          "Aliran kerja umum: receiving, putaway, storage, picking, packing, shipping.",
          "Picking menyita biaya tenaga kerja terbesar, jadi target utama optimasi.",
          "Tata letak yang baik mendekatkan barang laris ke area kirim dan memisahkan alur masuk-keluar.",
          "Akuisisi Kiva oleh Amazon (2012) memicu era otomasi gudang modern.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama sebuah gudang modern?",
            options: [
              "Menimbun barang sebanyak mungkin",
              "Mengalirkan barang masuk dan keluar secepat dan seakurat mungkin",
              "Menjadi kantor utama perusahaan",
              "Memamerkan produk ke pelanggan",
            ],
            answer: 1,
            explain: "Gudang yang baik berfokus pada aliran, bukan sekadar penyimpanan.",
          },
          {
            q: "Tahap mana yang biasanya paling menyita biaya tenaga kerja?",
            options: ["Receiving", "Picking", "Shipping", "Putaway"],
            answer: 1,
            explain: "Picking melibatkan banyak jalan kaki dan pengambilan, sehingga paling mahal secara tenaga.",
          },
          {
            q: "Apa prinsip slotting yang baik?",
            options: [
              "Menaruh barang laris jauh dari area kirim",
              "Menaruh barang laris dekat area kemas dan kirim",
              "Menumpuk semua barang di satu sudut",
              "Mengacak letak barang setiap hari",
            ],
            answer: 1,
            explain: "Mendekatkan barang cepat laku ke area kirim memperpendek jarak ambil.",
          },
          {
            q: "Apa inovasi Kiva Systems yang dibeli Amazon pada 2012?",
            options: [
              "Drone pengirim paket",
              "Robot yang membawa rak berjalan ke pekerja",
              "Truk tanpa sopir",
              "Aplikasi belanja",
            ],
            answer: 1,
            explain: "Kiva membalik logika: rak yang mendatangi pekerja, mempercepat picking secara drastis.",
          },
          {
            q: "Gudang 2.000 m2 dengan 60% area simpan punya luas simpan?",
            options: ["600 m²", "1.200 m²", "2.000 m²", "800 m²"],
            answer: 1,
            explain: "2.000 x 0,6 = 1.200 m2; sisanya untuk gang, dok, dan area kerja.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "slotting-dan-strategi-picking",
    levelId: "warehousing",
    order: 2,
    title: "Slotting & Strategi Picking",
    summary:
      "Picking adalah biaya terbesar gudang. Pelajari cara menata barang (slotting ABC) dan memilih strategi picking yang memangkas jarak jalan kaki.",
    durationMin: 15,
    tags: ["warehousing", "picking", "slotting"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu belanja di supermarket besar setiap hari. Jika barang yang paling sering kamu beli ditaruh di rak terjauh, kamu akan lelah bolak-balik. Gudang menghadapi masalah sama: <strong>picking</strong> (mengambil barang sesuai pesanan) menyita sekitar setengah dari biaya tenaga kerja gudang. Maka menata letak barang dan memilih cara mengambil adalah kunci efisiensi.",
      },
      {
        type: "paragraph",
        html: "<strong>Slotting</strong> adalah seni menempatkan barang di lokasi yang tepat. Pendekatan paling umum adalah <strong>ABC slotting</strong>: kelompok A adalah barang yang paling sering diambil (taruh paling dekat dan di ketinggian nyaman), kelompok B sedang, kelompok C jarang diambil (boleh di lokasi jauh atau tinggi).",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Forklift.jpg?width=400",
        alt: "Forklift mengangkat palet barang di area rak gudang",
        caption: "Forklift memindahkan palet antar lokasi rak; menaruh barang kelas A di lokasi terdekat memangkas jarak dan waktu pengambilan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Golden zone",
        html: "<strong>Golden zone</strong> adalah area rak setinggi pinggang sampai bahu (sekitar 75 sampai 150 cm dari lantai). Di zona ini pekerja mengambil barang tanpa membungkuk atau memanjat. Taruh barang kelompok A di golden zone agar pengambilan tercepat dan paling aman.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga strategi picking",
        html: "<strong>Batch picking</strong>: satu pekerja mengambil banyak pesanan sekaligus dalam satu putaran. <strong>Zone picking</strong>: tiap pekerja menjaga satu zona, pesanan berpindah antar zona. <strong>Wave picking</strong>: pesanan dilepas bergelombang sesuai jadwal kirim agar arus kerja merata.",
      },
      {
        type: "video",
        comp: "WarehouseFlowVideo",
        title: "Dari Pesanan ke Pengambilan",
        caption: "Lihat bagaimana picking jadi titik biaya terbesar dalam aliran gudang.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Pareto Frekuensi Pengambilan (slotting ABC)",
        unit: "% total pengambilan",
        source: "ilustrasi pola Pareto yang umum di gudang",
        note: "Sekitar 20% jenis barang (kelompok A) menyumbang sekitar 80% aktivitas pengambilan.",
        data: [
          { label: "A (20% barang)", value: 80, color: "#f87171" },
          { label: "B (30% barang)", value: 15, color: "#fbbf24" },
          { label: "C (50% barang)", value: 5, color: "#60a5fa" },
        ],
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jarak Jalan Kaki per Pesanan menurut Strategi (ilustrasi)",
        unit: "meter rata-rata per pesanan",
        source: "ilustrasi edukatif",
        note: "Batch picking menggabungkan banyak pesanan dalam satu putaran sehingga jarak per pesanan turun.",
        data: [
          { label: "Single order", value: 120, color: "#f87171" },
          { label: "Zone", value: 80, color: "#fbbf24" },
          { label: "Batch", value: 45, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Gudang apotek online",
        html: "Sebuah apotek online memproses 600 pesanan per hari. Awalnya satu pekerja mengambil satu pesanan sekali jalan, menempuh rata-rata 120 meter per pesanan. Setelah menerapkan <strong>batch picking</strong> 8 pesanan sekaligus dan memindahkan 50 obat terlaris ke <em>golden zone</em>, jarak rata-rata turun ke 45 meter per pesanan. Total jarak harian turun dari 72.000 meter menjadi 27.000 meter, memangkas waktu dan kelelahan pekerja secara signifikan.",
      },
      {
        type: "case",
        title: "Sejarah: Prinsip Pareto (1896)",
        html: "Pada sekitar <strong>1896</strong>, ekonom Italia <strong>Vilfredo Pareto</strong> mencatat bahwa sekitar 80% tanah di Italia dimiliki oleh sekitar 20% penduduk. Pola 80/20 ini kemudian dikenal sebagai <strong>Prinsip Pareto</strong> dan jadi dasar slotting ABC: sebagian kecil jenis barang menyumbang sebagian besar aktivitas. Memahami pola lama ini membantu gudang modern menata barang dengan cerdas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah gudang punya 600 pesanan per hari. Dengan single picking jaraknya 120 m per pesanan; dengan batch picking turun ke 45 m per pesanan. Berapa meter total jarak yang dihemat per hari?",
        answer: 45000,
        tolerance: 0,
        suffix: "m",
        solution:
          "Selisih jarak per pesanan = 120 - 45 = 75 m. Total hemat = 75 x 600 = <strong>45.000 m</strong> per hari.",
        hint: "Hitung selisih jarak per pesanan dulu, lalu kalikan jumlah pesanan.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan barang ke kelas slotting ABC berdasarkan frekuensi pengambilannya.",
        buckets: ["Kelas A (sangat sering)", "Kelas B (sedang)", "Kelas C (jarang)"],
        items: [
          { text: "Pulsa fisik terlaris diambil 300 kali per hari", bucket: "Kelas A (sangat sering)" },
          { text: "Charger HP populer diambil 200 kali per hari", bucket: "Kelas A (sangat sering)" },
          { text: "Casing model lama diambil 40 kali per hari", bucket: "Kelas B (sedang)" },
          { text: "Kabel khusus diambil 30 kali per hari", bucket: "Kelas B (sedang)" },
          { text: "Aksesori musiman diambil 3 kali per minggu", bucket: "Kelas C (jarang)" },
          { text: "Suku cadang langka diambil 1 kali per bulan", bucket: "Kelas C (jarang)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Picking adalah biaya tenaga kerja terbesar, jadi target utama optimasi gudang.",
          "Slotting ABC menaruh barang tersering diambil (kelas A) paling dekat dan di golden zone.",
          "Golden zone adalah rak setinggi pinggang sampai bahu, mengurangi membungkuk dan memanjat.",
          "Batch, zone, dan wave picking memangkas jarak jalan kaki dengan cara berbeda.",
          "Prinsip Pareto 80/20 mendasari mengapa sebagian kecil barang menyumbang sebagian besar pengambilan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama slotting ABC?",
            options: [
              "Mengacak barang agar tidak dicuri",
              "Menaruh barang tersering diambil di lokasi paling mudah dijangkau",
              "Menumpuk semua barang di rak tertinggi",
              "Menyimpan barang menurut abjad nama",
            ],
            answer: 1,
            explain: "ABC slotting menempatkan barang kelas A yang paling sering diambil di lokasi terdekat dan ternyaman.",
          },
          {
            q: "Apa itu golden zone pada rak gudang?",
            options: [
              "Rak paling atas dekat atap",
              "Area setinggi pinggang sampai bahu yang paling mudah diambil",
              "Lantai paling bawah",
              "Zona khusus barang mahal",
            ],
            answer: 1,
            explain: "Golden zone (sekitar 75 sampai 150 cm) membuat pengambilan cepat tanpa membungkuk atau memanjat.",
          },
          {
            q: "Strategi picking mana yang mengambil banyak pesanan sekaligus dalam satu putaran?",
            options: ["Zone picking", "Batch picking", "Wave picking", "Single picking"],
            answer: 1,
            explain: "Batch picking menggabungkan banyak pesanan sehingga jarak jalan kaki per pesanan turun.",
          },
          {
            q: "Pola 80/20 dalam slotting berasal dari prinsip siapa?",
            options: ["Henry Ford", "Vilfredo Pareto", "Frederick Taylor", "Adam Smith"],
            answer: 1,
            explain: "Prinsip Pareto (sekitar 1896) menyatakan sebagian kecil sebab menyumbang sebagian besar akibat.",
          },
          {
            q: "Jika single picking 120 m dan batch picking 45 m per pesanan, berapa hemat per pesanan?",
            options: ["45 m", "75 m", "120 m", "165 m"],
            answer: 1,
            explain: "120 - 45 = 75 m dihemat untuk setiap pesanan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "packing-dan-pengemasan",
    levelId: "warehousing",
    order: 3,
    title: "Packing & Pengemasan",
    summary:
      "Kemasan yang tepat melindungi barang sekaligus menekan ongkos kirim. Pelajari efisiensi kemasan, dimensional weight, dan proteksi produk.",
    durationMin: 14,
    tags: ["warehousing", "packing", "pengemasan"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah barang diambil (picking), tahap berikutnya adalah <strong>packing</strong>: mengemas barang agar aman sampai tujuan dan diberi label. Kemasan bukan urusan sepele. Kemasan terlalu besar membuat ongkos kirim membengkak; terlalu tipis membuat barang rusak dan harus dikirim ulang. Keduanya menambah biaya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_warehouse_full_of_USAID_goods_-_20110826-FS-LSC-0046_-_Flickr_-_USDAgov.jpg?width=400",
        alt: "Gudang penuh tumpukan kardus dan karung barang siap dikemas dan dikirim",
        caption: "Aneka barang menunggu dikemas dan dikirim; memilih ukuran kotak yang pas untuk tiap barang menentukan ongkos kirim dan keamanannya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dimensional weight (berat volumetrik)",
        html: "Jasa kirim menagih berdasarkan yang lebih besar antara <strong>berat asli</strong> dan <strong>berat dimensi</strong>. Berat dimensi (kg) = panjang x lebar x tinggi (cm) dibagi <strong>5.000</strong> atau <strong>6.000</strong> tergantung kurir. Kotak besar tapi ringan tetap mahal karena memakan ruang truk.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Hemat ruang, hemat ongkos",
        html: "Pilih ukuran kotak sedekat mungkin dengan ukuran barang. Kurangi rongga kosong, gunakan pengganjal seperlunya, dan susun barang agar volume minimal. Mengecilkan kotak sering memangkas ongkos kirim lebih besar daripada menawar tarif.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Jangan korbankan proteksi",
        html: "Menghemat bahan kemasan jadi sia sia bila barang pecah. Produk rapuh butuh bantalan (bubble wrap, kertas), produk cair butuh segel anti bocor, dan elektronik butuh proteksi anti statis. Biaya retur akibat kerusakan jauh lebih mahal daripada bahan pelindung.",
      },
      {
        type: "video",
        comp: "WarehouseFlowVideo",
        title: "Tahap Packing dalam Aliran Gudang",
        caption: "Packing menjembatani picking dan shipping; di sinilah ukuran kemasan menentukan ongkos.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Berat Asli vs Berat Dimensi sebuah Paket (ilustrasi)",
        unit: "kg",
        source: "ilustrasi edukatif, pembagi 5.000",
        note: "Bantal tidur ringan tapi besar: berat dimensi jauh melebihi berat asli, sehingga ongkos dihitung dari yang lebih besar.",
        data: [
          { label: "Berat asli", value: 2, color: "#60a5fa" },
          { label: "Berat dimensi", value: 9, color: "#f87171" },
        ],
      },
      {
        type: "chart",
        variant: "donut",
        title: "Penyebab Retur akibat Kemasan (ilustrasi)",
        unit: "% kasus retur kemasan",
        source: "ilustrasi pola yang umum di e-commerce",
        note: "Sebagian besar kerusakan kiriman berasal dari proteksi kurang dan kotak salah ukuran.",
        data: [
          { label: "Proteksi kurang", value: 45, color: "#f87171" },
          { label: "Kotak terlalu besar (barang geser)", value: 30, color: "#fbbf24" },
          { label: "Segel bocor", value: 15, color: "#60a5fa" },
          { label: "Lainnya", value: 10, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Toko sepatu online ganti ukuran kotak",
        html: "Sebuah toko sepatu mengirim semua pesanan dalam satu ukuran kotak besar 40 x 30 x 20 cm. Berat dimensi = (40 x 30 x 20) / 5.000 = 24.000 / 5.000 = <strong>4,8 kg</strong>, padahal sepatu hanya 1,2 kg, jadi ongkos dihitung 4,8 kg. Setelah pindah ke kotak pas 32 x 22 x 12 cm, berat dimensi = (32 x 22 x 12) / 5.000 = 8.448 / 5.000 = sekitar <strong>1,7 kg</strong>. Ongkos kirim per paket turun drastis tanpa mengurangi proteksi.",
      },
      {
        type: "case",
        title: "Sejarah: Kelahiran kotak kardus bergelombang (1871)",
        html: "Pada <strong>1871</strong>, <strong>Albert Jones</strong> dari New York mematenkan kertas bergelombang (corrugated) sebagai pembungkus pelindung. Tak lama, kotak kardus bergelombang menggantikan peti kayu yang berat dan mahal. Inovasi ini membuat pengiriman barang massal jadi murah dan ringan, fondasi logistik modern dan e-commerce hari ini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kotak berukuran 50 x 40 x 30 cm. Dengan pembagi 5.000, berapa berat dimensinya dalam kilogram?",
        answer: 12,
        tolerance: 0.1,
        suffix: "kg",
        solution:
          "Volume = 50 x 40 x 30 = 60.000 cm3. Berat dimensi = 60.000 / 5.000 = <strong>12 kg</strong>. Jika berat asli kurang dari 12 kg, ongkos tetap dihitung 12 kg.",
        hint: "Kalikan ketiga sisi lalu bagi dengan 5.000.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan jenis produk dengan kebutuhan proteksi kemasannya.",
        pairs: [
          { left: "Gelas kaca", right: "Bubble wrap dan pengganjal anti benturan" },
          { left: "Botol sirup", right: "Segel anti bocor dan kantong dalam" },
          { left: "Motherboard komputer", right: "Kantong anti statis" },
          { left: "Buku", right: "Amplop berlapis kaku agar tidak tertekuk" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Packing melindungi barang sekaligus menentukan ongkos kirim lewat ukuran kemasan.",
          "Ongkos kirim dihitung dari nilai terbesar antara berat asli dan berat dimensi.",
          "Berat dimensi (kg) = panjang x lebar x tinggi (cm) dibagi 5.000 atau 6.000.",
          "Kotak pas mengurangi rongga, memangkas ongkos, dan menahan barang agar tidak bergeser.",
          "Hemat bahan tidak boleh mengorbankan proteksi; biaya retur jauh lebih mahal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Ongkos kirim biasanya dihitung berdasarkan?",
            options: [
              "Selalu berat asli barang",
              "Nilai terbesar antara berat asli dan berat dimensi",
              "Selalu berat dimensi",
              "Jumlah barang di dalam kotak",
            ],
            answer: 1,
            explain: "Kurir menagih dari yang lebih besar agar kotak besar tapi ringan tetap adil karena memakan ruang.",
          },
          {
            q: "Rumus berat dimensi (kg) dengan pembagi 5.000 adalah?",
            options: [
              "(P + L + T) / 5.000",
              "(P x L x T) / 5.000 dengan ukuran cm",
              "P x L x T x 5.000",
              "Berat asli x 5.000",
            ],
            answer: 1,
            explain: "Volume dalam cm3 dibagi 5.000 menghasilkan berat dimensi dalam kg.",
          },
          {
            q: "Kotak 50 x 40 x 30 cm dengan pembagi 5.000 punya berat dimensi?",
            options: ["6 kg", "12 kg", "24 kg", "60 kg"],
            answer: 1,
            explain: "60.000 cm3 / 5.000 = 12 kg.",
          },
          {
            q: "Mengapa kotak yang terlalu besar merugikan?",
            options: [
              "Selalu lebih murah",
              "Menaikkan berat dimensi dan membuat barang bergeser sehingga rawan rusak",
              "Membuat barang lebih ringan",
              "Tidak berpengaruh apa apa",
            ],
            answer: 1,
            explain: "Rongga besar menaikkan ongkos lewat berat dimensi dan membiarkan barang berbenturan.",
          },
          {
            q: "Inovasi 1871 oleh Albert Jones yang menjadi fondasi pengemasan murah adalah?",
            options: [
              "Plastik gelembung",
              "Kertas bergelombang (corrugated) untuk kardus",
              "Peti kayu",
              "Pita perekat",
            ],
            answer: 1,
            explain: "Paten kertas bergelombang membuat kotak kardus ringan dan murah menggantikan peti kayu.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cross-docking",
    levelId: "warehousing",
    order: 4,
    title: "Cross Docking",
    summary:
      "Bagaimana jika barang tidak perlu disimpan sama sekali? Cross docking memindahkan barang langsung dari dok masuk ke dok keluar untuk kecepatan maksimal.",
    durationMin: 13,
    tags: ["warehousing", "cross-docking", "distribusi"],
    blocks: [
      {
        type: "paragraph",
        html: "Selama ini kita anggap gudang adalah tempat menyimpan. Tapi ada model yang nyaris tanpa simpan: <strong>cross docking</strong>. Barang dari truk pemasok dibongkar di dok masuk, langsung disortir, lalu dimuat ke truk pengiriman di dok keluar dalam hitungan jam, tanpa pernah masuk rak penyimpanan.",
      },
      {
        type: "paragraph",
        html: "Tujuannya memangkas dua biaya besar gudang sekaligus: <strong>penyimpanan</strong> dan <strong>penanganan ganda</strong> (putaway lalu picking). Barang hanya disentuh untuk disortir dan diteruskan. Cocok untuk barang dengan permintaan stabil dan pasokan yang bisa diandalkan waktunya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_warehouse_full_of_USAID_goods_-_20110826-FS-LSC-0046_-_Flickr_-_USDAgov.jpg?width=400",
        alt: "Barang tertata rapi di lantai dok gudang siap disortir dan dimuat ulang",
        caption: "Di cross docking barang dibongkar di dok masuk, disortir di lantai, lalu langsung dimuat ke truk keluar tanpa pernah masuk rak penyimpanan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Syarat keberhasilan cross docking",
        html: "Butuh <strong>jadwal pasokan yang presisi</strong>, <strong>informasi pesanan akurat</strong> sebelum barang tiba, dan <strong>koordinasi transportasi</strong> masuk dan keluar yang rapat. Jika satu truk telat, seluruh sinkronisasi rusak dan barang menumpuk di dok.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bukan untuk semua barang",
        html: "Cross docking lemah untuk permintaan yang fluktuatif atau pasokan tak menentu. Tanpa stok penyangga, satu gangguan kecil bisa membuat pesanan gagal terpenuhi. Barang bernilai tinggi yang butuh inspeksi mendetail juga kurang cocok.",
      },
      {
        type: "video",
        comp: "WarehouseFlowVideo",
        title: "Aliran Tanpa Simpan",
        caption: "Bandingkan jalur gudang biasa dengan cross docking yang melompati storage dan picking.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Waktu Tinggal Barang: Gudang Biasa vs Cross Docking (ilustrasi)",
        unit: "jam barang berada di fasilitas",
        source: "ilustrasi edukatif",
        note: "Cross docking memangkas waktu tinggal dari hitungan hari menjadi hitungan jam.",
        data: [
          { label: "Gudang simpan biasa", value: 72, color: "#f87171" },
          { label: "Cross docking", value: 6, color: "#34d399" },
        ],
      },
      {
        type: "chart",
        variant: "donut",
        title: "Komposisi Sentuhan Barang di Cross Docking (ilustrasi)",
        unit: "% aktivitas penanganan",
        source: "ilustrasi edukatif",
        note: "Tanpa putaway dan picking, aktivitas mengerucut ke bongkar, sortir, dan muat.",
        data: [
          { label: "Bongkar", value: 35, color: "#60a5fa" },
          { label: "Sortir", value: 35, color: "#fbbf24" },
          { label: "Muat", value: 30, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Distribusi sayur segar ke supermarket",
        html: "Sebuah jaringan supermarket menerima sayur dari banyak petani setiap subuh. Sayur tidak tahan lama, jadi disimpan justru merugikan. Dengan <strong>cross docking</strong>, truk petani tiba pukul 04.00, sayur disortir per cabang, dan dimuat ke truk distribusi pukul 06.00. Waktu tinggal hanya sekitar 2 jam, kesegaran terjaga, dan biaya pendinginan gudang nyaris nol. Kuncinya: jadwal kedatangan petani yang disiplin dan daftar pesanan cabang yang sudah pasti sejak malam.",
      },
      {
        type: "case",
        title: "Sejarah: Walmart memasalkan cross docking (1980-an)",
        html: "Pada <strong>1980-an</strong>, <strong>Walmart</strong> menjadikan cross docking inti strategi logistiknya. Barang dari pemasok langsung dipindah antar truk di pusat distribusi tanpa disimpan, lalu dikirim ke toko dalam waktu singkat. Praktik ini memangkas biaya persediaan secara besar dan membantu Walmart menawarkan harga rendah, salah satu rahasia dominasinya selama bertahun tahun.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan gudang simpan biasa, sebuah barang berada di fasilitas 72 jam. Dengan cross docking hanya 6 jam. Berapa persen pengurangan waktu tinggalnya?",
        answer: 91.7,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Pengurangan = (72 - 6) / 72 = 66 / 72 = 0,9167 = sekitar <strong>91,7%</strong>. Waktu tinggal dipangkas drastis.",
        hint: "Bagi selisih waktu dengan waktu awal, lalu jadikan persen.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan barang apakah cocok atau kurang cocok untuk cross docking.",
        buckets: ["Cocok cross docking", "Kurang cocok"],
        items: [
          { text: "Sayur segar dengan pesanan cabang sudah pasti", bucket: "Cocok cross docking" },
          { text: "Produk laris dengan pasokan terjadwal harian", bucket: "Cocok cross docking" },
          { text: "Koran harian yang harus tiba pagi", bucket: "Cocok cross docking" },
          { text: "Barang impor yang butuh inspeksi mendetail", bucket: "Kurang cocok" },
          { text: "Produk dengan permintaan naik turun tak terduga", bucket: "Kurang cocok" },
          { text: "Barang mahal yang perlu disimpan aman lama", bucket: "Kurang cocok" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Cross docking memindahkan barang dari dok masuk ke dok keluar tanpa disimpan di rak.",
          "Ia memangkas biaya penyimpanan dan penanganan ganda (putaway lalu picking).",
          "Syaratnya jadwal pasokan presisi, informasi pesanan akurat, dan transportasi tersinkron.",
          "Cocok untuk barang segar atau permintaan stabil; lemah untuk permintaan fluktuatif.",
          "Walmart pada 1980-an mempopulerkannya untuk menekan biaya dan menawarkan harga rendah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa ciri utama cross docking?",
            options: [
              "Barang disimpan lama di rak",
              "Barang langsung dipindah dari dok masuk ke dok keluar tanpa disimpan",
              "Barang dijual langsung di gudang",
              "Barang diproduksi di gudang",
            ],
            answer: 1,
            explain: "Cross docking melompati storage dan picking, barang hanya disortir lalu diteruskan.",
          },
          {
            q: "Dua biaya yang dipangkas cross docking adalah?",
            options: [
              "Gaji dan pajak",
              "Penyimpanan dan penanganan ganda",
              "Listrik dan air",
              "Iklan dan pemasaran",
            ],
            answer: 1,
            explain: "Tanpa simpan dan tanpa putaway-picking, biaya penyimpanan dan penanganan ganda hilang.",
          },
          {
            q: "Apa syarat penting agar cross docking berhasil?",
            options: [
              "Rak penyimpanan yang sangat tinggi",
              "Jadwal pasokan presisi dan informasi pesanan akurat",
              "Banyak stok cadangan di gudang",
              "Barang yang tahan disimpan bertahun tahun",
            ],
            answer: 1,
            explain: "Sinkronisasi truk masuk dan keluar serta data pesanan akurat adalah kunci.",
          },
          {
            q: "Barang mana paling cocok untuk cross docking?",
            options: [
              "Barang impor yang butuh inspeksi mendetail",
              "Sayur segar dengan pesanan cabang sudah pasti",
              "Barang dengan permintaan tak menentu",
              "Barang mahal yang disimpan lama",
            ],
            answer: 1,
            explain: "Barang segar dengan pesanan pasti diuntungkan kecepatan tanpa simpan.",
          },
          {
            q: "Waktu tinggal turun dari 72 jam ke 6 jam, berarti pengurangan sekitar?",
            options: ["50%", "75%", "Sekitar 92%", "Sekitar 99%"],
            answer: 2,
            explain: "(72 - 6) / 72 = sekitar 91,7%, jadi sekitar 92%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cold-chain-rantai-dingin",
    levelId: "warehousing",
    order: 5,
    title: "Cold Chain (Rantai Dingin)",
    summary:
      "Beberapa barang akan rusak jika suhunya naik sebentar saja. Pelajari rantai dingin untuk pangan, vaksin, dan perikanan, serta bahaya putus rantai.",
    durationMin: 15,
    tags: ["warehousing", "cold-chain", "rantai-dingin"],
    blocks: [
      {
        type: "paragraph",
        html: "Es krim, ikan segar, daging, susu, dan vaksin punya satu kesamaan: mereka rusak bila suhunya naik. <strong>Cold chain</strong> atau rantai dingin adalah jaringan penyimpanan dan pengangkutan yang menjaga suhu tetap dingin dari titik asal sampai ke tangan konsumen, tanpa terputus sedetik pun yang berarti.",
      },
      {
        type: "paragraph",
        html: "Rantai ini mencakup gudang berpendingin (cold storage), truk berinsulasi (reefer), kontainer dingin, sampai lemari es toko. Setiap tahap harus menjaga suhu sesuai jenis barang. Susu dan sayur cukup sekitar 2 sampai 8 derajat Celsius, daging beku sekitar -18 derajat, sebagian vaksin butuh jauh lebih dingin.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cold_storage_warehouse_in_Denver%2C_Colorado.jpg?width=400",
        alt: "Interior gudang penyimpanan dingin dengan rak tinggi penuh barang beku",
        caption: "Cold storage menjaga suhu rendah yang stabil; ia adalah mata rantai pertama yang melindungi pangan dan vaksin agar tidak rusak.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Putus rantai dingin",
        html: "Jika suhu naik melewati ambang, walau sebentar, kualitas turun dan bakteri tumbuh. Vaksin yang rusak suhu bisa kehilangan khasiat tanpa terlihat berubah. Inilah mengapa pemantauan suhu dengan <strong>data logger</strong> sepanjang perjalanan wajib, bukan opsional.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Suhu menentukan umur simpan",
        html: "Hukum sederhana: makin dingin, makin lama umur simpan, sampai batas tertentu. Ikan segar di suhu ruang basi dalam hitungan jam; di sekitar 0 derajat bisa bertahan berhari hari; dibekukan bisa berbulan bulan. Maka memilih suhu yang tepat adalah keputusan ekonomi sekaligus keselamatan.",
      },
      {
        type: "video",
        comp: "ColdChainVideo",
        title: "Menjaga Rantai Dingin Tetap Utuh",
        caption: "Dari cold storage ke truk reefer sampai rak toko, satu mata rantai putus merusak semuanya.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Sedalam Apa Pendinginan yang Dibutuhkan",
        unit: "derajat C di bawah suhu ruang (~25 C)",
        source: "rentang umum praktik cold chain",
        note: "Makin rendah suhu target, makin dalam pendinginan yang dibutuhkan; vaksin tertentu paling ekstrem (target -70 C, sekitar 95 C di bawah suhu ruang).",
        data: [
          { label: "Sayur & susu (5 C)", value: 20, color: "#34d399" },
          { label: "Daging segar (0 C)", value: 25, color: "#60a5fa" },
          { label: "Ikan beku (-18 C)", value: 43, color: "#818cf8" },
          { label: "Vaksin Pfizer (-70 C)", value: 95, color: "#f87171" },
        ],
      },
      {
        type: "chart",
        variant: "line",
        title: "Umur Simpan Ikan Segar menurut Suhu (ilustrasi)",
        unit: "hari sampai tidak layak",
        source: "ilustrasi pola yang umum diketahui",
        note: "Makin rendah suhu, makin panjang umur simpan ikan segar.",
        data: [
          { label: "25 C", value: 0.3, color: "#f87171" },
          { label: "10 C", value: 2, color: "#fbbf24" },
          { label: "4 C", value: 5, color: "#60a5fa" },
          { label: "0 C", value: 9, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sistem Logistik Ikan Nasional",
        html: "Indonesia adalah negara penghasil ikan besar, tapi banyak ikan rusak sebelum sampai pasar karena rantai dingin lemah. Gagasan <strong>Sistem Logistik Ikan Nasional (SLIN)</strong> mendorong cold storage di pelabuhan, truk berpendingin, dan pasokan es yang cukup. Bayangkan nelayan menangkap 1.000 kg ikan; bila 30% rusak karena suhu naik, 300 kg terbuang. Memperbaiki rantai dingin sampai susut tinggal 5% menyelamatkan 250 kg ikan layak jual dari setiap tangkapan itu.",
      },
      {
        type: "case",
        title: "Sejarah: Vaksin COVID-19 dan suhu -70 derajat (2020 sampai 2021)",
        html: "Saat pandemi <strong>COVID-19</strong>, vaksin mRNA buatan <strong>Pfizer-BioNTech</strong> harus disimpan pada sekitar <strong>-70 derajat Celsius</strong>, jauh lebih dingin daripada freezer biasa. Ini memicu lomba global menyediakan freezer ultra dingin dan kotak es kering. Negara dengan rantai dingin lemah kesulitan mendistribusikan vaksin ke daerah terpencil. Peristiwa ini menunjukkan betapa rantai dingin bisa menjadi penentu hidup mati.",
      },
      {
        type: "calcExercise",
        prompt:
          "Nelayan menangkap 1.000 kg ikan. Dengan rantai dingin buruk 30% rusak; setelah diperbaiki susut tinggal 5%. Berapa kilogram ikan tambahan yang terselamatkan?",
        answer: 250,
        tolerance: 0,
        suffix: "kg",
        solution:
          "Rusak buruk = 30% x 1.000 = 300 kg. Rusak baik = 5% x 1.000 = 50 kg. Tambahan terselamatkan = 300 - 50 = <strong>250 kg</strong>.",
        hint: "Hitung kerusakan pada kedua kondisi lalu cari selisihnya.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan barang dengan suhu penyimpanan yang umumnya tepat.",
        pairs: [
          { left: "Susu segar", right: "Sekitar 2 sampai 8 derajat C" },
          { left: "Ikan beku", right: "Sekitar -18 derajat C" },
          { left: "Vaksin mRNA Pfizer", right: "Sekitar -70 derajat C" },
          { left: "Pisang matang", right: "Suhu sejuk sekitar 13 derajat C" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Cold chain menjaga suhu dingin tanpa putus dari asal sampai konsumen.",
          "Tiap barang punya suhu target sendiri; vaksin tertentu butuh sangat dingin.",
          "Putus rantai dingin merusak kualitas dan bisa menghilangkan khasiat vaksin diam diam.",
          "Pemantauan suhu dengan data logger sepanjang perjalanan adalah keharusan.",
          "Rantai dingin yang baik menekan susut pangan, penting bagi perikanan Indonesia.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu cold chain?",
            options: [
              "Rantai toko yang menjual barang dingin",
              "Jaringan penyimpanan dan pengangkutan yang menjaga suhu dingin tanpa putus",
              "Mesin pembuat es",
              "Daftar barang beku di gudang",
            ],
            answer: 1,
            explain: "Cold chain menjaga suhu sesuai kebutuhan barang sepanjang perjalanan.",
          },
          {
            q: "Mengapa putus rantai dingin pada vaksin berbahaya?",
            options: [
              "Vaksin jadi lebih kuat",
              "Vaksin bisa kehilangan khasiat tanpa terlihat berubah",
              "Vaksin berubah warna mencolok",
              "Tidak ada pengaruh sama sekali",
            ],
            answer: 1,
            explain: "Kerusakan akibat suhu sering tak kasat mata, sehingga pemantauan suhu wajib.",
          },
          {
            q: "Vaksin mRNA Pfizer pada masa COVID-19 disimpan pada suhu sekitar?",
            options: ["5 derajat C", "-18 derajat C", "-70 derajat C", "0 derajat C"],
            answer: 2,
            explain: "Vaksin Pfizer-BioNTech butuh sekitar -70 derajat C, jauh lebih dingin daripada freezer biasa.",
          },
          {
            q: "Alat apa yang dipakai memantau suhu sepanjang perjalanan barang dingin?",
            options: ["Timbangan", "Data logger suhu", "Barcode scanner", "Forklift"],
            answer: 1,
            explain: "Data logger merekam suhu terus menerus untuk membuktikan rantai dingin tidak putus.",
          },
          {
            q: "Dari 1.000 kg ikan, susut turun dari 30% menjadi 5%. Berapa kg terselamatkan?",
            options: ["50 kg", "250 kg", "300 kg", "700 kg"],
            answer: 1,
            explain: "300 kg dikurangi 50 kg sama dengan 250 kg ikan tambahan yang layak jual.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "otomasi-gudang",
    levelId: "warehousing",
    order: 6,
    title: "Otomasi Gudang",
    summary:
      "Robot, conveyor, dan rak otomatis bisa mempercepat gudang, tapi tidak selalu layak. Pelajari jenis otomasi dan kapan investasinya masuk akal.",
    durationMin: 15,
    tags: ["warehousing", "otomasi", "robot"],
    blocks: [
      {
        type: "paragraph",
        html: "Otomasi gudang menggantikan sebagian kerja manual dengan mesin: <strong>conveyor</strong> mengalirkan barang antar zona, <strong>AS/RS</strong> (Automated Storage and Retrieval System) menyimpan dan mengambil barang dari rak tinggi secara otomatis, serta <strong>robot</strong> dan <strong>AMR</strong> (Autonomous Mobile Robot) yang membawa rak atau barang ke pekerja.",
      },
      {
        type: "paragraph",
        html: "Daya tarik otomasi adalah kecepatan, akurasi, dan kemampuan bekerja tanpa lelah 24 jam. Tetapi mesin mahal di muka dan kaku terhadap perubahan. Kuncinya bukan secanggih apa, melainkan <strong>kapan</strong> otomasi benar benar mengembalikan investasinya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Autonomous_Mobile_Robot_AMR.png?width=400",
        alt: "Robot gudang otonom (AMR) yang membawa muatan secara mandiri",
        caption: "AMR (Autonomous Mobile Robot) membawa rak atau barang ke pekerja; investasi seperti ini layak saat volume tinggi dan stabil.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kapan otomasi layak",
        html: "Otomasi cenderung layak bila <strong>volume tinggi dan stabil</strong>, pekerjaan <strong>berulang</strong>, upah tenaga kerja terus naik, dan ruang mahal sehingga rak tinggi otomatis menghemat lahan. Sebaliknya, untuk volume rendah atau produk yang sering berganti, fleksibilitas manusia sering lebih murah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Otomasi menukar biaya tenaga kerja dengan investasi mesin. Geser volume, upah, dan biaya alat untuk melihat berapa lama investasi otomasi balik modal (payback).",
      },
      { type: "widget", widget: "KalkulatorOtomasiGudang" },
      {
        type: "callout",
        tone: "warn",
        title: "Otomasi bukan obat segala",
        html: "Mesin yang salah pilih bisa menganggur saat permintaan turun, tetap menelan biaya perawatan dan listrik. Otomasi juga butuh sistem informasi yang matang; tanpa data rapi, robot hanya mempercepat kekacauan.",
      },
      {
        type: "video",
        comp: "WarehouseFlowVideo",
        title: "Di Mana Otomasi Masuk",
        caption: "Conveyor, AS/RS, dan robot mengisi tahap putaway, storage, dan picking.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tingkat Otomasi vs Biaya per Pesanan (ilustrasi)",
        unit: "biaya relatif per pesanan",
        source: "ilustrasi edukatif",
        note: "Saat volume tinggi, biaya per pesanan turun seiring otomasi karena tenaga kerja per unit berkurang.",
        data: [
          { label: "Manual penuh", value: 100, color: "#f87171" },
          { label: "Semi otomatis", value: 70, color: "#fbbf24" },
          { label: "Otomatis penuh", value: 45, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Gudang e-commerce hitung payback robot",
        html: "Sebuah gudang mempertimbangkan robot AMR seharga <strong>Rp 2 miliar</strong> yang menghemat biaya tenaga kerja <strong>Rp 500 juta per tahun</strong>. Payback sederhana = 2.000 / 500 = <strong>4 tahun</strong>. Jika umur ekonomis robot 8 tahun, investasi balik modal di tengah jalan lalu menghemat di sisa umurnya. Tapi bila volume pesanan diperkirakan turun, penghematan tahunan ikut turun dan payback molor, membuat keputusan jadi lebih berisiko.",
      },
      {
        type: "case",
        title: "Sejarah: AS/RS pertama dan demam otomasi (1960-an)",
        html: "Sistem penyimpanan dan pengambilan otomatis pertama, <strong>AS/RS</strong>, mulai dipasang di gudang industri pada sekitar <strong>1960-an</strong>, digerakkan crane otomatis di lorong rak tinggi. Beberapa dekade kemudian, akuisisi <strong>Kiva</strong> oleh Amazon pada 2012 membawa robot mobile ke arus utama. Sejarah ini menunjukkan otomasi gudang berkembang bertahap, bukan muncul tiba tiba.",
      },
      {
        type: "calcExercise",
        prompt:
          "Robot otomasi berharga Rp 2 miliar menghemat biaya tenaga kerja Rp 500 juta per tahun. Berapa tahun payback sederhananya?",
        answer: 4,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "Payback = investasi / penghematan tahunan = 2.000 juta / 500 juta = <strong>4 tahun</strong>.",
        hint: "Bagi nilai investasi dengan penghematan per tahun.",
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan kondisi gudang lebih condong ke otomasi atau tetap manual.",
        buckets: ["Condong otomasi", "Tetap manual"],
        items: [
          { text: "Volume pesanan sangat tinggi dan stabil sepanjang tahun", bucket: "Condong otomasi" },
          { text: "Pekerjaan picking berulang dan seragam", bucket: "Condong otomasi" },
          { text: "Lahan sangat mahal sehingga rak tinggi menghemat ruang", bucket: "Condong otomasi" },
          { text: "Produk sering berganti bentuk dan ukuran", bucket: "Tetap manual" },
          { text: "Volume rendah dan musiman", bucket: "Tetap manual" },
          { text: "Anggaran investasi awal sangat terbatas", bucket: "Tetap manual" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Otomasi gudang mencakup conveyor, AS/RS, serta robot dan AMR.",
          "Daya tariknya kecepatan, akurasi, dan kerja tanpa lelah, tapi mahal di muka dan kaku.",
          "Otomasi layak saat volume tinggi stabil, pekerjaan berulang, upah naik, dan lahan mahal.",
          "Payback sederhana = nilai investasi dibagi penghematan tahunan.",
          "Tanpa sistem informasi rapi, robot hanya mempercepat kekacauan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi AS/RS di gudang?",
            options: [
              "Menjual barang ke pelanggan",
              "Menyimpan dan mengambil barang dari rak secara otomatis",
              "Mencetak label pengiriman",
              "Mendinginkan ruangan",
            ],
            answer: 1,
            explain: "AS/RS (Automated Storage and Retrieval System) mengotomatiskan penyimpanan dan pengambilan di rak tinggi.",
          },
          {
            q: "Kapan otomasi gudang paling layak?",
            options: [
              "Volume rendah dan produk sering berganti",
              "Volume tinggi stabil dengan pekerjaan berulang",
              "Saat anggaran sangat terbatas",
              "Saat data sistem masih berantakan",
            ],
            answer: 1,
            explain: "Volume tinggi dan stabil membuat mesin terpakai penuh sehingga investasi cepat balik.",
          },
          {
            q: "Robot Rp 2 miliar hemat Rp 500 juta per tahun. Payback sederhananya?",
            options: ["2 tahun", "4 tahun", "8 tahun", "10 tahun"],
            answer: 1,
            explain: "2.000 juta dibagi 500 juta per tahun sama dengan 4 tahun.",
          },
          {
            q: "Apa risiko otomasi saat permintaan turun?",
            options: [
              "Mesin jadi lebih murah",
              "Mesin menganggur tapi tetap menelan biaya perawatan dan listrik",
              "Penghematan tahunan naik",
              "Tidak ada risiko",
            ],
            answer: 1,
            explain: "Mesin yang menganggur tetap berbiaya, membuat investasi kurang menguntungkan.",
          },
          {
            q: "Teknologi AS/RS pertama mulai dipasang di gudang pada sekitar?",
            options: ["1920-an", "1960-an", "2000-an", "2012"],
            answer: 1,
            explain: "AS/RS dengan crane otomatis mulai muncul sekitar 1960-an, jauh sebelum robot mobile Kiva (2012).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "warehouse-management-system",
    levelId: "warehousing",
    order: 7,
    title: "Warehouse Management System (WMS)",
    summary:
      "Gudang modern dijalankan oleh otak digital bernama WMS. Pelajari fungsinya, manfaatnya, dan bagaimana ia terhubung dengan sistem lain.",
    durationMin: 14,
    tags: ["warehousing", "wms", "sistem"],
    blocks: [
      {
        type: "paragraph",
        html: "Semua yang kita pelajari, tata letak, slotting, picking, cross docking, otomasi, akan kacau tanpa pencatatan yang akurat. <strong>Warehouse Management System (WMS)</strong> adalah perangkat lunak yang menjadi otak gudang: ia tahu barang apa ada di mana, berapa jumlahnya, dan ke mana harus bergerak berikutnya.",
      },
      {
        type: "paragraph",
        html: "WMS mengarahkan pekerja lewat perangkat genggam atau suara: rak mana yang dituju, berapa yang diambil, jalur tercepat mana. Ia mencatat setiap pergerakan secara real time, mengurangi salah ambil, dan memberi pimpinan gambaran stok yang akurat tanpa harus menghitung manual.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/EAN-13-5901234123457.svg?width=400",
        alt: "Contoh barcode EAN-13 dengan deretan garis dan angka identifikasi produk",
        caption: "Barcode seperti EAN-13 memberi tiap barang identitas unik; inilah cara WMS mengenali dan melacak setiap unit secara cepat dan akurat.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Fungsi inti WMS",
        html: "Mengelola <strong>lokasi dan stok</strong> setiap barang, mengarahkan <strong>putaway dan picking</strong>, mengatur <strong>slotting</strong>, memantau <strong>kinerja</strong> pekerja, serta menjaga <strong>akurasi persediaan</strong> lewat pencatatan setiap transaksi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Integrasi dengan sistem lain",
        html: "WMS jarang berdiri sendiri. Ia terhubung ke <strong>ERP</strong> (sistem perusahaan), <strong>TMS</strong> (sistem transportasi), dan platform <strong>e-commerce</strong>. Pesanan mengalir dari toko online ke WMS, lalu status kirim mengalir kembali, menjaga semua pihak punya data yang sama.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Sampah masuk, sampah keluar",
        html: "WMS hanya seakurat data yang dimasukkan. Jika label salah, lokasi tidak diperbarui, atau scan dilewati, sistem akan menyesatkan. Disiplin scan dan barcode yang rapi adalah syarat agar WMS benar benar membantu.",
      },
      {
        type: "video",
        comp: "WarehouseFlowVideo",
        title: "WMS Mengorkestrasi Aliran Gudang",
        caption: "Dari receiving sampai shipping, WMS mencatat dan mengarahkan setiap langkah.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Akurasi Persediaan: Sebelum vs Sesudah WMS (ilustrasi)",
        unit: "% akurasi stok",
        source: "ilustrasi pola yang umum dilaporkan",
        note: "Pencatatan manual rawan salah; WMS dengan barcode mendorong akurasi mendekati sempurna.",
        data: [
          { label: "Manual (kertas)", value: 80, color: "#f87171" },
          { label: "Dengan WMS + barcode", value: 99, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Distributor obat pasang WMS",
        html: "Sebuah distributor obat sebelumnya mencatat stok di kertas dengan akurasi sekitar <strong>80%</strong>, artinya 1 dari 5 catatan meleset. Salah ambil obat berbahaya bagi pasien. Setelah memasang WMS dengan barcode, akurasi naik ke sekitar <strong>99%</strong>, salah ambil turun drastis, dan pelacakan nomor batch serta tanggal kedaluwarsa jadi otomatis. Saat ada penarikan produk, WMS bisa menemukan batch terdampak dalam hitungan menit, bukan hari.",
      },
      {
        type: "case",
        title: "Sejarah: Barcode pertama dipindai (1974)",
        html: "Pada <strong>1974</strong>, sebungkus permen karet Wrigley menjadi produk pertama yang dipindai dengan <strong>barcode</strong> UPC di sebuah supermarket di Ohio, Amerika Serikat. Barcode mengubah cara dunia melacak barang dan menjadi tulang punggung WMS modern: tanpa identifikasi cepat dan akurat tiap unit, sistem gudang digital tidak akan mungkin berjalan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebelum WMS akurasi stok 80%, sesudah WMS menjadi 99%. Berapa poin persentase kenaikan akurasinya?",
        answer: 19,
        tolerance: 0,
        suffix: "poin",
        solution:
          "Kenaikan = 99% - 80% = <strong>19 poin persentase</strong>. Kesalahan stok turun dari 20% menjadi 1%.",
        hint: "Kurangkan akurasi sesudah dengan akurasi sebelum.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan sistem dengan perannya dalam ekosistem logistik.",
        pairs: [
          { left: "WMS", right: "Mengelola operasi di dalam gudang" },
          { left: "TMS", right: "Mengatur transportasi dan pengiriman" },
          { left: "ERP", right: "Mengelola keuangan dan sumber daya perusahaan" },
          { left: "Platform e-commerce", right: "Menerima pesanan dari pelanggan online" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "WMS adalah perangkat lunak yang menjadi otak gudang, tahu lokasi dan jumlah tiap barang.",
          "Fungsinya mengelola stok, mengarahkan putaway dan picking, serta menjaga akurasi persediaan.",
          "WMS terhubung ke ERP, TMS, dan platform e-commerce agar data konsisten.",
          "Akurasi WMS bergantung pada disiplin scan dan barcode yang rapi.",
          "Barcode yang pertama dipindai pada 1974 menjadi fondasi WMS modern.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa peran utama WMS?",
            options: [
              "Mengatur pengiriman antar kota",
              "Menjadi otak gudang yang mengelola lokasi, stok, dan pergerakan barang",
              "Mengurus gaji karyawan",
              "Memasarkan produk ke pelanggan",
            ],
            answer: 1,
            explain: "WMS mengelola operasi di dalam gudang: lokasi, stok, putaway, picking, dan akurasi persediaan.",
          },
          {
            q: "Sistem mana yang mengatur transportasi dan pengiriman?",
            options: ["WMS", "TMS", "ERP", "CRM"],
            answer: 1,
            explain: "TMS (Transportation Management System) mengelola rute dan pengiriman, di luar tembok gudang.",
          },
          {
            q: "Mengapa disiplin scan barcode penting bagi WMS?",
            options: [
              "Agar gudang terlihat modern",
              "Karena WMS hanya seakurat data yang dimasukkan",
              "Agar pekerja sibuk",
              "Tidak penting sama sekali",
            ],
            answer: 1,
            explain: "Data salah membuat WMS menyesatkan; sampah masuk, sampah keluar.",
          },
          {
            q: "Akurasi stok naik dari 80% ke 99%. Berapa poin persentase kenaikannya?",
            options: ["9 poin", "19 poin", "29 poin", "99 poin"],
            answer: 1,
            explain: "99% dikurangi 80% sama dengan 19 poin persentase.",
          },
          {
            q: "Produk apa yang pertama dipindai dengan barcode pada 1974?",
            options: [
              "Sebotol susu",
              "Sebungkus permen karet Wrigley",
              "Sekaleng minuman",
              "Sebuah buku",
            ],
            answer: 1,
            explain: "Permen karet Wrigley menjadi produk pertama yang dipindai barcode UPC di Ohio pada 1974.",
          },
        ],
      },
    ],
  },
];
