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
export class BenefitLatestLaborCostEntity implements Response {
  /**
   * 工時時間戳
   */
  public evt_dt = new Date().getTime();
  /**
   * 工時更新區間
   */
  public period = 'none';
  /**
   * Site
   */
  public site = '';
  /**
   * 廠別代碼
   */
  public plant = '';
  /**
   * 員工類型
   */
  public type = 'idl';
  /**
   * 工時費用
   */
  public cost = 0;

  /**
   * @param data 效益激活系統資料
   */
  constructor(data?: Partial<Response>) {
    Object.assign(this, data);
  }
}
