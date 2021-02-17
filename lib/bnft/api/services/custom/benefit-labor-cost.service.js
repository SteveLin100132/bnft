"use strict";
/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 效益DL及IDL人員工時服務
 * @CREATE Mon Feb 08 2021 上午8:36:35
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitLaborCostService = void 0;
const api_config_1 = require("../../api.config");
/**
 * 效益DL及IDL人員工時服務
 */
class BenefitLaborCostService {
    /**
     * @param http HTTP請求轉接器
     */
    constructor(http) {
        this.http = http;
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
    getLatestCost(site, plantCode, laborType) {
        site = site.toUpperCase();
        plantCode = plantCode.toUpperCase();
        const url = `${api_config_1.ApiConfig.path}/api/BenefitLaborCosts/latestCost?site=${site}&plant=${plantCode}&type=${laborType}`;
        return this.http.get(url);
    }
}
exports.BenefitLaborCostService = BenefitLaborCostService;
