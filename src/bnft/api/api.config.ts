/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： API設定
 * @CREATE Fri Jan 22 2021 上午8:05:46
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * API設定
 */
export class ApiConfig {
  /**
   * API路徑
   */
  private static _path: string = 'http://127.0.0.1:3000';

  /**
   * 設定API路徑
   *
   * @method public
   * @param url API路徑
   */
  public static set path(url: string) {
    ApiConfig._path = url.replace(/\/$/g, '');
  }

  /**
   * 取得API路徑
   *
   * @method public
   * @return 回傳API路徑
   */
  public static get path(): string {
    return ApiConfig._path;
  }
}
