import type { Lesson } from "../../../types";

export const level10: Lesson[] = [
  // ============================================================
  {
    id: "supply",
    levelId: "tokenomics",
    order: 1,
    title: "Total & Circulating Supply",
    summary:
      "Membedakan total supply, circulating supply, dan fully diluted valuation, lalu menghitung kapitalisasi pasar dengan simulator dan video.",
    durationMin: 14,
    tags: ["tokenomics", "supply", "market-cap", "fdv"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Tokenomics</strong> adalah ilmu tentang bagaimana sebuah token dirancang: berapa banyak yang ada, bagaimana ia dibagikan, dan apa yang membuatnya bernilai. Titik awal yang wajib dipahami adalah perbedaan antara berapa banyak token yang <strong>akan pernah ada</strong> dan berapa banyak yang <strong>beredar sekarang</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Total supply vs circulating supply",
        html: "<strong>Total supply</strong> (atau max supply) adalah jumlah maksimum token yang akan pernah ada, misalnya 21 juta untuk Bitcoin. <strong>Circulating supply</strong> adalah jumlah yang sudah benar-benar beredar dan bisa diperdagangkan sekarang. Sisanya bisa masih terkunci, belum ditambang, atau belum dirilis.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Market cap dan FDV",
        html: "<strong>Market cap</strong> = harga x circulating supply, yaitu nilai dari token yang sudah beredar. <strong>Fully Diluted Valuation (FDV)</strong> = harga x total supply, yaitu perkiraan nilai bila seluruh token sudah beredar. FDV yang jauh lebih besar dari market cap menandakan banyak token baru akan masuk ke pasar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur total supply, inflasi, dan burn untuk melihat bagaimana pasokan dan nilai token berubah dari waktu ke waktu.",
      },
      { type: "widget", widget: "SimulatorTokenomics" },
      {
        type: "video",
        comp: "TokenomicsVideo",
        title: "Anatomi Tokenomics",
        caption: "Dari total supply, alokasi, vesting, sampai burn: cara membaca rancangan sebuah token.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bitcoin.svg?width=400",
        alt: "Logo Bitcoin, contoh token dengan total supply tetap 21 juta",
        caption: "Bitcoin adalah contoh paling terkenal total supply tetap: maksimal 21 juta BTC selamanya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Circulating vs Total Supply Sebuah Token (ilustrasi)",
        unit: "juta token",
        source: "ilustrasi edukatif",
        note: "Hanya sebagian token yang beredar sekarang; sisanya masuk perlahan dan menambah pasokan ke depan.",
        data: [
          { label: "Circulating", value: 50, color: "#26a17b" },
          { label: "Belum beredar", value: 50, color: "#94a3b8" },
          { label: "Total supply", value: 100, color: "#627eea" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membaca market cap dan FDV sebuah token",
        html: "Sebuah token berharga <strong>2 dolar AS</strong>. Saat ini beredar <strong>50 juta</strong> token, sementara total supply-nya <strong>100 juta</strong> token. Market cap = 2 x 50 juta = <strong>100 juta dolar AS</strong>. FDV = 2 x 100 juta = <strong>200 juta dolar AS</strong>. Selisih ini berarti, bila harga bertahan, masuknya 50 juta token sisanya bisa menekan harga karena pasokan bertambah dua kali lipat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Harga token 2 dolar AS dan circulating supply 50 juta token. Berapa market cap-nya (dalam juta dolar AS)?",
        answer: 100,
        tolerance: 0,
        prefix: "$",
        suffix: "juta",
        solution:
          "Market cap = harga x circulating supply = 2 x 50 juta = <strong>100 juta dolar AS</strong>. Market cap hanya menghitung token yang sudah beredar.",
        hint: "Kalikan harga dengan circulating supply.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan harga 2 dolar AS dan total supply 100 juta token, berapa fully diluted valuation (FDV) dalam juta dolar AS?",
        answer: 200,
        tolerance: 0,
        prefix: "$",
        suffix: "juta",
        solution:
          "FDV = harga x total supply = 2 x 100 juta = <strong>200 juta dolar AS</strong>. FDV memakai total supply, bukan circulating supply.",
        hint: "FDV memakai total supply, bukan yang beredar saja.",
      },
      {
        type: "classifyExercise",
        prompt: "Manakah yang dihitung dengan circulating supply dan mana dengan total supply?",
        buckets: ["Pakai circulating supply", "Pakai total supply"],
        items: [
          { text: "Market cap sebuah token", bucket: "Pakai circulating supply" },
          { text: "Fully diluted valuation (FDV)", bucket: "Pakai total supply" },
          { text: "Nilai token yang bisa diperdagangkan sekarang", bucket: "Pakai circulating supply" },
          { text: "Perkiraan nilai bila semua token sudah beredar", bucket: "Pakai total supply" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Batas 21 juta Bitcoin sebagai patokan kelangkaan",
        html: "Sejak blok genesis pada <strong>3 Januari 2009</strong>, kode Bitcoin menetapkan total supply tetap <strong>21 juta BTC</strong>. Selama bertahun, circulating supply naik perlahan lewat hadiah penambangan dan kini sudah melewati 19 juta BTC, mendekati batas tanpa pernah melampauinya. Bitcoin menjadi contoh paling awal dan paling terkenal bagaimana total supply yang pasti menciptakan kelangkaan, fondasi yang kemudian ditiru banyak proyek tokenomics lain.",
      },
      {
        type: "takeaways",
        items: [
          "Total supply adalah jumlah maksimum token; circulating supply adalah yang beredar sekarang.",
          "Market cap = harga x circulating supply.",
          "FDV = harga x total supply, memperkirakan nilai bila semua token beredar.",
          "FDV jauh di atas market cap menandakan banyak token baru akan masuk pasar.",
          "Bitcoin dengan total supply 21 juta adalah contoh klasik kelangkaan berbasis pasokan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu circulating supply?",
            options: [
              "Jumlah maksimum token yang akan pernah ada",
              "Jumlah token yang sudah beredar dan bisa diperdagangkan sekarang",
              "Harga token saat ini",
              "Jumlah token yang dibakar",
            ],
            answer: 1,
            explain: "Circulating supply adalah token yang benar-benar beredar saat ini.",
          },
          {
            q: "Bagaimana rumus market cap?",
            options: [
              "Harga x total supply",
              "Harga x circulating supply",
              "Total supply dibagi harga",
              "Harga ditambah circulating supply",
            ],
            answer: 1,
            explain: "Market cap = harga x circulating supply, hanya menghitung token yang beredar.",
          },
          {
            q: "Apa yang dipakai FDV dalam perhitungannya?",
            options: ["Circulating supply", "Total supply", "Token yang dibakar", "Volume harian"],
            answer: 1,
            explain: "FDV memakai total supply, memperkirakan nilai bila seluruh token beredar.",
          },
          {
            q: "Token harga 2 dolar AS, circulating 50 juta, total 100 juta. Berapa market cap?",
            options: ["200 juta dolar AS", "100 juta dolar AS", "50 juta dolar AS", "2 juta dolar AS"],
            answer: 1,
            explain: "2 x 50 juta = 100 juta dolar AS.",
          },
          {
            q: "FDV yang jauh lebih besar dari market cap menandakan apa?",
            options: [
              "Token sudah beredar semua",
              "Banyak token baru masih akan masuk ke pasar",
              "Harga pasti naik",
              "Total supply lebih kecil dari circulating",
            ],
            answer: 1,
            explain: "Selisih besar berarti banyak token belum beredar dan dapat menambah pasokan ke depan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "inflasi-emisi-burn",
    levelId: "tokenomics",
    order: 2,
    title: "Inflation Schedule, Emission & Burn",
    summary:
      "Memahami jadwal emisi yang menambah token, perbedaan inflasi dan deflasi, serta burn yang membakar token, lewat kasus EIP-1559 Ethereum.",
    durationMin: 15,
    tags: ["tokenomics", "inflasi", "emisi", "burn", "ethereum"],
    blocks: [
      {
        type: "paragraph",
        html: "Pasokan token jarang diam. Banyak proyek menambah token baru tiap waktu sebagai hadiah bagi penambang atau validator. Inilah <strong>emisi</strong>. Sebaliknya, sebagian proyek menghancurkan token secara permanen lewat <strong>burn</strong>. Selisih keduanya menentukan apakah pasokan bertambah (inflasi) atau menyusut (deflasi).",
      },
      {
        type: "callout",
        tone: "key",
        title: "Emisi, inflasi, dan deflasi",
        html: "<strong>Jadwal emisi</strong> mengatur berapa banyak token baru dirilis tiap periode. Bila token baru bertambah lebih cepat daripada yang dibakar, pasokan naik, disebut <strong>inflasi</strong>. Bila yang dibakar lebih banyak daripada yang dirilis, pasokan turun, disebut <strong>deflasi</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu burn?",
        html: "<strong>Burn</strong> adalah mengirim token ke sebuah address yang tidak punya kunci, sehingga token itu tidak bisa diakses siapa pun selamanya. Efeknya, token tersebut hilang dari pasokan beredar. Banyak proyek membakar sebagian biaya transaksi untuk menahan laju inflasi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur tingkat emisi dan burn, lalu lihat apakah pasokan bersih token naik (inflasi) atau turun (deflasi) dari tahun ke tahun.",
      },
      { type: "widget", widget: "SimulatorTokenomics" },
      {
        type: "video",
        comp: "VestingEmisiVideo",
        title: "Emisi & Vesting Token",
        caption: "Bagaimana token baru diterbitkan tiap periode dan bagaimana burn menahan laju pertumbuhan pasokan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum, jaringan yang membakar base fee lewat EIP-1559",
        caption: "Sejak EIP-1559 (2021), Ethereum membakar base fee tiap transaksi sehingga sebagian Ether hilang dari pasokan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Emisi, Burn, dan Pertumbuhan Bersih Pasokan (ilustrasi)",
        unit: "% per tahun",
        source: "ilustrasi edukatif",
        note: "Emisi menambah pasokan, burn menguranginya; selisihnya adalah pertumbuhan bersih yang sebenarnya.",
        data: [
          { label: "Emisi", value: 5, color: "#f7931a" },
          { label: "Burn", value: 2, color: "#ef4444" },
          { label: "Net (inflasi)", value: 3, color: "#26a17b" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menghitung pasokan bersih sebuah token",
        html: "Sebuah token memiliki pasokan beredar <strong>2.000.000</strong> token. Jadwal emisinya menerbitkan <strong>8%</strong> token baru per tahun sebagai hadiah validator, yaitu 160.000 token. Pada saat yang sama, protokol membakar <strong>3%</strong> dari pasokan, yaitu 60.000 token. Pertumbuhan bersih = 160.000 - 60.000 = <strong>100.000 token</strong> atau <strong>5%</strong>. Pasokan akhir tahun menjadi 2.100.000 token. Karena angka bersihnya positif, token ini masih inflasioner meski sudah ada burn.",
      },
      {
        type: "case",
        title: "Sejarah: EIP-1559 dan pembakaran base fee Ethereum (Agustus 2021)",
        html: "Pada <strong>Agustus 2021</strong>, Ethereum mengaktifkan pembaruan <strong>EIP-1559</strong> lewat hard fork bernama London. Sejak itu, setiap transaksi membayar sebuah <strong>base fee</strong> yang langsung <strong>dibakar</strong>, bukan diberikan ke penambang. Ketika jaringan sangat sibuk, jumlah Ether yang dibakar bisa melampaui Ether baru yang diterbitkan, membuat pasokan Ether sempat menyusut. Inilah contoh nyata bagaimana mekanisme burn mengubah token yang tadinya inflasioner menjadi bisa deflasioner pada periode tertentu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah token punya pasokan 1.000.000. Dalam setahun emisinya 5% dan burn-nya 2%. Berapa pasokan token di akhir tahun?",
        answer: 1030000,
        tolerance: 0,
        suffix: "token",
        solution:
          "Emisi 5% dari 1.000.000 = 50.000 token baru. Burn 2% = 20.000 token hilang. Net = 50.000 - 20.000 = +30.000 token. Pasokan akhir = 1.000.000 + 30.000 = <strong>1.030.000 token</strong>, inflasi bersih 3%.",
        hint: "Hitung emisi dan burn dari pasokan, lalu jumlahkan selisihnya ke pasokan awal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan emisi 5% dan burn 2% per tahun, berapa persen pertumbuhan bersih pasokan token setahun?",
        answer: 3,
        tolerance: 0,
        suffix: "%",
        solution:
          "Pertumbuhan bersih = emisi - burn = 5% - 2% = <strong>3%</strong>. Karena positif, pasokan tetap inflasioner.",
        hint: "Kurangkan persentase burn dari persentase emisi.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan sebagai inflasi atau deflasi pasokan.",
        buckets: ["Inflasi", "Deflasi"],
        items: [
          { text: "Emisi token baru lebih besar daripada token yang dibakar", bucket: "Inflasi" },
          { text: "Token yang dibakar lebih banyak daripada token baru yang dirilis", bucket: "Deflasi" },
          { text: "Pasokan beredar bertambah dari tahun ke tahun", bucket: "Inflasi" },
          { text: "Pasokan beredar menyusut karena burn agresif", bucket: "Deflasi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Jadwal emisi menentukan berapa banyak token baru dirilis tiap periode.",
          "Inflasi terjadi bila emisi melebihi burn; deflasi terjadi bila burn melebihi emisi.",
          "Burn mengirim token ke address tanpa kunci sehingga hilang dari pasokan selamanya.",
          "EIP-1559 (Agustus 2021) membakar base fee Ethereum dan bisa membuat Ether deflasioner saat jaringan sibuk.",
          "Pertumbuhan bersih pasokan = emisi dikurangi burn.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud emisi token?",
            options: [
              "Token yang dibakar permanen",
              "Token baru yang dirilis tiap periode",
              "Harga token saat ini",
              "Total supply maksimum",
            ],
            answer: 1,
            explain: "Emisi adalah penerbitan token baru sesuai jadwal, misalnya sebagai hadiah validator.",
          },
          {
            q: "Kapan pasokan token disebut deflasioner?",
            options: [
              "Saat emisi melebihi burn",
              "Saat burn melebihi emisi",
              "Saat harga naik",
              "Saat total supply naik",
            ],
            answer: 1,
            explain: "Deflasi terjadi ketika token yang dibakar lebih banyak daripada yang dirilis.",
          },
          {
            q: "Apa yang dilakukan EIP-1559 sejak Agustus 2021?",
            options: [
              "Menaikkan total supply Ethereum",
              "Membakar base fee tiap transaksi Ethereum",
              "Menghapus biaya transaksi",
              "Mengganti Bitcoin",
            ],
            answer: 1,
            explain: "EIP-1559 membakar base fee, sehingga sebagian Ether hilang dari pasokan tiap transaksi.",
          },
          {
            q: "Pasokan 1.000.000, emisi 5%, burn 2%. Berapa pasokan akhir tahun?",
            options: ["1.050.000", "1.030.000", "980.000", "1.000.000"],
            answer: 1,
            explain: "Net +3% dari 1.000.000 = +30.000, jadi pasokan akhir 1.030.000.",
          },
          {
            q: "Apa arti burn token?",
            options: [
              "Menjual token ke bursa",
              "Mengirim token ke address tanpa kunci sehingga hilang permanen",
              "Mencetak token baru",
              "Mengunci token sementara",
            ],
            answer: 1,
            explain: "Burn membuat token tak bisa diakses siapa pun lagi, mengurangi pasokan beredar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "vesting-treasury",
    levelId: "tokenomics",
    order: 3,
    title: "Vesting & Treasury",
    summary:
      "Memahami vesting (penguncian token tim dan investor yang dirilis bertahap), cliff, serta treasury proyek yang membiayai pengembangan.",
    durationMin: 13,
    tags: ["tokenomics", "vesting", "cliff", "treasury"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat sebuah proyek lahir, sebagian token biasanya dialokasikan untuk <strong>tim</strong> pendiri dan <strong>investor</strong> awal. Bila token itu langsung bisa dijual, mereka bisa membuang semuanya dan menghancurkan harga. Untuk mencegahnya, token dikunci dan dilepas perlahan lewat <strong>vesting</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Vesting dan cliff",
        html: "<strong>Vesting</strong> adalah jadwal yang melepas token terkunci sedikit demi sedikit selama berbulan atau bertahun. <strong>Cliff</strong> adalah masa tunggu awal di mana belum ada token yang terbuka sama sekali, misalnya satu tahun pertama, baru setelah itu pelepasan bertahap dimulai.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Treasury proyek",
        html: "<strong>Treasury</strong> adalah kas token milik proyek yang dipakai membiayai pengembangan, hibah, audit keamanan, dan pemasaran. Treasury yang dikelola transparan dan tidak boros adalah tanda proyek yang sehat untuk jangka panjang.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Awas tekanan jual saat unlock",
        html: "Ketika sejumlah besar token tim atau investor selesai vesting dan terbuka sekaligus, pasokan beredar melonjak. Bila permintaan tak ikut naik, harga bisa tertekan. Cermati jadwal unlock sebelum membeli sebuah token.",
      },
      {
        type: "video",
        comp: "TokenomicsVideo",
        title: "Alokasi & Vesting Token",
        caption: "Bagaimana token dibagi untuk tim, investor, dan komunitas, lalu dibuka bertahap lewat vesting.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur besar alokasi, lama <strong>cliff</strong>, dan durasi <strong>vesting</strong> untuk melihat kapan token tim mulai terbuka dan seberapa cepat pasokan beredar bertambah.",
      },
      { type: "widget", widget: "SimulatorVesting" },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum, proyek yang melepas alokasi tim secara bertahap sejak 2014",
        caption: "Ethereum termasuk proyek awal yang melepas alokasi pendiri secara bertahap, bukan sekaligus.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Token Tim Terbuka Bertahap Selama 4 Tahun (ilustrasi)",
        unit: "juta token unlocked kumulatif",
        source: "ilustrasi: alokasi 40 juta token, cliff 1 tahun, lalu linear",
        note: "Tahun pertama adalah cliff (0 terbuka); setelah itu token dibuka rata tiap tahun sampai penuh.",
        data: [
          { label: "Tahun 1", value: 0 },
          { label: "Tahun 2", value: 13.3 },
          { label: "Tahun 3", value: 26.7 },
          { label: "Tahun 4", value: 40 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membaca jadwal unlock sebelum membeli",
        html: "Seorang calon pembeli melihat sebuah token yang harganya sedang naik. Sebelum membeli, ia memeriksa jadwal vesting dan menemukan bahwa <strong>30%</strong> dari total supply, milik investor awal, akan terbuka sekaligus bulan depan setelah cliff berakhir. Ia sadar pasokan beredar bisa melonjak tajam dalam waktu singkat. Bila permintaan tidak ikut naik secepat itu, harga rawan tertekan. Ia memutuskan menunggu sampai unlock besar itu lewat sebelum mengambil keputusan, sebuah kebiasaan yang melindungi dari tekanan jual mendadak.",
      },
      {
        type: "case",
        title: "Sejarah: Vesting tim Ethereum dan pasokan awal (2014 sampai 2017)",
        html: "Saat penjualan perdana <strong>Ethereum</strong> pada 2014, sebagian Ether dialokasikan untuk yayasan dan kontributor awal. Sebagian alokasi tim dirancang terbuka secara bertahap, antara lain melalui penambahan pada tahun-tahun setelah peluncuran jaringan tahun 2015. Pendekatan melepas token pendiri secara bertahap, bukan sekaligus, menjadi pola yang kemudian banyak ditiru proyek lain agar kepentingan tim selaras dengan keberhasilan jangka panjang proyek.",
      },
      {
        type: "calcExercise",
        prompt:
          "Alokasi tim sebuah proyek adalah 40 juta token dengan cliff 1 tahun lalu vesting linear selama 3 tahun berikutnya. Berapa juta token tim yang sudah terbuka di akhir tahun ke-2?",
        answer: 13.3,
        tolerance: 0.4,
        suffix: "juta token",
        solution:
          "Tahun 1 adalah cliff, 0 terbuka. Setelah cliff, 40 juta dibuka rata selama 3 tahun, yakni sekitar 13,3 juta per tahun. Di akhir tahun ke-2 (satu tahun setelah cliff) terbuka sekitar <strong>13,3 juta token</strong>.",
        hint: "Selama cliff belum ada yang terbuka; bagi sisanya rata pada tahun-tahun setelah cliff.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap token sebagai masih terkunci (vesting) atau sudah beredar.",
        buckets: ["Terkunci (vesting)", "Sudah beredar"],
        items: [
          { text: "Token tim yang masih dalam masa cliff", bucket: "Terkunci (vesting)" },
          { text: "Token yang sudah dibuka dan diperdagangkan di bursa", bucket: "Sudah beredar" },
          { text: "Alokasi investor yang belum mencapai jadwal unlock", bucket: "Terkunci (vesting)" },
          { text: "Token reward yang sudah dibagikan ke pengguna", bucket: "Sudah beredar" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Vesting mengunci token tim dan investor lalu melepasnya bertahap untuk mencegah aksi jual besar.",
          "Cliff adalah masa tunggu awal di mana belum ada token yang terbuka.",
          "Treasury adalah kas token proyek untuk membiayai pengembangan, audit, dan pemasaran.",
          "Unlock besar dapat menambah pasokan beredar dan menekan harga bila permintaan tak naik.",
          "Token terkunci belum masuk circulating supply sampai jadwal vesting-nya tiba.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama vesting?",
            options: [
              "Menaikkan harga seketika",
              "Mengunci token tim dan investor lalu melepasnya bertahap",
              "Membakar token permanen",
              "Menghapus treasury",
            ],
            answer: 1,
            explain: "Vesting mencegah tim dan investor menjual seluruh token sekaligus di awal.",
          },
          {
            q: "Apa itu cliff dalam vesting?",
            options: [
              "Harga tertinggi token",
              "Masa tunggu awal di mana belum ada token yang terbuka",
              "Jumlah total supply",
              "Biaya transaksi",
            ],
            answer: 1,
            explain: "Cliff adalah periode awal tanpa pelepasan token sebelum vesting bertahap dimulai.",
          },
          {
            q: "Untuk apa treasury proyek dipakai?",
            options: [
              "Membakar semua token",
              "Membiayai pengembangan, audit, dan pemasaran",
              "Menaikkan total supply otomatis",
              "Mengunci dompet pengguna",
            ],
            answer: 1,
            explain: "Treasury adalah kas proyek untuk mendanai operasional dan pertumbuhan jangka panjang.",
          },
          {
            q: "Apa risiko unlock besar saat vesting berakhir?",
            options: [
              "Pasokan beredar melonjak dan harga bisa tertekan",
              "Total supply berkurang",
              "Token jadi tak bisa dikirim",
              "Treasury otomatis kosong",
            ],
            answer: 0,
            explain: "Banyak token terbuka sekaligus menambah pasokan; bila permintaan tetap, harga bisa turun.",
          },
          {
            q: "Token yang masih dalam masa vesting termasuk apa?",
            options: [
              "Sudah masuk circulating supply",
              "Belum masuk circulating supply",
              "Sudah dibakar",
              "Bagian dari gas fee",
            ],
            answer: 1,
            explain: "Token terkunci belum beredar sampai jadwal vesting-nya membukanya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "governance-token",
    levelId: "tokenomics",
    order: 4,
    title: "Governance Token",
    summary:
      "Memahami governance token sebagai hak suara atas proposal protokol, voting power yang proporsional, dan risiko konsentrasi suara di sedikit pihak.",
    durationMin: 13,
    tags: ["tokenomics", "governance", "voting", "dao"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebagian token bukan sekadar alat tukar atau aset, melainkan <strong>hak suara</strong>. Token semacam ini disebut <strong>governance token</strong>. Pemegangnya bisa ikut memutuskan arah sebuah protokol, mulai dari mengubah biaya, menambah fitur, sampai membelanjakan treasury.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Governance token = hak suara",
        html: "<strong>Governance token</strong> memberi pemegangnya hak memberikan suara atas <strong>proposal</strong> perubahan protokol. Komunitas pemegang token sering disebut <strong>DAO</strong> (organisasi otonom terdesentralisasi), tempat keputusan diambil lewat pemungutan suara, bukan oleh satu perusahaan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Voting power proporsional",
        html: "Umumnya, makin banyak governance token yang dipegang, makin besar <strong>voting power</strong>-nya. Satu token biasanya setara satu suara, sehingga pemegang besar punya pengaruh lebih besar atas hasil voting sebuah proposal.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Risiko konsentrasi suara",
        html: "Bila sebagian besar governance token terkumpul di sedikit pihak, mereka bisa mengendalikan hasil voting dan mementingkan diri sendiri. Sebaran token yang terlalu terpusat membuat kata desentralisasi kehilangan makna.",
      },
      {
        type: "video",
        comp: "TokenomicsVideo",
        title: "Token, Alokasi, dan Hak Suara",
        caption: "Bagaimana alokasi token membentuk siapa yang memegang kendali suara sebuah protokol.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum, rumah bagi banyak governance token dan DAO",
        caption: "Ethereum menjadi rumah bagi banyak DAO dan governance token, termasuk eksperimen The DAO 2016.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Sebaran Voting Power Governance (ilustrasi)",
        unit: "% total suara",
        source: "ilustrasi edukatif",
        note: "Bila satu kelompok memegang mayoritas suara, hasil voting bisa ditentukan sepihak.",
        data: [
          { label: "Tim & investor besar", value: 55, color: "#ef4444" },
          { label: "Pemegang menengah", value: 30, color: "#627eea" },
          { label: "Komunitas kecil", value: 15, color: "#26a17b" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sebuah proposal menaikkan biaya protokol",
        html: "Sebuah protokol memiliki total <strong>10.000.000</strong> governance token dengan aturan satu token satu suara. Muncul proposal menaikkan biaya layanan dari 0,3% menjadi 0,5%. Sekelompok pemegang besar bersama-sama menguasai <strong>5.500.000</strong> token, yaitu <strong>55%</strong> suara. Karena melebihi setengah, mereka bisa meloloskan atau menjegal proposal apa pun tanpa perlu dukungan komunitas kecil. Kasus ini menunjukkan mengapa sebaran token yang terlalu terpusat membuat hasil voting bisa ditentukan sepihak.",
      },
      {
        type: "case",
        title: "Sejarah: The DAO 2016, percobaan tata kelola berbasis token",
        html: "Pada <strong>2016</strong>, sebuah proyek bernama <strong>The DAO</strong> di Ethereum menghimpun dana besar dari banyak orang, di mana pemegang token berhak memberi suara atas proyek mana yang didanai. Idenya revolusioner: pengelolaan dana tanpa manajer terpusat. Namun sebuah celah pada kontraknya dieksploitasi dan sebagian besar dana terkuras, memicu keputusan kontroversial untuk melakukan hard fork Ethereum. Peristiwa ini jadi pelajaran besar bahwa tata kelola berbasis token harus dibangun di atas kode yang benar-benar aman.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah protokol punya total 1.000.000 governance token, satu token satu suara. Jika kamu memegang 50.000 token, berapa persen voting power yang kamu miliki?",
        answer: 5,
        tolerance: 0,
        suffix: "%",
        solution:
          "Voting power = 50.000 / 1.000.000 x 100% = <strong>5%</strong>. Voting power proporsional terhadap jumlah token yang dipegang.",
        hint: "Bagi token yang kamu pegang dengan total token, lalu kalikan 100%.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah tokenomics dengan definisinya.",
        pairs: [
          { left: "Governance token", right: "Token yang memberi hak suara atas proposal protokol" },
          { left: "Circulating supply", right: "Jumlah token yang beredar dan diperdagangkan sekarang" },
          { left: "Vesting", right: "Penguncian token yang dilepas bertahap sesuai jadwal" },
          { left: "Burn", right: "Menghancurkan token secara permanen dari pasokan" },
          { left: "FDV", right: "Harga dikalikan total supply" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Governance token memberi pemegangnya hak suara atas proposal perubahan protokol.",
          "Komunitas pemegang token sering berbentuk DAO yang memutuskan lewat voting.",
          "Voting power umumnya proporsional: makin banyak token, makin besar pengaruhnya.",
          "Konsentrasi token di sedikit pihak mengancam sifat terdesentralisasi.",
          "The DAO 2016 menunjukkan tata kelola token harus berdiri di atas kode yang aman.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi utama governance token?",
            options: [
              "Membayar gas fee saja",
              "Memberi hak suara atas proposal perubahan protokol",
              "Menggantikan stablecoin",
              "Membakar token otomatis",
            ],
            answer: 1,
            explain: "Governance token memberi pemegangnya hak ikut memutuskan arah protokol.",
          },
          {
            q: "Apa itu DAO?",
            options: [
              "Sebuah bursa kripto",
              "Komunitas pemegang token yang memutuskan lewat voting",
              "Jenis dompet perangkat keras",
              "Biaya transaksi jaringan",
            ],
            answer: 1,
            explain: "DAO adalah organisasi otonom terdesentralisasi yang dikelola lewat pemungutan suara.",
          },
          {
            q: "Bagaimana voting power umumnya ditentukan?",
            options: [
              "Sama rata untuk semua orang",
              "Proporsional terhadap jumlah token yang dipegang",
              "Berdasarkan urutan pendaftaran",
              "Ditentukan satu perusahaan",
            ],
            answer: 1,
            explain: "Umumnya satu token satu suara, sehingga pemegang lebih banyak punya pengaruh lebih besar.",
          },
          {
            q: "Apa risiko konsentrasi governance token?",
            options: [
              "Harga selalu turun",
              "Sedikit pihak bisa mengendalikan hasil voting",
              "Token jadi tak bisa dikirim",
              "Total supply otomatis naik",
            ],
            answer: 1,
            explain: "Bila suara terpusat, keputusan bisa didikte segelintir pemegang besar.",
          },
          {
            q: "Pelajaran utama dari peristiwa The DAO 2016 adalah?",
            options: [
              "Governance token tidak berguna",
              "Tata kelola berbasis token harus berdiri di atas kode yang aman",
              "Voting harus dihapus",
              "Treasury harus dibakar",
            ],
            answer: 1,
            explain: "Celah kode The DAO menguras dana, menegaskan pentingnya keamanan kontrak.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "ico-penggalangan",
    levelId: "tokenomics",
    order: 5,
    title: "ICO, IEO & IDO: Sejarah Penggalangan Dana",
    summary:
      "Bagaimana proyek kripto menggalang dana lewat ICO, IEO, dan IDO, beda ketiganya, serta risiko penipuan dan kegagalan yang menyertainya.",
    durationMin: 14,
    tags: ["tokenomics", "ico", "ieo", "ido", "penggalangan-dana"],
    blocks: [
      {
        type: "paragraph",
        html: "Untuk membangun sebuah proyek, sebuah tim butuh dana. Di dunia kripto, salah satu caranya adalah menjual token mereka lebih dulu kepada publik untuk mengumpulkan modal. Penjualan perdana ini punya beberapa bentuk, yang paling dikenal adalah <strong>ICO</strong>, <strong>IEO</strong>, dan <strong>IDO</strong>.",
      },
      {
        type: "paragraph",
        html: "Ketiganya sama-sama menjual token sebelum proyek matang, tetapi berbeda pada <strong>siapa yang menyelenggarakan</strong> dan <strong>seberapa ketat penyaringannya</strong>. Perbedaan ini sangat menentukan tingkat risiko bagi pembeli.",
      },
      {
        type: "callout",
        tone: "key",
        title: "ICO, IEO, dan IDO",
        html: "<strong>ICO (Initial Coin Offering)</strong>: proyek menjual token langsung ke publik dari situsnya sendiri, tanpa perantara. <strong>IEO (Initial Exchange Offering)</strong>: penjualan diselenggarakan dan diseleksi oleh sebuah <strong>bursa terpusat</strong>. <strong>IDO (Initial DEX Offering)</strong>: penjualan dilakukan lewat <strong>bursa terdesentralisasi (DEX)</strong> tanpa perantara terpusat.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Risiko besar penggalangan token",
        html: "Membeli token perdana berarti membayar untuk sesuatu yang sering belum jadi. Banyak proyek gagal, sebagian adalah penipuan murni (<strong>rug pull</strong>), dan dana yang sudah dikirim biasanya tak bisa ditarik kembali. ICO tanpa penyaringan paling rawan, sedangkan IEO sedikit lebih terverifikasi karena bursa menyeleksi proyek lebih dulu.",
      },
      {
        type: "video",
        comp: "TokenomicsVideo",
        title: "Cara Token Dijual Perdana",
        caption: "Dari alokasi penjualan publik sampai harga perdana: bagaimana proyek menggalang dana lewat token.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum, jaringan tempat ledakan ICO 2017 lewat token ERC-20",
        caption: "Sebagian besar ICO 2017 menggalang dana lewat token ERC-20 di jaringan Ethereum.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Perkiraan Dana Terkumpul lewat ICO per Tahun (ilustrasi)",
        unit: "miliar dolar AS",
        source: "ilustrasi edukatif berdasarkan tren yang umum dilaporkan",
        note: "Penggalangan ICO melonjak tajam pada 2017 ke 2018, lalu surut drastis setelah regulator menertibkan dan banyak proyek gagal.",
        data: [
          { label: "2016", value: 0.1, color: "#94a3b8" },
          { label: "2017", value: 6.2, color: "#627eea" },
          { label: "2018", value: 11.4, color: "#f7931a" },
          { label: "2019", value: 0.4, color: "#ef4444" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: IEO yang diseleksi bursa",
        html: "Sebuah proyek ingin menggalang dana tetapi tahu pembeli ragu pada ICO yang tak tersaring. Ia memilih <strong>IEO</strong>: mengajukan diri ke sebuah bursa terpusat yang memeriksa tim, kode, dan rencananya lebih dulu. Setelah lolos, bursa menyelenggarakan penjualan token kepada penggunanya. Bagi pembeli, ada rasa aman lebih karena bursa mempertaruhkan reputasinya. Namun seleksi bukan jaminan: proyek tetap bisa gagal, dan pembeli tetap menanggung risiko harga.",
      },
      {
        type: "case",
        title: "Sejarah: Ledakan ICO 2017 dan penertiban regulator 2018",
        html: "Sepanjang <strong>2017</strong>, ribuan proyek menggalang dana lewat <strong>ICO</strong>, sebagian besar dengan menerbitkan token <strong>ERC-20</strong> di Ethereum. Total dana yang terkumpul melonjak hingga miliaran dolar AS, banyak di antaranya untuk proyek yang hanya bermodal whitepaper. Otoritas mulai bereaksi: pada Juli 2017 regulator pasar modal AS, <strong>SEC</strong>, menerbitkan laporan yang menyatakan sebagian token bisa tergolong surat berharga. Sepanjang <strong>2018</strong>, SEC menindak sejumlah ICO yang dianggap menjual surat berharga tanpa izin dan menipu investor. Gelombang ICO pun surut tajam, dan model IEO serta IDO yang lebih tersaring mulai naik.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah proyek menjual 100 juta token pada harga 0,10 dolar AS per token dalam sebuah ICO. Berapa dana yang terkumpul (dalam juta dolar AS)?",
        answer: 10,
        tolerance: 0,
        prefix: "$",
        suffix: "juta",
        solution:
          "Dana terkumpul = jumlah token x harga = 100 juta x 0,10 = <strong>10 juta dolar AS</strong>. Inilah modal awal yang diterima proyek dari penjualan perdana.",
        hint: "Kalikan jumlah token yang dijual dengan harga per token.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri sebagai ICO, IEO, atau IDO.",
        buckets: ["ICO", "IEO", "IDO"],
        items: [
          { text: "Proyek menjual token langsung ke publik dari situsnya sendiri", bucket: "ICO" },
          { text: "Penjualan diselenggarakan dan diseleksi oleh bursa terpusat", bucket: "IEO" },
          { text: "Token dijual lewat bursa terdesentralisasi (DEX) tanpa perantara terpusat", bucket: "IDO" },
          { text: "Bentuk paling marak pada 2017 dengan banyak token ERC-20", bucket: "ICO" },
          { text: "Bursa memverifikasi tim dan kode proyek lebih dulu", bucket: "IEO" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "ICO, IEO, dan IDO adalah cara menjual token perdana untuk menggalang dana proyek.",
          "ICO dijual langsung tanpa perantara; IEO diseleksi bursa terpusat; IDO lewat DEX.",
          "Membeli token perdana berisiko tinggi: banyak proyek gagal dan sebagian adalah penipuan.",
          "Ledakan ICO 2017 menggalang miliaran dolar AS lewat token ERC-20 di Ethereum.",
          "Penertiban regulator seperti SEC pada 2018 menyurutkan ICO dan mendorong model IEO/IDO.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu ICO?",
            options: [
              "Penjualan token yang diseleksi bursa terpusat",
              "Penjualan token langsung ke publik oleh proyek tanpa perantara",
              "Penjualan token lewat DEX",
              "Pembakaran token permanen",
            ],
            answer: 1,
            explain: "ICO (Initial Coin Offering) adalah penjualan token perdana langsung ke publik tanpa perantara.",
          },
          {
            q: "Apa yang membedakan IEO dari ICO?",
            options: [
              "IEO tidak menjual token",
              "IEO diselenggarakan dan diseleksi oleh bursa terpusat",
              "IEO selalu gratis",
              "IEO hanya untuk Bitcoin",
            ],
            answer: 1,
            explain: "Pada IEO, bursa terpusat menyeleksi proyek dan menyelenggarakan penjualannya.",
          },
          {
            q: "Di jaringan apa sebagian besar ICO 2017 berlangsung?",
            options: ["Bitcoin", "Ethereum lewat token ERC-20", "Sebuah bank", "Tanpa blockchain"],
            answer: 1,
            explain: "Mayoritas ICO 2017 menerbitkan token ERC-20 di jaringan Ethereum.",
          },
          {
            q: "Apa yang dilakukan regulator seperti SEC terhadap ICO pada 2017 sampai 2018?",
            options: [
              "Mendorong semua orang ikut ICO",
              "Menyatakan sebagian token bisa tergolong surat berharga dan menindak yang melanggar",
              "Melarang Ethereum sepenuhnya",
              "Membeli semua token",
            ],
            answer: 1,
            explain: "SEC menyatakan sebagian token bisa berupa surat berharga dan menindak ICO yang menjualnya tanpa izin.",
          },
          {
            q: "Mengapa membeli token perdana berisiko tinggi?",
            options: [
              "Karena harganya selalu naik",
              "Karena banyak proyek belum jadi, bisa gagal, atau menipu, dan dana sulit ditarik kembali",
              "Karena bursa menjamin keuntungan",
              "Karena token tidak bisa dijual",
            ],
            answer: 1,
            explain: "Token perdana sering dibeli sebelum proyek matang; risiko gagal dan penipuan tinggi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "distribusi-airdrop",
    levelId: "tokenomics",
    order: 6,
    title: "Distribusi & Airdrop",
    summary:
      "Bagaimana token dibagi ke berbagai pihak lewat penjualan, reward, dan airdrop, serta bagaimana airdrop dipakai untuk memberi insentif dan membangun komunitas.",
    durationMin: 14,
    tags: ["tokenomics", "distribusi", "airdrop", "uniswap", "komunitas"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah jumlah token ditentukan, pertanyaan berikutnya adalah <strong>siapa yang mendapatkannya</strong>. Cara sebuah proyek membagi tokennya disebut <strong>distribusi</strong>, dan rancangan ini sangat menentukan apakah proyek terasa adil atau hanya menguntungkan segelintir orang dalam.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga jalur distribusi utama",
        html: "<strong>Penjualan</strong>: token dijual untuk menggalang dana (lewat ICO, IEO, atau IDO). <strong>Reward</strong>: token dibagikan sebagai hadiah, misalnya ke penambang, validator, atau penyedia likuiditas. <strong>Airdrop</strong>: token dibagikan gratis ke pengguna, biasanya sebagai apresiasi atau untuk menarik komunitas baru.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu airdrop?",
        html: "<strong>Airdrop</strong> adalah pembagian token gratis ke banyak address sekaligus. Tujuannya beragam: memberi penghargaan kepada pengguna awal, menyebar kepemilikan agar lebih terdesentralisasi, atau memperkenalkan proyek baru. Airdrop yang menargetkan pengguna lama disebut <strong>airdrop retroaktif</strong>.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur alokasi penjualan, reward, dan airdrop, lalu lihat bagaimana porsi tiap kelompok membentuk sebaran kepemilikan token.",
      },
      { type: "widget", widget: "SimulatorTokenomics" },
      {
        type: "video",
        comp: "TokenomicsVideo",
        title: "Membagi Token ke Komunitas",
        caption: "Bagaimana alokasi penjualan, reward, dan airdrop menentukan siapa yang memegang token sejak awal.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Uniswap_Logo.svg?width=400",
        alt: "Logo Uniswap, DEX yang melakukan airdrop token UNI pada 2020",
        caption: "Uniswap melakukan salah satu airdrop paling terkenal: 400 UNI gratis untuk tiap pengguna awalnya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Contoh Sebaran Distribusi Token (ilustrasi mengacu pola Uniswap)",
        unit: "% total supply",
        source: "ilustrasi edukatif mengacu pola distribusi Uniswap",
        note: "Porsi komunitas yang besar (termasuk airdrop dan reward) menandakan upaya menyebar kepemilikan ke banyak pengguna.",
        data: [
          { label: "Komunitas (airdrop & reward)", value: 60, color: "#26a17b" },
          { label: "Tim", value: 21, color: "#627eea" },
          { label: "Investor", value: 18, color: "#f7931a" },
          { label: "Penasihat", value: 1, color: "#94a3b8" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Merancang porsi airdrop yang adil",
        html: "Sebuah proyek punya total supply <strong>1 miliar</strong> token. Tim mengalokasikan <strong>15%</strong> untuk airdrop ke pengguna awal, yaitu <strong>150 juta</strong> token. Bila ada sekitar <strong>300.000</strong> pengguna yang memenuhi syarat, tiap orang rata-rata menerima <strong>500</strong> token. Porsi airdrop yang cukup besar membuat banyak pengguna ikut memiliki proyek, tetapi tim harus berhati-hati: airdrop terlalu besar bisa menambah pasokan beredar dan menekan harga saat penerima ramai-ramai menjual.",
      },
      {
        type: "case",
        title: "Sejarah: Airdrop UNI Uniswap, September 2020",
        html: "Pada <strong>September 2020</strong>, bursa terdesentralisasi <strong>Uniswap</strong> meluncurkan token tata kelolanya, <strong>UNI</strong>, lewat sebuah airdrop retroaktif yang legendaris. Setiap address yang pernah memakai Uniswap sebelum batas waktu tertentu berhak mengklaim <strong>400 UNI</strong> secara gratis. Saat itu jumlahnya bernilai sekitar seribu dolar AS bagi tiap pengguna. Airdrop ini menyebar kepemilikan ke ratusan ribu pengguna sekaligus dan menjadi contoh kuat bagaimana token bisa dipakai untuk menghargai komunitas awal dan memperkuat tata kelola terdesentralisasi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Uniswap membagikan 400 UNI untuk tiap address pengguna awal. Jika ada sekitar 250.000 address yang memenuhi syarat, berapa juta UNI total yang dibagikan lewat airdrop itu?",
        answer: 100,
        tolerance: 0,
        suffix: "juta UNI",
        solution:
          "Total airdrop = 400 UNI x 250.000 address = 100.000.000 UNI = <strong>100 juta UNI</strong>. Ini sekitar 10% dari total supply 1 miliar UNI yang langsung tersebar ke komunitas.",
        hint: "Kalikan jumlah token per address dengan jumlah address penerima.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah proyek punya total supply 1 miliar token dan mengalokasikan 15% untuk airdrop. Berapa juta token yang disediakan untuk airdrop?",
        answer: 150,
        tolerance: 0,
        suffix: "juta token",
        solution:
          "15% x 1.000 juta = <strong>150 juta token</strong>. Porsi inilah yang dibagikan gratis ke pengguna yang memenuhi syarat airdrop.",
        hint: "Hitung 15% dari total supply 1 miliar (1.000 juta) token.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap contoh sebagai distribusi lewat Penjualan, Reward, atau Airdrop.",
        buckets: ["Penjualan", "Reward", "Airdrop"],
        items: [
          { text: "Token dijual ke publik untuk menggalang dana lewat ICO", bucket: "Penjualan" },
          { text: "Token diberikan ke penyedia likuiditas sebagai insentif", bucket: "Reward" },
          { text: "Token dibagikan gratis ke pengguna awal sebagai apresiasi", bucket: "Airdrop" },
          { text: "Hadiah blok untuk penambang atau validator", bucket: "Reward" },
          { text: "400 UNI gratis untuk tiap pengguna awal Uniswap", bucket: "Airdrop" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Distribusi menentukan siapa yang memegang token dan apakah sebarannya adil.",
          "Tiga jalur utama: penjualan (menggalang dana), reward (hadiah), dan airdrop (pembagian gratis).",
          "Airdrop membagikan token gratis untuk menghargai pengguna dan menyebar kepemilikan.",
          "Airdrop UNI Uniswap (September 2020) memberi 400 UNI ke tiap pengguna awal.",
          "Airdrop terlalu besar bisa menambah pasokan beredar dan menekan harga saat penerima menjual.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud distribusi token?",
            options: [
              "Harga token saat dijual",
              "Cara sebuah proyek membagi tokennya ke berbagai pihak",
              "Jumlah token yang dibakar",
              "Biaya transaksi jaringan",
            ],
            answer: 1,
            explain: "Distribusi adalah rancangan bagaimana token dibagi ke penjualan, reward, airdrop, tim, dan lainnya.",
          },
          {
            q: "Apa itu airdrop?",
            options: [
              "Penjualan token dengan harga diskon",
              "Pembagian token gratis ke banyak address sekaligus",
              "Pembakaran token permanen",
              "Penguncian token tim",
            ],
            answer: 1,
            explain: "Airdrop membagikan token gratis, sering ke pengguna awal sebagai apresiasi.",
          },
          {
            q: "Berapa UNI yang diterima tiap pengguna awal pada airdrop Uniswap September 2020?",
            options: ["40 UNI", "400 UNI", "4.000 UNI", "4 UNI"],
            answer: 1,
            explain: "Setiap address yang memenuhi syarat berhak mengklaim 400 UNI secara gratis.",
          },
          {
            q: "Apa tujuan airdrop retroaktif?",
            options: [
              "Menghapus pengguna lama",
              "Menghargai pengguna awal dan menyebar kepemilikan token",
              "Menaikkan biaya transaksi",
              "Mengunci semua token tim",
            ],
            answer: 1,
            explain: "Airdrop retroaktif memberi penghargaan ke pengguna lama sekaligus menyebar kepemilikan.",
          },
          {
            q: "Apa risiko airdrop yang terlalu besar?",
            options: [
              "Total supply otomatis berkurang",
              "Pasokan beredar bertambah dan harga bisa tertekan saat penerima menjual",
              "Token jadi tak bisa dikirim",
              "Treasury otomatis kosong",
            ],
            answer: 1,
            explain: "Banyak token gratis yang langsung dijual bisa menambah pasokan dan menekan harga.",
          },
        ],
      },
    ],
  },
];
