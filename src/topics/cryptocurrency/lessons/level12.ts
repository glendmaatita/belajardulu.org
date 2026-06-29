import type { Lesson } from "../../../types";

export const level12: Lesson[] = [
  // ============================================================
  {
    id: "bridge-wrapped",
    levelId: "crosschain",
    order: 1,
    title: "Bridge & Wrapped Token",
    summary:
      "Bagaimana aset berpindah antar blockchain berbeda lewat mekanisme lock-and-mint, dan apa itu wrapped token seperti WBTC.",
    durationMin: 14,
    tags: ["crosschain", "bridge", "wrapped-token", "wbtc"],
    blocks: [
      {
        type: "paragraph",
        html: "Tiap blockchain ibarat pulau tersendiri. Bitcoin tinggal di jaringan Bitcoin, Ether di Ethereum, dan keduanya tidak bisa saling bicara secara langsung. Lalu bagaimana cara membawa nilai dari satu rantai ke rantai lain? Jawabannya adalah <strong>cross-chain bridge</strong> (jembatan lintas-rantai).",
      },
      {
        type: "paragraph",
        html: "Karena koin tidak bisa benar-benar pindah jaringan, jembatan memakai trik cerdas: <strong>lock-and-mint</strong>. Aset asli dikunci di rantai asal, lalu versi tiruannya yang disebut <strong>wrapped token</strong> dicetak di rantai tujuan dengan perbandingan <strong>1:1</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Mekanisme lock-and-mint",
        html: "Saat kamu memindahkan 1 BTC ke Ethereum, jembatan <strong>mengunci</strong> 1 BTC di sisi Bitcoin, lalu <strong>mencetak</strong> (mint) 1 WBTC di Ethereum. Untuk menariknya kembali, 1 WBTC dibakar (burn) di Ethereum dan 1 BTC dibuka kuncinya di sisi Bitcoin. Pasokan tetap seimbang 1:1.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu WBTC?",
        html: "<strong>WBTC</strong> (Wrapped Bitcoin) adalah Bitcoin yang dibungkus menjadi token di jaringan Ethereum. Tiap 1 WBTC dijamin oleh 1 BTC asli yang terkunci. Dengan begitu, Bitcoin bisa ikut dipakai di aplikasi keuangan terdesentralisasi yang hidup di Ethereum.",
      },
      {
        type: "video",
        comp: "BridgeVideo",
        title: "Cara Kerja Jembatan Lintas-Rantai",
        caption: "Menelusuri alur lock lalu mint, dan sebaliknya burn lalu unlock, antara dua blockchain.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Kunci sejumlah token di chain A dan lihat bagaimana wrapped token dengan jumlah sama dicetak di chain B, selalu seimbang 1:1.",
      },
      { type: "widget", widget: "SimulatorBridge" },
      {
        type: "chart",
        variant: "bar",
        title: "Invarian Jembatan: Terkunci vs Beredar (ilustrasi)",
        unit: "jumlah token",
        source: "ilustrasi edukatif prinsip 1:1",
        note: "Jembatan yang sehat selalu menjaga jumlah aset terkunci sama persis dengan wrapped token yang beredar.",
        data: [
          { label: "Terkunci di chain A", value: 500, color: "#f7931a" },
          { label: "Wrapped beredar di chain B", value: 500, color: "#627eea" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Peretasan Ronin Bridge, Maret 2022",
        html: "Ronin adalah jembatan yang menghubungkan jaringan game Axie Infinity dengan Ethereum. Pada <strong>Maret 2022</strong>, peretas berhasil menguasai cukup banyak kunci validator jembatan dan menarik aset terkunci tanpa izin, mencuri sekitar <strong>625 juta dolar AS</strong>. Ini menjadi salah satu peretasan kripto terbesar dalam sejarah. Pelajarannya: jembatan menyimpan aset asli yang terkunci dalam jumlah besar di satu tempat, sehingga menjadi sasaran empuk bagi penyerang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah jembatan mengunci 500 token di chain A. Berdasarkan aturan 1:1, berapa wrapped token yang seharusnya beredar di chain B?",
        answer: 500,
        tolerance: 0,
        suffix: "token",
        solution:
          "Aturan lock-and-mint menjaga perbandingan 1:1, jadi 500 token terkunci berarti tepat <strong>500 wrapped token</strong> beredar. Jika jumlah beredar melebihi yang terkunci, itu tanda jembatan bermasalah.",
        hint: "Wrapped token selalu sama persis dengan aset yang terkunci.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap langkah ke arah pemindahan yang benar.",
        buckets: ["Masuk (lock lalu mint)", "Keluar (burn lalu unlock)"],
        items: [
          { text: "Mengunci BTC di jaringan Bitcoin", bucket: "Masuk (lock lalu mint)" },
          { text: "Mencetak WBTC baru di Ethereum", bucket: "Masuk (lock lalu mint)" },
          { text: "Membakar WBTC di Ethereum", bucket: "Keluar (burn lalu unlock)" },
          { text: "Membuka kunci BTC di jaringan Bitcoin", bucket: "Keluar (burn lalu unlock)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Cross-chain bridge menghubungkan blockchain berbeda yang tidak bisa bicara langsung.",
          "Mekanisme lock-and-mint mengunci aset asli lalu mencetak wrapped token 1:1 di rantai tujuan.",
          "WBTC adalah Bitcoin yang dibungkus di Ethereum, dijamin 1 BTC terkunci per 1 WBTC.",
          "Menarik kembali berarti membakar wrapped token lalu membuka kunci aset aslinya.",
          "Jembatan menyimpan aset besar di satu titik, sehingga menjadi target peretasan utama.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi utama cross-chain bridge?",
            options: [
              "Mempercepat satu blockchain",
              "Memindahkan nilai antar blockchain yang berbeda",
              "Mencetak coin baru tanpa batas",
              "Menghapus biaya transaksi",
            ],
            answer: 1,
            explain: "Jembatan menghubungkan rantai berbeda agar nilai bisa berpindah antar jaringan.",
          },
          {
            q: "Apa itu wrapped token?",
            options: [
              "Token yang dipatok ke dolar",
              "Versi tiruan 1:1 dari aset asli di rantai lain",
              "Token yang tidak bisa dipindahkan",
              "Coin asli sebuah blockchain",
            ],
            answer: 1,
            explain: "Wrapped token mewakili aset asli yang terkunci, dengan perbandingan 1:1.",
          },
          {
            q: "Pada mekanisme lock-and-mint, apa yang terjadi di rantai asal?",
            options: [
              "Aset dibakar",
              "Aset dikunci",
              "Aset digandakan",
              "Aset dihapus selamanya",
            ],
            answer: 1,
            explain: "Aset asli dikunci di rantai asal, lalu wrapped token dicetak di rantai tujuan.",
          },
          {
            q: "Apa yang dijamin oleh 1 WBTC?",
            options: [
              "1 Ether terkunci",
              "1 BTC asli yang terkunci",
              "1 dolar AS",
              "Tidak ada jaminan",
            ],
            answer: 1,
            explain: "Setiap 1 WBTC dijamin oleh 1 BTC asli yang dikunci jembatan.",
          },
          {
            q: "Mengapa peretasan Ronin Bridge 2022 begitu besar (sekitar 625 juta dolar AS)?",
            options: [
              "Karena Bitcoin runtuh",
              "Karena jembatan menyimpan banyak aset terkunci di satu tempat",
              "Karena tidak ada yang memakainya",
              "Karena gas fee terlalu mahal",
            ],
            answer: 1,
            explain: "Jembatan memusatkan aset terkunci bernilai besar, menjadikannya sasaran peretasan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "messaging-interop",
    levelId: "crosschain",
    order: 2,
    title: "Cross-Chain Messaging & Interoperability",
    summary:
      "Jembatan tidak hanya memindahkan aset, tapi juga pesan dan instruksi antar rantai. Mengenal interoperability dan tantangan kepercayaannya.",
    durationMin: 13,
    tags: ["crosschain", "messaging", "interoperability", "keamanan"],
    blocks: [
      {
        type: "paragraph",
        html: "Pelajaran sebelumnya membahas memindahkan aset. Tapi jembatan modern bisa lebih dari itu: mereka mengirim <strong>pesan lintas-rantai</strong> (cross-chain messaging). Sebuah aplikasi di satu rantai bisa memerintahkan aplikasi di rantai lain untuk melakukan sesuatu, bukan sekadar memindahkan koin.",
      },
      {
        type: "paragraph",
        html: "Kemampuan banyak blockchain bekerja sama ini disebut <strong>interoperability</strong> (saling-operasi). Tujuannya membuat banyak rantai terasa seperti satu jaringan besar, sehingga pengguna tidak terjebak di satu pulau saja.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Bridge aset vs bridge pesan",
        html: "<strong>Bridge aset</strong> hanya memindahkan nilai, misalnya mengunci BTC lalu mencetak WBTC. <strong>Bridge pesan</strong> mengirim data atau instruksi, misalnya 'jalankan kontrak X di rantai tujuan' atau 'kabari bahwa syarat sudah terpenuhi'. Banyak jembatan canggih melakukan keduanya.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Masalah kepercayaan",
        html: "Saat rantai B menerima pesan dari rantai A, ia harus yakin pesan itu benar-benar sah. Banyak jembatan bergantung pada sekelompok <strong>validator</strong> sebagai perantara tepercaya. Jika kelompok itu diretas atau berkhianat, pesan palsu bisa lolos, persis seperti yang terjadi pada peretasan jembatan besar.",
      },
      {
        type: "video",
        comp: "BridgeVideo",
        title: "Dari Aset ke Pesan Lintas-Rantai",
        caption: "Alur lock-mint yang sama menjadi dasar pengiriman pesan dan instruksi antar rantai.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kerugian Peretasan Jembatan Besar 2022 (juta dolar AS)",
        unit: "juta dolar AS dicuri",
        source: "laporan publik insiden 2022",
        note: "Jembatan menjadi target favorit penyerang karena memusatkan aset dan kepercayaan validator.",
        data: [
          { label: "Ronin (Mar 2022)", value: 625, color: "#ef4444" },
          { label: "Wormhole (Feb 2022)", value: 325, color: "#f59e0b" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Peretasan Wormhole, Februari 2022",
        html: "Wormhole adalah jembatan yang menghubungkan Solana dengan Ethereum dan rantai lain. Pada <strong>Februari 2022</strong>, peretas menemukan celah yang membuat jembatan percaya pada pesan palsu, lalu mencetak wrapped token tanpa benar-benar mengunci aset asli. Mereka mengambil sekitar <strong>325 juta dolar AS</strong>. Kasus ini menegaskan bahwa inti masalah bukan hanya menjaga aset, tapi memastikan tiap pesan lintas-rantai benar-benar sah sebelum dipercaya.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap aktivitas sebagai pekerjaan bridge aset atau bridge pesan.",
        buckets: ["Bridge aset", "Bridge pesan"],
        items: [
          { text: "Mengunci BTC lalu mencetak WBTC 1:1", bucket: "Bridge aset" },
          { text: "Menyuruh kontrak di rantai tujuan menjalankan fungsi tertentu", bucket: "Bridge pesan" },
          { text: "Memindahkan stablecoin dari satu rantai ke rantai lain", bucket: "Bridge aset" },
          { text: "Mengirim sinyal bahwa sebuah syarat telah terpenuhi di rantai lain", bucket: "Bridge pesan" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa total kerugian (dalam juta dolar AS) dari dua peretasan jembatan besar 2022: Ronin sekitar 625 juta dan Wormhole sekitar 325 juta?",
        answer: 950,
        tolerance: 0,
        suffix: "juta dolar AS",
        solution:
          "625 + 325 = <strong>950 juta dolar AS</strong>. Hanya dari dua insiden ini saja, kerugian nyaris menyentuh 1 miliar dolar AS, menunjukkan betapa rawannya jembatan.",
        hint: "Jumlahkan kedua angka kerugian.",
      },
      {
        type: "takeaways",
        items: [
          "Cross-chain messaging mengirim pesan dan instruksi, bukan hanya aset, antar rantai.",
          "Interoperability membuat banyak blockchain terasa seperti satu jaringan besar.",
          "Bridge aset memindahkan nilai; bridge pesan mengirim data atau perintah.",
          "Keamanan jembatan bergantung pada memastikan tiap pesan benar-benar sah.",
          "Wormhole 2022 dibobol lewat pesan palsu, mencuri sekitar 325 juta dolar AS.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dikirim oleh cross-chain messaging selain aset?",
            options: [
              "Hanya gas fee",
              "Pesan, data, atau instruksi antar rantai",
              "Seed phrase pengguna",
              "Tidak ada, hanya aset",
            ],
            answer: 1,
            explain: "Messaging memungkinkan pengiriman pesan dan perintah, bukan sekadar memindahkan koin.",
          },
          {
            q: "Apa arti interoperability dalam konteks blockchain?",
            options: [
              "Satu blockchain yang sangat cepat",
              "Banyak blockchain bisa saling bekerja sama",
              "Menghapus semua jembatan",
              "Sebuah jenis stablecoin",
            ],
            answer: 1,
            explain: "Interoperability adalah kemampuan banyak rantai saling-operasi seperti satu jaringan.",
          },
          {
            q: "Apa perbedaan bridge aset dan bridge pesan?",
            options: [
              "Tidak ada bedanya",
              "Bridge aset memindahkan nilai, bridge pesan mengirim data atau instruksi",
              "Bridge pesan lebih murah selalu",
              "Bridge aset hanya untuk Bitcoin",
            ],
            answer: 1,
            explain: "Bridge aset fokus pada nilai, sedangkan bridge pesan mengirim data dan perintah.",
          },
          {
            q: "Mengapa kepercayaan menjadi tantangan utama jembatan?",
            options: [
              "Karena gas fee mahal",
              "Karena rantai tujuan harus yakin pesan dari rantai asal benar-benar sah",
              "Karena coin terlalu banyak",
              "Karena tidak ada validator",
            ],
            answer: 1,
            explain: "Jika pesan palsu dipercaya, penyerang bisa mencetak token tanpa mengunci aset.",
          },
          {
            q: "Bagaimana peretas membobol Wormhole pada Februari 2022?",
            options: [
              "Menebak seed phrase pengguna",
              "Membuat jembatan percaya pesan palsu lalu mencetak token tanpa jaminan",
              "Menambah pasokan Bitcoin",
              "Mematikan internet Solana",
            ],
            answer: 1,
            explain: "Celah membuat jembatan menerima pesan palsu, sehingga token dicetak tanpa aset terkunci.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cosmos-polkadot",
    levelId: "crosschain",
    order: 3,
    title: "Cosmos & Polkadot",
    summary:
      "Dua pendekatan besar membangun interoperability sejak awal: Cosmos dengan IBC dan hub-and-zone, serta Polkadot dengan relay chain dan parachain.",
    durationMin: 14,
    tags: ["crosschain", "cosmos", "polkadot", "interoperability"],
    blocks: [
      {
        type: "paragraph",
        html: "Jembatan biasa dipasang setelah blockchain sudah jadi, sering kali sebagai tambalan yang rawan diretas. Tapi ada proyek yang merancang interoperability <strong>sejak awal</strong>, agar banyak rantai bisa terhubung dengan aman bawaan. Dua yang paling terkenal adalah <strong>Cosmos</strong> dan <strong>Polkadot</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Cosmos: IBC, hub, dan zone",
        html: "Cosmos memakai protokol <strong>IBC</strong> (Inter-Blockchain Communication) agar rantai-rantai bisa saling kirim pesan. Arsitekturnya disebut <strong>hub-and-zone</strong>: banyak rantai mandiri (<strong>zone</strong>) terhubung lewat rantai penghubung pusat (<strong>hub</strong>). Tiap zone berdaulat penuh, tapi tetap bisa berkomunikasi lewat hub.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Polkadot: relay chain dan parachain",
        html: "Polkadot punya satu rantai induk bernama <strong>relay chain</strong> yang menjaga keamanan bersama. Rantai-rantai lain bernama <strong>parachain</strong> menempel pada relay chain dan berbagi keamanan itu. Karena semua parachain dijaga relay chain yang sama, mereka bisa saling berkomunikasi dengan kepercayaan tinggi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Beda gaya berbagi keamanan",
        html: "Di <strong>Cosmos</strong>, tiap zone mengamankan dirinya sendiri (kedaulatan tinggi, keamanan terpisah). Di <strong>Polkadot</strong>, parachain berbagi keamanan dari relay chain (keamanan terpusat, lebih seragam). Keduanya menuju tujuan yang sama lewat jalan berbeda.",
      },
      { type: "widget", widget: "SimulatorBridge" },
      {
        type: "video",
        comp: "BridgeVideo",
        title: "Banyak Rantai, Satu Jaringan",
        caption: "Gagasan menghubungkan banyak blockchain, dari jembatan tambahan sampai arsitektur bawaan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Membandingkan Model Berbagi Keamanan (ilustrasi)",
        unit: "tingkat keamanan bersama (skala ilustratif 1-10)",
        source: "ilustrasi edukatif perbandingan arsitektur",
        note: "Polkadot menyatukan keamanan di relay chain, sementara Cosmos membiarkan tiap zone mengamankan dirinya.",
        data: [
          { label: "Polkadot (keamanan bersama)", value: 9, color: "#e6007a" },
          { label: "Cosmos (keamanan per zone)", value: 6, color: "#2e3148" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Lahirnya Polkadot dan visi Gavin Wood",
        html: "<strong>Gavin Wood</strong>, salah satu pendiri Ethereum, menerbitkan whitepaper Polkadot pada <strong>2016</strong> dengan visi banyak blockchain saling terhubung lewat satu relay chain. Jaringan utama Polkadot akhirnya diluncurkan pada <strong>Mei 2020</strong>. Di jalur lain, Cosmos meluncurkan jaringan utamanya pada <strong>2019</strong>, lalu protokol IBC mulai aktif pada <strong>2021</strong> sehingga rantai-rantai Cosmos benar-benar bisa saling kirim pesan. Keduanya membuktikan interoperability bisa dirancang sejak fondasi, bukan ditambal belakangan.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tiap istilah dengan ekosistem yang memakainya.",
        pairs: [
          { left: "IBC (Inter-Blockchain Communication)", right: "Cosmos" },
          { left: "Hub-and-zone", right: "Cosmos" },
          { left: "Relay chain", right: "Polkadot" },
          { left: "Parachain", right: "Polkadot" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah relay chain Polkadot menjaga keamanan untuk 10 parachain. Jika ditambah 5 parachain lagi, berapa total parachain yang berbagi keamanan relay chain itu?",
        answer: 15,
        tolerance: 0,
        suffix: "parachain",
        solution:
          "10 + 5 = <strong>15 parachain</strong>. Semuanya berbagi keamanan dari satu relay chain yang sama, sehingga bisa saling berkomunikasi dengan kepercayaan tinggi.",
        hint: "Jumlahkan parachain awal dengan tambahannya.",
      },
      {
        type: "takeaways",
        items: [
          "Cosmos dan Polkadot merancang interoperability sejak awal, bukan sebagai tambalan.",
          "Cosmos memakai IBC dengan arsitektur hub-and-zone; tiap zone berdaulat dan mengamankan dirinya.",
          "Polkadot memakai relay chain yang menjaga keamanan bersama untuk banyak parachain.",
          "Cosmos menekankan kedaulatan tiap rantai; Polkadot menekankan keamanan terpusat yang dibagikan.",
          "Polkadot dirancang oleh Gavin Wood (whitepaper 2016, mainnet 2020); IBC Cosmos aktif 2021.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Protokol apa yang dipakai Cosmos untuk komunikasi antar rantai?",
            options: ["Relay chain", "IBC", "Parachain", "WBTC"],
            answer: 1,
            explain: "Cosmos memakai IBC (Inter-Blockchain Communication) untuk menghubungkan rantai-rantainya.",
          },
          {
            q: "Apa istilah arsitektur utama Cosmos?",
            options: ["Relay dan parachain", "Hub dan zone", "Lock dan mint", "Burn dan unlock"],
            answer: 1,
            explain: "Cosmos memakai pola hub-and-zone: banyak zone mandiri terhubung lewat hub.",
          },
          {
            q: "Apa fungsi relay chain pada Polkadot?",
            options: [
              "Mencetak stablecoin",
              "Menjaga keamanan bersama bagi semua parachain",
              "Menyimpan seed phrase",
              "Mengganti Bitcoin",
            ],
            answer: 1,
            explain: "Relay chain adalah rantai induk yang memberikan keamanan bersama kepada parachain.",
          },
          {
            q: "Apa beda mendasar pendekatan Cosmos dan Polkadot soal keamanan?",
            options: [
              "Keduanya identik",
              "Cosmos: tiap zone mengamankan diri; Polkadot: parachain berbagi keamanan relay chain",
              "Cosmos lebih lambat",
              "Polkadot tidak punya keamanan",
            ],
            answer: 1,
            explain: "Cosmos menekankan kedaulatan per zone, Polkadot menekankan keamanan terpusat bersama.",
          },
          {
            q: "Siapa tokoh yang menerbitkan whitepaper Polkadot pada 2016?",
            options: ["Satoshi Nakamoto", "Gavin Wood", "Laszlo Hanyecz", "David Chaum"],
            answer: 1,
            explain: "Gavin Wood, salah satu pendiri Ethereum, menulis whitepaper Polkadot pada 2016.",
          },
        ],
      },
    ],
  },
];
