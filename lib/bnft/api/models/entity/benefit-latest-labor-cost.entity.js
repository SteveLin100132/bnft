"use strict";
/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 效益DL及IDL人員最新工時回應實體
 * @CREATE Mon Feb 08 2021 上午8:57:04
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitLatestLaborCostEntity = void 0;
/**
 * 效益DL及IDL人員最新工時回應實體
 */
class BenefitLatestLaborCostEntity {
    /**
     * @param data 效益激活系統資料
     */
    constructor(data) {
        /**
         * 工時時間戳
         */
        this.evt_dt = new Date().getTime();
        /**
         * 工時更新區間
         */
        this.period = 'none';
        /**
         * Site
         */
        this.site = '';
        /**
         * 廠別代碼
         */
        this.plant = '';
        /**
         * 員工類型
         */
        this.type = 'idl';
        /**
         * 工時費用
         */
        this.cost = 0;
        Object.assign(this, data);
    }
}
exports.BenefitLatestLaborCostEntity = BenefitLatestLaborCostEntity;
