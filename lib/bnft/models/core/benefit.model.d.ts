/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 效益資料模型
 * @CREATE Thu Jan 21 2021 下午5:26:19
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
import { BenefitType } from './benefit.type';
/**
 * 效益資料模型
 */
export declare namespace Bnft {
    /**
     * 效益計算參數
     */
    interface Param {
        /**
         * 參數名稱
         */
        name: string;
        /**
         * 參數數值
         */
        value: number;
        /**
         * 參數類型(VAR: 變數、CONST: 常數)
         */
        type: 'VAR' | 'CONST';
    }
    /**
     * 效益Raw Data
     */
    interface BenefitSaving {
        /**
         * 事件時間戳
         */
        'evt_dt': number;
        /**
         * 廠區代碼
         */
        'plant_code': string;
        /**
         * 系統ID
         */
        'system_id': string;
        /**
         * 效益ID
         */
        'type_id': string;
        /**
         * 效益類型(direct: 直接效益、manage: 管理效益)
         */
        'benefit_type': BenefitType;
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
        params: Param[];
    }
}
