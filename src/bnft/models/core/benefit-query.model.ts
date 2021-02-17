/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 查詢效益條件資料模型
 * @CREATE Thu Feb 04 2021 下午4:17:13
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 查詢效益條件資料模型
 */
export interface BenefitQueryModel {
  /**
   * 查詢Site
   */
  site: string;
  /**
   * 查詢公司
   */
  company: string;
  /**
   * 查詢廠別
   */
  plant: string;
  /**
   * 查詢廠別代碼
   */
  plantCode: string;
  /**
   * 查詢開始時間
   */
  start: Date;
  /**
   * 查詢結束時間
   */
  end: Date;
}
