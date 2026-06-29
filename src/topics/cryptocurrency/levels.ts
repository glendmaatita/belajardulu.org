import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "dasar",
    order: 1,
    title: "Level 1 · Dasar Cryptocurrency",
    subtitle: "Mengapa uang digital ini ada",
    description:
      "Apa itu cryptocurrency, kisah lahirnya Bitcoin, masalah double spending dan digital scarcity, beda coin, token, dan stablecoin, serta istilah penting (wallet, address, seed phrase, gas fee, block, node).",
    color: "from-amber-500 to-orange-600",
    icon: "🪙",
  },
  {
    id: "blockchain",
    order: 2,
    title: "Level 2 · Blockchain",
    subtitle: "Buku besar yang dirantai",
    description:
      "Anatomi blok dan hash, Merkle tree, genesis block, jaringan peer-to-peer dengan full node dan light node, fork, dan finality. Memahami kenapa data sulit diubah.",
    color: "from-sky-500 to-blue-600",
    icon: "⛓️",
  },
  {
    id: "kriptografi",
    order: 3,
    title: "Level 3 · Kriptografi",
    subtitle: "Matematika kepercayaan",
    description:
      "Fungsi hash dan SHA-256, kriptografi kunci publik dan private key, tanda tangan digital, elliptic curve, seed phrase, dan HD wallet. Inilah pondasi keamanan kripto.",
    color: "from-violet-500 to-purple-600",
    icon: "🔐",
  },
  {
    id: "bitcoin",
    order: 4,
    title: "Level 4 · Bitcoin",
    subtitle: "Emas digital pertama",
    description:
      "Model UTXO, mining dan difficulty adjustment, halving, mempool dan fee market, hingga SegWit, Taproot, dan Lightning Network.",
    color: "from-orange-500 to-amber-600",
    icon: "₿",
  },
  {
    id: "ethereum",
    order: 5,
    title: "Level 5 · Ethereum",
    subtitle: "Komputer dunia",
    description:
      "Account model, EVM, gas, smart contract, standar token ERC-20/721/1155, serta penskalaan lewat Layer 2 dan rollup.",
    color: "from-indigo-500 to-blue-700",
    icon: "Ξ",
  },
  {
    id: "konsensus",
    order: 6,
    title: "Level 6 · Mekanisme Konsensus",
    subtitle: "Bagaimana jaringan sepakat",
    description:
      "Proof of Work, Proof of Stake, Delegated PoS, Proof of Authority, Byzantine Fault Tolerance, peran validator, dan hukuman slashing.",
    color: "from-emerald-500 to-teal-600",
    icon: "🤝",
  },
  {
    id: "smartcontract",
    order: 7,
    title: "Level 7 · Smart Contract",
    subtitle: "Kode sebagai perjanjian",
    description:
      "Solidity, daur hidup kontrak, events dan storage, celah keamanan, serta pola upgradeability dan proxy.",
    color: "from-cyan-500 to-sky-600",
    icon: "📜",
  },
  {
    id: "defi",
    order: 8,
    title: "Level 8 · DeFi",
    subtitle: "Keuangan tanpa perantara",
    description:
      "Decentralized exchange dan AMM, liquidity pool, yield farming dan staking, lending dan borrowing, flash loan, serta likuidasi.",
    color: "from-pink-500 to-rose-600",
    icon: "🏦",
  },
  {
    id: "stablecoin",
    order: 9,
    title: "Level 9 · Stablecoin",
    subtitle: "Kripto yang dijaga stabil",
    description:
      "Stablecoin fiat-backed, crypto-backed, dan algoritmik, mekanisme peg, cadangan (reserve), dan manajemen risiko.",
    color: "from-green-500 to-emerald-600",
    icon: "💵",
  },
  {
    id: "tokenomics",
    order: 10,
    title: "Level 10 · Tokenomics",
    subtitle: "Ekonomi sebuah token",
    description:
      "Total dan circulating supply, jadwal inflasi, emission dan burn, vesting, treasury, serta governance token.",
    color: "from-yellow-500 to-amber-600",
    icon: "📊",
  },
  {
    id: "nftweb3",
    order: 11,
    title: "Level 11 · NFT & Web3",
    subtitle: "Kepemilikan & web baru",
    description:
      "NFT, metadata dan IPFS, login lewat wallet, DAO, decentralized identity, dan arsitektur Web3.",
    color: "from-fuchsia-500 to-purple-600",
    icon: "🖼️",
  },
  {
    id: "crosschain",
    order: 12,
    title: "Level 12 · Cross-Chain",
    subtitle: "Menghubungkan banyak rantai",
    description:
      "Bridge, wrapped token, cross-chain messaging, interoperability, serta ekosistem Cosmos dan Polkadot.",
    color: "from-teal-500 to-cyan-600",
    icon: "🌉",
  },
  {
    id: "keamanan",
    order: 13,
    title: "Level 13 · Keamanan",
    subtitle: "Menjaga aset tetap aman",
    description:
      "Keamanan wallet, hardware wallet, multisig, audit smart contract, reentrancy, serangan oracle, rug pull, phishing, MEV, dan manajemen private key.",
    color: "from-red-500 to-rose-700",
    icon: "🛡️",
  },
  {
    id: "investasi",
    order: 14,
    title: "Level 14 · Investasi Kripto",
    subtitle: "Menilai & mengelola risiko",
    description:
      "Analisis fundamental dan on-chain, analisis tokenomics, manajemen risiko, penyusunan portofolio, strategi stablecoin, dan dollar-cost averaging (DCA).",
    color: "from-blue-500 to-indigo-600",
    icon: "📈",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
