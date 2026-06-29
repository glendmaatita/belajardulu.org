// Glosarium istilah lintas topik. Dipakai untuk menyisipkan ikon info + tooltip definisi
// secara otomatis pada konten pelajaran (paragraf, callout, studi kasus, daftar, takeaways).
//
// Kunci ditulis dalam bentuk yang umum muncul di teks. Pencocokan bersifat case-insensitive
// dan hanya menandai kemunculan PERTAMA tiap istilah dalam satu blok agar tidak ramai.

export const GLOSSARY: Record<string, string> = {
  // ===== Umum keuangan & investasi =====
  "bunga majemuk": "Bunga yang dihitung atas pokok plus bunga sebelumnya, sehingga pertumbuhan menumpuk seperti bola salju.",
  "nilai waktu uang": "Konsep bahwa uang hari ini lebih berharga daripada jumlah yang sama di masa depan karena bisa diinvestasikan.",
  "diversifikasi": "Menyebar dana ke banyak aset berbeda agar risiko keseluruhan turun.",
  "likuiditas": "Seberapa mudah aset diubah menjadi uang tunai tanpa kehilangan nilai.",
  "volatilitas": "Ukuran seberapa besar dan cepat harga suatu aset naik turun (cerminan risiko).",
  "imbal hasil": "Keuntungan dari investasi, biasanya dinyatakan dalam persen per tahun.",
  "portofolio": "Kumpulan aset investasi yang dimiliki seseorang atau lembaga.",
  "rebalancing": "Mengembalikan bobot aset portofolio ke target semula dengan menjual yang naik dan membeli yang turun.",
  "alokasi aset": "Pembagian dana ke berbagai jenis aset (saham, obligasi, kas) sesuai tujuan dan profil risiko.",
  "korelasi": "Ukuran seberapa seiring dua aset bergerak; korelasi rendah memperbesar manfaat diversifikasi.",
  "sharpe ratio": "Imbal hasil di atas aset bebas risiko per unit risiko (volatilitas); makin tinggi makin baik.",
  "dollar cost averaging": "Strategi berinvestasi rutin dengan nominal tetap, sehingga membeli lebih banyak saat harga murah.",
  "compounding": "Proses bunga atau imbal hasil yang diinvestasikan ulang sehingga ikut menghasilkan imbal hasil.",
  "margin of safety": "Selisih pengaman antara harga beli dan nilai wajar, agar tetap aman bila estimasi meleset.",
  "value trap": "Saham yang tampak murah secara rasio, tetapi fundamentalnya terus memburuk.",
  "undervalued": "Harga pasar lebih rendah dari nilai wajar estimasi (berpotensi murah).",
  "overvalued": "Harga pasar lebih tinggi dari nilai wajar estimasi (berpotensi mahal).",

  // ===== Saham, valuasi, laporan keuangan =====
  "valuasi": "Proses memperkirakan nilai wajar suatu aset atau perusahaan.",
  "nilai intrinsik": "Nilai wajar sebenarnya dari aset berdasarkan fundamental, bukan harga pasar.",
  "dividen": "Bagian laba perusahaan yang dibagikan kepada pemegang saham.",
  "payout ratio": "Porsi laba bersih yang dibagikan sebagai dividen.",
  "laba ditahan": "Bagian laba yang tidak dibagikan, melainkan ditahan untuk mendanai pertumbuhan.",
  "EPS": "Earnings Per Share, laba bersih per lembar saham.",
  "ROE": "Return on Equity, laba bersih dibagi ekuitas; mengukur efisiensi modal menghasilkan laba.",
  "DER": "Debt to Equity Ratio, perbandingan utang terhadap ekuitas; makin tinggi makin berisiko.",
  "DCF": "Discounted Cash Flow, metode menilai aset dengan mendiskon arus kas masa depan ke nilai kini.",
  "arus kas bebas": "Kas yang tersisa dari operasi setelah belanja modal, bebas dipakai untuk utang/dividen.",
  "terminal value": "Perkiraan nilai seluruh arus kas setelah periode proyeksi dalam analisis DCF.",
  "analisis fundamental": "Menilai saham berdasarkan kinerja dan kesehatan bisnis (laporan keuangan, prospek).",
  "analisis teknikal": "Menilai saham berdasarkan pola harga dan volume historis di grafik.",

  // ===== Obligasi & pendapatan tetap =====
  "obligasi": "Surat utang; penerbit meminjam dana dan membayar kupon serta mengembalikan pokok saat jatuh tempo.",
  "kupon": "Bunga berkala yang dibayar obligasi kepada pemegangnya.",
  "yield": "Imbal hasil efektif obligasi, bergerak berlawanan dengan harganya.",
  "durasi": "Ukuran kepekaan harga obligasi terhadap perubahan suku bunga.",
  "gagal bayar": "Kondisi penerbit tidak mampu membayar bunga atau pokok utangnya (default).",

  // ===== Corporate finance =====
  "NPV": "Net Present Value, jumlah nilai kini seluruh arus kas proyek; NPV positif berarti menambah nilai.",
  "IRR": "Internal Rate of Return, tingkat diskonto yang membuat NPV proyek sama dengan nol.",
  "payback period": "Lama waktu sampai arus kas menutup kembali investasi awal.",
  "WACC": "Weighted Average Cost of Capital, biaya modal rata-rata tertimbang dari utang dan ekuitas.",
  "struktur modal": "Komposisi pendanaan perusahaan antara utang dan ekuitas.",
  "leverage": "Penggunaan utang untuk membiayai aset; memperbesar potensi untung sekaligus rugi.",
  "tax shield": "Penghematan pajak karena bunga utang dapat mengurangi laba kena pajak.",
  "modal kerja": "Dana untuk operasi sehari-hari, yaitu aset lancar dikurangi kewajiban lancar.",
  "cash conversion cycle": "Lama waktu kas terjebak di persediaan dan piutang sebelum kembali menjadi kas.",
  "DSCR": "Debt Service Coverage Ratio, kemampuan arus kas menutup kewajiban utang.",
  "project finance": "Pembiayaan proyek besar yang pelunasannya bergantung pada arus kas proyek itu sendiri.",
  "SPV": "Special Purpose Vehicle, entitas khusus yang dibentuk untuk satu proyek atau transaksi.",
  "non-recourse": "Pembiayaan yang jaminannya terbatas pada aset/arus kas proyek, bukan sponsor.",
  "due diligence": "Penelaahan menyeluruh atas kondisi keuangan, hukum, dan operasi sebelum transaksi.",
  "sinergi": "Nilai tambah saat dua perusahaan bergabung menghasilkan lebih dari jumlah keduanya.",
  "LBO": "Leveraged Buyout, akuisisi perusahaan dengan porsi utang besar.",
  "MOIC": "Multiple on Invested Capital, berapa kali lipat modal kembali kepada investor.",
  "venture capital": "Pendanaan untuk startup tahap awal yang berisiko tinggi namun berpotensi tumbuh berlipat.",
  "private equity": "Investasi pada perusahaan yang tidak tercatat di bursa, sering untuk diperbaiki lalu dijual.",
  "ekuitas": "Modal pemilik dalam perusahaan; aset dikurangi kewajiban.",

  // ===== Climate finance & ESG =====
  "climate finance": "Pendanaan untuk kegiatan mitigasi dan adaptasi perubahan iklim.",
  "mitigasi": "Upaya menurunkan emisi gas rumah kaca untuk membatasi pemanasan global.",
  "adaptasi": "Upaya menyesuaikan diri terhadap dampak perubahan iklim yang sudah terjadi.",
  "green bond": "Obligasi yang dananya khusus untuk membiayai proyek ramah lingkungan.",
  "blended finance": "Penggabungan dana publik/konsesi dengan dana swasta untuk menarik investasi ke proyek berisiko.",
  "stranded asset": "Aset yang kehilangan nilai sebelum waktunya akibat transisi iklim atau regulasi.",
  "risiko transisi": "Risiko keuangan akibat peralihan ke ekonomi rendah karbon (regulasi, pajak karbon, perubahan permintaan).",
  "risiko fisik": "Risiko keuangan akibat dampak fisik iklim seperti banjir, badai, dan kekeringan.",
  "taksonomi": "Klasifikasi resmi yang menentukan aktivitas ekonomi mana yang tergolong hijau.",
  "greenwashing": "Klaim ramah lingkungan yang dilebih-lebihkan atau menyesatkan tanpa bukti memadai.",
  "ESG": "Environmental, Social, Governance, kriteria menilai keberlanjutan dan tata kelola perusahaan.",
  "TCFD": "Kerangka pengungkapan risiko keuangan terkait iklim (Task Force on Climate-related Financial Disclosures).",
  "ISSB": "International Sustainability Standards Board, penyusun standar pengungkapan keberlanjutan global (IFRS S1/S2).",
  "DNSH": "Do No Significant Harm, prinsip bahwa aktivitas hijau tidak boleh merugikan tujuan lingkungan lain.",
  "just transition": "Transisi menuju ekonomi rendah karbon yang adil bagi pekerja dan masyarakat terdampak.",
  "sustainability-linked bond": "Obligasi yang kuponnya naik bila target keberlanjutan (KPI) tidak tercapai.",

  // ===== Karbon =====
  "cap and trade": "Sistem batas emisi (cap) di mana izin emisi dapat diperjualbelikan (trade).",
  "carbon offset": "Pengurangan emisi di satu tempat untuk mengimbangi emisi di tempat lain.",
  "pajak karbon": "Pungutan atas emisi karbon untuk mendorong penurunan emisi.",

  // ===== Pajak =====
  "PPN": "Pajak Pertambahan Nilai, pajak atas konsumsi barang dan jasa.",
  "PPh": "Pajak Penghasilan atas penghasilan orang pribadi atau badan.",
  "omzet": "Total nilai penjualan bruto dalam suatu periode.",
  "NPWP": "Nomor Pokok Wajib Pajak, identitas wajib pajak di Indonesia.",

  // ===== Akuntansi =====
  "debit": "Sisi kiri pencatatan akuntansi; menambah aset/beban, mengurangi kewajiban/ekuitas.",
  "kredit": "Sisi kanan pencatatan akuntansi; menambah kewajiban/ekuitas/pendapatan, mengurangi aset.",
  "neraca": "Laporan posisi keuangan: aset, kewajiban, dan ekuitas pada satu titik waktu.",
  "penyusutan": "Pengalokasian biaya aset tetap secara bertahap selama masa manfaatnya.",
  "persediaan": "Barang yang dimiliki untuk dijual atau diproses dalam kegiatan usaha.",

  // ===== Kepabeanan, ekspor-impor, logistik =====
  "HS Code": "Kode klasifikasi barang internasional yang menentukan tarif dan aturan impor/ekspor.",
  "BTKI": "Buku Tarif Kepabeanan Indonesia, versi nasional HS Code dengan pos tarif 8 digit.",
  "lartas": "Larangan dan pembatasan, yaitu aturan yang membatasi atau melarang impor/ekspor barang tertentu.",
  "rules of origin": "Aturan penentuan negara asal barang untuk menentukan kelayakan tarif preferensi.",
  "COO": "Certificate of Origin, surat keterangan asal barang untuk klaim tarif preferensi.",
  "nilai pabean": "Dasar penghitungan bea masuk, umumnya nilai CIF barang impor.",
  "CIF": "Cost, Insurance, Freight; nilai barang termasuk asuransi dan ongkos angkut sampai pelabuhan tujuan.",
  "FOB": "Free On Board; harga barang sampai di atas kapal di pelabuhan asal, belum termasuk freight.",
  "freight": "Ongkos pengangkutan barang.",
  "bea masuk": "Pungutan negara atas barang yang diimpor.",
  "bea keluar": "Pungutan negara atas ekspor komoditas tertentu untuk mendorong pengolahan dalam negeri.",
  "PIB": "Pemberitahuan Impor Barang, dokumen pabean untuk mengimpor barang.",
  "PEB": "Pemberitahuan Ekspor Barang, dokumen pabean untuk mengekspor barang.",
  "NPE": "Nota Pelayanan Ekspor, tanda barang ekspor boleh dimuat ke kapal.",
  "SPPB": "Surat Persetujuan Pengeluaran Barang, izin barang impor keluar dari kawasan pabean.",
  "manifest": "Daftar muatan kapal atau pesawat yang dilaporkan ke pabean.",
  "Incoterms": "Aturan baku pembagian biaya dan risiko antara penjual dan pembeli dalam perdagangan internasional.",
  "Letter of Credit": "Jaminan pembayaran dari bank kepada eksportir bila dokumen sesuai syarat yang ditetapkan.",
  "demurrage": "Denda karena kontainer terlalu lama berada di pelabuhan melewati waktu bebas.",
  "detention": "Denda karena kontainer terlambat dikembalikan ke perusahaan pelayaran.",
  "freight forwarder": "Pihak yang mengatur pengangkutan, dokumen, dan logistik barang lintas negara.",
  "FCL": "Full Container Load, satu kontainer penuh milik satu pengirim.",
  "LCL": "Less than Container Load, muatan beberapa pengirim digabung dalam satu kontainer.",
  "bonded warehouse": "Gudang berikat tempat barang impor disimpan dengan penangguhan bea dan pajak.",
  "marine insurance": "Asuransi yang melindungi barang selama pengangkutan, terutama lewat laut.",
  "factoring": "Menjual piutang dagang kepada pihak ketiga dengan diskon untuk mendapat kas lebih awal.",
  "PPh 22": "Pajak Penghasilan Pasal 22, dipungut antara lain atas kegiatan impor.",
  "KITE": "Kemudahan Impor Tujuan Ekspor, fasilitas pembebasan/pengembalian bea atas bahan baku yang diolah lalu diekspor.",
  "kawasan berikat": "Kawasan pabean tempat impor bahan baku ditangguhkan pungutannya sampai produk jadi dikeluarkan.",
  "PCA": "Post Clearance Audit, audit kepabeanan setelah barang keluar dari pelabuhan.",
  "CEISA": "Sistem informasi kepabeanan elektronik Direktorat Jenderal Bea dan Cukai.",
  "INSW": "Indonesia National Single Window, portal satu pintu untuk perizinan ekspor-impor lintas instansi.",
  "MFN": "Most Favoured Nation, tarif umum yang berlaku bagi semua anggota WTO.",
  "FTA": "Free Trade Agreement, perjanjian perdagangan bebas yang menurunkan tarif antarnegara anggota.",
  "WTO": "World Trade Organization, organisasi yang mengatur aturan perdagangan dunia.",
  "landed cost": "Total biaya barang impor sampai di gudang, termasuk harga, freight, asuransi, bea, dan pajak.",

  // ===== Cryptocurrency & blockchain =====
  "cryptocurrency": "Uang digital yang dicatat di blockchain dan dijaga jaringan terdesentralisasi, bukan oleh satu bank.",
  "blockchain": "Buku besar digital berupa rantai blok yang saling terkait lewat hash, sehingga sulit diubah.",
  "block": "Sekumpulan transaksi yang dikemas bersama lalu ditambahkan ke blockchain.",
  "hash": "Sidik jari digital data; fungsi satu arah yang mengubah masukan apa pun menjadi kode dengan panjang tetap.",
  "SHA-256": "Fungsi hash yang menghasilkan keluaran 256 bit (64 hex), dipakai Bitcoin untuk mengamankan blok.",
  "Merkle tree": "Pohon hash yang meringkas banyak transaksi menjadi satu Merkle root agar verifikasi efisien.",
  "genesis block": "Blok pertama dalam sebuah blockchain.",
  "node": "Komputer yang menjalankan perangkat lunak jaringan dan menyimpan atau memverifikasi data blockchain.",
  "full node": "Node yang menyimpan dan memverifikasi seluruh riwayat blockchain.",
  "light node": "Node ringan yang hanya menyimpan header blok dan mengandalkan full node untuk data lengkap.",
  "peer-to-peer": "Jaringan tempat komputer terhubung langsung satu sama lain tanpa server pusat.",
  "fork": "Percabangan aturan atau rantai; soft fork kompatibel mundur, hard fork tidak.",
  "finality": "Titik saat sebuah transaksi dianggap permanen dan tidak bisa dibatalkan lagi.",
  "double spending": "Upaya membelanjakan satuan uang digital yang sama lebih dari sekali.",
  "digital scarcity": "Kelangkaan yang diciptakan secara digital, misalnya batas pasokan 21 juta Bitcoin.",
  "private key": "Kunci rahasia yang membuktikan kepemilikan aset kripto dan menandatangani transaksi; jangan dibagikan.",
  "public key": "Kunci yang diturunkan dari private key dan boleh dibagikan untuk menerima atau memverifikasi.",
  "address": "Alamat tujuan untuk menerima kripto, diturunkan dari public key.",
  "digital signature": "Tanda tangan kriptografis yang membuktikan pesan berasal dari pemilik private key tanpa membukanya.",
  "elliptic curve": "Kriptografi kurva eliptik (ECC); memberi keamanan setara RSA dengan kunci lebih pendek.",
  "seed phrase": "Rangkaian 12 atau 24 kata (standar BIP-39) sebagai cadangan utama yang memulihkan seluruh dompet.",
  "HD wallet": "Hierarchical Deterministic wallet; satu seed menurunkan banyak kunci dan address (BIP-32).",
  "wallet": "Perangkat lunak atau perangkat keras yang menyimpan kunci untuk mengelola aset kripto.",
  "hardware wallet": "Dompet fisik yang menyimpan private key offline (cold storage) agar aman dari peretasan daring.",
  "multisig": "Dompet yang butuh beberapa tanda tangan (m-of-n) untuk menyetujui transaksi.",
  "UTXO": "Unspent Transaction Output; saldo Bitcoin berupa kumpulan keluaran transaksi yang belum dibelanjakan.",
  "mining": "Proses menambang blok pada Proof of Work dengan menebak nonce agar hash memenuhi target.",
  "difficulty adjustment": "Penyesuaian tingkat kesulitan menambang agar rata-rata waktu antar blok tetap stabil.",
  "halving": "Pengurangan separuh imbalan blok Bitcoin yang terjadi tiap 210.000 blok (sekitar 4 tahun).",
  "mempool": "Antrean transaksi yang sudah disiarkan tetapi belum dimasukkan ke dalam blok.",
  "fee market": "Pasar biaya tempat pengguna bersaing membayar fee lebih tinggi agar transaksinya diprioritaskan.",
  "SegWit": "Segregated Witness; pembaruan Bitcoin 2017 yang memisah data tanda tangan untuk menambah kapasitas.",
  "Taproot": "Pembaruan Bitcoin 2021 yang meningkatkan privasi dan efisiensi lewat tanda tangan Schnorr.",
  "Lightning Network": "Jaringan layer-2 Bitcoin berbasis kanal pembayaran untuk transaksi cepat dan murah.",
  "EVM": "Ethereum Virtual Machine; mesin yang menjalankan smart contract di seluruh node Ethereum.",
  "gas": "Satuan biaya komputasi di Ethereum; dibayar dalam ETH (diukur gwei).",
  "smart contract": "Program yang berjalan otomatis di blockchain dan menjalankan aturan tanpa perantara.",
  "ERC-20": "Standar token fungible (seragam dan dapat dipertukarkan) di Ethereum.",
  "ERC-721": "Standar token non-fungible (NFT) yang unik dan tidak dapat dipertukarkan satu sama lain.",
  "ERC-1155": "Standar multi-token yang bisa menampung token fungible dan non-fungible sekaligus.",
  "Layer 2": "Solusi penskalaan di atas blockchain utama (Layer 1) untuk transaksi lebih murah dan cepat.",
  "rollup": "Layer 2 yang memproses transaksi di luar rantai lalu menulis ringkasannya ke Layer 1.",
  "Proof of Work": "Mekanisme konsensus tempat penambang bersaing memecahkan teka-teki hash; aman tetapi boros energi.",
  "Proof of Stake": "Mekanisme konsensus tempat validator dipilih sesuai jumlah stake; jauh lebih hemat energi.",
  "validator": "Peserta yang mempertaruhkan stake untuk mengusulkan dan memvalidasi blok pada Proof of Stake.",
  "slashing": "Hukuman memotong sebagian stake validator yang berlaku jahat atau lalai.",
  "Byzantine Fault Tolerance": "Kemampuan jaringan tetap sepakat meski sebagian node berlaku jahat atau gagal.",
  "Solidity": "Bahasa pemrograman utama untuk menulis smart contract di Ethereum.",
  "reentrancy": "Celah keamanan saat kontrak dipanggil ulang sebelum pembaruan saldo selesai, menguras dana.",
  "proxy pattern": "Pola yang memisah penyimpanan dan logika kontrak agar logika dapat diperbarui (upgradeable).",
  "DeFi": "Decentralized Finance; layanan keuangan di blockchain tanpa perantara terpusat.",
  "DEX": "Decentralized Exchange; bursa tempat menukar aset langsung tanpa perantara terpusat.",
  "AMM": "Automated Market Maker; penetapan harga otomatis lewat rumus kolam likuiditas, misalnya x*y=k.",
  "liquidity pool": "Kumpulan dua aset yang disetor penyedia likuiditas agar pengguna bisa menukar token.",
  "yield farming": "Strategi mengejar imbal hasil dengan menaruh aset di protokol DeFi untuk reward.",
  "staking": "Mengunci aset untuk mengamankan jaringan atau mendapat imbalan.",
  "flash loan": "Pinjaman tanpa jaminan yang dipinjam dan dikembalikan dalam satu transaksi yang sama.",
  "likuidasi": "Penjualan paksa jaminan saat nilainya turun di bawah ambang aman sebuah pinjaman.",
  "stablecoin": "Kripto yang dirancang menjaga nilai stabil, biasanya dipatok ke mata uang seperti dolar.",
  "peg": "Patokan nilai sebuah stablecoin terhadap aset acuan, misalnya 1 dolar.",
  "overcollateralized": "Jaminan yang nilainya melebihi pinjaman, untuk menyerap volatilitas harga.",
  "tokenomics": "Rancangan ekonomi sebuah token: pasokan, distribusi, emisi, dan insentif.",
  "total supply": "Jumlah maksimum token yang akan pernah ada.",
  "circulating supply": "Jumlah token yang sudah beredar dan dapat diperdagangkan saat ini.",
  "vesting": "Penguncian token tim atau investor yang dirilis bertahap selama periode tertentu.",
  "burn": "Menghancurkan token secara permanen sehingga pasokan berkurang.",
  "governance token": "Token yang memberi pemegangnya hak suara atas keputusan protokol.",
  "NFT": "Non-Fungible Token; token unik yang menjadi bukti kepemilikan aset digital tertentu.",
  "IPFS": "InterPlanetary File System; penyimpanan terdesentralisasi yang mengalamati berkas berdasarkan isinya.",
  "DAO": "Decentralized Autonomous Organization; organisasi yang diatur smart contract dan voting pemegang token.",
  "Web3": "Generasi web berbasis blockchain yang menekankan kepemilikan pengguna atas data dan aset.",
  "bridge": "Jembatan yang memindahkan aset atau pesan antar blockchain berbeda.",
  "wrapped token": "Token yang mewakili aset dari rantai lain secara 1:1, misalnya WBTC di Ethereum.",
  "rug pull": "Penipuan saat pengembang membawa kabur dana proyek dan meninggalkan investor.",
  "phishing": "Penipuan yang mengelabui korban agar membuka kunci atau menyetujui transaksi berbahaya.",
  "MEV": "Maximal Extractable Value; keuntungan yang diperoleh dengan menyusun ulang urutan transaksi dalam blok.",
  "on-chain analysis": "Analisis data publik di blockchain (alamat aktif, arus dana) untuk menilai kondisi pasar.",
};

// escape untuk konten elemen HTML (bukan atribut)
function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Susun daftar istilah, terpanjang dulu agar frasa menang atas kata tunggal.
const TERMS = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
const LOOKUP = new Map(Object.keys(GLOSSARY).map((k) => [k.toLowerCase(), k]));

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Satu regex gabungan. Pakai batas non-huruf agar tidak memotong kata.
const MATCHER = new RegExp(
  "(?<![A-Za-z0-9])(" + TERMS.map(escapeRe).join("|") + ")(?![A-Za-z0-9])",
  "gi"
);

function wrap(match: string, def: string): string {
  return (
    `<span class="gloss" tabindex="0" role="button" aria-label="Definisi ${esc(match)}">` +
    `${match}<span class="gloss-i" aria-hidden="true">i</span>` +
    `<span class="gloss-pop" role="tooltip"><span class="gloss-pop-term">${esc(match)}</span>${esc(def)}</span>` +
    `</span>`
  );
}

// Sisipkan ikon info + tooltip ke dalam string HTML. Hanya pada teks (lewati isi tag),
// dan hanya kemunculan pertama tiap istilah per blok.
export function annotateGlossary(html: string): string {
  if (!html || html.indexOf("gloss") !== -1) return html;
  const used = new Set<string>();
  const parts = html.split(/(<[^>]+>)/g);
  for (let i = 0; i < parts.length; i++) {
    const seg = parts[i];
    if (!seg || seg.charCodeAt(0) === 60 /* '<' */) continue; // lewati tag
    parts[i] = seg.replace(MATCHER, (m) => {
      const canon = LOOKUP.get(m.toLowerCase());
      if (!canon || used.has(canon)) return m;
      used.add(canon);
      return wrap(m, GLOSSARY[canon]);
    });
  }
  return parts.join("");
}
