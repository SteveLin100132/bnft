"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BnftTemplate = void 0;
const axios_1 = require("axios");
const schedule = require("node-schedule");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const api_1 = require("./../api");
const http_1 = require("./../http");
const retry_1 = require("./../retry");
const utils_1 = require("./../utils");
const api_2 = require("./api");
const models_1 = require("./api/models");
const classes_1 = require("./classes");
const models_2 = require("./models");
/**
 * 抽象效益計算範本
 */
class BnftTemplate {
    /**
     * @param config 效益設定檔
     */
    constructor(config) {
        this.config = config;
        /**
         * API服務器
         */
        this.apiServer = api_1.Server.instance.register(this);
        /**
         * HTTP請求
         */
        this.http = new http_1.AxiosHttpService(axios_1.default);
        /**
         * 效益激活系統服務
         */
        this.activedSystemService = new api_2.BenefitActivedSystemService(this.http);
        /**
         * 效益DL及IDL人員工時服務
         */
        this.benefitLaborCostService = new api_2.BenefitLaborCostService(this.http);
        /**
         * 排程設定
         */
        this.cron = null;
        this.config = new models_2.BenefitConfigEntity(this.config);
        api_2.ApiConfig.path = this.config.benefitApi;
        this.producer = new retry_1.HttpProducer(this.http, { count: this.config.retry });
    }
    /**
     * 取得預設的效益參數資料
     *
     * @method private
     * @return 回傳預設的效益參數資料
     */
    getDefaultProcucePayload() {
        return rxjs_1.of(new retry_1.ProducePayloadEntity(this.config.publishApi, new models_2.BenefitSavingEntity()));
    }
    /**
     * 建構效益參數實體
     *
     * @method protected
     * @param timestamp 資料時間戳
     * @param condition 效益查詢條件
     * @param params    效益參數
     */
    buildBenefitEntity(timestamp, condition, params) {
        return new models_2.BenefitSavingEntity({
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
    buildQueryActivatedSystemsFilter() {
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
    queryBenefit(plant, timestamp) {
        const start = utils_1.TimeManager.getStartTime(timestamp);
        const end = utils_1.TimeManager.getEndTime(timestamp);
        const condition = new classes_1.BenefitQueryConvertor(plant)
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
    setHttp(http) {
        this.http = http;
        this.activedSystemService = new api_2.BenefitActivedSystemService(this.http);
        return this;
    }
    /**
     * 設定排程計算效益
     *
     * @method public
     * @param cron 排程
     * @return 回傳物件本身
     */
    setSchedule(cron) {
        this.cron = cron;
        if (this.cron) {
            schedule.scheduleJob(this.cron, this.execute.bind(this));
        }
        return this;
    }
    /**
     * 建構效益參數資料
     *
     * @method public
     * @param timestamp 資料時間戳
     * @param condition 效益查詢條件
     * @return 回傳效益參數資料
     */
    buildPayload(timestamp, condition) {
        return rxjs_1.from(this.getBenefitParams(condition)).pipe(operators_1.map((params) => this.buildBenefitEntity(timestamp, condition, params)));
    }
    /**
     * 處理效益參數
     *
     * @method public
     * @param response  查詢激活的效益系統
     * @param timestamp 查詢開始時間
     * @return 回傳處理後效益參數
     */
    processBenefitParams(response, timestamp) {
        return response.pipe(
        // 取出HTTP回應的資料
        operators_1.map((res) => res.data), 
        // 從系統資料中取出廠別資料
        operators_1.map((systems) => systems.map((system) => system.benefitPlant)), 
        // 將廠別資料重新建成Subject
        operators_1.map((plants) => rxjs_1.from(plants)), 
        // 將廠別打散成單筆數據
        operators_1.concatAll(), 
        // 過濾掉undefined的數據
        operators_1.filter((plant) => plant !== undefined), 
        // 查詢效益參數
        operators_1.map((plant) => this.queryBenefit(plant, timestamp)), 
        // 將效益參數打散成單筆數據
        operators_1.concatAll(), 
        // 打包成拋送的資料格式
        operators_1.map((benefit) => new retry_1.ProducePayloadEntity(this.config.publishApi, benefit)), 
        // 發生錯誤給定預設值
        operators_1.catchError(() => this.getDefaultProcucePayload()));
    }
    /**
     * 執行效益參數撈取
     *
     * @method public
     * @param timestamp 查詢開始時間
     * @return 回傳效益參數上拋資料
     */
    execute(timestamp) {
        const query = this.buildQueryActivatedSystemsFilter();
        const system$ = this.activedSystemService.find(query);
        const param$ = this.processBenefitParams(system$, timestamp);
        param$.subscribe((payload) => this.send(payload));
        return param$;
    }
    /**
     * 將效益參數上拋
     *
     * @method public
     * @param payload 效益參數
     */
    async send(payload) {
        this.producer.publish(payload);
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
    findLatestLaborCost(site, plantCode, type) {
        return this.benefitLaborCostService
            .getLatestCost(site, plantCode, type)
            .pipe(
        // 將工時資料取出
        operators_1.map((response) => response.data), 
        // 發生錯誤給定預設值
        operators_1.catchError(() => rxjs_1.of(new models_1.BenefitLatestLaborCostEntity({ site, plant: plantCode, type }))));
    }
}
exports.BnftTemplate = BnftTemplate;
