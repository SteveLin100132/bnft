/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 抽象HTTP PUT
 * @CREATE Thu Jan 21 2021 下午3:12:20
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Observable } from 'rxjs';
import { HttpResponse } from '../response';

/**
 * 抽象HTTP PUT
 */
export interface HttpPut {
  /**
   * 調用HTTP PUT
   *
   * @method public
   * @param url     呼叫URL
   * @param data    附帶資料
   * @param options 查詢選項
   * @return 回傳查詢結果
   */
  put<T = any>(
    url: string,
    data?: any,
    options?: any
  ): Observable<HttpResponse<T>>;
}
