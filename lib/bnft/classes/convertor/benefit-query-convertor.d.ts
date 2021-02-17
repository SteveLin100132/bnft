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
import { BenefitPlantModel } from './../../api';
import { BenefitQueryModel } from './../../models';
/**
 * 效益查詢條件轉換器
 */
export declare class BenefitQueryConvertor {
    private plant;
    /**
     * 查詢開始時間
     */
    private _start;
    /**
     * 查詢結束時間
     */
    private _end;
    /**
     * @param plant 廠別資料模型
     */
    constructor(plant: BenefitPlantModel);
    /**
     * 設定查詢開始時間
     *
     * @method public
     * @param start 查詢開始時間
     * @return 回傳物件本身
     */
    setStartTime(start: Date): BenefitQueryConvertor;
    /**
     * 設定查詢結束時間
     *
     * @method public
     * @param end 查詢結束時間
     * @return 回傳物件本身
     */
    setEndTime(end: Date): BenefitQueryConvertor;
    /**
     * 建構效益查詢條件
     *
     * @method public
     * @return 回傳效益查詢條件
     */
    build(): BenefitQueryModel;
}
