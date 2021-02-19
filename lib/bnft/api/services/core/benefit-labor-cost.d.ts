/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 抽象效益DL及IDL人員工時
 * @CREATE Thu Feb 18 2021 下午4:25:03
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
import { Observable } from 'rxjs';
import { BenefitLatestLaborCostResponse } from '../../models';
import { HttpResponse } from './../../../../http';
/**
 * 抽象效益DL及IDL人員工時
 */
export interface BenefitLaborCost {
    /**
     * 取得最新的IDL或ID人員工時
     *
     * @method public
     * @param site      Site
     * @param plantCode 廠別代碼
     * @param laborType 人員類別(IDL or DL)
     * @return 回傳最新的IDL或ID人員工時
     */
    getLatestCost(site: string, plantCode: string, laborType: 'idl' | 'dl'): Observable<HttpResponse<BenefitLatestLaborCostResponse>>;
}
