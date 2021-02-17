"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProducePayloadEntity = void 0;
/**
 * 拋送資料實體
 */
class ProducePayloadEntity {
    /**
     * @param url  API發送位置
     * @param data 要拋送的資料
     */
    constructor(url, data) {
        /**
         * API發送位置
         */
        this.url = '';
        this.url = url;
        this.data = data;
    }
}
exports.ProducePayloadEntity = ProducePayloadEntity;
