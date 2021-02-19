/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 抽象效益計算範本
 * @CREATE Thu Jan 21 2021 下午1:44:54
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
import { Observable } from 'rxjs';
import { ProducerAdapter } from 'wistroni40-retry/lib';
import { HttpAdapter, HttpResponse } from './../http';
import { ProducePayloadModel } from './../retry';
import { BaseModel as ApiBaseModel, BenefitActivedSystemModel as ActivedSystemModel, BenefitActivedSystemService, BenefitLaborCostService, BenefitLatestLaborCostResponse, BenefitPlantModel as PlantModel } from './api';
import { BenefitConfigModel, BenefitQueryModel, Bnft } from './models';
/**
 * 抽象效益計算範本
 */
export declare abstract class BnftTemplate {
    config: BenefitConfigModel;
    /**
     * API服務器
     */
    private apiServer;
    /**
     * HTTP請求
     */
    protected http: HttpAdapter;
    /**
     * HTTP拋送者
     */
    protected producer: ProducerAdapter<HttpAdapter>;
    /**
     * 效益激活系統服務
     */
    protected activedSystemService: BenefitActivedSystemService;
    /**
     * 效益DL及IDL人員工時服務
     */
    protected benefitLaborCostService: BenefitLaborCostService;
    /**
     * 排程設定
     */
    protected cron: string | null;
    /**
     * @param config 效益設定檔
     */
    constructor(config: BenefitConfigModel);
    /**
     * 取得預設的效益參數資料
     *
     * @method private
     * @return 回傳預設的效益參數資料
     */
    private getDefaultProcucePayload;
    /**
     * 建構效益參數實體
     *
     * @method protected
     * @param timestamp 資料時間戳
     * @param condition 效益查詢條件
     * @param params    效益參數
     */
    protected buildBenefitEntity(timestamp: Date, condition: BenefitQueryModel, params: Bnft.Param[]): Bnft.BenefitSaving;
    /**
     * 建構查詢激活系統的查詢條件
     *
     * @method protected
     * @return 回傳查詢條件
     */
    protected buildQueryActivatedSystemsFilter(): ApiBaseModel.Filter;
    /**
     * 查詢效益參數
     *
     * @method protected
     * @param plant     廠別資料作為查詢條件
     * @param timestamp 查詢開始時間
     * @return 回傳效益參數
     */
    protected queryBenefit(plant: PlantModel, timestamp?: Date): Observable<Bnft.BenefitSaving>;
    /**
     * 設定查詢用的HTTP
     *
     * @method public
     * @param http HTTP請求
     * @return 回傳物件本身
     */
    setHttp(http: HttpAdapter): BnftTemplate;
    /**
     * 設定排程計算效益
     *
     * @method public
     * @param cron 排程
     * @return 回傳物件本身
     */
    setSchedule(cron: string): BnftTemplate;
    /**
     * 建構效益參數資料
     *
     * @method public
     * @param timestamp 資料時間戳
     * @param condition 效益查詢條件
     * @return 回傳效益參數資料
     */
    buildPayload(timestamp: Date, condition: BenefitQueryModel): Observable<Bnft.BenefitSaving>;
    /**
     * 取得效益參數
     *
     * @method public
     * @param condition 效益查詢條件
     * @return 回傳效益參數
     */
    abstract getBenefitParams(condition: BenefitQueryModel): Promise<Bnft.Param[]>;
    /**
     * 處理效益參數
     *
     * @method public
     * @param response  查詢激活的效益系統
     * @param timestamp 查詢開始時間
     * @return 回傳處理後效益參數
     */
    processBenefitParams(response: Observable<HttpResponse<ActivedSystemModel[]>>, timestamp?: Date): Observable<ProducePayloadModel<Bnft.BenefitSaving>>;
    /**
     * 執行效益參數撈取
     *
     * @method public
     * @param timestamp 查詢開始時間
     * @return 回傳效益參數上拋資料
     */
    execute(timestamp?: Date): Observable<ProducePayloadModel<Bnft.BenefitSaving>>;
    /**
     * 將效益參數上拋
     *
     * @method public
     * @param payload 效益參數
     */
    send(payload: ProducePayloadModel<Bnft.BenefitSaving>): Promise<void>;
    /**
     * 取得最新的IDL或ID人員工時
     *
     * @method public
     * @param site      Site
     * @param plantCode 廠別代碼
     * @param laborType 人員類別(IDL or DL)
     * @return 回傳最新的IDL或ID人員工時
     */
    findLatestLaborCost(site: string, plantCode: string, type: 'idl' | 'dl'): Observable<BenefitLatestLaborCostResponse>;
}
