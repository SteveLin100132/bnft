/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 抽象HTTP PATCH
 * @CREATE Thu Jan 21 2021 下午3:18:05
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Observable } from 'rxjs';
import { HttpResponse } from '../response';

/**
 * 抽象HTTP PATCH
 */
export interface HttpPatch {
  /**
   * 調用HTTP PATCH
   *
   * @method public
   * @param url     呼叫URL
   * @param data    附帶資料
   * @param options 查詢選項
   * @return 回傳查詢結果
   */
  patch<T = any>(
    url: string,
    data?: any,
    options?: any
  ): Observable<HttpResponse<T>>;
}
