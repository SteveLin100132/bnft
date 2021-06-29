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
import { BenefitConfigModel, BenefitType } from '../core';
/**
 * 效益範本設定檔實體
 */
export declare class BenefitConfigEntity<T = any> implements BenefitConfigModel<T> {
    /**
     * 開發模式
     */
    dev?: boolean;
    /**
     * 效益系統ID
     */
    systemId: string;
    /**
     * 效益類型ID
     */
    typeId: string;
    /**
     * 效益類型
     */
    benefitType: BenefitType;
    /**
     * 要拋送參數的API路徑
     */
    publishApi: string;
    /**
     * 效益的API路徑
     */
    benefitApi: string;
    /**
     * 重拋嘗試次數
     */
    retry?: number;
    /**
     * 重新拋送間隔時間
     */
    retryInterval?: number;
    /**
     * 客製設定
     */
    custom?: T;
    /**
     * @param data 效益範本設定檔資料
     */
    constructor(data?: BenefitConfigModel);
}
