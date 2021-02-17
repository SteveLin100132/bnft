"use strict";
/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： Axios HTTP服務
 * @CREATE Thu Jan 21 2021 下午4:21:00
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosHttpService = void 0;
const axios_1 = require("axios");
const rxjs_1 = require("rxjs");
/**
 * Axios HTTP服務
 */
class AxiosHttpService {
    /**
     * @param instance Axios實例
     */
    constructor(instance = axios_1.default) {
        this.instance = instance;
    }
    /**
     * 調用HTTP GET
     *
     * @method public
     * @param url     呼叫URL
     * @param options 查詢選項
     * @return 回傳查詢結果
     */
    get(url, options) {
        return rxjs_1.from(this.instance.get(url, options));
    }
    /**
     * 調用HTTP DELETE
     *
     * @method public
     * @param url     呼叫URL
     * @param options 查詢選項
     * @return 回傳查詢結果
     */
    delete(url, options) {
        return rxjs_1.from(this.instance.delete(url, options));
    }
    /**
     * 調用HTTP HEAD
     *
     * @method public
     * @param url     呼叫URL
     * @param options 查詢選項
     * @return 回傳查詢結果
     */
    head(url, options) {
        return rxjs_1.from(this.instance.head(url, options));
    }
    /**
     * 調用HTTP POST
     *
     * @method public
     * @param url     呼叫URL
     * @param data    附帶資料
     * @param options 查詢選項
     * @return 回傳查詢結果
     */
    post(url, data, options) {
        return rxjs_1.from(this.instance.post(url, data, options));
    }
    /**
     * 調用HTTP PUT
     *
     * @method public
     * @param url     呼叫URL
     * @param data    附帶資料
     * @param options 查詢選項
     * @return 回傳查詢結果
     */
    put(url, data, options) {
        return rxjs_1.from(this.instance.put(url, data, options));
    }
    /**
     * 調用HTTP PATCH
     *
     * @method public
     * @param url     呼叫URL
     * @param data    附帶資料
     * @param options 查詢選項
     * @return 回傳查詢結果
     */
    patch(url, data, options) {
        return rxjs_1.from(this.instance.patch(url, data, options));
    }
}
exports.AxiosHttpService = AxiosHttpService;
