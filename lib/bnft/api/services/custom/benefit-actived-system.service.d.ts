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
import { Observable } from 'rxjs';
import { HttpAdapter, HttpResponse } from '../../../../http';
import { BaseModel } from '../../models';
import { BaseApi } from './../core';
/**
 * 效益激活系統API
 */
export declare class BenefitActivedSystemService extends BaseApi {
    protected http: HttpAdapter;
    /**
     * @param http HTTP請求轉接器
     */
    constructor(http: HttpAdapter);
    /**
     * 查詢該Table資料
     *
     * @method public
     * @param filter  查詢過濾條件
     * @param options 查詢選項
     * @return 回傳該Table查詢結果
     */
    find<T>(filter?: BaseModel.Filter, options?: any): Observable<HttpResponse<T[]>>;
}
