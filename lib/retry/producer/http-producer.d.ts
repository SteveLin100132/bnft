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
import { Subject } from 'rxjs';
import { ProducerAdapter, RetryOption } from 'wistroni40-retry/lib';
import { HttpAdapter } from '../../http';
import { ProducePayloadModel } from './models';
/**
 * HTTP拋送者
 */
export declare class HttpProducer extends ProducerAdapter<HttpAdapter> {
    protected http: HttpAdapter;
    protected options?: RetryOption | undefined;
    /**
     * 日誌
     */
    private readonly logger;
    /**
     * 送出數據完畢
     */
    sendCompleted: Subject<{
        error: any;
        result: ProducePayloadModel<any>;
    }>;
    /**
     * @param http    HTTP請求
     * @param options 重拋配置
     */
    constructor(http: HttpAdapter, options?: RetryOption | undefined);
    /**
     * 發送數據
     *
     * @method public
     * @param payload  要拋送的數據
     * @param callback 拋送後的回乎函數
     */
    send<T>(payload: ProducePayloadModel<T>, callback: (error: any, result: any) => void): Promise<void>;
}
