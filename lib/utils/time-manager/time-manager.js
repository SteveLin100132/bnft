"use strict";
/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 時間管理者
 * @CREATE Fri Feb 05 2021 下午4:01:32
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeManager = void 0;
/**
 * 時間管理者
 */
class TimeManager {
    /**
     * 取得查詢的開始時間
     *
     * @method public
     * @param date 當前日期
     * @retunr 回傳查詢的開始時間
     */
    static getStartTime(date = new Date()) {
        const startTime = new Date(date);
        startTime.setDate(startTime.getDate() - 1);
        startTime.setHours(0);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        startTime.setMilliseconds(0);
        return startTime;
    }
    /**
     * 取得查詢的結束時間
     *
     * @method public
     * @param date 當前日期
     * @return 回傳查詢的結束時間
     */
    static getEndTime(date = new Date()) {
        const endTime = new Date(date);
        endTime.setDate(endTime.getDate());
        endTime.setHours(0);
        endTime.setMinutes(0);
        endTime.setSeconds(0);
        endTime.setMilliseconds(0);
        return endTime;
    }
}
exports.TimeManager = TimeManager;
