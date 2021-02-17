/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 拋送資料模型
 * @CREATE Mon Feb 08 2021 上午10:03:16
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
/**
 * 拋送資料模型
 */
export interface ProducePayloadModel<T> {
    /**
     * API發送位置
     */
    url: string;
    /**
     * 要拋送的資料
     */
    data: T;
}
