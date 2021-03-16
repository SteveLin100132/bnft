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

import { BenefitActivedSystemModel, BenefitPlantModel } from '../custom';

/**
 * 廠別資料模型
 */
export class BenefitPlantEntity implements BenefitPlantModel {
  /**
   * 流水號(主鍵)
   */
  public id = '';
  /**
   * 公司別
   */
  public company = '';
  /**
   * Site
   */
  public site = '';
  /**
   * 廠別
   */
  public plant = '';
  /**
   * 廠別代碼
   */
  public plantcode = '';
  /**
   * 激活系統關聯
   */
  public benefitActiveSystems?: BenefitActivedSystemModel[];

  /**
   * @param data 效益激活系統資料
   */
  constructor(data?: Partial<BenefitPlantModel>) {
    Object.assign(this, data);
  }
}
