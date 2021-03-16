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

import axios from 'axios';
import * as schedule from 'node-schedule';
import { from, Observable, of } from 'rxjs';
import { catchError, concatAll, filter, map } from 'rxjs/operators';
import { ProducerAdapter } from 'wistroni40-retry/lib';
import { Server } from './../api';
import { AxiosHttpService, HttpAdapter, HttpResponse } from './../http';
import { Log4js } from './../logger';
import {
  HttpProducer,
  ProducePayloadEntity as ProducePayload,
  ProducePayloadModel,
} from './../retry';
import { TimeManager } from './../utils';
import {
  ApiConfig,
  BaseModel as ApiBaseModel,
  BenefitActivedSystemModel as ActivedSystemModel,
  BenefitActivedSystemService,
  BenefitLaborCostService,
  BenefitLatestLaborCostResponse,
  BenefitPlantModel as PlantModel,
} from './api';
import { BenefitLatestLaborCostEntity as LaborCost } from './api/models';
import { BenefitQueryConvertor } from './classes';
import {
  BenefitConfigEntity,
  BenefitConfigModel,
  BenefitQueryModel,
  BenefitSavingEntity,
  Bnft,
} from './models';

/**
 * 抽象效益計算範本
 */
export abstract class BnftTemplate {
  /**
   * 日誌
   */
  private readonly console = new Log4js('bnft');
  /**
   * API服務器
   */
  private apiServer = Server.instance.register(this);
  /**
   * HTTP請求
   */
  protected http: HttpAdapter = new AxiosHttpService(axios);
  /**
   * HTTP拋送者
   */
  protected producer: ProducerAdapter<HttpAdapter>;
  /**
   * 效益激活系統服務
   */
  protected activedSystemService = new BenefitActivedSystemService(this.http);
  /**
   * 效益DL及IDL人員工時服務
   */
  protected benefitLaborCostService = new BenefitLaborCostService(this.http);
  /**
   * 排程設定
   */
  protected cron: string | null = null;
  /**
   * 需要計算的廠別
   */
  protected abstract enabledPlant?: string[];

  /**
   * @param config 效益設定檔
   */
  constructor(public config: BenefitConfigModel) {
    this.config = new BenefitConfigEntity(this.config);
    ApiConfig.path = this.config.benefitApi;
    this.producer = new HttpProducer(this.http, { count: this.config.retry });
  }

  /**
   * 取得預設的效益參數資料
   *
   * @method private
   * @return 回傳預設的效益參數資料
   */
  private getDefaultProcucePayload(): Observable<
    ProducePayloadModel<Bnft.BenefitSaving>
  > {
    return of(
      new ProducePayload(this.config.publishApi, new BenefitSavingEntity())
    );
  }

  /**
   * 建構效益參數實體
   *
   * @method protected
   * @param timestamp 資料時間戳
   * @param condition 效益查詢條件
   * @param params    效益參數
   */
  protected buildBenefitEntity(
    timestamp: Date,
    condition: BenefitQueryModel,
    params: Bnft.Param[]
  ): Bnft.BenefitSaving {
    return new BenefitSavingEntity({
      evt_dt: timestamp.getTime(),
      freq: 'D',
      site: condition.site,
      company: condition.company,
      plant: condition.plant,
      plant_code: condition.plantCode,
      system_id: this.config.systemId,
      type_id: this.config.typeId,
      benefit_type: this.config.benefitType,
      params,
    });
  }

  /**
   * 建構查詢激活系統的查詢條件
   *
   * @method protected
   * @return 回傳查詢條件
   */
  protected buildQueryActivatedSystemsFilter(): ApiBaseModel.Filter {
    return {
      include: 'benefitPlant',
      where: { system_id: this.config.systemId },
    };
  }

  /**
   * 查詢效益參數
   *
   * @method protected
   * @param plant     廠別資料作為查詢條件
   * @param timestamp 查詢開始時間
   * @return 回傳效益參數
   */
  protected queryBenefit(
    plant: PlantModel,
    timestamp?: Date
  ): Observable<Bnft.BenefitSaving> {
    const start = TimeManager.getStartTime(timestamp);
    const end = TimeManager.getEndTime(timestamp);
    const condition = new BenefitQueryConvertor(plant)
      .setStartTime(start)
      .setEndTime(end)
      .build();
    const payload = this.buildPayload(start, condition);
    return payload;
  }

  /**
   * 設定查詢用的HTTP
   *
   * @method public
   * @param http HTTP請求
   * @return 回傳物件本身
   */
  public setHttp(http: HttpAdapter): BnftTemplate {
    this.http = http;
    this.activedSystemService = new BenefitActivedSystemService(this.http);
    return this;
  }

  /**
   * 設定排程計算效益
   *
   * @method public
   * @param cron 排程
   * @return 回傳物件本身
   */
  public setSchedule(cron: string): BnftTemplate {
    this.cron = cron;
    if (this.cron) {
      schedule.scheduleJob(this.cron, this.execute.bind(this));
    }
    return this;
  }

  /**
   * 過濾無須或異常的廠別
   *
   * @method public
   * @param plant 廠別資料
   * @return 回傳該廠別是否要保留
   */
  public filterPlant(plant?: PlantModel): boolean {
    const isNotUndefined = plant !== undefined;
    let isAllowedPlant = true;
    if (plant && this.enabledPlant && this.enabledPlant.length > 0) {
      isAllowedPlant = this.enabledPlant.includes(plant.plantcode);
    }
    return isNotUndefined && isAllowedPlant;
  }

  /**
   * 建構效益參數資料
   *
   * @method public
   * @param timestamp 資料時間戳
   * @param condition 效益查詢條件
   * @return 回傳效益參數資料
   */
  public buildPayload(
    timestamp: Date,
    condition: BenefitQueryModel
  ): Observable<Bnft.BenefitSaving> {
    return from(this.getBenefitParams(condition)).pipe(
      map((params) => this.buildBenefitEntity(timestamp, condition, params))
    );
  }

  /**
   * 取得效益參數
   *
   * @method public
   * @param condition 效益查詢條件
   * @return 回傳效益參數
   */
  public abstract getBenefitParams(
    condition: BenefitQueryModel
  ): Promise<Bnft.Param[]>;

  /**
   * 處理效益參數
   *
   * @method public
   * @param response  查詢激活的效益系統
   * @param timestamp 查詢開始時間
   * @return 回傳處理後效益參數
   */
  public processBenefitParams(
    response: Observable<HttpResponse<ActivedSystemModel[]>>,
    timestamp?: Date
  ): Observable<ProducePayloadModel<Bnft.BenefitSaving>> {
    return response.pipe(
      // 取出HTTP回應的資料
      map((res) => res.data),
      // 從系統資料中取出廠別資料
      map((systems) => systems.map((system) => system.benefitPlant)),
      // 將廠別資料重新建成Subject
      map((plants) => from(plants)),
      // 將廠別打散成單筆數據
      concatAll(),
      // 保留需要計算及無異常的廠別
      filter((plant) => this.filterPlant(plant)),
      // 查詢效益參數
      map((plant) => this.queryBenefit(plant as PlantModel, timestamp)),
      // 將效益參數打散成單筆數據
      concatAll(),
      // 打包成拋送的資料格式
      map((benefit) => new ProducePayload(this.config.publishApi, benefit)),
      // 發生錯誤給定預設值
      catchError(() => this.getDefaultProcucePayload())
    );
  }

  /**
   * 執行效益參數撈取
   *
   * @method public
   * @param timestamp 查詢開始時間
   * @param sendable  執行結果是否上拋
   * @return 回傳效益參數上拋資料
   */
  public execute(
    timestamp?: Date,
    sendable = true
  ): Observable<ProducePayloadModel<Bnft.BenefitSaving>> {
    const query = this.buildQueryActivatedSystemsFilter();
    const system$ = this.activedSystemService.find<ActivedSystemModel>(query);
    const param$ = this.processBenefitParams(system$, timestamp);
    param$.subscribe((payload) => this.send(payload, sendable));
    return param$;
  }

  /**
   * 將效益參數上拋
   *
   * @method public
   * @param payload  效益參數
   * @param sendable 效益參數是否上拋
   */
  public async send(
    payload: ProducePayloadModel<Bnft.BenefitSaving>,
    sendable = true
  ): Promise<void> {
    if (sendable) {
      this.producer.publish(payload);
    } else {
      this.console.debug(JSON.stringify(payload));
    }
  }

  /**
   * 取得最新的IDL或ID人員工時
   *
   * @method public
   * @param site      Site
   * @param plantCode 廠別代碼
   * @param laborType 人員類別(IDL or DL)
   * @return 回傳最新的IDL或ID人員工時
   */
  public findLatestLaborCost(
    site: string,
    plantCode: string,
    type: 'idl' | 'dl'
  ): Observable<BenefitLatestLaborCostResponse> {
    return this.benefitLaborCostService
      .getLatestCost(site, plantCode, type)
      .pipe(
        // 將工時資料取出
        map((response) => response.data),
        // 發生錯誤給定預設值
        catchError(() => of(new LaborCost({ site, plant: plantCode, type })))
      );
  }
}
