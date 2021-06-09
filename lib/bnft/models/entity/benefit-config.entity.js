"use strict";
/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 效益範本設定檔實體
 * @CREATE Mon Feb 08 2021 上午10:41:39
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitConfigEntity = void 0;
/**
 * 效益範本設定檔實體
 */
class BenefitConfigEntity {
    /**
     * @param data 效益範本設定檔資料
     */
    constructor(data) {
        /**
         * 開發模式
         */
        this.dev = false;
        /**
         * 效益系統ID
         */
        this.systemId = '';
        /**
         * 效益類型ID
         */
        this.typeId = '';
        /**
         * 效益類型
         */
        this.benefitType = 'direct';
        /**
         * 要拋送參數的API路徑
         */
        this.publishApi = '';
        /**
         * 效益的API路徑
         */
        this.benefitApi = '';
        /**
         * 重拋嘗試次數
         */
        this.retry = 3;
        Object.assign(this, data);
    }
}
exports.BenefitConfigEntity = BenefitConfigEntity;
