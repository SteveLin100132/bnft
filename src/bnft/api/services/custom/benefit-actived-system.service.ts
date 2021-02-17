/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 效益激活系統API
 * @CREATE Fri Jan 22 2021 上午8:19:12
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { from, Observable } from 'rxjs';
import { HttpAdapter, HttpResponse } from '../../../../http';
import { ApiConfig } from '../../api.config';
import { BaseModel } from '../../models';
import { BaseApi } from './../core';

/**
 * 效益激活系統API
 */
export class BenefitActivedSystemService extends BaseApi {
  /**
   * @param http HTTP請求轉接器
   */
  constructor(protected http: HttpAdapter) {
    super(http);
  }

  /**
   * 查詢該Table資料
   *
   * @method public
   * @param filter  查詢過濾條件
   * @param options 查詢選項
   * @return 回傳該Table查詢結果
   */
  public find<T>(
    filter: BaseModel.Filter = {},
    options?: any
  ): Observable<HttpResponse<T[]>> {
    const url = `${ApiConfig.path}/api/BenefitActiveSystems?filter=${JSON.stringify(
      filter
    )}`;
    return from(this.http.get<T[]>(url, options));
  }
}
