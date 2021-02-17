/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 抽象HTTP GET
 * @CREATE Thu Jan 21 2021 下午2:02:23
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
import { Observable } from 'rxjs';
import { HttpResponse } from '../response';
/**
 * 抽象HTTP GET
 */
export interface HttpGet {
    /**
     * 調用HTTP GET
     *
     * @method public
     * @param url     呼叫URL
     * @param options 查詢選項
     * @return 回傳查詢結果
     */
    get<T = any>(url: string, options?: any): Observable<HttpResponse<T>>;
}
