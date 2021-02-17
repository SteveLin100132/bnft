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
import { BenefitType, Bnft } from './../core';
/**
 * 效益Raw Data資料實體
 */
export declare class BenefitSavingEntity implements Bnft.BenefitSaving {
    /**
     * 事件時間戳
     */
    evt_dt: number;
    /**
     * 廠區代碼
     */
    plant_code: string;
    /**
     * 系統ID
     */
    system_id: string;
    /**
     * 效益ID
     */
    type_id: string;
    /**
     * 效益類型(direct: 直接效益、manage: 管理效益)
     */
    benefit_type: BenefitType;
    /**
     * 效益計算週期
     */
    freq: string;
    /**
     * Site
     */
    site: string;
    /**
     * 公司
     */
    company: string;
    /**
     * 廠區
     */
    plant: string;
    /**
     * 效益計算參數
     */
    params: Bnft.Param[];
    /**
     * @param data 效益激活系統資料
     */
    constructor(data?: Bnft.BenefitSaving);
}
