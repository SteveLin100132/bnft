/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 假效益計算
 * @CREATE Fri Jan 22 2021 下午1:13:27
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import {
  BenefitConfigModel,
  BenefitQueryModel,
  Bnft,
  BnftTemplate,
} from './../../../../src/bnft';

/**
 * 假效益計算
 */
export class BnftMock extends BnftTemplate {
  /**
   * 需要計算的廠別
   */
  protected enabledPlant: string[] = ['F232', 'F230'];

  /**
   * @param config 效益設定檔
   */
  constructor(public config: BenefitConfigModel) {
    super(config);
  }

  /**
   * 取得效益參數
   *
   * @method public
   * @param condition 效益查詢條件
   * @return 回傳效益參數
   */
  public getBenefitParams(condition: BenefitQueryModel): Promise<Bnft.Param[]> {
    return Promise.resolve([{ name: 'report', value: 2, type: 'VAR' }]);
  }
}
