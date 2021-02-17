"use strict";
/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 效益激活系統API
 * @CREATE Fri Jan 22 2021 上午8:19:12
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitActivedSystemService = void 0;
const rxjs_1 = require("rxjs");
const api_config_1 = require("../../api.config");
const core_1 = require("./../core");
/**
 * 效益激活系統API
 */
class BenefitActivedSystemService extends core_1.BaseApi {
    /**
     * @param http HTTP請求轉接器
     */
    constructor(http) {
        super(http);
        this.http = http;
    }
    /**
     * 查詢該Table資料
     *
     * @method public
     * @param filter  查詢過濾條件
     * @param options 查詢選項
     * @return 回傳該Table查詢結果
     */
    find(filter = {}, options) {
        const url = `${api_config_1.ApiConfig.path}/api/BenefitActiveSystems?filter=${JSON.stringify(filter)}`;
        return rxjs_1.from(this.http.get(url, options));
    }
}
exports.BenefitActivedSystemService = BenefitActivedSystemService;
