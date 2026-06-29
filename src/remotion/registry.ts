import type { VideoComp } from "../types";
// Carbon
import { EfekRumahKaca, EfekRumahKacaDuration } from "./EfekRumahKaca";
import { PasarKarbon, PasarKarbonDuration } from "./PasarKarbon";
import { CapAndTrade, CapAndTradeDuration } from "./CapAndTrade";
import { SiklusCarbonCredit, SiklusCarbonCreditDuration } from "./SiklusCarbonCredit";
import { MRV, MRVDuration } from "./MRV";
import { MekanismeHarga, MekanismeHargaDuration } from "./MekanismeHarga";
import { ParisArticle6, ParisArticle6Duration } from "./ParisArticle6";
import { ScopeEmisi, ScopeEmisiDuration } from "./ScopeEmisi";
import { CarbonFinanceFlow, CarbonFinanceFlowDuration } from "./CarbonFinanceFlow";
// Akuntansi
import { PersamaanAkuntansi, PersamaanAkuntansiDuration } from "./PersamaanAkuntansi";
import { DebitKredit, DebitKreditDuration } from "./DebitKredit";
import { SiklusAkuntansi, SiklusAkuntansiDuration } from "./SiklusAkuntansi";
import { GolonganAkun, GolonganAkunDuration } from "./GolonganAkun";
import { AlurJurnal, AlurJurnalDuration } from "./AlurJurnal";
import { Posting, PostingDuration } from "./Posting";
import { LaporanKeuangan, LaporanKeuanganDuration } from "./LaporanKeuangan";
import { PersediaanFIFO, PersediaanFIFODuration } from "./PersediaanFIFO";
import { Penyusutan, PenyusutanDuration } from "./Penyusutan";
import { ArusKas, ArusKasDuration } from "./ArusKas";
// Pajak
import { AlurPajakUMKM, AlurPajakUMKMDuration } from "./AlurPajakUMKM";
import { AlurPPN, AlurPPNDuration } from "./AlurPPN";
import { PetaPajakUMKM, PetaPajakUMKMDuration } from "./PetaPajakUMKM";
import { Fasilitas500, Fasilitas500Duration } from "./Fasilitas500";
import { TarifProgresif, TarifProgresifDuration } from "./TarifProgresif";
import { KalenderPajak, KalenderPajakDuration } from "./KalenderPajak";
import { DendaTumbuh, DendaTumbuhDuration } from "./DendaTumbuh";
// Climate Finance
import { AlurClimateFinance, AlurClimateFinanceDuration } from "./AlurClimateFinance";
import { RisikoFisikTransisi, RisikoFisikTransisiDuration } from "./RisikoFisikTransisi";
import { FinancingGap, FinancingGapDuration } from "./FinancingGap";
import { GreenBondFlow, GreenBondFlowDuration } from "./GreenBondFlow";
import { TaksonomiHijauVideo, TaksonomiHijauVideoDuration } from "./TaksonomiHijauVideo";
import { GreenwashingVideo, GreenwashingVideoDuration } from "./GreenwashingVideo";
import { AnalisisSkenarioVideo, AnalisisSkenarioVideoDuration } from "./AnalisisSkenarioVideo";
import { StrandedAssetVideo, StrandedAssetVideoDuration } from "./StrandedAssetVideo";
import { JustTransitionVideo, JustTransitionVideoDuration } from "./JustTransitionVideo";
import { SLBStepUpVideo, SLBStepUpVideoDuration } from "./SLBStepUpVideo";
// Corporate Finance
import { NilaiWaktuUang, NilaiWaktuUangDuration } from "./NilaiWaktuUang";
import { ProjectFinanceSPV, ProjectFinanceSPVDuration } from "./ProjectFinanceSPV";
import { ProsesMnA, ProsesMnADuration } from "./ProsesMnA";
import { LBOFlow, LBOFlowDuration } from "./LBOFlow";
import { NPVIRRVideo, NPVIRRVideoDuration } from "./NPVIRRVideo";
import { StrukturModalVideo, StrukturModalVideoDuration } from "./StrukturModalVideo";
import { KebijakanDividenVideo, KebijakanDividenVideoDuration } from "./KebijakanDividenVideo";
import { CashConversionVideo, CashConversionVideoDuration } from "./CashConversionVideo";
import { HedgingFXVideo, HedgingFXVideoDuration } from "./HedgingFXVideo";
import { SinergiMnAVideo, SinergiMnAVideoDuration } from "./SinergiMnAVideo";
// Investasi
import { AssetManagementFlow, AssetManagementFlowDuration } from "./AssetManagementFlow";
import { DiversifikasiVideo, DiversifikasiVideoDuration } from "./DiversifikasiVideo";
import { VCFunnel, VCFunnelDuration } from "./VCFunnel";
import { BungaMajemukVideo, BungaMajemukVideoDuration } from "./BungaMajemukVideo";
import { RisikoImbalHasilVideo, RisikoImbalHasilVideoDuration } from "./RisikoImbalHasilVideo";
import { ValuasiSahamVideo, ValuasiSahamVideoDuration } from "./ValuasiSahamVideo";
import { RasioKeuanganVideo, RasioKeuanganVideoDuration } from "./RasioKeuanganVideo";
import { DollarCostAveragingVideo, DollarCostAveragingVideoDuration } from "./DollarCostAveragingVideo";
import { ObligasiYieldVideo, ObligasiYieldVideoDuration } from "./ObligasiYieldVideo";
import { RebalancingVideo, RebalancingVideoDuration } from "./RebalancingVideo";
// Kepabeanan
import { AlurImpor, AlurImporDuration } from "./AlurImpor";
import { AlurEkspor, AlurEksporDuration } from "./AlurEkspor";
import { StrukturHSCode, StrukturHSCodeDuration } from "./StrukturHSCode";
import { IncotermsVideo, IncotermsVideoDuration } from "./IncotermsVideo";
import { PungutanImpor, PungutanImporDuration } from "./PungutanImpor";
import { SupplyChainVideo, SupplyChainVideoDuration } from "./SupplyChainVideo";
import { DokumenEksporImporVideo, DokumenEksporImporVideoDuration } from "./DokumenEksporImporVideo";
import { LogistikKontainerVideo, LogistikKontainerVideoDuration } from "./LogistikKontainerVideo";
import { MarineInsuranceVideo, MarineInsuranceVideoDuration } from "./MarineInsuranceVideo";
import { AuditPCAVideo, AuditPCAVideoDuration } from "./AuditPCAVideo";
import { RisikoPelanggaranVideo, RisikoPelanggaranVideoDuration } from "./RisikoPelanggaranVideo";
import { DigitalCustomsVideo, DigitalCustomsVideoDuration } from "./DigitalCustomsVideo";
import { TradeAgreementVideo, TradeAgreementVideoDuration } from "./TradeAgreementVideo";
// Pasar Keuangan
import { AlurPasarKeuangan, AlurPasarKeuanganDuration } from "./AlurPasarKeuangan";
import { PasarUangVsModal, PasarUangVsModalDuration } from "./PasarUangVsModal";
import { SukuBungaAcuan, SukuBungaAcuanDuration } from "./SukuBungaAcuan";
import { MekanismePerdaganganSaham, MekanismePerdaganganSahamDuration } from "./MekanismePerdaganganSaham";
import { IPOFlow, IPOFlowDuration } from "./IPOFlow";
import { YieldCurveVideo, YieldCurveVideoDuration } from "./YieldCurveVideo";
import { OpsiCallPut, OpsiCallPutDuration } from "./OpsiCallPut";
import { EfisiensiPasar, EfisiensiPasarDuration } from "./EfisiensiPasar";
// Mikroekonomi
import { KelangkaanPilihan, KelangkaanPilihanDuration } from "./KelangkaanPilihan";
import { PermintaanPenawaran, PermintaanPenawaranDuration } from "./PermintaanPenawaran";
import { PergeseranKurva, PergeseranKurvaDuration } from "./PergeseranKurva";
import { ElastisitasVideo, ElastisitasVideoDuration } from "./ElastisitasVideo";
import { BiayaProduksi, BiayaProduksiDuration } from "./BiayaProduksi";
import { StrukturPasarVideo, StrukturPasarVideoDuration } from "./StrukturPasarVideo";
import { CircularFlow, CircularFlowDuration } from "./CircularFlow";
import { SistemEkonomi, SistemEkonomiDuration } from "./SistemEkonomi";
import { SurplusKonsumenProdusen, SurplusKonsumenProdusenDuration } from "./SurplusKonsumenProdusen";
import { IntervensiHarga, IntervensiHargaDuration } from "./IntervensiHarga";
import { UtilitasMarginal, UtilitasMarginalDuration } from "./UtilitasMarginal";
import { ElastisitasPenawaran, ElastisitasPenawaranDuration } from "./ElastisitasPenawaran";
import { KegagalanPasar, KegagalanPasarDuration } from "./KegagalanPasar";
import { MonopoliVsPersaingan, MonopoliVsPersainganDuration } from "./MonopoliVsPersaingan";
// Makroekonomi
import { KomponenPDB, KomponenPDBDuration } from "./KomponenPDB";
import { InflasiVideo, InflasiVideoDuration } from "./InflasiVideo";
import { KurvaPhillips, KurvaPhillipsDuration } from "./KurvaPhillips";
import { KebijakanMoneterFiskal, KebijakanMoneterFiskalDuration } from "./KebijakanMoneterFiskal";
import { KeunggulanKomparatif, KeunggulanKomparatifDuration } from "./KeunggulanKomparatif";
import { SiklusBisnis, SiklusBisnisDuration } from "./SiklusBisnis";
import { ADASVideo, ADASVideoDuration } from "./ADASVideo";
import { PertumbuhanMajemuk, PertumbuhanMajemukDuration } from "./PertumbuhanMajemuk";
import { IndikatorMakro, IndikatorMakroDuration } from "./IndikatorMakro";
import { KebijakanMoneterVideo, KebijakanMoneterVideoDuration } from "./KebijakanMoneterVideo";
import { NeracaPembayaran, NeracaPembayaranDuration } from "./NeracaPembayaran";
import { NilaiTukarVideo, NilaiTukarVideoDuration } from "./NilaiTukarVideo";
import { GlobalisasiVideo, GlobalisasiVideoDuration } from "./GlobalisasiVideo";
import { PembangunanEkonomi, PembangunanEkonomiDuration } from "./PembangunanEkonomi";
// Kebijakan Fiskal
import { FungsiFiskal, FungsiFiskalDuration } from "./FungsiFiskal";
import { SiklusAPBN, SiklusAPBNDuration } from "./SiklusAPBN";
import { PosturAPBN, PosturAPBNDuration } from "./PosturAPBN";
import { SumberPenerimaanNegara, SumberPenerimaanNegaraDuration } from "./SumberPenerimaanNegara";
import { DefisitUtangFiskal, DefisitUtangFiskalDuration } from "./DefisitUtangFiskal";
import { EkspansifKontraktif, EkspansifKontraktifDuration } from "./EkspansifKontraktif";
import { FiskalVsMoneter, FiskalVsMoneterDuration } from "./FiskalVsMoneter";
import { JenisPajakVideo, JenisPajakVideoDuration } from "./JenisPajakVideo";
import { ReformasiPerpajakan, ReformasiPerpajakanDuration } from "./ReformasiPerpajakan";
import { SubsidiBansosVideo, SubsidiBansosVideoDuration } from "./SubsidiBansosVideo";
import { TransferDaerahVideo, TransferDaerahVideoDuration } from "./TransferDaerahVideo";
import { UtangPemerintah, UtangPemerintahDuration } from "./UtangPemerintah";
import { KeberlanjutanFiskal, KeberlanjutanFiskalDuration } from "./KeberlanjutanFiskal";
// Logika
import { DeduktifInduktif, DeduktifInduktifDuration } from "./DeduktifInduktif";
import { TabelKebenaran, TabelKebenaranDuration } from "./TabelKebenaran";
import { SilogismeVideo, SilogismeVideoDuration } from "./SilogismeVideo";
import { FallacyVideo, FallacyVideoDuration } from "./FallacyVideo";
import { BerpikirKritis, BerpikirKritisDuration } from "./BerpikirKritis";
import { AbduksiVideo, AbduksiVideoDuration } from "./AbduksiVideo";
import { OperatorLogika, OperatorLogikaDuration } from "./OperatorLogika";
import { TautologiKontradiksi, TautologiKontradiksiDuration } from "./TautologiKontradiksi";
import { HukumDeMorgan, HukumDeMorganDuration } from "./HukumDeMorgan";
import { KuadratOposisi, KuadratOposisiDuration } from "./KuadratOposisi";
import { ModusPonensTollens, ModusPonensTollensDuration } from "./ModusPonensTollens";
import { FallacyFormalInformal, FallacyFormalInformalDuration } from "./FallacyFormalInformal";
import { StrukturArgumen, StrukturArgumenDuration } from "./StrukturArgumen";
import { BiasKognitif, BiasKognitifDuration } from "./BiasKognitif";
// Filsafat
import { CabangFilsafat, CabangFilsafatDuration } from "./CabangFilsafat";
import { RasionalismeEmpirisme, RasionalismeEmpirismeDuration } from "./RasionalismeEmpirisme";
import { KehendakBebas, KehendakBebasDuration } from "./KehendakBebas";
import { TigaTeoriEtika, TigaTeoriEtikaDuration } from "./TigaTeoriEtika";
import { DilemaTrolley, DilemaTrolleyDuration } from "./DilemaTrolley";
// Matematika Dasar
import { MatematikaVsBerhitung, MatematikaVsBerhitungDuration } from "./MatematikaVsBerhitung";
import { PolaAlam, PolaAlamDuration } from "./PolaAlam";
import { BahasaSemesta, BahasaSemestaDuration } from "./BahasaSemesta";
import { LahirnyaBilangan, LahirnyaBilanganDuration } from "./LahirnyaBilangan";
import { MenemukanLuas, MenemukanLuasDuration } from "./MenemukanLuas";
import { PythagorasPetualangan, PythagorasPetualanganDuration } from "./PythagorasPetualangan";
import { RasioKehidupan, RasioKehidupanDuration } from "./RasioKehidupan";
import { LajuPerubahan, LajuPerubahanDuration } from "./LajuPerubahan";
import { PeluangVideo, PeluangVideoDuration } from "./PeluangVideo";
import { EmpatOperasi, EmpatOperasiDuration } from "./EmpatOperasi";
import { LahirnyaPi, LahirnyaPiDuration } from "./LahirnyaPi";
import { BentukGeometri, BentukGeometriDuration } from "./BentukGeometri";
import { ProporsiVideo, ProporsiVideoDuration } from "./ProporsiVideo";
import { PersenVideo, PersenVideoDuration } from "./PersenVideo";
import { StatistikaVideo, StatistikaVideoDuration } from "./StatistikaVideo";
import { BerpikirMatematis, BerpikirMatematisDuration } from "./BerpikirMatematis";
// Aljabar / Geometri / Trigonometri / Fungsi / Logika Matematika / Statistika / Kalkulus
import { AljabarVideo, AljabarVideoDuration } from "./AljabarVideo";
import { PersamaanVideo, PersamaanVideoDuration } from "./PersamaanVideo";
import { SudutVideo, SudutVideoDuration } from "./SudutVideo";
import { VolumeVideo, VolumeVideoDuration } from "./VolumeVideo";
import { TrigonometriVideo, TrigonometriVideoDuration } from "./TrigonometriVideo";
import { LingkaranSatuanVideo, LingkaranSatuanVideoDuration } from "./LingkaranSatuanVideo";
import { FungsiVideo, FungsiVideoDuration } from "./FungsiVideo";
import { HimpunanVideo, HimpunanVideoDuration } from "./HimpunanVideo";
import { PenyebaranVideo, PenyebaranVideoDuration } from "./PenyebaranVideo";
import { LimitVideo, LimitVideoDuration } from "./LimitVideo";
import { TurunanVideo, TurunanVideoDuration } from "./TurunanVideo";
import { IntegralVideo, IntegralVideoDuration } from "./IntegralVideo";
// Fisika Dasar
import { BesaranSatuan, BesaranSatuanDuration } from "./BesaranSatuan";
import { AnalisisDimensi, AnalisisDimensiDuration } from "./AnalisisDimensi";
import { HukumNewtonVideo, HukumNewtonVideoDuration } from "./HukumNewtonVideo";
import { UsahaEnergiVideo, UsahaEnergiVideoDuration } from "./UsahaEnergiVideo";
import { MomentumVideo, MomentumVideoDuration } from "./MomentumVideo";
import { GelombangFisika, GelombangFisikaDuration } from "./GelombangFisika";
import { HukumOhmVideo, HukumOhmVideoDuration } from "./HukumOhmVideo";
import { PembiasanCahaya, PembiasanCahayaDuration } from "./PembiasanCahaya";
import { GarisWaktuFilsafat, GarisWaktuFilsafatDuration } from "./GarisWaktuFilsafat";
import { DialektikaHegel, DialektikaHegelDuration } from "./DialektikaHegel";
import { EvolusiPemikiran, EvolusiPemikiranDuration } from "./EvolusiPemikiran";
import { SkeptisismeDescartes, SkeptisismeDescartesDuration } from "./SkeptisismeDescartes";
import { TeoriKebenaran, TeoriKebenaranDuration } from "./TeoriKebenaran";
import { MaterialismeIdealisme, MaterialismeIdealismeDuration } from "./MaterialismeIdealisme";
import { EksistensialismeVideo, EksistensialismeVideoDuration } from "./EksistensialismeVideo";
import { FilsafatTimurVideo, FilsafatTimurVideoDuration } from "./FilsafatTimurVideo";
import { KeadilanVideo, KeadilanVideoDuration } from "./KeadilanVideo";
import type { FC } from "react";
import { VIDEO } from "./theme";

interface CompEntry {
  component: FC;
  durationInFrames: number;
}

export const videoRegistry: Record<VideoComp, CompEntry> = {
  // Carbon
  EfekRumahKaca: { component: EfekRumahKaca, durationInFrames: EfekRumahKacaDuration },
  PasarKarbon: { component: PasarKarbon, durationInFrames: PasarKarbonDuration },
  CapAndTrade: { component: CapAndTrade, durationInFrames: CapAndTradeDuration },
  SiklusCarbonCredit: { component: SiklusCarbonCredit, durationInFrames: SiklusCarbonCreditDuration },
  MRV: { component: MRV, durationInFrames: MRVDuration },
  MekanismeHarga: { component: MekanismeHarga, durationInFrames: MekanismeHargaDuration },
  ParisArticle6: { component: ParisArticle6, durationInFrames: ParisArticle6Duration },
  ScopeEmisi: { component: ScopeEmisi, durationInFrames: ScopeEmisiDuration },
  CarbonFinanceFlow: { component: CarbonFinanceFlow, durationInFrames: CarbonFinanceFlowDuration },
  // Akuntansi
  PersamaanAkuntansi: { component: PersamaanAkuntansi, durationInFrames: PersamaanAkuntansiDuration },
  DebitKredit: { component: DebitKredit, durationInFrames: DebitKreditDuration },
  SiklusAkuntansi: { component: SiklusAkuntansi, durationInFrames: SiklusAkuntansiDuration },
  GolonganAkun: { component: GolonganAkun, durationInFrames: GolonganAkunDuration },
  AlurJurnal: { component: AlurJurnal, durationInFrames: AlurJurnalDuration },
  Posting: { component: Posting, durationInFrames: PostingDuration },
  LaporanKeuangan: { component: LaporanKeuangan, durationInFrames: LaporanKeuanganDuration },
  PersediaanFIFO: { component: PersediaanFIFO, durationInFrames: PersediaanFIFODuration },
  Penyusutan: { component: Penyusutan, durationInFrames: PenyusutanDuration },
  ArusKas: { component: ArusKas, durationInFrames: ArusKasDuration },
  // Pajak
  AlurPajakUMKM: { component: AlurPajakUMKM, durationInFrames: AlurPajakUMKMDuration },
  AlurPPN: { component: AlurPPN, durationInFrames: AlurPPNDuration },
  PetaPajakUMKM: { component: PetaPajakUMKM, durationInFrames: PetaPajakUMKMDuration },
  Fasilitas500: { component: Fasilitas500, durationInFrames: Fasilitas500Duration },
  TarifProgresif: { component: TarifProgresif, durationInFrames: TarifProgresifDuration },
  KalenderPajak: { component: KalenderPajak, durationInFrames: KalenderPajakDuration },
  DendaTumbuh: { component: DendaTumbuh, durationInFrames: DendaTumbuhDuration },
  // Climate Finance
  AlurClimateFinance: { component: AlurClimateFinance, durationInFrames: AlurClimateFinanceDuration },
  RisikoFisikTransisi: { component: RisikoFisikTransisi, durationInFrames: RisikoFisikTransisiDuration },
  FinancingGap: { component: FinancingGap, durationInFrames: FinancingGapDuration },
  GreenBondFlow: { component: GreenBondFlow, durationInFrames: GreenBondFlowDuration },
  TaksonomiHijauVideo: { component: TaksonomiHijauVideo, durationInFrames: TaksonomiHijauVideoDuration },
  GreenwashingVideo: { component: GreenwashingVideo, durationInFrames: GreenwashingVideoDuration },
  AnalisisSkenarioVideo: { component: AnalisisSkenarioVideo, durationInFrames: AnalisisSkenarioVideoDuration },
  StrandedAssetVideo: { component: StrandedAssetVideo, durationInFrames: StrandedAssetVideoDuration },
  JustTransitionVideo: { component: JustTransitionVideo, durationInFrames: JustTransitionVideoDuration },
  SLBStepUpVideo: { component: SLBStepUpVideo, durationInFrames: SLBStepUpVideoDuration },
  // Corporate Finance
  NilaiWaktuUang: { component: NilaiWaktuUang, durationInFrames: NilaiWaktuUangDuration },
  ProjectFinanceSPV: { component: ProjectFinanceSPV, durationInFrames: ProjectFinanceSPVDuration },
  ProsesMnA: { component: ProsesMnA, durationInFrames: ProsesMnADuration },
  LBOFlow: { component: LBOFlow, durationInFrames: LBOFlowDuration },
  NPVIRRVideo: { component: NPVIRRVideo, durationInFrames: NPVIRRVideoDuration },
  StrukturModalVideo: { component: StrukturModalVideo, durationInFrames: StrukturModalVideoDuration },
  KebijakanDividenVideo: { component: KebijakanDividenVideo, durationInFrames: KebijakanDividenVideoDuration },
  CashConversionVideo: { component: CashConversionVideo, durationInFrames: CashConversionVideoDuration },
  HedgingFXVideo: { component: HedgingFXVideo, durationInFrames: HedgingFXVideoDuration },
  SinergiMnAVideo: { component: SinergiMnAVideo, durationInFrames: SinergiMnAVideoDuration },
  // Investasi
  AssetManagementFlow: { component: AssetManagementFlow, durationInFrames: AssetManagementFlowDuration },
  DiversifikasiVideo: { component: DiversifikasiVideo, durationInFrames: DiversifikasiVideoDuration },
  VCFunnel: { component: VCFunnel, durationInFrames: VCFunnelDuration },
  BungaMajemukVideo: { component: BungaMajemukVideo, durationInFrames: BungaMajemukVideoDuration },
  RisikoImbalHasilVideo: { component: RisikoImbalHasilVideo, durationInFrames: RisikoImbalHasilVideoDuration },
  ValuasiSahamVideo: { component: ValuasiSahamVideo, durationInFrames: ValuasiSahamVideoDuration },
  RasioKeuanganVideo: { component: RasioKeuanganVideo, durationInFrames: RasioKeuanganVideoDuration },
  DollarCostAveragingVideo: { component: DollarCostAveragingVideo, durationInFrames: DollarCostAveragingVideoDuration },
  ObligasiYieldVideo: { component: ObligasiYieldVideo, durationInFrames: ObligasiYieldVideoDuration },
  RebalancingVideo: { component: RebalancingVideo, durationInFrames: RebalancingVideoDuration },
  // Kepabeanan
  AlurImpor: { component: AlurImpor, durationInFrames: AlurImporDuration },
  AlurEkspor: { component: AlurEkspor, durationInFrames: AlurEksporDuration },
  StrukturHSCode: { component: StrukturHSCode, durationInFrames: StrukturHSCodeDuration },
  IncotermsVideo: { component: IncotermsVideo, durationInFrames: IncotermsVideoDuration },
  PungutanImpor: { component: PungutanImpor, durationInFrames: PungutanImporDuration },
  SupplyChainVideo: { component: SupplyChainVideo, durationInFrames: SupplyChainVideoDuration },
  DokumenEksporImporVideo: { component: DokumenEksporImporVideo, durationInFrames: DokumenEksporImporVideoDuration },
  LogistikKontainerVideo: { component: LogistikKontainerVideo, durationInFrames: LogistikKontainerVideoDuration },
  MarineInsuranceVideo: { component: MarineInsuranceVideo, durationInFrames: MarineInsuranceVideoDuration },
  AuditPCAVideo: { component: AuditPCAVideo, durationInFrames: AuditPCAVideoDuration },
  RisikoPelanggaranVideo: { component: RisikoPelanggaranVideo, durationInFrames: RisikoPelanggaranVideoDuration },
  DigitalCustomsVideo: { component: DigitalCustomsVideo, durationInFrames: DigitalCustomsVideoDuration },
  TradeAgreementVideo: { component: TradeAgreementVideo, durationInFrames: TradeAgreementVideoDuration },
  // Pasar Keuangan
  AlurPasarKeuangan: { component: AlurPasarKeuangan, durationInFrames: AlurPasarKeuanganDuration },
  PasarUangVsModal: { component: PasarUangVsModal, durationInFrames: PasarUangVsModalDuration },
  SukuBungaAcuan: { component: SukuBungaAcuan, durationInFrames: SukuBungaAcuanDuration },
  MekanismePerdaganganSaham: { component: MekanismePerdaganganSaham, durationInFrames: MekanismePerdaganganSahamDuration },
  IPOFlow: { component: IPOFlow, durationInFrames: IPOFlowDuration },
  YieldCurveVideo: { component: YieldCurveVideo, durationInFrames: YieldCurveVideoDuration },
  OpsiCallPut: { component: OpsiCallPut, durationInFrames: OpsiCallPutDuration },
  EfisiensiPasar: { component: EfisiensiPasar, durationInFrames: EfisiensiPasarDuration },
  // Mikroekonomi
  KelangkaanPilihan: { component: KelangkaanPilihan, durationInFrames: KelangkaanPilihanDuration },
  PermintaanPenawaran: { component: PermintaanPenawaran, durationInFrames: PermintaanPenawaranDuration },
  PergeseranKurva: { component: PergeseranKurva, durationInFrames: PergeseranKurvaDuration },
  ElastisitasVideo: { component: ElastisitasVideo, durationInFrames: ElastisitasVideoDuration },
  BiayaProduksi: { component: BiayaProduksi, durationInFrames: BiayaProduksiDuration },
  StrukturPasarVideo: { component: StrukturPasarVideo, durationInFrames: StrukturPasarVideoDuration },
  CircularFlow: { component: CircularFlow, durationInFrames: CircularFlowDuration },
  SistemEkonomi: { component: SistemEkonomi, durationInFrames: SistemEkonomiDuration },
  SurplusKonsumenProdusen: { component: SurplusKonsumenProdusen, durationInFrames: SurplusKonsumenProdusenDuration },
  IntervensiHarga: { component: IntervensiHarga, durationInFrames: IntervensiHargaDuration },
  UtilitasMarginal: { component: UtilitasMarginal, durationInFrames: UtilitasMarginalDuration },
  ElastisitasPenawaran: { component: ElastisitasPenawaran, durationInFrames: ElastisitasPenawaranDuration },
  KegagalanPasar: { component: KegagalanPasar, durationInFrames: KegagalanPasarDuration },
  MonopoliVsPersaingan: { component: MonopoliVsPersaingan, durationInFrames: MonopoliVsPersainganDuration },
  // Makroekonomi
  KomponenPDB: { component: KomponenPDB, durationInFrames: KomponenPDBDuration },
  InflasiVideo: { component: InflasiVideo, durationInFrames: InflasiVideoDuration },
  KurvaPhillips: { component: KurvaPhillips, durationInFrames: KurvaPhillipsDuration },
  KebijakanMoneterFiskal: { component: KebijakanMoneterFiskal, durationInFrames: KebijakanMoneterFiskalDuration },
  KeunggulanKomparatif: { component: KeunggulanKomparatif, durationInFrames: KeunggulanKomparatifDuration },
  SiklusBisnis: { component: SiklusBisnis, durationInFrames: SiklusBisnisDuration },
  ADASVideo: { component: ADASVideo, durationInFrames: ADASVideoDuration },
  PertumbuhanMajemuk: { component: PertumbuhanMajemuk, durationInFrames: PertumbuhanMajemukDuration },
  IndikatorMakro: { component: IndikatorMakro, durationInFrames: IndikatorMakroDuration },
  KebijakanMoneterVideo: { component: KebijakanMoneterVideo, durationInFrames: KebijakanMoneterVideoDuration },
  NeracaPembayaran: { component: NeracaPembayaran, durationInFrames: NeracaPembayaranDuration },
  NilaiTukarVideo: { component: NilaiTukarVideo, durationInFrames: NilaiTukarVideoDuration },
  GlobalisasiVideo: { component: GlobalisasiVideo, durationInFrames: GlobalisasiVideoDuration },
  PembangunanEkonomi: { component: PembangunanEkonomi, durationInFrames: PembangunanEkonomiDuration },
  // Kebijakan Fiskal
  FungsiFiskal: { component: FungsiFiskal, durationInFrames: FungsiFiskalDuration },
  SiklusAPBN: { component: SiklusAPBN, durationInFrames: SiklusAPBNDuration },
  PosturAPBN: { component: PosturAPBN, durationInFrames: PosturAPBNDuration },
  SumberPenerimaanNegara: { component: SumberPenerimaanNegara, durationInFrames: SumberPenerimaanNegaraDuration },
  DefisitUtangFiskal: { component: DefisitUtangFiskal, durationInFrames: DefisitUtangFiskalDuration },
  EkspansifKontraktif: { component: EkspansifKontraktif, durationInFrames: EkspansifKontraktifDuration },
  FiskalVsMoneter: { component: FiskalVsMoneter, durationInFrames: FiskalVsMoneterDuration },
  JenisPajakVideo: { component: JenisPajakVideo, durationInFrames: JenisPajakVideoDuration },
  ReformasiPerpajakan: { component: ReformasiPerpajakan, durationInFrames: ReformasiPerpajakanDuration },
  SubsidiBansosVideo: { component: SubsidiBansosVideo, durationInFrames: SubsidiBansosVideoDuration },
  TransferDaerahVideo: { component: TransferDaerahVideo, durationInFrames: TransferDaerahVideoDuration },
  UtangPemerintah: { component: UtangPemerintah, durationInFrames: UtangPemerintahDuration },
  KeberlanjutanFiskal: { component: KeberlanjutanFiskal, durationInFrames: KeberlanjutanFiskalDuration },
  // Logika
  DeduktifInduktif: { component: DeduktifInduktif, durationInFrames: DeduktifInduktifDuration },
  TabelKebenaran: { component: TabelKebenaran, durationInFrames: TabelKebenaranDuration },
  SilogismeVideo: { component: SilogismeVideo, durationInFrames: SilogismeVideoDuration },
  FallacyVideo: { component: FallacyVideo, durationInFrames: FallacyVideoDuration },
  BerpikirKritis: { component: BerpikirKritis, durationInFrames: BerpikirKritisDuration },
  AbduksiVideo: { component: AbduksiVideo, durationInFrames: AbduksiVideoDuration },
  OperatorLogika: { component: OperatorLogika, durationInFrames: OperatorLogikaDuration },
  TautologiKontradiksi: { component: TautologiKontradiksi, durationInFrames: TautologiKontradiksiDuration },
  HukumDeMorgan: { component: HukumDeMorgan, durationInFrames: HukumDeMorganDuration },
  KuadratOposisi: { component: KuadratOposisi, durationInFrames: KuadratOposisiDuration },
  ModusPonensTollens: { component: ModusPonensTollens, durationInFrames: ModusPonensTollensDuration },
  FallacyFormalInformal: { component: FallacyFormalInformal, durationInFrames: FallacyFormalInformalDuration },
  StrukturArgumen: { component: StrukturArgumen, durationInFrames: StrukturArgumenDuration },
  BiasKognitif: { component: BiasKognitif, durationInFrames: BiasKognitifDuration },
  // Matematika Dasar
  MatematikaVsBerhitung: { component: MatematikaVsBerhitung, durationInFrames: MatematikaVsBerhitungDuration },
  PolaAlam: { component: PolaAlam, durationInFrames: PolaAlamDuration },
  BahasaSemesta: { component: BahasaSemesta, durationInFrames: BahasaSemestaDuration },
  LahirnyaBilangan: { component: LahirnyaBilangan, durationInFrames: LahirnyaBilanganDuration },
  MenemukanLuas: { component: MenemukanLuas, durationInFrames: MenemukanLuasDuration },
  PythagorasPetualangan: { component: PythagorasPetualangan, durationInFrames: PythagorasPetualanganDuration },
  RasioKehidupan: { component: RasioKehidupan, durationInFrames: RasioKehidupanDuration },
  LajuPerubahan: { component: LajuPerubahan, durationInFrames: LajuPerubahanDuration },
  PeluangVideo: { component: PeluangVideo, durationInFrames: PeluangVideoDuration },
  EmpatOperasi: { component: EmpatOperasi, durationInFrames: EmpatOperasiDuration },
  LahirnyaPi: { component: LahirnyaPi, durationInFrames: LahirnyaPiDuration },
  BentukGeometri: { component: BentukGeometri, durationInFrames: BentukGeometriDuration },
  ProporsiVideo: { component: ProporsiVideo, durationInFrames: ProporsiVideoDuration },
  PersenVideo: { component: PersenVideo, durationInFrames: PersenVideoDuration },
  StatistikaVideo: { component: StatistikaVideo, durationInFrames: StatistikaVideoDuration },
  BerpikirMatematis: { component: BerpikirMatematis, durationInFrames: BerpikirMatematisDuration },
  // Aljabar / Geometri / Trigonometri / Fungsi / Logika Matematika / Statistika / Kalkulus
  AljabarVideo: { component: AljabarVideo, durationInFrames: AljabarVideoDuration },
  PersamaanVideo: { component: PersamaanVideo, durationInFrames: PersamaanVideoDuration },
  SudutVideo: { component: SudutVideo, durationInFrames: SudutVideoDuration },
  VolumeVideo: { component: VolumeVideo, durationInFrames: VolumeVideoDuration },
  TrigonometriVideo: { component: TrigonometriVideo, durationInFrames: TrigonometriVideoDuration },
  LingkaranSatuanVideo: { component: LingkaranSatuanVideo, durationInFrames: LingkaranSatuanVideoDuration },
  FungsiVideo: { component: FungsiVideo, durationInFrames: FungsiVideoDuration },
  HimpunanVideo: { component: HimpunanVideo, durationInFrames: HimpunanVideoDuration },
  PenyebaranVideo: { component: PenyebaranVideo, durationInFrames: PenyebaranVideoDuration },
  LimitVideo: { component: LimitVideo, durationInFrames: LimitVideoDuration },
  TurunanVideo: { component: TurunanVideo, durationInFrames: TurunanVideoDuration },
  IntegralVideo: { component: IntegralVideo, durationInFrames: IntegralVideoDuration },
  // Fisika Dasar
  BesaranSatuan: { component: BesaranSatuan, durationInFrames: BesaranSatuanDuration },
  AnalisisDimensi: { component: AnalisisDimensi, durationInFrames: AnalisisDimensiDuration },
  HukumNewtonVideo: { component: HukumNewtonVideo, durationInFrames: HukumNewtonVideoDuration },
  UsahaEnergiVideo: { component: UsahaEnergiVideo, durationInFrames: UsahaEnergiVideoDuration },
  MomentumVideo: { component: MomentumVideo, durationInFrames: MomentumVideoDuration },
  GelombangFisika: { component: GelombangFisika, durationInFrames: GelombangFisikaDuration },
  HukumOhmVideo: { component: HukumOhmVideo, durationInFrames: HukumOhmVideoDuration },
  PembiasanCahaya: { component: PembiasanCahaya, durationInFrames: PembiasanCahayaDuration },
  // Filsafat
  CabangFilsafat: { component: CabangFilsafat, durationInFrames: CabangFilsafatDuration },
  RasionalismeEmpirisme: { component: RasionalismeEmpirisme, durationInFrames: RasionalismeEmpirismeDuration },
  KehendakBebas: { component: KehendakBebas, durationInFrames: KehendakBebasDuration },
  TigaTeoriEtika: { component: TigaTeoriEtika, durationInFrames: TigaTeoriEtikaDuration },
  DilemaTrolley: { component: DilemaTrolley, durationInFrames: DilemaTrolleyDuration },
  GarisWaktuFilsafat: { component: GarisWaktuFilsafat, durationInFrames: GarisWaktuFilsafatDuration },
  DialektikaHegel: { component: DialektikaHegel, durationInFrames: DialektikaHegelDuration },
  EvolusiPemikiran: { component: EvolusiPemikiran, durationInFrames: EvolusiPemikiranDuration },
  SkeptisismeDescartes: { component: SkeptisismeDescartes, durationInFrames: SkeptisismeDescartesDuration },
  TeoriKebenaran: { component: TeoriKebenaran, durationInFrames: TeoriKebenaranDuration },
  MaterialismeIdealisme: { component: MaterialismeIdealisme, durationInFrames: MaterialismeIdealismeDuration },
  EksistensialismeVideo: { component: EksistensialismeVideo, durationInFrames: EksistensialismeVideoDuration },
  FilsafatTimurVideo: { component: FilsafatTimurVideo, durationInFrames: FilsafatTimurVideoDuration },
  KeadilanVideo: { component: KeadilanVideo, durationInFrames: KeadilanVideoDuration },
};

export { VIDEO };
