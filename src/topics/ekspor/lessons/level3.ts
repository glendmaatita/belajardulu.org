import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "dokumen-ekspor",
    levelId: "legalitas",
    order: 3,
    title: "Dokumen Inti Ekspor",
    summary:
      "Mengenal dokumen wajib ekspor (invoice, packing list, PEB, B/L) dan dokumen pelengkap (SKA, phytosanitary), siapa yang menerbitkan, dan mengapa SKA bisa memangkas bea masuk di negara tujuan.",
    durationMin: 15,
    tags: ["dokumen ekspor", "SKA", "PEB", "bill of lading"],
    blocks: [
      {
        type: "paragraph",
        html: "Ekspor berjalan di atas <strong>dokumen</strong>. Barang boleh bagus, tetapi tanpa dokumen yang benar, barang tertahan, pembayaran macet, atau buyer menolak. Kabar baiknya, sebagian besar dokumen kamu siapkan sendiri, dan sisanya diterbitkan instansi atau pengangkut.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Port_of_Tanjung_Priok_in_1908.jpg?width=500",
        alt: "Suasana Pelabuhan Tanjung Priok pada 1908",
        caption: "Pelabuhan Tanjung Priok, 1908. Sejak dahulu ekspor berjalan di atas dokumen dan pelabuhan.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "video",
        comp: "DokumenEksporImporVideo",
        title: "Video: Dokumen dalam Perdagangan Internasional",
        caption: "Alur dokumen dari invoice sampai bukti pengapalan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dokumen inti yang hampir selalu ada",
        html: "<strong>Commercial Invoice</strong> (tagihan dan rincian nilai), <strong>Packing List</strong> (rincian isi tiap koli), <strong>PEB</strong> (pemberitahuan ekspor ke Bea Cukai), dan <strong>Bill of Lading / Airway Bill</strong> (bukti pengangkutan). Sisanya menyesuaikan produk dan negara tujuan.",
      },
      {
        type: "table",
        caption: "Dokumen ekspor dan penerbitnya",
        headers: ["Dokumen", "Fungsi", "Diterbitkan oleh"],
        rows: [
          ["Commercial Invoice", "Tagihan dan nilai transaksi", "Eksportir"],
          ["Packing List", "Rincian isi, berat, dimensi tiap koli", "Eksportir"],
          ["PEB", "Pemberitahuan ekspor ke Bea Cukai", "Eksportir (lewat CEISA)"],
          ["NPE", "Tanda barang boleh dimuat ke kapal", "Bea Cukai (DJBC)"],
          ["Bill of Lading / AWB", "Bukti kontrak pengangkutan", "Pelayaran / maskapai / forwarder"],
          ["SKA (Certificate of Origin)", "Menyatakan asal barang untuk tarif preferensi", "Instansi Penerbit SKA (lewat e-SKA)"],
          ["Phytosanitary", "Bukti bebas hama untuk produk tumbuhan", "Badan Karantina Indonesia"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "SKA bisa memangkas bea masuk buyer",
        html: "<strong>SKA</strong> (Surat Keterangan Asal) menyatakan barang benar-benar berasal dari Indonesia. Dengan SKA yang tepat (mis. Form D untuk ASEAN, Form AK untuk Korea), buyer bisa membayar bea masuk lebih rendah atau nol berkat perjanjian perdagangan bebas. Ini membuat produkmu lebih murah di mata buyer tanpa menurunkan hargamu.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Bea masuk di negara tujuan atas produk furnitur: tanpa vs dengan SKA",
        unit: "%",
        source: "Ilustrasi berdasarkan skema tarif preferensi FTA",
        note: "Dengan SKA yang sah, tarif preferensi bisa memangkas bea masuk buyer sampai nol; ini nilai jual tambahan bagimu.",
        data: [
          { label: "Tanpa SKA (tarif MFN)", value: 10, color: "#ef4444" },
          { label: "Dengan SKA (preferensi FTA)", value: 0, color: "#10b981" },
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "Konsistensi antar dokumen itu wajib",
        html: "Nama barang, jumlah, berat, dan nilai harus <strong>sama persis</strong> di invoice, packing list, PEB, dan B/L. Selisih kecil bisa membuat barang tertahan atau pembayaran lewat LC ditolak bank.",
      },
      {
        type: "case",
        title: "Studi Kasus: Salah satu huruf, satu kontainer tertahan",
        html: "Sebuah kiriman kopi ditolak pembayarannya karena di invoice tertulis 'Arabica Gayo 1.000 kg' sementara di B/L tertulis '1.000 kgs net, 1.050 kgs gross' tanpa penjelasan. Bank pemroses LC menganggap dokumen tidak sesuai (<em>discrepancy</em>) dan menahan pembayaran sampai eksportir mengurus koreksi, memakan waktu dua minggu. Ketelitian dokumen bukan formalitas, melainkan penentu kapan uang masuk.",
      },
      {
        type: "case",
        title: "Studi Kasus: SKA memangkas bea masuk buyer sampai nol",
        html: "Lestari mengekspor furnitur rotan senilai USD 10.000 ke pembeli di Malaysia. Tanpa SKA, buyer harus membayar bea masuk sekitar 10 persen, yaitu sekitar USD 1.000. Karena barang benar-benar berasal dari Indonesia, Lestari mengurus <strong>SKA Form D</strong> lewat sistem e-SKA tanpa biaya besar. Dengan Form D yang sah, bea masuk buyer di Malaysia turun menjadi nol berkat skema perdagangan bebas ASEAN. Buyer hemat sekitar USD 1.000, dan Lestari jadi pemasok yang lebih menarik tanpa perlu menurunkan harganya.",
      },
      {
        type: "classifyExercise",
        prompt: "Dokumen ini kamu siapkan sendiri, atau diterbitkan pihak lain?",
        buckets: ["Disiapkan eksportir", "Diterbitkan pihak lain"],
        items: [
          { text: "Commercial Invoice", bucket: "Disiapkan eksportir" },
          { text: "Packing List", bucket: "Disiapkan eksportir" },
          { text: "Bill of Lading", bucket: "Diterbitkan pihak lain" },
          { text: "SKA / Certificate of Origin", bucket: "Diterbitkan pihak lain" },
          { text: "Phytosanitary Certificate", bucket: "Diterbitkan pihak lain" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap dokumen dengan fungsinya.",
        pairs: [
          { left: "Commercial Invoice", right: "Tagihan dan nilai transaksi" },
          { left: "Packing List", right: "Rincian isi dan berat tiap koli" },
          { left: "Bill of Lading", right: "Bukti kontrak pengangkutan" },
          { left: "SKA", right: "Menyatakan asal barang untuk tarif preferensi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Empat dokumen inti: Commercial Invoice, Packing List, PEB, dan Bill of Lading / AWB.",
          "PEB kamu ajukan sendiri lewat CEISA; NPE terbit dari Bea Cukai sebagai izin muat.",
          "SKA menyatakan asal barang dan bisa memangkas bea masuk buyer lewat perjanjian FTA.",
          "Data di semua dokumen harus konsisten agar barang tidak tertahan dan pembayaran lancar.",
          "Dokumen pelengkap (phytosanitary, fumigasi) menyesuaikan jenis produk dan aturan negara tujuan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Manakah yang termasuk dokumen inti ekspor?",
            options: ["KTP eksportir", "Commercial Invoice", "Buku tabungan", "Kartu nama buyer"],
            answer: 1,
            explain: "Commercial Invoice adalah salah satu dokumen inti bersama Packing List, PEB, dan B/L.",
          },
          {
            q: "Siapa yang menerbitkan NPE?",
            options: ["Eksportir", "Bank", "Bea Cukai (DJBC)", "Buyer"],
            answer: 2,
            explain: "NPE (Nota Pelayanan Ekspor) diterbitkan Bea Cukai sebagai tanda barang boleh dimuat.",
          },
          {
            q: "Apa manfaat utama SKA bagi buyer?",
            options: [
              "Barang jadi lebih berat",
              "Bea masuk di negara tujuan bisa lebih rendah atau nol",
              "Menghapus kebutuhan invoice",
              "Menambah pajak eksportir",
            ],
            answer: 1,
            explain: "Dengan SKA yang sah, buyer bisa menikmati tarif preferensi lewat perjanjian perdagangan bebas.",
          },
          {
            q: "Mengapa data antar dokumen harus konsisten?",
            options: [
              "Agar terlihat rapi",
              "Karena selisih bisa menahan barang atau menolak pembayaran LC",
              "Agar dokumen lebih banyak",
              "Tidak penting sebenarnya",
            ],
            answer: 1,
            explain: "Ketidaksesuaian (discrepancy) membuat bank menahan pembayaran dan barang bisa tertahan.",
          },
          {
            q: "Dokumen phytosanitary paling relevan untuk produk?",
            options: ["Besi baja", "Produk tumbuhan/pertanian", "Elektronik", "Tekstil sintetis"],
            answer: 1,
            explain: "Phytosanitary adalah sertifikat karantina tumbuhan, diminta untuk produk pertanian agar terbukti bebas hama.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "legalitas-usaha",
    levelId: "legalitas",
    order: 1,
    title: "Legalitas Eksportir Lewat OSS dan NIB",
    summary:
      "Cara orang biasa menjadi eksportir yang sah: bikin NIB lewat OSS, pilih KBLI perdagangan, tanpa perlu pabrik, dan kapan sebuah komoditas menuntut izin khusus atau status Eksportir Terdaftar.",
    durationMin: 14,
    tags: ["NIB", "OSS", "legalitas"],
    blocks: [
      {
        type: "paragraph",
        html: "Banyak orang mengira untuk ekspor harus punya pabrik dan izin yang rumit. Kenyataannya, sebagai <strong>eksportir non-produsen</strong> yang membeli dari UMKM, petani, atau perajin lalu menjualnya ke buyer luar negeri, modal legal utamamu cukup satu: <strong>NIB</strong> (Nomor Induk Berusaha).",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ships_in_Tanjung_Priok%2C_Indonesia_Tanah_Airku%2C_p89.jpg?width=500",
        alt: "Kapal-kapal di Pelabuhan Tanjung Priok",
        caption: "Menjadi eksportir resmi kini cukup lewat NIB dari OSS, tanpa perlu memiliki pabrik.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "paragraph",
        html: "NIB diterbitkan gratis lewat sistem <strong>OSS</strong> (Online Single Submission) di <em>oss.go.id</em>. NIB sekaligus berfungsi sebagai Tanda Daftar Perusahaan, angka pengenal impor bila diperlukan, dan hak akses ke banyak layanan. Untuk berdagang dan ekspor, kamu cukup memilih bidang usaha (KBLI) perdagangan, bukan KBLI industri/pabrik.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Cukup NIB, tanpa pabrik",
        html: "Eksportir non-produsen tidak wajib punya izin pabrik. Yang wajib adalah <strong>NIB dengan KBLI perdagangan</strong> yang sesuai (mis. perdagangan besar hasil pertanian, kopi, atau kerajinan). Kamu membeli barang jadi dari produsen lokal, lalu mengekspornya atas nama badan usaha atau usaha peroranganmu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Langkah ringkas bikin NIB",
        html: "1) Daftar akun di oss.go.id dengan NIK atau data badan usaha. 2) Isi data usaha dan pilih KBLI perdagangan yang tepat. 3) Sistem menilai tingkat risiko usaha. 4) NIB terbit, dan untuk risiko rendah biasanya langsung berlaku sebagai izin. Simpan NIB baik-baik, karena diminta saat mengurus PEB dan dokumen lain.",
      },
      {
        type: "table",
        caption: "Status dan dokumen legalitas dasar eksportir",
        headers: ["Dokumen / status", "Fungsi", "Wajib untuk siapa"],
        rows: [
          ["NIB (lewat OSS)", "Identitas dan izin dasar berusaha", "Semua eksportir"],
          ["KBLI perdagangan", "Menegaskan kamu boleh berdagang komoditas itu", "Eksportir non-produsen"],
          ["NPWP", "Identitas pajak, dipakai di NIB dan dokumen ekspor", "Semua eksportir"],
          ["Izin pabrik / industri", "Izin memproduksi barang", "Hanya produsen, bukan eksportir non-produsen"],
          ["Eksportir Terdaftar / izin khusus", "Syarat tambahan untuk komoditas tertentu", "Hanya komoditas yang diatur"],
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "Sebagian komoditas menuntut izin khusus",
        html: "Untuk komoditas tertentu, NIB saja belum cukup. Beberapa barang mensyaratkan status <strong>Eksportir Terdaftar</strong> atau izin dari instansi teknis, misalnya produk kayu (butuh dokumen legalitas kayu dan V-Legal), tumbuhan dan satwa liar (CITES), atau mineral tertentu. Selalu cek dulu status komoditasmu sebelum berjanji ke buyer.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan biaya resmi memulai legalitas eksportir",
        unit: "Rp ribu",
        source: "Ilustrasi edukatif",
        note: "NIB lewat OSS diterbitkan tanpa biaya; anggapan bahwa memulai butuh puluhan juta sering keliru untuk eksportir non-produsen.",
        data: [
          { label: "Anggapan orang (izin + pabrik)", value: 50000, color: "#ef4444" },
          { label: "Kenyataan (NIB via OSS)", value: 0, color: "#10b981" },
        ],
      },
      {
        type: "stats",
        items: [
          { value: "Rp0", label: "Biaya penerbitan NIB lewat OSS", color: "#10b981" },
          { value: "1", label: "Modal legal utama", sub: "cukup NIB, tanpa izin pabrik", color: "#3b82f6" },
          { value: "13 digit", label: "Panjang nomor NIB", color: "#f59e0b" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Rina, reseller kopi jadi eksportir",
        html: "Rina tidak punya kebun maupun pabrik. Ia membeli kopi dari petani di Gayo dan ingin menjual ke pembeli di Malaysia. Ia mendaftar NIB di OSS dengan KBLI perdagangan besar kopi, tanpa biaya, dan NIB terbit dalam hitungan hari. Dengan NIB plus NPWP, Rina sudah sah mengajukan dokumen ekspor. Ia tidak perlu izin pabrik, cukup nota pembelian dari petani sebagai bukti asal barang.",
      },
      {
        type: "case",
        title: "Studi Kasus: Salah pilih KBLI, harus menambah bidang usaha",
        html: "Andi mendaftar NIB tetapi hanya memilih satu KBLI, yaitu perdagangan eceran pakaian, karena awalnya berjualan baju di dalam negeri. Saat ia mendapat pesanan kerajinan rotan dari buyer Belanda, KBLI yang ia miliki tidak mencakup komoditas itu. Ia harus masuk lagi ke OSS untuk <strong>menambah KBLI perdagangan besar barang kerajinan</strong> pada NIB yang sama. Penambahan tetap tanpa biaya, tetapi memakan waktu beberapa hari sehingga pengapalan mundur. Pelajarannya, pilih KBLI yang mencakup semua komoditas yang berpotensi kamu ekspor sejak awal.",
      },
      {
        type: "classifyExercise",
        prompt: "Untuk mengekspor barang berikut, apakah cukup NIB, atau perlu izin khusus / Eksportir Terdaftar?",
        buckets: ["Cukup NIB", "Perlu izin khusus"],
        items: [
          { text: "Keripik singkong kemasan", bucket: "Cukup NIB" },
          { text: "Kopi biji dari petani", bucket: "Cukup NIB" },
          { text: "Kerajinan rotan anyaman", bucket: "Cukup NIB" },
          { text: "Produk kayu olahan (butuh V-Legal)", bucket: "Perlu izin khusus" },
          { text: "Satwa liar yang dilindungi (CITES)", bucket: "Perlu izin khusus" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah legalitas dengan artinya.",
        pairs: [
          { left: "NIB", right: "Nomor identitas dan izin dasar berusaha" },
          { left: "OSS", right: "Sistem daring tempat menerbitkan NIB" },
          { left: "KBLI", right: "Kode bidang usaha yang kamu jalankan" },
          { left: "Eksportir Terdaftar", right: "Status khusus untuk komoditas tertentu" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Rina mengurus NIB sendiri lewat OSS untuk komoditas kopi yang tidak butuh izin khusus. Berapa total biaya resmi penerbitan NIB yang harus ia bayar?",
        answer: 0,
        prefix: "Rp",
        solution:
          "NIB diterbitkan melalui OSS tanpa dipungut biaya. Untuk eksportir non-produsen dengan komoditas bebas seperti kopi biji, tidak ada biaya izin pabrik. Jadi total biaya resmi penerbitan NIB adalah Rp0.",
        hint: "OSS menerbitkan NIB secara gratis.",
      },
      {
        type: "takeaways",
        items: [
          "Modal legal utama eksportir non-produsen cukup NIB yang diterbitkan lewat OSS.",
          "Pilih KBLI perdagangan, bukan KBLI industri; kamu tidak perlu izin pabrik.",
          "NIB diterbitkan tanpa biaya dan sekaligus menjadi identitas berusaha.",
          "Sebagian komoditas (kayu, satwa liar, mineral tertentu) butuh izin khusus atau status Eksportir Terdaftar.",
          "Selalu cek status komoditas sebelum berjanji mengirim ke buyer.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Modal legal dasar untuk menjadi eksportir non-produsen adalah?",
            options: ["Izin pabrik", "NIB lewat OSS", "Sertifikat tanah", "Kartu anggota kadin"],
            answer: 1,
            explain: "NIB yang diterbitkan lewat OSS adalah izin dasar berusaha, cukup untuk eksportir non-produsen.",
          },
          {
            q: "Berapa biaya resmi penerbitan NIB di OSS?",
            options: ["Rp5 juta", "Rp1 juta", "Gratis", "Tergantung omzet"],
            answer: 2,
            explain: "NIB diterbitkan tanpa biaya melalui sistem OSS.",
          },
          {
            q: "KBLI yang tepat untuk eksportir non-produsen adalah?",
            options: ["KBLI industri/pabrik", "KBLI perdagangan", "KBLI pertambangan", "KBLI konstruksi"],
            answer: 1,
            explain: "Karena kamu berdagang barang jadi dari produsen lain, KBLI perdagangan yang sesuai.",
          },
          {
            q: "Komoditas manakah yang biasanya butuh izin khusus untuk ekspor?",
            options: ["Keripik singkong", "Kopi biji", "Produk kayu olahan", "Kerajinan rotan"],
            answer: 2,
            explain: "Produk kayu butuh dokumen legalitas kayu dan V-Legal, sehingga tidak cukup NIB saja.",
          },
          {
            q: "Apakah eksportir non-produsen wajib punya izin pabrik?",
            options: [
              "Wajib selalu",
              "Tidak, karena ia tidak memproduksi barang",
              "Wajib jika omzet besar",
              "Wajib untuk semua makanan",
            ],
            answer: 1,
            explain: "Eksportir non-produsen membeli barang jadi dari produsen, jadi tidak perlu izin pabrik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "lartas-ekspor",
    levelId: "legalitas",
    order: 2,
    title: "Lartas dan Perizinan Ekspor",
    summary:
      "Cara memastikan produkmu bebas, dibatasi, atau dilarang untuk diekspor lewat portal INSW, apa yang harus dilakukan bila butuh izin, dan bagaimana aturan asal barang berhubungan dengan preferensi tarif.",
    durationMin: 15,
    tags: ["lartas", "INSW", "perizinan"],
    blocks: [
      {
        type: "paragraph",
        html: "Tidak semua barang boleh diekspor bebas. Pemerintah menerapkan <strong>Lartas</strong> (larangan dan pembatasan) untuk sebagian komoditas. Sebelum menjanjikan pengiriman ke buyer, kamu wajib tahu status barangmu: <strong>bebas</strong>, <strong>dibatasi</strong>, atau <strong>dilarang</strong>.",
      },
      {
        type: "paragraph",
        html: "Cara paling andal adalah mengecek lewat portal <strong>INSW</strong> (Indonesia National Single Window) di <em>insw.go.id</em>. Di sana kamu bisa menelusuri berdasarkan uraian barang atau kode HS untuk melihat apakah ada aturan larangan atau pembatasan yang berlaku.",
      },
      {
        type: "video",
        comp: "DigitalCustomsVideo",
        title: "Video: Kepabeanan Digital dan Satu Pintu",
        caption: "Bagaimana sistem satu pintu menyatukan pengecekan izin di satu tempat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga status Lartas",
        html: "<strong>Bebas</strong>: boleh diekspor tanpa izin tambahan. <strong>Dibatasi</strong>: boleh diekspor tetapi butuh izin atau syarat tertentu (mis. rekomendasi instansi, kuota, atau sertifikat). <strong>Dilarang</strong>: tidak boleh diekspor sama sekali. Status ditentukan per komoditas lewat kode HS.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Sebagian pembatasan dan juga preferensi tarif bergantung pada <strong>asal barang</strong> (rules of origin). Coba simulator di bawah untuk merasakan bagaimana kandungan lokal menentukan apakah barangmu diakui berasal dari Indonesia, yang penting untuk SKA sekaligus untuk memenuhi syarat izin tertentu.",
      },
      {
        type: "widget",
        widget: "SimulatorRulesOfOrigin",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jumlah pintu pengecekan izin: sebelum vs sesudah INSW",
        unit: "titik cek",
        source: "Ilustrasi edukatif",
        note: "Sistem satu pintu INSW menyatukan pengecekan yang dulu tersebar di banyak instansi menjadi satu portal.",
        data: [
          { label: "Cek manual ke tiap instansi", value: 5, color: "#ef4444" },
          { label: "Cek lewat satu pintu INSW", value: 1, color: "#10b981" },
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bila barangmu dibatasi",
        html: "Jangan panik dan jangan nekat mengirim. Barang berstatus dibatasi tetap bisa diekspor asal kamu melengkapi izin atau syaratnya, misalnya rekomendasi dari instansi teknis atau sertifikat khusus. Urus dokumen itu dulu, lalu status barang bisa lolos saat pengajuan ekspor.",
      },
      {
        type: "case",
        title: "Studi Kasus: Budi cek dulu sebelum janji",
        html: "Budi hendak mengekspor arang batok kelapa dan furnitur kayu jati. Ia cek di INSW: arang batok kelapa berstatus bebas, sementara produk kayu masuk kategori dibatasi karena butuh dokumen legalitas kayu (V-Legal). Karena tahu lebih awal, Budi hanya menjanjikan pengiriman cepat untuk arang, sementara untuk furnitur ia mengurus V-Legal dulu selama beberapa minggu. Ia terhindar dari gagal kirim dan reputasi buruk di mata buyer.",
      },
      {
        type: "case",
        title: "Studi Kasus: Cek satu kode HS menyelamatkan Dewi dari denda",
        html: "Dewi mendapat pesanan 2 ton sisa dan skrap logam dari pembeli di Vietnam senilai USD 4.000. Sebelum menandatangani kontrak, ia menelusuri kode HS barang itu di portal INSW dan menemukan status <strong>dibatasi</strong>: ekspor skrap logam tertentu butuh rekomendasi instansi teknis dan bisa dibatasi kuota. Alih-alih nekat mengapalkan dan berisiko kena penindakan Bea Cukai, Dewi menunda transaksi dan mengurus izinnya lebih dulu. Pengecekan yang hanya butuh beberapa menit menghindarkannya dari sanksi dan barang yang tertahan di pelabuhan.",
      },
      {
        type: "case",
        title: "Sejarah: Lahirnya sistem satu pintu INSW dan ASEAN Single Window",
        html: "Dulu, mengurus izin ekspor dan impor berarti mendatangi banyak instansi satu per satu. Untuk memangkasnya, negara-negara ASEAN menandatangani <strong>Agreement to Establish and Implement the ASEAN Single Window</strong> di Kuala Lumpur pada Desember 2005. Indonesia lalu membangun <strong>INSW</strong> (Indonesia National Single Window) sekitar tahun 2007 sebagai portal yang menyatukan pengecekan perizinan di satu tempat. Pada Januari 2018, ASEAN Single Window mulai beroperasi untuk pertukaran dokumen elektronik asal barang (e-Form D) di antara lima negara pertama, termasuk Indonesia. Inilah cikal bakal kemudahan cek Lartas cukup lewat satu portal seperti yang kamu pakai sekarang.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan barang berikut menurut status Lartas ekspornya (gunakan contoh umum).",
        buckets: ["Bebas", "Dibatasi", "Dilarang"],
        items: [
          { text: "Keripik pisang kemasan", bucket: "Bebas" },
          { text: "Kopi biji sangrai", bucket: "Bebas" },
          { text: "Produk kayu (butuh V-Legal)", bucket: "Dibatasi" },
          { text: "Sisa dan skrap logam tertentu", bucket: "Dibatasi" },
          { text: "Satwa liar dilindungi tanpa izin", bucket: "Dilarang" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah dengan maknanya.",
        pairs: [
          { left: "Lartas", right: "Larangan dan pembatasan atas barang tertentu" },
          { left: "INSW", right: "Portal satu pintu untuk cek aturan barang" },
          { left: "Kode HS", right: "Kode yang menentukan aturan per komoditas" },
          { left: "Rules of origin", right: "Aturan yang menentukan asal barang" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Cek status Lartas produkmu lewat portal INSW sebelum menjanjikan pengiriman.",
          "Tiga status: bebas, dibatasi, atau dilarang, ditentukan per kode HS.",
          "Barang dibatasi tetap bisa diekspor asal izin atau syaratnya dilengkapi.",
          "Aturan asal barang menentukan pengakuan asal Indonesia untuk SKA dan sebagian izin.",
          "Sistem satu pintu INSW menyatukan pengecekan yang dulu tersebar di banyak instansi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Portal resmi untuk mengecek status Lartas ekspor adalah?",
            options: ["INSW (insw.go.id)", "Marketplace lokal", "Media sosial", "Bank devisa"],
            answer: 0,
            explain: "INSW adalah portal satu pintu untuk menelusuri aturan larangan dan pembatasan per komoditas.",
          },
          {
            q: "Apa arti status barang 'dibatasi'?",
            options: [
              "Tidak boleh diekspor sama sekali",
              "Boleh diekspor tanpa syarat",
              "Boleh diekspor asal izin atau syaratnya dipenuhi",
              "Hanya boleh dijual di dalam negeri",
            ],
            answer: 2,
            explain: "Barang dibatasi tetap bisa diekspor asalkan izin atau persyaratannya dilengkapi.",
          },
          {
            q: "Status Lartas suatu barang ditentukan berdasarkan?",
            options: ["Warna kemasan", "Kode HS komoditas", "Berat kiriman", "Nama eksportir"],
            answer: 1,
            explain: "Aturan larangan dan pembatasan melekat pada kode HS masing-masing komoditas.",
          },
          {
            q: "Produk kayu olahan umumnya berstatus?",
            options: ["Bebas tanpa syarat", "Dibatasi, butuh dokumen legalitas kayu", "Dilarang total", "Tidak diatur"],
            answer: 1,
            explain: "Produk kayu masuk kategori dibatasi karena butuh dokumen legalitas kayu dan V-Legal.",
          },
          {
            q: "Aturan asal barang (rules of origin) penting terutama untuk?",
            options: [
              "Menentukan warna label",
              "Mengakui asal Indonesia untuk SKA dan preferensi tarif",
              "Menentukan harga jual",
              "Menghitung ongkos kirim",
            ],
            answer: 1,
            explain: "Rules of origin menentukan apakah barang diakui berasal dari Indonesia, dasar SKA dan tarif preferensi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "peb-beacukai",
    levelId: "legalitas",
    order: 4,
    title: "PEB dan Alur Bea Cukai Ekspor",
    summary:
      "Mengisi dan mengajukan PEB lewat sistem CEISA milik DJBC, peran Bea Cukai, terbitnya NPE sebagai izin muat, kemungkinan pemeriksaan, dan peran PPJK atau forwarder bagi yang belum bisa mengurus sendiri.",
    durationMin: 15,
    tags: ["PEB", "NPE", "Bea Cukai"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebelum barangmu naik ke kapal, kamu harus memberi tahu Bea Cukai lewat dokumen <strong>PEB</strong> (Pemberitahuan Ekspor Barang). PEB diajukan secara elektronik lewat sistem <strong>CEISA</strong> milik DJBC (Direktorat Jenderal Bea dan Cukai). Setelah PEB disetujui, terbit <strong>NPE</strong> (Nota Pelayanan Ekspor) sebagai tanda barang boleh dimuat.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Container_cranes_in_Tokyo_Bay.jpg?width=500",
        alt: "Derek peti kemas raksasa di terminal pelabuhan",
        caption: "Setelah PEB disetujui dan NPE terbit, peti kemas boleh dimuat ke kapal.",
        credit: "Sumber: Wikimedia Commons, CC0",
      },
      {
        type: "paragraph",
        html: "Data di PEB harus cocok dengan invoice, packing list, dan dokumen lain. Bila kamu belum bisa mengurus sendiri, kamu bisa memakai jasa <strong>PPJK</strong> (Pengusaha Pengurusan Jasa Kepabeanan) atau forwarder yang akan mengisikan dan mengajukan PEB atas namamu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Alur inti PEB ke NPE",
        html: "Isi PEB di CEISA &rarr; kirim ke sistem DJBC &rarr; sistem memberi jalur (umumnya lancar untuk ekspor) &rarr; bila perlu, ada pemeriksaan dokumen atau fisik &rarr; PEB disetujui &rarr; <strong>NPE terbit</strong> &rarr; barang boleh dimuat ke kapal.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Barang ekspor bisa mendapat jalur pelayanan yang berbeda. Sebagian lolos cepat, sebagian diperiksa. Coba simulator jalur pabean di bawah untuk memahami apa yang memengaruhi barangmu diperiksa atau tidak.",
      },
      {
        type: "widget",
        widget: "SimulatorJalurPabean",
      },
      {
        type: "callout",
        tone: "info",
        title: "Peran PPJK atau forwarder",
        html: "Kalau kamu baru pertama ekspor dan belum punya akses atau waktu, <strong>PPJK</strong> atau <strong>forwarder</strong> bisa mengurus PEB, booking kapal, dan dokumen pengapalan. Kamu tetap bertanggung jawab atas kebenaran data, jadi pastikan kamu memberi informasi yang akurat.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan lama proses tiap tahap ekspor",
        unit: "hari",
        source: "Ilustrasi edukatif",
        note: "Pengajuan PEB sampai terbitnya NPE bisa cepat bila dokumen benar; jalur pemeriksaan fisik menambah waktu.",
        data: [
          { label: "Isi dan ajukan PEB", value: 1, color: "#3b82f6" },
          { label: "Terbit NPE (dokumen benar)", value: 1, color: "#10b981" },
          { label: "Tambahan bila diperiksa fisik", value: 2, color: "#f59e0b" },
        ],
      },
      {
        type: "stats",
        items: [
          { value: "4", label: "Dokumen inti ekspor", sub: "Invoice, Packing List, PEB, B/L", color: "#3b82f6" },
          { value: "8 digit", label: "Panjang kode HS (BTKI)", color: "#f59e0b" },
          { value: "1 hari", label: "Terbit NPE bila dokumen benar", sub: "pada jalur lancar", color: "#10b981" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sari kirim 500 kg kopi lewat forwarder",
        html: "Sari mengekspor 500 kg kopi senilai USD 3.000 ke Singapura. Karena baru pertama kali, ia memakai forwarder yang mengenakan biaya jasa Rp750.000 untuk mengurus PEB dan pengapalan. Forwarder mengisi PEB di CEISA, data cocok dengan invoice, dan barang mendapat jalur lancar. NPE terbit di hari yang sama dan kopi dimuat keesokan harinya. Biaya pengurusan Rp750.000 setara sekitar 1,7 persen dari nilai barang, sepadan dengan kemudahan yang Sari dapat.",
      },
      {
        type: "case",
        title: "Studi Kasus: Salah berat di PEB, Tono kena jalur merah",
        html: "Tono mengisi PEB sendiri untuk 300 kg kerajinan rotan. Ia mengetik berat bersih 300 kg di invoice, tetapi keliru menulis 30 kg di kolom PEB. Sistem DJBC menangkap kejanggalan antara berat dan jumlah koli, lalu barang diarahkan ke <strong>jalur merah</strong> untuk pemeriksaan fisik. Proses yang biasanya selesai satu hari jadi molor sekitar dua hari lebih dan Tono harus hadir saat pemeriksaan. Setelah data dikoreksi dan fisik cocok, NPE akhirnya terbit. Satu angka yang salah ketik cukup untuk menunda seluruh pengapalan.",
      },
      {
        type: "calcExercise",
        prompt: "Nilai barang Sari USD 3.000 dengan kurs Rp16.000 per USD. Biaya jasa forwarder Rp750.000. Berapa persen biaya forwarder terhadap nilai barang (dalam rupiah)? Bulatkan ke satu desimal.",
        answer: 1.6,
        suffix: "%",
        tolerance: 0.15,
        solution:
          "Nilai barang = USD 3.000 x Rp16.000 = Rp48.000.000. Persentase = Rp750.000 / Rp48.000.000 x 100 = 1,5625 persen, dibulatkan sekitar 1,6 persen.",
        hint: "Ubah dulu nilai barang ke rupiah, lalu bagi biaya forwarder dengan nilai itu dan kalikan 100.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap tahap dengan keluaran atau perannya.",
        pairs: [
          { left: "Isi PEB di CEISA", right: "Pemberitahuan ekspor ke Bea Cukai" },
          { left: "Persetujuan Bea Cukai", right: "Terbit NPE sebagai izin muat" },
          { left: "NPE", right: "Barang boleh dimuat ke kapal" },
          { left: "PPJK / forwarder", right: "Membantu mengurus PEB dan pengapalan" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Siapa yang menerbitkan atau menyiapkan hal berikut dalam alur PEB?",
        buckets: ["Eksportir / PPJK", "Bea Cukai (DJBC)"],
        items: [
          { text: "Mengisi dan mengajukan PEB", bucket: "Eksportir / PPJK" },
          { text: "Menyiapkan invoice dan packing list", bucket: "Eksportir / PPJK" },
          { text: "Menetapkan jalur pelayanan", bucket: "Bea Cukai (DJBC)" },
          { text: "Menerbitkan NPE", bucket: "Bea Cukai (DJBC)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "PEB adalah pemberitahuan ekspor yang diajukan elektronik lewat sistem CEISA milik DJBC.",
          "Setelah PEB disetujui, NPE terbit sebagai tanda barang boleh dimuat ke kapal.",
          "Ekspor umumnya mendapat jalur lancar, tetapi barang tertentu bisa diperiksa dokumen atau fisik.",
          "Data PEB harus konsisten dengan invoice, packing list, dan dokumen lain.",
          "PPJK atau forwarder bisa mengurus PEB dan pengapalan bagi eksportir yang belum bisa sendiri.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "PEB diajukan secara elektronik lewat sistem?",
            options: ["OSS", "CEISA milik DJBC", "INSW", "Marketplace"],
            answer: 1,
            explain: "PEB diajukan lewat sistem CEISA milik Direktorat Jenderal Bea dan Cukai.",
          },
          {
            q: "Apa fungsi NPE?",
            options: [
              "Tagihan ke buyer",
              "Tanda barang boleh dimuat ke kapal",
              "Bukti pembayaran pajak",
              "Sertifikat asal barang",
            ],
            answer: 1,
            explain: "NPE (Nota Pelayanan Ekspor) menandakan barang telah disetujui dan boleh dimuat.",
          },
          {
            q: "Siapa yang menerbitkan NPE?",
            options: ["Eksportir", "Bea Cukai (DJBC)", "Forwarder", "Buyer"],
            answer: 1,
            explain: "NPE diterbitkan oleh Bea Cukai setelah PEB disetujui.",
          },
          {
            q: "Bagi eksportir baru yang belum bisa mengurus sendiri, siapa yang bisa membantu PEB?",
            options: ["PPJK atau forwarder", "Buyer di luar negeri", "Bank", "Petani pemasok"],
            answer: 0,
            explain: "PPJK atau forwarder dapat mengurus PEB dan pengapalan atas nama eksportir.",
          },
          {
            q: "Mengapa data di PEB harus konsisten dengan dokumen lain?",
            options: [
              "Agar dokumen terlihat banyak",
              "Karena selisih data bisa memicu pemeriksaan atau penundaan",
              "Tidak ada alasan khusus",
              "Agar bea masuk buyer naik",
            ],
            answer: 1,
            explain: "Ketidaksesuaian data dapat memicu pemeriksaan lebih lanjut dan menunda penerbitan NPE.",
          },
        ],
      },
    ],
  },
];
