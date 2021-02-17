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
import { BenefitLatestLaborCostResponse as Response } from '../custom';
/**
 * 效益DL及IDL人員最新工時回應實體
 */
export declare class BenefitLatestLaborCostEntity implements Response {
    /**
     * 工時時間戳
     */
    evt_dt: number;
    /**
     * 工時更新區間
     */
    period: string;
    /**
     * Site
     */
    site: string;
    /**
     * 廠別代碼
     */
    plant: string;
    /**
     * 員工類型
     */
    type: string;
    /**
     * 工時費用
     */
    cost: number;
    /**
     * @param data 效益激活系統資料
     */
    constructor(data?: Partial<Response>);
}
