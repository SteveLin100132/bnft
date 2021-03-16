"use strict";
/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 廠別資料模型
 * @CREATE Fri Jan 22 2021 上午8:29:12
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitPlantEntity = void 0;
/**
 * 廠別資料模型
 */
class BenefitPlantEntity {
    /**
     * @param data 效益激活系統資料
     */
    constructor(data) {
        /**
         * 流水號(主鍵)
         */
        this.id = '';
        /**
         * 公司別
         */
        this.company = '';
        /**
         * Site
         */
        this.site = '';
        /**
         * 廠別
         */
        this.plant = '';
        /**
         * 廠別代碼
         */
        this.plantcode = '';
        Object.assign(this, data);
    }
}
exports.BenefitPlantEntity = BenefitPlantEntity;
