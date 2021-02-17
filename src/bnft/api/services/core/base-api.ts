/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 抽象基本API功能
 * @CREATE Thu Jan 21 2021 下午5:58:35
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Observable } from 'rxjs';
import { HttpAdapter, HttpResponse } from '../../../../http';
import { BaseModel } from '../../models';

/**
 * 抽象基本API功能
 */
export abstract class BaseApi {
  /**
   * @param http HTTP請求轉接器
   */
  constructor(protected http: HttpAdapter) {}

  /**
   * 查詢該Table資料
   *
   * @method public
   * @param filter  查詢過濾條件
   * @param options 查詢選項
   * @return 回傳該Table查詢結果
   */
  public abstract find<T>(
    filter: BaseModel.Filter,
    options?: any
  ): Observable<HttpResponse<T[]>>;
}
