import type { Lesson } from "../../../types";

export const level10: Lesson[] = [
  // ============================================================
  {
    id: "risiko-resiliensi-rantai-pasok",
    levelId: "risiko",
    order: 1,
    title: "Risiko & Resiliensi Rantai Pasok",
    summary:
      "Rantai pasok yang paling efisien belum tentu paling tangguh. Pelajari cara memetakan risiko dan membangun resiliensi agar pulih cepat saat guncangan datang.",
    durationMin: 15,
    tags: ["risiko", "resiliensi", "kontinuitas"],
    blocks: [
      {
        type: "paragraph",
        html: "Selama puluhan tahun, perusahaan mengejar rantai pasok yang seramping mungkin: persediaan minimum, pemasok tunggal termurah, gudang seefisien mungkin. Lalu serangkaian guncangan global menyadarkan semua orang bahwa rantai yang terlalu kencang juga <strong>rapuh</strong>. <strong>Manajemen risiko rantai pasok</strong> berusaha menyeimbangkan efisiensi dengan ketahanan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Suez_Canal_traffic_jam_seen_from_space.jpg?width=400",
        alt: "Antrean kapal kontainer di Terusan Suez terlihat dari luar angkasa",
        caption: "Satu titik tunggal yang macet di Terusan Suez membuat ratusan kapal antre dan melumpuhkan rantai pasok dunia, contoh nyata mengapa efisiensi saja tidak cukup.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Memetakan risiko: kemungkinan x dampak",
        html: "Tiap risiko dinilai dari dua sisi: seberapa <strong>mungkin</strong> terjadi dan seberapa besar <strong>dampaknya</strong>. Perkaliannya memberi skor yang memetakan risiko ke zona hijau (terima), kuning (pantau), atau merah (mitigasi segera). Fokuskan tenaga pada zona merah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Pilih sebuah risiko, atur kemungkinan dan dampaknya, lalu lihat di zona mana ia jatuh dan tindakan apa yang sesuai.",
      },
      { type: "widget", widget: "SimulatorRiskMatrix" },
      {
        type: "video",
        comp: "ResilienceVideo",
        title: "Resiliensi Rantai Pasok",
        caption: "Saat guncangan datang, rantai yang tangguh turun sebentar lalu pulih jauh lebih cepat daripada yang rapuh.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Strategi Membangun Resiliensi (ilustrasi pengurangan risiko)",
        unit: "indeks pengurangan dampak",
        source: "ilustrasi edukatif pola yang umum dianjurkan",
        note: "Diversifikasi pemasok dan stok pengaman strategis adalah dua tameng paling umum melawan gangguan.",
        data: [
          { label: "Pemasok ganda", value: 38, color: "#34d399" },
          { label: "Stok pengaman", value: 30, color: "#60a5fa" },
          { label: "Sumber lokal", value: 20, color: "#fbbf24" },
          { label: "Visibilitas data", value: 12, color: "#a78bfa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bahaya pemasok tunggal",
        html: "Sebuah pabrik memakai satu pemasok untuk komponen kunci karena harganya paling murah. Suatu hari pemasok itu terkena banjir dan berhenti berproduksi selama berminggu-minggu. Karena tak ada cadangan, seluruh lini pabrik ikut berhenti. Kerugian dari produksi yang mandek jauh melampaui penghematan harga selama bertahun-tahun. Pelajarannya: <strong>pemasok tunggal</strong> adalah risiko berdampak tinggi yang sering tersembunyi di balik harga termurah. Diversifikasi sumber adalah premi asuransi yang murah.",
      },
      {
        type: "case",
        title: "Sejarah: Kapal Ever Given menyumbat Terusan Suez (2021)",
        html: "Pada <strong>Maret 2021</strong>, kapal kontainer raksasa <strong>Ever Given</strong> kandas melintang dan menyumbat <strong>Terusan Suez</strong> selama enam hari. Terusan ini dilewati sekitar 12% perdagangan dunia. Ratusan kapal antre, dan kerugian perdagangan global ditaksir miliaran dolar AS per hari. Satu titik tunggal yang macet melumpuhkan rantai pasok seluruh dunia. Peristiwa ini, bersama gangguan COVID-19 dan krisis cip semikonduktor, memaksa banyak perusahaan beralih dari sekadar efisien menjadi juga tangguh.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah risiko punya kemungkinan 4 (dari 5) dan dampak 3 (dari 5). Berapa skor risikonya?",
        answer: 12,
        tolerance: 0,
        solution:
          "Skor = kemungkinan x dampak = 4 x 3 = <strong>12</strong>. Skor 8 sampai 14 biasanya masuk zona kuning: perlu dipantau dan disiapkan rencana cadangan.",
        hint: "Kalikan nilai kemungkinan dengan nilai dampak.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap tindakan: membuat rantai lebih EFISIEN atau lebih TANGGUH?",
        buckets: ["Efisien", "Tangguh"],
        items: [
          { text: "Memakai satu pemasok termurah saja", bucket: "Efisien" },
          { text: "Menyiapkan pemasok cadangan di wilayah berbeda", bucket: "Tangguh" },
          { text: "Memangkas persediaan sampai nyaris nol", bucket: "Efisien" },
          { text: "Menyimpan stok pengaman untuk komponen kritis", bucket: "Tangguh" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Rantai pasok yang paling efisien belum tentu paling tangguh terhadap guncangan.",
          "Risiko dipetakan dari kemungkinan x dampak ke zona hijau, kuning, dan merah.",
          "Pemasok tunggal adalah risiko berdampak tinggi yang tersembunyi di balik harga murah.",
          "Resiliensi dibangun lewat pemasok ganda, stok pengaman, sumber lokal, dan visibilitas data.",
          "Ever Given (2021) menunjukkan satu titik macet bisa melumpuhkan perdagangan dunia.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa rantai pasok yang sangat efisien bisa berbahaya?",
            options: [
              "Karena terlalu mahal",
              "Karena bisa terlalu rapuh saat terjadi guncangan",
              "Karena terlalu lambat",
              "Karena butuh banyak pekerja",
            ],
            answer: 1,
            explain: "Efisiensi ekstrem (stok minim, pemasok tunggal) menghapus bantalan saat krisis.",
          },
          {
            q: "Bagaimana skor risiko biasa dihitung?",
            options: [
              "Kemungkinan + dampak",
              "Kemungkinan x dampak",
              "Kemungkinan - dampak",
              "Dampak dibagi kemungkinan",
            ],
            answer: 1,
            explain: "Skor risiko = kemungkinan dikali dampak, lalu dipetakan ke zona warna.",
          },
          {
            q: "Apa risiko utama memakai pemasok tunggal?",
            options: [
              "Harga selalu naik",
              "Bila pemasok itu berhenti, seluruh produksi bisa ikut berhenti",
              "Kualitas pasti buruk",
              "Tidak ada risiko sama sekali",
            ],
            answer: 1,
            explain: "Tanpa cadangan, gangguan pada satu pemasok melumpuhkan seluruh lini.",
          },
          {
            q: "Apa pelajaran dari insiden Ever Given (2021)?",
            options: [
              "Kapal besar selalu lebih baik",
              "Satu titik tunggal yang macet bisa melumpuhkan perdagangan dunia",
              "Terusan Suez tidak penting",
              "Rantai pasok kebal gangguan",
            ],
            answer: 1,
            explain: "Penyumbatan Suez enam hari menghentikan sekitar 12% perdagangan dunia.",
          },
          {
            q: "Risiko dengan kemungkinan 4 dan dampak 3 punya skor?",
            options: ["7", "12", "1", "43"],
            answer: 1,
            explain: "4 x 3 = 12, umumnya masuk zona kuning yang perlu dipantau.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "business-continuity-rencana-kontinjensi",
    levelId: "risiko",
    order: 2,
    title: "Business Continuity & Rencana Kontinjensi",
    summary:
      "Saat gangguan benar-benar terjadi, yang membedakan perusahaan tangguh dari yang runtuh adalah rencana kontinjensi yang sudah disiapkan jauh sebelum krisis.",
    durationMin: 15,
    tags: ["risiko", "kontinuitas", "bcp"],
    blocks: [
      {
        type: "paragraph",
        html: "Mencegah semua gangguan itu mustahil. Yang bisa dikendalikan adalah <strong>seberapa cepat pulih</strong>. <strong>Business Continuity Plan (BCP)</strong> adalah dokumen hidup yang menjawab pertanyaan, jika proses penting kita berhenti, apa langkah-langkah agar bisnis tetap jalan dan pulih dalam waktu yang dapat diterima.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cold_storage_warehouse_in_Denver%2C_Colorado.jpg?width=400",
        alt: "Bagian dalam gudang penyimpanan dingin berisi rak persediaan",
        caption: "Gudang cadangan dan persediaan kritis adalah inti rencana kontinjensi: saat lokasi utama lumpuh, stok di lokasi alternatif menjaga bisnis tetap berjalan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dua angka inti BCP: RTO dan RPO",
        html: "<strong>RTO (Recovery Time Objective)</strong> adalah batas waktu maksimal sebuah proses boleh mati sebelum dipulihkan. <strong>RPO (Recovery Point Objective)</strong> adalah seberapa banyak data atau persediaan yang boleh hilang. Makin kecil kedua angka ini, makin mahal kesiapannya, jadi tetapkan sesuai tingkat kritikalitas proses.",
      },
      {
        type: "callout",
        tone: "info",
        title: "BIA: menemukan proses paling kritis",
        html: "<strong>Business Impact Analysis (BIA)</strong> mengurutkan proses berdasarkan dampak bila ia berhenti. Dari sini terlihat proses mana yang butuh RTO ketat (misalnya pengiriman pesanan) dan mana yang bisa menunggu (misalnya laporan bulanan).",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur kemungkinan dan dampak gangguan terhadap proses inti, lalu lihat apakah ia masuk zona yang wajib punya rencana kontinjensi.",
      },
      { type: "widget", widget: "SimulatorRiskMatrix" },
      {
        type: "chart",
        variant: "line",
        title: "Pemulihan: dengan BCP vs tanpa BCP (ilustrasi)",
        unit: "% kapasitas operasi",
        source: "ilustrasi edukatif pola kurva pemulihan",
        note: "Dengan BCP, kapasitas turun lebih dangkal dan kembali normal jauh lebih cepat.",
        data: [
          { label: "Hari 0", value: 100, color: "#60a5fa" },
          { label: "Hari 1", value: 35, color: "#60a5fa" },
          { label: "Hari 3", value: 70, color: "#34d399" },
          { label: "Hari 7", value: 95, color: "#34d399" },
          { label: "Hari 14", value: 100, color: "#34d399" },
        ],
      },
      {
        type: "video",
        comp: "ResilienceVideo",
        title: "Turun Sebentar, Pulih Cepat",
        caption: "Inti BCP: memperdangkal jatuhnya operasi dan mempercepat pemulihan ke kondisi normal.",
      },
      {
        type: "case",
        title: "Studi Kasus: RTO gudang distribusi di Jakarta",
        html: "Sebuah distributor menetapkan <strong>RTO 48 jam</strong> untuk gudang utamanya di Jakarta. Saat banjir merendam gudang, tim mengaktifkan BCP: persediaan kritis dialihkan ke gudang cadangan di Bekasi, dan pengiriman prioritas tetap jalan. Operasi pulih dalam 40 jam, di bawah RTO. Tanpa rencana itu, distributor sejenis di sebelahnya baru pulih dalam 9 hari dan kehilangan banyak pelanggan tetap.",
      },
      {
        type: "case",
        title: "Sejarah: Kebakaran pabrik Aisin (1997) menghentikan Toyota",
        html: "Pada <strong>1 Februari 1997</strong>, kebakaran melahap pabrik <strong>Aisin Seiki</strong> di Kariya, Jepang, satu-satunya pemasok katup rem (P-valve) untuk hampir seluruh produksi Toyota. Karena Toyota memakai sistem persediaan sangat ramping, stok katup hanya cukup untuk beberapa hari dan lini perakitan terpaksa berhenti. Lewat kolaborasi keiretsu, sekitar 200 pemasok lain berimprovisasi membuat katup itu, dan produksi mulai pulih hanya dalam <strong>beberapa hari</strong>. Kasus ini jadi contoh klasik betapa pentingnya rencana kontinjensi dan jaringan pemulihan kolaboratif.",
      },
      {
        type: "calcExercise",
        prompt:
          "Gudang menghasilkan keuntungan Rp 5.000.000 per jam. Jika RTO ditetapkan 48 jam dan gudang benar-benar mati selama 48 jam penuh, berapa kerugian keuntungan maksimal yang ditoleransi?",
        answer: 240000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Kerugian = Rp 5.000.000/jam x 48 jam = <strong>Rp 240.000.000</strong>. Angka inilah batas dampak yang dipakai untuk membenarkan biaya kesiapan BCP.",
        hint: "Kalikan keuntungan per jam dengan jumlah jam RTO.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah BCP dengan maknanya.",
        pairs: [
          { left: "RTO", right: "Batas waktu maksimal proses boleh mati" },
          { left: "RPO", right: "Seberapa banyak data atau stok boleh hilang" },
          { left: "BIA", right: "Analisis dampak untuk mengurutkan proses kritis" },
          { left: "Gudang cadangan", right: "Lokasi alternatif saat lokasi utama lumpuh" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "BCP berfokus pada kecepatan pulih, bukan mencegah semua gangguan.",
          "RTO membatasi lama proses boleh mati; RPO membatasi data atau stok yang boleh hilang.",
          "BIA mengurutkan proses kritis agar RTO ketat diberikan pada yang paling penting.",
          "Gudang cadangan dan jalur alternatif adalah inti rencana kontinjensi yang nyata.",
          "Kebakaran Aisin 1997 menunjukkan jaringan pemulihan kolaboratif mempercepat bangkit.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fokus utama Business Continuity Plan?",
            options: [
              "Mencegah semua gangguan terjadi",
              "Seberapa cepat bisnis dapat pulih setelah gangguan",
              "Menambah jumlah pemasok sebanyak mungkin",
              "Menurunkan harga produk",
            ],
            answer: 1,
            explain: "Gangguan tak bisa dicegah seluruhnya; BCP mengelola kecepatan pemulihan.",
          },
          {
            q: "Apa arti RTO (Recovery Time Objective)?",
            options: [
              "Jumlah pemasok cadangan",
              "Batas waktu maksimal sebuah proses boleh mati sebelum dipulihkan",
              "Total biaya gudang",
              "Banyaknya data yang boleh hilang",
            ],
            answer: 1,
            explain: "RTO adalah target waktu pemulihan; RPO yang mengukur data atau stok yang boleh hilang.",
          },
          {
            q: "Apa guna Business Impact Analysis (BIA)?",
            options: [
              "Menghitung pajak",
              "Mengurutkan proses berdasarkan dampak bila berhenti",
              "Memilih warna kemasan",
              "Menentukan harga jual",
            ],
            answer: 1,
            explain: "BIA membantu memberi RTO paling ketat pada proses yang paling kritis.",
          },
          {
            q: "Gudang untung Rp 5 juta/jam dengan RTO 48 jam. Kerugian maksimal yang ditoleransi?",
            options: ["Rp 24 juta", "Rp 240 juta", "Rp 2,4 miliar", "Rp 48 juta"],
            answer: 1,
            explain: "Rp 5 juta x 48 jam = Rp 240 juta.",
          },
          {
            q: "Apa pelajaran utama dari kebakaran pabrik Aisin 1997?",
            options: [
              "Persediaan ramping selalu buruk",
              "Jaringan pemulihan kolaboratif dapat mempercepat bangkit dari krisis",
              "Toyota berhenti berproduksi selamanya",
              "Pemasok tunggal tak pernah berisiko",
            ],
            answer: 1,
            explain: "Sekitar 200 pemasok berimprovisasi sehingga produksi pulih dalam beberapa hari.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "risiko-pemasok-konsentrasi-visibilitas",
    levelId: "risiko",
    order: 3,
    title: "Risiko Pemasok: Konsentrasi & Visibilitas N-Tier",
    summary:
      "Bahaya terbesar sering bukan pada pemasok langsung, melainkan pemasok dari pemasok yang tak pernah kita lihat. Pelajari konsentrasi, single source, dan visibilitas berlapis.",
    durationMin: 14,
    tags: ["risiko", "pemasok", "visibilitas"],
    blocks: [
      {
        type: "paragraph",
        html: "Perusahaan biasanya mengenal baik <strong>pemasok tingkat 1 (Tier-1)</strong> yang mereka beli langsung. Namun Tier-1 itu bergantung pada Tier-2, yang bergantung pada Tier-3, dan seterusnya. Gangguan jauh di bawah rantai bisa menjalar ke atas tanpa peringatan. Inilah masalah <strong>visibilitas n-tier</strong>.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg?width=400",
        alt: "Kapal kontainer besar bermuatan penuh peti kemas di laut",
        caption: "Tiap peti kemas bisa berisi komponen dari banyak lapisan pemasok; satu pabrik Tier-3 yang berhenti dapat mengeringkan dua pemasok Tier-1 sekaligus.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Single source vs sole source",
        html: "<strong>Single source</strong> berarti kita memilih satu pemasok meski ada alternatif lain. <strong>Sole source</strong> berarti memang hanya ada satu pemasok di dunia (misalnya bahan langka atau komponen paten). Sole source paling berbahaya karena tak punya cadangan, dan perlu strategi khusus seperti stok pengaman besar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Konsentrasi adalah risiko tersembunyi",
        html: "Bila 70% pembelian terpusat pada satu pemasok atau satu negara, satu gangguan saja bisa melumpuhkan mayoritas pasokan. Sebar pembelian agar tak ada satu titik yang terlalu dominan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Nilai sebuah pemasok sole source: atur kemungkinan gangguan dan dampaknya pada produksi, lalu lihat prioritas mitigasinya.",
      },
      { type: "widget", widget: "SimulatorRiskMatrix" },
      {
        type: "chart",
        variant: "donut",
        title: "Konsentrasi pembelian yang berisiko (ilustrasi)",
        unit: "% nilai pembelian komponen",
        source: "ilustrasi edukatif",
        note: "Pemasok A memegang 68% pembelian; bila ia terganggu, mayoritas pasokan ikut berhenti.",
        data: [
          { label: "Pemasok A", value: 68, color: "#f87171" },
          { label: "Pemasok B", value: 20, color: "#60a5fa" },
          { label: "Pemasok C", value: 12, color: "#34d399" },
        ],
      },
      {
        type: "video",
        comp: "ResilienceVideo",
        title: "Gangguan yang Menjalar dari Bawah",
        caption: "Resiliensi menuntut kita melihat bukan hanya Tier-1, tetapi seluruh lapisan pemasok.",
      },
      {
        type: "case",
        title: "Studi Kasus: komponen tersembunyi di Tier-3",
        html: "Sebuah produsen elektronik di Batam yakin pasokannya aman karena punya dua pemasok Tier-1. Saat krisis datang, ternyata <strong>kedua Tier-1 itu membeli cip dari pabrik Tier-3 yang sama</strong>. Pabrik Tier-3 itu berhenti, dan kedua Tier-1 ikut kering. Diversifikasi di Tier-1 ternyata semu karena ada titik tunggal tersembunyi di lapisan ketiga.",
      },
      {
        type: "case",
        title: "Sejarah: Krisis cip semikonduktor global (2020-2022)",
        html: "Sekitar <strong>2020 hingga 2022</strong>, dunia mengalami <strong>kelangkaan cip semikonduktor</strong> parah. Lonjakan permintaan elektronik saat pandemi, ditambah konsentrasi produksi cip canggih hanya di sedikit pabrik (terutama di Taiwan), membuat pasokan tak terpenuhi. Industri otomotif global terpukul keras: banyak pabrik mobil menghentikan lini produksi karena kekurangan cip yang harganya kecil tetapi mutlak dibutuhkan. Konsentrasi produksi pada sedikit titik membuat seluruh dunia rentan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Total pembelian komponen Rp 50 miliar setahun. Jika satu pemasok memegang Rp 34 miliar, berapa persen konsentrasinya pada pemasok itu?",
        answer: 68,
        tolerance: 0,
        suffix: "%",
        solution:
          "Konsentrasi = 34 / 50 x 100% = <strong>68%</strong>. Angka di atas 50% pada satu pemasok dianggap konsentrasi tinggi yang perlu disebar.",
        hint: "Bagi nilai pembelian dari pemasok itu dengan total, lalu kali 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap situasi: SINGLE SOURCE (ada alternatif tapi pilih satu) atau SOLE SOURCE (memang hanya satu di dunia).",
        buckets: ["Single source", "Sole source"],
        items: [
          { text: "Memilih satu pabrik kemasan padahal ada lima yang setara", bucket: "Single source" },
          { text: "Komponen paten yang hanya diproduksi satu perusahaan", bucket: "Sole source" },
          { text: "Membeli baut dari satu vendor langganan saja", bucket: "Single source" },
          { text: "Bahan tambang langka yang sumbernya hanya satu negara", bucket: "Sole source" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Risiko sering tersembunyi di Tier-2 dan Tier-3, bukan hanya pemasok langsung.",
          "Single source dipilih sendiri; sole source memang satu-satunya di dunia dan paling rawan.",
          "Konsentrasi pembelian di atas 50% pada satu pemasok adalah risiko yang perlu disebar.",
          "Diversifikasi Tier-1 bisa semu bila semua bergantung pada titik tunggal di lapisan bawah.",
          "Krisis cip 2020-2022 menunjukkan bahaya memusatkan produksi pada sedikit titik.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud visibilitas n-tier?",
            options: [
              "Mengetahui harga jual produk",
              "Kemampuan melihat pemasok di seluruh lapisan, bukan hanya Tier-1",
              "Jumlah gudang yang dimiliki",
              "Kecepatan pengiriman",
            ],
            answer: 1,
            explain: "Gangguan di Tier-2 atau Tier-3 bisa menjalar ke atas bila tak terlihat.",
          },
          {
            q: "Apa beda sole source dengan single source?",
            options: [
              "Tidak ada bedanya",
              "Sole source memang satu-satunya di dunia; single source dipilih meski ada alternatif",
              "Single source selalu lebih mahal",
              "Sole source selalu lebih murah",
            ],
            answer: 1,
            explain: "Sole source tak punya alternatif sama sekali sehingga paling berisiko.",
          },
          {
            q: "Mengapa konsentrasi pembelian tinggi berbahaya?",
            options: [
              "Membuat harga naik otomatis",
              "Satu gangguan dapat melumpuhkan mayoritas pasokan",
              "Membuat produk lebih berat",
              "Tidak ada bahayanya",
            ],
            answer: 1,
            explain: "Bila mayoritas dibeli dari satu titik, gangguan di titik itu memukul sebagian besar pasokan.",
          },
          {
            q: "Pembelian Rp 50 miliar, satu pemasok Rp 34 miliar. Konsentrasinya?",
            options: ["34%", "50%", "68%", "84%"],
            answer: 2,
            explain: "34 / 50 = 0,68 atau 68%.",
          },
          {
            q: "Apa pelajaran krisis cip 2020-2022?",
            options: [
              "Cip tidak penting bagi otomotif",
              "Memusatkan produksi pada sedikit titik membuat dunia rentan",
              "Pandemi menambah pasokan cip",
              "Konsentrasi produksi selalu aman",
            ],
            answer: 1,
            explain: "Produksi cip canggih yang terpusat membuat gangguan kecil berdampak global.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "risiko-geopolitik-selat-embargo",
    levelId: "risiko",
    order: 4,
    title: "Risiko Geopolitik: Perang Dagang, Selat & Embargo",
    summary:
      "Rantai pasok global melintasi batas negara, jadi ia ikut terguncang oleh perang dagang, penutupan selat strategis, dan embargo. Pelajari cara memetakan dan menyiasatinya.",
    durationMin: 15,
    tags: ["risiko", "geopolitik", "logistik global"],
    blocks: [
      {
        type: "paragraph",
        html: "Barang yang kita beli bisa melewati banyak negara sebelum sampai. Karena itu rantai pasok rentan terhadap keputusan politik: <strong>tarif perang dagang</strong>, penutupan <strong>selat strategis</strong>, atau <strong>embargo</strong> yang melarang perdagangan dengan negara tertentu. Risiko geopolitik sulit diprediksi tetapi dampaknya bisa sangat besar.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/U_S_Customs_and_Border_Protection_Seattle_Washington_Inspection_%285764585803%29.jpg?width=400",
        alt: "Petugas bea cukai memeriksa muatan di titik perbatasan",
        caption: "Tarif, embargo, dan pemeriksaan perbatasan adalah wujud nyata risiko geopolitik yang dapat membalik pemasok termurah menjadi termahal dalam semalam.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "info",
        title: "Selat strategis Indonesia",
        html: "<strong>Selat Malaka</strong> antara Sumatra dan Semenanjung Malaya adalah salah satu jalur laut tersibuk dunia; sekitar seperempat perdagangan barang dunia lewat sana. <strong>Selat Sunda</strong> dan <strong>Selat Lombok</strong> jadi jalur alternatif. Gangguan di selat ini, entah cuaca, kecelakaan, atau ketegangan, langsung memengaruhi biaya dan waktu kirim.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Tarif dan embargo mengubah peta biaya",
        html: "Tarif impor mendadak bisa membuat pemasok termurah jadi termahal dalam semalam. Embargo bisa memutus akses ke bahan baku sepenuhnya. Strategi <strong>diversifikasi geografis</strong> dan <strong>nearshoring</strong> (mendekatkan sumber) jadi penyangga.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Nilai risiko ketergantungan pada satu jalur selat: atur kemungkinan gangguan dan dampaknya, lalu lihat prioritas mencari jalur alternatif.",
      },
      { type: "widget", widget: "SimulatorRiskMatrix" },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan lalu lintas jalur laut strategis (ilustrasi)",
        unit: "indeks kepadatan relatif",
        source: "ilustrasi edukatif berdasarkan urutan kepentingan jalur",
        note: "Selat Malaka jauh lebih padat dibanding jalur alternatif Sunda dan Lombok.",
        data: [
          { label: "Selat Malaka", value: 100, color: "#f87171" },
          { label: "Selat Sunda", value: 22, color: "#60a5fa" },
          { label: "Selat Lombok", value: 30, color: "#34d399" },
        ],
      },
      {
        type: "video",
        comp: "ResilienceVideo",
        title: "Saat Jalur Tunggal Tersumbat",
        caption: "Ketergantungan pada satu selat atau satu negara adalah titik tunggal yang perlu dicadangkan.",
      },
      {
        type: "case",
        title: "Studi Kasus: pengalihan rute lewat Selat Lombok",
        html: "Sebuah eksportir mengirim barang lewat <strong>Selat Malaka</strong> dengan waktu tempuh normal. Saat jalur itu padat dan tertunda, kapal dialihkan memutar lewat <strong>Selat Lombok</strong>. Rute alternatif menambah jarak sehingga waktu tempuh bertambah sekitar 2 hari dan biaya bahan bakar naik. Namun karena eksportir sudah memetakan rute cadangan sejak awal, pengiriman tetap sampai dan kontrak tidak batal.",
      },
      {
        type: "case",
        title: "Sejarah: Embargo minyak OPEC (1973)",
        html: "Pada <strong>1973</strong>, negara-negara Arab anggota <strong>OPEC</strong> memberlakukan <strong>embargo minyak</strong> terhadap sejumlah negara Barat. Harga minyak dunia melonjak sekitar empat kali lipat dalam waktu singkat, memicu krisis energi global, antrean panjang di pom bensin, dan resesi di banyak negara. Peristiwa ini menunjukkan bagaimana keputusan geopolitik atas satu komoditas dapat mengguncang rantai pasok dan ekonomi seluruh dunia.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pemasok luar negeri menjual komponen seharga Rp 100.000 per unit. Pemerintah memberlakukan tarif impor 25%. Berapa harga per unit setelah tarif?",
        answer: 125000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Harga setelah tarif = Rp 100.000 + (25% x Rp 100.000) = Rp 100.000 + Rp 25.000 = <strong>Rp 125.000</strong>. Kenaikan ini bisa membuat pemasok termurah berubah jadi termahal.",
        hint: "Tambahkan 25% dari harga awal ke harga awal.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan risiko geopolitik dengan strategi penyangganya.",
        pairs: [
          { left: "Tarif perang dagang naik", right: "Diversifikasi pemasok lintas negara" },
          { left: "Selat strategis tersumbat", right: "Petakan rute laut alternatif" },
          { left: "Embargo bahan baku", right: "Cari sumber pengganti dan stok pengaman" },
          { left: "Ketidakpastian impor jangka panjang", right: "Nearshoring atau sumber lokal" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Rantai pasok global ikut terguncang oleh perang dagang, selat tersumbat, dan embargo.",
          "Selat Malaka adalah jalur tersibuk; Selat Sunda dan Lombok jadi alternatif penting.",
          "Tarif mendadak bisa membalik pemasok termurah menjadi termahal dalam semalam.",
          "Diversifikasi geografis dan nearshoring adalah penyangga risiko geopolitik.",
          "Embargo minyak OPEC 1973 menunjukkan dampak global keputusan geopolitik.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa rantai pasok global rentan risiko geopolitik?",
            options: [
              "Karena barang tak pernah melintasi negara lain",
              "Karena barang melintasi banyak negara dan tunduk pada keputusan politik",
              "Karena harga selalu tetap",
              "Karena tak ada selat di dunia",
            ],
            answer: 1,
            explain: "Tarif, embargo, dan penutupan jalur dapat mengubah biaya dan akses pasokan.",
          },
          {
            q: "Mengapa Selat Malaka penting bagi rantai pasok?",
            options: [
              "Karena tidak dilewati kapal",
              "Karena salah satu jalur laut tersibuk dunia",
              "Karena hanya untuk kapal nelayan",
              "Karena menghubungkan dua benua yang sama",
            ],
            answer: 1,
            explain: "Sekitar seperempat perdagangan barang dunia melewati Selat Malaka.",
          },
          {
            q: "Apa dampak khas tarif impor mendadak?",
            options: [
              "Pemasok termurah bisa berubah jadi termahal",
              "Biaya selalu turun",
              "Tidak ada pengaruh apa pun",
              "Kualitas barang naik otomatis",
            ],
            answer: 0,
            explain: "Tarif menambah biaya impor sehingga peta harga pemasok berubah.",
          },
          {
            q: "Komponen Rp 100.000 kena tarif 25%. Harga akhirnya?",
            options: ["Rp 100.000", "Rp 112.500", "Rp 125.000", "Rp 75.000"],
            answer: 2,
            explain: "Rp 100.000 + 25% = Rp 125.000.",
          },
          {
            q: "Apa pelajaran dari embargo minyak OPEC 1973?",
            options: [
              "Geopolitik tak memengaruhi ekonomi",
              "Keputusan geopolitik atas satu komoditas dapat mengguncang ekonomi dunia",
              "Harga minyak selalu stabil",
              "Embargo tidak pernah berhasil",
            ],
            answer: 1,
            explain: "Harga minyak melonjak sekitar empat kali lipat dan memicu krisis energi global.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "risiko-iklim-bencana-rantai-pasok",
    levelId: "risiko",
    order: 5,
    title: "Risiko Iklim & Bencana Alam",
    summary:
      "Indonesia berada di Cincin Api dan zona iklim tropis basah, jadi banjir, gempa, dan kekeringan adalah risiko nyata bagi rantai pasok. Pelajari cara memetakannya.",
    durationMin: 15,
    tags: ["risiko", "iklim", "bencana"],
    blocks: [
      {
        type: "paragraph",
        html: "Indonesia adalah salah satu negara paling rawan bencana di dunia: berada di <strong>Cincin Api Pasifik</strong> sehingga sering gempa dan letusan gunung, sekaligus beriklim tropis basah yang rentan <strong>banjir</strong> dan, di musim kemarau panjang, <strong>kekeringan</strong>. Rantai pasok yang melintasi wilayah ini wajib memetakan risiko iklim dan bencana.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trailer_Truck_5.jpg?width=400",
        alt: "Truk trailer pengangkut barang di jalan raya",
        caption: "Saat banjir atau longsor menutup jalur, armada distribusi seperti ini berhenti bergerak; sebaran gudang lintas wilayah menjaga pengiriman tetap jalan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bencana memukul banyak titik sekaligus",
        html: "Berbeda dari kerusakan satu mesin, bencana alam bisa melumpuhkan pemasok, jalan, pelabuhan, dan gudang dalam satu wilayah sekaligus. Karena itu konsentrasi aset di satu daerah rawan adalah risiko yang berlipat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Sebar lokasi, bukan hanya pemasok",
        html: "Punya dua pemasok tak banyak menolong bila keduanya di kawasan banjir yang sama. Resiliensi iklim menuntut <strong>sebaran geografis</strong>: pemasok, gudang, dan jalur di wilayah dengan profil bencana berbeda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Nilai risiko gudang di dataran rawan banjir: atur kemungkinan banjir tahunan dan dampaknya pada stok, lalu lihat zona mitigasinya.",
      },
      { type: "widget", widget: "SimulatorRiskMatrix" },
      {
        type: "chart",
        variant: "bar",
        title: "Jenis bencana yang mengganggu logistik di Indonesia (ilustrasi)",
        unit: "indeks frekuensi gangguan relatif",
        source: "ilustrasi edukatif, Indonesia kawasan rawan multi-bencana",
        note: "Banjir adalah pengganggu logistik paling sering di banyak kota, terutama saat musim hujan.",
        data: [
          { label: "Banjir", value: 100, color: "#60a5fa" },
          { label: "Gempa", value: 55, color: "#f87171" },
          { label: "Tanah longsor", value: 40, color: "#fbbf24" },
          { label: "Kekeringan", value: 30, color: "#a78bfa" },
        ],
      },
      {
        type: "video",
        comp: "ResilienceVideo",
        title: "Pulih Setelah Bencana",
        caption: "Sebaran geografis aset membuat rantai pasok turun lebih dangkal saat bencana melanda satu wilayah.",
      },
      {
        type: "case",
        title: "Studi Kasus: banjir Jakarta melumpuhkan distribusi",
        html: "Saat banjir besar merendam Jakarta, sebuah distributor yang menaruh <strong>seluruh stoknya di satu gudang di kawasan rawan banjir</strong> kehilangan banyak persediaan dan tak bisa mengirim selama berhari-hari. Pesaingnya yang membagi stok ke gudang di Jakarta dan Bekasi tetap bisa melayani pelanggan dari gudang yang kering. Sebaran lokasi terbukti lebih melindungi daripada sekadar menambah pemasok.",
      },
      {
        type: "case",
        title: "Sejarah: Gempa dan tsunami Tohoku, Jepang (2011)",
        html: "Pada <strong>11 Maret 2011</strong>, gempa berkekuatan sekitar magnitudo 9,0 mengguncang kawasan <strong>Tohoku</strong> di Jepang dan memicu tsunami besar serta krisis nuklir Fukushima. Banyak pabrik komponen otomotif dan elektronik berhenti, dan karena banyak produk dunia bergantung pada komponen khusus dari wilayah itu, gangguan menjalar ke pabrik di banyak negara selama berbulan-bulan. Bencana di satu wilayah ternyata bisa mengguncang rantai pasok global.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah gudang punya peluang banjir 20% per tahun. Jika banjir terjadi, kerugian stok ditaksir Rp 800.000.000. Berapa kerugian harapan (expected loss) tahunannya?",
        answer: 160000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Kerugian harapan = peluang x dampak = 0,20 x Rp 800.000.000 = <strong>Rp 160.000.000</strong> per tahun. Angka ini membenarkan biaya mitigasi seperti gudang cadangan di lokasi lebih tinggi.",
        hint: "Kalikan peluang (0,20) dengan nilai kerugian bila banjir terjadi.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap tindakan: MENGURANGI risiko bencana atau MENAMBAH paparan risiko.",
        buckets: ["Mengurangi risiko", "Menambah paparan"],
        items: [
          { text: "Membagi stok ke gudang di wilayah dengan profil bencana berbeda", bucket: "Mengurangi risiko" },
          { text: "Menumpuk seluruh persediaan di satu gudang dataran rendah", bucket: "Menambah paparan" },
          { text: "Memilih pemasok cadangan di pulau lain", bucket: "Mengurangi risiko" },
          { text: "Memusatkan semua pemasok di satu kawasan rawan banjir", bucket: "Menambah paparan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Indonesia rawan multi-bencana: gempa di Cincin Api, banjir, longsor, dan kekeringan.",
          "Bencana melumpuhkan banyak titik sekaligus, bukan satu mesin saja.",
          "Sebaran geografis aset lebih melindungi daripada sekadar menambah jumlah pemasok.",
          "Kerugian harapan = peluang bencana x dampaknya, dipakai untuk membenarkan mitigasi.",
          "Gempa Tohoku 2011 menunjukkan bencana lokal bisa mengguncang rantai pasok global.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa Indonesia tergolong sangat rawan bencana?",
            options: [
              "Karena tidak punya gunung api",
              "Karena berada di Cincin Api dan beriklim tropis basah",
              "Karena tak pernah hujan",
              "Karena jauh dari laut",
            ],
            answer: 1,
            explain: "Posisi di Cincin Api memicu gempa, dan iklim tropis basah memicu banjir.",
          },
          {
            q: "Apa beda dampak bencana alam dibanding kerusakan satu mesin?",
            options: [
              "Bencana hanya merusak satu titik",
              "Bencana bisa melumpuhkan pemasok, jalan, pelabuhan, dan gudang sekaligus",
              "Bencana tak berdampak pada logistik",
              "Bencana selalu lebih ringan",
            ],
            answer: 1,
            explain: "Bencana alam memukul banyak titik dalam satu wilayah sekaligus.",
          },
          {
            q: "Mengapa dua pemasok belum tentu cukup melawan risiko banjir?",
            options: [
              "Karena pemasok tak pernah kebanjiran",
              "Karena keduanya bisa berada di kawasan banjir yang sama",
              "Karena banjir tak merusak stok",
              "Karena pemasok kedua selalu lebih mahal",
            ],
            answer: 1,
            explain: "Tanpa sebaran geografis, satu banjir bisa melumpuhkan kedua pemasok.",
          },
          {
            q: "Gudang peluang banjir 20%, kerugian bila banjir Rp 800 juta. Kerugian harapan tahunan?",
            options: ["Rp 800 juta", "Rp 160 juta", "Rp 80 juta", "Rp 16 juta"],
            answer: 1,
            explain: "0,20 x Rp 800 juta = Rp 160 juta.",
          },
          {
            q: "Apa pelajaran dari gempa Tohoku 2011?",
            options: [
              "Bencana lokal tak berdampak global",
              "Bencana di satu wilayah dapat mengguncang rantai pasok global",
              "Jepang tak punya pabrik komponen",
              "Tsunami tidak merusak produksi",
            ],
            answer: 1,
            explain: "Gangguan komponen dari Tohoku menjalar ke pabrik di banyak negara.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "risiko-siber-sistem-logistik",
    levelId: "risiko",
    order: 6,
    title: "Risiko Siber pada Sistem Logistik",
    summary:
      "Rantai pasok modern berjalan di atas sistem digital seperti WMS dan ERP. Serangan siber dapat menghentikan operasi sama totalnya dengan banjir atau gempa.",
    durationMin: 15,
    tags: ["risiko", "siber", "sistem"],
    blocks: [
      {
        type: "paragraph",
        html: "Gudang, armada, dan pemasok kini dikendalikan oleh perangkat lunak: <strong>WMS (Warehouse Management System)</strong>, <strong>ERP (Enterprise Resource Planning)</strong>, dan portal pemesanan. Jika sistem ini lumpuh karena <strong>serangan siber</strong>, perusahaan bisa kehilangan kemampuan menerima pesanan, melacak stok, atau mengirim barang, walau gudang fisiknya utuh.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Diagnostic_monitors_in_the_control_room_of_Wendelstein_7-X.jpg?width=400",
        alt: "Deretan monitor pemantauan di sebuah ruang kendali",
        caption: "Operasi logistik modern bergantung pada ruang kendali dan sistem digital; saat layar ini gelap karena ransomware, gudang fisik bisa ikut lumpuh.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Ransomware: penyandera operasi",
        html: "<strong>Ransomware</strong> mengunci data dan sistem lalu meminta tebusan. Bagi logistik, sistem yang terkunci berarti truk tak bisa dijadwalkan dan pesanan tak bisa diproses. Dampaknya bisa berhari-hari atau berminggu-minggu, jauh lebih lama dari yang dibayangkan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pertahanan: cadangan, segmentasi, dan latihan",
        html: "Tiga pertahanan inti: <strong>cadangan data (backup)</strong> yang teruji dan terpisah, <strong>segmentasi jaringan</strong> agar serangan tak menyebar ke seluruh sistem, dan <strong>latihan rutin</strong> memulihkan sistem. Backup yang tak pernah diuji sama saja tak punya backup.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Nilai risiko serangan siber pada sistem WMS: atur kemungkinan dan dampak terhadap operasi, lalu lihat seberapa mendesak mitigasinya.",
      },
      { type: "widget", widget: "SimulatorRiskMatrix" },
      {
        type: "chart",
        variant: "bar",
        title: "Dampak operasi saat sistem logistik lumpuh (ilustrasi)",
        unit: "% kapasitas operasi tersisa",
        source: "ilustrasi edukatif pola gangguan siber",
        note: "Tanpa backup teruji, kapasitas anjlok dan pemulihan jadi sangat lambat.",
        data: [
          { label: "Normal", value: 100, color: "#34d399" },
          { label: "Hari serangan", value: 15, color: "#f87171" },
          { label: "Tanpa backup", value: 25, color: "#fbbf24" },
          { label: "Dengan backup teruji", value: 80, color: "#60a5fa" },
        ],
      },
      {
        type: "video",
        comp: "ResilienceVideo",
        title: "Saat Sistem Disandera",
        caption: "Cadangan data teruji membuat operasi bangkit jauh lebih cepat setelah serangan siber.",
      },
      {
        type: "case",
        title: "Studi Kasus: WMS terkunci, gudang berhenti",
        html: "Sebuah perusahaan logistik di Indonesia terkena ransomware yang mengunci <strong>WMS</strong>-nya. Tanpa sistem, petugas tak tahu lokasi rak ribuan jenis barang sehingga pengambilan barang lumpuh. Untungnya perusahaan punya <strong>backup terpisah yang rutin diuji</strong>, sehingga sistem dipulihkan dalam 2 hari. Pesaing yang backup-nya tak pernah diuji butuh lebih dari seminggu untuk kembali normal.",
      },
      {
        type: "case",
        title: "Sejarah: Serangan siber NotPetya melumpuhkan Maersk (2017)",
        html: "Pada <strong>Juni 2017</strong>, serangan siber <strong>NotPetya</strong> menyebar cepat ke seluruh dunia dan melumpuhkan raksasa pelayaran <strong>Maersk</strong>. Ribuan komputer dan server terkunci, terminal peti kemas di banyak pelabuhan berhenti, dan Maersk harus membangun ulang sebagian besar infrastruktur TI-nya. Kerugiannya ditaksir sekitar <strong>300 juta dolar AS</strong>. Insiden ini menegaskan bahwa risiko siber adalah ancaman rantai pasok berskala fisik dan global.",
      },
      {
        type: "calcExercise",
        prompt:
          "Operasi logistik rugi Rp 20.000.000 per jam saat sistem lumpuh. Jika serangan siber menghentikan operasi selama 30 jam, berapa total kerugiannya?",
        answer: 600000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Total kerugian = Rp 20.000.000/jam x 30 jam = <strong>Rp 600.000.000</strong>. Angka inilah yang dibandingkan dengan biaya investasi keamanan siber dan backup.",
        hint: "Kalikan kerugian per jam dengan jumlah jam operasi terhenti.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah keamanan siber dengan maknanya.",
        pairs: [
          { left: "Ransomware", right: "Mengunci data dan menuntut tebusan" },
          { left: "Backup teruji", right: "Salinan data terpisah yang rutin dicoba pulihkan" },
          { left: "Segmentasi jaringan", right: "Membatasi penyebaran serangan antar sistem" },
          { left: "WMS", right: "Sistem yang mengatur lokasi dan stok gudang" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Rantai pasok modern bergantung pada sistem digital seperti WMS dan ERP.",
          "Serangan siber dapat menghentikan operasi walau gudang fisik utuh.",
          "Ransomware mengunci sistem dan dampaknya bisa berhari-hari hingga berminggu-minggu.",
          "Pertahanan inti: backup teruji, segmentasi jaringan, dan latihan pemulihan.",
          "Serangan NotPetya 2017 melumpuhkan Maersk dengan kerugian sekitar 300 juta dolar AS.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa serangan siber berbahaya bagi logistik?",
            options: [
              "Karena merusak truk secara fisik",
              "Karena dapat melumpuhkan sistem yang mengatur pesanan, stok, dan pengiriman",
              "Karena menaikkan harga bahan bakar",
              "Karena tidak berdampak apa pun",
            ],
            answer: 1,
            explain: "Tanpa sistem, perusahaan tak bisa memproses pesanan atau melacak stok.",
          },
          {
            q: "Apa yang dilakukan ransomware?",
            options: [
              "Mempercepat pengiriman",
              "Mengunci data dan sistem lalu menuntut tebusan",
              "Menambah stok gudang",
              "Memperbaiki jaringan",
            ],
            answer: 1,
            explain: "Sistem yang terkunci membuat operasi logistik berhenti sampai dipulihkan.",
          },
          {
            q: "Mengapa backup harus diuji secara rutin?",
            options: [
              "Agar terlihat sibuk",
              "Karena backup yang tak pernah diuji bisa gagal saat dibutuhkan",
              "Agar data lebih besar",
              "Karena tidak ada gunanya menguji",
            ],
            answer: 1,
            explain: "Backup yang tak teruji sama saja tak punya backup saat krisis.",
          },
          {
            q: "Operasi rugi Rp 20 juta/jam, lumpuh 30 jam. Total kerugiannya?",
            options: ["Rp 60 juta", "Rp 600 juta", "Rp 6 miliar", "Rp 50 juta"],
            answer: 1,
            explain: "Rp 20 juta x 30 jam = Rp 600 juta.",
          },
          {
            q: "Apa pelajaran dari serangan NotPetya pada Maersk 2017?",
            options: [
              "Risiko siber hanya soal kecil",
              "Serangan siber dapat melumpuhkan rantai pasok berskala fisik dan global",
              "Pelabuhan kebal serangan siber",
              "Maersk tak terdampak",
            ],
            answer: 1,
            explain: "Terminal peti kemas berhenti dan kerugian ditaksir sekitar 300 juta dolar AS.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "scenario-planning-stress-testing",
    levelId: "risiko",
    order: 7,
    title: "Scenario Planning & Stress Testing",
    summary:
      "Daripada hanya berharap tak ada krisis, perusahaan tangguh menguji rantai pasoknya dengan skenario what-if dan stress test agar kelemahan terlihat sebelum krisis nyata.",
    durationMin: 16,
    tags: ["risiko", "skenario", "stress test"],
    blocks: [
      {
        type: "paragraph",
        html: "Rencana yang baik diuji sebelum dipakai. <strong>Scenario planning</strong> membayangkan beberapa masa depan yang mungkin (skenario <strong>what-if</strong>), lalu menyiapkan respons untuk masing-masing. <strong>Stress testing</strong> mendorong rantai pasok ke kondisi ekstrem di atas kertas untuk melihat di mana ia patah, sebelum krisis nyata membuktikannya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Suez_Canal_traffic_jam_seen_from_space.jpg?width=400",
        alt: "Antrean kapal kontainer di Terusan Suez terlihat dari luar angkasa",
        caption: "Gangguan nyata seperti penyumbatan Suez adalah skenario ekstrem yang ingin diuji lebih dulu di atas kertas, jauh sebelum benar-benar terjadi.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pikirkan beberapa masa depan, bukan satu",
        html: "Alih-alih satu tebakan, susun beberapa skenario: pemasok utama tutup, jalur impor terhalang, permintaan melonjak dua kali lipat. Untuk tiap skenario, tanyakan, apa yang akan kita lakukan dan apakah kita sanggup.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Diversifikasi adalah jawaban berulang",
        html: "Hampir di setiap skenario, jawaban yang menolong sama: <strong>sebar pemasok, sebar lokasi, sebar jalur, dan siapkan stok pengaman</strong>. Diversifikasi adalah strategi yang tahan terhadap banyak jenis guncangan sekaligus.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Uji satu skenario ekstrem: atur kemungkinan dan dampaknya pada rantai pasok, lalu lihat apakah ia masuk zona merah yang menuntut rencana cadangan.",
      },
      { type: "widget", widget: "SimulatorRiskMatrix" },
      {
        type: "chart",
        variant: "bar",
        title: "Stress test: skenario vs ketahanan rantai pasok (ilustrasi)",
        unit: "% kemampuan memenuhi permintaan",
        source: "ilustrasi edukatif hasil stress test",
        note: "Rantai pasok terdiversifikasi mampu memenuhi lebih banyak permintaan di setiap skenario ekstrem.",
        data: [
          { label: "Normal", value: 100, color: "#34d399" },
          { label: "Pemasok utama tutup", value: 70, color: "#60a5fa" },
          { label: "Jalur impor terhalang", value: 60, color: "#fbbf24" },
          { label: "Permintaan melonjak 2x", value: 55, color: "#a78bfa" },
        ],
      },
      {
        type: "video",
        comp: "ResilienceVideo",
        title: "Menguji Sebelum Krisis Datang",
        caption: "Stress test menyingkap titik patah lebih awal sehingga rantai pasok bisa diperkuat sebelum guncangan nyata.",
      },
      {
        type: "case",
        title: "Studi Kasus: stress test pemasok tunggal",
        html: "Sebuah perusahaan menjalankan stress test dengan skenario, bagaimana jika pemasok komponen utama tutup mendadak. Di atas kertas, produksi anjlok ke <strong>40% dalam 3 hari</strong> karena tak ada cadangan. Temuan ini mendorong mereka menambah satu pemasok di pulau lain dan menimbun stok pengaman 2 minggu. Saat pemasok utama benar-benar terganggu setahun kemudian, produksi hanya turun ke 85% dan cepat pulih.",
      },
      {
        type: "case",
        title: "Sejarah: Guncangan pasokan COVID-19 (2020)",
        html: "Pada awal <strong>2020</strong>, pandemi <strong>COVID-19</strong> memicu guncangan rantai pasok global secara bersamaan: pabrik tutup, pelabuhan macet, dan permintaan beberapa barang melonjak sementara yang lain anjlok. Banyak perusahaan yang tak pernah membuat skenario pandemi kelabakan, sementara yang sudah punya rencana diversifikasi pemasok dan stok pengaman lebih cepat menyesuaikan diri. Pandemi menjadi stress test dunia nyata yang memaksa semua orang serius merencanakan skenario ekstrem.",
      },
      {
        type: "calcExercise",
        prompt:
          "Permintaan normal 1.000 unit per hari. Stress test mengasumsikan lonjakan 80%. Berapa unit per hari yang harus mampu dipenuhi pada skenario itu?",
        answer: 1800,
        tolerance: 0,
        suffix: "unit",
        solution:
          "Permintaan skenario = 1.000 + (80% x 1.000) = 1.000 + 800 = <strong>1.800 unit</strong> per hari. Bila kapasitas maksimal hanya 1.500, stress test menyingkap kekurangan 300 unit.",
        hint: "Tambahkan 80% dari permintaan normal ke permintaan normal.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan: ciri SCENARIO PLANNING yang baik atau praktik yang LEMAH.",
        buckets: ["Scenario planning baik", "Praktik lemah"],
        items: [
          { text: "Menyiapkan respons untuk beberapa skenario berbeda", bucket: "Scenario planning baik" },
          { text: "Hanya berharap krisis tak akan datang", bucket: "Praktik lemah" },
          { text: "Menguji rantai pasok ke kondisi ekstrem di atas kertas", bucket: "Scenario planning baik" },
          { text: "Mengandalkan satu tebakan masa depan saja", bucket: "Praktik lemah" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Scenario planning menyiapkan respons untuk beberapa masa depan yang mungkin.",
          "Stress testing mendorong rantai pasok ke kondisi ekstrem untuk menemukan titik patah.",
          "Diversifikasi pemasok, lokasi, jalur, dan stok adalah jawaban yang tahan banyak skenario.",
          "Menguji rencana di atas kertas jauh lebih murah daripada gagal saat krisis nyata.",
          "Pandemi COVID-19 2020 menjadi stress test dunia nyata bagi rantai pasok global.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan scenario planning?",
            options: [
              "Memastikan hanya satu masa depan terjadi",
              "Menyiapkan respons untuk beberapa skenario masa depan yang mungkin",
              "Menghapus semua risiko",
              "Menaikkan harga jual",
            ],
            answer: 1,
            explain: "Dengan beberapa skenario, perusahaan siap pada banyak kemungkinan, bukan satu tebakan.",
          },
          {
            q: "Apa yang dilakukan stress testing pada rantai pasok?",
            options: [
              "Menambah stok tanpa alasan",
              "Mendorong rantai pasok ke kondisi ekstrem untuk melihat di mana ia patah",
              "Menurunkan jumlah pemasok",
              "Mengganti semua sistem komputer",
            ],
            answer: 1,
            explain: "Stress test menyingkap titik lemah sebelum krisis nyata membuktikannya.",
          },
          {
            q: "Mengapa diversifikasi sering jadi jawaban berulang?",
            options: [
              "Karena selalu paling murah",
              "Karena tahan terhadap banyak jenis guncangan sekaligus",
              "Karena menambah keuntungan langsung",
              "Karena mempercepat produksi",
            ],
            answer: 1,
            explain: "Menyebar pemasok, lokasi, dan jalur melindungi dari beragam skenario.",
          },
          {
            q: "Permintaan normal 1.000 unit, stress test asumsi lonjakan 80%. Permintaan skenario?",
            options: ["1.080 unit", "1.800 unit", "800 unit", "8.000 unit"],
            answer: 1,
            explain: "1.000 + 80% = 1.800 unit.",
          },
          {
            q: "Apa pelajaran dari guncangan COVID-19 2020?",
            options: [
              "Skenario ekstrem tak perlu direncanakan",
              "Pandemi menjadi stress test nyata yang memaksa serius merencanakan skenario ekstrem",
              "Rantai pasok tak terdampak pandemi",
              "Diversifikasi tidak menolong",
            ],
            answer: 1,
            explain: "Perusahaan dengan rencana diversifikasi lebih cepat menyesuaikan diri.",
          },
        ],
      },
    ],
  },
];
