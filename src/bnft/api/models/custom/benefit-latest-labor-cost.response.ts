/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 效益DL及IDL人員最新工時回應資料模型
 * @CREATE Mon Feb 08 2021 上午8:46:27
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 效益DL及IDL人員最新工時回應資料模型
 */
export interface BenefitLatestLaborCostResponse {
  /**
   * 工時時間戳
   */
  'evt_dt': number;
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
}
