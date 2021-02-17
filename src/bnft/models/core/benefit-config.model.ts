/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 效益範本設定檔資料模型
 * @CREATE Thu Jan 21 2021 下午5:41:37
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { BenefitType } from './benefit.type';

/**
 * 效益範本設定檔資料模型
 */
export interface BenefitConfigModel {
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
}
