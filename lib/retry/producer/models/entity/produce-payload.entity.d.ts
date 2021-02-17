/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 拋送資料實體
 * @CREATE Mon Feb 08 2021 上午10:06:40
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
import { ProducePayloadModel } from '../core';
/**
 * 拋送資料實體
 */
export declare class ProducePayloadEntity<T> implements ProducePayloadModel<T> {
    /**
     * API發送位置
     */
    url: string;
    /**
     * 要拋送的資料
     */
    data: T;
    /**
     * @param url  API發送位置
     * @param data 要拋送的資料
     */
    constructor(url: string, data: T);
}
