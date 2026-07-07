import type { Lesson } from "../../../types";

export const level13: Lesson[] = [
  // ============================================================
  {
    id: "perdagangan-global-incoterms",
    levelId: "global",
    order: 1,
    title: "Perdagangan Global, Incoterms & NLE",
    summary:
      "Saat rantai pasok melewati batas negara, muncul lapisan dokumen, pabean, dan aturan tanggung jawab. Pelajari Incoterms dan ekosistem logistik nasional Indonesia.",
    durationMin: 15,
    tags: ["global", "incoterms", "kepabeanan", "nle"],
    blocks: [
      {
        type: "paragraph",
        html: "Ketika barang menyeberang batas negara, rantai pasok bertemu lapisan baru: <strong>dokumen</strong> (invoice, packing list, bill of lading), <strong>pabean</strong> (bea dan pemeriksaan), serta <strong>aturan tanggung jawab</strong> antara penjual dan pembeli. Salah paham di lapisan ini bisa membuat barang tertahan di pelabuhan dan biaya membengkak.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg?width=400",
        alt: "Kapal kontainer raksasa mengangkut peti kemas di laut",
        caption: "Sebagian besar perdagangan lintas negara bergerak lewat kapal kontainer, dan Incoterms menetapkan sampai titik mana penjual atau pembeli menanggung biaya serta risikonya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Incoterms: siapa menanggung apa",
        html: "<strong>Incoterms</strong> adalah istilah standar yang menetapkan sampai titik mana penjual menanggung biaya dan risiko, dan mulai titik mana beralih ke pembeli. Contoh: <strong>FOB</strong> (Free On Board) menyerahkan risiko saat barang naik kapal, sedangkan <strong>CIF</strong> menambahkan ongkos angkut dan asuransi sampai pelabuhan tujuan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana tiap istilah Incoterms menggeser titik perpindahan biaya dan risiko antara penjual dan pembeli.",
      },
      { type: "widget", widget: "SimulatorIncoterms" },
      {
        type: "video",
        comp: "GlobalTradeVideo",
        title: "Rantai Pasok Global",
        caption: "Tiap pengiriman lintas negara melewati dokumen, pabean, dan aturan tarif sebelum sampai tujuan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Komponen Biaya Impor Sampai Gudang (ilustrasi)",
        unit: "% dari total landed cost",
        source: "ilustrasi edukatif pola yang umum",
        note: "Harga barang hanya sebagian; angkut, asuransi, bea, dan pajak menambah porsi besar dari total biaya tiba.",
        data: [
          { label: "Harga barang", value: 70, color: "#60a5fa" },
          { label: "Angkut & asuransi", value: 10, color: "#fbbf24" },
          { label: "Bea masuk", value: 8, color: "#f472b6" },
          { label: "Pajak impor", value: 12, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: National Logistics Ecosystem (NLE) dan INSW",
        html: "Dulu, mengurus impor di Indonesia berarti berhadapan dengan banyak instansi dan dokumen terpisah, lambat dan mahal. Pemerintah membangun <strong>INSW</strong> (Indonesia National Single Window) dan ekosistem <strong>NLE</strong> (National Logistics Ecosystem) untuk menyatukan perizinan dan arus dokumen lintas instansi dalam <strong>satu pintu digital</strong>. Pelaku usaha cukup memasukkan data sekali, lalu dibagikan ke semua pihak terkait. Tujuannya memangkas lead time di pelabuhan (<em>dwelling time</em>) dan biaya logistik, agar produk Indonesia lebih bersaing.",
      },
      {
        type: "case",
        title: "Sejarah: Incoterms lahir dari Kamar Dagang Internasional (1936)",
        html: "Sebelum ada aturan baku, perdagangan lintas negara penuh sengketa: siapa menanggung ongkos angkut, siapa menanggung risiko bila barang rusak di laut. Pada <strong>1936</strong>, <strong>International Chamber of Commerce (ICC)</strong> menerbitkan <strong>Incoterms</strong> pertama untuk menyeragamkan istilah ini secara global. Sejak itu Incoterms diperbarui berkala mengikuti perkembangan perdagangan, dengan versi yang dipakai luas hingga kini. Satu set istilah bersama membuat penjual di satu negara dan pembeli di negara lain langsung paham pembagian tanggung jawabnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Nilai pabean (CIF) sebuah impor Rp200.000.000. Bea masuk 10% dari CIF. Berapa rupiah bea masuknya?",
        answer: 20000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "200.000.000 x 10% = <strong>Rp20.000.000</strong>. Bea masuk dihitung dari nilai pabean (CIF), dan menjadi dasar tambahan untuk menghitung pajak impor berikutnya.",
        hint: "Kalikan nilai pabean dengan tarif bea masuk dalam desimal.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan: di Incoterms FOB, siapa yang umumnya menanggung tiap biaya/risiko ini?",
        buckets: ["Penjual (sebelum naik kapal)", "Pembeli (setelah naik kapal)"],
        items: [
          { text: "Mengangkut barang ke pelabuhan asal", bucket: "Penjual (sebelum naik kapal)" },
          { text: "Ongkos pelayaran utama lintas laut", bucket: "Pembeli (setelah naik kapal)" },
          { text: "Risiko kerusakan saat sudah di atas kapal", bucket: "Pembeli (setelah naik kapal)" },
          { text: "Pengurusan ekspor di negara asal", bucket: "Penjual (sebelum naik kapal)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Perdagangan lintas negara menambah lapisan dokumen, pabean, dan aturan tanggung jawab.",
          "Incoterms menstandarkan sampai titik mana penjual menanggung biaya dan risiko.",
          "FOB menyerahkan risiko saat barang naik kapal; CIF menambah angkut dan asuransi ke tujuan.",
          "INSW dan NLE menyatukan perizinan Indonesia dalam satu pintu digital untuk memangkas dwelling time.",
          "Incoterms lahir dari ICC pada 1936 dan terus diperbarui mengikuti perdagangan global.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi Incoterms?",
            options: [
              "Menetapkan harga jual barang",
              "Menstandarkan pembagian biaya dan risiko antara penjual dan pembeli",
              "Menghitung pajak penghasilan",
              "Menentukan kurs mata uang",
            ],
            answer: 1,
            explain: "Incoterms memperjelas sampai titik mana tanggung jawab penjual dan mulai kapan pembeli.",
          },
          {
            q: "Pada Incoterms FOB, kapan risiko beralih ke pembeli?",
            options: [
              "Saat barang masih di gudang penjual",
              "Saat barang naik ke atas kapal",
              "Saat barang tiba di rumah pembeli",
              "Tidak pernah beralih",
            ],
            answer: 1,
            explain: "FOB (Free On Board) mengalihkan risiko saat barang naik kapal di pelabuhan asal.",
          },
          {
            q: "Apa tujuan INSW dan NLE di Indonesia?",
            options: [
              "Menambah jumlah dokumen",
              "Menyatukan perizinan dalam satu pintu digital untuk memangkas dwelling time",
              "Melarang impor",
              "Menaikkan bea masuk",
            ],
            answer: 1,
            explain: "Satu pintu digital memangkas lead time di pelabuhan dan biaya logistik.",
          },
          {
            q: "Dari mana dan kapan Incoterms pertama lahir?",
            options: [
              "PBB, 1945",
              "International Chamber of Commerce, 1936",
              "WTO, 1995",
              "Bea Cukai Indonesia, 2000",
            ],
            answer: 1,
            explain: "ICC menerbitkan Incoterms pertama pada 1936 untuk menyeragamkan istilah dagang.",
          },
          {
            q: "Nilai pabean Rp200 juta dengan bea masuk 10% menghasilkan bea?",
            options: ["Rp2.000.000", "Rp20.000.000", "Rp200.000.000", "Rp10.000.000"],
            answer: 1,
            explain: "200.000.000 x 10% = Rp20.000.000.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "rantai-nilai-global-gvc",
    levelId: "global",
    order: 2,
    title: "Rantai Nilai Global & Spesialisasi Antar Negara",
    summary:
      "Sebuah produk modern jarang dibuat utuh di satu negara. Pelajari Global Value Chain (GVC): bagaimana tiap tahap nilai tersebar ke negara yang paling efisien, dan di mana posisi Indonesia.",
    durationMin: 14,
    tags: ["global", "gvc", "rantai-nilai", "spesialisasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah ponsel pintar mungkin dirancang di satu negara, memakai chip dari negara kedua, layar dari negara ketiga, dirakit di negara keempat, lalu dijual ke seluruh dunia. Pola ini disebut <strong>Global Value Chain (GVC)</strong> atau rantai nilai global: tiap tahap penciptaan nilai dikerjakan di tempat yang paling efisien, bukan lagi seluruhnya di satu pabrik.",
      },
      {
        type: "paragraph",
        html: "Inti GVC adalah <strong>spesialisasi</strong>. Tiap negara fokus pada tahap yang paling cocok dengan keunggulannya: ada yang unggul di riset dan desain, ada yang unggul di tenaga kerja perakitan, ada yang kaya bahan mentah. Indonesia kuat di hulu (komoditas seperti sawit, nikel, kopi) dan sedang berupaya naik ke tahap yang nilainya lebih tinggi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Aircraft_cargo_loader_at_ZRH.jpg?width=400",
        alt: "Kargo dimuat ke dalam pesawat di bandara",
        caption: "Komponen bernilai tinggi seperti chip sering diangkut lewat udara antarnegara, mencerminkan bagaimana satu produk menyatukan tahap nilai dari banyak tempat dalam rantai nilai global.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kurva senyum (smile curve)",
        html: "Dalam GVC, nilai tambah tertinggi ada di <strong>hulu</strong> (riset, desain, bahan kunci) dan <strong>hilir</strong> (merek, pemasaran, layanan purnajual). Tahap <strong>tengah</strong> yaitu perakitan justru bernilai tambah paling rendah. Bila digambar, polanya menyerupai senyum. Naik kelas berarti bergeser dari tengah menuju ujung kurva.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Hilirisasi",
        html: "Kebijakan <strong>hilirisasi</strong> Indonesia (mengolah bahan mentah jadi produk setengah jadi atau jadi sebelum diekspor) adalah upaya menggeser posisi dari menjual bahan mentah murah ke menjual produk bernilai lebih tinggi. Contoh: mengolah bijih nikel menjadi produk turunan baterai, bukan mengekspor bijih mentah.",
      },
      {
        type: "video",
        comp: "GlobalTradeVideo",
        title: "Rantai Nilai yang Tersebar",
        caption: "Satu produk akhir bisa melewati banyak negara sebelum sampai ke konsumen.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kurva Senyum: Nilai Tambah per Tahap (ilustrasi)",
        unit: "indeks nilai tambah",
        source: "ilustrasi edukatif pola smile curve",
        note: "Riset/desain di hulu dan merek/layanan di hilir bernilai tinggi; perakitan di tengah bernilai rendah.",
        data: [
          { label: "Riset & desain", value: 80, color: "#60a5fa" },
          { label: "Bahan kunci", value: 55, color: "#34d399" },
          { label: "Perakitan", value: 20, color: "#f472b6" },
          { label: "Distribusi", value: 50, color: "#fbbf24" },
          { label: "Merek & layanan", value: 85, color: "#a78bfa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sawit Indonesia naik dari CPO ke produk olahan",
        html: "Indonesia adalah produsen <strong>minyak sawit (CPO)</strong> terbesar dunia. Mengekspor CPO mentah memberi nilai tambah terbatas. Lewat hilirisasi, sebagian CPO diolah dahulu menjadi minyak goreng, oleokimia, dan biodiesel sebelum diekspor. Misal 1 ton CPO mentah dihargai sekitar 800 dolar AS, sedangkan produk olahan turunannya bisa bernilai jauh lebih tinggi per ton. Dengan mengolah di dalam negeri, nilai tambah, lapangan kerja, dan penerimaan negara meningkat, dan Indonesia bergeser dari tengah kurva senyum ke arah yang lebih bernilai.",
      },
      {
        type: "case",
        title: "Sejarah: GATT 1947 membuka pintu rantai nilai global",
        html: "Setelah Perang Dunia II, 23 negara menandatangani <strong>General Agreement on Tariffs and Trade (GATT)</strong> pada <strong>1947</strong> untuk menurunkan tarif dan hambatan dagang secara bertahap. Penurunan tarif lintas dekade inilah yang memungkinkan perusahaan memecah produksi ke banyak negara tanpa terbebani bea tinggi di tiap perbatasan. Tanpa keterbukaan ini, GVC modern yang rumit tidak akan ekonomis. GATT kemudian dilembagakan menjadi WTO pada 1995.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah produk dijual seharga Rp1.000.000. Negara perakit hanya menyumbang nilai tambah Rp120.000. Berapa persen nilai tambah dari tahap perakitan terhadap harga jual?",
        answer: 12,
        tolerance: 0.1,
        suffix: "%",
        solution:
          "120.000 / 1.000.000 x 100% = <strong>12%</strong>. Tahap perakitan di tengah kurva senyum biasanya menyumbang porsi nilai tambah kecil dibanding hulu dan hilir.",
        hint: "Bagi nilai tambah perakitan dengan harga jual, lalu kalikan 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap tahap GVC ini ke posisinya pada kurva senyum.",
        buckets: ["Nilai tambah tinggi (ujung)", "Nilai tambah rendah (tengah)"],
        items: [
          { text: "Riset dan desain produk", bucket: "Nilai tambah tinggi (ujung)" },
          { text: "Perakitan komponen jadi", bucket: "Nilai tambah rendah (tengah)" },
          { text: "Membangun merek dan layanan purnajual", bucket: "Nilai tambah tinggi (ujung)" },
          { text: "Pemasangan sekrup di lini perakitan", bucket: "Nilai tambah rendah (tengah)" },
          { text: "Pengembangan paten teknologi inti", bucket: "Nilai tambah tinggi (ujung)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "GVC memecah produksi satu produk ke banyak negara sesuai keunggulan masing-masing.",
          "Kurva senyum: nilai tertinggi di hulu (riset/bahan) dan hilir (merek/layanan), terendah di perakitan.",
          "Indonesia kuat di hulu komoditas dan berupaya naik kelas lewat hilirisasi.",
          "GATT 1947 menurunkan tarif global sehingga GVC modern menjadi ekonomis.",
          "Naik kelas berarti bergeser dari perakitan murah ke tahap bernilai tambah tinggi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti dari Global Value Chain (GVC)?",
            options: [
              "Semua tahap produksi dikerjakan di satu negara",
              "Tiap tahap penciptaan nilai dikerjakan di negara yang paling efisien",
              "Hanya negara kaya yang boleh berdagang",
              "Barang tidak boleh menyeberang batas negara",
            ],
            answer: 1,
            explain: "GVC menyebar tahap produksi ke negara yang paling cocok dengan keunggulannya.",
          },
          {
            q: "Menurut kurva senyum, tahap mana yang nilai tambahnya paling rendah?",
            options: ["Riset dan desain", "Perakitan di tengah", "Merek dan layanan", "Bahan kunci"],
            answer: 1,
            explain: "Perakitan di tengah kurva senyum menyumbang nilai tambah paling kecil.",
          },
          {
            q: "Apa tujuan utama kebijakan hilirisasi Indonesia?",
            options: [
              "Mengekspor sebanyak mungkin bahan mentah",
              "Mengolah bahan mentah jadi produk bernilai lebih tinggi sebelum diekspor",
              "Melarang semua ekspor",
              "Menurunkan nilai produk dalam negeri",
            ],
            answer: 1,
            explain: "Hilirisasi menggeser posisi dari menjual bahan mentah ke produk bernilai lebih tinggi.",
          },
          {
            q: "Perjanjian apa pada 1947 yang menurunkan tarif global dan membuka jalan bagi GVC?",
            options: ["WTO", "GATT", "Incoterms", "AFTA"],
            answer: 1,
            explain: "GATT 1947 menurunkan tarif bertahap, kemudian dilembagakan menjadi WTO pada 1995.",
          },
          {
            q: "Produk Rp1.000.000 dengan nilai tambah perakitan Rp120.000 berarti porsi perakitan?",
            options: ["1,2%", "12%", "20%", "88%"],
            answer: 1,
            explain: "120.000 / 1.000.000 x 100% = 12%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kepabeanan-dokumen-ekspor-impor",
    levelId: "global",
    order: 3,
    title: "Kepabeanan: PIB, PEB, HS Code & Pajak Impor",
    summary:
      "Setiap barang lintas batas butuh dokumen pabean dan klasifikasi yang benar. Pelajari PIB, PEB, HS Code, serta cara menghitung bea masuk, PPN impor, dan PPh 22.",
    durationMin: 16,
    tags: ["global", "kepabeanan", "pib", "peb", "hs-code", "pajak-impor"],
    blocks: [
      {
        type: "paragraph",
        html: "Untuk mengeluarkan barang impor dari pelabuhan, importir mengajukan <strong>PIB</strong> (Pemberitahuan Impor Barang) ke <strong>DJBC / Bea Cukai</strong> lewat sistem INSW. Untuk ekspor, eksportir mengajukan <strong>PEB</strong> (Pemberitahuan Ekspor Barang). Kedua dokumen ini adalah pernyataan resmi tentang jenis, jumlah, dan nilai barang yang menjadi dasar perhitungan pungutan negara.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/U_S_Customs_and_Border_Protection_Seattle_Washington_Inspection_%285764585803%29.jpg?width=400",
        alt: "Petugas bea cukai memeriksa barang di pintu masuk perbatasan",
        caption: "Bea Cukai mencocokkan PIB, HS Code, dan nilai pabean dengan barang fisik. Klasifikasi yang benar menentukan tarif bea masuk serta pajak impor yang harus dibayar.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "HS Code menentukan tarif",
        html: "<strong>HS Code</strong> (Harmonized System) adalah kode angka berjenjang yang mengklasifikasikan setiap jenis barang secara internasional. Kode inilah yang menentukan <strong>tarif bea masuk</strong>, aturan larangan-pembatasan, dan persyaratan izin. Salah memilih HS Code bisa berarti salah bayar bea, barang tertahan, atau bahkan sanksi. Indonesia memakai sistem klasifikasi yang diturunkan dari HS dunia.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Tiga pungutan impor yang lazim",
        html: "Atas impor umumnya dikenakan: <strong>bea masuk</strong> (tarif x nilai pabean CIF), <strong>PPN impor 11%</strong>, dan <strong>PPh 22 impor</strong> (umumnya 2,5% bila punya API). Baik PPN maupun PPh 22 dihitung dari <strong>nilai impor = CIF + bea masuk</strong>, bukan dari CIF saja. Banyak importir pemula keliru menghitung dari CIF.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Masukkan nilai CIF dan tarif untuk melihat rincian bea masuk, PPN impor, dan PPh 22 sampai total landed cost.",
      },
      { type: "widget", widget: "KalkulatorLandedCost" },
      {
        type: "video",
        comp: "StrukturHSCode",
        title: "Membaca Struktur HS Code",
        caption: "Kode HS berjenjang dari bab, pos, hingga subpos yang makin spesifik.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Rincian Pungutan Impor atas CIF Rp100 Juta, Bea 5% (perhitungan)",
        unit: "Rp juta",
        source: "perhitungan sesuai tarif: bea 5%, PPN 11%, PPh 22 2,5%",
        note: "PPN dan PPh 22 dihitung dari nilai impor (CIF + bea masuk = Rp105 juta), bukan dari CIF saja.",
        data: [
          { label: "Bea masuk", value: 5, color: "#f472b6" },
          { label: "PPN impor 11%", value: 11.55, color: "#34d399" },
          { label: "PPh 22 (2,5%)", value: 2.625, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Importir kopi salah klasifikasi HS Code",
        html: "Sebuah usaha mengimpor mesin sangrai kopi dan memilih HS Code yang tarif bea masuknya berbeda dari seharusnya. Saat pemeriksaan Bea Cukai, klasifikasi dikoreksi dan importir harus membayar kekurangan bea plus penyesuaian PPN dan PPh 22 karena dasar pengenaannya ikut berubah. Pelajaran: tentukan HS Code dengan teliti sejak awal, bila ragu ajukan konsultasi klasifikasi ke DJBC. Kesalahan kecil di kode bisa berlipat menjadi tagihan besar karena tiga pungutan saling terkait.",
      },
      {
        type: "case",
        title: "Sejarah: WTO berdiri 1995 menggantikan sekretariat GATT",
        html: "Pada <strong>1995</strong>, <strong>World Trade Organization (WTO)</strong> resmi berdiri sebagai pelembagaan permanen dari sistem GATT. WTO tidak hanya mengurus tarif barang, tetapi juga jasa, hak kekayaan intelektual, dan mekanisme penyelesaian sengketa dagang antarnegara. Sistem klasifikasi dan aturan main yang lebih baku inilah yang membuat dokumen seperti PIB dan HS Code bisa dipahami lintas negara secara konsisten.",
      },
      {
        type: "calcExercise",
        prompt:
          "Nilai pabean (CIF) impor Rp100.000.000 dengan bea masuk 5%. Berapa rupiah PPN impor (11% dari nilai impor)?",
        answer: 11550000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Bea masuk = 100.000.000 x 5% = 5.000.000. Nilai impor = 100.000.000 + 5.000.000 = 105.000.000. PPN impor = 105.000.000 x 11% = <strong>Rp11.550.000</strong>. Ingat: PPN dihitung dari nilai impor (CIF + bea masuk), bukan dari CIF saja.",
        hint: "Hitung bea masuk dulu, tambahkan ke CIF jadi nilai impor, lalu kalikan 11%.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan data sama (CIF Rp100.000.000, bea 5%, nilai impor Rp105.000.000), berapa rupiah PPh 22 impor bila tarifnya 2,5%?",
        answer: 2625000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "PPh 22 = 105.000.000 x 2,5% = <strong>Rp2.625.000</strong>. Sama seperti PPN, dasarnya adalah nilai impor (CIF + bea masuk).",
        hint: "Kalikan nilai impor Rp105.000.000 dengan 2,5%.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah kepabeanan dengan artinya.",
        pairs: [
          { left: "PIB", right: "Pemberitahuan Impor Barang" },
          { left: "PEB", right: "Pemberitahuan Ekspor Barang" },
          { left: "HS Code", right: "Kode klasifikasi barang penentu tarif" },
          { left: "DJBC", right: "Direktorat Jenderal Bea dan Cukai" },
          { left: "Nilai impor", right: "CIF ditambah bea masuk sebagai dasar pajak" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Impor diberitahukan lewat PIB dan ekspor lewat PEB kepada DJBC melalui INSW.",
          "HS Code menentukan tarif bea masuk, lartas, dan izin; salah kode berakibat besar.",
          "Pungutan impor lazim: bea masuk, PPN impor 11%, dan PPh 22 (umumnya 2,5% dengan API).",
          "PPN dan PPh 22 dihitung dari nilai impor (CIF + bea masuk), bukan CIF saja.",
          "WTO 1995 melembagakan sistem GATT sehingga aturan dan klasifikasi lebih baku lintas negara.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dokumen apa yang diajukan importir untuk mengeluarkan barang dari pelabuhan?",
            options: ["PEB", "PIB", "Form D", "Bill of lading"],
            answer: 1,
            explain: "PIB (Pemberitahuan Impor Barang) diajukan ke Bea Cukai untuk impor.",
          },
          {
            q: "Apa fungsi utama HS Code?",
            options: [
              "Menentukan kurs valuta asing",
              "Mengklasifikasikan barang dan menentukan tarif serta aturannya",
              "Menetapkan harga jual eceran",
              "Mengganti nomor rekening bank",
            ],
            answer: 1,
            explain: "HS Code mengklasifikasikan barang dan menentukan bea masuk, lartas, serta izin.",
          },
          {
            q: "Dasar pengenaan PPN impor dan PPh 22 adalah?",
            options: [
              "CIF saja",
              "Nilai impor = CIF + bea masuk",
              "Harga jual eceran",
              "Ongkos angkut saja",
            ],
            answer: 1,
            explain: "Keduanya dihitung dari nilai impor, yaitu CIF ditambah bea masuk.",
          },
          {
            q: "CIF Rp100 juta, bea 5%. Berapa PPN impor 11%?",
            options: ["Rp11.000.000", "Rp11.550.000", "Rp5.000.000", "Rp10.500.000"],
            answer: 1,
            explain: "Nilai impor 105 juta x 11% = Rp11.550.000.",
          },
          {
            q: "Pada tahun berapa WTO resmi berdiri?",
            options: ["1947", "1992", "1995", "2020"],
            answer: 2,
            explain: "WTO berdiri 1995 sebagai pelembagaan permanen dari sistem GATT.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "trade-compliance-lartas",
    levelId: "global",
    order: 4,
    title: "Trade Compliance: Lartas, Izin & Sertifikasi",
    summary:
      "Tarif bukan satu-satunya hambatan. Pelajari kepatuhan aturan dagang: larangan dan pembatasan (lartas), izin impor-ekspor, serta sertifikasi yang wajib dipenuhi.",
    durationMin: 14,
    tags: ["global", "compliance", "lartas", "izin", "sertifikasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Banyak orang mengira hambatan dagang hanya soal tarif. Padahal ada lapisan <strong>non-tarif</strong> yang sama pentingnya: aturan apa yang boleh masuk atau keluar, izin apa yang wajib, dan sertifikat apa yang harus melekat pada barang. Inilah ranah <strong>trade compliance</strong> atau kepatuhan dagang.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/U_S_Customs_and_Border_Protection_Seattle_Washington_Inspection_%285764585803%29.jpg?width=400",
        alt: "Petugas memeriksa muatan kontainer di titik pemeriksaan pabean",
        caption: "Di titik pemeriksaan, izin dan sertifikat lartas ikut dicek. Tanpa dokumen non-tarif yang lengkap, barang bisa tertahan meski bea masuk sudah dibayar.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Lartas: larangan dan pembatasan",
        html: "Di Indonesia dikenal istilah <strong>lartas</strong> (larangan dan pembatasan). <strong>Larangan</strong> berarti barang sama sekali tidak boleh diekspor atau diimpor. <strong>Pembatasan</strong> berarti boleh, tetapi harus memenuhi syarat tertentu seperti izin, kuota, atau sertifikat. Status lartas suatu barang ditautkan ke HS Code-nya dan dikelola lewat INSW.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Contoh persyaratan non-tarif",
        html: "Beberapa contoh: izin dari kementerian teknis, <strong>SNI</strong> untuk produk tertentu, sertifikat kesehatan (<em>phytosanitary</em>) untuk produk pertanian, sertifikat halal, atau persetujuan impor dengan kuota. Tanpa dokumen ini, barang bisa ditolak meski bea sudah dibayar.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Patuh itu murah, melanggar itu mahal",
        html: "Mengabaikan lartas berisiko barang <strong>ditahan, dimusnahkan, atau dikenai sanksi</strong>. Biaya kepatuhan (mengurus izin dan sertifikat) hampir selalu jauh lebih kecil daripada kerugian barang tertahan di pelabuhan sambil ongkos demurrage berjalan.",
      },
      {
        type: "video",
        comp: "AlurImpor",
        title: "Alur Impor dan Titik Pemeriksaan",
        caption: "Di tiap tahap, dokumen dan izin lartas diperiksa sebelum barang dikeluarkan.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Penyebab Umum Barang Tertahan di Pelabuhan (ilustrasi)",
        unit: "% kasus",
        source: "ilustrasi edukatif pola umum penahanan barang",
        note: "Dokumen dan izin lartas yang tidak lengkap adalah penyebab tersering, bukan soal bea.",
        data: [
          { label: "Izin/lartas tidak lengkap", value: 40, color: "#f472b6" },
          { label: "Salah HS Code", value: 25, color: "#fbbf24" },
          { label: "Dokumen tidak cocok", value: 20, color: "#60a5fa" },
          { label: "Pemeriksaan fisik", value: 15, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ekspor tekstil tertahan karena sertifikat kurang",
        html: "Sebuah produsen tekstil siap mengekspor garmen ke pembeli luar negeri. Saat dokumen diperiksa, ternyata pembeli mensyaratkan sertifikat asal bahan dan uji bahan kimia tertentu yang belum diurus. Pengiriman tertunda dua minggu, kontainer menunggu di pelabuhan, dan eksportir menanggung biaya penyimpanan plus penalti keterlambatan dari pembeli. Setelah itu perusahaan membuat daftar periksa kepatuhan per negara tujuan agar setiap sertifikat siap sebelum barang dikapalkan.",
      },
      {
        type: "case",
        title: "Sejarah: Smoot-Hawley 1930 dan bahaya proteksionisme",
        html: "Pada <strong>1930</strong>, Amerika Serikat memberlakukan <strong>Smoot-Hawley Tariff Act</strong> yang menaikkan tarif ribuan jenis barang impor. Negara lain membalas dengan tarif tinggi pula. Akibatnya volume perdagangan dunia anjlok drastis dan memperdalam Depresi Besar. Pelajaran sejarahnya: hambatan dagang yang berlebihan, baik tarif maupun non-tarif yang tidak masuk akal, bisa merugikan semua pihak. Trade compliance modern bertujuan menertibkan, bukan menutup perdagangan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Mengurus izin dan sertifikat lartas memakan biaya Rp8.000.000. Bila barang tertahan, demurrage Rp3.000.000 per hari selama 6 hari. Berapa rupiah biaya yang dihemat dengan patuh sejak awal (selisih demurrage dikurangi biaya izin)?",
        answer: 10000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Demurrage bila tertahan = 3.000.000 x 6 = 18.000.000. Patuh sejak awal hanya membayar izin 8.000.000. Penghematan = 18.000.000 - 8.000.000 = <strong>Rp10.000.000</strong>. Kepatuhan jauh lebih murah daripada penahanan.",
        hint: "Hitung total demurrage 6 hari, lalu kurangi biaya izin.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap status lartas berikut sebagai larangan penuh atau pembatasan bersyarat.",
        buckets: ["Larangan (tidak boleh sama sekali)", "Pembatasan (boleh dengan syarat)"],
        items: [
          { text: "Ekspor satwa langka yang dilindungi", bucket: "Larangan (tidak boleh sama sekali)" },
          { text: "Impor produk pangan yang butuh sertifikat kesehatan", bucket: "Pembatasan (boleh dengan syarat)" },
          { text: "Impor produk wajib SNI tanpa sertifikat", bucket: "Larangan (tidak boleh sama sekali)" },
          { text: "Impor barang berkuota dengan persetujuan impor", bucket: "Pembatasan (boleh dengan syarat)" },
          { text: "Ekspor produk pertanian dengan phytosanitary", bucket: "Pembatasan (boleh dengan syarat)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Hambatan dagang bukan hanya tarif; ada lapisan non-tarif berupa izin dan sertifikasi.",
          "Lartas terdiri atas larangan (tidak boleh) dan pembatasan (boleh dengan syarat).",
          "Status lartas ditautkan ke HS Code dan dikelola lewat INSW.",
          "Biaya kepatuhan hampir selalu lebih murah daripada barang tertahan dan demurrage.",
          "Smoot-Hawley 1930 menunjukkan hambatan dagang berlebihan merugikan semua pihak.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti lartas dalam kepabeanan Indonesia?",
            options: [
              "Lapor arus kas",
              "Larangan dan pembatasan",
              "Layanan transaksi",
              "Lalu lintas barang",
            ],
            answer: 1,
            explain: "Lartas adalah larangan dan pembatasan atas barang ekspor-impor.",
          },
          {
            q: "Apa beda larangan dan pembatasan?",
            options: [
              "Keduanya sama saja",
              "Larangan tidak boleh sama sekali; pembatasan boleh dengan syarat",
              "Larangan boleh dengan izin; pembatasan tidak boleh",
              "Keduanya hanya soal tarif",
            ],
            answer: 1,
            explain: "Larangan menutup total; pembatasan mengizinkan asalkan syarat dipenuhi.",
          },
          {
            q: "Status lartas suatu barang biasanya ditautkan ke apa?",
            options: ["Nomor rekening", "HS Code", "Nomor kapal", "Kurs mata uang"],
            answer: 1,
            explain: "Status lartas ditautkan ke HS Code dan dikelola lewat INSW.",
          },
          {
            q: "Mengapa kepatuhan lartas penting secara biaya?",
            options: [
              "Karena izin lebih mahal dari penahanan",
              "Karena penahanan dan demurrage biasanya jauh lebih mahal dari biaya izin",
              "Karena tidak ada biaya sama sekali",
              "Karena bea masuk jadi nol",
            ],
            answer: 1,
            explain: "Barang tertahan menimbulkan demurrage dan kerugian yang melebihi biaya izin.",
          },
          {
            q: "Apa pelajaran dari Smoot-Hawley Tariff 1930?",
            options: [
              "Tarif tinggi selalu menguntungkan",
              "Hambatan dagang berlebihan bisa merugikan semua pihak",
              "Perdagangan harus ditutup total",
              "Sertifikasi tidak diperlukan",
            ],
            answer: 1,
            explain: "Smoot-Hawley memicu balasan tarif dan memperdalam Depresi Besar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "fta-rules-of-origin",
    levelId: "global",
    order: 5,
    title: "FTA & Rules of Origin: Tarif Preferensi",
    summary:
      "Perjanjian perdagangan bebas bisa memangkas bea masuk jadi nol, tetapi hanya bila syarat asal barang terpenuhi. Pelajari FTA, Rules of Origin, dan Surat Keterangan Asal seperti Form D.",
    durationMin: 15,
    tags: ["global", "fta", "rules-of-origin", "form-d", "asean"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Free Trade Agreement (FTA)</strong> adalah perjanjian antarnegara untuk saling menurunkan atau menghapus bea masuk. Indonesia ikut banyak FTA, termasuk lewat ASEAN. Tetapi tarif preferensi tidak otomatis: barang harus benar-benar <strong>berasal</strong> dari negara anggota sesuai aturan, dibuktikan dengan dokumen resmi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/UK-India_Business_Leaders_Climate_Group_breakfast_meeting_%285177859631%29.jpg?width=400",
        alt: "Perwakilan dunia usaha dan pejabat berunding dalam satu meja",
        caption: "FTA lahir dari perundingan antarnegara. Hasilnya berupa tarif preferensi yang baru berlaku bila syarat asal barang dipenuhi dan dibuktikan lewat dokumen seperti Form D.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rules of Origin (aturan asal barang)",
        html: "<strong>Rules of Origin</strong> menentukan apakah suatu barang dianggap berasal dari negara anggota FTA. Dua prinsip umum: <strong>wholly obtained</strong> (sepenuhnya dihasilkan di negara itu, mis. hasil tani) atau memenuhi ambang <strong>kandungan lokal/regional</strong> (regional value content) dan perubahan klasifikasi. Tujuannya mencegah negara luar menumpang tarif preferensi hanya dengan transit.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Surat Keterangan Asal (Form D)",
        html: "Untuk menikmati tarif preferensi di ASEAN, eksportir melampirkan <strong>Surat Keterangan Asal (SKA)</strong>. Dalam skema ATIGA antar negara ASEAN, formulir yang dipakai dikenal sebagai <strong>Form D</strong>. Tanpa SKA yang sah, importir tetap membayar tarif normal (MFN), bukan tarif preferensi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Uji apakah sebuah produk lolos Rules of Origin dengan mengatur porsi kandungan lokal dan ambang regional value content.",
      },
      { type: "widget", widget: "SimulatorRulesOfOrigin" },
      {
        type: "video",
        comp: "TradeAgreementVideo",
        title: "Bagaimana FTA Memangkas Tarif",
        caption: "FTA menurunkan bea masuk antarnegara anggota bila syarat asal barang terpenuhi.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Bea Masuk: Tarif Normal vs Preferensi FTA atas CIF Rp200 Juta (ilustrasi)",
        unit: "Rp juta bea masuk",
        source: "ilustrasi edukatif perbandingan tarif MFN vs preferensi",
        note: "Dengan SKA yang sah, tarif preferensi bisa memangkas bea masuk drastis hingga mendekati nol.",
        data: [
          { label: "Tarif normal (MFN) 10%", value: 20, color: "#f472b6" },
          { label: "Preferensi FTA 5%", value: 10, color: "#fbbf24" },
          { label: "Preferensi FTA 0%", value: 0, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Eksportir kopi memanfaatkan tarif preferensi ASEAN",
        html: "Seorang eksportir kopi Indonesia mengirim ke pembeli di negara ASEAN. Tanpa SKA, bea masuk di negara tujuan misalnya 10% dari nilai pabean. Dengan melampirkan <strong>Form D</strong> yang membuktikan kopi benar-benar dihasilkan di Indonesia (wholly obtained), tarif turun menjadi 0% di bawah ATIGA. Untuk CIF setara Rp200.000.000, ini menghemat bea sekitar Rp20.000.000 yang membuat harga jual lebih bersaing. Syaratnya: dokumen asal harus sah dan data cocok dengan PEB.",
      },
      {
        type: "case",
        title: "Sejarah: AFTA 1992 dan kelahiran pasar tunggal ASEAN",
        html: "Pada <strong>1992</strong>, negara-negara ASEAN sepakat membentuk <strong>ASEAN Free Trade Area (AFTA)</strong> untuk menurunkan tarif intra-kawasan secara bertahap lewat skema CEPT, yang kemudian disempurnakan menjadi ATIGA. Tujuannya menjadikan ASEAN basis produksi dan pasar tunggal yang lebih menarik. Inilah fondasi mengapa eksportir Indonesia kini bisa menikmati tarif mendekati nol ke sesama negara ASEAN, selama Rules of Origin dan Form D dipenuhi.",
      },
      {
        type: "calcExercise",
        prompt:
          "CIF ekspor setara Rp200.000.000. Tarif normal di negara tujuan 10%, tetapi dengan Form D jadi 0%. Berapa rupiah bea masuk yang dihemat?",
        answer: 20000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Bea normal = 200.000.000 x 10% = 20.000.000. Dengan preferensi 0%, bea = 0. Penghematan = <strong>Rp20.000.000</strong>. Itulah nilai dari SKA/Form D yang sah.",
        hint: "Hitung bea masuk pada tarif 10%, lalu bandingkan dengan tarif 0%.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah produk bernilai Rp50.000.000, dengan komponen lokal Rp32.000.000. Berapa persen regional value content (kandungan lokal) produk ini?",
        answer: 64,
        tolerance: 0.1,
        suffix: "%",
        solution:
          "32.000.000 / 50.000.000 x 100% = <strong>64%</strong>. Bila ambang RVC FTA misalnya 40%, produk ini lolos Rules of Origin.",
        hint: "Bagi nilai komponen lokal dengan nilai produk, kalikan 100%.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah FTA dengan maknanya.",
        pairs: [
          { left: "FTA", right: "Perjanjian saling menurunkan bea masuk" },
          { left: "Rules of Origin", right: "Aturan penentu asal barang" },
          { left: "Form D", right: "SKA untuk preferensi antar negara ASEAN" },
          { left: "Wholly obtained", right: "Sepenuhnya dihasilkan di negara anggota" },
          { left: "Tarif MFN", right: "Tarif normal tanpa preferensi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "FTA menurunkan atau menghapus bea masuk antarnegara anggota.",
          "Tarif preferensi hanya berlaku bila Rules of Origin terpenuhi dan dibuktikan dengan SKA.",
          "Form D adalah SKA untuk tarif preferensi antar negara ASEAN (ATIGA).",
          "Asal barang dibuktikan lewat wholly obtained atau ambang kandungan regional (RVC).",
          "AFTA 1992 menjadi fondasi tarif intra-ASEAN yang kini bisa mendekati nol.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dilakukan FTA?",
            options: [
              "Menaikkan tarif antarnegara",
              "Menurunkan atau menghapus bea masuk antarnegara anggota",
              "Melarang ekspor",
              "Menetapkan kurs tetap",
            ],
            answer: 1,
            explain: "FTA adalah perjanjian saling menurunkan atau menghapus bea masuk.",
          },
          {
            q: "Untuk apa Rules of Origin?",
            options: [
              "Menentukan harga jual",
              "Menentukan apakah barang benar berasal dari negara anggota FTA",
              "Menghitung kurs",
              "Menetapkan jadwal kapal",
            ],
            answer: 1,
            explain: "Rules of Origin mencegah negara luar menumpang tarif preferensi.",
          },
          {
            q: "Dokumen apa yang dipakai untuk tarif preferensi antar negara ASEAN?",
            options: ["PIB", "Form D", "Bill of lading", "Invoice biasa"],
            answer: 1,
            explain: "Form D adalah Surat Keterangan Asal dalam skema ATIGA antar negara ASEAN.",
          },
          {
            q: "Produk Rp50 juta dengan komponen lokal Rp32 juta memiliki RVC berapa?",
            options: ["32%", "50%", "64%", "40%"],
            answer: 2,
            explain: "32 juta / 50 juta x 100% = 64%.",
          },
          {
            q: "Kapan AFTA disepakati negara-negara ASEAN?",
            options: ["1947", "1992", "1995", "2020"],
            answer: 1,
            explain: "AFTA disepakati pada 1992 untuk menurunkan tarif intra-kawasan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "manajemen-ekspor-impor-lc",
    levelId: "global",
    order: 6,
    title: "Manajemen Ekspor-Impor & Pembayaran L/C",
    summary:
      "Transaksi lintas negara butuh prosedur dan cara bayar yang aman. Pelajari alur ekspor-impor, Letter of Credit, dan cara memilih Incoterm yang tepat.",
    durationMin: 15,
    tags: ["global", "ekspor", "impor", "letter-of-credit", "incoterms"],
    blocks: [
      {
        type: "paragraph",
        html: "Berdagang lintas negara penuh ketidakpastian: penjual takut sudah mengirim barang tetapi tidak dibayar, pembeli takut sudah membayar tetapi barang tidak datang atau tidak sesuai. Manajemen ekspor-impor yang baik menata <strong>prosedur</strong>, <strong>dokumen</strong>, dan <strong>cara pembayaran</strong> agar kedua pihak terlindungi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Aircraft_cargo_loader_at_ZRH.jpg?width=400",
        alt: "Muatan ekspor disiapkan untuk dinaikkan ke pesawat kargo",
        caption: "Begitu barang ekspor dikapalkan, penjual menyerahkan dokumen pengiriman ke bank. Dengan Letter of Credit, pembayaran cair asalkan dokumen sesuai syarat yang disepakati.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Letter of Credit (L/C)",
        html: "<strong>Letter of Credit</strong> adalah jaminan pembayaran dari bank pembeli kepada penjual. Bank berjanji membayar penjual <strong>asalkan</strong> penjual menyerahkan dokumen yang sesuai syarat L/C (mis. bill of lading, invoice, packing list, SKA). Dengan L/C, penjual tidak bergantung pada itikad baik pembeli, melainkan pada janji bank yang lebih kuat.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Spektrum cara bayar",
        html: "Dari paling aman untuk penjual ke paling aman untuk pembeli: <strong>advance payment</strong> (bayar di muka, aman bagi penjual), <strong>L/C</strong> (seimbang, dijamin bank), <strong>documentary collection</strong>, lalu <strong>open account</strong> (kirim dulu bayar belakangan, aman bagi pembeli). Pilihannya bergantung pada tingkat kepercayaan dan posisi tawar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan Incoterm yang berbeda dan lihat sampai titik mana biaya serta risiko menjadi tanggungan Anda.",
      },
      { type: "widget", widget: "SimulatorIncoterms" },
      {
        type: "video",
        comp: "AlurEkspor",
        title: "Alur Ekspor dari Pabrik ke Pembeli",
        caption: "Dari kontrak, produksi, PEB, pengapalan, hingga penyerahan dokumen ke bank untuk pencairan L/C.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tingkat Keamanan Cara Bayar bagi Penjual (ilustrasi)",
        unit: "skor relatif untuk penjual",
        source: "ilustrasi edukatif perbandingan risiko cara bayar",
        note: "Advance payment paling aman bagi penjual; open account paling berisiko karena barang dikirim sebelum dibayar.",
        data: [
          { label: "Advance payment", value: 95, color: "#34d399" },
          { label: "L/C", value: 80, color: "#60a5fa" },
          { label: "Documentary collection", value: 55, color: "#fbbf24" },
          { label: "Open account", value: 25, color: "#f472b6" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Eksportir furnitur memakai L/C ke pembeli baru",
        html: "Sebuah eksportir furnitur Indonesia menerima pesanan besar dari pembeli baru di luar negeri yang belum pernah bertransaksi. Karena belum ada rekam jejak kepercayaan, mereka sepakat memakai <strong>L/C</strong>. Pembeli membuka L/C lewat banknya senilai kontrak. Setelah barang dikapalkan dan eksportir menyerahkan bill of lading, invoice, dan Form D yang sesuai syarat, bank mencairkan pembayaran. Risiko tidak dibayar berpindah dari niat pembeli ke janji bank, sehingga eksportir berani memproduksi pesanan besar.",
      },
      {
        type: "case",
        title: "Sejarah: RCEP ditandatangani 2020, berlaku 2022",
        html: "Pada <strong>2020</strong>, lima belas negara di Asia-Pasifik termasuk Indonesia menandatangani <strong>Regional Comprehensive Economic Partnership (RCEP)</strong>, salah satu blok dagang terbesar dunia, yang mulai <strong>berlaku 2022</strong>. RCEP menyatukan banyak aturan asal barang dan menurunkan tarif lintas kawasan. Bagi eksportir Indonesia, ini memperluas pasar dengan prosedur yang lebih seragam, sehingga manajemen ekspor lebih sederhana karena satu set aturan berlaku di banyak negara mitra.",
      },
      {
        type: "calcExercise",
        prompt:
          "Nilai kontrak ekspor 100.000 dolar AS dengan L/C. Bank mengenakan biaya 0,5% dari nilai L/C. Berapa dolar biaya banknya?",
        answer: 500,
        tolerance: 0,
        suffix: " dolar AS",
        solution:
          "100.000 x 0,5% = <strong>500 dolar AS</strong>. Biaya ini adalah harga atas jaminan pembayaran yang membuat transaksi dengan pihak baru jadi aman.",
        hint: "Kalikan nilai L/C dengan 0,5% dalam desimal (0,005).",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap cara bayar berdasarkan siapa yang lebih terlindungi.",
        buckets: ["Lebih aman bagi penjual", "Lebih aman bagi pembeli"],
        items: [
          { text: "Advance payment (bayar di muka)", bucket: "Lebih aman bagi penjual" },
          { text: "Open account (kirim dulu bayar belakangan)", bucket: "Lebih aman bagi pembeli" },
          { text: "L/C dengan dokumen sesuai syarat", bucket: "Lebih aman bagi penjual" },
          { text: "Pembeli membayar setelah barang tiba dan diperiksa", bucket: "Lebih aman bagi pembeli" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Manajemen ekspor-impor menata prosedur, dokumen, dan cara bayar agar kedua pihak terlindungi.",
          "L/C adalah jaminan bank: penjual dibayar asalkan dokumen sesuai syarat.",
          "Spektrum cara bayar dari advance payment (aman penjual) sampai open account (aman pembeli).",
          "Pilihan Incoterm menentukan sampai titik mana biaya dan risiko jadi tanggungan kita.",
          "RCEP yang berlaku 2022 menyeragamkan aturan dan memperluas pasar ekspor Indonesia.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi Letter of Credit?",
            options: [
              "Menentukan HS Code",
              "Jaminan pembayaran bank kepada penjual asalkan dokumen sesuai syarat",
              "Menghitung bea masuk",
              "Mengganti bill of lading",
            ],
            answer: 1,
            explain: "L/C mengalihkan risiko pembayaran dari niat pembeli ke janji bank.",
          },
          {
            q: "Cara bayar mana yang paling aman bagi penjual?",
            options: ["Open account", "Advance payment", "Documentary collection", "Bayar saat tiba"],
            answer: 1,
            explain: "Advance payment berarti penjual dibayar sebelum mengirim barang.",
          },
          {
            q: "Cara bayar mana yang paling aman bagi pembeli?",
            options: ["Advance payment", "L/C", "Open account", "Bayar di muka penuh"],
            answer: 2,
            explain: "Open account berarti barang dikirim dulu, pembeli membayar belakangan.",
          },
          {
            q: "Nilai L/C 100.000 dolar AS dengan biaya bank 0,5%. Berapa biayanya?",
            options: ["50 dolar AS", "500 dolar AS", "5.000 dolar AS", "1.000 dolar AS"],
            answer: 1,
            explain: "100.000 x 0,5% = 500 dolar AS.",
          },
          {
            q: "Kapan RCEP mulai berlaku?",
            options: ["1992", "2018", "2020", "2022"],
            answer: 3,
            explain: "RCEP ditandatangani 2020 dan mulai berlaku 2022.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sanctions-compliance-risiko-geoekonomi",
    levelId: "global",
    order: 7,
    title: "Sanctions Compliance & Risiko Geoekonomi",
    summary:
      "Perdagangan global juga tunduk pada sanksi dan ketegangan antarnegara. Pelajari sanctions compliance, daftar pihak terlarang, dan cara rantai pasok menghadapi risiko geoekonomi.",
    durationMin: 14,
    tags: ["global", "sanksi", "geoekonomi", "compliance", "risiko"],
    blocks: [
      {
        type: "paragraph",
        html: "Selain tarif dan lartas, ada lapisan risiko yang lebih jarang dibahas tetapi sangat nyata: <strong>sanksi</strong> dan <strong>ketegangan geoekonomi</strong>. Negara atau blok bisa melarang berdagang dengan pihak tertentu, dan persaingan antarnegara besar bisa mengganggu pasokan komponen kunci ke seluruh dunia.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Suez_Canal_traffic_jam_seen_from_space.jpg?width=400",
        alt: "Antrean kapal di Terusan Suez terlihat dari luar angkasa",
        caption: "Saat satu jalur atau satu sumber pasokan tersendat, seperti kemacetan di Terusan Suez, rantai pasok global ikut terguncang. Inilah alasan diversifikasi dan de-risking penting.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Denied party screening",
        html: "<strong>Sanctions compliance</strong> mewajibkan perusahaan memeriksa apakah calon mitra masuk <strong>daftar pihak terlarang (denied/sanctioned party list)</strong> sebelum bertransaksi. Bertransaksi dengan pihak yang disanksi bisa berakibat denda besar, putus akses perbankan internasional, dan kerusakan reputasi. Pemeriksaan ini disebut <em>screening</em> dan dilakukan sebelum kontrak diteken.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Risiko konsentrasi pasokan",
        html: "Bila satu komponen kunci hanya dipasok dari satu negara atau satu pabrik, ketegangan geopolitik atau sanksi bisa memutus seluruh rantai. Pelajaran ketahanan rantai pasok: <strong>diversifikasi pemasok</strong> dan kenali ketergantungan tersembunyi pada satu sumber.",
      },
      {
        type: "callout",
        tone: "info",
        title: "De-risking, bukan decoupling",
        html: "Banyak perusahaan kini memilih <strong>de-risking</strong>: mengurangi ketergantungan berlebihan pada satu negara tanpa memutus hubungan sepenuhnya. Strateginya termasuk menambah pemasok cadangan, mendekatkan produksi (nearshoring), dan memperbesar stok komponen kritis.",
      },
      {
        type: "video",
        comp: "GlobalTradeVideo",
        title: "Saat Geopolitik Mengguncang Rantai Pasok",
        caption: "Sanksi dan ketegangan antarnegara dapat memutus aliran barang lintas perbatasan.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Dampak Gangguan Pasokan terhadap Ketersediaan Komponen (ilustrasi)",
        unit: "% ketersediaan",
        source: "ilustrasi edukatif pola gangguan dan pemulihan pasokan",
        note: "Saat sumber tunggal terganggu, ketersediaan anjlok lalu pulih bertahap setelah pemasok alternatif aktif.",
        data: [
          { label: "Sebelum", value: 100, color: "#34d399" },
          { label: "Gangguan", value: 35, color: "#f472b6" },
          { label: "Cari alternatif", value: 60, color: "#fbbf24" },
          { label: "Pulih", value: 90, color: "#60a5fa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Eksportir Indonesia menyaring mitra sebelum kontrak",
        html: "Sebuah eksportir komponen elektronik dari Indonesia mendapat pesanan menarik dari perusahaan asing yang baru dikenal. Sebelum meneken kontrak, tim kepatuhan melakukan <strong>denied party screening</strong> dan menemukan bahwa perusahaan itu terafiliasi dengan pihak yang masuk daftar sanksi internasional. Perusahaan membatalkan transaksi. Meski kehilangan pesanan jangka pendek, mereka terhindar dari risiko denda, pemblokiran pembayaran lintas bank, dan rusaknya akses ke pasar ekspor yang lebih besar. Kepatuhan menjaga kelangsungan bisnis jangka panjang.",
      },
      {
        type: "case",
        title: "Sejarah: Perang dagang AS-Tiongkok sejak 2018",
        html: "Mulai <strong>2018</strong>, Amerika Serikat dan Tiongkok saling menaikkan tarif dan membatasi akses teknologi dalam <strong>perang dagang</strong> yang berlanjut bertahun-tahun. Banyak perusahaan global terdorong memindahkan sebagian produksi dan mendiversifikasi pemasok untuk mengurangi risiko, sebuah pola yang menguntungkan beberapa negara ASEAN sebagai tujuan relokasi. Peristiwa ini menegaskan bahwa keputusan geoekonomi antarnegara besar dapat mengubah peta rantai pasok dunia dengan cepat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pabrik bergantung 100% pada satu negara untuk komponen kunci. Setelah diversifikasi, hanya 40% yang masih dari negara itu. Berapa poin persen ketergantungan yang berhasil dikurangi?",
        answer: 60,
        tolerance: 0,
        suffix: " poin persen",
        solution:
          "100% - 40% = <strong>60 poin persen</strong>. Diversifikasi pemasok menurunkan risiko terputusnya pasokan bila satu sumber terganggu oleh sanksi atau geopolitik.",
        hint: "Kurangi ketergantungan awal dengan ketergantungan setelah diversifikasi.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap tindakan sebagai memperkuat atau memperlemah ketahanan rantai pasok terhadap risiko geoekonomi.",
        buckets: ["Memperkuat ketahanan", "Memperlemah ketahanan"],
        items: [
          { text: "Menyaring mitra terhadap daftar pihak terlarang", bucket: "Memperkuat ketahanan" },
          { text: "Bergantung pada satu pemasok tunggal di satu negara", bucket: "Memperlemah ketahanan" },
          { text: "Menambah pemasok cadangan di beberapa negara", bucket: "Memperkuat ketahanan" },
          { text: "Mengabaikan status sanksi calon mitra", bucket: "Memperlemah ketahanan" },
          { text: "Memperbesar stok komponen kritis", bucket: "Memperkuat ketahanan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Perdagangan global tunduk pada sanksi dan ketegangan geoekonomi, bukan hanya tarif.",
          "Denied party screening wajib dilakukan sebelum bertransaksi dengan mitra baru.",
          "Ketergantungan pada satu sumber tunggal adalah risiko besar bila terjadi gangguan.",
          "De-risking dan diversifikasi pemasok memperkuat ketahanan rantai pasok.",
          "Perang dagang AS-Tiongkok sejak 2018 mengubah peta rantai pasok dan menguntungkan sebagian ASEAN.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu denied party screening?",
            options: [
              "Memeriksa kurs mata uang",
              "Memeriksa apakah calon mitra masuk daftar pihak terlarang sebelum bertransaksi",
              "Menghitung bea masuk",
              "Memilih kapal pengangkut",
            ],
            answer: 1,
            explain: "Screening mencegah perusahaan bertransaksi dengan pihak yang disanksi.",
          },
          {
            q: "Mengapa bergantung pada satu sumber pasokan berisiko?",
            options: [
              "Karena selalu lebih mahal",
              "Karena gangguan pada satu sumber bisa memutus seluruh pasokan",
              "Karena dilarang undang-undang",
              "Karena tidak ada dokumennya",
            ],
            answer: 1,
            explain: "Sumber tunggal membuat rantai rentan terhadap sanksi atau gangguan geopolitik.",
          },
          {
            q: "Apa makna de-risking dalam rantai pasok?",
            options: [
              "Memutus semua hubungan dagang",
              "Mengurangi ketergantungan berlebihan tanpa memutus hubungan sepenuhnya",
              "Menaikkan semua tarif",
              "Menghapus dokumen pabean",
            ],
            answer: 1,
            explain: "De-risking menurunkan risiko konsentrasi tanpa decoupling total.",
          },
          {
            q: "Ketergantungan turun dari 100% jadi 40%. Berapa poin persen pengurangannya?",
            options: ["40 poin persen", "60 poin persen", "100 poin persen", "20 poin persen"],
            answer: 1,
            explain: "100% - 40% = 60 poin persen.",
          },
          {
            q: "Sejak kapan perang dagang AS-Tiongkok yang mengubah rantai pasok dimulai?",
            options: ["1992", "1995", "2018", "2022"],
            answer: 2,
            explain: "Perang dagang AS-Tiongkok meningkat sejak 2018 lewat saling kenaikan tarif.",
          },
        ],
      },
    ],
  },
];
