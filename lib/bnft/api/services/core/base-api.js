"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApi = void 0;
/**
 * 抽象基本API功能
 */
class BaseApi {
    /**
     * @param http HTTP請求轉接器
     */
    constructor(http) {
        this.http = http;
    }
}
exports.BaseApi = BaseApi;
