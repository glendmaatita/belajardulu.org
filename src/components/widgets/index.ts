import type { FC } from "react";
import type { WidgetId } from "../../types";
// Carbon
import { KalkulatorJejakKarbon } from "./KalkulatorJejakKarbon";
import { SimulatorCapTrade } from "./SimulatorCapTrade";
import { KalkulatorPajakKarbon } from "./KalkulatorPajakKarbon";
import { SimulatorOffset } from "./SimulatorOffset";
// Akuntansi
import { EquationPlayground } from "./EquationPlayground";
import { DebitKreditDrill } from "./DebitKreditDrill";
import { KalkulatorPenyusutan } from "./KalkulatorPenyusutan";
import { KalkulatorPersediaan } from "./KalkulatorPersediaan";
// Pajak (UMKM)
import { SimulatorPajakUMKM } from "./SimulatorPajakUMKM";
import { CekStatusPajak } from "./CekStatusPajak";
import { SimulatorPPN } from "./SimulatorPPN";
import { SimulatorPPh21 } from "./SimulatorPPh21";
import { SimulatorDendaPajak } from "./SimulatorDendaPajak";
import { SimulatorPembukuanVsFinal } from "./SimulatorPembukuanVsFinal";
import { SimulatorOmzetKumulatif } from "./SimulatorOmzetKumulatif";
import { SimulatorPPhBadan } from "./SimulatorPPhBadan";
import { WizardSPT } from "./WizardSPT";
// Climate Finance
import { SimulatorGreenBond } from "./SimulatorGreenBond";
import { SimulatorRisikoTransisi } from "./SimulatorRisikoTransisi";
import { SimulatorBlendedFinance } from "./SimulatorBlendedFinance";
import { KalkulatorProyekHijau } from "./KalkulatorProyekHijau";
import { SimulatorAnalisisSkenario } from "./SimulatorAnalisisSkenario";
import { SimulatorSLB } from "./SimulatorSLB";
import { SimulatorESGRating } from "./SimulatorESGRating";
import { DetektorGreenwashing } from "./DetektorGreenwashing";
import { KalkulatorTaksonomi } from "./KalkulatorTaksonomi";
import { KalkulatorDampakIklim } from "./KalkulatorDampakIklim";
// Corporate Finance
import { KalkulatorCapitalBudgeting } from "./KalkulatorCapitalBudgeting";
import { KalkulatorWACC } from "./KalkulatorWACC";
import { SimulatorStrukturModal } from "./SimulatorStrukturModal";
import { KalkulatorDSCR } from "./KalkulatorDSCR";
import { SimulatorLBO } from "./SimulatorLBO";
import { SimulatorCashConversion } from "./SimulatorCashConversion";
import { SimulatorDividen } from "./SimulatorDividen";
import { SimulatorHedgingFX } from "./SimulatorHedgingFX";
import { KalkulatorModalKerja } from "./KalkulatorModalKerja";
import { SimulatorSinergiMnA } from "./SimulatorSinergiMnA";
import { KalkulatorValuasiDCF } from "./KalkulatorValuasiDCF";
// Investasi
import { SimulatorPortofolio } from "./SimulatorPortofolio";
import { KalkulatorValuasiSaham } from "./KalkulatorValuasiSaham";
import { SimulatorBungaMajemuk } from "./SimulatorBungaMajemuk";
import { SimulatorVC } from "./SimulatorVC";
import { SimulatorAlokasiAset } from "./SimulatorAlokasiAset";
import { SimulatorRisikoImbalHasil } from "./SimulatorRisikoImbalHasil";
import { KalkulatorRasioKeuangan } from "./KalkulatorRasioKeuangan";
import { KalkulatorObligasi } from "./KalkulatorObligasi";
import { SimulatorDCA } from "./SimulatorDCA";
import { SimulatorReksaDana } from "./SimulatorReksaDana";
import { KalkulatorSharpe } from "./KalkulatorSharpe";
// Kepabeanan (Ekspor/Impor & Bea Cukai)
import { KalkulatorLandedCost } from "./KalkulatorLandedCost";
import { SimulatorIncoterms } from "./SimulatorIncoterms";
import { SimulatorJalurPabean } from "./SimulatorJalurPabean";
import { KalkulatorNilaiPabean } from "./KalkulatorNilaiPabean";
import { SimulatorHSCode } from "./SimulatorHSCode";
import { SimulatorPembayaranEkspor } from "./SimulatorPembayaranEkspor";
import { KalkulatorBeaKeluar } from "./KalkulatorBeaKeluar";
import { SimulatorRulesOfOrigin } from "./SimulatorRulesOfOrigin";
import { SimulatorFCLvsLCL } from "./SimulatorFCLvsLCL";
import { KalkulatorDemurrage } from "./KalkulatorDemurrage";
import { KalkulatorAsuransiKargo } from "./KalkulatorAsuransiKargo";
import { KalkulatorSanksiPabean } from "./KalkulatorSanksiPabean";
import { SimulatorFasilitasFiskal } from "./SimulatorFasilitasFiskal";
import { KalkulatorTradeFinance } from "./KalkulatorTradeFinance";
// Pasar Keuangan
import { KalkulatorDeposito } from "./KalkulatorDeposito";
import { SimulatorTransmisiSukuBunga } from "./SimulatorTransmisiSukuBunga";
import { SimulatorOrderBook } from "./SimulatorOrderBook";
import { KalkulatorReturnSaham } from "./KalkulatorReturnSaham";
import { SimulatorYieldCurve } from "./SimulatorYieldCurve";
import { KalkulatorOpsi } from "./KalkulatorOpsi";
import { SimulatorValas } from "./SimulatorValas";
// Mikroekonomi
import { SimulatorKeseimbanganPasar } from "./SimulatorKeseimbanganPasar";
import { KalkulatorBiayaPeluang } from "./KalkulatorBiayaPeluang";
import { KalkulatorElastisitas } from "./KalkulatorElastisitas";
import { SimulatorBiayaProduksi } from "./SimulatorBiayaProduksi";
import { SimulatorLabaMaksimum } from "./SimulatorLabaMaksimum";
import { SimulatorStrukturPasar } from "./SimulatorStrukturPasar";
import { SimulatorSurplus } from "./SimulatorSurplus";
import { SimulatorIntervensiHarga } from "./SimulatorIntervensiHarga";
import { KalkulatorUtilitas } from "./KalkulatorUtilitas";
import { SimulatorTitikImpas } from "./SimulatorTitikImpas";
import { KalkulatorEksternalitas } from "./KalkulatorEksternalitas";
// Makroekonomi
import { KalkulatorPDB } from "./KalkulatorPDB";
import { KalkulatorInflasi } from "./KalkulatorInflasi";
import { KalkulatorPengangguran } from "./KalkulatorPengangguran";
import { KalkulatorMultiplier } from "./KalkulatorMultiplier";
import { SimulatorKebijakanFiskal } from "./SimulatorKebijakanFiskal";
import { SimulatorPertumbuhanEkonomi } from "./SimulatorPertumbuhanEkonomi";
import { KalkulatorPertumbuhanPDB } from "./KalkulatorPertumbuhanPDB";
import { SimulatorIndikatorMakro } from "./SimulatorIndikatorMakro";
import { SimulatorKebijakanMoneter } from "./SimulatorKebijakanMoneter";
import { KalkulatorNeracaPembayaran } from "./KalkulatorNeracaPembayaran";
import { SimulatorADAS } from "./SimulatorADAS";
import { KalkulatorIPM } from "./KalkulatorIPM";
// Kebijakan Fiskal (Indonesia)
import { SimulatorAPBN } from "./SimulatorAPBN";
import { KalkulatorTaxRatio } from "./KalkulatorTaxRatio";
import { SimulatorSubsidiBansos } from "./SimulatorSubsidiBansos";
import { KalkulatorTransferDaerah } from "./KalkulatorTransferDaerah";
import { KalkulatorRasioUtang } from "./KalkulatorRasioUtang";
import { SimulatorStabilisasiFiskal } from "./SimulatorStabilisasiFiskal";
import { KalkulatorPPh } from "./KalkulatorPPh";
import { KalkulatorPNBP } from "./KalkulatorPNBP";
import { SimulatorAsumsiMakro } from "./SimulatorAsumsiMakro";
import { KalkulatorPrimaryBalance } from "./KalkulatorPrimaryBalance";
// Logika
import { TabelKebenaranBuilder } from "./TabelKebenaranBuilder";
import { EvaluatorProposisi } from "./EvaluatorProposisi";
import { DetektorFallacy } from "./DetektorFallacy";
import { CekValiditasSilogisme } from "./CekValiditasSilogisme";
import { SimulatorOperatorLogika } from "./SimulatorOperatorLogika";
import { LatihanKuadratOposisi } from "./LatihanKuadratOposisi";
import { IdentifikasiModus } from "./IdentifikasiModus";
import { DetektorBiasKognitif } from "./DetektorBiasKognitif";
import { DetektorPremisTersembunyi } from "./DetektorPremisTersembunyi";
import { PenyusunArgumen } from "./PenyusunArgumen";
import { PenilaiKlaim } from "./PenilaiKlaim";
// Matematika Dasar
import { PenjelajahPola } from "./PenjelajahPola";
import { SimulatorFibonacci } from "./SimulatorFibonacci";
import { PenemuLuas } from "./PenemuLuas";
import { EksplorasiPythagoras } from "./EksplorasiPythagoras";
import { SimulatorRasio } from "./SimulatorRasio";
import { KalkulatorPersenHidup } from "./KalkulatorPersenHidup";
import { SimulatorPeluang } from "./SimulatorPeluang";
import { SimulatorPecahan } from "./SimulatorPecahan";
import { SimulatorOperasi } from "./SimulatorOperasi";
import { PenjelajahBentuk } from "./PenjelajahBentuk";
import { SimulatorPi } from "./SimulatorPi";
import { SimulatorProporsi } from "./SimulatorProporsi";
import { SimulatorKecepatan } from "./SimulatorKecepatan";
import { SimulatorStatistik } from "./SimulatorStatistik";
// Aljabar / Geometri / Trigonometri / Fungsi / Logika Matematika / Statistika / Kalkulus
import { PolaKeAljabar } from "./PolaKeAljabar";
import { SimulatorTimbangan } from "./SimulatorTimbangan";
import { SimulatorSudut } from "./SimulatorSudut";
import { SimulatorVolume } from "./SimulatorVolume";
import { SimulatorTrigonometri } from "./SimulatorTrigonometri";
import { SimulatorLingkaranSatuan } from "./SimulatorLingkaranSatuan";
import { SimulatorMesinFungsi } from "./SimulatorMesinFungsi";
import { PlotterFungsi } from "./PlotterFungsi";
import { SimulatorHimpunan } from "./SimulatorHimpunan";
import { SimulatorPenyebaran } from "./SimulatorPenyebaran";
import { SimulatorLimit } from "./SimulatorLimit";
import { SimulatorTurunan } from "./SimulatorTurunan";
import { SimulatorIntegral } from "./SimulatorIntegral";
// Fisika Dasar
import { AngkaPenting } from "./AngkaPenting";
import { KonversiSatuan } from "./KonversiSatuan";
import { SimulatorGLBB } from "./SimulatorGLBB";
import { SimulatorHukumNewton } from "./SimulatorHukumNewton";
import { KalkulatorUsahaEnergi } from "./KalkulatorUsahaEnergi";
import { SimulatorTumbukan } from "./SimulatorTumbukan";
import { SimulatorGelombang } from "./SimulatorGelombang";
import { KalkulatorOhm } from "./KalkulatorOhm";
// Filsafat
import { SimulatorDilemaEtika } from "./SimulatorDilemaEtika";
import { PencocokAliranFilsafat } from "./PencocokAliranFilsafat";
import { PetaCabangFilsafat } from "./PetaCabangFilsafat";
import { GarisWaktuFilsuf } from "./GarisWaktuFilsuf";
import { SimulatorDialektika } from "./SimulatorDialektika";
import { CocokkanFilsufEra } from "./CocokkanFilsufEra";
import { SimulatorTeoriKebenaran } from "./SimulatorTeoriKebenaran";
import { TebakFilsuf } from "./TebakFilsuf";
import { KuisAliranEtika } from "./KuisAliranEtika";
// Cryptocurrency
import { SimulatorDoubleSpending } from "./SimulatorDoubleSpending";
import { SimulatorBlokHash } from "./SimulatorBlokHash";
import { SimulatorHashKripto } from "./SimulatorHashKripto";
import { SimulatorHalvingBitcoin } from "./SimulatorHalvingBitcoin";
import { KalkulatorGasFee } from "./KalkulatorGasFee";
import { SimulatorPoWvsPoS } from "./SimulatorPoWvsPoS";
import { SimulatorEscrowKontrak } from "./SimulatorEscrowKontrak";
import { SimulatorAMM } from "./SimulatorAMM";
import { SimulatorCollateralStablecoin } from "./SimulatorCollateralStablecoin";
import { SimulatorTokenomics } from "./SimulatorTokenomics";
import { SimulatorRoyaltiNFT } from "./SimulatorRoyaltiNFT";
import { SimulatorBridge } from "./SimulatorBridge";
import { SimulatorMultisig } from "./SimulatorMultisig";
import { SimulatorDCAKripto } from "./SimulatorDCAKripto";
import { SimulatorMerkleTree } from "./SimulatorMerkleTree";
import { SimulatorMining } from "./SimulatorMining";
import { SimulatorVesting } from "./SimulatorVesting";
import { SimulatorLiquidation } from "./SimulatorLiquidation";
import { SimulatorStaking } from "./SimulatorStaking";
import { SimulatorFeeMarket } from "./SimulatorFeeMarket";

export const widgetRegistry: Record<WidgetId, FC> = {
  KalkulatorJejakKarbon,
  SimulatorCapTrade,
  KalkulatorPajakKarbon,
  SimulatorOffset,
  EquationPlayground,
  DebitKreditDrill,
  KalkulatorPenyusutan,
  KalkulatorPersediaan,
  SimulatorPajakUMKM,
  CekStatusPajak,
  SimulatorPPN,
  SimulatorPPh21,
  SimulatorDendaPajak,
  SimulatorPembukuanVsFinal,
  SimulatorOmzetKumulatif,
  SimulatorPPhBadan,
  WizardSPT,
  SimulatorGreenBond,
  SimulatorRisikoTransisi,
  SimulatorBlendedFinance,
  KalkulatorProyekHijau,
  SimulatorAnalisisSkenario,
  SimulatorSLB,
  SimulatorESGRating,
  DetektorGreenwashing,
  KalkulatorTaksonomi,
  KalkulatorDampakIklim,
  KalkulatorCapitalBudgeting,
  KalkulatorWACC,
  SimulatorStrukturModal,
  KalkulatorDSCR,
  SimulatorLBO,
  SimulatorCashConversion,
  SimulatorDividen,
  SimulatorHedgingFX,
  KalkulatorModalKerja,
  SimulatorSinergiMnA,
  KalkulatorValuasiDCF,
  SimulatorPortofolio,
  KalkulatorValuasiSaham,
  SimulatorBungaMajemuk,
  SimulatorVC,
  SimulatorAlokasiAset,
  SimulatorRisikoImbalHasil,
  KalkulatorRasioKeuangan,
  KalkulatorObligasi,
  SimulatorDCA,
  SimulatorReksaDana,
  KalkulatorSharpe,
  KalkulatorLandedCost,
  SimulatorIncoterms,
  SimulatorJalurPabean,
  KalkulatorNilaiPabean,
  SimulatorHSCode,
  SimulatorPembayaranEkspor,
  KalkulatorBeaKeluar,
  SimulatorRulesOfOrigin,
  SimulatorFCLvsLCL,
  KalkulatorDemurrage,
  KalkulatorAsuransiKargo,
  KalkulatorSanksiPabean,
  SimulatorFasilitasFiskal,
  KalkulatorTradeFinance,
  KalkulatorDeposito,
  SimulatorTransmisiSukuBunga,
  SimulatorOrderBook,
  KalkulatorReturnSaham,
  SimulatorYieldCurve,
  KalkulatorOpsi,
  SimulatorValas,
  SimulatorKeseimbanganPasar,
  KalkulatorBiayaPeluang,
  KalkulatorElastisitas,
  SimulatorBiayaProduksi,
  SimulatorLabaMaksimum,
  SimulatorStrukturPasar,
  SimulatorSurplus,
  SimulatorIntervensiHarga,
  KalkulatorUtilitas,
  SimulatorTitikImpas,
  KalkulatorEksternalitas,
  KalkulatorPDB,
  KalkulatorInflasi,
  KalkulatorPengangguran,
  KalkulatorMultiplier,
  SimulatorKebijakanFiskal,
  SimulatorPertumbuhanEkonomi,
  KalkulatorPertumbuhanPDB,
  SimulatorIndikatorMakro,
  SimulatorKebijakanMoneter,
  KalkulatorNeracaPembayaran,
  SimulatorADAS,
  KalkulatorIPM,
  SimulatorAPBN,
  KalkulatorTaxRatio,
  SimulatorSubsidiBansos,
  KalkulatorTransferDaerah,
  KalkulatorRasioUtang,
  SimulatorStabilisasiFiskal,
  KalkulatorPPh,
  KalkulatorPNBP,
  SimulatorAsumsiMakro,
  KalkulatorPrimaryBalance,
  TabelKebenaranBuilder,
  EvaluatorProposisi,
  DetektorFallacy,
  CekValiditasSilogisme,
  SimulatorOperatorLogika,
  LatihanKuadratOposisi,
  IdentifikasiModus,
  DetektorBiasKognitif,
  DetektorPremisTersembunyi,
  PenyusunArgumen,
  PenilaiKlaim,
  PenjelajahPola,
  SimulatorFibonacci,
  PenemuLuas,
  EksplorasiPythagoras,
  SimulatorRasio,
  KalkulatorPersenHidup,
  SimulatorPeluang,
  SimulatorPecahan,
  SimulatorOperasi,
  PenjelajahBentuk,
  SimulatorPi,
  SimulatorProporsi,
  SimulatorKecepatan,
  SimulatorStatistik,
  PolaKeAljabar,
  SimulatorTimbangan,
  SimulatorSudut,
  SimulatorVolume,
  SimulatorTrigonometri,
  SimulatorLingkaranSatuan,
  SimulatorMesinFungsi,
  PlotterFungsi,
  SimulatorHimpunan,
  SimulatorPenyebaran,
  SimulatorLimit,
  SimulatorTurunan,
  SimulatorIntegral,
  AngkaPenting,
  KonversiSatuan,
  SimulatorGLBB,
  SimulatorHukumNewton,
  KalkulatorUsahaEnergi,
  SimulatorTumbukan,
  SimulatorGelombang,
  KalkulatorOhm,
  SimulatorDilemaEtika,
  PencocokAliranFilsafat,
  PetaCabangFilsafat,
  GarisWaktuFilsuf,
  SimulatorDialektika,
  CocokkanFilsufEra,
  SimulatorTeoriKebenaran,
  TebakFilsuf,
  KuisAliranEtika,
  SimulatorDoubleSpending,
  SimulatorBlokHash,
  SimulatorHashKripto,
  SimulatorHalvingBitcoin,
  KalkulatorGasFee,
  SimulatorPoWvsPoS,
  SimulatorEscrowKontrak,
  SimulatorAMM,
  SimulatorCollateralStablecoin,
  SimulatorTokenomics,
  SimulatorRoyaltiNFT,
  SimulatorBridge,
  SimulatorMultisig,
  SimulatorDCAKripto,
  SimulatorMerkleTree,
  SimulatorMining,
  SimulatorVesting,
  SimulatorLiquidation,
  SimulatorStaking,
  SimulatorFeeMarket,
};
