import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "incoterms",
    levelId: "logistik",
    order: 2,
    title: "Incoterms 2020 untuk Eksportir Pemula",
    summary:
      "Memahami Incoterms sebagai pembagi biaya dan risiko antara kamu dan buyer, memilih term yang aman untuk transaksi pertama, dan menghindari jebakan memakai FOB untuk kontainer.",
    durationMin: 14,
    tags: ["Incoterms", "FOB", "CIF", "risiko"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Incoterms</strong> (dari ICC, versi 2020) adalah aturan baku yang menjawab dua pertanyaan: sampai titik mana <strong>biaya</strong> ditanggung penjual, dan di titik mana <strong>risiko</strong> berpindah ke pembeli. Menyebut Incoterm yang salah bisa membuatmu menanggung biaya atau kerugian yang seharusnya bukan tanggunganmu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shipping_containers_stacked_Panama_City_panama.jpg?width=500",
        alt: "Tumpukan peti kemas di pelabuhan",
        caption: "Untuk barang dalam peti kemas, gunakan FCA, CPT, atau CIP, bukan FOB, CFR, atau CIF.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "video",
        comp: "IncotermsVideo",
        title: "Video: Titik Perpindahan Tanggung Jawab",
        caption: "Dari EXW ke DDP, siapa menanggung apa dan sampai di mana.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga term yang paling sering dipakai pemula",
        html: "<strong>FOB</strong> (Free On Board): kamu tanggung sampai barang di atas kapal. <strong>CFR</strong>: FOB plus ongkos angkut. <strong>CIF</strong>: CFR plus asuransi sampai pelabuhan tujuan. Untuk transaksi pertama, banyak eksportir nyaman di FOB karena tanggung jawabnya berhenti di pelabuhan asal.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Jangan pakai FOB untuk kontainer",
        html: "FOB, CFR, dan CIF dirancang untuk barang yang dimuat di atas kapal secara langsung. Untuk barang dalam <strong>kontainer</strong> (diserahkan di terminal, bukan di atas kapal), gunakan padanannya: <strong>FCA</strong>, <strong>CPT</strong>, dan <strong>CIP</strong>. Salah pakai bisa membuat titik perpindahan risiko tidak jelas saat terjadi klaim.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Biaya yang ditanggung penjual untuk satu pengapalan (ilustrasi)",
        unit: "Rp juta",
        source: "Ilustrasi edukatif",
        note: "Makin ke kanan, makin banyak biaya dan urusan yang kamu tanggung; harga jual pun naik seiring cakupan itu.",
        data: [
          { label: "EXW", value: 55, color: "#94a3b8" },
          { label: "FOB", value: 62, color: "#0ea5e9" },
          { label: "CFR", value: 68, color: "#6366f1" },
          { label: "CIF", value: 70, color: "#10b981" },
          { label: "DDP", value: 84, color: "#ef4444" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Pilih Incoterm dan lihat pergeseran titik biaya dan risiko antara penjual dan pembeli.",
      },
      { type: "widget", widget: "SimulatorIncoterms" },
      {
        type: "calcExercise",
        prompt:
          "Harga FOB satu pengapalan US$10.000. Ongkos angkut (freight) US$800 dan asuransi US$120. Berapa harga CIF?",
        answer: 10920,
        tolerance: 5,
        prefix: "US$",
        solution: "CIF = FOB + freight + asuransi = 10.000 + 800 + 120 = 10.920.",
        hint: "CIF adalah FOB ditambah ongkos angkut dan asuransi.",
      },
      {
        type: "case",
        title: "Studi Kasus: Salah term, untung tergerus",
        html: "Seorang eksportir menyepakati <strong>DDP</strong> (Delivered Duty Paid) untuk kiriman pertama ke Jerman karena buyer memintanya. Ia baru sadar DDP berarti dirinya menanggung juga bea masuk dan pengurusan pabean di Jerman, negara yang aturannya tidak ia kuasai. Biaya tak terduga menggerus margin hampir habis. Untuk pemula, term yang berhenti di pelabuhan asal (FOB/FCA) jauh lebih aman.",
      },
      {
        type: "case",
        title: "Sejarah: Peti kemas membuat FOB usang untuk kontainer",
        html: "Sebelum era peti kemas, barang benar-benar diangkat satu per satu melewati pagar kapal (<em>ship's rail</em>), sehingga FOB masuk akal. Setelah revolusi kontainer sejak akhir 1960-an, barang diserahkan di terminal jauh sebelum naik kapal. ICC lalu menegaskan istilah FCA/CPT/CIP untuk kontainer. Memakai FOB untuk kontainer adalah kebiasaan lama yang kini menimbulkan celah risiko.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap Incoterm dengan padanannya untuk kontainer.",
        pairs: [
          { left: "FOB (di atas kapal)", right: "FCA (untuk kontainer)" },
          { left: "CFR (di atas kapal)", right: "CPT (untuk kontainer)" },
          { left: "CIF (di atas kapal)", right: "CIP (untuk kontainer)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Incoterms menjawab: sampai mana biaya penjual, dan di mana risiko berpindah.",
          "FOB, CFR, CIF untuk barang di atas kapal; FCA, CPT, CIP untuk kontainer.",
          "Untuk transaksi pertama, term yang berhenti di pelabuhan asal (FOB/FCA) paling aman.",
          "DDP menuntut penjual mengurus bea dan pabean di negara buyer; berisiko bagi pemula.",
          "Salah memilih term bisa menggerus margin lewat biaya yang tak diperhitungkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Incoterms mengatur dua hal utama, yaitu?",
            options: [
              "Warna dan ukuran barang",
              "Pembagian biaya dan titik perpindahan risiko",
              "Pajak dan bunga bank",
              "Bahasa kontrak dan mata uang",
            ],
            answer: 1,
            explain: "Incoterms menetapkan sampai mana biaya ditanggung penjual dan di titik mana risiko berpindah ke pembeli.",
          },
          {
            q: "Untuk barang dalam kontainer, sebaiknya memakai?",
            options: ["FOB", "CFR", "FCA/CPT/CIP", "CIF"],
            answer: 2,
            explain: "FCA, CPT, dan CIP dirancang untuk kontainer yang diserahkan di terminal, bukan di atas kapal.",
          },
          {
            q: "Term mana yang umumnya paling aman untuk transaksi pertama?",
            options: ["DDP", "FOB / FCA", "DAP", "DPU"],
            answer: 1,
            explain: "FOB atau FCA membuat tanggung jawab penjual berhenti di pelabuhan asal, lebih mudah dikendalikan pemula.",
          },
          {
            q: "Apa risiko menyepakati DDP bagi eksportir pemula?",
            options: [
              "Tidak dapat bayaran",
              "Menanggung bea masuk dan pengurusan pabean di negara buyer",
              "Barang jadi lebih ringan",
              "Tidak boleh pakai asuransi",
            ],
            answer: 1,
            explain: "DDP menuntut penjual mengurus dan membayar sampai barang tiba di tempat buyer, termasuk bea masuk di negaranya.",
          },
          {
            q: "CIF berbeda dari CFR karena CIF juga mencakup?",
            options: ["Bea masuk", "Asuransi", "Pajak penjualan", "Biaya bank"],
            answer: 1,
            explain: "CIF adalah CFR ditambah asuransi pengangkutan sampai pelabuhan tujuan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pembayaran-internasional",
    levelId: "logistik",
    order: 1,
    title: "Metode Pembayaran Internasional yang Aman",
    summary:
      "Mengenal Advance Payment/TT, Letter of Credit, Documentary Collection, dan Open Account, memahami tarik-menarik risiko antara eksportir dan importir, serta memilih metode yang aman untuk transaksi pertama dengan buyer baru.",
    durationMin: 15,
    tags: ["pembayaran", "LC", "risiko"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebagai eksportir non-produsen dengan modal terbatas, urusan <strong>pembayaran</strong> adalah hidup dan matimu. Kamu sudah membayar produsen lokal untuk membeli barang, lalu mengapalkannya ke buyer di seberang lautan. Kalau buyer tidak membayar, kerugianmu nyata. Karena itu, memilih metode pembayaran yang tepat sama pentingnya dengan memilih barang yang tepat.",
      },
      {
        type: "paragraph",
        html: "Ada empat metode utama, dan masing-masing menggeser risiko antara kamu (penjual) dan buyer (pembeli). Tidak ada yang adil untuk kedua pihak sekaligus. Yang paling aman untukmu justru paling berat untuk buyer, begitu pula sebaliknya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat metode dari paling aman ke paling berisiko bagimu",
        html: "<strong>Advance Payment (TT di muka)</strong>: buyer bayar dulu, baru barang dikirim. Paling aman untukmu. <strong>Letter of Credit (LC)</strong>: bank buyer menjamin pembayaran asal dokumen sesuai syarat. Aman dan disukai untuk nilai besar. <strong>Documentary Collection</strong>: bank menjadi perantara dokumen, tetapi tidak menjamin pembayaran. <strong>Open Account</strong>: barang dikirim dulu, buyer bayar belakangan. Paling berisiko untukmu.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Open Account untuk buyer baru itu bahaya",
        html: "Open Account cocok hanya jika kamu sudah kenal dan percaya buyer dari transaksi berulang. Untuk buyer baru yang belum pernah bertransaksi denganmu, jangan pernah kirim barang dulu tanpa jaminan. Kalau buyer menghilang setelah barang tiba, kamu nyaris tidak punya alat penekan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tingkat risiko bagi eksportir per metode pembayaran (ilustrasi)",
        unit: "skor risiko (0 rendah, 100 tinggi)",
        source: "Ilustrasi edukatif",
        note: "Makin ke kanan, makin besar risiko tidak dibayar yang kamu tanggung sebagai penjual.",
        data: [
          { label: "Advance/TT", value: 8, color: "#10b981" },
          { label: "LC", value: 22, color: "#0ea5e9" },
          { label: "Documentary Collection", value: 55, color: "#f59e0b" },
          { label: "Open Account", value: 90, color: "#ef4444" },
        ],
      },
      {
        type: "stats",
        items: [
          { value: "4", label: "Metode pembayaran utama", sub: "Advance, LC, Collection, Open Account" },
          { value: "~0,75%", label: "Perkiraan biaya LC", sub: "dari nilai transaksi", color: "#0ea5e9" },
          { value: "Hampir 0", label: "Risiko gagal bayar (Advance)", sub: "buyer membayar di muka", color: "#10b981" },
          { value: "Tertinggi", label: "Risiko (Open Account)", sub: "barang dikirim dulu, bayar belakangan", color: "#ef4444" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan bagaimana tiap metode membagi risiko antara kamu dan buyer, lalu lihat mana yang cocok untuk transaksi pertama.",
      },
      { type: "widget", widget: "SimulatorPembayaranEkspor" },
      {
        type: "case",
        title: "Studi Kasus: Aman dengan LC untuk order pertama",
        html: "Seorang eksportir kopi menerima order pertama US$20.000 dari buyer baru di Korea. Ia tidak berani Open Account, dan buyer enggan bayar 100% di muka. Solusinya <strong>LC</strong>: bank buyer menerbitkan LC, eksportir mengapalkan barang, lalu menyerahkan dokumen (B/L, invoice, packing list) yang sesuai syarat LC ke bank. Bank membayar US$20.000 asal dokumen cocok. Risiko gagal bayar berpindah dari buyer ke bank penerbit. Biaya LC sekitar 0,75% (US$150) sepadan dengan rasa aman untuk transaksi perdana.",
      },
      {
        type: "case",
        title: "Studi Kasus: Kompromi 30% di muka untuk order kedua",
        html: "Buyer yang sama kembali order US$15.000. Kali ini keduanya sudah sedikit saling percaya, tetapi belum cukup untuk Open Account. Mereka sepakat <strong>30% advance TT</strong> plus 70% saat dokumen dikirim. Eksportir menerima 0,30 x 15.000 = US$4.500 di muka untuk membeli barang dari produsen, lalu mengapalkan, dan menerima sisa US$10.500 saat menyerahkan dokumen. Uang muka menutup modal pembelian barang, sehingga eksportir tidak perlu menalangi dari kantong sendiri, dan risiko sisa pembayaran pun lebih kecil dibanding Open Account penuh.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap metode pembayaran dengan cirinya.",
        pairs: [
          { left: "Advance Payment / TT", right: "Buyer membayar sebelum barang dikirim" },
          { left: "Letter of Credit", right: "Bank menjamin pembayaran bila dokumen sesuai syarat" },
          { left: "Documentary Collection", right: "Bank menjadi perantara dokumen tanpa menjamin bayar" },
          { left: "Open Account", right: "Barang dikirim dulu, buyer bayar belakangan" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk order US$20.000, buyer setuju bayar 30% di muka (advance TT) dan sisanya lewat LC. Berapa dolar yang kamu terima di muka sebelum barang dikirim?",
        answer: 6000,
        tolerance: 1,
        prefix: "US$",
        solution: "Uang muka = 30% x 20.000 = 0,30 x 20.000 = 6.000. Sisa 14.000 lewat LC.",
        hint: "Kalikan nilai order dengan persen uang muka.",
      },
      {
        type: "takeaways",
        items: [
          "Empat metode utama: Advance/TT, Letter of Credit, Documentary Collection, Open Account.",
          "Advance dan LC paling aman bagi eksportir; Open Account paling berisiko.",
          "Untuk buyer baru, hindari Open Account; pilih Advance atau LC.",
          "LC memindahkan risiko gagal bayar dari buyer ke bank penerbit, asal dokumen sesuai syarat.",
          "Kombinasi seperti sebagian di muka plus LC bisa menyeimbangkan kepentingan kedua pihak.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Metode pembayaran mana yang paling aman bagi eksportir?",
            options: ["Open Account", "Documentary Collection", "Advance Payment / TT di muka", "Konsinyasi"],
            answer: 2,
            explain: "Advance Payment berarti buyer membayar sebelum barang dikirim, sehingga risiko tidak dibayar hampir nol bagi eksportir.",
          },
          {
            q: "Pada Letter of Credit, siapa yang menjamin pembayaran ke eksportir?",
            options: ["Buyer secara pribadi", "Bank penerbit LC", "Perusahaan asuransi", "Freight forwarder"],
            answer: 1,
            explain: "Bank penerbit LC membayar eksportir asalkan dokumen yang diserahkan sesuai syarat LC.",
          },
          {
            q: "Mengapa Open Account berisiko untuk transaksi pertama dengan buyer baru?",
            options: [
              "Karena bea masuk jadi lebih mahal",
              "Karena barang dikirim dulu dan buyer bayar belakangan tanpa jaminan",
              "Karena wajib pakai asuransi",
              "Karena dokumen tidak diperlukan",
            ],
            answer: 1,
            explain: "Open Account mengirim barang lebih dulu; jika buyer baru tidak membayar, eksportir hampir tidak punya jaminan.",
          },
          {
            q: "Apa peran bank dalam Documentary Collection?",
            options: [
              "Menjamin pembayaran penuh",
              "Menjadi perantara penyerahan dokumen tanpa menjamin pembayaran",
              "Membeli barang dari eksportir",
              "Menanggung asuransi kargo",
            ],
            answer: 1,
            explain: "Pada Documentary Collection bank hanya meneruskan dokumen sesuai instruksi, tetapi tidak menjamin buyer akan membayar.",
          },
          {
            q: "Kombinasi pembayaran yang menyeimbangkan kepentingan penjual dan pembeli adalah?",
            options: [
              "100% Open Account",
              "Sebagian uang muka ditambah LC untuk sisanya",
              "Tanpa dokumen apa pun",
              "Konsinyasi penuh",
            ],
            answer: 1,
            explain: "Uang muka memberi jaminan awal bagi eksportir, sedangkan LC mengamankan sisa pembayaran, sehingga kedua pihak lebih tenang.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "logistik-pengapalan",
    levelId: "logistik",
    order: 3,
    title: "Logistik dan Pengapalan",
    summary:
      "Memilih antara FCL dan LCL, bekerja dengan freight forwarder alih-alih memiliki armada sendiri, mengemas barang untuk ekspor, membaca jadwal kapal dan dokumen angkut, serta menghindari denda demurrage dan detention.",
    durationMin: 15,
    tags: ["logistik", "FCL", "LCL", "forwarder"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu tidak perlu punya truk, gudang, apalagi kapal untuk mengekspor. Sebagai eksportir non-produsen bermodal kecil, senjatamu adalah <strong>freight forwarder</strong>: perusahaan jasa yang mengatur pengangkutan barangmu dari gudang produsen sampai naik kapal, lengkap dengan dokumen dan koordinasi pelabuhan. Kamu fokus pada barang dan buyer; forwarder mengurus logistiknya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ocean-going_cargo_ships_and_trucks_at_Newport.jpg?width=500",
        alt: "Kapal barang dan truk di pelabuhan",
        caption: "Rantai logistik ekspor menyambungkan truk, pelabuhan, dan kapal. Eksportir kecil mengandalkan freight forwarder.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "video",
        comp: "LogistikKontainerVideo",
        title: "Video: Perjalanan Satu Kontainer",
        caption: "Dari gudang, ke depo, masuk terminal, sampai naik kapal.",
      },
      {
        type: "callout",
        tone: "key",
        title: "FCL vs LCL: penuhi kontainer atau titip bareng",
        html: "<strong>FCL (Full Container Load)</strong>: kamu menyewa satu kontainer penuh, cocok bila barangmu banyak. <strong>LCL (Less than Container Load)</strong>: barangmu digabung dengan milik eksportir lain dalam satu kontainer, dan kamu bayar per CBM (meter kubik). Untuk volume kecil, LCL biasanya lebih murah karena kamu tidak membayar ruang kosong.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Packing ekspor bukan sekadar dus biasa",
        html: "Barang menempuh ribuan kilometer, bongkar muat berkali-kali, dan kelembapan laut. Gunakan karton bermutu, palet kayu ber-<strong>fumigasi</strong> (standar ISPM 15), dan penandaan (marking) yang jelas. Kemasan buruk memicu klaim kerusakan dan asuransi bisa menolak bayar.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Total biaya pengapalan: FCL vs LCL pada volume berbeda (ilustrasi)",
        unit: "US$",
        source: "Ilustrasi edukatif",
        note: "Asumsi FCL 20ft flat US$1.500 dan LCL US$95/CBM. Pada volume kecil LCL menang; pada volume besar FCL menang. Titik impasnya sekitar 16 CBM.",
        data: [
          { label: "5 CBM (LCL)", value: 475, color: "#10b981" },
          { label: "5 CBM (FCL)", value: 1500, color: "#94a3b8" },
          { label: "20 CBM (LCL)", value: 1900, color: "#ef4444" },
          { label: "20 CBM (FCL)", value: 1500, color: "#0ea5e9" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Masukkan volume barangmu dan lihat kapan LCL lebih hemat dan kapan sebaiknya beralih ke FCL.",
      },
      { type: "widget", widget: "SimulatorFCLvsLCL" },
      {
        type: "callout",
        tone: "warn",
        title: "Awas demurrage dan detention",
        html: "<strong>Demurrage</strong> adalah denda karena kontainer terlalu lama menganggur di terminal melewati masa bebas (free time). <strong>Detention</strong> adalah denda karena kontainer terlambat dikembalikan ke depo. Keduanya dihitung per hari dan bisa menggerus untung. Urus dokumen dan pengambilan barang tepat waktu.",
      },
      {
        type: "case",
        title: "Studi Kasus: 10 CBM lewat forwarder dan LCL",
        html: "Seorang eksportir kerajinan rotan punya kiriman 10 CBM ke Belanda. Ia tidak memiliki logistik sendiri, jadi menyerahkan semuanya ke freight forwarder. Dengan LCL seharga US$95/CBM, biaya angkut lautnya 10 x 95 = US$950, jauh lebih murah daripada menyewa satu kontainer FCL penuh US$1.500 yang setengahnya kosong. Forwarder juga mengurus B/L, booking kapal, dan koordinasi depo. Eksportir cukup menyiapkan barang dan dokumen.",
      },
      {
        type: "case",
        title: "Studi Kasus: Order membesar, saatnya pindah ke FCL",
        html: "Order rotan berkembang menjadi 22 CBM per pengapalan. Jika tetap LCL US$95/CBM, biayanya 22 x 95 = US$2.090. Padahal satu kontainer 20ft FCL cukup memuat volume itu seharga US$1.500 flat. Dengan beralih ke FCL, eksportir hemat 2.090 - 1.500 = US$590 per pengapalan, sekaligus mengurangi risiko barang tercampur atau rusak karena bongkar muat konsolidasi LCL. Inilah tanda volume sudah melewati titik impas sekitar 16 CBM.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kontainermu punya masa bebas (free time) 5 hari di terminal, tetapi baru diambil pada hari ke-9. Tarif demurrage US$75 per hari. Berapa total denda demurrage?",
        answer: 300,
        tolerance: 1,
        prefix: "US$",
        solution: "Hari lewat = 9 - 5 = 4 hari. Demurrage = 4 x 75 = 300.",
        hint: "Hitung dulu jumlah hari melewati masa bebas, lalu kalikan dengan tarif harian.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap situasi ke pilihan pengapalan yang paling tepat.",
        buckets: ["Cocok LCL", "Cocok FCL"],
        items: [
          { text: "Kiriman contoh 3 CBM ke buyer baru", bucket: "Cocok LCL" },
          { text: "Order rutin 28 CBM tiap bulan", bucket: "Cocok FCL" },
          { text: "Volume kecil 6 CBM sekali kirim", bucket: "Cocok LCL" },
          { text: "Barang memenuhi satu kontainer penuh", bucket: "Cocok FCL" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Eksportir kecil memakai freight forwarder, bukan memiliki armada sendiri.",
          "FCL untuk volume besar; LCL (bayar per CBM) untuk volume kecil.",
          "Titik impas FCL vs LCL bergantung tarif; hitung dulu sebelum memilih.",
          "Packing ekspor standar (karton kuat, palet fumigasi ISPM 15, marking jelas) mencegah klaim.",
          "Demurrage dan detention adalah denda per hari; urus dokumen dan barang tepat waktu.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa eksportir kecil sebaiknya memakai freight forwarder?",
            options: [
              "Karena wajib menurut hukum",
              "Karena mengurus logistik, dokumen, dan pelabuhan tanpa perlu memiliki armada",
              "Karena forwarder membeli barang darinya",
              "Karena forwarder menjamin pembayaran buyer",
            ],
            answer: 1,
            explain: "Forwarder mengatur pengangkutan dan dokumen, sehingga eksportir kecil tidak perlu punya truk, gudang, atau kapal sendiri.",
          },
          {
            q: "Untuk volume barang yang kecil, biasanya lebih hemat memakai?",
            options: ["FCL", "LCL", "Charter kapal", "Kargo udara"],
            answer: 1,
            explain: "LCL menggabungkan barangmu dengan milik eksportir lain dan dihitung per CBM, sehingga kamu tidak membayar ruang kontainer yang kosong.",
          },
          {
            q: "Apa itu demurrage?",
            options: [
              "Denda karena kontainer terlalu lama di terminal melewati masa bebas",
              "Biaya asuransi kargo",
              "Ongkos angkut laut",
              "Pajak ekspor",
            ],
            answer: 0,
            explain: "Demurrage adalah denda harian karena kontainer menganggur di terminal melebihi free time yang diberikan.",
          },
          {
            q: "Palet kayu untuk ekspor perlu memenuhi standar apa?",
            options: ["ISO 9001", "ISPM 15 (fumigasi)", "SNI listrik", "HACCP"],
            answer: 1,
            explain: "ISPM 15 mengatur perlakuan (fumigasi) palet kayu agar bebas hama dan diterima di negara tujuan.",
          },
          {
            q: "FCL lebih menguntungkan dibanding LCL ketika?",
            options: [
              "Volume barang sangat kecil",
              "Barang mendekati atau memenuhi satu kontainer penuh",
              "Hanya mengirim contoh",
              "Tidak ada dokumen",
            ],
            answer: 1,
            explain: "Karena FCL berbiaya relatif tetap, ia jadi lebih murah per unit saat kontainer terisi penuh dibanding membayar LCL per CBM dalam volume besar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "asuransi-risiko",
    levelId: "logistik",
    order: 4,
    title: "Asuransi Kargo dan Mengelola Risiko",
    summary:
      "Memahami marine cargo insurance dan apa yang ditanggungnya, kaitannya dengan Incoterm (CIF/CIP mewajibkan asuransi), cara mengelola risiko gagal bayar dan kerusakan, serta langkah mengajukan klaim.",
    durationMin: 14,
    tags: ["asuransi", "marine cargo", "risiko"],
    blocks: [
      {
        type: "paragraph",
        html: "Barangmu berlayar berminggu-minggu melewati laut lepas. Kapal bisa dihantam badai, kontainer bisa jatuh ke laut, muatan bisa rusak saat bongkar muat. <strong>Marine cargo insurance</strong> (asuransi pengangkutan barang) melindungi nilai barangmu selama perjalanan, sehingga satu kecelakaan tidak menghapus seluruh modalmu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/VOC-ships_Middelburg%2C_Hollandia_and_Gouda_in_a_tropical_cyclone.jpg?width=500",
        alt: "Lukisan kapal-kapal VOC dihantam badai tropis",
        caption: "Laut penuh risiko. Asuransi kargo melindungi barang dari badai, kerusakan, dan kehilangan.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "video",
        comp: "MarineInsuranceVideo",
        title: "Video: Cara Kerja Asuransi Kargo Laut",
        caption: "Dari premi kecil menjadi perlindungan atas seluruh nilai barang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "CIF dan CIP mewajibkan asuransi",
        html: "Ingat dari pelajaran Incoterms: pada <strong>CIF</strong> dan <strong>CIP</strong>, penjual wajib membeli asuransi atas nama pembeli sampai pelabuhan atau titik tujuan. Pada FOB atau CFR, asuransi bukan kewajibanmu, tetapi tetap bijak diamankan pihak yang menanggung risiko selama pelayaran.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Nilai pertanggungan lazimnya CIF plus 10%",
        html: "Praktik umum menanggung barang sebesar nilai <strong>CIF ditambah 10%</strong>. Markup 10% ini menutup keuntungan yang diharapkan dan biaya tambahan bila terjadi klaim, sehingga pembeli tidak sekadar balik modal tetapi juga tidak rugi ongkos.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba kalkulatornya",
        html: "Masukkan nilai barang dan tarif premi untuk melihat berapa premi yang perlu kamu bayar dan berapa nilai yang dilindungi.",
      },
      { type: "widget", widget: "KalkulatorAsuransiKargo" },
      {
        type: "chart",
        variant: "bar",
        title: "Premi kecil melindungi nilai barang yang besar (ilustrasi)",
        unit: "US$",
        source: "Ilustrasi edukatif",
        note: "Asumsi nilai pertanggungan US$22.000 dan tarif premi 0,4%. Premi hanya sekitar 0,4% dari nilai yang dilindungi.",
        data: [
          { label: "Nilai pertanggungan", value: 22000, color: "#0ea5e9" },
          { label: "Premi asuransi", value: 88, color: "#ef4444" },
        ],
      },
      {
        type: "stats",
        items: [
          { value: "CIF +10%", label: "Nilai pertanggungan lazim", sub: "menutup untung dan ongkos" },
          { value: "~0,3-0,5%", label: "Kisaran tarif premi", sub: "dari nilai pertanggungan (perkiraan)", color: "#0ea5e9" },
          { value: "1688", label: "Lloyd's of London berakar", sub: "dari kedai kopi Edward Lloyd" },
          { value: "4 berkas", label: "Dokumen inti klaim", sub: "polis, B/L, survey report, foto", color: "#10b981" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Klaim menyelamatkan modal",
        html: "Seorang eksportir mengirim furnitur senilai CIF US$20.000. Ia mengasuransikan pada nilai CIF plus 10% = US$22.000 dengan premi 0,4% = US$88. Di tengah pelayaran, sebagian muatan rusak parah karena air laut masuk kontainer yang penyok. Dengan dokumen lengkap (polis, B/L, survey report, foto kerusakan), klaimnya cair sesuai kerusakan. Tanpa premi US$88, kerugian belasan ribu dolar akan ia tanggung sendiri.",
      },
      {
        type: "case",
        title: "Studi Kasus: Total loss, seluruh nilai kembali",
        html: "Eksportir lain mengapalkan barang senilai CIF US$30.000 dan menanggungnya pada CIF plus 10% = US$33.000 dengan premi 0,4% = US$132. Naas, kapal karam dan seluruh muatan tenggelam (total loss). Karena karam termasuk risiko yang ditanggung, asuransi membayar penuh US$33.000, menutup nilai barang plus markup 10% untuk keuntungan dan ongkos yang hilang. Bandingkan: premi US$132 melindungi modal US$33.000, rasio yang sangat layak untuk laut yang tak bisa ditebak.",
      },
      {
        type: "case",
        title: "Sejarah: Lloyd's of London, lahir dari kedai kopi 1688",
        html: "Asuransi maritim modern berakar pada <strong>kedai kopi milik Edward Lloyd</strong> di London sekitar tahun <strong>1688</strong>. Di sana para pedagang, kapten kapal, dan pemodal berkumpul bertukar kabar pelayaran, lalu mulai saling menanggung risiko kapal dan muatan. Kebiasaan itu tumbuh menjadi <strong>Lloyd's of London</strong>, pusat asuransi yang masih beroperasi hingga kini. Prinsipnya tetap sama seperti yang kamu pakai hari ini: banyak pihak menanggung sedikit risiko agar satu musibah tidak menghancurkan siapa pun.",
      },
      {
        type: "calcExercise",
        prompt:
          "Nilai barang CIF US$20.000. Asuransi ditanggung pada CIF plus markup 10%, dengan tarif premi 0,4%. Berapa premi yang harus dibayar?",
        answer: 88,
        tolerance: 1,
        prefix: "US$",
        solution: "Nilai pertanggungan = 20.000 x 1,10 = 22.000. Premi = 0,4% x 22.000 = 0,004 x 22.000 = 88.",
        hint: "Tambahkan dulu markup 10% ke nilai CIF, baru kalikan tarif premi.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap kejadian: umumnya ditanggung atau umumnya tidak ditanggung marine cargo insurance.",
        buckets: ["Umumnya ditanggung", "Umumnya tidak ditanggung"],
        items: [
          { text: "Barang rusak karena kapal karam", bucket: "Umumnya ditanggung" },
          { text: "Muatan hangus akibat kebakaran di kapal", bucket: "Umumnya ditanggung" },
          { text: "Kerusakan karena pengemasan yang buruk", bucket: "Umumnya tidak ditanggung" },
          { text: "Kerugian akibat keterlambatan pengiriman", bucket: "Umumnya tidak ditanggung" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Marine cargo insurance melindungi nilai barang selama pelayaran yang penuh risiko.",
          "CIF dan CIP mewajibkan penjual membeli asuransi untuk pembeli; FOB/CFR tidak.",
          "Nilai pertanggungan lazimnya CIF plus 10% agar pembeli tidak rugi bila terjadi klaim.",
          "Premi hanya persentase kecil dari nilai barang, tetapi menyelamatkan modal saat musibah.",
          "Klaim butuh dokumen lengkap: polis, B/L, survey report, dan bukti kerusakan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Incoterm mana yang mewajibkan penjual membeli asuransi?",
            options: ["FOB", "CFR", "CIF dan CIP", "EXW"],
            answer: 2,
            explain: "Pada CIF dan CIP, penjual wajib mengasuransikan barang atas nama pembeli sampai titik tujuan.",
          },
          {
            q: "Nilai pertanggungan asuransi kargo lazimnya sebesar?",
            options: ["Nilai FOB dikurangi 10%", "Nilai CIF ditambah 10%", "Setengah nilai barang", "Nilai bea masuk"],
            answer: 1,
            explain: "Praktik umum menanggung CIF plus 10% untuk menutup keuntungan yang diharapkan dan biaya tambahan saat klaim.",
          },
          {
            q: "Manakah yang umumnya TIDAK ditanggung marine cargo insurance?",
            options: [
              "Kapal karam",
              "Kebakaran di kapal",
              "Kerusakan akibat pengemasan yang buruk",
              "Kontainer jatuh ke laut",
            ],
            answer: 2,
            explain: "Kerusakan karena packing yang buruk umumnya dikecualikan, karena itu tanggung jawab pengirim menyiapkan kemasan yang layak.",
          },
          {
            q: "Untuk barang CIF US$20.000 dengan tarif premi 0,4% pada nilai CIF plus 10%, preminya adalah?",
            options: ["US$80", "US$88", "US$220", "US$800"],
            answer: 1,
            explain: "Nilai pertanggungan 22.000; premi = 0,4% x 22.000 = 88.",
          },
          {
            q: "Dokumen yang biasanya diperlukan untuk mengajukan klaim asuransi kargo adalah?",
            options: [
              "Hanya kartu nama buyer",
              "Polis, B/L, survey report, dan bukti kerusakan",
              "Hanya foto barang utuh",
              "Tidak perlu dokumen",
            ],
            answer: 1,
            explain: "Klaim yang sah butuh polis asuransi, bill of lading, laporan survei kerusakan, dan bukti pendukung seperti foto.",
          },
        ],
      },
    ],
  },
];
