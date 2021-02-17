"use strict";
/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 效益查詢條件轉換器
 * @CREATE Fri Feb 05 2021 下午4:24:42
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitQueryConvertor = void 0;
const utils_1 = require("./../../../utils");
/**
 * 效益查詢條件轉換器
 */
class BenefitQueryConvertor {
    /**
     * @param plant 廠別資料模型
     */
    constructor(plant) {
        this.plant = plant;
        /**
         * 查詢開始時間
         */
        this._start = utils_1.TimeManager.getStartTime();
        /**
         * 查詢結束時間
         */
        this._end = utils_1.TimeManager.getEndTime();
    }
    /**
     * 設定查詢開始時間
     *
     * @method public
     * @param start 查詢開始時間
     * @return 回傳物件本身
     */
    setStartTime(start) {
        this._start = start;
        return this;
    }
    /**
     * 設定查詢結束時間
     *
     * @method public
     * @param end 查詢結束時間
     * @return 回傳物件本身
     */
    setEndTime(end) {
        this._end = end;
        return this;
    }
    /**
     * 建構效益查詢條件
     *
     * @method public
     * @return 回傳效益查詢條件
     */
    build() {
        return {
            site: this.plant.site,
            company: this.plant.company,
            plant: this.plant.plant,
            plantCode: this.plant.plantcode,
            start: this._start,
            end: this._end,
        };
    }
}
exports.BenefitQueryConvertor = BenefitQueryConvertor;
