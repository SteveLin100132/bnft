"use strict";
/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 效益Raw Data資料實體
 * @CREATE Fri Jan 22 2021 上午10:40:37
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitSavingEntity = void 0;
/**
 * 效益Raw Data資料實體
 */
class BenefitSavingEntity {
    /**
     * @param data 效益激活系統資料
     */
    constructor(data) {
        /**
         * 事件時間戳
         */
        this.evt_dt = 0;
        /**
         * 廠區代碼
         */
        this.plant_code = '';
        /**
         * 系統ID
         */
        this.system_id = '';
        /**
         * 效益ID
         */
        this.type_id = '';
        /**
         * 效益類型(direct: 直接效益、manage: 管理效益)
         */
        this.benefit_type = 'direct';
        /**
         * 效益計算週期
         */
        this.freq = 'D';
        /**
         * Site
         */
        this.site = '';
        /**
         * 公司
         */
        this.company = '';
        /**
         * 廠區
         */
        this.plant = '';
        /**
         * 效益計算參數
         */
        this.params = [];
        Object.assign(this, data);
        this.site = this.site.toUpperCase();
        this.company = this.company.toUpperCase();
        this.plant = this.plant.toUpperCase();
        this.plant_code = this.plant_code.toUpperCase();
    }
}
exports.BenefitSavingEntity = BenefitSavingEntity;
