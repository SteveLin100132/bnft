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
export class BenefitSavingEntity implements Bnft.BenefitSaving {
  /**
   * 事件時間戳
   */
  public evt_dt = 0;
  /**
   * 廠區代碼
   */
  public plant_code = '';
  /**
   * 系統ID
   */
  public system_id = '';
  /**
   * 效益ID
   */
  public type_id = '';
  /**
   * 效益類型(direct: 直接效益、manage: 管理效益)
   */
  public benefit_type: BenefitType = 'direct';
  /**
   * 效益計算週期
   */
  public freq = 'D';
  /**
   * Site
   */
  public site = '';
  /**
   * 公司
   */
  public company = '';
  /**
   * 廠區
   */
  public plant = '';
  /**
   * 效益計算參數
   */
  public params: Bnft.Param[] = [];

  /**
   * @param data 效益激活系統資料
   */
  constructor(data?: Bnft.BenefitSaving) {
    Object.assign(this, data);

    this.site = this.site.toUpperCase();
    this.company = this.company.toUpperCase();
    this.plant = this.plant.toUpperCase();
    this.plant_code = this.plant_code.toUpperCase();
  }
}
