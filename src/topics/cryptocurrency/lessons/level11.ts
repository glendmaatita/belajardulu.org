import type { Lesson } from "../../../types";

export const level11: Lesson[] = [
  // ============================================================
  {
    id: "nft-metadata-ipfs",
    levelId: "nftweb3",
    order: 1,
    title: "NFT, Metadata & IPFS",
    summary:
      "NFT adalah token unik yang membuktikan kepemilikan satu aset digital. Pahami metadata, content addressing (CID), dan penyimpanan IPFS.",
    durationMin: 14,
    tags: ["nft", "web3", "ipfs", "metadata"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>NFT</strong> (non-fungible token) adalah token <strong>unik</strong> yang tidak bisa ditukar satu lawan satu dengan token lain yang identik. Bila satu Bitcoin selalu sama nilainya dengan Bitcoin lain (fungible), tiap NFT punya nomor identitas sendiri yang menunjuk ke satu aset digital tertentu. Standar paling umum di Ethereum adalah <strong>ERC-721</strong>.",
      },
      {
        type: "paragraph",
        html: "NFT sendiri biasanya tidak menyimpan gambar di dalam blockchain (terlalu mahal). Yang dicatat on-chain adalah nomor token dan sebuah tautan ke <strong>metadata</strong>, yaitu berkas berisi nama, deskripsi, dan atribut karya. Metadata serta gambarnya sering disimpan <strong>off-chain</strong> di <strong>IPFS</strong>, jaringan penyimpanan terdesentralisasi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Content addressing & CID",
        html: "IPFS mengalamati berkas bukan dari lokasinya, melainkan dari <strong>isinya</strong>. Tiap berkas menghasilkan sidik jari unik bernama <strong>CID</strong> (content identifier). Jika satu byte saja berubah, CID-nya ikut berubah. Inilah yang membuat tautan NFT sulit dipalsukan: CID menjamin gambar yang ditunjuk persis seperti saat NFT dibuat.",
      },
      {
        type: "video",
        comp: "NFTKepemilikanVideo",
        title: "NFT & Kepemilikan Digital",
        caption: "Bagaimana satu NFT unik menunjuk ke metadata di IPFS, dan bagaimana kepemilikan berpindah antar dompet.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Banyak NFT memberi <strong>royalti</strong> ke kreator setiap kali karya dijual ulang. Lihat berapa yang diterima kreator saat sebuah karya berpindah tangan beberapa kali.",
      },
      { type: "widget", widget: "SimulatorRoyaltiNFT" },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum 2014",
        caption: "Mayoritas NFT lahir di Ethereum lewat standar ERC-721; logika kepemilikan dan tautan metadata dicatat di jaringan ini.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Sejarah: CryptoKitties 2017 memopulerkan NFT",
        html: "Pada akhir <strong>2017</strong>, sebuah permainan bernama <strong>CryptoKitties</strong> memungkinkan orang membeli, mengembangbiakkan, dan menjual kucing digital, masing-masing sebuah NFT unik. Permainan ini sangat populer sampai sempat <strong>memacetkan jaringan Ethereum</strong>: transaksi menumpuk dan biaya gas melonjak. CryptoKitties jadi salah satu contoh pertama yang memperkenalkan NFT ke publik luas dan menunjukkan bahwa aset digital unik punya pasar nyata.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah NFT terjual seharga 10 ETH. Kreator menetapkan royalti 5% pada tiap penjualan ulang. Berapa ETH yang diterima kreator dari penjualan ini?",
        answer: 0.5,
        tolerance: 0,
        suffix: "ETH",
        solution:
          "5% x 10 ETH = 0,05 x 10 = <strong>0,5 ETH</strong>. Sisanya, 9,5 ETH, diterima penjual. Royalti otomatis ini diatur oleh smart contract NFT.",
        hint: "Kalikan harga jual dengan persentase royalti.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap hal sebagai disimpan on-chain atau off-chain (IPFS).",
        buckets: ["On-chain", "Off-chain (IPFS)"],
        items: [
          { text: "Nomor identitas token (token ID)", bucket: "On-chain" },
          { text: "Catatan siapa pemilik token saat ini", bucket: "On-chain" },
          { text: "Berkas gambar resolusi tinggi", bucket: "Off-chain (IPFS)" },
          { text: "Berkas metadata JSON berisi atribut karya", bucket: "Off-chain (IPFS)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "NFT adalah token unik (non-fungible), umumnya memakai standar ERC-721 di Ethereum.",
          "Yang dicatat on-chain biasanya hanya nomor token dan tautan ke metadata.",
          "Metadata dan gambar sering disimpan off-chain di IPFS, penyimpanan terdesentralisasi.",
          "CID adalah sidik jari isi berkas; jika isi berubah, CID berubah, sehingga sulit dipalsukan.",
          "CryptoKitties (2017) memopulerkan NFT dan sempat memacetkan jaringan Ethereum.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti NFT bersifat non-fungible?",
            options: [
              "Bisa ditukar satu lawan satu dengan token identik",
              "Setiap token unik dan tidak bisa saling menggantikan",
              "Selalu berupa mata uang",
              "Tidak punya pemilik",
            ],
            answer: 1,
            explain: "Non-fungible berarti tiap token punya identitas sendiri dan tidak dapat ditukar secara setara.",
          },
          {
            q: "Apa yang biasanya dicatat di dalam blockchain untuk sebuah NFT?",
            options: [
              "Seluruh berkas gambar resolusi tinggi",
              "Nomor token dan tautan ke metadata",
              "Nomor rekening bank pemilik",
              "Tidak ada yang dicatat",
            ],
            answer: 1,
            explain: "Menyimpan gambar penuh on-chain terlalu mahal; yang dicatat adalah nomor token dan tautan metadata.",
          },
          {
            q: "Apa fungsi CID di IPFS?",
            options: [
              "Menyimpan kata sandi pengguna",
              "Sidik jari unik dari isi berkas untuk mengalamatinya",
              "Nama pemilik NFT",
              "Biaya transaksi",
            ],
            answer: 1,
            explain: "CID adalah content identifier; ia berasal dari isi berkas, sehingga isi berubah berarti CID berubah.",
          },
          {
            q: "Mengapa metadata NFT sering disimpan di IPFS, bukan on-chain?",
            options: [
              "Agar gratis selamanya tanpa jaringan",
              "Karena menyimpan berkas berat on-chain sangat mahal",
              "Karena IPFS milik satu perusahaan",
              "Agar NFT tidak bisa dijual",
            ],
            answer: 1,
            explain: "Berkas berat seperti gambar mahal disimpan on-chain, jadi diletakkan off-chain di IPFS.",
          },
          {
            q: "Apa dampak populernya CryptoKitties pada 2017?",
            options: [
              "Menutup jaringan Bitcoin",
              "Memacetkan jaringan Ethereum karena lonjakan transaksi",
              "Menghapus semua NFT",
              "Membuat Ethereum gratis",
            ],
            answer: 1,
            explain: "Lonjakan permainan ini membuat transaksi Ethereum menumpuk dan biaya gas melonjak.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "wallet-login-did",
    levelId: "nftweb3",
    order: 2,
    title: "Wallet Login & Decentralized Identity",
    summary:
      "Di Web3, kamu masuk ke aplikasi dengan menandatangani pesan memakai dompet, tanpa kata sandi. Kenali decentralized identity yang kamu kendalikan sendiri.",
    durationMin: 13,
    tags: ["web3", "wallet", "identity", "did"],
    blocks: [
      {
        type: "paragraph",
        html: "Di web biasa (Web2), kamu membuat akun dengan email dan kata sandi, lalu data identitasmu disimpan di server perusahaan. Di <strong>Web3</strong>, kamu bisa masuk ke aplikasi cukup dengan <strong>dompet kripto</strong>: aplikasi meminta dompet menandatangani sebuah pesan, dan tanda tangan itu membuktikan kamu pemilik address tersebut. Tidak ada kata sandi yang dikirim atau disimpan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Login tanpa kata sandi",
        html: "Dompet menyimpan <strong>kunci privat</strong>. Saat login, aplikasi mengirim pesan acak; dompet <strong>menandatanganinya</strong> dengan kunci privat tanpa pernah membocorkan kunci itu. Aplikasi memverifikasi tanda tangan terhadap address publikmu. Bukti kepemilikan tercapai tanpa server menyimpan rahasia apa pun.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Decentralized identity (DID)",
        html: "<strong>Decentralized identity</strong> adalah identitas yang <strong>dikendalikan oleh pengguna</strong>, bukan oleh satu perusahaan. Kamu membawa identitas yang sama lintas aplikasi lewat dompetmu, dan kamu memutuskan data apa yang dibagikan. Tidak ada satu platform yang bisa menghapus atau mengunci identitasmu secara sepihak.",
      },
      {
        type: "video",
        comp: "NFTKepemilikanVideo",
        title: "Kepemilikan yang Berpindah",
        caption: "Dompet sebagai kunci identitas: aset dan kepemilikan menempel pada address, bukan pada akun perusahaan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Kendali penuh berarti tanggung jawab penuh",
        html: "Karena identitas dan aset menempel pada dompet, kehilangan <strong>kunci privat</strong> atau <strong>seed phrase</strong> berarti kehilangan akses selamanya. Tidak ada tombol 'lupa kata sandi'. Jaga seed phrase seperti menjaga seluruh identitas digitalmu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum-icon-purple.svg?width=400",
        alt: "Ikon Ethereum berwarna ungu",
        caption: "Dompet pada jaringan Ethereum menjadi identitas digital: kamu login dengan menandatangani pesan, bukan dengan kata sandi.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Sejarah: Sign-In with Ethereum (EIP-4361, 2021)",
        html: "Pada <strong>2021</strong>, komunitas Ethereum membakukan cara login pakai dompet lewat standar <strong>Sign-In with Ethereum (EIP-4361)</strong>. Sebelumnya tiap aplikasi membuat cara tanda tangan sendiri yang membingungkan. Standar ini menyeragamkan format pesan yang ditandatangani, sehingga pengguna tahu persis apa yang mereka setujui, dan pengembang punya pola login yang aman dan konsisten tanpa menyimpan kata sandi.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri sebagai login Web2 (akun perusahaan) atau login Web3 (dompet).",
        buckets: ["Login Web2", "Login Web3"],
        items: [
          { text: "Masuk dengan email dan kata sandi", bucket: "Login Web2" },
          { text: "Rahasia disimpan di server perusahaan", bucket: "Login Web2" },
          { text: "Masuk dengan menandatangani pesan memakai dompet", bucket: "Login Web3" },
          { text: "Identitas dikendalikan pengguna lintas aplikasi", bucket: "Login Web3" },
          { text: "Perusahaan bisa mereset atau mengunci akunmu", bucket: "Login Web2" },
          { text: "Tidak ada kata sandi yang dikirim atau disimpan", bucket: "Login Web3" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah aplikasi Web2 menyimpan 12.000 kata sandi pengguna di servernya. Jika beralih ke login Web3, berapa kata sandi pengguna yang perlu disimpan aplikasi itu?",
        answer: 0,
        tolerance: 0,
        suffix: "kata sandi",
        solution:
          "Pada login Web3 tidak ada kata sandi yang dikirim atau disimpan; bukti kepemilikan datang dari tanda tangan dompet. Jadi jawabannya <strong>0</strong>. Ini mengurangi risiko kebocoran basis data kata sandi.",
        hint: "Pikirkan apa yang sebenarnya disimpan server saat login pakai tanda tangan dompet.",
      },
      {
        type: "takeaways",
        items: [
          "Login Web3 memakai tanda tangan dompet, bukan kata sandi yang dikirim ke server.",
          "Kunci privat menandatangani pesan tanpa pernah bocor; aplikasi cukup memverifikasi tanda tangan.",
          "Decentralized identity (DID) dikendalikan pengguna dan dibawa lintas aplikasi.",
          "Tidak menyimpan kata sandi mengurangi risiko kebocoran basis data.",
          "Kendali penuh berarti tanggung jawab penuh menjaga kunci privat dan seed phrase.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bagaimana cara login khas Web3?",
            options: [
              "Mengirim kata sandi ke server",
              "Menandatangani pesan dengan dompet untuk membuktikan kepemilikan address",
              "Mengisi formulir kartu kredit",
              "Memindai sidik jari ke perusahaan",
            ],
            answer: 1,
            explain: "Dompet menandatangani pesan dengan kunci privat; aplikasi memverifikasi tanda tangan itu.",
          },
          {
            q: "Apa yang TIDAK terjadi saat menandatangani pesan login Web3?",
            options: [
              "Pesan ditandatangani kunci privat",
              "Kunci privat dikirim ke aplikasi",
              "Aplikasi memverifikasi tanda tangan",
              "Address publik dipakai untuk verifikasi",
            ],
            answer: 1,
            explain: "Kunci privat tidak pernah dikirim atau dibocorkan; hanya tanda tangannya yang dibagikan.",
          },
          {
            q: "Apa inti dari decentralized identity?",
            options: [
              "Identitas dimiliki satu perusahaan besar",
              "Identitas dikendalikan oleh pengguna sendiri",
              "Identitas hanya berlaku di satu aplikasi",
              "Identitas tanpa pemilik",
            ],
            answer: 1,
            explain: "DID menempatkan kendali identitas di tangan pengguna, bukan satu platform terpusat.",
          },
          {
            q: "Apa keuntungan keamanan login tanpa kata sandi?",
            options: [
              "Server tetap menyimpan banyak rahasia",
              "Tidak ada basis data kata sandi yang bisa bocor",
              "Pengguna tidak perlu dompet",
              "Transaksi jadi gratis",
            ],
            answer: 1,
            explain: "Tanpa kata sandi tersimpan, tidak ada basis data kata sandi yang menjadi sasaran kebocoran.",
          },
          {
            q: "Apa konsekuensi kehilangan kunci privat atau seed phrase?",
            options: [
              "Bisa direset lewat email",
              "Akses identitas dan aset bisa hilang selamanya",
              "Perusahaan akan memulihkan",
              "Tidak ada dampak apa pun",
            ],
            answer: 1,
            explain: "Tidak ada otoritas pusat yang memulihkan; kehilangan kunci berarti kehilangan akses permanen.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "dao",
    levelId: "nftweb3",
    order: 3,
    title: "DAO",
    summary:
      "Organisasi yang diatur oleh smart contract dan suara pemegang token, bukan oleh direksi. Pahami treasury bersama, voting, kuorum, dan pelajaran dari The DAO 2016.",
    durationMin: 14,
    tags: ["dao", "web3", "voting", "tata-kelola"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>DAO</strong> (decentralized autonomous organization) adalah organisasi yang aturannya tertulis dalam <strong>smart contract</strong> dan keputusannya diambil lewat <strong>voting</strong> para pemegang token, bukan oleh segelintir direksi. Tidak ada kantor pusat atau bos tunggal; kode dan suara komunitaslah yang menjalankan organisasi.",
      },
      {
        type: "paragraph",
        html: "Banyak DAO mengelola <strong>treasury bersama</strong>, yaitu kas berupa aset kripto yang dikuasai bersama. Untuk membelanjakan kas atau mengubah aturan, anggota mengajukan <strong>proposal</strong>, lalu memberi suara. Bobot suara biasanya sebanding dengan jumlah token tata kelola yang dimiliki.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kuorum dan mayoritas",
        html: "Agar sebuah proposal sah, sering ada dua syarat: <strong>kuorum</strong> (jumlah suara minimal yang harus ikut, supaya keputusan tidak diambil segelintir orang) dan <strong>mayoritas</strong> (lebih banyak suara setuju daripada menolak). Bila kuorum tak tercapai, proposal gugur meski semua yang ikut setuju.",
      },
      {
        type: "video",
        comp: "DAOVideo",
        title: "Bagaimana DAO Mengambil Keputusan",
        caption: "Dari proposal, pemungutan suara pemegang token, hingga eksekusi otomatis oleh smart contract tanpa direksi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Banyak treasury DAO dilindungi dompet <strong>multisig</strong>, yang butuh beberapa tanda tangan untuk mencairkan dana. Coba lihat bagaimana ambang tanda tangan memengaruhi keamanan kas bersama.",
      },
      { type: "widget", widget: "SimulatorMultisig" },
      {
        type: "chart",
        variant: "bar",
        title: "Bobot Suara berdasarkan Token Dimiliki (ilustrasi)",
        unit: "jumlah token tata kelola",
        source: "ilustrasi edukatif model satu token satu suara",
        note: "Pada model satu token satu suara, pemegang token lebih banyak punya pengaruh lebih besar atas keputusan.",
        data: [
          { label: "Anggota A", value: 120, color: "#627eea" },
          { label: "Anggota B", value: 80, color: "#8b5cf6" },
          { label: "Anggota C", value: 50, color: "#26a17b" },
          { label: "Anggota D", value: 30, color: "#f59e0b" },
        ],
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blockchain.svg?width=400",
        alt: "Diagram rantai blok",
        caption: "Aturan dan kas DAO hidup di atas blockchain; setiap perubahan tercatat permanen dan terbuka untuk diperiksa siapa pun.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Sejarah: The DAO 2016 dan peretasannya",
        html: "Pada <strong>2016</strong>, sebuah proyek bernama <strong>The DAO</strong> menjadi eksperimen tata kelola terdesentralisasi pertama yang besar di Ethereum, mengumpulkan dana setara puluhan juta dolar AS dari ribuan orang. Namun ada celah pada smart contract-nya yang dieksploitasi penyerang untuk menguras sebagian besar dana. Untuk memulihkan dana, komunitas Ethereum melakukan <strong>hard fork</strong> yang akhirnya memecah jaringan menjadi Ethereum dan Ethereum Classic. Pelajarannya: kode yang mengatur uang harus diaudit ketat, sebab 'kode adalah hukum' juga berarti bug bisa berakibat fatal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah DAO punya 1.000.000 token tata kelola dan menetapkan kuorum 20%. Berapa token minimal yang harus ikut memberi suara agar sebuah proposal dianggap sah?",
        answer: 200000,
        tolerance: 0,
        suffix: "token",
        solution:
          "20% x 1.000.000 = 0,2 x 1.000.000 = <strong>200.000 token</strong>. Jika token yang ikut voting kurang dari ini, proposal gugur karena kuorum tak tercapai.",
        hint: "Kalikan total token dengan persentase kuorum.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dalam pemungutan suara DAO, ada 300.000 token memilih setuju dan 180.000 token memilih menolak. Berapa persen suara yang setuju (dibulatkan ke bilangan bulat)?",
        answer: 62.5,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Total suara = 300.000 + 180.000 = 480.000. Persen setuju = 300.000 / 480.000 = 0,625 = <strong>62,5%</strong>. Karena lebih dari 50%, sisi setuju menang.",
        hint: "Bagi suara setuju dengan total suara, lalu kalikan 100%.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah tata kelola DAO dengan artinya.",
        pairs: [
          { left: "Smart contract", right: "Kode yang menjalankan aturan organisasi secara otomatis" },
          { left: "Treasury", right: "Kas aset kripto yang dikuasai bersama" },
          { left: "Proposal", right: "Usulan keputusan yang akan dipungut suaranya" },
          { left: "Kuorum", right: "Jumlah suara minimal agar keputusan sah" },
          { left: "Token tata kelola", right: "Token yang memberi hak suara dalam DAO" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "DAO diatur oleh smart contract dan voting pemegang token, bukan oleh direksi tunggal.",
          "Treasury adalah kas bersama; perubahan diputuskan lewat proposal dan pemungutan suara.",
          "Kuorum menjamin keputusan tidak diambil segelintir orang; mayoritas menentukan hasil.",
          "Bobot suara biasanya sebanding dengan jumlah token tata kelola yang dimiliki.",
          "The DAO 2016 diretas karena celah kode dan memicu hard fork; audit kode sangat penting.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang menjalankan aturan sebuah DAO?",
            options: [
              "Dewan direksi terpusat",
              "Smart contract dan voting pemegang token",
              "Satu bank penjamin",
              "Pemerintah penerbit",
            ],
            answer: 1,
            explain: "DAO dijalankan oleh kode (smart contract) dan keputusan suara komunitas, tanpa direksi tunggal.",
          },
          {
            q: "Apa itu treasury dalam DAO?",
            options: [
              "Daftar anggota",
              "Kas aset kripto yang dikuasai bersama",
              "Nama sebuah bursa",
              "Biaya transaksi",
            ],
            answer: 1,
            explain: "Treasury adalah kas bersama yang dikelola lewat proposal dan voting.",
          },
          {
            q: "Apa fungsi kuorum dalam pemungutan suara?",
            options: [
              "Menaikkan harga token",
              "Menetapkan jumlah suara minimal agar keputusan sah",
              "Menghapus proposal otomatis",
              "Membayar gas fee",
            ],
            answer: 1,
            explain: "Kuorum memastikan cukup banyak suara ikut, sehingga keputusan tidak diambil segelintir orang.",
          },
          {
            q: "Pada model satu token satu suara, apa yang menentukan bobot suara?",
            options: [
              "Urutan mendaftar",
              "Jumlah token tata kelola yang dimiliki",
              "Lama bergabung",
              "Lokasi geografis",
            ],
            answer: 1,
            explain: "Semakin banyak token tata kelola, semakin besar bobot suara anggota tersebut.",
          },
          {
            q: "Apa pelajaran utama dari peretasan The DAO 2016?",
            options: [
              "DAO selalu aman dari serangan",
              "Kode yang mengatur uang harus diaudit ketat karena bug bisa fatal",
              "Voting tidak diperlukan",
              "Treasury sebaiknya kosong",
            ],
            answer: 1,
            explain: "Celah pada smart contract The DAO dieksploitasi dan memicu hard fork; audit kode sangat penting.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "web3-arsitektur",
    levelId: "nftweb3",
    order: 4,
    title: "Arsitektur Web3",
    summary:
      "Menyusun semua kepingan: dompet, smart contract on-chain, penyimpanan terdesentralisasi, dan front-end. Plus beda Web1, Web2, dan Web3.",
    durationMin: 14,
    tags: ["web3", "arsitektur", "smart-contract", "ipfs"],
    blocks: [
      {
        type: "paragraph",
        html: "Aplikasi Web3 (sering disebut <strong>dApp</strong>, decentralized app) menyusun beberapa lapisan. <strong>Front-end</strong> adalah tampilan yang dilihat pengguna. <strong>Dompet</strong> menjadi identitas sekaligus penanda tangan transaksi. <strong>Smart contract on-chain</strong> menjalankan logika dan menyimpan kepemilikan. <strong>Penyimpanan terdesentralisasi</strong> seperti IPFS menyimpan berkas berat seperti gambar dan metadata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tumpukan Web3 secara ringkas",
        html: "<strong>Front-end</strong> (tampilan) berbicara dengan <strong>dompet</strong> (identitas & tanda tangan), yang mengirim transaksi ke <strong>smart contract on-chain</strong> (logika & kepemilikan). Berkas besar diletakkan di <strong>penyimpanan terdesentralisasi</strong> (IPFS), sementara blockchain cukup menyimpan tautannya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Web1, Web2, Web3: baca, baca-tulis, baca-tulis-miliki",
        html: "<strong>Web1</strong> adalah web baca saja: halaman statis yang hanya bisa dilihat. <strong>Web2</strong> adalah web baca-tulis: pengguna ikut membuat konten, tapi data dikuasai platform besar. <strong>Web3</strong> adalah web baca-tulis-miliki: pengguna juga <strong>memiliki</strong> aset dan identitasnya lewat blockchain dan dompet.",
      },
      {
        type: "video",
        comp: "NFTKepemilikanVideo",
        title: "Kepemilikan di Web3",
        caption: "Bagaimana kepemilikan aset menempel pada dompet dan dicatat smart contract, bukan pada akun platform.",
      },
      {
        type: "case",
        title: "Studi Kasus: Marketplace NFT dari sisi arsitektur",
        html: "Sebuah marketplace NFT menampilkan katalog karya di <strong>front-end</strong>. Saat pengguna menekan beli, <strong>dompet</strong> muncul meminta tanda tangan dan persetujuan biaya. Transaksi dikirim ke <strong>smart contract on-chain</strong> yang memindahkan kepemilikan NFT ke address pembeli dan membagi pembayaran (termasuk royalti kreator). Gambar karya sendiri tidak ada di blockchain; ia diambil dari <strong>IPFS</strong> lewat tautan yang dicatat NFT. Empat lapisan bekerja bersama dalam satu pembelian.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blockchain_workflow.png?width=400",
        alt: "Diagram alur kerja blockchain",
        caption: "Alur kerja blockchain menjadi tulang punggung dApp: transaksi yang ditandatangani dompet diverifikasi jaringan lalu dieksekusi smart contract.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Sejarah: Istilah Web3 dipopulerkan sekitar 2014",
        html: "Istilah <strong>Web3</strong> dipopulerkan sekitar <strong>2014</strong> oleh Gavin Wood, salah satu pendiri Ethereum, untuk menggambarkan web generasi baru yang berbasis blockchain dan kepemilikan pengguna. Gagasannya menanggapi keresahan bahwa di Web2 segelintir platform besar menguasai data dan identitas pengguna. Web3 menawarkan alternatif: pengguna menyimpan aset dan identitas di dompet yang mereka kendalikan sendiri.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tiap lapisan arsitektur Web3 dengan fungsinya.",
        pairs: [
          { left: "Front-end", right: "Tampilan yang dilihat dan dipakai pengguna" },
          { left: "Dompet", right: "Identitas pengguna dan penanda tangan transaksi" },
          { left: "Smart contract on-chain", right: "Menjalankan logika dan menyimpan kepemilikan" },
          { left: "Penyimpanan terdesentralisasi", right: "Menyimpan berkas berat seperti gambar dan metadata" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri ke era web yang tepat.",
        buckets: ["Web1 (baca)", "Web2 (baca-tulis)", "Web3 (baca-tulis-miliki)"],
        items: [
          { text: "Halaman statis yang hanya bisa dibaca", bucket: "Web1 (baca)" },
          { text: "Pengguna membuat konten, tapi data dikuasai platform", bucket: "Web2 (baca-tulis)" },
          { text: "Pengguna memiliki aset dan identitas lewat dompet", bucket: "Web3 (baca-tulis-miliki)" },
          { text: "Kepemilikan dicatat di blockchain", bucket: "Web3 (baca-tulis-miliki)" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah dApp menyimpan berkas gambar 8 MB di IPFS dan hanya mencatat tautan CID sepanjang 0,05 KB di blockchain. Berapa KB berkas yang TIDAK disimpan on-chain? (1 MB = 1.000 KB)",
        answer: 8000,
        tolerance: 0,
        suffix: "KB",
        solution:
          "Gambar 8 MB = 8 x 1.000 = 8.000 KB disimpan di IPFS, bukan on-chain. Yang on-chain hanya tautan 0,05 KB. Jadi <strong>8.000 KB</strong> berkas tidak disimpan di blockchain. Inilah alasan berkas berat diletakkan di penyimpanan terdesentralisasi.",
        hint: "Ubah 8 MB ke KB; itulah bagian yang diletakkan di IPFS, bukan di blockchain.",
      },
      {
        type: "takeaways",
        items: [
          "Aplikasi Web3 (dApp) menyusun front-end, dompet, smart contract on-chain, dan penyimpanan terdesentralisasi.",
          "Dompet jadi identitas dan penanda tangan; smart contract menyimpan logika dan kepemilikan.",
          "Berkas berat diletakkan di IPFS; blockchain cukup menyimpan tautannya agar murah.",
          "Web1 baca, Web2 baca-tulis, Web3 baca-tulis-miliki.",
          "Web3 menggeser kepemilikan data dan identitas dari platform ke pengguna.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa peran dompet dalam arsitektur Web3?",
            options: [
              "Menyimpan halaman web",
              "Menjadi identitas pengguna dan menandatangani transaksi",
              "Menambang blok baru",
              "Menyimpan gambar resolusi tinggi",
            ],
            answer: 1,
            explain: "Dompet adalah identitas pengguna sekaligus penanda tangan transaksi di Web3.",
          },
          {
            q: "Di mana berkas gambar berat sebuah dApp biasanya disimpan?",
            options: [
              "Seluruhnya di dalam blockchain",
              "Di penyimpanan terdesentralisasi seperti IPFS",
              "Di kunci privat",
              "Di front-end saja",
            ],
            answer: 1,
            explain: "Berkas berat diletakkan di IPFS; blockchain cukup menyimpan tautannya agar murah.",
          },
          {
            q: "Bagaimana ringkasan Web1, Web2, dan Web3?",
            options: [
              "Tulis, baca, hapus",
              "Baca, baca-tulis, baca-tulis-miliki",
              "Miliki, baca, tulis",
              "Statis, statis, statis",
            ],
            answer: 1,
            explain: "Web1 baca, Web2 baca-tulis, Web3 menambahkan kepemilikan (baca-tulis-miliki).",
          },
          {
            q: "Apa yang menjalankan logika dan menyimpan kepemilikan dalam dApp?",
            options: [
              "Front-end",
              "Smart contract on-chain",
              "Penyimpanan IPFS",
              "Server email",
            ],
            answer: 1,
            explain: "Smart contract on-chain menjalankan logika dan mencatat siapa pemilik aset.",
          },
          {
            q: "Apa gagasan inti Web3 dibanding Web2?",
            options: [
              "Halaman jadi statis kembali",
              "Pengguna memiliki aset dan identitasnya, bukan dikuasai platform",
              "Tidak butuh internet",
              "Semua data dihapus",
            ],
            answer: 1,
            explain: "Web3 menggeser kepemilikan data dan identitas dari platform ke pengguna lewat blockchain dan dompet.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sejarah-nft",
    levelId: "nftweb3",
    order: 5,
    title: "Sejarah NFT: dari CryptoPunks ke Bored Apes",
    summary:
      "Bagaimana NFT tumbuh dari eksperimen kecil menjadi pasar miliaran dolar. Telusuri CryptoPunks, CryptoKitties, lelang Beeple di Christie's, sampai Bored Ape Yacht Club.",
    durationMin: 14,
    tags: ["nft", "sejarah", "cryptopunks", "bored-apes"],
    blocks: [
      {
        type: "paragraph",
        html: "Cerita <strong>NFT</strong> bukan ledakan sekejap, melainkan rangkaian eksperimen yang makin besar. Mulai dari koleksi gambar kecil yang dibagikan gratis, sampai karya yang terjual puluhan juta dolar di rumah lelang bergengsi. Memahami urutannya membantu kita melihat mengapa orang rela membayar mahal untuk sebuah token kepemilikan digital.",
      },
      {
        type: "paragraph",
        html: "Inti yang selalu sama: NFT membuktikan siapa pemilik sah sebuah aset digital, dan kepemilikan itu tercatat terbuka di blockchain. Yang berubah dari masa ke masa adalah skala, harga, dan jenis komunitas yang terbentuk di sekitarnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Garis waktu singkat",
        html: "<strong>2017</strong>: CryptoPunks dirilis gratis, lalu CryptoKitties memacetkan Ethereum. <strong>Maret 2021</strong>: karya Beeple terjual sekitar 69 juta dolar di Christie's. <strong>2021</strong>: Bored Ape Yacht Club memicu demam koleksi profil (PFP) dan utilitas komunitas.",
      },
      {
        type: "video",
        comp: "NFTKepemilikanVideo",
        title: "NFT & Kepemilikan Digital",
        caption: "Token unik yang menunjuk satu aset dan berpindah tangan antar dompet; inilah inti yang dibangun sejak CryptoPunks.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum 2014",
        caption: "Hampir semua tonggak sejarah NFT terjadi di Ethereum, dari CryptoPunks 2017 hingga Bored Apes 2021.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tonggak Harga Penjualan NFT Bersejarah",
        unit: "juta dolar AS (perkiraan)",
        source: "perkiraan dari laporan publik lelang dan penjualan",
        note: "Lelang Beeple di Christie's pada Maret 2021 melompat jauh di atas penjualan sebelumnya dan menarik perhatian dunia seni arus utama.",
        data: [
          { label: "Beeple, Everydays (Christie's, 2021)", value: 69, color: "#627eea" },
          { label: "CryptoPunk langka (puncak 2021)", value: 11.7, color: "#8b5cf6" },
          { label: "Bored Ape langka (puncak 2021)", value: 3.4, color: "#26a17b" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: dari gratis menjadi sangat mahal",
        html: "CryptoPunks awalnya <strong>dibagikan gratis</strong> pada 2017; siapa pun dengan dompet Ethereum bisa mengklaim, hanya membayar biaya gas. Beberapa tahun kemudian, sejumlah Punk langka terjual jutaan dolar. Misalnya, jika seseorang mengklaim satu Punk seharga 0 dolar (hanya gas) lalu menjualnya kelak seharga 5 juta dolar, keuntungannya praktis sebesar harga jual itu. Kelangkaan, atribut unik, dan status sebagai 'koleksi pertama' mendongkrak nilainya.",
      },
      {
        type: "case",
        title: "Sejarah: Beeple, CryptoKitties, dan Bored Apes",
        html: "Pada <strong>2017</strong>, dua peristiwa membuka jalan: <strong>CryptoPunks</strong> merilis 10.000 karakter piksel unik, dan <strong>CryptoKitties</strong> begitu populer sampai <strong>memacetkan jaringan Ethereum</strong>. Lalu pada <strong>Maret 2021</strong>, karya digital <strong>Beeple</strong> berjudul <em>Everydays: The First 5000 Days</em> terjual sekitar <strong>69 juta dolar AS</strong> di rumah lelang <strong>Christie's</strong>, salah satu penjualan karya seniman hidup termahal saat itu. Tahun yang sama, <strong>Bored Ape Yacht Club (2021)</strong> mempopulerkan NFT sebagai foto profil sekaligus tiket masuk komunitas eksklusif. Fakta dan tahun ini terdokumentasi luas di laporan publik.",
      },
      {
        type: "calcExercise",
        prompt:
          "Karya Beeple terjual sekitar 69 juta dolar. Jika rumah lelang mengambil komisi 15%, berapa juta dolar (perkiraan) yang diterima rumah lelang dari penjualan ini?",
        answer: 10.35,
        tolerance: 0.2,
        prefix: "$",
        suffix: "juta",
        solution:
          "15% x 69 juta = 0,15 x 69 = <strong>10,35 juta dolar</strong>. Sisanya, sekitar 58,65 juta dolar, menjadi bagian penjual sebelum biaya lain. Komisi adalah salah satu cara rumah lelang mendapat untung.",
        hint: "Kalikan total harga jual dengan persentase komisi.",
      },
      {
        type: "classifyExercise",
        prompt: "Cocokkan tiap peristiwa NFT dengan tahunnya.",
        buckets: ["2017", "Maret 2021", "2021"],
        items: [
          { text: "CryptoPunks dirilis", bucket: "2017" },
          { text: "CryptoKitties memacetkan Ethereum", bucket: "2017" },
          { text: "Karya Beeple terjual ~69 juta dolar di Christie's", bucket: "Maret 2021" },
          { text: "Bored Ape Yacht Club diluncurkan", bucket: "2021" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "CryptoPunks (2017) dibagikan gratis, lalu sebagian terjual jutaan dolar bertahun kemudian.",
          "CryptoKitties (2017) sangat populer sampai memacetkan jaringan Ethereum.",
          "Karya Beeple terjual sekitar 69 juta dolar di Christie's pada Maret 2021.",
          "Bored Ape Yacht Club (2021) mempopulerkan NFT sebagai foto profil dan tiket komunitas.",
          "Nilai NFT didorong kelangkaan, atribut unik, status historis, dan komunitas di sekitarnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bagaimana CryptoPunks awalnya didistribusikan pada 2017?",
            options: [
              "Dilelang di Christie's",
              "Dibagikan gratis, pengguna hanya membayar biaya gas",
              "Dijual seharga 69 juta dolar",
              "Hanya untuk investor besar",
            ],
            answer: 1,
            explain: "CryptoPunks bisa diklaim gratis pada 2017; nilainya melonjak baru bertahun kemudian.",
          },
          {
            q: "Apa yang terjadi akibat populernya CryptoKitties pada 2017?",
            options: [
              "Jaringan Bitcoin berhenti",
              "Jaringan Ethereum macet karena lonjakan transaksi",
              "Christie's tutup",
              "NFT dilarang",
            ],
            answer: 1,
            explain: "Lonjakan permainan ini membuat transaksi Ethereum menumpuk dan biaya gas melonjak.",
          },
          {
            q: "Berapa kira-kira nilai penjualan karya Beeple di Christie's pada Maret 2021?",
            options: ["6,9 juta dolar", "Sekitar 69 juta dolar", "690 juta dolar", "69 ribu dolar"],
            answer: 1,
            explain: "Everydays: The First 5000 Days terjual sekitar 69 juta dolar AS di Christie's.",
          },
          {
            q: "Apa yang dipopulerkan oleh Bored Ape Yacht Club pada 2021?",
            options: [
              "Mata uang stabil",
              "NFT sebagai foto profil sekaligus tiket komunitas eksklusif",
              "Penambangan Bitcoin",
              "Login tanpa dompet",
            ],
            answer: 1,
            explain: "BAYC mempopulerkan NFT PFP yang juga memberi akses ke komunitas eksklusif.",
          },
          {
            q: "Apa yang paling mendorong tingginya nilai NFT koleksi tertentu?",
            options: [
              "Jumlahnya tak terbatas",
              "Kelangkaan, atribut unik, status historis, dan komunitas",
              "Karena disimpan penuh on-chain",
              "Karena gratis selamanya",
            ],
            answer: 1,
            explain: "Nilai didorong kelangkaan, keunikan atribut, status sebagai koleksi awal, dan kekuatan komunitas.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gamefi-metaverse",
    levelId: "nftweb3",
    order: 6,
    title: "GameFi, Metaverse & Utilitas NFT",
    summary:
      "NFT bukan sekadar gambar koleksi. Pahami play-to-earn, aset game sebagai NFT yang benar-benar kamu miliki, lahan virtual di metaverse, dan risiko yang menyertainya.",
    durationMin: 14,
    tags: ["gamefi", "metaverse", "play-to-earn", "nft"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>GameFi</strong> menggabungkan game dan keuangan terdesentralisasi (DeFi). Idenya: aset di dalam game, seperti karakter, senjata, atau lahan, dibuat sebagai <strong>NFT</strong> yang benar-benar dimiliki pemain, bukan sekadar dipinjamkan oleh perusahaan game. Karena dimiliki, aset itu bisa dijual atau dipindahkan ke luar game.",
      },
      {
        type: "paragraph",
        html: "<strong>Play-to-earn</strong> (main untuk menghasilkan) adalah model di mana pemain bisa memperoleh token atau NFT bernilai dari aktivitas bermain. Di <strong>metaverse</strong>, dunia virtual 3D, orang bahkan membeli <strong>lahan virtual</strong> berupa NFT untuk membangun atau menyewakannya. Semua ini memperluas arti 'utilitas' NFT melampaui koleksi gambar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Memiliki, bukan menyewa",
        html: "Di game biasa, item yang kamu beli tetap milik perusahaan dan hilang bila akun ditutup. Dengan NFT, item itu menempel pada <strong>dompetmu</strong>: kamu bisa menjual, menukar, atau memakainya di pasar terbuka. Inilah pergeseran inti yang dijanjikan GameFi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Aset game NFT yang dijual ulang sering memberi <strong>royalti</strong> ke pembuat game. Coba lihat berapa yang mengalir ke kreator saat sebuah item berpindah tangan beberapa kali.",
      },
      { type: "widget", widget: "SimulatorRoyaltiNFT" },
      {
        type: "video",
        comp: "NFTKepemilikanVideo",
        title: "Aset Game sebagai NFT",
        caption: "Bagaimana item game yang berupa NFT berpindah antar dompet dan tetap dimiliki pemain di luar game.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum-icon-purple.svg?width=400",
        alt: "Ikon Ethereum berwarna ungu",
        caption: "Banyak game Web3 dan dunia metaverse berjalan di atas Ethereum atau jaringan yang terhubung dengannya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi Kasus: ekonomi sebuah item game NFT",
        html: "Bayangkan sebuah pedang langka berupa NFT dibeli seharga 2 ETH, lalu dijual ulang seharga 5 ETH. Pembuat game menetapkan royalti 5%. Dari penjualan ulang itu, kreator menerima 5% x 5 ETH = <strong>0,25 ETH</strong>, dan penjual menerima sisanya 4,75 ETH. Keuntungan kotor penjual dibanding harga belinya adalah 5 - 2 = 3 ETH (sebelum royalti dan biaya). Ekonomi seperti ini yang membuat aset game punya pasar nyata.",
      },
      {
        type: "case",
        title: "Sejarah: Axie Infinity dan peretasan jembatan Ronin",
        html: "<strong>Axie Infinity</strong> menjadi ikon model <strong>play-to-earn</strong> dengan puncak popularitas pada <strong>2021</strong>; pemain di sejumlah negara, termasuk di Asia Tenggara, sempat menjadikannya sumber penghasilan. Game ini berjalan di jaringan pendukung bernama <strong>Ronin</strong>. Namun pada <strong>Maret 2022</strong>, jembatan (bridge) Ronin diretas dan dana senilai sekitar <strong>625 juta dolar AS</strong> dicuri, salah satu peretasan terbesar di kripto. Pelajarannya: model play-to-earn bisa rapuh terhadap perubahan ekonomi token, dan jembatan antar-jaringan adalah titik rawan yang harus diamankan ketat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah item game NFT dijual ulang seharga 8 ETH dengan royalti kreator 7,5%. Berapa ETH yang diterima kreator dari penjualan ulang ini?",
        answer: 0.6,
        tolerance: 0.01,
        suffix: "ETH",
        solution:
          "7,5% x 8 ETH = 0,075 x 8 = <strong>0,6 ETH</strong> untuk kreator. Penjual menerima sisanya, 7,4 ETH, sebelum biaya jaringan. Royalti otomatis ini diatur oleh smart contract NFT.",
        hint: "Kalikan harga jual ulang dengan persentase royalti.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri sebagai milik game biasa (Web2) atau GameFi (Web3).",
        buckets: ["Game biasa (Web2)", "GameFi (Web3)"],
        items: [
          { text: "Item tetap milik perusahaan dan hilang bila akun ditutup", bucket: "Game biasa (Web2)" },
          { text: "Aset berupa NFT yang dimiliki pemain di dompetnya", bucket: "GameFi (Web3)" },
          { text: "Item bisa dijual atau ditukar di pasar terbuka", bucket: "GameFi (Web3)" },
          { text: "Pemain bisa memperoleh token bernilai lewat play-to-earn", bucket: "GameFi (Web3)" },
          { text: "Pembelian item tidak bisa dipindahkan keluar game", bucket: "Game biasa (Web2)" },
          { text: "Lahan virtual metaverse dijual sebagai NFT", bucket: "GameFi (Web3)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "GameFi menjadikan aset game sebagai NFT yang benar-benar dimiliki pemain, bukan disewakan perusahaan.",
          "Play-to-earn memungkinkan pemain memperoleh token atau NFT bernilai dari aktivitas bermain.",
          "Di metaverse, lahan virtual pun bisa diperjualbelikan sebagai NFT.",
          "Axie Infinity mempopulerkan play-to-earn dengan puncak pada 2021.",
          "Peretasan jembatan Ronin (Maret 2022, sekitar 625 juta dolar) menunjukkan bridge adalah titik rawan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti dari GameFi?",
            options: [
              "Game tanpa grafik",
              "Aset game dibuat sebagai NFT yang benar-benar dimiliki pemain",
              "Game yang hanya bisa dimainkan offline",
              "Game yang melarang jual beli item",
            ],
            answer: 1,
            explain: "GameFi menjadikan aset game sebagai NFT milik pemain, bukan sekadar dipinjamkan perusahaan.",
          },
          {
            q: "Apa arti model play-to-earn?",
            options: [
              "Membayar untuk menang",
              "Pemain bisa memperoleh token atau NFT bernilai dari bermain",
              "Bermain tanpa internet",
              "Game yang selalu gratis hadiah uang",
            ],
            answer: 1,
            explain: "Play-to-earn berarti aktivitas bermain dapat menghasilkan token atau NFT yang punya nilai.",
          },
          {
            q: "Apa keuntungan aset game berupa NFT dibanding item game biasa?",
            options: [
              "Selalu lebih murah",
              "Dimiliki pemain dan bisa dijual atau dipindahkan di pasar terbuka",
              "Tidak butuh dompet",
              "Tidak bisa dicuri sama sekali",
            ],
            answer: 1,
            explain: "Karena menempel pada dompet pemain, aset NFT bisa dijual, ditukar, atau dipindahkan.",
          },
          {
            q: "Game apa yang menjadi ikon model play-to-earn dengan puncak pada 2021?",
            options: ["CryptoKitties", "Axie Infinity", "Bored Ape", "Uniswap"],
            answer: 1,
            explain: "Axie Infinity mempopulerkan play-to-earn dan memuncak pada 2021.",
          },
          {
            q: "Apa yang terjadi pada jembatan Ronin pada Maret 2022?",
            options: [
              "Diluncurkan pertama kali",
              "Diretas dan kehilangan dana sekitar 625 juta dolar",
              "Menggandakan harga token",
              "Berhenti memungut biaya",
            ],
            answer: 1,
            explain: "Jembatan Ronin diretas pada Maret 2022 dengan kerugian sekitar 625 juta dolar AS.",
          },
        ],
      },
    ],
  },
];
