import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "harga-ekspor",
    levelId: "riset",
    order: 4,
    title: "Menyusun Harga Ekspor yang Untung",
    summary:
      "Membangun harga ekspor dari harga beli ke produsen, ditambah biaya ekspor dan margin, menjadi harga FOB dan CIF. Termasuk cara menyebut harga memakai Incoterm.",
    durationMin: 15,
    tags: ["harga ekspor", "FOB", "CIF", "margin"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebagai eksportir non-produsen, kamu tidak menghitung ongkos produksi, melainkan mulai dari <strong>harga beli ke produsen</strong>. Di atas itu kamu menambah biaya ekspor dan margin. Kesalahan pemula yang paling sering: menyebut harga tanpa memasukkan biaya ekspor, lalu margin habis termakan ongkos yang lupa dihitung.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Women_in_Flores_weaving_at_the_beach%2C_Indonesia_Tanah_Airku%2C_p59.jpg?width=500",
        alt: "Perempuan menenun kain di pesisir Flores",
        caption: "Untuk produk tenun dan kerajinan, harga beli ke perajin adalah titik awal menyusun harga ekspor.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus harga ekspor sederhana",
        html: "<strong>Harga FOB per unit = (harga beli + biaya ekspor lokal per unit) x (1 + margin)</strong>. Biaya ekspor lokal mencakup packing ekspor, ongkos ke pelabuhan, dokumen, dan fee. Untuk harga CIF, tambahkan freight dan asuransi sampai pelabuhan tujuan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kenapa harus sebut Incoterm",
        html: "Harga Rp55.000 per unit bisa berarti berbeda-beda. FOB berarti sampai di atas kapal di pelabuhan Indonesia; CIF sudah termasuk ongkos angkut dan asuransi ke pelabuhan tujuan. Selalu sebut term-nya agar buyer membandingkan harga secara adil.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Anatomi harga FOB per unit (contoh kerajinan)",
        unit: "Rp/unit",
        source: "Ilustrasi edukatif",
        note: "Harga jual bukan sekadar harga beli plus untung; biaya ekspor lokal harus ikut dihitung sebelum margin.",
        data: [
          { label: "Harga beli produsen", value: 40000, color: "#0ea5e9" },
          { label: "Biaya ekspor lokal", value: 6000, color: "#f59e0b" },
          { label: "Margin (20%)", value: 9200, color: "#10b981" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba kalkulatornya",
        html: "Geser harga beli, biaya lokal, margin, dan freight untuk melihat harga FOB dan CIF terbentuk, lengkap dengan setara nilainya dalam dolar.",
      },
      { type: "widget", widget: "KalkulatorHargaEkspor" },
      {
        type: "calcExercise",
        prompt:
          "Kamu membeli produk dari produsen seharga Rp40.000 per unit, dengan biaya ekspor lokal Rp6.000 per unit, dan mengambil margin 20%. Berapa harga FOB per unit?",
        answer: 55200,
        tolerance: 50,
        prefix: "Rp",
        solution:
          "Modal per unit = 40.000 + 6.000 = 46.000. Harga FOB = 46.000 x (1 + 0,20) = 46.000 x 1,20 = 55.200.",
        hint: "Jumlahkan dulu harga beli dan biaya lokal, baru kalikan dengan (1 + margin).",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk 1.000 unit, nilai FOB total adalah Rp55.200.000. Freight dan asuransi ke pelabuhan tujuan Rp9.000.000. Berapa nilai CIF total?",
        answer: 64200000,
        tolerance: 1000,
        prefix: "Rp",
        solution: "CIF = FOB total + freight + asuransi = 55.200.000 + 9.000.000 = 64.200.000.",
        hint: "CIF hanyalah FOB ditambah ongkos angkut dan asuransi.",
      },
      {
        type: "case",
        title: "Studi Kasus: Margin yang menguap karena lupa biaya",
        html: "Seorang eksportir pemula menawarkan sarung tangan kerja Rp30.000 per pasang (harga beli produsen) plus margin 25%, jadi Rp37.500. Ia lupa memasukkan biaya packing ekspor, trucking ke pelabuhan, dan dokumen yang totalnya Rp8.000 per pasang. Setelah semua dibayar, margin sebenarnya bukan Rp7.500, melainkan hanya Rp7.500 - Rp8.000 = <strong>minus Rp500 per pasang</strong>. Ia rugi tiap kali menjual. Pelajaran: hitung biaya ekspor sebelum menetapkan margin.",
      },
      {
        type: "case",
        title: "Studi Kasus: Harga yang benar memenangkan order ulang",
        html: "Sari menghitung lengkap: harga beli produsen Rp40.000 ditambah biaya ekspor Rp6.000, lalu margin 20 persen, jadi FOB <strong>Rp55.200 per unit</strong>. Karena semua biaya sudah masuk, ia tidak pernah rugi diam-diam dan berani menepati harga sampai akhir. Buyer senang karena harga stabil dan memesan ulang tiga kali. Pesaingnya yang menembak harga murah tanpa menghitung biaya terpaksa menaikkan harga belakangan, dan kehilangan buyer. Harga yang jujur sejak awal justru lebih laku.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap Incoterm dengan cakupan tanggungan penjual.",
        pairs: [
          { left: "EXW", right: "Pembeli ambil barang di lokasi penjual" },
          { left: "FOB", right: "Penjual tanggung sampai barang di atas kapal" },
          { left: "CIF", right: "Penjual tanggung sampai pelabuhan tujuan plus asuransi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Harga ekspor dibangun dari harga beli produsen, bukan ongkos produksi.",
          "Selalu masukkan biaya ekspor lokal sebelum menghitung margin.",
          "Harga FOB per unit = (harga beli + biaya lokal) x (1 + margin).",
          "CIF adalah FOB ditambah freight dan asuransi ke pelabuhan tujuan.",
          "Selalu sebut Incoterm saat menawarkan harga agar buyer membandingkan secara adil.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Titik awal menyusun harga bagi eksportir non-produsen adalah?",
            options: ["Ongkos produksi pabrik", "Harga beli ke produsen", "Harga jual pesaing", "Kurs dolar"],
            answer: 1,
            explain: "Karena tidak memproduksi sendiri, eksportir mulai dari harga beli ke produsen lalu menambah biaya dan margin.",
          },
          {
            q: "Harga FOB per unit dihitung dengan?",
            options: [
              "Harga beli x margin",
              "(Harga beli + biaya ekspor lokal) x (1 + margin)",
              "Harga beli + freight",
              "Harga beli + asuransi",
            ],
            answer: 1,
            explain: "Biaya ekspor lokal ditambahkan dulu ke harga beli, baru dikalikan dengan (1 + margin).",
          },
          {
            q: "Apa beda utama FOB dan CIF?",
            options: [
              "FOB lebih mahal dari CIF",
              "CIF sudah termasuk freight dan asuransi ke pelabuhan tujuan",
              "FOB hanya untuk udara",
              "Tidak ada bedanya",
            ],
            answer: 1,
            explain: "CIF menambahkan ongkos angkut dan asuransi di atas harga FOB.",
          },
          {
            q: "Kesalahan yang membuat margin menguap adalah?",
            options: [
              "Menyebut Incoterm",
              "Menghitung biaya ekspor lokal",
              "Lupa memasukkan biaya ekspor sebelum menetapkan margin",
              "Memakai kalkulator harga",
            ],
            answer: 2,
            explain: "Biaya ekspor yang tidak dihitung bisa menghabiskan margin, bahkan membuat rugi.",
          },
          {
            q: "Mengapa harga selalu perlu disertai Incoterm?",
            options: [
              "Agar terlihat profesional saja",
              "Karena wajib menurut pajak",
              "Agar jelas biaya apa saja yang sudah tercakup dalam harga",
              "Agar harga terlihat lebih murah",
            ],
            answer: 2,
            explain: "Incoterm menegaskan sampai titik mana biaya dan risiko ditanggung penjual, sehingga perbandingan harga adil.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pasar-tujuan",
    levelId: "riset",
    order: 1,
    title: "Menentukan Pasar Tujuan",
    summary:
      "Cara pemula memilih negara tujuan ekspor dengan data: melihat permintaan, harga, regulasi negara tujuan, dan budaya. Termasuk sumber riset gratis seperti atase perdagangan, ITC Trade Map, dan marketplace.",
    durationMin: 14,
    tags: ["riset pasar", "negara tujuan", "permintaan"],
    blocks: [
      {
        type: "paragraph",
        html: "Banyak pemula bertanya \"produk saya cocok diekspor ke mana?\" Jawabannya tidak boleh cuma tebakan. Sebagai eksportir non-produsen yang menjembatani perajin lokal ke pembeli luar negeri, kamu justru punya keunggulan: kamu bebas memilih pasar yang paling menguntungkan, tidak terikat pada satu produk saja. Kuncinya adalah memilih negara tujuan dengan <strong>data</strong>, bukan perasaan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Asian_trade_routes_ca._AD_800.jpg?width=500",
        alt: "Peta jalur perdagangan Asia sekitar tahun 800 Masehi",
        caption: "Jalur perdagangan lintas Asia sejak lebih dari seribu tahun lalu. Memilih pasar tujuan setua perdagangan itu sendiri.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "paragraph",
        html: "Ada empat hal yang wajib kamu cek untuk tiap calon negara tujuan: <strong>permintaan</strong> (apakah mereka memang membeli produk seperti punyamu), <strong>harga</strong> (apakah harga di sana cukup tinggi untuk menutup ongkos kirim), <strong>regulasi negara tujuan</strong> (izin, standar, larangan), dan <strong>budaya</strong> (selera, warna, ukuran, sertifikasi halal, dan sebagainya).",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat lampu yang harus hijau",
        html: "Permintaan, harga, regulasi, budaya. Kalau salah satu merah, pindah ke kandidat negara lain. Contoh: permintaan tinggi tetapi regulasi melarang produkmu tanpa sertifikat mahal, itu lampu merah bagi pemula.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Sumber riset gratis untuk pemula",
        html: "Kamu tidak perlu bayar konsultan. Manfaatkan <strong>atase perdagangan (atdag)</strong> dan ITPC di KBRI, situs <strong>ITC Trade Map</strong> (trademap.org) untuk melihat siapa mengimpor apa, portal <strong>INSW</strong> untuk aturan, serta <strong>marketplace</strong> B2B untuk mengintip harga jual dan pesaing.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan tujuan ekspor nonmigas Indonesia (pangsa)",
        unit: "% dari nilai ekspor nonmigas",
        source: "Perkiraan berdasarkan data BPS 2023",
        note: "Tiongkok jauh terbesar, disusul Amerika Serikat, India, dan Jepang. Pemula bisa mulai dari pasar besar yang permintaannya sudah terbukti.",
        data: [
          { label: "Tiongkok", value: 25, color: "#ef4444" },
          { label: "Amerika Serikat", value: 10, color: "#0ea5e9" },
          { label: "India", value: 9, color: "#f59e0b" },
          { label: "Jepang", value: 7, color: "#10b981" },
          { label: "Malaysia", value: 5, color: "#8b5cf6" },
        ],
      },
      {
        type: "stats",
        items: [
          { value: "USD 259 M", label: "Total ekspor Indonesia 2023", sub: "perkiraan, data BPS", color: "#0ea5e9" },
          { value: "~93%", label: "Porsi nonmigas dari total ekspor", sub: "perkiraan", color: "#10b981" },
          { value: "4 faktor", label: "Lampu untuk menilai pasar", sub: "permintaan, harga, regulasi, budaya", color: "#f59e0b" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Jangan hanya kejar pasar terbesar",
        html: "Pasar besar berarti permintaan besar, tetapi juga pesaing banyak dan buyer rewel. Pasar yang lebih kecil kadang lebih ramah untuk volume kecil khas pemula. Nilai tiap pasar dengan empat lampu tadi, bukan cuma ukurannya.",
      },
      { type: "video", comp: "SupplyChainVideo", title: "Rantai pasok dari perajin lokal ke pembeli luar negeri", caption: "Posisimu sebagai jembatan menentukan pasar mana yang paling masuk akal." },
      {
        type: "case",
        title: "Studi Kasus: Memilih antara dua negara",
        html: "Sinta ingin mengekspor anyaman rotan. Ia menemukan dua kandidat. <strong>Negara A</strong>: permintaan tinggi, harga jual eceran setara Rp250.000 per keranjang, tetapi mensyaratkan sertifikat fumigasi dan uji kimia yang mahal. <strong>Negara B</strong>: permintaan sedang, harga jual setara Rp180.000, aturan impor sederhana, dan komunitas diaspora Indonesia yang menyukai produk anyaman. Untuk pemula bervolume kecil, Negara B lebih realistis: marginnya cukup dan hambatan regulasinya rendah. Sinta memilih B dulu, lalu naik ke A setelah kuat.",
      },
      {
        type: "case",
        title: "Studi Kasus: Ongkos kirim menentukan pasar mana yang masuk akal",
        html: "Andi menjual kopi robusta setara Rp90.000 per kg (sudah termasuk modal dan biaya ekspor). Ia membandingkan dua pasar untuk pengiriman laut satu kontainer. <strong>Negara C</strong> (dekat, di Asia Tenggara): ongkos kirim per kg sekitar Rp8.000, harga jual di sana setara Rp130.000, jadi margin kotor sekitar Rp32.000 per kg. <strong>Negara D</strong> (jauh, di Eropa): ongkos kirim per kg sekitar Rp22.000, tetapi harga jual setara Rp165.000, jadi margin kotor sekitar Rp53.000 per kg. Meski ongkos kirim ke Negara D jauh lebih mahal, harga jualnya cukup tinggi sehingga marginnya justru lebih besar. Pelajaran: jangan menilai pasar hanya dari jarak; hitung harga jual dikurangi seluruh biaya.",
      },
      {
        type: "case",
        title: "Sejarah: Jalur rempah dan perdagangan Nusantara",
        html: "Jauh sebelum ada ITC Trade Map, pedagang sudah memilih pasar tujuan dengan cara yang sama: mengejar tempat di mana barang paling dihargai. Selama berabad-abad, rempah Maluku seperti pala dan cengkih menempuh Jalur Rempah menuju pelabuhan-pelabuhan Asia dan Eropa. Pada masanya, harga pala di Eropa bisa berlipat-lipat kali harga belinya di Banda, itulah yang membuat bangsa Eropa berlomba datang, hingga VOC dibentuk pada tahun 1602 untuk menguasai perdagangan itu. Pelajarannya tetap relevan: nilai sebuah pasar ditentukan oleh selisih antara harga jual di tujuan dan seluruh biaya membawanya ke sana, bukan sekadar jaraknya.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap temuan riset sebagai faktor yang MENARIK atau RISIKO bagi sebuah pasar tujuan.",
        buckets: ["Menarik", "Risiko"],
        items: [
          { text: "Permintaan produk sejenis naik tiap tahun", bucket: "Menarik" },
          { text: "Harga jual di sana tinggi", bucket: "Menarik" },
          { text: "Ada komunitas diaspora yang menyukai produk kita", bucket: "Menarik" },
          { text: "Wajib sertifikat mahal yang sulit dipenuhi pemula", bucket: "Risiko" },
          { text: "Produk kita termasuk barang yang dilarang masuk", bucket: "Risiko" },
          { text: "Ongkos kirim sangat mahal dibanding harga jual", bucket: "Risiko" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Di Negara B, keranjang rotan terjual setara Rp180.000. Modal kamu (harga beli perajin plus biaya ekspor per unit) adalah Rp120.000, dan ongkos kirim per unit setara Rp25.000. Berapa perkiraan margin kotor per unit?",
        answer: 35000,
        tolerance: 0,
        prefix: "Rp",
        solution: "Margin kotor = harga jual - modal - ongkos kirim = 180.000 - 120.000 - 25.000 = 35.000 per unit.",
        hint: "Kurangi harga jual dengan seluruh biaya: modal dan ongkos kirim.",
      },
      {
        type: "takeaways",
        items: [
          "Pilih negara tujuan dengan data, bukan tebakan atau perasaan.",
          "Cek empat hal: permintaan, harga, regulasi negara tujuan, dan budaya.",
          "Manfaatkan sumber gratis: atase perdagangan, ITC Trade Map, INSW, dan marketplace.",
          "Pasar terbesar bukan selalu terbaik untuk pemula bervolume kecil.",
          "Mulai dari pasar yang hambatannya rendah, naik kelas setelah kuat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Empat faktor utama saat menilai negara tujuan adalah?",
            options: [
              "Warna bendera, bahasa, jarak, dan cuaca",
              "Permintaan, harga, regulasi, dan budaya",
              "Pajak, bunga bank, inflasi, dan kurs",
              "Ukuran kapal, jenis kontainer, dan pelabuhan",
            ],
            answer: 1,
            explain: "Permintaan, harga, regulasi negara tujuan, dan budaya adalah empat lampu yang harus hijau.",
          },
          {
            q: "Sumber riset gratis yang bisa dipakai pemula, KECUALI?",
            options: [
              "Atase perdagangan dan ITPC di KBRI",
              "ITC Trade Map",
              "Marketplace B2B untuk mengintip harga",
              "Membayar konsultan mahal sebagai satu-satunya cara",
            ],
            answer: 3,
            explain: "Justru intinya kamu tidak wajib membayar konsultan; banyak sumber data gratis tersedia.",
          },
          {
            q: "Menurut perkiraan data, tujuan ekspor nonmigas terbesar Indonesia adalah?",
            options: ["Jepang", "India", "Tiongkok", "Malaysia"],
            answer: 2,
            explain: "Tiongkok adalah tujuan ekspor nonmigas terbesar, jauh di atas negara lain.",
          },
          {
            q: "Mengapa pasar terbesar belum tentu terbaik bagi pemula?",
            options: [
              "Karena pasar besar tidak punya permintaan",
              "Karena pesaing banyak dan buyer bisa lebih rewel",
              "Karena harganya selalu paling rendah",
              "Karena tidak boleh diekspori pemula",
            ],
            answer: 1,
            explain: "Pasar besar berarti persaingan ketat dan buyer menuntut; pasar lebih kecil kadang lebih ramah untuk volume kecil.",
          },
          {
            q: "Dalam studi kasus Sinta, mengapa Negara B dipilih lebih dulu?",
            options: [
              "Karena harga jualnya paling tinggi",
              "Karena regulasinya sederhana dan margin tetap cukup untuk pemula",
              "Karena tidak ada permintaan sama sekali",
              "Karena jaraknya paling dekat",
            ],
            answer: 1,
            explain: "Negara B punya aturan impor sederhana dan margin memadai, cocok untuk pemula bervolume kecil.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hs-code",
    levelId: "riset",
    order: 2,
    title: "HS Code dan Klasifikasi Produk",
    summary:
      "Memahami HS Code sebagai bahasa universal barang: kenapa penting untuk tarif dan aturan di negara tujuan serta isian PEB, dan cara menemukan kode produkmu.",
    durationMin: 15,
    tags: ["HS Code", "klasifikasi", "tarif"],
    blocks: [
      {
        type: "paragraph",
        html: "Setiap barang yang menyeberang batas negara punya \"nomor identitas\" bernama <strong>HS Code</strong> (Harmonized System). Ini kode angka yang dipakai hampir semua negara untuk menamai barang secara seragam. Petugas bea cukai di mana pun tahu barangmu hanya dari kodenya, tanpa perlu paham bahasa Indonesia.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Roasted_coffee_beans.jpg?width=500",
        alt: "Biji kopi sangrai",
        caption: "Kopi mentah dan kopi sangrai memiliki HS Code berbeda, sehingga tarif dan aturannya pun bisa berbeda.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "paragraph",
        html: "Bagi eksportir non-produsen, HS Code bukan urusan sepele. Kode inilah yang menentukan <strong>berapa tarif bea masuk</strong> yang dikenakan di negara tujuan, <strong>aturan atau larangan</strong> apa yang berlaku, dan wajib kamu isi di dokumen <strong>PEB</strong> (Pemberitahuan Ekspor Barang). Salah kode bisa berarti salah tarif, barang tertahan, atau bahkan denda.",
      },
      {
        type: "callout",
        tone: "key",
        title: "HS Code menentukan tiga hal penting",
        html: "Satu, <strong>tarif</strong> bea masuk di negara tujuan. Dua, <strong>aturan dan izin</strong> yang berlaku untuk barang itu. Tiga, isian wajib di <strong>PEB</strong>. Salah klasifikasi bisa membuat buyer kena tarif tak terduga dan hubungan dagang rusak.",
      },
      { type: "video", comp: "StrukturHSCode", title: "Struktur HS Code, dari bab sampai subpos", caption: "Lihat bagaimana deretan angka menyempit dari kelompok besar ke barang spesifik." },
      {
        type: "paragraph",
        html: "Struktur HS Code bersifat berjenjang. Enam digit pertama sama di seluruh dunia (standar WCO), lalu tiap negara menambah digit sendiri untuk memerinci. Indonesia memakai <strong>8 digit</strong> (BTKI). Semakin ke kanan, semakin spesifik barangnya.",
      },
      {
        type: "table",
        headers: ["Segmen", "Contoh", "Makna"],
        rows: [
          ["Bab (2 digit)", "09", "Kopi, teh, rempah"],
          ["Pos (4 digit)", "0901", "Kopi"],
          ["Subpos (6 digit)", "0901.21", "Kopi digongseng (roasted), belum dihilangkan kafein"],
          ["Pos tarif nasional (8 digit)", "0901.21.10", "Rincian nasional Indonesia"],
        ],
        caption: "Contoh penjenjangan HS Code untuk kopi. Enam digit pertama seragam sedunia; digit ke-7 dan ke-8 khas Indonesia.",
      },
      {
        type: "stats",
        items: [
          { value: "6 digit", label: "Seragam di seluruh dunia", sub: "standar WCO", color: "#10b981" },
          { value: "8 digit", label: "Dipakai Indonesia (BTKI)", sub: "tambah 2 digit nasional", color: "#0ea5e9" },
          { value: "~5.000", label: "Kelompok barang di HS", sub: "perkiraan, tingkat 6 digit", color: "#f59e0b" },
          { value: ">200", label: "Negara memakai HS", sub: "perkiraan", color: "#8b5cf6" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Di mana mencari kode produkmu",
        html: "Gunakan portal <strong>INSW</strong> (insw.go.id) yang memuat BTKI dan aturannya, atau situs bea cukai. Ketik nama atau bahan barangmu, lalu telusuri dari bab ke pos hingga menemukan uraian yang paling pas. Bila ragu, kamu bisa minta penetapan klasifikasi ke Bea Cukai.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Pilih jenis produk dan lihat bagaimana HS Code-nya terbentuk digit demi digit, dari bab hingga pos tarif nasional.",
      },
      { type: "widget", widget: "SimulatorHSCode" },
      {
        type: "case",
        title: "Studi Kasus: Salah satu digit, salah tarif",
        html: "Budi mengekspor kopi sangrai tetapi mengisi PEB dengan kode kopi <strong>mentah</strong> (0901.11) alih-alih kopi sangrai (0901.21). Di negara tujuan, kedua kode ini bisa kena tarif dan aturan berbeda. Akibatnya buyer ditagih bea masuk yang tidak sesuai dan barang tertahan di bea cukai beberapa hari. Budi harus mengurus koreksi dokumen dan menanggung biaya penyimpanan. Satu angka salah, sepekan waktu dan uang terbuang.",
      },
      {
        type: "case",
        title: "Studi Kasus: Beda tarif karena beda kode",
        html: "Wati mengekspor produk kayu senilai FOB Rp200.000.000 ke sebuah negara. Jika ia menyebut HS Code yang benar untuk kerajinan kayu jadi, buyer membayar bea masuk sekitar 5%, yaitu Rp10.000.000. Namun agen Wati keliru memakai kode kayu setengah jadi yang di negara itu dikenai bea masuk sekitar 12%, yaitu Rp24.000.000. Selisih Rp14.000.000 ditagihkan ke buyer, yang lalu protes keras dan menahan pesanan berikutnya. Kode yang benar bukan hanya soal patuh aturan, tetapi juga menjaga kepercayaan dan kelanjutan order.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Bea masuk yang ditagih ke buyer: kode benar vs kode salah",
        unit: "%",
        source: "Ilustrasi edukatif",
        note: "Salah klasifikasi bukan sekadar urusan administrasi; buyer bisa ditagih tarif jauh lebih tinggi dan menyalahkanmu.",
        data: [
          { label: "HS Code benar", value: 5, color: "#10b981" },
          { label: "HS Code salah", value: 20, color: "#ef4444" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap segmen HS Code dengan maknanya.",
        pairs: [
          { left: "Bab (2 digit)", right: "Kelompok besar barang, mis. 09 rempah dan kopi" },
          { left: "Pos (4 digit)", right: "Jenis barang lebih sempit, mis. 0901 kopi" },
          { left: "Subpos (6 digit)", right: "Rincian yang seragam di seluruh dunia" },
          { left: "Pos tarif nasional (8 digit)", right: "Perincian khas Indonesia (BTKI)" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "HS Code Indonesia memakai 8 digit. Enam digit pertama seragam di seluruh dunia. Berapa banyak digit yang merupakan tambahan khas nasional Indonesia?",
        answer: 2,
        tolerance: 0,
        solution: "8 digit total dikurangi 6 digit standar internasional = 2 digit tambahan nasional.",
        hint: "Kurangi jumlah digit Indonesia dengan digit standar internasional.",
      },
      {
        type: "takeaways",
        items: [
          "HS Code adalah nomor identitas barang yang dipahami bea cukai seluruh dunia.",
          "Kode ini menentukan tarif, aturan, dan wajib diisi di PEB.",
          "Enam digit pertama seragam sedunia; Indonesia menambah menjadi 8 digit (BTKI).",
          "Semakin ke kanan digitnya, semakin spesifik barangnya.",
          "Cari kode di portal INSW; bila ragu, minta penetapan ke Bea Cukai.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi utama HS Code?",
            options: [
              "Menandai merek dagang barang",
              "Menamai barang secara seragam agar dikenali bea cukai seluruh dunia",
              "Menghitung kurs mata uang",
              "Menentukan warna kemasan",
            ],
            answer: 1,
            explain: "HS Code adalah sistem penamaan barang yang harmonis dan dipahami hampir semua negara.",
          },
          {
            q: "Berapa digit pertama HS Code yang seragam di seluruh dunia?",
            options: ["2 digit", "4 digit", "6 digit", "8 digit"],
            answer: 2,
            explain: "Enam digit pertama distandarkan WCO dan sama di seluruh dunia; negara menambah digit setelahnya.",
          },
          {
            q: "HS Code menentukan hal-hal berikut, KECUALI?",
            options: [
              "Tarif bea masuk di negara tujuan",
              "Aturan dan izin untuk barang",
              "Isian wajib di PEB",
              "Harga jual eceran di toko",
            ],
            answer: 3,
            explain: "HS Code tidak menetapkan harga jual eceran; ia menentukan tarif, aturan, dan isian dokumen.",
          },
          {
            q: "Berapa digit HS Code (pos tarif) yang dipakai Indonesia dalam BTKI?",
            options: ["6 digit", "8 digit", "10 digit", "12 digit"],
            answer: 1,
            explain: "Indonesia memakai 8 digit: 6 digit internasional ditambah 2 digit rincian nasional.",
          },
          {
            q: "Dalam studi kasus Budi, apa akibat salah memilih HS Code?",
            options: [
              "Barang langsung diterima tanpa masalah",
              "Buyer ditagih tarif tidak sesuai dan barang sempat tertahan",
              "Harga jual otomatis naik",
              "Tidak ada dampak apa pun",
            ],
            answer: 1,
            explain: "Kode yang salah membuat tarif dan aturan tak sesuai, sehingga barang tertahan dan menimbulkan biaya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cari-buyer",
    levelId: "riset",
    order: 3,
    title: "Mencari dan Menyeleksi Buyer Tanpa Tertipu",
    summary:
      "Tempat mencari pembeli luar negeri (pameran dagang, marketplace B2B, atase/ITPC, LinkedIn) dan cara memverifikasi buyer agar tidak jadi korban penipuan ekspor yang umum.",
    durationMin: 15,
    tags: ["buyer", "B2B", "penipuan"],
    blocks: [
      {
        type: "paragraph",
        html: "Menemukan buyer adalah pekerjaan inti eksportir non-produsen. Kamu tidak sibuk di pabrik, jadi energimu dipakai untuk mencari dan membangun kepercayaan dengan pembeli luar negeri. Kabar baiknya, saluran mencari buyer kini banyak. Kabar buruknya, di antara buyer sungguhan ada penipu yang mengincar pemula.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ships_in_Bombay_Harbour%2C_1731.jpg?width=500",
        alt: "Lukisan kapal-kapal dagang di Pelabuhan Bombay tahun 1731",
        caption: "Menjalin mitra dagang lintas negara selalu menuntut kehati-hatian, dulu maupun kini.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "callout",
        tone: "info",
        title: "Di mana mencari buyer",
        html: "<strong>Pameran dagang</strong> (Trade Expo Indonesia, pameran internasional), <strong>marketplace B2B</strong> seperti Alibaba, <strong>atase perdagangan dan ITPC</strong> di berbagai negara yang bisa mempertemukanmu dengan importir, serta <strong>LinkedIn</strong> untuk menghubungi pembeli secara langsung dan profesional.",
      },
      { type: "video", comp: "TradeAgreementVideo", title: "Bagaimana perjanjian dagang membuka pintu ke buyer", caption: "Negara mitra perjanjian dagang sering jadi tempat berburu buyer yang lebih ramah tarif." },
      {
        type: "callout",
        tone: "warn",
        title: "Waspada modus penipuan ekspor",
        html: "Modus yang paling sering: buyer minta kamu bayar \"<strong>fee</strong>\" atau \"biaya sertifikat\" di muka sebelum order cair, <strong>overpayment</strong> (mentransfer lebih lalu minta kelebihannya dikembalikan, padahal transfernya palsu), dan <strong>dokumen palsu</strong> seperti bukti transfer editan. Ingat: penjual yang sah tidak perlu membayar untuk mendapat order.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Saluran mencari buyer: usaha vs tingkat kepercayaan awal",
        unit: "skor relatif (ilustrasi)",
        source: "Ilustrasi edukatif",
        note: "Pameran dan jalur ITPC butuh usaha lebih besar, tetapi buyer yang ditemui cenderung lebih terverifikasi dibanding pesan dingin dari marketplace.",
        data: [
          { label: "Pameran dagang", value: 9, color: "#10b981" },
          { label: "Atase / ITPC", value: 8, color: "#0ea5e9" },
          { label: "LinkedIn (dikelola serius)", value: 6, color: "#f59e0b" },
          { label: "Marketplace B2B (pesan masuk acak)", value: 4, color: "#ef4444" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Verifikasi buyer sebelum kirim apa pun",
        html: "Cek keberadaan perusahaan (situs, alamat, telepon), minta profil dan riwayat impor, mulai dari order kecil, dan pakai <strong>pembayaran aman</strong> seperti L/C atau uang muka lewat bank. Jangan pernah kirim barang atau bayar biaya hanya karena email terdengar meyakinkan.",
      },
      {
        type: "case",
        title: "Studi Kasus: Penipuan buyer yang klasik",
        html: "Rina, eksportir kopi pemula, menerima email dari \"importir\" di luar negeri yang memesan 5 ton, nilai order sekitar Rp600 juta. Buyer terdengar profesional dan buru-buru. Syaratnya: Rina harus lebih dulu membayar biaya \"registrasi importir\" sekitar Rp15 juta ke sebuah \"agen\", katanya agar order diproses. Red flag jelas: order besar dan mendadak, minta bayar di muka, tekanan waktu, alamat perusahaan tidak bisa diverifikasi, dan email dari domain gratisan. Rina menolak dan meminta pertemuan resmi lewat ITPC. Buyer langsung menghilang. Rina selamat dari kerugian Rp15 juta.",
      },
      {
        type: "case",
        title: "Studi Kasus: Mulai dari order kecil menyelamatkan Joko",
        html: "Joko mendapat calon buyer dari sebuah pameran dagang. Alih-alih langsung menerima order besar 2.000 unit senilai sekitar Rp300 juta, ia mengusulkan uji coba 100 unit senilai sekitar Rp15 juta dengan pembayaran uang muka 50% lewat transfer bank ke rekening perusahaan. Buyer setuju, membayar uang muka Rp7,5 juta, dan barang dikirim mulus serta dilunasi. Setelah dua kali order kecil berjalan lancar, barulah Joko melayani order besar dengan L/C. Andai buyer itu penipu, kerugian maksimal Joko hanya sebatas order kecil, bukan ratusan juta. Prinsipnya: bangun kepercayaan bertahap, jangan pertaruhkan semua di transaksi pertama.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap situasi sebagai AMAN atau WASPADA (red flag).",
        buckets: ["Aman", "Waspada"],
        items: [
          { text: "Buyer minta kamu bayar biaya registrasi di muka agar order diproses", bucket: "Waspada" },
          { text: "Buyer bersedia mulai dari order kecil sebagai uji coba", bucket: "Aman" },
          { text: "Perusahaan buyer punya situs, alamat, dan telepon yang bisa dicek", bucket: "Aman" },
          { text: "Buyer transfer lebih besar lalu minta kelebihannya dikembalikan segera", bucket: "Waspada" },
          { text: "Pembayaran memakai L/C melalui bank", bucket: "Aman" },
          { text: "Order sangat besar, mendadak, dari email domain gratisan dengan tekanan waktu", bucket: "Waspada" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Rina diminta membayar biaya \"registrasi\" Rp15.000.000 di muka untuk order senilai Rp600.000.000. Berapa persen biaya itu terhadap nilai order?",
        answer: 2.5,
        tolerance: 0.1,
        suffix: "%",
        solution: "Persentase = 15.000.000 / 600.000.000 x 100% = 2,5%. Permintaan bayar di muka seperti ini adalah red flag, berapa pun persentasenya.",
        hint: "Bagi biaya dengan nilai order lalu kalikan 100%.",
      },
      {
        type: "takeaways",
        items: [
          "Mencari buyer adalah pekerjaan inti eksportir non-produsen.",
          "Saluran utama: pameran dagang, marketplace B2B, atase/ITPC, dan LinkedIn.",
          "Penjual yang sah tidak perlu membayar fee di muka untuk mendapat order.",
          "Kenali red flag: bayar di muka, overpayment, dokumen palsu, tekanan waktu.",
          "Verifikasi buyer, mulai dari order kecil, dan pakai pembayaran aman seperti L/C.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Manakah yang BUKAN saluran umum mencari buyer?",
            options: [
              "Pameran dagang seperti Trade Expo Indonesia",
              "Marketplace B2B seperti Alibaba",
              "Atase perdagangan dan ITPC",
              "Menunggu buyer datang sendiri tanpa upaya apa pun",
            ],
            answer: 3,
            explain: "Buyer jarang datang sendiri; kamu perlu aktif lewat pameran, marketplace, ITPC, dan LinkedIn.",
          },
          {
            q: "Ciri khas penipuan \"fee di muka\" adalah?",
            options: [
              "Buyer meminta L/C melalui bank",
              "Buyer meminta kamu membayar biaya tertentu dulu sebelum order cair",
              "Buyer mengunjungi pabrik mitramu",
              "Buyer memesan dalam jumlah kecil dulu",
            ],
            answer: 1,
            explain: "Penjual sah tidak perlu membayar untuk mendapat order; permintaan fee di muka adalah red flag.",
          },
          {
            q: "Apa itu modus overpayment?",
            options: [
              "Buyer membayar tepat sesuai tagihan",
              "Buyer mentransfer lebih lalu minta kelebihannya dikembalikan, padahal transfernya palsu",
              "Buyer menawar harga lebih murah",
              "Buyer membayar lewat L/C",
            ],
            answer: 1,
            explain: "Overpayment memakai bukti transfer palsu; korban mengembalikan uang asli untuk selisih yang sebenarnya tidak pernah masuk.",
          },
          {
            q: "Langkah verifikasi buyer yang tepat adalah?",
            options: [
              "Langsung kirim seluruh barang begitu ada email",
              "Cek perusahaan, mulai order kecil, dan pakai pembayaran aman seperti L/C",
              "Segera bayar biaya yang diminta agar order cepat",
              "Percaya penuh karena emailnya sopan",
            ],
            answer: 1,
            explain: "Verifikasi keberadaan perusahaan, uji dengan order kecil, dan gunakan pembayaran aman.",
          },
          {
            q: "Dalam studi kasus Rina, apa yang menyelamatkannya?",
            options: [
              "Ia membayar fee agar aman",
              "Ia menolak bayar di muka dan meminta pertemuan resmi lewat ITPC",
              "Ia langsung mengirim kopi",
              "Ia menaikkan harga",
            ],
            answer: 1,
            explain: "Rina mengenali red flag, menolak membayar, dan meminta jalur resmi; penipu pun menghilang.",
          },
        ],
      },
    ],
  },
];
