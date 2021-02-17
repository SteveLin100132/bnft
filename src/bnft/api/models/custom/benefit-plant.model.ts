/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 廠別資料模型
 * @CREATE Fri Jan 22 2021 上午8:29:12
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { BenefitActivedSystemModel } from './benefit-actived-system.model';

/**
 * 廠別資料模型
 */
export interface BenefitPlantModel {
  /**
   * 流水號(主鍵)
   */
  id: string;
  /**
   * 公司別
   */
  company: string;
  /**
   * Site
   */
  site: string;
  /**
   * 廠別
   */
  plant: string;
  /**
   * 廠別代碼
   */
  plantcode: string;
  /**
   * 激活系統關聯
   */
  benefitActiveSystems?: BenefitActivedSystemModel[];
}
