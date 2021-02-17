"use strict";
/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： API設定
 * @CREATE Fri Jan 22 2021 上午8:05:46
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConfig = void 0;
/**
 * API設定
 */
class ApiConfig {
    /**
     * 設定API路徑
     *
     * @method public
     * @param url API路徑
     */
    static set path(url) {
        ApiConfig._path = url.replace(/\/$/g, '');
    }
    /**
     * 取得API路徑
     *
     * @method public
     * @return 回傳API路徑
     */
    static get path() {
        return ApiConfig._path;
    }
}
exports.ApiConfig = ApiConfig;
/**
 * API路徑
 */
ApiConfig._path = 'http://127.0.0.1:3000';
