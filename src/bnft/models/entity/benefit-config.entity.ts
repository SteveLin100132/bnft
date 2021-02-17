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
export class BenefitConfigEntity implements BenefitConfigModel {
  /**
   * 效益系統ID
   */
  public systemId = '';
  /**
   * 效益類型ID
   */
  public typeId = '';
  /**
   * 效益類型
   */
  public benefitType: BenefitType = 'direct';
  /**
   * 要拋送參數的API路徑
   */
  public publishApi = '';
  /**
   * 效益的API路徑
   */
  public benefitApi = '';
  /**
   * 重拋嘗試次數
   */
  public retry?: number = 3;

  /**
   * @param data 效益範本設定檔資料
   */
  constructor(data?: BenefitConfigModel) {
    Object.assign(this, data);
  }
}
