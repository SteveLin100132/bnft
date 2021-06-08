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
import { Log4js } from './../../logger';
import { ProducePayloadModel } from './models';

/**
 * HTTP拋送者
 */
export class HttpProducer extends ProducerAdapter<HttpAdapter> {
  /**
   * 日誌
   */
  private readonly logger = new Log4js('system');
  /**
   * 送出數據完畢
   */
  public sendCompleted = new Subject<{ error: any; result: any }>();

  /**
   * @param http    HTTP請求
   * @param options 重拋配置
   */
  constructor(protected http: HttpAdapter, protected options?: RetryOption) {
    super(http, options);
  }

  /**
   * 發送數據
   *
   * @method public
   * @param payload  要拋送的數據
   * @param callback 拋送後的回乎函數
   */
  public async send<T>(
    payload: ProducePayloadModel<T>,
    callback: (error: any, result: any) => void,
  ): Promise<void> {
    try {
      const result = await this.http
        .post(payload.url, payload.data)
        .toPromise();
      this.logger.trace('send payload successfully');
      this.logger.trace(JSON.stringify(payload));
      this.sendCompleted.next({ error: null, result });
      callback(null, result);
    } catch (error) {
      this.logger.error('send payload failed');
      this.logger.error(error);
      this.sendCompleted.next({ error, result: null });
      callback(error, null);
    }
  }
}
