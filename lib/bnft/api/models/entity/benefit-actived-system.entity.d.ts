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
import { BenefitActivedSystemModel, BenefitPlantModel } from '../custom';
/**
 * 效益激活系統資料模型
 */
export declare class BenefitActivedSystem implements BenefitActivedSystemModel {
    /**
     * 流水號(主鍵)
     */
    id?: number;
    /**
     * 激活時間
     */
    active_time: Date;
    /**
     * 維護時間
     */
    maintenance_time: Date;
    /**
     * 維護人員工號
     */
    maintenance_user_id: string;
    /**
     * 廠別ID
     */
    plant_id?: string;
    /**
     * 系統ID
     */
    system_id?: string;
    /**
     * 廠別關聯
     */
    benefitPlant?: BenefitPlantModel;
    /**
     * @param data 效益激活系統資料
     */
    constructor(data?: BenefitActivedSystemModel);
}
