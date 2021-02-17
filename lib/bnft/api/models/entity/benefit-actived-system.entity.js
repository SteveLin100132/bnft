"use strict";
/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 效益激活系統資料模型
 * @CREATE Fri Jan 22 2021 上午8:26:21
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitActivedSystem = void 0;
/**
 * 效益激活系統資料模型
 */
class BenefitActivedSystem {
    /**
     * @param data 效益激活系統資料
     */
    constructor(data) {
        /**
         * 激活時間
         */
        this.active_time = new Date();
        /**
         * 維護時間
         */
        this.maintenance_time = new Date();
        /**
         * 維護人員工號
         */
        this.maintenance_user_id = '';
        Object.assign(this, data);
    }
}
exports.BenefitActivedSystem = BenefitActivedSystem;
