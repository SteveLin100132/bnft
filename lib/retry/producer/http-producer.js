"use strict";
/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： HTTP拋送者
 * @CREATE Mon Feb 08 2021 上午9:54:03
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpProducer = void 0;
const lib_1 = require("wistroni40-retry/lib");
const logger_1 = require("./../../logger");
/**
 * HTTP拋送者
 */
class HttpProducer extends lib_1.ProducerAdapter {
    /**
     * @param http    HTTP請求
     * @param options 重拋配置
     */
    constructor(http, options) {
        super(http, options);
        this.http = http;
        this.options = options;
        /**
         * 日誌
         */
        this.logger = new logger_1.Log4js('system');
    }
    /**
     * 發送數據
     *
     * @method public
     * @param payload  要拋送的數據
     * @param callback 拋送後的回乎函數
     */
    async send(payload, callback) {
        try {
            const result = await this.http
                .post(payload.url, payload.data)
                .toPromise();
            this.logger.trace('send payload successfully');
            this.logger.trace(JSON.stringify(payload));
            callback(null, result);
        }
        catch (error) {
            this.logger.error('send payload failed');
            this.logger.error(error);
            callback(error, null);
        }
    }
}
exports.HttpProducer = HttpProducer;
