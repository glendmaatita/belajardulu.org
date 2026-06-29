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
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bitcoin.svg?width=400",
        alt: "Logo Bitcoin",
        caption: "WBTC adalah Bitcoin yang dibungkus menjadi token di jaringan Ethereum, dijamin 1:1 oleh BTC asli yang terkunci.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi kasus: 250 WBTC untuk dipakai di DeFi",
        html: "Seorang pemegang Bitcoin ingin memakai asetnya di aplikasi DeFi Ethereum tanpa menjual BTC. Ia menyetor <strong>250 BTC</strong> ke kustodian jembatan. Kustodian mengunci 250 BTC, lalu mencetak <strong>250 WBTC</strong> di Ethereum. Sekarang 250 WBTC itu bisa dijadikan agunan pinjaman atau ditaruh di kolam likuiditas, sementara 250 BTC asli tetap terkunci aman. Saat ia ingin kembali memegang Bitcoin, 250 WBTC dibakar dan 250 BTC dibuka kuncinya. Pasokan tetap seimbang 1:1 sepanjang proses.",
      },
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
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blockchain_workflow.png?width=400",
        alt: "Diagram alur kerja blockchain",
        caption: "Pesan lintas-rantai harus mengikuti alur yang ketat agar rantai tujuan yakin bahwa pesan benar-benar sah.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi kasus: pesan 'syarat terpenuhi' antar rantai",
        html: "Sebuah aplikasi asuransi panen hidup di rantai A, sedangkan dana ganti rugi disimpan di rantai B. Saat oracle di rantai A memastikan curah hujan di bawah ambang, aplikasi mengirim <strong>pesan lintas-rantai</strong> ke rantai B: 'syarat klaim terpenuhi, cairkan dana'. Tidak ada koin yang berpindah saat pesan dikirim; yang berpindah adalah <strong>instruksi</strong>. Kontrak di rantai B baru mencairkan dana setelah yakin pesan itu sah lewat verifikasi validator. Inilah inti bridge pesan: memindahkan perintah, bukan sekadar nilai.",
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
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cosmos_logo.svg?width=400",
        alt: "Logo ekosistem Cosmos",
        caption: "Cosmos menyebut dirinya 'Internet of Blockchains', menghubungkan banyak rantai mandiri lewat protokol IBC.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi kasus: satu zone gangguan, yang lain tetap jalan",
        html: "Bayangkan ekosistem Cosmos dengan satu hub dan 3 zone: zone bursa, zone game, dan zone identitas. Suatu hari zone game mengalami gangguan dan berhenti memproduksi blok. Karena tiap zone <strong>berdaulat dan mengamankan dirinya sendiri</strong>, gangguan itu tidak menjatuhkan zone bursa maupun zone identitas; keduanya tetap berjalan dan tetap bisa berkomunikasi lewat hub. Bandingkan dengan model keamanan terpusat Polkadot, di mana relay chain menjaga semua parachain sekaligus. Dua filosofi yang menukar kedaulatan dengan keseragaman.",
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
  // ============================================================
  {
    id: "dunia-multichain",
    levelId: "crosschain",
    order: 4,
    title: "Dunia Multi-Chain & Fragmentasi Likuiditas",
    summary:
      "Mengapa ada begitu banyak blockchain L1, dan bagaimana aset serta likuiditas yang terpisah-pisah memunculkan kebutuhan menjembatani antar rantai.",
    durationMin: 14,
    tags: ["crosschain", "multichain", "likuiditas", "L1"],
    blocks: [
      {
        type: "paragraph",
        html: "Dahulu dunia kripto seolah hanya Bitcoin lalu Ethereum. Kini ada puluhan <strong>blockchain lapis-1 (L1)</strong> yang berdiri sendiri: Solana, Avalanche, BNB Chain, dan banyak lagi. Mengapa muncul begitu banyak rantai, dan apa konsekuensinya bagi pengguna?",
      },
      {
        type: "paragraph",
        html: "Setiap L1 punya aturan, komunitas, dan asetnya sendiri. Akibatnya, nilai dan likuiditas <strong>tersebar</strong> di banyak pulau yang terpisah. Inilah yang disebut <strong>fragmentasi likuiditas</strong>: uang yang seharusnya bisa bekerja sama justru terpecah di banyak tempat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Apa itu fragmentasi likuiditas?",
        html: "<strong>Likuiditas</strong> adalah seberapa mudah sebuah aset diperjualbelikan tanpa menggeser harga. Saat aset yang sama (misalnya stablecoin) tersebar di banyak rantai dan tiap rantai hanya punya sebagian kecil, tiap kolam menjadi dangkal. Transaksi besar jadi mahal karena harga mudah bergeser. Menyatukan likuiditas yang terpecah inilah salah satu alasan utama kita butuh <strong>jembatan</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kenapa orang membuat L1 baru?",
        html: "Sebuah L1 baru biasanya menjanjikan sesuatu yang berbeda: <strong>biaya lebih murah</strong>, transaksi lebih cepat, atau model keamanan lain. Saat satu rantai padat dan mahal, pengembang dan pengguna mencari alternatif, sehingga rantai-rantai baru tumbuh.",
      },
      {
        type: "video",
        comp: "BridgeVideo",
        title: "Menyatukan Pulau-Pulau Likuiditas",
        caption: "Saat aset tersebar di banyak rantai, jembatan menjadi penghubung agar nilai bisa berpindah dan bertemu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cosmos_logo.svg?width=400",
        alt: "Logo ekosistem Cosmos",
        caption: "Cosmos membayangkan banyak rantai mandiri yang saling terhubung, menjawab dunia yang makin multi-chain.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Likuiditas Terpecah vs Tersatukan (ilustrasi)",
        unit: "kedalaman kolam (skala ilustratif)",
        source: "ilustrasi edukatif konsep fragmentasi",
        note: "Total dana sama, tetapi saat terpecah di banyak rantai tiap kolam jadi dangkal; jembatan membantu menyatukan kembali.",
        data: [
          { label: "Rantai A (terpecah)", value: 30, color: "#94a3b8" },
          { label: "Rantai B (terpecah)", value: 25, color: "#94a3b8" },
          { label: "Rantai C (terpecah)", value: 20, color: "#94a3b8" },
          { label: "Tersatukan lewat jembatan", value: 75, color: "#22c55e" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Gunakan simulator jembatan untuk membayangkan bagaimana memindahkan aset antar rantai membantu menyatukan likuiditas yang terpisah.",
      },
      { type: "widget", widget: "SimulatorBridge" },
      {
        type: "case",
        title: "Studi kasus: stablecoin yang sama, tiga rantai berbeda",
        html: "Sebuah proyek menyebarkan stablecoinnya di tiga rantai dengan total <strong>90 juta dolar AS</strong> likuiditas: 40 juta di rantai A, 30 juta di rantai B, dan 20 juta di rantai C. Seorang pengguna ingin menukar <strong>10 juta dolar AS</strong> di rantai C. Karena kolam C hanya 20 juta, tukar sebesar itu menggeser harga cukup jauh (slippage besar). Seandainya seluruh 90 juta menyatu dalam satu kolam, tukar 10 juta nyaris tak menggeser harga. Inilah ongkos nyata dari fragmentasi likuiditas.",
      },
      {
        type: "case",
        title: "Sejarah: 'Alt L1 season' 2021",
        html: "Sepanjang <strong>2021</strong>, biaya gas di Ethereum melonjak tinggi saat jaringan padat oleh DeFi dan NFT. Hal ini memicu yang dijuluki <strong>'alt L1 season'</strong>: bangkitnya banyak blockchain lapis-1 alternatif yang menawarkan biaya lebih murah dan transaksi lebih cepat. <strong>Solana</strong>, <strong>Avalanche</strong> (mainnet 2020, ramai 2021), dan <strong>BNB Chain</strong> (saat itu Binance Smart Chain, diluncurkan 2020) tumbuh pesat menarik pengguna dan dana. Akibatnya likuiditas makin terpecah ke banyak rantai, dan kebutuhan akan jembatan lintas-rantai justru kian mendesak.",
      },
      {
        type: "calcExercise",
        prompt:
          "Stablecoin tersebar di tiga rantai: 40 juta, 30 juta, dan 20 juta dolar AS. Berapa total likuiditas (dalam juta dolar AS) jika seluruhnya disatukan?",
        answer: 90,
        tolerance: 0,
        suffix: "juta dolar AS",
        solution:
          "40 + 30 + 20 = <strong>90 juta dolar AS</strong>. Dana yang sama persis terasa jauh lebih kuat saat menyatu dalam satu kolam dibandingkan terpecah di tiga rantai.",
        hint: "Jumlahkan ketiga angka likuiditas.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan: ciri dunia multi-chain yang terfragmentasi, atau manfaat menyatukan likuiditas.",
        buckets: ["Fragmentasi (terpecah)", "Penyatuan (manfaat jembatan)"],
        items: [
          { text: "Aset yang sama tersebar di banyak rantai dengan kolam dangkal", bucket: "Fragmentasi (terpecah)" },
          { text: "Transaksi besar menggeser harga karena likuiditas tipis", bucket: "Fragmentasi (terpecah)" },
          { text: "Nilai bisa berpindah antar rantai sehingga kolam lebih dalam", bucket: "Penyatuan (manfaat jembatan)" },
          { text: "Slippage mengecil karena dana terkumpul di satu tempat", bucket: "Penyatuan (manfaat jembatan)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kini ada banyak blockchain L1, bukan hanya Bitcoin dan Ethereum.",
          "L1 baru biasanya menjanjikan biaya lebih murah, kecepatan, atau model keamanan berbeda.",
          "Fragmentasi likuiditas terjadi saat aset yang sama tersebar di banyak rantai dengan kolam dangkal.",
          "Likuiditas yang terpecah membuat transaksi besar mahal karena harga mudah bergeser.",
          "Alt L1 season 2021 dipicu gas Ethereum yang mahal, memperdalam kebutuhan akan jembatan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud blockchain L1 (lapis-1)?",
            options: [
              "Sebuah dompet kripto",
              "Blockchain dasar yang berdiri sendiri seperti Ethereum atau Solana",
              "Sebuah jenis stablecoin",
              "Aplikasi DeFi",
            ],
            answer: 1,
            explain: "L1 adalah blockchain dasar yang berdiri sendiri dengan aturan dan keamanannya sendiri.",
          },
          {
            q: "Apa itu fragmentasi likuiditas?",
            options: [
              "Likuiditas yang terlalu besar di satu rantai",
              "Aset yang sama tersebar di banyak rantai sehingga tiap kolam jadi dangkal",
              "Sebuah serangan peretas",
              "Cara mencetak coin baru",
            ],
            answer: 1,
            explain: "Saat aset terpecah di banyak rantai, tiap kolam dangkal dan transaksi besar jadi mahal.",
          },
          {
            q: "Mengapa banyak L1 baru bermunculan?",
            options: [
              "Karena Bitcoin dihapus",
              "Karena menawarkan biaya lebih murah, lebih cepat, atau model keamanan berbeda",
              "Karena pemerintah mewajibkan",
              "Karena tidak butuh keamanan",
            ],
            answer: 1,
            explain: "L1 baru menarik pengguna dengan menjanjikan biaya, kecepatan, atau keamanan yang berbeda.",
          },
          {
            q: "Apa pemicu utama 'alt L1 season' 2021?",
            options: [
              "Bitcoin halving",
              "Biaya gas Ethereum yang mahal karena jaringan padat",
              "Larangan kripto global",
              "Runtuhnya stablecoin",
            ],
            answer: 1,
            explain: "Gas Ethereum yang mahal pada 2021 mendorong pengguna mencari L1 alternatif yang lebih murah.",
          },
          {
            q: "Apa dampak fragmentasi likuiditas pada transaksi besar?",
            options: [
              "Tidak ada dampak",
              "Harga mudah bergeser (slippage besar) karena kolam dangkal",
              "Transaksi menjadi gratis",
              "Aset menghilang",
            ],
            answer: 1,
            explain: "Kolam yang dangkal membuat transaksi besar menggeser harga lebih jauh, sehingga lebih mahal.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "keamanan-bridge",
    levelId: "crosschain",
    order: 5,
    title: "Keamanan Bridge & Peretasan Besar",
    summary:
      "Mengapa jembatan menjadi sasaran empuk peretas, bagaimana model kepercayaannya, dan pelajaran dari peretasan terbesar dalam sejarah kripto.",
    durationMin: 15,
    tags: ["crosschain", "keamanan", "peretasan", "bridge"],
    blocks: [
      {
        type: "paragraph",
        html: "Jembatan adalah infrastruktur paling rawan di dunia kripto. Untuk bisa mencetak wrapped token, jembatan harus <strong>menyimpan aset asli yang terkunci</strong> dalam jumlah besar di satu kontrak. Tumpukan dana ini ibarat brankas raksasa yang menggoda setiap penyerang.",
      },
      {
        type: "paragraph",
        html: "Sepanjang sejarah, sebagian besar dana kripto yang dicuri justru hilang lewat <strong>peretasan jembatan</strong>, bukan lewat blockchain dasarnya. Memahami mengapa jembatan rapuh membantu kita menilai risiko sebelum memindahkan aset.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Kenapa jembatan jadi target empuk?",
        html: "Tiga alasan utama: (1) <strong>dana terpusat</strong>, ratusan juta dolar terkunci di satu kontrak; (2) <strong>kode rumit</strong>, jembatan menyambungkan dua sistem berbeda sehingga celah lebih mudah muncul; (3) <strong>titik kepercayaan</strong>, banyak jembatan bergantung pada sekelompok validator yang, jika dikuasai, bisa menandatangani penarikan palsu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Model kepercayaan jembatan",
        html: "Jembatan <strong>trusted</strong> (tepercaya) mengandalkan sekelompok validator atau kustodian; aman selama kelompok itu jujur dan kuncinya tak bocor. Jembatan <strong>trustless</strong> (tanpa perantara) berusaha membuktikan keabsahan lewat kode dan kriptografi, sehingga tidak bergantung pada niat baik segelintir pihak. Makin sedikit pihak yang harus dipercaya, makin kecil permukaan serangan.",
      },
      {
        type: "video",
        comp: "BridgeVideo",
        title: "Di Mana Letak Risiko Jembatan?",
        caption: "Aset terkunci dan titik kepercayaan validator menjadi sasaran utama peretas.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana aset yang terkunci di satu sisi menumpuk menjadi nilai besar; bayangkan itulah brankas yang diincar penyerang.",
      },
      { type: "widget", widget: "SimulatorBridge" },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blockchain_workflow.png?width=400",
        alt: "Diagram alur kerja blockchain",
        caption: "Celah pada satu langkah verifikasi bisa membuat jembatan menerima penarikan palsu.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tiga Peretasan Jembatan Terbesar 2022 (juta dolar AS)",
        unit: "juta dolar AS dicuri",
        source: "laporan publik insiden 2022",
        note: "Ketiganya terjadi pada tahun yang sama, menjadikan 2022 tahun kelam bagi keamanan jembatan.",
        data: [
          { label: "Ronin (Mar 2022)", value: 625, color: "#ef4444" },
          { label: "Wormhole (Feb 2022)", value: 325, color: "#f59e0b" },
          { label: "Nomad (Agu 2022)", value: 190, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi kasus: brankas 800 juta dolar di satu kontrak",
        html: "Sebuah jembatan mengunci <strong>800 juta dolar AS</strong> aset pengguna dalam satu kontrak. Keamanannya bergantung pada 9 validator, dan penarikan sah jika 5 dari 9 menandatangani. Jika penyerang berhasil menguasai <strong>5 kunci</strong> saja, ia bisa menandatangani penarikan palsu dan menguras seluruh 800 juta dolar. Inilah bahaya memusatkan dana besar di belakang ambang tanda tangan yang bisa dijebol.",
      },
      {
        type: "case",
        title: "Sejarah: tiga peretasan jembatan besar 2022",
        html: "Tahun <strong>2022</strong> mencatat rentetan peretasan jembatan terburuk. <strong>Wormhole</strong> (Februari 2022) dibobol lewat pesan palsu sehingga peretas mencetak token tanpa jaminan, sekitar <strong>325 juta dolar AS</strong>. <strong>Ronin Bridge</strong> milik Axie Infinity (Maret 2022) kehilangan sekitar <strong>625 juta dolar AS</strong> setelah penyerang menguasai mayoritas kunci validator. Lalu <strong>Nomad</strong> (Agustus 2022) dikuras hampir <strong>190 juta dolar AS</strong> akibat celah yang membuat banyak orang ramai-ramai menarik dana yang bukan miliknya. Pelajaran besarnya: jembatan memusatkan dana dan kepercayaan, sehingga satu celah bisa berakibat fatal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah jembatan mengunci 800 juta dolar AS. Jika peretas berhasil menguras 75 persen dana terkunci, berapa juta dolar AS yang dicuri?",
        answer: 600,
        tolerance: 0,
        suffix: "juta dolar AS",
        solution:
          "75 persen dari 800 juta = 0,75 x 800 = <strong>600 juta dolar AS</strong>. Karena dana terpusat, satu celah bisa menguras sebagian besar brankas sekaligus.",
        hint: "Hitung 0,75 dikali 800.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa total kerugian (juta dolar AS) dari tiga peretasan 2022: Ronin 625, Wormhole 325, dan Nomad 190?",
        answer: 1140,
        tolerance: 0,
        suffix: "juta dolar AS",
        solution:
          "625 + 325 + 190 = <strong>1.140 juta dolar AS</strong>, atau lebih dari 1,1 miliar dolar AS hanya dari tiga insiden jembatan dalam satu tahun.",
        hint: "Jumlahkan ketiga angka kerugian.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tiap peretasan jembatan dengan perkiraan kerugiannya.",
        pairs: [
          { left: "Ronin (Maret 2022)", right: "sekitar 625 juta dolar AS" },
          { left: "Wormhole (Februari 2022)", right: "sekitar 325 juta dolar AS" },
          { left: "Nomad (Agustus 2022)", right: "sekitar 190 juta dolar AS" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Jembatan menjadi target utama karena memusatkan dana besar di satu kontrak.",
          "Kode jembatan rumit dan menyambung dua sistem, sehingga celah lebih mudah muncul.",
          "Model trusted bergantung pada validator; model trustless berusaha membuktikan keabsahan lewat kode.",
          "Tahun 2022 mencatat peretasan jembatan terbesar: Ronin, Wormhole, dan Nomad.",
          "Sebelum memindahkan aset, nilai dulu seberapa banyak pihak yang harus kamu percayai.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa jembatan menjadi sasaran empuk peretas?",
            options: [
              "Karena tidak ada yang memakainya",
              "Karena memusatkan dana besar dan titik kepercayaan di satu tempat",
              "Karena gas fee-nya gratis",
              "Karena tidak punya kode",
            ],
            answer: 1,
            explain: "Jembatan menumpuk aset terkunci bernilai besar dan bergantung pada validator tertentu.",
          },
          {
            q: "Apa beda jembatan trusted dan trustless?",
            options: [
              "Tidak ada bedanya",
              "Trusted mengandalkan sekelompok validator; trustless membuktikan keabsahan lewat kode",
              "Trustless selalu lebih lambat",
              "Trusted tidak menyimpan aset",
            ],
            answer: 1,
            explain: "Trusted bergantung pada niat baik validator, trustless mengurangi pihak yang harus dipercaya.",
          },
          {
            q: "Peretasan jembatan mana yang terbesar pada 2022?",
            options: [
              "Nomad (sekitar 190 juta dolar AS)",
              "Ronin (sekitar 625 juta dolar AS)",
              "Wormhole (sekitar 325 juta dolar AS)",
              "Tidak ada yang besar",
            ],
            answer: 1,
            explain: "Ronin Bridge kehilangan sekitar 625 juta dolar AS, yang terbesar di antara ketiganya.",
          },
          {
            q: "Bagaimana Wormhole dibobol pada Februari 2022?",
            options: [
              "Menebak seed phrase pengguna",
              "Lewat pesan palsu sehingga token dicetak tanpa jaminan",
              "Mematikan internet",
              "Menambah pasokan Bitcoin",
            ],
            answer: 1,
            explain: "Celah membuat jembatan menerima pesan palsu, sehingga token dicetak tanpa aset terkunci.",
          },
          {
            q: "Apa pelajaran utama dari rentetan peretasan jembatan 2022?",
            options: [
              "Blockchain dasar selalu yang dibobol",
              "Memusatkan dana dan kepercayaan membuat satu celah bisa berakibat fatal",
              "Jembatan tidak pernah berisiko",
              "Validator tidak penting",
            ],
            answer: 1,
            explain: "Dana dan kepercayaan yang terpusat membuat satu kelemahan bisa menguras seluruh brankas.",
          },
        ],
      },
    ],
  },
];
