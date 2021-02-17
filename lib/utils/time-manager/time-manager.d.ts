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
/**
 * 時間管理者
 */
export declare class TimeManager {
    /**
     * 取得查詢的開始時間
     *
     * @method public
     * @param date 當前日期
     * @retunr 回傳查詢的開始時間
     */
    static getStartTime(date?: Date): Date;
    /**
     * 取得查詢的結束時間
     *
     * @method public
     * @param date 當前日期
     * @return 回傳查詢的結束時間
     */
    static getEndTime(date?: Date): Date;
}
