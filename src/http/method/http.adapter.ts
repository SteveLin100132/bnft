/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 抽象HTTP請求轉接器
 * @CREATE Thu Jan 21 2021 下午3:19:54
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { HttpDelete } from './http-delete';
import { HttpGet } from './http-get';
import { HttpHead } from './http-head';
import { HttpPatch } from './http-patch';
import { HttpPost } from './http-post';
import { HttpPut } from './http-put';

/**
 * 抽象HTTP請求轉接器
 */
export interface HttpAdapter
  extends HttpGet,
    HttpPost,
    HttpHead,
    HttpPut,
    HttpPatch,
    HttpDelete {}
