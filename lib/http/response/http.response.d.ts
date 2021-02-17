/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 抽象HTTP回應
 * @CREATE Thu Jan 21 2021 下午4:30:41
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
/**
 * 抽象HTTP回應
 */
export interface HttpResponse<T = any> {
    /**
     * 自訂欄位
     */
    [property: string]: any;
    /**
     * 回傳資料
     */
    data: T;
}
