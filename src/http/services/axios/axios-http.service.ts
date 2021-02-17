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

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';
import { HttpAdapter } from '../../method';

/**
 * Axios HTTP服務
 */
export class AxiosHttpService implements HttpAdapter {
  /**
   * @param instance Axios實例
   */
  constructor(private instance: AxiosInstance = axios) {}

  /**
   * 調用HTTP GET
   *
   * @method public
   * @param url     呼叫URL
   * @param options 查詢選項
   * @return 回傳查詢結果
   */
  public get<T = any>(
    url: string,
    options?: AxiosRequestConfig
  ): Observable<AxiosResponse<T>> {
    return from(this.instance.get<T>(url, options));
  }

  /**
   * 調用HTTP DELETE
   *
   * @method public
   * @param url     呼叫URL
   * @param options 查詢選項
   * @return 回傳查詢結果
   */
  public delete<T = any>(
    url: string,
    options?: any
  ): Observable<AxiosResponse<T>> {
    return from(this.instance.delete<T>(url, options));
  }

  /**
   * 調用HTTP HEAD
   *
   * @method public
   * @param url     呼叫URL
   * @param options 查詢選項
   * @return 回傳查詢結果
   */
  public head<T = any>(
    url: string,
    options?: any
  ): Observable<AxiosResponse<T>> {
    return from(this.instance.head<T>(url, options));
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
  public post<T = any>(
    url: string,
    data?: any,
    options?: any
  ): Observable<AxiosResponse<T>> {
    return from(this.instance.post<T>(url, data, options));
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
  public put<T = any>(
    url: string,
    data?: any,
    options?: any
  ): Observable<AxiosResponse<T>> {
    return from(this.instance.put<T>(url, data, options));
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
  public patch<T = any>(
    url: string,
    data?: any,
    options?: any
  ): Observable<AxiosResponse<T>> {
    return from(this.instance.patch<T>(url, data, options));
  }
}
